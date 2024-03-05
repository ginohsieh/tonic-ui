// AUTO-GENERATED BY "scripts/generate-icons.mjs"
// DO NOT MODIFY THIS FILE

import React, { forwardRef } from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { useIconStyle } from '../styles';

const ExternalLinkIcon = forwardRef((
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
      <g><path key="external-link-0" d="M14 7h1v7c0 0.5-0.5 1-1 1h-12c-0.5 0-1-0.5-1-1v-12c0-0.5 0.5-1 1-1h7v1h-7v12h12v-7zM10.3 0l2.1 2.1-5.6 5.7 1.4 1.4 5.7-5.7 2.1 2.2v-5.7h-5.7z" /></g>
    </SVGIcon>
  );
});

ExternalLinkIcon.displayName = 'ExternalLinkIcon';

export default ExternalLinkIcon;
