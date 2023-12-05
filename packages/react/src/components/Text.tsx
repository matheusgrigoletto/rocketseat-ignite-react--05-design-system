import { ComponentPropsWithRef, ElementType } from "react";

import { styled } from "@/styles";
import { fontSizes } from "@matheusgrigoletto-ignite-ui/tokens";

const sizeVariants = Object.keys(fontSizes).reduce<
  Record<string, { fontSize: string }>
>((acc, cur) => {
  acc[cur] = {
    fontSize: `$${cur}`,
  };
  return acc;
}, {});

export const Text = styled("p", {
  margin: 0,
  fontFamily: "$default",
  lineHeight: "$base",
  color: "$gray100",
  variants: {
    size: sizeVariants,
  },
  defaultVariants: {
    size: "md",
  },
});

export interface TextProps extends ComponentPropsWithRef<typeof Text> {
  as?: ElementType;
}

Text.displayName = "Text";
