import { styled } from "@/styles";

export const TextInputContainer = styled("div", {
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  backgroundColor: "$gray900",
  border: "2px solid $gray900",
  borderRadius: "$sm",
  variants: {
    size: {
      sm: {
        padding: "$2 $3",
      },
      md: {
        padding: "$3 $4",
      },
    },
  },

  "&:has(input:focus)": {
    borderColor: "$ignite300",
  },

  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  defaultVariants: {
    size: "md",
  },
});

export const Prefix = styled("span", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$gray400",
  fontWeight: "regular",
});

export const Input = styled("input", {
  width: "100%",
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "regular",
  background: "transparent",
  border: 0,

  "&:focus": {
    outline: 0,
  },

  "&:disabled": {
    cursor: "not-allowed",
  },

  "&::placeholder": {
    color: "$gray400",
  },
});
