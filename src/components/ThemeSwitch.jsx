import { useEffect, useState } from "react";

function ThemeSwitch(props) {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "#fff" : "#333";
  }, [theme]);
  
  if (theme === "light") {
    return <button onClick={() => {setTheme("dark"); props.changeTheme("dark");}}>Dark Mode</button>;
  }
    return <button onClick={() => {setTheme("light");props.changeTheme("light");}}>Light Mode</button>;
}

export default ThemeSwitch;