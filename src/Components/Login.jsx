import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(() => {
      navigate("/")
      }
    )
  }
  return (
    <button onClick={handleLoginClick}>ログイン</button>
  )
}

export default Login