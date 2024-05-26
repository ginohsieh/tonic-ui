(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8867],{28851:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var r=t(52322),o=t(45392),a=t(16959),c=t(67569),l=t(49427),i=t(2784);function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var u=function(){var e,n=function(e){if(Array.isArray(e))return e}(e=(0,i.useState)(0))||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a,c,l=[],i=!0,s=!1;try{for(a=(t=t.call(e)).next;!(i=(r=a.call(t)).done)&&(l.push(r.value),2!==l.length);i=!0);}catch(e){s=!0,o=e}finally{try{if(!i&&null!=t.return&&(c=t.return(),Object(c)!==c))return}finally{if(s)throw o}}return l}}(e,2)||function(e,n){if(e){if("string"==typeof e)return s(e,2);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return s(e,2)}}(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),t=n[0],r=n[1];return(0,i.useEffect)(function(){console.log("useEffect is triggered when value changes",{value:t})},[t]),(0,l.useEffectOnce)(function(){console.log("useEffectOnce is triggered only once",{value:t})}),i.createElement(i.Fragment,null,i.createElement(c.Box,{mb:"2x"},t),i.createElement(c.Button,{onClick:function(){return r(function(e){return e+1})}},"Click Me"))};function f(e){var n=Object.assign({div:"div",h1:"h1",p:"p",code:"code",h2:"h2",a:"a",svg:"svg",use:"use",pre:"pre",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,r.jsxs)(n.div,{className:"main-content",id:"main-content",children:["\n","\n",(0,r.jsx)(n.h1,{id:"useeffectonce",children:"useEffectOnce"}),"\n",(0,r.jsxs)(n.p,{children:["A modified version of the ",(0,r.jsx)(n.code,{children:"useEffect"})," Hook that runs an effect only once."]}),"\n",(0,r.jsxs)(n.h2,{id:"import",children:["Import",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { useEffectOnce } from '@tonic-ui/react-hooks';\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"usage",children:["Usage",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usage",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"useEffectOnce(effect);\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"parameters",children:["Parameters",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#parameters",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{align:"left",children:"Name"}),(0,r.jsx)(n.th,{align:"left",children:"Type"}),(0,r.jsx)(n.th,{align:"left",children:"Default"}),(0,r.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:"effect"}),(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.code,{children:"() => void"})}),(0,r.jsx)(n.td,{align:"left"}),(0,r.jsx)(n.td,{align:"left",children:"The effect to run."})]})})]}),"\n",(0,r.jsxs)(n.h2,{id:"demos",children:["Demos",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#demos",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(a.Z,{component:u,file:{data:"import { Box, Button } from '@tonic-ui/react';\nimport { useEffectOnce } from '@tonic-ui/react-hooks';\nimport React, { useEffect, useState } from 'react';\n\nconst App = () => {\n  const [value, setValue] = useState(0);\n\n  useEffect(() => {\n    console.log('useEffect is triggered when value changes', { value });\n  }, [value]);\n\n  useEffectOnce(() => {\n    console.log('useEffectOnce is triggered only once', { value });\n  });\n\n  return (\n    <>\n      <Box mb=\"2x\">\n        {value}\n      </Box>\n      <Button onClick={() => setValue(value => value + 1)}>\n        Click Me\n      </Button>\n    </>\n  );\n};\n\nexport default App;",path:"pages/hooks/useEffectOnce.page.mdx"},sandbox:{files:{},raw:"import { Box, Button } from '@tonic-ui/react';\nimport { useEffectOnce } from '@tonic-ui/react-hooks';\nimport React, { useEffect, useState } from 'react';\n\nconst App = () => {\n  const [value, setValue] = useState(0);\n\n  useEffect(() => {\n    console.log('useEffect is triggered when value changes', { value });\n  }, [value]);\n\n  useEffectOnce(() => {\n    console.log('useEffectOnce is triggered only once', { value });\n  });\n\n  return (\n    <>\n      <Box mb=\"2x\">\n        {value}\n      </Box>\n      <Button onClick={() => setValue(value => value + 1)}>\n        Click Me\n      </Button>\n    </>\n  );\n};\n\nexport default App;",title:"Tonic UI"}})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.ah)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(f,e)})):f(e)}},16959:function(e,n,t){"use strict";t.d(n,{Z:function(){return y}});var r=t(67569),o=t(49427),a=t(5632),c=t(2784),l=t(65245),i=t(16245),s=t(76761),u=t(73205),f=t(98107),d=["size"];function h(){return(h=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var m=(0,c.forwardRef)(function(e,n){var t=e.size,o=function(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,d);return c.createElement(r.SVGIcon,h({size:t,viewBox:"0 0 1024 1024"},o),c.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"}))});m.displayName="CodeSandboxIcon";var p=t(44285);function x(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a,c,l=[],i=!0,s=!1;try{if(a=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;i=!1}else for(;!(i=(r=a.call(t)).done)&&(l.push(r.value),l.length!==n);i=!0);}catch(e){s=!0,o=e}finally{try{if(!i&&null!=t.return&&(c=t.return(),Object(c)!==c))return}finally{if(s)throw o}}return l}}(e,n)||function(e,n){if(e){if("string"==typeof e)return g(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var v={fontFamily:'"SFMono-Medium", "SF Mono", "Segoe UI Mono", Menlo, Consolas, Courier, monospace',fontSize:14,overflowX:"auto"},b=function(e){var n=e.component,t=e.file,d=e.sandbox,h=(0,a.useRouter)(),g=x((0,c.useReducer)(function(e){return!e},!1),2),b=g[0],y=g[1],j=x((0,r.useColorMode)(),1)[0],E={dark:s.y,light:s.q}[j],k=x((0,o.useToggle)(!1),2),O=k[0],C=k[1],S=(0,i.Z)(null==t?void 0:t.data),w=S.onCopy,B=S.hasCopied,I=(0,c.useCallback)(function(){w()},[w]),A=(0,c.useCallback)(function(){(0,u.b)(d)},[d]),_=(0,c.useCallback)(function(){y(),C(!1)},[y,C]);return c.createElement(l.nu,{code:null==t?void 0:t.data,disabled:!0,language:"jsx",theme:E},c.createElement(r.Box,{border:1,borderColor:{dark:"gray:70",light:"gray:30"}[j],p:"4x"},c.createElement(r.Box,{fontSize:"sm",lineHeight:"sm"},c.createElement(c.Fragment,{key:b},c.createElement(n,null)))),c.createElement(r.Flex,{columnGap:"2x",justifyContent:"flex-end",mb:"4x"},c.createElement(p.Z,{"data-track":O?"CodeBlock|hide_source|".concat((0,f.Z)({path:h.pathname})):"CodeBlock|show_source|".concat((0,f.Z)({path:h.pathname})),onClick:C},c.createElement(r.Tooltip,{label:O?"Hide the source":"Show the source"},c.createElement(r.Icon,{icon:"code",size:{sm:"5x",md:"4x"}}))),c.createElement(p.Z,{"data-track":"CodeBlock|copy_source|".concat((0,f.Z)({path:h.pathname})),onClick:I},c.createElement(r.Tooltip,{label:B?"Copied":"Copy the source"},c.createElement(r.Icon,{icon:"file-copy-o",size:{sm:"5x",md:"4x"}}))),c.createElement(p.Z,{"data-track":"CodeBlock|edit_in_codesandbox|".concat(h.pathname),onClick:A},c.createElement(r.Tooltip,{label:"Edit in CodeSandbox"},c.createElement(m,{size:{sm:"5x",md:"4x"}}))),c.createElement(p.Z,{"data-track":"CodeBlock|reset|".concat(h.pathname),onClick:_},c.createElement(r.Tooltip,{label:"Reset the demo"},c.createElement(r.Icon,{icon:"redo",size:{sm:"5x",md:"4x"}})))),c.createElement(r.Fade,{in:O},c.createElement(r.Collapse,{in:O,unmountOnExit:!0},c.createElement(l.uz,{style:v}))))};b.displayName="Demo";var y=b},87885:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/useEffectOnce",function(){return t(28851)}])}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=87885)}),_N_E=e.O()}]);