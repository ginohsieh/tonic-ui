// AUTO-GENERATED BY "scripts/generate-icons.mjs"
// DO NOT MODIFY THIS FILE

import React, { forwardRef } from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { useIconStyle } from '../styles';

const DeviceMasterIcon = forwardRef((
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
      <g><path key="device-master-0" d="M5 3h-3v-1h3v-1h6v1h3v1h-3v1h-2v3h-2v-3h-2v-1zM16 8v6c0 0.6-0.4 1-1 1h-14c-0.6 0-1-0.4-1-1v-6l2-3h4v1h-3l-1.3 2h12.5l-1.2-2h-3v-1h4l2 3zM11 10h-1v3h1v-3zM14 10h-2v3h2v-3z" /></g>
    </SVGIcon>
  );
});

DeviceMasterIcon.displayName = 'DeviceMasterIcon';

export default DeviceMasterIcon;
