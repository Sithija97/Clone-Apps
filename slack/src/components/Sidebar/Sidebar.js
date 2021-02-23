import React, { useState, useEffect } from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarOptions from './SidebarOptions';
import db from '../firebase'

function Sidebar() {
    const [channels, setChannels] = useState([])

    useEffect(() => {
        db.collection("rooms").onSnapshot((snapshot) => (
            setChannels(
                snapshot.docs.map((doc) => ({
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
            <SidebarOptions Icon={InboxIcon} title='Mensions & reactions'/>
            <SidebarOptions Icon={DraftsIcon} title='Saved Items'/>
            <SidebarOptions Icon={BookmarkBorderIcon} title='Channel browser'/>
            <SidebarOptions Icon={PeopleAltIcon} title='People & user groups'/>
            <SidebarOptions Icon={AppsIcon} title='Apps'/>
            <SidebarOptions Icon={FileCopyIcon} title='File browser'/>
            <SidebarOptions Icon={ExpandLessIcon} title='Show less'/>
            <SidebarOptions Icon={ExpandMoreIcon} title='Channels'/>
            <SidebarOptions Icon={AddIcon} title='Add Channel'/>
            {channels.map(channel => (
                 <SidebarOptions title={channel.name} id={channel.id} />
            ))}
        </div>
    )
}
export default Sidebar;