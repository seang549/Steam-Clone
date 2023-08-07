DROP TABLE IF EXISTS Awarded;
CREATE TABLE Awarded (
    id SERIAL PRIMARY KEY,
    count INT,
    review_id INT,
    award_id INT,
    FOREIGN KEY (award_id) REFERENCES Awards(id) ON DELETE CASCADE
);