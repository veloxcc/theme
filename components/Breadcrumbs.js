import React from 'react';
import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { Breadcrumbs } from "baseui/breadcrumbs";
import { StyledLink } from "baseui/link";

export default ({ currentPageLabel }) => {
  const [, theme] = useStyletron();
  return (
    <Block
      paddingTop={theme.sizing.scale500}
    >
      <Breadcrumbs>
        <StyledLink href="/">velox.cc</StyledLink>
        {currentPageLabel && <span>{currentPageLabel}</span>}
      </Breadcrumbs>
    </Block>
  );
}
