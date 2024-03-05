// AUTO-GENERATED BY "scripts/generate-icons.mjs"
// DO NOT MODIFY THIS FILE

import React, { forwardRef } from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { useIconStyle } from '../styles';

const AlignRightIcon = forwardRef((
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
      <g><path key="align-right-0" d="M14 5h-9v-2h9zM14 9h-9v2h9zM14 6h-11v2h11zM14 12h-12v2h12z" /></g>
    </SVGIcon>
  );
});

AlignRightIcon.displayName = 'AlignRightIcon';

export default AlignRightIcon;
