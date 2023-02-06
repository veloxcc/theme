
import React from 'react';
import {
  HeadingXXLarge,
  HeadingXLarge,
  HeadingLarge,
  HeadingMedium,
  HeadingSmall,
  HeadingXSmall,
  ParagraphMedium,
  ParagraphSmall,
} from 'baseui/typography';

const Typography = ({ variant, children, ...rest }) => {
  const map = {
    h1: HeadingXXLarge,
    h2: HeadingXLarge,
    h3: HeadingLarge,
    h4: HeadingMedium,
    h5: HeadingSmall,
    h6: HeadingXSmall,
    body1: ParagraphMedium,
    body2: ParagraphSmall,
  }

  const Component = map[variant] || map['body1'];

  return <Component {...rest}>{children}</Component>;
};


export default Typography;
