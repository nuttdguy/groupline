const User = require('../db/models/index').UserProfile;
const ActivityMeetLocation = require('../db/models/index').ActivityMeetLocation;
const Activity = require('../db/models/index').Activity;
const ActivityTag = require('../db/models/index').ActivityTag;
const ActivityImage = require('../db/models/index').ActivityImage;
const UserProfileActivity = require('../db/models/index').UserProfileActivity;
const ActivityCategory = require('../db/models/index').ActivityCategory;
const ActivityCategoryActivity = require('../db/models/index').ActivityCategoryActivity;
const UserAttend = require('../db/models/index').UserAttend;
const UserProfileActivityAttend = require('../db/models/index').UserProfileActivityUserAttend;

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
  // SHOW ACTIVITIES USER HAD CREATED
  app.get('/user/activities', function (req, res, next) {
    const userId = req.user.userProfileId;
    // const userId = 1;

    Activity.findAll({
      include: [
        {model: UserProfileActivity, as: 'UserProfileActivities', where: {userProfileId: userId}},
        // {model: ProfileActivityAttend, as: 'UserProfileActivityUserAttends', where: {userProfileId: userId}}
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

  // TODO :: SEQUELIZE MAINTAINS OWN KEY, GET DUPLICATE KEY ERROR WHEN SEEDED
  // TODO :: Change primary key to UUID
  // METHOD [POST] == CREATE NEW ACTIVITY
  app.post('/user/activity/new', function (req, res, next) {
    let model = new Activity(req.body);
    // let userId = req.user.userProfileId;
    let userId = 1;
    let activityId = 0;
    let userAttendId = 0;
    let categoryId = req.body.category;
    let address = req.body.address;

    Activity.create().then(activity => {
      let activityObject = activity.dataValues;
      activityId = activityObject.activityId;

      UserProfileActivity.create({
        userProfileId: userId,
        activityId: activityId,
      }).then(userProfileActivity => {

        UserAttend.create({})
          .then(userAttend => {

          let userAttendObject = userAttend.dataValues;
          userAttendId = userAttendObject.userAttendId;

          UserProfileActivityAttend.create({
            userProfileId: userId,
            activityId: activityId,
            userAttendId: userAttendId
          }).then(userProfileActivityAttend => {

          })

        })
      }).catch(err => {
        console.log(err);
      })
    });

    // // STEP 1: CREATE A NEW RECORD, IN ORDER TO GENERATE ID
    // Activity.create().then(activity => {
    //     // STEP 2: UPDATE THE RECORD WITH FORM DATA
    //     let activityToUpdate = setActivityProperties(activity, model.dataValues);
    //     return activity.updateAttributes(activityToUpdate);
    //
    //   }).then(activity => {
    //     // console.log('==============  ' + userId);
    //     // STEP 3: UPDATE THE RECORD WITH ACTIVITY ID & USER ID
    //     // STEP 4: CREATE A NEW RECORD, IN ORDER TO ASSOCIATE USER TO ACTIVITY
    //     UserProfileActivity.create({
    //       userProfileId: userId,
    //       activityId: activity.activityId}).then(userActivity => {
    //
    //       activityId = activity.activityId;
    //       let userActivityToUpdate = setUserActivityProperties(userActivity, userId, activityId);
    //
    //       return userActivity.updateAttributes(userActivityToUpdate);
    //   }).then(userActivity => {
    //
    //       // STEP 5: UPDATE THE RECORD WITH ACTIVITY ID & CATEGORY ID
    //       // STEP 6: CREATE A NEW RECORD, IN ORDER TO ASSOCIATE ACTIVITY TO CATEGORY
    //       ActivityCategoryActivity.create().then(activityCategoryRecord => {
    //
    //         let categoryActivity = setActivityCatActivityProperties(activityCategoryRecord, activityId, categoryId);
    //
    //         return activityCategoryRecord.updateAttributes(categoryActivity);
    //
    //     }).then(activityCategoryRecord => {
    //
    //         // STEP 7: UPDATE THE RECORD WITH ACTIVITY ID & LOCATION
    //         // STEP 8: CREATE A NEW RECORD, IN ORDER TO ASSOCIATE ACTIVITY TO LOCATION
    //         ActivityMeetLocation.create().then(activityLocationRecord => {
    //
    //           // STEP 9: UPDATE THE RECORD WITH ACTIVITY ID & LOCATION
    //           // STEP 10: CREATE A NEW RECORD, IN ORDER TO ASSOCIATE ACTIVITY TO LOCATION
    //           // console.log(address);
    //           let categoryLocation = setActivityLocationProperties(activityLocationRecord, activityId, address);
    //           return activityLocationRecord.updateAttributes(categoryLocation);
    //       }).then(result => {
    //
    //         const data = {
    //           "success": "Activity added",
    //           "view": "activities"};
    //         res.json(data);
    //
    //       });
    //
    //     });
    //
    //   });
    //
    // }).catch(err => {
    //   console.log(err);
    //   const data = {"fail": "Server error", "view": "activities-new"};
    //   res.json(data);
    // });

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
          // {model: ActivityTag, as: 'activityTags'},
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

    res.render('favorite-all', {view: 'favorite-all'})
  });


  // ADD AN ACTIVITY TO USER FAVORITE
  app.post('/user/favorite/:activityId', function (req, res, next) {

    console.log('============================');
    console.log('POSTING TO ACTIVITY FAVORITE\n');
    console.log('============================');

    // let model = new UserProfileActivity({
    //     activityId: req.params.activityId,
    //     userProfileId: req.user.dataValues.userProfileId,
    //     // Need looking into; does it need to be true?
    //     isActive: true
    // });
    //
    // // Checking
    // console.log("\n\n", model, "\n\n\n");
    // // Using "new activity" as reference
    // UserProfileActivity.create().then((activity) =>{
    //     let userProfileActivityToUpdate = setProfileActivityFavoriteProperties(activity, model.dataValues);
    //     return activity.updateAttributes(userProfileActivityToUpdate)
    // });
    // //Not quite sure
    // res.redirect('/explore/'+req.params.activityId)
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
      activity.set('userProfileId', model.userProfileId)
      activity.set('isActive', model.isActive)
  }


};

// module.exports = router;
