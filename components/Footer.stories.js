import React from 'react';
import ThemeProvider from './ThemeProvider';
import Footer from './Footer';

export default {
  title: 'VELO X/Footer',
  component: Footer,
};

const Template = (args) => <ThemeProvider><Footer {...args} /></ThemeProvider>;

export const Default = Template.bind({});
