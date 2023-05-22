(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5836],{75073:function(e,r,o){"use strict";var n=o(98922),t=o(2784),d=o(64899),l=o(82650);function i(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var o,n,t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var d=[],l=!0,i=!1;try{for(t=t.call(e);!(l=(o=t.next()).done)&&(d.push(o.value),!r||d.length!==r);l=!0);}catch(e){i=!0,n=e}finally{try{l||null==t.return||t.return()}finally{if(i)throw n}}return d}}(e,r)||function(e,r){if(e){if("string"==typeof e)return s(e,r);var o=Object.prototype.toString.call(e).slice(8,-1);if("Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return s(e,r)}}(e,r)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,r){(null==r||r>e.length)&&(r=e.length);for(var o=0,n=Array(r);o<r;o++)n[o]=e[o];return n}r.Z=function(e){var r,o=e.theme,s=(0,n.useTheme)(),c=i((0,n.useColorMode)(),1)[0],a=null!==(r=i((0,n.useColorStyle)({colorMode:c}),1)[0][o])&&void 0!==r?r:s[o];return a?(("space"===o||"sizes"===o)&&(a=Object.keys(a).filter(function(e){return!e.toString().match(/[qh]$/)}).reduce(function(e,r){return e[r]=a[r],e},{})),t.createElement(n.Box,{mb:"6x"},t.createElement(d.Z,null,t.createElement("div",{className:"js"},"const ".concat(o," = ").concat((0,l.Z)(a,!1)))))):"Theme field not found"}},82650:function(e,r){"use strict";r.Z=function(e){return JSON.stringify(e,null,2).replace(/"/g,"'").replace(/'(\d+|[a-z]+)':/g,"$1:")}},91325:function(e,r,o){"use strict";o.r(r);var n=o(52322),t=o(45392);o(98922);var d=o(75073);function l(e){var r=Object.assign({div:"div",h1:"h1",h2:"h2",a:"a",svg:"svg",use:"use",p:"p",pre:"pre",code:"code",h3:"h3",ul:"ul",li:"li"},(0,t.ah)(),e.components);return(0,n.jsxs)(r.div,{className:"main-content",id:"main-content",children:["\n",(0,n.jsx)(r.h1,{id:"borders",children:"Borders"}),"\n",(0,n.jsxs)(r.h2,{id:"design-tokens",children:["Design Tokens",(0,n.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#design-tokens",children:(0,n.jsx)(r.svg,{children:(0,n.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,n.jsx)(d.Z,{theme:"borders"}),"\n",(0,n.jsxs)(r.h2,{id:"examples",children:["Examples",(0,n.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#examples",children:(0,n.jsx)(r.svg,{children:(0,n.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,n.jsx)(r.p,{children:"The border shorthand property sets all the border properties in one declaration."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'/* style */\nborder="solid"\n\n/* width | style */\nborder="2px dotted"\n\n/* style | color */\nborder="outset #f33"\n\n/* width | style | color */\nborder="medium dashed green"\n\n/* Global values */\nborder="inherit"\nborder="initial"\nborder="unset"\n'})}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"border"})," property may be specified using one, two, or three of the values listed below. The order of the value does not matter. See ",(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/border",children:"border"})," in MDN for more details."]}),"\n",(0,n.jsxs)(r.p,{children:["Note: The border will be invisible if its style is not defined. This is because the style defaults to ",(0,n.jsx)(r.code,{children:"none"}),"."]}),"\n",(0,n.jsxs)(r.h3,{id:"values",children:["Values",(0,n.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#values",children:(0,n.jsx)(r.svg,{children:(0,n.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"<border-color>"}),"\nSets the color of the border. Defaults to ",(0,n.jsx)(r.code,{children:"currentcolor"})," if absent."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"<border-style>"}),"\nSets the style of the border. Defaults to ",(0,n.jsx)(r.code,{children:"none"})," if absent."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"<border-width>"}),"\nSets the thickness of the border. Defaults to ",(0,n.jsx)(r.code,{children:"medium"})," if absent."]}),"\n",(0,n.jsxs)(r.h3,{id:"nonnegative-length",children:["Nonnegative length",(0,n.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#nonnegative-length",children:(0,n.jsx)(r.svg,{children:(0,n.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,n.jsxs)(r.p,{children:["If the border is a numeric value defined in the theme, the ",(0,n.jsx)(r.code,{children:"solid"})," border style will be applied as a shorthand for the ",(0,n.jsx)(r.code,{children:"borderWidth"})," and ",(0,n.jsx)(r.code,{children:"borderStyle"})," properties."]}),"\n",(0,n.jsx)(r.pre,{noInline:!0,children:(0,n.jsx)(r.code,{className:"language-jsx",children:'const Block = (props) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n\n  return (\n    <Flex\n      px="4x"\n      py="3x"\n      alignItems="flex-start"\n      justifyContent="center"\n      flexDirection="column"\n      backgroundColor={colorStyle.background.secondary}\n      {...props}\n    />\n  );\n};\n\nfunction Example() {\n  const theme = useTheme();\n  const [colorMode] = useColorMode();\n  const borderColor = {\n    dark: \'gray:60\',\n    light: \'gray:30\',\n  }[colorMode];\n  const borderWidths = [1, 2, 3, 4, 5];\n  const [borderWidth, setBorderWidth] = React.useState(borderWidths[0]);\n  const borderValue = theme.borders[borderWidth] || borderWidth;\n  const borderColorValue = theme.colors[borderColor] || borderColor;\n\n  return (\n    <>\n      <Flex alignItems="center" mb="5x">\n        <TextLabel>border =</TextLabel>\n        <Space width="2x" />\n        <Stack direction="row" spacing="2x">\n          {borderWidths.map((width) => (\n            <Button\n              key={width}\n              onClick={() => setBorderWidth(width)}\n              variant={width === borderWidth ? \'primary\' : \'secondary\'}\n            >\n              <Text fontFamily="mono">{width}</Text>\n            </Button>\n          ))}\n        </Stack>\n      </Flex>\n      <Grid\n        templateColumns="repeat(auto-fill, minmax(240px, 1fr))"\n        columnGap="6x"\n        rowGap="6x"\n      >\n        <Block\n          border={borderWidth}\n          borderColor={borderColor}\n        >\n          <Text>border="{borderValue}"</Text>\n          <Text>borderColor="{borderColorValue}"</Text>\n        </Block>\n        <Block\n          borderTop={borderWidth}\n          borderTopColor={borderColor}\n        >\n          <Text>borderTop="{borderValue}"</Text>\n          <Text>borderTopColor="{borderColorValue}"</Text>\n        </Block>\n        <Block\n          borderRight={borderWidth}\n          borderRightColor={borderColor}\n        >\n          <Text>borderRight="{borderValue}"</Text>\n          <Text>borderRightColor="{borderColorValue}"</Text>\n        </Block>\n        <Block\n          borderBottom={borderWidth}\n          borderBottomColor={borderColor}\n        >\n          <Text>borderBottom="{borderValue}"</Text>\n          <Text>borderBottomColor="{borderColorValue}"</Text>\n        </Block>\n        <Block\n          borderLeft={borderWidth}\n          borderLeftColor={borderColor}\n        >\n          <Text>borderLeft="{borderValue}"</Text>\n          <Text>borderLeftColor="{borderColorValue}"</Text>\n        </Block>\n      </Grid>\n    </>\n  );\n}\n\nrender(<Example />);\n'})}),"\n",(0,n.jsxs)(r.h3,{id:"keyword",children:["Keyword",(0,n.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#keyword",children:(0,n.jsx)(r.svg,{children:(0,n.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"thin"}),", ",(0,n.jsx)(r.code,{children:"medium"}),", and ",(0,n.jsx)(r.code,{children:"thick"})," are keywords that indicate the border width. You can use them in the ",(0,n.jsx)(r.code,{children:"border"})," property, but you have to set the ",(0,n.jsx)(r.code,{children:"borderStyle"})," property to ",(0,n.jsx)(r.code,{children:"solid"})," as well."]}),"\n",(0,n.jsxs)(r.p,{children:["Note: Because the specification doesn't define the exact thickness denoted by each keyword, the precise result when using one of them is implementation-specific. Nevertheless, they always follow the pattern ",(0,n.jsx)(r.code,{children:"thin ≤ medium ≤ thick"}),", and the values are constant within a single document."]}),"\n",(0,n.jsx)(r.pre,{noInline:!0,children:(0,n.jsx)(r.code,{className:"language-jsx",children:'const Block = (props) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n\n  return (\n    <Flex\n      px="4x"\n      py="3x"\n      alignItems="flex-start"\n      justifyContent="center"\n      flexDirection="column"\n      backgroundColor={colorStyle.background.secondary}\n      {...props}\n    />\n  );\n};\n\nfunction Example() {\n  const theme = useTheme();\n  const [colorMode] = useColorMode();\n  const borderColor = {\n    dark: \'gray:60\',\n    light: \'gray:30\',\n  }[colorMode];\n  const borderStyle = \'solid\';\n  const borderWidths = [\'thin\', \'medium\', \'thick\'];\n  const [borderWidth, setBorderWidth] = React.useState(borderWidths[0]);\n  const borderValue = theme.borders[borderWidth] || borderWidth;\n  const borderColorValue = theme.colors[borderColor] || borderColor;\n\n  return (\n    <>\n      <Flex alignItems="center" mb="5x">\n        <TextLabel>border =</TextLabel>\n        <Space width="2x" />\n        <Stack direction="row" spacing="2x">\n          {borderWidths.map((width) => (\n            <Button\n              key={width}\n              onClick={() => setBorderWidth(width)}\n              variant={width === borderWidth ? \'primary\' : \'secondary\'}\n            >\n              <Text fontFamily="mono">{width}</Text>\n            </Button>\n          ))}\n        </Stack>\n      </Flex>\n      <Grid\n        templateColumns="repeat(auto-fill, minmax(240px, 1fr))"\n        columnGap="6x"\n        rowGap="6x"\n      >\n        <Block\n          border={borderWidth}\n          borderColor={borderColor}\n          borderStyle={borderStyle}\n        >\n          <Text>border="{borderValue}"</Text>\n          <Text>borderColor="{borderColorValue}"</Text>\n          <Text>borderStyle="{borderStyle}"</Text>\n        </Block>\n        <Block\n          borderTop={borderWidth}\n          borderTopColor={borderColor}\n          borderTopStyle={borderStyle}\n        >\n          <Text>borderTop="{borderValue}"</Text>\n          <Text>borderTopColor="{borderColorValue}"</Text>\n          <Text>borderTopStyle="{borderStyle}"</Text>\n        </Block>\n        <Block\n          borderRight={borderWidth}\n          borderRightColor={borderColor}\n          borderRightStyle={borderStyle}\n        >\n          <Text>borderRight="{borderValue}"</Text>\n          <Text>borderRightColor="{borderColorValue}"</Text>\n          <Text>borderRightStyle="{borderStyle}"</Text>\n        </Block>\n        <Block\n          borderBottom={borderWidth}\n          borderBottomColor={borderColor}\n          borderBottomStyle={borderStyle}\n        >\n          <Text>borderBottom="{borderValue}"</Text>\n          <Text>borderBottomColor="{borderColorValue}"</Text>\n          <Text>borderBottomStyle="{borderStyle}"</Text>\n        </Block>\n        <Block\n          borderLeft={borderWidth}\n          borderLeftColor={borderColor}\n          borderLeftStyle={borderStyle}\n        >\n          <Text>borderLeft="{borderValue}"</Text>\n          <Text>borderLeftColor="{borderColorValue}"</Text>\n          <Text>borderLeftStyle="{borderStyle}"</Text>\n        </Block>\n      </Grid>\n    </>\n  );\n}\n\nrender(<Example />);\n'})}),"\n",(0,n.jsxs)(r.h2,{id:"borders-vs-outlines",children:["Borders vs. Outlines",(0,n.jsx)(r.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#borders-vs-outlines",children:(0,n.jsx)(r.svg,{children:(0,n.jsx)(r.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,n.jsxs)(r.p,{children:["Borders and ",(0,n.jsx)(r.a,{href:"./outlines",children:"outlines"})," are very similar. However, outlines differ from borders in the following ways:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Outlines never take up space, as they are drawn outside of an element's content."}),"\n",(0,n.jsx)(r.li,{children:"According to the spec, outlines don't have to be rectangular, although they usually are."}),"\n"]})]})}r.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.assign({},(0,t.ah)(),e.components).wrapper;return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},47195:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/theme/borders",function(){return o(91325)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=47195)}),_N_E=e.O()}]);