import asyncHandler from 'express-async-handler'
import User from "../models/User.js"
import jwt from 'jsonwebtoken'





const loginUser = asyncHandler(async(req, res) => {
    res.status(200).json({message: "Auth User ! "})
}) 

const registerUser = asyncHandler(async(req, res) => {
    const {name, email, password} = req.body
    const findUser = await User.findOne({ email })
    if (findUser) res.status(409).json({message: "User Already Exists"})
    const user = await User.create({name, email, password})
    if(user) res.status(200).json(user)
    
})


const logoutUser = asyncHandler(async(req, res) => {
    res.status(200).json({message: "User Logged Out ! "})
})



const getUserProfile = asyncHandler(async(req, res) => {
    res.status(200).json({message: "User Info ! "})
})


const updateUserProfile = asyncHandler(async(req, res) => {
    res.status(200).json({message: "Update User Profile ! "})
})


const generateToken = () => {
    console.log('Token');
}


export {
    loginUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};
