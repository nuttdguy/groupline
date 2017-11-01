
##  Groupy

An application connecting people interested in doing activities together.

#### Class Diagram (To add modify, follow link)
- https://www.lucidchart.com/invitations/accept/fd96b7de-7610-4a76-987a-f046406a8b04

#### Page Flow (add and edit, follow link)
- https://www.lucidchart.com/invitations/accept/14127557-972c-4836-92d9-ae1c1a18ff0b

#### _groupline.docx (documentation for app)
- general specification for application

#### TASKS

VIEWS:
- about.hbs
- auth.hbs
- explore.hbs
- contact.hbs
- activity-detail.hbs


ROUTES:

Guest (Only):
- auth/             (added 10/31)
- auth/signup       (added 10/31)
- auth/login        (added 10/31)
- auth/logout       (added 10/31)

Guest + RUser:
- activity/         (added 10/31)
- activity/:catId   (added 10/31)
- activity/:catId/detail/:actId     (added 10/31)

RUser:
- usr/activity                      (added 10/31)
- usr/activity/:catId/like          (added 10/31)
- usr/activity/:catId/favorite      (added 10/31)
- usr/activity/:actId/delete        (added 10/31)
- usr/activity/:actId/update        (added 10/31)
- usr/activity/:actId/tag           (added 10/31)
- usr/activity/:actId/tag/:tagId/delete     (added 10/31)

TODO -- determine view settings
- usr/setting

Article about sequelize ORM
https://www.codementor.io/hari577/object-relational-mapping-in-nodejs-with-sequelize-du1088h3l


DB MODELS:
- Activity 
- ActivityCategory
- ActivityTag
- ActivityDetail

- User
- UserFavorite
- UserProfile
- UserReputation
- UserReasonCode
- UserActivity





