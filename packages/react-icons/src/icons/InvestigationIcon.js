// AUTO-GENERATED BY "scripts/generate-icons.mjs"
// DO NOT MODIFY THIS FILE

import React, { forwardRef } from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { useIconStyle } from '../styles';

const InvestigationIcon = forwardRef((
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
      <g><path key="investigation-0" d="M11.7 10.3l4.3 4.3-1.4 1.4-4.3-4.3c-1 0.8-2.4 1.3-3.8 1.3-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5c0.5 0 1 0.1 1.5 0.2v1.6c-0.5-0.2-1-0.3-1.5-0.3-2.8 0-5 2.2-5 5s2.2 5 5 5c1.8 0 3.5-1 4.3-2.5h1.7c-0.2 0.5-0.5 0.9-0.8 1.3zM13 3v-3h-2v3h-3v2h3v3h2v-3h3v-2h-3z" /></g>
    </SVGIcon>
  );
});

InvestigationIcon.displayName = 'InvestigationIcon';

export default InvestigationIcon;
