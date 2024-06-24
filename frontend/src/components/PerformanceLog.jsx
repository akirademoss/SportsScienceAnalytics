import React, { useState, useEffect, useReducer } from 'react'
import './PerformanceLog.css'
import axios from "axios";

function PerformanceLog() {
    const [log, setLog] = useState([])

    useEffect(()=> {
      async function fetchData(){
        try{
          const response = await fetch(import.meta.env.VITE_API_URL + 'api/score/')
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          const arr = Object.keys(result[0])
          arr.shift()
          console.log(result)
          console.log(arr)
          setLog(result);
        } catch(error) {
          console.error('Error fetching data:', error);
          console.log(log)
        }
      }
      
      fetchData();
      
    }, [])

    const onClear = (e) => {
        axios.delete(import.meta.env.VITE_API_URL + 'api/score/')
            .then(response => console.log(response))
            .catch(err => console.log(err))   
        setLog([])
    }

    return (
        <>
            <div className="performance-log">
                <div className='header'>
                    <h1>Player Performance Log</h1>
                </div>
                <div className='header'>
                <button onClick={onClear}>Clear Log</button>
                { log != [] &&
                    <table className='table'>
                        <thead>
                            <tr>
                               
                                <th  className='th'>Name</th>
                                <th  className='th'>Score</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                log.map((log, i)=> (
                                    <tr key={i}>
                                        <td className='td'>{log.name}</td>
                                        <td className='td'>{log.score}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                }
                </div>

            </div>
        </>
    )
}

export default PerformanceLog