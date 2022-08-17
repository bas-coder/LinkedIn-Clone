import React from 'react'
import HeaderOptions from './headerOptions';

//ICONS
import { FaSistrix } from "react-icons/fa";
import {MdSupervisorAccount} from 'react-icons/md'
import {MdMenu} from 'react-icons/md'
import { FaBriefcase } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { MdNotifications } from "react-icons/md";
import { BsChatDotsFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { auth } from "../components/firebase"
import { logout } from '../features/userSlice';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function Header() {

  const user = useSelector(selectUser);

  const dispatch  = useDispatch();

  const logOutofApp = () => {
    dispatch(logout())
    auth.signOut();
  }
  
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG24.png" alt="User" />

        <div className="header__search">
          {/* search icon */}
          <FaSistrix />
          <input placeholder='Search' type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOptions Icon={MdHome} title="Home" />
        <HeaderOptions Icon={MdSupervisorAccount} title="My Networth" />
        <HeaderOptions Icon={FaBriefcase} title="Jobs" />
        <HeaderOptions Icon={BsChatDotsFill} title="Messaging" />
        <HeaderOptions Icon={MdNotifications} title="Notifications" />
        <div className='avatar'>
        <div className="header__avatar">          
          {user.photoUrl && <HeaderOptions img={user.photoUrl} onClick={logOutofApp} />}
          {!user.photoUrl && <HeaderOptions onClick={logOutofApp} titleVisibility="none" colorName={user.displayName} marginTop="2.5px"/>}
        </div>
        <h4 className='headerOption__title'>{"Hello " + user.displayName }</h4></div>

        
        <div className="header__right--menu">
          <HeaderOptions Icon={MdMenu} />
        </div>
      </div>

    </div>
  )
}

export default Header