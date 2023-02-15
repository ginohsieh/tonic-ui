(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[901],{57225:function(e,n,t){"use strict";t.r(n);var i=t(52322),l=t(45392);function s(e){var n=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,l.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"Transitions / Scale"}),"\n",(0,i.jsx)(n.p,{children:"Transition helps make a UI expressive and easy to use."}),"\n",(0,i.jsxs)(n.p,{children:["The transition components use ",(0,i.jsx)(n.code,{children:"react-transition-group"})," internally to perform animation effects and manage component states (including mounting and unmounting) over time. You can check out all the transition props at ",(0,i.jsx)(n.a,{href:"https://reactcommunity.org/react-transition-group/transition/#Transition-props",children:"https://reactcommunity.org/react-transition-group/transition/#Transition-props"}),". For more information, visit ",(0,i.jsx)(n.a,{href:"http://reactcommunity.org/react-transition-group/transition",children:"http://reactcommunity.org/react-transition-group/transition"})," for detailed usage."]}),"\n",(0,i.jsx)(n.h2,{children:"Import"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import {\n  Scale,\n} from '@tonic-ui/react';\n"})}),"\n",(0,i.jsx)(n.h2,{children:"Usage"}),"\n",(0,i.jsx)(n.h3,{children:"Scale"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Scale"})," transition is used to animate the scale of a component."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'function Example() {\n  const [isOpen, onToggle] = useToggle(false);\n\n  return (\n    <Flex direction="column" rowGap="4x">\n      <TextLabel display="inline-flex" alignItems="center">\n        <Switch checked={isOpen} onChange={() => onToggle()} size="md" />\n        <Space width="2x" />\n        <Text>Show</Text>\n      </TextLabel>\n      <Scale\n        in={isOpen}\n        unmountOnExit={false}\n        initialScale={[0.9, 0.9**2]}\n      >\n        <SkeletonContent>\n          <SkeletonBody />\n        </SkeletonContent>\n      </Scale>\n    </Flex>\n  );\n}\n'})}),"\n",(0,i.jsx)(n.h2,{children:"Props"}),"\n",(0,i.jsx)(n.h3,{children:"Scale"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{align:"left",children:"Name"}),(0,i.jsx)(n.th,{align:"left",children:"Type"}),(0,i.jsx)(n.th,{align:"left",children:"Default"}),(0,i.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"appear"}),(0,i.jsx)(n.td,{align:"left",children:"boolean"}),(0,i.jsx)(n.td,{align:"left",children:"false"}),(0,i.jsxs)(n.td,{align:"left",children:["By default the child component does not perform the enter transition when it first mounts, regardless of the value of ",(0,i.jsx)(n.code,{children:"in"}),". If you want this behavior, set both ",(0,i.jsx)(n.code,{children:"appear"})," and ",(0,i.jsx)(n.code,{children:"in"})," to true."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"children"}),(0,i.jsxs)(n.td,{align:"left",children:["ReactNode | ",(0,i.jsx)(n.code,{children:"(state, props) => ReactNode"})]}),(0,i.jsx)(n.td,{align:"left"}),(0,i.jsx)(n.td,{align:"left",children:"A function child can be used instead of a React element. This function is called with the current transition state ('entering', 'entered', 'exiting', 'exited'), ref, style, and context specific props for a component."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"easing"}),(0,i.jsxs)(n.td,{align:"left",children:["string | ",(0,i.jsx)(n.code,{children:"{ enter?: string, exit?: string }"})]}),(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"{ enter: easing.easeOut, exit: easing.easeIn }"})}),(0,i.jsx)(n.td,{align:"left",children:"The timing function that describes how intermediate values are calculated during a transition. You may specify a single timing function for all transitions, or individually with an object."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"in"}),(0,i.jsx)(n.td,{align:"left",children:"boolean"}),(0,i.jsx)(n.td,{align:"left"}),(0,i.jsxs)(n.td,{align:"left",children:["If ",(0,i.jsx)(n.code,{children:"true"}),", the component will transition in."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"initialScale"}),(0,i.jsx)(n.td,{align:"left",children:"number"}),(0,i.jsx)(n.td,{align:"left",children:"0.95"}),(0,i.jsx)(n.td,{align:"left",children:"The initial scale of the element."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"mountOnEnter"}),(0,i.jsx)(n.td,{align:"left",children:"boolean"}),(0,i.jsx)(n.td,{align:"left"}),(0,i.jsxs)(n.td,{align:"left",children:["If ",(0,i.jsx)(n.code,{children:"true"}),', it will "lazy mount" the component on the first ',(0,i.jsx)(n.code,{children:"in={true}"}),". After the first enter transition the component will stay mounted, even on the 'exited' state, unless you also specify ",(0,i.jsx)(n.code,{children:"unmountOnExit"}),". By default the child component is mounted immediately along with the parent transition component."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"timeout"}),(0,i.jsxs)(n.td,{align:"left",children:["number | ",(0,i.jsx)(n.code,{children:"{ appear?: number, enter?: number, exit?: number }"})]}),(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"{ enter: 150, exit: 150 }"})}),(0,i.jsx)(n.td,{align:"left",children:"The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"unmountOnExit"}),(0,i.jsx)(n.td,{align:"left",children:"boolean"}),(0,i.jsx)(n.td,{align:"left"}),(0,i.jsxs)(n.td,{align:"left",children:["If ",(0,i.jsx)(n.code,{children:"true"}),", it will unmount the child component when ",(0,i.jsx)(n.code,{children:"in={false}"})," and the animation has finished. By default the child component stays mounted after it reaches the 'exited' state."]})]})]})]})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.ah)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(s,e)})):s(e)}},81108:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/transitions/scale",function(){return t(57225)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=81108)}),_N_E=e.O()}]);