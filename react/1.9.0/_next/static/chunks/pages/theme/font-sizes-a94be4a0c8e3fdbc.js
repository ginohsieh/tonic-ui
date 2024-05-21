(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7859],{8980:function(t,e,n){"use strict";var r=n(5945),a=n(2784),l=n(7846),o=n(2767);function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,a,l=[],o=!0,i=!1;try{for(n=n.call(t);!(o=(r=n.next()).done)&&(l.push(r.value),!e||l.length!==e);o=!0);}catch(p){i=!0,a=p}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}e.Z=function(t){var e,n=t.theme,p=(0,r.useTheme)(),f=i((0,r.useColorMode)(),1)[0],u=null!==(e=i((0,r.useColorStyle)({colorMode:f}),1)[0][n])&&void 0!==e?e:p[n];if(!u)return"Theme field not found";"space"!==n&&"sizes"!==n||(u=Object.keys(u).filter((function(t){return!t.toString().match(/[qh]$/)})).reduce((function(t,e){return t[e]=u[e],t}),{}));return a.createElement(r.Box,{mb:"6x"},a.createElement(l.Z,null,"const ".concat(n," = ").concat((0,o.Z)(u,!1))))}},2767:function(t,e){"use strict";e.Z=function(t){return JSON.stringify(t,null,2).replace(/"/g,"'").replace(/'(\d+|[a-z]+)':/g,"$1:")}},4414:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return f}});n(2784);var r=n(876),a=(n(5945),n(8980)),l=["components"];function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p={};function f(t){var e=t.components,n=i(t,l);return(0,r.kt)("wrapper",o({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",null,"Font Sizes"),(0,r.kt)("h2",null,"Design Tokens"),(0,r.kt)(a.Z,{theme:"fontSizes",mdxType:"ThemeParser"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Size"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pixels"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"xs"),(0,r.kt)("td",{parentName:"tr",align:"left"},".75rem"),(0,r.kt)("td",{parentName:"tr",align:"left"},"12px")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sm"),(0,r.kt)("td",{parentName:"tr",align:"left"},".875rem"),(0,r.kt)("td",{parentName:"tr",align:"left"},"14px")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"md"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1rem"),(0,r.kt)("td",{parentName:"tr",align:"left"},"16px")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"lg"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.125rem"),(0,r.kt)("td",{parentName:"tr",align:"left"},"18px")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"xl"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.25rem"),(0,r.kt)("td",{parentName:"tr",align:"left"},"20px")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2xl"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.5rem"),(0,r.kt)("td",{parentName:"tr",align:"left"},"24px")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3xl"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.75rem"),(0,r.kt)("td",{parentName:"tr",align:"left"},"28px")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4xl"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2rem"),(0,r.kt)("td",{parentName:"tr",align:"left"},"32px")))),(0,r.kt)("h2",null,"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Flex flexDirection="column" rowGap="3x">\n  <Box fontSize="xs" lineHeight="xs">Font Size 12px</Box>\n  <Box fontSize="sm" lineHeight="sm">Font Size 14px</Box>\n  <Box fontSize="md" lineHeight="md">Font Size 16px</Box>\n  <Box fontSize="lg" lineHeight="lg">Font Size 18px</Box>\n  <Box fontSize="xl" lineHeight="xl">Font Size 20px</Box>\n  <Box fontSize="2xl" lineHeight="2xl">Font Size 24px</Box>\n  <Box fontSize="3xl" lineHeight="3xl">Font Size 28px</Box>\n  <Box fontSize="4xl" lineHeight="4xl">Font Size 32px</Box>\n</Flex>\n')))}f.isMDXComponent=!0},7152:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/theme/font-sizes",function(){return n(4414)}])}},function(t){t.O(0,[9774,2888,179],(function(){return e=7152,t(t.s=e);var e}));var e=t.O();_N_E=e}]);