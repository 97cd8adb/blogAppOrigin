import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = ( {isLoggedIn} ) => {
      return (
        <nav>
          <ul>
            <li><Link to="/">ホーム</Link></li>
            {isLoggedIn ? (
              <>
                <li><Link to="/create">記事投稿</Link></li>
                <li><Link to="/logout">ログアウト</Link></li>
              </>
            ) : (
              <>
                <li><Link to="/login">ログイン</Link></li>
              </>
            )}
          </ul>
        </nav>
      )
    }

export default Navbar