const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create our to do schema
const TodoSchema = new Schema({
  todo: {
    type: String,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

const TodoModel = mongoose.model("Todo", TodoSchema);

module.exports = TodoModel;
