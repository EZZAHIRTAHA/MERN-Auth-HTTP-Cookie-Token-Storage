import {FiLogIn} from 'react-icons/fi'
import {AiOutlineMenu} from 'react-icons/ai'


const Navbar = () => (
            <nav class="bg-white border-gray-200 dark:bg-gray-900">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="/" class="flex items-center">
                        <h1 className='text-2xl text-white tracking-wider font-semibold'>Mern Auth</h1>
                        
                    </a>
                    <div class="flex capitalize items-center justify-center ">
                        <div className="flex">
                            <a href="#" class="mr-6 text-md font-medium  flex justify-center items-center gap-2 text-white hover:underline "><FiLogIn/>Sign up</a>
                            <a href="#" class="text-md hover:underline flex justify-center items-center gap-2 font-medium text-white"><FiLogIn/>Sign in </a>
                        </div>
                        {/* <div className="sm:hidden flex">
                            <AiOutlineMenu className='text-white text-4xl'/>
                        </div> */}
                    </div>
                </div>
            </nav>
  )

export default Navbar
