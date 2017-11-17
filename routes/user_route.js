const express = require('express');
const router = express.Router();


module.exports = (app, passport) => {
  // TODO :: (NOTE) all redirects require FULL PATH
  // TODO :: Double check all redirections lead to a valid view
  // TODO :: double every render is to a valid view

  const page_title = "user profile";

  //==================================================//
    /*                 /USER/                   */
  //==================================================//

  //
  app.get('/user/show', function (req, res, next) {
    console.log("IN USER SHOW ROUTE");
    if (isLoggedIn(req, res, next)) {
      res.render('./index_user', {user: req.user})
    };
    next();
  });

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
    res.render('/user/activities')
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

  function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated()) {
      console.log("IS AUTHENTICATED");
      return true
    } else {
      // if they aren't redirect them to the home page
      res.redirect('/');
    }
  }

};

// module.exports = router;
