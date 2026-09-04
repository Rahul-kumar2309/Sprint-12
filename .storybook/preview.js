import '../src/styles.css';

export default {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f4f1ea' },
        { name: 'dark', value: '#171b22' }
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};
