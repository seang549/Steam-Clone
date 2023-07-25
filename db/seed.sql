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
    user_product int,
    times_reviewed int,
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
    ('Spider','Indie Games', '2023-06-13', 'undownsidable', 'undownsidable', 'English,Simplified Chinese', `Spider is a unique puzzle game that puts players in the role of a brave spider, exploring a variety of stunning environments and overcoming challenges. Players need to use the spider's special abilities and intelligence to solve puzzles and complete the objectives of each level.
Game Features:
Rich and diverse levels: There will be multiple levels in the game, each with unique terrain, traps and puzzles, providing players with challenges and fun.
Spider Abilities: Players can use the spider's special abilities such as climbing walls, spinning silk, and jumping to explore the level`, '{MINIMUM: {OS: `windows`, Storage: `881 MB available space`}, RECOMMENDED: {Storage: `881 MB available space`}}', ARRAY ['More Like This Titles'], ARRAY ['http://4.bp.blogspot.com/-QuduMdSGyA0/UtUcqratYXI/AAAAAAAABfA/0MYqrVP0qv4/s1600/web-logo1.jpg','https://cdn.cloudflare.steamstatic.com/steam/apps/2433830/ss_d159c293408b69cc1a1365abfadf0555a5904fe5.116x65.jpg?t=1686899598','https://cdn.cloudflare.steamstatic.com/steam/apps/2433830/ss_690c723e1d044a804afe9c63869c094cb186bd6d.600x338.jpg?t=1686899598', 'https://cdn.cloudflare.steamstatic.com/steam/apps/2433830/ss_66a2c80bcd7cc0e35ccb835e025c159a95f9cb90.600x338.jpg?t=1686899598','https://cdn.cloudflare.steamstatic.com/steam/apps/2433830/ss_126e263dd9d120deca0c622df9fb4471846b6fcd.1920x1080.jpg?t=1686899598','https://cdn.cloudflare.steamstatic.com/steam/apps/2433830/ss_a15017b1c4cffa81d3636588927c5949cbfa8f07.1920x1080.jpg?t=1686899598'], '1.99');

INSERT INTO tags (tag_title, tag_link, game_id)
VALUES 
    ('Casual', 'https://store.steampowered.com/tags/en/Casual/?snr=1_5_9__410', 1);
INSERT INTO tags (tag_title, tag_link, game_id)
VALUES 
    ('Platformer', 'https://store.steampowered.com/tags/en/Platformer/?snr=1_5_9__410', 1);
INSERT INTO tags (tag_title, tag_link, game_id)
VALUES 
    ('2D Platformer', 'https://store.steampowered.com/tags/en/2D%20Platformer/?snr=1_5_9__410', 1);
INSERT INTO tags (tag_title, tag_link, game_id)
VALUES 
    ('2D', 'https://store.steampowered.com/tags/en/2D/?snr=1_5_9__410', 1);
INSERT INTO tags (tag_title, tag_link, game_id)
VALUES 
    ('Crafting', 'https://store.steampowered.com/tags/en/Crafting/?snr=1_5_9__410', 1);
INSERT INTO tags (tag_title, tag_link, game_id)
VALUES 
    ('Singleplayer', 'https://store.steampowered.com/tags/en/Singleplayer/?snr=1_5_9__410', 1);
INSERT INTO tags (tag_title, tag_link, game_id)
VALUES 
    ('Cute', 'https://store.steampowered.com/tags/en/Cute/?snr=1_5_9__410', 1);
INSERT INTO tags (tag_title, tag_link, game_id)
VALUES 
    ('Strategy', 'https://store.steampowered.com/tags/en/Strategy/?snr=1_5_9__410', 1);
INSERT INTO tags (tag_title, tag_link, game_id)
VALUES 
    ('Indie', 'https://store.steampowered.com/tags/en/Indie/?snr=1_5_9__410', 1);

INSERT INTO reviews (user_name, user_product, times_reviewed, date_posted, review_body, game_id)

VALUES
    ('Tigerclone', 48 , 10, '2023-06-26', 'WHY DOESNT THE JUMP BUTTON WORK SOMETIMES!!!!!!! I HAVE SPEND SEVERAL HOURS ON JUST THE FIRST LEVEL!!!!! (i like this game) ', 1);
INSERT INTO reviews (user_name, user_product, times_reviewed, date_posted, review_body, game_id)

VALUES
    ('gaming4', 599 , 7, '2023-07-03', 'this game is pain ', 1);
    INSERT INTO reviews (user_name, user_product, times_reviewed, date_posted, review_body, game_id)

VALUES
    ('Chonny Jash', 0 , 2, '2023-07-19', 'ive been speedrunning this in my freetime and its actually grown on me quite a bit. after playing for 17 hours and beating the game in under 10 minutes i give it a full thumbs up ', 1);
    INSERT INTO reviews (user_name, user_product, times_reviewed, date_posted, review_body, game_id)

VALUES
    ('heyhater', 0 , 2, '2023-06-22', 'this is the best game I have ever played in my entire life  ', 1);
    INSERT INTO reviews (user_name, user_product, times_reviewed, date_posted, review_body, game_id)

VALUES
    ('MaSH', 251 , 23, '2023-06-13', 'this is the worst game i have ever played in my entire life  ', 1);
    INSERT INTO reviews (user_name, user_product, times_reviewed, date_posted, review_body, game_id)

VALUES
    ('hentai', 3 , 1, '2023-06-18 ', '上一次玩到这么动人的游戏还是传说之下，特别是关卡猎鹰的剧情。期待作者未来的作品  ', 1);
    INSERT INTO reviews (user_name, user_product, times_reviewed, date_posted, review_body, game_id)

VALUES
    ('一般社员凉风青叶', 102 , 5, '2023-06-13', '好难啊，第四关真的能把钥匙从瓶子里拿出来吗？  ', 1);
    INSERT INTO reviews (user_name, user_product, times_reviewed, date_posted, review_body, game_id)

VALUES
    ('冷笑黑妖', 6546 , 2985, '2023-07-23', '画面依然极其粗糙，画风不统一，但是比上一部《躲猫猫》强了超多 ，希望作者能找个美术组队。或者多利用商用素材。
玩起来像是掘地求升，有物理引擎弹射手感。
空格键的跳跃形同虚设，大部分时间在失灵，误导性极强，像是有内部CD，并且时间超长。
另外蛛丝收线也是空格，键位冲突，怪上加怪，总感觉是自己操作失误，但是更大直觉告诉我这是BUG。
爬墙的时候键位也特别奇怪，按教程的操作都经常失灵，反向跑回去发现键位根本不听使唤，各种设定特别随性，特别欠测试。
关注我们 甄游组 第一印象 免费游戏', 1);
    INSERT INTO reviews (user_name, user_product, times_reviewed, date_posted, review_body, game_id)

VALUES
    ('ほろよい', 8 , 6, '2023-06-26', '楽しいゲームだな、よくできましたｗｗｗ', 1);