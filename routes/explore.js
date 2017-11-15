const express = require('express');
const router = express.Router();

// Require Sequelize model in order to use its default methods
const ActivityCategory = require('../db/models/index').ActivityCategory;
const Activity = require('../db/models/index').Activity;
const ActivityTag = require('../db/models/index').ActivityTag;


/* GET home page. */
router.get('/:id', function (req, res, next) {

  Activity.findAll({
      include: [{
        model: ActivityCategory,
        as: 'ActivityCategories',
        where: {activity_id: req.params.id}
      },
        {
          model: ActivityTag,
          as: 'ActivityTags',
          where: {activity_id: req.params.id}
        }]
    }
  )
    .then((activity) => {
      console.log('========================');
      console.log(JSON.stringify(activity));
      res.render('explore', {title: 'Explore', activity: activity});
    });

});

module.exports = router;
