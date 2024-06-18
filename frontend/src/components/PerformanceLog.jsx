import React, { useState, useEffect } from 'react'
import './PerformanceLog.css'

function PerformanceLog() {
    const [title, setLogTitle] = useState([])
    const [log, setLog] = useState([])

    useEffect(()=> {
      async function fetchData(){
        try{
          const response = await fetch('http://0.0.0.0:8000/api/score/')
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          console.log(result)
          console.log(Object.keys(result[0]))
          console.log(result[0].score)
          setLogTitle(Object.keys(result[0]));
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
                                    <th key={i}>{t}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                log.map((log, i)=> (
                                    <tr key={i}>
                                        <td>{log.id}</td>
                                        <td>{log.name}</td>
                                        <td>{log.score}</td>
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