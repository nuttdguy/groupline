const User = require('../db/models/index').UserProfile;
const ActivityMeetLocation = require('../db/models/index').ActivityMeetLocation;
const Activity = require('../db/models/index').Activity;
const ActivityTag = require('../db/models/index').ActivityTag;
const ActivityImage = require('../db/models/index').ActivityImage;
const UserAttend = require('../db/models/index').UserAttend;

const UserProfileActivity = require('../db/models/index').UserProfileActivity;
const ActivityCategory = require('../db/models/index').ActivityCategory;
const ActivityCategoryActivity = require('../db/models/index').ActivityCategoryActivity;
const UserProfileActivityAttend = require('../db/models/index').UserProfileActivityUserAttend;
const ActivityActivityTag = require('../db/models/index').ActivityActivityTag;

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
    // User.findById(1).then(user => {
    //   res.render('index-dashboard', {user: user, view: 'dashboard'});
    // })


    // ENABLE THIS WHEN COMPLETE
    if (req.user) {
      res.render('index-dashboard', {user: req.user, view: 'dashboard' });
    } else {
      res.redirect('/');
    }

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
  // SHOW ACTIVITIES USER HAD CREATED, INCLUDING THOSE ATTENDING DEFAULT
  app.get('/user/activities', function (req, res, next) {
    const userId = req.user.userProfileId;
    // const userId = 1;

    Activity.findAll({
      include: [
        {model: UserProfileActivity, as: 'UserProfileActivities', where: {userProfileId: userId}},
        {model: UserProfileActivityAttend, as: 'UserProfileActivityUserAttends', where: {userProfileId: userId}}
      ],
    }).then(activities => {
      let data = JSON.parse(JSON.stringify(activities));
      console.log(data);

      res.render('index-dashboard', {
        activitiesData: data, user: req.user, view: 'activities'
      })
    });
  });


  //==================================================//
  /*   /USER/ACTIVITY/NEW                   */
  //==================================================//

  // COMPLETED 11/20
  // METHOD [GET] == LOADS AVAILABLE CATEGORIES & NEW ACTIVITY FORM
  app.get('/user/activity/new', function (req, res, next) {

    ActivityCategory.findAll({
      attributes: ['activity_category_id', 'category_name']
    }).then(data => {

      let categories = JSON.parse(JSON.stringify(data));
      console.log(categories);
      res.render('index-dashboard', {
        categories: categories,
        user: req.user,
        view: 'activities-new'
      });
    });
  });


  // METHOD [POST] == CREATE NEW ACTIVITY
  app.post('/user/activity/new', function (req, res, next) {
    let model = new Activity(req.body);
    let userId = req.user.userProfileId;
    // let userId = 1;
    let activityId = 0;
    let userAttendId = 0;
    let categoryId = req.body.category;
    let address = req.body.address;

    Activity.create().then(activity => {
      let activityObject = activity.dataValues;
      activityId = activityObject.activityId;

      // CREATE ALL INSTANCES REQUIRED TO SATISFY CONSTRAINTS
      // STEP 1: CREATE A NEW RECORD, IN ORDER TO GENERATE ACTIVITY ID
      UserProfileActivity.create({
        userProfileId: userId,
        activityId: activityId,
      }).then(() => {

        // STEP 2: USER HAS TO ATTEND THEIR EVENT, CREATE A RECORD
        UserAttend.create({})
          .then(userAttend => {

            let userAttendObject = userAttend.dataValues;
            userAttendId = userAttendObject.userAttendId;

            // STEP 3: CREATE RECORD WITH ID'S IN ORDER TO SATISFY CONSTRAINTS
            UserProfileActivityAttend.create({
              userProfileId: userId,
              activityId: activityId,
              userAttendId: userAttendId
            }).then(() => {

              // STEP 4: CREATE RECORD WITH ID'S IN ORDER TO SATISFY CONSTRAINTS
              ActivityCategoryActivity.create({
                activityCategoryId: categoryId,
                activityId: activityId,
              }).then(() => {

                // STEP 5: CREATE RECORD WITH ID'S IN ORDER TO SATISFY CONSTRAINTS
                ActivityMeetLocation.create({
                  activityId: activityId,
                  address: address
                }).then(() => {

                })
              })
            })
          }).catch(err => {
            console.log(err);
        })
      });

      return activity;
    }).then(activity => {

      // STEP 6: SET ACTIVITY PROPERTIES
      let activityToUpdate = setActivityProperties(activity, model.dataValues);
      return activity.updateAttributes(activityToUpdate);

    }).catch(err => {
      console.log(err);
    });

    // SET 7: RETURN A JSON RESPONSE, SINCE WE ARE USING AJAX
    const data = {
      "success": "Activity added",
      "view": "activities"};

    res.json(data);

  });


  //==================================================//
  /*         /USER/ACTIVITY/:ACTID/UPDATE            */
  //==================================================//

  // IN PROGRESS :: 11/23
  // GET THE ACTIVITY TO UPDATE
  app.get('/user/activity/:catId/update', function (req, res, next) {

    Activity.findOne({
      where: { activityId: req.params.catId },
      include: [
        {model: ActivityTag, as: 'activityTags'},
        {model: ActivityImage, as: 'ActivityImages'},
        {model: ActivityMeetLocation, as: 'ActivityMeetLocations'},
        {model: ActivityCategory, as: 'ActivityCategories'}
      ],
      }).then(activity => {

        let data = JSON.parse(JSON.stringify(activity));
        console.log(data);
        return res.render('index-dashboard', {
          activity: data,
          view: 'activity-update'
        });

    }).catch(err => {
      console.log(err);
      return res.json({err: err})
    });

  });

  // COMPLETED :: 11/23
  // UPDATE THE ACTIVITY
  app.put('/user/activity/:actId/update', function (req, res, next) {
    let model = new Activity(req.body).dataValues;

    Activity.findById(req.params.actId).then(activity => {

      let activityToUpdate = setActivityProperties(activity, model);
      activity.updateAttributes(activityToUpdate).then(result => {

        let data = {
          "success": "Activity Updated",
          "view": "/user/activities"
        };
        res.json(data);

      });
    }).catch(err => {
      res.json(err);
      console.log(err);
    });

  });

  //==================================================//
  /*         /USER/ACTIVITY/:ACTID/DELETE            */
  //==================================================//


  app.delete('/user/activity/:actId/delete', function (req, res, next) {

    Activity.destroy({where: {activityId: req.params.actId}, cascade: true})
      .then(result => {
        return result;
    }).then(result => {
      let data = {
        "success": "Activity Updated",
        "view": "/user/activities"
      };
      res.json(data);
    });
  });


  //==================================================//
  /*         /USER/FAVORITE            */
  //==================================================//

  // GET ACTIVITIES USER ADDED AS FAVORITES
  app.get('/user/favorite', function (req, res, next) {
    // TODO :: VIEW FAVORITES

    Activity.findAll({
        include: {
            model: UserProfileActivity,
            where: {userProfileId: req.user.dataValues.userProfileId}
        }
    }).then((favorites) => {
        let data = JSON.parse(JSON.stringify(favorites))
        console.log(data)
        res.render('favorite-all', {view: 'favorite-all', favorites: data})
    })


  });


  // ADD AN ACTIVITY TO USER FAVORITE
  app.post('/user/favorite/:activityId', function (req, res, next) {

    console.log('============================');
    console.log('POSTING TO ACTIVITY FAVORITE\n');
    console.log('============================');

    console.log("PRE USER PROFILE ACTIVITY CREATION")
    UserProfileActivity.create({
        profileActivityFavoriteId: 0,
        activityId: req.params.activityId,
        userProfileId: req.user.dataValues.userProfileId,
        // Need looking into; does it need to be true?
        isActive: true
    }).then(() => {
        console.log("Complete!")
        res.redirect('/explore/'+req.params.activityId)
    }).catch(() => {
        console.log("ERROR!")
    })
    //Not quite sure

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

  function setActivityLocationProperties(activityLocationRecord, activityId, address) {
    activityLocationRecord.set('activityId', activityId);
    activityLocationRecord.set('address', address);
    return activityLocationRecord.dataValues;
  }

  function setActivityCatActivityProperties(activityCategoryRecord, activityId, categoryId) {
    activityCategoryRecord.set('activityId', activityId);
    activityCategoryRecord.set('activityCategoryId', categoryId);
    return activityCategoryRecord.dataValues;
  }

  function setUserActivityProperties(userActivity, userId, activityId) {
    userActivity.set('userProfileId', userId);
    userActivity.set('activityId', activityId);
    // console.log('============  ' + userActivity.dataValues);
    return userActivity.dataValues;
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
    // console.log(activity);
    // return activity;
    return activity.dataValues;
  }

  function setProfileActivityFavoriteProperties(activity, model){
      activity.set('activityId', model.activityId)
      console.log("ESDGESNGI", model.userProfileId)
      activity.set('userProfileId', model.userProfileId)
      activity.set('isActive', model.isActive)

      return activity.dataValues
  }


};

// module.exports = router;
