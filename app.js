const express = require("express");
const cors = require("cors");
const router = require("./router");
const handleError = require("./midleware/handleError");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);
app.use(handleError);

app.listen(port, () => {
  console.log("Youtube Clone Alex Chandra Hanif");
});
