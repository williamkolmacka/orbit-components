// @flow
import { css } from "styled-components";

import { isHorizontal, isVertical } from "./isPosition";
import { isAlignCenter, isAlignEnd, isAlignStart } from "./isAlign";
import type { Props } from "./resolveContainerAlign";

const resolveContainerAlign = ({
  align,
  position,
  containerTop,
  containerLeft,
  containerHeight,
  containerWidth,
  tooltipHeight,
  tooltipWidth,
}: Props) => {
  if (isAlignCenter(align)) {
    if (isHorizontal(position)) {
      return css`
        top: ${Math.floor(containerTop + containerHeight / 2 - tooltipHeight / 2)}px;
      `;
    } else if (isVertical(position)) {
      return css`
        left: ${Math.floor(containerLeft + containerWidth / 2 - tooltipWidth / 2)}px;
      `;
    }
    return null;
  } else if (isAlignStart(align)) {
    if (isHorizontal(position)) {
      return css`
        top: ${Math.floor(containerTop - parseFloat("7px"))}px;
      `;
    } else if (isVertical(position)) {
      return css`
        left: ${Math.floor(
          containerLeft + containerWidth / 2 - parseFloat("12px") - parseFloat("7px"),
        )}px;
      `;
    }
  } else if (isAlignEnd(align)) {
    if (isHorizontal(position)) {
      return css`
        top: ${Math.floor(containerTop - tooltipHeight + containerHeight + parseFloat("7px"))}px;
      `;
    } else if (isVertical(position)) {
      return css`
        left: ${Math.floor(containerLeft + containerWidth - tooltipWidth + parseFloat("7px"))}px;
      `;
    }
  }
  return null;
};

export default resolveContainerAlign;
