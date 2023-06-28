(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5690],{48071:function(e,n,t){"use strict";t.r(n);var r=t(52322),l=t(45392);function a(e){var n=Object.assign({div:"div",h1:"h1",p:"p",code:"code",h2:"h2",a:"a",svg:"svg",use:"use",pre:"pre",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,l.ah)(),e.components);return(0,r.jsxs)(n.div,{className:"main-content",id:"main-content",children:[(0,r.jsx)(n.h1,{id:"stack",children:"Stack"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Stack"})," is a layout utility component that makes it easy to stack items together and apply a space between them."]}),"\n",(0,r.jsxs)(n.h2,{id:"import",children:["Import",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { Stack } from '@tonic-ui/react';\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"usage",children:["Usage",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usage",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["Try resizing the browser window width as small as possible to see how ",(0,r.jsx)(n.code,{children:"Stack"})," adapts to the available space."]}),"\n",(0,r.jsx)(n.pre,{noInline:!0,children:(0,r.jsx)(n.code,{className:"language-jsx",children:'const Item = (props) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n  const boxShadow = colorStyle.shadow.thin;\n  const borderColor = colorMode === \'dark\' ? \'gray:70\' : \'gray:20\';\n  return (\n    <Box\n      boxShadow={boxShadow}\n      border={1}\n      borderColor={borderColor}\n      p="2x"\n      {...props}\n    />\n  );\n};\n\nconst FormGroup = (props) => (\n  <Box mb="4x" {...props} />\n);\n\nconst Note = (props) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n  return (\n    <Text color={colorStyle.color.tertiary} {...props} />\n  );\n};\n\nconst useSelection = (defaultValue) => {\n  const [value, setValue] = React.useState(defaultValue);\n  const changeBy = (value) => () => setValue(value);\n  return [value, changeBy];\n};\n\nfunction Example() {\n  const [direction, changeDirectionBy] = useSelection(\'column\');\n  const [flexWrap, changeFlexWrapBy] = useSelection(\'nowrap\');\n  const [gap, toggleGap] = useToggle(false);\n  const [shouldWrapChildren, toggleShouldWrapChildren] = useToggle(false);\n\n  return (\n    <>\n      <FormGroup>\n        <Box mb="2x">\n          <TextLabel>\n            direction\n          </TextLabel>\n        </Box>\n        <ButtonGroup\n          variant="secondary"\n          css={{\n            \'> *:not(:first-of-type)\': {\n              marginLeft: -1\n            }\n          }}\n        >\n          {[\'column\', \'column-reverse\', \'row\', \'row-reverse\'].map(value => (\n            <Button\n              key={value}\n              selected={value === direction}\n              onClick={changeDirectionBy(value)}\n              minWidth="15x"\n            >\n              {value}\n            </Button>\n          ))}\n        </ButtonGroup>\n      </FormGroup>\n      <FormGroup>\n        <Box mb="2x">\n          <TextLabel>\n            flexWrap\n          </TextLabel>\n        </Box>\n        <ButtonGroup\n          variant="secondary"\n          css={{\n            \'> *:not(:first-of-type)\': {\n              marginLeft: -1\n            }\n          }}\n        >\n          {[\'nowrap\', \'wrap\', \'wrap-reverse\'].map(value => (\n            <Button\n              key={value}\n              selected={value === flexWrap}\n              onClick={changeFlexWrapBy(value)}\n              minWidth="15x"\n            >\n              {value}\n            </Button>\n          ))}\n        </ButtonGroup>\n      </FormGroup>\n      <FormGroup>\n        <TextLabel>\n          <Flex alignItems="center">\n            <Checkbox\n              checked={gap}\n              onChange={() => toggleGap()}\n            />\n            <Space width="2x" />\n            <Text fontFamily="mono" whiteSpace="nowrap">\n              gap="4x"\n            </Text>\n          </Flex>\n        </TextLabel>\n        <Note pl="6x" pt="1x">\n          Set \'direction="row"\' and \'flexWrap="wrap"\' to see the gap between rows.\n        </Note>\n      </FormGroup>\n      <FormGroup>\n        <TextLabel display="flex" alignItems="center">\n          <Checkbox\n            checked={shouldWrapChildren}\n            onChange={() => toggleShouldWrapChildren()}\n          />\n          <Space width="2x" />\n          <Text fontFamily="mono" whiteSpace="nowrap">\n            shouldWrapChildren\n          </Text>\n        </TextLabel>\n      </FormGroup>\n      <Divider mb="4x" />\n      <Stack\n        direction={direction}\n        flexWrap={flexWrap}\n        shouldWrapChildren={shouldWrapChildren}\n        gap={gap ? \'4x\' : undefined}\n        spacing="4x"\n      >\n        <Item>Stacked Item 1</Item>\n        <Item>Stacked Item 2</Item>\n        <Item>Stacked Item 3</Item>\n        <Item>Stacked Item 4</Item>\n        <Item>Stacked Item 5</Item>\n        <Item>Stacked Item 6</Item>\n      </Stack>\n    </>\n  );\n}\n\nrender(<Example />);\n'})}),"\n",(0,r.jsxs)(n.h2,{id:"props",children:["Props",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#props",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(n.h3,{id:"stack-1",children:["Stack",(0,r.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#stack-1",children:(0,r.jsx)(n.svg,{children:(0,r.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{align:"left",children:"Name"}),(0,r.jsx)(n.th,{align:"left",children:"Type"}),(0,r.jsx)(n.th,{align:"left",children:"Default"}),(0,r.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:"children"}),(0,r.jsx)(n.td,{align:"left",children:"ReactNode"}),(0,r.jsx)(n.td,{align:"left"}),(0,r.jsx)(n.td,{align:"left"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:"direction"}),(0,r.jsx)(n.td,{align:"left",children:"string"}),(0,r.jsx)(n.td,{align:"left",children:"'column'"}),(0,r.jsxs)(n.td,{align:"left",children:["The shorthand of ",(0,r.jsx)(n.code,{children:"flexDirection"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:"flexDirection"}),(0,r.jsx)(n.td,{align:"left",children:"string"}),(0,r.jsx)(n.td,{align:"left",children:"'column'"}),(0,r.jsx)(n.td,{align:"left",children:"The direction to stack the items. One of: 'column', 'column-reverse', 'row', 'row-reverse'"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:"flexWrap"}),(0,r.jsx)(n.td,{align:"left",children:"string"}),(0,r.jsx)(n.td,{align:"left"}),(0,r.jsx)(n.td,{align:"left",children:"Whether to wrap the items. One of: 'nowrap' (default), 'wrap', 'wrap-reverse'"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:"gap"}),(0,r.jsx)(n.td,{align:"left",children:"number | string"}),(0,r.jsx)(n.td,{align:"left"}),(0,r.jsxs)(n.td,{align:"left",children:["Set the gap between rows and columns. It is useful when ",(0,r.jsx)(n.code,{children:"flexWrap"})," is set to 'wrap' or 'wrap-reverse'."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:"shouldWrapChildren"}),(0,r.jsx)(n.td,{align:"left",children:"boolean"}),(0,r.jsx)(n.td,{align:"left",children:"false"}),(0,r.jsxs)(n.td,{align:"left",children:["If ",(0,r.jsx)(n.code,{children:"true"}),", each child will be wrapped in a ",(0,r.jsx)(n.code,{children:"Box"})," with ",(0,r.jsx)(n.code,{children:"display: inline-flex"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:"spacing"}),(0,r.jsx)(n.td,{align:"left",children:"number | string"}),(0,r.jsx)(n.td,{align:"left",children:"0"}),(0,r.jsx)(n.td,{align:"left",children:"The space between items based on the direction."})]})]})]})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.ah)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},88444:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/stack",function(){return t(48071)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=88444)}),_N_E=e.O()}]);