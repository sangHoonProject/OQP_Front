import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './views/Main'
import SignUp from './views/sign/SignUp'
import SignIn from './views/sign/SignIn'
import { Toaster } from 'react-hot-toast'
import Write_Quiz from './components/Write_Quiz/Write_Quiz'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/Write_Quiz' element={<Write_Quiz/>}></Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  )
}

export default App
