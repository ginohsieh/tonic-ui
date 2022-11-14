(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6930],{4810:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return p}});var a=t(7896),l=t(9740),o=(t(2784),t(876)),i=["components"],r={};function p(n){var e=n.components,t=(0,l.Z)(n,i);return(0,o.kt)("wrapper",(0,a.Z)({},r,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",null,"Skeleton"),(0,o.kt)("p",null,"Display a placeholder preview of your content before the data gets loaded to reduce load-time frustration."),(0,o.kt)("h2",null,"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Skeleton } from '@tonic-ui/react';\n")),(0,o.kt)("h2",null,"Usage"),(0,o.kt)("p",null,"The component is designed to be used when the data for your component might not be immediately available. For instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"disabled",disabled:!0},'{image\n  ? <Image src={image} width={240} height={180} />\n  : <Skeleton variant="rectangle" width={240} height={120} />\n}\n')),(0,o.kt)("h3",null,"Variants"),(0,o.kt)("p",null,"The component supports 3 shape variants:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"text")," (default) represents a single line of text."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rectangle")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"circle")," represent a rectangle and a circle respectively.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="column" spacing="4x" width={240}>\n  <Skeleton variant="text" />\n  <Skeleton variant="circle" width={40} height={40} />\n  <Skeleton variant="rectangle" width={240} height={80} />\n  <Skeleton variant="rectangle" width={240} height={80} borderRadius="sm" />\n</Stack>\n')),(0,o.kt)("h3",null,"Animations"),(0,o.kt)("p",null,"By default, the animation is disabled. You can enable animation by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"animation")," prop to ",(0,o.kt)("inlineCode",{parentName:"p"},"wave")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"pulse"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},'const FormGroup = (props) => (\n  <Box mb="4x" {...props} />\n);\n\nconst useSelection = (defaultValue) => {\n  const [value, setValue] = React.useState(defaultValue);\n  const changeBy = (value) => () => setValue(value);\n  return [value, changeBy];\n};\n\nrender(() => {\n  const [animation, changeAnimationBy] = useSelection(\'none\');\n\n  return (\n    <>\n      <FormGroup>\n        <Box mb="2x">\n          <TextLabel>\n            animation\n          </TextLabel>\n        </Box>\n        <ButtonGroup\n          variant="secondary"\n          css={{\n            \'> *:not(:first-of-type)\': {\n              marginLeft: -1\n            }\n          }}\n        >\n          {[\'none\', \'pulse\', \'wave\'].map(value => (\n            <Button\n              key={value}\n              selected={value === animation}\n              onClick={changeAnimationBy(value)}\n              minWidth="15x"\n            >\n              {value}\n            </Button>\n          ))}\n        </ButtonGroup>\n      </FormGroup>\n      <Divider my="4x" />\n      <Stack direction="column" spacing="4x">\n        <Skeleton animation={animation} width={160} />\n        <Skeleton animation={animation} width={240} />\n        <Skeleton animation={animation} width={240} />\n      </Stack>\n    </>\n  );\n});\n')),(0,o.kt)("h3",null,"Color"),(0,o.kt)("p",null,"The color of the component can be customized by changing its ",(0,o.kt)("inlineCode",{parentName:"p"},"backgroundColor")," prop. This is especially useful when on a dark background."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<Box display="inline-block" backgroundColor="gray:100" p="6x">\n  <Skeleton\n    variant="rectangle"\n    width={240}\n    height={120}\n    backgroundColor="gray:90"\n    animation="pulse"\n  />\n</Box>\n')),(0,o.kt)("h3",null,"More examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<ModalContent width="max(320px, 50%)">\n  <ModalHeader>\n    Modal Title\n  </ModalHeader>\n  <ModalBody>\n    <Stack direction="column" spacing="10x">\n      <Stack direction="column" spacing="4x">\n        <Skeleton animation="pulse" width="80%" />\n        <Skeleton animation="pulse" />\n        <Skeleton animation="pulse" />\n      </Stack>\n      <Stack direction="column" spacing="4x">\n        <Skeleton animation="pulse" width="80%" />\n        <Skeleton animation="pulse" />\n        <Skeleton animation="pulse" />\n      </Stack>\n      <Stack direction="column" spacing="4x">\n        <Skeleton animation="pulse" width="80%" />\n        <Skeleton animation="pulse" />\n        <Skeleton animation="pulse" />\n      </Stack>\n    </Stack>\n  </ModalBody>\n  <ModalFooter>\n    <Grid\n      templateColumns="1fr 1fr"\n      columnGap="2x"\n    >\n      <Button disabled>OK</Button>\n      <Button disabled>Cancel</Button>\n    </Grid>\n  </ModalFooter>\n</ModalContent>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},'render(() => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n\n  return (\n    <Stack direction="column" width="max(320px, 50%)" backgroundColor={colorStyle.background.secondary}>\n      <Flex alignItems="center" columnGap="5x" p="4x">\n        <Flex flex="none">\n          <Skeleton variant="circle" animation="wave" width={40} height={40} />\n        </Flex>\n        <Stack direction="column" spacing="4x" flex="auto">\n          <Skeleton variant="text" animation="wave" />\n          <Skeleton variant="text" animation="wave" />\n        </Stack>\n      </Flex>\n      <Divider />\n      <Box p="4x">\n        <Skeleton variant="rectangle" animation="wave" height={160} />\n      </Box>\n    </Stack>\n  );\n});\n')),(0,o.kt)("h2",null,"Props"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"variant"),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"'text'"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The type of content that will be rendered. One of: 'text', 'rectangle', 'circle'")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"animation"),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"The animation effect. One of: 'pulse', 'wave'")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"width"),(0,o.kt)("td",{parentName:"tr",align:"left"},"number ","|"," string"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"Width of the skeleton. Useful when the skeleton is inside an inline element with no width of its own.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"height"),(0,o.kt)("td",{parentName:"tr",align:"left"},"number ","|"," string"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"Height of the skeleton. Useful when you don't want to adopt the skeleton to a text element.")))))}p.isMDXComponent=!0},9118:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/skeleton",function(){return t(4810)}])}},function(n){n.O(0,[9774,2888,179],(function(){return e=9118,n(n.s=e);var e}));var e=n.O();_N_E=e}]);