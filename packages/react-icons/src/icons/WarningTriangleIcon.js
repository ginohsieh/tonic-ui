// AUTO-GENERATED BY "scripts/generate-icons.mjs"
// DO NOT MODIFY THIS FILE

import React, { forwardRef } from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { useIconStyle } from '../styles';

const WarningTriangleIcon = forwardRef((
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
      <g><path key="warning-triangle-0" d="M15.86 13.49l-7-12c-0.176-0.3-0.498-0.498-0.865-0.498s-0.689 0.198-0.862 0.494l-0.003 0.005-7 12c-0.088 0.146-0.14 0.322-0.14 0.51 0 0.552 0.448 1 1 1 0.003 0 0.007 0 0.010 0h13.999c0.552 0 1-0.448 1-1 0-0.188-0.052-0.364-0.142-0.515l0.003 0.005zM9 13h-2v-2h2zM9 10h-2v-5h2z" /></g>
    </SVGIcon>
  );
});

WarningTriangleIcon.displayName = 'WarningTriangleIcon';

export default WarningTriangleIcon;
