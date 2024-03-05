// AUTO-GENERATED BY "scripts/generate-icons.mjs"
// DO NOT MODIFY THIS FILE

import React, { forwardRef } from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { useIconStyle } from '../styles';

const ArrowLeftIcon = forwardRef((
  {
    spin = false,
    sx,
    ...rest
  },
  ref,
) => {
  const styleProps = useIconStyle({ spin });
  return (
    <SVGIcon
      ref={ref}
      viewBox="0 0 16 16"
      sx={[
        styleProps,
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...rest}
    >
      <g><path key="arrow-left-0" d="M15 9.016h-10.158l3.296 3.283-1.412 1.416-4.716-4.699h-0.009v-0.009l-1-0.996 5.707-5.739 1.418 1.41-3.316 3.335h10.191z" /></g>
    </SVGIcon>
  );
});

ArrowLeftIcon.displayName = 'ArrowLeftIcon';

export default ArrowLeftIcon;
