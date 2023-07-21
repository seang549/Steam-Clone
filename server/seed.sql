DROP TABLE IF EXISTS game_info;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS reviews;
--one to many from game_info to tags
--one to many from game to reviews 

--one game can have multiple tags and reviews 

--date format is YYYY-MM-DD
CREATE TABLE game_info (
    game_id: SERIAL PRIMARY KEY,
    game_title: VARCHAR(30),
    game_genre: VARCHAR(30),
    game_release_date DATE;
    developer: TEXT,
    publisher: TEXT,
    languages: TEXT,
    about_this_game: TEXT,
    systems_requirements: TEXT,
    more_like_this: TEXT,
);

CREATE TABLE tags (
    tag_id: SERIAL PRIMARY KEY,
    tag_title: TEXT,
    tag_link: TEXT,
    game_id: INT,
    FOREIGN KEY (game_id) REFERENCES game_info(game_id) ON DELETE CASCADE,
);

CREATE TABLE reviews (
    review_id: SERIAL PRIMARY KEY,
    user_name: VARCHAR(30),
    date_posted: DATE,
    review_body: TEXT,
    game_id: INT,
    FOREIGN KEY (game_id) REFERENCES game_info(game_id) ON DELETE CASCADE,
);

INSERT INTO game_info (game_title, 
    game_genre, 
    game_release_date, 
    developer,
    publisher,
    languages,
    about_this_game,
    systems_requirements,
    more_like_this
)
VALUES

INSERT INTO tags (tag_title, tag_link, game_id)
VALUES (
    casual,
    platformer,
    2d_platformer,
    2d,
    crafting,
    single_player,
    cute,
    strategy,
    indie
)

INSERT INTO reviews (user_name, date_posted, review_body, game_id)
VALUES


