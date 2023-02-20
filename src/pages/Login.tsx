import React from 'react';
import {Navigate, Outlet, useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import useAuth from "../hooks/useAuth";

const Auth = () => (<React.Fragment>
  <Outlet />
</React.Fragment>);


const Login = () => {
  const navigate = useNavigate()
  const { isLoggedIn } = useAuth();

  const handleLogin = () => {
    Cookies.set('token', '123');
    return navigate('/', {replace: true})
  }

  if (isLoggedIn) {
    return < Navigate to='/' />
  }

  return <div>
    Login
    <button onClick={handleLogin}>Log in</button>
  </div>
};



export {
  Login,
  Auth
};
