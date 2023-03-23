(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6003],{19682:function(e,n,a){"use strict";a.r(n);var l=a(52322),s=a(45392);function t(e){var n=Object.assign({div:"div",h1:"h1",p:"p",a:"a",code:"code",ul:"ul",li:"li",h2:"h2",svg:"svg",use:"use",pre:"pre",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h4:"h4"},(0,s.ah)(),e.components);return(0,l.jsxs)(n.div,{className:"main-content",id:"main-content",children:[(0,l.jsx)(n.h1,{id:"useeventcallback",children:"useEventCallback"}),"\n",(0,l.jsx)(n.p,{children:"A custom Hook to do escape hatch optimization for event callbacks."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://dev.to/yelouafi/a-simple-rule-for-using-callbacks-in-react-4jah",children:"https://dev.to/yelouafi/a-simple-rule-for-using-callbacks-in-react-4jah"})}),"\n",(0,l.jsxs)(n.p,{children:["The general rule is: use ",(0,l.jsx)(n.code,{children:"useEventCallback"})," when doing side effects, and use the built-in ",(0,l.jsx)(n.code,{children:"useCallback"})," when doing render work."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"useEventCallback"})," is more suited for callbacks waiting for some external input, then changing the state of the applicationo."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"useCallback"})," is more suited for callbacks that output something into the external world. In fact ",(0,l.jsx)(n.code,{children:"useCallback"})," is semantically really an alias for ",(0,l.jsx)(n.code,{children:"useMemo"})," since we're treating functions here the same as the values we output from JSX."]}),"\n"]}),"\n",(0,l.jsxs)(n.h2,{id:"import",children:["Import",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"import { useEventCallback } from '@tonic-ui/react-hooks';\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"usage",children:["Usage",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usage",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"const memoizedCallback = useEventCallback(fn, dependencies);\n"})}),"\n",(0,l.jsxs)(n.h3,{id:"parameters",children:["Parameters",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#parameters",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{align:"left",children:"Name"}),(0,l.jsx)(n.th,{align:"left",children:"Type"}),(0,l.jsx)(n.th,{align:"left",children:"Default"}),(0,l.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"fn"}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"(...rest: any[]) => void"})}),(0,l.jsx)(n.td,{align:"left"}),(0,l.jsx)(n.td,{align:"left",children:"The function to be called."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"dependencies?"}),(0,l.jsx)(n.td,{align:"left",children:"any[]"}),(0,l.jsx)(n.td,{align:"left"}),(0,l.jsx)(n.td,{align:"left",children:"The dependencies of the function."})]})]})]}),"\n",(0,l.jsxs)(n.h3,{id:"returns",children:["Returns",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#returns",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsx)(n.p,{children:"Returns a memoized version of the event callback."}),"\n",(0,l.jsxs)(n.h2,{id:"demos",children:["Demos",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#demos",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsxs)(n.p,{children:["Try typing some text in the input fields and see the difference between ",(0,l.jsx)(n.code,{children:"useEventCallback"})," and ",(0,l.jsx)(n.code,{children:"useCallback"}),"."]}),"\n",(0,l.jsxs)(n.h4,{id:"useeventcallback-1",children:["useEventCallback",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#useeventcallback-1",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",children:'function Component() {\n  const [value, setValue] = React.useState(\'\');\n  const onChange = useEventCallback((event) => {\n    const nextValue = event.target.value;\n    console.log(`prev=${value}, next=${nextValue}`);\n    setValue(nextValue);\n  }, [value]);\n  const prevOnChangeRef = React.useRef(onChange);\n  const invalidationCountRef = React.useRef(0);\n  if (prevOnChangeRef.current !== onChange) {\n    prevOnChangeRef.current = onChange;\n    invalidationCountRef.current++;\n  }\n\n  return (\n    <>\n      <Box mb="2x">"onChange" invalidation count: {invalidationCountRef.current}</Box>\n      <Input value={value} onChange={onChange} placeholder="Enter your text" />\n    </>\n  );\n}\n'})}),"\n",(0,l.jsxs)(n.h4,{id:"usecallback",children:["useCallback",(0,l.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usecallback",children:(0,l.jsx)(n.svg,{children:(0,l.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",children:'function Component() {\n  const [value, setValue] = React.useState(\'\');\n  const onChange = React.useCallback((event) => {\n    const nextValue = event.target.value;\n    console.log(`prev=${value}, next=${nextValue}`);\n    setValue(nextValue);\n  }, [value]);\n  const prevOnChangeRef = React.useRef(onChange);\n  const invalidationCountRef = React.useRef(0);\n  if (prevOnChangeRef.current !== onChange) {\n    prevOnChangeRef.current = onChange;\n    invalidationCountRef.current++;\n  }\n\n  return (\n    <>\n      <Box mb="2x">"onChange" invalidation count: {invalidationCountRef.current}</Box>\n      <Input value={value} onChange={onChange} placeholder="Enter your text" />\n    </>\n  );\n}\n'})})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.ah)(),e.components).wrapper;return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(t,e)})):t(e)}},67344:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/useEventCallback",function(){return a(19682)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=67344)}),_N_E=e.O()}]);