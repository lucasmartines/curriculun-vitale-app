const restful = require("node-restful");

const AcademicExp = new restful.mongoose.Schema({
  name: { required: false, type: String },
  description: { required: false, type: String },
  startDate: { required: false, type: String },
  endDate: { required: false, type: String },
  working: { required: false, type: Boolean },
});

const PersonalData = new restful.mongoose.Schema({
  name: { required: false, type: String },
  civilState: { required: false, type: String },
  sex: { required: false, type: String, enum: ["M", "W"] },
  tel: { required: false, type: String },
  cel: { required: false, type: String },
  email: { required: false, type: String },
  ocupation: { required: false, type: String },
  AcademicExp: [AcademicExp],
});

module.exports = restful.model("PersonalData", PersonalData);
