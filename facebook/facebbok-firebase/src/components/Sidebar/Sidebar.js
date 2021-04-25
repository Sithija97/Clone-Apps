import React from 'react'
import SidebarRow from './SidebarRow'
import { ExpandMoreOutlined } from '@material-ui/icons';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow
                src='https://scontent.fcmb4-1.fna.fbcdn.net/v/t1.6435-9/120949464_2667999066834394_4728770985596586303_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=5gZPr8AaxaEAX_oNDMY&_nc_ht=scontent.fcmb4-1.fna&oh=7fb5cc81b4dd6c4045232780d79e8f65&oe=60A91DF2'
                title='sithija'
            />
            <SidebarRow
                Icon={LocalHospitalIcon}
                title="COVID-19 Information Center"
            />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messanger" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="More" />
        </div>
    )
}

export default Sidebar
