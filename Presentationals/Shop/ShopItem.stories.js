import React from "react";

import ShopItem from "./ShopItem";

export default {
  title: "Presentational/ShopItem",
  component: ShopItem,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <ShopItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};
