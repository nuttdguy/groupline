const express = require('express');
const router = express.Router();

// Require Sequelize model in order to use its default methods
const Activity = require('../db/models/index').Activity;
const ActivityCategory = require('../db/models/index').ActivityCategory;
const ActivityTag = require('../db/models/index').ActivityTag;
const ActivityDetail = require('../db/models/index').ActivityDetail;


router.get('/', function (req, res, next) {
  res.render('explore', { title: 'Explore' } )
});

/* GET home page. */
router.get('/:id', function (req, res, next) {
  const categories_id = req.params.id;

  console.log(categories_id + "=====================");
  if (categories_id !== undefined) {
    console.log("THis is the route!!!!!!!!!");
    Activity.findById(categories_id, {
        include: [{
          model: ActivityCategory,
          as: 'ActivityCategories',
          where: {activity_id: categories_id}
        },
          {
            model: ActivityTag,
            as: 'ActivityTags',
            where: {activity_id: categories_id}
          },
          {
            model: ActivityDetail,
            as: 'ActivityDetails',
            where: {activity_id: categories_id}
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
  }

  // res.redirect('/')

});

module.exports = router;
