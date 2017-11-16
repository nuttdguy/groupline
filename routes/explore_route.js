const express = require('express');
const router = express.Router();

// Require Sequelize model in order to use its default methods
const Activity = require('../db/models/index').Activity;
const ActivityCategory = require('../db/models/index').ActivityCategory;
const ActivityTag = require('../db/models/index').ActivityTag;
const ActivityDetail = require('../db/models/index').ActivityDetail;



router.get('/', function (req, res, next) {
  res.redirect('/explore/1')

});

/* GET home page. */
router.get('/:id', function (req, res, next) {


  Activity.findById( req.params.id, {
      include: [{
        model: ActivityCategory,
        as: 'ActivityCategories',
        where: {activity_id: req.params.id}
      },
        {
          model: ActivityTag,
          as: 'ActivityTags',
          where: {activity_id: req.params.id}
        },
        {
          model: ActivityDetail,
          as: 'ActivityDetails',
          where: {activity_id: req.params.id}
        }]
    }
  )
    .then((activities) => {
      console.log('========================');
      console.log(JSON.stringify(activities));
      res.render('explore', {
        title: 'Explore',
        activities: activities
      });
    });

});

module.exports = router;
