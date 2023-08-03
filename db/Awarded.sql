DROP TABLE IF EXISTS Awarded;
CREATE TABLE Awarded (
    id SERIAL PRIMARY KEY,
    count INT,
    review_id INT,
    FOREIGN KEY (review_id) REFERENCES Reviews(id) ON DELETE CASCADE,
    award_id INT,
    FOREIGN KEY (award_id) REFERENCES Awards(id) ON DELETE CASCADE
);