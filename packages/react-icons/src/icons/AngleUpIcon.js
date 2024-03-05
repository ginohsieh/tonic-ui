// AUTO-GENERATED BY "scripts/generate-icons.mjs"
// DO NOT MODIFY THIS FILE

import React, { forwardRef } from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { useIconStyle } from '../styles';

const AngleUpIcon = forwardRef((
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
      <g><path key="angle-up-0" d="M3.5 10l4.5-4.5 4.5 4.5-1 1-3.5-3.5-3.5 3.5-1-1z" /></g>
    </SVGIcon>
  );
});

AngleUpIcon.displayName = 'AngleUpIcon';

export default AngleUpIcon;
