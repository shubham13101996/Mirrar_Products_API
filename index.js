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

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connnected");
    app.listen(PORT, () => console.log("SERVER IS RUNNING ON PORT"));
  })
  .catch((err) => console.log(err));
