const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require("morgan");

let port = process.env.PORT ? process.env.PORT : 8080;
let env = process.env.NODE_ENV ? process.env.NODE_ENV : "dev";

// Setup our Express pipeline
const app = express();
if (env !== "test") {
  app.use(logger("dev"));
}
app.set("views", __dirname);
app.use(express.static(path.join(__dirname, "../client/public")));
app.use(bodyParser.urlencoded({extended: true}));

// Import our routes
require("./routes")(app);

app.listen(process.env.PORT || 8080);

console.log('TakeANumber server is listening on port ' + port);

