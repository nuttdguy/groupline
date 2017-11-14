var express = require('express');
var router = express.Router();
var models = require('../db/models')
var ActivityCategory = require('../db/models/index').ActivityCategory
var Activity = require('../db/models/index').Activity


/* GET home page. */
router.get('/:id', function(req, res, next) {
    console.log(req.params.id)
    // ActivityCategory.findById(req.params.id, { include: Activity}).then((activity) => {
    //     console.log(activity.dataValues)
    // })

    Activity.findById(req.params.id
        , {
        include: ActivityCategory
        }
        )
        .then((activity) => {
        console.log(activity.dataValues)
    })
  res.render('explore', { title: 'Explore'});
});

module.exports = router;
