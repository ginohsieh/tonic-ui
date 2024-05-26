(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7598],{68260:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var r=t(52322),i=t(45392),o=t(16959),l=t(67569),a=t(2784);function s(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o,l,a=[],s=!0,c=!1;try{if(o=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;s=!1}else for(;!(s=(r=o.call(t)).done)&&(a.push(r.value),a.length!==n);s=!0);}catch(e){c=!0,i=e}finally{try{if(!s&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(c)throw i}}return a}}(e,n)||function(e,n){if(e){if("string"==typeof e)return c(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var d=function(){var e=s((0,a.useState)(!1),2),n=e[0],t=e[1],r=s((0,l.useColorMode)(),1)[0],i=s((0,l.useColorStyle)(),1)[0],o={dark:"gray:50",light:"gray:50"}[r],c=(0,a.useRef)(),d=(0,a.useRef)();return a.createElement(l.Flex,{ref:c,sx:{boxShadow:i.shadow.thick,cursor:n?"col-resize":"default"}},a.createElement(l.Flex,{ref:d,flex:"none",alignItems:"center",justifyContent:"center",width:"40%",height:240},"Left"),a.createElement(l.Flex,{flex:"auto",alignItems:"center",justifyContent:"center",position:"relative"},a.createElement(l.ResizeHandle,{onResizeStart:function(){t(!0)},onResizeEnd:function(){t(!1)},onResize:function(e){var n=e.clientX,t=d.current;if(t){var r=c.current.getBoundingClientRect(),i=r.left,o=r.width;n-i>=Math.min(160,.2*o)&&n-i<=Math.max(o-160,.8*o)&&(t.style.width="".concat(n-i,"px"))}},sx:{position:"absolute",left:0,top:0,bottom:0,borderLeft:1,borderLeftColor:n?o:({dark:"gray:70",light:"gray:30"})[r],_hover:{borderLeftColor:o}}}),a.createElement(l.Box,null,"Right")))};function h(e){var n=Object.assign({div:"div",h1:"h1",p:"p",code:"code",h2:"h2",a:"a",svg:"svg",use:"use",pre:"pre",ul:"ul",li:"li",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,r.jsxs)(n.div,{className:"main-content",id:"main-content",children:["\n","\n",(0,r.jsx)(n.h1,{id:"resizehandle",children:"ResizeHandle"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"ResizeHandle"})," component is a tool designed to enhance the functionality of other components such as ",(0,r.jsx)(n.code,{children:"Table"})," and ",(0,r.jsx)(n.code,{children:"TreeView"})," by enabling smooth resizing of adjacent elements."]}),"\n",(0,r.jsxs)(n.h2,{id:"import",children:["Import",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { ResizeHandle } from '@tonic-ui/react';\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"usage",children:["Usage",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usage",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["When hovering over the border of the resizable tree view, change the cursor to ",(0,r.jsx)(n.code,{children:"col-resize"})," and highlight the border color to indicate that it is resizable. The hoverable area is ",(0,r.jsx)(n.code,{children:"8px"})," in width, including the border."]}),"\n",(0,r.jsxs)(n.li,{children:["When dragging the resizable area, display a translucent background with a ",(0,r.jsx)(n.code,{children:"4px"})," width (excluding the border) to indicate the dragging action."]}),"\n"]}),"\n",(0,r.jsx)(o.Z,{component:d,file:{data:"import {\n  Box,\n  Flex,\n  ResizeHandle,\n  useColorMode,\n  useColorStyle,\n} from '@tonic-ui/react';\nimport React, { useRef, useState } from 'react';\n\nconst App = () => {\n  const [isResizing, setIsResizing] = useState(false);\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle();\n  const dividerColor = {\n    dark: 'gray:70',\n    light: 'gray:30',\n  }[colorMode];\n  const highlightedDividerColor = {\n    dark: 'gray:50',\n    light: 'gray:50',\n  }[colorMode];\n  const containerRef = useRef();\n  const resizableRef = useRef();\n\n  return (\n    <Flex\n      ref={containerRef}\n      sx={{\n        boxShadow: colorStyle.shadow.thick,\n        cursor: isResizing ? 'col-resize' : 'default',\n      }}\n    >\n      <Flex\n        ref={resizableRef}\n        flex=\"none\"\n        alignItems=\"center\"\n        justifyContent=\"center\"\n        width=\"40%\"\n        height={240}\n      >\n        Left\n      </Flex>\n      <Flex\n        flex=\"auto\"\n        alignItems=\"center\"\n        justifyContent=\"center\"\n        position=\"relative\"\n      >\n        <ResizeHandle\n          onResizeStart={() => {\n            setIsResizing(true);\n          }}\n          onResizeEnd={() => {\n            setIsResizing(false);\n          }}\n          onResize={({ clientX }) => {\n            const el = resizableRef.current;\n            if (!el) {\n              return;\n            }\n\n            const { left: parentLeft, width: parentWidth } = containerRef.current.getBoundingClientRect();\n            const minWidth = Math.min(160, parentWidth * 0.2);\n            const maxWidth = Math.max(parentWidth - 160, parentWidth * (1 - 0.2));\n            const canDrag = (clientX - parentLeft >= minWidth) && (clientX - parentLeft <= maxWidth);\n            if (canDrag) {\n              const nextWidth = clientX - parentLeft;\n              el.style.width = `${nextWidth}px`;\n            }\n          }}\n          sx={{\n            position: 'absolute',\n            left: 0,\n            top: 0,\n            bottom: 0,\n            borderLeft: 1,\n            borderLeftColor: isResizing ? highlightedDividerColor : dividerColor,\n            _hover: {\n              borderLeftColor: highlightedDividerColor,\n            },\n          }}\n        />\n        <Box>\n          Right\n        </Box>\n      </Flex>\n    </Flex>\n  );\n};\n\nexport default App;",path:"pages/components/resize-handle/index.page.mdx"},sandbox:{files:{},raw:"import {\n  Box,\n  Flex,\n  ResizeHandle,\n  useColorMode,\n  useColorStyle,\n} from '@tonic-ui/react';\nimport React, { useRef, useState } from 'react';\n\nconst App = () => {\n  const [isResizing, setIsResizing] = useState(false);\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle();\n  const dividerColor = {\n    dark: 'gray:70',\n    light: 'gray:30',\n  }[colorMode];\n  const highlightedDividerColor = {\n    dark: 'gray:50',\n    light: 'gray:50',\n  }[colorMode];\n  const containerRef = useRef();\n  const resizableRef = useRef();\n\n  return (\n    <Flex\n      ref={containerRef}\n      sx={{\n        boxShadow: colorStyle.shadow.thick,\n        cursor: isResizing ? 'col-resize' : 'default',\n      }}\n    >\n      <Flex\n        ref={resizableRef}\n        flex=\"none\"\n        alignItems=\"center\"\n        justifyContent=\"center\"\n        width=\"40%\"\n        height={240}\n      >\n        Left\n      </Flex>\n      <Flex\n        flex=\"auto\"\n        alignItems=\"center\"\n        justifyContent=\"center\"\n        position=\"relative\"\n      >\n        <ResizeHandle\n          onResizeStart={() => {\n            setIsResizing(true);\n          }}\n          onResizeEnd={() => {\n            setIsResizing(false);\n          }}\n          onResize={({ clientX }) => {\n            const el = resizableRef.current;\n            if (!el) {\n              return;\n            }\n\n            const { left: parentLeft, width: parentWidth } = containerRef.current.getBoundingClientRect();\n            const minWidth = Math.min(160, parentWidth * 0.2);\n            const maxWidth = Math.max(parentWidth - 160, parentWidth * (1 - 0.2));\n            const canDrag = (clientX - parentLeft >= minWidth) && (clientX - parentLeft <= maxWidth);\n            if (canDrag) {\n              const nextWidth = clientX - parentLeft;\n              el.style.width = `${nextWidth}px`;\n            }\n          }}\n          sx={{\n            position: 'absolute',\n            left: 0,\n            top: 0,\n            bottom: 0,\n            borderLeft: 1,\n            borderLeftColor: isResizing ? highlightedDividerColor : dividerColor,\n            _hover: {\n              borderLeftColor: highlightedDividerColor,\n            },\n          }}\n        />\n        <Box>\n          Right\n        </Box>\n      </Flex>\n    </Flex>\n  );\n};\n\nexport default App;",title:"Tonic UI"}}),"\n",(0,r.jsxs)(n.h2,{id:"props",children:["Props",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#props",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(n.h3,{id:"resizehandle-1",children:["ResizeHandle",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#resizehandle-1",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{align:"left",children:"Name"}),(0,r.jsx)(n.th,{align:"left",children:"Type"}),(0,r.jsx)(n.th,{align:"left",children:"Default"}),(0,r.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:"children"}),(0,r.jsx)(n.td,{align:"left",children:"ReactNode"}),(0,r.jsx)(n.td,{align:"left"}),(0,r.jsxs)(n.td,{align:"left",children:["The content of the ",(0,r.jsx)(n.code,{children:"ResizeHandle"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:"onResize"}),(0,r.jsx)(n.td,{align:"left",children:"function"}),(0,r.jsx)(n.td,{align:"left"}),(0,r.jsxs)(n.td,{align:"left",children:["A callback function that is called when the resize handle is dragged. It receives an object with properties ",(0,r.jsx)(n.code,{children:"clientX"})," and ",(0,r.jsx)(n.code,{children:"clientY"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:"onResizeEnd"}),(0,r.jsx)(n.td,{align:"left",children:"function"}),(0,r.jsx)(n.td,{align:"left"}),(0,r.jsxs)(n.td,{align:"left",children:["A callback function that is called when the resize handle is released. It receives an object with properties ",(0,r.jsx)(n.code,{children:"clientX"})," and ",(0,r.jsx)(n.code,{children:"clientY"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:"onResizeStart"}),(0,r.jsx)(n.td,{align:"left",children:"function"}),(0,r.jsx)(n.td,{align:"left"}),(0,r.jsxs)(n.td,{align:"left",children:["A callback function that is called when the resize handle is pressed down. It receives an object with properties ",(0,r.jsx)(n.code,{children:"clientX"})," and ",(0,r.jsx)(n.code,{children:"clientY"}),"."]})]})]})]})]})}var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.ah)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(h,e)})):h(e)}},16959:function(e,n,t){"use strict";t.d(n,{Z:function(){return y}});var r=t(67569),i=t(49427),o=t(5632),l=t(2784),a=t(65245),s=t(16245),c=t(76761),d=t(73205),h=t(98107),u=["size"];function f(){return(f=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var x=(0,l.forwardRef)(function(e,n){var t=e.size,i=function(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}(e,u);return l.createElement(r.SVGIcon,f({size:t,viewBox:"0 0 1024 1024"},i),l.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"}))});x.displayName="CodeSandboxIcon";var g=t(44285);function p(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o,l,a=[],s=!0,c=!1;try{if(o=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;s=!1}else for(;!(s=(r=o.call(t)).done)&&(a.push(r.value),a.length!==n);s=!0);}catch(e){c=!0,i=e}finally{try{if(!s&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(c)throw i}}return a}}(e,n)||function(e,n){if(e){if("string"==typeof e)return m(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return m(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var b={fontFamily:'"SFMono-Medium", "SF Mono", "Segoe UI Mono", Menlo, Consolas, Courier, monospace',fontSize:14,overflowX:"auto"},j=function(e){var n=e.component,t=e.file,u=e.sandbox,f=(0,o.useRouter)(),m=p((0,l.useReducer)(function(e){return!e},!1),2),j=m[0],y=m[1],v=p((0,r.useColorMode)(),1)[0],z={dark:c.y,light:c.q}[v],R=p((0,i.useToggle)(!1),2),C=R[0],k=R[1],w=(0,s.Z)(null==t?void 0:t.data),E=w.onCopy,S=w.hasCopied,I=(0,l.useCallback)(function(){E()},[E]),L=(0,l.useCallback)(function(){(0,d.b)(u)},[u]),M=(0,l.useCallback)(function(){y(),k(!1)},[y,k]);return l.createElement(a.nu,{code:null==t?void 0:t.data,disabled:!0,language:"jsx",theme:z},l.createElement(r.Box,{border:1,borderColor:{dark:"gray:70",light:"gray:30"}[v],p:"4x"},l.createElement(r.Box,{fontSize:"sm",lineHeight:"sm"},l.createElement(l.Fragment,{key:j},l.createElement(n,null)))),l.createElement(r.Flex,{columnGap:"2x",justifyContent:"flex-end",mb:"4x"},l.createElement(g.Z,{"data-track":C?"CodeBlock|hide_source|".concat((0,h.Z)({path:f.pathname})):"CodeBlock|show_source|".concat((0,h.Z)({path:f.pathname})),onClick:k},l.createElement(r.Tooltip,{label:C?"Hide the source":"Show the source"},l.createElement(r.Icon,{icon:"code",size:{sm:"5x",md:"4x"}}))),l.createElement(g.Z,{"data-track":"CodeBlock|copy_source|".concat((0,h.Z)({path:f.pathname})),onClick:I},l.createElement(r.Tooltip,{label:S?"Copied":"Copy the source"},l.createElement(r.Icon,{icon:"file-copy-o",size:{sm:"5x",md:"4x"}}))),l.createElement(g.Z,{"data-track":"CodeBlock|edit_in_codesandbox|".concat(f.pathname),onClick:L},l.createElement(r.Tooltip,{label:"Edit in CodeSandbox"},l.createElement(x,{size:{sm:"5x",md:"4x"}}))),l.createElement(g.Z,{"data-track":"CodeBlock|reset|".concat(f.pathname),onClick:M},l.createElement(r.Tooltip,{label:"Reset the demo"},l.createElement(r.Icon,{icon:"redo",size:{sm:"5x",md:"4x"}})))),l.createElement(r.Fade,{in:C},l.createElement(r.Collapse,{in:C,unmountOnExit:!0},l.createElement(a.uz,{style:b}))))};j.displayName="Demo";var y=j},21066:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/resize-handle",function(){return t(68260)}])}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=21066)}),_N_E=e.O()}]);