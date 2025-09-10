import React from 'react'
import { Route,Routes } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage'
import ProfilePage from './components/pages/ProfilePage'

const App = () => {
  return (
    <div className="bg-[url('./src/assets/bgImage.svg')]  bg-no-repeat bg-cover">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Login' element={<LoginPage/>}/>
        <Route path='/Profile' element={<ProfilePage/>}/>
      </Routes>
    </div>
  )
}

export default App
