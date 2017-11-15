const express = require('express');
const router = express.Router();

// Require Sequelize model in order to use its default methods
const ActivityCategory = require('../db/models/index').ActivityCategory;
const Activity = require('../db/models/index').Activity;


/* GET home page. */
router.get('/:id', function(req, res, next) {
    console.log(req.params.id);
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
