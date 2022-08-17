import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { auth } from "../components/firebase"
import { selectUser } from '../features/userSlice';
import { logout } from '../features/userSlice';
import { login } from '../features/userSlice';

//COMPONENTS
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import Login from '../pages/Login';
import Feed from '../components/feed';
import Widgets from '../components/widgets';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid, 
            displayName: userAuth.displayName,
            photoUrl:userAuth.photoURL,
          })
        );
      } else {
        //user is logged out
        dispatch(logout())
      }
    })
  },[dispatch]);

  return (
    <div className="app">



    {/* App body */}

    {!user ? (
    <Login />
    ) : (
      <div className="home">
        {/* Header */}
        <Header />
        <div className="home__body">
          {/* Sidebar */}
          <Sidebar />
          {/*Feed*/}
          <Feed />
          {/* Widgets */}
          <Widgets />
        </div>
      </div>
    )}
  </div>
  );
}

export default App;
