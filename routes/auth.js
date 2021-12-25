const router = require("express").Router()
const User = require("../models/User")

//***Note: Extra task is to create an if statement saying if one of the input methods are not entered send status code. 
//REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
        username : req.body.username,
        email : req.body.email,
        password : req.body.password,
    })
    
    //Since save is so quick and will execute before the newUser const, we have to do it as a promise
    try{
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router