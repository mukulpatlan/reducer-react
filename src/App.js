import React, { useContext } from 'react';

import AuthContext from './store/auth-context';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const storedLogin = localStorage.getItem('isLoggedIn');
  //   if (storedLogin === '1') {
  //     setIsLoggedIn(true);
  //   }
  // }, []);
  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   setIsLoggedIn(true);
  //   localStorage.setItem('isLoggedIn', 1);
  // };

  // const logoutHandler = () => {
  //   setIsLoggedIn(false);
  //   localStorage.setItem('isLoggedIn', 0);
  // };

  const ctx = useContext(AuthContext)
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
