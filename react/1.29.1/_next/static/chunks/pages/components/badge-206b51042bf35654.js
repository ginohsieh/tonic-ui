(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3899],{8733:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return index_page}});var a=t(52322),r=t(45392),o=t(83449),i=t(67569),l=t(2784);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function _arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=Array(n);t<n;t++)a[t]=e[t];return a}var OutlineBadge=function(e){var n,t=(function(e){if(Array.isArray(e))return e}(n=(0,i.useColorMode)())||function(e,n){var t,a,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(o.push(t.value),!n||o.length!==n);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}}(n,1)||function(e,n){if(e){if("string"==typeof e)return _arrayLikeToArray(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _arrayLikeToArray(e,n)}}(n,1)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];return l.createElement(i.Badge,_extends({backgroundColor:{dark:"gray:100",light:"white"}[t],borderColor:{dark:"yellow:50",light:"yellow:50"}[t],borderStyle:"solid",borderWidth:"2px",color:{dark:"white:primary",light:"black:primary"}[t],height:"5x",minWidth:"5x"},e))},customization=function(){return l.createElement(i.Grid,{mt:"3x",columnGap:"8x",justifyItems:"center",rowGap:"8x",templateColumns:"repeat(3,1fr)",width:"min-content"},l.createElement(OutlineBadge,{badgeContent:0},l.createElement(i.Skeleton,{variant:"rectangle",borderRadius:"sm",width:"8x",height:"8x"})),l.createElement(OutlineBadge,{badgeContent:"99+"},l.createElement(i.Skeleton,{variant:"rectangle",borderRadius:"sm",width:"8x",height:"8x"})),l.createElement(OutlineBadge,{badgeContent:l.createElement(i.Text,{fontFamily:"mono",fontSize:"xs"},"!")},l.createElement(i.Skeleton,{variant:"rectangle",borderRadius:"sm",width:"8x",height:"8x"})))},size=function(){return l.createElement(i.Stack,{mt:"3x",direction:"row",spacing:"8x",shouldWrapChildren:!0},l.createElement(i.Badge,{badgeContent:5,height:"4x",minWidth:"4x",fontSize:"xs"},l.createElement(i.Skeleton,{variant:"rectangle",borderRadius:"sm",width:"8x",height:"8x"})),l.createElement(i.Badge,{badgeContent:5,height:"5x",minWidth:"5x",fontSize:"sm"},l.createElement(i.Skeleton,{variant:"rectangle",borderRadius:"sm",width:"8x",height:"8x"})),l.createElement(i.Badge,{badgeContent:5,height:"6x",minWidth:"6x",fontSize:"md"},l.createElement(i.Skeleton,{variant:"rectangle",borderRadius:"sm",width:"8x",height:"8x"})))},color=function(){return l.createElement(i.Grid,{mt:"2x",columnGap:"8x",rowGap:"8x",templateColumns:"repeat(auto-fill, minmax(40px, 1fr))"},["red:60","orange:50","yellow:50","green:60","blue:60","gray:60","magenta:60","purple:60","teal:60","cyan:60"].map(function(e){return l.createElement(i.Badge,{key:e,backgroundColor:e,badgeContent:5},l.createElement(i.Skeleton,{variant:"rectangle",borderRadius:"sm",width:"8x",height:"8x"}))}))};function badge_visibility_slicedToArray(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,a,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(o.push(t.value),!n||o.length!==n);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}}(e,n)||function(e,n){if(e){if("string"==typeof e)return badge_visibility_arrayLikeToArray(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return badge_visibility_arrayLikeToArray(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function badge_visibility_arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=Array(n);t<n;t++)a[t]=e[t];return a}var badge_visibility=function(){var e=badge_visibility_slicedToArray((0,l.useState)(1),2),n=e[0],t=e[1],a=badge_visibility_slicedToArray((0,l.useState)(!1),2),r=a[0],o=a[1];return l.createElement(i.Stack,{mt:"1x",direction:"column",spacing:"8x"},l.createElement(i.Flex,{alignItems:"center"},l.createElement(i.Box,{mr:"8x"},l.createElement(i.Badge,{badgeContent:n,isInvisible:!(n>0)},l.createElement(i.Icon,{icon:"alert"}))),l.createElement(i.ButtonGroup,{variant:"secondary"},l.createElement(i.Button,{"aria-label":"decrease",onClick:function(){t(Math.max(n-1,0))}},l.createElement(i.Icon,{icon:"minus"})),l.createElement(i.Button,{"aria-label":"increase",onClick:function(){t(Math.max(n+1,0))}},l.createElement(i.Icon,{icon:"add"})))),l.createElement(i.Flex,{alignItems:"center"},l.createElement(i.Box,{mr:"8x"},l.createElement(i.Badge,{variant:"dot",isInvisible:r},l.createElement(i.Icon,{icon:"alert"}))),l.createElement(i.TextLabel,{cursor:"pointer"},l.createElement(i.Flex,{alignItems:"center"},l.createElement(i.Switch,{size:"md",checked:!r,onChange:function(){o(!r)}}),l.createElement(i.Space,{width:"2x"}),l.createElement(i.Text,{userSelect:"none"},"Show Badge")))))},badge_alignment=function(){return l.createElement(i.Grid,{m:"2x",columnGap:"8x",rowGap:"8x",templateColumns:"1fr 1fr",width:"min-content"},l.createElement(i.Badge,{placement:"top-left",badgeContent:1},l.createElement(i.Icon,{icon:"alert"})),l.createElement(i.Badge,{placement:"top-right",badgeContent:1},l.createElement(i.Icon,{icon:"alert"})),l.createElement(i.Badge,{placement:"bottom-left",badgeContent:1},l.createElement(i.Icon,{icon:"alert"})),l.createElement(i.Badge,{placement:"bottom-right",badgeContent:1},l.createElement(i.Icon,{icon:"alert"})))},standalone=function(){return l.createElement(i.Stack,{direction:"row",spacing:"8x",alignItems:"center"},l.createElement(i.Badge,{variant:"dot"}),l.createElement(i.Badge,{variant:"solid",badgeContent:0}),l.createElement(i.Badge,{variant:"solid",badgeContent:5}),l.createElement(i.Badge,{variant:"solid",badgeContent:"99+"}),l.createElement(i.Badge,{variant:"solid",badgeContent:l.createElement(i.Icon,{icon:"virus",size:"4x"}),height:"6x"}))},dot=function(){return l.createElement(i.Stack,{mt:"2x",direction:"row",spacing:"8x",shouldWrapChildren:!0},l.createElement(i.Badge,{variant:"dot",isInvisible:!0},l.createElement(i.Icon,{icon:"alert"})),l.createElement(i.Badge,{variant:"dot"},l.createElement(i.Icon,{icon:"alert"})),l.createElement(i.Badge,{variant:"dot",width:"3x",height:"3x"},l.createElement(i.Icon,{icon:"alert"})))},basic=function(){return l.createElement(i.Grid,{mt:"2x",columnGap:"8x",justifyItems:"center",rowGap:"8x",templateColumns:"repeat(5,1fr)",width:"min-content"},l.createElement(i.Badge,null,l.createElement(i.Icon,{icon:"alert"})),l.createElement(i.Badge,{badgeContent:0},l.createElement(i.Icon,{icon:"alert"})),l.createElement(i.Badge,{badgeContent:5},l.createElement(i.Icon,{icon:"alert"})),l.createElement(i.Badge,{badgeContent:"99+"},l.createElement(i.Icon,{icon:"alert"})),l.createElement(i.Badge,{badgeContent:l.createElement(i.Text,{fontFamily:"mono",fontSize:"xs"},"!")},l.createElement(i.Icon,{icon:"alert"})),l.createElement(i.Badge,null,l.createElement(i.Skeleton,{variant:"rectangle",borderRadius:"sm",width:"8x",height:"8x"})),l.createElement(i.Badge,{badgeContent:0},l.createElement(i.Skeleton,{variant:"rectangle",borderRadius:"sm",width:"8x",height:"8x"})),l.createElement(i.Badge,{badgeContent:5},l.createElement(i.Skeleton,{variant:"rectangle",borderRadius:"sm",width:"8x",height:"8x"})),l.createElement(i.Badge,{badgeContent:"99+"},l.createElement(i.Skeleton,{variant:"rectangle",borderRadius:"sm",width:"8x",height:"8x"})),l.createElement(i.Badge,{badgeContent:l.createElement(i.Text,{fontFamily:"mono",fontSize:"xs"},"!")},l.createElement(i.Skeleton,{variant:"rectangle",borderRadius:"sm",width:"8x",height:"8x"})))};function _createMdxContent(e){var n=Object.assign({div:"div",h1:"h1",p:"p",h2:"h2",a:"a",svg:"svg",use:"use",pre:"pre",code:"code",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,a.jsxs)(n.div,{className:"main-content",id:"main-content",children:["\n","\n","\n","\n","\n","\n","\n","\n","\n",(0,a.jsx)(n.h1,{id:"badge",children:"Badge"}),"\n",(0,a.jsx)(n.p,{children:"Badges are used to highlight an item's status for quick recognition."}),"\n",(0,a.jsxs)(n.h2,{id:"import",children:["Import",(0,a.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,a.jsx)(n.svg,{children:(0,a.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { Badge } from '@tonic-ui/react';\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"usage",children:["Usage",(0,a.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usage",children:(0,a.jsx)(n.svg,{children:(0,a.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsxs)(n.h3,{id:"basic-badge",children:["Basic badge",(0,a.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#basic-badge",children:(0,a.jsx)(n.svg,{children:(0,a.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["To display the badge on the top-right corner of the wrapped component, specify the ",(0,a.jsx)(n.code,{children:"badgeContent"})," prop with the desired content."]}),"\n",(0,a.jsx)(o.Z,{component:basic,file:{data:'import { Badge, Grid, Icon, Skeleton, Text } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <Grid\n    mt="2x"\n    columnGap="8x"\n    justifyItems="center"\n    rowGap="8x"\n    templateColumns="repeat(5,1fr)"\n    width="min-content"\n  >\n    <Badge>\n      <Icon icon="alert" />\n    </Badge>\n    <Badge badgeContent={0}>\n      <Icon icon="alert" />\n    </Badge>\n    <Badge badgeContent={5}>\n      <Icon icon="alert" />\n    </Badge>\n    <Badge badgeContent="99+">\n      <Icon icon="alert" />\n    </Badge>\n    <Badge\n      badgeContent={<Text fontFamily="mono" fontSize="xs">!</Text>}\n    >\n      <Icon icon="alert" />\n    </Badge>\n    <Badge>\n      <Skeleton variant="rectangle" borderRadius="sm" width="8x" height="8x" />\n    </Badge>\n    <Badge badgeContent={0}>\n      <Skeleton variant="rectangle" borderRadius="sm" width="8x" height="8x" />\n    </Badge>\n    <Badge badgeContent={5}>\n      <Skeleton variant="rectangle" borderRadius="sm" width="8x" height="8x" />\n    </Badge>\n    <Badge badgeContent="99+">\n      <Skeleton variant="rectangle" borderRadius="sm" width="8x" height="8x" />\n    </Badge>\n    <Badge\n      badgeContent={<Text fontFamily="mono" fontSize="xs">!</Text>}\n    >\n      <Skeleton variant="rectangle" borderRadius="sm" width="8x" height="8x" />\n    </Badge>\n  </Grid>\n);\n\nexport default App;',path:"pages/components/badge/index.page.mdx"},sandbox:{files:{},raw:'import { Badge, Grid, Icon, Skeleton, Text } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <Grid\n    mt="2x"\n    columnGap="8x"\n    justifyItems="center"\n    rowGap="8x"\n    templateColumns="repeat(5,1fr)"\n    width="min-content"\n  >\n    <Badge>\n      <Icon icon="alert" />\n    </Badge>\n    <Badge badgeContent={0}>\n      <Icon icon="alert" />\n    </Badge>\n    <Badge badgeContent={5}>\n      <Icon icon="alert" />\n    </Badge>\n    <Badge badgeContent="99+">\n      <Icon icon="alert" />\n    </Badge>\n    <Badge\n      badgeContent={<Text fontFamily="mono" fontSize="xs">!</Text>}\n    >\n      <Icon icon="alert" />\n    </Badge>\n    <Badge>\n      <Skeleton variant="rectangle" borderRadius="sm" width="8x" height="8x" />\n    </Badge>\n    <Badge badgeContent={0}>\n      <Skeleton variant="rectangle" borderRadius="sm" width="8x" height="8x" />\n    </Badge>\n    <Badge badgeContent={5}>\n      <Skeleton variant="rectangle" borderRadius="sm" width="8x" height="8x" />\n    </Badge>\n    <Badge badgeContent="99+">\n      <Skeleton variant="rectangle" borderRadius="sm" width="8x" height="8x" />\n    </Badge>\n    <Badge\n      badgeContent={<Text fontFamily="mono" fontSize="xs">!</Text>}\n    >\n      <Skeleton variant="rectangle" borderRadius="sm" width="8x" height="8x" />\n    </Badge>\n  </Grid>\n);\n\nexport default App;',title:"Tonic UI"}}),"\n",(0,a.jsxs)(n.h3,{id:"dot-badge",children:["Dot badge",(0,a.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#dot-badge",children:(0,a.jsx)(n.svg,{children:(0,a.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:'variant="dot"'})," to change a badge into a small dot. This can be used as a notification that something has changed without giving a count."]}),"\n",(0,a.jsx)(o.Z,{component:dot,file:{data:'import { Badge, Icon, Stack } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <Stack mt="2x" direction="row" spacing="8x" shouldWrapChildren>\n    <Badge variant="dot" isInvisible>\n      <Icon icon="alert" />\n    </Badge>\n    <Badge variant="dot">\n      <Icon icon="alert" />\n    </Badge>\n    <Badge variant="dot" width="3x" height="3x">\n      <Icon icon="alert" />\n    </Badge>\n  </Stack>\n);\n\nexport default App;',path:"pages/components/badge/index.page.mdx"},sandbox:{files:{},raw:'import { Badge, Icon, Stack } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <Stack mt="2x" direction="row" spacing="8x" shouldWrapChildren>\n    <Badge variant="dot" isInvisible>\n      <Icon icon="alert" />\n    </Badge>\n    <Badge variant="dot">\n      <Icon icon="alert" />\n    </Badge>\n    <Badge variant="dot" width="3x" height="3x">\n      <Icon icon="alert" />\n    </Badge>\n  </Stack>\n);\n\nexport default App;',title:"Tonic UI"}}),"\n",(0,a.jsxs)(n.h3,{id:"standalone-badge",children:["Standalone badge",(0,a.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#standalone-badge",children:(0,a.jsx)(n.svg,{children:(0,a.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsx)(n.p,{children:"The badge can be used as a standalone component. This can be useful for displaying a badge without a surrounding element."}),"\n",(0,a.jsx)(o.Z,{component:standalone,file:{data:'import { Badge, Icon, Stack } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <Stack direction="row" spacing="8x" alignItems="center">\n    <Badge variant="dot" />\n    <Badge variant="solid" badgeContent={0} />\n    <Badge variant="solid" badgeContent={5} />\n    <Badge variant="solid" badgeContent="99+" />\n    <Badge variant="solid" badgeContent={<Icon icon="virus" size="4x" />} height="6x" />\n  </Stack>\n);\n\nexport default App;',path:"pages/components/badge/index.page.mdx"},sandbox:{files:{},raw:'import { Badge, Icon, Stack } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <Stack direction="row" spacing="8x" alignItems="center">\n    <Badge variant="dot" />\n    <Badge variant="solid" badgeContent={0} />\n    <Badge variant="solid" badgeContent={5} />\n    <Badge variant="solid" badgeContent="99+" />\n    <Badge variant="solid" badgeContent={<Icon icon="virus" size="4x" />} height="6x" />\n  </Stack>\n);\n\nexport default App;',title:"Tonic UI"}}),"\n",(0,a.jsxs)(n.h3,{id:"badge-alignment",children:["Badge alignment",(0,a.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#badge-alignment",children:(0,a.jsx)(n.svg,{children:(0,a.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["You can use the ",(0,a.jsx)(n.code,{children:"placement"})," prop to move the badge to any corner of the wrapped element. The default placement is ",(0,a.jsx)(n.code,{children:"top-right"}),". The ",(0,a.jsx)(n.code,{children:"placement"})," prop can be one of ",(0,a.jsx)(n.code,{children:"top-left"}),", ",(0,a.jsx)(n.code,{children:"top-right"}),", ",(0,a.jsx)(n.code,{children:"bottom-left"}),", ",(0,a.jsx)(n.code,{children:"bottom-right"}),"."]}),"\n",(0,a.jsx)(o.Z,{component:badge_alignment,file:{data:'import { Badge, Grid, Icon } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <Grid\n    m="2x"\n    columnGap="8x"\n    rowGap="8x"\n    templateColumns="1fr 1fr"\n    width="min-content"\n  >\n    <Badge placement="top-left" badgeContent={1}>\n      <Icon icon="alert" />\n    </Badge>\n    <Badge placement="top-right" badgeContent={1}>\n      <Icon icon="alert" />\n    </Badge>\n    <Badge placement="bottom-left" badgeContent={1}>\n      <Icon icon="alert" />\n    </Badge>\n    <Badge placement="bottom-right" badgeContent={1}>\n      <Icon icon="alert" />\n    </Badge>\n  </Grid>\n);\n\nexport default App;',path:"pages/components/badge/index.page.mdx"},sandbox:{files:{},raw:'import { Badge, Grid, Icon } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <Grid\n    m="2x"\n    columnGap="8x"\n    rowGap="8x"\n    templateColumns="1fr 1fr"\n    width="min-content"\n  >\n    <Badge placement="top-left" badgeContent={1}>\n      <Icon icon="alert" />\n    </Badge>\n    <Badge placement="top-right" badgeContent={1}>\n      <Icon icon="alert" />\n    </Badge>\n    <Badge placement="bottom-left" badgeContent={1}>\n      <Icon icon="alert" />\n    </Badge>\n    <Badge placement="bottom-right" badgeContent={1}>\n      <Icon icon="alert" />\n    </Badge>\n  </Grid>\n);\n\nexport default App;',title:"Tonic UI"}}),"\n",(0,a.jsxs)(n.h3,{id:"badge-visibility",children:["Badge visibility",(0,a.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#badge-visibility",children:(0,a.jsx)(n.svg,{children:(0,a.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["The badge visibility can be controlled using the ",(0,a.jsx)(n.code,{children:"isInvisible"})," prop."]}),"\n",(0,a.jsx)(o.Z,{component:badge_visibility,file:{data:'import { Badge, Box, Button, ButtonGroup, Flex, Icon, Space, Stack, Switch, Text, TextLabel } from \'@tonic-ui/react\';\nimport React, { useState } from \'react\';\n\nconst App = () => {\n  const [count, setCount] = useState(1);\n  const [isInvisible, setIsInvisible] = useState(false);\n\n  return (\n    <Stack mt="1x" direction="column" spacing="8x">\n      <Flex alignItems="center">\n        <Box mr="8x">\n          <Badge badgeContent={count} isInvisible={!(count > 0)}>\n            <Icon icon="alert" />\n          </Badge>\n        </Box>\n        <ButtonGroup\n          variant="secondary"\n        >\n          <Button\n            aria-label="decrease"\n            onClick={() => {\n              setCount(Math.max(count - 1, 0));\n            }}\n          >\n            <Icon icon="minus" />\n          </Button>\n          <Button\n            aria-label="increase"\n            onClick={() => {\n              setCount(Math.max(count + 1, 0));\n            }}\n          >\n            <Icon icon="add" />\n          </Button>\n        </ButtonGroup>\n      </Flex>\n      <Flex alignItems="center">\n        <Box mr="8x">\n          <Badge\n            variant="dot"\n            isInvisible={isInvisible}\n          >\n            <Icon icon="alert" />\n          </Badge>\n        </Box>\n        <TextLabel cursor="pointer">\n          <Flex alignItems="center">\n            <Switch\n              size="md"\n              checked={!isInvisible}\n              onChange={() => {\n                setIsInvisible(!isInvisible);\n              }}\n            />\n            <Space width="2x" />\n            <Text userSelect="none">Show Badge</Text>\n          </Flex>\n        </TextLabel>\n      </Flex>\n    </Stack>\n  );\n};\n\nexport default App;',path:"pages/components/badge/index.page.mdx"},sandbox:{files:{},raw:'import { Badge, Box, Button, ButtonGroup, Flex, Icon, Space, Stack, Switch, Text, TextLabel } from \'@tonic-ui/react\';\nimport React, { useState } from \'react\';\n\nconst App = () => {\n  const [count, setCount] = useState(1);\n  const [isInvisible, setIsInvisible] = useState(false);\n\n  return (\n    <Stack mt="1x" direction="column" spacing="8x">\n      <Flex alignItems="center">\n        <Box mr="8x">\n          <Badge badgeContent={count} isInvisible={!(count > 0)}>\n            <Icon icon="alert" />\n          </Badge>\n        </Box>\n        <ButtonGroup\n          variant="secondary"\n        >\n          <Button\n            aria-label="decrease"\n            onClick={() => {\n              setCount(Math.max(count - 1, 0));\n            }}\n          >\n            <Icon icon="minus" />\n          </Button>\n          <Button\n            aria-label="increase"\n            onClick={() => {\n              setCount(Math.max(count + 1, 0));\n            }}\n          >\n            <Icon icon="add" />\n          </Button>\n        </ButtonGroup>\n      </Flex>\n      <Flex alignItems="center">\n        <Box mr="8x">\n          <Badge\n            variant="dot"\n            isInvisible={isInvisible}\n          >\n            <Icon icon="alert" />\n          </Badge>\n        </Box>\n        <TextLabel cursor="pointer">\n          <Flex alignItems="center">\n            <Switch\n              size="md"\n              checked={!isInvisible}\n              onChange={() => {\n                setIsInvisible(!isInvisible);\n              }}\n            />\n            <Space width="2x" />\n            <Text userSelect="none">Show Badge</Text>\n          </Flex>\n        </TextLabel>\n      </Flex>\n    </Stack>\n  );\n};\n\nexport default App;',title:"Tonic UI"}}),"\n",(0,a.jsxs)(n.h3,{id:"color",children:["Color",(0,a.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#color",children:(0,a.jsx)(n.svg,{children:(0,a.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["The color of the badge can be changed by passing the ",(0,a.jsx)(n.code,{children:"backgroundColor"})," prop. See the ",(0,a.jsx)(n.a,{href:"../theme/colors",children:"colors"})," section to learn more about colors."]}),"\n",(0,a.jsx)(o.Z,{component:color,file:{data:"import { Badge, Grid, Skeleton } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => {\n  const colors = [\n    'red:60',\n    'orange:50',\n    'yellow:50',\n    'green:60',\n    'blue:60',\n    'gray:60',\n    'magenta:60',\n    'purple:60',\n    'teal:60',\n    'cyan:60',\n  ];\n\n  return (\n    <Grid\n      mt=\"2x\"\n      columnGap=\"8x\"\n      rowGap=\"8x\"\n      templateColumns=\"repeat(auto-fill, minmax(40px, 1fr))\"\n    >\n      {colors.map(color => (\n        <Badge key={color} backgroundColor={color} badgeContent={5}>\n          <Skeleton variant=\"rectangle\" borderRadius=\"sm\" width=\"8x\" height=\"8x\" />\n        </Badge>\n      ))}\n    </Grid>\n  );\n};\n\nexport default App;",path:"pages/components/badge/index.page.mdx"},sandbox:{files:{},raw:"import { Badge, Grid, Skeleton } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => {\n  const colors = [\n    'red:60',\n    'orange:50',\n    'yellow:50',\n    'green:60',\n    'blue:60',\n    'gray:60',\n    'magenta:60',\n    'purple:60',\n    'teal:60',\n    'cyan:60',\n  ];\n\n  return (\n    <Grid\n      mt=\"2x\"\n      columnGap=\"8x\"\n      rowGap=\"8x\"\n      templateColumns=\"repeat(auto-fill, minmax(40px, 1fr))\"\n    >\n      {colors.map(color => (\n        <Badge key={color} backgroundColor={color} badgeContent={5}>\n          <Skeleton variant=\"rectangle\" borderRadius=\"sm\" width=\"8x\" height=\"8x\" />\n        </Badge>\n      ))}\n    </Grid>\n  );\n};\n\nexport default App;",title:"Tonic UI"}}),"\n",(0,a.jsxs)(n.h3,{id:"size",children:["Size",(0,a.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#size",children:(0,a.jsx)(n.svg,{children:(0,a.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["The size of the badge can be changed by passing the ",(0,a.jsx)(n.code,{children:"height"})," and ",(0,a.jsx)(n.code,{children:"minWidth"})," props."]}),"\n",(0,a.jsx)(o.Z,{component:size,file:{data:'import { Badge, Skeleton, Stack } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <Stack mt="3x" direction="row" spacing="8x" shouldWrapChildren>\n    <Badge badgeContent={5} height="4x" minWidth="4x" fontSize="xs">\n      <Skeleton variant="rectangle" borderRadius="sm" width="8x" height="8x" />\n    </Badge>\n    <Badge badgeContent={5} height="5x" minWidth="5x" fontSize="sm">\n      <Skeleton variant="rectangle" borderRadius="sm" width="8x" height="8x" />\n    </Badge>\n    <Badge badgeContent={5} height="6x" minWidth="6x" fontSize="md">\n      <Skeleton variant="rectangle" borderRadius="sm" width="8x" height="8x" />\n    </Badge>\n  </Stack>\n);\n\nexport default App;',path:"pages/components/badge/index.page.mdx"},sandbox:{files:{},raw:'import { Badge, Skeleton, Stack } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <Stack mt="3x" direction="row" spacing="8x" shouldWrapChildren>\n    <Badge badgeContent={5} height="4x" minWidth="4x" fontSize="xs">\n      <Skeleton variant="rectangle" borderRadius="sm" width="8x" height="8x" />\n    </Badge>\n    <Badge badgeContent={5} height="5x" minWidth="5x" fontSize="sm">\n      <Skeleton variant="rectangle" borderRadius="sm" width="8x" height="8x" />\n    </Badge>\n    <Badge badgeContent={5} height="6x" minWidth="6x" fontSize="md">\n      <Skeleton variant="rectangle" borderRadius="sm" width="8x" height="8x" />\n    </Badge>\n  </Stack>\n);\n\nexport default App;',title:"Tonic UI"}}),"\n",(0,a.jsxs)(n.h3,{id:"customization",children:["Customization",(0,a.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#customization",children:(0,a.jsx)(n.svg,{children:(0,a.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsx)(n.p,{children:"You can customize the badge style by passing style props. See the following example to learn how to create a outline badge."}),"\n",(0,a.jsx)(o.Z,{component:customization,file:{data:'import { Badge, Grid, Skeleton, Text, useColorMode } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst OutlineBadge = (props) => {\n  const [colorMode] = useColorMode();\n  const backgroundColor = {\n    dark: \'gray:100\',\n    light: \'white\',\n  }[colorMode];\n  const borderColor = {\n    dark: \'yellow:50\',\n    light: \'yellow:50\',\n  }[colorMode];\n  const borderStyle = \'solid\';\n  const borderWidth = \'2px\';\n  const color = {\n    dark: \'white:primary\',\n    light: \'black:primary\',\n  }[colorMode];\n  const height = \'5x\';\n  const minWidth = \'5x\';\n\n  return (\n    <Badge\n      backgroundColor={backgroundColor}\n      borderColor={borderColor}\n      borderStyle={borderStyle}\n      borderWidth={borderWidth}\n      color={color}\n      height={height}\n      minWidth={minWidth}\n      {...props}\n    />\n  );\n};\n\nconst App = () => {\n  return (\n    <Grid\n      mt="3x"\n      columnGap="8x"\n      justifyItems="center"\n      rowGap="8x"\n      templateColumns="repeat(3,1fr)"\n      width="min-content"\n    >\n      <OutlineBadge badgeContent={0}>\n        <Skeleton variant="rectangle" borderRadius="sm" width="8x" height="8x" />\n      </OutlineBadge>\n      <OutlineBadge badgeContent="99+">\n        <Skeleton variant="rectangle" borderRadius="sm" width="8x" height="8x" />\n      </OutlineBadge>\n      <OutlineBadge\n        badgeContent={<Text fontFamily="mono" fontSize="xs">!</Text>}\n      >\n        <Skeleton variant="rectangle" borderRadius="sm" width="8x" height="8x" />\n      </OutlineBadge>\n    </Grid>\n  );\n};\n\nexport default App;',path:"pages/components/badge/index.page.mdx"},sandbox:{files:{},raw:'import { Badge, Grid, Skeleton, Text, useColorMode } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst OutlineBadge = (props) => {\n  const [colorMode] = useColorMode();\n  const backgroundColor = {\n    dark: \'gray:100\',\n    light: \'white\',\n  }[colorMode];\n  const borderColor = {\n    dark: \'yellow:50\',\n    light: \'yellow:50\',\n  }[colorMode];\n  const borderStyle = \'solid\';\n  const borderWidth = \'2px\';\n  const color = {\n    dark: \'white:primary\',\n    light: \'black:primary\',\n  }[colorMode];\n  const height = \'5x\';\n  const minWidth = \'5x\';\n\n  return (\n    <Badge\n      backgroundColor={backgroundColor}\n      borderColor={borderColor}\n      borderStyle={borderStyle}\n      borderWidth={borderWidth}\n      color={color}\n      height={height}\n      minWidth={minWidth}\n      {...props}\n    />\n  );\n};\n\nconst App = () => {\n  return (\n    <Grid\n      mt="3x"\n      columnGap="8x"\n      justifyItems="center"\n      rowGap="8x"\n      templateColumns="repeat(3,1fr)"\n      width="min-content"\n    >\n      <OutlineBadge badgeContent={0}>\n        <Skeleton variant="rectangle" borderRadius="sm" width="8x" height="8x" />\n      </OutlineBadge>\n      <OutlineBadge badgeContent="99+">\n        <Skeleton variant="rectangle" borderRadius="sm" width="8x" height="8x" />\n      </OutlineBadge>\n      <OutlineBadge\n        badgeContent={<Text fontFamily="mono" fontSize="xs">!</Text>}\n      >\n        <Skeleton variant="rectangle" borderRadius="sm" width="8x" height="8x" />\n      </OutlineBadge>\n    </Grid>\n  );\n};\n\nexport default App;',title:"Tonic UI"}}),"\n",(0,a.jsxs)(n.h2,{id:"props",children:["Props",(0,a.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#props",children:(0,a.jsx)(n.svg,{children:(0,a.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsxs)(n.h3,{id:"badge-1",children:["Badge",(0,a.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#badge-1",children:(0,a.jsx)(n.svg,{children:(0,a.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{align:"left",children:"Name"}),(0,a.jsx)(n.th,{align:"left",children:"Type"}),(0,a.jsx)(n.th,{align:"left",children:"Default"}),(0,a.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{align:"left",children:"children"}),(0,a.jsx)(n.td,{align:"left",children:"ReactNode"}),(0,a.jsx)(n.td,{align:"left"}),(0,a.jsx)(n.td,{align:"left"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{align:"left",children:"badgeContent"}),(0,a.jsx)(n.td,{align:"left",children:"ReactNode | number | string"}),(0,a.jsx)(n.td,{align:"left"}),(0,a.jsx)(n.td,{align:"left",children:"The badge content."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{align:"left",children:"isInvisible"}),(0,a.jsx)(n.td,{align:"left",children:"boolean"}),(0,a.jsx)(n.td,{align:"left"}),(0,a.jsx)(n.td,{align:"left",children:"Whether the badge is invisible."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{align:"left",children:"placement"}),(0,a.jsx)(n.td,{align:"left",children:"string"}),(0,a.jsx)(n.td,{align:"left",children:"'top-right'"}),(0,a.jsx)(n.td,{align:"left",children:"The placement of the badge. One of: 'top-left', 'top-right', 'bottom-left', 'bottom-right'."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{align:"left",children:"variant"}),(0,a.jsx)(n.td,{align:"left",children:"string"}),(0,a.jsx)(n.td,{align:"left",children:"'solid'"}),(0,a.jsx)(n.td,{align:"left",children:"One of: 'solid', 'dot'"})]})]})]})]})}var index_page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.ah)(),e.components).wrapper;return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(_createMdxContent,e)})):_createMdxContent(e)}},83449:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var a=t(67569),r=t(49427),o=t(5632),i=t(2784),l=t(65245),d=t(82821),c=t(90622),s=t(52057),g=t(63651),h=["size"];function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var m=(0,i.forwardRef)(function(e,n){var t=e.size,r=function(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,h);return i.createElement(a.SVGIcon,_extends({size:t,viewBox:"0 0 1024 1024"},r),i.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"}))});m.displayName="CodeSandboxIcon";var x=t(94981);function _slicedToArray(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,a,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(o.push(t.value),!n||o.length!==n);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}}(e,n)||function(e,n){if(e){if("string"==typeof e)return _arrayLikeToArray(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _arrayLikeToArray(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=Array(n);t<n;t++)a[t]=e[t];return a}var u={fontFamily:'"SFMono-Medium", "SF Mono", "Segoe UI Mono", Menlo, Consolas, Courier, monospace',fontSize:14,overflowX:"auto"},Demo=function(e){var n=e.component,t=e.file,h=e.sandbox,p=(0,o.useRouter)(),b=_slicedToArray((0,i.useReducer)(function(e){return!e},!1),2),f=b[0],B=b[1],v=_slicedToArray((0,a.useColorMode)(),1)[0],y={dark:c.y,light:c.q}[v],k=_slicedToArray((0,r.useToggle)(!1),2),C=k[0],S=k[1],j=(0,d.Z)(null==t?void 0:t.data),I=j.onCopy,w=j.hasCopied,E=(0,i.useCallback)(function(){I()},[I]),T=(0,i.useCallback)(function(){(0,s.b)(h)},[h]),A=(0,i.useCallback)(function(){B(),S(!1)},[B,S]);return i.createElement(l.nu,{code:null==t?void 0:t.data,disabled:!0,language:"jsx",theme:y},i.createElement(a.Box,{border:1,borderColor:{dark:"gray:70",light:"gray:30"}[v],p:"4x"},i.createElement(a.Box,{fontSize:"sm",lineHeight:"sm"},i.createElement(i.Fragment,{key:f},i.createElement(n,null)))),i.createElement(a.Flex,{columnGap:"2x",justifyContent:"flex-end",mb:"4x"},i.createElement(x.Z,{"data-track":C?"CodeBlock|hide_source|".concat((0,g.Z)({path:p.pathname})):"CodeBlock|show_source|".concat((0,g.Z)({path:p.pathname})),onClick:S},i.createElement(a.Tooltip,{label:C?"Hide the source":"Show the source"},i.createElement(a.Icon,{icon:"code",size:{sm:"5x",md:"4x"}}))),i.createElement(x.Z,{"data-track":"CodeBlock|copy_source|".concat((0,g.Z)({path:p.pathname})),onClick:E},i.createElement(a.Tooltip,{label:w?"Copied":"Copy the source"},i.createElement(a.Icon,{icon:"file-copy-o",size:{sm:"5x",md:"4x"}}))),i.createElement(x.Z,{"data-track":"CodeBlock|edit_in_codesandbox|".concat(p.pathname),onClick:T},i.createElement(a.Tooltip,{label:"Edit in CodeSandbox"},i.createElement(m,{size:{sm:"5x",md:"4x"}}))),i.createElement(x.Z,{"data-track":"CodeBlock|reset|".concat(p.pathname),onClick:A},i.createElement(a.Tooltip,{label:"Reset the demo"},i.createElement(a.Icon,{icon:"redo",size:{sm:"5x",md:"4x"}})))),i.createElement(a.Fade,{in:C},i.createElement(a.Collapse,{in:C,unmountOnExit:!0},i.createElement(l.uz,{style:u}))))};Demo.displayName="Demo";var p=Demo},66487:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/badge",function(){return t(8733)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=66487)}),_N_E=e.O()}]);