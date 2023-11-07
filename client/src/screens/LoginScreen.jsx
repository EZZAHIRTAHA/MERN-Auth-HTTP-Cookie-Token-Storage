import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setData } from '../redux/slices/authSlice'
const LoginScreen = () => {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await login({
        email, password
      }).unwrap();
      dispatch(setData({ ...res }))
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section className='flex h-[35rem] scale-up-center justify-center items-center flex-col w-full p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20'>
  <form onSubmit={handleSubmit} className='w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-gray-900 p-6 md:p-8 lg:p-10 rounded-lg'>
    <div className="mb-6">
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="taha1.ezzahir@gmail.com" />
    </div>
    <div className="mb-6">
      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    </div>
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  </form>
</section>

  )
}

export default LoginScreen
