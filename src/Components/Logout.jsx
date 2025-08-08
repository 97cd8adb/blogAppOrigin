import { getAuth, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    const auth = getAuth();
    signOut(auth)
    .then(()=> {
      navigate("/")
      }
    )
  }
  return (
    <button onClick={handleLogoutClick}>ログアウト</button>
  )
}

export default Logout