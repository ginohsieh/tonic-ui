(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7754],{8980:function(t,e,n){"use strict";var r=n(5945),a=n(2784),l=n(7846),i=n(2767);function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,a,l=[],i=!0,u=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(l.push(r.value),!e||l.length!==e);i=!0);}catch(o){u=!0,a=o}finally{try{i||null==n.return||n.return()}finally{if(u)throw a}}return l}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}e.Z=function(t){var e,n=t.theme,o=(0,r.useTheme)(),m=u((0,r.useColorMode)(),1)[0],p=null!==(e=u((0,r.useColorStyle)({colorMode:m}),1)[0][n])&&void 0!==e?e:o[n];if(!p)return"Theme field not found";"space"!==n&&"sizes"!==n||(p=Object.keys(p).filter((function(t){return!t.toString().match(/[qh]$/)})).reduce((function(t,e){return t[e]=p[e],t}),{}));return a.createElement(r.Box,{mb:"6x"},a.createElement(l.Z,null,"const ".concat(n," = ").concat((0,i.Z)(p,!1))))}},2767:function(t,e){"use strict";e.Z=function(t){return JSON.stringify(t,null,2).replace(/"/g,"'").replace(/'(\d+|[a-z]+)':/g,"$1:")}},9582:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return m}});n(2784);var r=n(876),a=(n(5945),n(8980)),l=["components"];function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o={};function m(t){var e=t.components,n=u(t,l);return(0,r.kt)("wrapper",i({},o,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",null,"Line Heights"),(0,r.kt)("h2",null,"Design Tokens"),(0,r.kt)(a.Z,{theme:"lineHeights",mdxType:"ThemeParser"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Line height"),(0,r.kt)("th",{parentName:"tr",align:null},"Pixels"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xs"),(0,r.kt)("td",{parentName:"tr",align:null},"1.125rem"),(0,r.kt)("td",{parentName:"tr",align:null},"18px")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sm"),(0,r.kt)("td",{parentName:"tr",align:null},"1.25rem"),(0,r.kt)("td",{parentName:"tr",align:null},"20px")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"md"),(0,r.kt)("td",{parentName:"tr",align:null},"1.375rem"),(0,r.kt)("td",{parentName:"tr",align:null},"22px")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lg"),(0,r.kt)("td",{parentName:"tr",align:null},"1.5rem"),(0,r.kt)("td",{parentName:"tr",align:null},"24px")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xl"),(0,r.kt)("td",{parentName:"tr",align:null},"1.75rem"),(0,r.kt)("td",{parentName:"tr",align:null},"28px")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2xl"),(0,r.kt)("td",{parentName:"tr",align:null},"2rem"),(0,r.kt)("td",{parentName:"tr",align:null},"32px")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3xl"),(0,r.kt)("td",{parentName:"tr",align:null},"2.25rem"),(0,r.kt)("td",{parentName:"tr",align:null},"36px")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4xl"),(0,r.kt)("td",{parentName:"tr",align:null},"2.5rem"),(0,r.kt)("td",{parentName:"tr",align:null},"40px")))),(0,r.kt)("h2",null,"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="row" spacing="12x">\n  <Box width="324px" lineHeight="sm">\n    <Box>Line height 1.25rem</Box>\n    <Box>Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus.</Box>\n  </Box>\n  <Box width="324px" lineHeight="lg">\n    <Box>Line height 1.5rem</Box>\n    <Box>Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus.</Box>\n  </Box>\n  <Box width="324px" lineHeight="2xl">\n    <Box>Line height 2rem</Box>\n    <Box>Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus.</Box>\n  </Box>\n</Stack>\n')))}m.isMDXComponent=!0},9174:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/theme/line-heights",function(){return n(9582)}])}},function(t){t.O(0,[9774,2888,179],(function(){return e=9174,t(t.s=e);var e}));var e=t.O();_N_E=e}]);