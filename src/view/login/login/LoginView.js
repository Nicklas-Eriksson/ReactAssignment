import React, {useState} from 'react'
import LoginForm from './LoginForm'
import LoginBackground from '../../../components/login/LoginBackgroundPage'
import '../../profile/ProfilePage.css'
import HomeView from '../../app/App'

function LoginPage() {
    const [error, setError]=useState('')
    const[user, setUser] = useState(getStoredUser)

    function getStoredUser() {
        const storedValues = localStorage.getItem('savedUser')        
        if(!storedValues) return{
            name: '',
            email: '',
            username: '',
            password: ''
        }
        return JSON.parse(storedValues)
    }

    const adminUser = {
        username: 'hakk',
        password: '123',
        name: 'Nicklas Eriksson',
        id: 0
    }

    const Login = details => {
        //check for match
        if(details.username === adminUser.username && details.password === adminUser.password){
            setUser({
                username: details.username,
                password: details.password
            })
        }
        else(
            setError('credentials do not matching admin')
        )
    }

    return (
        <div> 
            {(user.username === '' && user.password  === '') ? (
               <div>
                   <LoginBackground />
                    <div className='form'>
                        <LoginForm Login={Login} error={error}/>
                    </div>
               </div>
            ) : (
                <div>
                    <HomeView />
                </div>
            )}
        </div>
    )
}

export default LoginPage
