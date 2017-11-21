const express = require('express');
const router = express.Router();


module.exports = function (app, passport) {
//      ACTIVITY ROUTES FOR GUEST USERS     //

//==================================================//
  /*                 /ACTIVITY/                   */
//==================================================//


  router.get('/activity', function (req, res, next) {
    // TODO :: get all activity posts

    res.render('/activity/index', {})
  });


//==================================================//
  /*              /ACTIVITY/::CATID                */
//==================================================//


  router.get('/activity/:catId', function (req, res, next) {
    // TODO :: get activities by category id

    // TODO :: determine view to render
    res.render('/activity', {})
  });


//==================================================//
  /*      /ACTIVITY/::CATID/DETAIL/::ACTID       */
//==================================================//


  router.get('/activity/:catId/detail/:actId', function (req, res, next) {
    // TODO :: get activities by category id and activity id

    // TODO :: determine the view to render
    res.render('/activity', {})
  });

};