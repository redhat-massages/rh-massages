// react imports
import React from "react";
import { shallow } from "enzyme";

// test imports
import { NavLink, Tooltip } from "reactstrap";
import ProfileLink from "../../../components/links/ProfileLink";

test("renders content correctly", () => {
  const wrapper = shallow(<ProfileLink />);
  const link = wrapper.find(NavLink);
  const tooltip = wrapper.find(Tooltip);

  expect(link.props().onClick).toBe(wrapper.instance().viewProfile);
  expect(tooltip.props().isOpen).toBe(false);
  expect(tooltip.props().target).toEqual(link.props().id);
  expect(wrapper).toMatchSnapshot();
});
