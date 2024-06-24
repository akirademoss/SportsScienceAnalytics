import React, { useState, useEffect } from 'react'
import './AnalysisView.css'
import axios from "axios";



function AnalysisView() {
    const [file, setFile] = useState('')
    const [values, setValues] = useState({
        name: ''
    })
    const reset = () => {
        setValues({
            name: ''
        })
    }
    const [hrScore, setScore] = useState('')
    const [log, setLog] = useState([])

    function handleFile(e) {
        console.log(e.target.files)
        setFile(e.target.files[0])
    }

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        const form = new FormData();
        form.append("file", file)
        console.log(file)
        axios.post(import.meta.env.VITE_API_URL + 'api/upload/', form)
            .then(response => setScore(response.data))
            .catch(err => console.log(err))

        console.log("test")
    }

    const handleSubmitScore = (e) => {
        e.preventDefault()
        reset();
        const name = values.name
        const score = hrScore
        axios.post(import.meta.env.VITE_API_URL + 'api/score/', { name, score })
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        async function fetchData() {
            try {
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
            } catch (error) {
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
            <div>
                <div className='analysis-view'>
                    <div className='grid-container'>

                        <div className='upload-container'>
                            <div className='button-container'>
                                <div>
                                    <input type="file" name="file" onChange={handleFile} />
                                    <button onClick={onSubmit}>Submit</button>
                                </div>

                            </div>
                            <div className='file-upload'>
                                <h3>Upload fitbit-heartrate-data .csv file and our analytics software will analyze the player's performance.</h3>
                            </div>
                        </div>

                        <div className='analytics-container'>
                            <div className='analytics-box'>
                                <div className='performance-box'>
                                    {hrScore == "Excellent" &&
                                        <img className='img' src='/score-excellent.jpeg' />
                                    }
                                    {hrScore == "Good" &&
                                        <img className='img' src='/score-good.jpeg' />
                                    }
                                    {hrScore == "Fair" &&
                                        <img className='img' src='/score-fair.jpeg' />
                                    }
                                    {hrScore == "Poor" &&
                                        <img className='img' src='/score-poor.jpeg' />
                                    }
                                    {hrScore == "Very Poor" &&
                                        <img className='img' src='/score-very-poor.jpeg' />
                                    }
                                    {hrScore == "" &&
                                        <h3>Waiting for player data to calculate score.</h3>
                                    }
                                </div>

                            </div>
                            <div className='form-container'>
                                <label htmlFor="name">
                                    Name: <input type="text" className="name" name="name" onChange={handleChange} value={values.name} />
                                </label>
                                <button onClick={handleSubmitScore}>Add Score</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="performance-log">
                    <div className='header'>
                        <h1>Player Performance Log</h1>
                    </div>
                    <div className='header'>
                        <button onClick={onClear}>Clear Log</button>
                        {log != [] &&
                            <table className='table'>
                                <thead>
                                    <tr>

                                        <th className='th'>Name</th>
                                        <th className='th'>Score</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        log.map((log, i) => (
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

            </div>
        </>
    )
}

export default AnalysisView

