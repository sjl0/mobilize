import React from "react";
import { shallow } from "enzyme";
import Event from "../components/Event";
import Card from "react-bootstrap/Card";

test("should render event", () => {
  const wrapper = shallow(<Event event={{ title: "Hello World" }} />);
  expect(wrapper.find(Card).title == "Hello World");
});
