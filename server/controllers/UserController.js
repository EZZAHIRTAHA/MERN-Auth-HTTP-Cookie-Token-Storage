import asyncHandler from 'express-async-handler'
import User from "../models/User.js"
import generateToken from '../utils/generateToken.js'




const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body
    const user = User.findOne({email})
    if(user && (await user.matchPassword(password))){
        generateToken(res, user._id)
        res.status(200).json({
            message: "Welcome to your account ",
            _id: user._id,
            email: user.email, 
            password: user.password 
        })
    }
    else {
        res.status(401).json({message: "Invalid Credentials !"})
    }
})

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
  
    const userExists = await User.findOne({ email });
  
    if (userExists) {
      res.status(400);
      throw new Error('User already exists');
    }
  
    const user = await User.create({
      name,
      email,
      password,
    });
  
    if (user) {
      generateToken(res, user._id);
  
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }
  });
  

const logoutUser = async(req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0) 
    }) 
    res.status(200).json({message: "User Logged Out Successfully  ! "})
}



const getUserProfile = asyncHandler(async(req, res) => {
    res.status(200).json({message: "User Info ! "})
})


const updateUserProfile = asyncHandler(async(req, res) => {
    res.status(200).json({message: "Update User Profile ! "})
})




export {
    loginUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};
