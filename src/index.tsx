import React from "react";
import ReactDOM from "react-dom";
import Button from "./components/button";
import { buttonRecipe } from "./components/button/index.css";

import "./styles/main.scss";

const customClass = buttonRecipe({ color: "other" });

ReactDOM.render(
  <Button customClass={customClass} />,
  document.getElementById("root")
);
