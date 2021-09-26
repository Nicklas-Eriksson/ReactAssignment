import React from 'react'
import BackgroundImg from '../../shared/img/leftSideImg.jpg'
import '../../view/profile/ProfilePage.css'

function LoginBackgroundPage() {
    return (
        <div className='container'>  
            <div className='leftSide'>
                <h1>The Pain Cave</h1>
                <h3>Join us today.</h3>
            </div>          
            <div className="rightSide">
                <img src={BackgroundImg} alt="" />
            </div>
        </div>
    )
}

export default LoginBackgroundPage
