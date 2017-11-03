var express = require('express');
var router = express.Router();

// TODO :: (NOTE) all redirects require FULL PATH

// TODO :: Double check all redirections lead to a valid view
// TODO :: double every render is to a valid view

//==================================================//
/*                 /USR/                   */
//==================================================//

router.get('/', function(req, res, next) {
    // TODO :: determine how to extract user from DB
    // TODO :: determine whether to use session or token

    res.redirect('/usr/activity', {})
});

//==================================================//
/*                 /USR/SETTING                   */
//==================================================//

router.get('/setting', function(req, res, next) {
    // TODO :: get user settings from DB
    // TODO :: determine whether to use session or token thereafter

    res.render('/usr/settings', {})
});


// TODO :: add other routes for settings


//==================================================//
/*                 /USR/ACTIVITY                   */
//==================================================//

router.get('/usr/activity', function(req, res, next) {
    // TODO :: request activities from DB
    // TODO :: request usr preferences from DB

    // TODO :: determine view to display
    // TODO :: in view, make sure delete only shows on owned activities
    // TODO :: in view, make sure update only available on owned activities
    res.render('/usr/activities')
});


//==================================================//
/*          /USR/ACTIVITY/:CATID/LIKE               */
//==================================================//

router.post('/usr/activity/:catId/like', function(req, res, next) {
    // TODO :: user should be able to like an activity


    // TODO :: redirect to page to reload view
    res.redirect('/usr/activities')
});


//==================================================//
/*         /USR/ACTIVITY/:CATID/FAVORITE            */
//==================================================//

router.post('/usr/activity/:catId/favorite', function(req, res, next) {
    // TODO :: user should be able to add cat as favorite

    // TODO :: redirect to page to reload view
    res.redirect('/usr/activities')
});


//==================================================//
/*         /USR/ACTIVITY/:ACTID/DELETE            */
//==================================================//


router.delete('/usr/activity/:catId/delete', function(req, res, next) {
    // TODO :: delete an activity created by usr

    // TODO :: redirect to reload view
    res.redirect('/usr/activities')
});


//==================================================//
/*         /USR/ACTIVITY/:ACTID/UPDATE            */
//==================================================//


router.put('/usr/activity/:catId/update', function(req, res, next) {
    // TODO :: update an activity created by usr

    // TODO :: redirect to reload view
    res.redirect('/usr/activities')
});


//==================================================//
/*         /USR/ACTIVITY/:ACTID/TAG           */
//==================================================//


router.get('/usr/activity/:actId/tag', function(req, res, next) {
    // TODO :: get all tags created by usr

    // TODO :: redirect to reload view
    res.redirect('/usr/activity/tags')
});

// TODO :: revisit other routes required for tags

//==================================================//
/*    /USR/ACTIVITY/:ACTID/TAG/:TAGID/DELETE    */
//==================================================//


router.delete('/usr/activity/:actId/tag/delete', function(req, res, next) {
    // TODO :: delete an activity created by usr

    // TODO :: redirect to reload view
    res.redirect('/usr/activities')
});


module.exports = router;
