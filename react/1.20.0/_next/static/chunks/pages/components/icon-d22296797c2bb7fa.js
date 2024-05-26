(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1380],{64337:function(n,e,o){"use strict";o.r(e);var i=o(52322),c=o(45392);function t(n){var e=Object.assign({div:"div",h1:"h1",p:"p",code:"code",h2:"h2",a:"a",svg:"svg",use:"use",pre:"pre",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,c.ah)(),n.components);return(0,i.jsxs)(e.div,{className:"main-content",id:"main-content",children:[(0,i.jsx)(e.h1,{id:"icon",children:"Icon"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"Icon"})," is used to render SVG icons in a more convenient way. You can extend icons by defining icon keys in ",(0,i.jsx)(e.code,{children:"theme.icons"}),"."]}),"\n",(0,i.jsxs)(e.h2,{id:"import",children:["Import",(0,i.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,i.jsx)(e.svg,{children:(0,i.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"import { Icon } from '@tonic-ui/react';\n"})}),"\n",(0,i.jsxs)(e.h2,{id:"usage",children:["Usage",(0,i.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usage",children:(0,i.jsx)(e.svg,{children:(0,i.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsxs)(e.p,{children:["Use an icon by passing the ",(0,i.jsx)(e.code,{children:"icon"})," prop. This ",(0,i.jsx)(e.code,{children:"icon"})," property value must match an icon key defined in ",(0,i.jsx)(e.code,{children:"theme.icons"}),". By default, the icon inherits the font size and color of its parent."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-jsx",children:'<Stack direction="row" spacing="4x" alignItems="center">\n  <Icon icon="face-smile-o" />\n  <Icon icon="face-smile-o" size="6x" color="red:50" />\n  <Icon icon="face-smile-o" size="8x" color="yellow:50" />\n  <Icon icon="face-smile-o" size="12x" color="teal:40" />\n</Stack>\n'})}),"\n",(0,i.jsxs)(e.h3,{id:"animating-icons",children:["Animating icons",(0,i.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#animating-icons",children:(0,i.jsx)(e.svg,{children:(0,i.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsxs)(e.p,{children:["Use the ",(0,i.jsx)(e.code,{children:"spin"})," prop to get any icon to rotate either in the clockwise (CW) or counterclockwise (CCW) direction."]}),"\n",(0,i.jsx)(e.pre,{noInline:!0,children:(0,i.jsx)(e.code,{className:"language-jsx",children:'function Example() {\n  const [checked, toggle] = useToggle(true);\n  const playState = checked ? \'running\' : \'paused\';\n\n  return (\n    <>\n      <Flex mb="4x" alignItems="center">\n        <Switch size="md" checked={checked} onChange={toggle} />\n        <Space width="2x" />\n        <Text>Toggle animation</Text>\n      </Flex>\n      <Stack direction="row" spacing="4x">\n        <Icon icon="spinner" size="6x" spin animationPlayState={playState} />\n        <Icon icon="spinner" size="6x" spin animationDuration="4s" animationPlayState={playState} />\n        <Icon icon="clock" size="6x" spin animationPlayState={playState} animationTimingFunction="steps(8)" />\n        <Icon icon="redo" size="6x" spin="cw" animationPlayState={playState} />\n        <Icon icon="undo" size="6x" spin="ccw" animationPlayState={playState} />\n      </Stack>\n    </>\n  );\n}\n\nrender(<Example />);\n'})}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.code,{children:"animation"})," prop can be used to override default animation, it is a shorthand property for:"]}),"\n",(0,i.jsxs)(e.p,{children:["• ",(0,i.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name",children:"animationName"}),(0,i.jsx)("br",{}),"\n• ",(0,i.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration",children:"animationDuration"}),(0,i.jsx)("br",{}),"\n• ",(0,i.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function",children:"animationTimingFunction"}),(0,i.jsx)("br",{}),"\n• ",(0,i.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay",children:"animationDelay"}),(0,i.jsx)("br",{}),"\n• ",(0,i.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count",children:"animationIterationCount"}),(0,i.jsx)("br",{}),"\n• ",(0,i.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction",children:"animationDirection"}),(0,i.jsx)("br",{}),"\n• ",(0,i.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode",children:"animationFillMode"}),(0,i.jsx)("br",{}),"\n• ",(0,i.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state",children:"animationPlayState"}),(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(e.h2,{id:"adding-custom-icons",children:["Adding custom icons",(0,i.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#adding-custom-icons",children:(0,i.jsx)(e.svg,{children:(0,i.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsxs)(e.p,{children:["First, you have to add custom icons to the theme. Each icon must be an object containing ",(0,i.jsx)(e.code,{children:"path"})," and optional style props passed to ",(0,i.jsx)(e.a,{href:"svgicon",children:"SVGIcon"}),"."]}),"\n",(0,i.jsx)(e.pre,{disabled:!0,noInline:!0,children:(0,i.jsx)(e.code,{className:"language-jsx",children:'const customIcons = {\n  icon1: {\n    path: (\n      <path fill="currentColor" d="..." />\n    ),\n  },\n  icon2: {\n    path: (\n      <g fill="currentColor">\n        <path d="..." />\n      </g>\n    ),\n\n    // optional style props\n    viewBox: \'0 0 48 48\',\n  },\n};\n\nconst customTheme = {\n  ...theme,\n  icons: {\n    ...theme.icons,\n    ...customIcons,\n  },\n};\n'})}),"\n",(0,i.jsxs)(e.p,{children:["After that simply wrap your app into ",(0,i.jsx)(e.code,{children:"ThemeProvider"})," component and pass your theme as a ",(0,i.jsx)(e.code,{children:"theme"})," prop. Just like this:"]}),"\n",(0,i.jsx)(e.pre,{disabled:!0,noInline:!0,children:(0,i.jsx)(e.code,{className:"language-jsx",children:"<ThemeProvider theme={customTheme}>\n  <App />\n</ThemeProvider>\n"})}),"\n",(0,i.jsxs)(e.p,{children:["Pass the icon name as a prop to the ",(0,i.jsx)(e.code,{children:"<Icon>"})," component to render the SVG icon:"]}),"\n",(0,i.jsx)(e.pre,{disabled:!0,noInline:!0,children:(0,i.jsx)(e.code,{className:"language-jsx",children:'<Icon icon="icon1" color="blue:50" />\n'})}),"\n",(0,i.jsxs)(e.h3,{id:"search-icons",children:["Search icons",(0,i.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#search-icons",children:(0,i.jsx)(e.svg,{children:(0,i.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsx)(e.pre,{noInline:!0,children:(0,i.jsx)(e.code,{className:"language-jsx",children:'const getIcons = (keyword) => tmicons.map(({ group, icons }) => {\n    const filteredIcons = icons.filter(({ iconset, name }) => (!keyword || name.indexOf(keyword) >= 0));\n    if (filteredIcons.length === 0) {\n      return null\n    }\n    return { group, icons: filteredIcons }\n  }\n);\n\nconst FlexItem = (props) => (\n  <Box {...props} />\n);\n\nconst renderIconGroup = (iconSet, keyword, showCharCode, color) => {\n  if(!iconSet) {\n    return null;\n  }\n  return (<Box key={iconSet.group.name}>\n    <FlexItem pt={iconSet.group.id !== 0 && \'2x\'}>\n      <Text fontSize={"2xl"}>{iconSet.group.name}</Text>    \n    </FlexItem>\n    {<Grid\n      gap="2x"\n      templateColumns="repeat(auto-fill, minmax(300px, 1fr));"\n      p="4x"\n      pl="6x"\n      pr="4x"\n    >\n      {iconSet.icons.map(icon => (\n        <Flex flexDirection="row" alignItems="center" pb={0} pr={0} overflow="hidden" key={icon.code}>\n          <FlexItem flex="initial" pr="2x">\n            <Icon icon={icon.name}/>\n          </FlexItem>\n          <FlexItem flex="none" pr="2x">\n            <Text fontSize={"md"} color={color}>\n              {icon.name}\n            </Text>\n          </FlexItem>\n          {showCharCode && <FlexItem flex="none" pr="1x" color={color}>\n            <Text fontSize={"md"}>\n              {`(&#x${icon.code})`}\n            </Text>\n          </FlexItem>\n          }\n          <FlexItem flex="none" pb="1x">\n            {icon.new && <Badge backgroundColor="green" badgeContent={"new"} />}\n          </FlexItem>\n        </Flex>\n      ))}\n    </Grid>}\n  </Box>)\n}\n\nfunction Example() {\n  const [keyword, setKeyword] = React.useState(\'\');\n  const [showCharCode, setShowCharCode] = React.useState(false);\n  const [colorMode] = useColorMode();\n  const color = {\n    light: \'black:secondary\',\n    dark: \'white:secondary\',\n  }[colorMode];\n\n  const onChange = (e) => {\n    const keyword = e.target.value;\n    setKeyword(keyword);\n  };\n\n  const onClearInput = (e) => {\n    const keyword = \'\';\n    setKeyword(keyword);\n  };\n\n  const onChecked = () => {\n    setShowCharCode(!showCharCode);\n  }\n\n  return (\n    <>\n      <Flex flexDirection="row" alignItems="center" position="relative">\n        <Box pl="4x">\n          <SearchInput\n            fontSize="md"\n            placeholder="Search"\n            onChange={onChange}\n            onClearInput={onClearInput}\n            width={430}\n          />\n        </Box>\n        <Box position="absolute" right="5px">\n          <Checkbox\n            size="md"\n            onChange={() => onChecked()}>\n            Display character codes\n          </Checkbox>\n        </Box>\n      </Flex>\n      <Grid\n        gap={0}\n        templateRows="1fr"\n        p="4x"\n        transition="all .3s ease-in"\n      >\n        {getIcons(keyword).map((iconSet) => renderIconGroup(iconSet, keyword, showCharCode, color))}\n      </Grid>\n    </>\n  );\n}\n\nrender(<Example />);\n'})}),"\n",(0,i.jsxs)(e.h2,{id:"props",children:["Props",(0,i.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#props",children:(0,i.jsx)(e.svg,{children:(0,i.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsxs)(e.h3,{id:"icon-1",children:["Icon",(0,i.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#icon-1",children:(0,i.jsx)(e.svg,{children:(0,i.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{align:"left",children:"Name"}),(0,i.jsx)(e.th,{align:"left",children:"Type"}),(0,i.jsx)(e.th,{align:"left",children:"Default"}),(0,i.jsx)(e.th,{align:"left",children:"Description"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{align:"left",children:"icon"}),(0,i.jsx)(e.td,{align:"left",children:"string"}),(0,i.jsx)(e.td,{align:"left"}),(0,i.jsx)(e.td,{align:"left",children:"The name of the icon."})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{align:"left",children:"spin"}),(0,i.jsx)(e.td,{align:"left",children:"boolean | string"}),(0,i.jsx)(e.td,{align:"left",children:"false"}),(0,i.jsxs)(e.td,{align:"left",children:["If ",(0,i.jsx)(e.code,{children:"true"})," or 'cw', it will rotate in the clockwise direction. If 'ccw', it will rotate in the counterclockwise direction. Otherwise, no rotation occurs."]})]})]})]})]})}e.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,c.ah)(),n.components).wrapper;return e?(0,i.jsx)(e,Object.assign({},n,{children:(0,i.jsx)(t,n)})):t(n)}},9572:function(n,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/icon",function(){return o(64337)}])}},function(n){n.O(0,[9774,2888,179],function(){return n(n.s=9572)}),_N_E=n.O()}]);