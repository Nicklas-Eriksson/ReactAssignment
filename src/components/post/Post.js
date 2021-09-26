import React from 'react'
import './Post.css'
import Avatar from '../../shared/img/icons/avatar.png'
import Like from '../../shared/img/icons/like.png'
import Comment from '../../shared/img/icons/comment.png'
import HeaderOption from '../header/HeaderOption'

function Post({name, description, message}) {
    return (
        <div className='post'>
            <div className="postHeader">
                <img id='avatar' src={Avatar} alt="Profile picture" />
                <div className="postInfo">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="postBody">
                <p>{message}</p>
            </div>

            <div className="postButtons">
                <HeaderOption
                 Icon={Like}
                 title='Like'
                 color='Gray'
                />
                <HeaderOption
                 Icon={Comment}
                 title='Comment'
                 color='Gray'
                />
            </div>
        </div>
    )
}

export default Post
