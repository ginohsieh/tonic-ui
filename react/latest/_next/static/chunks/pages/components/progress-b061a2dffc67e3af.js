(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1321],{5663:function(e,n,t){"use strict";t.r(n);var r=t(2322),a=t(5392);function i(e){var n=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",strong:"strong",h2:"h2",pre:"pre",code:"code",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{children:"Progress"}),"\n",(0,r.jsx)(n.p,{children:"Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Determinate"})," indicators display how long an operation will take."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Indeterminate"})," indicators visualize an unspecified wait time."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{children:"Import"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import {\n  LinearProgress,\n} from '@tonic-ui/react';\n"})}),"\n",(0,r.jsx)(n.h2,{children:"Linear"}),"\n",(0,r.jsx)(n.pre,{noInline:!0,children:(0,r.jsx)(n.code,{className:"language-jsx",children:"const FormGroup = (props) => (\n  <Box mb=\"4x\" {...props} />\n);\n\nconst useSelection = (defaultValue) => {\n  const [value, setValue] = React.useState(defaultValue);\n  const changeBy = (value) => () => setValue(value);\n  return [value, changeBy];\n};\n\nrender(() => {\n  const [variant, changeVariantBy] = useSelection('indeterminate');\n  const [size, changeSizeBy] = useSelection('sm');\n  const [progress, setProgress] = React.useState(0);\n  const resetProgress = React.useCallback(() => setProgress(0), []);\n\n  React.useEffect(() => {\n    const timer = setInterval(() => {\n      setProgress((oldProgress) => {\n        if (oldProgress === 100) {\n          return 0;\n        }\n        const diff = 5 + Math.round(Math.random() * 5);\n        return Math.min(oldProgress + diff, 100);\n      });\n    }, 200);\n\n    return () => {\n      clearInterval(timer);\n    };\n  }, []);\n\n  return (\n    <>\n      <FormGroup>\n        <Box mb=\"2x\">\n          <TextLabel>\n            variant\n          </TextLabel>\n        </Box>\n        <ButtonGroup\n          variant=\"secondary\"\n          css={{\n            '> *:not(:first-of-type)': {\n              marginLeft: -1\n            }\n          }}\n        >\n          {['indeterminate', 'determinate'].map(value => (\n            <Button\n              key={value}\n              selected={value === variant}\n              onClick={callAll(\n                changeVariantBy(value),\n                resetProgress,\n              )}\n              minWidth=\"15x\"\n            >\n              {value}\n            </Button>\n          ))}\n        </ButtonGroup>\n      </FormGroup>\n      <FormGroup>\n        <Box mb=\"2x\">\n          <TextLabel>\n            size\n          </TextLabel>\n        </Box>\n        <ButtonGroup\n          variant=\"secondary\"\n          css={{\n            '> *:not(:first-of-type)': {\n              marginLeft: -1\n            }\n          }}\n        >\n          {['xs', 'sm', 'md', 'lg'].map(value => (\n            <Button\n              key={value}\n              selected={value === size}\n              onClick={changeSizeBy(value)}\n              minWidth=\"15x\"\n            >\n              {value}\n            </Button>\n          ))}\n        </ButtonGroup>\n      </FormGroup>\n      <Divider mb=\"4x\" />\n      <Flex alignItems=\"center\" columnGap=\"3x\" minHeight=\"5x\">\n        <Box width={320}>\n          <LinearProgress\n            variant={variant}\n            size={size}\n            value={variant === 'determinate' ? progress : undefined}\n          />\n        </Box>\n        {variant === 'determinate' && (\n          <TextLabel>\n            {progress}%\n          </TextLabel>\n        )}\n      </Flex>\n    </>\n  );\n});\n"})}),"\n",(0,r.jsx)(n.h3,{children:"Linear color"}),"\n",(0,r.jsxs)(n.p,{children:["You can use the ",(0,r.jsx)(n.code,{children:"color"})," prop to change the color of the progress bar. The default color is ",(0,r.jsx)(n.code,{children:"blue:60"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"It accepts a valid CSS background color/image, a color token from the theme, or an array of colors to create a linear gradient."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'<Stack spacing="4x">\n  <TextLabel>Indeterminate</Text>\n  <LinearProgress size="md" variant="indeterminate" color="blue:60" width={320} />\n  <LinearProgress size="md" variant="indeterminate" color="teal:40" width={320} />\n  <Divider />\n  <TextLabel>Determinate</Text>\n  <Flex alignItems="center" columnGap="3x">\n    <LinearProgress size="md" variant="determinate" value={40} color="blue:60" width={320}/>\n    <TextLabel>40%</TextLabel>\n  </Flex>\n  <Flex alignItems="center" columnGap="3x">\n    <LinearProgress size="md" variant="determinate" value={60} color="teal:40" width={320} />\n    <TextLabel>60%</TextLabel>\n  </Flex>\n  <Divider />\n  <TextLabel>Linear gradient</Text>\n  <Flex\n    alignItems="center"\n    columnGap="2x"\n    justifyContent="space-between"\n    width={320}\n  >\n    <Box backgroundColor="blue:60" px="2x" py="1x" color="white:primary">\n      blue:60\n    </Box>\n    <Box backgroundColor="teal:40" px="2x" py="1x" color="black:primary">\n      teal:40\n    </Box>\n  </Flex>\n  <Flex alignItems="center" columnGap="3x">\n    <LinearProgress\n      size="md"\n      variant="determinate"\n      value={100}\n      color={[\'blue:60\', \'teal:40\']}\n      width={320}\n    />\n    <TextLabel>100%</TextLabel>\n  </Flex>\n  <Divider />\n  <TextLabel>Linear gradient with wave light</Text>\n  <Flex alignItems="center" columnGap="3x">\n    <LinearProgress\n      size="md"\n      variant="determinate"\n      value={100}\n      color="linear-gradient(90deg, rgba(255, 255, 255, 0) 6.03%, rgba(255, 255, 255, 0.12) 16.32%, rgba(255, 255, 255, 0.12) 42.22%, rgba(255, 255, 255, 0) 60.67%), linear-gradient(90deg, #1E5EDE, #04CAA1)"\n      width={320}\n    />\n    <TextLabel>100%</TextLabel>\n  </Flex>\n</Stack>\n'})}),"\n",(0,r.jsx)(n.h2,{children:"Props"}),"\n",(0,r.jsx)(n.h3,{children:"LinearProgress"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{align:"left",children:"Name"}),(0,r.jsx)(n.th,{align:"left",children:"Type"}),(0,r.jsx)(n.th,{align:"left",children:"Default"}),(0,r.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:"color"}),(0,r.jsx)(n.td,{align:"left",children:"string | string[]"}),(0,r.jsx)(n.td,{align:"left",children:"'blue:60'"}),(0,r.jsx)(n.td,{align:"left",children:"The color of the progress bar. It accepts a valid CSS background color/image, a color token from the theme, or an array of colors to create a linear gradient."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:"min"}),(0,r.jsx)(n.td,{align:"left",children:"numbner"}),(0,r.jsx)(n.td,{align:"left",children:"0"}),(0,r.jsx)(n.td,{align:"left",children:"The minimum value of the progress."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:"max"}),(0,r.jsx)(n.td,{align:"left",children:"number"}),(0,r.jsx)(n.td,{align:"left",children:"100"}),(0,r.jsx)(n.td,{align:"left",children:"The maximum value of the progress."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:"size"}),(0,r.jsx)(n.td,{align:"left",children:"string"}),(0,r.jsx)(n.td,{align:"left",children:"'sm'"}),(0,r.jsx)(n.td,{align:"left",children:"The size of the progress bar. One of: 'xs', 'sm', 'md', 'lg'"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:"variant"}),(0,r.jsx)(n.td,{align:"left",children:"string"}),(0,r.jsx)(n.td,{align:"left",children:"'indeterminate'"}),(0,r.jsxs)(n.td,{align:"left",children:["The variant to use. One of: 'indeterminate', 'determinate'",(0,r.jsx)("br",{}),"• Use indeterminate when there is no progress value.",(0,r.jsx)("br",{}),"• Use determinate when a progress value is defined."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{align:"left",children:"value"}),(0,r.jsx)(n.td,{align:"left",children:"number"}),(0,r.jsx)(n.td,{align:"left"}),(0,r.jsx)(n.td,{align:"left",children:"The value of the progress indicator for the determinate variant."})]})]})]})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.ah)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(i,e)})):i(e)}},2264:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/progress",function(){return t(5663)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=2264)}),_N_E=e.O()}]);