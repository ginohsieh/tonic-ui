(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6966],{3645:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var a=n(7896),i=n(59740),r=(n(2784),n(30876)),l=["components"],s={};function o(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",null,"Alert"),(0,r.kt)("p",null,"An alert is used to convey important information to the user through the use of contextual types, icons, and colors."),(0,r.kt)("h2",null,"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { Alert } from '@trendmicro/react-styled-ui';\n")),(0,r.kt)("h2",null,"Usage"),(0,r.kt)("h3",null,"Variants"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"variant")," prop to change the appearance of the alert. The variants come in two variations: ",(0,r.kt)("inlineCode",{parentName:"p"},"solid")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"outline"),"."),(0,r.kt)("h4",null,"Solid"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"solid")," variant is used to indicate an important message."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Alert variant="solid" severity="info">\n  <Text>This is an important message.</Text>\n</Alert>\n')),(0,r.kt)("h4",null,"Outline"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"outline")," variant is useful for displaying a contextual alert that is not a part of the primary flow of the application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Alert variant="outline" severity="info">\n  <Text>This is a contextual alert.</Text>\n</Alert>\n')),(0,r.kt)("h3",null,"Severity levels"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"severity")," prop can be used to specify the severity level of the alert. The severity levels are: ",(0,r.kt)("inlineCode",{parentName:"p"},"success"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"info"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"warning"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"error"),". The default severity level is ",(0,r.kt)("inlineCode",{parentName:"p"},"success"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="column" spacing="6x">\n  <Stack direction="column" spacing="2x">\n    <Alert variant="solid" severity="success">\n      <Text>This is a success alert.</Text>\n    </Alert>\n    <Alert variant="solid" severity="info">\n      <Text>This is an info alert.</Text>\n    </Alert>\n    <Alert variant="solid" severity="warning">\n      <Text>This is a warning alert.</Text>\n    </Alert>\n    <Alert variant="solid" severity="error">\n      <Text>This is an error alert.</Text>\n    </Alert>\n  </Stack>\n  <Stack direction="column" spacing="2x">\n    <Alert variant="outline" severity="success">\n      <Text>This is a success alert.</Text>\n    </Alert>\n    <Alert variant="outline" severity="info">\n      <Text>This is an info alert.</Text>\n    </Alert>\n    <Alert variant="outline" severity="warning">\n      <Text>This is a warning alert.</Text>\n    </Alert>\n    <Alert variant="outline" severity="error">\n      <Text>This is an error alert.</Text>\n    </Alert>\n  </Stack>\n</Stack>\n')),(0,r.kt)("h3",null,(0,r.kt)("inlineCode",{parentName:"h3"},"icon")," prop"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"icon")," prop allows you to specify an icon to be displayed in the alert.\nIf not specified, the default icon will be used based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"severity")," prop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="column" spacing="6x">\n  <Stack direction="column" spacing="2x">\n    <Alert variant="solid" severity="success" isClosable>\n      This is a success alert.\n    </Alert>\n    <Alert variant="solid" severity="success" icon="success" isClosable>\n      This is a success alert.\n    </Alert>\n    <Alert variant="solid" severity="success" icon={<Icon icon="check-circle-o" />} isClosable>\n      This is a success alert.\n    </Alert>\n    <Alert variant="solid" severity="success" icon={false} isClosable>\n      This is a success alert.\n    </Alert>\n  </Stack>\n  <Stack direction="column" spacing="2x">\n    <Alert variant="outline" severity="success" isClosable>\n      This is a success alert.\n    </Alert>\n    <Alert variant="outline" severity="success" icon="success" isClosable>\n      This is a success alert.\n    </Alert>\n    <Alert variant="outline" severity="success" icon={<Icon icon="check-circle-o" />} isClosable>\n      This is a success alert.\n    </Alert>\n    <Alert variant="outline" severity="success" icon={false} isClosable>\n      This is a success alert.\n    </Alert>\n  </Stack>\n</Stack>\n')),(0,r.kt)("h3",null,(0,r.kt)("inlineCode",{parentName:"h3"},"isClosable")," prop"),(0,r.kt)("p",null,"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"isClosable")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," to make the alert closable. The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="column" spacing="6x">\n  <Stack direction="column" spacing="2x">\n    <Alert variant="solid" severity="success" isClosable>\n      <Text>This is a success alert.</Text>\n    </Alert>\n    <Alert variant="solid" severity="info" isClosable>\n      <Text>This is an info alert.</Text>\n    </Alert>\n    <Alert variant="solid" severity="warning" isClosable>\n      <Text>This is a warning alert.</Text>\n    </Alert>\n    <Alert variant="solid" severity="error" isClosable>\n      <Text>This is an error alert.</Text>\n    </Alert>\n  </Stack>\n  <Stack direction="column" spacing="2x">\n    <Alert variant="outline" severity="success" isClosable>\n      <Text>This is a success alert.</Text>\n    </Alert>\n    <Alert variant="outline" severity="info" isClosable>\n      <Text>This is an info alert.</Text>\n    </Alert>\n    <Alert variant="outline" severity="warning" isClosable>\n      <Text>This is a warning alert.</Text>\n    </Alert>\n    <Alert variant="outline" severity="error" isClosable>\n      <Text>This is an error alert.</Text>\n    </Alert>\n  </Stack>\n</Stack>\n')),(0,r.kt)("h3",null,"Alert actions"),(0,r.kt)("p",null,"An alert action is a button or link to trigger an action. It is used to provide additional context to the user."),(0,r.kt)("p",null,"The action button is usually aligned to the right of the alert. You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"justifyContent")," to align the action button to the right."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="column" spacing="6x">\n  <Stack direction="column" spacing="2x">\n    <Alert variant="solid" severity="warning">\n      <Flex justify="space-between">\n        <Text>This is a warning alert.</Text>\n        <LinkButton>Learn More</LinkButton>\n      </Flex>\n    </Alert>\n    <Alert variant="solid" severity="error">\n      <Flex justify="space-between" mt={-1} mb={-2}>\n        <Text>This is an error alert.</Text>\n        <FlatButton size="sm" variant="outline" variantColor="black:primary">\n          Action Button\n        </FlatButton>\n      </Flex>\n    </Alert>\n  </Stack>\n  <Stack direction="column" spacing="2x">\n    <Alert variant="outline" severity="warning">\n      <Flex justify="space-between">\n        <Text>This is a warning alert.</Text>\n        <LinkButton>Learn More</LinkButton>\n      </Flex>\n    </Alert>\n    <Alert variant="outline" severity="error">\n      <Flex justify="space-between" mt={-1} mb={-2}>\n        <Text>This is an error alert.</Text>\n        <Button size="sm" variant="secondary">\n          Action Button\n        </Button>\n      </Flex>\n    </Alert>\n  </Stack>\n</Stack>\n')),(0,r.kt)("h3",null,"Formatted text"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Text")," component to format text."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="column" spacing="2x">\n  <Alert isClosable severity="success">\n    <Box mb="1x">\n      <Text fontWeight="bold">Success</Text>\n    </Box>\n    <Text mr={-36}>\n      This is a success alert.\n    </Text>\n  </Alert>\n  <Alert isClosable severity="info">\n    <Box mb="1x">\n      <Text fontWeight="bold">Info</Text>\n    </Box>\n    <Text mr={-36}>\n      This is an info alert.\n    </Text>\n  </Alert>\n  <Alert isClosable severity="warning">\n    <Box mb="1x">\n      <Text fontWeight="bold">Warning</Text>\n    </Box>\n    <Text mr={-36}>\n      This is a warning alert.\n    </Text>\n  </Alert>\n  <Alert isClosable severity="error">\n    <Box mb="1x">\n      <Text fontWeight="bold">Error</Text>\n    </Box>\n    <Text mr={-36}>\n      This is an error alert.\n    </Text>\n  </Alert>\n</Stack>\n')),(0,r.kt)("h3",null,"Transition effects"),(0,r.kt)("p",null,"To animate the alert, you can use a transition component to apply an animation effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'function Example() {\n  const [isOpen, setIsOpen] = React.useState(true);\n  const handleOpen = () => setIsOpen(true);\n  const handleClose = () => setIsOpen(false);\n\n  return (\n    <>\n      <Collapse isOpen={isOpen}>\n        <Alert isClosable severity="info" onClose={handleClose}>\n          Click the close button on the right side.\n        </Alert>\n      </Collapse>\n      <Box mt="4x">\n        <Button onClick={handleOpen} disabled={isOpen}>\n          Reopen\n        </Button>\n      </Box>\n    </>\n  );\n}\n')),(0,r.kt)("h2",null,"Props"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"isClosable"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", a close button will appear on the right side.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"onClose"),(0,r.kt)("td",{parentName:"tr",align:"left"},"function"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"A callback called when the close button is clicked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"variant"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"'solid'"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The variant to use. One of: ",(0,r.kt)("inlineCode",{parentName:"td"},"'solid'"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"'outline'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"severity"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"'success'"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The severity level to use. One of: ",(0,r.kt)("inlineCode",{parentName:"td"},"'success'"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"'info'"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"'warning'"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"'error'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"icon"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string ","|"," ReactNode ","|"," false"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"},"Override the icon displayed before the children. Unless provided, the icon is mapped to the value of the ",(0,r.kt)("inlineCode",{parentName:"td"},"severity")," prop.")))))}o.isMDXComponent=!0},52129:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/alert",function(){return n(3645)}])}},function(e){e.O(0,[9774,2888,179],(function(){return t=52129,e(e.s=t);var t}));var t=e.O();_N_E=t}]);