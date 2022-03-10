(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5388],{56514:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return r}});var c=t(7896),u=t(59740),o=(t(2784),t(30876)),a=["components"],l={};function r(n){var e=n.components,t=(0,u.Z)(n,a);return(0,o.kt)("wrapper",(0,c.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",null,"useOnceWhen"),(0,o.kt)("p",null,"A custom Hook that runs a callback at most once when a condition becomes true."),(0,o.kt)("h2",null,"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { useOnceWhen } from '@tonic-ui/react-hooks';\n")),(0,o.kt)("h3",null,"useOnceWhen"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { useRef } from 'react';\n\nconst useOnceWhen = (callback, when = false) => {\n  const ref = useRef(false);\n  if (when && !ref.current) {\n    if (typeof callback === 'function') {\n      callback();\n    }\n    ref.current = true;\n  }\n};\n")),(0,o.kt)("h2",null,"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function Component() {\n  const [value, setValue] = React.useState(0);\n  const ref = React.useRef(0);\n\n  useOnceWhen(() => {\n    console.log('This will run only once when clicked');\n    ref.current++;\n  }, (value > 0));\n\n  return (\n    <>\n      <Box mb=\"4x\">\n        Callback called: {ref.current}\n      </Box>\n      <Button onClick={() => setValue(value => value + 1)}>\n        Click Me\n      </Button>\n    </>\n  );\n}\n")))}r.isMDXComponent=!0},73418:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/useOnceWhen",function(){return t(56514)}])}},function(n){n.O(0,[9774,2888,179],(function(){return e=73418,n(n.s=e);var e}));var e=n.O();_N_E=e}]);