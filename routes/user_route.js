const express = require('express');
const router = express.Router();


module.exports = function (app, passport) {
// TODO :: (NOTE) all redirects require FULL PATH

// TODO :: Double check all redirections lead to a valid view
// TODO :: double every render is to a valid view

//==================================================//
  /*                 /USER/                   */
//==================================================//


  app.get('/', function (req, res, next) {
    // TODO :: determine how to extract user from DB
    // TODO :: determine whether to use session or token


    res.redirect('/user/activity', {})
  });

//==================================================//
  /*                 /USER/SETTING                   */
//==================================================//

  app.get('/setting', function (req, res, next) {
    // TODO :: get user settings from DB
    // TODO :: determine whether to use session or token thereafter

    res.render('/user/settings', {})
  });


// TODO :: add other routes for settings


//==================================================//
  /*                 /USER/ACTIVITY                   */
//==================================================//

  app.get('/activity', function (req, res, next) {
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

  app.post('/activity/:catId/like', function (req, res, next) {
    // TODO :: user should be able to like an activity


    // TODO :: redirect to page to reload view
    res.redirect('/user/activities')
  });


//==================================================//
  /*         /USER/ACTIVITY/:CATID/FAVORITE            */
//==================================================//

  app.post('/activity/:catId/favorite', function (req, res, next) {
    // TODO :: user should be able to add cat as favorite

    // TODO :: redirect to page to reload view
    res.redirect('/user/activities')
  });


//==================================================//
  /*         /USER/ACTIVITY/:ACTID/DELETE            */
//==================================================//


  app.delete('/activity/:catId/delete', function (req, res, next) {
    // TODO :: delete an activity created by usr

    // TODO :: redirect to reload view
    res.redirect('/user/activities')
  });


//==================================================//
  /*         /USER/ACTIVITY/:ACTID/UPDATE            */
//==================================================//


  app.put('/activity/:catId/update', function (req, res, next) {
    // TODO :: update an activity created by usr

    // TODO :: redirect to reload view
    res.redirect('/user/activities')
  });


//==================================================//
  /*         /USER/ACTIVITY/:ACTID/TAG           */
//==================================================//


  app.get('/activity/:actId/tag', function (req, res, next) {
    // TODO :: get all tags created by usr

    // TODO :: redirect to reload view
    res.redirect('/user/activity/tags')
  });

// TODO :: revisit other routes required for tags

//==================================================//
  /*    /USER/ACTIVITY/:ACTID/TAG/:TAGID/DELETE    */
//==================================================//


  app.delete('/activity/:actId/tag/delete', function (req, res, next) {
    // TODO :: delete an activity created by usr

    // TODO :: redirect to reload view
    res.redirect('/user/activities')
  });

};

// module.exports = router;
