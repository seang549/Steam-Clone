DROP TABLE IF EXISTS game_info CASCADE;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS reviews;
DROP TABLE IF EXISTS helpfull;
DROP TABLE IF EXISTS award_reviews;
DROP TABLE IF EXISTS awards;
--one to many from game_info to tags
--one to many from game to reviews 

--one game can have multiple tags and reviews 

--date format is YYYY-MM-DD
CREATE TABLE game_info (
    game_id SERIAL PRIMARY KEY,
    total_reviews int,
    game_title VARCHAR(30),
    game_genre VARCHAR(30),
    game_release_date DATE,
    developer TEXT,
    publisher TEXT,
    languages TEXT,
    about_this_game TEXT,
    systems_requirements TEXT,
    more_like_this TEXT ARRAY,
    game_img TEXT ARRAY,
    price VARCHAR(30)
);

CREATE TABLE tags (
    tag_id SERIAL PRIMARY KEY,
    tag_title TEXT,
    tag_link TEXT,
    game_id INT,
    FOREIGN KEY (game_id) REFERENCES game_info(game_id) ON DELETE CASCADE
);

CREATE TABLE helpfull (
    id SERIAL,
    positive int,
    negative int,
    funny int,
    award_reviews_table int
);

CREATE TABLE awards (
    id SERIAL,
    icon text,
    animation text,
    title text,
    body  text,
    points int,
);

CREATE TABLE award_reviews (
    id serial,
    award_ids ARRAY,
    count ARRAY
);

CREATE TABLE reviews (
    review_id SERIAL PRIMARY KEY,
    owned text,
    user_icon TEXT,
    recommendation BOOLEAN,
    helpfull_table_id int,
    developer_response BOOLEAN,
    developer_date DATE,
    developer_time Time,
    conversations int,
    total_time text,
    at_review_time text,
    xp int,
    steam_level int,
    rank text,
    user_name VARCHAR(30),
    user_product int,
    times_reviewed int,
    date_posted DATE,
    review_body TEXT,
    game_id INT,
    FOREIGN KEY (game_id) REFERENCES game_info(game_id) ON DELETE CASCADE
);

