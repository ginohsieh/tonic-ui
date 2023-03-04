(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4042],{36927:function(n,t,e){"use strict";e.r(t);var o=e(52322),i=e(45392);function r(n){var t=Object.assign({div:"div",h1:"h1",p:"p",code:"code",h2:"h2",a:"a",svg:"svg",use:"use",pre:"pre",h3:"h3",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",nav:"nav"},(0,i.ah)(),n.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.div,{className:"main-content",id:"main-content",children:[(0,o.jsx)(t.h1,{id:"buttongroup",children:"ButtonGroup"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"ButtonGroup"})," is used to group related buttons."]}),"\n",(0,o.jsxs)(t.h2,{id:"import",children:["Import",(0,o.jsx)(t.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,o.jsx)(t.svg,{children:(0,o.jsx)(t.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import { ButtonGroup } from '@tonic-ui/react';\n"})}),"\n",(0,o.jsxs)(t.h2,{id:"usage",children:["Usage",(0,o.jsx)(t.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usage",children:(0,o.jsx)(t.svg,{children:(0,o.jsx)(t.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(t.h3,{id:"basic-button-group",children:["Basic button group",(0,o.jsx)(t.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#basic-button-group",children:(0,o.jsx)(t.svg,{children:(0,o.jsx)(t.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsx)(t.pre,{noInline:!0,children:(0,o.jsx)(t.code,{className:"language-jsx",children:"function Example() {\n  const [colorMode] = useColorMode();\n  const dividerColor ={\n    dark: 'gray:70',\n    light: 'gray:30',\n  }[colorMode];\n  return (\n    <ButtonGroup>\n      <Button>One</Button>\n      <Divider orientation=\"vertical\" color={dividerColor} />\n      <Button>Two</Button>\n      <Divider orientation=\"vertical\" color={dividerColor} />\n      <Button>Three</Button>\n    </ButtonGroup>\n  );\n}\n\nrender(<Example />);\n"})}),"\n",(0,o.jsxs)(t.h3,{id:"group-variants",children:["Group variants",(0,o.jsx)(t.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#group-variants",children:(0,o.jsx)(t.svg,{children:(0,o.jsx)(t.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(t.p,{children:["Use the ",(0,o.jsx)(t.code,{children:"variant"})," prop to change the visual style of every button in a group. You can set the value to ",(0,o.jsx)(t.code,{children:"emphasis"}),", ",(0,o.jsx)(t.code,{children:"primary"}),", ",(0,o.jsx)(t.code,{children:"default"}),", ",(0,o.jsx)(t.code,{children:"secondary"})," and ",(0,o.jsx)(t.code,{children:"ghost"}),"."]}),"\n",(0,o.jsx)(t.pre,{noInline:!0,children:(0,o.jsx)(t.code,{className:"language-jsx",children:'function Example() {\n  const [colorMode] = useColorMode();\n  const emphasisDividerColor ={\n    dark: \'red:80\',\n    light: \'red:80\',\n  }[colorMode];\n  const primaryDividerColor ={\n    dark: \'blue:80\',\n    light: \'blue:80\',\n  }[colorMode];\n  const defaultDividerColor ={\n    dark: \'gray:70\',\n    light: \'gray:30\',\n  }[colorMode];\n  const ghostDividerColor ={\n    dark: \'gray:60\',\n    light: \'gray:20\',\n  }[colorMode];\n\n  return (\n    <Stack direction="column" spacing="3x">\n      <ButtonGroup variant="emphasis">\n        <Button>One</Button>\n        <Divider orientation="vertical" color={emphasisDividerColor} />\n        <Button>Two</Button>\n        <Divider orientation="vertical" color={emphasisDividerColor} />\n        <Button>Three</Button>\n      </ButtonGroup>\n      <ButtonGroup variant="primary">\n        <Button>One</Button>\n        <Divider orientation="vertical" color={primaryDividerColor} />\n        <Button>Two</Button>\n        <Divider orientation="vertical" color={primaryDividerColor} />\n        <Button>Three</Button>\n      </ButtonGroup>\n      <ButtonGroup variant="default">\n        <Button>One</Button>\n        <Divider orientation="vertical" color={defaultDividerColor} />\n        <Button>Two</Button>\n        <Divider orientation="vertical" color={defaultDividerColor} />\n        <Button>Three</Button>\n      </ButtonGroup>\n      <ButtonGroup\n        variant="secondary"\n        css={{\n          \'> *:not(:first-of-type)\': {\n            marginLeft: -1\n          }\n        }}\n      >\n        <Button>One</Button>\n        <Button>Two</Button>\n        <Button>Three</Button>\n      </ButtonGroup>\n      <ButtonGroup\n        variant="ghost"\n        css={{\n          \'> *:not(:first-of-type)\': {\n            marginLeft: -1\n          }\n        }}\n      >\n        <Button>One</Button>\n        <Divider orientation="vertical" color={ghostDividerColor} />\n        <Button>Two</Button>\n        <Divider orientation="vertical" color={ghostDividerColor} />\n        <Button>Three</Button>\n      </ButtonGroup>\n    </Stack>\n  );\n}\n\nrender(<Example />);\n'})}),"\n",(0,o.jsxs)(t.h3,{id:"group-sizes",children:["Group sizes",(0,o.jsx)(t.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#group-sizes",children:(0,o.jsx)(t.svg,{children:(0,o.jsx)(t.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(t.p,{children:["Use the ",(0,o.jsx)(t.code,{children:"size"})," prop to change the size of the ",(0,o.jsx)(t.code,{children:"ButtonGroup"}),". You can set the value to ",(0,o.jsx)(t.code,{children:"sm"}),", ",(0,o.jsx)(t.code,{children:"md"}),", or ",(0,o.jsx)(t.code,{children:"lg"}),"."]}),"\n",(0,o.jsx)(t.pre,{noInline:!0,children:(0,o.jsx)(t.code,{className:"language-jsx",children:'function Example() {\n  const [colorMode] = useColorMode();\n  const defaultDividerColor ={\n    dark: \'gray:70\',\n    light: \'gray:30\',\n  }[colorMode];\n  const ghostDividerColor ={\n    dark: \'gray:60\',\n    light: \'gray:20\',\n  }[colorMode];\n\n  return (\n    <Stack direction="row" spacing="4x">\n      <Stack spacing="4x" alignItems="flex-start">\n        <ButtonGroup size="sm">\n          <Button>Left</Button>\n          <Divider orientation="vertical" color={defaultDividerColor} />\n          <Button>Middle</Button>\n          <Divider orientation="vertical" color={defaultDividerColor} />\n          <Button>Right</Button>\n        </ButtonGroup>\n        <ButtonGroup size="md">\n          <Button>Left</Button>\n          <Divider orientation="vertical" color={defaultDividerColor} />\n          <Button>Middle</Button>\n          <Divider orientation="vertical" color={defaultDividerColor} />\n          <Button>Right</Button>\n        </ButtonGroup>\n        <ButtonGroup size="lg">\n          <Button>Left</Button>\n          <Divider orientation="vertical" color={defaultDividerColor} />\n          <Button>Middle</Button>\n          <Divider orientation="vertical" color={defaultDividerColor} />\n          <Button>Right</Button>\n        </ButtonGroup>\n      </Stack>\n      <Stack spacing="4x" alignItems="flex-start">\n        <ButtonGroup\n          size="sm"\n          variant="secondary"\n          css={{\n            \'> *:not(:first-of-type)\': {\n              marginLeft: -1\n            }\n          }}\n        >\n          <Button>Left</Button>\n          <Button>Middle</Button>\n          <Button>Right</Button>\n        </ButtonGroup>\n        <ButtonGroup\n          size="md"\n          variant="secondary"\n          css={{\n            \'> *:not(:first-of-type)\': {\n              marginLeft: -1\n            }\n          }}\n        >\n          <Button>Left</Button>\n          <Button>Middle</Button>\n          <Button>Right</Button>\n        </ButtonGroup>\n        <ButtonGroup\n          size="lg"\n          variant="secondary"\n          css={{\n            \'> *:not(:first-of-type)\': {\n              marginLeft: -1\n            }\n          }}\n        >\n          <Button>Left</Button>\n          <Button>Middle</Button>\n          <Button>Right</Button>\n        </ButtonGroup>\n      </Stack>\n      <Stack spacing="4x" alignItems="flex-start">\n        <ButtonGroup\n          size="sm"\n          variant="ghost"\n          css={{\n            \'> *:not(:first-of-type)\': {\n              marginLeft: -1\n            }\n          }}\n        >\n          <Button>Left</Button>\n          <Divider orientation="vertical" color={ghostDividerColor} />\n          <Button>Middle</Button>\n          <Divider orientation="vertical" color={ghostDividerColor} />\n          <Button>Right</Button>\n        </ButtonGroup>\n        <ButtonGroup\n          size="md"\n          variant="ghost"\n          css={{\n            \'> *:not(:first-of-type)\': {\n              marginLeft: -1\n            }\n          }}\n        >\n          <Button>Left</Button>\n          <Divider orientation="vertical" color={ghostDividerColor} />\n          <Button>Middle</Button>\n          <Divider orientation="vertical" color={ghostDividerColor} />\n          <Button>Right</Button>\n        </ButtonGroup>\n        <ButtonGroup\n          size="lg"\n          variant="ghost"\n          css={{\n            \'> *:not(:first-of-type)\': {\n              marginLeft: -1\n            }\n          }}\n        >\n          <Button>Left</Button>\n          <Divider orientation="vertical" color={ghostDividerColor} />\n          <Button>Middle</Button>\n          <Divider orientation="vertical" color={ghostDividerColor} />\n          <Button>Right</Button>\n        </ButtonGroup>\n      </Stack>\n    </Stack>\n  );\n}\n\nrender(<Example />);\n'})}),"\n",(0,o.jsxs)(t.h3,{id:"group-orientation",children:["Group orientation",(0,o.jsx)(t.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#group-orientation",children:(0,o.jsx)(t.svg,{children:(0,o.jsx)(t.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(t.p,{children:["Make a set of buttons appear vertically stacked rather than horizontally, by adding ",(0,o.jsx)(t.code,{children:'orientation="vertical"'})," to the ",(0,o.jsx)(t.code,{children:"ButtonGroup"})," component."]}),"\n",(0,o.jsx)(t.pre,{noInline:!0,children:(0,o.jsx)(t.code,{className:"language-jsx",children:'function Example() {\n  const [colorMode] = useColorMode();\n  const defaultDividerColor ={\n    dark: \'gray:70\',\n    light: \'gray:30\',\n  }[colorMode];\n  const ghostDividerColor ={\n    dark: \'gray:60\',\n    light: \'gray:20\',\n  }[colorMode];\n  return (\n    <Stack direction="row" spacing="4x">\n      <Stack spacing="4x" alignItems="center">\n        <ButtonGroup>\n          <Button>One</Button>\n          <Divider orientation="vertical" color={defaultDividerColor} />\n          <Button>Two</Button>\n          <Divider orientation="vertical" color={defaultDividerColor} />\n          <Button>Three</Button>\n        </ButtonGroup>\n        <ButtonGroup orientation="vertical">\n          <Button>One</Button>\n          <Divider color={defaultDividerColor} />\n          <Button>Two</Button>\n          <Divider color={defaultDividerColor} />\n          <Button>Three</Button>\n        </ButtonGroup>\n      </Stack>\n      <Stack spacing="4x" alignItems="center">\n        <ButtonGroup\n          variant="secondary"\n          css={{\n            \'> *:not(:first-of-type)\': {\n              marginLeft: -1\n            }\n          }}\n        >\n          <Button>One</Button>\n          <Button>Two</Button>\n          <Button>Three</Button>\n        </ButtonGroup>\n        <ButtonGroup\n          orientation="vertical"\n          variant="secondary"\n          css={{\n            \'> *:not(:first-of-type)\': {\n              marginTop: -1\n            }\n          }}\n        >\n          <Button>One</Button>\n          <Button>Two</Button>\n          <Button>Three</Button>\n        </ButtonGroup>\n      </Stack>\n      <Stack spacing="4x" alignItems="center">\n        <ButtonGroup\n          variant="ghost"\n          css={{\n            \'> *:not(:first-of-type)\': {\n              marginLeft: -1\n            }\n          }}\n        >\n          <Button>One</Button>\n          <Divider orientation="vertical" color={ghostDividerColor} />\n          <Button>Two</Button>\n          <Divider orientation="vertical" color={ghostDividerColor} />\n          <Button>Three</Button>\n        </ButtonGroup>\n        <ButtonGroup\n          orientation="vertical"\n          variant="ghost"\n          css={{\n            \'> *:not(:first-of-type)\': {\n              marginTop: -1\n            }\n          }}\n        >\n          <Button>One</Button>\n          <Divider color={ghostDividerColor} />\n          <Button>Two</Button>\n          <Divider color={ghostDividerColor} />\n          <Button>Three</Button>\n        </ButtonGroup>\n      </Stack>\n    </Stack>\n  );\n}\n\nrender(<Example />);\n'})}),"\n",(0,o.jsxs)(t.h3,{id:"group-states",children:["Group states",(0,o.jsx)(t.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#group-states",children:(0,o.jsx)(t.svg,{children:(0,o.jsx)(t.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsx)(t.p,{children:"The following example shows different states (i.e. normal, disabled, and selected states) when composing a group of buttons."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Use the ",(0,o.jsx)(t.code,{children:"disabled"})," prop to make the ",(0,o.jsx)(t.code,{children:"Button"})," appear disabled."]}),"\n",(0,o.jsxs)(t.li,{children:["Use the ",(0,o.jsx)(t.code,{children:"selected"})," prop to make the ",(0,o.jsx)(t.code,{children:"Button"})," appear selected."]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:'function Example() {\n  const [colorMode] = useColorMode();\n  const emphasisDividerColor = {\n    dark: \'red:80\',\n    light: \'red:80\',\n  }[colorMode];\n  const primaryDividerColor = {\n    dark: \'blue:80\',\n    light: \'blue:80\',\n  }[colorMode];\n  const defaultDividerColor = {\n    dark: \'gray:70\',\n    light: \'gray:30\',\n  }[colorMode];\n  const ghostDividerColor = {\n    dark: \'gray:60\',\n    light: \'gray:20\',\n  }[colorMode];\n\n  const icons = [\'chart-pie\', \'chart-line\', \'chart-table\', \'chart-bar\'];\n  const lastIconIndex = icons.length - 1;\n  const [activeButton1, setActiveButton1] = React.useState(\'chart-pie\');\n  const [activeButton2, setActiveButton2] = React.useState(\'chart-pie\');\n  const [activeButton3, setActiveButton3] = React.useState(\'chart-pie\');\n  const [activeButton4, setActiveButton4] = React.useState(\'chart-pie\');\n  const [activeButton5, setActiveButton5] = React.useState(\'chart-pie\');\n  const [activeButton6, setActiveButton6] = React.useState(\'chart-pie\');\n\n  const handleClick1 = (button) => (e) => {\n    setActiveButton1(button);\n    // Remove focus when the button is clicked\n    e.currentTarget.blur();\n  };\n  const handleClick2 = (button) => (e) => {\n    setActiveButton2(button);\n    // Remove focus when the button is clicked\n    e.currentTarget.blur();\n  };\n  const handleClick3 = (button) => (e) => {\n    setActiveButton3(button);\n    // Remove focus when the button is clicked\n    e.currentTarget.blur();\n  };\n  const handleClick4 = (button) => (e) => {\n    setActiveButton4(button);\n    // Remove focus when the button is clicked\n    e.currentTarget.blur();\n  };\n  const handleClick5 = (button) => (e) => {\n    setActiveButton5(button);\n    // Remove focus when the button is clicked\n    e.currentTarget.blur();\n  };\n  const handleClick6 = (button) => (e) => {\n    setActiveButton6(button);\n    // Remove focus when the button is clicked\n    e.currentTarget.blur();\n  };\n\n  return (\n    <Flex direction="column" rowGap="4x">\n      <Box>\n        <TextLabel mb="2x">\n          Emphasis\n        </TextLabel>\n        <ButtonGroup variant="emphasis">\n          {icons.map((key, index) => (\n            <React.Fragment key={key}>\n              <Button\n                disabled={index === lastIconIndex}\n                selected={activeButton1 === key}\n                onClick={handleClick1(key)}\n                width="8x"\n              >\n                <Icon icon={key} />\n              </Button>\n              {(index !== lastIconIndex) && (\n                <Divider orientation="vertical" color={emphasisDividerColor} />\n              )}\n            </React.Fragment>\n          ))}\n        </ButtonGroup>\n      </Box>\n      <Box>\n        <TextLabel mb="2x">\n          Primary\n        </TextLabel>\n        <ButtonGroup variant="primary">\n          {icons.map((key, index) => (\n            <React.Fragment key={key}>\n              <Button\n                disabled={index === lastIconIndex}\n                selected={activeButton2 === key}\n                onClick={handleClick2(key)}\n                width="8x"\n              >\n                <Icon icon={key} />\n              </Button>\n              {(index !== lastIconIndex) && (\n                <Divider orientation="vertical" color={primaryDividerColor} />\n              )}\n            </React.Fragment>\n          ))}\n        </ButtonGroup>\n      </Box>\n      <Box>\n        <TextLabel mb="2x">\n          Default\n        </TextLabel>\n        <ButtonGroup variant="default">\n          {icons.map((key, index) => (\n            <React.Fragment key={key}>\n              <Button\n                disabled={index === lastIconIndex}\n                selected={activeButton3 === key}\n                onClick={handleClick3(key)}\n                width="8x"\n              >\n                <Icon icon={key} />\n              </Button>\n              {(index !== lastIconIndex) && (\n                <Divider orientation="vertical" color={defaultDividerColor} />\n              )}\n            </React.Fragment>\n          ))}\n        </ButtonGroup>\n      </Box>\n      <Box>\n        <TextLabel mb="2x">\n          Secondary\n        </TextLabel>\n        <ButtonGroup\n          variant="secondary"\n          css={{\n            \'> *:not(:first-of-type)\': {\n              marginLeft: -1\n            }\n          }}\n        >\n          {icons.map((key, index) => (\n            <React.Fragment key={key}>\n              <Button\n                disabled={index === lastIconIndex}\n                selected={activeButton4 === key}\n                onClick={handleClick4(key)}\n                width="8x"\n              >\n                <Icon icon={key} />\n              </Button>\n            </React.Fragment>\n          ))}\n        </ButtonGroup>\n      </Box>\n      <Box>\n        <TextLabel mb="2x">\n          Ghost\n        </TextLabel>\n        <ButtonGroup\n          variant="ghost"\n        >\n          {icons.map((key, index) => (\n            <React.Fragment key={key}>\n              <Button\n                disabled={index === lastIconIndex}\n                selected={activeButton5 === key}\n                onClick={handleClick5(key)}\n                width="8x"\n              >\n                <Icon icon={key} />\n              </Button>\n              {(index !== lastIconIndex) && (\n                <Divider orientation="vertical" color={ghostDividerColor} />\n              )}\n            </React.Fragment>\n          ))}\n        </ButtonGroup>\n      </Box>\n      <Box>\n        <TextLabel mb="2x">\n          Ghost (w/o ButtonGroup)\n        </TextLabel>\n        <Flex>\n          {icons.map((key, index) => (\n            <React.Fragment key={key}>\n              <Button\n                disabled={index === lastIconIndex}\n                selected={activeButton6 === key}\n                onClick={handleClick6(key)}\n                variant="ghost"\n                width="8x"\n              >\n                <Icon icon={key} />\n              </Button>\n            </React.Fragment>\n          ))}\n        </Flex>\n      </Box>\n    </Flex>\n  );\n}\n'})}),"\n",(0,o.jsxs)(t.h2,{id:"props",children:["Props",(0,o.jsx)(t.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#props",children:(0,o.jsx)(t.svg,{children:(0,o.jsx)(t.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(t.h3,{id:"buttongroup-1",children:["ButtonGroup",(0,o.jsx)(t.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#buttongroup-1",children:(0,o.jsx)(t.svg,{children:(0,o.jsx)(t.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{align:"left",children:"Name"}),(0,o.jsx)(t.th,{align:"left",children:"Type"}),(0,o.jsx)(t.th,{align:"left",children:"Default"}),(0,o.jsx)(t.th,{align:"left",children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{align:"left",children:"children"}),(0,o.jsxs)(t.td,{align:"left",children:["ReactNode | ",(0,o.jsx)(t.code,{children:"(context) => ReactNode"})]}),(0,o.jsx)(t.td,{align:"left"}),(0,o.jsx)(t.td,{align:"left",children:"A function child can be used intead of a React element. This function is called with the context object."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{align:"left",children:"orientation"}),(0,o.jsx)(t.td,{align:"left",children:"string"}),(0,o.jsx)(t.td,{align:"left",children:"'horizontal'"}),(0,o.jsx)(t.td,{align:"left",children:"The orientation of the button group. One of: 'horizontal', 'vertical'"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{align:"left",children:"size"}),(0,o.jsx)(t.td,{align:"left",children:"string"}),(0,o.jsx)(t.td,{align:"left",children:"'md'"}),(0,o.jsx)(t.td,{align:"left",children:"The size of the button group. One of: 'sm', 'md', 'lg'"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{align:"left",children:"variant"}),(0,o.jsx)(t.td,{align:"left",children:"string"}),(0,o.jsx)(t.td,{align:"left",children:"'default'"}),(0,o.jsx)(t.td,{align:"left",children:"The variant of the button group. One of: 'emphasis', 'primary', 'default', 'secondary', 'ghost'"})]})]})]})]}),(0,o.jsxs)(t.nav,{className:"toc",id:"toc",children:[(0,o.jsx)(t.div,{className:"toc-heading",children:"Contents"}),(0,o.jsxs)(t.ul,{className:"toc-level toc-level-1",children:[(0,o.jsx)(t.li,{className:"toc-item toc-item-h2",children:(0,o.jsx)(t.a,{className:"toc-link toc-link-h2",href:"#import",children:"Import"})}),(0,o.jsxs)(t.li,{className:"toc-item toc-item-h2",children:[(0,o.jsx)(t.a,{className:"toc-link toc-link-h2",href:"#usage",children:"Usage"}),(0,o.jsxs)(t.ul,{className:"toc-level toc-level-2",children:[(0,o.jsx)(t.li,{className:"toc-item toc-item-h3",children:(0,o.jsx)(t.a,{className:"toc-link toc-link-h3",href:"#basic-button-group",children:"Basic button group"})}),(0,o.jsx)(t.li,{className:"toc-item toc-item-h3",children:(0,o.jsx)(t.a,{className:"toc-link toc-link-h3",href:"#group-variants",children:"Group variants"})}),(0,o.jsx)(t.li,{className:"toc-item toc-item-h3",children:(0,o.jsx)(t.a,{className:"toc-link toc-link-h3",href:"#group-sizes",children:"Group sizes"})}),(0,o.jsx)(t.li,{className:"toc-item toc-item-h3",children:(0,o.jsx)(t.a,{className:"toc-link toc-link-h3",href:"#group-orientation",children:"Group orientation"})}),(0,o.jsx)(t.li,{className:"toc-item toc-item-h3",children:(0,o.jsx)(t.a,{className:"toc-link toc-link-h3",href:"#group-states",children:"Group states"})})]})]}),(0,o.jsxs)(t.li,{className:"toc-item toc-item-h2",children:[(0,o.jsx)(t.a,{className:"toc-link toc-link-h2",href:"#props",children:"Props"}),(0,o.jsx)(t.ul,{className:"toc-level toc-level-2",children:(0,o.jsx)(t.li,{className:"toc-item toc-item-h3",children:(0,o.jsx)(t.a,{className:"toc-link toc-link-h3",href:"#buttongroup-1",children:"ButtonGroup"})})})]})]})]})]})}t.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},(0,i.ah)(),n.components).wrapper;return t?(0,o.jsx)(t,Object.assign({},n,{children:(0,o.jsx)(r,n)})):r(n)}},95198:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/buttongroup",function(){return e(36927)}])}},function(n){n.O(0,[9774,2888,179],function(){return n(n.s=95198)}),_N_E=n.O()}]);