
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
- activity/
- auth/
- auth/signup
- auth/login
- auth/logout

Guest + RUser:
- activity/
- activity/:catId
- activity/:catId/detail/:actId

RUser:
- usr/activity/:catId/like
- usr/activity/:catId/favorite
- usr/activity/:actId/delete
- usr/activity
- usr/activity/:actId/update
- usr/setting
- usr/activity/:actId/tag
- usr/activity/:actId/tag/:tagId/delete


MODELS:




