(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6960],{3959:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return c}});a(2784);var n=a(876),r=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p={};function c(e){var t=e.components,a=o(e,r);return(0,n.kt)("wrapper",l({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",null,"CheckboxGroup"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"CheckboxGroup")," is used to group related checkboxes."),(0,n.kt)("h2",null,"Import"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import { CheckboxGroup } from '@tonic-ui/react';\n")),(0,n.kt)("h3",null,"Usage"),(0,n.kt)("h4",null,"Uncontrolled checkbox group"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},'<CheckboxGroup defaultValue={["apple"]}>\n  <Stack direction="column" spacing="1x" shouldWrapChildren>\n    <Checkbox value="apple">Apple</Checkbox>\n    <Checkbox value="orange">Orange</Checkbox>\n    <Checkbox value="papaya">Papaya</Checkbox>\n  </Stack>\n</CheckboxGroup>\n')),(0,n.kt)("h4",null,"Controlled checkbox group"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},'function Example() {\n  const [value, setValue] = React.useState([\'apple\']);\n\n  return (\n    <CheckboxGroup value={value} onChange={value => setValue(value)}>\n      <Stack direction="column" spacing="1x" shouldWrapChildren>\n        <Checkbox value="apple">Apple</Checkbox>\n        <Checkbox value="orange">Orange</Checkbox>\n        <Checkbox value="papaya">Papaya</Checkbox>\n      </Stack>\n    </CheckboxGroup>\n  );\n}\n')),(0,n.kt)("h3",null,"Group orientation"),(0,n.kt)("p",null,"Make a set of checkboxes appear horizontal stacked rather than vertically, by adding ",(0,n.kt)("inlineCode",{parentName:"p"},'flexDirection="row"')," to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Stack")," component."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},'<CheckboxGroup defaultValue={[\'apple\']}>\n  <Stack direction="row" spacing="3x">\n    <Checkbox value="apple">Apple</Checkbox>\n    <Checkbox value="orange">Orange</Checkbox>\n    <Checkbox value="papaya">Papaya</Checkbox>\n  </Stack>\n</CheckboxGroup>\n')),(0,n.kt)("h3",null,"Colors"),(0,n.kt)("p",null,"Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"variantColor")," prop to change the color scheme of the Radio. ",(0,n.kt)("inlineCode",{parentName:"p"},"variantColor")," can be any color key with key ",(0,n.kt)("inlineCode",{parentName:"p"},"50"),"(hover), ",(0,n.kt)("inlineCode",{parentName:"p"},"60"),"(checked) that exist in the ",(0,n.kt)("inlineCode",{parentName:"p"},"theme.colors"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},'<CheckboxGroup variantColor="green" defaultValue={[\'apple\']}>\n  <Stack direction="row" spacing="3x">\n    <Checkbox value="apple">Apple</Checkbox>\n    <Checkbox value="orange">Orange</Checkbox>\n    <Checkbox value="papaya">Papaya</Checkbox>\n  </Stack>\n</CheckboxGroup>\n')),(0,n.kt)("h3",null,"Sizes"),(0,n.kt)("p",null,"Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"size")," prop to change the size of the ",(0,n.kt)("inlineCode",{parentName:"p"},"CheckboxGroup"),". You can set the value to ",(0,n.kt)("inlineCode",{parentName:"p"},"sm"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"md"),", or ",(0,n.kt)("inlineCode",{parentName:"p"},"lg"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="column" spacing="1x" shouldWrapChildren>\n  <CheckboxGroup size="sm" defaultValue={[\'apple\']}>\n    <Stack direction="row" spacing="3x">\n      <Checkbox value="apple">Apple</Checkbox>\n      <Checkbox value="orange">Orange</Checkbox>\n      <Checkbox value="papaya">Papaya</Checkbox>\n    </Stack>\n  </CheckboxGroup>\n  <CheckboxGroup size="md" defaultValue={[\'apple\']}>\n    <Stack direction="row" spacing="3x">\n      <Checkbox value="apple">Apple</Checkbox>\n      <Checkbox value="orange">Orange</Checkbox>\n      <Checkbox value="papaya">Papaya</Checkbox>\n    </Stack>\n  </CheckboxGroup>\n  <CheckboxGroup size="lg" defaultValue={[\'apple\']}>\n    <Stack direction="row" spacing="3x">\n      <Checkbox value="apple">Apple</Checkbox>\n      <Checkbox value="orange">Orange</Checkbox>\n      <Checkbox value="papaya">Papaya</Checkbox>\n    </Stack>\n  </CheckboxGroup>\n</Stack>\n')),(0,n.kt)("h3",null,"States"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="column" spacing="2x" shouldWrapChildren>\n  <CheckboxGroup defaultValue={[\'apple\']}>\n    <Stack direction="row" spacing="3x">\n      <Checkbox value="apple">Apple</Checkbox>\n      <Checkbox value="orange">Orange</Checkbox>\n      <Checkbox value="papaya">Papaya</Checkbox>\n    </Stack>\n  </CheckboxGroup>\n  <CheckboxGroup disabled defaultValue={[\'apple\']}>\n    <Stack direction="row" spacing="3x">\n      <Checkbox value="apple">Apple</Checkbox>\n      <Checkbox value="orange">Orange</Checkbox>\n      <Checkbox value="papaya">Papaya</Checkbox>\n    </Stack>\n  </CheckboxGroup>\n</Stack>\n')),(0,n.kt)("h3",null,"Asynchronous data loading"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},'function Example() {\n  const [state, setState] = React.useState({\n    state: \'idle\',\n    fruits: [],\n  });\n  const timerRef = React.useRef(null);\n  const fetchData = React.useCallback(() => {\n    setState(prevState => ({ ...prevState, state: \'loading\' }));\n\n    if (timerRef.current) {\n      clearTimeout(timerRef.current);\n      timerRef.current = null;\n    }\n    timerRef.current = setTimeout(() => {\n      setState({\n        state: \'success\',\n        fruits: [\'apple\'],\n      });\n\n      timerRef.current = null;\n    }, 2000);\n  }, []);\n\n  React.useEffect(() => {\n    fetchData();\n  }, [fetchData]);\n\n  return (\n    <>\n      <Box mb="4x">\n        <LinkButton onClick={() => fetchData()}>\n          <Flex alignItems="center">\n            <Icon icon="redo" spin={true} animationPlayState={state.state === \'loading\' ? \'running\' : \'paused\'} />\n            <Space width="2x" />\n            Reload\n          </Flex>\n        </LinkButton>\n      </Box>\n      <CheckboxGroup\n        value={state.fruits}\n        disabled={state.state === \'loading\'}\n        onChange={value => {\n          setState(prevState => ({ ...prevState, fruits: value }));\n        }}\n      >\n        <Stack direction="row" spacing="3x">\n          <Checkbox value="apple">Apple</Checkbox>\n          <Checkbox value="orange">Orange</Checkbox>\n          <Checkbox value="papaya">Papaya</Checkbox>\n        </Stack>\n      </CheckboxGroup>\n    </>\n  );\n}\n')),(0,n.kt)("h2",null,"Props"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"children"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ReactNode ","|"," (context) => ReactNode"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"A function child can be used intead of a React element. This function is called with the context object.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"defaultValue"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(string","|","number)[]"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"The initial value of the checkbox group.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"disabled"),(0,n.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"If ",(0,n.kt)("inlineCode",{parentName:"td"},"true"),", all checkboxes will be disabled.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"The name used to reference the value of the control. If you don't provide this prop, it falls back to a randomly generated name.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"onChange"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(event) => void"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"A callback fired when any descendant ",(0,n.kt)("inlineCode",{parentName:"td"},"Checkbox")," is checked or unchecked.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"size"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"'md'"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The size (width and height) of the checkbox. One of: 'sm', 'md', 'lg'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"value"),(0,n.kt)("td",{parentName:"tr",align:"left"},"(string","|","number)[]"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"The value of the checkbox group.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"variantColor"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"}),(0,n.kt)("td",{parentName:"tr",align:"left"},"The color of the checkbox when it's checked. This should be one of the color keys in the theme (e.g. 'green', 'red')")))))}c.isMDXComponent=!0},5182:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/checkboxgroup",function(){return a(3959)}])}},function(e){e.O(0,[9774,2888,179],(function(){return t=5182,e(e.s=t);var t}));var t=e.O();_N_E=t}]);