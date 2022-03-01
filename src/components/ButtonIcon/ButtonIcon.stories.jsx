import { ButtonIcon } from "./index";
import reset from "../../assets/reset.svg";

export default {
  title: "General/ButtonIcon",
  component: ButtonIcon,
};

const Template = (args) => <ButtonIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: reset,
  onClick: () => console.log("click"),
};
