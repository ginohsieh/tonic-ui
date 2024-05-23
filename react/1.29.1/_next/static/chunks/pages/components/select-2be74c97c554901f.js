(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[285],{69533:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return index_page}});var i=t(52322),o=t(45392),l=t(83449),a=t(67569),r=t(2784),attribute_required=function(){return r.createElement(a.Select,{required:!0},r.createElement(a.Option,{value:""},"Choose an option"),r.createElement(a.Option,{value:"dog"},"Dog"),r.createElement(a.Option,{value:"cat"},"Cat"))},attribute_disabled=function(){return r.createElement(a.Select,{disabled:!0},r.createElement(a.Option,{value:""},"Choose an option"))},c=["style"];function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var FlexOption=function(e){e.style;var n=function(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,c);return r.createElement(a.Flex,_extends({as:"option",alignItems:"center",height:"8x",px:"3x"},n))},multiple_options=function(){return r.createElement(a.Select,{multiple:!0,size:"4"},r.createElement(FlexOption,{value:1},"Option 1"),r.createElement(FlexOption,{value:2},"Option 2"),r.createElement(FlexOption,{value:3},"Option 3"),r.createElement(FlexOption,{value:4},"Option 4"),r.createElement(FlexOption,{value:5},"Option 5"),r.createElement(FlexOption,{value:6},"Option 6"))},variant_unstyled=function(){return r.createElement(a.Select,{variant:"unstyled"},r.createElement(a.Option,{value:""},"Choose an option"),r.createElement(a.Option,{value:"unstyled"},"Unstyled"))},variant_filled=function(){return r.createElement(a.Select,{variant:"filled"},r.createElement(a.Option,{value:""},"Choose an option"),r.createElement(a.Option,{value:"filled"},"Filled"))},variant_outline=function(){return r.createElement(a.Select,{variant:"outline"},r.createElement(a.Option,{value:""},"Choose an option"),r.createElement(a.Option,{value:"outline"},"Outline"))},basic=function(){return r.createElement(r.Fragment,null,r.createElement(a.TextLabel,{mb:"1x"},"Label:"),r.createElement(a.Select,null,r.createElement(a.Option,{value:""},"Choose an option"),r.createElement(a.OptionGroup,{label:"Category 1"},r.createElement(a.Option,{value:1},"Option 1"),r.createElement(a.Option,{value:2},"Option 2")),r.createElement(a.OptionGroup,{label:"Category 2"},r.createElement(a.Option,{value:3},"Option 3"),r.createElement(a.Option,{value:4},"Option 4"))))};function _createMdxContent(e){var n=Object.assign({div:"div",h1:"h1",p:"p",code:"code",h2:"h2",a:"a",svg:"svg",use:"use",pre:"pre",h3:"h3",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,i.jsxs)(n.div,{className:"main-content",id:"main-content",children:["\n","\n","\n","\n","\n","\n","\n","\n",(0,i.jsx)(n.h1,{id:"select",children:"Select"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Select"})," component is used for collecting user provided information from a list of options."]}),"\n",(0,i.jsxs)(n.h2,{id:"import",children:["Import",(0,i.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,i.jsx)(n.svg,{children:(0,i.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import {\n  Select,\n  Option,\n  OptionGroup,\n} from '@tonic-ui/react';\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"usage",children:["Usage",(0,i.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usage",children:(0,i.jsx)(n.svg,{children:(0,i.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsx)(l.Z,{component:basic,file:{data:'import { Option, OptionGroup, Select, TextLabel } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <>\n    <TextLabel mb="1x">Label:</TextLabel>\n    <Select>\n      <Option value="">Choose an option</Option>\n      <OptionGroup label="Category 1">\n        <Option value={1}>Option 1</Option>\n        <Option value={2}>Option 2</Option>\n      </OptionGroup>\n      <OptionGroup label="Category 2">\n        <Option value={3}>Option 3</Option>\n        <Option value={4}>Option 4</Option>\n      </OptionGroup>\n    </Select>\n  </>\n);\n\nexport default App;',path:"pages/components/select/index.page.mdx"},sandbox:{files:{},raw:'import { Option, OptionGroup, Select, TextLabel } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <>\n    <TextLabel mb="1x">Label:</TextLabel>\n    <Select>\n      <Option value="">Choose an option</Option>\n      <OptionGroup label="Category 1">\n        <Option value={1}>Option 1</Option>\n        <Option value={2}>Option 2</Option>\n      </OptionGroup>\n      <OptionGroup label="Category 2">\n        <Option value={3}>Option 3</Option>\n        <Option value={4}>Option 4</Option>\n      </OptionGroup>\n    </Select>\n  </>\n);\n\nexport default App;',title:"Tonic UI"}}),"\n",(0,i.jsxs)(n.h3,{id:"variants",children:["Variants",(0,i.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#variants",children:(0,i.jsx)(n.svg,{children:(0,i.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Select"})," component comes in 3 variants: ",(0,i.jsx)(n.code,{children:"outline"}),", ",(0,i.jsx)(n.code,{children:"filled"}),", and ",(0,i.jsx)(n.code,{children:"unstyled"}),". Pass the ",(0,i.jsx)(n.code,{children:"variant"})," prop and set it to either of these values."]}),"\n",(0,i.jsxs)(n.h4,{id:"outline",children:[(0,i.jsx)(n.code,{children:"outline"}),(0,i.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#outline",children:(0,i.jsx)(n.svg,{children:(0,i.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsx)(l.Z,{component:variant_outline,file:{data:'import { Option, Select } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <Select variant="outline">\n    <Option value="">Choose an option</Option>\n    <Option value="outline">Outline</Option>\n  </Select>\n);\n\nexport default App;',path:"pages/components/select/index.page.mdx"},sandbox:{files:{},raw:'import { Option, Select } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <Select variant="outline">\n    <Option value="">Choose an option</Option>\n    <Option value="outline">Outline</Option>\n  </Select>\n);\n\nexport default App;',title:"Tonic UI"}}),"\n",(0,i.jsxs)(n.h4,{id:"filled",children:[(0,i.jsx)(n.code,{children:"filled"}),(0,i.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#filled",children:(0,i.jsx)(n.svg,{children:(0,i.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsx)(l.Z,{component:variant_filled,file:{data:'import { Option, Select } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <Select variant="filled">\n    <Option value="">Choose an option</Option>\n    <Option value="filled">Filled</Option>\n  </Select>\n);\n\nexport default App;',path:"pages/components/select/index.page.mdx"},sandbox:{files:{},raw:'import { Option, Select } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <Select variant="filled">\n    <Option value="">Choose an option</Option>\n    <Option value="filled">Filled</Option>\n  </Select>\n);\n\nexport default App;',title:"Tonic UI"}}),"\n",(0,i.jsxs)(n.h4,{id:"unstyled",children:[(0,i.jsx)(n.code,{children:"unstyled"}),(0,i.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#unstyled",children:(0,i.jsx)(n.svg,{children:(0,i.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsx)(l.Z,{component:variant_unstyled,file:{data:'import { Option, Select } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <Select variant="unstyled">\n    <Option value="">Choose an option</Option>\n    <Option value="unstyled">Unstyled</Option>\n  </Select>\n);\n\nexport default App;',path:"pages/components/select/index.page.mdx"},sandbox:{files:{},raw:'import { Option, Select } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <Select variant="unstyled">\n    <Option value="">Choose an option</Option>\n    <Option value="unstyled">Unstyled</Option>\n  </Select>\n);\n\nexport default App;',title:"Tonic UI"}}),"\n",(0,i.jsxs)(n.h3,{id:"attributes",children:["Attributes",(0,i.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#attributes",children:(0,i.jsx)(n.svg,{children:(0,i.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"<select>"})," element has some unique attributes you can use to control it, such as ",(0,i.jsx)(n.code,{children:"multiple"})," to specify whether multiple options can be selected, and ",(0,i.jsx)(n.code,{children:"size"})," to specify how many options should be shown at once. It also accepts most of the general form input attributes such as ",(0,i.jsx)(n.code,{children:"disabled"}),", ",(0,i.jsx)(n.code,{children:"required"}),", etc."]}),"\n",(0,i.jsxs)(n.h4,{id:"multiple-options",children:["Multiple options",(0,i.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#multiple-options",children:(0,i.jsx)(n.svg,{children:(0,i.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsx)(l.Z,{component:multiple_options,file:{data:'import { Flex, Select } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst FlexOption = ({ style, ...props }) => (\n  <Flex\n    as="option"\n    alignItems="center"\n    height="8x"\n    px="3x"\n    {...props}\n  />\n);\n\nconst App = () => (\n  <Select multiple size="4">\n    <FlexOption value={1}>Option 1</FlexOption>\n    <FlexOption value={2}>Option 2</FlexOption>\n    <FlexOption value={3}>Option 3</FlexOption>\n    <FlexOption value={4}>Option 4</FlexOption>\n    <FlexOption value={5}>Option 5</FlexOption>\n    <FlexOption value={6}>Option 6</FlexOption>\n  </Select>\n);\n\nexport default App;',path:"pages/components/select/index.page.mdx"},sandbox:{files:{},raw:'import { Flex, Select } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst FlexOption = ({ style, ...props }) => (\n  <Flex\n    as="option"\n    alignItems="center"\n    height="8x"\n    px="3x"\n    {...props}\n  />\n);\n\nconst App = () => (\n  <Select multiple size="4">\n    <FlexOption value={1}>Option 1</FlexOption>\n    <FlexOption value={2}>Option 2</FlexOption>\n    <FlexOption value={3}>Option 3</FlexOption>\n    <FlexOption value={4}>Option 4</FlexOption>\n    <FlexOption value={5}>Option 5</FlexOption>\n    <FlexOption value={6}>Option 6</FlexOption>\n  </Select>\n);\n\nexport default App;',title:"Tonic UI"}}),"\n",(0,i.jsxs)(n.h4,{id:"disabled",children:[(0,i.jsx)(n.code,{children:"disabled"}),(0,i.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#disabled",children:(0,i.jsx)(n.svg,{children:(0,i.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsx)(l.Z,{component:attribute_disabled,file:{data:"import { Option, Select } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => (\n  <Select disabled>\n    <Option value=\"\">Choose an option</Option>\n  </Select>\n);\n\nexport default App;",path:"pages/components/select/index.page.mdx"},sandbox:{files:{},raw:"import { Option, Select } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => (\n  <Select disabled>\n    <Option value=\"\">Choose an option</Option>\n  </Select>\n);\n\nexport default App;",title:"Tonic UI"}}),"\n",(0,i.jsxs)(n.h4,{id:"required",children:[(0,i.jsx)(n.code,{children:"required"}),(0,i.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#required",children:(0,i.jsx)(n.svg,{children:(0,i.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsx)(l.Z,{component:attribute_required,file:{data:'import { Option, Select } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <Select required>\n    <Option value="">Choose an option</Option>\n    <Option value="dog">Dog</Option>\n    <Option value="cat">Cat</Option>\n  </Select>\n);\n\nexport default App;',path:"pages/components/select/index.page.mdx"},sandbox:{files:{},raw:'import { Option, Select } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <Select required>\n    <Option value="">Choose an option</Option>\n    <Option value="dog">Dog</Option>\n    <Option value="cat">Cat</Option>\n  </Select>\n);\n\nexport default App;',title:"Tonic UI"}}),"\n",(0,i.jsxs)(n.h2,{id:"props",children:["Props",(0,i.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#props",children:(0,i.jsx)(n.svg,{children:(0,i.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsxs)(n.h3,{id:"select-1",children:["Select",(0,i.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#select-1",children:(0,i.jsx)(n.svg,{children:(0,i.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{align:"left",children:"Name"}),(0,i.jsx)(n.th,{align:"left",children:"Type"}),(0,i.jsx)(n.th,{align:"left",children:"Default"}),(0,i.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"disabled"}),(0,i.jsx)(n.td,{align:"left",children:"boolean"}),(0,i.jsx)(n.td,{align:"left"}),(0,i.jsxs)(n.td,{align:"left",children:["If ",(0,i.jsx)(n.code,{children:"true"}),", the select is disabled and the user cannot interact with it."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"error"}),(0,i.jsx)(n.td,{align:"left",children:"boolean"}),(0,i.jsx)(n.td,{align:"left"}),(0,i.jsxs)(n.td,{align:"left",children:["If ",(0,i.jsx)(n.code,{children:"true"}),", the select displays a red border to indicate an error."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"variant"}),(0,i.jsx)(n.td,{align:"left",children:"string"}),(0,i.jsx)(n.td,{align:"left",children:"'outline'"}),(0,i.jsx)(n.td,{align:"left",children:"The variant of the select style to use. One of: 'outline', 'filled', 'unstyled'"})]})]})]}),"\n",(0,i.jsxs)(n.h3,{id:"option",children:["Option",(0,i.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#option",children:(0,i.jsx)(n.svg,{children:(0,i.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{align:"left",children:"Name"}),(0,i.jsx)(n.th,{align:"left",children:"Type"}),(0,i.jsx)(n.th,{align:"left",children:"Default"}),(0,i.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"children"}),(0,i.jsx)(n.td,{align:"left",children:"ReactNode"}),(0,i.jsx)(n.td,{align:"left"}),(0,i.jsx)(n.td,{align:"left"})]})})]}),"\n",(0,i.jsxs)(n.h3,{id:"optiongroup",children:["OptionGroup",(0,i.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#optiongroup",children:(0,i.jsx)(n.svg,{children:(0,i.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{align:"left",children:"Name"}),(0,i.jsx)(n.th,{align:"left",children:"Type"}),(0,i.jsx)(n.th,{align:"left",children:"Default"}),(0,i.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"children"}),(0,i.jsx)(n.td,{align:"left",children:"ReactNode"}),(0,i.jsx)(n.td,{align:"left"}),(0,i.jsx)(n.td,{align:"left"})]})})]})]})}var index_page=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.ah)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(_createMdxContent,e)})):_createMdxContent(e)}},83449:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var i=t(67569),o=t(49427),l=t(5632),a=t(2784),r=t(65245),c=t(82821),s=t(90622),p=t(52057),d=t(63651),u=["size"];function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var h=(0,a.forwardRef)(function(e,n){var t=e.size,o=function(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,u);return a.createElement(i.SVGIcon,_extends({size:t,viewBox:"0 0 1024 1024"},o),a.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"}))});h.displayName="CodeSandboxIcon";var x=t(94981);function _slicedToArray(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,i,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var l=[],a=!0,r=!1;try{for(o=o.call(e);!(a=(t=o.next()).done)&&(l.push(t.value),!n||l.length!==n);a=!0);}catch(e){r=!0,i=e}finally{try{a||null==o.return||o.return()}finally{if(r)throw i}}return l}}(e,n)||function(e,n){if(e){if("string"==typeof e)return _arrayLikeToArray(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _arrayLikeToArray(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=Array(n);t<n;t++)i[t]=e[t];return i}var m={fontFamily:'"SFMono-Medium", "SF Mono", "Segoe UI Mono", Menlo, Consolas, Courier, monospace',fontSize:14,overflowX:"auto"},Demo=function(e){var n=e.component,t=e.file,u=e.sandbox,f=(0,l.useRouter)(),O=_slicedToArray((0,a.useReducer)(function(e){return!e},!1),2),j=O[0],v=O[1],b=_slicedToArray((0,i.useColorMode)(),1)[0],g={dark:s.y,light:s.q}[b],y=_slicedToArray((0,o.useToggle)(!1),2),S=y[0],k=y[1],E=(0,c.Z)(null==t?void 0:t.data),C=E.onCopy,F=E.hasCopied,_=(0,a.useCallback)(function(){C()},[C]),A=(0,a.useCallback)(function(){(0,p.b)(u)},[u]),I=(0,a.useCallback)(function(){v(),k(!1)},[v,k]);return a.createElement(r.nu,{code:null==t?void 0:t.data,disabled:!0,language:"jsx",theme:g},a.createElement(i.Box,{border:1,borderColor:{dark:"gray:70",light:"gray:30"}[b],p:"4x"},a.createElement(i.Box,{fontSize:"sm",lineHeight:"sm"},a.createElement(a.Fragment,{key:j},a.createElement(n,null)))),a.createElement(i.Flex,{columnGap:"2x",justifyContent:"flex-end",mb:"4x"},a.createElement(x.Z,{"data-track":S?"CodeBlock|hide_source|".concat((0,d.Z)({path:f.pathname})):"CodeBlock|show_source|".concat((0,d.Z)({path:f.pathname})),onClick:k},a.createElement(i.Tooltip,{label:S?"Hide the source":"Show the source"},a.createElement(i.Icon,{icon:"code",size:{sm:"5x",md:"4x"}}))),a.createElement(x.Z,{"data-track":"CodeBlock|copy_source|".concat((0,d.Z)({path:f.pathname})),onClick:_},a.createElement(i.Tooltip,{label:F?"Copied":"Copy the source"},a.createElement(i.Icon,{icon:"file-copy-o",size:{sm:"5x",md:"4x"}}))),a.createElement(x.Z,{"data-track":"CodeBlock|edit_in_codesandbox|".concat(f.pathname),onClick:A},a.createElement(i.Tooltip,{label:"Edit in CodeSandbox"},a.createElement(h,{size:{sm:"5x",md:"4x"}}))),a.createElement(x.Z,{"data-track":"CodeBlock|reset|".concat(f.pathname),onClick:I},a.createElement(i.Tooltip,{label:"Reset the demo"},a.createElement(i.Icon,{icon:"redo",size:{sm:"5x",md:"4x"}})))),a.createElement(i.Fade,{in:S},a.createElement(i.Collapse,{in:S,unmountOnExit:!0},a.createElement(r.uz,{style:m}))))};Demo.displayName="Demo";var f=Demo},9082:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/select",function(){return t(69533)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=9082)}),_N_E=e.O()}]);