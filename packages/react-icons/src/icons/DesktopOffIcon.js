// AUTO-GENERATED BY "scripts/generate-icons.mjs"
// DO NOT MODIFY THIS FILE

import React, { forwardRef } from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { useIconStyle } from '../styles';

const DesktopOffIcon = forwardRef((
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
      <g><path key="desktop-off-0" d="M13 12h1c0.032 0.004 0.069 0.006 0.106 0.006 0.497 0 0.9-0.403 0.9-0.9 0-0.037-0.002-0.074-0.007-0.111l0 0.004v-9c0.004-0.032 0.006-0.069 0.006-0.106 0-0.497-0.403-0.9-0.9-0.9-0.037 0-0.074 0.002-0.111 0.007l0.004-0h-12l-1-1-1 1 15 15 1-1zM4 3h9v7h-2zM7 10l5 5h-7.5c-0.276 0-0.5-0.224-0.5-0.5v0c0-0.163 0.078-0.308 0.199-0.399l0.001-0.001 2.8-1.6v-0.5h-5c-0.032 0.004-0.069 0.006-0.106 0.006-0.497 0-0.9-0.403-0.9-0.9 0-0.037 0.002-0.074 0.007-0.111l-0 0.004v-7l2 2v4z" /></g>
    </SVGIcon>
  );
});

DesktopOffIcon.displayName = 'DesktopOffIcon';

export default DesktopOffIcon;
