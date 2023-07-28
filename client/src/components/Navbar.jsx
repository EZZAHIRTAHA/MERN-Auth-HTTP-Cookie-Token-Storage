import {FiLogIn} from 'react-icons/fi'
import {AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'


const Navbar = () => (
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link to="/" className="text-2xl text-white tracking-wider font-semibold flex items-center">
                        Mern Auth
                    </Link>
                    <div className="flex capitalize items-center justify-center ">
                        <div className="flex">
                            <a href="#" className="mr-6 text-md font-medium  flex justify-center items-center gap-2 text-white hover:underline "><FiLogIn/>Sign up</a>
                            <a href="#" className="text-md hover:underline flex justify-center items-center gap-2 font-medium text-white"><FiLogIn/>Sign in </a>
                        </div>
                     
                    </div>
                </div>
            </nav>
  )

export default Navbar
