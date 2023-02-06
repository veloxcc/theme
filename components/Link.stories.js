import React from 'react';
import ThemeProvider from './ThemeProvider';
import Link from './Link';

export default {
  title: 'VELO X/Link',
  component: Link,
};

const Template = (args) => <ThemeProvider><Link {...args} /></ThemeProvider>;

export const Default = Template.bind({});

Default.args = {
  href: 'https://www.example.com',
  children: 'Example link'
};

