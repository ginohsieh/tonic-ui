(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8996],{43973:function(e,t,n){"use strict";n.r(t);var r=n(98922),o=n(2784);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],l=!0,a=!1;try{for(o=o.call(e);!(l=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);l=!0);}catch(e){a=!0,r=e}finally{try{l||null==o.return||o.return()}finally{if(a)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}t.default=function(){var e=i((0,o.useState)(!1),2),t=e[0],n=e[1],l=i((0,r.useColorMode)(),1)[0],a=i((0,r.useColorStyle)(),1)[0],u=(0,o.useRef)(),c=(0,o.useRef)();return o.createElement(r.Flex,{ref:u,sx:{boxShadow:a.shadow.thick,cursor:t?"col-resize":"default"}},o.createElement(r.Flex,{ref:c,flex:"none",alignItems:"center",justifyContent:"center",width:"40%",height:240},"Left"),o.createElement(r.Flex,{flex:"auto",alignItems:"center",justifyContent:"center",position:"relative",borderLeft:1,borderLeftColor:{dark:"gray:70",light:"gray:30"}[l]},o.createElement(r.ResizeHandle,{onResizeStart:function(){n(!0)},onResizeEnd:function(){n(!1)},onResize:function(e){var t=e.clientX,n=c.current;if(n){var r=u.current.getBoundingClientRect(),o=r.left,i=r.width;t-o>=Math.min(160,.2*i)&&t-o<=Math.max(i-160,.8*i)&&(n.style.width="".concat(t-o,"px"))}},sx:{position:"absolute",left:-1,top:0,bottom:0,zIndex:1}}),o.createElement(r.Box,null,"Right")))}},19149:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/resize-handle/resizable",function(){return n(43973)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=19149)}),_N_E=e.O()}]);