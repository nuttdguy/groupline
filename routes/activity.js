const express = require('express');
const router = express.Router();


//      ACTIVITY ROUTES FOR GUEST USERS     //

//==================================================//
/*                 /ACTIVITY/                   */
//==================================================//


router.get('/', function(req, res, next) {
    // TODO :: get all activity posts

    res.render('/activity/index', {})
});


//==================================================//
/*              /ACTIVITY/::CATID                */
//==================================================//


router.get('/:catId', function(req, res, next) {
    // TODO :: get activities by category id

    // TODO :: determine view to render
    res.render('/activity', {})
});


//==================================================//
/*      /ACTIVITY/::CATID/DETAIL/::ACTID       */
//==================================================//


router.get('/:catId/detail/:actId', function(req, res, next) {
    // TODO :: get activities by category id and activity id

    // TODO :: determine the view to render
    res.render('/activity', {})
});


module.exports = router;