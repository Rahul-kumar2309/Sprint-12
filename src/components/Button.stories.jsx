import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary']
    },
    disabled: { control: 'boolean' },
    children: { control: 'text' }
  },
  args: {
    variant: 'primary',
    disabled: false,
    children: 'Continue'
  }
};

export default meta;

export const Primary = {};
export const Secondary = { args: { variant: 'secondary' } };
export const Disabled = { args: { disabled: true } };
