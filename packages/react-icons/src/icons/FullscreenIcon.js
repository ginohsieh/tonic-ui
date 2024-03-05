// AUTO-GENERATED BY "scripts/generate-icons.mjs"
// DO NOT MODIFY THIS FILE

import React, { forwardRef } from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { useIconStyle } from '../styles';

const FullscreenIcon = forwardRef((
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
      <g><path key="fullscreen-0" d="M1 1v5h1.5v-2.8l2.8 2.8 0.7-0.7-2.8-2.8h2.8v-1.5h-5zM13.5 12.8l-2.8-2.8-0.7 0.7 2.8 2.8h-2.8v1.5h5v-5h-1.5v2.8zM5.3 10l-2.8 2.8v-2.8h-1.5v5h5v-1.5h-2.8l2.8-2.8-0.7-0.7zM13.5 1h-3.5v1.5h2.8l-2.8 2.8 0.7 0.7 2.8-2.8v2.8h1.5v-5h-1.5z" /></g>
    </SVGIcon>
  );
});

FullscreenIcon.displayName = 'FullscreenIcon';

export default FullscreenIcon;
