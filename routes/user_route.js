const User = require('../db/models/index').UserProfile;
const ActivityDetail = require('../db/models/index').ActivityDetail;


module.exports = (app, passport) => {
  // TODO :: (NOTE) all redirects require FULL PATH
  // TODO :: Double check all redirections lead to a valid view
  // TODO :: double every render is to a valid view

  const page_title = "user profile";

  //==================================================//
    /*                 /USER/                   */
  //==================================================//

  // GET THE USERS PROFILE PAGE
  app.get('/user', function (req, res, next) {
    console.log("IN USER SHOW ROUTE");
    // TEMPORARY USER -- REMOVE AFTER ROUTE IS COMPLETED
    let user = new User();
    user.userProfileId = 1;
    if (req.user) {
      user = req.user;
    }
    // if (req.user) {
    res.render('index_dashboard', {user: req.user });
    // } else {
    //   res.redirect('/');
    // }

  });

  app.put('/user/update', function(req, res, next) {

    let json_user = User.build(JSON.parse(req.body.user));
    User.find({ where: { username: json_user.username}}).then(user => {
      user = serializeUser(json_user, user);
      User.update({
        username: user.username,
        password: user.password,
        firstName: user.firstName,
        lastName: user.lastName,
        bio: user.bio,
        isActive: true
      }, {where: {
        userProfileId: user.userProfileId},
        returning: true
      }).then((result) => {
        res.status(200).json({success: 'update successful'})
      });

    })
  });

  function serializeUser(json_user, user ) {
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


  // TODO :: add other routes for settings


  //==================================================//
    /*                 /USER/ACTIVITY                   */
  //==================================================//

  app.get('/user/activity', function (req, res, next) {
    // TODO :: request activities from DB
    // TODO :: request usr preferences from DB

    // TODO :: determine view to display
    // TODO :: in view, make sure delete only shows on owned activities
    // TODO :: in view, make sure update only available on owned activities


    res.render('index_dashboard', {activity: '#'})
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
    /*         /USER/ACTIVITY/:ACTID/UPDATE            */
  //==================================================//


  app.put('/user/activity/:catId/update', function (req, res, next) {
    // TODO :: update an activity created by usr

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



};

// module.exports = router;
