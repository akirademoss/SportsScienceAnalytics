import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import AnalysisView from './components/AnalysisView'
import PerformanceLog from './components/PerformanceLog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>
      <div>
        <AnalysisView/>
      </div>
      <div>
        <PerformanceLog/>
      </div>
    </div>
  )
}

export default App
