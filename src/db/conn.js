const mongoose = require("mongoose");
// url = "mongodb://localhost:27017/Project";
url = 'mongodb+srv://Raza:12345@cluster0.hbnjmdm.mongodb.net/Project?retryWrites=true&w=majority';
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(() => {
    console.log("Connection is successful");
}).catch((e)=>{
    console.log("no connection");
})