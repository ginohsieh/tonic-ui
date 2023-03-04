(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6930],{16529:function(n,e,i){"use strict";i.r(e);var t=i(52322),a=i(45392);function l(n){var e=Object.assign({div:"div",h1:"h1",p:"p",h2:"h2",a:"a",svg:"svg",use:"use",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",nav:"nav"},(0,a.ah)(),n.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.div,{className:"main-content",id:"main-content",children:[(0,t.jsx)(e.h1,{id:"skeleton",children:"Skeleton"}),"\n",(0,t.jsx)(e.p,{children:"Display a placeholder preview of your content before the data gets loaded to reduce load-time frustration."}),"\n",(0,t.jsxs)(e.h2,{id:"import",children:["Import",(0,t.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,t.jsx)(e.svg,{children:(0,t.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-js",children:"import { Skeleton } from '@tonic-ui/react';\n"})}),"\n",(0,t.jsxs)(e.h2,{id:"usage",children:["Usage",(0,t.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usage",children:(0,t.jsx)(e.svg,{children:(0,t.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsx)(e.p,{children:"The component is designed to be used when the data for your component might not be immediately available. For instance:"}),"\n",(0,t.jsx)(e.pre,{disabled:!0,children:(0,t.jsx)(e.code,{className:"language-jsx",children:'{image\n  ? <Image src={image} width={240} height={180} />\n  : <Skeleton variant="rectangle" width={240} height={120} />\n}\n'})}),"\n",(0,t.jsxs)(e.h3,{id:"variants",children:["Variants",(0,t.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#variants",children:(0,t.jsx)(e.svg,{children:(0,t.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsx)(e.p,{children:"The component supports 3 shape variants:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"text"})," (default) represents a single line of text."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"rectangle"})," and ",(0,t.jsx)(e.code,{children:"circle"})," represent a rectangle and a circle respectively."]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:'<Stack direction="column" spacing="4x" width={240}>\n  <Skeleton variant="text" />\n  <Skeleton variant="circle" width={40} height={40} />\n  <Skeleton variant="rectangle" width={240} height={80} />\n  <Skeleton variant="rectangle" width={240} height={80} borderRadius="sm" />\n</Stack>\n'})}),"\n",(0,t.jsxs)(e.h3,{id:"animations",children:["Animations",(0,t.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#animations",children:(0,t.jsx)(e.svg,{children:(0,t.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsxs)(e.p,{children:["By default, the animation is disabled. You can enable animation by setting the ",(0,t.jsx)(e.code,{children:"animation"})," prop to ",(0,t.jsx)(e.code,{children:"wave"})," or ",(0,t.jsx)(e.code,{children:"pulse"}),"."]}),"\n",(0,t.jsx)(e.pre,{noInline:!0,children:(0,t.jsx)(e.code,{className:"language-jsx",children:'const FormGroup = (props) => (\n  <Box mb="4x" {...props} />\n);\n\nconst useSelection = (defaultValue) => {\n  const [value, setValue] = React.useState(defaultValue);\n  const changeBy = (value) => () => setValue(value);\n  return [value, changeBy];\n};\n\nrender(() => {\n  const [animation, changeAnimationBy] = useSelection(\'none\');\n\n  return (\n    <>\n      <FormGroup>\n        <Box mb="2x">\n          <TextLabel>\n            animation\n          </TextLabel>\n        </Box>\n        <ButtonGroup\n          variant="secondary"\n          css={{\n            \'> *:not(:first-of-type)\': {\n              marginLeft: -1\n            }\n          }}\n        >\n          {[\'none\', \'pulse\', \'wave\'].map(value => (\n            <Button\n              key={value}\n              selected={value === animation}\n              onClick={changeAnimationBy(value)}\n              minWidth="15x"\n            >\n              {value}\n            </Button>\n          ))}\n        </ButtonGroup>\n      </FormGroup>\n      <Divider my="4x" />\n      <Stack direction="column" spacing="4x">\n        <Skeleton animation={animation} width={160} />\n        <Skeleton animation={animation} width={240} />\n        <Skeleton animation={animation} width={240} />\n      </Stack>\n    </>\n  );\n});\n'})}),"\n",(0,t.jsxs)(e.h3,{id:"color",children:["Color",(0,t.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#color",children:(0,t.jsx)(e.svg,{children:(0,t.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsxs)(e.p,{children:["The color of the component can be customized by changing its ",(0,t.jsx)(e.code,{children:"backgroundColor"})," prop. This is especially useful when on a dark background."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:'<Box display="inline-block" backgroundColor="gray:100" p="6x">\n  <Skeleton\n    variant="rectangle"\n    width={240}\n    height={120}\n    backgroundColor="gray:90"\n    animation="pulse"\n  />\n</Box>\n'})}),"\n",(0,t.jsxs)(e.h3,{id:"more-examples",children:["More examples",(0,t.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#more-examples",children:(0,t.jsx)(e.svg,{children:(0,t.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-jsx",children:'<ModalContent width="max(320px, 50%)">\n  <ModalHeader>\n    Modal Title\n  </ModalHeader>\n  <ModalBody>\n    <Stack direction="column" spacing="10x">\n      <Stack direction="column" spacing="4x">\n        <Skeleton animation="pulse" width="80%" />\n        <Skeleton animation="pulse" />\n        <Skeleton animation="pulse" />\n      </Stack>\n      <Stack direction="column" spacing="4x">\n        <Skeleton animation="pulse" width="80%" />\n        <Skeleton animation="pulse" />\n        <Skeleton animation="pulse" />\n      </Stack>\n      <Stack direction="column" spacing="4x">\n        <Skeleton animation="pulse" width="80%" />\n        <Skeleton animation="pulse" />\n        <Skeleton animation="pulse" />\n      </Stack>\n    </Stack>\n  </ModalBody>\n  <ModalFooter>\n    <Grid\n      templateColumns="1fr 1fr"\n      columnGap="2x"\n    >\n      <Button disabled>OK</Button>\n      <Button disabled>Cancel</Button>\n    </Grid>\n  </ModalFooter>\n</ModalContent>\n'})}),"\n",(0,t.jsx)(e.pre,{noInline:!0,children:(0,t.jsx)(e.code,{className:"language-jsx",children:'render(() => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n\n  return (\n    <Stack direction="column" width="max(320px, 50%)" backgroundColor={colorStyle.background.secondary}>\n      <Flex alignItems="center" columnGap="5x" p="4x">\n        <Flex flex="none">\n          <Skeleton variant="circle" animation="wave" width={40} height={40} />\n        </Flex>\n        <Stack direction="column" spacing="4x" flex="auto">\n          <Skeleton variant="text" animation="wave" />\n          <Skeleton variant="text" animation="wave" />\n        </Stack>\n      </Flex>\n      <Divider />\n      <Box p="4x">\n        <Skeleton variant="rectangle" animation="wave" height={160} />\n      </Box>\n    </Stack>\n  );\n});\n'})}),"\n",(0,t.jsxs)(e.h2,{id:"props",children:["Props",(0,t.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#props",children:(0,t.jsx)(e.svg,{children:(0,t.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsxs)(e.h3,{id:"skeleton-1",children:["Skeleton",(0,t.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#skeleton-1",children:(0,t.jsx)(e.svg,{children:(0,t.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{align:"left",children:"Name"}),(0,t.jsx)(e.th,{align:"left",children:"Type"}),(0,t.jsx)(e.th,{align:"left",children:"Default"}),(0,t.jsx)(e.th,{align:"left",children:"Description"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{align:"left",children:"variant"}),(0,t.jsx)(e.td,{align:"left",children:"string"}),(0,t.jsx)(e.td,{align:"left",children:"'text'"}),(0,t.jsx)(e.td,{align:"left",children:"The type of content that will be rendered. One of: 'text', 'rectangle', 'circle'"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{align:"left",children:"animation"}),(0,t.jsx)(e.td,{align:"left",children:"string"}),(0,t.jsx)(e.td,{align:"left"}),(0,t.jsx)(e.td,{align:"left",children:"The animation effect. One of: 'pulse', 'wave'"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{align:"left",children:"width"}),(0,t.jsx)(e.td,{align:"left",children:"number | string"}),(0,t.jsx)(e.td,{align:"left"}),(0,t.jsx)(e.td,{align:"left",children:"Width of the skeleton. Useful when the skeleton is inside an inline element with no width of its own."})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{align:"left",children:"height"}),(0,t.jsx)(e.td,{align:"left",children:"number | string"}),(0,t.jsx)(e.td,{align:"left"}),(0,t.jsx)(e.td,{align:"left",children:"Height of the skeleton. Useful when you don't want to adopt the skeleton to a text element."})]})]})]})]}),(0,t.jsxs)(e.nav,{className:"toc",id:"toc",children:[(0,t.jsx)(e.div,{className:"toc-heading",children:"Contents"}),(0,t.jsxs)(e.ul,{className:"toc-level toc-level-1",children:[(0,t.jsx)(e.li,{className:"toc-item toc-item-h2",children:(0,t.jsx)(e.a,{className:"toc-link toc-link-h2",href:"#import",children:"Import"})}),(0,t.jsxs)(e.li,{className:"toc-item toc-item-h2",children:[(0,t.jsx)(e.a,{className:"toc-link toc-link-h2",href:"#usage",children:"Usage"}),(0,t.jsxs)(e.ul,{className:"toc-level toc-level-2",children:[(0,t.jsx)(e.li,{className:"toc-item toc-item-h3",children:(0,t.jsx)(e.a,{className:"toc-link toc-link-h3",href:"#variants",children:"Variants"})}),(0,t.jsx)(e.li,{className:"toc-item toc-item-h3",children:(0,t.jsx)(e.a,{className:"toc-link toc-link-h3",href:"#animations",children:"Animations"})}),(0,t.jsx)(e.li,{className:"toc-item toc-item-h3",children:(0,t.jsx)(e.a,{className:"toc-link toc-link-h3",href:"#color",children:"Color"})}),(0,t.jsx)(e.li,{className:"toc-item toc-item-h3",children:(0,t.jsx)(e.a,{className:"toc-link toc-link-h3",href:"#more-examples",children:"More examples"})})]})]}),(0,t.jsxs)(e.li,{className:"toc-item toc-item-h2",children:[(0,t.jsx)(e.a,{className:"toc-link toc-link-h2",href:"#props",children:"Props"}),(0,t.jsx)(e.ul,{className:"toc-level toc-level-2",children:(0,t.jsx)(e.li,{className:"toc-item toc-item-h3",children:(0,t.jsx)(e.a,{className:"toc-link toc-link-h3",href:"#skeleton-1",children:"Skeleton"})})})]})]})]})]})}e.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,a.ah)(),n.components).wrapper;return e?(0,t.jsx)(e,Object.assign({},n,{children:(0,t.jsx)(l,n)})):l(n)}},59118:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/skeleton",function(){return i(16529)}])}},function(n){n.O(0,[9774,2888,179],function(){return n(n.s=59118)}),_N_E=n.O()}]);