(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9257],{32824:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return w}});var r=t(7896),a=t(59740),o=t(2784),l=t(30876),i=t(12215),p=t(71171),d=t(28165),s=t(58693),m=t(5081),c=["size"],x=o.createContext(),u=function(e){var n=e.size,t=(0,a.Z)(e,c);return(n=Number(n)||0)<0&&(n=0),(0,d.jsx)(x.Provider,{value:n},(0,d.jsx)(k,t))},k=function(e){var n=(0,o.useContext)(x);return(0,d.jsx)(s.Box,(0,r.Z)({position:"relative",width:n,height:n,my:0,mx:"auto",transformStyle:"preserve-3d"},e))},g=function(e){var n=(0,s.useColorMode)(),t=(0,i.Z)(n,1)[0],a="dark"===t?"rgba(255,255,255,.05)":"rgba(0,0,0,.05)",o="dark"===t?"dark.sm":"light.sm";return(0,d.jsx)(s.Box,(0,r.Z)({position:"absolute",top:0,right:0,bottom:0,left:0,backgroundColor:a,boxShadow:o,display:"flex",justifyContent:"center",alignItems:"center",backfaceVisibility:"hidden"},e))};u.Front=function(e){var n=(0,o.useContext)(x);return(0,d.jsx)(g,(0,r.Z)({transform:"translateZ(".concat(n/2,"px)")},e))},u.Back=function(e){var n=(0,o.useContext)(x);return(0,d.jsx)(g,(0,r.Z)({transform:"translateZ(-".concat(n/2,"px) rotateY(180deg)")},e))},u.Top=function(e){var n=(0,o.useContext)(x);return(0,d.jsx)(g,(0,r.Z)({transform:"rotateX(-90deg) translateY(-".concat(n/2,"px)"),transformOrigin:"top center"},e))},u.Bottom=function(e){var n=(0,o.useContext)(x);return(0,d.jsx)(g,(0,r.Z)({transform:"rotateX(90deg) translateY(".concat(n/2,"px)"),transformOrigin:"bottom center"},e))},u.Left=function(e){var n=(0,o.useContext)(x);return(0,d.jsx)(g,(0,r.Z)({transform:"rotateY(270deg) translateX(-".concat(n/2,"px)"),transformOrigin:"center left"},e))},u.Right=function(e){var n=(0,o.useContext)(x);return(0,d.jsx)(g,(0,r.Z)({transform:"rotateY(-270deg) translateX(".concat(n/2,"px)"),transformOrigin:"top right"},e))};var h,f=u,b=["size"],N=(0,m.ensureString)("/tonic-ui/react/v0"),y=(0,d.keyframes)(h||(h=(0,p.Z)(["\n  from { transform: rotateY(360deg); }\n  to { transform: rotateY(0deg); }\n"]))),C=function(e){var n=e.size,t=void 0===n?128:n,o=(0,a.Z)(e,b),l=(0,s.useColorMode)(),p=(0,i.Z)(l,1)[0],m="dark"===p?"\n      -1px -1px 2px rgba(0,0,0,.4),\n      1px -1px 2px rgba(0,0,0,.4),\n      -1px 1px 2px rgba(0,0,0,.4),\n      1px 1px 2px rgba(0,0,0,.4)\n      ":"none";return(0,d.jsx)(s.Box,(0,r.Z)({display:"inline-block",py:"16x",px:"8x",perspective:"100vw",perspectiveOrigin:"center 250%"},o),(0,d.jsx)(f,{animation:"".concat(y," 8s infinite linear"),size:t},(0,d.jsx)(f.Front,{backgroundColor:"white"},(0,d.jsx)(s.Image,{alt:"",src:"".concat(N,"/images/Trend-Micro-Logo.svg"),width:"80%"})),(0,d.jsx)(f.Back,null,(0,d.jsx)(s.Box,{textShadow:m},"dark"===p&&(0,d.jsx)(s.Stack,{direction:"column",spacing:"3x",textAlign:"center"},(0,d.jsx)(s.Icon,{icon:"moon",size:24,mx:"auto"}),(0,d.jsx)(s.Text,null,"Dark Mode")),"light"===p&&(0,d.jsx)(s.Stack,{direction:"column",spacing:"3x",textAlign:"center"},(0,d.jsx)(s.Icon,{icon:"sun",size:24,mx:"auto"}),(0,d.jsx)(s.Text,null,"Light Mode")))),(0,d.jsx)(f.Top,{backfaceVisibility:"visible"}),(0,d.jsx)(f.Bottom,{backfaceVisibility:"visible"}),(0,d.jsx)(f.Left,null,(0,d.jsx)(s.Text,{fontSize:"2xl",fontWeight:"semibold",textShadow:m},"Box")),(0,d.jsx)(f.Right,null,(0,d.jsx)(s.Text,{fontSize:"lg",textShadow:m},"Tonic UI"))))},B=["components"],v={};function w(e){var n=e.components,t=(0,a.Z)(e,B);return(0,l.kt)("wrapper",(0,r.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",null,"Box"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Box")," component serves as a wrapper component for most of the CSS utility needs. It allows you to control styling using style props to build a variety of components."),(0,l.kt)(C,{mdxType:"AnimatedCubeDemo"}),(0,l.kt)("h2",null,"Import"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { Box } from '@trendmicro/react-styled-ui';\n")),(0,l.kt)("h2",null,"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Box\n  backgroundColor="blue:50"\n  color="black:primary"\n  display="inline-block"\n  px="4x"\n  py="3x"\n  fontSize="xl"\n  lineHeight="xl"\n>\n  My component\n</Box>\n')),(0,l.kt)("h3",null,"The ",(0,l.kt)("inlineCode",{parentName:"h3"},"as")," prop and custom component"),(0,l.kt)("p",null,"By default, the ",(0,l.kt)("inlineCode",{parentName:"p"},"Box")," component renders a ",(0,l.kt)("inlineCode",{parentName:"p"},"div")," element. There might be cases where you want to render a different element, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"as")," prop to do that."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Box\n  as="button"\n  backgroundColor="blue:70"\n  color="white:primary"\n  border="none"\n  borderRadius="sm"\n  cursor="pointer"\n  px="2x"\n  py="1x"\n>\n  Button\n</Box>\n')),(0,l.kt)("h3",null,"Using pseudo props"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Box")," also provides useful props to style common CSS pseudo-class and pseudo-element selectors."),(0,l.kt)("p",null,"A pseudo-class selector targets elements depending on their state rather than on information from the document tree. For example, the selector ",(0,l.kt)("inlineCode",{parentName:"p"},":hover")," matches when the user interacts with an element with a pointing device, but does not necessary activate it."),(0,l.kt)("p",null,"A pseudo-element selector applies styles to parts of your document content in scenarios where there isn't a specific HTML element to select. For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"::before")," creates a ",(0,l.kt)("b",null,"pseudo-element")," that is the first child of the selected element. It is often used to add cosmetic content to an element with the ",(0,l.kt)("inlineCode",{parentName:"p"},"content")," property."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Selector"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"_active"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"&:active"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"_checked"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"&:checked"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"_disabled"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"&:disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"_empty"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"&:empty"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"_enabled"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"&:enabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"_firstChild"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"&:first-child"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"_firstOfType"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"&:first-of-type"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"_fullscreen"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"&:fullscreen"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"_focus"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"&:focus"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"_focusWithin"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"&:focus-within"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"_hover"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"&:hover"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"_indeterminate"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"&:indeterminate"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"_invalid"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"&:invalid"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"_lastChild"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"&:last-child"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"_lastOfType"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"&:last-of-type"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"_nthOfType"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"&:nth-of-type()"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"_readOnly"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"&:read-only"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"_visited"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"&:visited"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"__after"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"&::after"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"__backdrop"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"&::backdrop"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"__before"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"&::before"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"__cue"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"&::cue"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"__firstLetter"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"&::first-letter"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"__firstLine"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"&::first-line"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"__placeholder"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"&::placeholder"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"__selection"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"&::selection"))))),(0,l.kt)("h4",null,(0,l.kt)("inlineCode",{parentName:"h4"},":hover")),(0,l.kt)("p",null,"Add the ",(0,l.kt)("inlineCode",{parentName:"p"},"_hover")," prop to apply style props on hover."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Box\n  as="button"\n  bg="blue:40"\n  color="white:primary"\n  py="2x"\n  px="3x"\n  border={0}\n  borderRadius="sm"\n  cursor="pointer"\n  _hover={{\n    bg: \'blue:50\',\n    color: \'white:primary\',\n  }}\n>\n  Hover Me\n</Box>\n')),(0,l.kt)("h4",null,(0,l.kt)("inlineCode",{parentName:"h4"},":active")),(0,l.kt)("p",null,"Add the ",(0,l.kt)("inlineCode",{parentName:"p"},"_active")," prop to apply style props on active."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Box\n  as="button"\n  bg="blue:40"\n  color="white:primary"\n  py="2x"\n  px="3x"\n  border={0}\n  borderRadius="sm"\n  cursor="pointer"\n  _hover={{\n    bg: \'blue:50\',\n    color: \'white:primary\',\n  }}\n  _active={{\n    bg: \'blue:60\',\n    color: \'white:primary\',\n  }}\n>\n  Click Me\n</Box>\n')),(0,l.kt)("h4",null,(0,l.kt)("inlineCode",{parentName:"h4"},":focus")),(0,l.kt)("p",null,"Add the ",(0,l.kt)("inlineCode",{parentName:"p"},"_focus")," prop to apply style props on focus."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Box\n  as="input"\n  placeholder="Click Me"\n  py="2x"\n  px="3x"\n  bg="gray:20"\n  border={1}\n  borderColor="transparent"\n  borderRadius="sm"\n  outline="none"\n  _focus={{\n    bg: \'white:primary\',\n    boxShadow: \'0 0 0 .2rem rgba(111, 155, 244, .5)\',\n  }}\n/>\n')),(0,l.kt)("h4",null,(0,l.kt)("inlineCode",{parentName:"h4"},":disabled")),(0,l.kt)("p",null,"Add the ",(0,l.kt)("inlineCode",{parentName:"p"},"_disabled")," prop to style an element which is disabled."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="row" spacing=".5rem">\n  <Box\n    as="button"\n    bg="blue:40"\n    color="white:primary"\n    py="2x"\n    px="3x"\n    border={0}\n    borderRadius="sm"\n    cursor="pointer"\n    _hover={{\n      bg: \'blue:50\',\n      color: \'white:primary\',\n    }}\n    _active={{\n      bg: \'blue:60\',\n      color: \'white:primary\',\n    }}\n  >\n    Click Me\n  </Box>\n  <Box\n    as="button"\n    bg="blue:40"\n    color="white:primary"\n    py="2x"\n    px="3x"\n    border={0}\n    borderRadius="sm"\n    cursor="pointer"\n    disabled\n    _disabled={{\n      cursor: \'not-allowed\',\n      bg: \'blue:40\',\n      color: \'white:primary\',\n      opacity: .6,\n    }}\n    _hover={{\n      bg: \'blue:50\',\n      color: \'white:primary\',\n    }}\n    _active={{\n      bg: \'blue:60\',\n      color: \'white:primary\',\n    }}\n  >\n    Click Me\n  </Box>\n</Stack>\n')),(0,l.kt)("h4",null,(0,l.kt)("inlineCode",{parentName:"h4"},":visited")),(0,l.kt)("p",null,"Add the ",(0,l.kt)("inlineCode",{parentName:"p"},"_visited")," prop to style a visited link."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="row" spacing=".5rem">\n  <Box\n    as="a"\n    href=""\n    color="blue:40"\n    fontWeight="semibold"\n    textDecoration="none"\n    _hover={{\n      textDecoration: \'underline\',\n    }}\n  >\n    Normal link\n  </Box>\n  <Box\n    as="a"\n    href=""\n    color="blue:40"\n    fontWeight="semibold"\n    textDecoration="none"\n    _hover={{\n      textDecoration: \'underline\',\n    }}\n    _visited={{\n      color: \'purple:60\',\n    }}\n  >\n    Visited link\n  </Box>\n</Stack>\n')),(0,l.kt)("h4",null,(0,l.kt)("inlineCode",{parentName:"h4"},":first-child")),(0,l.kt)("p",null,"Add the ",(0,l.kt)("inlineCode",{parentName:"p"},"_firstChild")," prop to style an element that is the first element among its siblings."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"function Example() {\n  const [colorMode] = useColorMode();\n  const borderColor = colorMode === 'dark' ? 'gray:70' : 'gray:20';\n\n  return (\n    <Box border={1} borderColor={borderColor} borderRadius=\"sm\">\n      {['One', 'Two', 'Three'].map(item => (\n        <Box\n          key={item}\n          py=\"2x\"\n          px=\"3x\"\n          borderTop={1}\n          borderTopColor={borderColor}\n          _firstChild={{\n            borderTopWidth: 0,\n            bg: 'blue:40',\n            color: 'white:primary',\n          }}\n        >\n          {item}\n        </Box>\n      ))}\n    </Box>\n  );\n}\n")),(0,l.kt)("h4",null,(0,l.kt)("inlineCode",{parentName:"h4"},":last-child")),(0,l.kt)("p",null,"Add the ",(0,l.kt)("inlineCode",{parentName:"p"},"_lastChild")," prop to style an element that is the last element among its siblings."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"function Example() {\n  const [colorMode] = useColorMode();\n  const borderColor = colorMode === 'dark' ? 'gray:70' : 'gray:20';\n\n  return (\n    <Box border={1} borderColor={borderColor} borderRadius=\"sm\">\n      {['One', 'Two', 'Three'].map(item => (\n        <Box\n          key={item}\n          py=\"2x\"\n          px=\"3x\"\n          borderBottom={1}\n          borderBottomColor={borderColor}\n          _lastChild={{\n            borderBottomWidth: 0,\n            bg: 'blue:40',\n            color: 'white:primary',\n          }}\n        >\n          {item}\n        </Box>\n      ))}\n    </Box>\n  );\n}\n")),(0,l.kt)("h4",null,(0,l.kt)("inlineCode",{parentName:"h4"},":nth-of-type()")),(0,l.kt)("p",null,"Add the ",(0,l.kt)("inlineCode",{parentName:"p"},"_nthOfType")," prop to match elements of a given type, based on their position among a group of siblings. The value can be represented as an array or an object in the following form:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"// array\n_nthOfType={['2n+1', { color: 'red:40' }]\n\n// object\n_nthOfType={{ '2n+1': { color: 'red:40' }}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},"const Paragraph = (props) => (\n  <Box\n    as=\"p\"\n    _nthOfType={{\n      '1': {\n        fontWeight: 'bold'\n      },\n      '2n+1': {\n        color: 'red:40',\n      },\n      '2n': {\n        color: 'blue:40',\n      }\n    }}\n    {...props}\n  />\n);\n\nfunction Example() {\n  return (\n    <>\n      <Box>This element isn't counted.</Box>\n      <Paragraph>1st paragraph.</Paragraph>\n      <Paragraph>2nd paragraph.</Paragraph>\n      <Box>This element isn't counted.</Box>\n      <Paragraph>3rd paragraph.</Paragraph>\n      <Paragraph>4th paragraph.</Paragraph>\n    </>\n  )\n}\n\nrender(<Example />);\n")),(0,l.kt)("h4",null,(0,l.kt)("inlineCode",{parentName:"h4"},":nth-of-type(odd)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"function Example() {\n  const [colorMode] = useColorMode();\n  const borderColor = colorMode === 'dark' ? 'gray:70' : 'gray:20';\n\n  return (\n    <Box border={1} borderColor={borderColor} borderRadius=\"sm\">\n      {['One', 'Two', 'Three', 'Four', 'Five'].map(item => (\n        <Box\n          key={item}\n          py=\"2x\"\n          px=\"3x\"\n          _nthOfType={['odd', {\n            bg: 'blue:40',\n            color: 'white:primary',\n          }]}\n        >\n          {item}\n        </Box>\n      ))}\n    </Box>\n  );\n}\n")),(0,l.kt)("h4",null,(0,l.kt)("inlineCode",{parentName:"h4"},":nth-of-type(even)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"function Example() {\n  const [colorMode] = useColorMode();\n  const borderColor = colorMode === 'dark' ? 'gray:70' : 'gray:20';\n\n  return (\n    <Box border={1} borderColor={borderColor} borderRadius=\"sm\">\n      {['One', 'Two', 'Three', 'Four', 'Five'].map(item => (\n        <Box\n          key={item}\n          py=\"2x\"\n          px=\"3x\"\n          _nthOfType={['even', {\n            bg: 'blue:40',\n            color: 'white:primary',\n          }]}\n        >\n          {item}\n        </Box>\n      ))}\n    </Box>\n  );\n}\n")),(0,l.kt)("h2",null,"Examples"),(0,l.kt)("p",null,"Let's take a look at some examples of how to use ",(0,l.kt)("inlineCode",{parentName:"p"},"Box")," to style elements."),(0,l.kt)("h3",null,"Responsive layout"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},"const Ellipsis = (props) => (\n  <Box whiteSpace=\"nowrap\" overflow=\"hidden\" textOverflow=\"ellipsis\" {...props} />\n);\n\nconst Light = ({ on, ...rest }) => (\n  <Box\n    display=\"inline-block\"\n    borderRadius=\"50%\"\n    bg={on ? '#00ff00' : '#666'}\n    boxShadow={on ? '0 0 1px 2px rgba(0, 255, 0, .8)' : 'none'}\n    height={16}\n    width={16}\n    verticalAlign=\"middle\"\n    {...rest}\n  />\n);\n\nfunction Example() {\n  const laneColor = {\n    1: '#389efc',\n    2: '#ff7332',\n    3: '#00b449',\n    4: '#fdf133',\n    5: '#fc74cf',\n  };\n\n  const players = [\n    { id: '240', lane: 1, name: 'Taiwan Leave System', laps: 2, raceTime: '01:20.592', gates: [1, 1, 1] },\n    { id: '339', lane: 2, name: '404 Not Found', laps: 2, raceTime: '01:24.036', gates: [1, 1, 1] },\n    { id: '003', lane: 3, name: 'ShowMeThe$$', laps: 2, raceTime: '01:37.890', gates: [1, 1, 0] },\n    { id: '207', lane: 4, name: 'Dragon Rider', laps: 1, raceTime: '00:49.211', gates: [1, 1, 0] },\n    { id: '456', lane: 5, name: 'BumbleBee', laps: 0, raceTime: '00:00.000', gates: [1, 1, 1] },\n  ];\n\n  return (\n    <Box position=\"relative\" mx=\"auto\">\n      {players.map((player, index) => (\n        <Box\n          key={player.id}\n          display=\"flex\"\n          minWidth={360}\n        >\n          <Box\n            flexBasis=\"auto\"\n            flexGrow={0}\n            minWidth=\".5rem\"\n            width=\".5rem\"\n            bg={laneColor[player.lane]}\n          />\n          <Box\n            bg={index % 2 ? 'gray:100' : 'gray:80'}\n            color=\"white:primary\"\n            flexBasis={0}\n            flexGrow={1}\n            maxWidth=\"calc(100% - .5rem)\"\n            py=\"2x\"\n            px=\"6x\"\n          >\n            <Box\n              display=\"flex\"\n              alignItems=\"flex-end\"\n            >\n              <Box\n                flexBasis={0}\n                flexGrow={1}\n                maxWidth=\"100%\"\n              >\n                <Text\n                  color=\"#6fffff\"\n                  fontWeight=\"bold\"\n                  fontSize={['4xl', null, null, 48]}\n                  lineHeights={['4xl', null, null, '1.5']}\n                >\n                  {player.id}\n                </Text>\n              </Box>\n              <Box\n                flexBasis=\"auto\"\n                flexGrow={0}\n                width=\"auto\"\n              >\n                <Text\n                  fontSize={['3xl', null, null, '4xl']}\n                  lineHeight={['3xl', null, null, '4xl']}\n                >\n                  {player.laps} / {player.raceTime}\n                </Text>\n              </Box>\n            </Box>\n            <Box\n              display=\"flex\"\n              alignItems=\"center\"\n              pt=\"2x\"\n            >\n              <Box\n                flexBasis={0}\n                flexGrow={1}\n                maxWidth=\"100%\"\n                width={0}\n              >\n                <Ellipsis>\n                  <Text\n                    fontSize={['2xl', null, null, '3xl']}\n                    lineHeight={['2xl', null, null, '3xl']}\n                  >\n                    {player.name}\n                  </Text>\n                </Ellipsis>\n              </Box>\n              <Box\n                flexBasis=\"auto\"\n                flexGrow={0}\n                width=\"auto\"\n                fontSize={['xl', null, null, '2xl']}\n                lineHeight={['xl', null, null, '2xl']}\n              >\n                <Light on={player.gates[0]} m=\"2x\" />\n                <Text pr=\"2x\">REC</Text>\n                <Light on={player.gates[1]} m=\"2x\" />\n                <Text pr=\"2x\">A</Text>\n                <Light on={player.gates[2]} m=\"2x\" />\n                <Text pr=\"2x\">B</Text>\n              </Box>\n            </Box>\n          </Box>\n        </Box>\n      ))}\n    </Box>\n  );\n}\n\nrender(<Example />);\n")))}w.isMDXComponent=!0},81507:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/box",function(){return t(32824)}])}},function(e){e.O(0,[9774,2888,179],(function(){return n=81507,e(e.s=n);var n}));var n=e.O();_N_E=n}]);