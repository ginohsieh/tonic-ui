(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7176],{5487:function(e,t,n){"use strict";n.r(t);var r=n(98922),a=n(49427),o=n(14529),i=n(96913),c=n(36890),l=n(50272),s=n(40363),m=n(46102),u=n(5081),g=n(2784);function f(){return(f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var o=[],i=!0,c=!1;try{for(a=a.call(e);!(i=(n=a.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){c=!0,r=e}finally{try{i||null==a.return||a.return()}finally{if(c)throw r}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var E=(0,u.Zs)("/tonic-ui/react/1.21.3"),x=[{id:1,seen:!0,icon:g.createElement(r.Image,{alt:"",src:"".concat(E,"/images/patterns/notification/icon-notification-highlight.svg")}),message:g.createElement(r.Text,null,"Place your highlight message here."),time:(0,o.Z)((0,i.Z)(new Date,2)).getTime()},{id:2,seen:!1,icon:g.createElement(r.Image,{alt:"",src:"".concat(E,"/images/patterns/notification/icon-notification-success.svg")}),message:g.createElement(r.Text,null,"Place your success message here."),time:(0,c.Z)(new Date,30).getTime()},{id:3,seen:!1,icon:g.createElement(r.Image,{alt:"",src:"".concat(E,"/images/patterns/notification/icon-notification-error.svg")}),message:g.createElement(r.Text,null,"Place your error message here."),time:(0,l.Z)(new Date,5).getTime()},{id:4,seen:!1,icon:g.createElement(r.Image,{alt:"",src:"".concat(E,"/images/patterns/notification/icon-notification-warning.svg")}),message:g.createElement(r.Text,null,"Place your warning message here."),time:(0,l.Z)(new Date,30).getTime()},{id:5,seen:!1,icon:g.createElement(r.Image,{alt:"",src:"".concat(E,"/images/patterns/notification/icon-notification-info.svg")}),message:g.createElement(r.Text,null,"Place your info message here."),time:(0,l.Z)(new Date,60).getTime()}],y=[{id:1,seen:!1,icon:g.createElement(r.Image,{alt:"",src:"".concat(E,"/images/patterns/notification/icon-notification-progress.svg")}),message:g.createElement(r.Stack,{spacing:"1x"},g.createElement(r.Text,{fontSize:"sm",lineHeight:"sm"},"Place your progessive message here."),g.createElement(r.Text,{fontSize:"xs",lineHeight:"xs"},"Pending")),time:(0,c.Z)(new Date,10).getTime()},{id:2,seen:!1,icon:g.createElement(r.Image,{alt:"",src:"".concat(E,"/images/patterns/notification/icon-notification-success.svg")}),message:g.createElement(r.Stack,{spacing:"1x"},g.createElement(r.Text,{fontSize:"sm",lineHeight:"sm"},"Place your success message here."),g.createElement(r.Text,{fontSize:"xs",lineHeight:"xs"},"Successful")),time:(0,l.Z)(new Date,5).getTime()},{id:3,seen:!1,icon:g.createElement(r.Image,{alt:"",src:"".concat(E,"/images/patterns/notification/icon-notification-error.svg")}),message:g.createElement(r.Stack,{spacing:"1x"},g.createElement(r.Text,{fontSize:"sm",lineHeight:"sm"},"Place your error message here."),g.createElement(r.Text,{fontSize:"xs",lineHeight:"xs"},"Unsuccessful")),time:(0,l.Z)(new Date,30).getTime()}],p=function(e){var t=d((0,a.useToggle)(!1),2),n=t[0],o=t[1],i={backgroundColor:d((0,r.useColorStyle)(),1)[0].background.secondary,height:"12x",alignItems:"center",justifyContent:"space-between"},c=d(g.useState(new Date),2),l=c[0],s=c[1];(0,g.useEffect)(function(){var e=setInterval(function(){s(new Date)},1e3);return function(){clearInterval(e)}},[]);var m=x.filter(function(e){return!e.seen}).length,u=y.filter(function(e){return!e.seen}).length;return(0,a.useEffectOnce)(function(){o(!0)}),g.createElement(r.Flex,f({},i,e),g.createElement(r.Flex,{alignItems:"center",ml:"5x"},g.createElement(r.Text,{fontSize:"2xl",lineHeight:"2xl"},"Product Name"),g.createElement(r.Divider,{orientation:"vertical",height:"5x",mx:"2x"}),g.createElement(r.Text,{fontSize:"sm",lineHeight:"sm"},"Home")),g.createElement(r.Flex,{height:"100%"},g.createElement(b,{columnGap:"2x"},g.createElement(r.Icon,{icon:"clock"}),g.createElement(r.Text,null,l.toLocaleDateString()),g.createElement(r.Text,null,l.toLocaleTimeString())),g.createElement(v,null),g.createElement(r.Menu,{isOpen:n,onClose:function(){return o(!1)},onOpen:function(){return o(!0)},closeOnBlur:!1,placement:"bottom-end",offset:[0,1]},g.createElement(r.MenuToggle,null,g.createElement(b,{as:r.Box,"aria-selected":n},g.createElement(r.Badge,{badgeContent:m+u},g.createElement(r.Icon,{icon:"alert"})))),g.createElement(r.MenuContent,null,g.createElement(T,{sx:{width:480}})))))},b=function(e){var t=d((0,r.useColorMode)(),1)[0],n=d((0,r.useColorStyle)({colorMode:t}),1)[0],a={display:"inline-flex",alignItems:"center",backgroundColor:n.background.secondary,px:"4x",height:"100%",_hover:{backgroundColor:n.background.highlighted},_selected:{backgroundColor:n.background.selected}};return g.createElement(r.ButtonBase,f({},a,e))},v=function(e){var t=d((0,r.useColorMode)(),1)[0];return g.createElement(r.Divider,f({orientation:"vertical"},{borderColor:{dark:"gray:100",light:"gray:20"}[t],height:"100%"},e))},T=function(e){var t=d((0,r.useColorStyle)(),1)[0],n={backgroundColor:t.background.secondary,fontSize:"sm",lineHeight:"sm",display:"flex",alignItems:"center",justifyContent:"center",px:"3x",py:"10q",_selected:{backgroundColor:t.background.tertiary}},a={backgroundColor:t.background.tertiary},o=new Date().getTime(),i=x.filter(function(e){return!e.seen}).length,c=y.filter(function(e){return!e.seen}).length;return g.createElement(r.Tabs,f({orientation:"horizontal",variant:"unstyled"},e),g.createElement(r.TabList,{sx:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)"}},g.createElement(r.Tab,n,g.createElement(r.Text,null,"Notifications (",i,")")),g.createElement(r.Tab,n,g.createElement(r.Text,null,"Tasks (",c,")"))),g.createElement(r.TabPanels,null,g.createElement(r.TabPanel,a,0===x.length&&g.createElement(r.Flex,{flexDirection:"column",alignItems:"center",justifyContent:"center",height:360},g.createElement(r.Box,{mb:"3x"},g.createElement(r.Image,{alt:"",src:"".concat(E,"/images/patterns/notification/notification-empty-content.svg")})),g.createElement(r.Text,{color:t.color.tertiary},"No notifications to display")),x.length>0&&g.createElement(r.Scrollbar,{height:360,overflowY:"visible"},x.map(function(e){return g.createElement(k,{key:e.id},g.createElement(r.Flex,{columnGap:"2x"},g.createElement(r.Box,{position:"relative",width:"9x"},!e.seen&&g.createElement(r.Box,{position:"absolute",top:15,left:-10,width:5,height:5,borderRadius:"50%",backgroundColor:"cyan:30"}),e.icon),g.createElement(r.Box,null,g.createElement(r.Box,{mb:"3x"},e.message),!!e.time&&g.createElement(r.Text,{color:t.color.secondary},(0,s.Z)(e.time,o,{addSuffix:!0})," ","(".concat((0,m.Z)(e.time),")")))))}))),g.createElement(r.TabPanel,a,0===y.length&&g.createElement(r.Flex,{flexDirection:"column",alignItems:"center",justifyContent:"center",height:360},g.createElement(r.Box,{mb:"3x"},g.createElement(r.Image,{alt:"",src:"".concat(E,"/images/patterns/notification/notification-empty-content.svg")})),g.createElement(r.Text,{color:t.color.tertiary},"No tasks to display")),y.length>0&&g.createElement(r.Scrollbar,{height:360,overflowY:"visible"},y.map(function(e){return g.createElement(k,{key:e.id},g.createElement(r.Flex,{columnGap:"2x"},g.createElement(r.Box,{position:"relative",width:"9x"},!e.seen&&g.createElement(r.Box,{position:"absolute",top:15,left:-10,width:5,height:5,borderRadius:"50%",backgroundColor:"cyan:30"}),e.icon),g.createElement(r.Box,null,g.createElement(r.Box,{mb:"3x"},e.message),!!e.time&&g.createElement(r.Text,{color:t.color.secondary},(0,s.Z)(e.time,o,{addSuffix:!0})," ","(".concat((0,m.Z)(e.time),")")))))})))))},k=function(e){var t=d((0,r.useColorMode)(),1)[0],n=d((0,r.useColorStyle)({colorMode:t}),1)[0],a={backgroundColor:n.background.tertiary,borderBottom:1,borderBottomColor:{dark:"gray:100",light:"gray:20"}[t],px:"4x",py:"4x",textAlign:"left",width:"100%",_hover:{backgroundColor:n.background.highlighted}};return g.createElement(r.ButtonBase,f({},a,e))};t.default=function(){var e={backgroundColor:d((0,r.useColorStyle)(),1)[0].background.primary,height:480};return g.createElement(r.Box,e,g.createElement(p,null),g.createElement(r.Box,{p:"4x"},g.createElement(r.Text,{fontSize:"xl",lineHeight:"xl"},"Home")))}},73804:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/patterns/notification/notification-center",function(){return n(5487)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=73804)}),_N_E=e.O()}]);