import React from 'react'
import './SidebarOption.css'

function SidebarOption({text, Icon}) {
    return (
        <div className='sidebarOption'>
            <Icon/>
            <p>{text}</p>
        </div>
    )
}

export default SidebarOption
