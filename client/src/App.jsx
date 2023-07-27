import React from 'react'
import { Navbar } from './components'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
    <div className='w-full  '>
      <Navbar/>
      <HomeScreen/>
    </div>
  )
}

export default App
