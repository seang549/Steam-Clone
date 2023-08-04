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

CREATE OR REPLACE FUNCTION Reviews_function() RETURNS trigger AS
$BODY$
DECLARE
partition_posted TEXT;
partition TEXT;
BEGIN
partition_posted := to_char(NEW.posted,'YYYY_MM_DD');
partition := TG_RELNAME || '_' || partition_posted;
IF NOT EXISTS(SELECT relname FROM pg_class WHERE relname=partition) THEN
RAISE NOTICE 'A partition has been created %',partition;
EXECUTE 'CREATE TABLE ' || partition || ' (check (posted = ''' || NEW.posted || ''')) INHERITS (' || TG_RELNAME || ');';
END IF;
EXECUTE 'INSERT INTO ' || partition || ' SELECT(' || TG_RELNAME || ' ' || quote_literal(NEW) || ').* RETURNING posted;';
RETURN NULL;
END;
$BODY$
LANGUAGE plpgsql VOLATILE
COST 100;

CREATE TRIGGER Reviews_trigger
BEFORE INSERT ON Parent
FOR EACH ROW EXECUTE PROCEDURE Reviews_function();
