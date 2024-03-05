// AUTO-GENERATED BY "scripts/generate-icons.mjs"
// DO NOT MODIFY THIS FILE

import React, { forwardRef } from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { useIconStyle } from '../styles';

const FilePdfOIcon = forwardRef((
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
      <g><path key="file-pdf-o-0" d="M11 0h-9c-0.5 0-1 0.5-1 1v14c0 0.5 0.5 1 1 1h12c0.5 0 1-0.5 1-1v-11l-4-4zM11 1.4l2.6 2.6h-2.6v-2.6zM14 15h-12v-14h8v4h4v10zM8.4 8.5c-0.2-0.4-0.5-1.2-0.5-1.2s0-0.2 0.1-0.5c0-0.3 0.3-1.3 0.2-1.9-0.1-0.5-0.2-0.9-0.7-0.9-1-0.1-0.8 1.1-0.7 1.7 0.1 0.7 0.4 1.8 0.4 1.8s-0.8 1.9-1.1 2.5c-0.3 0.7-0.7 1.3-0.7 1.3s-1.7 0.9-2.1 1.5c-0.9 1.4 0.7 1.5 1.6 0.4 0.6-0.7 1.2-1.8 1.2-1.8s2.7-0.8 3.6-0.9c0.3 0.1 1.3 0.7 2.1 0.8 1.2 0.2 1.5-0.7 1.1-1.2-0.7-0.5-2.6-0.1-3-0.1-0.4-0.2-1-0.7-1.5-1.5zM3.6 13.5c-0.2-0.1 0.9-1.2 1.5-1.7-0.4 0.7-1.3 1.8-1.5 1.7zM7.5 4.3c0.3 0.1 0.4 1.5 0.1 2-0.1-0.3-0.4-2-0.1-2zM6.3 10.9c0.5-0.9 0.8-1.7 1.2-2.6 0.4 0.7 0.8 1.4 1.5 1.9-0.9 0.2-1.8 0.4-2.7 0.7zM12.6 10.8c-0.2 0.3-1.4-0.2-1.8-0.3 0.8-0.1 2 0 1.8 0.3z" /></g>
    </SVGIcon>
  );
});

FilePdfOIcon.displayName = 'FilePdfOIcon';

export default FilePdfOIcon;
