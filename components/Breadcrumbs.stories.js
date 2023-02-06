import React from 'react';
import ThemeProvider from './ThemeProvider';
import Breadcrumbs from './Breadcrumbs';

export default {
  title: 'VELO X/Breadcrumbs',
  component: Breadcrumbs,
};

const Template = (args) => <ThemeProvider><Breadcrumbs {...args} /></ThemeProvider>;

export const Default = Template.bind({});

Default.args = {
  currentPageLabel: 'news',
};

