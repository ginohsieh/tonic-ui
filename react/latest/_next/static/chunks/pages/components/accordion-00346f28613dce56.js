(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9861],{58775:function(e,n,t){"use strict";t.d(n,{Z:function(){return y}});var o=t(67569),r=t(49427),i=t(5632),c=t(2784),l=t(87805),d=t(98485),a=t(71561),s=t(57431),x=t(66824),h=["size"];function m(){return(m=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var f=(0,c.forwardRef)(function(e,n){var t=e.size,r=function(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,h);return c.createElement(o.SVGIcon,m({size:t,viewBox:"0 0 1024 1024"},r),c.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"}))});f.displayName="CodeSandboxIcon";var p=t(30462);function g(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,o,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var i=[],c=!0,l=!1;try{for(r=r.call(e);!(c=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);c=!0);}catch(e){l=!0,o=e}finally{try{c||null==r.return||r.return()}finally{if(l)throw o}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return u(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return u(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=Array(n);t<n;t++)o[t]=e[t];return o}var j={fontFamily:'"SFMono-Medium", "SF Mono", "Segoe UI Mono", Menlo, Consolas, Courier, monospace',fontSize:14,overflowX:"auto"},A=function(e){var n=e.component,t=e.file,h=e.sandbox,m=(0,i.useRouter)(),u=g((0,c.useReducer)(function(e){return!e},!1),2),A=u[0],y=u[1],b=g((0,o.useColorMode)(),1)[0],k={dark:a.y,light:a.q}[b],I=g((0,r.useToggle)(!1),2),T=I[0],E=I[1],S=(0,d.Z)(null==t?void 0:t.data),v=S.onCopy,B=S.hasCopied,w=(0,c.useCallback)(function(){v()},[v]),C=(0,c.useCallback)(function(){(0,s.b)(h)},[h]),O=(0,c.useCallback)(function(){y(),E(!1)},[y,E]);return c.createElement(l.nu,{code:null==t?void 0:t.data,disabled:!0,language:"jsx",theme:k},c.createElement(o.Box,{border:1,borderColor:{dark:"gray:70",light:"gray:30"}[b],p:"4x"},c.createElement(o.Box,{fontSize:"sm",lineHeight:"sm"},c.createElement(c.Fragment,{key:A},c.createElement(n,null)))),c.createElement(o.Flex,{columnGap:"2x",justifyContent:"flex-end",mb:"4x"},c.createElement(p.Z,{"data-track":T?"CodeBlock|hide_source|".concat((0,x.Z)({path:m.pathname})):"CodeBlock|show_source|".concat((0,x.Z)({path:m.pathname})),onClick:E},c.createElement(o.Tooltip,{label:T?"Hide the source":"Show the source"},c.createElement(o.Icon,{icon:"code",size:{sm:"5x",md:"4x"}}))),c.createElement(p.Z,{"data-track":"CodeBlock|copy_source|".concat((0,x.Z)({path:m.pathname})),onClick:w},c.createElement(o.Tooltip,{label:B?"Copied":"Copy the source"},c.createElement(o.Icon,{icon:"file-copy-o",size:{sm:"5x",md:"4x"}}))),c.createElement(p.Z,{"data-track":"CodeBlock|edit_in_codesandbox|".concat(m.pathname),onClick:C},c.createElement(o.Tooltip,{label:"Edit in CodeSandbox"},c.createElement(f,{size:{sm:"5x",md:"4x"}}))),c.createElement(p.Z,{"data-track":"CodeBlock|reset|".concat(m.pathname),onClick:O},c.createElement(o.Tooltip,{label:"Reset the demo"},c.createElement(o.Icon,{icon:"redo",size:{sm:"5x",md:"4x"}})))),c.createElement(o.Fade,{in:T},c.createElement(o.Collapse,{in:T,unmountOnExit:!0},c.createElement(l.uz,{style:j}))))};A.displayName="Demo";var y=A},43904:function(e,n,t){"use strict";var o=t(67569),r=t(2784);n.Z=function(e){return r.createElement(o.Flex,e,r.createElement(o.Flex,{flex:"none",mr:"4x",alignItems:"center"},r.createElement(o.Skeleton,{variant:"circle",width:"10x",height:"10x"})),r.createElement(o.Flex,{flex:"auto",flexDirection:"column",rowGap:"2x"},r.createElement(o.Skeleton,null),r.createElement(o.Skeleton,null),r.createElement(o.Skeleton,null)))}},8919:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return A}});var o=t(52322),r=t(45392),i=t(58775),c=t(67569),l=t(2784),d=t(43904);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach(function(n){var o;o=t[n],n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function x(){return(x=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function h(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,o,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var i=[],c=!0,l=!1;try{for(r=r.call(e);!(c=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);c=!0);}catch(e){l=!0,o=e}finally{try{c||null==r.return||r.return()}finally{if(l)throw o}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return m(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return m(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=Array(n);t<n;t++)o[t]=e[t];return o}var f=function(){var e=h((0,c.useColorMode)(),1)[0],n={dark:"rgba(255, 255, 255, 0.12)",light:"rgba(0, 0, 0, 0.12)"}[e],t=h((0,l.useState)(null),2),o=t[0],r=t[1],i=function(e){var t=o===e;return s(s({},{border:1,borderColor:n,borderStyle:"solid",borderBottomWidth:t?1:0,transition:"all .2s",my:t?"3x":0,_firstOfType:{mt:0},_lastOfType:{mb:0,borderBottomWidth:1}}),{},{isExpanded:t,onToggle:function(n){r(n.isExpanded?e:null)}})};return l.createElement(c.Accordion,null,["item1","item2","item3"].map(function(n,t){return l.createElement(c.AccordionItem,x({key:n},i(n)),l.createElement(c.AccordionToggle,s({},{display:"flex",alignItems:"center",justifyContent:"flex-start",backgroundColor:{dark:"gray:90",light:"white"}[e],color:{dark:"white:primary",light:"black:primary"}[e],px:"4x",minHeight:"12x"}),l.createElement(c.AccordionToggleIcon,null,function(e,t){var r=t.ref,i=t.style;return i.transform=o===n?"rotate(0deg)":"rotate(-90deg)",l.createElement(c.Icon,x({ref:r,icon:"chevron-down",size:"4x"},i))}),l.createElement(c.Space,{width:"2x"}),l.createElement(c.Text,null,"Collapsible Item #",t+1)),l.createElement(c.AccordionContent,null,l.createElement(d.Z,{px:"4x",py:"3x"})))}))};function p(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=Array(n);t<n;t++)o[t]=e[t];return o}var g=function(){var e=l.useState("item1"),n=function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,o,r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var i=[],c=!0,l=!1;try{for(r=r.call(e);!(c=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);c=!0);}catch(e){l=!0,o=e}finally{try{c||null==r.return||r.return()}finally{if(l)throw o}}return i}}(e,2)||function(e,n){if(e){if("string"==typeof e)return p(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return p(e,n)}}(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),t=n[0],o=n[1],r=function(e){return function(n){o(n.isExpanded?e:null)}};return l.createElement(c.Accordion,{rowGap:1},l.createElement(c.AccordionItem,{isExpanded:"item1"===t,onToggle:r("item1")},l.createElement(c.AccordionHeader,null,l.createElement(c.Text,null,"Accordion 1")),l.createElement(c.AccordionBody,null,l.createElement(d.Z,{px:"4x",py:"3x"}))),l.createElement(c.AccordionItem,{isExpanded:"item2"===t,onToggle:r("item2")},l.createElement(c.AccordionHeader,null,l.createElement(c.Text,null,"Accordion 2")),l.createElement(c.AccordionBody,null,l.createElement(d.Z,{px:"4x",py:"3x"}))),l.createElement(c.AccordionItem,{disabled:!0,isExpanded:"item3"===t,onToggle:r("item3")},l.createElement(c.AccordionHeader,null,l.createElement(c.Text,null,"Disabled Accordion")),l.createElement(c.AccordionBody,null,l.createElement(d.Z,{px:"4x",py:"3x"}))))},u=function(){return l.createElement(c.Accordion,{rowGap:1},l.createElement(c.AccordionItem,{defaultIsExpanded:!0},l.createElement(c.AccordionHeader,null,l.createElement(c.Text,null,"Accordion 1")),l.createElement(c.AccordionBody,null,l.createElement(d.Z,{px:"4x",py:"3x"}))),l.createElement(c.AccordionItem,null,l.createElement(c.AccordionHeader,null,l.createElement(c.Text,null,"Accordion 2")),l.createElement(c.AccordionBody,null,l.createElement(d.Z,{px:"4x",py:"3x"}))),l.createElement(c.AccordionItem,{disabled:!0},l.createElement(c.AccordionHeader,null,l.createElement(c.Text,null,"Disabled Accordion")),l.createElement(c.AccordionBody,null,l.createElement(d.Z,{px:"4x",py:"3x"}))))};function j(e){var n=Object.assign({div:"div",h1:"h1",p:"p",h2:"h2",a:"a",svg:"svg",use:"use",pre:"pre",code:"code",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,o.jsxs)(n.div,{className:"main-content",id:"main-content",children:["\n","\n","\n","\n",(0,o.jsx)(n.h1,{id:"accordion",children:"Accordion"}),"\n",(0,o.jsx)(n.p,{children:"Accordion is a container that allows the user to toggle sections of related content."}),"\n",(0,o.jsxs)(n.h2,{id:"import",children:["Import",(0,o.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,o.jsx)(n.svg,{children:(0,o.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import {\n  Accordion,\n  AccordionItem,\n  AccordionHeader, // composed of `AccordionToggle` and `AccordionToggleIcon`\n  AccordionBody, // composed of `AccordionContent`\n  AccordionToggle,\n  AccordionToggleIcon,\n  AccordionContent,\n} from '@tonic-ui/react';\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"usage",children:["Usage",(0,o.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usage",children:(0,o.jsx)(n.svg,{children:(0,o.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(n.h3,{id:"basic-accordion",children:["Basic accordion",(0,o.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#basic-accordion",children:(0,o.jsx)(n.svg,{children:(0,o.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["To compose an accordion with default styles, you can use ",(0,o.jsx)(n.code,{children:"Accordion"}),", ",(0,o.jsx)(n.code,{children:"AccordionItem"}),", ",(0,o.jsx)(n.code,{children:"AccordionHeader"}),", and ",(0,o.jsx)(n.code,{children:"AccordionBody"})," directly."]}),"\n",(0,o.jsx)(i.Z,{component:u,file:{data:'import {\n  Accordion,\n  AccordionItem,\n  AccordionHeader,\n  AccordionBody,\n  Text,\n} from \'@tonic-ui/react\';\nimport React from \'react\';\nimport SkeletonBlock from \'@/components/SkeletonBlock\';\n\nconst App = () => {\n  return (\n    <Accordion rowGap={1}>\n      <AccordionItem defaultIsExpanded>\n        <AccordionHeader>\n          <Text>\n            Accordion 1\n          </Text>\n        </AccordionHeader>\n        <AccordionBody>\n          <SkeletonBlock px="4x" py="3x" />\n        </AccordionBody>\n      </AccordionItem>\n      <AccordionItem>\n        <AccordionHeader>\n          <Text>\n            Accordion 2\n          </Text>\n        </AccordionHeader>\n        <AccordionBody>\n          <SkeletonBlock px="4x" py="3x" />\n        </AccordionBody>\n      </AccordionItem>\n      <AccordionItem disabled>\n        <AccordionHeader>\n          <Text>\n            Disabled Accordion\n          </Text>\n        </AccordionHeader>\n        <AccordionBody>\n          <SkeletonBlock px="4x" py="3x" />\n        </AccordionBody>\n      </AccordionItem>\n    </Accordion>\n  );\n};\n\nexport default App;',path:"pages/components/accordion/index.page.mdx"},sandbox:{files:{"src/components/SkeletonBlock.js":'import {\n  Flex,\n  Skeleton,\n} from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst SkeletonBlock = (props) => (\n  <Flex {...props}>\n    <Flex flex="none" mr="4x" alignItems="center">\n      <Skeleton variant="circle" width="10x" height="10x" />\n    </Flex>\n    <Flex flex="auto" flexDirection="column" rowGap="2x">\n      <Skeleton />\n      <Skeleton />\n      <Skeleton />\n    </Flex>\n  </Flex>\n);\n\nexport default SkeletonBlock;'},raw:'import {\n  Accordion,\n  AccordionItem,\n  AccordionHeader,\n  AccordionBody,\n  Text,\n} from \'@tonic-ui/react\';\nimport React from \'react\';\nimport SkeletonBlock from \'@/components/SkeletonBlock\';\n\nconst App = () => {\n  return (\n    <Accordion rowGap={1}>\n      <AccordionItem defaultIsExpanded>\n        <AccordionHeader>\n          <Text>\n            Accordion 1\n          </Text>\n        </AccordionHeader>\n        <AccordionBody>\n          <SkeletonBlock px="4x" py="3x" />\n        </AccordionBody>\n      </AccordionItem>\n      <AccordionItem>\n        <AccordionHeader>\n          <Text>\n            Accordion 2\n          </Text>\n        </AccordionHeader>\n        <AccordionBody>\n          <SkeletonBlock px="4x" py="3x" />\n        </AccordionBody>\n      </AccordionItem>\n      <AccordionItem disabled>\n        <AccordionHeader>\n          <Text>\n            Disabled Accordion\n          </Text>\n        </AccordionHeader>\n        <AccordionBody>\n          <SkeletonBlock px="4x" py="3x" />\n        </AccordionBody>\n      </AccordionItem>\n    </Accordion>\n  );\n};\n\nexport default App;',title:"Tonic UI"}}),"\n",(0,o.jsxs)(n.h3,{id:"controlled-accordion",children:["Controlled accordion",(0,o.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#controlled-accordion",children:(0,o.jsx)(n.svg,{children:(0,o.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsx)(n.p,{children:"Extend the default behavior to create an accordion with controlled state."}),"\n",(0,o.jsx)(i.Z,{component:g,file:{data:"import {\n  Accordion,\n  AccordionItem,\n  AccordionHeader,\n  AccordionBody,\n  Text,\n} from '@tonic-ui/react';\nimport React from 'react';\nimport SkeletonBlock from '@/components/SkeletonBlock';\n\nconst App = () => {\n  const [expandedItem, setExpandedItem] = React.useState('item1');\n  const handleToggle = item => ({ isExpanded }) => {\n    setExpandedItem(isExpanded ? item : null);\n  };\n\n  return (\n    <Accordion rowGap={1}>\n      <AccordionItem\n        isExpanded={expandedItem === 'item1'}\n        onToggle={handleToggle('item1')}\n      >\n        <AccordionHeader>\n          <Text>\n            Accordion 1\n          </Text>\n        </AccordionHeader>\n        <AccordionBody>\n          <SkeletonBlock px=\"4x\" py=\"3x\" />\n        </AccordionBody>\n      </AccordionItem>\n      <AccordionItem\n        isExpanded={expandedItem === 'item2'}\n        onToggle={handleToggle('item2')}\n      >\n        <AccordionHeader>\n          <Text>\n            Accordion 2\n          </Text>\n        </AccordionHeader>\n        <AccordionBody>\n          <SkeletonBlock px=\"4x\" py=\"3x\" />\n        </AccordionBody>\n      </AccordionItem>\n      <AccordionItem\n        disabled\n        isExpanded={expandedItem === 'item3'}\n        onToggle={handleToggle('item3')}\n      >\n        <AccordionHeader>\n          <Text>\n            Disabled Accordion\n          </Text>\n        </AccordionHeader>\n        <AccordionBody>\n          <SkeletonBlock px=\"4x\" py=\"3x\" />\n        </AccordionBody>\n      </AccordionItem>\n    </Accordion>\n  );\n};\n\nexport default App;",path:"pages/components/accordion/index.page.mdx"},sandbox:{files:{"src/components/SkeletonBlock.js":'import {\n  Flex,\n  Skeleton,\n} from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst SkeletonBlock = (props) => (\n  <Flex {...props}>\n    <Flex flex="none" mr="4x" alignItems="center">\n      <Skeleton variant="circle" width="10x" height="10x" />\n    </Flex>\n    <Flex flex="auto" flexDirection="column" rowGap="2x">\n      <Skeleton />\n      <Skeleton />\n      <Skeleton />\n    </Flex>\n  </Flex>\n);\n\nexport default SkeletonBlock;'},raw:"import {\n  Accordion,\n  AccordionItem,\n  AccordionHeader,\n  AccordionBody,\n  Text,\n} from '@tonic-ui/react';\nimport React from 'react';\nimport SkeletonBlock from '@/components/SkeletonBlock';\n\nconst App = () => {\n  const [expandedItem, setExpandedItem] = React.useState('item1');\n  const handleToggle = item => ({ isExpanded }) => {\n    setExpandedItem(isExpanded ? item : null);\n  };\n\n  return (\n    <Accordion rowGap={1}>\n      <AccordionItem\n        isExpanded={expandedItem === 'item1'}\n        onToggle={handleToggle('item1')}\n      >\n        <AccordionHeader>\n          <Text>\n            Accordion 1\n          </Text>\n        </AccordionHeader>\n        <AccordionBody>\n          <SkeletonBlock px=\"4x\" py=\"3x\" />\n        </AccordionBody>\n      </AccordionItem>\n      <AccordionItem\n        isExpanded={expandedItem === 'item2'}\n        onToggle={handleToggle('item2')}\n      >\n        <AccordionHeader>\n          <Text>\n            Accordion 2\n          </Text>\n        </AccordionHeader>\n        <AccordionBody>\n          <SkeletonBlock px=\"4x\" py=\"3x\" />\n        </AccordionBody>\n      </AccordionItem>\n      <AccordionItem\n        disabled\n        isExpanded={expandedItem === 'item3'}\n        onToggle={handleToggle('item3')}\n      >\n        <AccordionHeader>\n          <Text>\n            Disabled Accordion\n          </Text>\n        </AccordionHeader>\n        <AccordionBody>\n          <SkeletonBlock px=\"4x\" py=\"3x\" />\n        </AccordionBody>\n      </AccordionItem>\n    </Accordion>\n  );\n};\n\nexport default App;",title:"Tonic UI"}}),"\n",(0,o.jsxs)(n.h3,{id:"customization",children:["Customization",(0,o.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#customization",children:(0,o.jsx)(n.svg,{children:(0,o.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["If you don't like the default styles, you can use ",(0,o.jsx)(n.code,{children:"AccordionToggle"}),", ",(0,o.jsx)(n.code,{children:"AccordionToggleIcon"}),", and ",(0,o.jsx)(n.code,{children:"AccordionContent"})," to customize the accordion."]}),"\n",(0,o.jsx)(n.p,{children:"Here is an example of customizing the accordion:"}),"\n",(0,o.jsx)(i.Z,{component:f,file:{data:"import {\n  Accordion,\n  AccordionContent,\n  AccordionItem,\n  AccordionToggle,\n  AccordionToggleIcon,\n  Icon,\n  Space,\n  Text,\n  useColorMode,\n} from '@tonic-ui/react';\nimport React, { useState } from 'react';\nimport SkeletonBlock from '@/components/SkeletonBlock';\n\nconst App = () => {\n  const [colorMode] = useColorMode();\n  const borderColor = {\n    dark: 'rgba(255, 255, 255, 0.12)',\n    light: 'rgba(0, 0, 0, 0.12)',\n  }[colorMode];\n  const [expandedItem, setExpandedItem] = useState(null);\n  const handleToggle = item => ({ isExpanded }) => {\n    setExpandedItem(isExpanded ? item : null);\n  };\n  const renderToggleIcon = item => (\n    <AccordionToggleIcon>\n      {(state, { ref, style: styleProps }) => {\n        styleProps.transform = (expandedItem === item) ? 'rotate(0deg)' : 'rotate(-90deg)';\n        return (\n          <Icon ref={ref} icon=\"chevron-down\" size=\"4x\" {...styleProps} />\n        );\n      }}\n    </AccordionToggleIcon>\n  );\n  const getAccordionItemProps = item => {\n    const isExpanded = expandedItem === item;\n    const itemStyleProps = {\n      border: 1,\n      borderColor,\n      borderStyle: 'solid',\n      borderBottomWidth: isExpanded ? 1 : 0,\n      transition: 'all .2s',\n      my: isExpanded ? '3x' : 0,\n      _firstOfType: {\n        mt: 0,\n      },\n      _lastOfType: {\n        mb: 0,\n        borderBottomWidth: 1,\n      },\n    };\n\n    return {\n      ...itemStyleProps,\n      isExpanded,\n      onToggle: handleToggle(item),\n    };\n  };\n  const getAccordionToggleProps = item => {\n    const toggleStyleProps = {\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'flex-start',\n      backgroundColor: {\n        dark: 'gray:90',\n        light: 'white',\n      }[colorMode],\n      color: {\n        dark: 'white:primary',\n        light: 'black:primary',\n      }[colorMode],\n      px: '4x',\n      minHeight: '12x',\n    };\n\n    return {\n      ...toggleStyleProps,\n    };\n  };\n\n  return (\n    <Accordion>\n      {['item1', 'item2', 'item3'].map((item, index) => (\n        <AccordionItem\n          key={item}\n          {...getAccordionItemProps(item)}\n        >\n          <AccordionToggle\n            {...getAccordionToggleProps(item)}\n          >\n            {renderToggleIcon(item)}\n            <Space width=\"2x\" />\n            <Text>\n              Collapsible Item #{index + 1}\n            </Text>\n          </AccordionToggle>\n          <AccordionContent>\n            <SkeletonBlock px=\"4x\" py=\"3x\" />\n          </AccordionContent>\n        </AccordionItem>\n      ))}\n    </Accordion>\n  );\n};\n\nexport default App;",path:"pages/components/accordion/index.page.mdx"},sandbox:{files:{"src/components/SkeletonBlock.js":'import {\n  Flex,\n  Skeleton,\n} from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst SkeletonBlock = (props) => (\n  <Flex {...props}>\n    <Flex flex="none" mr="4x" alignItems="center">\n      <Skeleton variant="circle" width="10x" height="10x" />\n    </Flex>\n    <Flex flex="auto" flexDirection="column" rowGap="2x">\n      <Skeleton />\n      <Skeleton />\n      <Skeleton />\n    </Flex>\n  </Flex>\n);\n\nexport default SkeletonBlock;'},raw:"import {\n  Accordion,\n  AccordionContent,\n  AccordionItem,\n  AccordionToggle,\n  AccordionToggleIcon,\n  Icon,\n  Space,\n  Text,\n  useColorMode,\n} from '@tonic-ui/react';\nimport React, { useState } from 'react';\nimport SkeletonBlock from '@/components/SkeletonBlock';\n\nconst App = () => {\n  const [colorMode] = useColorMode();\n  const borderColor = {\n    dark: 'rgba(255, 255, 255, 0.12)',\n    light: 'rgba(0, 0, 0, 0.12)',\n  }[colorMode];\n  const [expandedItem, setExpandedItem] = useState(null);\n  const handleToggle = item => ({ isExpanded }) => {\n    setExpandedItem(isExpanded ? item : null);\n  };\n  const renderToggleIcon = item => (\n    <AccordionToggleIcon>\n      {(state, { ref, style: styleProps }) => {\n        styleProps.transform = (expandedItem === item) ? 'rotate(0deg)' : 'rotate(-90deg)';\n        return (\n          <Icon ref={ref} icon=\"chevron-down\" size=\"4x\" {...styleProps} />\n        );\n      }}\n    </AccordionToggleIcon>\n  );\n  const getAccordionItemProps = item => {\n    const isExpanded = expandedItem === item;\n    const itemStyleProps = {\n      border: 1,\n      borderColor,\n      borderStyle: 'solid',\n      borderBottomWidth: isExpanded ? 1 : 0,\n      transition: 'all .2s',\n      my: isExpanded ? '3x' : 0,\n      _firstOfType: {\n        mt: 0,\n      },\n      _lastOfType: {\n        mb: 0,\n        borderBottomWidth: 1,\n      },\n    };\n\n    return {\n      ...itemStyleProps,\n      isExpanded,\n      onToggle: handleToggle(item),\n    };\n  };\n  const getAccordionToggleProps = item => {\n    const toggleStyleProps = {\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'flex-start',\n      backgroundColor: {\n        dark: 'gray:90',\n        light: 'white',\n      }[colorMode],\n      color: {\n        dark: 'white:primary',\n        light: 'black:primary',\n      }[colorMode],\n      px: '4x',\n      minHeight: '12x',\n    };\n\n    return {\n      ...toggleStyleProps,\n    };\n  };\n\n  return (\n    <Accordion>\n      {['item1', 'item2', 'item3'].map((item, index) => (\n        <AccordionItem\n          key={item}\n          {...getAccordionItemProps(item)}\n        >\n          <AccordionToggle\n            {...getAccordionToggleProps(item)}\n          >\n            {renderToggleIcon(item)}\n            <Space width=\"2x\" />\n            <Text>\n              Collapsible Item #{index + 1}\n            </Text>\n          </AccordionToggle>\n          <AccordionContent>\n            <SkeletonBlock px=\"4x\" py=\"3x\" />\n          </AccordionContent>\n        </AccordionItem>\n      ))}\n    </Accordion>\n  );\n};\n\nexport default App;",title:"Tonic UI"}}),"\n",(0,o.jsxs)(n.h2,{id:"props",children:["Props",(0,o.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#props",children:(0,o.jsx)(n.svg,{children:(0,o.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(n.h3,{id:"accordion-1",children:["Accordion",(0,o.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#accordion-1",children:(0,o.jsx)(n.svg,{children:(0,o.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{align:"left",children:"Name"}),(0,o.jsx)(n.th,{align:"left",children:"Type"}),(0,o.jsx)(n.th,{align:"left",children:"Default"}),(0,o.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"children"}),(0,o.jsxs)(n.td,{align:"left",children:["ReactNode | ",(0,o.jsx)(n.code,{children:"(context) => ReactNode"})]}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsx)(n.td,{align:"left",children:"A function child can be used intead of a React element. This function is called with the context object."})]})})]}),"\n",(0,o.jsxs)(n.h3,{id:"accordionitem",children:["AccordionItem",(0,o.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#accordionitem",children:(0,o.jsx)(n.svg,{children:(0,o.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{align:"left",children:"Name"}),(0,o.jsx)(n.th,{align:"left",children:"Type"}),(0,o.jsx)(n.th,{align:"left",children:"Default"}),(0,o.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"children"}),(0,o.jsxs)(n.td,{align:"left",children:["ReactNode | ",(0,o.jsx)(n.code,{children:"(context) => ReactNode"})]}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsx)(n.td,{align:"left",children:"A function child can be used intead of a React element. This function is called with the context object."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"disabled"}),(0,o.jsx)(n.td,{align:"left",children:"boolean"}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsx)(n.td,{align:"left",children:"Whether the accordion item is disabled."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"isExpanded"}),(0,o.jsx)(n.td,{align:"left",children:"boolean"}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsx)(n.td,{align:"left",children:"Whether the accordion item is expanded."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"defaultIsExpanded"}),(0,o.jsx)(n.td,{align:"left",children:"boolean"}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsx)(n.td,{align:"left",children:"Whether the accordion item is expanded by default."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"onToggle"}),(0,o.jsx)(n.td,{align:"left",children:"function"}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsx)(n.td,{align:"left",children:"A callback that is called when the accordion item is toggled."})]})]})]}),"\n",(0,o.jsxs)(n.h3,{id:"accordionheader",children:["AccordionHeader",(0,o.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#accordionheader",children:(0,o.jsx)(n.svg,{children:(0,o.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{align:"left",children:"Name"}),(0,o.jsx)(n.th,{align:"left",children:"Type"}),(0,o.jsx)(n.th,{align:"left",children:"Default"}),(0,o.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"children"}),(0,o.jsx)(n.td,{align:"left",children:"ReactNode"}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsx)(n.td,{align:"left"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"disabled"}),(0,o.jsx)(n.td,{align:"left",children:"boolean"}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsx)(n.td,{align:"left",children:"Whether the accordion header is disabled."})]})]})]}),"\n",(0,o.jsxs)(n.h3,{id:"accordionbody",children:["AccordionBody",(0,o.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#accordionbody",children:(0,o.jsx)(n.svg,{children:(0,o.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{align:"left",children:"Name"}),(0,o.jsx)(n.th,{align:"left",children:"Type"}),(0,o.jsx)(n.th,{align:"left",children:"Default"}),(0,o.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"children"}),(0,o.jsx)(n.td,{align:"left",children:"ReactNode"}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsx)(n.td,{align:"left"})]})})]}),"\n",(0,o.jsxs)(n.h3,{id:"accordiontoggle",children:["AccordionToggle",(0,o.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#accordiontoggle",children:(0,o.jsx)(n.svg,{children:(0,o.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{align:"left",children:"Name"}),(0,o.jsx)(n.th,{align:"left",children:"Type"}),(0,o.jsx)(n.th,{align:"left",children:"Default"}),(0,o.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"children"}),(0,o.jsx)(n.td,{align:"left",children:"ReactNode"}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsx)(n.td,{align:"left"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"disabled"}),(0,o.jsx)(n.td,{align:"left",children:"boolean"}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsx)(n.td,{align:"left",children:"Whether the accordion toggle is disabled."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"onClick"}),(0,o.jsx)(n.td,{align:"left",children:"function"}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsx)(n.td,{align:"left",children:"A callback that is called when the accordion toggle is clicked."})]})]})]}),"\n",(0,o.jsxs)(n.h3,{id:"accordiontoggleicon",children:["AccordionToggleIcon",(0,o.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#accordiontoggleicon",children:(0,o.jsx)(n.svg,{children:(0,o.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{align:"left",children:"Name"}),(0,o.jsx)(n.th,{align:"left",children:"Type"}),(0,o.jsx)(n.th,{align:"left",children:"Default"}),(0,o.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"appear"}),(0,o.jsx)(n.td,{align:"left",children:"boolean"}),(0,o.jsx)(n.td,{align:"left",children:"false"}),(0,o.jsxs)(n.td,{align:"left",children:["By default the child component does not perform the enter transition when it first mounts, regardless of the value of ",(0,o.jsx)(n.code,{children:"in"}),". If you want this behavior, set both ",(0,o.jsx)(n.code,{children:"appear"})," and ",(0,o.jsx)(n.code,{children:"in"})," to true."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"children"}),(0,o.jsxs)(n.td,{align:"left",children:["ReactNode | ",(0,o.jsx)(n.code,{children:"(state, props) => ReactNode"})]}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsx)(n.td,{align:"left",children:"A function child can be used instead of a React element. This function is called with the current transition state ('entering', 'entered', 'exiting', 'exited'), ref, style, and context specific props for a component."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"disabled"}),(0,o.jsx)(n.td,{align:"left",children:"boolean"}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsx)(n.td,{align:"left",children:"Whether the accordion toggle icon is disabled."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"easing"}),(0,o.jsxs)(n.td,{align:"left",children:["string | ",(0,o.jsx)(n.code,{children:"{ enter?: string, exit?: string }"})]}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"{ enter: easing.easeInOut, exit: easing.easeInOut }"})}),(0,o.jsx)(n.td,{align:"left",children:"The timing function that describes how intermediate values are calculated during a transition. You may specify a single timing function for all transitions, or individually with an object."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"in"}),(0,o.jsx)(n.td,{align:"left",children:"boolean"}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsxs)(n.td,{align:"left",children:["If ",(0,o.jsx)(n.code,{children:"true"}),", the component will transition in."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"mountOnEnter"}),(0,o.jsx)(n.td,{align:"left",children:"boolean"}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsxs)(n.td,{align:"left",children:["If ",(0,o.jsx)(n.code,{children:"true"}),', it will "lazy mount" the component on the first ',(0,o.jsx)(n.code,{children:"in={true}"}),". After the first enter transition the component will stay mounted, even on the 'exited' state, unless you also specify ",(0,o.jsx)(n.code,{children:"unmountOnExit"}),". By default the child component is mounted immediately along with the parent transition component."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"timeout"}),(0,o.jsxs)(n.td,{align:"left",children:["number | ",(0,o.jsx)(n.code,{children:"{ appear?: number, enter?: number, exit?: number }"})]}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"{ enter: duration.enterScreen, exit: duration.levingScreen }"})}),(0,o.jsx)(n.td,{align:"left",children:"The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"unmountOnExit"}),(0,o.jsx)(n.td,{align:"left",children:"boolean"}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsxs)(n.td,{align:"left",children:["If ",(0,o.jsx)(n.code,{children:"true"}),", it will unmount the child component when ",(0,o.jsx)(n.code,{children:"in={false}"})," and the animation has finished. By default the child component stays mounted after it reaches the 'exited' state."]})]})]})]}),"\n",(0,o.jsxs)(n.h3,{id:"accordioncontent",children:["AccordionContent",(0,o.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#accordioncontent",children:(0,o.jsx)(n.svg,{children:(0,o.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{align:"left",children:"Name"}),(0,o.jsx)(n.th,{align:"left",children:"Type"}),(0,o.jsx)(n.th,{align:"left",children:"Default"}),(0,o.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"children"}),(0,o.jsx)(n.td,{align:"left",children:"ReactNode"}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsx)(n.td,{align:"left"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"TransitionComponent"}),(0,o.jsx)(n.td,{align:"left",children:"ElementType"}),(0,o.jsx)(n.td,{align:"left",children:"Collapse"}),(0,o.jsx)(n.td,{align:"left",children:"The component used for the transition."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"TransitionProps"}),(0,o.jsx)(n.td,{align:"left",children:"object"}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsxs)(n.td,{align:"left",children:["Props applied to the ",(0,o.jsx)(n.a,{href:"http://reactcommunity.org/react-transition-group/transition#Transition-props",children:"Transition"})," element."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"TransitionProps.appear"}),(0,o.jsx)(n.td,{align:"left",children:"boolean"}),(0,o.jsx)(n.td,{align:"left",children:"false"}),(0,o.jsx)(n.td,{align:"left"})]})]})]})]})}var A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.ah)(),e.components).wrapper;return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(j,e)})):j(e)}},46326:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/accordion",function(){return t(8919)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=46326)}),_N_E=e.O()}]);