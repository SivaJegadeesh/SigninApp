const express = require('express');
const app = express();

const mongoose = require('mongoose');

const dburl = "mongodb://localhost:27017/project";

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const Login = require('./models/Login');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect( dburl, connectionParams).then(function()
{
    // app.post("/login", async (req, res)=> {
    //     const verifyLogin = new Login({
    //         username: req.body.username,
    //         password: req.body.password,

    //     });
    //     var found = await Login.findOne(
    //         {username: verifyLogin.username, password: verifyLogin.password})                
        
    //     if(found != null && found.username == verifyLogin.username){
    //         console.log("User Found");
    //         console.log(verifyLogin.username);
    //         res.json("Login Details found")
            
    //     }
    //     else{
    //         console.log(verifyLogin);
    //         res.json("Username Not Found!");
    //     }
    //     });
        app.post("/signup", async function(req, res){

        // res.json(req.body);
        const newLogin = new Login({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password
        });
        const existLogin = await Login.findOne({username: newLogin.username});
        console.log(newLogin.username);
        //console.log(existLogin);
        if(existLogin){
            res.json('Already Login Exists.');
            console.log("Already exists");
        }
        else{
            newLogin.save();
            //const response = { message : "New Login Created" };
            res.json({
                message: 'New Login Created!',
            });
        //res.json(response);
        }
    });

    app.get("/success", (req, res) => {
        res.send("Thanks for your submission");
    })

})
.catch((e) => {
    console.log("Error:", e);
});

app.listen(5000, function(){
    console.log("Server is running at port 5000!");
});