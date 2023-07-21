DROP TABLE IF EXISTS game_info;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS reviews;
--one to many from game_info to tags
--one to many from game to reviews 

--one game can have multiple tags and reviews 

--date format is YYYY-MM-DD
CREATE TABLE game_info (
    game_id SERIAL PRIMARY KEY,
    game_title VARCHAR(30),
    game_genre VARCHAR(30),
    game_release_date DATE,
    developer TEXT,
    publisher TEXT,
    languages TEXT,
    about_this_game TEXT,
    systems_requirements TEXT,
    more_like_this TEXT,
    picture TEXT,
);

CREATE TABLE tags (
    tag_id SERIAL PRIMARY KEY,
    tag_title TEXT,
    tag_link TEXT,
    game_id INT,
    FOREIGN KEY (game_id) REFERENCES game_info(game_id) ON DELETE CASCADE,
);

CREATE TABLE reviews (
    review_id SERIAL PRIMARY KEY,
    user_name VARCHAR(30),
    date_posted DATE,
    review_body TEXT,
    game_id INT,
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
    more_like_this, 
    picture
)
VALUES 
('Spider', 'animated', '2023-01-23', 'idk', 'idk2', 'english', 'it is fun', 'OS', 'insert other games', 'hello');

INSERT INTO tags (tag_title, tag_link, game_id)
VALUES (
    ("casual", 'i am link', 2),
    (platformer, 'i am link', 7),
    (2d_platformer, 'i am link', 9),
    (2d, 'i am link', 1),
    (crafting, 'i am link', 6),
    (single_player, 'i am link', 3),
    (cute, 'i am link', 4),
    (strategy, 'i am link', 5),
    (indie, 'i am link', 2),
);

INSERT INTO reviews (user_name, date_posted, review_body, game_id)
VALUES
('yasmin', '2023-07-16', 'eh youre better off trying something else', 2);

