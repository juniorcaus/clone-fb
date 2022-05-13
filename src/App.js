import React, { useContext } from 'react'
import Login from './components/Login';
import GlobalStyles from './styles/global';
import { AuthContext } from './contexts/auth';
import Header from './components/Header';

const App = () => {
  const { user } = useContext(AuthContext);

  if (!user) return <Login />;

  console.log(user);

  return (
    <>
      <Header />
      <GlobalStyles />
    </>
  );
};

export default App;