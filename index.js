const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const productController = require("./controllers/productController");
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
app.use(bodyParser.json());
app.use(express.urlencoded());
app.use(express.json());
app.get("/", (req, res) => {
  res.send({
    message:"Product_API's server is running"
  });
});
app.use("/api", productController);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
