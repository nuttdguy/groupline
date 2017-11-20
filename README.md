
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
- about.pug
- auth_index.pug
- /auth/signup
- /auth/login
- /profile/dashboard.pug
- /profile/index_dashboard.pug
- explore.pug
- contact.pug
- activity-detail.pug
- error.pug
- layout.pug
- main.pug
- navbar.pug



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
- user                               (added 11/19)
- user/activity                      (added 10/31)
- user/activity/new                  (added 11/19)
- user/activity/:id/edit             (added 11/19)
- user/activity/:id/delete           (added 11/19)
- user/activity/:catId/like          (added 10/31)
- user/activity/:catId/favorite      (added 10/31)
- user/activity/:actId/delete        (added 10/31)
- user/activity/:actId/update        (added 10/31)
- user/activity/:actId/tag           (added 10/31)
- user/activity/:actId/tag/:tagId/delete     (added 10/31)

TODO -- determine view settings
- user/setting

Article about sequelize ORM
https://www.codementor.io/hari577/object-relational-mapping-in-nodejs-with-sequelize-du1088h3l


SEQUELIZE MODELS (DB):
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





