import { MultiSelect } from './index';
import { Checkbox } from '../Checkbox';

export default {
  title: 'DataEntry/MultiSelect',
  component: MultiSelect,
  subcomponents: {Checkbox}
};

const Template = (args) => <MultiSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  onOptionSelected: (e) => console.log(e)
}