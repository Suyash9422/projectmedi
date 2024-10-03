const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://cyrenix03:HWdWhBBSfdLuERRC@cluster0.aicxb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    
}).then(() => {
    console.log("connection successuful");
}).catch((e) => {
    console.log("no connection");
})