(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4394],{92233:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return p}});var n=o(7896),r=o(59740),a=(o(2784),o(30876)),i=["components"],l={};function p(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"Popover"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Popover")," is a non-modal dialog that floats around a trigger. ",(0,a.kt)("inlineCode",{parentName:"p"},"Popover")," is used to display contextual information to users, and should be paired with a clickable trigger element."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Popover")," is built on top of the ",(0,a.kt)("a",{parentName:"p",href:"https://popper.js.org/"},"Popper.js")," library, and is composed of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Popper")," component."),(0,a.kt)("p",null,(0,a.kt)("carbon-ad",null)),(0,a.kt)("h2",null,"Import"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Popover"),": The wrapper that provides props, state, and context to its children"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PopoverTrigger"),": Used to wrap the reference (or trigger) element"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PopoverContent"),": The popover itself"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PopoverHeader"),": The header of the popover"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PopoverBody"),": The body of the popover"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PopoverFooter"),": The footer of the popover")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  Popover,\n  PopoverTrigger,\n  PopoverContent,\n  PopoverHeader,\n  PopoverBody,\n  PopoverFooter,\n} from '@trendmicro/react-styled-ui';\n")),(0,a.kt)("h2",null,"Basic Usage"),(0,a.kt)("p",null,"When using this component, ensure the children passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"PopoverTrigger")," is focusable. ",(0,a.kt)("inlineCode",{parentName:"p"},"Popover")," should be accessible and should allow users to access it using the tab key on a keyboard."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A11y:")," When ",(0,a.kt)("inlineCode",{parentName:"p"},"Popover")," opens, the focus status is sent to  ",(0,a.kt)("inlineCode",{parentName:"p"},"PopoverContent"),". When ",(0,a.kt)("inlineCode",{parentName:"p"},"Popover")," is closed, the focus status is returned to the trigger."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<Popover>\n  <PopoverTrigger>\n    <Button>Trigger</Button>\n  </PopoverTrigger>\n  <PopoverContent>\n    <PopoverHeader>Confirmation!</PopoverHeader>\n    <PopoverBody>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PopoverBody>\n  </PopoverContent>\n</Popover>\n")),(0,a.kt)("h2",null,"Focus an element when ",(0,a.kt)("inlineCode",{parentName:"h2"},"Popover")," opens"),(0,a.kt)("p",null,"By default, the focus status is to sent to ",(0,a.kt)("inlineCode",{parentName:"p"},"PopoverContent")," when ",(0,a.kt)("inlineCode",{parentName:"p"},"Popover")," opens. You can send the focus status to a specific element when it opens by passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"initialFocusRef")," prop."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'function WalkthroughPopover() {\n  const initialFocusRef = React.useRef();\n  return (\n    <Popover\n      initialFocusRef={initialFocusRef}\n      placement="bottom"\n    >\n      <PopoverTrigger>\n        <Link>Trigger</Link>\n      </PopoverTrigger>\n      <PopoverContent>\n        <PopoverHeader>\n          Manage Your Channels\n        </PopoverHeader>\n        <PopoverBody>\n          Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n          <Input mt="3x" ref={initialFocusRef} placeholder="Placeholder text" />\n        </PopoverBody>\n        <PopoverFooter\n          border="0"\n          display="flex"\n          alignItems="center"\n          justifyContent="space-between"\n        >\n          <Link fontSize="sm">Learn more</Link>\n          <Stack direction="row" spacing="2x">\n            <Button variant="primary">Setup Email</Button>\n            <Button variant="default">\n              Next\n            </Button>\n          </Stack>\n        </PopoverFooter>\n      </PopoverContent>\n    </Popover>\n  );\n}\n')),(0,a.kt)("h2",null,"Accessing Internal state"),(0,a.kt)("p",null,"Tonic UI provides access to two internal states:  ",(0,a.kt)("inlineCode",{parentName:"p"},"isOpen")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"onClose"),". Use the render prop pattern to access the internal states."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'function InternalStateEx() {\n  const initRef = React.useRef();\n  return (\n    <Popover\n      initialFocusRef={initRef}\n      placement="right"\n    >\n    {({ isOpen, onClose }) => (\n      <>\n        <PopoverTrigger>\n          <Button>Click to {isOpen ? "close" : "open"}</Button>\n        </PopoverTrigger>\n        <PopoverContent>\n          <PopoverHeader>\n            Manage Your Channels\n          </PopoverHeader>\n          <PopoverBody>\n            Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n            <Input mt="3x" placeholder="Placeholder text" />\n          </PopoverBody>\n          <PopoverFooter\n            border="0"\n            display="flex"\n            alignItems="center"\n            justifyContent="space-between"\n          >\n            <Link fontSize="sm">Learn more</Link>\n            <Stack direction="row" spacing="2x">\n              <Button variant="primary">Submit</Button>\n              <Button variant="default" onClick={onClose} ref={initRef}>\n                Cancel\n              </Button>\n            </Stack>\n          </PopoverFooter>\n        </PopoverContent>\n      </>\n    )}\n    </Popover>\n  );\n}\n')),(0,a.kt)("h2",null,"Controlled Usage"),(0,a.kt)("p",null,"You can control the opening and closing of ",(0,a.kt)("inlineCode",{parentName:"p"},"Popover")," by passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"isOpen")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"onClose")," state."),(0,a.kt)("p",null,"If required, you can set ",(0,a.kt)("inlineCode",{parentName:"p"},"returnFocusOnClose")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," to prevent Popver from returning the focus status to the children of ",(0,a.kt)("inlineCode",{parentName:"p"},"PopoverTrigger"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'function ControlledUsage() {\n  const [isOpen, setIsOpen] = React.useState(false);\n  const open = () => setIsOpen(!isOpen);\n  const close = () => setIsOpen(false);\n  return (\n    <>\n      <Button mr={5} onClick={open}>\n        Trigger\n      </Button>\n      <Popover\n        returnFocusOnClose={false}\n        isOpen={isOpen}\n        onClose={close}\n        placement="right"\n        closeOnBlur={false}\n      >\n        <PopoverTrigger>\n          <Button variant="primary">Popover Target</Button>\n        </PopoverTrigger>\n        <PopoverContent>\n          <PopoverHeader>\n            At least 8 characters consisting of:\n          </PopoverHeader>\n          <PopoverBody>\n            <ul>\n              <li>Alphanumeric characters (A-Z, a-z, 0-9) with both upper and lower case letters and number characters.</li>\n              <li>At least one special character</li>\n            </ul>\n          </PopoverBody>\n        </PopoverContent>\n      </Popover>\n    </>\n  );\n}\n')),(0,a.kt)("h2",null,"Customizing Popover"),(0,a.kt)("h3",null,"Hide arrow"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<Popover hideArrow>\n  <PopoverTrigger>\n    <Button>Trigger</Button>\n  </PopoverTrigger>\n  <PopoverContent>\n    <PopoverHeader>Confirmation!</PopoverHeader>\n    <PopoverBody>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PopoverBody>\n  </PopoverContent>\n</Popover>\n")),(0,a.kt)("h3",null,"Offset position"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<Popover skidding={50} distance={0}>\n  <PopoverTrigger>\n    <Button>Trigger</Button>\n  </PopoverTrigger>\n  <PopoverContent>\n    <PopoverHeader>Confirmation!</PopoverHeader>\n    <PopoverBody>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PopoverBody>\n  </PopoverContent>\n</Popover>\n")),(0,a.kt)("h2",null,"Hover Trigger"),(0,a.kt)("p",null,"To show ",(0,a.kt)("inlineCode",{parentName:"p"},"Popover")," when you mouse over or focus on the trigger, pass the prop ",(0,a.kt)("inlineCode",{parentName:"p"},"trigger")," and set it to ",(0,a.kt)("inlineCode",{parentName:"p"},"hover"),". When you focus on or mouse over the popover trigger, ",(0,a.kt)("inlineCode",{parentName:"p"},"Popover")," will open."),(0,a.kt)("p",null,"If you quickly move your cursor to the popover content when it is open, ",(0,a.kt)("inlineCode",{parentName:"p"},"Popover")," will remain open until you move away the cursor."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Popover hideArrow trigger="hover">\n  <PopoverTrigger>\n    <Icon icon="info" color="white:secondary" _hover={{ color: \'white:emphasis\' }}/>\n  </PopoverTrigger>\n  <PopoverContent>\n    <PopoverHeader>Confirmation!</PopoverHeader>\n    <PopoverBody>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PopoverBody>\n  </PopoverContent>\n</Popover>\n')),(0,a.kt)("h3",null,"Mouse tracking"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack shouldWrapChildren direction="row" spacing="2x">\n  <Popover trigger="hover" nextToCursor>\n    <PopoverTrigger>\n      <Button>Next to cursor</Button>\n    </PopoverTrigger>\n    <PopoverContent>\n      <PopoverBody>Lorem ipsum dolor sit amet</PopoverBody>\n    </PopoverContent>\n  </Popover>\n  <Popover trigger="hover" followCursor>\n    <PopoverTrigger>\n      <Button>Follow cursor</Button>\n    </PopoverTrigger>\n    <PopoverContent>\n      <PopoverBody>Lorem ipsum dolor sit amet</PopoverBody>\n    </PopoverContent>\n  </Popover>\n</Stack>\n')),(0,a.kt)("h2",null,"Popover Placement"),(0,a.kt)("p",null,"Since ",(0,a.kt)("inlineCode",{parentName:"p"},"Popover")," is controlled by PopperJS, you can change the placement of ",(0,a.kt)("inlineCode",{parentName:"p"},"Popover")," by passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"placement")," prop."),(0,a.kt)("p",null,"Although you may have specified the placement, ",(0,a.kt)("inlineCode",{parentName:"p"},"Popover")," will try to reposition itself if there is not enough available space at the specified placement."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="column" spacing="2rem">\n  <Stack shouldWrapChildren direction="row" spacing="2rem">\n    <Popover placement="top">\n      <PopoverTrigger>\n        <Button minWidth="32x">Top</Button>\n      </PopoverTrigger>\n      <PopoverContent>\n        <PopoverHeader>Confirmation!</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PopoverBody>\n      </PopoverContent>\n    </Popover>\n    <Popover placement="top-start">\n      <PopoverTrigger>\n        <Button minWidth="32x">Top-Start</Button>\n      </PopoverTrigger>\n      <PopoverContent>\n        <PopoverHeader>Confirmation!</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PopoverBody>\n      </PopoverContent>\n    </Popover>\n    <Popover placement="top-end">\n      <PopoverTrigger>\n        <Button minWidth="32x">Top-End</Button>\n      </PopoverTrigger>\n      <PopoverContent>\n        <PopoverHeader>Confirmation!</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PopoverBody>\n      </PopoverContent>\n    </Popover>\n  </Stack>\n  <Stack shouldWrapChildren direction="row" spacing="2rem">\n    <Popover placement="right">\n      <PopoverTrigger>\n        <Button minWidth="32x">Right</Button>\n      </PopoverTrigger>\n      <PopoverContent>\n        <PopoverHeader>Confirmation!</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PopoverBody>\n      </PopoverContent>\n    </Popover>\n    <Popover placement="right-start">\n      <PopoverTrigger>\n        <Button minWidth="32x">Right-Start</Button>\n      </PopoverTrigger>\n      <PopoverContent>\n        <PopoverHeader>Confirmation!</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PopoverBody>\n      </PopoverContent>\n    </Popover>\n    <Popover placement="right-end">\n      <PopoverTrigger>\n        <Button minWidth="32x">Right-End</Button>\n      </PopoverTrigger>\n      <PopoverContent>\n        <PopoverHeader>Confirmation!</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PopoverBody>\n      </PopoverContent>\n    </Popover>\n  </Stack>\n  <Stack shouldWrapChildren direction="row" spacing="2rem">\n    <Popover placement="bottom">\n      <PopoverTrigger>\n        <Button minWidth="32x">Bottom</Button>\n      </PopoverTrigger>\n      <PopoverContent>\n        <PopoverHeader>Confirmation!</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PopoverBody>\n      </PopoverContent>\n    </Popover>\n    <Popover placement="bottom-start">\n      <PopoverTrigger>\n        <Button minWidth="32x">Bottom-Start</Button>\n      </PopoverTrigger>\n      <PopoverContent>\n        <PopoverHeader>Confirmation!</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PopoverBody>\n      </PopoverContent>\n    </Popover>\n    <Popover placement="bottom-end">\n      <PopoverTrigger>\n        <Button minWidth="32x">Bottom-End</Button>\n      </PopoverTrigger>\n      <PopoverContent>\n        <PopoverHeader>Confirmation!</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PopoverBody>\n      </PopoverContent>\n    </Popover>\n  </Stack>\n  <Stack shouldWrapChildren direction="row" spacing="2rem">\n    <Popover placement="left">\n      <PopoverTrigger>\n        <Button minWidth="32x">Left</Button>\n      </PopoverTrigger>\n      <PopoverContent>\n        <PopoverHeader>Confirmation!</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PopoverBody>\n      </PopoverContent>\n    </Popover>\n    <Popover placement="left-start">\n      <PopoverTrigger>\n        <Button minWidth="32x">Left-Start</Button>\n      </PopoverTrigger>\n      <PopoverContent>\n        <PopoverHeader>Confirmation!</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PopoverBody>\n      </PopoverContent>\n    </Popover>\n    <Popover placement="left-end">\n      <PopoverTrigger>\n        <Button minWidth="32x">Left-End</Button>\n      </PopoverTrigger>\n      <PopoverContent>\n        <PopoverHeader>Confirmation!</PopoverHeader>\n        <PopoverBody>Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</PopoverBody>\n      </PopoverContent>\n    </Popover>\n  </Stack>\n</Stack>\n')),(0,a.kt)("h2",null,"Accessibility"),(0,a.kt)("p",null,"The word ",(0,a.kt)("em",{parentName:"p"},'"trigger"')," refers to the children of PopoverTrigger."),(0,a.kt)("h3",null,"Keyboard and focus"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When ",(0,a.kt)("inlineCode",{parentName:"li"},"Popover")," is opened, the focus status is moved to ",(0,a.kt)("inlineCode",{parentName:"li"},"PopoverContent"),". If ",(0,a.kt)("inlineCode",{parentName:"li"},"initialFocusRef")," is set, then the focus status is moved to the element with the related reference (",(0,a.kt)("inlineCode",{parentName:"li"},"ref"),")."),(0,a.kt)("li",{parentName:"ul"},"When ",(0,a.kt)("inlineCode",{parentName:"li"},"Popover")," is closed, the focus status returns to the trigger. If you set ",(0,a.kt)("inlineCode",{parentName:"li"},"returnFocusOnClose")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),", the focus status will not return."),(0,a.kt)("li",{parentName:"ul"},"If trigger is set to ",(0,a.kt)("inlineCode",{parentName:"li"},"hover"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Focusing on or mousing over the trigger will open ",(0,a.kt)("inlineCode",{parentName:"li"},"Popover"),"."),(0,a.kt)("li",{parentName:"ul"},"Blurring or mousing out of the trigger will close ",(0,a.kt)("inlineCode",{parentName:"li"},"Popover"),". If you move your mouse into ",(0,a.kt)("inlineCode",{parentName:"li"},"PopoverContent"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Popover")," remains visible."))),(0,a.kt)("li",{parentName:"ul"},"If trigger is set to ",(0,a.kt)("inlineCode",{parentName:"li"},"click"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Clicking the trigger or using the ",(0,a.kt)("inlineCode",{parentName:"li"},"Space")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Enter")," key when the focus status is on the trigger will open ",(0,a.kt)("inlineCode",{parentName:"li"},"Popover"),"."),(0,a.kt)("li",{parentName:"ul"},"Clicking the trigger again will close ",(0,a.kt)("inlineCode",{parentName:"li"},"Popover"),"."))),(0,a.kt)("li",{parentName:"ul"},"Hitting the ",(0,a.kt)("inlineCode",{parentName:"li"},"Esc")," key while ",(0,a.kt)("inlineCode",{parentName:"li"},"Popover")," is open and the focus status is within ",(0,a.kt)("inlineCode",{parentName:"li"},"PopoverContent")," will close ",(0,a.kt)("inlineCode",{parentName:"li"},"Popover"),". If you set ",(0,a.kt)("inlineCode",{parentName:"li"},"closeOnEsc")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Popover")," will not close."),(0,a.kt)("li",{parentName:"ul"},"Clicking outside or blurring out of ",(0,a.kt)("inlineCode",{parentName:"li"},"PopoverContent")," closes ",(0,a.kt)("inlineCode",{parentName:"li"},"Popover"),". If you set ",(0,a.kt)("inlineCode",{parentName:"li"},"closeOnBlur")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"Popover")," will not close.")),(0,a.kt)("h3",null,"ARIA attributes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the trigger is set to ",(0,a.kt)("inlineCode",{parentName:"li"},"click"),", the role of the ",(0,a.kt)("inlineCode",{parentName:"li"},"PopoverContent")," element is set to ",(0,a.kt)("inlineCode",{parentName:"li"},"dialog"),". If the trigger is set to ",(0,a.kt)("inlineCode",{parentName:"li"},"hover"),", the ",(0,a.kt)("inlineCode",{parentName:"li"},"PopoverContent")," role is set to ",(0,a.kt)("inlineCode",{parentName:"li"},"tooltip"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PopoverContent")," has ",(0,a.kt)("inlineCode",{parentName:"li"},"aria-labelledby")," set to the ",(0,a.kt)("inlineCode",{parentName:"li"},"id")," attribute of ",(0,a.kt)("inlineCode",{parentName:"li"},"PopoverHeader"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PopoverContent")," has ",(0,a.kt)("inlineCode",{parentName:"li"},"aria-describedby")," set to the ",(0,a.kt)("inlineCode",{parentName:"li"},"id")," attribute of ",(0,a.kt)("inlineCode",{parentName:"li"},"PopoverBody"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PopoverContent")," has ",(0,a.kt)("inlineCode",{parentName:"li"},"aria-hidden")," set to ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," depending on the open/closed state of ",(0,a.kt)("inlineCode",{parentName:"li"},"Popover"),"."),(0,a.kt)("li",{parentName:"ul"},"The trigger has",(0,a.kt)("inlineCode",{parentName:"li"}," aria-haspopup")," set to ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," to denote that it triggers a popover."),(0,a.kt)("li",{parentName:"ul"},"The trigger has ",(0,a.kt)("inlineCode",{parentName:"li"},"aria-controls")," set to the 'id' attribute of ",(0,a.kt)("inlineCode",{parentName:"li"},"PopoverContent")," to associate the popover with the trigger."),(0,a.kt)("li",{parentName:"ul"},"The trigger has ",(0,a.kt)("inlineCode",{parentName:"li"},"aria-expanded")," set to ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," depending on the open/closed state of the popover.")),(0,a.kt)("h2",null,"Props"),(0,a.kt)("h3",null,"Popover"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"isOpen"),(0,a.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"If ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),", the popover is shown.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"initialFocusRef"),(0,a.kt)("td",{parentName:"tr",align:"left"},"React.Ref"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"The ",(0,a.kt)("inlineCode",{parentName:"td"},"ref")," of the element that should receive the focus status when the popover opens.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"trigger"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"'click'"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The interaction that triggers the popover. One of: ",(0,a.kt)("inlineCode",{parentName:"td"},"'click'"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"'hover'"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"placement"),(0,a.kt)("td",{parentName:"tr",align:"left"},"PopperJS.placement"),(0,a.kt)("td",{parentName:"tr",align:"left"},"'bottom'"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Position the popover relative to the trigger element as well as surrounding elements. Possible values: ",(0,a.kt)("inlineCode",{parentName:"td"},"'top'"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"'bottom'"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"'right'"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"'left'"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"'top-start'"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"'top-end'"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"'bottom-start'"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"'bottom-end'"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"'right-start'"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"'right-end'"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"'left-start'"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"'left-end'"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"returnFocusOnClose"),(0,a.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:"left"},"true"),(0,a.kt)("td",{parentName:"tr",align:"left"},"If ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),", the popover will return the focus status to the trigger when closing.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"closeOnBlur"),(0,a.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:"left"},"true"),(0,a.kt)("td",{parentName:"tr",align:"left"},"If ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),", the popover will close when you use the tab key or click outside the popover dialog.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"closeOnEsc"),(0,a.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:"left"},"true"),(0,a.kt)("td",{parentName:"tr",align:"left"},"If ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),", the popover will close when you press the ",(0,a.kt)("inlineCode",{parentName:"td"},"esc")," key.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"children"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ReactNode, (props: InternalState) => ReactNode"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"The children of the popover.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"hideArrow"),(0,a.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"If ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),", hide the arrow tip on the popover.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"skidding"),(0,a.kt)("td",{parentName:"tr",align:"left"},"number"),(0,a.kt)("td",{parentName:"tr",align:"left"},"0"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Displaces the popover (in pixels) along the reference element. Used by ",(0,a.kt)("a",{parentName:"td",href:"https://popper.js.org/docs/v2/modifiers/offset/#skidding-1"},(0,a.kt)("inlineCode",{parentName:"a"},"popper.js")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"distance"),(0,a.kt)("td",{parentName:"tr",align:"left"},"number"),(0,a.kt)("td",{parentName:"tr",align:"left"},"4"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Displaces the popover (in pixels) away from, or toward, the reference. Used by ",(0,a.kt)("a",{parentName:"td",href:"https://popper.js.org/docs/v2/modifiers/offset/#distance-1"},(0,a.kt)("inlineCode",{parentName:"a"},"popper.js")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"delay"),(0,a.kt)("td",{parentName:"tr",align:"left"},"number or object"),(0,a.kt)("td",{parentName:"tr",align:"left"},"{ show: 0, hide: 100 }"),(0,a.kt)("td",{parentName:"tr",align:"left"},"If ",(0,a.kt)("inlineCode",{parentName:"td"},"trigger")," is hover, delay showing and hiding the popover (ms). Object structure is: ",(0,a.kt)("inlineCode",{parentName:"td"},"delay={{ show: 500, hide: 100 }}"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"usePortal"),(0,a.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:"left"},"true"),(0,a.kt)("td",{parentName:"tr",align:"left"},"If ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),", the popover is displayed with a ",(0,a.kt)("inlineCode",{parentName:"td"},"Portal"),". Rendering content inside a Portal allows the popover content to escape the physical bounds of its parent while still being positioned correctly relative to its target.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"onOpen"),(0,a.kt)("td",{parentName:"tr",align:"left"},"() => void"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"A callback called when the popover opens.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"onClose"),(0,a.kt)("td",{parentName:"tr",align:"left"},"() => void"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"A callback called when the popover closes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nextToCursor"),(0,a.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"Popover will next to mouse cursor when mouse enter the reference.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"followCursor"),(0,a.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"Popover will follow mouse cursor when mouse move on the reference.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"arrowAt"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"The arrow is at the position of the popover. Possible values: ",(0,a.kt)("inlineCode",{parentName:"td"},"'left'"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"'right'"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"'top'"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"'bottom'"))))),(0,a.kt)("h3",null,"PopoverTrigger"),(0,a.kt)("h3",null,"PopoverContent"),(0,a.kt)("h3",null,"PopoverHeader"),(0,a.kt)("h3",null,"PopoverBody"),(0,a.kt)("h3",null,"PopoverFooter"))}p.isMDXComponent=!0},86290:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/popover",function(){return o(92233)}])}},function(e){e.O(0,[9774,2888,179],(function(){return t=86290,e(e.s=t);var t}));var t=e.O();_N_E=t}]);