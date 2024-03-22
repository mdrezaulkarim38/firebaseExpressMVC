const admin = require("firebase-admin");
const serviceAccount = require("../key.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: '',
    databaseURL: ""
});

module.exports = admin;