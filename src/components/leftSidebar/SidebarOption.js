import React from 'react'

function SidebarOption({Icon, title}) {
    return (
        // Rename if other styling is wanted
        <div class='headerOption'>
            {Icon && <Icon className='headerOption_icon'
            />}            
            <h3 className='headerOption_title'>{title}</h3>
        </div>
    )
}

export default SidebarOption