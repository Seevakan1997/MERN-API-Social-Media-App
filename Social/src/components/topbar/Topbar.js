import React, { useContext } from 'react'
import "./topbar.css"
import { Search as SearchIcon, Person as PersonIcon, Chat as ChatIcon, Notifications  as NotoficationsIcon } from '@mui/icons-material';
import {Link} from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function Topbar() {

    const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className='topbarContainer'>

        <div className='topbarLeft'>
        <Link to="/" style={{textDecoration:"none"}}>
        <spam className='logo'>StarKing</spam>
        </Link>
        </div>

        <div className='topbarCenter'>
            <div className='searchbar'>
                <SearchIcon className='searchIcon'/>
                <input placeholder='Search here...' className='searchInput'></input>
            </div>
        </div>

        <div className='topbarRight'>
            <div className='topbarLinks'>
                <span className='topbarLink'>Homepage</span>
                <span className='topbarLink'>Timeline</span>
            </div>
            <div className='topbarIcons'>
                <div className='topbariconItem'>
                    <PersonIcon/>
                    <span className='topbarIconBadge'>1</span>
                </div>
                <div className='topbariconItem'>
                    <ChatIcon/>
                    <span className='topbarIconBadge'>2</span>
                </div>
                <div className='topbariconItem'>
                    <NotoficationsIcon/>
                    <span className='topbarIconBadge'>1</span>
                </div>
            </div>
            <Link to={`/profile/${user.username}`}>
            <img src={user.profilePicture ? user.profilePicture  : PF+"no-profile.jpg"} className='topbarImage'/>
            </Link>
        </div>


    </div>
  );
}
