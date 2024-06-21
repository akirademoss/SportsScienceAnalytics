import React, { useState, useEffect } from 'react'
import './PerformanceLog.css'

function PerformanceLog() {
    const [title, setLogTitle] = useState([])
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
          setLogTitle(arr);
          setLog(result);
        } catch(error) {
          console.error('Error fetching data:', error);
        }
      }
      
      fetchData();
    }, [])

    return (
        <>
            <plog className="performance-log">
                <div className='header'>
                    <h1>Player Performance Log</h1>
                </div>
                <div className='header'>
                    <table className='table'>
                        <thead>
                            <tr>
                                {title.map((t,i) =>(
                                    <th key={i}  className='th'>{t}</th>
                                ))}
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
               
                </div>

            </plog>
        </>
    )
}

export default PerformanceLog