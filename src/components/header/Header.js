import React from 'react'
import './Header.css'
import Home from '../../shared/img/icons/home.png'
import Messages from '../../shared/img/icons/chat.png'
import Friendlist from '../../shared/img/icons/friendlist.png'
import Avatar from '../../shared/img/icons/avatar.png'
import HeaderOption from './HeaderOption'
import Profile from './profile/Profile'
import User from '../user/GetUser'
import Route from '../../routes/RoutingPath'
import {useHistory} from 'react-router-dom'

function Header() {
    const history = useHistory()
    
    const clearLocalStorage=()=>{
        localStorage.clear()
        alert('Local storage is now empty')
        history.push(Route.register)
    }

    return (
        <div className='header'>
            <div className="header_left">
                <img src="https://cdn-icons-png.flaticon.com/512/31/31670.png" alt="Logo" />
                <h1 className='logoName'>
                    The Practise Page
                    </h1>            
                <button
                className='clearLocalStorageBtn'
                onClick={clearLocalStorage}
                >
                    Clear Local Storage
                </button>
            </div>

            <div className="header_right">
                <HeaderOption Icon={Home} title='Home'/>

                <HeaderOption Icon={Messages} title='Messages' />

                <HeaderOption Icon={Friendlist} title='Friendlist' />

                <Profile 
                avatar={Avatar}
                title={User.name}
                />
            </div>
        </div>
    )
}

export default Header
