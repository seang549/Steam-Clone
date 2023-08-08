DROP TABLE IF EXISTS Awards CASCADE;
CREATE TABLE Awards (
    id SERIAL PRIMARY KEY,
    icon TEXT,
    animation TEXT,
    title TEXT,
    body TEXT,
    points INT
);
