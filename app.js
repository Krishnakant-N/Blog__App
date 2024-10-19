require("dotenv").config();

const express = require("express");
const app = express();
const expressLayout = require("express-ejs-layouts");

const PORT = 3000 || process.env.PORT;

app.use(express.static(__dirname + "/public"));

//Templating engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

app.use('/', require('./server/routes/main'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
