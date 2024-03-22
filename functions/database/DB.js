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

    async getAllData(database)
    {
        let dataRef = this.database.ref(database);
        try
        {
            let snapshot = await dataRef.once('value');
            return snapshot.val();
        }
        catch (error)
        {
            throw error;
        }
    }

    async getDataById(dataId, database)
    {
        let dataRef = this.database.ref(database);
        try
        {
            let snapshot = await dataRef.orderByChild("id").equalTo(dataId).once('value');
            return snapshot.val();
        }
        catch(error)
        {
            throw error;
        }
    }
    
}