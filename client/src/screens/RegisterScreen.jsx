import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setData } from '../redux/slices/authSlice';
import { useRegisterMutation } from '../redux/slices/userApiSlice';

const RegisterScreen = () => {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  // console.log(formData);

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [register] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);
  
  
  const handleChange = (event) => {
    const {name, value} = event.target
    setFormData(formData => ({...formData, [name]: value}))
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setData({ ...res }));
        navigate('/');
      } catch (err) {
        console.log(err);
      }
  };

  
  return (
    <section className='flex scale-up-center h-[35rem] justify-center items-center flex-col w-full'>
  <form onSubmit={handleSubmit} className='w-11/12 md:w-2/3 lg:w-1/3 bg-gray-900 p-6 sm:p-[5rem] rounded-lg'>
    <div className="mb-6">
      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
      <input name='name' value={formData.name} onChange={handleChange} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
    </div>
    <div className="mb-6">
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
      <input name='email' value={formData.email} onChange={handleChange} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="taha1.ezzahir@gmail.com" />
    </div>
    <div className="mb-6">
      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
      <input name='password' value={formData.password} onChange={handleChange} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    </div>
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  </form>
</section>

  )
}

export default RegisterScreen
