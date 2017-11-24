const User = require('../db/models/index').UserProfile;
const ActivityMeetLocation = require('../db/models/index').ActivityMeetLocation;
const Activity = require('../db/models/index').Activity;
const ActivityFavorite = require('../db/models/index').ProfileActivityFavorite;
const ActivityCategories = require('../db/models/index').ActivityCategory;
const ActivityCategoryActivity = require('../db/models/index').ActivityCategoryActivity;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


module.exports = (app, passport) => {
  // TODO :: (NOTE) all redirects require FULL PATH
  // TODO :: Double check all redirections lead to a valid view
  // TODO :: double every render is to a valid view

  const page_title = "user profile";

  //==================================================//
  /*                 /USER/                   */
  //==================================================//

  // GET USERS PROFILE
  app.get('/user', function (req, res, next) {
    console.log("IN USER SHOW ROUTE");
    // TEMPORARY USER -- REMOVE AFTER ROUTE IS COMPLETED

    // REMOVE THIS
    User.findById(1).then(user => {
      res.render('index-dashboard', {user: user, view: 'dashboard'});
    })


    // ENABLE THIS WHEN COMPLETE
    // if (req.user) {
    // res.render('index-dashboard', {user: req.user, view: 'dashboard' });
    // } else {
    //   res.redirect('/');
    // }

  });

  // UPDATE USER PROFILE
  app.put('/user/update', function (req, res, next) {

    let json_user = User.build(JSON.parse(req.body.user));
    User.find({where: {username: json_user.username}}).then(user => {
      user = serializeUser(json_user, user);
      User.update({
        username: user.username,
        password: user.password,
        firstName: user.firstName,
        lastName: user.lastName,
        bio: user.bio,
        isActive: true
      }, {
        where: {
          userProfileId: user.userProfileId
        },
        returning: true
      }).then((result) => {
        res.status(200).json({success: 'update successful'})
      });

    })
  });

  function serializeUser(json_user, user) {
    user.username = json_user.username;
    user.password = json_user.password;
    user.firstName = json_user.firstName;
    user.lastName = json_user.lastName;
    user.bio = json_user.bio;
    return user;
  }


  //==================================================//
  /*                 /USER/SETTING                   */
  //==================================================//

  app.get('/user/setting', function (req, res, next) {
    // TODO :: get user settings from DB
    // TODO :: determine whether to use session or token thereafter

    res.render('/user/settings', {})
  });


  //==================================================//
  /*                 /USER/ACTIVITY                   */
  //==================================================//

  // COMPLETED 11/22
  // SHOW ACTIVITIES USER HAD CREATED
  app.get('/user/activities', function (req, res, next) {

    Activity.findAll({
      include: [
        {model: ActivityFavorite, as: 'ProfileActivityFavorites', where: {userProfileId: 1}}
      ]
    }).then(activities => {
      let data = JSON.parse(JSON.stringify(activities));

      console.log(data);
      res.render('index-dashboard', {
        activitiesData: data, view: 'activities'
      })
    });
  });


  //==================================================//
  /*   /USER/ACTIVITY/NEW                   */
  //==================================================//

  // COMPLETED 11/20
  // METHOD [GET] == LOADS AVAILABLE CATEGORIES & NEW ACTIVITY FORM
  app.get('/user/activity/new', function (req, res, next) {

    ActivityCategories.findAll({
      attributes: ['activity_category_id', 'category_name']
    }).then(data => {

      let categories = JSON.parse(JSON.stringify(data));
      res.render('index-dashboard', {
        categories: categories, view: 'activities-new'
      });
    });
  });

  // TODO :: 11/23 --> REQUIRES REVIEW OF CONSTRAINT ERROR
  // METHOD [POST] == CREATE NEW ACTIVITY
  app.post('/user/activity/new', function (req, res, next) {
    console.log('POSTING ACTIVITY NEW');
    let model = new Activity(req.body);
    let userId = 1;
    let activityId = 0;
    let categoryId = req.body.category;

    // STEP 1: CREATE A NEW RECORD, IN ORDER TO GENERATE ID
    Activity.create().then(activity => {

        // STEP 2: UPDATE THE RECORD WITH FORM DATA
        let activityToUpdate = setActivityProperties(activity, model.dataValues);
        return activity.updateAttributes(activityToUpdate);

      }).then(activity => {

        // STEP 3: UPDATE THE RECORD WITH ACTIVITY ID & USER ID
        // STEP 4: CREATE A NEW RECORD, IN ORDER TO ASSOCIATE USER TO ACTIVITY
        ActivityFavorite.create().then(activityFav => {

          activityId = activity.activityId;
          let activityFavToUpdate = setActivityFavProperties(activityFav, userId, activityId);

          return activityFav.updateAttributes(activityFavToUpdate);
      }).then(activityFav => {

          // STEP 5: UPDATE THE RECORD WITH ACTIVITY ID & CATEGORY ID
          // STEP 6: CREATE A NEW RECORD, IN ORDER TO ASSOCIATE ACTIVITY TO CATEGORY
          ActivityCategoryActivity.create().then(activityCategoryRecord => {

            let categoryActivity = setActivityCatActivityProperties(activityCategoryRecord, activityId, categoryId);

            return activityCategoryRecord.updateAttributes(categoryActivity);

        }).then(activityCategoryRecord => {

            // STEP 7: UPDATE THE RECORD WITH ACTIVITY ID & LOCATION
            // STEP 8: CREATE A NEW RECORD, IN ORDER TO ASSOCIATE ACTIVITY TO LOCATION
            ActivityMeetLocation.create().then(activityLocationRecord => {

              // STEP 9: UPDATE THE RECORD WITH ACTIVITY ID & LOCATION
              // STEP 10: CREATE A NEW RECORD, IN ORDER TO ASSOCIATE ACTIVITY TO LOCATION
              let categoryLocation = setActivityLocationProperties(activityLocationRecord, activityId);
              return activityLocationRecord.updateAttributes(categoryLocation);
          }).then(result => {
            console.log(result.dataValues);

            const data = {"success": "Activity added", "view": "activities-new"};
            res.json(data);

          });

        });

      });

    }).catch(err => {
      console.log(err);
      const data = {"fail": "Server error", "view": "activities-new"};
      res.json(data);
    });
  });


  //==================================================//
  /*         /USER/ACTIVITY/:ACTID/UPDATE            */
  //==================================================//


  app.put('/user/activity/:catId/update', function (req, res, next) {
    // TODO :: update an activity created by usr

    // TODO :: redirect to reload view
    res.redirect('/user/activities')
  });


  //==================================================//
  /*          /USER/ACTIVITY/:CATID/LIKE               */
  //==================================================//

  app.post('/user/activity/:catId/like', function (req, res, next) {
    // TODO :: user should be able to like an activity


    // TODO :: redirect to page to reload view
    res.redirect('/user/activities')
  });


  //==================================================//
  /*         /USER/ACTIVITY/:CATID/FAVORITE            */
  //==================================================//

  app.post('/user/activity/:catId/favorite', function (req, res, next) {
    // TODO :: user should be able to add cat as favorite

    // TODO :: redirect to page to reload view
    res.redirect('/user/activities')
  });


  //==================================================//
  /*         /USER/ACTIVITY/:ACTID/DELETE            */
  //==================================================//


  app.delete('/user/activity/:catId/delete', function (req, res, next) {
    // TODO :: delete an activity created by usr

    // TODO :: redirect to reload view
    res.redirect('/user/activities')
  });


  //==================================================//
  /*         /USER/ACTIVITY/:ACTID/TAG           */
  //==================================================//


  app.get('/user/activity/:actId/tag', function (req, res, next) {
    // TODO :: get all tags created by usr

    // TODO :: redirect to reload view
    res.redirect('/user/activity/tags')
  });

  // TODO :: revisit other routes required for tags

  //==================================================//
  /*    /USER/ACTIVITY/:ACTID/TAG/:TAGID/DELETE    */
  //==================================================//


  app.delete('/user/activity/:actId/tag/delete', function (req, res, next) {
    // TODO :: delete an activity created by usr

    // TODO :: redirect to reload view
    res.redirect('/user/activities')
  });


  // HELPER FUNCTIONS: SET PROPERTIES

  function setActivityLocationProperties(activityLocationRecord, activityId) {
    activityLocationRecord.set('activityId', activityId);
    return activityLocationRecord.dataValues;
  }

  function setActivityCatActivityProperties(activityCategoryRecord, activityId, categoryId) {
    activityCategoryRecord.set('activityId', activityId);
    activityCategoryRecord.set('activityCategoryId', categoryId);
    return activityCategoryRecord.dataValues;
  }

  function setActivityFavProperties(activityFav, userId, activityId) {
    activityFav.set('userProfileId', userId);
    activityFav.set('activityId', activityId);
    return activityFav.dataValues;
  }

  function setActivityProperties(activity, model) {
    activity.set('title', model.title);
    activity.set('summary', model.summary);
    activity.set('detail', model.detail);
    activity.set('startDate', model.startDate);
    activity.set('endDate', model.endDate);
    activity.set('minActor', model.minActor);
    activity.set('maxActor', model.maxActor);
    activity.set('isActive', model.isActive);
    // return activity;
    return activity.dataValues;
  }


};

// module.exports = router;
