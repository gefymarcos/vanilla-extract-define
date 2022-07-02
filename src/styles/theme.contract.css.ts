import { createThemeContract } from "@vanilla-extract/css";

export const theme = createThemeContract({
  color: {
    primary: null,
    secondary: null
  },
  font: {
    body: null,
    size: {
      small: null,
      medium: null,
      large: null
    }
  }
});
