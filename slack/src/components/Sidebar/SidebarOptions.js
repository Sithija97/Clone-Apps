import React from 'react'
import './SidebarOptions.css'
import db from '../firebase'

function SidebarOptions({Icon, title}) {
    return (
        <div className='sidebarOption'>
            {Icon && <Icon className='sidebarOption_icon'/>}
            {Icon ? <h3>{title}</h3> : <h3 className='sidebarOption_channel'><span className='sidebarOption_hash'># </span>{title}</h3>}
            {console.log('inside options'+title)}
        </div>
    )
}

export default  SidebarOptions;