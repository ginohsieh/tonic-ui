(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8721],{56338:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return j}});var r=t(52322),o=t(45392),a=t(96835),l=t(73645),c=t(49857),i=t(67622),p=t(3398),u=t(2784),s=function(){return u.createElement(l.Z,{display:"inline-flex",direction:"column",rowGap:"4x"},u.createElement(c.Z,null,u.createElement(i.Z,{mb:"1x"},"date"),u.createElement(p.Z,{type:"date"})),u.createElement(c.Z,null,u.createElement(i.Z,{mb:"1x"},"time"),u.createElement(p.Z,{type:"time"})),u.createElement(c.Z,null,u.createElement(i.Z,{mb:"1x"},"datetime-local"),u.createElement(p.Z,{type:"datetime-local"})),u.createElement(c.Z,null,u.createElement(i.Z,{mb:"1x"},"month"),u.createElement(p.Z,{type:"month"})),u.createElement(c.Z,null,u.createElement(i.Z,{mb:"1x"},"week"),u.createElement(p.Z,{type:"week"})))},d=t(40596),m=t(85017),x=t(53505),f=t(91518),y=t(31463),b=t(51622);function h(){return(h=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function I(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a,l,c=[],i=!0,p=!1;try{if(a=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;i=!1}else for(;!(i=(r=a.call(t)).done)&&(c.push(r.value),c.length!==n);i=!0);}catch(e){p=!0,o=e}finally{try{if(!i&&null!=t.return&&(l=t.return(),Object(l)!==l))return}finally{if(p)throw o}}return c}}(e,n)||function(e,n){if(e){if("string"==typeof e)return T(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return T(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}var v=(0,u.forwardRef)(function(e,n){var t=I((0,d.Z)(),1)[0],r=I((0,m.Z)({colorMode:t}),1)[0];return u.createElement(x.Z,h({ref:n,startAdornment:u.createElement(f.Z,{color:r.color.secondary},u.createElement(b.Z,null))},e))});v.displayName="DateInput";var w=function(){return u.createElement(u.Fragment,null,u.createElement(i.Z,{mb:"1x"},"Date Picker"),u.createElement(y.Z,{defaultValue:new Date,inputFormat:"yyyy-MM-dd",renderInput:function(e){var n=e.error,t=e.inputProps,r=!!t.value&&n;return u.createElement(v,h({},t,{error:r,placeholder:"yyyy-MM-dd"}))}}))};function k(e){var n=Object.assign({div:"div",h1:"h1",p:"p",h2:"h2",a:"a",svg:"svg",use:"use",code:"code"},(0,o.ah)(),e.components);return(0,r.jsxs)(n.div,{className:"main-content",children:["\n","\n","\n",(0,r.jsx)(n.h1,{id:"date-pickers",children:"Date Pickers"}),"\n",(0,r.jsx)(n.p,{children:"Date pickers allow the user to select dates from a pre-determined set of values."}),"\n",(0,r.jsx)(a.Z,Object.assign({},{component:w,file:{data:"import { DatePicker, InputAdornment, InputControl, TextLabel, useColorMode, useColorStyle } from '@tonic-ui/react';\nimport { CalendarIcon } from '@tonic-ui/react-icons';\nimport React, { forwardRef } from 'react';\n\nconst DateInput = forwardRef((props, ref) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n\n  return (\n    <InputControl\n      ref={ref}\n      startAdornment={(\n        <InputAdornment color={colorStyle.color.secondary}>\n          <CalendarIcon />\n        </InputAdornment>\n      )}\n      {...props}\n    />\n  );\n});\nDateInput.displayName = 'DateInput';\n\nconst App = () => (\n  <>\n    <TextLabel mb=\"1x\">Date Picker</TextLabel>\n    <DatePicker\n      defaultValue={new Date()}\n      inputFormat=\"yyyy-MM-dd\"\n      renderInput={({ error, inputProps }) => {\n        const _error = !!inputProps.value && error;\n\n        return (\n          <DateInput\n            {...inputProps}\n            error={_error}\n            placeholder=\"yyyy-MM-dd\"\n          />\n        );\n      }}\n    />\n  </>\n);\n\nexport default App;",path:"pages/components/date-pickers/index.page.mdx"},sandbox:{files:{},raw:"import { DatePicker, InputAdornment, InputControl, TextLabel, useColorMode, useColorStyle } from '@tonic-ui/react';\nimport { CalendarIcon } from '@tonic-ui/react-icons';\nimport React, { forwardRef } from 'react';\n\nconst DateInput = forwardRef((props, ref) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n\n  return (\n    <InputControl\n      ref={ref}\n      startAdornment={(\n        <InputAdornment color={colorStyle.color.secondary}>\n          <CalendarIcon />\n        </InputAdornment>\n      )}\n      {...props}\n    />\n  );\n});\nDateInput.displayName = 'DateInput';\n\nconst App = () => (\n  <>\n    <TextLabel mb=\"1x\">Date Picker</TextLabel>\n    <DatePicker\n      defaultValue={new Date()}\n      inputFormat=\"yyyy-MM-dd\"\n      renderInput={({ error, inputProps }) => {\n        const _error = !!inputProps.value && error;\n\n        return (\n          <DateInput\n            {...inputProps}\n            error={_error}\n            placeholder=\"yyyy-MM-dd\"\n          />\n        );\n      }}\n    />\n  </>\n);\n\nexport default App;",title:"Tonic UI"}})),"\n",(0,r.jsxs)(n.h2,{id:"native-pickers",children:["Native Pickers",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#native-pickers",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Native pickers are supported by modern browsers. The supported input types are: ",(0,r.jsx)(n.code,{children:"date"}),", ",(0,r.jsx)(n.code,{children:"datetime-local"}),", ",(0,r.jsx)(n.code,{children:"month"}),", ",(0,r.jsx)(n.code,{children:"time"}),", and ",(0,r.jsx)(n.code,{children:"week"}),"."]}),"\n",(0,r.jsx)(a.Z,Object.assign({},{component:s,file:{data:'import { Box, Flex, Input, TextLabel } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <Flex\n    display="inline-flex"\n    direction="column"\n    rowGap="4x"\n  >\n    <Box>\n      <TextLabel mb="1x">date</TextLabel>\n      <Input type="date" />\n    </Box>\n    <Box>\n      <TextLabel mb="1x">time</TextLabel>\n      <Input type="time" />\n    </Box>\n    <Box>\n      <TextLabel mb="1x">datetime-local</TextLabel>\n      <Input type="datetime-local" />\n    </Box>\n    <Box>\n      <TextLabel mb="1x">month</TextLabel>\n      <Input type="month" />\n    </Box>\n    <Box>\n      <TextLabel mb="1x">week</TextLabel>\n      <Input type="week" />\n    </Box>\n  </Flex>\n);\n\nexport default App;',path:"pages/components/date-pickers/index.page.mdx"},sandbox:{files:{},raw:'import { Box, Flex, Input, TextLabel } from \'@tonic-ui/react\';\nimport React from \'react\';\n\nconst App = () => (\n  <Flex\n    display="inline-flex"\n    direction="column"\n    rowGap="4x"\n  >\n    <Box>\n      <TextLabel mb="1x">date</TextLabel>\n      <Input type="date" />\n    </Box>\n    <Box>\n      <TextLabel mb="1x">time</TextLabel>\n      <Input type="time" />\n    </Box>\n    <Box>\n      <TextLabel mb="1x">datetime-local</TextLabel>\n      <Input type="datetime-local" />\n    </Box>\n    <Box>\n      <TextLabel mb="1x">month</TextLabel>\n      <Input type="month" />\n    </Box>\n    <Box>\n      <TextLabel mb="1x">week</TextLabel>\n      <Input type="week" />\n    </Box>\n  </Flex>\n);\n\nexport default App;',title:"Tonic UI"}}))]})}var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.ah)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(k,e)})):k(e)}},41447:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/date-pickers",function(){return t(56338)}])}},function(e){e.O(0,[9184,4395,4791,2065,4739,2888,9774,179],function(){return e(e.s=41447)}),_N_E=e.O()}]);