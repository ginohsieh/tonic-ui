(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6338],{58980:function(e,t,n){"use strict";var o=n(12215),r=n(58693),a=(n(2784),n(92582)),l=n(70345),i=n(81436);t.Z=function(e){var t,n=e.theme,c=(0,r.useTheme)(),u=(0,r.useColorMode)(),p=(0,o.Z)(u,1)[0],s=(0,r.useColorStyle)({colorMode:p}),d=null!==(t=(0,o.Z)(s,1)[0][n])&&void 0!==t?t:c[n];if(!d)return"Theme field not found";"space"!==n&&"sizes"!==n||(d=Object.keys(d).filter((function(e){return!e.toString().match(/[qh]$/)})).reduce((function(e,t){return e[t]=d[t],e}),{}));return(0,i.jsx)(r.Box,{mb:"6x"},(0,i.jsx)(a.Z,null,"export const ".concat(n," = ").concat((0,l.Z)(d,!1))))}},70345:function(e,t){"use strict";t.Z=function(e){return JSON.stringify(e,null,2).replace(/"/g,"'").replace(/'(\d+|[a-z]+)':/g,"$1:")}},3327:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var o=n(7896),r=n(59740),a=(n(2784),n(30876)),l=n(58693),i=n(12215),c=n(5081),u=n(81436),p=function(e){var t=e.hue,n=(0,l.useTheme)(),o=RegExp(t,"g"),r=Object.keys(n.colors).filter((function(e){return e.match(o)})).reduce((function(e,t){return e[t]=n.colors[t],e}),{});return(0,u.jsx)(l.Flex,{align:"center"},(0,u.jsx)(l.Stack,{direction:"column"},Object.keys(r).map((function(e){var t=(0,c.ensureString)(e).split(":"),n=(0,i.Z)(t,2),o=n[0],a=n[1],p=r[e],s=a<=50?"black":"white";return(0,u.jsx)(l.Flex,{key:e,justify:"space-between",fontSize:"sm",width:"300px",height:"12x",py:"3x",px:"4x",lineHeight:"lg",fontFamily:"mono",backgroundColor:p,color:s},(0,u.jsx)(l.Box,null,"".concat(o.charAt(0).toUpperCase()).concat(o.slice(1))," ",a),(0,u.jsx)(l.Box,null,s))}))))},s=n(58980),d=["components"],m={};function h(e){var t=e.components,n=(0,r.Z)(e,d);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"Colors"),(0,a.kt)("p",null,"Add a ",(0,a.kt)("inlineCode",{parentName:"p"},"theme.colors")," object to provide colors for your project. By default these colors can be referenced by ",(0,a.kt)("inlineCode",{parentName:"p"},"color"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"borderColor"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"backgroundColor"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"fill"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"stroke"),", and styles."),(0,a.kt)("p",null,"We recommend adding a palette that go from ",(0,a.kt)("inlineCode",{parentName:"p"},"10")," (lightest color) to ",(0,a.kt)("inlineCode",{parentName:"p"},"100")," (darkest color). You can use a name (such as Red 10 or Red 70) to indicate that Red 10 is a light red color and Red 70 is a dark red color."),(0,a.kt)("p",null,"The color palette  is defined for both Light Theme and Dark Theme where ",(0,a.kt)("inlineCode",{parentName:"p"},"10")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"50")," means to pass AA contrast with black text and  ",(0,a.kt)("inlineCode",{parentName:"p"},"60")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"100")," means to pass AA contrast with white text."),(0,a.kt)(s.Z,{theme:"colors",mdxType:"ThemeParser"}),(0,a.kt)("h3",null,"Color palette"),(0,a.kt)(l.Grid,{gap:"6x",templateColumns:"repeat(auto-fit, 300px)",mb:"6x",mdxType:"Grid"},(0,a.kt)(p,{hue:"red",mdxType:"ColorPalette"}),(0,a.kt)(p,{hue:"magenta",mdxType:"ColorPalette"}),(0,a.kt)(p,{hue:"purple",mdxType:"ColorPalette"}),(0,a.kt)(p,{hue:"blue",mdxType:"ColorPalette"}),(0,a.kt)(p,{hue:"green",mdxType:"ColorPalette"}),(0,a.kt)(p,{hue:"teal",mdxType:"ColorPalette"}),(0,a.kt)(p,{hue:"cyan",mdxType:"ColorPalette"}),(0,a.kt)(p,{hue:"gray",mdxType:"ColorPalette"})))}h.isMDXComponent=!0},75323:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/colors",function(){return n(3327)}])}},function(e){e.O(0,[9774,2888,179],(function(){return t=75323,e(e.s=t);var t}));var t=e.O();_N_E=t}]);