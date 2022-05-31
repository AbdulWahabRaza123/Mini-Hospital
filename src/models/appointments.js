const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    docId: {
        type: String,
        required: true
    },
    docName:
    {
        type: String,
        required: true
    },
    pId: {
        type: String,
        required: true
    },
    pName: {
        type: String,
        required: true
    },
    docStatus: {
        type: String,
        required: true
    },
    Image:
    {
       data: Buffer,
       contentType:String
    },
      lebalName: {
        type: String
    },
    labelId: {
        type: String
    },
    confidance:
    {
        type: String
    }
})
const Register = new mongoose.model("appointments", formSchema);
module.exports = Register;
