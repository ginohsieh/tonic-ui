(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5769],{6344:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return x}});var s=t(52322),r=t(45392),a=t(16959),i=t(67569),o=t(2784);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,n,t){var s;return(s=function(e,n){if("object"!==l(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var s=t.call(e,n||"default");if("object"!==l(s))return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(n,"string"),(n="symbol"===l(s)?s:String(s))in e)?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var d=function(){var e=(0,i.useToastManager)(),n=(0,o.useCallback)(function(){e(function(e){var n=e.onClose,t=c(c({},e.placement.includes("top")?"pb":"pt","2x"),"width",320);return o.createElement(i.Box,{sx:t},o.createElement(i.Toast,{isClosable:!0,onClose:n},o.createElement(i.Text,null,"This is a toast notification")))},{placement:"bottom-right",duration:5e3})},[e]);return o.createElement(i.Button,{onClick:n},"Open Toast")};function h(e){var n=Object.assign({div:"div",h1:"h1",p:"p",code:"code",h2:"h2",a:"a",svg:"svg",use:"use",pre:"pre",h3:"h3",h4:"h4",em:"em"},(0,r.ah)(),e.components);return(0,s.jsxs)(n.div,{className:"main-content",id:"main-content",children:["\n","\n",(0,s.jsx)(n.h1,{id:"usetoastmanager",children:"useToastManager"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"useToastManager"})," Hook provides several methods and properties for managing toasts in a React application."]}),"\n",(0,s.jsxs)(n.h2,{id:"import",children:["Import",(0,s.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,s.jsx)(n.svg,{children:(0,s.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { useToastManager } from '@tonic-ui/react';\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"usage",children:["Usage",(0,s.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usage",children:(0,s.jsx)(n.svg,{children:(0,s.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const toast = useToastManager();\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"useToastManager"})," Hook returns an object with the following methods and properties:"]}),"\n",(0,s.jsxs)(n.h3,{id:"toastmessage-options",children:["toast(message, [options=","{}","])",(0,s.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#toastmessage-options",children:(0,s.jsx)(n.svg,{children:(0,s.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,s.jsx)(n.p,{children:"Create a toast at the specified placement and return the toast id."}),"\n",(0,s.jsxs)(n.h4,{id:"aliases",children:["Aliases",(0,s.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#aliases",children:(0,s.jsx)(n.svg,{children:(0,s.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,s.jsx)("dl",{children:(0,s.jsx)("dd",{children:(0,s.jsxs)(n.em,{children:["toast.notify(message, [options=","{}","])"]})})}),"\n",(0,s.jsxs)(n.h4,{id:"parameters",children:["Parameters",(0,s.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#parameters",children:(0,s.jsx)(n.svg,{children:(0,s.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,s.jsxs)("dl",{children:[(0,s.jsxs)("dd",{children:[(0,s.jsx)(n.code,{children:"message"})," ",(0,s.jsx)(n.em,{children:"(Function|string)"}),": The toast message to render."]}),(0,s.jsxs)("dd",{children:[(0,s.jsx)(n.code,{children:"[options={}]"})," ",(0,s.jsx)(n.em,{children:"(Object)"}),": The options object."]}),(0,s.jsxs)("dd",{children:[(0,s.jsx)(n.code,{children:"[options.data]"})," ",(0,s.jsx)(n.em,{children:"(any)"}),": The user-defined data supplied to the toast."]}),(0,s.jsxs)("dd",{children:[(0,s.jsx)(n.code,{children:"[options.duration=null]"})," ",(0,s.jsx)(n.em,{children:"(number)"}),": The duration (in milliseconds) that the toast should remain on the screen. If set to null, toast will never dismiss."]}),(0,s.jsxs)("dd",{children:[(0,s.jsx)(n.code,{children:"[options.id]"})," ",(0,s.jsx)(n.em,{children:"(string)"}),": A unique ID of the toast."]}),(0,s.jsxs)("dd",{children:[(0,s.jsx)(n.code,{children:"[options.placement]"})," ",(0,s.jsx)(n.em,{children:"(string)"}),": The placement of the toast."]})]}),"\n",(0,s.jsxs)(n.h4,{id:"returns",children:["Returns",(0,s.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#returns",children:(0,s.jsx)(n.svg,{children:(0,s.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,s.jsx)("dl",{children:(0,s.jsxs)("dd",{children:[(0,s.jsx)(n.em,{children:"(string)"}),": Returns the toast id."]})}),"\n",(0,s.jsxs)(n.h3,{id:"toastcloseid",children:["toast.close(id)",(0,s.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#toastcloseid",children:(0,s.jsx)(n.svg,{children:(0,s.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,s.jsx)(n.p,{children:"Close a toast at its placement."}),"\n",(0,s.jsxs)(n.h4,{id:"parameters-1",children:["Parameters",(0,s.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#parameters-1",children:(0,s.jsx)(n.svg,{children:(0,s.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,s.jsx)("dl",{children:(0,s.jsxs)("dd",{children:[(0,s.jsx)(n.code,{children:"id"})," ",(0,s.jsx)(n.em,{children:"(string)"}),": The id to close the toast."]})}),"\n",(0,s.jsxs)(n.h4,{id:"returns-1",children:["Returns",(0,s.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#returns-1",children:(0,s.jsx)(n.svg,{children:(0,s.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,s.jsx)("dl",{children:(0,s.jsx)("dd",{children:"This method does not return anything."})}),"\n",(0,s.jsxs)(n.h3,{id:"toastclosealloptions",children:["toast.closeAll([options=","{}","])",(0,s.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#toastclosealloptions",children:(0,s.jsx)(n.svg,{children:(0,s.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Close all toasts at once with the given placements, including ",(0,s.jsx)(n.code,{children:"top"}),", ",(0,s.jsx)(n.code,{children:"top-left"}),", ",(0,s.jsx)(n.code,{children:"top-right"}),", ",(0,s.jsx)(n.code,{children:"bottom"}),", ",(0,s.jsx)(n.code,{children:"bottom-left"}),", ",(0,s.jsx)(n.code,{children:"bottom-right"}),"."]}),"\n",(0,s.jsxs)(n.h4,{id:"parameters-2",children:["Parameters",(0,s.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#parameters-2",children:(0,s.jsx)(n.svg,{children:(0,s.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,s.jsxs)("dl",{children:[(0,s.jsxs)("dd",{children:[(0,s.jsx)(n.code,{children:"[options={}]"})," ",(0,s.jsx)(n.em,{children:"(Object)"}),": The options object."]}),(0,s.jsxs)("dd",{children:[(0,s.jsx)(n.code,{children:"[options.placements=[]]"})," ",(0,s.jsx)(n.em,{children:"(Array)"}),": An array of placements to close toasts."]})]}),"\n",(0,s.jsxs)(n.h4,{id:"returns-2",children:["Returns",(0,s.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#returns-2",children:(0,s.jsx)(n.svg,{children:(0,s.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,s.jsx)("dl",{children:(0,s.jsx)("dd",{children:"This method does not return anything."})}),"\n",(0,s.jsxs)(n.h3,{id:"toastfindid",children:["toast.find(id)",(0,s.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#toastfindid",children:(0,s.jsx)(n.svg,{children:(0,s.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Find the first toast in the array that matches the provided toast id. Otherwise, ",(0,s.jsx)(n.code,{children:"undefined"})," is returned if not found."]}),"\n",(0,s.jsxs)(n.h4,{id:"parameters-3",children:["Parameters",(0,s.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#parameters-3",children:(0,s.jsx)(n.svg,{children:(0,s.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,s.jsx)("dl",{children:(0,s.jsxs)("dd",{children:[(0,s.jsx)(n.code,{children:"id"})," ",(0,s.jsx)(n.em,{children:"(string)"}),": The id to find the toast."]})}),"\n",(0,s.jsxs)(n.h4,{id:"returns-3",children:["Returns",(0,s.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#returns-3",children:(0,s.jsx)(n.svg,{children:(0,s.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,s.jsx)("dl",{children:(0,s.jsxs)("dd",{children:[(0,s.jsx)(n.em,{children:"(Object)"}),": Returns the toast object."]})}),"\n",(0,s.jsxs)(n.h3,{id:"toastfindindexid",children:["toast.findIndex(id)",(0,s.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#toastfindindexid",children:(0,s.jsx)(n.svg,{children:(0,s.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,s.jsx)(n.p,{children:"Find the first toast in the array that matches the provided toast id. Otherwise, -1 is returned if not found."}),"\n",(0,s.jsxs)(n.h4,{id:"parameters-4",children:["Parameters",(0,s.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#parameters-4",children:(0,s.jsx)(n.svg,{children:(0,s.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,s.jsx)("dl",{children:(0,s.jsxs)("dd",{children:[(0,s.jsx)(n.code,{children:"id"})," ",(0,s.jsx)(n.em,{children:"(string)"}),": The id to find the toast."]})}),"\n",(0,s.jsxs)(n.h4,{id:"returns-4",children:["Returns",(0,s.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#returns-4",children:(0,s.jsx)(n.svg,{children:(0,s.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,s.jsx)("dl",{children:(0,s.jsxs)("dd",{children:[(0,s.jsx)(n.em,{children:"(number)"}),": Returns the array index."]})}),"\n",(0,s.jsxs)(n.h3,{id:"toastupdateid-options",children:["toast.update(id, [options=","{}","])",(0,s.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#toastupdateid-options",children:(0,s.jsx)(n.svg,{children:(0,s.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,s.jsx)(n.p,{children:"Update a specific toast with new options based on the given toast id."}),"\n",(0,s.jsxs)(n.h4,{id:"parameters-5",children:["Parameters",(0,s.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#parameters-5",children:(0,s.jsx)(n.svg,{children:(0,s.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,s.jsxs)("dl",{children:[(0,s.jsxs)("dd",{children:[(0,s.jsx)(n.code,{children:"id"})," ",(0,s.jsx)(n.em,{children:"(string)"}),": The id to update the toast."]}),(0,s.jsxs)("dd",{children:[(0,s.jsx)(n.code,{children:"[options={}]"})," ",(0,s.jsx)(n.em,{children:"(Object)"}),": The options object."]}),(0,s.jsxs)("dd",{children:[(0,s.jsx)(n.code,{children:"[options.duration=null]"})," ",(0,s.jsx)(n.em,{children:"(number)"}),": The duration (in milliseconds) that the toast should remain on the screen. If set to null, toast will never dismiss."]}),(0,s.jsxs)("dd",{children:[(0,s.jsx)(n.code,{children:"[options.message]"})," ",(0,s.jsx)(n.em,{children:"(Function|string)"}),": The toast message to render."]})]}),"\n",(0,s.jsxs)(n.h4,{id:"returns-5",children:["Returns",(0,s.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#returns-5",children:(0,s.jsx)(n.svg,{children:(0,s.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,s.jsx)("dl",{children:(0,s.jsxs)("dd",{children:["Returns ",(0,s.jsx)(n.code,{children:"true"})," if the toast exists, else ",(0,s.jsx)(n.code,{children:"false"}),"."]})}),"\n",(0,s.jsxs)(n.h3,{id:"toastplacement",children:["toast.placement",(0,s.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#toastplacement",children:(0,s.jsx)(n.svg,{children:(0,s.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,s.jsx)(n.p,{children:"Specify the placement to place the toast. The default placement will be used if the placement option is not explicitly specified."}),"\n",(0,s.jsxs)(n.h3,{id:"toastsetstatestate--updater",children:["toast.setState(state | updater)",(0,s.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#toastsetstatestate--updater",children:(0,s.jsx)(n.svg,{children:(0,s.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"setState"})," method is used to modify the internal state of the toast manager. It provides the ability to add, remove, or update toast messages."]}),"\n",(0,s.jsxs)(n.h4,{id:"parameters-6",children:["Parameters",(0,s.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#parameters-6",children:(0,s.jsx)(n.svg,{children:(0,s.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,s.jsx)("dl",{children:(0,s.jsxs)("dd",{children:[(0,s.jsx)(n.code,{children:"state"})," ",(0,s.jsx)(n.em,{children:"(Object)"})," | ",(0,s.jsx)(n.code,{children:"updater"})," ",(0,s.jsx)(n.em,{children:"(Function)"}),": The state object or the updater function."]})}),"\n",(0,s.jsxs)(n.h4,{id:"returns-6",children:["Returns",(0,s.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#returns-6",children:(0,s.jsx)(n.svg,{children:(0,s.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,s.jsx)("dl",{children:(0,s.jsx)("dd",{children:"This method does not return anything."})}),"\n",(0,s.jsxs)(n.p,{children:["You can choose to provide either the state object or the updater function as the parameter to ",(0,s.jsx)(n.code,{children:"setState"})," based on your preference and the complexity of the state update you want to perform."]}),"\n",(0,s.jsx)(n.p,{children:"Example usage with a state object:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"toast.setState({\n  'top': [\n    {\n      id: '2',\n      duration: 3000,\n      message: 'New toast message',\n      onClose: () => toast.close('2'),\n      placement: 'top',\n    }\n  ],\n  'top-left': [],\n  'top-right': [],\n  'bottom': [],\n  'bottom-left': [],\n  'bottom-right': [],\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example usage with an updater function:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"toast.setState(prevState => ({\n  ...prevState,\n  'top': [\n    ...prevState['top'],\n    {\n      id: '2',\n      duration: null,\n      message: 'New toast message',\n      onClose: () => toast.close('2', 'top'),\n      placement: 'top',\n    },\n  ],\n}));\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"toaststate",children:["toast.state",(0,s.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#toaststate",children:(0,s.jsx)(n.svg,{children:(0,s.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,s.jsx)(n.p,{children:"The toast state is a placement object, each placement contains an array of objects representing the current toasts."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"{\n  'top': [\n    {\n      id: '1', // A unique identifier that represents the toast message\n      duration: null, // The duration (in milliseconds) that the toast should remain on the screen. If set to null, toast will never dismiss.\n      message: ({ id, onClose, placement }) => <Toast />, // The toast message to render\n      onClose: () => toast.close(id, placement), // The function to close the toast\n      placement: 'top', // The placement of the toast\n    },\n  ],\n  'top-left': [],\n  'top-right': [],\n  'bottom': [],\n  'bottom-left': [],\n  'bottom-right': [],\n}\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"demos",children:["Demos",(0,s.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#demos",children:(0,s.jsx)(n.svg,{children:(0,s.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,s.jsx)(a.Z,{component:d,file:{data:"import {\n  Box,\n  Button,\n  Text,\n  Toast,\n  useToastManager,\n} from '@tonic-ui/react';\nimport React, { useCallback } from 'react';\n\nconst App = () => {\n  const toast = useToastManager();\n  const handleClickOpenToast = useCallback(() => {\n    const render = ({ onClose, placement }) => {\n      const isTop = placement.includes('top');\n      const toastSpacingKey = isTop ? 'pb' : 'pt';\n      const styleProps = {\n        [toastSpacingKey]: '2x',\n        width: 320,\n      };\n\n      return (\n        <Box sx={styleProps}>\n          <Toast isClosable onClose={onClose}>\n            <Text>This is a toast notification</Text>\n          </Toast>\n        </Box>\n      );\n    };\n    const options = {\n      placement: 'bottom-right',\n      duration: 5000,\n    };\n    toast(render, options);\n  }, [toast]);\n\n  return (\n    <Button onClick={handleClickOpenToast}>\n      Open Toast\n    </Button>\n  );\n};\n\nexport default App;",path:"pages/components/toast-manager/useToastManager.page.mdx"},sandbox:{files:{},raw:"import {\n  Box,\n  Button,\n  Text,\n  Toast,\n  useToastManager,\n} from '@tonic-ui/react';\nimport React, { useCallback } from 'react';\n\nconst App = () => {\n  const toast = useToastManager();\n  const handleClickOpenToast = useCallback(() => {\n    const render = ({ onClose, placement }) => {\n      const isTop = placement.includes('top');\n      const toastSpacingKey = isTop ? 'pb' : 'pt';\n      const styleProps = {\n        [toastSpacingKey]: '2x',\n        width: 320,\n      };\n\n      return (\n        <Box sx={styleProps}>\n          <Toast isClosable onClose={onClose}>\n            <Text>This is a toast notification</Text>\n          </Toast>\n        </Box>\n      );\n    };\n    const options = {\n      placement: 'bottom-right',\n      duration: 5000,\n    };\n    toast(render, options);\n  }, [toast]);\n\n  return (\n    <Button onClick={handleClickOpenToast}>\n      Open Toast\n    </Button>\n  );\n};\n\nexport default App;",title:"Tonic UI"}})]})}var x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.ah)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}},16959:function(e,n,t){"use strict";t.d(n,{Z:function(){return k}});var s=t(67569),r=t(49427),a=t(5632),i=t(2784),o=t(65245),l=t(16245),c=t(76761),d=t(73205),h=t(98107),x=["size"];function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e}).apply(this,arguments)}var m=(0,i.forwardRef)(function(e,n){var t=e.size,r=function(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)t=a[s],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}(e,x);return i.createElement(s.SVGIcon,u({size:t,viewBox:"0 0 1024 1024"},r),i.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"}))});m.displayName="CodeSandboxIcon";var p=t(44285);function j(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var s,r,a,i,o=[],l=!0,c=!1;try{if(a=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;l=!1}else for(;!(l=(s=a.call(t)).done)&&(o.push(s.value),o.length!==n);l=!0);}catch(e){c=!0,r=e}finally{try{if(!l&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(c)throw r}}return o}}(e,n)||function(e,n){if(e){if("string"==typeof e)return f(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if("Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,s=Array(n);t<n;t++)s[t]=e[t];return s}var g={fontFamily:'"SFMono-Medium", "SF Mono", "Segoe UI Mono", Menlo, Consolas, Courier, monospace',fontSize:14,overflowX:"auto"},b=function(e){var n=e.component,t=e.file,x=e.sandbox,u=(0,a.useRouter)(),f=j((0,i.useReducer)(function(e){return!e},!1),2),b=f[0],k=f[1],v=j((0,s.useColorMode)(),1)[0],y={dark:c.y,light:c.q}[v],T=j((0,r.useToggle)(!1),2),C=T[0],I=T[1],N=(0,l.Z)(null==t?void 0:t.data),w=N.onCopy,E=N.hasCopied,O=(0,i.useCallback)(function(){w()},[w]),S=(0,i.useCallback)(function(){(0,d.b)(x)},[x]),H=(0,i.useCallback)(function(){k(),I(!1)},[k,I]);return i.createElement(o.nu,{code:null==t?void 0:t.data,disabled:!0,language:"jsx",theme:y},i.createElement(s.Box,{border:1,borderColor:{dark:"gray:70",light:"gray:30"}[v],p:"4x"},i.createElement(s.Box,{fontSize:"sm",lineHeight:"sm"},i.createElement(i.Fragment,{key:b},i.createElement(n,null)))),i.createElement(s.Flex,{columnGap:"2x",justifyContent:"flex-end",mb:"4x"},i.createElement(p.Z,{"data-track":C?"CodeBlock|hide_source|".concat((0,h.Z)({path:u.pathname})):"CodeBlock|show_source|".concat((0,h.Z)({path:u.pathname})),onClick:I},i.createElement(s.Tooltip,{label:C?"Hide the source":"Show the source"},i.createElement(s.Icon,{icon:"code",size:{sm:"5x",md:"4x"}}))),i.createElement(p.Z,{"data-track":"CodeBlock|copy_source|".concat((0,h.Z)({path:u.pathname})),onClick:O},i.createElement(s.Tooltip,{label:E?"Copied":"Copy the source"},i.createElement(s.Icon,{icon:"file-copy-o",size:{sm:"5x",md:"4x"}}))),i.createElement(p.Z,{"data-track":"CodeBlock|edit_in_codesandbox|".concat(u.pathname),onClick:S},i.createElement(s.Tooltip,{label:"Edit in CodeSandbox"},i.createElement(m,{size:{sm:"5x",md:"4x"}}))),i.createElement(p.Z,{"data-track":"CodeBlock|reset|".concat(u.pathname),onClick:H},i.createElement(s.Tooltip,{label:"Reset the demo"},i.createElement(s.Icon,{icon:"redo",size:{sm:"5x",md:"4x"}})))),i.createElement(s.Fade,{in:C},i.createElement(s.Collapse,{in:C,unmountOnExit:!0},i.createElement(o.uz,{style:g}))))};b.displayName="Demo";var k=b},1128:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/toast-manager/useToastManager",function(){return t(6344)}])}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=1128)}),_N_E=e.O()}]);