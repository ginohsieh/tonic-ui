(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9154],{44508:function(e,t,n){"use strict";n.r(t);var r=n(73705),o=n(98922),a=n(1582),i=n(2784),l=n(61374),s=["isExpanded"];function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a=[],i=!0,l=!1;try{for(o=o.call(e);!(i=(n=o.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){l=!0,r=e}finally{try{i||null==o.return||o.return()}finally{if(l)throw r}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var f=[{endpointId:"0d4523d9-ceed-4a9a-b3d0-056814ee8811",endpointHostname:"endpoint-1",endpointIPs:["fe80::c5a0:6dd9:1002:5760","10.1.136.130"],endpointMAC:"00:50:56:9c:3c:5a",eventId:1,eventSourceType:1,firstSeen:"2023-06-07T02:31:48Z",lastSeen:"2023-06-07T02:31:48Z",objectFirstSeen:"2023-06-07T02:27:34Z",objectLastSeen:"2023-06-07T02:32:04Z",objectIPs:["192.8.82.3","199.7.83.46","192.113.5.32"],osDescription:"Windows 10 Enterprise (64-bit) build 19044",osType:"0x00000007",osVer:"10.0.19044",processCmd:"C:\\Windows\\System32\\svchost.exe -k NetworkService -p -s NlaSvc",processFileCreation:"2023-06-05T10:07:28Z",processFileHashMD5:"b7f884c1b74a263f746ee12a5f7c9f6a",processFileHashSHA1:"1bc5066ddf693fc034d6514618854e26a84fd0d1",processFileHashSHA256:"add683a6910abbbf0e28b557fad0ba998166394932ae2aca069d9aa19ea8fe88",processFileModifiedTime:"2023-06-05T10:07:28Z",processFileSize:55320,processLaunchTime:"2023-06-06T09:42:15Z",processName:"C:\\Windows\\System32\\svchost.exe",processId:1408,processSigner:"Microsoft Windows Publisher",processSignerValid:!0,processUser:"NETWORK SERVICE",processUserDomain:"NT AUTHORITY",productCode:"dummy",productVersion:"x.y.z",sessionId:0,timezone:"Pacific Standard Time"}],p=(0,i.forwardRef)(function(e,t){var n=e.isExpanded,r=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,s),l=n?Math.floor(93.1):133,u=a.transitionEasing.easeOut,d=n?(0,a.getEnterTransitionProps)({timeout:l,easing:u}):(0,a.getExitTransitionProps)({timeout:l,easing:u}),f={transform:n?"rotate(90deg)":"rotate(0deg)",transition:(0,a.createTransitionStyle)("transform",d)};return i.createElement(o.ButtonBase,r,i.createElement(o.Icon,c({icon:"angle-right",size:"4x"},f)))});p.displayName="TableRowToggleIcon",t.default=function(){var e=u((0,o.useColorMode)(),1)[0],t=u((0,o.useColorStyle)({colorMode:e}),1)[0],n=(0,i.useMemo)(function(){return[{id:"toggle-expanded",header:function(){return null},cell:function(e){var t=e.row,n=t.getCanExpand(),r=t.getIsExpanded();return n?i.createElement(p,{isExpanded:r,onClick:t.getToggleExpandedHandler()}):null},size:48},{header:"Logged",accessorKey:"firstSeen",size:180,cell:function(e){var t,n=e.row;return i.createElement(o.Truncate,null,null===(t=n.original)||void 0===t?void 0:t.firstSeen)}},{id:"details",cell:function(e){var n=Object.entries(e.row.original);return i.createElement(o.Truncate,{as:"pre",fontFamily:"mono",m:0,sx:{"--truncate-line-clamp":3,wordBreak:"break-all",whiteSpace:"normal",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:"var(--truncate-line-clamp)"}},n.map(function(e,r){var a=u(e,2),l=a[0],s=a[1];return i.createElement(o.Box,{key:l,display:"inline"},l,": ",i.createElement(o.Text,{display:"inline",color:t.color.tertiary},Array.isArray(s)?s.join(","):s),r<n.length-1&&i.createElement(o.Divider,{display:"inline",orientation:"vertical",mx:"2x"}))}))},size:"auto"}]},[e,t]),a=(0,i.useMemo)(function(){return{defaultColumn:{minSize:48},getExpandedRowModel:(0,r.rV)(),getRowCanExpand:function(){return!0}}},[]),s=(0,i.useRef)(null);return(0,i.useEffect)(function(){s.current&&s.current.toggleAllRowsExpanded(!0)},[]),i.createElement(o.Box,{height:500},i.createElement(l.Z,{layout:"flexbox",variant:"default",columns:n,data:f,tableOptions:a,tableRef:s}))}},99889:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/patterns/table-display/expandable-table-rows",function(){return n(44508)}])}},function(e){e.O(0,[5412,1374,9774,2888,179],function(){return e(e.s=99889)}),_N_E=e.O()}]);