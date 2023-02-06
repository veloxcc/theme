import React from 'react';
import { useStyletron } from 'baseui';

export default ({ children, autoColumns }) => {
  const [css, theme] = useStyletron();
  const styles = css({
    listStyle: 'none',
    paddingLeft: 0,
    ...(autoColumns && {
      columnCount: 2,
      [theme.mediaQuery.medium]: {
        columnCount: 4
      }
    })
  });

  return <ul className={styles}>{children}</ul>;
};
