import React, { useState } from 'react'
import './AnalysisView.css'
import { useForm } from "react-hook-form";
import axios from "axios";



function AnalysisView() {
    const { register, handleSubmit } = useForm()
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
       
      
      const onSubmit = (data) => {
        console.log(data)
        console.log(data.csv)
        {/**axios.post('http://127.0.0.1:8000/api/score/')*/}
    }

      const handleChange = (e) => {
        setValues( { ...values, [e.target.name]: e.target.value})
      }

    const form = useForm();

    const handleSubmitScore = (e) => {
        e.preventDefault()
        reset();
        const name = values.name
        const score = values.score
        axios.post('http://127.0.0.1:8000/api/score/', {name, score})
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }

    return (
        <>

            <div className='analysis-view'>
                <div className='grid-container'>

                    <div className='upload-container'>
                        <div className='button-container'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("csv", { required: true })} type="file" />
                                <button>Submit</button>
                            </form>

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
                                Name: <input type="text" className="name" name="name" onChange={ handleChange } value={values.name} />
                            </label>
                            <label htmlFor="score">
                                Score: <input type="text" className="score" name="score" onChange={ handleChange } value={values.score}/>
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