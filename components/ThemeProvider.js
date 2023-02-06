import React from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider, createDarkTheme } from 'baseui';

const primitives = {
  primaryFontFamily: `"IBM Plex Serif", serif`,
};

const overrides = {
  breakpoints: {
    small: 600,
    medium: 900,
    large: 1200,
  },
  colors: {
    linkHover: 'orange !important',
  }
};
const theme = createDarkTheme(primitives, overrides);
const engine = new Styletron();

export default ({ children }) => (
  <StyletronProvider value={engine}>
    <BaseProvider theme={theme}>
      {children}
    </BaseProvider>
  </StyletronProvider>
);
