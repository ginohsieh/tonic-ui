(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5545],{32726:function(e){var r=Object.prototype.hasOwnProperty;e.exports=function(e,n){return null!=e&&r.call(e,n)}},93352:function(e,r,n){var o=n(32726),l=n(1369);e.exports=function(e,r){return null!=e&&l(e,r,o)}},83668:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return index_page}});var o=n(52322),l=n(45392),t=n(67569),i=n(30169),s=n(5081),c=n(72579),a=n.n(c),d=n(93352),h=n.n(d),x=n(2784),y=["colorLabel","colorType","colorKey","colorTokens","colorValues"];function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function _slicedToArray(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n,o,l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var t=[],i=!0,s=!1;try{for(l=l.call(e);!(i=(n=l.next()).done)&&(t.push(n.value),!r||t.length!==r);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==l.return||l.return()}finally{if(s)throw o}}return t}}(e,r)||function(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(e,r)}}(e,r)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,o=Array(r);n<r;n++)o[n]=e[n];return o}var components_ColorStyleBlock=function(e){var r,n,o=e.colorLabel,l=e.colorType,i=(e.colorKey,e.colorTokens),s=e.colorValues,c=function(e,r){if(null==e)return{};var n,o,l=function(e,r){if(null==e)return{};var n,o,l={},t=Object.keys(e);for(o=0;o<t.length;o++)n=t[o],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)n=t[o],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,y),a=_slicedToArray((0,t.useColorMode)(),1)[0],d=_slicedToArray((0,t.useColorStyle)({colorMode:a}),1)[0],h=null==d?void 0:null===(r=d.color)||void 0===r?void 0:r.primary,u=null==d?void 0:null===(n=d.color)||void 0===n?void 0:n.secondary,p=function(){var e={};if("gradient"===l){var r=_slicedToArray(s,2),n=r[0],o=r[1];return e.background="linear-gradient(45deg, ".concat(n,", ").concat(o,")"),e}return"shadow"===l?(e.backgroundColor=({dark:"gray:90",light:"white"})[a],e.boxShadow=s[0]):(e.backgroundColor=s[0],({dark:"gray:100",light:"white:emphasis"})[a]===i[0]&&(e.border=1,e.borderColor=({dark:"gray:70",light:"gray:20"})[a])),e}();return x.createElement(t.Box,c,x.createElement(t.Box,_extends({maxWidth:120,height:120,px:"3x",mb:"4x"},p)),x.createElement(t.Box,{mb:"3x"},o&&x.createElement(t.Text,{color:h,fontSize:"md",lineHeight:"md",fontWeight:"semibold"},o)),i.length>0&&x.createElement(x.Fragment,null,x.createElement(t.Stack,{direction:"row",spacing:"2x"},i.map(function(e){return e?x.createElement(t.Tag,{key:e,variant:"solid",fontFamily:"mono",fontSize:"sm",lineHeight:"sm",mb:"1x"},e):null})),x.createElement(t.Stack,{direction:"row",spacing:"2x",mb:"1x"},s.map(function(e){return x.createElement(t.Text,{key:e,color:u,fontFamily:"mono",fontSize:"sm",lineHeight:"sm"},e)}))))},u=["colorStyle","colorType"];function ColorStyleBody_extends(){return(ColorStyleBody_extends=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function ColorStyleBody_slicedToArray(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n,o,l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var t=[],i=!0,s=!1;try{for(l=l.call(e);!(i=(n=l.next()).done)&&(t.push(n.value),!r||t.length!==r);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==l.return||l.return()}finally{if(s)throw o}}return t}}(e,r)||function(e,r){if(e){if("string"==typeof e)return ColorStyleBody_arrayLikeToArray(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ColorStyleBody_arrayLikeToArray(e,r)}}(e,r)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ColorStyleBody_arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,o=Array(r);n<r;n++)o[n]=e[n];return o}var components_ColorStyleBody=function(e){var r,n=e.colorStyle,o=void 0===n?{}:n,l=e.colorType,i=function(e,r){if(null==e)return{};var n,o,l=function(e,r){if(null==e)return{};var n,o,l={},t=Object.keys(e);for(o=0;o<t.length;o++)n=t[o],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)n=t[o],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,u),c=(0,t.useTheme)(),d=ColorStyleBody_slicedToArray((0,t.useColorMode)(),1)[0],y=ColorStyleBody_slicedToArray((0,t.useColorStyle)({colorMode:d}),1)[0],p=null!==(r=a()(o,l))&&void 0!==r?r:a()(y,l),j=Object.keys(p).map(function(e){var r,n,t=Array.isArray(p)?"":(r=e,(r=(0,s.Zs)(r)).charAt(0).toUpperCase()+r.slice(1)),i=null!==(n=a()(o,"".concat(l,".").concat(e)))&&void 0!==n?n:a()(y,"".concat(l,".").concat(e)),d=(0,s.rY)(i).map(function(e){return h()(c,["colors",e])?e:null}),x=(0,s.rY)(i).map(function(e){var r;return null!==(r=a()(c,["colors",e]))&&void 0!==r?r:e});return Array.isArray(p)&&(e="#"+(Number(e)+1)),{colorLabel:t,colorType:l,colorKey:e,colorTokens:d,colorValues:x}});return x.createElement(t.Grid,ColorStyleBody_extends({rowGap:"8x",columnGap:"12x",templateColumns:"repeat(auto-fill, minmax(".concat(120,"px, 1fr))")},i),j.map(function(e){var r=e.colorLabel,n=e.colorType,o=e.colorKey,l=e.colorTokens,t=e.colorValues;return x.createElement(components_ColorStyleBlock,{key:o,colorLabel:r,colorType:n,colorKey:o,colorTokens:l,colorValues:t})}))};function ColorStyleContent_extends(){return(ColorStyleContent_extends=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function ColorStyleContent_arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,o=Array(r);n<r;n++)o[n]=e[n];return o}var components_ColorStyleContent=function(e){var r,n=(function(e){if(Array.isArray(e))return e}(r=(0,t.useColorMode)())||function(e,r){var n,o,l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var t=[],i=!0,s=!1;try{for(l=l.call(e);!(i=(n=l.next()).done)&&(t.push(n.value),!r||t.length!==r);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==l.return||l.return()}finally{if(s)throw o}}return t}}(r,1)||function(e,r){if(e){if("string"==typeof e)return ColorStyleContent_arrayLikeToArray(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ColorStyleContent_arrayLikeToArray(e,r)}}(r,1)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];return x.createElement(t.Box,ColorStyleContent_extends({px:"10x",py:"8x"},{dark:{backgroundColor:"gray:100",border:1,borderColor:"gray:70"},light:{backgroundColor:"white:emphasis",border:1,borderColor:"gray:20"}}[n],e))};function ColorStyleHeader_extends(){return(ColorStyleHeader_extends=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function ColorStyleHeader_slicedToArray(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n,o,l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var t=[],i=!0,s=!1;try{for(l=l.call(e);!(i=(n=l.next()).done)&&(t.push(n.value),!r||t.length!==r);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==l.return||l.return()}finally{if(s)throw o}}return t}}(e,r)||function(e,r){if(e){if("string"==typeof e)return ColorStyleHeader_arrayLikeToArray(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ColorStyleHeader_arrayLikeToArray(e,r)}}(e,r)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ColorStyleHeader_arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,o=Array(r);n<r;n++)o[n]=e[n];return o}var components_ColorStyleHeader=function(e){var r,n=ColorStyleHeader_slicedToArray((0,t.useColorMode)(),1)[0],o=ColorStyleHeader_slicedToArray((0,t.useColorStyle)({colorMode:n}),1)[0],l=null==o?void 0:null===(r=o.color)||void 0===r?void 0:r.primary;return x.createElement(t.Box,ColorStyleHeader_extends({mb:"5x",color:l},e))},p=n(53733);function _createMdxContent(e){var r=Object.assign({div:"div",h1:"h1",p:"p",h2:"h2",a:"a",svg:"svg",use:"use",code:"code",pre:"pre",h3:"h3",ul:"ul",li:"li"},(0,l.ah)(),e.components);return(0,o.jsxs)(r.div,{className:"main-content",id:"main-content",children:["\n",(0,o.jsx)(r.h1,{id:"colorstyleprovider",children:"ColorStyleProvider"}),"\n",(0,o.jsx)(r.p,{children:"Tonic UI comes with a color style system that defines functional color values."}),"\n",(0,o.jsxs)(r.h2,{id:"setup",children:["Setup",(0,o.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#setup",children:(0,o.jsx)(r.svg,{children:(0,o.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(r.p,{children:["By using ",(0,o.jsx)(r.code,{children:"TonicProvider"})," at root of your application, it will add ",(0,o.jsx)(r.code,{children:"ColorStyleProvider"})," internally to provide the color style context to all components. The default color style will be added automatically."]}),"\n",(0,o.jsx)(r.pre,{disabled:!0,children:(0,o.jsx)(r.code,{className:"language-jsx",children:"import React from 'react';\nimport { Box, TonicProvider } from '@tonic-ui/react';\n\nfunction App(props) {\n  return (\n    <TonicProvider\n      /**\n       * The `colorStyle` config\n       * @param {object} defaultValue\n       * @param {object} value\n       * @param {function} onChange\n       */\n      colorStyle={{\n        // You can omit color style settings if using the default values\n      }}\n    >\n      <Box {...props} />\n    </TonicProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(r.p,{children:"The above setup is equivalent to:"}),"\n",(0,o.jsx)(r.pre,{disabled:!0,children:(0,o.jsx)(r.code,{className:"language-jsx",children:"<ColorStyleProvider>\n  <Box {...props} />\n</ColorStyleProvider>\n"})}),"\n",(0,o.jsxs)(r.h3,{id:"the-colorstyle-config",children:["The ",(0,o.jsx)(r.code,{children:"colorStyle"})," config",(0,o.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#the-colorstyle-config",children:(0,o.jsx)(r.svg,{children:(0,o.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"colorStyle"})," config has the following options:"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"defaultValue"}),": The default value for the color style."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"value"}),": The current value for the color style."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"onChange(colorStyle)"}),": A function that is called when the color style is changed."]}),"\n"]}),"\n",(0,o.jsxs)(r.h2,{id:"default-color-style",children:["Default Color Style",(0,o.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#default-color-style",children:(0,o.jsx)(r.svg,{children:(0,o.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(r.h3,{id:"import",children:["Import",(0,o.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,o.jsx)(r.svg,{children:(0,o.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",children:"import { colorStyle } from '@tonic-ui/react';\n"})}),"\n",(0,o.jsxs)(r.h3,{id:"color-style-settings",children:["Color style settings",(0,o.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#color-style-settings",children:(0,o.jsx)(r.svg,{children:(0,o.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsx)(t.Box,{mb:"6x",children:(0,o.jsx)(i.Z,{children:(0,p.Z)(t.colorStyle)})}),"\n",(0,o.jsxs)(r.h2,{id:"override-default-color-style",children:["Override Default Color Style",(0,o.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#override-default-color-style",children:(0,o.jsx)(r.svg,{children:(0,o.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(r.p,{children:["To override default color style, you can create a color style object in accordance to the color mode, and pass the object to ",(0,o.jsx)(r.code,{children:"TonicProvider"})," with either the ",(0,o.jsx)(r.code,{children:"value"})," or the ",(0,o.jsx)(r.code,{children:"defaultValue"})," property."]}),"\n",(0,o.jsx)(r.pre,{disabled:!0,children:(0,o.jsx)(r.code,{className:"language-jsx",children:"import React from 'react';\nimport { Box, TonicProvider, colorStyle } from '@tonic-ui/react';\n\nfunction App(props) {\n  return (\n    <TonicProvider\n      colorStyle={{\n        value: customColorStyle,\n      }}\n    >\n      <Box {...props} />\n    </TonicProvider>\n  );\n}\n\nconst customColorStyle = {\n  ...colorStyle,\n   dark: {\n    ...colorStyle.dark,\n    color: {\n      emphasis: 'white:emphasis',\n      primary: 'white:primary',\n      secondary: 'white:secondary',\n      tertiary: 'white:tertiary',\n      disabled: 'white:disabled',\n      success: 'green:40',\n      info: 'blue:40',\n      warning: 'orange:50',\n      error: 'red:50',\n    },\n  },\n  light: {\n    ...colorStyle.light,\n    color: {\n      emphasis: 'black:emphasis',\n      primary: 'black:primary',\n      secondary: 'black:secondary',\n      tertiary: 'black:tertiary',\n      disabled: 'black:disabled',\n      success: 'green:50',\n      info: 'blue:60',\n      warning: 'orange:50',\n      error: 'red:60',\n    },\n  },\n};\n"})}),"\n",(0,o.jsxs)(r.h2,{id:"managing-color-style",children:["Managing Color Style",(0,o.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#managing-color-style",children:(0,o.jsx)(r.svg,{children:(0,o.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(r.p,{children:["To manage color style in your application, you can use the ",(0,o.jsx)(r.a,{href:"color-style/useColorStyle",children:"useColorStyle"})," hook."]}),"\n",(0,o.jsxs)(r.h2,{id:"color-values",children:["Color Values",(0,o.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#color-values",children:(0,o.jsx)(r.svg,{children:(0,o.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(r.h3,{id:"background",children:["Background",(0,o.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#background",children:(0,o.jsx)(r.svg,{children:(0,o.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.DarkMode,{children:(0,o.jsxs)(components_ColorStyleContent,{children:[(0,o.jsxs)(components_ColorStyleHeader,{children:[(0,o.jsxs)(t.Flex,{alignItems:"center",children:[(0,o.jsx)(t.Icon,{icon:"moon",size:"6x",color:"yellow:50"}),(0,o.jsx)(t.Space,{width:"2x"}),(0,o.jsx)(t.Text,{fontSize:"lg",lineHeight:"lg",children:(0,o.jsx)(r.p,{children:"Dark Mode"})})]}),(0,o.jsx)(t.Divider,{my:"2x"})]}),(0,o.jsx)(components_ColorStyleBody,{colorType:"background"})]})}),(0,o.jsx)(t.LightMode,{children:(0,o.jsxs)(components_ColorStyleContent,{children:[(0,o.jsxs)(components_ColorStyleHeader,{children:[(0,o.jsxs)(t.Flex,{alignItems:"center",children:[(0,o.jsx)(t.Icon,{icon:"sun",size:"6x",color:"yellow:50"}),(0,o.jsx)(t.Space,{width:"2x"}),(0,o.jsx)(t.Text,{fontSize:"lg",lineHeight:"lg",children:(0,o.jsx)(r.p,{children:"Light Mode"})})]}),(0,o.jsx)(t.Divider,{my:"2x"})]}),(0,o.jsx)(components_ColorStyleBody,{colorType:"background"})]})})]}),"\n",(0,o.jsxs)(r.h3,{id:"color",children:["Color",(0,o.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#color",children:(0,o.jsx)(r.svg,{children:(0,o.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.DarkMode,{children:(0,o.jsxs)(components_ColorStyleContent,{children:[(0,o.jsxs)(components_ColorStyleHeader,{children:[(0,o.jsxs)(t.Flex,{alignItems:"center",children:[(0,o.jsx)(t.Icon,{icon:"moon",size:"6x",color:"yellow:50"}),(0,o.jsx)(t.Space,{width:"2x"}),(0,o.jsx)(t.Text,{fontSize:"lg",lineHeight:"lg",children:(0,o.jsx)(r.p,{children:"Dark Mode"})})]}),(0,o.jsx)(t.Divider,{my:"2x"})]}),(0,o.jsx)(components_ColorStyleBody,{colorType:"color"})]})}),(0,o.jsx)(t.LightMode,{children:(0,o.jsxs)(components_ColorStyleContent,{children:[(0,o.jsxs)(components_ColorStyleHeader,{children:[(0,o.jsxs)(t.Flex,{alignItems:"center",children:[(0,o.jsx)(t.Icon,{icon:"sun",size:"6x",color:"yellow:50"}),(0,o.jsx)(t.Space,{width:"2x"}),(0,o.jsx)(t.Text,{fontSize:"lg",lineHeight:"lg",children:(0,o.jsx)(r.p,{children:"Light Mode"})})]}),(0,o.jsx)(t.Divider,{my:"2x"})]}),(0,o.jsx)(components_ColorStyleBody,{colorType:"color"})]})})]}),"\n",(0,o.jsxs)(r.h3,{id:"text",children:["Text",(0,o.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#text",children:(0,o.jsx)(r.svg,{children:(0,o.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.DarkMode,{children:(0,o.jsxs)(components_ColorStyleContent,{children:[(0,o.jsxs)(components_ColorStyleHeader,{children:[(0,o.jsxs)(t.Flex,{alignItems:"center",children:[(0,o.jsx)(t.Icon,{icon:"moon",size:"6x",color:"yellow:50"}),(0,o.jsx)(t.Space,{width:"2x"}),(0,o.jsx)(t.Text,{fontSize:"lg",lineHeight:"lg",children:(0,o.jsx)(r.p,{children:"Dark Mode"})})]}),(0,o.jsx)(t.Divider,{my:"2x"})]}),(0,o.jsx)(components_ColorStyleBody,{colorType:"text"})]})}),(0,o.jsx)(t.LightMode,{children:(0,o.jsxs)(components_ColorStyleContent,{children:[(0,o.jsxs)(components_ColorStyleHeader,{children:[(0,o.jsxs)(t.Flex,{alignItems:"center",children:[(0,o.jsx)(t.Icon,{icon:"sun",size:"6x",color:"yellow:50"}),(0,o.jsx)(t.Space,{width:"2x"}),(0,o.jsx)(t.Text,{fontSize:"lg",lineHeight:"lg",children:(0,o.jsx)(r.p,{children:"Light Mode"})})]}),(0,o.jsx)(t.Divider,{my:"2x"})]}),(0,o.jsx)(components_ColorStyleBody,{colorType:"text"})]})})]}),"\n",(0,o.jsxs)(r.h3,{id:"shadow",children:["Shadow",(0,o.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#shadow",children:(0,o.jsx)(r.svg,{children:(0,o.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.DarkMode,{children:(0,o.jsxs)(components_ColorStyleContent,{children:[(0,o.jsxs)(components_ColorStyleHeader,{children:[(0,o.jsxs)(t.Flex,{alignItems:"center",children:[(0,o.jsx)(t.Icon,{icon:"moon",size:"6x",color:"yellow:50"}),(0,o.jsx)(t.Space,{width:"2x"}),(0,o.jsx)(t.Text,{fontSize:"lg",lineHeight:"lg",children:(0,o.jsx)(r.p,{children:"Dark Mode"})})]}),(0,o.jsx)(t.Divider,{my:"2x"})]}),(0,o.jsx)(components_ColorStyleBody,{colorType:"shadow",templateColumns:"repeat(auto-fill, minmax(240px, 1fr))"})]})}),(0,o.jsx)(t.LightMode,{children:(0,o.jsxs)(components_ColorStyleContent,{children:[(0,o.jsxs)(components_ColorStyleHeader,{children:[(0,o.jsxs)(t.Flex,{alignItems:"center",children:[(0,o.jsx)(t.Icon,{icon:"sun",size:"6x",color:"yellow:50"}),(0,o.jsx)(t.Space,{width:"2x"}),(0,o.jsx)(t.Text,{fontSize:"lg",lineHeight:"lg",children:(0,o.jsx)(r.p,{children:"Light Mode"})})]}),(0,o.jsx)(t.Divider,{my:"2x"})]}),(0,o.jsx)(components_ColorStyleBody,{colorType:"shadow",templateColumns:"repeat(auto-fill, minmax(240px, 1fr))"})]})})]}),"\n",(0,o.jsxs)(r.h3,{id:"severity",children:["Severity",(0,o.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#severity",children:(0,o.jsx)(r.svg,{children:(0,o.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.DarkMode,{children:(0,o.jsxs)(components_ColorStyleContent,{children:[(0,o.jsxs)(components_ColorStyleHeader,{children:[(0,o.jsxs)(t.Flex,{alignItems:"center",children:[(0,o.jsx)(t.Icon,{icon:"moon",size:"6x",color:"yellow:50"}),(0,o.jsx)(t.Space,{width:"2x"}),(0,o.jsx)(t.Text,{fontSize:"lg",lineHeight:"lg",children:(0,o.jsx)(r.p,{children:"Dark Mode"})})]}),(0,o.jsx)(t.Divider,{my:"2x"})]}),(0,o.jsx)(components_ColorStyleBody,{colorType:"severity"})]})}),(0,o.jsx)(t.LightMode,{children:(0,o.jsxs)(components_ColorStyleContent,{children:[(0,o.jsxs)(components_ColorStyleHeader,{children:[(0,o.jsxs)(t.Flex,{alignItems:"center",children:[(0,o.jsx)(t.Icon,{icon:"sun",size:"6x",color:"yellow:50"}),(0,o.jsx)(t.Space,{width:"2x"}),(0,o.jsx)(t.Text,{fontSize:"lg",lineHeight:"lg",children:(0,o.jsx)(r.p,{children:"Light Mode"})})]}),(0,o.jsx)(t.Divider,{my:"2x"})]}),(0,o.jsx)(components_ColorStyleBody,{colorType:"severity"})]})})]}),"\n",(0,o.jsxs)(r.h3,{id:"chart",children:["Chart",(0,o.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#chart",children:(0,o.jsx)(r.svg,{children:(0,o.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.DarkMode,{children:(0,o.jsxs)(components_ColorStyleContent,{children:[(0,o.jsxs)(components_ColorStyleHeader,{children:[(0,o.jsxs)(t.Flex,{alignItems:"center",children:[(0,o.jsx)(t.Icon,{icon:"moon",size:"6x",color:"yellow:50"}),(0,o.jsx)(t.Space,{width:"2x"}),(0,o.jsx)(t.Text,{fontSize:"lg",lineHeight:"lg",children:(0,o.jsx)(r.p,{children:"Dark Mode"})})]}),(0,o.jsx)(t.Divider,{my:"2x"})]}),(0,o.jsx)(components_ColorStyleBody,{colorType:"chart.classic.colors"})]})}),(0,o.jsx)(t.LightMode,{children:(0,o.jsxs)(components_ColorStyleContent,{children:[(0,o.jsxs)(components_ColorStyleHeader,{children:[(0,o.jsxs)(t.Flex,{alignItems:"center",children:[(0,o.jsx)(t.Icon,{icon:"sun",size:"6x",color:"yellow:50"}),(0,o.jsx)(t.Space,{width:"2x"}),(0,o.jsx)(t.Text,{fontSize:"lg",lineHeight:"lg",children:(0,o.jsx)(r.p,{children:"Light Mode"})})]}),(0,o.jsx)(t.Divider,{my:"2x"})]}),(0,o.jsx)(components_ColorStyleBody,{colorType:"chart.classic.colors"})]})})]}),"\n",(0,o.jsxs)(r.h2,{id:"gradient-color-values",children:["Gradient Color Values",(0,o.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#gradient-color-values",children:(0,o.jsx)(r.svg,{children:(0,o.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(r.p,{children:["Gradient color values are not defined in the color style system, you can set ",(0,o.jsx)(r.code,{children:"gradient"})," with below values when necessary."]}),"\n",(0,o.jsx)(i.Z,{children:(0,p.Z)({gradient:{severity:{high:["purple:60","red:50"],medium:["red:50","orange:50"],low:["orange:50","yellow:50"],safe:["teal:50","green:40"]},others:{1:["purple:50","magenta:40"],2:["purple:60","blue:50"],3:["blue:50","teal:40"],4:["cyan:40","teal:30"],5:["blue:60","teal:40"],6:["green:40","cyan:30"],7:["magenta:60","red:40"],8:["magenta:50","blue:60"]}}})}),"\n",(0,o.jsxs)(components_ColorStyleContent,{display:"flex",flexDirection:"column",rowGap:"8x",children:[(0,o.jsxs)(t.Box,{children:[(0,o.jsxs)(components_ColorStyleHeader,{children:[(0,o.jsx)(t.Text,{fontSize:"lg",lineHeight:"lg",children:(0,o.jsx)(r.p,{children:"Gradient - Severity"})}),(0,o.jsx)(t.Divider,{my:"2x"})]}),(0,o.jsx)(components_ColorStyleBody,{colorStyle:{gradient:{high:["purple:60","red:50"],medium:["red:50","orange:50"],low:["orange:50","yellow:50"],safe:["teal:50","green:40"]}},colorType:"gradient",templateColumns:"repeat(auto-fill, minmax(240px, 1fr))"})]}),(0,o.jsxs)(t.Box,{children:[(0,o.jsxs)(components_ColorStyleHeader,{children:[(0,o.jsx)(t.Text,{fontSize:"lg",lineHeight:"lg",children:(0,o.jsx)(r.p,{children:"Gradient - Others"})}),(0,o.jsx)(t.Divider,{my:"2x"})]}),(0,o.jsx)(components_ColorStyleBody,{colorStyle:{gradient:{1:["purple:50","magenta:40"],2:["purple:60","blue:50"],3:["blue:50","teal:40"],4:["cyan:40","teal:30"],5:["blue:60","teal:40"],6:["green:40","cyan:30"],7:["magenta:60","red:40"],8:["magenta:50","blue:60"]}},colorType:"gradient",templateColumns:"repeat(auto-fill, minmax(240px, 1fr))"})]})]}),"\n",(0,o.jsxs)(r.h2,{id:"blindness-color-values",children:["Blindness Color Values",(0,o.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#blindness-color-values",children:(0,o.jsx)(r.svg,{children:(0,o.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(r.p,{children:["Blindness color values are not defined in the color style system, you can set ",(0,o.jsx)(r.code,{children:"blindness"})," with below values when necessary."]}),"\n",(0,o.jsx)(i.Z,{children:(0,p.Z)({blindness:{severity:{high:"magenta:60",medium:"orange:50",low:"yellow:50",safe:"green:30",info:"gray:50",unknown:"gray:50"},chart:{classic:{colors:["gray:50","blue:30","green:30","orange:50","cyan:30","magenta:60","purple:50","teal:40","purple:30","cyan:70","yellow:50"]}},gradient:{severity:{high:["purple:60","magenta:60"],medium:["magenta:60","orange:50"],low:["orange:50","yellow:50"],safe:["teal:50","green:30"]}}}})}),"\n",(0,o.jsxs)(components_ColorStyleContent,{display:"flex",flexDirection:"column",rowGap:"8x",children:[(0,o.jsxs)(t.Box,{children:[(0,o.jsxs)(components_ColorStyleHeader,{children:[(0,o.jsx)(t.Text,{fontSize:"lg",lineHeight:"lg",children:(0,o.jsx)(r.p,{children:"Blindness - Severity"})}),(0,o.jsx)(t.Divider,{my:"2x"})]}),(0,o.jsx)(components_ColorStyleBody,{colorStyle:{severity:{high:"magenta:60",medium:"orange:50",low:"yellow:50",safe:"green:30",info:"gray:50",unknown:"gray:50"}},colorType:"severity"})]}),(0,o.jsxs)(t.Box,{children:[(0,o.jsxs)(components_ColorStyleHeader,{children:[(0,o.jsx)(t.Text,{fontSize:"lg",lineHeight:"lg",children:(0,o.jsx)(r.p,{children:"Blindness - Chart"})}),(0,o.jsx)(t.Divider,{my:"2x"})]}),(0,o.jsx)(components_ColorStyleBody,{colorStyle:{chart:{classic:{colors:["gray:50","blue:30","green:30","orange:50","cyan:30","magenta:60","purple:50","teal:40","purple:30","cyan:70","yellow:50"]}}},colorType:"chart.classic.colors"})]}),(0,o.jsxs)(t.Box,{children:[(0,o.jsxs)(components_ColorStyleHeader,{children:[(0,o.jsx)(t.Text,{fontSize:"lg",lineHeight:"lg",children:(0,o.jsx)(r.p,{children:"Blindness - Gradient"})}),(0,o.jsx)(t.Divider,{my:"2x"})]}),(0,o.jsx)(components_ColorStyleBody,{colorStyle:{gradient:{high:["purple:60","magenta:60"],medium:["magenta:60","orange:50"],low:["orange:50","yellow:50"],safe:["teal:50","green:30"]}},colorType:"gradient",templateColumns:"repeat(auto-fill, minmax(240px, 1fr))"})]})]})]})}var index_page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,l.ah)(),e.components).wrapper;return r?(0,o.jsx)(r,Object.assign({},e,{children:(0,o.jsx)(_createMdxContent,e)})):_createMdxContent(e)}},53733:function(e,r){"use strict";r.Z=function(e){return JSON.stringify(e,null,2).replace(/"/g,"'").replace(/'(\d+|[a-z]+)':/g,"$1:")}},35400:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/color-style",function(){return n(83668)}])}},function(e){e.O(0,[1630,9774,2888,179],function(){return e(e.s=35400)}),_N_E=e.O()}]);