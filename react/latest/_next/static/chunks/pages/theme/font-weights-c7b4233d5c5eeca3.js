(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3993],{75073:function(n,e,t){"use strict";var r=t(98922),o=t(2784),i=t(99566),a=t(82650);function l(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t,r,o=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=o){var i=[],a=!0,l=!1;try{for(o=o.call(n);!(a=(t=o.next()).done)&&(i.push(t.value),!e||i.length!==e);a=!0);}catch(n){l=!0,r=n}finally{try{a||null==o.return||o.return()}finally{if(l)throw r}}return i}}(n,e)||function(n,e){if(n){if("string"==typeof n)return s(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if("Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return s(n,e)}}(n,e)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}e.Z=function(n){var e,t=n.theme,s=(0,r.useTheme)(),c=l((0,r.useColorMode)(),1)[0],u=null!==(e=l((0,r.useColorStyle)({colorMode:c}),1)[0][t])&&void 0!==e?e:s[t];return u?(("space"===t||"sizes"===t)&&(u=Object.keys(u).filter(function(n){return!n.toString().match(/[qh]$/)}).reduce(function(n,e){return n[e]=u[e],n},{})),o.createElement(r.Box,{mb:"6x"},o.createElement(i.Z,null,o.createElement("div",{className:"js"},"const ".concat(t," = ").concat((0,a.Z)(u,!1)))))):"Theme field not found"}},82650:function(n,e){"use strict";e.Z=function(n){return JSON.stringify(n,null,2).replace(/"/g,"'").replace(/'(\d+|[a-z]+)':/g,"$1:")}},714:function(n,e,t){"use strict";t.r(e);var r=t(52322),o=t(45392);t(98922);var i=t(75073);function a(n){var e=Object.assign({div:"div",h1:"h1",h2:"h2",a:"a",svg:"svg",use:"use",pre:"pre",code:"code"},(0,o.ah)(),n.components);return(0,r.jsxs)(e.div,{className:"main-content",id:"main-content",children:["\n",(0,r.jsx)(e.h1,{id:"font-weights",children:"Font Weights"}),"\n",(0,r.jsxs)(e.h2,{id:"design-tokens",children:["Design Tokens",(0,r.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#design-tokens",children:(0,r.jsx)(e.svg,{children:(0,r.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(i.Z,{theme:"fontWeights"}),"\n",(0,r.jsxs)(e.h2,{id:"examples",children:["Examples",(0,r.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#examples",children:(0,r.jsx)(e.svg,{children:(0,r.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jsx",children:'<Flex flexDirection="column" rowGap="3x">\n  <Box fontWeight="thin">Thin (100)</Box>\n  <Box fontWeight="extraliht">Extra light (200)</Box>\n  <Box fontWeight="light">Light (300)</Box>\n  <Box fontWeight="normal">Normal (400)</Box>\n  <Box fontWeight="medium">Medium (500)</Box>\n  <Box fontWeight="semibold">Semibold (600)</Box>\n  <Box fontWeight="bold">Bold (700)</Box>\n  <Box fontWeight="extrabold">Extra bold (800)</Box>\n  <Box fontWeight="black">Black (900)</Box>\n</Flex>\n'})})]})}e.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,o.ah)(),n.components).wrapper;return e?(0,r.jsx)(e,Object.assign({},n,{children:(0,r.jsx)(a,n)})):a(n)}},6931:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/theme/font-weights",function(){return t(714)}])}},function(n){n.O(0,[9774,2888,179],function(){return n(n.s=6931)}),_N_E=n.O()}]);