import { ComponentPropsWithRef } from "react";

import { styled } from "@/styles";

export const TextArea = styled("textarea", {
  padding: "$3 $4",
  boxSizing: "border-box",
  minHeight: 80,
  backgroundColor: "$gray900",
  border: "2px solid $gray900",
  borderRadius: "$sm",
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "$regular",
  resize: "vertical",

  "&:focus": {
    outline: 0,
    borderColor: "$ignite300",
  },

  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
  },

  "&:placeholder": {
    color: "$gray400",
  },
});

export interface TextAreaProps extends ComponentPropsWithRef<typeof TextArea> {}

TextArea.displayName = "TextArea";
