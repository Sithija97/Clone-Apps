import React, { useState, useEffect } from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOptions from './SidebarOptions';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import db from '../firebase'

function Sidebar() {
    const [channels, setChannels] = useState([])

    useEffect(() => {
        db.collection("rooms").onSnapshot((snapshot) => (
            // console.log('snap: '+snapshot)
            setChannels(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    name: doc.data().name,
                }))
            )
        ))
    }, [])
    return (
        <div className='sidebar'>
            <div className="sidebar_header">
                <div className="sidebar_info">
                    <h2>Sithija Shehara</h2>
                    <h3><FiberManualRecordIcon />sithijashehara</h3>
                </div>
                <CreateIcon/>
            </div>
            <SidebarOptions Icon={InsertCommentIcon} title='Threads'/>
            {channels.map(channel => {
                 <SidebarOptions  title={channel.name} id={channel.id}/>
                 console.log('channel: '+channel.name)
            })}
        </div>
    )
}
export default Sidebar;