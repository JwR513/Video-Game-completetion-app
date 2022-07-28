import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home'
import GameCompletionList from './components/gcl'
import NewGameForm from './components/newGameForm'
import DevList from './components/dcl'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gameList" element={<GameCompletionList />} />
        <Route path="/devList" element={<DevList />} />
        <Route path="/gameForm" element={<NewGameForm />} />
      </Routes>
    </div>
  )
}

export default App
