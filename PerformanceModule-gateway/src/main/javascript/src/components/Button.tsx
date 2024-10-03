// import { useState } from "react";
import "./shark.css";

interface Props {
  children: string;
  color?: "start" | "stop";
  onClick: () => void;
}

// const [selectedIndex, setSelectedIndex] = useState(0);

const Button = ({ children, onClick, color = "start" }: Props) => {
  return (
    <button type="button" className={color + "Button"} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
