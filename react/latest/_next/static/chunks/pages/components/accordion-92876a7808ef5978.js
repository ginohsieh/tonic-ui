(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9861],{86479:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});var a=n(7896),r=n(59740),o=(n(2784),n(30876)),l=["components"],i={};function d(t){var e=t.components,n=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},i,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",null,"Accordion"),(0,o.kt)("p",null,"Accordion is a container that allows the user to toggle sections of related content."),(0,o.kt)("h2",null,"Import"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AccordionHeader")," is composed of ",(0,o.kt)("inlineCode",{parentName:"li"},"AccordionToggle")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"AccordionToggleIcon")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AccordionBody")," is composed of ",(0,o.kt)("inlineCode",{parentName:"li"},"AccordionCollapse"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  Accordion,\n  AccordionItem,\n  AccordionHeader,\n  AccordionBody,\n  AccordionToggle,\n  AccordionToggleIcon,\n  AccordionCollapse,\n} from '@tonic-ui/react';\n")),(0,o.kt)("h2",null,"Usage"),(0,o.kt)("h3",null,"Basic accordion"),(0,o.kt)("p",null,"To compose an accordion with default styles, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"Accordion"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"AccordionItem"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"AccordionHeader"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"AccordionBody")," directly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<Accordion rowGap={1}>\n  <AccordionItem defaultIsExpanded>\n    <AccordionHeader>\n      <Text>\n        Accordion 1\n      </Text>\n    </AccordionHeader>\n    <AccordionBody>\n      <SkeletonBody px="4x" py="3x" />\n    </AccordionBody>\n  </AccordionItem>\n  <AccordionItem>\n    <AccordionHeader>\n      <Text>\n        Accordion 2\n      </Text>\n    </AccordionHeader>\n    <AccordionBody>\n      <SkeletonBody px="4x" py="3x" />\n    </AccordionBody>\n  </AccordionItem>\n  <AccordionItem disabled>\n    <AccordionHeader>\n      <Text>\n        Disabled Accordion\n      </Text>\n    </AccordionHeader>\n    <AccordionBody>\n      <SkeletonBody px="4x" py="3x" />\n    </AccordionBody>\n  </AccordionItem>\n</Accordion>\n')),(0,o.kt)("h3",null,"Controlled accordion"),(0,o.kt)("p",null,"Extend the default behavior to create an accordion with controlled state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function Example() {\n  const [expandedItem, setExpandedItem] = React.useState('item1');\n  const handleToggle = item => ({ isExpanded }) => {\n    setExpandedItem(isExpanded ? item : null);\n  };\n\n  return (\n    <Accordion rowGap={1}>\n      <AccordionItem\n        isExpanded={expandedItem === 'item1'}\n        onToggle={handleToggle('item1')}\n      >\n        <AccordionHeader>\n          <Text>\n            Accordion 1\n          </Text>\n        </AccordionHeader>\n        <AccordionBody>\n          <SkeletonBody px=\"4x\" py=\"3x\" />\n        </AccordionBody>\n      </AccordionItem>\n      <AccordionItem\n        isExpanded={expandedItem === 'item2'}\n        onToggle={handleToggle('item2')}\n      >\n        <AccordionHeader>\n          <Text>\n            Accordion 2\n          </Text>\n        </AccordionHeader>\n        <AccordionBody>\n          <SkeletonBody px=\"4x\" py=\"3x\" />\n        </AccordionBody>\n      </AccordionItem>\n      <AccordionItem\n        disabled\n        isExpanded={expandedItem === 'item3'}\n        onToggle={handleToggle('item3')}\n      >\n        <AccordionHeader>\n          <Text>\n            Disabled Accordion\n          </Text>\n        </AccordionHeader>\n        <AccordionBody>\n          <SkeletonBody px=\"4x\" py=\"3x\" />\n        </AccordionBody>\n      </AccordionItem>\n    </Accordion>\n  );\n}\n")),(0,o.kt)("h3",null,"Customization"),(0,o.kt)("p",null,"If you don't like the default styles, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"AccordionToggle"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"AccordionToggleIcon"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"AccordionCollapse")," to customize the accordion."),(0,o.kt)("p",null,"Here is an example of customizing the accordion:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function Example() {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n  const borderColor = {\n    dark: 'rgba(255, 255, 255, 0.12)',\n    light: 'rgba(0, 0, 0, 0.12)',\n  }[colorMode];\n  const [expandedItem, setExpandedItem] = React.useState(null);\n  const handleToggle = item => ({ isExpanded }) => {\n    setExpandedItem(isExpanded ? item : null);\n  };\n  const renderToggleIcon = item => (\n    <AccordionToggleIcon>\n      {(state, { ref, style: styleProps }) => {\n        styleProps.transform = (expandedItem === item) ? 'rotate(0deg)' : 'rotate(-90deg)';\n        return (\n          <Icon ref={ref} icon=\"chevron-down\" size=\"4x\" {...styleProps} />\n        );\n      }}\n    </AccordionToggleIcon>\n  );\n  const getAccordionItemProps = item => {\n    const isExpanded = expandedItem === item;\n    const itemStyleProps = {\n      border: 1,\n      borderColor,\n      borderStyle: 'solid',\n      borderBottomWidth: isExpanded ? 1 : 0,\n      transition: 'all .2s',\n      my: isExpanded ? '3x' : 0,\n      _firstOfType: {\n        mt: 0,\n      },\n      _lastOfType: {\n        mb: 0,\n        borderBottomWidth: 1,\n      },\n    };\n\n    return {\n      ...itemStyleProps,\n      isExpanded,\n      onToggle: handleToggle(item),\n    };\n  };\n  const getAccordionToggleProps = item => {\n    const toggleStyleProps = {\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'flex-start',\n      backgroundColor: {\n        dark: 'gray:90',\n        light: 'white',\n      }[colorMode],\n      color: {\n        dark: 'white:primary',\n        light: 'black:primary',\n      }[colorMode],\n      px: '4x',\n      minHeight: '12x',\n    };\n\n    return {\n      ...toggleStyleProps,\n    };\n  };\n\n  return (\n    <Accordion>\n      {['item1', 'item2', 'item3'].map((item, index) => (\n        <AccordionItem\n          key={item}\n          {...getAccordionItemProps(item)}\n        >\n          <AccordionToggle\n            {...getAccordionToggleProps(item)}\n          >\n            {renderToggleIcon(item)}\n            <Space width=\"2x\" />\n            <Text>\n              Collapsible Item #{index + 1}\n            </Text>\n          </AccordionToggle>\n          <AccordionCollapse>\n            <SkeletonBody px=\"4x\" py=\"3x\" />\n          </AccordionCollapse>\n        </AccordionItem>\n      ))}\n    </Accordion>\n  );\n}\n")),(0,o.kt)("h2",null,"Props"),(0,o.kt)("h3",null,"Accordion"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"children"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"ReactNode")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},"(context) => ReactNode")),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h3",null,"AccordionItem"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"children"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"ReactNode")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},"(context) => ReactNode")),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"disabled"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"Whether the accordion item is disabled.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"id"),(0,o.kt)("td",{parentName:"tr",align:"left"},"string"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"The id of the accordion item.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"isExpanded"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"Whether the accordion item is expanded.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"defaultIsExpanded"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"Whether the accordion item is expanded by default.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"onToggle"),(0,o.kt)("td",{parentName:"tr",align:"left"},"function"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"A callback that is called when the accordion item is toggled.")))),(0,o.kt)("h3",null,"AccordionHeader"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"children"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"disabled"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"Whether the accordion header is disabled.")))),(0,o.kt)("h3",null,"AccordionBody"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"children"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("h3",null,"AccordionToggle"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"children"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"disabled"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"Whether the accordion toggle is disabled.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"onClick"),(0,o.kt)("td",{parentName:"tr",align:"left"},"function"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"A callback that is called when the accordion toggle is clicked.")))),(0,o.kt)("h3",null,"AccordionToggleIcon"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"appear"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"left"},"false"),(0,o.kt)("td",{parentName:"tr",align:"left"},"By default the child component does not perform the enter transition when it first mounts, regardless of the value of ",(0,o.kt)("inlineCode",{parentName:"td"},"in"),". If you want this behavior, set both ",(0,o.kt)("inlineCode",{parentName:"td"},"appear")," and ",(0,o.kt)("inlineCode",{parentName:"td"},"in")," to true.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"children"),(0,o.kt)("td",{parentName:"tr",align:"left"},"ReactNode ","|"," (state, props) => ReactNode"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"A function child can be used instead of a React element. This function is called with the current transition state ('entering', 'entered', 'exiting', 'exited'), ref, style, and context specific props for a component.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"disabled"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"Whether the accordion toggle icon is disabled.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"easing"),(0,o.kt)("td",{parentName:"tr",align:"left"},"string ","|"," { enter?: string, exit?: string }"),(0,o.kt)("td",{parentName:"tr",align:"left"},"{ enter: easing.easeInOut, exit: easing.easeInOut }"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The timing function that describes how intermediate values are calculated during a transition. You may specify a single timing function for all transitions, or individually with an object.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"in"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"If ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", the component will transition in.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"mountOnEnter"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"If ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),', it will "lazy mount" the component on the first ',(0,o.kt)("inlineCode",{parentName:"td"},"in={true}"),". After the first enter transition the component will stay mounted, even on the 'exited' state, unless you also specify ",(0,o.kt)("inlineCode",{parentName:"td"},"unmountOnExit"),". By default the child component is mounted immediately along with the parent transition component.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"timeout"),(0,o.kt)("td",{parentName:"tr",align:"left"},"number ","|"," { appear?: number, enter?: number, exit?: number }"),(0,o.kt)("td",{parentName:"tr",align:"left"},"{ enter: duration.enterScreen, exit: duration.levingScreen }"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"unmountOnExit"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"If ",(0,o.kt)("inlineCode",{parentName:"td"},"true"),", it will unmount the child component when ",(0,o.kt)("inlineCode",{parentName:"td"},"in={false}")," and the animation has finished. By default the child component stays mounted after it reaches the 'exited' state.")))),(0,o.kt)("h3",null,"AccordionCollapse"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"children"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"TransitionComponent"),(0,o.kt)("td",{parentName:"tr",align:"left"},"ElementType"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Collapse"),(0,o.kt)("td",{parentName:"tr",align:"left"},"The component used for the transition.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"TransitionProps"),(0,o.kt)("td",{parentName:"tr",align:"left"},"object"),(0,o.kt)("td",{parentName:"tr",align:"left"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"Props applied to the ",(0,o.kt)("a",{parentName:"td",href:"http://reactcommunity.org/react-transition-group/transition#Transition-props"},"Transition")," element.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"TransitionProps.appear"),(0,o.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,o.kt)("td",{parentName:"tr",align:"left"},"false"),(0,o.kt)("td",{parentName:"tr",align:"left"})))))}d.isMDXComponent=!0},77826:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/accordion",function(){return n(86479)}])}},function(t){t.O(0,[9774,2888,179],(function(){return e=77826,t(t.s=e);var e}));var e=t.O();_N_E=e}]);