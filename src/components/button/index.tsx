import React from "react";
import { exampleStyle } from "./index.css";

type ButtonProps = {
  customClass: string;
};

function Button({ customClass }: ButtonProps) {
  return (
    <button
      className={`${exampleStyle} ${customClass}`}
      type="button"
      onClick={() => {}}
    >
      Default
    </button>
  );
}

export default Button;
