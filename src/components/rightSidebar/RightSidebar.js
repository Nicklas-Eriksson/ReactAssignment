import React from 'react'
import './RightSidebar.css'
import WeatherAPI from '../../shared/api/WeatherAPI'

function RightSidebar() {
    return (
        <div className='rightSidebar'>
            <WeatherAPI />
        </div>
    )
}

export default RightSidebar
