﻿-- SCRIPTS FOR CHECKING PK/PK RELATIONSHIP
SELECT * FROM public."Activities"
SELECT * FROM public."ActivityCategories"
SELECT * FROM public."ActivityTags"
SELECT * FROM public."ActivityDetails"

-- ACTIVITIES & ACTIVITYCATEGORY TABLE

SELECT a.*, b.*
FROM public."Activities" a
INNER JOIN public."ActivityCategories" b
ON a."activity_id" = b."activity_id"
WHERE b."activity_id" = 1;

-- ACTIVITIES & ACTIVITY TAGS TABLE

SELECT a.*, b.*
FROM public."Activities" a
INNER JOIN public."ActivityTags" b
ON a."activity_id" = b."activity_id"
WHERE b."activity_id" = 1;

-- ACTIVITIES & ACTIVITY DETAILS TABLE

SELECT a.*, b.*
FROM public."Activities" a
INNER JOIN public."ActivityDetails" b
ON a."activity_id" = b."activity_id"
WHERE b."activity_id" = 1;


﻿-- USER PROFILE & ACTIVITY-FAVORITE & ACTIVITY TABLE

SELECT a.user_name,
		a.first_name,
        c.activity_name,
    	d.activity_tag_name
FROM public."UserProfiles" a
INNER JOIN public."ProfileActivityFavorites" b on a."user_profile_id" = b."user_profile_id"
INNER JOIN public."Activities" c on b."activity_id" = c."activity_id"
INNER JOIN public."ActivityTags" d on c."activity_id" = d."activity_id"
WHERE a."user_profile_id" = 1 ;


