import React, {useState, useEffect} from 'react';
import InputOptions from './inputOptions';
import firebase from 'firebase/compat/app';
import Post from './post';
import FlipMove from 'react-flip-move';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import {TbEdit} from 'react-icons/tb';
import {BsCardImage, BsYoutube} from 'react-icons/bs';
import {GoCalendar} from 'react-icons/go';
import {MdArticle} from 'react-icons/md';
import { db } from "./firebase";
 
 function Feed() {

  const user = useSelector(selectUser);

  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
    .orderBy('timestamp',"desc")
    .onSnapshot((snapshot) => 
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      describtion: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    setInput("");
  };

   return (
     <div className='feed'>
       <div className="feed__inputContainer">
          <div className="feed__inputContainer--input">
            <div><TbEdit /></div>
            <form>
               <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Start a post" type="text" />
               <button onClick={sendPost} type='submit'>Send</button>
            </form>
          </div>

          <div className="feed__inputOptions">
            <InputOptions Icon={BsCardImage} title="Photo" color='rgb(216, 162, 15)' />
            <InputOptions Icon={BsYoutube} title="Video" color='rgb(15, 176, 216)' />
            <InputOptions Icon={GoCalendar} title="Event" color='rgb(153, 21, 230)' />
            <InputOptions Icon={MdArticle} title="Write Article" color='rgb(65, 161, 9)' />
          </div>
       </div>

       {/* Post */}
       <FlipMove>
        {posts.map(({ id, data: {name, describtion, message, photoUrl} }) => (
            <Post
              key={id}
              name={name}
              describtion={describtion}
              message={message}
              photoUrl={photoUrl}
            />
        ))}        
       </FlipMove>

     </div>
   );
 }
 
 export default Feed
 