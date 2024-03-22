const firebaseAdmin = require("./firebaseInit");
const storage = firebaseAdmin.storage();

module.exports = {
    connect: () => {
        console.log('Connection Successful...');
    },
    getDatabase: () => {
        return firebaseAdmin.database();
    },
    getStorage: () =>{
        return storage;
    }
};