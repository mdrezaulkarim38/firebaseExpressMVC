const express = require("express");
const router = express.Router();
const TestController = require("../controllers/TestController");

// POST route to create a new test
router.post("/api/test", TestController.createTest);

// GET route to retrieve all tests
router.get("/api/test", TestController.getAllTests);

// GET route to retrieve a single test by ID
router.get("/api/test/:id", TestController.getTestById);

// PUT route to update a test by ID
router.put("/api/test/:id", TestController.updateTest);

// DELETE route to delete a test by ID
router.delete("/api/test/:id", TestController.deleteTest);

module.exports = router;
