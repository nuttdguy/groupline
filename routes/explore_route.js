const express = require('express');

// Require Sequelize model in order to use its default methods
const Activity = require('../db/models/index').Activity;
const ActivityCategory = require('../db/models/index').ActivityCategory;
const ActivityTag = require('../db/models/index').ActivityTag;
const ActivityDetail = require('../db/models/index').ActivityDetail;

module.exports = (app) => {
    // Currently using as reference
  // app.get('/explore', function (req, res, next) {
  //   Activity.findAll({
  //       include: [{
  //         model: ActivityCategory,
  //         as: 'ActivityCategories'
  //       },
  //         {
  //           model: ActivityTag,
  //           as: 'ActivityTags'
  //         },
  //         {
  //           model: ActivityDetail,
  //           as: 'ActivityDetails'
  //         }]
  //     }
  //   )
  //     .then((activities) => {
  //       console.log('========================');
  //       // console.log(JSON.stringify(activities));
  //       console.log(JSON.parse(JSON.stringify(activities)));
  //       activities = JSON.parse(JSON.stringify(activities))[0];
  //       res.render('explore', {
  //         title: 'Explore',
  //         activities: activities,
  //         activityDetails: activities.ActivityDetails,
  //         user: req.user
  //       });
  //     });
  //
  // });

  app.get('/explore', function (req, res, next) {
    Activity.findAll({
        include: [{
          model: ActivityCategory,
          as: 'ActivityCategories'
        },
          {
            model: ActivityTag,
            as: 'ActivityTags'
          },
          {
            model: ActivityDetail,
            as: 'ActivityDetails'
          }]
      }
    )
      .then((activities) => {
        console.log('========================');
        // console.log(JSON.stringify(activities));
        console.log(JSON.parse(JSON.stringify(activities)));
        activities = JSON.parse(JSON.stringify(activities));
        res.render('explore-all', {
          title: 'Explore',
          activities: activities,
          activityDetails: activities.ActivityDetails,
          user: req.user
        });
      });

  });

  /* GET home page. */
  app.get('/explore/:id', function (req, res, next) {
    const categories_id = req.params.id;

    if (categories_id !== undefined) {
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
            activities: activities,
            user: req.user
          });
        });
    }

    // res.redirect('/')

  });
};


  // router.get('/category/:id', function (req, res, next) {
  //   const categories_id = req.params.id;
  //
  //   console.log(categories_id + "=====================");
  //   if (categories_id !== undefined) {
  //     Activity.findAll(
  //         {
  //         include: [{
  //           model: ActivityCategory,
  //           as: 'ActivityCategories',
  //           where: { activity_id: categories_id}
  //         },
  //           {
  //             model: ActivityTag,
  //             as: 'ActivityTags',
  //             where: {activity_id: categories_id}
  //           },
  //           {
  //             model: ActivityDetail,
  //             as: 'ActivityDetails',
  //             where: {activity_id: categories_id}
  //           }]
  //       }
  //     )
  //       .then((activities) => {
  //         console.log('========================');
  //         console.log(JSON.stringify(activities));
  //         res.render('explore', {
  //           title: 'Explore',
  //           activities: activities
  //         });
  //       });
  //   }

  // res.redirect('/')

// module.exports = router;
