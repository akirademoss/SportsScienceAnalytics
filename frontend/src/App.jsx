import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import AnalysisView from './components/AnalysisView'
import PerformanceLog from './components/PerformanceLog'

function App() {

  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>
      <div>
        <AnalysisView/>
      </div>
    </div>
  )
}

export default App