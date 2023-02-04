(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1411],{5213:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});n(2784);var a=n(876),r=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o={};function p(e){var t=e.components,n=i(e,r);return(0,a.kt)("wrapper",l({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"SearchInput"),(0,a.kt)("h2",null,"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { SearchInput } from '@tonic-ui/react';\n")),(0,a.kt)("h2",null,"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="column" spacing="4x">\n  <SearchInput\n    placeholder="Search"\n  />\n  <SearchInput\n    placeholder="Search"\n    defaultValue="Regular"\n  />\n  <SearchInput\n    placeholder="Search"\n    defaultValue="Read Only"\n    readOnly\n  />\n  <SearchInput\n    placeholder="Search"\n    defaultValue="Disabled"\n    disabled\n  />\n  <SearchInput\n    placeholder="Search"\n    defaultValue="Loading"\n    isLoading\n  />\n  <SearchInput\n    placeholder="Search"\n    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium ante erat, vitae sodales mi varius quis. Etiam vestibulum lorem vel urna tempor, eu fermentum odio aliquam. Aliquam consequat urna vitae ipsum pulvinar, in blandit purus eleifend."\n    inputProps={{\n      textOverflow: \'ellipsis\',\n    }}\n  />\n</Stack>\n')),(0,a.kt)("h3",null,"Keyword search"),(0,a.kt)("p",null,"This example shows how to create a keyword search component with the following features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Automatically adjust the width of an input element"),(0,a.kt)("li",{parentName:"ul"},"Handle focus and blur events"),(0,a.kt)("li",{parentName:"ul"},"Trigger search when pressed ",(0,a.kt)("inlineCode",{parentName:"li"},"Enter")," key"),(0,a.kt)("li",{parentName:"ul"},"Display a loading indicator that recognizes the loading state")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function Example() {\n  const ref = React.useRef();\n  const [placeholder, setPlaceholder] = React.useState('Search');\n  const [inputWidth, setInputWidth] = React.useState(180);\n  const [keyword, setKeyword] = React.useState('');\n  const [isLoading, setIsLoading] = React.useState(false);\n  const searchKeyword = (keyword) => {\n    setIsLoading(true);\n    setTimeout(() => {\n      setIsLoading(false);\n    }, 3000);\n  };\n  const onChange = (e) => {\n    const keyword = e.target.value;\n    setKeyword(keyword);\n  };\n  const onClearInput = (e) => {\n    const keyword = '';\n    setKeyword(keyword);\n    ref.current.focus();\n  };\n  const onKeyPress = (e) => {\n    if (e.key === 'Enter') {\n      const keyword = e.target.value;\n      if (!!keyword) {\n        searchKeyword(keyword);\n      }\n    }\n  };\n  const handleClickSearch = (e) => {\n    if (!!keyword) {\n      searchKeyword(keyword);\n    }\n  };\n\n  return (\n    <>\n      <SearchInput\n        ref={ref}\n        placeholder={placeholder}\n        value={keyword}\n        isLoading={isLoading}\n        readOnly={isLoading}\n        onChange={onChange}\n        onClearInput={onClearInput}\n        onFocus={() => {\n          setPlaceholder('Company name, endpoint name');\n          setInputWidth(360);\n          ref.current.select();\n        }}\n        onBlur={() => {\n          setPlaceholder('Search');\n\n          // Shrink width when the value is empty\n          setInputWidth(!!keyword ? 360 : 180);\n        }}\n        onKeyPress={onKeyPress}\n        width={inputWidth}\n        inputProps={{\n          textOverflow: 'ellipsis',\n        }}\n      />\n      <Box mt=\"4x\">\n        <Button\n          disabled={!keyword}\n          onClick={handleClickSearch}\n        >\n          Search\n        </Button>\n      </Box>\n    </>\n  );\n}\n")),(0,a.kt)("h3",null,"Sizes"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"size")," prop to change the size of the ",(0,a.kt)("inlineCode",{parentName:"p"},"SearchInput"),". You can set the value to ",(0,a.kt)("inlineCode",{parentName:"p"},"sm"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"md"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"lg"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="column" spacing="4x">\n  <SearchInput size="sm" placeholder="Small size (24px)" />\n  <SearchInput size="md" placeholder="Default size (32px)" />\n  <SearchInput size="lg" placeholder="Large size (40px)" />\n</Stack>\n')),(0,a.kt)("h3",null,"Variants"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"SearchInput")," component comes in 3 variants: ",(0,a.kt)("inlineCode",{parentName:"p"},"outline"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"filled"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"unstyled"),". Pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"variant")," prop and set it to either of these values."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack direction="column" spacing="4x">\n  <SearchInput variant="outline" placeholder="Search" />\n  <SearchInput variant="filled" placeholder="Search" />\n  <SearchInput variant="unstyled" placeholder="Search" height="8x" />\n</Stack>\n')),(0,a.kt)("h3",null,"Attributes"),(0,a.kt)("p",null,"Standard input attributes are supported, e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"disabled"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"readOnly"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"required"),", etc."),(0,a.kt)("h4",null,(0,a.kt)("inlineCode",{parentName:"h4"},"disabled")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack directin="column" spacing="4x">\n  <SearchInput disabled placeholder="Placeholder text" />\n  <SearchInput disabled placeholder="Placeholder text" defaultValue="Disabled input" />\n</Stack>\n')),(0,a.kt)("h4",null,(0,a.kt)("inlineCode",{parentName:"h4"},"readOnly")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack directin="column" spacing="4x">\n  <SearchInput readOnly placeholder="Placeholder text" />\n  <SearchInput readOnly placeholder="Placeholder text" defaultValue="Read-only input" />\n</Stack>\n')),(0,a.kt)("h4",null,(0,a.kt)("inlineCode",{parentName:"h4"},"required")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<SearchInput required placeholder="Placeholder text" />\n')),(0,a.kt)("h2",null,"Props"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"isLoading"),(0,a.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"If ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),", then display the loading spinner.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"onChange"),(0,a.kt)("td",{parentName:"tr",align:"left"},"function"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"A callback called when the value is changed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"onClearInput"),(0,a.kt)("td",{parentName:"tr",align:"left"},"function"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"A callback called when the clear button is clicked.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"size"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"'md'"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The visual size of the ",(0,a.kt)("inlineCode",{parentName:"td"},"input")," element. One of: 'sm', 'md', 'lg'")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"variant"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"'outline'"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The variant of the input style to use. One of: 'outline', 'filled', 'unstyled'")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"disabled"),(0,a.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"If ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),", the user cannot interact with the control.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"readOnly"),(0,a.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"If ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),", prevents the value of the input from being edited.")))))}p.isMDXComponent=!0},7122:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/searchinput",function(){return n(5213)}])}},function(e){e.O(0,[9774,2888,179],(function(){return t=7122,e(e.s=t);var t}));var t=e.O();_N_E=t}]);