// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import chaptersAddon from "react-storybook-addon-chapters";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";

import { TYPE_OPTIONS } from "./consts";
import * as Icons from "../icons";
import CardHeader from "../Card/CardHeader";
import CardSection from "../Card/CardSection";
import Card from "../Card";
import Illustration from "../Illustration";
import Button from "../Button";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Loading from "./index";

setAddon(chaptersAddon);

storiesOf("Loading", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .addWithChapters("Default", () => ({
    info:
      "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => <Loading />,
          },
        ],
      },
    ],
  }))
  .addWithChapters("Button loading", () => ({
    info:
      "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => <Button loading>Default button</Button>,
          },
        ],
      },
    ],
  }))
  .addWithChapters("Card loading", () => {
    const title = text("Title", "Card with title");
    const description = text("Description");
    const loading = boolean("Loading", true);
    const loadingText = text("Text", "Please wait, Card content is loading...");
    return {
      info:
        "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Card>
                  <Loading loading={loading} type="boxLoader" text={loadingText}>
                    <CardHeader icon={<Icons.Airplane />} title={title} subTitle={description} />
                    <CardSection>
                      <Illustration name="EnjoyApp" size="medium" />
                    </CardSection>
                  </Loading>
                </Card>
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Inline loader", () => {
    const loadingText = text("Text", "Please wait, content of the page is loading...");

    return {
      info:
        "This configuration of this component is without any height, width or paddings. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => <Loading type={TYPE_OPTIONS.INLINE_LOADER} text={loadingText} />,
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("Playground", () => {
    const type = select("Type", Object.values(TYPE_OPTIONS), TYPE_OPTIONS.PAGE_LOADER);
    const loadingText = text("Text", "Please wait, content of the page is loading...");
    const loading = boolean("Loading", true);
    const dataTest = text("dataTest", "test");

    return {
      info:
        "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
      chapters: [
        {
          sections: [
            {
              sectionFn: () => (
                <Loading loading={loading} type={type} text={loadingText} dataTest={dataTest} />
              ),
            },
          ],
        },
      ],
    };
  })
  .addWithChapters("RTL", () => ({
    info: "This is a preview of this component in RTL setup.",
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <RenderInRtl>
                <Loading
                  loading
                  type="pageLoader"
                  text="Please wait, content of the page is loading..."
                />
              </RenderInRtl>
            ),
          },
        ],
      },
    ],
  }));
