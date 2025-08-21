import { getAuth, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

const Logout = ({setIsLoggedIn}) => {
  const navigate = useNavigate();
  const handleLogoutClick = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      navigate("/")
    }
    catch (error) {
      console.error(error);
      alert("ログアウトに失敗しました")
    }
  };
  return (
    <button onClick={handleLogoutClick}>ログアウト</button>
  )
}

export default Logout