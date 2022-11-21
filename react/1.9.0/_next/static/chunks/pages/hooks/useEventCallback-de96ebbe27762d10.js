(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6003],{5583:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return i}});t(2784);var a=t(876),l=["components"];function r(){return r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r.apply(this,arguments)}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u={};function i(e){var n=e.components,t=o(e,l);return(0,a.kt)("wrapper",r({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"useEventCallback"),(0,a.kt)("p",null,"A custom Hook to do escape hatch optimization for event callbacks."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://dev.to/yelouafi/a-simple-rule-for-using-callbacks-in-react-4jah"},"https://dev.to/yelouafi/a-simple-rule-for-using-callbacks-in-react-4jah")),(0,a.kt)("p",null,"The general rule is: use ",(0,a.kt)("inlineCode",{parentName:"p"},"useEventCallback")," when doing side effects, and use the built-in ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback")," when doing render work."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useEventCallback")," is more suited for callbacks waiting for some external input, then changing the state of the applicationo."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useCallback")," is more suited for callbacks that output something into the external world. In fact ",(0,a.kt)("inlineCode",{parentName:"li"},"useCallback")," is semantically really an alias for ",(0,a.kt)("inlineCode",{parentName:"li"},"useMemo")," since we're treating functions here the same as the values we output from JSX.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// import\nimport { useEventCallback } from '@tonic-ui/react-hooks';\n\n// usage\nconst memoizedCallback = useEventCallback(fn, dependencies);\n")),(0,a.kt)("h3",null,"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"fn"),(0,a.kt)("td",{parentName:"tr",align:"left"},"(...rest: any[]) => void"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"The function to be called.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"dependencies?"),(0,a.kt)("td",{parentName:"tr",align:"left"},"any[]"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"The dependencies of the function.")))),(0,a.kt)("h3",null,"Returns"),(0,a.kt)("p",null,"Returns a memoized version of the event callback."),(0,a.kt)("h3",null,"Example"),(0,a.kt)("p",null,"Try typing some text in the input fields and see the difference between ",(0,a.kt)("inlineCode",{parentName:"p"},"useEventCallback")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback"),"."),(0,a.kt)("h4",null,"useEventCallback"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'function Component() {\n  const [value, setValue] = React.useState(\'\');\n  const onChange = useEventCallback((event) => {\n    const nextValue = event.target.value;\n    console.log(`prev=${value}, next=${nextValue}`);\n    setValue(nextValue);\n  }, [value]);\n  const prevOnChangeRef = React.useRef(onChange);\n  const invalidationCountRef = React.useRef(0);\n  if (prevOnChangeRef.current !== onChange) {\n    prevOnChangeRef.current = onChange;\n    invalidationCountRef.current++;\n  }\n\n  return (\n    <>\n      <Box mb="2x">"onChange" invalidation count: {invalidationCountRef.current}</Box>\n      <Input value={value} onChange={onChange} placeholder="Enter your text" />\n    </>\n  );\n}\n')),(0,a.kt)("h4",null,"useCallback"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'function Component() {\n  const [value, setValue] = React.useState(\'\');\n  const onChange = React.useCallback((event) => {\n    const nextValue = event.target.value;\n    console.log(`prev=${value}, next=${nextValue}`);\n    setValue(nextValue);\n  }, [value]);\n  const prevOnChangeRef = React.useRef(onChange);\n  const invalidationCountRef = React.useRef(0);\n  if (prevOnChangeRef.current !== onChange) {\n    prevOnChangeRef.current = onChange;\n    invalidationCountRef.current++;\n  }\n\n  return (\n    <>\n      <Box mb="2x">"onChange" invalidation count: {invalidationCountRef.current}</Box>\n      <Input value={value} onChange={onChange} placeholder="Enter your text" />\n    </>\n  );\n}\n')))}i.isMDXComponent=!0},7344:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/useEventCallback",function(){return t(5583)}])}},function(e){e.O(0,[9774,2888,179],(function(){return n=7344,e(e.s=n);var n}));var n=e.O();_N_E=n}]);