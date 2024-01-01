(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9356],{14819:function(e,t,n){"use strict";var r=n(34406);function a(e){return"object"!=typeof e||"toString"in e?e:Object.prototype.toString.call(e).slice(8,-1)}Object.defineProperty(t,"__esModule",{value:!0});var o="object"==typeof r;function i(e,t){if(!e){if(o)throw Error("Invariant failed");throw Error(t())}}t.invariant=i;var c=Object.prototype.hasOwnProperty,u=Array.prototype.splice,l=Object.prototype.toString;function f(e){return l.call(e).slice(8,-1)}var s=Object.assign||function(e,t){return p(t).forEach(function(n){c.call(t,n)&&(e[n]=t[n])}),e},p="function"==typeof Object.getOwnPropertySymbols?function(e){return Object.keys(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.keys(e)};function d(e){return Array.isArray(e)?s(e.constructor(e.length),e):"Map"===f(e)?new Map(e):"Set"===f(e)?new Set(e):e&&"object"==typeof e?s(Object.create(Object.getPrototypeOf(e)),e):e}var y=function(){function e(){this.commands=s({},g),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(e,t){return e===t},this.update.newContext=function(){return new e().update}}return Object.defineProperty(e.prototype,"isEquals",{get:function(){return this.update.isEquals},set:function(e){this.update.isEquals=e},enumerable:!0,configurable:!0}),e.prototype.extend=function(e,t){this.commands[e]=t},e.prototype.update=function(e,t){var n=this,r="function"==typeof t?{$apply:t}:t;Array.isArray(e)&&Array.isArray(r)||i(!Array.isArray(r),function(){return"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."}),i("object"==typeof r&&null!==r,function(){return"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: "+Object.keys(n.commands).join(", ")+"."});var a=e;return p(r).forEach(function(t){if(c.call(n.commands,t)){var o=e===a;a=n.commands[t](r[t],a,r,e),o&&n.isEquals(a,e)&&(a=e)}else{var i="Map"===f(e)?n.update(e.get(t),r[t]):n.update(e[t],r[t]),u="Map"===f(a)?a.get(t):a[t];n.isEquals(i,u)&&(void 0!==i||c.call(e,t))||(a===e&&(a=d(e)),"Map"===f(a)?a.set(t,i):a[t]=i)}}),a},e}();t.Context=y;var g={$push:function(e,t,n){return h(t,n,"$push"),e.length?t.concat(e):t},$unshift:function(e,t,n){return h(t,n,"$unshift"),e.length?e.concat(t):t},$splice:function(e,t,n,r){var o;return i(Array.isArray(o=t),function(){return"Expected $splice target to be an array; got "+a(o)}),v(n.$splice),e.forEach(function(e){v(e),t===r&&e.length&&(t=d(r)),u.apply(t,e)}),t},$set:function(e,t,n){return i(1===Object.keys(n).length,function(){return"Cannot have more than one key in an object with $set"}),e},$toggle:function(e,t){m(e,"$toggle");var n=e.length?d(t):t;return e.forEach(function(e){n[e]=!t[e]}),n},$unset:function(e,t,n,r){return m(e,"$unset"),e.forEach(function(e){Object.hasOwnProperty.call(t,e)&&(t===r&&(t=d(r)),delete t[e])}),t},$add:function(e,t,n,r){return E(t,"$add"),m(e,"$add"),"Map"===f(t)?e.forEach(function(e){var n=e[0],a=e[1];t===r&&t.get(n)!==a&&(t=d(r)),t.set(n,a)}):e.forEach(function(e){t!==r||t.has(e)||(t=d(r)),t.add(e)}),t},$remove:function(e,t,n,r){return E(t,"$remove"),m(e,"$remove"),e.forEach(function(e){t===r&&t.has(e)&&(t=d(r)),t.delete(e)}),t},$merge:function(e,t,n,r){var o;return o=t,i(e&&"object"==typeof e,function(){return"update(): $merge expects a spec of type 'object'; got "+a(e)}),i(o&&"object"==typeof o,function(){return"update(): $merge expects a target of type 'object'; got "+a(o)}),p(e).forEach(function(n){e[n]!==t[n]&&(t===r&&(t=d(r)),t[n]=e[n])}),t},$apply:function(e,t){return i("function"==typeof e,function(){return"update(): expected spec of $apply to be a function; got "+a(e)+"."}),e(t)}},b=new y;function h(e,t,n){i(Array.isArray(e),function(){return"update(): expected target of "+a(n)+" to be an array; got "+a(e)+"."}),m(t[n],n)}function m(e,t){i(Array.isArray(e),function(){return"update(): expected spec of "+a(t)+" to be an array; got "+a(e)+". Did you forget to wrap your parameter in an array?"})}function v(e){i(Array.isArray(e),function(){return"update(): expected spec of $splice to be an array of arrays; got "+a(e)+". Did you forget to wrap your parameters in an array?"})}function E(e,t){var n=f(e);i("Map"===n||"Set"===n,function(){return"update(): "+a(t)+" expects a target of type Set or Map; got "+a(n)})}t.isEquals=b.update.isEquals,t.extend=b.extend,t.default=b.update,t.default.default=e.exports=s(t.default,t)},70990:function(e,t,n){"use strict";let r;n.r(t),n.d(t,{default:function(){return A}});var a=n(98922),o=n(2784),i=n(20103),c=n(92843),u=n(94543),l=n(46402),f=n(28846),s=n(52797),p=n(14819),d=n.n(p),y=["id","row","index","moveTr"];function g(){return(g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var o=[],i=!0,c=!1;try{for(a=a.call(e);!(i=(n=a.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){c=!0,r=e}finally{try{i||null==a.return||a.return()}finally{if(c)throw r}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var m={TR:"tr"},v=function(e){var t=e.id,n=e.row,u=e.index,l=e.moveTr,f=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,y),s=(0,o.useRef)(null),p=b((0,i.L)({accept:m.TR,hover:function(e,t){if(s.current){var n=e.index;if(n!==u){var r=s.current?s.current.getBoundingClientRect():{},a=(r.bottom-r.top)/2,o=t.getClientOffset().y-r.top;n<u&&o<a||n>u&&o>a||(l(n,u),e.index=u)}}}}),2)[1],d=b((0,c.c)({type:m.TR,item:{id:t,index:u,row:n},collect:function(e){return{isDragging:e.isDragging()}}}),3),h=d[0].isDragging,v=d[1],E=d[2];return v(p(s)),(0,o.useEffect)(function(){E((r||((r=new Image).src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),r),{captureDraggingState:!0})},[E]),o.createElement(a.TableRow,g({},f,{ref:s,style:{cursor:"move",opacity:h?0:1}}),o.createElement(a.TableCell,{width:"240px"},n.eventType),o.createElement(a.TableCell,{width:"140px",textAlign:"right"},n.affectedDevices),o.createElement(a.TableCell,{width:"136px",textAlign:"right"},n.detections))},E=function(e){var t=function(e){let t=(0,l.N)(),n=t.getMonitor(),[r,a]=(0,u.r)(n,e);return(0,o.useEffect)(()=>n.subscribeToOffsetChange(a)),(0,o.useEffect)(()=>n.subscribeToStateChange(a)),r}(function(e){return{item:e.getItem(),itemType:e.getItemType(),initialOffset:e.getInitialSourceClientOffset(),currentOffset:e.getSourceClientOffset(),isDragging:e.isDragging()}}),n=t.itemType,r=t.isDragging,i=t.item,c=t.initialOffset,f=t.currentOffset;if(!r)return null;if(n===m.TR){var s=i.row;return o.createElement(a.Box,{style:{position:"fixed",pointerEvents:"none",zIndex:100,left:0,top:0}},o.createElement(a.Box,{style:function(e,t){if(!e||!t)return{display:"none"};var n=t.x,r=t.y,a="translate(".concat(n,"px, ").concat(r,"px)");return{transform:a,WebkitTransform:a}}(c,f)},o.createElement(a.TableRow,e,o.createElement(a.TableCell,{width:"240px"},s.eventType),o.createElement(a.TableCell,{width:"140px",textAlign:"right"},s.affectedDevices),o.createElement(a.TableCell,{width:"136px",textAlign:"right"},s.detections))))}return null},A=function(){var e=b((0,o.useState)([{id:1,eventType:"Virus/Malware",affectedDevices:20,detections:634},{id:2,eventType:"Spyware/Grayware",affectedDevices:20,detections:634},{id:3,eventType:"URL Filtering",affectedDevices:15,detections:598},{id:4,eventType:"Web Reputation",affectedDevices:15,detections:598},{id:5,eventType:"Network Virus",affectedDevices:15,detections:497},{id:6,eventType:"Application Control",affectedDevices:0,detections:0}]),2),t=e[0],n=e[1],r=(0,o.useCallback)(function(e,r){var a=t[e];n(d()(t,{$splice:[[e,1],[r,0,a]]}))},[t]),i=(0,a.useColorMode)().colorMode,c={dark:{backgroundColor:"gray:100"},light:{backgroundColor:"white"}}[i];return o.createElement(f.W,{backend:s.PD},o.createElement(a.Table,{dark:{backgroundColor:"gray:80"},light:{backgroundColor:"gray:10"}}[i],o.createElement(a.TableHeader,null,o.createElement(a.TableHeaderRow,c,o.createElement(a.TableHeaderCell,{width:"240px"},"Event Type"),o.createElement(a.TableHeaderCell,{width:"140px",textAlign:"right"},"Affected Devices"),o.createElement(a.TableHeaderCell,{width:"136px",textAlign:"right"},"Detections"))),o.createElement(a.TableBody,null,t.map(function(e,t){return o.createElement(v,g({},c,{key:e.id,index:t,id:e.id,row:e,moveTr:r}))}),o.createElement(E,c))))}},35534:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/table/backup/reordering-rows-with-react-dnd",function(){return n(70990)}])}},function(e){e.O(0,[754,9774,2888,179],function(){return e(e.s=35534)}),_N_E=e.O()}]);