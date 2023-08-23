import React from 'react'
import { Navbar,Me } from './components'
import { Routes, Route } from 'react-router-dom'
import { LoginScreen, RegisterScreen,HomeScreen} from './screens'

const App = () => {
  return (
    <div className='w-full  '>
      <Navbar/>
      <Routes >
        <Route path='/'  element={<HomeScreen/>} />
        <Route path='/login' element={<LoginScreen/>} />
        <Route path='/register' element={<RegisterScreen/>} />
      </Routes>
      <Me/>

    </div>
  )
}

export default App
