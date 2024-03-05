// AUTO-GENERATED BY "scripts/generate-icons.mjs"
// DO NOT MODIFY THIS FILE

import React, { forwardRef } from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { useIconStyle } from '../styles';

const ImportIcon = forwardRef((
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
      <g><path key="import-0" d="M16 8v1c0 0-1-3-5-3h-3v2.5l-4-4 4-4v2.5h3c2.8 0 5 2.2 5 5zM14 14h-12v-12h2v-1h-2c-0.5 0-1 0.5-1 1v12c0 0.5 0.5 1 1 1h12c0.5 0 1-0.5 1-1v-4h-1v4z" /></g>
    </SVGIcon>
  );
});

ImportIcon.displayName = 'ImportIcon';

export default ImportIcon;
