import React, {useEffect} from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from "./components/Navbar";
import useAuth from "./hooks/useAuth";


function App() {
  const { isLoggedIn, verifyStatus } = useAuth();

  useEffect(() => {
    verifyStatus()
  }, [isLoggedIn, verifyStatus])

  return (
      <React.Fragment>
        {isLoggedIn && <Navbar /> }
        <Outlet />
      </React.Fragment>
  );
}

export default App;
