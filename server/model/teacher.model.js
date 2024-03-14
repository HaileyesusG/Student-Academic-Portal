const mongoose = require("mongoose");

const newSchema = new mongoose.Schema({
  id: String,
  name: String,
  gender: String,
  email: String,
  password: String,
  phone: Number,
  restricted: {
    type: Boolean,
    default: true,
  },
  curriculumVitae: String,
  qualifications: String,
  certifications: String,
  interviewDate: Date,
  assignedCourses: [String],
});
module.exports = mongoose.model("teacher", newSchema);
