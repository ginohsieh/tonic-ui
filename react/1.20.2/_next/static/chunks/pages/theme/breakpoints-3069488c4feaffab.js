(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9145],{75073:function(e,n,i){"use strict";var r=i(98922),t=i(2784),d=i(64899),s=i(82650);function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var i,r,t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var d=[],s=!0,a=!1;try{for(t=t.call(e);!(s=(i=t.next()).done)&&(d.push(i.value),!n||d.length!==n);s=!0);}catch(e){a=!0,r=e}finally{try{s||null==t.return||t.return()}finally{if(a)throw r}}return d}}(e,n)||function(e,n){if(e){if("string"==typeof e)return o(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return o(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,r=Array(n);i<n;i++)r[i]=e[i];return r}n.Z=function(e){var n,i=e.theme,o=(0,r.useTheme)(),l=a((0,r.useColorMode)(),1)[0],c=null!==(n=a((0,r.useColorStyle)({colorMode:l}),1)[0][i])&&void 0!==n?n:o[i];return c?(("space"===i||"sizes"===i)&&(c=Object.keys(c).filter(function(e){return!e.toString().match(/[qh]$/)}).reduce(function(e,n){return e[n]=c[n],e},{})),t.createElement(r.Box,{mb:"6x"},t.createElement(d.Z,null,t.createElement("div",{className:"js"},"const ".concat(i," = ").concat((0,s.Z)(c,!1)))))):"Theme field not found"}},82650:function(e,n){"use strict";n.Z=function(e){return JSON.stringify(e,null,2).replace(/"/g,"'").replace(/'(\d+|[a-z]+)':/g,"$1:")}},20904:function(e,n,i){"use strict";i.r(n);var r=i(52322),t=i(45392),d=i(75073);function s(e){var n=Object.assign({div:"div",h1:"h1",h2:"h2",a:"a",svg:"svg",use:"use",p:"p",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,t.ah)(),e.components);return(0,r.jsxs)(n.div,{className:"main-content",id:"main-content",children:["\n",(0,r.jsx)(n.h1,{id:"breakpoints",children:"Breakpoints"}),"\n",(0,r.jsxs)(n.h2,{id:"design-tokens",children:["Design Tokens",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#design-tokens",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(d.Z,{theme:"breakpoints"}),"\n",(0,r.jsx)(n.p,{children:"The default breakpoints is an array of the following values:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"[\n  '320px', // sm\n  '640px', // md\n  '1024px', // lg\n  '1280px', // xl\n  '1680px', // 2xl\n]\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The first value in the array is the smallest breakpoint, and the last value is the largest. You can also use ",(0,r.jsx)(n.code,{children:"sm"}),", ",(0,r.jsx)(n.code,{children:"md"}),", ",(0,r.jsx)(n.code,{children:"lg"}),", ",(0,r.jsx)(n.code,{children:"xl"}),", and ",(0,r.jsx)(n.code,{children:"xxl"})," as breakpoint names to reference the breakpoints in the array."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{align:"left",children:"Breakpoint"}),(0,r.jsx)(n.th,{align:"left",children:"Media Query"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.code,{children:"sm"})}),(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.code,{children:"@media screen and (min-width: 320px)"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.code,{children:"md"})}),(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.code,{children:"@media screen and (min-width: 640px)"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.code,{children:"lg"})}),(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.code,{children:"@media screen and (min-width: 1024px)"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.code,{children:"xl"})}),(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.code,{children:"@media screen and (min-width: 1280px)"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.code,{children:"2xl"})}),(0,r.jsx)(n.td,{align:"left",children:(0,r.jsx)(n.code,{children:"@media screen and (min-width: 1680px)"})})]})]})]}),"\n",(0,r.jsxs)(n.h2,{id:"examples",children:["Examples",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#examples",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(n.p,{children:"Try resizing your browser window to see the effect of the responsive styles."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"<Box\n  fontSize={{\n    _: 'md', // default\n    sm: 'sm', // @media screen and (min-width: 320px)\n    md: 'md', // @media screen and (min-width: 640px)\n    lg: 'lg', // @media screen and (min-width: 1024px)\n    xl: 'xl', // @media screen and (min-width: 1280px)\n    '2xl': '2xl', // @media screen and (min-width: 1680px)\n  }}\n  lineHeight={{\n    _: 'md', // default\n    sm: 'sm', // @media screen and (min-width: 320px)\n    md: 'md', // @media screen and (min-width: 640px)\n    lg: 'lg', // @media screen and (min-width: 1024px)\n    xl: 'xl', // @media screen and (min-width: 1280px)\n    '2xl': '2xl', // @media screen and (min-width: 1680px)\n  }}\n>\n  <Box display={{ _: 'none', sm: 'block', md: 'none' }}>\n    <Box mb=\"1x\"><code>@media screen and (min-width: 320px)</code></Box>\n    Small Text\n  </Box>\n  <Box display={{ _: 'none', md: 'block', lg: 'none' }}>\n    <Box mb=\"1x\"><code>@media screen and (min-width: 640px)</code></Box>\n    Medium Text\n  </Box>\n  <Box display={{ _: 'none', lg: 'block', xl: 'none' }}>\n    <Box mb=\"1x\"><code>@media screen and (min-width: 1024px)</code></Box>\n    Large Text\n  </Box>\n  <Box display={{ _: 'none', xl: 'block', '2xl': 'none' }}>\n    <Box mb=\"1x\"><code>@media screen and (min-width: 1280px)</code></Box>\n    Extra Large Text\n  </Box>\n  <Box display={{ _: 'none', '2xl': 'block' }}>\n    <Box mb=\"1x\"><code>@media screen and (min-width: 1680px)</code></Box>\n    Double Extra Large Text\n  </Box>\n</Box>\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"customizing-breakpoints",children:["Customizing Breakpoints",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#customizing-breakpoints",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(n.p,{children:"For more control over the breakpoints, you can define custom breakpoints for your application."}),"\n",(0,r.jsxs)(n.p,{children:["To do this, add a ",(0,r.jsx)(n.code,{children:"breakpoints"})," array with additional aliases (e.g. ",(0,r.jsx)(n.code,{children:"sm"}),", ",(0,r.jsx)(n.code,{children:"md"}),", ",(0,r.jsx)(n.code,{children:"lg"}),", ",(0,r.jsx)(n.code,{children:"xl"}),", and ",(0,r.jsx)(n.code,{children:"2xl"}),") to your theme."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// 1. Import the theme\nimport { ThemeProvider, theme } from '@tonic-ui/react';\n\n// 2. Update the breakpoints\nconst breakpoints = [\n  '320px',\n  '768px',\n  '960px',\n  '1200px',\n  '1440px',\n];\nbreakpoints.sm = breakpoints[0];\nbreakpoints.md = breakpoints[1];\nbreakpoints.lg = breakpoints[2];\nbreakpoints.xl = breakpoints[3];\nbreakpoints['2xl'] = breakpoints[4];\n\n// 3. Extend the theme\nconst customTheme = {\n  ...theme,\n  breakpoints,\n};\n\n// 4. Pass the custom theme to the theme provider\nfunction App() {\n  return (\n    <ThemeProvider theme={customTheme}>\n      {children}\n    </ThemeProvider>\n  );\n}\n"})})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.ah)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(s,e)})):s(e)}},90318:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/theme/breakpoints",function(){return i(20904)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=90318)}),_N_E=e.O()}]);