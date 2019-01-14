const express = require('express'),
    app = express(),
    mongodb = require('mongodb'),
    mongoose = require('mongoose'),
    port = process.env.Port || 8080,
    myDB = 'mongodb://localhost/advancedNodeProject1',
    User = require('./models/users.model.js'),
    UserRoutes = require('./Controllers/userroutes.js'),
    bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))

// mongoose connection
mongoose.connect(myDB);
// Routes
app.use('/user',UserRoutes);//http:localhost:8080/user/<UserRoutes>
 




// app listern port
app.listen(port, (error)=>{
    if(!error){
        console.log('Listening on port',port)
    }else{
        console.log(err);
    }
});