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
    prescription:
    {
        type: String,
        required: true
    },
    getcnic: {
        type: String,
        required:true
    },
       Image:
    {
       data: Buffer,
       contentType:String
    },
    age: {
        type: String
    },
    address: {
        type: String
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
const Register = new mongoose.model("Prescription", formSchema);
module.exports = Register;
