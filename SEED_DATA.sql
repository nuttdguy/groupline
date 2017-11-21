﻿-- SEED DATA FOR ACTIVITIES

INSERT INTO public."Activities"(activity_id, title, summary, start_date, end_date, min_actor, max_actor, is_active, created_at, updated_at)
VALUES (1, 'Happy hour at Jacks', 'Happy hour summary', now(), now(), 2, 4, true, now(), now());

INSERT INTO public."Activities"(activity_id, title, summary, start_date, end_date, min_actor, max_actor, is_active, created_at, updated_at)
VALUES (2, 'Mountain Climbing at Mt. Everest', 'Climbing summary', now(), now(), 2, 4, true, now(), now());

INSERT INTO public."Activities"(activity_id, title, summary, start_date, end_date, min_actor, max_actor, is_active, created_at, updated_at)
VALUES (3, 'Salsa Dancing at Samba', 'Samba summary', now(), now(), 2, 4, true, now(), now());

INSERT INTO public."Activities"(activity_id, title, summary, start_date, end_date, min_actor, max_actor, is_active, created_at, updated_at)
VALUES (4, 'VR wednesdays', 'VR summary', now(), now(), 2, 4, true, now(), now());

INSERT INTO public."Activities"(activity_id, title, summary, start_date, end_date, min_actor, max_actor, is_active, created_at, updated_at)
VALUES (5, 'Lets pair program', 'Program summary', now(), now(), 2, 4, true, now(), now());

-- SEED DATA FOR ACTIVITIES_CATEGORIES

INSERT INTO public."ActivityCategories"(activity_category_id, category_name, is_active, created_at, updated_at, activity_id)
VALUES (1, 'Bar', true, now(), now(), 1);

INSERT INTO public."ActivityCategories"(activity_category_id, category_name, is_active, created_at, updated_at, activity_id)
VALUES (2, 'Hiking', true, now(), now(), 2);

INSERT INTO public."ActivityCategories"(activity_category_id, category_name, is_active, created_at, updated_at, activity_id)
VALUES (3, 'Dancing', true, now(), now(), 3);

INSERT INTO public."ActivityCategories"(activity_category_id, category_name, is_active, created_at, updated_at, activity_id)
VALUES (4, 'Gaming', true, now(), now(), 4);

INSERT INTO public."ActivityCategories"(activity_category_id, category_name, is_active, created_at, updated_at, activity_id)
VALUES (5, 'Technology', true, now(), now(), 5);

-- SEED DATA FOR USERS_PROFILES

INSERT INTO public."UserProfiles"(user_profile_id, username, password, first_name, last_name, profile_url, bio, is_active, created_at, updated_at)
VALUES (1, 'user1@example.com', 'password', 'user1', 'last1', '', 'simple bio 1', true, now(), now());

INSERT INTO public."UserProfiles"(user_profile_id, username, password, first_name, last_name, profile_url, bio, is_active, created_at, updated_at)
VALUES (2, 'user2@example.com', 'password', 'user2', 'last2', '', 'simple bio 2', true, now(), now());

INSERT INTO public."UserProfiles"(user_profile_id, username, password, first_name, last_name, profile_url, bio, is_active, created_at, updated_at)
VALUES (3, 'user3@example.com', 'password', 'user3', 'last3', '', 'simple bio 3', true, now(), now());


-- SEED DATA FOR ACTIVITIES_TAGS

INSERT INTO public."ActivityTags"(activity_tag_id, activity_tag_name, is_active, created_at, updated_at, activity_id)
VALUES (1, 'drink', true, now(), now(), 1);

INSERT INTO public."ActivityTags"(activity_tag_id, activity_tag_name, is_active, created_at, updated_at, activity_id)
VALUES (6, 'eat', true, now(), now(), 1);

INSERT INTO public."ActivityTags"(activity_tag_id, activity_tag_name, is_active, created_at, updated_at, activity_id)
VALUES (2, 'outdoor', true, now(), now(), 2);

INSERT INTO public."ActivityTags"(activity_tag_id, activity_tag_name, is_active, created_at, updated_at, activity_id)
VALUES (3, 'fun', true, now(), now(), 3);

INSERT INTO public."ActivityTags"(activity_tag_id, activity_tag_name, is_active, created_at, updated_at, activity_id)
VALUES (4, 'game', true, now(), now(), 4);

