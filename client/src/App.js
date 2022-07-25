import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home'
import GameCompletionList from './components/gcl'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gameList" element={<GameCompletionList />} />
      </Routes>
    </div>
  )
}

export default App
