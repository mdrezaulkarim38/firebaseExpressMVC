const firebaseAdmin = require("../config/dbConfig");
class DB 
{
    constructor()
    {
        this.database = firebaseAdmin.getDatabase();
        this.storage = firebaseAdmin.getStorage();
    }

    
}