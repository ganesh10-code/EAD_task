const express = require('express');
const router = express.Router();
const studentController = require('./student.controller');

// Create student
router.post('/students', studentController.createStudent);

// Get all students
router.get('/students', studentController.getStudents);

module.exports = router;