INSERT INTO game_info (
    total_reviews,
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
    (9, 'Spider','Indie Games', '2023-06-13', 'undownsidable', 'undownsidable', 'English,Simplified Chinese', 'Spider is a unique puzzle game that puts players in the role of a brave spider, exploring a variety of stunning environments and overcoming challenges. Players need to use the spider''s special abilities and intelligence to solve puzzles and complete the objectives of each level.
Game Features:
Rich and diverse levels: There will be multiple levels in the game, each with unique terrain, traps and puzzles, providing players with challenges and fun.

Spider Abilities: Players can use the spider''s special abilities such as climbing walls, spinning silk, and jumping to explore the level', '{MINIMUM: {OS: ''windows'', Storage: ''881 MB available space''}, RECOMMENDED: {Storage: ''881 MB available space''}}', ARRAY ['''Bread & Fred','Stardew Valley','Terraria','MapleStory'], ARRAY ['https://cdn.akamai.steamstatic.com/steam/apps/2433830/header.jpg?t=1686899598','https://cdn.cloudflare.steamstatic.com/steam/apps/2433830/ss_d159c293408b69cc1a1365abfadf0555a5904fe5.116x65.jpg?t=1686899598','https://cdn.cloudflare.steamstatic.com/steam/apps/2433830/ss_690c723e1d044a804afe9c63869c094cb186bd6d.600x338.jpg?t=1686899598', 'https://cdn.cloudflare.steamstatic.com/steam/apps/2433830/ss_66a2c80bcd7cc0e35ccb835e025c159a95f9cb90.600x338.jpg?t=1686899598','https://cdn.cloudflare.steamstatic.com/steam/apps/2433830/ss_126e263dd9d120deca0c622df9fb4471846b6fcd.1920x1080.jpg?t=1686899598','https://cdn.cloudflare.steamstatic.com/steam/apps/2433830/ss_a15017b1c4cffa81d3636588927c5949cbfa8f07.1920x1080.jpg?t=1686899598'], '1.99');


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

INSERT INTO reviews (owned, user_icon, recommendation, helpfull_table_id, developer_response, developer_date, developer_time, conversations, total_time, at_review_time, xp, steam_level, rank, user_name, user_product, times_reviewed, date_posted, review_body, game_id)

VALUES
    ('steam', 'https://avatars.cloudflare.steamstatic.com/11d7b0dba7687a0568945b41ae500aa815858cf0.jpg', true, 1, true, '2023-06-27','06:01',3,'29.6','13.3',100,13,'Tier 10', 'Tigerclone', 48 , 10, '2023-06-26', 'WHY DOESNT THE JUMP BUTTON WORK SOMETIMES!!!!!!! I HAVE SPEND SEVERAL HOURS ON JUST THE FIRST LEVEL!!!!! (i like this game) ', 1);
INSERT INTO helpfull (positive,negative,funny,award_reviews_table)
    VALUES (5,0,2,0);
INSERT INTO reviews (owned, user_icon, recommendation, helpfull_table_id, developer_response, conversations, total_time, xp, steam_level, rank, user_name, user_product, times_reviewed, date_posted, review_body, game_id)
VALUES
    ('steam', 'https://avatars.cloudflare.steamstatic.com/e14afa34b7b288659a90a8bc82037a974c6cdd66_medium.jpg', true, 2, false, 0, '0.9', 100, 29, 'Sarge', 'gaming4', 599 , 7, '2023-07-03', 'this game is pain ', 1);
INSERT INTO helpfull (positive,negative,funny,award_reviews_table)
    VALUES (3,0,1,1);
INSERT INTO award_reviews(award_ids, count)
    VALUES([1],[1]);
INSERT INTO awards(icon,animation,title,body,points)
    VALUES('https://store.cloudflare.steamstatic.com/public/images/loyalty/reactions/still/5.png?v=5','https://store.cloudflare.steamstatic.com/public/images/loyalty/reactions/animated/5.png','Poetry', 'Such elegent prose! A literary feast.', 100);
 INSERT INTO reviews (owned, user_icon, recommendation, helpfull_table_id, developer_response, conversations, total_time, at_review_time, xp, steam_level, user_name, user_product, times_reviewed, date_posted, review_body, game_id)
VALUES
    ('steam', 'https://avatars.cloudflare.steamstatic.com/2131b88f9be3ee20b5280fd3a84a28e006b58975.jpg', true, 3, false, 0, '18.1', '17.2', 0, 9, 'Chonny Jash', 0 , 2, '2023-07-19', 'ive been speedrunning this in my freetime and its actually grown on me quite a bit. after playing for 17 hours and beating the game in under 10 minutes i give it a full thumbs up ', 1);
INSERT INTO helpfull(positive,negative,funny,award_reviews_table)
    Values(3,0,1,2);
INSERT INTO award_reviews (award_ids, count)
    VALUES ([2],[1]);
INSERT INTO awards (icon, animation, title, body, points)
    VALUES ('https://store.cloudflare.steamstatic.com/public/images/loyalty/reactions/still/19.png?v=5','https://store.cloudflare.steamstatic.com/public/images/loyalty/reactions/animated/19.png','Jester','An important part of any royal court.', 200);
INSERT INTO reviews (owned, user_icon, recommendation, helpfull_table_id, developer_response, developer_date, developer_time, conversations, total_time, at_review_time, xp, steam_level, rank, user_name, user_product, times_reviewed, date_posted, review_body, game_id)

VALUES
    ('steam', 'https://avatars.cloudflare.steamstatic.com/c60c15313cbc9187174a705a764023b581288189.jpg', true, 4, true, '2023-06-23', '10:43', 0, '47.9', '18.8' , 200, 12, 'Community Ambasador', 'heyhater', 0 , 2, '2023-06-22', 'this is the best game I have ever played in my entire life  ', 1);
INSERT INTO helpfull(positive,negative,funny,award_reviews_table)
    Values(15,0,10,3);
INSERT INTO award_reviews (award_ids, count)
    VALUES ([3],[1]);
INSERT INTO awards (icon, animation, title, body, points)
    VALUES ('https://store.cloudflare.steamstatic.com/public/images/loyalty/reactions/still/15.png?v=5','https://store.cloudflare.steamstatic.com/public/images/loyalty/reactions/animated/15.png', 'Saucy', 'Sometimes you just need to kick it up a notch', 400);

INSERT INTO reviews (owned, user_icon, recommendation, helpfull_table_id, developer_response, conversations, total_time, at_review_time, xp, steam_level, rank, user_name, user_product, times_reviewed, date_posted, review_body, game_id)
    VALUES 
        ('Product Key', 'https://avatars.cloudflare.steamstatic.com/735a7287e95f85f337f8c547903e3021038bc354_medium.jpg', true, 5, false, 0, '6.4', '0.6' , 450, 21, 'Years of Service', 'MaSH', 251 , 23, '2023-06-13', 'this is the worst game i have ever played in my entire life  ', 1);
INSERT INTO helpfull(positive,negative,funny,award_reviews_table)
    Values(23,0,21,4);
INSERT INTO award_reviews (award_ids, count)
    VALUES ([4,5],[1,1]);
INSERT INTO awards (icon, animation, title, body, points)
    VALUES ('https://store.cloudflare.steamstatic.com/public/images/loyalty/reactions/still/20.png?v=5', 'https://store.cloudflare.steamstatic.com/public/images/loyalty/reactions/animated/20.png', 'Fancy Pants', 'Nothing says fancy like a well tailored pair of pants', 400);
INSERT INTO awards (icon, animation, title, body, points)
    VALUES ( 'https://store.cloudflare.steamstatic.com/public/images/loyalty/reactions/still/18.png?v=5', 'https://store.cloudflare.steamstatic.com/public/images/loyalty/reactions/animated/18.png' , 'Wholesome', 'Like laying in the grass on a warm sunny day', 100);

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




    INSERT INTO game_info (
    total_reviews,
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
    (765, 'Bread & Fred','Action Games', '2023-05-23', 'SandCastles Studio', 'Apogee Entertainment', 'English,Spanish - Spain,Catalan,French,Italian  ', 'Grab your best bud for help in this new co-op challenge to help two adorable penguins, Bread and Fred, reach the top of the snowy summit. Time your jumps, cling to walls and swing across gaps to see how far you can make it before you tumble all the way back down the mountain. ', '{MINIMUM: {OS: ''Windows 7'', Processor: ''Dual Core 2.4 GHz'', Memory: ''2 GB RAM'', Storage: ''1500 MB available space''}, RECOMMENDED: {OS: ''Windows 7'', Processor: ''Dual Core 2.4 GHz'', Memory: ''2 GB RAM'', Storage: ''1500 MB available space''}}', ARRAY ['More Like This Titles'], ARRAY ['https://cdn.cloudflare.steamstatic.com/steam/apps/1607680/capsule_184x69.jpg?t=1689003731','https://cdn.cloudflare.steamstatic.com/steam/apps/1607680/ss_7e1f28d600cb16d3ec858b3a76678bc9adbc1703.1920x1080.jpg?t=1689003731','https://cdn.cloudflare.steamstatic.com/steam/apps/1607680/ss_3ee71d1a5671dec4b2516e5803f44aa31798ec86.1920x1080.jpg?t=1689003731','https://cdn.cloudflare.steamstatic.com/steam/apps/1607680/ss_409f4c593c89933bce474d0697952d5d1a50f69d.1920x1080.jpg?t=1689003731','https://cdn.cloudflare.steamstatic.com/steam/apps/1607680/ss_0d68f7d9555858d657f716d2f2933603210c6125.1920x1080.jpg?t=1689003731','https://cdn.cloudflare.steamstatic.com/steam/apps/1607680/ss_64aedde0390fb8080d7b8932bf1e174de96b5d13.1920x1080.jpg?t=1689003731','https://cdn.cloudflare.steamstatic.com/steam/apps/1607680/ss_d28991fcc0cad7ba03b034410040025dec0a1c8f.1920x1080.jpg?t=1689003731','https://cdn.cloudflare.steamstatic.com/steam/apps/1607680/ss_eb02a5f9ac463c9a57fe074db2475388b94300a9.1920x1080.jpg?t=1689003731','https://cdn.cloudflare.steamstatic.com/steam/apps/1607680/ss_d216ea9b7e65911a2bc3d4b14ed7b52d716ea6d1.1920x1080.jpg?t=1689003731','https://cdn.cloudflare.steamstatic.com/steam/apps/1607680/ss_3bb49c5df52c537b9065a297ee0af5364db3ca39.1920x1080.jpg?t=1689003731'], '14.99');
    INSERT INTO tags (tag_title, tag_link, game_id)
VALUES 
    ('Co-op', 'https://store.steampowered.com/tags/en/Co-op/?snr=1_5_9__409', 2);
        INSERT INTO tags (tag_title, tag_link, game_id)
VALUES 
    ('Local Co-op', 'https://store.steampowered.com/tags/en/Local%20Co-Op/?snr=1_5_9__409', 2);
        INSERT INTO tags (tag_title, tag_link, game_id)
VALUES 
    ('Cute', 'https://store.steampowered.com/tags/en/Cute/?snr=1_5_9__409', 2);
        INSERT INTO tags (tag_title, tag_link, game_id)
VALUES 
    ('Pixel Graphics', 'https://store.steampowered.com/tags/en/Pixel%20Graphics/?snr=1_5_9__409', 2);
        INSERT INTO tags (tag_title, tag_link, game_id)
VALUES 
    ('2D', 'https://store.steampowered.com/tags/en/2D/?snr=1_5_9__409', 2);
    INSERT INTO game_info (
    total_reviews,
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
    (494698, 'Stardew Valley','Indie Games', '2016-02-26', 'ConcernedApe', 'ConcernedApe', 'English,German,Spanish - Spain,Japanese,Portuguese - Brazil  ', 'You''ve inherited your grandfather''s old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? ', '{MINIMUM:{OS: ''Windows Vista or greater'', Processor: ''2 GHz'', Memory: ''2 GB RAM'',Graphics: ''256mb video memory,shader model 3.0+'', DirectX: ''Version 10'', Storage: ''500 MB available space''} , RECOMMENDED: {}}', ARRAY ['More Like This Titles'], ARRAY ['https://cdn.cloudflare.steamstatic.com/steam/apps/413150/capsule_184x69.jpg?t=1666917466', 'https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_b887651a93b0525739049eb4194f633de2df75be.1920x1080.jpg?t=1666917466','https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_9ac899fe2cda15d48b0549bba77ef8c4a090a71c.1920x1080.jpg?t=1666917466','https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_4fa0866709ede3753fdf2745349b528d5e8c4054.1920x1080.jpg?t=1666917466','https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_d836f0a5b0447fb6a2bdb0a6ac5f954949d3c41e.1920x1080.jpg?t=1666917466','https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_10628b4a811c0a925a1433d4323f78c7017dbbe4.1920x1080.jpg?t=1666917466','https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_6422d297347258086b389e3d5d9c0e0c698312e4.1920x1080.jpg?t=1666917466','https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_a3ddf22cda3bd722df77dbdd58dbec393906b654.1920x1080.jpg?t=1666917466','https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_30aeedc47e731232ade368831a598d6545346f70.1920x1080.jpg?t=1666917466','https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_64d942a86eb527ac817f30cc04406796860a6fc1.1920x1080.jpg?t=1666917466','https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_37f15ea893ec1fa7c9e73106f512e98161bac61b.1920x1080.jpg?t=1666917466','https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_5e327e4cfc49d8137f8014e728eae3c0e6be2dca.1920x1080.jpg?t=1666917466','https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_980472fb4f4860639155880938b6ec292a0648c4.1920x1080.jpg?t=1666917466','https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_f79d2066dfaf32bbe87868d36db4845f771eddbd.1920x1080.jpg?t=1666917466','https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_4ff3fe6e9555052aaa076866407b0ba68fe73132.1920x1080.jpg?t=1666917466','https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_dee23745da417d2ceb0b16d9238bddbf5e227138.1920x1080.jpg?t=1666917466','https://cdn.cloudflare.steamstatic.com/steam/apps/413150/ss_f6f4c727570d753b2b5d8da6af4e0c38fe489059.1920x1080.jpg?t=1666917466'], '14.99');
   INSERT INTO tags (tag_title, tag_link, game_id)
VALUES 
    ('Farming Sim', 'https://store.steampowered.com/tags/en/Farming%20Sim/?snr=1_5_9__409', 3);
       INSERT INTO tags (tag_title, tag_link, game_id)
VALUES 
    ('Life Sim', 'https://store.steampowered.com/tags/en/Life%20Sim/?snr=1_5_9__409', 3);
       INSERT INTO tags (tag_title, tag_link, game_id)
VALUES 
    ('Pixel Graphics', 'https://store.steampowered.com/tags/en/Pixel%20Graphics/?snr=1_5_9__409', 3);
       INSERT INTO tags (tag_title, tag_link, game_id)
VALUES 
    ('Multiplayer', 'https://store.steampowered.com/tags/en/Multiplayer/?snr=1_5_9__409', 3);
    
    INSERT INTO game_info (
    total_reviews,
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
    (926533, 'Terraria','Indie Games', '2011-05-16', 'Re-Logic', 'Re-Logic', 'English,French,Italian,German,Spanish - Spain ', 'Dig, fight, explore, build! Nothing is impossible in this action-packed adventure game. Four Pack also available!  ', '{MINIMUM:{OS: ''Windows Xp, Vista, 7, 8/8.1, 10'', Processor: ''2.0 GHz'', Memory: ''2.5GB'',"Hard Disk Space": ''200MB'', Video Card: ''128mb Video Memory, capable of Shader Model 2.0+'', DirectX®: ''9.0c or Greater''} , RECOMMENDED: {OS: ''Windows 7, 8/8.1, 10'', Processor: ''3.0 GHz'', Memory: ''4GB'',"Hard Disk Space": ''200MB'', Video Card: ''256mb Video Memory, capable of Shader Model 2.0+'', DirectX®: ''9.0c or Greater''}}', ARRAY ['More Like This Titles'], ARRAY ['https://cdn.cloudflare.steamstatic.com/steam/apps/105600/capsule_184x69.jpg?t=1666290860','https://cdn.cloudflare.steamstatic.com/steam/apps/105600/ss_8c03886f214d2108cafca13845533eaa3d87d83f.1920x1080.jpg?t=1666290860','https://cdn.cloudflare.steamstatic.com/steam/apps/105600/ss_ae168a00ab08104ba266dc30232654d4b3c919e5.1920x1080.jpg?t=1666290860','https://cdn.cloudflare.steamstatic.com/steam/apps/105600/ss_9edd98caaf9357c2f40758f354475a56e356e8b0.1920x1080.jpg?t=1666290860','https://cdn.cloudflare.steamstatic.com/steam/apps/105600/ss_75ea9a7e39eb34b40efa1e6dfd2536098dc4734b.1920x1080.jpg?t=1666290860','https://cdn.cloudflare.steamstatic.com/steam/apps/105600/ss_782374517c1792debd74d24856203b876eba3a5d.1920x1080.jpg?t=1666290860','https://cdn.cloudflare.steamstatic.com/steam/apps/105600/ss_04dd9f0a5773b686a452ba480b951f83b3ed5061.1920x1080.jpg?t=1666290860','https://cdn.cloudflare.steamstatic.com/steam/apps/105600/ss_26c4a091c482be28efe1ecf4dfb498273e5a9107.1920x1080.jpg?t=1666290860','https://cdn.cloudflare.steamstatic.com/steam/apps/105600/ss_830aa37570410b80947636785ff62096c0bf276f.1920x1080.jpg?t=1666290860','https://cdn.cloudflare.steamstatic.com/steam/apps/105600/ss_0d805c81ef85dfd2a7a8b25da96f8066017fb3b3.1920x1080.jpg?t=1666290860','https://cdn.cloudflare.steamstatic.com/steam/apps/105600/ss_b28125b8b8ccacbbb38a3ab4ceaf406ec94d98a4.1920x1080.jpg?t=1666290860','https://cdn.cloudflare.steamstatic.com/steam/apps/105600/ss_900453507c3eb3df55175fb1362869cc75203594.1920x1080.jpg?t=1666290860','https://cdn.cloudflare.steamstatic.com/steam/apps/105600/ss_a1dbbda90ea1669da35cf277e65b5191565bcb12.1920x1080.jpg?t=1666290860','https://cdn.cloudflare.steamstatic.com/steam/apps/105600/ss_a34d1ebdc99634e012ea19759c12822802164b0e.1920x1080.jpg?t=1666290860','https://cdn.cloudflare.steamstatic.com/steam/apps/105600/ss_6f57075d0d8f9d2fd963b74f9a4526bbf91aab10.1920x1080.jpg?t=1666290860','https://cdn.cloudflare.steamstatic.com/steam/apps/105600/ss_ab3143003094dec454c5a76cc7d7948f17ca7517.1920x1080.jpg?t=1666290860','https://cdn.cloudflare.steamstatic.com/steam/apps/105600/ss_1a091473c0b53e98d7a0708dd3ec0978dd56ba45.1920x1080.jpg?t=1666290860','https://cdn.cloudflare.steamstatic.com/steam/apps/105600/ss_a81bfb762197b0aafc207274a708d79e7c39e45f.1920x1080.jpg?t=1666290860','https://cdn.cloudflare.steamstatic.com/steam/apps/105600/ss_fefd40cad50a10c09f928f9dc3f9017f8fe50213.1920x1080.jpg?t=1666290860','https://cdn.cloudflare.steamstatic.com/steam/apps/105600/ss_fd3a47380882311f6ff80cb2d4491d1de4af9e8b.1920x1080.jpg?t=1666290860'], '9.99');
    INSERT INTO tags (tag_title, tag_link, game_id)
VALUES 
    ('Open World Survival Craft', 'https://store.steampowered.com/tags/en/Open%20World%20Survival%20Craft/?snr=1_5_9__409', 4);
    INSERT INTO tags (tag_title, tag_link, game_id)
VALUES 
    ('Sandbox', 'https://store.steampowered.com/tags/en/Sandbox/?snr=1_5_9__409', 4);
    INSERT INTO tags (tag_title, tag_link, game_id)
VALUES 
    ('Survival', 'https://store.steampowered.com/tags/en/Survival/?snr=1_5_9__409', 4);
    INSERT INTO tags (tag_title, tag_link, game_id)
VALUES 
    ('2D', 'https://store.steampowered.com/tags/en/2D/?snr=1_5_9__409', 4);
   
   
    INSERT INTO game_info (
    total_reviews,
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
    (10764, 'MapleStory','Free to Play Games', '2012-08-09', 'Nexon', 'Nexon America Inc.', 'English', 'Join over 260 million players worldwide in MapleStory, the world''s biggest 2D MMORPG adventure! Play now for free. ', '{MINIMUM:{OS: ''Windows 8.1 (64 bit)'', Processor: ''Intel Core 2 Duo 3.0 Ghz / AMD Athlon 64 x2 3.0Ghz'', Memory: ''4 GB RAM'',Graphics: ''GeForce 9600 GT / ATI Raedon HD 5670'', "Hard Drive": ''50 GB available hard disk space'',  DirectX®: ''Version 9.0c'', Network: ''Broadband Internet Connection''} , RECOMMENDED: {OS: ''Windows 10 (64 bit) or above'', Processor: ''Intel Core i3 3.0 Ghz / AMD Ryzen 3 3.5 Ghz or above'', Memory: ''8 GB RAM or more'',Graphics: ''Nvidia GTX 1050 / AMD RX 570 or above'', "Hard Drive": ''50 GB or more SSD space'',  DirectX®: ''Version 9.0c or higher'', Network: ''Fibre Internet Connection''}}', ARRAY ['More Like This Titles'], ARRAY ['https://cdn.cloudflare.steamstatic.com/steam/apps/216150/capsule_184x69_alt_assets_0.jpg?t=1689720807','https://cdn.cloudflare.steamstatic.com/steam/apps/216150/ss_8ca529a3b9117c16d73e0822665cfde7a69323b1.1920x1080.jpg?t=1689720807','https://cdn.cloudflare.steamstatic.com/steam/apps/216150/ss_7829092d651be02d2c72918034fb3b6cb9177af5.1920x1080.jpg?t=1689720807','https://cdn.cloudflare.steamstatic.com/steam/apps/216150/ss_4adf5da9b00bd72203e19f64704b62d92f49169f.1920x1080.jpg?t=1689720807','https://cdn.cloudflare.steamstatic.com/steam/apps/216150/ss_9f5612c55eba862a67376c450cc777522e7afcb3.1920x1080.jpg?t=1689720807','https://cdn.cloudflare.steamstatic.com/steam/apps/216150/ss_032dfe5c2c1fe4ecb25095be229fb0a88ba87c6d.1920x1080.jpg?t=1689720807','https://cdn.cloudflare.steamstatic.com/steam/apps/216150/ss_3215508643b951bfc9bb5f714267e3153b45374c.1920x1080.jpg?t=1689720807','https://cdn.cloudflare.steamstatic.com/steam/apps/216150/ss_b7b86ef42a2dee36e66ae121d31d72c3087eda32.1920x1080.jpg?t=1689720807','https://cdn.cloudflare.steamstatic.com/steam/apps/216150/ss_b7b86ef42a2dee36e66ae121d31d72c3087eda32.1920x1080.jpg?t=1689720807','https://cdn.cloudflare.steamstatic.com/steam/apps/216150/ss_36e29dc2f15bcb9fa53fca256a00c5e06ffaf857.1920x1080.jpg?t=1689720807','https://cdn.cloudflare.steamstatic.com/steam/apps/216150/ss_72ab47cbf1a8b968f7607aa607874488ea9e5c0c.1920x1080.jpg?t=1689720807','https://cdn.cloudflare.steamstatic.com/steam/apps/216150/ss_8afc04b937d65c6bb44a85b749c51b3c2e0a17ac.1920x1080.jpg?t=1689720807','https://cdn.cloudflare.steamstatic.com/steam/apps/216150/ss_a1fc8b577565434e221b187de1cb917f62b0eec1.1920x1080.jpg?t=1689720807','https://cdn.cloudflare.steamstatic.com/steam/apps/216150/ss_a064c23b049b5313341cb88e54daca3ff3c328c6.1920x1080.jpg?t=1689720807','https://cdn.cloudflare.steamstatic.com/steam/apps/216150/ss_822551bed863807be278991bec65f5a1c06840d7.1920x1080.jpg?t=1689720807'], 'Free to Play');
        INSERT INTO tags (tag_title, tag_link, game_id)
VALUES 
    ('MMORPG', 'https://store.steampowered.com/tags/en/MMORPG/?snr=1_5_9__409', 5);
    INSERT INTO tags (tag_title, tag_link, game_id)
VALUES 
    ('Charecter Customization', 'https://store.steampowered.com/tags/en/Character%20Customization/?snr=1_5_9__409', 5);
    INSERT INTO tags (tag_title, tag_link, game_id)
VALUES 
    ('Loot', 'https://store.steampowered.com/tags/en/Loot/?snr=1_5_9__409', 5);
    INSERT INTO tags (tag_title, tag_link, game_id)
VALUES 
    ('PvE', 'https://store.steampowered.com/tags/en/PvE/?snr=1_5_9__409', 5);