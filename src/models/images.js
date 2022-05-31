const mongoose = require("mongoose");
const formSchema = new mongoose.Schema({
    name: {
        type: String
    },
    Image: {
        data: Buffer,
        contentType:String
   }
})


const Register = new mongoose.model("ImageData", formSchema);

module.exports = Register;
