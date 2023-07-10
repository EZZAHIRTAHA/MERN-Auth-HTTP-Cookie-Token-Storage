import asyncHandler from 'express-async-handler'
import User from "../models/User.js"
const loginUser = asyncHandler(async(req, res) => {
    res.status(200).json({message: "Auth User ! "})
}) 

const registerUser = asyncHandler((req, res) => {
    const {name, email, password} = req.body
    awa
    res.status(200).json({message: "Register User ! "})
})


const logoutUser = asyncHandler((req, res) => {
    res.status(200).json({message: "User Logged Out ! "})
})



const getUserProfile = asyncHandler((req, res) => {
    res.status(200).json({message: "User Info ! "})
})


const updateUserProfile = asyncHandler((req, res) => {
    res.status(200).json({message: "Update User Profile ! "})
})




export {
    loginUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};
