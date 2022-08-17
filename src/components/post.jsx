import React, { forwardRef } from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { FaRegThumbsUp } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import { MdOutlineInsertComment } from "react-icons/md";
import { MdSend } from "react-icons/md";
import HeaderOptions from './headerOptions';
import InputOption from './inputOptions';

const Post = forwardRef (({name, describtion, message, photoUrl}, ref) => {

  const user = useSelector(selectUser);

  return (
    <div ref={ref} className='post'>
      <div className="post__header">
        <div className="post__avatar">
          {user.photoUrl && <HeaderOptions img={user.photoUrl} />}
          {!user.photoUrl && <HeaderOptions titleVisibility="none" colorName={user.displayName} marginTop="12px"  />}
        </div>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{describtion}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={FaRegThumbsUp} title="like" color="gray" />
        <InputOption Icon={MdOutlineInsertComment} title="comment" color="gray" />
        <InputOption Icon={BsShare} title="share" color="gray" />
        <InputOption Icon={MdSend} title="send" color="gray" />
      </div>
    </div>
  );
});

export default Post