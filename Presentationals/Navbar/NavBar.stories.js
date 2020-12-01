import React from "react";

import NavBar from "./NavBar";

export default {
  title: "Presentational/NavBar",
  component: NavBar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <NavBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: "white",
};
