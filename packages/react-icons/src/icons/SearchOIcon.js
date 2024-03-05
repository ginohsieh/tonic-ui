// AUTO-GENERATED BY "scripts/generate-icons.mjs"
// DO NOT MODIFY THIS FILE

import React, { forwardRef } from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { useIconStyle } from '../styles';

const SearchOIcon = forwardRef((
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
      <g><path key="search-o-0" d="M16 14.59l-4.26-4.26c0.787-1.064 1.259-2.403 1.259-3.851 0-3.601-2.919-6.52-6.52-6.52s-6.52 2.919-6.52 6.52c0 3.601 2.919 6.52 6.52 6.52 1.449 0 2.787-0.472 3.869-1.271l-0.018 0.013 4.26 4.26zM6.5 11.5c-2.761 0-5-2.239-5-5s2.239-5 5-5c2.761 0 5 2.239 5 5v0c0 2.761-2.239 5-5 5v0z" /></g>
    </SVGIcon>
  );
});

SearchOIcon.displayName = 'SearchOIcon';

export default SearchOIcon;
