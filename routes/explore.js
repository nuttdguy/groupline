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

  Activity.findAll({
      include: [{
        model: ActivityCategory,
        as: 'ActivityCategories',
        where: { activity_id: req.params.id}} ]}
        )
        .then((activity) => {
          console.log(JSON.stringify(activity));
          res.render('explore', { title: 'Explore', activity: activity});
    });

  // Activity.findAll({
  //     include: [ActivityCategory]}
  //       )
  //       .then((activity) => {
  //         console.log(JSON.stringify(activity));
  //         res.render('explore', { title: 'Explore', });
  //   });

});

module.exports = router;
