
CREATE TABLE parent(review_id INT, date DATE);

Next we need to create a function that will automatically create our partitions with CREATE FUNCTION:

CREATE OR REPLACE FUNCTION partition_function() RETURNS trigger AS
$BODY$
DECLARE
partition_date TEXT;
partition TEXT;
BEGIN
partition_date := to_char(NEW.date,'YYYY_MM_DD');
partition := TG_RELNAME || '_' || partition_date;
IF NOT EXISTS(SELECT relname FROM pg_class WHERE relname=partition) THEN
RAISE NOTICE 'A partition has been created %',partition;
EXECUTE 'CREATE TABLE ' || partition || ' (check (date = ''' || NEW.date || ''')) INHERITS (' || TG_RELNAME || ');';
END IF;
EXECUTE 'INSERT INTO ' || partition || ' SELECT(' || TG_RELNAME || ' ' || quote_literal(NEW) || ').* RETURNING review_id;';
RETURN NULL;
END;
$BODY$
LANGUAGE plpgsql VOLATILE
COST 100;


Finally we need to create a trigger that will run the function each time an insert action is executed on the table.


CREATE TRIGGER partition_trigger
BEFORE INSERT ON Parent
FOR EACH ROW EXECUTE PROCEDURE partition_function();
