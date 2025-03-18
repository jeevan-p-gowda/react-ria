import { useContext, useEffect } from "react";
import { ThemeContext } from "../context";

function ThemeSwitch(props) {
  const theme = useContext(ThemeContext);
  const altTheme = theme === "light" ? "dark" : "light";
  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "#fff" : "#333";
  }, [theme]);
  
  return (
    <button onClick={() => props.changeTheme(altTheme)}>
      {altTheme}
    </button>
  );
}

export default ThemeSwitch;