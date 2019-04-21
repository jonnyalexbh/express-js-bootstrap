const express = require('express');
const bodyParser = require('body-parser');

// app
const app = express();

// middlewares
app.use(bodyParser.json());                         // support parsing of application/json type post data
app.use(bodyParser.urlencoded({ extended: true })); // support parsing of application/x-www-form-urlencoded post data

// routes
app.get('/', function (req, res, next) {
  res.send({ greeting: "hello world" });
})

app.post('/store-user', function (req, res, next) {
  console.log(req.body);
})

const server = app.listen(8000, function () {
  console.log(`REST API running on http://localhost:${server.address().port}`);
});
