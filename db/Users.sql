DROP TABLE IF EXISTS Users CASCADE;
CREATE TABLE Users(
    id SERIAL PRIMARY KEY,
    screenName TEXT,
    icon TEXT,
    frame TEXT,
    banner TEXT,
    title TEXT,
    steamLevel INT,
    xp INT,
    currentStatus BOOLEAN,
    owned INT ARRAY
    );