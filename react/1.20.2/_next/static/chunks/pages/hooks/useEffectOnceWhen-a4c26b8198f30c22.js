(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3731],{34105:function(e,n,s){"use strict";s.r(n);var t=s(52322),i=s(45392);function c(e){var n=Object.assign({div:"div",h1:"h1",p:"p",code:"code",h2:"h2",a:"a",svg:"svg",use:"use",pre:"pre",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.ah)(),e.components);return(0,t.jsxs)(n.div,{className:"main-content",id:"main-content",children:[(0,t.jsx)(n.h1,{id:"useeffectoncewhen",children:"useEffectOnceWhen"}),"\n",(0,t.jsxs)(n.p,{children:["A custom Hook similar to ",(0,t.jsx)(n.code,{children:"useEffectOnce"}),", but only runs once when a condition is met."]}),"\n",(0,t.jsxs)(n.h2,{id:"import",children:["Import",(0,t.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,t.jsx)(n.svg,{children:(0,t.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { useEffectOnceWhen } from '@tonic-ui/react-hooks';\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"usage",children:["Usage",(0,t.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usage",children:(0,t.jsx)(n.svg,{children:(0,t.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"useEffectOnceWhen(effect, when);\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"parameters",children:["Parameters",(0,t.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#parameters",children:(0,t.jsx)(n.svg,{children:(0,t.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{align:"left",children:"Name"}),(0,t.jsx)(n.th,{align:"left",children:"Type"}),(0,t.jsx)(n.th,{align:"left",children:"Default"}),(0,t.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"left",children:"effect"}),(0,t.jsx)(n.td,{align:"left",children:(0,t.jsx)(n.code,{children:"() => void"})}),(0,t.jsx)(n.td,{align:"left"}),(0,t.jsx)(n.td,{align:"left",children:"The effect to run."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"left",children:"when"}),(0,t.jsx)(n.td,{align:"left",children:"boolean"}),(0,t.jsx)(n.td,{align:"left",children:"false"}),(0,t.jsx)(n.td,{align:"left",children:"The condition to run the effect."})]})]})]}),"\n",(0,t.jsxs)(n.h2,{id:"demos",children:["Demos",(0,t.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#demos",children:(0,t.jsx)(n.svg,{children:(0,t.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"function Component() {\n  const [state, setState] = React.useState('idle');\n\n  useEffectOnceWhen(() => {\n    setTimeout(() => {\n      setState('loaded');\n    }, 3000); // Countdown for 3 seconds\n  }, (state === 'loading'));\n\n  return (\n    <>\n      {state === 'idle' && (\n        <Button onClick={() => setState('loading')}>\n          Click To Run\n        </Button>\n      )}\n      {state === 'loading' && 'Loading component (will be gone in 3 seconds)...'}\n      {state === 'loaded' && 'Component loaded!'}\n    </>\n  );\n}\n"})})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,i.ah)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}},2676:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/useEffectOnceWhen",function(){return s(34105)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=2676)}),_N_E=e.O()}]);