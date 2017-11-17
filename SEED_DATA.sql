﻿-- SEED DATA FOR ACTIVITIES

INSERT INTO public."Activities"(activity_id, activity_name, is_active, created_at, updated_at)
VALUES (1, 'Happy hour at Jacks', true, now(), now());

INSERT INTO public."Activities"(activity_id, activity_name, is_active, created_at, updated_at)
VALUES (2, 'Mountain Climbing at Mt. Everest', true, now(), now());

INSERT INTO public."Activities"(activity_id, activity_name, is_active, created_at, updated_at)
VALUES (3, 'Salsa Dancing at Samba', true, now(), now());

INSERT INTO public."Activities"(activity_id, activity_name, is_active, created_at, updated_at)
VALUES (4, 'VR wednesdays', true, now(), now());

INSERT INTO public."Activities"(activity_id, activity_name, is_active, created_at, updated_at)
VALUES (5, 'Lets pair program', true, now(), now());

-- SEED DATA FOR ACTIVITIES_CATEGORIES

INSERT INTO public."ActivityCategories"(activity_categories_id, category_name, is_active, created_at, updated_at, activity_id)
VALUES (1, 'Bar', true, now(), now(), 1);

INSERT INTO public."ActivityCategories"(activity_categories_id, category_name, is_active, created_at, updated_at, activity_id)
VALUES (2, 'Hiking', true, now(), now(), 2);

INSERT INTO public."ActivityCategories"(activity_categories_id, category_name, is_active, created_at, updated_at, activity_id)
VALUES (3, 'Dancing', true, now(), now(), 3);

INSERT INTO public."ActivityCategories"(activity_categories_id, category_name, is_active, created_at, updated_at, activity_id)
VALUES (4, 'Gaming', true, now(), now(), 4);

INSERT INTO public."ActivityCategories"(activity_categories_id, category_name, is_active, created_at, updated_at, activity_id)
VALUES (5, 'Technology', true, now(), now(), 5);

-- SEED DATA FOR USERS_PROFILES

INSERT INTO public."UserProfiles"(user_profile_id, user_name, password, first_name, last_name, bio, is_active, created_at, updated_at)
VALUES (1, 'user1@example.com', 'password', 'user1', 'last1', 'simple bio 1', true, now(), now());

INSERT INTO public."UserProfiles"(user_profile_id, user_name, password, first_name, last_name, bio, is_active, created_at, updated_at)
VALUES (2, 'user2@example.com', 'password', 'user2', 'last2', 'simple bio 2', true, now(), now());

INSERT INTO public."UserProfiles"(user_profile_id, user_name, password, first_name, last_name, bio, is_active, created_at, updated_at)
VALUES (3, 'user3@example.com', 'password', 'user3', 'last3', 'simple bio 3', true, now(), now());


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

-- SEED DATA FOR ACTIVITIES_DETAILS

INSERT INTO public."ActivityDetails"(activity_detail_id, start_date, end_date, min_actor, max_actor, created_at, updated_at, activity_id)
VALUES (1, now(), now(), 2, 4, now(), now(), 1);

INSERT INTO public."ActivityDetails"(activity_detail_id, start_date, end_date, min_actor, max_actor, created_at, updated_at, activity_id)
VALUES (2, now(), now(), 2, 4, now(), now(), 2);

INSERT INTO public."ActivityDetails"(activity_detail_id, start_date, end_date, min_actor, max_actor, created_at, updated_at, activity_id)
VALUES (3, now(), now(), 1, 8, now(), now(), 3);

INSERT INTO public."ActivityDetails"(activity_detail_id, start_date, end_date, min_actor, max_actor, created_at, updated_at, activity_id)
VALUES (4, now(), now(), 2, 12, now(), now(), 4);

INSERT INTO public."ActivityDetails"(activity_detail_id, start_date, end_date, min_actor, max_actor, created_at, updated_at, activity_id)
VALUES (5, now(), now(), 2, 6, now(), now(), 5);


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
