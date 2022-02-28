import { Dialog } from "./index";

export default {
  title: "General/Dialog",
  component: Dialog,
};

const Template = (args) => <Dialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <div>
      <p>Test</p>
      <p>Test</p>
      <p>Test</p>
    </div>
  ),
};
