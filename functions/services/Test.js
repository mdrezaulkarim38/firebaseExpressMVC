let TestModel = require("../models/TestModel");
let uuid = require("uuid");
class Test 
{
    #testName;
    #age;
    constructor(testName, age)
    {
        this.#testName = testName;
        this.#age = age;
    }
    get testName()
    {
        return this.#testName;
    }
    set testName(value)
    {
        this.#testName = value;
    }
    get age()
    {
        return this.#age;
    }
    set age(value)
    {
        this.#age = value;
    }

    async create()
    {
        let testModel = new TestModel();
        let testId = uuid.v4();
        let newTest = {
            id: testId,
            testName: this.#testName,
            age: this.#age
        };
        await testModel.create(newTest);
    }
    static async getAllTest()
    {
        let testModel = new TestModel();
        return await testModel.readAll();
    }
    async getTestById(testId)
    {
        let testModel = new TestModel();
        return await testModel.readById(testId);
    }
    async updateTestById(testId, updateData)
    {
        let testModel = new TestModel();
        await testModel.updateById(testId, updateData);
    }
    async deleteById(testId)
    {
        let testModel = new TestModel();
        await testModel.deleteById(testId);
    }
}

module.exports = Test;