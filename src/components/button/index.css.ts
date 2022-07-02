import { style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { theme } from "../../styles/theme.contract.css";

export const exampleStyle = style({
  backgroundColor: theme.color.primary,
  fontFamily: theme.font.body,
  fontSize: theme.font.size.medium,
  color: theme.color.secondary,
  padding: 10
});

export const buttonRecipe = recipe({
  variants: {
    color: {
      other: { background: "whitesmoke" }
    }
  }
});

export type ButtonVariants = RecipeVariants<typeof buttonRecipe>;
