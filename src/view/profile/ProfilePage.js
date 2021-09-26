import React from 'react'
import ProfileSideImg from '../../shared/img/profileSideImg.jpg'
import './ProfilePage.css'
import Route from '../../routes/RoutingPath'
import {useHistory} from 'react-router-dom'

function ProfilePage() {
    const history = useHistory()

    const returnHome=(()=>{
        history.push(Route.home)
    })

    return (
        <div className='container'>
            <div className='leftSide'>
                <h1>Profile Page</h1>
                <h2>Work in progress</h2>
                
                <button
                className='homeBtn'
                onClick={returnHome}
                >Home</button>
            </div>
            <div className='rightSide'>
                <img src={ProfileSideImg} alt="" />
            </div>            
        </div>
    )
}

export default ProfilePage
