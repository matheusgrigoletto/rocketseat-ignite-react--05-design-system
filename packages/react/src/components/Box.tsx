import { ComponentPropsWithRef, ElementType } from "react";

import { styled } from "@/styles";

export interface BoxProps extends ComponentPropsWithRef<typeof Box> {
  as?: ElementType;
}

export const Box = styled("div", {
  padding: "$6",
  backgroundColor: "$gray800",
  border: "1px solid $gray600",
  borderRadius: "$md",
});

Box.displayName = "Box";
