import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SidebarOption from './SidebarOption';

function Sidebar() {
    return (
        <div>
            <TwitterIcon/>
            <SidebarOption/>
            <SidebarOption/>
            <SidebarOption/>
            <SidebarOption/>
        </div>
    )
}

export default Sidebar
