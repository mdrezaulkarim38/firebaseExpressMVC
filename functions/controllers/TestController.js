let Test = require("../services/Test");
let { getLanguage, getMessage } = require("../config/language");
module.exports = class TestController {
  // Read operation (GET all tests)
  static async getAllTests(req, res) {
    try 
    {
      let test = await Test.getAllTest();
      res.status(200).json(test);
    } 
    catch (error) {
      res.status(500).json({ status: "error", msg: "Something went wrong" });
    }
  }

  // Read operation (GET a test by ID)
  static async getTestById(req, res) {
    try {
      let testId = req.params.id;
      let test = new Test();
      let data = await test.getTestById(testId);
      if(data)
      {
        res.status(200).json( data );
      }
      else
      {
        res.status(404).json({ status: "error", msg: "Test Now Found"});
      }
    } catch (error) {
      res.status(500).json({ status: "error", msg: "Something went wrong" });
    }
  }

  // Create operation (POST)
  static async createTest(req, res) {
    try {
      let { testName, age } = req.body;
      let  newTest = new Test(testName, age);
      await newTest.create();
      return res.status(201).json({ status: "success", msg: "Test added successfully"});
    } catch (error) {
      res.status(500).json({ status: "error", msg: "Something went wrong" });
    }
  }

  // Update operation (PUT)
  static async updateTest(req, res) {
    try {
      if(!req.body.id || req.body.id.trim() == '')
      {
        return res.status(400).json({ status: "error", msg: "Bad request. ID is mandatory." });
      }
      let test = new Test();
      await test.updateTestById(req.body.id, req.body);
      return res.status(202).json({ status: "success", msg: "Test updated successfully." });
    } catch (error) {
      res.status(500).json({ status: "error", msg: "Something went wrong" });
    }
  }

  // Delete operation (DELETE)
  static async deleteTest(req, res) {
    try {
      let test = new Test();
      await test.deleteById(req.params.id);
      res.status(200).json({ status: "success", msg: "Test deleted successfully" });
    } catch (error) {
      res.status(500).json({ status: "error", msg: "Something went wrong" });
    }
  }
};
