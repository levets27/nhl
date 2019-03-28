import React from "react";
import { mount } from "enzyme";
import StatTableRow from "./statTableRow";

describe("StatTableRow", () => {
  let props = {
    player: {
      id: 1,
      firstName: "Steve",
      lastName: "Leach",
      jerseyNumber: 27,
      position: "D",
      games: 82,
      goals: 12,
      assists: 25,
      points: 37,
      pim: 138
    }
  };
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
    it("always renders 10 tds", () => {
      const tds = statTable().find("td");
      expect(tds.length).toBe(10);
    });

    it("always renders an image", () => {
      const imgs = statTable().find("img");
      expect(imgs.length).toBe(1);
    });
  });
});
