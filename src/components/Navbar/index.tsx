import React from 'react';
import Cookies from 'js-cookie'
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    Cookies.remove('token')
    navigate('/auth/login', { replace: true })
  }

  return <nav>
    <Link to={'/'} style={{ padding: "10px" }}>Home</Link>
    <Link to={'/profile'} style={{ padding: "10px" }}>Profile</Link>
    <button onClick={handleClick}>Log out</button>
  </nav>
}

export default Navbar;
