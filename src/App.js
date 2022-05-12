import React, { useContext } from 'react'
import Login from './components/Login';
import GlobalStyles from './styles/global';
import { AuthContext } from './contexts/auth';

const App = () => {
  const { user } = useContext(AuthContext);

  if (!user) return <Login />;

  console.log(user);

  return (
    <>
      TESTE 1111111111111111111111111111
      <GlobalStyles />
    </>
  );
};

export default App;