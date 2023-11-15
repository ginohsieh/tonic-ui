(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5217],{40741:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return index_page}});var l=n(52322),i=n(45392),o=n(83449),r=n(67569),s=n(2784),faq_use_portal=function(){return s.createElement(r.OverflowTooltip,{PopperProps:{usePortal:!0},label:"This is a tooltip"},"This text string will be truncated when exceeding its container width. To see this in action, try resizing your browser viewport. If the text overflows, a tooltip will appear, displaying the full content.")};function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}var function_as_child_component=function(){return s.createElement(r.OverflowTooltip,{label:"This is a tooltip"},function(e){var t=e.ref,n=e.style;return s.createElement(r.Flex,{alignItems:"center",columnGap:"2x"},s.createElement(r.Icon,{icon:"menu"}),s.createElement(r.Text,_extends({ref:t},n),"This text string will be truncated when exceeding its container width. To see this in action, try resizing your browser viewport. If the text overflows, a tooltip will appear, displaying the full content."))})},basic=function(){return s.createElement(s.Fragment,null,s.createElement(r.OverflowTooltip,{label:"This is a tooltip"},"This text string will be truncated when exceeding its container width. To see this in action, try resizing your browser viewport. If the text overflows, a tooltip will appear, displaying the full content."),s.createElement(r.Divider,{my:"4x"}),s.createElement(r.Box,{width:140.7},s.createElement(r.OverflowTooltip,{label:"This is a tooltip"},"This text string is truncted")),s.createElement(r.Divider,{my:"4x"}),s.createElement(r.OverflowTooltip,{label:"This is a tooltip"},"This text string is not truncated"))};function _createMdxContent(e){var t=Object.assign({div:"div",h1:"h1",p:"p",code:"code",h2:"h2",a:"a",svg:"svg",use:"use",pre:"pre",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,l.jsxs)(t.div,{className:"main-content",id:"main-content",children:["\n","\n","\n","\n",(0,l.jsx)(t.h1,{id:"overflowtooltip",children:"OverflowTooltip"}),"\n",(0,l.jsxs)(t.p,{children:["The ",(0,l.jsx)(t.code,{children:"OverflowTooltip"})," component is a tooltip that only displays when text overflows its container."]}),"\n",(0,l.jsxs)(t.h2,{id:"import",children:["Import",(0,l.jsx)(t.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,l.jsx)(t.svg,{children:(0,l.jsx)(t.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-js",children:"import { OverflowTooltip } from '@tonic-ui/react';\n"})}),"\n",(0,l.jsxs)(t.h2,{id:"usage",children:["Usage",(0,l.jsx)(t.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usage",children:(0,l.jsx)(t.svg,{children:(0,l.jsx)(t.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsx)(t.p,{children:"If the text overflows its container, it will be truncated, and an ellipsis will be added. When you hover or focus on the ellipsis text, a tooltip will appear."}),"\n",(0,l.jsx)(o.Z,{component:basic,file:{data:'import { Box, Divider, OverflowTooltip } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => {\n  return (\n    <>\n      <OverflowTooltip\n        label="This is a tooltip"\n      >\n        This text string will be truncated when exceeding its container width. To see this in action, try resizing your browser viewport. If the text overflows, a tooltip will appear, displaying the full content.\n      </OverflowTooltip>\n      <Divider my="4x" />\n      <Box width={140.7}>\n        <OverflowTooltip\n          label="This is a tooltip"\n        >\n          This text string is truncted\n        </OverflowTooltip>\n      </Box>\n      <Divider my="4x" />\n      <OverflowTooltip\n        label="This is a tooltip"\n      >\n        This text string is not truncated\n      </OverflowTooltip>\n    </>\n  );\n};\n\nexport default App;',path:"pages/components/overflow-tooltip/index.page.mdx"},sandbox:{files:{},raw:'import { Box, Divider, OverflowTooltip } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => {\n  return (\n    <>\n      <OverflowTooltip\n        label="This is a tooltip"\n      >\n        This text string will be truncated when exceeding its container width. To see this in action, try resizing your browser viewport. If the text overflows, a tooltip will appear, displaying the full content.\n      </OverflowTooltip>\n      <Divider my="4x" />\n      <Box width={140.7}>\n        <OverflowTooltip\n          label="This is a tooltip"\n        >\n          This text string is truncted\n        </OverflowTooltip>\n      </Box>\n      <Divider my="4x" />\n      <OverflowTooltip\n        label="This is a tooltip"\n      >\n        This text string is not truncated\n      </OverflowTooltip>\n    </>\n  );\n};\n\nexport default App;',title:"Tonic UI"}}),"\n",(0,l.jsxs)(t.p,{children:["In the second example, a function is passed as a child of the ",(0,l.jsx)(t.code,{children:"OverflowTooltip"})," component. The function is called with an object containing a ",(0,l.jsx)(t.code,{children:"ref"})," and a ",(0,l.jsx)(t.code,{children:"style"})," property, which should be spread to the element that needs to be truncated. In this case, a ",(0,l.jsx)(t.code,{children:"Text"})," component is used to display the text, and the ",(0,l.jsx)(t.code,{children:"ref"})," and ",(0,l.jsx)(t.code,{children:"style"})," props are spread to it. This allows the ",(0,l.jsx)(t.code,{children:"OverflowTooltip"})," component to detect when the text overflows and display a tooltip."]}),"\n",(0,l.jsx)(o.Z,{component:function_as_child_component,file:{data:'import { Icon, Flex, OverflowTooltip, Text } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => {\n  return (\n    <OverflowTooltip\n      label="This is a tooltip"\n    >\n      {({ ref, style }) => (\n        <Flex alignItems="center" columnGap="2x">\n          <Icon icon="menu" />\n          <Text ref={ref} {...style}>\n            This text string will be truncated when exceeding its container width. To see this in action, try resizing your browser viewport. If the text overflows, a tooltip will appear, displaying the full content.\n          </Text>\n        </Flex>\n      )}\n    </OverflowTooltip>\n  );\n};\n\nexport default App;',path:"pages/components/overflow-tooltip/index.page.mdx"},sandbox:{files:{},raw:'import { Icon, Flex, OverflowTooltip, Text } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => {\n  return (\n    <OverflowTooltip\n      label="This is a tooltip"\n    >\n      {({ ref, style }) => (\n        <Flex alignItems="center" columnGap="2x">\n          <Icon icon="menu" />\n          <Text ref={ref} {...style}>\n            This text string will be truncated when exceeding its container width. To see this in action, try resizing your browser viewport. If the text overflows, a tooltip will appear, displaying the full content.\n          </Text>\n        </Flex>\n      )}\n    </OverflowTooltip>\n  );\n};\n\nexport default App;',title:"Tonic UI"}}),"\n",(0,l.jsxs)(t.h2,{id:"commonly-asked-questions",children:["Commonly Asked Questions",(0,l.jsx)(t.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#commonly-asked-questions",children:(0,l.jsx)(t.svg,{children:(0,l.jsx)(t.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(t.h3,{id:"preventing-tooltip-cut-off-with-popperprops",children:["Preventing tooltip cut-off with ",(0,l.jsx)(t.code,{children:"PopperProps"}),(0,l.jsx)(t.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#preventing-tooltip-cut-off-with-popperprops",children:(0,l.jsx)(t.svg,{children:(0,l.jsx)(t.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(t.p,{children:["By default, the ",(0,l.jsx)(t.code,{children:"OverflowTooltip"})," component positions the tooltip relative to its parent container. In some cases, the tooltip content might be cut off when it extends outside the container that holds it."]}),"\n",(0,l.jsxs)(t.p,{children:["To mitigate this issue, you can pass ",(0,l.jsx)(t.code,{children:"PopperProps={{ usePortal: true }}"})," to ",(0,l.jsx)(t.code,{children:"OverflowTooltip"})," to make it positioned on the document root."]}),"\n",(0,l.jsx)(o.Z,{component:faq_use_portal,file:{data:"import { OverflowTooltip } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => {\n  return (\n    <OverflowTooltip\n      PopperProps={{ usePortal: true }}\n      label=\"This is a tooltip\"\n    >\n      This text string will be truncated when exceeding its container width. To see this in action, try resizing your browser viewport. If the text overflows, a tooltip will appear, displaying the full content.\n    </OverflowTooltip>\n  );\n};\n\nexport default App;",path:"pages/components/overflow-tooltip/index.page.mdx"},sandbox:{files:{},raw:"import { OverflowTooltip } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => {\n  return (\n    <OverflowTooltip\n      PopperProps={{ usePortal: true }}\n      label=\"This is a tooltip\"\n    >\n      This text string will be truncated when exceeding its container width. To see this in action, try resizing your browser viewport. If the text overflows, a tooltip will appear, displaying the full content.\n    </OverflowTooltip>\n  );\n};\n\nexport default App;",title:"Tonic UI"}}),"\n",(0,l.jsxs)(t.h2,{id:"props",children:["Props",(0,l.jsx)(t.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#props",children:(0,l.jsx)(t.svg,{children:(0,l.jsx)(t.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(t.h3,{id:"overflowtooltip-1",children:["OverflowTooltip",(0,l.jsx)(t.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#overflowtooltip-1",children:(0,l.jsx)(t.svg,{children:(0,l.jsx)(t.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{align:"left",children:"Name"}),(0,l.jsx)(t.th,{align:"left",children:"Type"}),(0,l.jsx)(t.th,{align:"left",children:"Default"}),(0,l.jsx)(t.th,{align:"left",children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{align:"left",children:"PopperComponent"}),(0,l.jsx)(t.td,{align:"left",children:"ElementType"}),(0,l.jsx)(t.td,{align:"left",children:"Popper"}),(0,l.jsx)(t.td,{align:"left",children:"The component used for the popover."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{align:"left",children:"PopperProps"}),(0,l.jsx)(t.td,{align:"left",children:"object"}),(0,l.jsx)(t.td,{align:"left"}),(0,l.jsx)(t.td,{align:"left",children:"Props applied to the Popper component."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{align:"left",children:"TooltipArrowComponent"}),(0,l.jsx)(t.td,{align:"left",children:"ElementType"}),(0,l.jsx)(t.td,{align:"left",children:"TooltipArrow"}),(0,l.jsx)(t.td,{align:"left",children:"The component used for the tooltip arrow."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{align:"left",children:"TooltipArrowProps"}),(0,l.jsx)(t.td,{align:"left",children:"object"}),(0,l.jsx)(t.td,{align:"left"}),(0,l.jsxs)(t.td,{align:"left",children:["Props applied to the ",(0,l.jsx)(t.code,{children:"TooltipArrow"})," component."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{align:"left",children:"TransitionComponent"}),(0,l.jsx)(t.td,{align:"left",children:"ElementType"}),(0,l.jsx)(t.td,{align:"left",children:"Grow"}),(0,l.jsx)(t.td,{align:"left",children:"The component used for the transition."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{align:"left",children:"TransitionProps"}),(0,l.jsx)(t.td,{align:"left",children:"object"}),(0,l.jsx)(t.td,{align:"left"}),(0,l.jsxs)(t.td,{align:"left",children:["Props applied to the ",(0,l.jsx)(t.a,{href:"http://reactcommunity.org/react-transition-group/transition#Transition-props",children:"Transition"})," element."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{align:"left",children:"TransitionProps.appear"}),(0,l.jsx)(t.td,{align:"left",children:"boolean"}),(0,l.jsx)(t.td,{align:"left",children:"true"}),(0,l.jsx)(t.td,{align:"left"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{align:"left",children:"arrow"}),(0,l.jsx)(t.td,{align:"left",children:"boolean"}),(0,l.jsx)(t.td,{align:"left",children:"true"}),(0,l.jsxs)(t.td,{align:"left",children:["If ",(0,l.jsx)(t.code,{children:"true"}),", adds an arrow to the tooltip."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{align:"left",children:"children"}),(0,l.jsxs)(t.td,{align:"left",children:["ReactNode | ",(0,l.jsx)(t.code,{children:"(context) => ReactNode"})]}),(0,l.jsx)(t.td,{align:"left"}),(0,l.jsx)(t.td,{align:"left"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{align:"left",children:"closeOnClick"}),(0,l.jsx)(t.td,{align:"left",children:"boolean"}),(0,l.jsx)(t.td,{align:"left",children:"true"}),(0,l.jsxs)(t.td,{align:"left",children:["If ",(0,l.jsx)(t.code,{children:"true"}),", close the tooltip on click."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{align:"left",children:"closeOnEsc"}),(0,l.jsx)(t.td,{align:"left",children:"boolean"}),(0,l.jsx)(t.td,{align:"left",children:"true"}),(0,l.jsxs)(t.td,{align:"left",children:["If ",(0,l.jsx)(t.code,{children:"true"}),", close the tooltip when pressing the escape key."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{align:"left",children:"closeOnMouseDown"}),(0,l.jsx)(t.td,{align:"left",children:"boolean"}),(0,l.jsx)(t.td,{align:"left",children:"false"}),(0,l.jsxs)(t.td,{align:"left",children:["If ",(0,l.jsx)(t.code,{children:"true"}),", close the tooltip while the mouse is down."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{align:"left",children:"defaultIsOpen"}),(0,l.jsx)(t.td,{align:"left",children:"boolean"}),(0,l.jsx)(t.td,{align:"left",children:"false"}),(0,l.jsx)(t.td,{align:"left",children:"Whether the tooltip will be open by default."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{align:"left",children:"disabled"}),(0,l.jsx)(t.td,{align:"left",children:"boolean"}),(0,l.jsx)(t.td,{align:"left"}),(0,l.jsxs)(t.td,{align:"left",children:["If ",(0,l.jsx)(t.code,{children:"true"}),", the tooltip will not display."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{align:"left",children:"enterDelay"}),(0,l.jsx)(t.td,{align:"left",children:"number"}),(0,l.jsx)(t.td,{align:"left",children:"100"}),(0,l.jsx)(t.td,{align:"left",children:"The delay in milliseconds before the tooltip appears."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{align:"left",children:"followCursor"}),(0,l.jsx)(t.td,{align:"left",children:"boolean"}),(0,l.jsx)(t.td,{align:"left"}),(0,l.jsxs)(t.td,{align:"left",children:["If ",(0,l.jsx)(t.code,{children:"true"}),", the tooltip will follow the cursor."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{align:"left",children:"isOpen"}),(0,l.jsx)(t.td,{align:"left",children:"boolean"}),(0,l.jsx)(t.td,{align:"left"}),(0,l.jsxs)(t.td,{align:"left",children:["If ",(0,l.jsx)(t.code,{children:"true"}),", show the tooltip."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{align:"left",children:"label"}),(0,l.jsx)(t.td,{align:"left",children:"string | ReactNode"}),(0,l.jsx)(t.td,{align:"left"}),(0,l.jsx)(t.td,{align:"left",children:"If the tooltip label is a blank or empty string, the tooltip will not display."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{align:"left",children:"leaveDelay"}),(0,l.jsx)(t.td,{align:"left",children:"number"}),(0,l.jsx)(t.td,{align:"left",children:"0"}),(0,l.jsx)(t.td,{align:"left",children:"The delay in milliseconds before the tooltip disappears."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{align:"left",children:"nextToCursor"}),(0,l.jsx)(t.td,{align:"left",children:"boolean"}),(0,l.jsx)(t.td,{align:"left"}),(0,l.jsxs)(t.td,{align:"left",children:["If ",(0,l.jsx)(t.code,{children:"true"}),", the tooltip will be positioned next to the cursor."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{align:"left",children:"offset"}),(0,l.jsx)(t.td,{align:"left",children:"[skidding, distance]"}),(0,l.jsx)(t.td,{align:"left",children:"[0, 8]"}),(0,l.jsx)(t.td,{align:"left",children:"The skidding and distance of the tooltip."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{align:"left",children:"onClose"}),(0,l.jsx)(t.td,{align:"left",children:"function"}),(0,l.jsx)(t.td,{align:"left"}),(0,l.jsx)(t.td,{align:"left",children:"Callback fired when the tooltip is closed."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{align:"left",children:"onOpen"}),(0,l.jsx)(t.td,{align:"left",children:"function"}),(0,l.jsx)(t.td,{align:"left"}),(0,l.jsx)(t.td,{align:"left",children:"Callback fired when the tooltip is opened."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{align:"left",children:"placement"}),(0,l.jsx)(t.td,{align:"left",children:"PopperJS.Placement"}),(0,l.jsx)(t.td,{align:"left",children:"'bottom'"}),(0,l.jsx)(t.td,{align:"left",children:"Position the tooltip relative to the trigger element as well as surrounding elements. One of: 'top', 'bottom', 'right', 'left', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'right-start', 'right-end', 'left-start', 'left-end'"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{align:"left",children:"shouldWrapChildren"}),(0,l.jsx)(t.td,{align:"left",children:"boolean"}),(0,l.jsx)(t.td,{align:"left",children:"false"}),(0,l.jsxs)(t.td,{align:"left",children:["If ",(0,l.jsx)(t.code,{children:"true"}),", the tooltip will be wrapped in a ",(0,l.jsx)(t.code,{children:"Box"})," component. Otherwise, you have to ensure tooltip has only one child node."]})]})]})]})]})}var index_page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},(0,i.ah)(),e.components).wrapper;return t?(0,l.jsx)(t,Object.assign({},e,{children:(0,l.jsx)(_createMdxContent,e)})):_createMdxContent(e)}},83449:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var l=n(67569),i=n(49427),o=n(5632),r=n(2784),s=n(85175),a=n(82821),c=n(90622),d=n(52057),h=n(63651),p=["size"];function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}var f=(0,r.forwardRef)(function(e,t){var n=e.size,i=function(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,p);return r.createElement(l.SVGIcon,_extends({size:n,viewBox:"0 0 1024 1024"},i),r.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"}))});f.displayName="CodeSandboxIcon";var x=n(94981);function _slicedToArray(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,l,i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var o=[],r=!0,s=!1;try{for(i=i.call(e);!(r=(n=i.next()).done)&&(o.push(n.value),!t||o.length!==t);r=!0);}catch(e){s=!0,l=e}finally{try{r||null==i.return||i.return()}finally{if(s)throw l}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=Array(t);n<t;n++)l[n]=e[n];return l}var u={fontFamily:'"SFMono-Medium", "SF Mono", "Segoe UI Mono", Menlo, Consolas, Courier, monospace',fontSize:14,overflowX:"auto"},Demo=function(e){var t=e.component,n=e.file,p=e.sandbox,g=(0,o.useRouter)(),j=_slicedToArray((0,r.useReducer)(function(e){return!e},!1),2),m=j[0],w=j[1],b=_slicedToArray((0,l.useColorMode)(),1)[0],v={dark:c.y,light:c.q}[b],T=_slicedToArray((0,i.useToggle)(!1),2),y=T[0],O=T[1],k=(0,a.Z)(null==n?void 0:n.data),I=k.onCopy,E=k.hasCopied,_=(0,r.useCallback)(function(){I()},[I]),C=(0,r.useCallback)(function(){(0,d.b)(p)},[p]),P=(0,r.useCallback)(function(){w(),O(!1)},[w,O]);return r.createElement(s.nu,{code:null==n?void 0:n.data,disabled:!0,language:"jsx",theme:v},r.createElement(l.Box,{border:1,borderColor:{dark:"gray:70",light:"gray:30"}[b],p:"4x"},r.createElement(l.Box,{fontSize:"sm",lineHeight:"sm"},r.createElement(r.Fragment,{key:m},r.createElement(t,null)))),r.createElement(l.Flex,{columnGap:"2x",justifyContent:"flex-end",mb:"4x"},r.createElement(x.Z,{"data-track":y?"CodeBlock|hide_source|".concat((0,h.Z)({path:g.pathname})):"CodeBlock|show_source|".concat((0,h.Z)({path:g.pathname})),onClick:O},r.createElement(l.Tooltip,{label:y?"Hide the source":"Show the source"},r.createElement(l.Icon,{icon:"code",size:{sm:"5x",md:"4x"}}))),r.createElement(x.Z,{"data-track":"CodeBlock|copy_source|".concat((0,h.Z)({path:g.pathname})),onClick:_},r.createElement(l.Tooltip,{label:E?"Copied":"Copy the source"},r.createElement(l.Icon,{icon:"file-copy-o",size:{sm:"5x",md:"4x"}}))),r.createElement(x.Z,{"data-track":"CodeBlock|edit_in_codesandbox|".concat(g.pathname),onClick:C},r.createElement(l.Tooltip,{label:"Edit in CodeSandbox"},r.createElement(f,{size:{sm:"5x",md:"4x"}}))),r.createElement(x.Z,{"data-track":"CodeBlock|reset|".concat(g.pathname),onClick:P},r.createElement(l.Tooltip,{label:"Reset the demo"},r.createElement(l.Icon,{icon:"redo",size:{sm:"5x",md:"4x"}})))),r.createElement(l.Fade,{in:y},r.createElement(l.Collapse,{in:y,unmountOnExit:!0},r.createElement(s.uz,{style:u}))))};Demo.displayName="Demo";var g=Demo},96699:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/overflow-tooltip",function(){return n(40741)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=96699)}),_N_E=e.O()}]);