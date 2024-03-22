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
      const id = req.params.id;
      let message = `Retrieving test with ID: ${id}`;
      res.status(200).json({ status: "success", msg: message });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: "error", msg: "Something went wrong" });
    }
  }

  // Create operation (POST)
  static async createTest(req, res) {
    try {
      let message = "Test created successfully";
      res.status(201).json({ status: "success", msg: message });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: "error", msg: "Something went wrong" });
    }
  }

  // Update operation (PUT)
  static async updateTest(req, res) {
    try {
      let message = "Test updated successfully";
      res.status(200).json({ status: "success", msg: message });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: "error", msg: "Something went wrong" });
    }
  }

  // Delete operation (DELETE)
  static async deleteTest(req, res) {
    try {
      let message = "Test deleted successfully";
      res.status(200).json({ status: "success", msg: message });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: "error", msg: "Something went wrong" });
    }
  }
};
