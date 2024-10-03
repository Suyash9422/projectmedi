const express = require("express")
const path = require("path")
const app = express();
require("./db/conn");
const User = require("./models/Users-info")
const port = process.env.PORT || 3000

const static_path = path.join(__dirname,"../public");
app.use(express.urlencoded({extended:false}))
// console.log(path.join(__dirname, "../public"))
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.get('/', (req,res) => {
    res.render("index")
});

app.post("/user",async (req,res) => {
    try{
        console.log(req.body.name,req.body.email,req.body.password);
        res.send(req.body.name,req.body.email,req.body.password);
        
        const UserRegister = new User({
            name: req.body.name,
            email : req.body.email,
            password : req.body.password
        })
        const details =  await UserRegister.save();

    } catch (error) {
        res.status(400).send(error);
    }
})

app.listen(port, () => {
    console.log(`server is running at port no ${port}`)
})