import React, { useState } from 'react'
import './AnalysisView.css'
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from "axios";

type FormValues = {
    name: string;
    score: string;
}

function AnalysisView() {
    {/*const { register2, handleSubmit } = useForm()*/} 
    const [name, setName] = useState('')
    const [score, setScore] = useState('')


    const form = useForm<FormValues>();
    const {register, control, handleSubmit} = form;

    const onSubmit = (data: FormValues) => {
        console.log('Form submitted', data)
        console.log(data.name)
        console.log(data.score)
        const name = data.name
        const score = data.score
        axios.post('http://127.0.0.1:8000/api/score/', {name, score})
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }

    {/* 

    const onSubmit = (data) => {
        console.log(data)
    }

    let submit=async(e)=>{
        e.preventDefault()

        try{

            await axios.post("http://127.0.0.1:8000/api/score/",{
                name, score
            })

        }
        catch(e){
            console.log(e)
        }
    }
*/}
    return (
        <>

            <div className='analysis-view'>
                <div className='grid-container'>

                    <div className='upload-container'>
                        <div className='button-container'>
                           {/**  <form onSubmit={handleSubmit(onSubmit)}>
                                <input {...register2("csv", { required: true })} type="file" />
                                <button>Submit</button>
                            </form>*/}

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
                        <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="name">
                                Name: <input type="text" id="name" {...register("name")} />
                            </label>
                            <label htmlFor="score">
                                Score: <input type="text" id="score" {...register("score")}/>
                            </label>
                            <button>Add</button>
                        </form>
                        <DevTool control={control} ></DevTool>
                    </div>
                </div>

            </div>

        </>
    )
}

export default AnalysisView