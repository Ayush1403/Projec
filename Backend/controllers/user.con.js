const userModel = require('../models/user.model');
const userServices = require('../services/user.service');
const {validationResult} = require('express-validator');

module.exports.registerUser = async (req, res , next) => {
    if (!validationResult(req).isEmpty()) {
        return res.status(400).json({ errors: validationResult(req).array() });
    }

    console.log(req.body);

const {fullname, email, password} = req.body;

    const hashedPassword = await userModel.hashPassword(password);

const user = await userServices.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,   
    email,
    password: hashedPassword
});

    const token = user.generateAuthToken();

    res.status(201).json({token , user});

}

module.exports.loginUser = async (req, res, next) => {
    if (!validationResult(req).isEmpty()) {
        return res.status(400).json({ errors: validationResult(req).array() });
    }

    const {email, password} = req.body;

   const user  = await userModel.findOne({email}).select('+password');
   if(!user){
       return res.status(401).json({message: 'Invalid email or password'});
   }
   const isMatch = await user.comparePassword(password);

    if(!isMatch){
        return res.status(401).json({message: 'Invalid email or password'});
    }


    const token = user.generateAuthToken();

    res.status(200).json({token , user});
}
module.exports.getProfile = async (req, res, next) => {
    res.status(200).json(req.user);
}
