import React, {useState} from 'react'
import './RegisterForm.css'
import {Link, useHistory} from 'react-router-dom'
import Route from '../../../routes/RoutingPath'
import User from '../../../components/user/GetUser'

function RegisterForm({Register, error}) {
    const[details, setDetails] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
    })

    React.useEffect(()=>{
        localStorage.setItem('registeredUser', JSON.stringify(details))
    }, [details])

    const history = useHistory()

    const submitHandler = e =>{
        e.preventDefault()
        Register(details)
        history.push(Route.home)
        window.location.reload()
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='formContainer'>
                <h2>Register</h2>
                {(error !== '') ? (<div className={error}></div>
                ) : ''}

                {/* {Name} */}
                <div className="formGroup">
                    <input placeholder='Full Name'type="text" name='name' id='name' 
                    onChange={e => setDetails({...details, name: e.target.value})} 
                    value={details.name} />
                </div>

                {/* {Email} */}
                <div className="formGroup">
                    <input placeholder='Email@adress.com' type="email" name='email' id='email'
                    onChange={e => setDetails({...details, email: e.target.value})} 
                    value={details.email} />
                </div>

                {/* {Username} */}
                <div className="formGroup">
                    <input placeholder='Username' type="username" name='username' id='username'
                    onChange={e => setDetails({...details, username: e.target.value})} 
                    value={details.username} />
                </div>

                {/* {Password} */}
                <div className="formGroup">
                    <input placeholder='Password' type="password" name='password' id='password'
                    onChange={e => setDetails({...details, password: e.target.value})} 
                    value={details.password} />
                </div>
                <input 
                className='registerBtn'
                type="submit"
                value='Register'
                />
            </div>
            <div className="loginField">
                <h6>Already a member?</h6>
                <Link to='/login'>
                    <li>Login</li>
                </Link>
            </div>
        </form>        
    )
}

export default RegisterForm
