const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); 

mongoose
  .connect(
    "mongodb+srv://PawarMukesh:H0kj9rXiW8VOQJA2@cluster0.zxv7wgr.mongodb.net/APPBOOK"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
