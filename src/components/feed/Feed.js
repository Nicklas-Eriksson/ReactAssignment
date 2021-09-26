import React , {useState, useEffect} from 'react'
import './Feed.css'
import Pen from '../../shared/img/icons/pen.png'
import Post from '../post/Post'
import user from '../user/GetUser'

function Feed() {
    const [message, setMessage] = useState('')
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
 
    let m = ''
    let t = ''

    const sendPost = e => {
        e.preventDefault()

        localStorage.setItem('postMessage', JSON.stringify(message))

        localStorage.setItem('postTitle', JSON.stringify(title))

        displayMessage()

        window.location.reload()
    }

    const displayMessage = ()=>{
        t = JSON.parse(localStorage.getItem('postTitle'))
        m = JSON.parse(localStorage.getItem('postMessage'))
    }

    return (
        <div className='feed'>
            <div className="feedInputContainer">
                <div className="feedInput">
                    <form>
                        <img className='pen' src={Pen} alt="Create post" 
                        />
                        <input 
                        placeholder='Title...'
                        type="text" 
                        value={title} onChange={e => setTitle(e.target.value)} 
                        />
                        <input 
                        placeholder='Message...'
                        type="text" 
                        value={message} onChange={e => setMessage(e.target.value)} 
                        />
                        <button onClick={sendPost} type='submit'>Post</button>
                    </form>
                </div>               
            </div>
                      
            {/* Dummy Post */}
            <div className="postFeed">
                {displayMessage()}
                <Post
                    name={user.username}
                    description={t}
                    message={m}
                />
            </div>
        </div>
    )
}

export default Feed
