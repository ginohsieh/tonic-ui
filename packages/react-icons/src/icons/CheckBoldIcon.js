// AUTO-GENERATED BY "scripts/generate-icons.mjs"
// DO NOT MODIFY THIS FILE

import React, { forwardRef } from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { useIconStyle } from '../styles';

const CheckBoldIcon = forwardRef((
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
      <g><path key="check-bold-0" d="M6 15l-6-6 2-2 3.9 3.8 8.1-9.8 2 2-10 12z" /></g>
    </SVGIcon>
  );
});

CheckBoldIcon.displayName = 'CheckBoldIcon';

export default CheckBoldIcon;
