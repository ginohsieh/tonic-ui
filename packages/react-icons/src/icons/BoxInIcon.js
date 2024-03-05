// AUTO-GENERATED BY "scripts/generate-icons.mjs"
// DO NOT MODIFY THIS FILE

import React, { forwardRef } from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { useIconStyle } from '../styles';

const BoxInIcon = forwardRef((
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
      <g><path key="box-in-0" d="M5 8l5-5v3h5v4h-5v3zM8 2h-6v12h6v1h-6c-0.552 0-1-0.448-1-1v0-12c0-0.552 0.448-1 1-1v0h6v1z" /></g>
    </SVGIcon>
  );
});

BoxInIcon.displayName = 'BoxInIcon';

export default BoxInIcon;
