const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fbSchema = new Schema({
  Email: String,
  Facebook: String,
  Instagram: String,
  Mobile: String,
  Websites: String,
  cookie: Object,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

fbSchema.index({ Facebook: 1 });
module.exports = mongoose.model("Fb", fbSchema);
