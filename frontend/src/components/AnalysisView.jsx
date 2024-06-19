import React, { useState } from 'react'
import './AnalysisView.css'
import axios from "axios";



function AnalysisView() {
    const [file, setFile] = useState('')
    const [values, setValues] = useState({
        name: '',
        score: ''
    })
    const reset = () => {
        setValues({
            name: '',
            score: ''
        })
    }

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
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }

    const handleSubmitScore = (e) => {
        e.preventDefault()
        reset();
        const name = values.name
        const score = values.score
        axios.post(import.meta.env.VITE_API_URL + 'api/score/', { name, score })
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }

    return (
        <>

            <div className='analysis-view'>
                <div className='grid-container'>

                    <div className='upload-container'>
                        <div className='button-container'>
                            <div>
                                <input type="file" name="file" onChange={handleFile}/>
                                <button onClick={onSubmit}>Submit</button>
                            </div>

                        </div>
                        <div className='file-upload'>
                            <h3>Upload a file and our analytics software will analyze the player's performance.</h3>
                        </div>
                    </div>

                    <div className='analytics-container'>
                        <div className='analytics-box'>
                            <div className='performance-box'>
                                <h3>Waiting for player data to calculate score.</h3>
                            </div>

                        </div>
                        <form className='form-container' onSubmit={handleSubmitScore}>
                            <label htmlFor="name">
                                Name: <input type="text" className="name" name="name" onChange={handleChange} value={values.name} />
                            </label>
                            <label htmlFor="score">
                                Score: <input type="text" className="score" name="score" onChange={handleChange} value={values.score} />
                            </label>
                            <button>Add</button>
                        </form>

                    </div>
                </div>

            </div>

        </>
    )
}

export default AnalysisView