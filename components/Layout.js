import React from 'react';
import { Grid, Cell } from 'baseui/layout-grid';

export default ({ children }) => (
  <Grid>
    <Cell span={12}>
      {children}
    </Cell>
  </Grid>
);
