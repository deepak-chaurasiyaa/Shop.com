const User = require('../models/users')

const express = require('express')
const router = express.Router();
// const jwt = require('jsonwebtoken')

//Create token on signup and login
// function newToken(user){
//     return jwt.sign({user}, 'ev')
// }

router.post('', async (req, res)=>{
      user = await User.findOne({email:req.body.email})
    
     if(user) return res.status(400).send({message : 'User already registered with this email id'})

      user = await User.create(req.body)
    return res.status(200).send(user)
})

//Get all users
router.get('', async (req, res)=>{
    const user = await User.find()
    return res.status(200).send(user)
})

router.post('/login', async (req, res)=>{
    let user = await User.findOne({email:req.body.email})

    if(!user) return res.status(400).send({message : 'Please check your email and password'})
    let match = await User.findOne({password : req.body.password})
    if(!match) return res.status(400).send({message : 'Please check your email and password'})

    return res.status(200).send(user)
})

module.exports = router