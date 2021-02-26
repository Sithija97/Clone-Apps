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
    const addChannel = () => {
        const chanelName = prompt('Please enter channel name')

        if(chanelName) {
            db.collection("rooms").add({
                name:chanelName
            })
        }
    }
    return (
        <div className='sidebarOption' onClick={addChannelOption ? addChannel : selectChannel }>
            {Icon && <Icon className='sidebarOption_icon' />}
            {Icon ? <h3>{title}</h3> : <h3 className='sidebarOption_channel'><span className='sidebarOption_hash'># </span>{title}</h3>}
        </div>
    )
}

export default SidebarOptions;