// @flow
import { css } from "styled-components";

import { isHorizontal, isVertical } from "./isPosition";
import { isAlignCenter, isAlignEnd, isAlignStart } from "./isAlign";
import type { Props } from "./resolveTooltipArrowAlign";

// TODO: use tokens for 12px and 7px - paddings and sizeTooltipArrow
const resolveTooltipArrowAlign = ({ position, align, tooltipWidth, tooltipHeight }: Props) => {
  if (isVertical(position)) {
    if (isAlignCenter(align)) {
      return css`
        left: ${Math.floor(tooltipWidth / 2 - parseFloat("7px"))}px;
      `;
    } else if (isAlignStart(align)) {
      return css`
        left: ${parseFloat("12px")};
      `;
    } else if (isAlignEnd(align)) {
      return css`
        right: ${parseFloat("12px")}px;
      `;
    }
  } else if (isHorizontal(position)) {
    if (isAlignCenter(align)) {
      return css`
        top: ${Math.floor(tooltipHeight / 2 - parseFloat("7px"))}px;
      `;
    } else if (isAlignStart(align)) {
      return css`
        top: ${parseFloat("12px")}px;
      `;
    } else if (isAlignEnd(align)) {
      return css`
        bottom: ${parseFloat("12px")}px;
      `;
    }
  }
  return null;
};

export default resolveTooltipArrowAlign;
