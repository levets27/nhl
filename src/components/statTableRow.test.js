import React from "react";
import { mount } from "enzyme";
import StatTableRow from "./statTableRow";

describe("StatTableRow", () => {
  let props;
  let mountedStatTable;
  const statTable = () => {
    if (!mountedStatTable) {
      mountedStatTable = mount(
        <table>
          <tbody>
            <StatTableRow {...props} />
          </tbody>
        </table>
      );
    }
    return mountedStatTable;
  };

  beforeEach(() => {
    mountedStatTable = undefined;
  });

  it("always renders a tr", () => {
    const trs = statTable().find("tr");
    expect(trs.length).toBe(1);
  });

  describe("the rendered tr", () => {
    it("always renders an image", () => {
      const img = statTable().find("img");
      expect(img.length).toBeGreaterThan(0);
    });
  });
});
