(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8599],{4570:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});t(2784);var a=t(876),l=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function r(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o={};function p(e){var n=e.components,t=r(e,l);return(0,a.kt)("wrapper",i({},o,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"Responsive Styles"),(0,a.kt)("p",null,"The responsive styles rely on the ",(0,a.kt)("a",{parentName:"p",href:"../theme/breakpoints"},"breakpoints")," defined in the theme configuration. The breakpoints are used to generate the media queries that make the theme responsive."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Breakpoint"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Media Query"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"sm")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"@media screen and (min-width: 320px)"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"md")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"@media screen and (min-width: 640px)"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"lg")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"@media screen and (min-width: 1024px)"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"xl")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"@media screen and (min-width: 1280px)"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"2xl")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"@media screen and (min-width: 1680px)"))))),(0,a.kt)("p",null,"To use the responsive styles, you can use either the array or object syntax."),(0,a.kt)("h2",null,"Array Syntax"),(0,a.kt)("p",null,"Let's say you have a ",(0,a.kt)("inlineCode",{parentName:"p"},"Box")," component that looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"disabled",disabled:!0},'<Box backgroundColor="red:50" width="50%">\n  This is a box\n</Box>\n')),(0,a.kt)("p",null,"To make the ",(0,a.kt)("inlineCode",{parentName:"p"},"width")," responsive, you can use the array syntax as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"disabled",disabled:!0},'<Box backgroundColor="red:50" width={["25%","50%","75%","100%"]}>\n  This is a box\n</Box>\n')),(0,a.kt)("p",null,"Here is how to interpret the array syntax:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"On a ",(0,a.kt)("inlineCode",{parentName:"li"},"sm")," breakpoint (",(0,a.kt)("inlineCode",{parentName:"li"},"\u2265 320px"),"), the ",(0,a.kt)("inlineCode",{parentName:"li"},"width")," will be ",(0,a.kt)("inlineCode",{parentName:"li"},"25%")),(0,a.kt)("li",{parentName:"ul"},"On a ",(0,a.kt)("inlineCode",{parentName:"li"},"md")," breakpoint (",(0,a.kt)("inlineCode",{parentName:"li"},"\u2265 640px"),"), the ",(0,a.kt)("inlineCode",{parentName:"li"},"width")," will be ",(0,a.kt)("inlineCode",{parentName:"li"},"50%")),(0,a.kt)("li",{parentName:"ul"},"On a ",(0,a.kt)("inlineCode",{parentName:"li"},"lg")," breakpoint (",(0,a.kt)("inlineCode",{parentName:"li"},"\u2265 1024px"),"), the ",(0,a.kt)("inlineCode",{parentName:"li"},"width")," will be ",(0,a.kt)("inlineCode",{parentName:"li"},"75%")),(0,a.kt)("li",{parentName:"ul"},"On a ",(0,a.kt)("inlineCode",{parentName:"li"},"xl")," breakpoint (",(0,a.kt)("inlineCode",{parentName:"li"},"\u2265 1280px"),"), the ",(0,a.kt)("inlineCode",{parentName:"li"},"width")," will be ",(0,a.kt)("inlineCode",{parentName:"li"},"100%"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"To skip certain breakpoints, you can pass ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," to any position in the array.")),(0,a.kt)("h2",null,"Object Syntax (Recommended)"),(0,a.kt)("p",null,"You can also use the object syntax to define responsive styles. It's also the recommended syntax to use the responsive styles."),(0,a.kt)("p",null,"Let's say you have a ",(0,a.kt)("inlineCode",{parentName:"p"},"Text")," component that looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"disabled",disabled:!0},"<Text fontSize={32}>\n  This is a text\n</Text>\n")),(0,a.kt)("p",null,"To make the ",(0,a.kt)("inlineCode",{parentName:"p"},"fontSize")," responsive, you can use the object syntax as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"disabled",disabled:!0},"<Text fontSize={{ _: 24, md: 32, lg: 40, xl: 48 }}>\n  This is a text\n</Text>\n")),(0,a.kt)("p",null,"Here is how to interpret the object syntax:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"On a ",(0,a.kt)("inlineCode",{parentName:"li"},"sm")," breakpoint (",(0,a.kt)("inlineCode",{parentName:"li"},"\u2265 320px"),"), the ",(0,a.kt)("inlineCode",{parentName:"li"},"fontSize")," will be ",(0,a.kt)("inlineCode",{parentName:"li"},"24px")),(0,a.kt)("li",{parentName:"ul"},"On a ",(0,a.kt)("inlineCode",{parentName:"li"},"md")," breakpoint (",(0,a.kt)("inlineCode",{parentName:"li"},"\u2265 640px"),"), the ",(0,a.kt)("inlineCode",{parentName:"li"},"fontSize")," will be ",(0,a.kt)("inlineCode",{parentName:"li"},"32px")),(0,a.kt)("li",{parentName:"ul"},"On a ",(0,a.kt)("inlineCode",{parentName:"li"},"lg")," breakpoint (",(0,a.kt)("inlineCode",{parentName:"li"},"\u2265 1024px"),"), the ",(0,a.kt)("inlineCode",{parentName:"li"},"fontSize")," will be ",(0,a.kt)("inlineCode",{parentName:"li"},"40px")),(0,a.kt)("li",{parentName:"ul"},"On a ",(0,a.kt)("inlineCode",{parentName:"li"},"xl")," breakpoint (",(0,a.kt)("inlineCode",{parentName:"li"},"\u2265 1280px"),"), the ",(0,a.kt)("inlineCode",{parentName:"li"},"fontSize")," will be ",(0,a.kt)("inlineCode",{parentName:"li"},"48px"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"_")," key to define a default value for all breakpoints.")),(0,a.kt)("h2",null,"Under the Hood"),(0,a.kt)("p",null,"Given the following example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"disabled",disabled:!0},"<Box width={{ _: '100%', sm: '50%', md: '25%' }}>\n  This is a box\n</Box>\n")),(0,a.kt)("p",null,"It will generate the following CSS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".Box {\n  width: 100%;\n}\n\n@media screen and (min-width: 320px) {\n  .Box {\n    width: 50%;\n  }\n}\n\n@media screen and (min-width: 640px) {\n  .Box {\n    width: 25%;\n  }\n}\n")),(0,a.kt)("h2",null,"Demo"),(0,a.kt)("p",null,"Here is an actual example of the responsive styles in action:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},"const Ellipsis = (props) => (\n  <Box whiteSpace=\"nowrap\" overflow=\"hidden\" textOverflow=\"ellipsis\" {...props} />\n);\n\nconst Light = ({ on, ...rest }) => (\n  <Box\n    display=\"inline-block\"\n    borderRadius=\"50%\"\n    bg={on ? '#00ff00' : '#666'}\n    boxShadow={on ? '0 0 1px 2px rgba(0, 255, 0, .8)' : 'none'}\n    height={16}\n    width={16}\n    verticalAlign=\"middle\"\n    {...rest}\n  />\n);\n\nfunction Example() {\n  const laneColor = {\n    1: '#389efc',\n    2: '#ff7332',\n    3: '#00b449',\n    4: '#fdf133',\n    5: '#fc74cf',\n  };\n\n  const players = [\n    { id: '240', lane: 1, name: 'Taiwan Leave System', laps: 2, raceTime: '01:20.592', gates: [1, 1, 1] },\n    { id: '339', lane: 2, name: '404 Not Found', laps: 2, raceTime: '01:24.036', gates: [1, 1, 1] },\n    { id: '003', lane: 3, name: 'ShowMeThe$$', laps: 2, raceTime: '01:37.890', gates: [1, 1, 0] },\n    { id: '207', lane: 4, name: 'Dragon Rider', laps: 1, raceTime: '00:49.211', gates: [1, 1, 0] },\n    { id: '456', lane: 5, name: 'BumbleBee', laps: 0, raceTime: '00:00.000', gates: [1, 1, 1] },\n  ];\n\n  return (\n    <Box position=\"relative\" mx=\"auto\">\n      {players.map((player, index) => (\n        <Box\n          key={player.id}\n          display=\"flex\"\n          minWidth={360}\n        >\n          <Box\n            flexBasis=\"auto\"\n            flexGrow={0}\n            minWidth=\"2x\"\n            width=\"2x\"\n            bg={laneColor[player.lane]}\n          />\n          <Box\n            bg={index % 2 ? 'gray:100' : 'gray:80'}\n            color=\"white:primary\"\n            flexBasis={0}\n            flexGrow={1}\n            maxWidth=\"calc(100% - .5rem)\"\n            py=\"2x\"\n            px=\"6x\"\n          >\n            <Box\n              display=\"flex\"\n              alignItems=\"flex-end\"\n            >\n              <Box\n                flexBasis={0}\n                flexGrow={1}\n                maxWidth=\"100%\"\n              >\n                <Text\n                  color=\"#6fffff\"\n                  fontWeight=\"bold\"\n                  fontSize={['4xl', null, null, 48]}\n                  lineHeights={['4xl', null, null, '1.5']}\n                >\n                  {player.id}\n                </Text>\n              </Box>\n              <Box\n                flexBasis=\"auto\"\n                flexGrow={0}\n                width=\"auto\"\n              >\n                <Text\n                  fontSize={['3xl', null, null, '4xl']}\n                  lineHeight={['3xl', null, null, '4xl']}\n                >\n                  {player.laps} / {player.raceTime}\n                </Text>\n              </Box>\n            </Box>\n            <Box\n              display=\"flex\"\n              alignItems=\"center\"\n              pt=\"2x\"\n            >\n              <Box\n                flexBasis={0}\n                flexGrow={1}\n                maxWidth=\"100%\"\n                width={0}\n              >\n                <Ellipsis>\n                  <Text\n                    fontSize={['2xl', null, null, '3xl']}\n                    lineHeight={['2xl', null, null, '3xl']}\n                  >\n                    {player.name}\n                  </Text>\n                </Ellipsis>\n              </Box>\n              <Flex\n                flexBasis=\"auto\"\n                flexGrow={0}\n                width=\"auto\"\n                fontSize={['xl', null, null, '2xl']}\n                lineHeight={['xl', null, null, '2xl']}\n              >\n                <Light on={player.gates[0]} m=\"2x\" />\n                <Text pr=\"2x\">REC</Text>\n                <Light on={player.gates[1]} m=\"2x\" />\n                <Text pr=\"2x\">A</Text>\n                <Light on={player.gates[2]} m=\"2x\" />\n                <Text pr=\"2x\">B</Text>\n              </Flex>\n            </Box>\n          </Box>\n        </Box>\n      ))}\n    </Box>\n  );\n}\n\nrender(<Example />);\n")))}p.isMDXComponent=!0},2559:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styled-system/responsive-styles",function(){return t(4570)}])}},function(e){e.O(0,[9774,2888,179],(function(){return n=2559,e(e.s=n);var n}));var n=e.O();_N_E=n}]);