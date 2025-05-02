import React, { useState, createContext, useContext } from 'react';

const AuthContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, toggleAuth }}>
      <Navbar />
      <Main />
      <Footer />
    </AuthContext.Provider>
  );
}

function Navbar() {
  const { toggleAuth } = useContext(AuthContext);

  return (
    <nav>
      <button onClick={toggleAuth}>Login/Logout</button>
    </nav>
  );
}

function Main() {
  const { isLoggedIn } = useContext(AuthContext);

  return <main>{isLoggedIn ? 'Welcome back, User!' : 'Please log in to continue.'}</main>;
}

function Footer() {
  const { isLoggedIn } = useContext(AuthContext);

  return <footer>{isLoggedIn ? 'Welcome, User' : 'Please log in'}</footer>;
}

export default App;
