import { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import './App.css'
import './Firebase';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import Login from './Components/Login';
import CreatePost from './Components/CreatePost';
import Logout from './Components/Logout'


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=> {
  const auth = getAuth();
  const unsubscribe = onAuthStateChanged (auth, (user) => {
    setIsLoggedIn(!!user);
  })
  return () => unsubscribe();
},[]);
  return (
  <Router>
    <Navbar isLoggedIn={isLoggedIn}/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/logout" element={<Logout setIsLoggedIn={setIsLoggedIn} />} />
    </Routes>
  </Router>
  )
}

export default App
