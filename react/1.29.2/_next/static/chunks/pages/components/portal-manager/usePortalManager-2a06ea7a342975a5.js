(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6523],{65401:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return p}});var r=o(52322),t=o(45392),a=o(16959),l=o(67569),s=o(2784),i=["onClose"];function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}var c=(0,s.forwardRef)(function(e,n){var o=e.onClose,r=function(e,n){if(null==e)return{};var o,r,t=function(e,n){if(null==e)return{};var o,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],!(n.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}(e,i);return s.createElement(l.Modal,d({closeOnEsc:!0,closeOnOutsideClick:!0,isOpen:!0,onClose:o,size:"sm"},r),s.createElement(l.ModalOverlay,null),s.createElement(l.ModalContent,null,s.createElement(l.ModalHeader,null,"Modal Header"),s.createElement(l.ModalBody,null,"Modal Body"),s.createElement(l.ModalFooter,null,s.createElement(l.Button,{onClick:o},"Close"))))});c.displayName="MyModal";var h=function(){var e=(0,l.usePortalManager)(),n=(0,s.useCallback)(function(){e(function(e){return s.createElement(c,{onClose:e})})},[e]);return s.createElement(l.Button,{onClick:n},"Open Modal")};function u(e){var n=Object.assign({div:"div",h1:"h1",p:"p",code:"code",h2:"h2",a:"a",svg:"svg",use:"use",pre:"pre",h3:"h3",h4:"h4",em:"em"},(0,t.ah)(),e.components);return(0,r.jsxs)(n.div,{className:"main-content",id:"main-content",children:["\n","\n",(0,r.jsx)(n.h1,{id:"useportalmanager",children:"usePortalManager"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"usePortalManager"})," Hook allows you to create and remove portals in your React application."]}),"\n",(0,r.jsxs)(n.h2,{id:"import",children:["Import",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { usePortalManager } from '@tonic-ui/react';\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"usage",children:["Usage",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usage",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const portal = usePortalManager();\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"usePortalManager"})," Hook returns an object with the following methods."]}),"\n",(0,r.jsxs)(n.h3,{id:"portalrender-options",children:["portal(render, [options=","{}","])",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#portalrender-options",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"add"})," method creates a new portal and returns a unique id for the portal."]}),"\n",(0,r.jsxs)(n.h4,{id:"aliases",children:["Aliases",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#aliases",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)("dl",{children:(0,r.jsxs)("dd",{children:["portal.add(message, [options=","{}","])*"]})}),"\n",(0,r.jsxs)(n.h4,{id:"parameters",children:["Parameters",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#parameters",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)("dl",{children:[(0,r.jsxs)("dd",{children:[(0,r.jsx)(n.code,{children:"render"})," ",(0,r.jsx)(n.em,{children:"(Function)"}),":  A function that returns a React element. This function is passed a ",(0,r.jsx)(n.code,{children:"close"})," function that can be used to close the portal."]}),(0,r.jsxs)("dd",{children:[(0,r.jsx)(n.code,{children:"[options={}]"})," ",(0,r.jsx)(n.em,{children:"(Object)"}),": An optional object that provides additional options for the portal."]}),(0,r.jsxs)("dd",{children:[(0,r.jsx)(n.code,{children:"[options.id]"})," ",(0,r.jsx)(n.em,{children:"(string)"}),": A unique identifier for the portal. If not provided, a unique ID will be generated."]}),(0,r.jsxs)("dd",{children:[(0,r.jsx)(n.code,{children:"[options.appendToParentPortal=false]"})," ",(0,r.jsx)(n.em,{children:"(boolean)"}),": If ",(0,r.jsx)(n.code,{children:"true"}),", the portal will be appended to the parent portal. If ",(0,r.jsx)(n.code,{children:"false"}),", the portal will be appended to the body. Defaults to ",(0,r.jsx)(n.code,{children:"false"}),"."]}),(0,r.jsxs)("dd",{children:[(0,r.jsx)(n.code,{children:"[options.containerRef=null]"})," ",(0,r.jsx)(n.em,{children:"(React.RefObject)"}),": A ",(0,r.jsx)(n.code,{children:"ref"})," to the container element. If provided, the portal will be appended to the container element. Otherwise, the portal will be appended to the body. Defaults to ",(0,r.jsx)(n.code,{children:"null"}),"."]})]}),"\n",(0,r.jsxs)(n.h4,{id:"returns",children:["Returns",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#returns",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)("dl",{children:(0,r.jsxs)("dd",{children:[(0,r.jsx)(n.em,{children:"(string)"}),": A unique identifier for the portal."]})}),"\n",(0,r.jsxs)(n.h3,{id:"portalremoveid",children:["portal.remove(id)",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#portalremoveid",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"remove"})," method removes a portal by its id."]}),"\n",(0,r.jsxs)(n.h4,{id:"parameters-1",children:["Parameters",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#parameters-1",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)("dl",{children:(0,r.jsxs)("dd",{children:[(0,r.jsx)(n.code,{children:"id"})," ",(0,r.jsx)(n.em,{children:"(string)"}),": The id of the portal to be removed."]})}),"\n",(0,r.jsxs)(n.h4,{id:"returns-1",children:["Returns",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#returns-1",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)("dl",{children:(0,r.jsx)("dd",{children:"This method does not return anything."})}),"\n",(0,r.jsxs)(n.h2,{id:"demos",children:["Demos",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#demos",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Here is an example of how to use ",(0,r.jsx)(n.code,{children:"usePortalManager"})," to create and remove a modal:"]}),"\n",(0,r.jsx)(a.Z,{component:h,file:{data:"import {\n  Button,\n  Modal,\n  ModalBody,\n  ModalContent,\n  ModalFooter,\n  ModalHeader,\n  ModalOverlay,\n  usePortalManager,\n} from '@tonic-ui/react';\nimport React, { forwardRef, useCallback } from 'react';\n\nconst MyModal = forwardRef((\n  {\n    onClose,\n    ...rest\n  },\n  ref,\n) => (\n  <Modal\n    closeOnEsc\n    closeOnOutsideClick\n    isOpen\n    onClose={onClose}\n    size=\"sm\"\n    {...rest}\n  >\n    <ModalOverlay />\n    <ModalContent>\n      <ModalHeader>\n        Modal Header\n      </ModalHeader>\n      <ModalBody>\n        Modal Body\n      </ModalBody>\n      <ModalFooter>\n        <Button onClick={onClose}>Close</Button>\n      </ModalFooter>\n    </ModalContent>\n  </Modal>\n));\n\nMyModal.displayName = 'MyModal';\n\nconst App = () => {\n  const portal = usePortalManager();\n  const openModal = useCallback(() => {\n    portal((close) => (\n      <MyModal onClose={close} />\n    ));\n  }, [portal]);\n\n  return (\n    <Button onClick={openModal}>\n      Open Modal\n    </Button>\n  );\n};\n\nexport default App;",path:"pages/components/portal-manager/usePortalManager.page.mdx"},sandbox:{files:{},raw:"import {\n  Button,\n  Modal,\n  ModalBody,\n  ModalContent,\n  ModalFooter,\n  ModalHeader,\n  ModalOverlay,\n  usePortalManager,\n} from '@tonic-ui/react';\nimport React, { forwardRef, useCallback } from 'react';\n\nconst MyModal = forwardRef((\n  {\n    onClose,\n    ...rest\n  },\n  ref,\n) => (\n  <Modal\n    closeOnEsc\n    closeOnOutsideClick\n    isOpen\n    onClose={onClose}\n    size=\"sm\"\n    {...rest}\n  >\n    <ModalOverlay />\n    <ModalContent>\n      <ModalHeader>\n        Modal Header\n      </ModalHeader>\n      <ModalBody>\n        Modal Body\n      </ModalBody>\n      <ModalFooter>\n        <Button onClick={onClose}>Close</Button>\n      </ModalFooter>\n    </ModalContent>\n  </Modal>\n));\n\nMyModal.displayName = 'MyModal';\n\nconst App = () => {\n  const portal = usePortalManager();\n  const openModal = useCallback(() => {\n    portal((close) => (\n      <MyModal onClose={close} />\n    ));\n  }, [portal]);\n\n  return (\n    <Button onClick={openModal}>\n      Open Modal\n    </Button>\n  );\n};\n\nexport default App;",title:"Tonic UI"}})]})}var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.ah)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}},16959:function(e,n,o){"use strict";o.d(n,{Z:function(){return y}});var r=o(67569),t=o(49427),a=o(5632),l=o(2784),s=o(65245),i=o(16245),d=o(76761),c=o(73205),h=o(98107),u=["size"];function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}var m=(0,l.forwardRef)(function(e,n){var o=e.size,t=function(e,n){if(null==e)return{};var o,r,t=function(e,n){if(null==e)return{};var o,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],!(n.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}(e,u);return l.createElement(r.SVGIcon,p({size:o,viewBox:"0 0 1024 1024"},t),l.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"}))});m.displayName="CodeSandboxIcon";var f=o(44285);function x(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var r,t,a,l,s=[],i=!0,d=!1;try{if(a=(o=o.call(e)).next,0===n){if(Object(o)!==o)return;i=!1}else for(;!(i=(r=a.call(o)).done)&&(s.push(r.value),s.length!==n);i=!0);}catch(e){d=!0,t=e}finally{try{if(!i&&null!=o.return&&(l=o.return(),Object(l)!==l))return}finally{if(d)throw t}}return s}}(e,n)||function(e,n){if(e){if("string"==typeof e)return j(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);if("Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return j(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,n){(null==n||n>e.length)&&(n=e.length);for(var o=0,r=Array(n);o<n;o++)r[o]=e[o];return r}var M={fontFamily:'"SFMono-Medium", "SF Mono", "Segoe UI Mono", Menlo, Consolas, Courier, monospace',fontSize:14,overflowX:"auto"},b=function(e){var n=e.component,o=e.file,u=e.sandbox,p=(0,a.useRouter)(),j=x((0,l.useReducer)(function(e){return!e},!1),2),b=j[0],y=j[1],g=x((0,r.useColorMode)(),1)[0],v={dark:d.y,light:d.q}[g],k=x((0,t.useToggle)(!1),2),C=k[0],O=k[1],E=(0,i.Z)(null==o?void 0:o.data),w=E.onCopy,B=E.hasCopied,I=(0,l.useCallback)(function(){w()},[w]),H=(0,l.useCallback)(function(){(0,c.b)(u)},[u]),P=(0,l.useCallback)(function(){y(),O(!1)},[y,O]);return l.createElement(s.nu,{code:null==o?void 0:o.data,disabled:!0,language:"jsx",theme:v},l.createElement(r.Box,{border:1,borderColor:{dark:"gray:70",light:"gray:30"}[g],p:"4x"},l.createElement(r.Box,{fontSize:"sm",lineHeight:"sm"},l.createElement(l.Fragment,{key:b},l.createElement(n,null)))),l.createElement(r.Flex,{columnGap:"2x",justifyContent:"flex-end",mb:"4x"},l.createElement(f.Z,{"data-track":C?"CodeBlock|hide_source|".concat((0,h.Z)({path:p.pathname})):"CodeBlock|show_source|".concat((0,h.Z)({path:p.pathname})),onClick:O},l.createElement(r.Tooltip,{label:C?"Hide the source":"Show the source"},l.createElement(r.Icon,{icon:"code",size:{sm:"5x",md:"4x"}}))),l.createElement(f.Z,{"data-track":"CodeBlock|copy_source|".concat((0,h.Z)({path:p.pathname})),onClick:I},l.createElement(r.Tooltip,{label:B?"Copied":"Copy the source"},l.createElement(r.Icon,{icon:"file-copy-o",size:{sm:"5x",md:"4x"}}))),l.createElement(f.Z,{"data-track":"CodeBlock|edit_in_codesandbox|".concat(p.pathname),onClick:H},l.createElement(r.Tooltip,{label:"Edit in CodeSandbox"},l.createElement(m,{size:{sm:"5x",md:"4x"}}))),l.createElement(f.Z,{"data-track":"CodeBlock|reset|".concat(p.pathname),onClick:P},l.createElement(r.Tooltip,{label:"Reset the demo"},l.createElement(r.Icon,{icon:"redo",size:{sm:"5x",md:"4x"}})))),l.createElement(r.Fade,{in:C},l.createElement(r.Collapse,{in:C,unmountOnExit:!0},l.createElement(s.uz,{style:M}))))};b.displayName="Demo";var y=b},67638:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/portal-manager/usePortalManager",function(){return o(65401)}])}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=67638)}),_N_E=e.O()}]);