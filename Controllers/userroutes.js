//http:localhost:8080/user/<UserRoutes>

const Router = require('express').Router(),
User = require('../models/users.model.js'); //user model

// get users router
Router.get('/index', (req,res)=>{
    User.find({}).exec((error,users)=>{
        if(error){
            res.send(error);
        }else{
            res.send(users);
        }
    })
})

// post users router
Router.post('/new', (req,res)=>{
    let newuser = new User();
    newuser.username = req.body.username;
    newuser.password = req.body.password;
    newuser.isOver21 = req.body.isOver21;
    // save
    newuser.save((error,user)=>{
        if(error){
            res.send(error);
        }else{
            res.send(user);
        }
    })
})

// put/update router
Router.put('/update/:id', (req,res)=>{
    User.findById(req.params.id,(error,user)=>{
        if(error){
            res.send(error);
        }else{
            user.username = req.body.username || user.username;
            user.password = req.body.password || user.password;
            user.isOver21 = req.body.isOver21 || user.isOver21;
            user.save((err,user)=>{
                if(err){
                    res.send(err);
                }else{
                    res.send(user);
                }
            })
        }
    })
})

// delete users router
Router.delete('/delete/:id', (req,res)=>{
    User.findByIdAndRemove(req.params.id,(error,user)=>{
        if(error){
            res.send(error);
        }else{
            res.send(user);//send user deleted!
        }
    })
})



// export Router
module.exports = Router;