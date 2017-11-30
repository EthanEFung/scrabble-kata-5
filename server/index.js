const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;
const routes = require("./routes/index");

app.use(express.static(path.join(__dirname, "../", "client")));
app.use(routes);

app.listen(PORT, err => {
  if (err) throw err;
  console.log("connected to port", PORT);
});
