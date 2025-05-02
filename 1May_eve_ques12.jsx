import React, { useState, createContext, useContext } from 'react';

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#333', minHeight: '100vh' }}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <NestedComponent />
      </div>
    </ThemeContext.Provider>
  );
}

function NestedComponent() {
  const theme = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme === 'light' ? '#f0f0f0' : '#555', padding: '20px' }}>
      <p>The current theme is {theme}</p>
    </div>
  );
}

export default App;
