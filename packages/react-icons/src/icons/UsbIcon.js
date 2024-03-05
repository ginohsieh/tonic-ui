// AUTO-GENERATED BY "scripts/generate-icons.mjs"
// DO NOT MODIFY THIS FILE

import React, { forwardRef } from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { useIconStyle } from '../styles';

const UsbIcon = forwardRef((
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
      <g><path key="usb-0" d="M16 4h-4v4l1.25 0v0.642l-4.5 1.35v-5.992h2.25l-3-4-3 4 2.25 0v6.585l-4.5-0.901v-0.833c0.732-0.297 1.25-1.013 1.25-1.852 0-1.105-0.895-2-2-2s-2 0.895-2 2c0 0.839 0.518 1.555 1.25 1.852v2.064l6 1.2v0.033c-0.732 0.297-1.25 1.013-1.25 1.852 0 1.105 0.895 2 2 2s2-0.895 2-2c0-0.839-0.518-1.555-1.25-1.852v-0.59l6-1.8v-1.758h1.25v-4z" /></g>
    </SVGIcon>
  );
});

UsbIcon.displayName = 'UsbIcon';

export default UsbIcon;
