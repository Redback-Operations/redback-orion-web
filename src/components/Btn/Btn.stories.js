import { Btn } from ".";

export default {
  title: "Components/Btn",
  component: Btn,
  argTypes: {
    btn: {
      options: ["praimery", "secondary", "praimery-hover"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    btn: "praimery",
    className: {},
    formAtomValueClassName: {},
    divClassName: {},
    text: "Pra-btn",
  },
};
