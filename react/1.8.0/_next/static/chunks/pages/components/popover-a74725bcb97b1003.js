(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7380],{9293:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var a=n(7896),r=n(9740),o=(n(2784),n(876)),l=["components"],p={};function i(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",null,"Popover"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Popover")," is a non-modal dialog that floats around a trigger. ",(0,o.kt)("inlineCode",{parentName:"p"},"Popover")," is used to display contextual information to users, and should be paired with a clickable trigger element."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Popover")," is built on top of the ",(0,o.kt)("a",{parentName:"p",href:"https://popper.js.org/"},"Popper.js")," library, and is composed of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Popper")," component."),(0,o.kt)("p",null,(0,o.kt)("carbon-ad",null)),(0,o.kt)("h2",null,"Import"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Popover"),": The wrapper that provides props, state, and context to its children"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PopoverTrigger"),": Used to wrap the reference (or trigger) element"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PopoverContent"),": The popover itself"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PopoverHeader"),": The header of the popover"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PopoverBody"),": The body of the popover"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PopoverFooter"),": The footer of the popover")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  Popover,\n  PopoverTrigger,\n  PopoverContent,\n  PopoverHeader,\n  PopoverBody,\n  PopoverFooter,\n  usePopover,\n} from '@tonic-ui/react';\n")),(0,o.kt)("h2",null,"Usage"),(0,o.kt)("p",null,"To create an accessible popover, it should allow users to access it using the tab key on a keyboard. When it opens, the focus status will be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"PopoverContent"),". When it closes, the focus status will return to ",(0,o.kt)("inlineCode",{parentName:"p"},"PopoverTrigger"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"disabled",disabled:!0},"<Popover>\n  <PopoverTrigger>\n    <Button>Trigger</Button>\n  </PopoverTrigger>\n  <PopoverContent>\n    <PopoverHeader>Popover Header</PopoverHeader>\n    <PopoverBody>Popover Body</PopoverBody>\n    <PopoverFooter>Popover Footer</PopoverFooter>\n  </PopoverContent>\n</Popover>\n")),(0,o.kt)("p",null,"By default, you have to pass a single React element child to the ",(0,o.kt)("inlineCode",{parentName:"p"},"PopoverTrigger")," component."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"disabled",disabled:!0},"<PopoverTrigger>\n  <Button>Trigger</Button>\n</PopoverTrigger>\n")),(0,o.kt)("p",null,"If you need to pass more than one child element or non-element children, wrap them in an element or pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"shouldWrapChildren")," prop."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"disabled",disabled:!0},'<PopoverTrigger>\n  <Text display="inline-block">Text content</Text>\n</PopoverTrigger>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"disabled",disabled:!0},"<PopoverTrigger shouldWrapChildren>\n  Text content\n</PopoverTrigger>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"disabled",disabled:!0},'<PopoverTrigger shouldWrapChildren>\n  <Icon icon="menu" height="5x" mr="2x" />\n  <Text display="inline-block">Text content</Text>\n</Popover>\n')),(0,o.kt)("h3",null,"Controlled usage"),(0,o.kt)("p",null,"Pass ",(0,o.kt)("inlineCode",{parentName:"p"},"isOpen")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Popover")," component to control the state of the popover."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'function Example() {\n  const [on, toggle] = useToggle(false);\n\n  return (\n    <>\n      <Flex mb="4x">\n        <Switch checked={on} onChange={toggle} />\n      </Flex>\n      <Popover\n        isOpen={on}\n        placement="bottom"\n      >\n        <PopoverTrigger>\n          <Button onClick={toggle}>\n            Trigger\n          </Button>\n        </PopoverTrigger>\n        <PopoverContent>\n          <Text>This is a controlled popover</Text>\n        </PopoverContent>\n      </Popover>\n    </>\n  );\n}\n')),(0,o.kt)("h3",null,"Uncontrolled usage"),(0,o.kt)("p",null,"Popover is uncontrolled by default. You can set ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultIsOpen")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," to have the popover open for the first render."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<Popover defaultIsOpen={false}>\n  <PopoverTrigger>\n    <Button>Trigger</Button>\n  </PopoverTrigger>\n  <PopoverContent>\n    <Text>This is an uncontrolled popover</Text>\n  </PopoverContent>\n</Popover>\n")),(0,o.kt)("h3",null,"Focus control"),(0,o.kt)("h4",null,"Focus an element when popover opens"),(0,o.kt)("p",null,"The focus status will send to ",(0,o.kt)("inlineCode",{parentName:"p"},"PopoverContent")," when ",(0,o.kt)("inlineCode",{parentName:"p"},"Popover")," opens. You can send the focus status to a specific element when it opens by passing the ",(0,o.kt)("inlineCode",{parentName:"p"},"initialFocusRef")," prop."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'function Example() {\n  const initialFocusRef = React.useRef();\n\n  return (\n    <Popover\n      initialFocusRef={initialFocusRef}\n    >\n      <PopoverTrigger>\n        <Button>Trigger</Button>\n      </PopoverTrigger>\n      <PopoverContent>\n        <PopoverHeader>\n          Popover Header\n        </PopoverHeader>\n        <PopoverBody>\n          Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n          <Input mt="3x" ref={initialFocusRef} placeholder="Placeholder text" />\n        </PopoverBody>\n        <PopoverFooter\n          border="0"\n          display="flex"\n          alignItems="center"\n          justifyContent="space-between"\n        >\n          <Link fontSize="sm">Learn more</Link>\n          <Stack direction="row" spacing="2x">\n            <Button variant="primary">Setup Email</Button>\n            <Button variant="default">\n              Next\n            </Button>\n          </Stack>\n        </PopoverFooter>\n      </PopoverContent>\n    </Popover>\n  );\n}\n')),(0,o.kt)("h4",null,"Focus an element when popover closes"),(0,o.kt)("p",null,"The focus status will send to ",(0,o.kt)("inlineCode",{parentName:"p"},"PopoverTrigger")," when ",(0,o.kt)("inlineCode",{parentName:"p"},"Popover")," closes. You can send the focus status to a specific element when it closes by passing the ",(0,o.kt)("inlineCode",{parentName:"p"},"finalFocusRef")," prop."),(0,o.kt)("p",null,"If required, you can set ",(0,o.kt)("inlineCode",{parentName:"p"},"returnFocusOnClose")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," to prevent ",(0,o.kt)("inlineCode",{parentName:"p"},"Popover")," from returning the focus status to ",(0,o.kt)("inlineCode",{parentName:"p"},"PopoverTrigger"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'function Example() {\n  const [on, toggle] = useToggle(false);\n\n  return (\n    <>\n      <Flex mb="4x">\n        <Switch checked={on} onChange={toggle} />\n      </Flex>\n      <Popover\n        isOpen={on}\n        placement="bottom"\n        returnFocusOnClose={false}\n      >\n        <PopoverTrigger>\n          <Button onClick={toggle}>\n            Trigger\n          </Button>\n        </PopoverTrigger>\n        <PopoverContent>\n          Popover\n        </PopoverContent>\n      </Popover>\n    </>\n  );\n}\n')),(0,o.kt)("h3",null,"Hide the arrow of the popover"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<Popover\n  hideArrow\n>\n  <PopoverTrigger>\n    <Button>Trigger</Button>\n  </PopoverTrigger>\n  <PopoverContent>\n    Popover\n  </PopoverContent>\n</Popover>\n")),(0,o.kt)("h3",null,"Change popover position"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"offset")," prop can be used to change the popover position. It accepts an array with two numbers in the form of ",(0,o.kt)("inlineCode",{parentName:"p"},"[skidding, distance]"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Skidding")),(0,o.kt)("p",null,"The first number, ",(0,o.kt)("inlineCode",{parentName:"p"},"skidding"),", displaces the ",(0,o.kt)("inlineCode",{parentName:"p"},"PopoverContent")," along the ",(0,o.kt)("inlineCode",{parentName:"p"},"PopoverToggle"),". This value is specified in pixels."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Distance")),(0,o.kt)("p",null,"The second number, ",(0,o.kt)("inlineCode",{parentName:"p"},"distance"),", controls the distance between the ",(0,o.kt)("inlineCode",{parentName:"p"},"PopoverContent")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"PopoverToggle"),". This value is specified in pixels."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<Popover offset={[24, 12]}>\n  <PopoverTrigger>\n    <Button>Trigger</Button>\n  </PopoverTrigger>\n  <PopoverContent>\n    Popover\n  </PopoverContent>\n</Popover>\n")),(0,o.kt)("h3",null,"Context API"),(0,o.kt)("p",null,"To access the internal state of the popover, you can use the Function as Child Component (FaCC) pattern or use the ",(0,o.kt)("inlineCode",{parentName:"p"},"usePopover")," hook."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<Popover>\n  {({ isOpen, onClose }) => (\n    <>\n      <PopoverTrigger>\n        <Button>Trigger</Button>\n      </PopoverTrigger>\n      <PopoverContent>\n        <PopoverHeader>\n          Popover Header\n        </PopoverHeader>\n        <PopoverBody>\n          Popover Body\n        </PopoverBody>\n        <PopoverFooter>\n          <Flex\n            justifyContent="space-between"\n            columnGap="4x"\n          >\n            <Link fontSize="sm">Learn more</Link>\n            <Grid\n              templateColumns="1fr 1fr"\n              columnGap="2x"\n            >\n              <Button variant="primary">Submit</Button>\n              <Button variant="default" onClick={onClose}>\n                Cancel\n              </Button>\n            </Grid>\n          </Flex>\n        </PopoverFooter>\n      </PopoverContent>\n    </>\n  )}\n</Popover>\n')),(0,o.kt)("h3",null,"Trigger the popover on hover"),(0,o.kt)("p",null,"To trigger the popover on hover, you can set the ",(0,o.kt)("inlineCode",{parentName:"p"},"trigger")," prop to ",(0,o.kt)("inlineCode",{parentName:"p"},'"hover"'),"."),(0,o.kt)("p",null,"You can quickly move the cursor from ",(0,o.kt)("inlineCode",{parentName:"p"},"PopoverTrigger")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"PopoverContent")," when the ",(0,o.kt)("inlineCode",{parentName:"p"},"Popover")," is open. ",(0,o.kt)("inlineCode",{parentName:"p"},"Popover")," will remain open until the cursor move away from ",(0,o.kt)("inlineCode",{parentName:"p"},"PopoverContent"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<Popover\n  hideArrow\n  trigger="hover"\n>\n  <PopoverTrigger>\n    <Text display="inline-block">Hover Me</Text>\n  </PopoverTrigger>\n  <PopoverContent>\n    Popover\n  </PopoverContent>\n</Popover>\n')),(0,o.kt)("p",null,"When the trigger is set to ",(0,o.kt)("inlineCode",{parentName:"p"},'"hover"'),", you can pass ",(0,o.kt)("inlineCode",{parentName:"p"},"nextToCursor")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"followCursor")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Popover")," to control the position of the popover."),(0,o.kt)("h4",null,(0,o.kt)("inlineCode",{parentName:"h4"},"nextToCursor")," prop"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"nextToCursor")," prop will set the popover position next to the cursor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<Popover trigger="hover" nextToCursor>\n  <PopoverTrigger>\n    <Button>Trigger</Button>\n  </PopoverTrigger>\n  <PopoverContent>\n    Popover\n  </PopoverContent>\n</Popover>\n')),(0,o.kt)("h4",null,(0,o.kt)("inlineCode",{parentName:"h4"},"followCursor")," prop"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"followCursor")," prop will set the popover position to follow the cursor when it moves."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<Popover trigger="hover" followCursor>\n  <PopoverTrigger>\n    <Button>Trigger</Button>\n  </PopoverTrigger>\n  <PopoverContent>\n    Popover\n  </PopoverContent>\n</Popover>\n')),(0,o.kt)("h3",null,"Placement"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"placement")," prop to control the placement of the popover."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"disabled",disabled:!0},'<Popover placement="top" trigger="hover">\n  <PopoverTrigger>\n    <LinkButton>Trigger</LinkButton>\n  </PopoverTrigger>\n  <PopoverContent>\n    Popover\n  </PopoverContent>\n</Popover>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<Box display=\"inline-block\">\n  <Grid\n    templateColumns=\"repeat(3, minmax(84px,1fr))\"\n    templateRows=\"repeat(4, 84px)\"\n    gap=\"8x\"\n  >\n    {['top-start', 'top', 'top-end',\n      'right-start', 'right', 'right-end',\n      'bottom-start', 'bottom', 'bottom-end',\n      'left-start', 'left', 'left-end'\n    ].map(placement => (\n      <Popover\n        key={placement}\n        placement={placement}\n        trigger=\"hover\"\n      >\n        <PopoverTrigger>\n          <Button width=\"100%\">\n            {placement}\n          </Button>\n        </PopoverTrigger>\n        <PopoverContent>\n          Popover\n        </PopoverContent>\n      </Popover>\n    ))}\n  </Grid>\n</Box>\n")),(0,o.kt)("h2",null,"Props"),(0,o.kt)("h3",null,"Popover"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"arrowAt"),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"The position of the arrow. One of: 'left', 'right', 'top', 'bottom'")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"children"),(0,o.kt)("td",{parentName:"tr",align:"left"},"ReactNode ","|"," (context) => ReactNode"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"closeOnBlur"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"left"},"true"),(0,o.kt)("td",{parentName:"tr",align:"left"},"If ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", the popover will close when the user clicks outside of the popover.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"closeOnEsc"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"left"},"true"),(0,o.kt)("td",{parentName:"tr",align:"left"},"If ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", the popover will close when you press the ",(0,o.kt)("inlineCode",{parentName:"td"},"Esc")," key.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"defaultIsOpen"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"left"},"false"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Whether the popover will be open by default.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"enterDelay"),(0,o.kt)("td",{parentName:"tr",align:"left"},"number"),(0,o.kt)("td",{parentName:"tr",align:"left"},"100"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The number of milliseconds to wait before showing the popover if ",(0,o.kt)("inlineCode",{parentName:"td"},"trigger")," is hover.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"followCursor"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"If ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", the popover will follow the cursor.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"hideArrow"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"If ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", the arrow will not be displayed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"id"),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"The id of the popover.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"initialFocusRef"),(0,o.kt)("td",{parentName:"tr",align:"left"},"RefObject"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"The reference of the element that will be focused when the popover opens.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"isOpen"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"If ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", the popover will be open.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"leaveDelay"),(0,o.kt)("td",{parentName:"tr",align:"left"},"number"),(0,o.kt)("td",{parentName:"tr",align:"left"},"0"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The number of milliseconds to wait before hiding the popover if ",(0,o.kt)("inlineCode",{parentName:"td"},"trigger")," is hover.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"nextToCursor"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"If ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", the popover will be positioned next to the cursor.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"offset"),(0,o.kt)("td",{parentName:"tr",align:"left"},"[skidding, distance]"),(0,o.kt)("td",{parentName:"tr",align:"left"},"[0, 12]"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The skidding and distance of the popover.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"onClose"),(0,o.kt)("td",{parentName:"tr",align:"left"},"() => void"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"Callback when the popover is closed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"onOpen"),(0,o.kt)("td",{parentName:"tr",align:"left"},"() => void"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"Callback when the popover is opened.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"placement"),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"'bottom'"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The placement of the popover. One of: 'top', 'bottom', 'right', 'left', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'right-start', 'right-end', 'left-start', 'left-end'")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"returnFocusOnClose"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"left"},"true"),(0,o.kt)("td",{parentName:"tr",align:"left"},"If ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", the popover will return the focus status to the trigger when closing.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"trigger"),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"},"'click'"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The type of trigger. One of: 'click', 'hover'")))),(0,o.kt)("h3",null,"PopoverTrigger"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"children"),(0,o.kt)("td",{parentName:"tr",align:"left"},"ReactNode ","|"," ({ getPopoverTriggerProps }) => ReactNode"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h3",null,"PopoverContent"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"PopperComponent"),(0,o.kt)("td",{parentName:"tr",align:"left"},"ElementType"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Popper"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The component used for the popover.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"PopperProps"),(0,o.kt)("td",{parentName:"tr",align:"left"},"object"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"Props applied to the Popper component.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"PopperArrowComponent"),(0,o.kt)("td",{parentName:"tr",align:"left"},"ElementType"),(0,o.kt)("td",{parentName:"tr",align:"left"},"PopperArrow"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The component used for the popover arrow.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"PopperArrowProps"),(0,o.kt)("td",{parentName:"tr",align:"left"},"object"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"Props applied to the PopoverArrow component.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"TransitionComponent"),(0,o.kt)("td",{parentName:"tr",align:"left"},"ElementType"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Grow"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The component used for the transition.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"TransitionProps"),(0,o.kt)("td",{parentName:"tr",align:"left"},"object"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"Props applied to the ",(0,o.kt)("a",{parentName:"td",href:"http://reactcommunity.org/react-transition-group/transition#Transition-props"},"Transition")," element.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"TransitionProps.appear"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"left"},"true"),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"children"),(0,o.kt)("td",{parentName:"tr",align:"left"},"ReactNode"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"onBlur"),(0,o.kt)("td",{parentName:"tr",align:"left"},"(event: FocusEvent) => void"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"A callback called when the popover loses focus.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"onFocus"),(0,o.kt)("td",{parentName:"tr",align:"left"},"(event: FocusEvent) => void"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"A callback called when the popover gains focus.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"onKeyDown"),(0,o.kt)("td",{parentName:"tr",align:"left"},"(event: KeyboardEvent) => void"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"A callback called when the popover is pressed with any key.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"onMouseEnter"),(0,o.kt)("td",{parentName:"tr",align:"left"},"(event: MouseEvent) => void"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"A callback called when the mouse enters the popover.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"onMouseLeave"),(0,o.kt)("td",{parentName:"tr",align:"left"},"(event: MouseEvent) => void"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"A callback called when the mouse leaves the popover.")))),(0,o.kt)("h3",null,"PopoverHeader"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"children"),(0,o.kt)("td",{parentName:"tr",align:"left"},"ReactNode"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h3",null,"PopoverBody"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"children"),(0,o.kt)("td",{parentName:"tr",align:"left"},"ReactNode"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h3",null,"PopoverFooter"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"children"),(0,o.kt)("td",{parentName:"tr",align:"left"},"ReactNode"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h2",null,"Accessibility"),(0,o.kt)("h3",null,"Keyboard and focus"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When ",(0,o.kt)("inlineCode",{parentName:"p"},"Popover")," is opened, the focus status is moved to ",(0,o.kt)("inlineCode",{parentName:"p"},"PopoverContent"),". If ",(0,o.kt)("inlineCode",{parentName:"p"},"initialFocusRef")," is set, then the focus status is moved to the element with the related reference (",(0,o.kt)("inlineCode",{parentName:"p"},"ref"),").")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When ",(0,o.kt)("inlineCode",{parentName:"p"},"Popover")," is closed, the focus status returns to the trigger. If you set ",(0,o.kt)("inlineCode",{parentName:"p"},"returnFocusOnClose")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", the focus status will not return.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If ",(0,o.kt)("inlineCode",{parentName:"p"},"trigger")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"hover"),":"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Focusing on or mousing over the trigger will open ",(0,o.kt)("inlineCode",{parentName:"li"},"Popover"),"."),(0,o.kt)("li",{parentName:"ul"},"Blurring or mousing out of the trigger will close ",(0,o.kt)("inlineCode",{parentName:"li"},"Popover"),". If you move your mouse into ",(0,o.kt)("inlineCode",{parentName:"li"},"PopoverContent"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Popover")," remains visible."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If ",(0,o.kt)("inlineCode",{parentName:"p"},"trigger")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"click"),":"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Clicking the trigger or using the ",(0,o.kt)("inlineCode",{parentName:"li"},"Space")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Enter")," key when the focus status is on the trigger will open ",(0,o.kt)("inlineCode",{parentName:"li"},"Popover"),"."),(0,o.kt)("li",{parentName:"ul"},"Clicking the trigger again will close ",(0,o.kt)("inlineCode",{parentName:"li"},"Popover"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Hitting the ",(0,o.kt)("inlineCode",{parentName:"p"},"Esc")," key while ",(0,o.kt)("inlineCode",{parentName:"p"},"Popover")," is open and the focus status is within ",(0,o.kt)("inlineCode",{parentName:"p"},"PopoverContent")," will close ",(0,o.kt)("inlineCode",{parentName:"p"},"Popover"),". If you set ",(0,o.kt)("inlineCode",{parentName:"p"},"closeOnEsc")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Popover")," will not close.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Clicking outside or blurring out of ",(0,o.kt)("inlineCode",{parentName:"p"},"PopoverContent")," closes ",(0,o.kt)("inlineCode",{parentName:"p"},"Popover"),". If you set ",(0,o.kt)("inlineCode",{parentName:"p"},"closeOnBlur")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Popover")," will not close."))),(0,o.kt)("h3",null,"ARIA attributes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"trigger")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"click"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"role")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"PopoverContent")," element is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"dialog"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"trigger")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"hover"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"role")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"PopoverContent")," element is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"tooltip"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"PopoverContent")," has ",(0,o.kt)("inlineCode",{parentName:"p"},"aria-labelledby")," set to the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," attribute of ",(0,o.kt)("inlineCode",{parentName:"p"},"PopoverHeader"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"PopoverContent")," has ",(0,o.kt)("inlineCode",{parentName:"p"},"aria-describedby")," set to the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," attribute of ",(0,o.kt)("inlineCode",{parentName:"p"},"PopoverBody"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"PopoverContent")," has ",(0,o.kt)("inlineCode",{parentName:"p"},"aria-hidden")," set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," depending on the open/closed state of ",(0,o.kt)("inlineCode",{parentName:"p"},"Popover"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The trigger has ",(0,o.kt)("inlineCode",{parentName:"p"},"aria-haspopup")," set to ",(0,o.kt)("inlineCode",{parentName:"p"},"dialog")," to denote the popup is a dialog.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The trigger has ",(0,o.kt)("inlineCode",{parentName:"p"},"aria-controls")," set to the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," attribute of ",(0,o.kt)("inlineCode",{parentName:"p"},"PopoverContent")," to associate the popover with the trigger.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The trigger has ",(0,o.kt)("inlineCode",{parentName:"p"},"aria-expanded")," set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," depending on the open/closed state of the popover."))))}i.isMDXComponent=!0},6429:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/popover",function(){return n(9293)}])}},function(e){e.O(0,[9774,2888,179],(function(){return t=6429,e(e.s=t);var t}));var t=e.O();_N_E=t}]);