(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1170],{49052:function(n,e,o){"use strict";o.r(e),o.d(e,{default:function(){return index_page}});var t=o(52322),r=o(45392),a=o(83449),i=o(67569),c=o(2784);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n}).apply(this,arguments)}var l=(0,c.forwardRef)(function(n,e){return c.createElement(i.Button,_extends({ref:e,variant:"secondary",borderColor:"black:primary",color:"black:primary",sx:{":active":{color:"black:primary"},":focus":{color:"black:primary"},":hover":{background:"rgba(0, 0, 0, 0.12)",color:"black:primary"},":hover:not(:focus)":{boxShadow:"none"}}},n))});l.displayName="ActionButton";var alert_action_button=function(){return c.createElement(i.Alert,{variant:"solid",severity:"error",isClosable:!0},c.createElement(i.Flex,{justifyContent:"space-between"},c.createElement(i.Text,null,"This is an alert notification with an action button."),c.createElement(l,{size:"sm"},"Action Button")))},s=o(1582),d=["size"];function icon_button_extends(){return(icon_button_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n}).apply(this,arguments)}function _arrayLikeToArray(n,e){(null==e||e>n.length)&&(e=n.length);for(var o=0,t=Array(e);o<e;o++)t[o]=n[o];return t}var useIconButtonStyle=function(n){var e,o=n.size,t=void 0===o?"8x":o,r=(0,i.useTheme)().colors,a=(function(n){if(Array.isArray(n))return n}(e=(0,i.useColorMode)())||function(n,e){var o,t,r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var a=[],i=!0,c=!1;try{for(r=r.call(n);!(i=(o=r.next()).done)&&(a.push(o.value),!e||a.length!==e);i=!0);}catch(n){c=!0,t=n}finally{try{i||null==r.return||r.return()}finally{if(c)throw t}}return a}}(e,1)||function(n,e){if(n){if("string"==typeof n)return _arrayLikeToArray(n,e);var o=Object.prototype.toString.call(n).slice(8,-1);if("Object"===o&&n.constructor&&(o=n.constructor.name),"Map"===o||"Set"===o)return Array.from(n);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return _arrayLikeToArray(n,e)}}(e,1)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],c={dark:"white:tertiary",light:"black:tertiary"}[a],l={dark:"white:primary",light:"black:primary"}[a],d="blue:60",u="blue:60";return{display:"flex",alignItems:"center",justifyContent:"center",border:1,borderColor:"transparent",color:c,width:t,height:t,transition:(0,s.createTransitionStyle)(["border-color","box-shadow","color"],{duration:200}),_hover:{color:l},_active:{color:c},_focus:{borderColor:d,boxShadow:u?"inset 0 0 0 1px ".concat(r[u]):void 0,color:c},_focusHover:{color:l},_focusActive:{borderColor:d,boxShadow:u?"inset 0 0 0 1px ".concat(r[u]):void 0,color:c}}},u=(0,c.forwardRef)(function(n,e){var o=n.size,t=function(n,e){if(null==n)return{};var o,t,r=function(n,e){if(null==n)return{};var o,t,r={},a=Object.keys(n);for(t=0;t<a.length;t++)o=a[t],e.indexOf(o)>=0||(r[o]=n[o]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)o=a[t],!(e.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(r[o]=n[o])}return r}(n,d),r=useIconButtonStyle({size:void 0===o?"8x":o});return c.createElement(i.ButtonBase,icon_button_extends({ref:e},r,t))});u.displayName="IconButton";var icon_button=function(){return c.createElement(u,null,c.createElement(i.Icon,{icon:"close"}))},attribute_disabled=function(){return c.createElement(i.ButtonBase,{disabled:!0,_disabled:{opacity:.28}},"Button is disabled")},usage=function(){return c.createElement(i.ButtonBase,null,"Click Me")};function _createMdxContent(n){var e=Object.assign({div:"div",h1:"h1",p:"p",code:"code",h2:"h2",a:"a",svg:"svg",use:"use",pre:"pre",h3:"h3",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),n.components);return(0,t.jsxs)(e.div,{className:"main-content",id:"main-content",children:["\n","\n","\n","\n","\n",(0,t.jsx)(e.h1,{id:"buttonbase",children:"ButtonBase"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"ButtonBase"})," does not have appearance settings including default border, color, outline, and padding. It aims to be a simple building block for creating a button."]}),"\n",(0,t.jsxs)(e.h2,{id:"import",children:["Import",(0,t.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,t.jsx)(e.svg,{children:(0,t.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"import { ButtonBase } from '@tonic-ui/react';\n"})}),"\n",(0,t.jsxs)(e.h2,{id:"usage",children:["Usage",(0,t.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usage",children:(0,t.jsx)(e.svg,{children:(0,t.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsx)(a.Z,{component:usage,file:{data:"import {\n  ButtonBase,\n} from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => {\n  return (\n    <ButtonBase>Click Me</ButtonBase>\n  );\n};\n\nexport default App;",path:"pages/components/button-base/index.page.mdx"},sandbox:{files:{},raw:"import {\n  ButtonBase,\n} from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => {\n  return (\n    <ButtonBase>Click Me</ButtonBase>\n  );\n};\n\nexport default App;",title:"Tonic UI"}}),"\n",(0,t.jsxs)(e.h3,{id:"attributes",children:["Attributes",(0,t.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#attributes",children:(0,t.jsx)(e.svg,{children:(0,t.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsxs)(e.p,{children:["Standard button attributes are supported, e.g., ",(0,t.jsx)(e.code,{children:"type"}),", ",(0,t.jsx)(e.code,{children:"disabled"}),", etc."]}),"\n",(0,t.jsxs)(e.h4,{id:"disabled",children:[(0,t.jsx)(e.code,{children:"disabled"}),(0,t.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#disabled",children:(0,t.jsx)(e.svg,{children:(0,t.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsx)(a.Z,{component:attribute_disabled,file:{data:"import {\n  ButtonBase,\n} from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => {\n  return (\n    <ButtonBase\n      disabled\n      _disabled={{\n        // dark mode: rgba(255, 255, 255, .28)\n        // light mode: rgba(0, 0, 0, .3)\n        opacity: 0.28,\n      }}\n    >\n      Button is disabled\n    </ButtonBase>\n  );\n};\n\nexport default App;",path:"pages/components/button-base/index.page.mdx"},sandbox:{files:{},raw:"import {\n  ButtonBase,\n} from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => {\n  return (\n    <ButtonBase\n      disabled\n      _disabled={{\n        // dark mode: rgba(255, 255, 255, .28)\n        // light mode: rgba(0, 0, 0, .3)\n        opacity: 0.28,\n      }}\n    >\n      Button is disabled\n    </ButtonBase>\n  );\n};\n\nexport default App;",title:"Tonic UI"}}),"\n",(0,t.jsxs)(e.h3,{id:"icon-button",children:["Icon button",(0,t.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#icon-button",children:(0,t.jsx)(e.svg,{children:(0,t.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsxs)(e.p,{children:["You can use ",(0,t.jsx)(e.code,{children:"ButtonBase"})," to compose an icon button. An icon button is a button that contains only an icon."]}),"\n",(0,t.jsx)(a.Z,{component:icon_button,file:{data:"import {\n  ButtonBase,\n  Icon,\n  useColorMode,\n  useTheme,\n} from '@tonic-ui/react';\nimport {\n  createTransitionStyle,\n} from '@tonic-ui/utils';\nimport React, { forwardRef } from 'react';\n\nconst useIconButtonStyle = ({ size = '8x' }) => {\n  const { colors } = useTheme();\n  const [colorMode] = useColorMode();\n  const color = {\n    dark: 'white:tertiary',\n    light: 'black:tertiary',\n  }[colorMode];\n  const activeColor = color;\n  const hoverColor = {\n    dark: 'white:primary',\n    light: 'black:primary',\n  }[colorMode];\n  const focusColor = color;\n  const focusHoverColor = hoverColor;\n  const focusActiveColor = activeColor;\n  const focusBorderColor = 'blue:60'\n  const focusBoxShadowBorderColor = 'blue:60';\n\n  return {\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n    border: 1,\n    borderColor: 'transparent',\n    color,\n    width: size,\n    height: size,\n    transition: createTransitionStyle(['border-color', 'box-shadow', 'color'], { duration: 200 }),\n    _hover: {\n      color: hoverColor,\n    },\n    _active: {\n      color: activeColor,\n    },\n    _focus: {\n      borderColor: focusBorderColor,\n      boxShadow: focusBoxShadowBorderColor ? `inset 0 0 0 1px ${colors[focusBoxShadowBorderColor]}` : undefined,\n      color: focusColor,\n    },\n    _focusHover: {\n      color: focusHoverColor,\n    },\n    _focusActive: {\n      borderColor: focusBorderColor,\n      boxShadow: focusBoxShadowBorderColor ? `inset 0 0 0 1px ${colors[focusBoxShadowBorderColor]}` : undefined,\n      color: focusActiveColor,\n    },\n  };\n};\n\nconst IconButton = forwardRef((\n  {\n    size = '8x',\n    ...rest\n  },\n  ref,\n) => {\n  const styleProps = useIconButtonStyle({ size });\n\n  return (\n    <ButtonBase\n      ref={ref}\n      {...styleProps}\n      {...rest}\n    />\n  );\n});\nIconButton.displayName = 'IconButton';\n\nconst App = () => {\n  return (\n    <IconButton>\n      <Icon icon=\"close\" />\n    </IconButton>\n  );\n};\n\nexport default App;",path:"pages/components/button-base/index.page.mdx"},sandbox:{files:{},raw:"import {\n  ButtonBase,\n  Icon,\n  useColorMode,\n  useTheme,\n} from '@tonic-ui/react';\nimport {\n  createTransitionStyle,\n} from '@tonic-ui/utils';\nimport React, { forwardRef } from 'react';\n\nconst useIconButtonStyle = ({ size = '8x' }) => {\n  const { colors } = useTheme();\n  const [colorMode] = useColorMode();\n  const color = {\n    dark: 'white:tertiary',\n    light: 'black:tertiary',\n  }[colorMode];\n  const activeColor = color;\n  const hoverColor = {\n    dark: 'white:primary',\n    light: 'black:primary',\n  }[colorMode];\n  const focusColor = color;\n  const focusHoverColor = hoverColor;\n  const focusActiveColor = activeColor;\n  const focusBorderColor = 'blue:60'\n  const focusBoxShadowBorderColor = 'blue:60';\n\n  return {\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n    border: 1,\n    borderColor: 'transparent',\n    color,\n    width: size,\n    height: size,\n    transition: createTransitionStyle(['border-color', 'box-shadow', 'color'], { duration: 200 }),\n    _hover: {\n      color: hoverColor,\n    },\n    _active: {\n      color: activeColor,\n    },\n    _focus: {\n      borderColor: focusBorderColor,\n      boxShadow: focusBoxShadowBorderColor ? `inset 0 0 0 1px ${colors[focusBoxShadowBorderColor]}` : undefined,\n      color: focusColor,\n    },\n    _focusHover: {\n      color: focusHoverColor,\n    },\n    _focusActive: {\n      borderColor: focusBorderColor,\n      boxShadow: focusBoxShadowBorderColor ? `inset 0 0 0 1px ${colors[focusBoxShadowBorderColor]}` : undefined,\n      color: focusActiveColor,\n    },\n  };\n};\n\nconst IconButton = forwardRef((\n  {\n    size = '8x',\n    ...rest\n  },\n  ref,\n) => {\n  const styleProps = useIconButtonStyle({ size });\n\n  return (\n    <ButtonBase\n      ref={ref}\n      {...styleProps}\n      {...rest}\n    />\n  );\n});\nIconButton.displayName = 'IconButton';\n\nconst App = () => {\n  return (\n    <IconButton>\n      <Icon icon=\"close\" />\n    </IconButton>\n  );\n};\n\nexport default App;",title:"Tonic UI"}}),"\n",(0,t.jsxs)(e.h3,{id:"notification-action-button",children:["Notification action button",(0,t.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#notification-action-button",children:(0,t.jsx)(e.svg,{children:(0,t.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsxs)(e.p,{children:["To perform an action on an alert or toast notification, you can use ",(0,t.jsx)(e.code,{children:"ButtonBase"})," to compose an action button using the ",(0,t.jsx)(e.code,{children:"sx"})," prop."]}),"\n",(0,t.jsx)(a.Z,{component:alert_action_button,file:{data:"import {\n  Alert,\n  Button,\n  Flex,\n  Text,\n} from '@tonic-ui/react';\nimport React, { forwardRef } from 'react';\n\nconst ActionButton = forwardRef((props, ref) => (\n  <Button\n    ref={ref}\n    variant=\"secondary\"\n    borderColor=\"black:primary\"\n    color=\"black:primary\"\n    sx={{\n      ':active': {\n        color: 'black:primary',\n      },\n      ':focus': {\n        color: 'black:primary',\n      },\n      ':hover': {\n        background: 'rgba(0, 0, 0, 0.12)',\n        color: 'black:primary',\n      },\n      ':hover:not(:focus)': {\n        boxShadow: 'none',\n      },\n    }}\n    {...props}\n  />\n));\nActionButton.displayName = 'ActionButton';\n\nconst App = () => {\n  return (\n    <Alert variant=\"solid\" severity=\"error\" isClosable>\n      <Flex justifyContent=\"space-between\">\n        <Text>\n          This is an alert notification with an action button.\n        </Text>\n        <ActionButton size=\"sm\">\n          Action Button\n        </ActionButton>\n      </Flex>\n    </Alert>\n  );\n};\n\nexport default App;",path:"pages/components/button-base/index.page.mdx"},sandbox:{files:{},raw:"import {\n  Alert,\n  Button,\n  Flex,\n  Text,\n} from '@tonic-ui/react';\nimport React, { forwardRef } from 'react';\n\nconst ActionButton = forwardRef((props, ref) => (\n  <Button\n    ref={ref}\n    variant=\"secondary\"\n    borderColor=\"black:primary\"\n    color=\"black:primary\"\n    sx={{\n      ':active': {\n        color: 'black:primary',\n      },\n      ':focus': {\n        color: 'black:primary',\n      },\n      ':hover': {\n        background: 'rgba(0, 0, 0, 0.12)',\n        color: 'black:primary',\n      },\n      ':hover:not(:focus)': {\n        boxShadow: 'none',\n      },\n    }}\n    {...props}\n  />\n));\nActionButton.displayName = 'ActionButton';\n\nconst App = () => {\n  return (\n    <Alert variant=\"solid\" severity=\"error\" isClosable>\n      <Flex justifyContent=\"space-between\">\n        <Text>\n          This is an alert notification with an action button.\n        </Text>\n        <ActionButton size=\"sm\">\n          Action Button\n        </ActionButton>\n      </Flex>\n    </Alert>\n  );\n};\n\nexport default App;",title:"Tonic UI"}}),"\n",(0,t.jsxs)(e.h2,{id:"props",children:["Props",(0,t.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#props",children:(0,t.jsx)(e.svg,{children:(0,t.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsxs)(e.h3,{id:"buttonbase-1",children:["ButtonBase",(0,t.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#buttonbase-1",children:(0,t.jsx)(e.svg,{children:(0,t.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{align:"left",children:"Name"}),(0,t.jsx)(e.th,{align:"left",children:"Type"}),(0,t.jsx)(e.th,{align:"left",children:"Default"}),(0,t.jsx)(e.th,{align:"left",children:"Description"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{align:"left",children:"children"}),(0,t.jsx)(e.td,{align:"left",children:"ReactNode"}),(0,t.jsx)(e.td,{align:"left"}),(0,t.jsx)(e.td,{align:"left"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{align:"left",children:"disabled"}),(0,t.jsx)(e.td,{align:"left",children:"boolean"}),(0,t.jsx)(e.td,{align:"left"}),(0,t.jsxs)(e.td,{align:"left",children:["If ",(0,t.jsx)(e.code,{children:"true"}),", the button will be disabled. This sets ",(0,t.jsx)(e.code,{children:"aria-disabled=true"})," and you can style this state by passing the ",(0,t.jsx)(e.code,{children:"_disabled"})," prop."]})]})]})]})]})}var index_page=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,r.ah)(),n.components).wrapper;return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(_createMdxContent,n)})):_createMdxContent(n)}},83449:function(n,e,o){"use strict";o.d(e,{Z:function(){return m}});var t=o(67569),r=o(49427),a=o(5632),i=o(2784),c=o(65245),l=o(82821),s=o(90622),d=o(52057),u=o(63651),f=["size"];function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n}).apply(this,arguments)}var h=(0,i.forwardRef)(function(n,e){var o=n.size,r=function(n,e){if(null==n)return{};var o,t,r=function(n,e){if(null==n)return{};var o,t,r={},a=Object.keys(n);for(t=0;t<a.length;t++)o=a[t],e.indexOf(o)>=0||(r[o]=n[o]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)o=a[t],!(e.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(r[o]=n[o])}return r}(n,f);return i.createElement(t.SVGIcon,_extends({size:o,viewBox:"0 0 1024 1024"},r),i.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"}))});h.displayName="CodeSandboxIcon";var p=o(94981);function _slicedToArray(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var o,t,r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var a=[],i=!0,c=!1;try{for(r=r.call(n);!(i=(o=r.next()).done)&&(a.push(o.value),!e||a.length!==e);i=!0);}catch(n){c=!0,t=n}finally{try{i||null==r.return||r.return()}finally{if(c)throw t}}return a}}(n,e)||function(n,e){if(n){if("string"==typeof n)return _arrayLikeToArray(n,e);var o=Object.prototype.toString.call(n).slice(8,-1);if("Object"===o&&n.constructor&&(o=n.constructor.name),"Map"===o||"Set"===o)return Array.from(n);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return _arrayLikeToArray(n,e)}}(n,e)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(n,e){(null==e||e>n.length)&&(e=n.length);for(var o=0,t=Array(e);o<e;o++)t[o]=n[o];return t}var b={fontFamily:'"SFMono-Medium", "SF Mono", "Segoe UI Mono", Menlo, Consolas, Courier, monospace',fontSize:14,overflowX:"auto"},Demo=function(n){var e=n.component,o=n.file,f=n.sandbox,m=(0,a.useRouter)(),x=_slicedToArray((0,i.useReducer)(function(n){return!n},!1),2),y=x[0],v=x[1],B=_slicedToArray((0,t.useColorMode)(),1)[0],g={dark:s.y,light:s.q}[B],j=_slicedToArray((0,r.useToggle)(!1),2),C=j[0],k=j[1],w=(0,l.Z)(null==o?void 0:o.data),_=w.onCopy,A=w.hasCopied,I=(0,i.useCallback)(function(){_()},[_]),S=(0,i.useCallback)(function(){(0,d.b)(f)},[f]),T=(0,i.useCallback)(function(){v(),k(!1)},[v,k]);return i.createElement(c.nu,{code:null==o?void 0:o.data,disabled:!0,language:"jsx",theme:g},i.createElement(t.Box,{border:1,borderColor:{dark:"gray:70",light:"gray:30"}[B],p:"4x"},i.createElement(t.Box,{fontSize:"sm",lineHeight:"sm"},i.createElement(i.Fragment,{key:y},i.createElement(e,null)))),i.createElement(t.Flex,{columnGap:"2x",justifyContent:"flex-end",mb:"4x"},i.createElement(p.Z,{"data-track":C?"CodeBlock|hide_source|".concat((0,u.Z)({path:m.pathname})):"CodeBlock|show_source|".concat((0,u.Z)({path:m.pathname})),onClick:k},i.createElement(t.Tooltip,{label:C?"Hide the source":"Show the source"},i.createElement(t.Icon,{icon:"code",size:{sm:"5x",md:"4x"}}))),i.createElement(p.Z,{"data-track":"CodeBlock|copy_source|".concat((0,u.Z)({path:m.pathname})),onClick:I},i.createElement(t.Tooltip,{label:A?"Copied":"Copy the source"},i.createElement(t.Icon,{icon:"file-copy-o",size:{sm:"5x",md:"4x"}}))),i.createElement(p.Z,{"data-track":"CodeBlock|edit_in_codesandbox|".concat(m.pathname),onClick:S},i.createElement(t.Tooltip,{label:"Edit in CodeSandbox"},i.createElement(h,{size:{sm:"5x",md:"4x"}}))),i.createElement(p.Z,{"data-track":"CodeBlock|reset|".concat(m.pathname),onClick:T},i.createElement(t.Tooltip,{label:"Reset the demo"},i.createElement(t.Icon,{icon:"redo",size:{sm:"5x",md:"4x"}})))),i.createElement(t.Fade,{in:C},i.createElement(t.Collapse,{in:C,unmountOnExit:!0},i.createElement(c.uz,{style:b}))))};Demo.displayName="Demo";var m=Demo},3742:function(n,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/button-base",function(){return o(49052)}])}},function(n){n.O(0,[9774,2888,179],function(){return n(n.s=3742)}),_N_E=n.O()}]);