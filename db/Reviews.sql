DROP TABLE IF EXISTS Reviews CASCADE;
CREATE TABLE Reviews(
    id SERIAL PRIMARY KEY,
    game_id INT,
    FOREIGN KEY (game_id) REFERENCES Games(id) ON DELETE CASCADE,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
    languages_id INT,
    FOREIGN KEY (languages_id) REFERENCES Languages(id) ON DELETE CASCADE,
    purchase TEXT,
    devRes BOOLEAN,
    devDateWithTime TIMESTAMP,
    conversations INT,
    posted DATE,
    yesCount INT,
    funnyCount INT,
    recomendation BOOLEAN,
    body TEXT
);