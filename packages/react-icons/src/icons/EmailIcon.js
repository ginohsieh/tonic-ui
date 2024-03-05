// AUTO-GENERATED BY "scripts/generate-icons.mjs"
// DO NOT MODIFY THIS FILE

import React, { forwardRef } from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { useIconStyle } from '../styles';

const EmailIcon = forwardRef((
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
      <g><path key="email-0" d="M8 8.75l8-5.55v-0.2c0-0.552-0.448-1-1-1v0h-14c-0.552 0-1 0.448-1 1v0 0.19z" />,<path key="email-1" d="M8 10l-8-5.54v8.54c0 0.552 0.448 1 1 1v0h14c0.552 0 1-0.448 1-1v0-8.54z" /></g>
    </SVGIcon>
  );
});

EmailIcon.displayName = 'EmailIcon';

export default EmailIcon;
