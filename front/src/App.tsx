import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './views/Main'
import SignUp from './views/sign/SignUp'
import SignIn from './views/sign/SignIn'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/SignIn' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  )
}

export default App
