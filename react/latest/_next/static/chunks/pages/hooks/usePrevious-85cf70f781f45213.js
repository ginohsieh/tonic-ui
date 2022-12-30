(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9701],{22436:function(e,n,t){"use strict";t.r(n);var s=t(52322),r=t(45392);function l(e){var n=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{children:"usePrevious"}),"\n",(0,s.jsx)(n.p,{children:"A custom Hook that stores the previous state or props."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// import\nimport { usePrevious } from '@tonic-ui/react-hooks';\n\n// usage\nconst previousValue = usePrevious(value);\n"})}),"\n",(0,s.jsx)(n.h3,{children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{align:"left",children:"Name"}),(0,s.jsx)(n.th,{align:"left",children:"Type"}),(0,s.jsx)(n.th,{align:"left",children:"Default"}),(0,s.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{align:"left",children:"value"}),(0,s.jsx)(n.td,{align:"left",children:"any"}),(0,s.jsx)(n.td,{align:"left"}),(0,s.jsx)(n.td,{align:"left",children:"The value to update the previous value with."})]})})]}),"\n",(0,s.jsx)(n.h3,{children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:"Returns the previous value."}),"\n",(0,s.jsx)(n.h3,{children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'function Counter() {\n  const [value, setValue] = React.useState(0);\n  const lastValue = usePrevious(value);\n\n  return (\n    <>\n      <Box mb="4x">\n        Current: {value} - Previous: {lastValue}\n      </Box>\n      <Button onClick={() => setValue(value + 1)}>\n        Click Me\n      </Button>\n    </>\n  );\n}\n'})})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.ah)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},26145:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/usePrevious",function(){return t(22436)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=26145)}),_N_E=e.O()}]);