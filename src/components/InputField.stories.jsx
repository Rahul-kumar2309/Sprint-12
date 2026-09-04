import { InputField } from './InputField';

const meta = {
  title: 'Components/InputField',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' }
  },
  args: {
    placeholder: 'Enter a value',
    error: false,
    disabled: false
  }
};

export default meta;

export const Default = {};
export const Error = { args: { error: true } };
export const Disabled = { args: { disabled: true } };
