import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import MessageIcon from '@material-ui/icons/Message';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonIcon from '@material-ui/icons/Person';
import SidebarOption from './SidebarOption';

function Sidebar() {
    return (
        <div>
            <TwitterIcon/>
            <SidebarOption Icon={HomeIcon} text='Home'/>
            <SidebarOption Icon={SearchIcon} text='Explore'/>
            <SidebarOption Icon={NotificationsActiveIcon} text='Notifications'/>
            <SidebarOption Icon={MessageIcon} text='Messages'/>
            <SidebarOption Icon={BookmarkBorderIcon} text='Bookmarks'/>
            <SidebarOption Icon={ListAltIcon} text='Lists'/>
            <SidebarOption Icon={PersonIcon} text='Profile'/>
        </div>
    )
}

export default Sidebar
