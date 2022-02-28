import { Property } from './index';

export default {
  title: 'Property',
  component: Property,
};

const Template = (args) => <Property {...args} />;

export const Default = Template.bind({});
