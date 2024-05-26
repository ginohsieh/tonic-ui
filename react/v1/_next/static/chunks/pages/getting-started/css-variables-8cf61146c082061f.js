(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9682],{94661:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var r=t(52322),o=t(45392),a=t(16959),l=t(67569),i=t(2784);function c(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a,l,i=[],c=!0,s=!1;try{if(a=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=a.call(t)).done)&&(i.push(r.value),i.length!==n);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(s)throw o}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return s(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return s(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var u=function(){var e=(0,l.useTheme)(),n=c((0,l.useColorMode)(),1)[0],t=e.__cssVariableMap,r={dark:"gray:60",light:"gray:30"}[n],o={dark:"red:50",light:"red:60"}[n];return i.createElement(l.Box,{fontFamily:"mono"},Object.entries(t).map(function(e){var n=c(e,2),t=n[0],a=n[1];return i.createElement(l.Flex,{key:t,columnGap:"2x"},i.createElement(l.Text,{color:o},t,":"),i.createElement(l.Flex,{alignItems:"center",columnGap:"1x"},(String(a).startsWith("#")||String(a).startsWith("rgb(")||String(a).startsWith("rgba("))&&i.createElement(l.Box,{backgroundColor:a,border:1,borderColor:r,width:"3x",height:"3x"}),i.createElement(l.Text,null,a,";")))}))};function d(e){var n=Object.assign({div:"div",h1:"h1",h2:"h2",a:"a",svg:"svg",use:"use",p:"p",pre:"pre",code:"code",strong:"strong"},(0,o.ah)(),e.components);return(0,r.jsxs)(n.div,{className:"main-content",id:"main-content",children:["\n","\n",(0,r.jsx)(n.h1,{id:"css-variables",children:"CSS Variables"}),"\n",(0,r.jsxs)(n.h2,{id:"overview",children:["Overview",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#overview",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(n.p,{children:"Tonic UI has a default behavior of internally converting theme tokens defined in the theme to CSS variables."}),"\n",(0,r.jsx)(n.p,{children:"For example, consider a theme object that looks like this:"}),"\n",(0,r.jsx)(n.pre,{disabled:!0,children:(0,r.jsx)(n.code,{className:"language-js",children:"const theme = {\n  colors: {\n    'gray:10': '#fafafa',\n    'gray:20': '#f7f7f7',\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When this theme is passed to ",(0,r.jsx)(n.code,{children:"TonicProvider"}),", Tonic UI will generate CSS variables automatically, as shown below:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-css",children:":root {\n  --tonic-colors-gray-10: #fafafa;\n  --tonic-colors-gray-20: #f7f7f7;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"These CSS variables can then be used to style components, providing a consistent look and feel throughout the application."}),"\n",(0,r.jsxs)(n.h2,{id:"default-css-variables",children:["Default CSS Variables",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#default-css-variables",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["If you want to see all the CSS variables being used on the webpage, you can open the ",(0,r.jsx)(n.strong,{children:"Developer Tools"})," and go to the ",(0,r.jsx)(n.strong,{children:"Elements"})," tab. There, you will be able to view all the default CSS variables."]}),"\n",(0,r.jsx)(a.Z,{component:u,file:{data:"import { Box, Flex, Text, useColorMode, useTheme } from '@tonic-ui/react';\nimport React from 'react';\n\nconst isColorCode = value => String(value).startsWith('#') || String(value).startsWith('rgb(') || String(value).startsWith('rgba(');\n\nconst App = () => {\n  const theme = useTheme();\n  const [colorMode] = useColorMode();\n  const cssVariableMap = theme.__cssVariableMap;\n  const borderColor = {         \n    dark: 'gray:60',\n    light: 'gray:30',                                  \n  }[colorMode]; \n  const tokenColor = {\n    dark: 'red:50',\n    light: 'red:60',\n  }[colorMode];\n\n  return (\n    <Box fontFamily=\"mono\">\n      {Object.entries(cssVariableMap).map(([name, value]) => {\n        return (\n          <Flex key={name} columnGap=\"2x\">\n            <Text color={tokenColor}>{name}:</Text>\n            <Flex alignItems=\"center\" columnGap=\"1x\">\n              {isColorCode(value) && (\n                <Box backgroundColor={value} border={1} borderColor={borderColor} width=\"3x\" height=\"3x\" />\n              )}\n              <Text>{value};</Text>\n            </Flex>\n          </Flex>\n        );\n      })}\n    </Box>\n  );\n};\n\nexport default App;",path:"pages/getting-started/css-variables/index.page.mdx"},sandbox:{files:{},raw:"import { Box, Flex, Text, useColorMode, useTheme } from '@tonic-ui/react';\nimport React from 'react';\n\nconst isColorCode = value => String(value).startsWith('#') || String(value).startsWith('rgb(') || String(value).startsWith('rgba(');\n\nconst App = () => {\n  const theme = useTheme();\n  const [colorMode] = useColorMode();\n  const cssVariableMap = theme.__cssVariableMap;\n  const borderColor = {         \n    dark: 'gray:60',\n    light: 'gray:30',                                  \n  }[colorMode]; \n  const tokenColor = {\n    dark: 'red:50',\n    light: 'red:60',\n  }[colorMode];\n\n  return (\n    <Box fontFamily=\"mono\">\n      {Object.entries(cssVariableMap).map(([name, value]) => {\n        return (\n          <Flex key={name} columnGap=\"2x\">\n            <Text color={tokenColor}>{name}:</Text>\n            <Flex alignItems=\"center\" columnGap=\"1x\">\n              {isColorCode(value) && (\n                <Box backgroundColor={value} border={1} borderColor={borderColor} width=\"3x\" height=\"3x\" />\n              )}\n              <Text>{value};</Text>\n            </Flex>\n          </Flex>\n        );\n      })}\n    </Box>\n  );\n};\n\nexport default App;",title:"Tonic UI"}})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.ah)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},16959:function(e,n,t){"use strict";t.d(n,{Z:function(){return y}});var r=t(67569),o=t(49427),a=t(5632),l=t(2784),i=t(65245),c=t(16245),s=t(76761),u=t(73205),d=t(98107),h=["size"];function m(){return(m=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var f=(0,l.forwardRef)(function(e,n){var t=e.size,o=function(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,h);return l.createElement(r.SVGIcon,m({size:t,viewBox:"0 0 1024 1024"},o),l.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"}))});f.displayName="CodeSandboxIcon";var p=t(44285);function b(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a,l,i=[],c=!0,s=!1;try{if(a=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=a.call(t)).done)&&(i.push(r.value),i.length!==n);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(s)throw o}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return x(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return x(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var g={fontFamily:'"SFMono-Medium", "SF Mono", "Segoe UI Mono", Menlo, Consolas, Courier, monospace',fontSize:14,overflowX:"auto"},v=function(e){var n=e.component,t=e.file,h=e.sandbox,m=(0,a.useRouter)(),x=b((0,l.useReducer)(function(e){return!e},!1),2),v=x[0],y=x[1],C=b((0,r.useColorMode)(),1)[0],j={dark:s.y,light:s.q}[C],k=b((0,o.useToggle)(!1),2),S=k[0],E=k[1],w=(0,c.Z)(null==t?void 0:t.data),T=w.onCopy,O=w.hasCopied,M=(0,l.useCallback)(function(){T()},[T]),_=(0,l.useCallback)(function(){(0,u.b)(h)},[h]),F=(0,l.useCallback)(function(){y(),E(!1)},[y,E]);return l.createElement(i.nu,{code:null==t?void 0:t.data,disabled:!0,language:"jsx",theme:j},l.createElement(r.Box,{border:1,borderColor:{dark:"gray:70",light:"gray:30"}[C],p:"4x"},l.createElement(r.Box,{fontSize:"sm",lineHeight:"sm"},l.createElement(l.Fragment,{key:v},l.createElement(n,null)))),l.createElement(r.Flex,{columnGap:"2x",justifyContent:"flex-end",mb:"4x"},l.createElement(p.Z,{"data-track":S?"CodeBlock|hide_source|".concat((0,d.Z)({path:m.pathname})):"CodeBlock|show_source|".concat((0,d.Z)({path:m.pathname})),onClick:E},l.createElement(r.Tooltip,{label:S?"Hide the source":"Show the source"},l.createElement(r.Icon,{icon:"code",size:{sm:"5x",md:"4x"}}))),l.createElement(p.Z,{"data-track":"CodeBlock|copy_source|".concat((0,d.Z)({path:m.pathname})),onClick:M},l.createElement(r.Tooltip,{label:O?"Copied":"Copy the source"},l.createElement(r.Icon,{icon:"file-copy-o",size:{sm:"5x",md:"4x"}}))),l.createElement(p.Z,{"data-track":"CodeBlock|edit_in_codesandbox|".concat(m.pathname),onClick:_},l.createElement(r.Tooltip,{label:"Edit in CodeSandbox"},l.createElement(f,{size:{sm:"5x",md:"4x"}}))),l.createElement(p.Z,{"data-track":"CodeBlock|reset|".concat(m.pathname),onClick:F},l.createElement(r.Tooltip,{label:"Reset the demo"},l.createElement(r.Icon,{icon:"redo",size:{sm:"5x",md:"4x"}})))),l.createElement(r.Fade,{in:S},l.createElement(r.Collapse,{in:S,unmountOnExit:!0},l.createElement(i.uz,{style:g}))))};v.displayName="Demo";var y=v},75257:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/getting-started/css-variables",function(){return t(94661)}])}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=75257)}),_N_E=e.O()}]);