// AUTO-GENERATED BY "scripts/generate-icons.mjs"
// DO NOT MODIFY THIS FILE

import React, { forwardRef } from 'react';
import { SVGIcon } from '@tonic-ui/react';
import { useIconStyle } from '../styles';

const LightOIcon = forwardRef((
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
      <g><path key="light-o-0" d="M8.75 13.5h-1.5v2.5h1.5v-2.5z" />,<path key="light-o-1" d="M16 7h-2.2v1.5h2.2v-1.5z" />,<path key="light-o-2" d="M2.2 7h-2.2v1.5h2.2v-1.5z" />,<path key="light-o-3" d="M12.773 11.712l-1.061 1.061 1.415 1.414 1.060-1.060-1.414-1.415z" />,<path key="light-o-4" d="M3.227 11.712l-1.414 1.415 1.060 1.060 1.415-1.414-1.061-1.061z" />,<path key="light-o-5" d="M8.75 1.5v2.484l0.785 0.426c1.029 0.559 1.715 1.632 1.715 2.865 0 1.795-1.455 3.25-3.25 3.25s-3.25-1.455-3.25-3.25c0-1.233 0.687-2.306 1.698-2.856l0.017-0.008 0.785-0.426v-2.484h1.5zM10.25 0h-4.5v3.091c-1.5 0.819-2.5 2.384-2.5 4.183 0 2.623 2.127 4.75 4.75 4.75s4.75-2.127 4.75-4.75c0-1.799-1-3.365-2.475-4.171l-0.025-0.012v-3.091z" /></g>
    </SVGIcon>
  );
});

LightOIcon.displayName = 'LightOIcon';

export default LightOIcon;
