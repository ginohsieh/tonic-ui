(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1581],{58980:function(n,e,t){"use strict";var o=t(12215),r=t(81292),a=(t(2784),t(10765)),l=t(82767),c=t(28165);e.Z=function(n){var e,t=n.theme,s=(0,r.useTheme)(),u=(0,r.useColorMode)(),i=(0,o.Z)(u,1)[0],p=(0,r.useColorStyle)({colorMode:i}),d=null!==(e=(0,o.Z)(p,1)[0][t])&&void 0!==e?e:s[t];if(!d)return"Theme field not found";"space"!==t&&"sizes"!==t||(d=Object.keys(d).filter((function(n){return!n.toString().match(/[qh]$/)})).reduce((function(n,e){return n[e]=d[e],n}),{}));return(0,c.tZ)(r.Box,{mb:"6x"},(0,c.tZ)(a.Z,null,"const ".concat(t," = ").concat((0,l.Z)(d,!1))))}},82767:function(n,e){"use strict";e.Z=function(n){return JSON.stringify(n,null,2).replace(/"/g,"'").replace(/'(\d+|[a-z]+)':/g,"$1:")}},8538:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return u}});var o=t(7896),r=t(59740),a=(t(2784),t(30876)),l=(t(81292),t(58980)),c=["components"],s={};function u(n){var e=n.components,t=(0,r.Z)(n,c);return(0,a.kt)("wrapper",(0,o.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"Shadows"),(0,a.kt)(l.Z,{theme:"shadows",mdxType:"ThemeParser"}),(0,a.kt)("h2",null,"Color Style"),(0,a.kt)("h3",null,"Dark Mode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"shadow: {\n  thin: '0 2px 8px 0 rgba(0, 0, 0, 0.48), 0 1px 2px 0 rgba(0, 0, 0, 0.16)',\n  medium: '0 4px 16px 0 rgba(0, 0, 0, 0.48), 0 2px 4px 0 rgba(0, 0, 0, 0.16)',\n  thick: '0 8px 32px 0 rgba(0, 0, 0, 0.48), 0 4px 8px 0 rgba(0, 0, 0, 0.16)',\n}\n")),(0,a.kt)("h3",null,"Light Mode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"shadow: {\n  thin: '0 2px 8px 0 rgba(0, 0, 0, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.08)',\n  medium: '0 4px 16px 0 rgba(0, 0, 0, 0.16), 0 2px 4px 0 rgba(0, 0, 0, 0.08)',\n  thick: '0 8px 32px 0 rgba(0, 0, 0, 0.16), 0 4px 8px 0 rgba(0, 0, 0, 0.08)',\n}\n")),(0,a.kt)("h2",null,"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},'function Example() {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n  const backgroundColor = {\n    dark: \'gray:80\',\n    light: \'white\',\n  }[colorMode];\n  const color = colorStyle.text.primary;\n  const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);\n\n  return (\n    <Box backgroundColor={backgroundColor} m="-4x" p="8x">\n      <Stack\n        direction="row"\n        spacing="6x"\n      >\n        {[\'thin\', \'medium\', \'thick\'].map(key => (\n          <Flex\n            key={key}\n            width={256}\n            height={128}\n            backgroundColor={backgroundColor}\n            color={color}\n            boxShadow={colorStyle.shadow[key]}\n            alignItems="center"\n            justifyContent="center"\n          >\n            <Text fontSize="md" lineHeight="md">\n              {capitalizeFirstLetter(key)}\n            </Text>\n          </Flex>\n        ))}\n      </Stack>\n    </Box>\n  );\n}\n\nrender(<Example />);\n')))}u.isMDXComponent=!0},40305:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/system/shadows",function(){return t(8538)}])}},function(n){n.O(0,[9774,2888,179],(function(){return e=40305,n(n.s=e);var e}));var e=n.O();_N_E=e}]);