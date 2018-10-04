// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Tooltip from "../index";
import Airplane from "../../icons/Airplane";

describe("Tooltip", () => {
  const message = "Write some message to the user";
  const component = shallow(
    <Tooltip message={message}>
      <Airplane />
    </Tooltip>,
  );
  it("it should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
