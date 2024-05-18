import { TextBox } from ".";

export default {
  title: "Components/TextBox",
  component: TextBox,
  argTypes: {
    property: {
      options: ["value", "active", "default", "phon-number", "password", "drop-down"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property: "value",
    className: {},
    text: "Title",
    text1: "Value",
    text2: "Enter Value",
    text3: "+98",
    iconlyLightOutlineClassName: {},
    text4: "9120000000",
    text5: "Course",
    text6: "software",
    iconlyLightOutlineClassNameOverride: {},
  },
};
