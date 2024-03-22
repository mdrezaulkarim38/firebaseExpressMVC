const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();


app.use(cors({ origin: true}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/api/name",(req,res)=>{
    res.send("This is test");
})

exports.app = onRequest(app);