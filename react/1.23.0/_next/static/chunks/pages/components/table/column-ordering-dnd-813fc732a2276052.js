(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6623],{25066:function(e,r,t){"use strict";t.r(r);var n=t(95412),i=t(73705),o=t(98922),a=t(1582),l=t(2784),c=t(92843),u=t(20103),d=t(28846),m=t(52797);function f(){return(f=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach(function(r){var n;n=t[r],r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function p(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t,n,i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var o=[],a=!0,l=!1;try{for(i=i.call(e);!(a=(t=i.next()).done)&&(o.push(t.value),!r||o.length!==r);a=!0);}catch(e){l=!0,n=e}finally{try{a||null==i.return||i.return()}finally{if(l)throw n}}return o}}(e,r)||g(e,r)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,r){if(e){if("string"==typeof e)return b(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return b(e,r)}}function b(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=Array(r);t<r;t++)n[t]=e[t];return n}var v=function(e){var r=e.canDrag,t=e.canDrop,n=e.children,i=e.item,o=e.onDrop,a=p((0,c.c)({type:"column",item:i,canDrag:r,collect:function(e){return{isDragging:e.isDragging()}}}),3),l=a[0],d=a[1],m=a[2],f=p((0,u.L)({accept:"column",drop:o,canDrop:t,collect:function(e){return{isOver:e.isOver()}}}),2),s=f[0];return n({dragRef:d,dragPreviewRef:m,dropRef:f[1],isDragging:l.isDragging,isOver:s.isOver})};r.default=function(){var e=p((0,o.useColorMode)(),1)[0],r={dark:"rgba(255, 255, 255, 0.12)",light:"rgba(0, 0, 0, 0.12)"}[e],t={dark:"rgba(255, 255, 255, 0.08)",light:"rgba(0, 0, 0, 0.08)"}[e],c=(0,l.useMemo)(function(){return[{id:1,priority:1,policy:"Team Managers",modifiedTime:16258752e5,modifiedBy:"admin"},{id:2,priority:2,policy:"Marketing Team",modifiedTime:16258752e5,modifiedBy:"admin"},{id:3,priority:3,policy:"Sales Department",modifiedTime:16258752e5,modifiedBy:"admin"},{id:4,priority:4,policy:"Development Team",modifiedTime:16258752e5,modifiedBy:"admin"},{id:5,priority:5,policy:"IT Department",modifiedTime:16258752e5,modifiedBy:"admin"},{id:6,priority:null,policy:"Server policy (Default)",modifiedTime:16250976e5,modifiedBy:"admin"},{id:7,priority:null,policy:"Endpoint policy (Default)",modifiedTime:16250976e5,modifiedBy:"admin"}]},[]),u=(0,l.useMemo)(function(){return[{id:"priority",header:"Priority",accessorKey:"priority",cell:function(e){var r=(0,e.getValue)();return null!=r?r:"-"},size:80},{id:"policy",header:"Policy",accessorKey:"policy",size:240},{id:"modifiedTime",header:"Last Modified",accessorKey:"modifiedTime",cell:function(e){var r=(0,e.getValue)(),t=new Date(r);return"Invalid Date"===t.toString()?"-":l.createElement(o.Truncate,null,t.toLocaleString())},size:180},{id:"modifiedBy",header:"Last Editor",accessorKey:"modifiedBy",size:150}]},[]),s=p((0,l.useState)(u.map(function(e){return e.id})),2),h=s[0],O=s[1],D=(0,n.b7)({data:c,columns:u,defaultColumn:{minSize:40},state:{columnOrder:h},onColumnOrderChange:O,getCoreRowModel:(0,i.sC)()}),w=function(e,r){var t=function(e){if(Array.isArray(e))return b(e)}(h)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(h)||g(h)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();t.splice(t.indexOf(r),0,t.splice(t.indexOf(e),1)[0]),console.log("# columnOrder:",h,t),O(t)};return l.createElement(d.W,{backend:m.PD},l.createElement(o.Table,{layout:"flexbox"},l.createElement(o.TableHeader,null,D.getHeaderGroups().map(function(e){return l.createElement(o.TableHeaderRow,{key:e.id},e.headers.map(function(e){return l.createElement(v,{key:e.id,item:function(){return e},onDrop:function(r,t){w(r.column.id,e.column.id)}},function(r){var i=r.dragRef,c=r.dragPreviewRef,u=r.dropRef,d=r.isDragging,m=r.isOver,s=y({opacity:d?.28:1,minWidth:e.column.columnDef.minSize,width:e.getSize(),_selected:{backgroundColor:t}},e.column.columnDef.style),p="priority"!==e.column.columnDef.id,g="priority"!==e.column.columnDef.id;return l.createElement(o.TableHeaderCell,f({ref:g?u:void 0,"data-selected":(0,a.dataAttr)(m)},s),l.createElement(o.Flex,{ref:c,alignItems:"center",columnGap:"2x"},e.isPlaceholder?null:l.createElement(o.Truncate,null,(0,n.ie)(e.column.columnDef.header,e.getContext())),p&&l.createElement(o.ButtonBase,{ref:i,cursor:"move",display:"none",sx:{"*:hover > &":{display:"inline-flex"}}},l.createElement(o.Icon,{icon:"menu"}))))})}))})),l.createElement(o.TableBody,null,D.getRowModel().rows.map(function(e,t){return l.createElement(o.TableRow,{key:e.id,_hover:{backgroundColor:r}},e.getVisibleCells().map(function(e){var r=y({minWidth:e.column.columnDef.minSize,width:e.column.getSize()},e.column.columnDef.style);return l.createElement(o.TableCell,f({key:e.id},r),l.createElement(o.Truncate,null,(0,n.ie)(e.column.columnDef.cell,e.getContext())))}))}))))}},1918:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/table/column-ordering-dnd",function(){return t(25066)}])}},function(e){e.O(0,[5412,754,9774,2888,179],function(){return e(e.s=1918)}),_N_E=e.O()}]);