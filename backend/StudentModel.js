const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollno: { type: String, required: true, unique: true },
  gender: { type: String, enum: ['Male', 'Female'], required: true },
  department: { type: String, enum: ['CSE','IT', 'ECE', 'EEE', 'MECH', 'CIVIL'], required: true },
  section: { type: String, enum: ['1', '2', '3'], required: true },
  skills: [{ type: String, enum: ['C++', 'Java', 'Python', 'Ruby'] }],
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
