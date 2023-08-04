
DROP TABLE parent;
CREATE TABLE parent(assetsTEST INT, gamesTEST INT);

CREATE OR REPLACE FUNCTION partition_function() RETURNS trigger AS
$BODY$
DECLARE
partition_id INT;
partition TEXT;
BEGIN
partition_id := NEW.gamesTEST;
partition := TG_RELNAME || '_' || partition_id;
IF NOT EXISTS(SELECT relname FROM pg_class WHERE relname=partition) THEN
RAISE NOTICE 'A partition has been created %',partition;
EXECUTE 'CREATE TABLE ' || partition || ' (check (gamesTEST = ''' || NEW.gamesTEST || ''')) INHERITS (' || TG_RELNAME || ');';
END IF;
EXECUTE 'INSERT INTO ' || partition || ' SELECT(' || TG_RELNAME || ' ' || quote_literal(NEW) || ').* RETURNING gamesTEST;';
RETURN NULL;
END;
$BODY$
LANGUAGE plpgsql VOLATILE
COST 100;


CREATE TRIGGER partition_trigger
BEFORE INSERT ON Parent
FOR EACH ROW EXECUTE PROCEDURE partition_function();

INSERT INTO parent (assetsTEST, gamesTEST) VALUES (1,1);
INSERT INTO parent (assetsTEST, gamesTEST) VALUES (1,2);
INSERT INTO parent (assetsTEST, gamesTEST) VALUES (1,3);
INSERT INTO parent (assetsTEST, gamesTEST) VALUES (2,1);
INSERT INTO parent (assetsTEST, gamesTEST) VALUES (2,2);
INSERT INTO parent (assetsTEST, gamesTEST) VALUES (2,3);
INSERT INTO parent (assetsTEST, gamesTEST) VALUES (2,4);
INSERT INTO parent (assetsTEST, gamesTEST) VALUES (3,1);
INSERT INTO parent (assetsTEST, gamesTEST) VALUES (3,2);
INSERT INTO parent (assetsTEST, gamesTEST) VALUES (3,3);
INSERT INTO parent (assetsTEST, gamesTEST) VALUES (3,4);
INSERT INTO parent (assetsTEST, gamesTEST) VALUES (5,5);
INSERT INTO parent (assetsTEST, gamesTEST) VALUES (5,1);
INSERT INTO parent (assetsTEST, gamesTEST) VALUES (6,1);
INSERT INTO parent (assetsTEST, gamesTEST) VALUES (8,1);
INSERT INTO parent (assetsTEST, gamesTEST) VALUES (17,1);
INSERT INTO parent (assetsTEST, gamesTEST) VALUES (18,1);