import { ComponentPropsWithRef } from "react";
import { User as UserIcon } from "phosphor-react";

import * as S from "./styles";

export interface AvatarProps
  extends ComponentPropsWithRef<typeof S.AvatarImage> {}

export function Avatar(props: AvatarProps) {
  return (
    <S.AvatarContainer>
      <S.AvatarImage {...props} />
      <S.AvatarFallback delayMs={600}>
        <UserIcon />
      </S.AvatarFallback>
    </S.AvatarContainer>
  );
}

Avatar.displayName = "Avatar";
