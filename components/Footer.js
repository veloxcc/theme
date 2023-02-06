import React from 'react';
import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { StyledLink } from "baseui/link";
import { Grid, Cell } from 'baseui/layout-grid';

export default () => {
  const [, theme] = useStyletron();
  return (
    <Grid>
      <Cell span={12}>
        <Block
          paddingTop={theme.sizing.scale800}
          paddingBottom={theme.sizing.scale800}
          display="flex"
          justifyContent="flex-end"
        >
          <StyledLink
            href="#top"
            animateUnderline
          >
            back to top
          </StyledLink>
        </Block>
      </Cell>
    </Grid>
  );
};
