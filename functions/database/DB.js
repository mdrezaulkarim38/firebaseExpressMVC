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

    async getDataByType(dataType, database) 
    {
        let dataRef = this.database.ref(database);
        try 
        {
            let snapshot = await dataRef.orderByChild("type").equalTo(dataType).once('value');
            return snapshot.val();
        } 
        catch (error) 
        {
            throw error;
        }
    }

    async create(data, database)
    {
        let dataRef = this.database.ref(database);
        try
        {
            let newDataRef = dataRef.push();
            await newDataRef.set(data);
        }
        catch(error)
        {
            throw error;
        }
    }

    async update(dataId, updateData, database)
    {
        if(!dataId)
        {
            throw new Error('Data ID is required');
        }
        let dataRef = this.database.ref(database);
        try
        {
            let snapshot = await dataRef.orderByChild("id").equalTo(dataId).once('value');
            let data = snapshot.val();
            if(!data)
            {
                throw new Error('Data Not Found');
            }
            let key = Object.keys(data)[0];
            let specificDataRef = dataRef.child(key);
            await specificDataRef.update(updateData);
        }
        catch(error)
        {
            throw error;
        }
    }

    async updateDataByDate(database, date, newData) {
        if (!date) 
        {
            throw new Error('Data date is required');
        }
        let dataRef = this.database.ref(database);
        try 
        {
            let snapshot = await dataRef.orderByChild("date").equalTo(date).once('value');
            let data = snapshot.val();
            if (!data) 
            {
                throw new Error('Data not found');
            }
            let key = Object.keys(data)[0];
            let specificDataRef = dataRef.child(key);
            await specificDataRef.update(newData);
        } 
        catch (error) 
        {
            throw error;
        }
    }

    async deleteById(dataId, database) 
    {
        if (!dataId) 
        {
            throw new Error('Data ID is required');
        }
        let dataRef = this.database.ref(database);
        try 
        {
            let query = dataRef.orderByChild("id").equalTo(dataId);
            let snapshot = await query.once('value');
            let data = snapshot.val();
            if (!data) {
                throw new Error('Data not found');
            }
            let key = Object.keys(data)[0];
            let specificDataRef = dataRef.child(key);
            await specificDataRef.remove();
        } 
        catch (error) 
        {
            throw error;
        }
    }
}

module.exports = DB;