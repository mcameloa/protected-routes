import {useState} from "react";
import Cookies from "js-cookie";


const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const verifyStatus = () => {
    const token = Cookies.get('token')
    if (!token) {
      setIsLoggedIn(false)
    }
    setIsLoggedIn(true)
  }


  return {isLoggedIn, verifyStatus}
}


export default useAuth;
