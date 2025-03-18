import './App.css'
import { useState } from 'react'
import ThemeSwitch from './components/ThemeSwitch'
import { ThemeContext } from './context'
import AppRouter from './routes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [theme, setTheme] = useState("light");
  return (
  <BrowserRouter>
    <ThemeSwitch changeTheme={(t) => setTheme(t)}/>
      <ThemeContext.Provider value={theme}>
        <AppRouter/>
      </ThemeContext.Provider>
  </BrowserRouter>)
  
}

export default App
