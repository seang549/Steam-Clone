DROP TABLE IF EXISTS Auth;

CREATE TABLE Auth (
    user_id uuid PRIMARY KEY DEFAULT gen_random_uuid (),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    id SERIAL
);