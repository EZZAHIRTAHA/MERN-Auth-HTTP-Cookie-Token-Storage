import {FiLogIn} from 'react-icons/fi'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import MediaNav from './MediaNav'




const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    const toggleNav = () => {
        setToggle(toggle => !toggle)
    }
    return(
            <nav className="border-gray-200 bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link to="/" className="text-2xl text-white tracking-wider font-semibold flex items-center">
                        Mern Auth
                    </Link>
                    <div className="flex  capitalize items-center justify-center ">
                        <div className="sm:flex hidden">
                            <Link to="/login" className="mr-6 text-md font-medium  flex justify-center items-center gap-2 text-white hover:underline "><FiLogIn/>Sign up</Link>
                            <Link to="/register" className="text-md hover:underline flex justify-center items-center gap-2 font-medium text-white"><FiLogIn/>Sign in </Link>
                        </div>
                        <div onClick={toggleNav} className="cursor-pointer sm:hidden flex">
                            {toggle ?<AiOutlineClose className='text-white text-[2rem] '/>: <AiOutlineMenu className='text-white text-[2rem]  '/>}
                        </div>
                    </div>
                </div>
                <div className="transition-all ease-out duration-500">
                    {toggle && <MediaNav />}
                </div>
            </nav>
  )}

export default Navbar
