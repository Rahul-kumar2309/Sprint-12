import { ProductCard } from './ProductCard';

const meta = {
  title: 'Components/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    price: { control: 'text' },
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark']
    }
  },
  args: {
    title: 'Field Notes',
    price: '$28',
    theme: 'light'
  }
};

export default meta;

export const Light = {};
export const Dark = { args: { theme: 'dark' } };
