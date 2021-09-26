import React from 'react'
import './LeftSidebar.css'
import Avatar from '../../shared/img/icons/avatar.png'
import User from '../user/GetUser'

function LeftSidebar() {
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
        </div>
    )
}

export default LeftSidebar
