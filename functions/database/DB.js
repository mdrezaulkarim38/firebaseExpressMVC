const firebaseAdmin = require("../config/dbConfig");
class DB 
{
    constructor()
    {
        this.database = firebaseAdmin.getDatabase();
        this.storage = firebaseAdmin.getStorage();
    }

    async getAllDatabaseData()
    {
        try
        {
            let snapshot = await this.database.ref('/').once('value');
            return snapshot.val();
        }
        catch(error)
        {
            throw error;
        }
    }

    async
}