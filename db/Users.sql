DROP TABLE IF EXISTS Users CASCADE;
CREATE TABLE Users(
    id SERIAL PRIMARY KEY,
    userName TEXT,
    email TEXT,
    passwd TEXT,
    icon TEXT,
    animation TEXT,
    banner TEXT,
    title TEXT,
    xp INT,
    currentStatus BOOLEAN,
    owned INT ARRAY
    );