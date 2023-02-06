import React from 'react';
import { ParagraphMedium, LabelMedium } from 'baseui/typography';
import ThemeProvider from './ThemeProvider';
import PlainList from './PlainList';

export default {
  title: 'VELO X/Plain List',
  component: PlainList,
};

const numListItems = 10;

const listItems = [...Array(numListItems).keys()].map(i => <li key={`line_${i+1}`}><ParagraphMedium style={{ lineHeight: 3 }} margin={0}>Line {i+1}</ParagraphMedium></li>);

const Template = (args) => (
  <ThemeProvider>
    <LabelMedium>Example List Label</LabelMedium>
    <PlainList {...args} />
  </ThemeProvider>)
;

export const Default = Template.bind({});

Default.args = {
    children: listItems,
};

export const WithAutoColumns = Template.bind({});

WithAutoColumns.args = {
    children: listItems,
    autoColumns: true,
};

