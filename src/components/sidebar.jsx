import React from 'react'
import {MdBookmark} from 'react-icons/md';
import {FcSimCardChip} from 'react-icons/fc';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import HeaderOptions from './headerOptions';

function Sidebar() {
  const user = useSelector(selectUser)
  
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src="https://imgs.search.brave.com/MxKw55zWkzlUgpQAqASiLE_CISuSU2Cl8om3Tay-EZw/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5u/bHIxRHpSSkc4UUJL/ZHBrVXhndnB3SGFF/OCZwaWQ9QXBp" alt="" />
        <div className="sidebar__avatar">
            {user.photoUrl && <HeaderOptions className='sidebar__avatar-img' img={user.photoUrl} />}
            {!user.photoUrl && <HeaderOptions className="sidebar__avatar-color" titleVisibility="none" colorName={user.displayName} marginTop="11px"  />}
          
        </div>
        <h2>{ user.displayName }</h2>
        <h4>{ user.email }</h4>
      </div>
      <div className="sidebar__hr divider"></div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on Post</p>
          <p className="sidebar__statNumber">2,447</p>          
        </div>
        <div className="sidebar__others">
          <p className='sidebar__others--p'>Access Exclusive Tools and Insights</p>
          <p className='premium'><span><FcSimCardChip/></span>Retry Premium Free</p>
          <div className="sidebar__hr divider"></div>
          <p className="sidebar__describtion premium">
            <MdBookmark/>
            <p>My Items</p>
          </p>
        </div>        
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {(recentItem("reactjs"))}
        {(recentItem("programming"))}
        {(recentItem("Flutter"))} 
      </div>
    </div>
  )
}

export default Sidebar