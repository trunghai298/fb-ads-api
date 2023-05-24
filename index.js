// app.js
const express = require("express");
const mongoose = require("mongoose");
const bmRouter = require("./routes/Bm");
const adsRouter = require("./routes/Ads");
const fbRouter = require("./routes/Fbs");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/bm", bmRouter);
app.use("/api/ads", adsRouter);
app.use("/api/fb", fbRouter);

//configure mongoose
mongoose.connect(
  "mongodb+srv://haint180298:Haint180298@cluster0.dbwjhjg.mongodb.net/fb-data",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Start the server.
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
