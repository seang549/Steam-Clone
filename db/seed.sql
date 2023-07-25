DROP TABLE IF EXISTS game_info CASCADE;
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
    more_like_this TEXT ARRAY,
    game_img TEXT ARRAY
    price VARCHAR(10)
);

CREATE TABLE tags (
    tag_id SERIAL PRIMARY KEY,
    tag_title TEXT,
    tag_link TEXT,
    game_id INT,
    FOREIGN KEY (game_id) REFERENCES game_info(game_id) ON DELETE CASCADE
);

CREATE TABLE reviews (
    review_id SERIAL PRIMARY KEY,
    user_name VARCHAR(30),
    date_posted DATE,
    review_body TEXT,
    game_id INT,
    FOREIGN KEY (game_id) REFERENCES game_info(game_id) ON DELETE CASCADE
);

INSERT INTO game_info (
    game_title, 
    game_genre, 
    game_release_date, 
    developer,
    publisher,
    languages,
    about_this_game,
    systems_requirements,
    more_like_this,
    game_img,
    price
)
VALUES
    ('Spider','Indie Games', 'Jun 13,2023', 'undownsidable', 'undownsidable', 'English,Simplified Chinese', `Spider is a unique puzzle game that puts players in the role of a brave spider, exploring a variety of stunning environments and overcoming challenges. Players need to use the spider's special abilities and intelligence to solve puzzles and complete the objectives of each level.
Game Features:
Rich and diverse levels: There will be multiple levels in the game, each with unique terrain, traps and puzzles, providing players with challenges and fun.
Spider Abilities: Players can use the spider's special abilities such as climbing walls, spinning silk, and jumping to explore the level`, '{MINIMUM: {OS: `windows`, Storage: `881 MB available space`}, RECOMMENDED: {Storage: `881 MB available space`}}', '{unique}', '{http://4.bp.blogspot.com/-QuduMdSGyA0/UtUcqratYXI/AAAAAAAABfA/0MYqrVP0qv4/s1600/web-logo1.jpg}', '1.99');

INSERT INTO tags (tag_title, tag_link, game_id)
VALUES 
    ('Horror', 'insert rick-roll here', 1);

INSERT INTO reviews (user_name, date_posted, review_body, game_id)
VALUES
    ('ItsJoever', '2023-01-23', 'kinda sucks', 1);


