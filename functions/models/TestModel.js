let DB = require('../database/DB');

class TestModel 
{
    databaseNameRef = 'test';
    constructor()
    {
        this.dbInstance = new DB();
    }
    async create(data)
    {
        await this.dbInstance.create(data, this.databaseNameRef);
    }
    async readAll()
    {
        return await this.dbInstance.getAllData(this.databaseNameRef);
    }
    async readById(testId)
    {
        return await this.dbInstance.getDataById(testId, this.databaseNameRef);
    }
    async updateById(testId, updateData)
    {
        await this.dbInstance.update(testId, updateData, this.databaseNameRef);
    }
    async deleteById(testId)
    {
        await this.dbInstance.deleteById(testId, this.databaseNameRef);
    }
}

module.exports = TestModel;