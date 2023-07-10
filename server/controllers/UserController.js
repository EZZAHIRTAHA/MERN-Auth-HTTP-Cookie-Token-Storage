import asyncHandler from 'express-async-handler'

const authUser = asyncHandler(async(req, res) => {
    res.status(200).json({message: "Anaaaa ! "})
}) 

const registerUser = asyncHandler(() => {

})

export {authUser};
