import * as RadixAvatar from "@radix-ui/react-avatar";

import { styled } from "@/styles";

export const AvatarContainer = styled(RadixAvatar.Root, {
  display: "inline-block",
  width: "$16",
  height: "$16",
  borderRadius: "$full",
  overflow: "hidden",
});

export const AvatarImage = styled(RadixAvatar.Image, {
  width: "100%",
  height: "100%",
  borderRadius: "inherit",
  objectFit: "cover",
});

export const AvatarFallback = styled(RadixAvatar.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$gray800",
  backgroundColor: "$gray600",

  svg: {
    width: "$6",
    height: "$6",
  },
});
