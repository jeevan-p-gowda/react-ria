import { useContext } from "react";
import { ThemeContext } from "../context";

function Card(props){
    const theme = useContext(ThemeContext);
    const color=theme === "light" ? "black" : "#333"
    return <div className="card" style={{color}}>{props.children}</div>
}

export default Card;