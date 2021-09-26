import React from 'react'
import './HeaderOption.css'

function HeaderOption({Icon, title}) {
    return (
        <div className='headerOption'>
            <img 
            className='headerOption_icon' 
            src={Icon} alt="Home" 
            />
            <h3 className='headerOption_title'>{title}</h3>
        </div>
    )
}

export default HeaderOption