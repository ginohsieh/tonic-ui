(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7754],{41790:function(e,n,t){"use strict";var r=t(67569),i=t(2784),s=t(81952),c=t(82650);function d(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,r,i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var s=[],c=!0,d=!1;try{for(i=i.call(e);!(c=(t=i.next()).done)&&(s.push(t.value),!n||s.length!==n);c=!0);}catch(e){d=!0,r=e}finally{try{c||null==i.return||i.return()}finally{if(d)throw r}}return s}}(e,n)||function(e,n){if(e){if("string"==typeof e)return l(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}n.Z=function(e){var n,t=e.theme,l=(0,r.useTheme)(),o=d((0,r.useColorMode)(),1)[0],h=null!==(n=d((0,r.useColorStyle)({colorMode:o}),1)[0][t])&&void 0!==n?n:l[t];return h?(("space"===t||"sizes"===t)&&(h=Object.keys(h).filter(function(e){return!e.toString().match(/[qh]$/)}).reduce(function(e,n){return e[n]=h[n],e},{})),i.createElement(r.Box,{mb:"6x"},i.createElement(s.Z,null,i.createElement("div",{className:"js"},"const ".concat(t," = ").concat((0,c.Z)(h,!1)))))):"Theme field not found"}},82650:function(e,n){"use strict";n.Z=function(e){return JSON.stringify(e,null,2).replace(/"/g,"'").replace(/'(\d+|[a-z]+)':/g,"$1:")}},15714:function(e,n,t){"use strict";t.r(n);var r=t(52322),i=t(45392);t(67569);var s=t(41790);function c(e){var n=Object.assign({div:"div",h1:"h1",h2:"h2",a:"a",svg:"svg",use:"use",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,r.jsxs)(n.div,{className:"main-content",id:"main-content",children:["\n",(0,r.jsx)(n.h1,{id:"line-heights",children:"Line Heights"}),"\n",(0,r.jsxs)(n.h2,{id:"design-tokens",children:["Design Tokens",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#design-tokens",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(s.Z,{theme:"lineHeights"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Line height"}),(0,r.jsx)(n.th,{children:"Pixels"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"xs"}),(0,r.jsx)(n.td,{children:"1.125rem"}),(0,r.jsx)(n.td,{children:"18px"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sm"}),(0,r.jsx)(n.td,{children:"1.25rem"}),(0,r.jsx)(n.td,{children:"20px"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"md"}),(0,r.jsx)(n.td,{children:"1.375rem"}),(0,r.jsx)(n.td,{children:"22px"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lg"}),(0,r.jsx)(n.td,{children:"1.5rem"}),(0,r.jsx)(n.td,{children:"24px"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"xl"}),(0,r.jsx)(n.td,{children:"1.75rem"}),(0,r.jsx)(n.td,{children:"28px"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2xl"}),(0,r.jsx)(n.td,{children:"2rem"}),(0,r.jsx)(n.td,{children:"32px"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3xl"}),(0,r.jsx)(n.td,{children:"2.25rem"}),(0,r.jsx)(n.td,{children:"36px"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4xl"}),(0,r.jsx)(n.td,{children:"2.5rem"}),(0,r.jsx)(n.td,{children:"40px"})]})]})]}),"\n",(0,r.jsxs)(n.h2,{id:"examples",children:["Examples",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#examples",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'<Stack direction="row" spacing="12x">\n  <Box width="324px" lineHeight="sm">\n    <Box>Line height 1.25rem</Box>\n    <Box>Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus.</Box>\n  </Box>\n  <Box width="324px" lineHeight="lg">\n    <Box>Line height 1.5rem</Box>\n    <Box>Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus.</Box>\n  </Box>\n  <Box width="324px" lineHeight="2xl">\n    <Box>Line height 2rem</Box>\n    <Box>Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus.</Box>\n  </Box>\n</Stack>\n'})})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.ah)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}},11993:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/theme/line-heights",function(){return t(15714)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=11993)}),_N_E=e.O()}]);