(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4804],{23259:function(n,o,r){"use strict";r.r(o),r.d(o,{default:function(){return MDXContent}}),r(2784);var e=r(30876),t=["components"];function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}return n}).apply(this,arguments)}var c={};function MDXContent(n){var o=n.components,r=function(n,o){if(null==n)return{};var r,e,t=function(n,o){if(null==n)return{};var r,e,t={},c=Object.keys(n);for(e=0;e<c.length;e++)r=c[e],o.indexOf(r)>=0||(t[r]=n[r]);return t}(n,o);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(e=0;e<c.length;e++)r=c[e],!(o.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}(n,t);return(0,e.kt)("wrapper",_extends({},c,r,{components:o,mdxType:"MDXLayout"}),(0,e.kt)("h1",null,"IconButton"),(0,e.kt)("p",null,(0,e.kt)("inlineCode",{parentName:"p"},"IconButton")," is a button that contains an icon. It is typically used to create a button that only takes up the space needed for an icon and has notext."),(0,e.kt)("p",null,"This component is currently not available in Tonic UI, however, you can write your own one using the example below."),(0,e.kt)("h2",null,"Usage"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},"const IconButton = React.forwardRef((props, ref) => {\n  const [colorMode] = useColorMode();\n  const { colors } = useTheme();\n  const color = {\n    dark: 'white:secondary',\n    light: 'black:secondary',\n  }[colorMode];\n  const hoverColor = {\n    dark: 'white:primary',\n    light: 'black:primary',\n  }[colorMode];\n  const activeColor = color;\n  const focusColor = color;\n  const focusHoverColor = hoverColor;\n  const focusActiveColor = activeColor;\n  const focusBorderColor = colors['blue:60'];\n\n  return (\n    <ButtonBase\n      ref={ref}\n      border={1}\n      borderColor=\"transparent\"\n      color={color}\n      transition=\"all .2s\"\n      lineHeight={1}\n      px=\"2x\"\n      py=\"2x\"\n      _hover={{\n        color: hoverColor,\n      }}\n      _active={{\n        color: activeColor,\n      }}\n      _focus={{\n        borderColor: focusBorderColor,\n        boxShadow: `inset 0 0 0 1px ${focusBorderColor}`,\n        color: focusColor,\n      }}\n      _focusHover={{\n        color: focusHoverColor,\n      }}\n      _focusActive={{\n        borderColor: focusBorderColor,\n        boxShadow: `inset 0 0 0 1px ${focusBorderColor}`,\n        color: focusActiveColor,\n      }}\n      {...props}\n    />\n  );\n});\n\nfunction Example() {\n  return (\n    <IconButton>\n      <Icon icon=\"close\" />\n    </IconButton>\n  );\n}\n\nrender(<Example />);\n")))}MDXContent.isMDXComponent=!0},30496:function(n,o,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/iconbutton",function(){return r(23259)}])}},function(n){n.O(0,[9774,2888,179],function(){return n(n.s=30496)}),_N_E=n.O()}]);