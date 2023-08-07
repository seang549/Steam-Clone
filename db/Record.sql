DROP TABLE IF EXISTS Record;
CREATE TABLE Record(
    id SERIAL PRIMARY KEY,
    game_id INT,
    FOREIGN KEY (game_id) REFERENCES Games(id) ON DELETE CASCADE,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
    recordMinutes INT
);