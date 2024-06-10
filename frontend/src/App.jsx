import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import AnalysisView from './components/AnalysisView'
import PerformanceLog from './components/PerformanceLog'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])

  {/*Setting & fetching data to test api*/}
  useEffect(()=> {
    async function fetchData(){
      console.log(import.meta.env.VITE_API_URL)
      try{
        const response = await fetch(import.meta.env.VITE_API_URL)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result)
        setData(result);
      } catch(error) {
        console.error('Error fetching data:', error);
      }
    }
    
    fetchData();
  }, [])

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
