import React from "react";
import "./Button.css";

interface Props {
  size?: "small" | "default" | "large";
  onClick?: React.MouseEventHandler;
}

const Button: React.FunctionComponent<Props> = (props) => {
  return (
    <button className={`button ${props.size}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
