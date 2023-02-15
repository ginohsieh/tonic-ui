(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4157],{2244:function(e,n,l){"use strict";l.r(n);var o=l(52322),t=l(45392);function i(e){var n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a"},(0,t.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{children:"Modal"}),"\n",(0,o.jsx)(n.p,{children:"Modal dialogs are used to inform users about a task and can contain critical information, require decisions, or involve multiple tasks. Modal dialogs disable app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken."}),"\n",(0,o.jsx)(n.h2,{children:"Import"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Modal"}),": A ",(0,o.jsx)(n.code,{children:"Provider"})," component that provides the context to the components it wraps."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"ModalOverlay"}),": The overlay of the modal."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"ModalContent"}),": The content of the modal."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"ModalHeader"}),": The header of the modal."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"ModalBody"}),": The body of the modal."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"ModalFooter"}),": The footer of the modal."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import {\n  Modal,\n  ModalOverlay,\n  ModalContent,\n  ModalHeader,\n  ModalBody,\n  ModalFooter,\n  useModal,\n} from '@tonic-ui/react';\n"})}),"\n",(0,o.jsx)(n.h2,{children:"Modal components"}),"\n",(0,o.jsx)(n.p,{children:"Below is a static modal example, including modal header (optional), modal body (required when padding is necessary), and modal footer (optional)."}),"\n",(0,o.jsx)(n.p,{children:"You can also compose your modal components when customization is needed."}),"\n",(0,o.jsx)(n.pre,{noInline:!0,children:(0,o.jsx)(n.code,{className:"language-jsx",children:'function Example() {\n  return (\n    <Stack direction="column" spacing="4x">\n      <ModalContent width={480}>\n        <ModalHeader>\n          Modal Title\n        </ModalHeader>\n        <ModalBody>\n          <Alert variant="outline" severity="warning" mb="4x">\n            <Text>This is a warning alert</Text>\n          </Alert>\n          <Text mb="4x">\n            Modal body text goes here.\n          </Text>\n          <SkeletonBody />\n        </ModalBody>\n        <ModalFooter>\n          <Button variant="primary" minWidth="20x">Save Changes</Button>\n          <Space width="2x" />\n          <Button minWidth="20x">Cancel</Button>\n        </ModalFooter>\n      </ModalContent>\n      <ModalContent width={480}>\n        <ModalBody>\n          <Text mb="4x">\n            Modal body text goes here.\n          </Text>\n          <SkeletonBody />\n        </ModalBody>\n        <ModalFooter>\n          <Button variant="primary" minWidth="20x">Save Changes</Button>\n          <Space width="2x" />\n          <Button minWidth="20x">Cancel</Button>\n        </ModalFooter>\n      </ModalContent>\n      <ModalContent width={480}>\n        <ModalBody>\n          <Text mb="4x">\n            Modal body text goes here.\n          </Text>\n          <SkeletonBody />\n        </ModalBody>\n      </ModalContent>\n      <ModalContent width={480}>\n        <Box px="4x" py="4x">\n          You can create a custom modal with any sort of content.\n        </Box>\n      </ModalContent>\n    </Stack>\n  );\n}\n\nrender(<Example />);\n'})}),"\n",(0,o.jsx)(n.h2,{children:"Usage"}),"\n",(0,o.jsx)(n.p,{children:"Click the button below to toggle a modal. The modal will show up in the center of the screen."}),"\n",(0,o.jsx)(n.pre,{noInline:!0,children:(0,o.jsx)(n.code,{className:"language-jsx",children:'const CodeBlock = (props) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n\n  return (\n    <Box\n      backgroundColor={colorStyle.background.secondary}\n      border={1}\n      borderColor={colorStyle.divider}\n      fontFamily="mono"\n      py="3x"\n      px="3x"\n      whiteSpace="pre"\n      {...props}\n    />\n  );\n};\n\nconst FormGroup = (props) => (\n  <Box mb="4x" {...props} />\n);\n\nconst useSelection = (defaultValue) => {\n  const [value, setValue] = React.useState(defaultValue);\n  const changeBy = (value) => () => setValue(value);\n  return [value, changeBy];\n};\n\nconst bodyScrollLockCode = `\n// import\nimport { Global } from \'@emotion/react\';\n\n// example\n<Modal>\n  <Global\n    styles={css\\`\n      body {\n        overflow: hidden;\n      }\n    \\`}\n  />\n  <ModalOverlay />\n  <ModalContent>\n    <ModalHeader />\n    <ModalBody />\n    <ModalFooter />\n  </ModalContent>\n</Modal>\n`.trim();\n\nfunction Example() {\n  const initialFocusRef = React.useRef();\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n  const iconColor = colorStyle.color.tertiary;\n  const [isOpen, toggleModal] = useToggle(false);\n  const [size, changeSizeBy] = useSelection(\'auto\');\n  const [scrollBehavior, changeScrollBehaviorBy] = useSelection(\'inside\');\n  const [initialContentHeight, changeInitialContentHeightBy] = useSelection(\'default\');\n  const [verticalPadding, changeVerticalPaddingBy] = useSelection(\'default\');\n  const [autoFocus, toggleAutoFocus] = useToggle(true);\n  const [closeOnEsc, toggleCloseOnEsc] = useToggle(true);\n  const [closeOnOutsideClick, toggleCloseOnOutsideClick] = useToggle(true);\n  const [ensureFocus, toggleEnsureFocus] = useToggle(true);\n  const [isClosable, toggleIsCloseButtonVisible] = useToggle(true);\n  const [isOverlayVisible, toggleIsOverlayVisible] = useToggle(true);\n  const [isHeaderVisible, toggleIsHeaderVisible] = useToggle(true);\n  const [isBodyVisible, toggleIsBodyVisible] = useToggle(true);\n  const [isFooterVisible, toggleIsFooterVisible] = useToggle(true);\n  const [isAlertVisible, toggleIsAlertVisible] = useToggle(true);\n  const [enableBodyScrollLock, toggleBodyScrollLock] = useToggle(true);\n  const modalStyleProps = {};\n  const modalContentStyleProps = {};\n\n  if (size !== \'full\') {\n    if (verticalPadding !== \'default\') {\n      modalStyleProps.py = verticalPadding;\n    }\n\n    if (initialContentHeight !== \'default\') {\n      const propKey = (scrollBehavior === \'inside\') ? \'height\' : \'minHeight\';\n      modalContentStyleProps[propKey] = initialContentHeight;\n    }\n  }\n\n  return (\n    <>\n      <Box>\n        <Button onClick={() => toggleModal(true)}>\n          Launch modal\n        </Button>\n      </Box>\n      <Divider my="4x" />\n      <Box mb="4x">\n        <Text fontSize="lg" lineHeight="lg">\n          Modal props\n        </Text>\n      </Box>\n      <FormGroup>\n        <Box mb="2x">\n          <Tooltip\n            placement="right"\n            label={(\n              <>\n                <Text mb="2x">\n                  Use the <Code>scrollBehavior</Code> prop to control how scrolling should behave:\n                </Text>\n                <Box as="ul" my="2x">\n                  <li>If set to <Code>inside</Code>, only the <Code>ModalBody</Code> will scroll.</li>\n                  <li>If set to <Code>outside</Code>, the entire <Code>ModalContent</Code> will scroll within the viewport.</li>\n                </Box>\n              </>\n            )}\n          >\n            <TextLabel display="inline-block">\n              <Flex alignItems="center" columnGap="2x">\n                scrollBehavior\n                <Icon icon="info-o" />\n              </Flex>\n            </TextLabel>\n          </Tooltip>\n        </Box>\n        <ButtonGroup\n          variant="secondary"\n          css={{\n            \'> *:not(:first-of-type)\': {\n              marginLeft: -1\n            }\n          }}\n        >\n          {[\'inside\', \'outside\'].map(value => (\n            <Button\n              key={value}\n              selected={value === scrollBehavior}\n              onClick={changeScrollBehaviorBy(value)}\n              minWidth="15x"\n            >\n              {value}\n            </Button>\n          ))}\n        </ButtonGroup>\n      </FormGroup>\n      <FormGroup>\n        <Box mb="2x">\n          <TextLabel>\n            size\n          </TextLabel>\n        </Box>\n        <ButtonGroup\n          variant="secondary"\n          css={{\n            \'> *:not(:first-of-type)\': {\n              marginLeft: -1\n            }\n          }}\n        >\n          {[\'auto\', \'xs\', \'sm\', \'md\', \'lg\', \'xl\', \'full\'].map(value => (\n            <Button\n              key={value}\n              selected={value === size}\n              onClick={changeSizeBy(value)}\n              minWidth="15x"\n            >\n              {value}\n            </Button>\n          ))}\n        </ButtonGroup>\n      </FormGroup>\n      <FormGroup>\n        <TextLabel display="flex" alignItems="center">\n          <Checkbox\n            checked={autoFocus}\n            disabled={!ensureFocus}\n            onChange={() => toggleAutoFocus()}\n          />\n          <Space width="2x" />\n          <Text fontFamily="mono" whiteSpace="nowrap">autoFocus</Text>\n        </TextLabel>\n      </FormGroup>\n      <FormGroup>\n        <TextLabel display="flex" alignItems="center">\n          <Checkbox\n            checked={closeOnEsc}\n            disabled={!isClosable && !closeOnOutsideClick}\n            onChange={() => toggleCloseOnEsc()}\n          />\n          <Space width="2x" />\n          <Text fontFamily="mono" whiteSpace="nowrap">closeOnEsc</Text>\n        </TextLabel>\n      </FormGroup>\n      <FormGroup>\n        <TextLabel display="flex" alignItems="center">\n          <Checkbox\n            checked={closeOnOutsideClick}\n            disabled={!isClosable && !closeOnEsc}\n            onChange={() => toggleCloseOnOutsideClick()}\n          />\n          <Space width="2x" />\n          <Text fontFamily="mono" whiteSpace="nowrap">closeOnOutsideClick</Text>\n        </TextLabel>\n      </FormGroup>\n      <FormGroup>\n        <TextLabel display="flex" alignItems="center">\n          <Checkbox\n            checked={ensureFocus}\n            onChange={() => toggleEnsureFocus()}\n          />\n          <Space width="2x" />\n          <Text fontFamily="mono" whiteSpace="nowrap">ensureFocus</Text>\n        </TextLabel>\n      </FormGroup>\n      <FormGroup>\n        <TextLabel display="flex" alignItems="center">\n          <Checkbox\n            checked={isClosable}\n            disabled={!closeOnEsc && !closeOnOutsideClick}\n            onChange={() => toggleIsCloseButtonVisible()}\n          />\n          <Space width="2x" />\n          <Text fontFamily="mono" whiteSpace="nowrap">isClosable</Text>\n        </TextLabel>\n      </FormGroup>\n      <Divider my="4x" />\n      <Box mb="4x">\n        <Text fontSize="lg" lineHeight="lg">\n          Modal style props\n        </Text>\n      </Box>\n      <FormGroup>\n        <Box mb="2x">\n          <TextLabel>\n            Initial content height\n          </TextLabel>\n        </Box>\n        <ButtonGroup\n          variant="secondary"\n          css={{\n            \'> *:not(:first-of-type)\': {\n              marginLeft: -1\n            }\n          }}\n        >\n          {[\'default\', \'stretch\'].map(value => (\n            <Button\n              disabled={size === \'full\'}\n              key={value}\n              selected={value === initialContentHeight}\n              onClick={changeInitialContentHeightBy(value)}\n              minWidth="15x"\n            >\n              {value}\n            </Button>\n          ))}\n        </ButtonGroup>\n      </FormGroup>\n      <FormGroup>\n        <Box mb="2x">\n          <TextLabel>\n            Vertical padding\n          </TextLabel>\n        </Box>\n        <ButtonGroup\n          variant="secondary"\n          css={{\n            \'> *:not(:first-of-type)\': {\n              marginLeft: -1\n            }\n          }}\n        >\n          {[\'default\', \'3rem\'].map(value => (\n            <Button\n              disabled={size === \'full\'}\n              key={value}\n              selected={value === verticalPadding}\n              onClick={changeVerticalPaddingBy(value)}\n              minWidth="15x"\n            >\n              {value}\n            </Button>\n          ))}\n        </ButtonGroup>\n      </FormGroup>\n      <FormGroup>\n        <Box mb="2x">\n          <TextLabel>\n            Pass below props to ModalContent for settings initial height and vertical margins. Note that the props are different when <Code>scrollBehavior</Code> changes.\n          </TextLabel>\n        </Box>\n        <CodeBlock>\n          {`const modalStyleProps = ${JSON.stringify(modalStyleProps, null, 2)};\\nconst modalContentStyleProps = ${JSON.stringify(modalContentStyleProps, null, 2)};\\n\\n// example\\n<Modal\\n  scrollBehavior="${scrollBehavior}"\\n  {...modalStyleProps}\\n>\\n  <ModalOverlay />\\n  <ModalContent {...contentStyleProps}>\\n    <ModalHeader />\\n    <ModalBody />\\n    <ModalFooter />\\n  </ModalContent>\\n</Modal>`}\n        </CodeBlock>\n      </FormGroup>\n      <Divider my="4x" />\n      <Box mb="4x">\n        <Text fontSize="lg" lineHeight="lg">\n          Modal composition\n        </Text>\n      </Box>\n      <FormGroup>\n        <TextLabel display="flex" alignItems="center">\n          <Checkbox checked={isOverlayVisible} onChange={() => toggleIsOverlayVisible()} />\n          <Space width="2x" />\n          <Text fontFamily="mono" whiteSpace="nowrap">ModalOverlay</Text>\n        </TextLabel>\n      </FormGroup>\n      <FormGroup>\n        <TextLabel display="flex" alignItems="center">\n          <Checkbox checked={isHeaderVisible} onChange={() => toggleIsHeaderVisible()} />\n          <Space width="2x" />\n          <Text fontFamily="mono" whiteSpace="nowrap">ModalHeader</Text>\n        </TextLabel>\n      </FormGroup>\n      <FormGroup>\n        <TextLabel display="flex" alignItems="center">\n          <Checkbox checked={isBodyVisible} onChange={() => toggleIsBodyVisible()} />\n          <Space width="2x" />\n          <Text fontFamily="mono" whiteSpace="nowrap">ModalBody</Text>\n        </TextLabel>\n      </FormGroup>\n      <FormGroup>\n        <TextLabel display="flex" alignItems="center">\n          <Checkbox checked={isFooterVisible} onChange={() => toggleIsFooterVisible()} />\n          <Space width="2x" />\n          <Text fontFamily="mono" whiteSpace="nowrap">ModalFooter</Text>\n        </TextLabel>\n      </FormGroup>\n      <Divider my="4x" />\n      <Box mb="4x">\n        <Text fontSize="lg" lineHeight="lg">\n          Extra modal setup\n        </Text>\n      </Box>\n      <FormGroup>\n        <TextLabel display="flex" alignItems="center" mb="3x">\n          <Checkbox\n            checked={enableBodyScrollLock}\n            onChange={() => toggleBodyScrollLock()}\n          />\n          <Space width="2x" />\n          <Text>\n            Enable body scroll locking\n          </Text>\n        </TextLabel>\n        <Box ml="6x">\n          <Box mb="4x">\n            <Text mb="2x">\n              When setting <Code>scrollBehavior="outside"</Code> to enable outside scrolling, you should also use <strong>Body Scroll Locking</strong> to prevent the user from scrolling the page while the modal is open.\n            </Text>\n            <Text mb="2x">\n              <strong>Body Scroll Locking</strong> is currently not available with default setup, you can follow the instructions below to append global styles to the body to prevent scrolling.\n            </Text>\n          </Box>\n          <CodeBlock>\n            {bodyScrollLockCode}\n          </CodeBlock>\n        </Box>\n      </FormGroup>\n      <Modal\n        TransitionComponent={null}\n        autoFocus={autoFocus}\n        ensureFocus={ensureFocus}\n        closeOnEsc={closeOnEsc}\n        closeOnOutsideClick={closeOnOutsideClick}\n        initialFocusRef={initialFocusRef}\n        isClosable={isClosable}\n        isOpen={isOpen}\n        onClose={() => toggleModal(false)}\n        scrollBehavior={scrollBehavior}\n        size={size}\n        {...modalStyleProps}\n      >\n        {enableBodyScrollLock && (\n          <Global\n            styles={css`\n              body {\n                overflow: hidden;\n              }\n            `}\n          />\n        )}\n        {isOverlayVisible && (\n          <ModalOverlay />\n        )}\n        <ModalContent\n          {...modalContentStyleProps}\n        >\n          {isHeaderVisible && (\n            <ModalHeader>\n              {size === \'auto\' && <Text>Auto-sized Modal</Text>}\n              {size === \'xs\' && <Text>Extra Small Modal</Text>}\n              {size === \'sm\' && <Text>Small Modal</Text>}\n              {size === \'md\' && <Text>Medium Modal</Text>}\n              {size === \'lg\' && <Text>Large Modal</Text>}\n              {size === \'xl\' && <Text>Extra Large Modal</Text>}\n              {size === \'full\' && <Text>Full-width Modal</Text>}\n            </ModalHeader>\n          )}\n          {isBodyVisible && (\n            <ModalBody>\n              {isAlertVisible && (\n                <Alert variant="outline" severity="info" mb="4x" isClosable onClose={() => toggleIsAlertVisible()}>\n                  <Text>This is an info alert</Text>\n                </Alert>\n              )}\n              <Tabs>\n                <TabList mb="4x">\n                  <Tab>Tab 1</Tab>\n                  <Tab>Tab 2</Tab>\n                </TabList>\n                <TabPanels>\n                  <TabPanel>\n                    <SkeletonBody mb="4x" />\n                    <Grid\n                      templateColumns="auto 1fr"\n                      rowGap="2x"\n                      columnGap="3x"\n                      alignItems="center"\n                      mb="4x"\n                    >\n                      <Icon icon="user" color={iconColor} />\n                      <Input ref={initialFocusRef} placeholder="User name" />\n                      <Icon icon="email" color={iconColor} />\n                      <Input placeholder="Email address" />\n                    </Grid>\n                  </TabPanel>\n                  <TabPanel>\n                    <Box\n                      backgroundColor={colorStyle.background.tertiary}\n                      minHeight={1000}\n                      px="3x"\n                      py="2x"\n                    >\n                      <Text>\n                        This is a very long content that will overflow the modal\n                      </Text>\n                    </Box>\n                  </TabPanel>\n                </TabPanels>\n              </Tabs>\n            </ModalBody>\n          )}\n          {isFooterVisible && (\n            <ModalFooter>\n              <Grid\n                templateColumns="1fr 1fr"\n                columnGap="2x"\n              >\n                <Button variant="primary">\n                  OK\n                </Button>\n                <Button onClick={() => toggleModal(false)}>\n                  Cancel\n                </Button>\n              </Grid>\n            </ModalFooter>\n          )}\n        </ModalContent>\n      </Modal>\n    </>\n  );\n}\n\nrender(<Example />);\n'})}),"\n",(0,o.jsx)(n.h3,{children:"Nested modal"}),"\n",(0,o.jsx)(n.p,{children:"For some use cases, you may want to open a nested modal which is positioned relative to the parent modal, especially when a confirmation is needed."}),"\n",(0,o.jsxs)(n.p,{children:["You can use the ",(0,o.jsx)(n.code,{children:"useToggle"})," Hook to control modal visibility."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'function Example() {\n  const [isOpen, toggleModal] = useToggle(false);\n  const [isNestedOpen, toggleNestedModal] = useToggle(false);\n\n  return (\n    <>\n      <Button onClick={() => toggleModal(true)}>Launch modal</Button>\n      <Modal\n        closeOnEsc\n        closeOnOutsideClick\n        isClosable\n        isOpen={isOpen}\n        onClose={() => toggleModal(false)}\n        size="sm"\n      >\n        <ModalOverlay />\n        <ModalContent>\n          <ModalHeader>\n            Modal\n          </ModalHeader>\n          <ModalBody>\n            Modal body text goes here.\n          </ModalBody>\n          <ModalFooter justifyContent="space-between">\n            <Button\n              disabled={isNestedOpen}\n              variant="primary"\n              onClick={() => toggleNestedModal(true)}\n            >\n              Launch nested modal\n            </Button>\n            <Box>\n              <Button onClick={() => toggleModal(false)} minWidth="20x">\n                Close\n              </Button>\n            </Box>\n          </ModalFooter>\n        </ModalContent>\n      </Modal>\n      <Modal\n        closeOnEsc\n        closeOnOutsideClick\n        isClosable\n        isOpen={isNestedOpen}\n        onClose={() => toggleNestedModal(false)}\n        size="xs"\n      >\n        <ModalOverlay />\n        <ModalContent>\n          <ModalHeader>\n            Nested Modal\n          </ModalHeader>\n          <ModalBody>\n            Modal body text goes here.\n          </ModalBody>\n          <ModalFooter columnGap="2x">\n            <Button variant="primary" onClick={() => toggleNestedModal(false)} minWidth="20x">\n              Yes\n            </Button>\n            <Button onClick={() => toggleNestedModal(false)} minWidth="20x">\n              No\n            </Button>\n          </ModalFooter>\n        </ModalContent>\n      </Modal>\n    </>\n  );\n}\n'})}),"\n",(0,o.jsx)(n.h2,{children:"Props"}),"\n",(0,o.jsx)(n.h3,{children:"Modal"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{align:"left",children:"Name"}),(0,o.jsx)(n.th,{align:"left",children:"Type"}),(0,o.jsx)(n.th,{align:"left",children:"Default"}),(0,o.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"autoFocus"}),(0,o.jsx)(n.td,{align:"left",children:"boolean"}),(0,o.jsx)(n.td,{align:"left",children:"false"}),(0,o.jsxs)(n.td,{align:"left",children:["If ",(0,o.jsx)(n.code,{children:"true"})," and ",(0,o.jsx)(n.code,{children:"ensureFocus"})," is ",(0,o.jsx)(n.code,{children:"true"})," and ",(0,o.jsx)(n.code,{children:"initialFocusRef"})," is not set, it will automatically set focus on the first focusable element."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"children"}),(0,o.jsxs)(n.td,{align:"left",children:["ReactNode | ",(0,o.jsx)(n.code,{children:"(context) => ReactNode"})]}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsx)(n.td,{align:"left",children:"A function child can be used intead of a React element. This function is called with the context object."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"closeOnEsc"}),(0,o.jsx)(n.td,{align:"left",children:"boolean"}),(0,o.jsx)(n.td,{align:"left",children:"false"}),(0,o.jsxs)(n.td,{align:"left",children:["If ",(0,o.jsx)(n.code,{children:"true"}),", close the modal when the ",(0,o.jsx)(n.code,{children:"esc"})," key is pressed."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"closeOnOutsideClick"}),(0,o.jsx)(n.td,{align:"left",children:"boolean"}),(0,o.jsx)(n.td,{align:"left",children:"false"}),(0,o.jsxs)(n.td,{align:"left",children:["If ",(0,o.jsx)(n.code,{children:"true"}),", close the modal when click outside of the modal."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"ensureFocus"}),(0,o.jsx)(n.td,{align:"left",children:"boolean"}),(0,o.jsx)(n.td,{align:"left",children:"false"}),(0,o.jsxs)(n.td,{align:"left",children:["If ",(0,o.jsx)(n.code,{children:"true"}),", it will always bring the focus back to the ",(0,o.jsx)(n.code,{children:"Modal"})," descendants, which does not allow the focus to escape while open."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"finalFocusRef"}),(0,o.jsx)(n.td,{align:"left",children:"RefObject"}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsxs)(n.td,{align:"left",children:["The ",(0,o.jsx)(n.code,{children:"ref"})," of element to receive focus when the modal closes."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"initialFocusRef"}),(0,o.jsx)(n.td,{align:"left",children:"RefObject"}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsxs)(n.td,{align:"left",children:["The ",(0,o.jsx)(n.code,{children:"ref"})," of the element to receive focus when the modal opens."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"isClosable"}),(0,o.jsx)(n.td,{align:"left",children:"boolean"}),(0,o.jsx)(n.td,{align:"left",children:"false"}),(0,o.jsxs)(n.td,{align:"left",children:["If ",(0,o.jsx)(n.code,{children:"true"}),", a close button will appear on the right side."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"isOpen"}),(0,o.jsx)(n.td,{align:"left",children:"boolean"}),(0,o.jsx)(n.td,{align:"left",children:"false"}),(0,o.jsxs)(n.td,{align:"left",children:["If ",(0,o.jsx)(n.code,{children:"true"}),", the modal is shown."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"onClose"}),(0,o.jsx)(n.td,{align:"left",children:"function"}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsx)(n.td,{align:"left",children:"Callback fired when the modal closes."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"size"}),(0,o.jsx)(n.td,{align:"left",children:"string"}),(0,o.jsx)(n.td,{align:"left",children:"'auto'"}),(0,o.jsx)(n.td,{align:"left",children:"Change the size of the modal. One of: 'auto', 'xs', 'sm', 'md', 'lg', 'xl', 'full'"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"scrollBehavior"}),(0,o.jsx)(n.td,{align:"left",children:"string"}),(0,o.jsx)(n.td,{align:"left",children:"'inside'"}),(0,o.jsx)(n.td,{align:"left",children:"Control the scroll behavior of the modal if the content overflows. One of: 'inside', 'outside'"})]})]})]}),"\n",(0,o.jsx)(n.h3,{children:"ModalOverlay"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{align:"left",children:"Name"}),(0,o.jsx)(n.th,{align:"left",children:"Type"}),(0,o.jsx)(n.th,{align:"left",children:"Default"}),(0,o.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"TransitionComponent"}),(0,o.jsx)(n.td,{align:"left",children:"ElementType"}),(0,o.jsx)(n.td,{align:"left",children:"Fade"}),(0,o.jsx)(n.td,{align:"left",children:"The component used for the transition."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"TransitionProps"}),(0,o.jsx)(n.td,{align:"left",children:"object"}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsxs)(n.td,{align:"left",children:["Props applied to the ",(0,o.jsx)(n.a,{href:"http://reactcommunity.org/react-transition-group/transition#Transition-props",children:"Transition"})," element."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"TransitionProps.appear"}),(0,o.jsx)(n.td,{align:"left",children:"boolean"}),(0,o.jsx)(n.td,{align:"left",children:"true"}),(0,o.jsx)(n.td,{align:"left"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"children"}),(0,o.jsx)(n.td,{align:"left",children:"ReactNode"}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsx)(n.td,{align:"left"})]})]})]}),"\n",(0,o.jsx)(n.h3,{children:"ModalContent"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{align:"left",children:"Name"}),(0,o.jsx)(n.th,{align:"left",children:"Type"}),(0,o.jsx)(n.th,{align:"left",children:"Default"}),(0,o.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"TransitionComponent"}),(0,o.jsx)(n.td,{align:"left",children:"ElementType"}),(0,o.jsx)(n.td,{align:"left",children:"Fade"}),(0,o.jsx)(n.td,{align:"left",children:"The component used for the transition."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"TransitionProps"}),(0,o.jsx)(n.td,{align:"left",children:"object"}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsxs)(n.td,{align:"left",children:["Props applied to the ",(0,o.jsx)(n.a,{href:"http://reactcommunity.org/react-transition-group/transition#Transition-props",children:"Transition"})," element."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"TransitionProps.appear"}),(0,o.jsx)(n.td,{align:"left",children:"boolean"}),(0,o.jsx)(n.td,{align:"left",children:"true"}),(0,o.jsx)(n.td,{align:"left"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"children"}),(0,o.jsx)(n.td,{align:"left",children:"ReactNode"}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsx)(n.td,{align:"left"})]})]})]}),"\n",(0,o.jsx)(n.h3,{children:"ModalHeader"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{align:"left",children:"Name"}),(0,o.jsx)(n.th,{align:"left",children:"Type"}),(0,o.jsx)(n.th,{align:"left",children:"Default"}),(0,o.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"children"}),(0,o.jsx)(n.td,{align:"left",children:"ReactNode"}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsx)(n.td,{align:"left"})]})})]}),"\n",(0,o.jsx)(n.h3,{children:"ModalBody"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{align:"left",children:"Name"}),(0,o.jsx)(n.th,{align:"left",children:"Type"}),(0,o.jsx)(n.th,{align:"left",children:"Default"}),(0,o.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"children"}),(0,o.jsx)(n.td,{align:"left",children:"ReactNode"}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsx)(n.td,{align:"left"})]})})]}),"\n",(0,o.jsx)(n.h3,{children:"ModalFooter"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{align:"left",children:"Name"}),(0,o.jsx)(n.th,{align:"left",children:"Type"}),(0,o.jsx)(n.th,{align:"left",children:"Default"}),(0,o.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"children"}),(0,o.jsx)(n.td,{align:"left",children:"ReactNode"}),(0,o.jsx)(n.td,{align:"left"}),(0,o.jsx)(n.td,{align:"left"})]})})]})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.ah)(),e.components).wrapper;return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(i,e)})):i(e)}},24726:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/modal",function(){return l(2244)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=24726)}),_N_E=e.O()}]);