(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4283],{99284:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return w}});var r=t(52322),a=t(45392),l=t(16959),i=t(67569),o=t(49427),c=t(2784),s=["value","onChange"];function d(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function x(){return(x=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var h=function(e){return c.createElement(i.Text,x({fontSize:"sm",lineHeight:"sm",color:"red:50"},e))},u=(0,c.forwardRef)(function(e,n){var t=e.value,r=e.onChange;!function(e,n){if(null!=e){var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}}}(e,s);var a=(0,c.useRef)(),l=(0,o.useMergeRefs)(a,n),d=""===t?"Please fill out this field":null;return(0,c.useEffect)(function(){var e=a.current,n=d||"";e.setCustomValidity(n)},[d]),c.createElement(c.Fragment,null,c.createElement(i.Flex,{position:"relative",alignItems:"center",mb:"1x"},c.createElement(i.Textarea,{ref:l,resize:"none",rows:"3",placeholder:"Placeholder text",value:t,onChange:r,error:d,pr:d?"10x":void 0}),d&&c.createElement(i.Box,{position:"absolute",right:"3x",top:"2x"},c.createElement(i.Icon,{icon:"warning-circle",color:"red:50"}))),c.createElement(i.Box,null,d&&c.createElement(h,null,d)))});u.displayName="MultilineTextField";var f=function(){var e,n=function(e){if(Array.isArray(e))return e}(e=(0,c.useState)(""))||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,l,i,o=[],c=!0,s=!1;try{for(l=(t=t.call(e)).next;!(c=(r=l.call(t)).done)&&(o.push(r.value),2!==o.length);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(s)throw a}}return o}}(e,2)||function(e,n){if(e){if("string"==typeof e)return d(e,2);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return d(e,2)}}(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),t=n[0],r=n[1];return c.createElement(u,{value:t,onChange:function(e){r(e.target.value)}})},p=function(){return c.createElement(i.Textarea,{required:!0,placeholder:"Placeholder text"})},m=function(){return c.createElement(i.Stack,{directin:"column",spacing:"4x"},c.createElement(i.Textarea,{readOnly:!0,placeholder:"Placeholder text"}),c.createElement(i.Textarea,{readOnly:!0,placeholder:"Placeholder text",defaultValue:"Read-only"}))},g=function(){return c.createElement(i.Stack,{directin:"column",spacing:"4x"},c.createElement(i.Textarea,{disabled:!0,placeholder:"Placeholder text"}),c.createElement(i.Textarea,{disabled:!0,placeholder:"Placeholder text",defaultValue:"Disabled"}))},j=function(){return c.createElement(i.Textarea,{variant:"unstyled",placeholder:"John Doe"})},b=function(){return c.createElement(i.Textarea,{variant:"filled",placeholder:"John Doe"})},v=function(){return c.createElement(i.Textarea,{variant:"outline",placeholder:"John Doe"})};function y(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var T=function(){var e,n=function(e){if(Array.isArray(e))return e}(e=(0,c.useState)("both"))||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,l,i,o=[],c=!0,s=!1;try{for(l=(t=t.call(e)).next;!(c=(r=l.call(t)).done)&&(o.push(r.value),2!==o.length);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(s)throw a}}return o}}(e,2)||function(e,n){if(e){if("string"==typeof e)return y(e,2);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return y(e,2)}}(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),t=n[0],r=n[1];return c.createElement(c.Fragment,null,c.createElement(i.Flex,{alignItems:"center",mb:"5x"},c.createElement(i.TextLabel,null,"resize ="),c.createElement(i.Space,{width:"2x"}),c.createElement(i.Stack,{direction:"row",spacing:"2x"},["none","both","horizontal","vertical"].map(function(e){return c.createElement(i.Button,{key:e,variant:t===e?"primary":"secondary",onClick:function(){return r(e)}},e)}))),c.createElement(i.Textarea,{defaultValue:"Placeholder text",width:"auto",resize:t,rows:"3",cols:"12",minLength:4,maxLength:16,transition:"none"}))},k=function(){return c.createElement(c.Fragment,null,c.createElement(i.TextLabel,{mb:"1x"},"Label:"),c.createElement(i.Textarea,{placeholder:"Basic example"}),c.createElement(i.Text,{size:"xs",mt:"1x"},"Help text for the text input"))};function E(e){var n=Object.assign({div:"div",h1:"h1",p:"p",code:"code",h2:"h2",a:"a",svg:"svg",use:"use",pre:"pre",h3:"h3",ul:"ul",li:"li",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,r.jsxs)(n.div,{className:"main-content",id:"main-content",children:["\n","\n","\n","\n","\n","\n","\n","\n","\n","\n",(0,r.jsx)(n.h1,{id:"textarea",children:"Textarea"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Textarea"})," component allows you to create a multi-line text input."]}),"\n",(0,r.jsxs)(n.h2,{id:"import",children:["Import",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { Textarea } from '@tonic-ui/react';\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"usage",children:["Usage",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usage",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(l.Z,{component:k,file:{data:'import { Text, Textarea, TextLabel } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <>\n    <TextLabel mb="1x">Label:</TextLabel>\n    <Textarea placeholder="Basic example" />\n    <Text size="xs" mt="1x">Help text for the text input</Text>\n  </>\n);\n\nexport default App;',path:"pages/components/textarea/index.page.mdx"},sandbox:{files:{},raw:'import { Text, Textarea, TextLabel } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <>\n    <TextLabel mb="1x">Label:</TextLabel>\n    <Textarea placeholder="Basic example" />\n    <Text size="xs" mt="1x">Help text for the text input</Text>\n  </>\n);\n\nexport default App;',title:"Tonic UI"}}),"\n",(0,r.jsxs)(n.h3,{id:"sizing",children:["Sizing",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#sizing",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"rows"})," and ",(0,r.jsx)(n.code,{children:"cols"})," properties allow you to specify an exact size for the ",(0,r.jsx)(n.code,{children:"<Textarea>"})," to take. Setting these is a good idea for consistency, as browser defaults can differ."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"maxLength"})," property specifies a maximum number of characters that the ",(0,r.jsx)(n.code,{children:"Textarea"})," is allowed to contain."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"minLength"})," property specifies a minimum length that is considered valid. ",(0,r.jsx)(n.code,{children:"Textarea"})," will not submit (and is invalid) if it is empty, using the ",(0,r.jsx)(n.code,{children:"required"})," attribute."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"resize"})," property to set whether the ",(0,r.jsx)(n.code,{children:"Textarea"})," is resizable, and if so, in which directions. You can set the value to ",(0,r.jsx)(n.code,{children:"none"}),", ",(0,r.jsx)(n.code,{children:"both"}),", ",(0,r.jsx)(n.code,{children:"horizontal"}),", or ",(0,r.jsx)(n.code,{children:"vertical"}),"."]}),"\n"]}),"\n",(0,r.jsx)(l.Z,{component:T,file:{data:'import { Button, Flex, Space, Stack, Textarea, TextLabel } from \'@tonic-ui/react\';\nimport React, { useState } from \'react\';\n\nconst App = () => {\n  const [resize, setResize] = useState(\'both\');\n\n  return (\n    <>\n      <Flex alignItems="center" mb="5x">\n        <TextLabel>resize =</TextLabel>\n        <Space width="2x" />\n        <Stack direction="row" spacing="2x">\n          {[\'none\', \'both\', \'horizontal\', \'vertical\'].map(value => (\n            <Button\n              key={value}\n              variant={resize === value ? \'primary\' : \'secondary\'}\n              onClick={() => setResize(value)}\n            >\n              {value}\n            </Button>\n          ))}\n        </Stack>\n      </Flex>\n      <Textarea\n        defaultValue="Placeholder text"\n        width="auto"\n        resize={resize}\n        rows="3"\n        cols="12"\n        minLength={4}\n        maxLength={16}\n        transition="none"\n      />\n    </>\n  );\n};\n\nexport default App;',path:"pages/components/textarea/index.page.mdx"},sandbox:{files:{},raw:'import { Button, Flex, Space, Stack, Textarea, TextLabel } from \'@tonic-ui/react\';\nimport React, { useState } from \'react\';\n\nconst App = () => {\n  const [resize, setResize] = useState(\'both\');\n\n  return (\n    <>\n      <Flex alignItems="center" mb="5x">\n        <TextLabel>resize =</TextLabel>\n        <Space width="2x" />\n        <Stack direction="row" spacing="2x">\n          {[\'none\', \'both\', \'horizontal\', \'vertical\'].map(value => (\n            <Button\n              key={value}\n              variant={resize === value ? \'primary\' : \'secondary\'}\n              onClick={() => setResize(value)}\n            >\n              {value}\n            </Button>\n          ))}\n        </Stack>\n      </Flex>\n      <Textarea\n        defaultValue="Placeholder text"\n        width="auto"\n        resize={resize}\n        rows="3"\n        cols="12"\n        minLength={4}\n        maxLength={16}\n        transition="none"\n      />\n    </>\n  );\n};\n\nexport default App;',title:"Tonic UI"}}),"\n",(0,r.jsxs)(n.h3,{id:"variants",children:["Variants",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#variants",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Textarea"})," component comes in 3 variants: ",(0,r.jsx)(n.code,{children:"outline"}),", ",(0,r.jsx)(n.code,{children:"filled"}),", and ",(0,r.jsx)(n.code,{children:"unstyled"}),". Pass the ",(0,r.jsx)(n.code,{children:"variant"})," prop and set it to either of these values."]}),"\n",(0,r.jsxs)(n.h4,{id:"outline",children:[(0,r.jsx)(n.code,{children:"outline"}),(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#outline",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(l.Z,{component:v,file:{data:"import { Textarea } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => (\n  <Textarea variant=\"outline\" placeholder=\"John Doe\" />\n);\n\nexport default App;",path:"pages/components/textarea/index.page.mdx"},sandbox:{files:{},raw:"import { Textarea } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => (\n  <Textarea variant=\"outline\" placeholder=\"John Doe\" />\n);\n\nexport default App;",title:"Tonic UI"}}),"\n",(0,r.jsxs)(n.h4,{id:"filled",children:[(0,r.jsx)(n.code,{children:"filled"}),(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#filled",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(l.Z,{component:b,file:{data:"import { Textarea } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => (\n  <Textarea variant=\"filled\" placeholder=\"John Doe\" />\n);\n\nexport default App;",path:"pages/components/textarea/index.page.mdx"},sandbox:{files:{},raw:"import { Textarea } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => (\n  <Textarea variant=\"filled\" placeholder=\"John Doe\" />\n);\n\nexport default App;",title:"Tonic UI"}}),"\n",(0,r.jsxs)(n.h4,{id:"unstyled",children:[(0,r.jsx)(n.code,{children:"unstyled"}),(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#unstyled",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(l.Z,{component:j,file:{data:"import { Textarea } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => (\n  <Textarea variant=\"unstyled\" placeholder=\"John Doe\" />\n);\n\nexport default App;",path:"pages/components/textarea/index.page.mdx"},sandbox:{files:{},raw:"import { Textarea } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => (\n  <Textarea variant=\"unstyled\" placeholder=\"John Doe\" />\n);\n\nexport default App;",title:"Tonic UI"}}),"\n",(0,r.jsxs)(n.h3,{id:"attributes",children:["Attributes",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#attributes",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["General form input attributes are supported, such as ",(0,r.jsx)(n.code,{children:"disabled"}),", ",(0,r.jsx)(n.code,{children:"readOnly"}),", ",(0,r.jsx)(n.code,{children:"required"}),", etc."]}),"\n",(0,r.jsxs)(n.h4,{id:"disabled",children:[(0,r.jsx)(n.code,{children:"disabled"}),(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#disabled",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(l.Z,{component:g,file:{data:'import { Stack, Textarea } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <Stack directin="column" spacing="4x">\n    <Textarea disabled placeholder="Placeholder text" />\n    <Textarea disabled placeholder="Placeholder text" defaultValue="Disabled" />\n  </Stack>\n);\n\nexport default App;',path:"pages/components/textarea/index.page.mdx"},sandbox:{files:{},raw:'import { Stack, Textarea } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <Stack directin="column" spacing="4x">\n    <Textarea disabled placeholder="Placeholder text" />\n    <Textarea disabled placeholder="Placeholder text" defaultValue="Disabled" />\n  </Stack>\n);\n\nexport default App;',title:"Tonic UI"}}),"\n",(0,r.jsxs)(n.h4,{id:"readonly",children:[(0,r.jsx)(n.code,{children:"readOnly"}),(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#readonly",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(l.Z,{component:m,file:{data:'import { Stack, Textarea } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <Stack directin="column" spacing="4x">\n    <Textarea readOnly placeholder="Placeholder text" />\n    <Textarea readOnly placeholder="Placeholder text" defaultValue="Read-only" />\n  </Stack>\n);\n\nexport default App;',path:"pages/components/textarea/index.page.mdx"},sandbox:{files:{},raw:'import { Stack, Textarea } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <Stack directin="column" spacing="4x">\n    <Textarea readOnly placeholder="Placeholder text" />\n    <Textarea readOnly placeholder="Placeholder text" defaultValue="Read-only" />\n  </Stack>\n);\n\nexport default App;',title:"Tonic UI"}}),"\n",(0,r.jsxs)(n.h4,{id:"required",children:[(0,r.jsx)(n.code,{children:"required"}),(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#required",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(l.Z,{component:p,file:{data:"import { Textarea } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => (\n  <Textarea required placeholder=\"Placeholder text\" />\n);\n\nexport default App;",path:"pages/components/textarea/index.page.mdx"},sandbox:{files:{},raw:"import { Textarea } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => (\n  <Textarea required placeholder=\"Placeholder text\" />\n);\n\nexport default App;",title:"Tonic UI"}}),"\n",(0,r.jsxs)(n.h3,{id:"validation",children:["Validation",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#validation",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Textarea"})," component provides a built-in validation mechanism that can be used to indicate when a field is not valid. When the ",(0,r.jsx)(n.code,{children:"error"})," prop is set to true, a red border is displayed around the input field, allowing you to provide user-friendly form validation feedback."]}),"\n",(0,r.jsxs)(n.p,{children:["In addition to the built-in validation mechanism, you can use the native ",(0,r.jsx)(n.code,{children:"setCustomValidity()"})," method to set a custom validation message for the textarea. This method is available on the textarea element and allows you to set a custom error message that will be displayed when the field is invalid."]}),"\n",(0,r.jsx)(l.Z,{component:f,file:{data:'import { Box, Flex, Icon, Text, Textarea } from \'@tonic-ui/react\';\nimport { useMergeRefs } from \'@tonic-ui/react-hooks\';\nimport React, { forwardRef, useEffect, useRef, useState } from \'react\';\n\nconst InlineError = (props) => (\n  <Text fontSize="sm" lineHeight="sm" color="red:50" {...props} />\n);\n\nconst MultilineTextField = forwardRef((\n  {\n    value,\n    onChange,\n    ...rest\n  },\n  ref,\n) => {\n  const nodeRef = useRef();\n  const combinedRef = useMergeRefs(nodeRef, ref);\n  const error = (value === \'\') ? \'Please fill out this field\' : null;\n\n  // Optional\n  useEffect(() => {\n    const el = nodeRef.current;\n    const errorMessage = error || \'\';\n    el.setCustomValidity(errorMessage);\n  }, [error]);\n\n  return (\n    <>\n      <Flex position="relative" alignItems="center" mb="1x">\n        <Textarea\n          ref={combinedRef}\n          resize="none"\n          rows="3"\n          placeholder="Placeholder text"\n          value={value}\n          onChange={onChange}\n          error={error}\n          pr={error ? \'10x\' : undefined}\n        />\n        {error && (\n          <Box position="absolute" right="3x" top="2x">\n            <Icon icon="warning-circle" color="red:50" />\n          </Box>\n        )}\n      </Flex>\n      <Box>\n        {error && (\n          <InlineError>{error}</InlineError>\n        )}\n      </Box>\n    </>\n  );\n});\nMultilineTextField.displayName = \'MultilineTextField\';\n\nconst App = () => {\n  const [value, setValue] = useState(\'\');\n  const onChange = (e) => {\n    setValue(e.target.value);\n  };\n\n  return (\n    <MultilineTextField value={value} onChange={onChange} />\n  );\n};\n\nexport default App;',path:"pages/components/textarea/index.page.mdx"},sandbox:{files:{},raw:'import { Box, Flex, Icon, Text, Textarea } from \'@tonic-ui/react\';\nimport { useMergeRefs } from \'@tonic-ui/react-hooks\';\nimport React, { forwardRef, useEffect, useRef, useState } from \'react\';\n\nconst InlineError = (props) => (\n  <Text fontSize="sm" lineHeight="sm" color="red:50" {...props} />\n);\n\nconst MultilineTextField = forwardRef((\n  {\n    value,\n    onChange,\n    ...rest\n  },\n  ref,\n) => {\n  const nodeRef = useRef();\n  const combinedRef = useMergeRefs(nodeRef, ref);\n  const error = (value === \'\') ? \'Please fill out this field\' : null;\n\n  // Optional\n  useEffect(() => {\n    const el = nodeRef.current;\n    const errorMessage = error || \'\';\n    el.setCustomValidity(errorMessage);\n  }, [error]);\n\n  return (\n    <>\n      <Flex position="relative" alignItems="center" mb="1x">\n        <Textarea\n          ref={combinedRef}\n          resize="none"\n          rows="3"\n          placeholder="Placeholder text"\n          value={value}\n          onChange={onChange}\n          error={error}\n          pr={error ? \'10x\' : undefined}\n        />\n        {error && (\n          <Box position="absolute" right="3x" top="2x">\n            <Icon icon="warning-circle" color="red:50" />\n          </Box>\n        )}\n      </Flex>\n      <Box>\n        {error && (\n          <InlineError>{error}</InlineError>\n        )}\n      </Box>\n    </>\n  );\n});\nMultilineTextField.displayName = \'MultilineTextField\';\n\nconst App = () => {\n  const [value, setValue] = useState(\'\');\n  const onChange = (e) => {\n    setValue(e.target.value);\n  };\n\n  return (\n    <MultilineTextField value={value} onChange={onChange} />\n  );\n};\n\nexport default App;',title:"Tonic UI"}}),"\n",(0,r.jsxs)(n.h2,{id:"props",children:["Props",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#props",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(n.h3,{id:"textarea-1",children:["Textarea",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#textarea-1",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{align:"left",children:"Name"}),(0,r.jsx)(n.th,{align:"left",children:"Type"}),(0,r.jsx)(n.th,{align:"left",children:"Default"}),(0,r.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:"rows"}),(0,r.jsx)(n.td,{align:"left",children:"number"}),(0,r.jsx)(n.td,{align:"left"}),(0,r.jsx)(n.td,{align:"left",children:"Specifies the number of visible lines in a textarea."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:"cols"}),(0,r.jsx)(n.td,{align:"left",children:"number"}),(0,r.jsx)(n.td,{align:"left"}),(0,r.jsx)(n.td,{align:"left",children:"Specifies the visible width of a textarea."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:"maxLength"}),(0,r.jsx)(n.td,{align:"left",children:"number"}),(0,r.jsx)(n.td,{align:"left"}),(0,r.jsx)(n.td,{align:"left",children:"Specifies the maximum number of characters allowed in the textarea."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:"minLength"}),(0,r.jsx)(n.td,{align:"left",children:"number"}),(0,r.jsx)(n.td,{align:"left"}),(0,r.jsx)(n.td,{align:"left",children:"Specifies the minimum number of characters required for the textarea to be considered valid."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:"resize"}),(0,r.jsx)(n.td,{align:"left",children:"string"}),(0,r.jsx)(n.td,{align:"left"}),(0,r.jsx)(n.td,{align:"left",children:"The resize behavior of the textarea. One of: 'none', 'both', 'horizontal', 'vertical'"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:"variant"}),(0,r.jsx)(n.td,{align:"left",children:"string"}),(0,r.jsx)(n.td,{align:"left",children:"'outline'"}),(0,r.jsx)(n.td,{align:"left",children:"The variant of the textarea style to use. One of: 'outline', 'filled', 'unstyled'"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:"disabled"}),(0,r.jsx)(n.td,{align:"left",children:"boolean"}),(0,r.jsx)(n.td,{align:"left"}),(0,r.jsxs)(n.td,{align:"left",children:["If ",(0,r.jsx)(n.code,{children:"true"}),", the textarea is disabled and the user cannot interact with it."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:"error"}),(0,r.jsx)(n.td,{align:"left",children:"boolean"}),(0,r.jsx)(n.td,{align:"left"}),(0,r.jsxs)(n.td,{align:"left",children:["If ",(0,r.jsx)(n.code,{children:"true"}),", the textarea displays a red border to indicate an error."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:"readOnly"}),(0,r.jsx)(n.td,{align:"left",children:"boolean"}),(0,r.jsx)(n.td,{align:"left"}),(0,r.jsxs)(n.td,{align:"left",children:["If ",(0,r.jsx)(n.code,{children:"true"}),", the value of the textarea cannot be edited."]})]})]})]})]})}var w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.ah)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(E,e)})):E(e)}},16959:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var r=t(67569),a=t(49427),l=t(5632),i=t(2784),o=t(65245),c=t(16245),s=t(76761),d=t(73205),x=t(98107),h=["size"];function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var f=(0,i.forwardRef)(function(e,n){var t=e.size,a=function(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(e,h);return i.createElement(r.SVGIcon,u({size:t,viewBox:"0 0 1024 1024"},a),i.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"}))});f.displayName="CodeSandboxIcon";var p=t(44285);function m(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,l,i,o=[],c=!0,s=!1;try{if(l=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=l.call(t)).done)&&(o.push(r.value),o.length!==n);c=!0);}catch(e){s=!0,a=e}finally{try{if(!c&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(s)throw a}}return o}}(e,n)||function(e,n){if(e){if("string"==typeof e)return g(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var j={fontFamily:'"SFMono-Medium", "SF Mono", "Segoe UI Mono", Menlo, Consolas, Courier, monospace',fontSize:14,overflowX:"auto"},b=function(e){var n=e.component,t=e.file,h=e.sandbox,u=(0,l.useRouter)(),g=m((0,i.useReducer)(function(e){return!e},!1),2),b=g[0],v=g[1],y=m((0,r.useColorMode)(),1)[0],T={dark:s.y,light:s.q}[y],k=m((0,a.useToggle)(!1),2),E=k[0],w=k[1],S=(0,c.Z)(null==t?void 0:t.data),I=S.onCopy,A=S.hasCopied,R=(0,i.useCallback)(function(){I()},[I]),O=(0,i.useCallback)(function(){(0,d.b)(h)},[h]),z=(0,i.useCallback)(function(){v(),w(!1)},[v,w]);return i.createElement(o.nu,{code:null==t?void 0:t.data,disabled:!0,language:"jsx",theme:T},i.createElement(r.Box,{border:1,borderColor:{dark:"gray:70",light:"gray:30"}[y],p:"4x"},i.createElement(r.Box,{fontSize:"sm",lineHeight:"sm"},i.createElement(i.Fragment,{key:b},i.createElement(n,null)))),i.createElement(r.Flex,{columnGap:"2x",justifyContent:"flex-end",mb:"4x"},i.createElement(p.Z,{"data-track":E?"CodeBlock|hide_source|".concat((0,x.Z)({path:u.pathname})):"CodeBlock|show_source|".concat((0,x.Z)({path:u.pathname})),onClick:w},i.createElement(r.Tooltip,{label:E?"Hide the source":"Show the source"},i.createElement(r.Icon,{icon:"code",size:{sm:"5x",md:"4x"}}))),i.createElement(p.Z,{"data-track":"CodeBlock|copy_source|".concat((0,x.Z)({path:u.pathname})),onClick:R},i.createElement(r.Tooltip,{label:A?"Copied":"Copy the source"},i.createElement(r.Icon,{icon:"file-copy-o",size:{sm:"5x",md:"4x"}}))),i.createElement(p.Z,{"data-track":"CodeBlock|edit_in_codesandbox|".concat(u.pathname),onClick:O},i.createElement(r.Tooltip,{label:"Edit in CodeSandbox"},i.createElement(f,{size:{sm:"5x",md:"4x"}}))),i.createElement(p.Z,{"data-track":"CodeBlock|reset|".concat(u.pathname),onClick:z},i.createElement(r.Tooltip,{label:"Reset the demo"},i.createElement(r.Icon,{icon:"redo",size:{sm:"5x",md:"4x"}})))),i.createElement(r.Fade,{in:E},i.createElement(r.Collapse,{in:E,unmountOnExit:!0},i.createElement(o.uz,{style:j}))))};b.displayName="Demo";var v=b},85858:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/textarea",function(){return t(99284)}])}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=85858)}),_N_E=e.O()}]);