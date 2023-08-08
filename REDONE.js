import router from "./authorization/routes/jwtAuth.js";
import * as dotenv from "dotenv";
import express from "express";
import pool from "./db/db.js";
import cors from "cors";
dotenv.config();

const app = express();

const port = process.env.PORT;

//middleware
//body parser
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(express.static("dist"));

//routes
//authentification
app.use("/api/auth", router);

app.get("/test", (req, res) => {
	res.status(200).send("HELLO WORLD");
});
//get all
app.get("/games", async (req, res) => {
	try {
		const result = await pool.query("SELECT * FROM Games");
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
app.get("/awarded", async (req, res) => {
	try {
		const result = await pool.query("SELECT * FROM awarded");
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
		const result = await pool.query("SELECT * FROM awards");
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
app.get("/languages", async (req, res) => {
	try {
		const result = await pool.query("SELECT * FROM languages");
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
app.get("/record", async (req, res) => {
	try {
		const result = await pool.query("SELECT * FROM record");
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
app.get("/users", async (req, res) => {
	try {
		const result = await pool.query("SELECT * FROM users");
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
//depreciated use get all from partition
app.get("/assets", async (req, res) => {
	try {
		const result = await pool.query("SELECT * FROM assets");
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

// get all from partition
app.get("/assets/:game_id", async (req, res) => {
	try {
		const result = await pool.query(
			`SELECT * FROM assets_${req.params.game_id}`
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
app.get("/reviews/:date", async (req, res) => {
	try {
		const result = await pool.query(`SELECT * FROM reviews_${req.params.date}`);
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

// GET ONE
app.get("/games/:id", async (req, res) => {
	try {
		const result = await pool.query("SELECT * FROM Games WHERE id = $1", [req.params.id]);
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
app.get("/awarded/:id", async (req, res) => {
	try {
		const result = await pool.query("SELECT * FROM awarded WHERE id = $1", [req.params.id]);
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
	try {
		const result = await pool.query("SELECT * FROM awards WHERE id = $1", [req.params.id]);
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
app.get("/languages/:id", async (req, res) => {
	try {
		const result = await pool.query("SELECT * FROM languages WHERE id = $1", [req.params.id]);
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
app.get("/record/:id", async (req, res) => {
	try {
		const result = await pool.query("SELECT * FROM record WHERE id = $1", [req.params.id]);
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
	try {
		const result = await pool.query("SELECT * FROM tags WHERE id = $1", [req.params.id]);
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
app.get("/users/:id", async (req, res) => {
	try {
		const result = await pool.query("SELECT * FROM users WHERE id = $1", [req.params.id]);
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
app.get("/assets/:id", async (req, res) => {
	try {
		const result = await pool.query("SELECT * FROM assets WHERE id = $1", [req.params.id]);
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
	try {
		const result = await pool.query("SELECT * FROM reviews WHERE id = $1", [req.params.id]);
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

//joined
app.get("/reviewsWithUser", async (req, res) => {
	try {
		const result = await pool.query("SELECT reviews.* , users.* FROM reviews INNER JOIN users ON reviews.user_id=users.id");
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

app.get("/reviewsWithData", async (req, res) => {
	try {
		const result = await pool.query("SELECT * FROM reviews INNER JOIN users ON reviews.user_id=users.id INNER JOIN awarded ON reviews.id=awarded.review_id INNER JOIN record ON reviews.user_id=record.user_id");
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
