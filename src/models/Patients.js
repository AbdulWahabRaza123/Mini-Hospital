const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const formSchema = new mongoose.Schema({
    username:
    {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true,
        unique: true
    },
    password:
    {
        type: String,
        required: true
    },
tokens: [{
        token: {
            type: String,
        required: true
        }
    }]

})
formSchema.methods.generateAuthToken = async function () {
    try {
        const token = jwt.sign({ id: this.id.toString() }, "mynameisabdulwahabraza");
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (e)
    {
        res.send("There is error in authentication"+e);
    }
}
const Register = new mongoose.model("Patients", formSchema);
module.exports = Register;
