import { Avatar} from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import React from 'react'
import './Header.css'
import { useStateValue } from '../StateProvider';
function Header()  {
    const [{user}] = useStateValue();
    return (
        <div className="header">
            <dev className="header_left">
                <Avatar className='header_avatar'
                alt={user?.displayName}
                src={user?.photoURL}/>
                <AccessTimeIcon/>
            </dev>
            <div className="header_search">
                <SearchIcon/>
                <input type="text" placeholder='Search Clever Programmer'/>
            </div>
            <div className="header_right">
                <HelpOutlineOutlinedIcon/>
            </div>
        </div>
    )
}

export default Header;