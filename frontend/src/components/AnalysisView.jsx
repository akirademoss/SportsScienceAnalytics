import React, { useState } from 'react'
import './AnalysisView.css'

function AnalysisView() {
    return (
        <>

            <view className='analysis-view'>
                <ul className='grid-container'>
                    <div className='file-upload'>
                        <h3>Upload a file and our analytics software will analyze the player's performance.</h3>
                    </div>
                    <div className='analytics-container'>
                        <div className='analytics-box'>
                            <div className='performance-box'>
                              <h3>Waiting for player data to calculate score.</h3>
                            </div>

                        </div>
                    </div>
                </ul>
            </view>

        </>
    )
}

export default AnalysisView