const admin = require("firebase-admin");
const serviceAccount = require("../key.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'gs://test-project-with-shuvo.appspot.com/',
    databaseURL: "http://127.0.0.1:9000/?ns=test-project-with-shuvo"
});

module.exports = admin;