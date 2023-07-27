import React from 'react'

const Hero = () => (
    <div class="max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <h5 class="mb-2 text-2xl font-semibold  text-gray-900 dark:text-white tracking-widest text-center">Mern Authentication</h5>
        </a>
            <p class="mb-3 font-normal leading-8 text-gray-700 tracking-wide  dark:text-gray-400 break-all">A MERN authentication that stores a JWT in an HTTP-only cookie is a secure way to authenticate users in a web application. It uses Redux Toolkit and tailwind CSS and much more !</p>
            <div className=" flex justify-center items-center gap-6">
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Sign In
                </a>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Sign Up
                </a>
            </div>
            </div>
)

export default Hero
