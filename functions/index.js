const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dbConfig = require("./config/dbConfig");
const app = express();
const routes = require("./routes/index");
dbConfig.connect();

app.use(cors({ origin: true}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);
app.all("*",(req,res)=>{
    res.status(404).json({"status": "error", "msg": "404 Not Found"});
});

exports.app = onRequest(app);