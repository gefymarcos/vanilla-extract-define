import { createGlobalTheme } from "@vanilla-extract/css";
import { theme } from "./theme.contract.css";

export const themeClass = createGlobalTheme(":root", theme, {
  color: {
    primary: "orange",
    secondary: "black"
  },
  font: {
    body: "arial",
    size: {
      small: "12",
      medium: "14",
      large: "16"
    }
  }
});
