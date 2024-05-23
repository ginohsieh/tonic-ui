(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9478],{31358:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(52322),i=n(45392),o=n(16959),a=n(67569),l=n(2784);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var s=function(){var e,t=function(e){if(Array.isArray(e))return e}(e=(0,l.useState)(180))||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,l=[],c=!0,s=!1;try{for(o=(n=n.call(e)).next;!(c=(r=o.call(n)).done)&&(l.push(r.value),2!==l.length);c=!0);}catch(e){s=!0,i=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw i}}return l}}(e,2)||function(e,t){if(e){if("string"==typeof e)return c(e,2);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,2)}}(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n=t[0],r=t[1];return(0,l.useEffect)(function(){var e=setTimeout(function(){n>0&&r(n-1)},1e3);return function(){clearTimeout(e)}},[n]),l.createElement(a.Text,null,"If the email does not arrive in your inbox or spam folder, ",l.createElement(a.LinkButton,{onClick:function(){r(180)}},"click here to resend (",n,"s)"),".")};function u(e){var t=Object.assign({div:"div",h1:"h1",p:"p",h2:"h2",a:"a",svg:"svg",use:"use",pre:"pre",code:"code",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,r.jsxs)(t.div,{className:"main-content",id:"main-content",children:["\n","\n",(0,r.jsx)(t.h1,{id:"linkbutton",children:"LinkButton"}),"\n",(0,r.jsx)(t.p,{children:"This component provides an element resembling an anchor that purely acts as a click target with no navigation as result. It can also be used inline in text."}),"\n",(0,r.jsxs)(t.h2,{id:"import",children:["Import",(0,r.jsx)(t.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,r.jsx)(t.svg,{children:(0,r.jsx)(t.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import { LinkButton } from '@tonic-ui/react';\n"})}),"\n",(0,r.jsxs)(t.h2,{id:"usage",children:["Usage",(0,r.jsx)(t.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usage",children:(0,r.jsx)(t.svg,{children:(0,r.jsx)(t.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(o.Z,{component:s,file:{data:"import { LinkButton, Text } from '@tonic-ui/react';\nimport React, { useEffect, useState } from 'react';\n\nconst App = () => {\n  const [timeLeft, setTimeLeft] = useState(180);\n  useEffect(() => {\n    const timer = setTimeout(() => {\n      if (timeLeft > 0) {\n        setTimeLeft(timeLeft - 1);\n      }\n    }, 1000);\n\n    return () => {\n      clearTimeout(timer);\n    };\n  }, [timeLeft]);\n  const handleClick = () => {\n    setTimeLeft(180);\n  };\n\n  return (\n    <Text>\n      If the email does not arrive in your inbox or spam folder, <LinkButton onClick={handleClick}>click here to resend ({timeLeft}s)</LinkButton>.\n    </Text>\n  );\n};\n\nexport default App;",path:"pages/components/link-button/index.page.mdx"},sandbox:{files:{},raw:"import { LinkButton, Text } from '@tonic-ui/react';\nimport React, { useEffect, useState } from 'react';\n\nconst App = () => {\n  const [timeLeft, setTimeLeft] = useState(180);\n  useEffect(() => {\n    const timer = setTimeout(() => {\n      if (timeLeft > 0) {\n        setTimeLeft(timeLeft - 1);\n      }\n    }, 1000);\n\n    return () => {\n      clearTimeout(timer);\n    };\n  }, [timeLeft]);\n  const handleClick = () => {\n    setTimeLeft(180);\n  };\n\n  return (\n    <Text>\n      If the email does not arrive in your inbox or spam folder, <LinkButton onClick={handleClick}>click here to resend ({timeLeft}s)</LinkButton>.\n    </Text>\n  );\n};\n\nexport default App;",title:"Tonic UI"}}),"\n",(0,r.jsxs)(t.h2,{id:"props",children:["Props",(0,r.jsx)(t.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#props",children:(0,r.jsx)(t.svg,{children:(0,r.jsx)(t.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(t.h3,{id:"linkbutton-1",children:["LinkButton",(0,r.jsx)(t.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#linkbutton-1",children:(0,r.jsx)(t.svg,{children:(0,r.jsx)(t.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{align:"left",children:"Name"}),(0,r.jsx)(t.th,{align:"left",children:"Type"}),(0,r.jsx)(t.th,{align:"left",children:"Default"}),(0,r.jsx)(t.th,{align:"left",children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{align:"left",children:"children"}),(0,r.jsx)(t.td,{align:"left",children:"ReactNode"}),(0,r.jsx)(t.td,{align:"left"}),(0,r.jsx)(t.td,{align:"left"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{align:"left",children:"disabled"}),(0,r.jsx)(t.td,{align:"left",children:"boolean"}),(0,r.jsx)(t.td,{align:"left"}),(0,r.jsxs)(t.td,{align:"left",children:["If ",(0,r.jsx)(t.code,{children:"true"}),", the link button will be disabled. This sets ",(0,r.jsx)(t.code,{children:"aria-disabled=true"})," and you can style this state by using the ",(0,r.jsx)(t.code,{children:"_disabled"})," prop."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{align:"left",children:"onClick"}),(0,r.jsx)(t.td,{align:"left",children:"function"}),(0,r.jsx)(t.td,{align:"left"}),(0,r.jsx)(t.td,{align:"left",children:"A callback called when the link button is clicked."})]})]})]})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},(0,i.ah)(),e.components).wrapper;return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}},16959:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(67569),i=n(49427),o=n(5632),a=n(2784),l=n(65245),c=n(16245),s=n(76761),u=n(73205),d=n(98107),f=["size"];function h(){return(h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m=(0,a.forwardRef)(function(e,t){var n=e.size,i=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,f);return a.createElement(r.SVGIcon,h({size:n,viewBox:"0 0 1024 1024"},i),a.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"}))});m.displayName="CodeSandboxIcon";var p=n(44285);function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,l=[],c=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(e){s=!0,i=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw i}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var j={fontFamily:'"SFMono-Medium", "SF Mono", "Segoe UI Mono", Menlo, Consolas, Courier, monospace',fontSize:14,overflowX:"auto"},y=function(e){var t=e.component,n=e.file,f=e.sandbox,h=(0,o.useRouter)(),b=x((0,a.useReducer)(function(e){return!e},!1),2),y=b[0],g=b[1],k=x((0,r.useColorMode)(),1)[0],v={dark:s.y,light:s.q}[k],E=x((0,i.useToggle)(!1),2),C=E[0],L=E[1],T=(0,c.Z)(null==n?void 0:n.data),S=T.onCopy,O=T.hasCopied,I=(0,a.useCallback)(function(){S()},[S]),w=(0,a.useCallback)(function(){(0,u.b)(f)},[f]),B=(0,a.useCallback)(function(){g(),L(!1)},[g,L]);return a.createElement(l.nu,{code:null==n?void 0:n.data,disabled:!0,language:"jsx",theme:v},a.createElement(r.Box,{border:1,borderColor:{dark:"gray:70",light:"gray:30"}[k],p:"4x"},a.createElement(r.Box,{fontSize:"sm",lineHeight:"sm"},a.createElement(a.Fragment,{key:y},a.createElement(t,null)))),a.createElement(r.Flex,{columnGap:"2x",justifyContent:"flex-end",mb:"4x"},a.createElement(p.Z,{"data-track":C?"CodeBlock|hide_source|".concat((0,d.Z)({path:h.pathname})):"CodeBlock|show_source|".concat((0,d.Z)({path:h.pathname})),onClick:L},a.createElement(r.Tooltip,{label:C?"Hide the source":"Show the source"},a.createElement(r.Icon,{icon:"code",size:{sm:"5x",md:"4x"}}))),a.createElement(p.Z,{"data-track":"CodeBlock|copy_source|".concat((0,d.Z)({path:h.pathname})),onClick:I},a.createElement(r.Tooltip,{label:O?"Copied":"Copy the source"},a.createElement(r.Icon,{icon:"file-copy-o",size:{sm:"5x",md:"4x"}}))),a.createElement(p.Z,{"data-track":"CodeBlock|edit_in_codesandbox|".concat(h.pathname),onClick:w},a.createElement(r.Tooltip,{label:"Edit in CodeSandbox"},a.createElement(m,{size:{sm:"5x",md:"4x"}}))),a.createElement(p.Z,{"data-track":"CodeBlock|reset|".concat(h.pathname),onClick:B},a.createElement(r.Tooltip,{label:"Reset the demo"},a.createElement(r.Icon,{icon:"redo",size:{sm:"5x",md:"4x"}})))),a.createElement(r.Fade,{in:C},a.createElement(r.Collapse,{in:C,unmountOnExit:!0},a.createElement(l.uz,{style:j}))))};y.displayName="Demo";var g=y},93552:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/link-button",function(){return n(31358)}])}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=93552)}),_N_E=e.O()}]);