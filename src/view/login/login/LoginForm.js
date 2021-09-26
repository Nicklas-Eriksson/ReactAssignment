import React, {useState} from 'react'
import './LoginForm.css'
import {Link} from 'react-router-dom'

function LoginForm({Login, error}) {    
    const[details, setDetails] = useState(getStoredUser)

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

    const submitHandler = e =>{
        e.preventDefault()
        Login(details)
    }    

    React.useEffect(() =>{
        localStorage.setItem('savedUser', JSON.stringify(details))
    }, [details])

    return (
        <form onSubmit={submitHandler}>
            <div className='formContainer'>
                <h2>Sign In</h2>
                {(error !== '') ? (<div className={error}></div>
                ) : ''}

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
                className='loginBtn'
                type="submit"
                value='Login'
                />                
            </div>
            <div className="registerField">
                <h6>Not already a member?</h6>
                <Link to='/register'>
                    <li>Register</li>
                </Link>
            </div>
        </form>        
    )
}

export default LoginForm
