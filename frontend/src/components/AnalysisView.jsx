import React, { useState } from 'react'
import './AnalysisView.css'
import { useForm } from "react-hook-form";

function AnalysisView() {
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <>

            <div className='analysis-view'>
                <div className='grid-container'>
                    
                    <div className='upload-container'>
                        <div className='button-container'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("picture", { required: true })} type="file" />
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
                    </div>
                </div>
            </div>

        </>
    )
}

export default AnalysisView