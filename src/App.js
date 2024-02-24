import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import './global.css'
import Calculation from './pages/Calculation.jsx'

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculate" element={<Calculation />} />
      </Routes>
    </HashRouter>
  )
}

export default App