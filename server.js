import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pkg from "pg";

const app = express();
dotenv.config();

//new pool instance
const { Pool } = pkg;

const dbString = process.env.DATABASE_URL;

const port = process.env.PORT;

const pool = new Pool({
  connectionString: dbString,
});

//middleware
//body parser
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(express.static("dist"));

//routes
//get all
app.get("/game_info", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM game_info");
    if (result.rowCount === 0) {
      res.status(404).send("No Information Found");
    } else {
      res
        .status(200)
        .setHeader("Content-Type", "application/json")
        .json(result.rows);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/tags", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM tags");
    if (result.rowCount === 0) {
      res.status(404).send("No Information Found");
    } else {
      res
        .status(200)
        .setHeader("Content-Type", "application/json")
        .json(result.rows);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/reviews", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM reviews");
    if (result.rowCount === 0) {
      res.status(404).send("No Information Found");
    } else {
      res
        .status(200)
        .setHeader("Content-Type", "application/json")
        .json(result.rows);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/awards", async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM awards`);
    if (result.rowCount === 0) {
      res.status(404).send("No Information Found");
    } else {
      res
        .status(200)
        .setHeader("Content-Type", "application/json")
        .json(result.rows);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/helpfull", async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM helpfull`);
    if (result.rowCount === 0) {
      res.status(404).send("No Information Found");
    } else {
      res
        .status(200)
        .setHeader("Content-Type", "application/json")
        .json(result.rows);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/award_reviews", async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM award_reviews`);
    if (result.rowCount === 0) {
      res.status(404).send("No Information Found");
    } else {
      res
        .status(200)
        .setHeader("Content-Type", "application/json")
        .json(result.rows);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

//get one
app.get("/game_info/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      `SELECT * FROM game_info WHERE game_id = ${id}`
    );
    if (result.rowCount === 0) {
      res.status(404).send("No Information Found");
    } else {
      res
        .status(200)
        .setHeader("Content-Type", "application/json")
        .json(result.rows);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/tags/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(`SELECT * FROM tags WHERE tag_id = ${id}`);
    if (result.rowCount === 0) {
      res.status(404).send("No Information Found");
    } else {
      res
        .status(200)
        .setHeader("Content-Type", "application/json")
        .json(result.rows);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/reviews/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      `SELECT * FROM reviews WHERE review_id = ${id}`
    );
    if (result.rowCount === 0) {
      res.status(404).send("No Information Found");
    } else {
      res
        .status(200)
        .setHeader("Content-Type", "application/json")
        .json(result.rows);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/awards/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(`SELECT * FROM awards WHERE id = ${id}`);
    if (result.rowCount === 0) {
      res.status(404).send("No Information Found");
    } else {
      res
        .status(200)
        .setHeader("Content-Type", "application/json")
        .json(result.rows);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/helpfull/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(`SELECT * FROM helpfull WHERE id = ${id}`);
    if (result.rowCount === 0) {
      res.status(404).send("No Information Found");
    } else {
      res
        .status(200)
        .setHeader("Content-Type", "application/json")
        .json(result.rows);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/award_reviews/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      `SELECT * FROM award_reviews WHERE id = ${id}`
    );
    if (result.rowCount === 0) {
      res.status(404).send("No Information Found");
    } else {
      res
        .status(200)
        .setHeader("Content-Type", "application/json")
        .json(result.rows);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log("listening on port:", port);
});
