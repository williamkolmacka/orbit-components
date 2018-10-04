// @flow
import { css } from "styled-components";

import { isPositionBottom, isPositionTop, isPositionRight, isPositionLeft } from "./isPosition";
import type { Props } from "./resolveContainerPosition";

const resolveContainerPosition = ({
  position,
  containerTop,
  containerLeft,
  containerHeight,
  containerWidth,
  tooltipHeight,
  tooltipWidth,
}: Props) => {
  if (isPositionTop(position)) {
    return css`
      top: ${Math.floor(containerTop - tooltipHeight - parseFloat("7px"))}px;
    `;
  } else if (isPositionBottom(position)) {
    return css`
      top: ${Math.floor(containerTop + containerHeight + parseFloat("7px"))}px;
    `;
  } else if (isPositionRight(position)) {
    return css`
      left: ${Math.floor(containerLeft + containerWidth + parseFloat("7px"))}px;
    `;
  } else if (isPositionLeft(position)) {
    return css`
      left: ${Math.floor(containerLeft - tooltipWidth - parseFloat("7px"))}px;
    `;
  }
  return null;
};

export default resolveContainerPosition;
