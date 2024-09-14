// App.jsx
import React, { useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import useWindowResize from './hooks/useWindowResize';
import './App.css';

const App = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const { width } = useWindowResize();

 
  useEffect(() => {
    if (width <= 768) {
      setTheme('light');
    }
  }, [width, setTheme]);


  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${theme}`}>
      <header className="app-header">
        <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
        {width > 768 && (
          <button onClick={toggleTheme}>Toggle Theme</button>
        )}
      </header>
    </div>
  );
};

export default App;
