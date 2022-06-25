(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6421],{14067:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return u}});var a=e(7896),o=e(59740),i=(e(2784),e(30876)),r=["components"],c={};function u(t){var n=t.components,e=(0,o.Z)(t,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,e,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",null,"Button"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Button")," is used to trigger an action or event, such as submitting a form, opening a ",(0,i.kt)("a",{parentName:"p",href:"./modal"},(0,i.kt)("inlineCode",{parentName:"a"},"Modal")),", canceling an action, or performing a delete operation."),(0,i.kt)("h2",null,"Import"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Button } from '@trendmicro/react-styled-ui';\n")),(0,i.kt)("h2",null,"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<Button>Default Button</Button>\n")),(0,i.kt)("h3",null,"Variants"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"variant")," prop to change the visual style of ",(0,i.kt)("inlineCode",{parentName:"p"},"Button"),". You can set the value to ",(0,i.kt)("inlineCode",{parentName:"p"},"emphasis"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"primary"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"default"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"secondary"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"ghost"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="row" spacing="2x">\n  <Button variant="emphasis">Emphasis Button</Button>\n  <Button variant="primary">Primary Button</Button>\n  <Button variant="default">Default Button</Button>\n  <Button variant="secondary">Secondary Button</Button>\n  <Button variant="ghost">Ghost Button</Button>\n</Stack>\n')),(0,i.kt)("h3",null,"Sizes"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"size")," prop to change the size of the button. You can set the value to ",(0,i.kt)("inlineCode",{parentName:"p"},"sm"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"md"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"lg"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="column" spacing="4x">\n  <Stack direction="row" spacing="2x" alignItems="center">\n    <Button variant="primary" size="sm">Small</Button>\n    <Button variant="primary" size="md">Medium</Button>\n    <Button variant="primary" size="lg">Large</Button>\n  </Stack>\n  <Stack direction="row" spacing="2x" alignItems="center">\n    <Button size="sm">Small</Button>\n    <Button size="md">Medium</Button>\n    <Button size="lg">Large</Button>\n  </Stack>\n  <Stack direction="row" spacing="2x" alignItems="center">\n    <Button variant="secondary" size="sm">Small</Button>\n    <Button variant="secondary" size="md">Medium</Button>\n    <Button variant="secondary" size="lg">Large</Button>\n  </Stack>\n  <Stack direction="row" spacing="2x" alignItems="center">\n    <Button variant="ghost" size="sm">Small</Button>\n    <Button variant="ghost" size="md">Medium</Button>\n    <Button variant="ghost" size="lg">Large</Button>\n  </Stack>\n</Stack>\n')),(0,i.kt)("h3",null,"States"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="column" spacing="4x">\n  <Stack direction="row" spacing="2x" alignItems="center">\n    <Button variant="primary">Normal</Button>\n    <Button variant="primary" disabled>Disabled</Button>\n  </Stack>\n  <Stack direction="row" spacing="2x" alignItems="center">\n    <Button>Normal</Button>\n    <Button disabled>Disabled</Button>\n  </Stack>\n  <Stack direction="row" spacing="2x" alignItems="center">\n    <Button variant="secondary">Normal</Button>\n    <Button variant="secondary" disabled>Disabled</Button>\n  </Stack>\n  <Stack direction="row" spacing="2x" alignItems="center">\n    <Button variant="ghost">Normal</Button>\n    <Button variant="ghost" disabled>Disabled</Button>\n  </Stack>\n</Stack>\n')),(0,i.kt)("h3",null,"Button with icon"),(0,i.kt)("p",null,"Icon buttons are commonly used in toolbars. If required, you can add a label to icon buttons. To add padding space (",(0,i.kt)("inlineCode",{parentName:"p"},".25rem")," (",(0,i.kt)("inlineCode",{parentName:"p"},"4px"),")) between an icon and label, use ",(0,i.kt)("a",{parentName:"p",href:"./space"},"Space"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="column" spacing="4x">\n  <Stack direction="row" spacing="2x">\n    <Button variant="primary" width="8x" height="8x" borderRadius="circle">\n      <Icon icon="add" />\n    </Button>\n    <Button variant="primary" width="8x" height="8x">\n      <Icon icon="add" />\n    </Button>\n    <Button variant="primary" borderRadius="2rem">\n      <Icon icon="settings" />\n      <Space width="2x" />\n      Settings\n    </Button>\n    <Button variant="primary">\n      <Icon icon="settings" />\n      <Space width="2x" />\n      Settings\n    </Button>\n    <Button variant="primary" borderRadius="2rem">\n      Next\n      <Space width="2x" />\n      <Icon icon="angle-right" />\n    </Button>\n    <Button variant="primary">\n      Next\n      <Space width="2x" />\n      <Icon icon="angle-right" />\n    </Button>\n  </Stack>\n  <Stack direction="row" spacing="2x">\n    <Button width="8x" height="8x" borderRadius="circle">\n      <Icon icon="add" />\n    </Button>\n    <Button width="8x" height="8x">\n      <Icon icon="add" />\n    </Button>\n    <Button borderRadius="2rem">\n      <Icon icon="settings" />\n      <Space width="2x" />\n      Settings\n    </Button>\n    <Button>\n      <Icon icon="settings" />\n      <Space width="2x" />\n      Settings\n    </Button>\n    <Button borderRadius="2rem">\n      Next\n      <Space width="2x" />\n      <Icon icon="angle-right" />\n    </Button>\n    <Button>\n      Next\n      <Space width="2x" />\n      <Icon icon="angle-right" />\n    </Button>\n  </Stack>\n  <Stack direction="row" spacing="2x">\n    <Button variant="secondary" width="8x" height="8x" borderRadius="circle">\n      <Icon icon="add" />\n    </Button>\n    <Button variant="secondary" width="8x" height="8x">\n      <Icon icon="add" />\n    </Button>\n    <Button variant="secondary" borderRadius="2rem">\n      <Icon icon="settings" />\n      <Space width="2x" />\n      Settings\n    </Button>\n    <Button variant="secondary">\n      <Icon icon="settings" />\n      <Space width="2x" />\n      Settings\n    </Button>\n    <Button variant="secondary" borderRadius="2rem">\n      Next\n      <Space width="2x" />\n      <Icon icon="angle-right" />\n    </Button>\n    <Button variant="secondary">\n      Next\n      <Space width="2x" />\n      <Icon icon="angle-right" />\n    </Button>\n  </Stack>\n  <Stack direction="row" spacing="2x">\n    <Button variant="ghost" width="8x" height="8x" borderRadius="circle">\n      <Icon icon="add" />\n    </Button>\n    <Button variant="ghost" width="8x" height="8x">\n      <Icon icon="add" />\n    </Button>\n    <Button variant="ghost" borderRadius="2rem">\n      <Icon icon="settings" />\n      <Space width="2x" />\n      Settings\n    </Button>\n    <Button variant="ghost">\n      <Icon icon="settings" />\n      <Space width="2x" />\n      Settings\n    </Button>\n    <Button variant="ghost" borderRadius="2rem">\n      Next\n      <Space width="2x" />\n      <Icon icon="angle-right" />\n    </Button>\n    <Button variant="ghost">\n      Next\n      <Space width="2x" />\n      <Icon icon="angle-right" />\n    </Button>\n  </Stack>\n</Stack>\n')),(0,i.kt)("h2",null,"Custom Button"),(0,i.kt)("p",null,"To create a custom button, you can use the style props for the ",(0,i.kt)("a",{parentName:"p",href:"./buttonbase"},"ButtonBase")," component."),(0,i.kt)("h2",null,"Props"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"disabled"),(0,i.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", the button will be disabled. This sets ",(0,i.kt)("inlineCode",{parentName:"td"},"aria-disabled=true"),". You can style this state by using the ",(0,i.kt)("inlineCode",{parentName:"td"},"_disabled")," prop.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"size"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"'md'"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The size of the button. Acceptable values: ",(0,i.kt)("inlineCode",{parentName:"td"},"'sm'"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"'md'"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"'lg'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"variant"),(0,i.kt)("td",{parentName:"tr",align:"left"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"'default'"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The variant of the button style to use. Acceptable values: ",(0,i.kt)("inlineCode",{parentName:"td"},"'emphasis'"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"'primary'"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"'default'"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"'secondary'"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"'ghost'"))))))}u.isMDXComponent=!0},15786:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/button",function(){return e(14067)}])}},function(t){t.O(0,[9774,2888,179],(function(){return n=15786,t(t.s=n);var n}));var n=t.O();_N_E=n}]);