import React from 'react'
import { Navbar } from './components'
import HomeScreen from './screens/HomeScreen'
import { Routes, Route } from 'react-router-dom'
import { LoginScreen, RegisterScreen } from './screens'

const App = () => {
  return (
    <div className='w-full  '>
      <Navbar/>
      <Routes >
        <Route path='/'  element={<HomeScreen/>} />
        <Route path='/login' element={<LoginScreen/>} />
        <Route path='/register' element={<RegisterScreen/>} />
      </Routes>

    </div>
  )
}

export default App
