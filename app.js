const express = require('express'),
    app = express(),
    mongodb = require('mongodb'),
    mongoose = require('mongoose'),
    port = process.env.Port || 8080,
    myDB = 'mongodb://localhost/advancedNodeProject1',
    User = require('./Models/user.model.js');

   
 

app.listen(port, (error)=>{
    if(!error){
        console.log('Listening on port',port)
    }else{
        console.log(err);
    }
});