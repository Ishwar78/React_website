import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Men from './component/Men'
import Women from './component/Women'
import Kids from './component/Kids'
import Living from './component/Living' 
import Beauty from './component/Beauty'
import Studio from './component/Studio'
import Navbar from './component/Navbar'
import Home from './component/Home'

import Signin from './component/Signin'
import Register from './component/Register'

export default function App() {  return (
    <Router>
      <Navbar />
      <Routes>
    
        <Route path="/home" element={<Home />} />
        
       
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
      <Route path="/living" element={<Living />} /> 
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/" element={<Register />} />

        <Route path="/signin" element={<Signin/>} />
      </Routes>
    </Router>
  )
}
