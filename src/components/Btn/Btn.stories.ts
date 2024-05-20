import { Btn } from ".";

export default {
  title: "Components/Btn",
  component: Btn,
  argTypes: {
    btn: {
      options: ["primary", "secondary", "primary-hover"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    btn: "primary",
    className: {},
    formAtomValueClassName: {},
    divClassName: {},
    text: "Pra-btn",
  },
};