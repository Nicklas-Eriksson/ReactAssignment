import React from 'react'
import './Profile.css'
import Logout from '../../../shared/img/icons/logout.png'
import Avatar from '../../../shared/img/icons/avatar.png'
import HeaderOption from '../HeaderOption';
import Route from '../../../routes/RoutingPath'
import {useHistory} from 'react-router-dom'
import User from '../../user/GetUser'

function Profile({avatar, title}) {
    const avatarClicked = (() =>{
        const menu = document.querySelector('.loginMenu')
        menu.classList.toggle('active')
    })
    
    const history = useHistory()

    const goToProfile = (() =>{
        history.push(Route.profile)
    })

    const signOut = (() =>{
        localStorage.removeItem('savedUser');
        history.push(Route.login)
        {window.location.reload()}
    })

    return (
        <div className='loginContainer' >
            <div
            className="loginOptionAvatar"
            onClick={avatarClicked}
            >
                <HeaderOption 
                Icon={Avatar}
                title={title}
                />                
            </div>
                
            <div className="loginMenu">
                <h3>{User.username}</h3>
                <div className='listContainer'>
                    <ul>
                        <li
                         id='menuBtn' onClick={goToProfile}>
                            <HeaderOption
                            Icon={Avatar} title='Profile Page'
                            />
                        </li>
                        <li
                        id='menuBtn'
                        onClick={signOut}>
                            <HeaderOption
                            Icon={Logout}
                            title='Sign Out'
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Profile
