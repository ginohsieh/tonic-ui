(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6474],{69577:function(e,n,o){"use strict";o.r(n);var r=o(52322),l=o(45392);function _createMdxContent(e){var n=Object.assign({div:"div",h1:"h1",p:"p",h2:"h2",a:"a",svg:"svg",use:"use",code:"code",pre:"pre",h3:"h3",ul:"ul",li:"li"},(0,l.ah)(),e.components);return(0,r.jsxs)(n.div,{className:"main-content",id:"main-content",children:[(0,r.jsx)(n.h1,{id:"colormodeprovider",children:"ColorModeProvider"}),"\n",(0,r.jsx)(n.p,{children:"Tonic UI comes with built-in support for managing color modes in your app."}),"\n",(0,r.jsxs)(n.h2,{id:"setup",children:["Setup",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#setup",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["By using ",(0,r.jsx)(n.code,{children:"TonicProvider"})," at root of your application, it will add ",(0,r.jsx)(n.code,{children:"ColorModeProvider"})," internally to provide the color mode context to all components. The default color mode is ",(0,r.jsx)(n.code,{children:"light"})," if not specified."]}),"\n",(0,r.jsxs)(n.p,{children:["To get color mode working correctly, you may have to pass ",(0,r.jsx)(n.code,{children:"colorMode"})," config to ",(0,r.jsx)(n.code,{children:"TonicProvider"})," with ",(0,r.jsx)(n.code,{children:"defaultValue"})," set to ",(0,r.jsx)(n.code,{children:"dark"})," or ",(0,r.jsx)(n.code,{children:"light"}),"."]}),"\n",(0,r.jsx)(n.pre,{disabled:!0,children:(0,r.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\nimport { Box, TonicProvider } from '@tonic-ui/react';\n\nfunction App(props) {\n  return (\n    <TonicProvider\n      /**\n       * The `colorMode` config\n       * @param {'dark'|'light'} defaultValue\n       * @param {'dark'|'light'} value\n       * @param {function} onChange\n       * @param {boolean} useSystemColorMode\n       */\n      colorMode={{\n        defaultValue: 'dark',\n      }}\n    >\n      <Box {...props} />\n    </TonicProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"The above setup is equivalent to:"}),"\n",(0,r.jsx)(n.pre,{disabled:!0,children:(0,r.jsx)(n.code,{className:"language-jsx",children:'<ColorModeProvider defaultValue="dark">\n  <Box {...props} />\n</ColorModeProvider>\n'})}),"\n",(0,r.jsxs)(n.h3,{id:"the-colormode-config",children:["The ",(0,r.jsx)(n.code,{children:"colorMode"})," config",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#the-colormode-config",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"colorMode"})," config has the following options:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"defaultValue"}),": The default value for the color mode. It can be ",(0,r.jsx)(n.code,{children:"light"})," or ",(0,r.jsx)(n.code,{children:"dark"}),". The default value is ",(0,r.jsx)(n.code,{children:"light"})," if not specified."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"value"}),": The current value for the color mode. It can be ",(0,r.jsx)(n.code,{children:"light"})," or ",(0,r.jsx)(n.code,{children:"dark"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onChange(colorMode)"}),": A function that is called when the color mode is changed."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"useSystemColorMode"}),": A boolean that determines whether to use the system color mode."]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"color-scheme",children:["Color scheme",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#color-scheme",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["To opt the entire page into the user's color scheme preferences declare ",(0,r.jsx)(n.code,{children:"color-scheme"})," on the document's root element."]}),"\n",(0,r.jsx)(n.pre,{disabled:!0,children:(0,r.jsx)(n.code,{className:"language-jsx",children:"import { Global, css } from '@emotion/react';\n"})}),"\n",(0,r.jsx)(n.pre,{disabled:!0,children:(0,r.jsx)(n.code,{className:"language-jsx",children:"<Global\n  styles={css`\n    :root, :host {\n      color-scheme: dark;\n    }\n  `}\n/>\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"examples",children:["Examples",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#examples",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(n.h3,{id:"use-default-color-mode",children:["Use default color mode",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#use-default-color-mode",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(n.pre,{disabled:!0,children:(0,r.jsx)(n.code,{className:"language-jsx",children:"<TonicProvider\n  colorMode={{\n    defaultValue: 'dark',\n  }}\n>\n  {children}\n</TonicProvider>\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"use-system-color-mode",children:["Use system color mode",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#use-system-color-mode",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(n.p,{children:"This example uses the default color mode for the first render, and then switches to the system color mode for the rest of time."}),"\n",(0,r.jsx)(n.pre,{disabled:!0,children:(0,r.jsx)(n.code,{className:"language-jsx",children:"<TonicProvider\n  colorMode={{\n    defaultValue: 'dark', // optional\n    useSystemColorMode: true, // If `true`, switch to system color mode after the first render.\n  }}\n>\n  {children}\n</TonicProvider>\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"controlled-color-mode",children:["Controlled color mode",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#controlled-color-mode",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(n.pre,{disabled:!0,children:(0,r.jsx)(n.code,{className:"language-jsx",children:"<TonicProvider\n  colorMode={{\n    value: 'dark',\n  }}\n>\n  {children}\n</TonicProvider>\n"})}),"\n",(0,r.jsxs)(n.h3,{id:"controlled-color-mode-with-a-toggle-function",children:["Controlled color mode with a toggle function",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#controlled-color-mode-with-a-toggle-function",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(n.pre,{disabled:!0,children:(0,r.jsx)(n.code,{className:"language-jsx",children:"function App({ children }) {\n  const [colorMode, toggleColorMode] = useToggle();\n\n  return (\n    <TonicProvider\n      colorMode={{\n        value: colorMode,\n        onChange: toggleColorMode,\n      }}\n    >\n      {children}\n    </TonicProvider>\n  );\n}\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"managing-color-mode",children:["Managing Color Mode",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#managing-color-mode",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["To manage color mode in your application, you can use the ",(0,r.jsx)(n.a,{href:"color-mode/useColorMode",children:"useColorMode"})," hook."]})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.ah)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(_createMdxContent,e)})):_createMdxContent(e)}},43321:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/color-mode",function(){return o(69577)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=43321)}),_N_E=e.O()}]);