(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8722],{47241:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return I}});var o=t(52322),r=t(45392),i=t(96835),l=t(73645),a=t(67622),c=t(99291),s=t(68010),d=t(70758),u=t(53860),h=t(20325),m=t(83377),f=t(33558),p=t(2784),x=t(41759),g=t(52903),j=t(49857),y=["appear","children","easing","in","style","timeout"],b=function(e,n){var t={entering:{transform:"none"},entered:{transform:"none"},exiting:{transform:"scale(0)"},exited:{transform:"scale(0)"}}[e];return"function"==typeof t?t(n):t},v={enter:m.YU.easeInOut,exit:m.YU.easeInOut},k={enter:m.nV.enteringScreen,exit:m.nV.leavingScreen},S=(0,p.forwardRef)(function(e,n){var t=e.appear,o=e.children,r=e.easing,i=void 0===r?v:r,l=e.in,a=e.style,c=e.timeout,s=void 0===c?k:c,d=(0,u.Kd)(e,y),S=(0,p.useRef)(null),Z=(0,h.Z)(S,n);return(0,p.useEffect)(function(){if(l){var e=S.current;(0,f.nq)(e)}},[l]),(0,g.tZ)(x.ZP,(0,u.Zj)((0,u.Zj)({appear:void 0!==t&&t,in:l,nodeRef:S,timeout:s},d),{},{children:function(e,n){var t=l?(0,m.c)({style:a,timeout:s,easing:i}):(0,m.Zk)({style:a,timeout:s,easing:i}),r=(0,m.zx)("transform",t),c=b(e,{}),d=(0,u.Zj)((0,u.Zj)({},c),{},{transition:r,visibility:"exited"!==e||l?void 0:"hidden"});return"function"==typeof o?o(e,(0,u.Zj)((0,u.Zj)({},n),{},{ref:Z,style:(0,u.Zj)((0,u.Zj)({},d),a)})):(0,g.tZ)(j.Z,(0,u.Zj)((0,u.Zj)((0,u.Zj)({ref:Z},n),d),{},{style:a,children:o}))}}))});S.displayName="Zoom";var Z=t(65019),w=t(24231),E=t(20233);function C(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=Array(n);t<n;t++)o[t]=e[t];return o}var O=function(){var e,n=function(e){if(Array.isArray(e))return e}(e=(0,Z.Z)(!1))||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var o,r,i,l,a=[],c=!0,s=!1;try{for(i=(t=t.call(e)).next;!(c=(o=i.call(t)).done)&&(a.push(o.value),2!==a.length);c=!0);}catch(e){s=!0,r=e}finally{try{if(!c&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(s)throw r}}return a}}(e,2)||function(e,n){if(e){if("string"==typeof e)return C(e,2);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return C(e,2)}}(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),t=n[0],o=n[1];return p.createElement(l.Z,{direction:"column",rowGap:"4x"},p.createElement(a.Z,{display:"inline-flex",alignItems:"center"},p.createElement(c.Z,{checked:t,onChange:function(){return o()},size:"md"}),p.createElement(s.Z,{width:"2x"}),p.createElement(d.Z,null,"Show")),p.createElement(S,{in:t,unmountOnExit:!1},p.createElement(E.Z,null,p.createElement(w.Z,null))))};function T(e){var n=Object.assign({div:"div",h1:"h1",p:"p",code:"code",a:"a",h2:"h2",svg:"svg",use:"use",pre:"pre",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,o.jsxs)(n.div,{className:"main-content",children:["\n","\n",(0,o.jsx)(n.h1,{id:"transitions--zoom",children:"Transitions / Zoom"}),"\n",(0,o.jsx)(n.p,{children:"Transition helps make a UI expressive and easy to use."}),"\n",(0,o.jsxs)(n.p,{children:["The transition components use ",(0,o.jsx)(n.code,{children:"react-transition-group"})," internally to perform animation effects and manage component states (including mounting and unmounting) over time. You can check out all the transition props at ",(0,o.jsx)(n.a,{href:"https://reactcommunity.org/react-transition-group/transition/#Transition-props",children:"https://reactcommunity.org/react-transition-group/transition/#Transition-props"}),". For more information, visit ",(0,o.jsx)(n.a,{href:"http://reactcommunity.org/react-transition-group/transition",children:"http://reactcommunity.org/react-transition-group/transition"})," for detailed usage."]}),"\n",(0,o.jsxs)(n.h2,{id:"import",children:["Import",(0,o.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,o.jsx)(n.svg,{children:(0,o.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import {\n  Zoom,\n} from '@tonic-ui/react';\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"usage",children:["Usage",(0,o.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usage",children:(0,o.jsx)(n.svg,{children:(0,o.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(n.h3,{id:"zoom",children:["Zoom",(0,o.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#zoom",children:(0,o.jsx)(n.svg,{children:(0,o.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Zoom"})," transition is used to zoom in and out of a component."]}),"\n",(0,o.jsx)(i.Z,Object.assign({},{component:O,file:{data:'import {\n  Flex,\n  Space,\n  Switch,\n  Text,\n  TextLabel,\n  Zoom,\n} from \'@tonic-ui/react\';\nimport { useToggle } from \'@tonic-ui/react-hooks\';\nimport React from \'react\';\nimport SkeletonBlock from \'@/components/SkeletonBlock\';\nimport SkeletonContent from \'@/components/SkeletonContent\';\n\nconst App = () => {\n  const [isOpen, onToggle] = useToggle(false);\n\n  return (\n    <Flex direction="column" rowGap="4x">\n      <TextLabel display="inline-flex" alignItems="center">\n        <Switch checked={isOpen} onChange={() => onToggle()} size="md" />\n        <Space width="2x" />\n        <Text>Show</Text>\n      </TextLabel>\n      <Zoom\n        in={isOpen}\n        unmountOnExit={false}\n      >\n        <SkeletonContent>\n          <SkeletonBlock />\n        </SkeletonContent>\n      </Zoom>\n    </Flex>\n  );\n};\n\nexport default App;',path:"pages/components/transitions/zoom/index.page.mdx"},sandbox:{files:{"src/components/SkeletonBlock.js":'import {\n  Flex,\n  Skeleton,\n} from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst SkeletonBlock = (props) => (\n  <Flex {...props}>\n    <Flex flex="none" mr="4x" alignItems="center">\n      <Skeleton variant="circle" width="10x" height="10x" />\n    </Flex>\n    <Flex flex="auto" flexDirection="column" rowGap="2x">\n      <Skeleton />\n      <Skeleton />\n      <Skeleton />\n    </Flex>\n  </Flex>\n);\n\nexport default SkeletonBlock;',"src/components/SkeletonContent.js":"import {\n  Box,\n  useColorMode,\n  useColorStyle,\n} from '@tonic-ui/react';\nimport React from 'react';\n\nconst SkeletonContent = (props) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n  const styleProps = {\n    light: {\n      color: 'black:primary',\n      bg: 'white',\n      borderWidth: 1,\n      borderStyle: 'solid',\n      borderColor: 'gray:20',\n      boxShadow: colorStyle?.shadow?.thick,\n    },\n    dark: {\n      color: 'white:primary',\n      bg: 'gray:90',\n      borderWidth: 1,\n      borderStyle: 'solid',\n      borderColor: 'gray:80',\n      boxShadow: colorStyle?.shadow?.thick,\n    },\n  }[colorMode];\n\n  return (\n    <Box p=\"4x\" {...styleProps} {...props} />\n  );\n};\n\nexport default SkeletonContent;"},raw:'import {\n  Flex,\n  Space,\n  Switch,\n  Text,\n  TextLabel,\n  Zoom,\n} from \'@tonic-ui/react\';\nimport { useToggle } from \'@tonic-ui/react-hooks\';\nimport React from \'react\';\nimport SkeletonBlock from \'@/components/SkeletonBlock\';\nimport SkeletonContent from \'@/components/SkeletonContent\';\n\nconst App = () => {\n  const [isOpen, onToggle] = useToggle(false);\n\n  return (\n    <Flex direction="column" rowGap="4x">\n      <TextLabel display="inline-flex" alignItems="center">\n        <Switch checked={isOpen} onChange={() => onToggle()} size="md" />\n        <Space width="2x" />\n        <Text>Show</Text>\n      </TextLabel>\n      <Zoom\n        in={isOpen}\n        unmountOnExit={false}\n      >\n        <SkeletonContent>\n          <SkeletonBlock />\n        </SkeletonContent>\n      </Zoom>\n    </Flex>\n  );\n};\n\nexport default App;',title:"Tonic UI"}})),"\n",(0,o.jsxs)(n.h2,{id:"props",children:["Props",(0,o.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#props",children:(0,o.jsx)(n.svg,{children:(0,o.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(n.h3,{id:"zoom-1",children:["Zoom",(0,o.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#zoom-1",children:(0,o.jsx)(n.svg,{children:(0,o.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{align:"left",children:"Name"}),(0,o.jsx)(n.th,{align:"left",children:"Type"}),(0,o.jsx)(n.th,{align:"left",children:"Default"}),(0,o.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"appear"}),(0,o.jsx)(n.td,{align:"left",children:"boolean"}),(0,o.jsx)(n.td,{align:"left",children:"false"}),(0,o.jsxs)(n.td,{align:"left",children:["By default the child component does not perform the enter transition when it first mounts, regardless of the value of ",(0,o.jsx)(n.code,{children:"in"}),". If you want this behavior, set both ",(0,o.jsx)(n.code,{children:"appear"})," and ",(0,o.jsx)(n.code,{children:"in"})," to true."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"children"}),(0,o.jsxs)(n.td,{align:"left",children:["ReactNode | ",(0,o.jsx)(n.code,{children:"(state, props) => ReactNode"})]}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsx)(n.td,{align:"left",children:"A function child can be used instead of a React element. This function is called with the current transition state ('entering', 'entered', 'exiting', 'exited'), ref, style, and context specific props for a component."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"easing"}),(0,o.jsxs)(n.td,{align:"left",children:["string | ",(0,o.jsx)(n.code,{children:"{ enter?: string, exit?: string }"})]}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"{ enter: easing.easeInOut, exit: easing.easeInOut }"})}),(0,o.jsx)(n.td,{align:"left",children:"The timing function that describes how intermediate values are calculated during a transition. You may specify a single timing function for all transitions, or individually with an object."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"in"}),(0,o.jsx)(n.td,{align:"left",children:"boolean"}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsxs)(n.td,{align:"left",children:["If ",(0,o.jsx)(n.code,{children:"true"}),", the component will transition in."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"mountOnEnter"}),(0,o.jsx)(n.td,{align:"left",children:"boolean"}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsxs)(n.td,{align:"left",children:["If ",(0,o.jsx)(n.code,{children:"true"}),', it will "lazy mount" the component on the first ',(0,o.jsx)(n.code,{children:"in={true}"}),". After the first enter transition the component will stay mounted, even on the 'exited' state, unless you also specify ",(0,o.jsx)(n.code,{children:"unmountOnExit"}),". By default the child component is mounted immediately along with the parent transition component."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"timeout"}),(0,o.jsxs)(n.td,{align:"left",children:["number | ",(0,o.jsx)(n.code,{children:"{ appear?: number, enter?: number, exit?: number }"})]}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"{ enter: duration.enterScreen, exit: duration.levingScreen }"})}),(0,o.jsx)(n.td,{align:"left",children:"The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"unmountOnExit"}),(0,o.jsx)(n.td,{align:"left",children:"boolean"}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsxs)(n.td,{align:"left",children:["If ",(0,o.jsx)(n.code,{children:"true"}),", it will unmount the child component when ",(0,o.jsx)(n.code,{children:"in={false}"})," and the animation has finished. By default the child component stays mounted after it reaches the 'exited' state."]})]})]})]})]})}var I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.ah)(),e.components).wrapper;return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(T,e)})):T(e)}},96835:function(e,n,t){"use strict";t.d(n,{Z:function(){return T}});var o=t(27216),r=t(40596),i=t(49857),l=t(73645),a=t(99870),c=t(62272),s=t(14594),d=t(65019),u=t(37384),h=t(99554),m=t(69111),f=t(5632),p=t(2784),x=t(65245);function g(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=Array(n);t<n;t++)o[t]=e[t];return o}var j=function(e){var n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style.position="absolute",n.style.left="-9999px",document.body.appendChild(n);var t=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);n.select(),document.execCommand("copy"),document.body.removeChild(n),t&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(t))},y=function(e){var n,t=function(e){if(Array.isArray(e))return e}(n=(0,p.useState)(!1))||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var o,r,i,l,a=[],c=!0,s=!1;try{for(i=(t=t.call(e)).next;!(c=(o=i.call(t)).done)&&(a.push(o.value),2!==a.length);c=!0);}catch(e){s=!0,r=e}finally{try{if(!c&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(s)throw r}}return a}}(n,2)||function(e,n){if(e){if("string"==typeof e)return g(e,2);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(e,2)}}(n,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),o=t[0],r=t[1];return{value:e,onCopy:function(){j(e),r(!0),setTimeout(function(){return r(!1)},1500)},hasCopied:o}},b=t(63768),v=t(76761),k=t(73205),S=t(98107),Z=t(44285),w=["component","defaultExpanded","expanded","file","sandbox"];function E(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var o,r,i,l,a=[],c=!0,s=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(o=i.call(t)).done)&&(a.push(o.value),a.length!==n);c=!0);}catch(e){s=!0,r=e}finally{try{if(!c&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(s)throw r}}return a}}(e,n)||function(e,n){if(e){if("string"==typeof e)return C(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return C(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=Array(n);t<n;t++)o[t]=e[t];return o}var O=function(e){var n,t=e.component,g=e.defaultExpanded,j=e.expanded,C=e.file,O=e.sandbox;!function(e,n){if(null!=e){var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}}}(e,w);var T=(0,f.useRouter)(),I=E((0,p.useReducer)(function(e){return!e},!1),2),A=I[0],z=I[1],B=(0,o.u)(),F=E((0,r.Z)(),1)[0],N={dark:v.y,light:v.q}[F],R=E((0,d.Z)(null!=j?j:void 0!==g&&g),2),_=R[0],M=R[1],H=y(null==C?void 0:C.data),P=H.onCopy,U=H.hasCopied,L=(0,p.useCallback)(function(){P()},[P]),G=(0,p.useCallback)(function(){(0,k.b)(O)},[O]),Y=(0,p.useCallback)(function(){z(),M(!1)},[z,M]);return((0,p.useEffect)(function(){void 0!==j&&j!==_&&M(j)},[j,_,M]),t)?p.createElement(x.nu,{code:null==C?void 0:C.data,disabled:!0,language:"jsx",theme:N},p.createElement(i.Z,{border:1,borderColor:{dark:"gray:70",light:"gray:30"}[F],p:"4x"},p.createElement(i.Z,{fontSize:"sm",lineHeight:"sm"},p.createElement(p.Fragment,{key:A},p.createElement(t,null)))),p.createElement(l.Z,{columnGap:"2x",justifyContent:"flex-end",mb:"4x"},p.createElement(Z.Z,{"data-track":_?"CodeBlock|hide_source|".concat((0,S.Z)({path:T.pathname})):"CodeBlock|show_source|".concat((0,S.Z)({path:T.pathname})),onClick:M},p.createElement(a.Z,{label:_?"Hide the source":"Show the source"},p.createElement(u.Z,null))),p.createElement(Z.Z,{"data-track":"CodeBlock|copy_source|".concat((0,S.Z)({path:T.pathname})),onClick:L},p.createElement(a.Z,{label:U?"Copied":"Copy the source"},p.createElement(h.Z,null))),p.createElement(Z.Z,{"data-track":"CodeBlock|edit_in_codesandbox|".concat(T.pathname),onClick:G},p.createElement(a.Z,{label:"Edit in CodeSandbox"},p.createElement(b.Z,null))),p.createElement(Z.Z,{"data-track":"CodeBlock|reset|".concat(T.pathname),onClick:Y},p.createElement(a.Z,{label:"Reset the demo"},p.createElement(m.Z,null)))),p.createElement(c.Z,{in:_},p.createElement(s.Z,{in:_,unmountOnExit:!0},p.createElement(i.Z,{as:x.uz,sx:{fontFamily:"mono",fontSize:"md",lineHeight:"md",mb:"4x","& > .prism-code":{padding:"".concat(null==B?void 0:null===(n=B.space)||void 0===n?void 0:n["4x"]," !important"),overflowX:"auto"}}})))):p.createElement(x.nu,{code:null==C?void 0:C.data,disabled:!0,language:"jsx",theme:N},p.createElement(i.Z,{as:x.uz,sx:{fontFamily:"mono",fontSize:"sm","& > .prism-code":{overflowX:"auto"}}}))};O.displayName="Demo";var T=O},47133:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/transitions/zoom",function(){return t(47241)}])},99554:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}}),t(2784);var o=t(75928),r=t(52903),i=(0,o.Z)((0,r.tZ)("path",{d:"M12 0h-6c-0.5 0-1 0.5-1 1v3h-3c-0.5 0-1 0.5-1 1v10c0 0.5 0.5 1 1 1h8c0.5 0 1-0.5 1-1v-3h3c0.5 0 1-0.5 1-1v-8l-3-3zM12 1.4l1.6 1.6h-1.6v-1.6zM10 15h-8v-10h5v3h3v7zM8 7v-1.6l1.6 1.6h-1.6zM14 11h-3v-4l-3-3h-2v-3h5v3h3v7z"}),"FileCopyOIcon")},69111:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}}),t(2784);var o=t(75928),r=t(52903),i=(0,o.Z)((0,r.tZ)("path",{d:"M10 7l1.995-1.995c-0.921-1.215-2.365-1.992-3.99-1.992-2.758 0-4.993 2.235-4.993 4.993s2.235 4.993 4.993 4.993c1.839 0 3.446-0.995 4.313-2.475l0.013-0.024 1.732 1c-1.233 2.111-3.487 3.507-6.068 3.507-3.867 0-7.003-3.135-7.003-7.003s3.135-7.003 7.003-7.003c2.183 0 4.133 0.999 5.417 2.565l0.010 0.012 1.579-1.579v5z"}),"RedoIcon")}},function(e){e.O(0,[4575,2888,9774,179],function(){return e(e.s=47133)}),_N_E=e.O()}]);