import React from 'react'
import './SidebarOptions.css'
import { useHistory } from 'react-router-dom';
import db from '../firebase'

function SidebarOptions({ Icon, title, id, addChannelOption }) {
    const history = useHistory()
    const selectChannel = () => {
        if (id) {
            history.push(`/room/${id}`)
        } else {
            history.push(`title`)
        }
    }
    const addChannel = () => {}
    return (
        <div className='sidebarOption' onClick={addChannelOption ? addChannel : selectChannel }>
            {Icon && <Icon className='sidebarOption_icon' />}
            {Icon ? <h3>{title}</h3> : <h3 className='sidebarOption_channel'><span className='sidebarOption_hash'># </span>{title}</h3>}
            {console.log('inside options' + title)}
        </div>
    )
}

export default SidebarOptions;