(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7634],{8980:function(n,e,t){"use strict";var r=t(5945),o=t(2784),l=t(7846),u=t(2767);function a(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,o,l=[],u=!0,a=!1;try{for(t=t.call(n);!(u=(r=t.next()).done)&&(l.push(r.value),!e||l.length!==e);u=!0);}catch(c){a=!0,o=c}finally{try{u||null==t.return||t.return()}finally{if(a)throw o}}return l}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return c(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}e.Z=function(n){var e,t=n.theme,c=(0,r.useTheme)(),i=a((0,r.useColorMode)(),1)[0],s=null!==(e=a((0,r.useColorStyle)({colorMode:i}),1)[0][t])&&void 0!==e?e:c[t];if(!s)return"Theme field not found";"space"!==t&&"sizes"!==t||(s=Object.keys(s).filter((function(n){return!n.toString().match(/[qh]$/)})).reduce((function(n,e){return n[e]=s[e],n}),{}));return o.createElement(r.Box,{mb:"6x"},o.createElement(l.Z,null,"const ".concat(t," = ").concat((0,u.Z)(s,!1))))}},2767:function(n,e){"use strict";e.Z=function(n){return JSON.stringify(n,null,2).replace(/"/g,"'").replace(/'(\d+|[a-z]+)':/g,"$1:")}},6121:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return i}});t(2784);var r=t(876),o=(t(5945),t(8980)),l=["components"];function u(){return u=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},u.apply(this,arguments)}function a(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c={};function i(n){var e=n.components,t=a(n,l);return(0,r.kt)("wrapper",u({},c,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",null,"zIndices"),(0,r.kt)("h2",null,"Design Tokens"),(0,r.kt)(o.Z,{theme:"zIndices",mdxType:"ThemeParser"}),(0,r.kt)("h2",null,"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function Example() {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n\n  return (\n    <Box position=\"relative\" py=\"3x\" px=\"4x\" height={360}>\n      {['dropdown', 'sticky', 'fixed', 'overlay', 'drawer', 'modal', 'popover', 'toast', 'tooltip'].map((name, index) => {\n        const zIndexValue = 1000 + index * 100;\n\n        return (\n          <Box\n            key={name}\n            backgroundColor={colorStyle.background.secondary}\n            boxShadow={colorStyle.shadow.thin}\n            color={colorStyle.color.secondary}\n            position=\"absolute\"\n            top={12 + index * 36}\n            left={12 + index * 16}\n            zIndex={name}\n            width={150}\n            px=\"4x\"\n            py=\"3x\"\n            textAlign=\"center\"\n            transition=\"transform 0.2s ease-in-out\"\n            _hover={{\n              color: colorStyle.color.primary,\n              transform: 'scale(1.1)',\n            }}\n          >\n            {name}={zIndexValue}\n          </Box>\n        );\n      })}\n    </Box>\n  );\n}\n")))}i.isMDXComponent=!0},3522:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/theme/z-indices",function(){return t(6121)}])}},function(n){n.O(0,[9774,2888,179],(function(){return e=3522,n(n.s=e);var e}));var e=n.O();_N_E=e}]);