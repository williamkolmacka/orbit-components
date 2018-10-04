// @flow
import { css } from "styled-components";

import { isPositionBottom, isPositionLeft, isPositionRight, isPositionTop } from "./isPosition";
import type { Props } from "./resolveTooltipArrowPosition";

const resolveTooltipArrowPosition = ({ position }: Props) => {
  const cssPosition =
    (isPositionTop(position) && "bottom") ||
    (isPositionBottom(position) && "top") ||
    (isPositionLeft(position) && "right") ||
    (isPositionRight(position) && "left");
  return css`
    ${cssPosition}: -${parseFloat("7px")}px; // TODO: use token sizeTooltipArrow
  `;
};

export default resolveTooltipArrowPosition;
