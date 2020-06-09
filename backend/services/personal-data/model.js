const restful = require('node-restful')

const PersonalData = new restful.mongoose.Schema({
    name:{ required:false , type: String},  
    civilState:{ required:false , type: String},
    sex:{ required:false , type: String , enum: ['M','W']},
    tel: {required:false , type: Number},
    cel: {required:false , type: Number},
    email: {required:false , type: String},
})


module.exports = restful.model('PersonalData', PersonalData )