import React from 'react'
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const MediaNav = () => {
  return (
    <div className='w-full  scale-up-center p-4 sm:hidden flex justify-center gap-3 items-center flex-col'>
        <Link to="/login" className=" bg-slate-950 p-2 text-md font-medium rounded-md w-full flex justify-center items-center gap-2 text-white hover:underline ">
            <FiLogIn/>
            Sign up
        </Link>
        <Link to="/register" className="text-md bg-slate-950 p-2  hover:underline rounded-md w-full flex justify-center items-center gap-2 font-medium text-white">
            <FiLogIn/>
            Sign in 
        </Link>
    </div>
  )
}

export default MediaNav
