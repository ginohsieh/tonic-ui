// AUTO-GENERATED BY "scripts/generate-icons.mjs"
// DO NOT MODIFY THIS FILE

import React, { forwardRef } from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { useIconStyle } from '../styles';

const BuildIcon = forwardRef((
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
      <g><path key="build-0" d="M16 4.5c0 2.5-2 4.5-4.4 4.5-0.7 0-1.4-0.1-2-0.4l-7.2 7.2c-0.4 0.4-1 0.4-1.4 0l-0.7-0.8c-0.4-0.4-0.4-1 0-1.4l7.2-7.2c-1.1-2.2-0.2-4.9 2-6 1.1-0.5 2.3-0.6 3.4-0.2l-2.6 2.6c-0.4 0.4-0.4 1 0 1.4l1.4 1.4c0.4 0.4 1 0.4 1.4 0l2.6-2.6c0.2 0.5 0.3 1 0.3 1.5z" /></g>
    </SVGIcon>
  );
});

BuildIcon.displayName = 'BuildIcon';

export default BuildIcon;
