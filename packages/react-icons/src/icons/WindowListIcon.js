// AUTO-GENERATED BY "scripts/generate-icons.mjs"
// DO NOT MODIFY THIS FILE

import React, { forwardRef } from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { useIconStyle } from '../styles';

const WindowListIcon = forwardRef((
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
      <g><path key="window-list-0" d="M15 1h-14c-0.552 0.002-0.998 0.448-1 1v12c0.002 0.552 0.448 0.998 1 1h14c0.552-0.002 0.998-0.448 1-1v-12c-0.002-0.552-0.448-0.998-1-1h-0zM15 14h-14v-11h14zM13 7h-7v-1h7zM13 9h-7v-1h7zM5 7h-2v-1h2zM5 9h-2v-1h2zM13 11h-7v-1h7zM5 11h-2v-1h2z" /></g>
    </SVGIcon>
  );
});

WindowListIcon.displayName = 'WindowListIcon';

export default WindowListIcon;
