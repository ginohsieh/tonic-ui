(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1091],{75073:function(n,e,r){"use strict";var t=r(98922),o=r(2784),i=r(64899),s=r(82650);function a(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r,t,o=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=o){var i=[],s=!0,a=!1;try{for(o=o.call(n);!(s=(r=o.next()).done)&&(i.push(r.value),!e||i.length!==e);s=!0);}catch(n){a=!0,t=n}finally{try{s||null==o.return||o.return()}finally{if(a)throw t}}return i}}(n,e)||function(n,e){if(n){if("string"==typeof n)return c(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);if("Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(n,e)}}(n,e)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=Array(e);r<e;r++)t[r]=n[r];return t}e.Z=function(n){var e,r=n.theme,c=(0,t.useTheme)(),l=a((0,t.useColorMode)(),1)[0],u=null!==(e=a((0,t.useColorStyle)({colorMode:l}),1)[0][r])&&void 0!==e?e:c[r];return u?(("space"===r||"sizes"===r)&&(u=Object.keys(u).filter(function(n){return!n.toString().match(/[qh]$/)}).reduce(function(n,e){return n[e]=u[e],n},{})),o.createElement(t.Box,{mb:"6x"},o.createElement(i.Z,null,o.createElement("div",{className:"js"},"const ".concat(r," = ").concat((0,s.Z)(u,!1)))))):"Theme field not found"}},82650:function(n,e){"use strict";e.Z=function(n){return JSON.stringify(n,null,2).replace(/"/g,"'").replace(/'(\d+|[a-z]+)':/g,"$1:")}},8220:function(n,e,r){"use strict";r.r(e);var t=r(52322),o=r(45392);r(98922);var i=r(75073);function s(n){var e=Object.assign({div:"div",h1:"h1",h2:"h2",a:"a",svg:"svg",use:"use",pre:"pre",code:"code"},(0,o.ah)(),n.components);return(0,t.jsxs)(e.div,{className:"main-content",id:"main-content",children:["\n",(0,t.jsx)(e.h1,{id:"fonts",children:"Fonts"}),"\n",(0,t.jsxs)(e.h2,{id:"design-tokens",children:["Design Tokens",(0,t.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#design-tokens",children:(0,t.jsx)(e.svg,{children:(0,t.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsx)(i.Z,{theme:"fonts"}),"\n",(0,t.jsxs)(e.h2,{id:"examples",children:["Examples",(0,t.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#examples",children:(0,t.jsx)(e.svg,{children:(0,t.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:'<Flex flexDirection="column" rowGap="3x">\n  <Box fontFamily="base">Segoe UI Sans-Serif</Box>\n  <Box fontFamily="mono">Segoe UI Mono</Box>\n</Flex>\n'})})]})}e.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,o.ah)(),n.components).wrapper;return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(s,n)})):s(n)}},44665:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/theme/fonts",function(){return r(8220)}])}},function(n){n.O(0,[9774,2888,179],function(){return n(n.s=44665)}),_N_E=n.O()}]);