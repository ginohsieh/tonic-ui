(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{20548:function(e,t,n){"use strict";var r=n(67569),l=n(2784);t.Z=function(e){return l.createElement(r.Flex,e,l.createElement(r.Flex,{flex:"none",mr:"4x",alignItems:"center"},l.createElement(r.Skeleton,{variant:"circle",width:"10x",height:"10x"})),l.createElement(r.Flex,{flex:"auto",flexDirection:"column",rowGap:"2x"},l.createElement(r.Skeleton,null),l.createElement(r.Skeleton,null),l.createElement(r.Skeleton,null)))}},44108:function(e,t,n){"use strict";n.r(t);var r=n(67569),l=n(5081),a=n(39097),o=n.n(a),c=n(2784),i=n(52954),m=n(17694),u=n(31475),d=n(20548),x=n(2265),s=n(35311),E=n(52057),h=n(30945);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _slicedToArray(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,l=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var a=[],o=!0,c=!1;try{for(l=l.call(e);!(o=(n=l.next()).done)&&(a.push(n.value),!t||a.length!==t);o=!0);}catch(e){c=!0,r=e}finally{try{o||null==l.return||l.return()}finally{if(c)throw r}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var p=(0,l.Zs)("/tonic-ui/react/1.29.0"),g="https://github.com/trendmicro-frontend/tonic-ui",f=(0,c.forwardRef)(function(e,t){var n=(0,r.usePortalManager)(),l=_slicedToArray((0,r.useColorMode)(),2),a=l[0],d=l[1],f=_slicedToArray((0,r.useColorStyle)({colorMode:a}),1)[0],y={light:"tonic-logo-light.svg",dark:"tonic-logo-dark.svg"}[a],b={light:"rgba(0, 0, 0, 0.12)",dark:"rgba(255, 255, 255, 0.12)"}[a],v=(0,x.Z)(),k=(0,c.useCallback)(function(){n(function(e){return c.createElement(m.Z,{onClose:function(){v("InstantSearch","close_instant_search_modal"),e()}})})},[n,v]),handleClickOpenInCodeSandbox=function(){(0,E.b)({title:"Tonic UI"})};return(0,c.useEffect)(function(){(0,h.Z)(a)},[a]),c.createElement(r.Box,_extends({as:"header",ref:t,position:"fixed",top:0,zIndex:"fixed",height:"12x",width:"100%",backdropFilter:"blur(20px)",backgroundColor:f.background.primary,boxShadow:"0px -1px 1px inset ".concat(b),transition:"all 0.2s"},e),c.createElement(r.Box,{display:"flex",position:"relative",height:"100%",alignItems:"center",justifyContent:"space-between"},c.createElement(r.Box,null,c.createElement(o(),{href:"/",legacyBehavior:!0,passHref:!0},c.createElement(r.Link,{"data-track":"Header|click_landing_page",background:"transparent",color:f.color.primary,fontSize:"xl",lineHeight:"lg",outline:"none",px:"4x",py:"2x",textDecoration:"none",_active:{color:f.color.emphasis},_hover:{color:f.color.emphasis},_visited:{color:f.color.primary}},c.createElement(r.Image,{alt:"",src:"".concat(p,"/images/").concat(y),height:"8x",marginRight:"2x"}),c.createElement(r.Text,null,"Tonic UI")))),c.createElement(r.Box,{display:"flex",flex:"none",width:"auto",alignItems:"center",columnGap:"4x",px:"4x"},c.createElement(u.Z,{"data-track":"Header|open_instant_search_modal",onClick:k},"Search..."),c.createElement(r.Box,{"data-track":"Header|click_codesandbox",as:"a",color:f.color.secondary,_hover:{color:f.color.primary,cursor:"pointer"},onClick:function(){return handleClickOpenInCodeSandbox()},display:"inline-flex",textDecoration:"none",title:"Open in CodeSandbox"},c.createElement(s.Z,{size:24})),c.createElement(r.Box,{"data-track":"Header|click_toggle_color_mode|".concat("light"===a?"dark":"light"),as:"a",color:f.color.secondary,_hover:{color:f.color.primary,cursor:"pointer"},onClick:function(){return d()},display:"inline-flex",textDecoration:"none",title:"Toggle color mode"},"light"===a&&c.createElement(r.Icon,{icon:"moon",size:24}),"dark"===a&&c.createElement(r.Icon,{icon:"sun",size:24})),c.createElement(r.Box,{"data-track":"Header|click_github_repo_url|".concat(g),as:"a",href:g,color:f.color.secondary,_hover:{color:f.color.primary,cursor:"pointer"},_visited:{color:f.color.secondary},display:"inline-flex",textDecoration:"none",title:"GitHub repository"},c.createElement(i.Z,{icon:["fab","github"],style:{width:24,height:24}})))))});f.displayName="DefaultPageHeader";var Round=function(e){var t=_slicedToArray((0,r.useColorMode)(),1)[0];return c.createElement(r.Box,_extends({borderWidth:1,borderColor:{dark:"gray:60",light:"gray:30"}[t],borderStyle:"solid",borderRadius:"md",height:"fit-content"},e))};Round.displayName="Round",t.default=function(e){var t=_slicedToArray((0,r.useColorMode)(),1)[0],n=_slicedToArray((0,r.useColorStyle)({colorMode:t}),1)[0],l={dark:"gray:70",light:"gray:30"}[t];return c.createElement(r.Box,_extends({backgroundColor:n.background.primary,color:n.color.primary,fontSize:"md",lineHeight:"md",height:"100vh"},e),c.createElement(f,null),c.createElement(r.Box,{maxWidth:{lg:"1024px",xl:"1280px","2xl":"1680px"},pt:"20x",px:"6x",mx:"auto"},c.createElement(r.Box,{display:"flex",flexDirection:{_:"column",xl:"row"},gap:"8x",alignItems:"center"},c.createElement(r.Box,{flex:"1"},c.createElement(r.Box,{mb:"5x"},c.createElement(r.Text,{fontSize:"4rem",fontWeight:"semibold",lineHeight:"1.25"},"Start building with Tonic UI today!")),c.createElement(r.Box,{mb:"5x"},c.createElement(r.Text,{color:n.color.tertiary},"Tonic UI is a UI component library for React, built with Emotion and Styled System. It is designed to be easy to use and easy to customize.")),c.createElement(r.Box,{display:"inline-flex"},c.createElement(r.Grid,{templateColumns:"1fr 1fr",gap:"4x"},c.createElement(o(),{href:"/getting-started",legacyBehavior:!0,passHref:!0},c.createElement(r.ButtonLink,{"data-track":"ClickThrough|click_get_started_link|/getting-started",variant:"primary",fontSize:"lg",lineHeight:"lg",px:"4x",py:"3x",textDecoration:"none"},"Get Started",c.createElement(r.Space,{width:"2x"}),c.createElement(r.Icon,{icon:"chevron-right"}))),c.createElement(o(),{href:g,legacyBehavior:!0,passHref:!0},c.createElement(r.ButtonLink,{target:"_blank","data-track":"ClickThrough|click_github_repo_url|".concat(g),variant:"secondary",fontSize:"lg",lineHeight:"lg",px:"4x",py:"3x",textDecoration:"none"},c.createElement(i.Z,{icon:["fab","github"],style:{width:24,height:24}}),c.createElement(r.Space,{width:"2x"}),c.createElement(r.Text,null,"GitHub")))))),c.createElement(r.Box,{flex:"1",p:"6x",backgroundColor:{light:"white",dark:"black"}[t],boxShadow:n.shadow.thick,width:"100%",fontSize:"sm",lineHeight:"sm"},c.createElement(r.Grid,{templateColumns:{sm:"1fr",md:"1fr",lg:"1fr",xl:"1fr 1fr"},gap:"6x"},c.createElement(r.Box,{display:"flex",flexDirection:"column",rowGap:"6x",whiteSpace:"nowrap"},c.createElement(r.Flex,{alignItems:"center",columnGap:"6x"},c.createElement(r.Badge,{variant:"dot",isInvisible:!0},c.createElement(r.Icon,{icon:"alert"})),c.createElement(r.Badge,{variant:"dot"},c.createElement(r.Icon,{icon:"alert"})),c.createElement(r.Badge,{variant:"dot",width:"3x",height:"3x"},c.createElement(r.Icon,{icon:"alert"})),c.createElement(r.Badge,{badgeContent:"99+"},c.createElement(r.Icon,{icon:"alert"})),c.createElement(r.Badge,{badgeContent:c.createElement(r.Text,{fontFamily:"mono",fontSize:"xs"},"!")},c.createElement(r.Icon,{icon:"alert"})),c.createElement(r.Badge,{badgeContent:"99+"},c.createElement(r.Skeleton,{variant:"rectangle",borderRadius:"sm",width:"8x",height:"8x"})),c.createElement(r.Badge,{badgeContent:c.createElement(r.Text,{fontFamily:"mono",fontSize:"xs"},"!")},c.createElement(r.Skeleton,{variant:"rectangle",borderRadius:"sm",width:"8x",height:"8x"}))),c.createElement(r.Box,null,c.createElement(r.Box,{display:"inline-flex",alignItems:"center",columnGap:"4x"},c.createElement(r.Flex,{columnGap:"2x"},c.createElement(r.Checkbox,{defaultChecked:!1}),c.createElement(r.Checkbox,{defaultChecked:!0})),c.createElement(r.Flex,{columnGap:"2x"},c.createElement(r.Switch,{size:"sm",defaultChecked:!1}),c.createElement(r.Switch,{size:"sm",defaultChecked:!0})),c.createElement(r.Flex,{columnGap:"2x"},c.createElement(r.Tag,{variant:"solid"},"Solid Tag"),c.createElement(r.Tag,{variant:"outline"},"Outline Tag")))),c.createElement(r.Box,null,c.createElement(r.Box,{display:"inline-flex",alignItems:"center",columnGap:"4x"},c.createElement(r.Flex,{columnGap:"2x"},c.createElement(r.Button,{variant:"primary"},"Primary"),c.createElement(r.Button,{variant:"secondary"},"Secondary")),c.createElement(r.ButtonGroup,null,c.createElement(r.Button,null,c.createElement(r.Icon,{icon:"chart-area"})),c.createElement(r.Divider,{orientation:"vertical",color:l}),c.createElement(r.Button,null,c.createElement(r.Icon,{icon:"chart-bar"})),c.createElement(r.Divider,{orientation:"vertical",color:l}),c.createElement(r.Button,null,c.createElement(r.Icon,{icon:"chart-pie"}))))),c.createElement(r.Box,null,c.createElement(r.InputGroup,null,c.createElement(r.InputGroupPrepend,null,c.createElement(r.InputGroupAddon,{variant:"filled"},"@")),c.createElement(r.Input,{placeholder:"Username"}))),c.createElement(r.Box,null,c.createElement(r.InputGroup,null,c.createElement(r.InputGroupPrepend,null,c.createElement(r.InputGroupAddon,{variant:"filled"},"$")),c.createElement(r.Input,null),c.createElement(r.InputGroupAppend,null,c.createElement(r.InputGroupAddon,{variant:"filled"},".00")))),c.createElement(r.Box,null,c.createElement(r.SearchInput,{placeholder:"Search"}))),c.createElement(r.Box,null,c.createElement(r.ModalContent,{height:"100%"},c.createElement(r.ModalHeader,null,"Modal Title"),c.createElement(r.ModalBody,null,c.createElement(r.Alert,{variant:"outline",severity:"warning",mb:"4x"},c.createElement(r.Text,null,"This is a warning alert")),c.createElement(r.Text,{mb:"4x"},"Modal body text goes here."),c.createElement(d.Z,null)),c.createElement(r.ModalFooter,null,c.createElement(r.Button,{variant:"primary",minWidth:"20x"},"Save Changes"),c.createElement(r.Space,{width:"2x"}),c.createElement(r.Button,{minWidth:"20x"},"Cancel")))),c.createElement(Round,{p:"3x"},c.createElement(r.MenuItem,{value:"general"},c.createElement(r.Icon,{icon:"settings",mr:"2x"}),c.createElement(r.Text,null,"General")),c.createElement(r.MenuItem,{value:"accounts"},c.createElement(r.Icon,{icon:"user-team",mr:"2x"}),c.createElement(r.Text,null,"Accounts")),c.createElement(r.MenuItem,{value:"privacy"},c.createElement(r.Icon,{icon:"lock",mr:"2x"}),c.createElement(r.Text,null,"Privacy")),c.createElement(r.MenuDivider,null),c.createElement(r.MenuItem,{disabled:!0,value:"restore-defaults"},c.createElement(r.Icon,{icon:"undo",mr:"2x"}),c.createElement(r.Text,null,"Restore Defaults"))),c.createElement(Round,null,c.createElement(r.Table,{variant:"default",pb:"3x"},c.createElement(r.TableHeader,null,c.createElement(r.TableHeaderRow,null,c.createElement(r.TableHeaderCell,{width:"240px"},c.createElement(r.Box,{display:"inline-flex",alignItems:"center"},"Name",c.createElement(r.Space,{width:"2x"}),c.createElement(r.Icon,{icon:"arrow-up",size:"3x"}))),c.createElement(r.TableHeaderCell,{width:"136px",textAlign:"right"},"Size"))),c.createElement(r.TableBody,null,c.createElement(r.TableRow,null,c.createElement(r.TableCell,{width:"240px"},"assets"),c.createElement(r.TableCell,{width:"136px",textAlign:"right"},"11 MB")),c.createElement(r.TableRow,null,c.createElement(r.TableCell,{width:"240px"},"build"),c.createElement(r.TableCell,{width:"136px",textAlign:"right"},"20 MB")),c.createElement(r.TableRow,null,c.createElement(r.TableCell,{width:"240px"},"src"),c.createElement(r.TableCell,{width:"136px",textAlign:"right"},"2 MB")),c.createElement(r.TableRow,null,c.createElement(r.TableCell,{width:"240px"},"test"),c.createElement(r.TableCell,{width:"136px",textAlign:"right"},"125.4 KB"))))))))))}},36885:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(44108)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=36885)}),_N_E=e.O()}]);