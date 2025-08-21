import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({setIsLoggedin}) => {
  const navigate = useNavigate();
  const handleLoginClick = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
      try {
        await signInWithPopup(auth, provider);
        setIsLoggedin(true);
        navigate("/");
      } catch (error) {
        console.error(error);
        alert("ログインに失敗しました")
      }  
    };
  return (
    <button onClick={handleLoginClick}>ログイン</button>
  )
}

export default Login