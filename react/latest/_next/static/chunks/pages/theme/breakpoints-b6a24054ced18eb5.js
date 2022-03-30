(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9145],{16395:function(e,n,t){"use strict";var a=t(12215),i=t(81292),r=(t(2784),t(76863)),o=t(70018),d=t(28165);n.Z=function(e){var n,t=e.theme,l=(0,i.useTheme)(),m=(0,i.useColorMode)(),p=(0,a.Z)(m,1)[0],s=(0,i.useColorStyle)({colorMode:p}),k=null!==(n=(0,a.Z)(s,1)[0][t])&&void 0!==n?n:l[t];if(!k)return"Theme field not found";"space"!==t&&"sizes"!==t||(k=Object.keys(k).filter((function(e){return!e.toString().match(/[qh]$/)})).reduce((function(e,n){return e[n]=k[n],e}),{}));return(0,d.tZ)(i.Box,{mb:"6x"},(0,d.tZ)(r.Z,null,"const ".concat(t," = ").concat((0,o.Z)(k,!1))))}},70018:function(e,n){"use strict";n.Z=function(e){return JSON.stringify(e,null,2).replace(/"/g,"'").replace(/'(\d+|[a-z]+)':/g,"$1:")}},75882:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var a=t(7896),i=t(59740),r=(t(2784),t(30876)),o=t(16395),d=["components"],l={};function m(e){var n=e.components,t=(0,i.Z)(e,d);return(0,r.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",null,"Breakpoints"),(0,r.kt)("h2",null,"Design Tokens"),(0,r.kt)(o.Z,{theme:"breakpoints",mdxType:"ThemeParser"}),(0,r.kt)("p",null,"The default breakpoints is an array of the following values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"[\n  '320px', // sm\n  '640px', // md\n  '1024px', // lg\n  '1280px', // xl\n  '1680px', // 2xl\n]\n")),(0,r.kt)("p",null,"The first value in the array is the smallest breakpoint, and the last value is the largest. You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"sm"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"md"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"lg"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"xl"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"xxl")," as breakpoint names to reference the breakpoints in the array."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Breakpoint"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Media Query"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sm")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"@media screen and (min-width: 320px)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"md")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"@media screen and (min-width: 640px)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"lg")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"@media screen and (min-width: 1024px)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"xl")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"@media screen and (min-width: 1280px)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"2xl")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"@media screen and (min-width: 1680px)"))))),(0,r.kt)("h2",null,"Examples"),(0,r.kt)("p",null,"Try resizing your browser window to see the effect of the responsive styles."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<Box\n  fontSize={{\n    _: 'md', // default\n    sm: 'sm', // @media screen and (min-width: 320px)\n    md: 'md', // @media screen and (min-width: 640px)\n    lg: 'lg', // @media screen and (min-width: 1024px)\n    xl: 'xl', // @media screen and (min-width: 1280px)\n    '2xl': '2xl', // @media screen and (min-width: 1680px)\n  }}\n  lineHeight={{\n    _: 'md', // default\n    sm: 'sm', // @media screen and (min-width: 320px)\n    md: 'md', // @media screen and (min-width: 640px)\n    lg: 'lg', // @media screen and (min-width: 1024px)\n    xl: 'xl', // @media screen and (min-width: 1280px)\n    '2xl': '2xl', // @media screen and (min-width: 1680px)\n  }}\n>\n  <Box display={{ _: 'none', sm: 'block', md: 'none' }}>\n    <Box mb=\"1x\"><code>@media screen and (min-width: 320px)</code></Box>\n    Small Text\n  </Box>\n  <Box display={{ _: 'none', md: 'block', lg: 'none' }}>\n    <Box mb=\"1x\"><code>@media screen and (min-width: 640px)</code></Box>\n    Medium Text\n  </Box>\n  <Box display={{ _: 'none', lg: 'block', xl: 'none' }}>\n    <Box mb=\"1x\"><code>@media screen and (min-width: 1024px)</code></Box>\n    Large Text\n  </Box>\n  <Box display={{ _: 'none', xl: 'block', '2xl': 'none' }}>\n    <Box mb=\"1x\"><code>@media screen and (min-width: 1280px)</code></Box>\n    Extra Large Text\n  </Box>\n  <Box display={{ _: 'none', '2xl': 'block' }}>\n    <Box mb=\"1x\"><code>@media screen and (min-width: 1680px)</code></Box>\n    Double Extra Large Text\n  </Box>\n</Box>\n")),(0,r.kt)("h2",null,"Customizing Breakpoints"),(0,r.kt)("p",null,"For more control over the breakpoints, you can define custom breakpoints for your application."),(0,r.kt)("p",null,"To do this, add a ",(0,r.kt)("inlineCode",{parentName:"p"},"breakpoints")," array with additional aliases (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"sm"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"md"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"lg"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"xl"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"2xl"),") to your theme."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// 1. Import the theme\nimport { ThemeProvider, theme } from '@tonic-ui/react';\n\n// 2. Update the breakpoints\nconst breakpoints = [\n  '320px',\n  '768px',\n  '960px',\n  '1200px',\n  '1440px',\n];\nbreakpoints.sm = breakpoints[0];\nbreakpoints.md = breakpoints[1];\nbreakpoints.lg = breakpoints[2];\nbreakpoints.xl = breakpoints[3];\nbreakpoints['2xl'] = breakpoints[4];\n\n// 3. Extend the theme\nconst customTheme = {\n  ...theme,\n  breakpoints,\n};\n\n// 4. Pass the custom theme to the theme provider\nfunction App() {\n  return (\n    <ThemeProvider theme={customTheme}>\n      {children}\n    </ThemeProvider>\n  );\n}\n")))}m.isMDXComponent=!0},99637:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/theme/breakpoints",function(){return t(75882)}])}},function(e){e.O(0,[9774,2888,179],(function(){return n=99637,e(e.s=n);var n}));var n=e.O();_N_E=n}]);