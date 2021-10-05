require("dotenv").config();
const express = require("express");

const mongoose = require("mongoose");
const app = express();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database."));

const port = process.env.PORT || 3000;

// Tell express to use json
app.use(express.json());

// Setup routes
const subscribersRouter = require("./routes/subscribers");
app.use("/subscribers", subscribersRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port} `);
});
