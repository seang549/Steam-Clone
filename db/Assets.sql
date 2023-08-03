-- Game more like this ICON first, then info title image, then videos, then images
DROP TABLE IF EXISTS Assets;
CREATE TABLE Assets (
    id SERIAL PRIMARY KEY,
    link TEXT,
    game_id INT,
    FOREIGN KEY (game_id) REFERENCES Games(id) ON DELETE CASCADE
);

