// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs/react";

import * as Icons from "../icons";
import { SIZE_OPTIONS } from "./consts";

import Tooltip from "./index";

setAddon(chaptersAddon);

const getIcons = defaultIcon => select("Icon", [undefined, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("Tooltip", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Playground", () => {
    const message = text(
      "message",
      "Write your text here. If it’s longer than three lines though, consider format your content in some more sctructured way.",
    );
    const inline = boolean("inline", true);
    const Icon = getIcon(getIcons("Airplane"));
    const size = select("size", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.SMALL);
    return {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Tooltip size={size} message={message} inline={inline}>
                  <Icon />
                </Tooltip>
              ),
            },
          ],
        },
      ],
    };
  });
