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



