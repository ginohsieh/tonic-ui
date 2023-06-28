(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7902],{37841:function(n,e,o){"use strict";o.r(e);var t=o(52322),s=o(45392);function i(n){var e=Object.assign({div:"div",h1:"h1",p:"p",h2:"h2",a:"a",svg:"svg",use:"use",pre:"pre",code:"code",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.ah)(),n.components);return(0,t.jsxs)(e.div,{className:"main-content",id:"main-content",children:[(0,t.jsx)(e.h1,{id:"useoutsideclick",children:"useOutsideClick"}),"\n",(0,t.jsx)(e.p,{children:"A custom Hook that checks if a click happened outside a Ref. Handy for dropdowns, modals and popups etc."}),"\n",(0,t.jsxs)(e.h2,{id:"import",children:["Import",(0,t.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,t.jsx)(e.svg,{children:(0,t.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"import { useOutsideClick } from '@tonic-ui/react-hooks';\n"})}),"\n",(0,t.jsxs)(e.h2,{id:"usage",children:["Usage",(0,t.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usage",children:(0,t.jsx)(e.svg,{children:(0,t.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"useOutsideClick(ref, handler, [events]);\n"})}),"\n",(0,t.jsxs)(e.h3,{id:"parameters",children:["Parameters",(0,t.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#parameters",children:(0,t.jsx)(e.svg,{children:(0,t.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{align:"left",children:"Name"}),(0,t.jsx)(e.th,{align:"left",children:"Type"}),(0,t.jsx)(e.th,{align:"left",children:"Default"}),(0,t.jsx)(e.th,{align:"left",children:"Description"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{align:"left",children:"ref"}),(0,t.jsx)(e.td,{align:"left",children:"RefObject"}),(0,t.jsx)(e.td,{align:"left"}),(0,t.jsx)(e.td,{align:"left",children:"A ref to the element to check if the click happened outside."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{align:"left",children:"handler"}),(0,t.jsx)(e.td,{align:"left",children:(0,t.jsx)(e.code,{children:"(event: MouseEvent) => void"})}),(0,t.jsx)(e.td,{align:"left"}),(0,t.jsx)(e.td,{align:"left",children:"A function to call if the click happened outside the ref."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{align:"left",children:"events?"}),(0,t.jsx)(e.td,{align:"left",children:"string[]"}),(0,t.jsx)(e.td,{align:"left",children:"['mousedown', 'touchstart']"}),(0,t.jsxs)(e.td,{align:"left",children:["An optional array of events to listen to. If ",(0,t.jsx)(e.code,{children:"events"})," is empty, the hook will not listen to any events."]})]})]})]}),"\n",(0,t.jsxs)(e.h2,{id:"demos",children:["Demos",(0,t.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#demos",children:(0,t.jsx)(e.svg,{children:(0,t.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsx)(e.pre,{noInline:!0,children:(0,t.jsx)(e.code,{className:"language-jsx",children:'const CodeBlock = (props) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n\n  return (\n    <Box\n      backgroundColor={colorStyle.background.secondary}\n      border={1}\n      borderColor={colorStyle.divider}\n      fontFamily="mono"\n      py="3x"\n      px="3x"\n      whiteSpace="pre"\n      {...props}\n    />\n  );\n};\n\nconst FormGroup = (props) => (\n  <Box mb="4x" {...props} />\n);\n\nconst pointerDownEvents = [\'mousedown\', \'touchstart\'];\nconst pointerUpEvents = [\'mouseup\', \'touchend\'];\n\nrender(() => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n  const [eventOption, setEventOption] = React.useState(\'pointerDown\');\n  const ref = React.useRef();\n  const handler = React.useCallback(() => {\n    console.log(\'Clicked outside\');\n  }, []);\n  const events = {\n    \'pointerDown\': pointerDownEvents,\n    \'pointerUp\': pointerUpEvents,\n  }[eventOption];\n\n  useOutsideClick(ref, handler, events || false);\n\n  return (\n    <>\n      <Box mb="4x">\n        <Text fontSize="lg" lineHeight="lg">\n          Setup\n        </Text>\n      </Box>\n      <FormGroup>\n        <Box mb="2x">\n          <TextLabel>\n            Choose an option:\n          </TextLabel>\n        </Box>\n        <RadioGroup\n          value={eventOption}\n          onChange={setEventOption}\n        >\n          <Flex direction="column" rowGap="2x">\n            <Radio value="pointerDown">\n              Listen to pointer down events (default)\n            </Radio>\n            <Radio value="pointerUp">\n              Listen to pointer up events\n            </Radio>\n            <Radio value="none">\n              No event listeners\n            </Radio>\n          </Flex>\n        </RadioGroup>\n      </FormGroup>\n      {eventOption === \'pointerDown\' && (\n        <CodeBlock>\n          {`useOutsideClick(ref, handler, [${pointerDownEvents.map(x => `\'${x}\'`).join(\', \')}]); // or "useOutsideClick(ref, handler)"`}\n        </CodeBlock>\n      )}\n      {eventOption === \'pointerUp\' && (\n        <CodeBlock>\n          {`useOutsideClick(ref, handler, [${pointerUpEvents.map(x => `\'${x}\'`).join(\', \')}]);`}\n        </CodeBlock>\n      )}\n      {eventOption === \'none\' && (\n        <CodeBlock>\n          {\'useOutsideClick(ref, handler, false);\'}\n        </CodeBlock>\n      )}\n      <Divider my="4x" />\n      <Box mb="4x">\n        <Text fontSize="lg" lineHeight="lg">\n          Demo\n        </Text>\n      </Box>\n      <Box\n        ref={ref}\n        backgroundColor={colorStyle.background.secondary}\n        cursor="default"\n        userSelect="none"\n        p="6x"\n      >\n        Click outside me a message will be logged to the console\n      </Box>\n    </>\n  );\n});\n'})})]})}e.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,s.ah)(),n.components).wrapper;return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(i,n)})):i(n)}},62418:function(n,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/useOutsideClick",function(){return o(37841)}])}},function(n){n.O(0,[9774,2888,179],function(){return n(n.s=62418)}),_N_E=n.O()}]);