INSERT INTO public."ActivityTags"(activity_tag_id, activity_tag_name, is_active, created_at, updated_at, activity_id)
VALUES (5, 'python', true, now(), now(), 5);

-- SEED DATA FOR MEET LOCATION TABLE

INSERT INTO public."ActivityMeetLocations"(activity_meet_location_id, latitude, longitude, address, detail, is_active, created_at, updated_at, activity_id)
VALUES (1, 0, 0, '1111 fake dr, San Francisco, Ca, 94188', 'Suite 104', true, now(), now(), 1);

INSERT INTO public."ActivityMeetLocations"(activity_meet_location_id, latitude, longitude, address, detail, is_active, created_at, updated_at, activity_id)
VALUES (2, 0, 0, '2222 fake dr, San Francisco, Ca, 94188', 'Suite 204', true, now(), now(), 1);

INSERT INTO public."ActivityMeetLocations"(activity_meet_location_id, latitude, longitude, address, detail, is_active, created_at, updated_at, activity_id)
VALUES (3, 0, 0, '3333 fake dr, San Francisco, Ca, 94188', 'Suite 304', true, now(), now(), 2);

INSERT INTO public."ActivityMeetLocations"(activity_meet_location_id, latitude, longitude, address, detail, is_active, created_at, updated_at, activity_id)
VALUES (4, 0, 0, '4444 fake dr, San Francisco, Ca, 94188', 'Suite 404', true, now(), now(), 2);

INSERT INTO public."ActivityMeetLocations"(activity_meet_location_id, latitude, longitude, address, detail, is_active, created_at, updated_at, activity_id)
VALUES (5, 0, 0, '5555 fake dr, San Francisco, Ca, 94188', 'Suite 504', true, now(), now(), 3);


-- SEED DATA FOR ACTIVITY TIME TABLE

INSERT INTO public."ActivityTimes"(activity_time_id, start_time, end_time, is_active, created_at, updated_at, activity_meet_location_id)
VALUES (1, clock_timestamp(), clock_timestamp(), true, now(), now(), 1);

INSERT INTO public."ActivityTimes"(activity_time_id, start_time, end_time, is_active, created_at, updated_at, activity_meet_location_id)
VALUES (2, clock_timestamp(), clock_timestamp(), true, now(), now(), 1);

INSERT INTO public."ActivityTimes"(activity_time_id, start_time, end_time, is_active, created_at, updated_at, activity_meet_location_id)
VALUES (3, clock_timestamp(), clock_timestamp(), true, now(), now(), 2);

INSERT INTO public."ActivityTimes"(activity_time_id, start_time, end_time, is_active, created_at, updated_at, activity_meet_location_id)
VALUES (4, clock_timestamp(), clock_timestamp(), true, now(), now(), 2);

INSERT INTO public."ActivityTimes"(activity_time_id, start_time, end_time, is_active, created_at, updated_at, activity_meet_location_id)
VALUES (5, clock_timestamp(), clock_timestamp(), true, now(), now(), 2);

-- SEED DATA FOR ACTIVITY-IMAGES

INSERT INTO public."ActivityImages"(activity_image_id, image_url, is_active, created_at, updated_at, activity_id)
VALUES (1, 'http://someurl', true, now(), now(), 1);


-- SEED DATA FOR JOIN TABLE PROFILE-ACTIVITY-FAVORITES


INSERT INTO public."ProfileActivityFavorites"(profile_activity_favorite_id, user_profile_id, activity_id, is_active, created_at, updated_at)
VALUES (1, 1, 1, true, now(), now());

INSERT INTO public."ProfileActivityFavorites"(profile_activity_favorite_id, user_profile_id, activity_id, is_active, created_at, updated_at)
VALUES (2, 1, 2, true, now(), now());

INSERT INTO public."ProfileActivityFavorites"(profile_activity_favorite_id, user_profile_id, activity_id, is_active, created_at, updated_at)
VALUES (3, 2, 3, true, now(), now());

INSERT INTO public."ProfileActivityFavorites"(profile_activity_favorite_id, user_profile_id, activity_id, is_active, created_at, updated_at)
VALUES (4, 2, 4, true, now(), now());

INSERT INTO public."ProfileActivityFavorites"(profile_activity_favorite_id, user_profile_id, activity_id, is_active, created_at, updated_at)
VALUES (5, 2, 4, true, now(), now());




