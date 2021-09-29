import React, {useState} from 'react'
import './LeftSidebar.css'
import Avatar from '../../shared/img/icons/avatar.png'
import User from '../user/GetUser'
import {useHistory} from 'react-router-dom'
import Route from '../../routes/RoutingPath'

function LeftSidebar() {
    const history = useHistory()

    const colorClicker = (color)=>{
        history.push(Route.profile, color)
    }

    return (
        <div className='sidebar'>
            <div className='sidebar_top'>
                <img
                src='https://c4.wallpaperflare.com/wallpaper/863/264/835/abisko-national-park-northern-lights-aurora-borealis-wallpaper-preview.jpg'
                alt='Background Header'
                />
                <div className="avatar_bg">
                    <img id='sidebar_avatar' src={Avatar} alt="Profile picture" />
                </div>
                <h2>{User.name}</h2>
                <h4>{User.email}</h4>
            </div>
            <div className='sidebar_bot'>
                <h1>Choose a color:</h1>
                <div className='colorPalette'>
                    <div className='colorContainer' >
                        <div id='p1' onClick={()=>colorClicker('Red')}></div>
                        <h2>Red</h2>
                    </div>
                    <div className='colorContainer' >
                        <div id='p2' onClick={()=>colorClicker('Blue')}></div>
                        <h2>Blue</h2>
                    </div>
                    <div className='colorContainer'>
                        <div id='p3' onClick={()=>colorClicker('Green')}></div>
                        <h2>Green</h2>
                    </div>
                    <div className='colorContainer'>
                        <div id='p4' onClick={()=>colorClicker('Yellow')}></div>
                        <h2>Yellow</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSidebar
