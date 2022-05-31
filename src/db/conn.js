const mongoose = require("mongoose");
url = "mongodb://localhost:27017/Project";
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(() => {
    console.log("Connection is successful");
}).catch((e)=>{
    console.log("no connection");
})