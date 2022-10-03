// const http = require("http");
// console.log(routes.someText)
//

const express = require("express");
const bodyParser = require("body-parser");

const adminRouter = require("./router/admin");
const shopRouter = require("./router/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// my route

app.use(adminRouter);
app.use(shopRouter);
app.use((req, res) => {
  //error
  res.status(404).send("<h1> page not found");
});

// const server = http.createServer(app)
app.listen(4000);
