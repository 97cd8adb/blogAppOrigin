import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'

const Login = () => {
  const handleLoginClick = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  }
  return (
    <div onClick={handleLoginClick}>Login</div>
  )
}

export default Login