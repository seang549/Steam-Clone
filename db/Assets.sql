-- Game more like this ICON first, then info title image, then videos, then images
DROP TABLE IF EXISTS Assets CASCADE;
CREATE TABLE Assets (
    id SERIAL PRIMARY KEY,
    link TEXT,
    game_id INT,
    FOREIGN KEY (game_id) REFERENCES Games(id) ON DELETE CASCADE
);

CREATE OR REPLACE FUNCTION partition_Assets() RETURNS trigger AS
$BODY$
DECLARE
partition_id INT;
partition TEXT;
BEGIN
partition_id := NEW.game_id;
partition := TG_RELNAME || '_' || partition_id;
IF NOT EXISTS(SELECT relname FROM pg_class WHERE relname=partition) THEN
RAISE NOTICE 'A partition has been created %',partition;
EXECUTE 'CREATE TABLE ' || partition || ' (check (game_id = ''' || NEW.game_id || ''')) INHERITS (' || TG_RELNAME || ');';
END IF;
EXECUTE 'INSERT INTO ' || partition || ' SELECT(' || TG_RELNAME || ' ' || quote_literal(NEW) || ').* RETURNING game_id;';
RETURN NULL;
END;
$BODY$
LANGUAGE plpgsql VOLATILE
COST 100;


CREATE TRIGGER Assets_trigger
BEFORE INSERT ON Assets
FOR EACH ROW EXECUTE PROCEDURE partition_Assets();