DROP TABLE IF EXISTS Games CASCADE;
CREATE TABLE Games (

    id SERIAL PRIMARY KEY,
    systems_requirements TEXT,
    title TEXT,
    genre TEXT,
    release DATE,
    developer TEXT,
    publisher TEXT,
    about TEXT, 
    price DECIMAL,
    languages_id INT ARRAY,
    moreLikeThis_id INT ARRAY,
    tag_id INT ARRAY
);