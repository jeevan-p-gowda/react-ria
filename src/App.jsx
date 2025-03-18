import './App.css'
import { useEffect, useState } from 'react'
import ThemeSwitch from './components/ThemeSwitch'
import { ThemeContext } from './context'
import AppRouter from './routes'
import { BrowserRouter } from 'react-router-dom'
import Menu from './components/Menu'

function App() {
  const [theme, setTheme] = useState("light");
  const updateTheme = (t) => {
    setTheme(t);
    localStorage.setItem("theme", t);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return (
  <BrowserRouter>
      <ThemeContext.Provider value={theme}>
      {/* <Menu/> */}
      <ThemeSwitch changeTheme={(t) => updateTheme(t)}/>
        <AppRouter/>
      </ThemeContext.Provider>
  </BrowserRouter>)
  
}

export default App
