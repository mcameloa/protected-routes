import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import useAuth from "../hooks/useAuth";


interface ProtectRouteProps {
  children : React.ReactElement
}

const ProtectRoute = ({children}: ProtectRouteProps) => {
  const navigate = useNavigate()
  const { isLoggedIn, verifyStatus } = useAuth();


  useEffect(() => {
    verifyStatus()
  }, [isLoggedIn, navigate, verifyStatus])

  return <React.Fragment>
    { isLoggedIn ? children : null }
  </React.Fragment>
}

export default ProtectRoute;
