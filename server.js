const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;
const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/todo";
const apiRoutes = require("./routes/apiRoutes");

// Set up our mongoose conenction
const connection = () => {
  mongoose.connect(MONGO_URI, () => {
    console.log("connected to db!");
  });
};
connection();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`listening to http://localhost:${PORT}`);
});
