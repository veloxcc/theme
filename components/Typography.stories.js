import React from 'react';
import ThemeProvider from './ThemeProvider';
import Typography from './Typography';

export default {
  title: 'VELO X/Typography',
  component: Typography,
};

const Template = (args) => <ThemeProvider><Typography {...args} /></ThemeProvider>;

export const Heading1 = Template.bind({});

Heading1.args = {
  variant: 'h1',
  children: "Heading Level 1",
};

export const Heading2 = Template.bind({});

Heading2.args = {
  variant: 'h2',
  children: "Heading Level 2",
};

export const Heading3 = Template.bind({});

Heading3.args = {
  variant: 'h3',
  children: "Heading Level 3",
};

export const Heading4 = Template.bind({});

Heading4.args = {
  variant: 'h4',
  children: "Heading Level 4",
};

export const Heading5 = Template.bind({});

Heading5.args = {
  variant: 'h5',
  children: "Heading Level 5",
};

export const Heading6 = Template.bind({});

Heading6.args = {
  variant: 'h6',
  children: "Heading Level 6",
};

export const Body1 = Template.bind({});

Body1.args = {
  variant: 'body1',
  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum felis id elit lobortis convallis. Praesent varius metus nisi, eget convallis odio gravida at. Quisque vel efficitur nibh, nec blandit ante. Cras ac maximus libero. Aenean augue dolor, laoreet id mi id, pellentesque blandit arcu. Vestibulum at tortor eros. Curabitur et viverra nisl. Quisque dignissim, neque ac aliquet suscipit, risus lectus porta libero, a sollicitudin velit turpis ac dolor. Donec sem nunc, tincidunt vitae imperdiet a, efficitur a arcu. Vivamus feugiat dolor porta odio consequat, a volutpat nulla varius. Phasellus ac iaculis nibh. Ut quis rutrum felis, vitae convallis nisi. Nulla scelerisque nunc vitae lobortis gravida. In nec metus lectus.",
};

export const Body2 = Template.bind({});

Body2.args = {
  variant: 'body2',
  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum felis id elit lobortis convallis. Praesent varius metus nisi, eget convallis odio gravida at. Quisque vel efficitur nibh, nec blandit ante. Cras ac maximus libero. Aenean augue dolor, laoreet id mi id, pellentesque blandit arcu. Vestibulum at tortor eros. Curabitur et viverra nisl. Quisque dignissim, neque ac aliquet suscipit, risus lectus porta libero, a sollicitudin velit turpis ac dolor. Donec sem nunc, tincidunt vitae imperdiet a, efficitur a arcu. Vivamus feugiat dolor porta odio consequat, a volutpat nulla varius. Phasellus ac iaculis nibh. Ut quis rutrum felis, vitae convallis nisi. Nulla scelerisque nunc vitae lobortis gravida. In nec metus lectus.",
};

export const Default = Template.bind({});

Default.args = {
  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum felis id elit lobortis convallis.",
};

