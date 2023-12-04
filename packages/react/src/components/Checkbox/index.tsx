import { ComponentPropsWithRef } from "react";
import { Check as CheckIcon } from "phosphor-react";

import * as S from "./styles";

export interface CheckboxProps
  extends ComponentPropsWithRef<typeof S.CheckboxContainer> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <S.CheckboxContainer {...props}>
      <S.CheckboxIndicator asChild>
        <CheckIcon weight="bold" />
      </S.CheckboxIndicator>
    </S.CheckboxContainer>
  );
}

Checkbox.displayName = "Checkbox";
