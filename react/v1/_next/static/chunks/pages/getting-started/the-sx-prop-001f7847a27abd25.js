(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4889],{67808:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return y}});var r=t(52322),o=t(45392),i=t(16959),a=t(67569),c=t(2784),s=["sx"];function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function d(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var h=function(e){var n,t=e.sx,r=function(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,s);return c.createElement(a.Box,l({sx:[{color:"white:primary"}].concat(function(e){if(Array.isArray(e))return d(e)}(n=Array.isArray(t)?t:[t])||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(e,n){if(e){if("string"==typeof e)return d(e,void 0);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return d(e,void 0)}}(n)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())},r))},u=function(){return c.createElement(h,{sx:{color:"white:secondary",fontWeight:"semibold"}},"Header")},p=function(){return c.createElement(a.Box,{sx:[{color:"white:primary"},function(e){return{"&:hover":{color:e.colors["white:secondary"]}}}]},"Hover Me")},x=function(){return c.createElement(a.Box,{sx:[{"&:hover":{backgroundColor:"gray:80",color:"white:primary"}},{"&:hover":{backgroundColor:"gray:50",color:"white:primary"}},{"&:hover":{backgroundColor:"yellow:50",color:"black:primary"}}]},"Hover Me")},m=function(){return c.createElement(a.Box,{fontSize:"md",lineHeight:"md",sx:{"@media screen and (min-width: 640px)":{fontSize:"lg",lineHeight:"lg"},"@media screen and (min-width: 1024px)":{fontSize:"xl",lineHeight:"xl"},"@media screen and (min-width: 1280px)":{fontSize:"2xl",lineHeight:"2xl"}}},c.createElement(a.Text,null,"This text scales with the screen width"))},f=function(){return c.createElement(a.Box,{sx:{"--my-color-dodger-blue":"#1E90FF"}},c.createElement(a.Text,{backgroundColor:"var(--my-color-dodger-blue)",color:"white:primary"},"This text has a background of Dodger Blue"))},g=function(){return c.createElement(a.Button,{sx:{backgroundColor:"red:60",color:"white:primary","&:focus:not(:active)":{backgroundColor:"red:60"},"&:hover":{backgroundColor:"red:50"},"&:active":{backgroundColor:"red:70"}}},"Emphasis Button")};function b(e){var n=Object.assign({div:"div",h1:"h1",p:"p",code:"code",h2:"h2",a:"a",svg:"svg",use:"use",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",pre:"pre"},(0,o.ah)(),e.components);return(0,r.jsxs)(n.div,{className:"main-content",id:"main-content",children:["\n","\n","\n","\n","\n","\n","\n",(0,r.jsx)(n.h1,{id:"the-sx-prop",children:"The sx prop"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"sx"})," prop is a useful shortcut for defining custom styles with access to the theme. It offers a comprehensive set of CSS functions provided by ",(0,r.jsx)(n.code,{children:"@tonic-ui/styled-system"}),", including child and pseudo-selectors, media queries, raw CSS values, and more."]}),"\n",(0,r.jsxs)(n.h2,{id:"requirements",children:["Requirements",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#requirements",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Ensure you have the following package versions to use the ",(0,r.jsx)(n.code,{children:"sx"})," prop:"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{align:"left",children:"Package Name"}),(0,r.jsx)(n.th,{align:"left",children:"Release Version"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.code,{children:"@tonic-ui/react"})}),(0,r.jsxs)(n.td,{align:"left",children:[(0,r.jsx)(n.a,{href:"https://github.com/trendmicro-frontend/tonic-ui/releases/tag/%40tonic-ui%2Freact%401.18.0",children:"1.18.0"})," or higher"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.code,{children:"@tonic-ui/styled-system"})}),(0,r.jsxs)(n.td,{align:"left",children:[(0,r.jsx)(n.a,{href:"https://github.com/trendmicro-frontend/tonic-ui/releases/tag/%40tonic-ui%2Fstyled-system%401.7.0",children:"1.7.0"})," or higher"]})]})]})]}),"\n",(0,r.jsxs)(n.h2,{id:"usage",children:["Usage",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usage",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["To get started with the ",(0,r.jsx)(n.code,{children:"sx"})," prop, check out the demo below. It shows how to pass style and pseudo-style props to your components, allowing you to create custom styles with ease."]}),"\n",(0,r.jsxs)(n.h3,{id:"creating-a-custom-button",children:["Creating a custom button",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#creating-a-custom-button",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(i.Z,{component:g,file:{data:"import { Button } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => (\n  <Button\n    sx={{\n      backgroundColor: 'red:60',\n      color: 'white:primary',\n      '&:focus:not(:active)': {\n        backgroundColor: 'red:60',\n      },\n      '&:hover': {\n        backgroundColor: 'red:50',\n      },\n      '&:active': {\n        backgroundColor: 'red:70',\n      },\n    }}\n  >\n    Emphasis Button\n  </Button>\n);\n\nexport default App;",path:"pages/getting-started/the-sx-prop/index.page.mdx"},sandbox:{files:{},raw:"import { Button } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => (\n  <Button\n    sx={{\n      backgroundColor: 'red:60',\n      color: 'white:primary',\n      '&:focus:not(:active)': {\n        backgroundColor: 'red:60',\n      },\n      '&:hover': {\n        backgroundColor: 'red:50',\n      },\n      '&:active': {\n        backgroundColor: 'red:70',\n      },\n    }}\n  >\n    Emphasis Button\n  </Button>\n);\n\nexport default App;",title:"Tonic UI"}}),"\n",(0,r.jsxs)(n.h3,{id:"defining-css-custom-properties-css-variables",children:["Defining CSS custom properties (CSS variables)",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#defining-css-custom-properties-css-variables",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(i.Z,{component:f,file:{data:"import { Box, Text } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => (\n<Box\n  sx={{\n    '--my-color-dodger-blue': '#1E90FF'\n  }}\n>\n  <Text\n    backgroundColor=\"var(--my-color-dodger-blue)\"\n    color=\"white:primary\"\n  >\n    This text has a background of Dodger Blue\n  </Text>\n</Box>\n);\n\nexport default App;",path:"pages/getting-started/the-sx-prop/index.page.mdx"},sandbox:{files:{},raw:"import { Box, Text } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => (\n<Box\n  sx={{\n    '--my-color-dodger-blue': '#1E90FF'\n  }}\n>\n  <Text\n    backgroundColor=\"var(--my-color-dodger-blue)\"\n    color=\"white:primary\"\n  >\n    This text has a background of Dodger Blue\n  </Text>\n</Box>\n);\n\nexport default App;",title:"Tonic UI"}}),"\n",(0,r.jsxs)(n.h3,{id:"using-media-queries",children:["Using media queries",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#using-media-queries",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(i.Z,{component:m,file:{data:"import { Box, Text } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => (\n  <Box\n    fontSize=\"md\"\n    lineHeight=\"md\"\n    sx={{\n      '@media screen and (min-width: 640px)': {\n        fontSize: 'lg',\n        lineHeight: 'lg',\n      },\n      '@media screen and (min-width: 1024px)': {\n        fontSize: 'xl',\n        lineHeight: 'xl',\n      },\n      '@media screen and (min-width: 1280px)': {\n        fontSize: '2xl',\n        lineHeight: '2xl',\n      },\n    }}\n  >\n    <Text>\n      This text scales with the screen width\n    </Text>\n  </Box>\n);\n\nexport default App;",path:"pages/getting-started/the-sx-prop/index.page.mdx"},sandbox:{files:{},raw:"import { Box, Text } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => (\n  <Box\n    fontSize=\"md\"\n    lineHeight=\"md\"\n    sx={{\n      '@media screen and (min-width: 640px)': {\n        fontSize: 'lg',\n        lineHeight: 'lg',\n      },\n      '@media screen and (min-width: 1024px)': {\n        fontSize: 'xl',\n        lineHeight: 'xl',\n      },\n      '@media screen and (min-width: 1280px)': {\n        fontSize: '2xl',\n        lineHeight: '2xl',\n      },\n    }}\n  >\n    <Text>\n      This text scales with the screen width\n    </Text>\n  </Box>\n);\n\nexport default App;",title:"Tonic UI"}}),"\n",(0,r.jsxs)(n.h3,{id:"callback-values",children:["Callback values",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#callback-values",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Each property in the ",(0,r.jsx)(n.code,{children:"sx"})," prop can receive a function callback as a value. This is useful when you want to use the ",(0,r.jsx)(n.code,{children:"theme"})," for calculating a value:"]}),"\n",(0,r.jsx)(n.pre,{disabled:!0,children:(0,r.jsx)(n.code,{className:"language-jsx",children:"<Box sx={{ color: (theme) => theme.sizes['2x'] }} />\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"array-values",children:["Array values",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#array-values",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(n.p,{children:"Array types are useful when you want to partially override some styles in the former index:"}),"\n",(0,r.jsx)(i.Z,{component:x,file:{data:"import { Box } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => (\n  <Box\n    sx={[\n      {\n        '&:hover': {\n          backgroundColor: 'gray:80',\n          color: 'white:primary',\n        },\n      },\n      true && {\n        '&:hover': {\n          backgroundColor: 'gray:50',\n          color: 'white:primary',\n        },\n      },\n      true && {\n        '&:hover': {\n          backgroundColor: 'yellow:50',\n          color: 'black:primary',\n        },\n      },\n    ]}\n  >\n    Hover Me\n  </Box>\n);\n\nexport default App;",path:"pages/getting-started/the-sx-prop/index.page.mdx"},sandbox:{files:{},raw:"import { Box } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => (\n  <Box\n    sx={[\n      {\n        '&:hover': {\n          backgroundColor: 'gray:80',\n          color: 'white:primary',\n        },\n      },\n      true && {\n        '&:hover': {\n          backgroundColor: 'gray:50',\n          color: 'white:primary',\n        },\n      },\n      true && {\n        '&:hover': {\n          backgroundColor: 'yellow:50',\n          color: 'black:primary',\n        },\n      },\n    ]}\n  >\n    Hover Me\n  </Box>\n);\n\nexport default App;",title:"Tonic UI"}}),"\n",(0,r.jsx)(n.p,{children:"Each index can be an object or a callback:"}),"\n",(0,r.jsx)(i.Z,{component:p,file:{data:"import { Box  } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => (\n  <Box\n    sx={[\n      {\n        color: 'white:primary',\n      },\n      (theme) => ({\n        '&:hover': {\n          color: theme.colors['white:secondary'],\n        },\n      }),\n    ]}\n  >\n    Hover Me\n  </Box>\n);\n\nexport default App;",path:"pages/getting-started/the-sx-prop/index.page.mdx"},sandbox:{files:{},raw:"import { Box  } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => (\n  <Box\n    sx={[\n      {\n        color: 'white:primary',\n      },\n      (theme) => ({\n        '&:hover': {\n          color: theme.colors['white:secondary'],\n        },\n      }),\n    ]}\n  >\n    Hover Me\n  </Box>\n);\n\nexport default App;",title:"Tonic UI"}}),"\n",(0,r.jsxs)(n.h3,{id:"passing-the-sx-prop",children:["Passing the ",(0,r.jsx)(n.code,{children:"sx"})," prop",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#passing-the-sx-prop",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["If you want to pass the ",(0,r.jsx)(n.code,{children:"sx"})," prop from a custom component and pass it down to Tonic UI components, we recommend this approach:"]}),"\n",(0,r.jsx)(i.Z,{component:u,file:{data:"import { Box } from '@tonic-ui/react';\nimport React from 'react';\n\nconst ListItem = ({ sx, ...rest }) => (\n  <Box\n    sx={[\n      {\n        color: 'white:primary',\n      },\n      ...(Array.isArray(sx) ? sx : [sx]),\n    ]}\n    {...rest}\n  />\n);\n\nconst App = () => (\n  <ListItem\n    sx={{\n      color: 'white:secondary',\n      fontWeight: 'semibold',\n    }}\n  >\n    Header\n  </ListItem>\n);\n\nexport default App;",path:"pages/getting-started/the-sx-prop/index.page.mdx"},sandbox:{files:{},raw:"import { Box } from '@tonic-ui/react';\nimport React from 'react';\n\nconst ListItem = ({ sx, ...rest }) => (\n  <Box\n    sx={[\n      {\n        color: 'white:primary',\n      },\n      ...(Array.isArray(sx) ? sx : [sx]),\n    ]}\n    {...rest}\n  />\n);\n\nconst App = () => (\n  <ListItem\n    sx={{\n      color: 'white:secondary',\n      fontWeight: 'semibold',\n    }}\n  >\n    Header\n  </ListItem>\n);\n\nexport default App;",title:"Tonic UI"}})]})}var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.ah)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(b,e)})):b(e)}},16959:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var r=t(67569),o=t(49427),i=t(5632),a=t(2784),c=t(65245),s=t(16245),l=t(76761),d=t(73205),h=t(98107),u=["size"];function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var x=(0,a.forwardRef)(function(e,n){var t=e.size,o=function(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,u);return a.createElement(r.SVGIcon,p({size:t,viewBox:"0 0 1024 1024"},o),a.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"}))});x.displayName="CodeSandboxIcon";var m=t(44285);function f(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i,a,c=[],s=!0,l=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;s=!1}else for(;!(s=(r=i.call(t)).done)&&(c.push(r.value),c.length!==n);s=!0);}catch(e){l=!0,o=e}finally{try{if(!s&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(e,n)||function(e,n){if(e){if("string"==typeof e)return g(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var b={fontFamily:'"SFMono-Medium", "SF Mono", "Segoe UI Mono", Menlo, Consolas, Courier, monospace',fontSize:14,overflowX:"auto"},y=function(e){var n=e.component,t=e.file,u=e.sandbox,p=(0,i.useRouter)(),g=f((0,a.useReducer)(function(e){return!e},!1),2),y=g[0],v=g[1],j=f((0,r.useColorMode)(),1)[0],k={dark:l.y,light:l.q}[j],w=f((0,o.useToggle)(!1),2),C=w[0],B=w[1],E=(0,s.Z)(null==t?void 0:t.data),A=E.onCopy,S=E.hasCopied,T=(0,a.useCallback)(function(){A()},[A]),I=(0,a.useCallback)(function(){(0,d.b)(u)},[u]),O=(0,a.useCallback)(function(){v(),B(!1)},[v,B]);return a.createElement(c.nu,{code:null==t?void 0:t.data,disabled:!0,language:"jsx",theme:k},a.createElement(r.Box,{border:1,borderColor:{dark:"gray:70",light:"gray:30"}[j],p:"4x"},a.createElement(r.Box,{fontSize:"sm",lineHeight:"sm"},a.createElement(a.Fragment,{key:y},a.createElement(n,null)))),a.createElement(r.Flex,{columnGap:"2x",justifyContent:"flex-end",mb:"4x"},a.createElement(m.Z,{"data-track":C?"CodeBlock|hide_source|".concat((0,h.Z)({path:p.pathname})):"CodeBlock|show_source|".concat((0,h.Z)({path:p.pathname})),onClick:B},a.createElement(r.Tooltip,{label:C?"Hide the source":"Show the source"},a.createElement(r.Icon,{icon:"code",size:{sm:"5x",md:"4x"}}))),a.createElement(m.Z,{"data-track":"CodeBlock|copy_source|".concat((0,h.Z)({path:p.pathname})),onClick:T},a.createElement(r.Tooltip,{label:S?"Copied":"Copy the source"},a.createElement(r.Icon,{icon:"file-copy-o",size:{sm:"5x",md:"4x"}}))),a.createElement(m.Z,{"data-track":"CodeBlock|edit_in_codesandbox|".concat(p.pathname),onClick:I},a.createElement(r.Tooltip,{label:"Edit in CodeSandbox"},a.createElement(x,{size:{sm:"5x",md:"4x"}}))),a.createElement(m.Z,{"data-track":"CodeBlock|reset|".concat(p.pathname),onClick:O},a.createElement(r.Tooltip,{label:"Reset the demo"},a.createElement(r.Icon,{icon:"redo",size:{sm:"5x",md:"4x"}})))),a.createElement(r.Fade,{in:C},a.createElement(r.Collapse,{in:C,unmountOnExit:!0},a.createElement(c.uz,{style:b}))))};y.displayName="Demo";var v=y},85648:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/getting-started/the-sx-prop",function(){return t(67808)}])}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=85648)}),_N_E=e.O()}]);