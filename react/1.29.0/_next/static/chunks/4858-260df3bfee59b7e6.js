"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4858],{83449:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(67569),o=r(49427),a=r(5632),l=r(2784),i=r(65245),c=r(82821),u=r(90622),s=r(52057),f=r(63651),d=["size"];function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var y=(0,l.forwardRef)(function(e,t){var r=e.size,o=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,d);return l.createElement(n.SVGIcon,_extends({size:r,viewBox:"0 0 1024 1024"},o),l.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"}))});y.displayName="CodeSandboxIcon";var m=r(94981);function _slicedToArray(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],l=!0,i=!1;try{for(o=o.call(e);!(l=(r=o.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(e){i=!0,n=e}finally{try{l||null==o.return||o.return()}finally{if(i)throw n}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var p={fontFamily:'"SFMono-Medium", "SF Mono", "Segoe UI Mono", Menlo, Consolas, Courier, monospace',fontSize:14,overflowX:"auto"},Demo=function(e){var t=e.component,r=e.file,d=e.sandbox,h=(0,a.useRouter)(),b=_slicedToArray((0,l.useReducer)(function(e){return!e},!1),2),v=b[0],g=b[1],x=_slicedToArray((0,n.useColorMode)(),1)[0],E={dark:u.y,light:u.q}[x],O=_slicedToArray((0,o.useToggle)(!1),2),S=O[0],k=O[1],C=(0,c.Z)(null==r?void 0:r.data),A=C.onCopy,_=C.hasCopied,w=(0,l.useCallback)(function(){A()},[A]),T=(0,l.useCallback)(function(){(0,s.b)(d)},[d]),j=(0,l.useCallback)(function(){g(),k(!1)},[g,k]);return l.createElement(i.nu,{code:null==r?void 0:r.data,disabled:!0,language:"jsx",theme:E},l.createElement(n.Box,{border:1,borderColor:{dark:"gray:70",light:"gray:30"}[x],p:"4x"},l.createElement(n.Box,{fontSize:"sm",lineHeight:"sm"},l.createElement(l.Fragment,{key:v},l.createElement(t,null)))),l.createElement(n.Flex,{columnGap:"2x",justifyContent:"flex-end",mb:"4x"},l.createElement(m.Z,{"data-track":S?"CodeBlock|hide_source|".concat((0,f.Z)({path:h.pathname})):"CodeBlock|show_source|".concat((0,f.Z)({path:h.pathname})),onClick:k},l.createElement(n.Tooltip,{label:S?"Hide the source":"Show the source"},l.createElement(n.Icon,{icon:"code",size:{sm:"5x",md:"4x"}}))),l.createElement(m.Z,{"data-track":"CodeBlock|copy_source|".concat((0,f.Z)({path:h.pathname})),onClick:w},l.createElement(n.Tooltip,{label:_?"Copied":"Copy the source"},l.createElement(n.Icon,{icon:"file-copy-o",size:{sm:"5x",md:"4x"}}))),l.createElement(m.Z,{"data-track":"CodeBlock|edit_in_codesandbox|".concat(h.pathname),onClick:T},l.createElement(n.Tooltip,{label:"Edit in CodeSandbox"},l.createElement(y,{size:{sm:"5x",md:"4x"}}))),l.createElement(m.Z,{"data-track":"CodeBlock|reset|".concat(h.pathname),onClick:j},l.createElement(n.Tooltip,{label:"Reset the demo"},l.createElement(n.Icon,{icon:"redo",size:{sm:"5x",md:"4x"}})))),l.createElement(n.Fade,{in:S},l.createElement(n.Collapse,{in:S,unmountOnExit:!0},l.createElement(i.uz,{style:p}))))};Demo.displayName="Demo";var h=Demo},91338:function(e,t,r){var n=r(67569),o=r(1582),a=r(5081),l=r(2784),i=["children","highlightSelectedOption","options","onChange","renderOption","value"];function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var c=(0,l.forwardRef)(function(e,t){var r,c=e.children,u=e.highlightSelectedOption,s=void 0!==u&&u,f=e.options,d=e.onChange,y=e.renderOption,m=void 0===y?o.noop:y,p=e.value,h=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,i),b=function(e){if(Array.isArray(e))return e}(r=(0,l.useState)(null!=p?p:""))||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],l=!0,i=!1;try{for(o=o.call(e);!(l=(r=o.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(e){i=!0,n=e}finally{try{l||null==o.return||o.return()}finally{if(i)throw n}}return a}}(r,2)||function(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,t)}}(r,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),v=b[0],g=b[1];(0,l.useEffect)(function(){void 0!==p&&g(p)},[p]);var x=(0,l.useCallback)(function(e){void 0!==p||g(e),(0,a.zU)(d)(e)},[p,d]);return l.createElement(n.Menu,_extends({ref:t},h),l.createElement(n.MenuToggle,null,c),l.createElement(n.MenuList,{width:"max-content"},(void 0===f?[]:f).map(function(e){var t=v===e;return l.createElement(n.MenuItem,{"data-selected":s?t:void 0,key:e,onClick:function(t){x(e)}},m(e))})))});c.displayName="Dropdown",t.Z=c},6980:function(e,t,r){var n=r(67569),o=r(1582),a=r(5081),l=r(2784),i=r(78141),c=r.n(i),u=["children","highlightSelectedOption","isSearchable","options","onChange","renderOption","shouldSelectAllIfNoneSelected","value"];function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function _slicedToArray(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,n,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],l=!0,i=!1;try{for(o=o.call(e);!(l=(r=o.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(e){i=!0,n=e}finally{try{l||null==o.return||o.return()}finally{if(i)throw n}}return a}}(e,t)||_unsupportedIterableToArray(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,t)}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var s=(0,l.forwardRef)(function(e,t){var r=e.children,i=e.highlightSelectedOption,s=void 0!==i&&i,f=e.isSearchable,d=void 0!==f&&f,y=e.options,m=void 0===y?[]:y,p=e.onChange,h=e.renderOption,b=void 0===h?o.noop:h,v=e.shouldSelectAllIfNoneSelected,g=void 0!==v&&v,x=e.value,E=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,u),O=(0,l.useRef)(),S=_slicedToArray((0,n.useColorMode)(),1)[0],k=_slicedToArray((0,n.useColorStyle)({colorMode:S}),1)[0],C=(0,n.useTheme)().colors,A=_slicedToArray((0,l.useState)((0,a.rY)(x)),2),_=A[0],w=A[1],T=_slicedToArray((0,l.useState)(""),2),j=T[0],I=T[1];(0,l.useEffect)(function(){void 0!==x&&w((0,a.rY)(x))},[x]);var L=(0,l.useCallback)(function(e){w(e)},[]),M=_.length===m.length,z=0===_.length,handleKeyDown=function(e){if("Enter"===e.key||" "===e.key){var t=e.currentTarget.querySelector("input");if(t){var r=function(e){if(Array.isArray(e))return _arrayLikeToArray(e)}(_)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(_)||_unsupportedIterableToArray(_)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();-1===r.indexOf(t.value)?r.push(t.value):r.splice(r.indexOf(t.value),1),w(r)}}},Z=(0,a.Zs)(j).trim().toLowerCase(),B=m.filter(function(e){return!Z||b(e).trim().toLowerCase().includes(Z)});return l.createElement(n.Menu,_extends({ref:t,closeOnSelect:!1,defaultActiveIndex:0,onClose:function(){z&&g?(w(m),(0,a.zU)(p)(m)):(0,a.zU)(p)(_)}},E),l.createElement(n.MenuToggle,null,r),l.createElement(n.MenuList,{width:"max-content"},d&&l.createElement(n.Box,{px:"3x",mb:"2x"},l.createElement(n.SearchInput,{inputProps:{role:"menuitem",onKeyDown:function(e){var t=e.target,r=t.selectionStart,n=t.selectionEnd,o=t.value,a=r===o.length&&n===o.length;0===r&&0===n&&["ArrowUp","Home"].includes(e.key)||a&&["ArrowDown","End"].includes(e.key)||e.stopPropagation()}},ref:O,value:j,onClearInput:function(e){I("")},onChange:function(e){I(e.target.value)}})),l.createElement(n.CheckboxGroup,{size:"sm",value:_,onChange:L},!Z&&l.createElement(n.Box,{px:"3x",mb:"2x"},l.createElement(n.LinkButton,{key:"toggle",onClick:function(e){w(M?[]:m)}},M?"Clear all":"Select all")),l.createElement(n.Scrollbar,{maxHeight:250,overflowY:"auto"},B.map(function(e){var t=_.includes(e);return l.createElement(n.MenuItem,{"data-selected":s?t:void 0,key:e,onKeyDown:handleKeyDown},l.createElement(n.Checkbox,{value:e,width:"100%"},l.createElement(c(),{searchWords:[Z],textToHighlight:b(e),highlightStyle:{backgroundColor:C[k.text.highlight],color:C["gray:100"]}})))})))))});s.displayName="Multiselect",t.Z=s}}]);