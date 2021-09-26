import React, {useState, useEffect} from 'react'
import RegisterForm from './RegisterForm'
import LoginBackground from '../../../components/login/LoginBackgroundPage'
import '../../../view/profile/ProfilePage.css'

function RegisterView() {   
    const [error, setError]=useState('')
    const storedUsers = [] //Ska innehålla alla användare
    const [details, setDetails] = useState(user)

    function user() {
        const storedValues = localStorage.getItem('registeredUser')

        if(!storedValues) return{
            name: '',
            email: '',
            username: '',
            password: ''
        }
        return JSON.parse(storedValues)
    }

    const Register = details =>{
        //check if user already exists
        //if not store it
        // {window.location.reload()}
        if(details.username !== storedUsers.username){
            setDetails({
                name: details.name,
                email: details.email,
                username: details.username,
                password: details.password
            })
        }
        else{
            setError('That username is taken')
        }
    }

    return (
        <div>
            <LoginBackground />
            <div className='form'>
                <RegisterForm
                Register={Register} error={error}/>
            </div>
        </div>
    )
}

export default RegisterView