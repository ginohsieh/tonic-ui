(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1411],{71593:function(e,n,l){"use strict";l.r(n);var t=l(52322),a=l(45392);function r(e){var n=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",h3:"h3",p:"p",ul:"ul",li:"li",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:"SearchInput"}),"\n",(0,t.jsx)(n.h2,{children:"Import"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { SearchInput } from '@tonic-ui/react';\n"})}),"\n",(0,t.jsx)(n.h2,{children:"Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'<Stack direction="column" spacing="4x">\n  <SearchInput\n    placeholder="Search"\n  />\n  <SearchInput\n    placeholder="Search"\n    defaultValue="Regular"\n  />\n  <SearchInput\n    placeholder="Search"\n    defaultValue="Read Only"\n    readOnly\n  />\n  <SearchInput\n    placeholder="Search"\n    defaultValue="Disabled"\n    disabled\n  />\n  <SearchInput\n    placeholder="Search"\n    defaultValue="Loading"\n    isLoading\n  />\n  <SearchInput\n    placeholder="Search"\n    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium ante erat, vitae sodales mi varius quis. Etiam vestibulum lorem vel urna tempor, eu fermentum odio aliquam. Aliquam consequat urna vitae ipsum pulvinar, in blandit purus eleifend."\n    inputProps={{\n      textOverflow: \'ellipsis\',\n    }}\n  />\n</Stack>\n'})}),"\n",(0,t.jsx)(n.h3,{children:"Keyword search"}),"\n",(0,t.jsx)(n.p,{children:"This example shows how to create a keyword search component with the following features:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Automatically adjust the width of an input element"}),"\n",(0,t.jsx)(n.li,{children:"Handle focus and blur events"}),"\n",(0,t.jsxs)(n.li,{children:["Trigger search when pressed ",(0,t.jsx)(n.code,{children:"Enter"})," key"]}),"\n",(0,t.jsx)(n.li,{children:"Display a loading indicator that recognizes the loading state"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"function Example() {\n  const ref = React.useRef();\n  const [placeholder, setPlaceholder] = React.useState('Search');\n  const [inputWidth, setInputWidth] = React.useState(180);\n  const [keyword, setKeyword] = React.useState('');\n  const [isLoading, setIsLoading] = React.useState(false);\n  const searchKeyword = (keyword) => {\n    setIsLoading(true);\n    setTimeout(() => {\n      setIsLoading(false);\n    }, 3000);\n  };\n  const onChange = (e) => {\n    const keyword = e.target.value;\n    setKeyword(keyword);\n  };\n  const onClearInput = (e) => {\n    setKeyword('');\n  };\n  const onKeyPress = (e) => {\n    if (e.key === 'Enter') {\n      const keyword = e.target.value;\n      if (!!keyword) {\n        searchKeyword(keyword);\n      }\n    }\n  };\n  const handleClickReset = (e) => {\n    setKeyword('');\n    if (isLoading) {\n      setIsLoading(false);\n    }\n  };\n\n  return (\n    <Flex alignItems=\"center\" columnGap=\"4x\">\n      <SearchInput\n        ref={ref}\n        placeholder={placeholder}\n        value={keyword}\n        isLoading={isLoading}\n        readOnly={isLoading}\n        onChange={onChange}\n        onClearInput={onClearInput}\n        onFocus={() => {\n          setPlaceholder('Company name, endpoint name');\n          setInputWidth(360);\n\n          requestAnimationFrame(() => {\n            ref.current.select();\n          });\n        }}\n        onBlur={() => {\n          setPlaceholder('Search');\n          // Shrink width when the value is empty\n          setInputWidth(!!keyword ? 360 : 180);\n        }}\n        onKeyPress={onKeyPress}\n        width={inputWidth}\n        inputProps={{\n          textOverflow: 'ellipsis',\n        }}\n      />\n      <Button\n        disabled={!keyword}\n        onClick={handleClickReset}\n      >\n        Reset\n      </Button>\n    </Flex>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h3,{children:"Sizes"}),"\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"size"})," prop to change the size of the ",(0,t.jsx)(n.code,{children:"SearchInput"}),". You can set the value to ",(0,t.jsx)(n.code,{children:"sm"}),", ",(0,t.jsx)(n.code,{children:"md"}),", or ",(0,t.jsx)(n.code,{children:"lg"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'<Stack direction="column" spacing="4x">\n  <SearchInput size="sm" placeholder="Small size (24px)" />\n  <SearchInput size="md" placeholder="Default size (32px)" />\n  <SearchInput size="lg" placeholder="Large size (40px)" />\n</Stack>\n'})}),"\n",(0,t.jsx)(n.h3,{children:"Variants"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"SearchInput"})," component comes in 3 variants: ",(0,t.jsx)(n.code,{children:"outline"}),", ",(0,t.jsx)(n.code,{children:"filled"}),", and ",(0,t.jsx)(n.code,{children:"unstyled"}),". Pass the ",(0,t.jsx)(n.code,{children:"variant"})," prop and set it to either of these values."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'<Stack direction="column" spacing="4x">\n  <SearchInput variant="outline" placeholder="Search" />\n  <SearchInput variant="filled" placeholder="Search" />\n  <SearchInput variant="unstyled" placeholder="Search" height="8x" />\n</Stack>\n'})}),"\n",(0,t.jsx)(n.h3,{children:"Attributes"}),"\n",(0,t.jsxs)(n.p,{children:["Standard input attributes are supported, e.g., ",(0,t.jsx)(n.code,{children:"disabled"}),", ",(0,t.jsx)(n.code,{children:"readOnly"}),", ",(0,t.jsx)(n.code,{children:"required"}),", etc."]}),"\n",(0,t.jsx)(n.h4,{children:(0,t.jsx)(n.code,{children:"disabled"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'<Stack directin="column" spacing="4x">\n  <SearchInput disabled placeholder="Placeholder text" />\n  <SearchInput disabled placeholder="Placeholder text" defaultValue="Disabled input" />\n</Stack>\n'})}),"\n",(0,t.jsx)(n.h4,{children:(0,t.jsx)(n.code,{children:"readOnly"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'<Stack directin="column" spacing="4x">\n  <SearchInput readOnly placeholder="Placeholder text" />\n  <SearchInput readOnly placeholder="Placeholder text" defaultValue="Read-only input" />\n</Stack>\n'})}),"\n",(0,t.jsx)(n.h4,{children:(0,t.jsx)(n.code,{children:"required"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'<SearchInput required placeholder="Placeholder text" />\n'})}),"\n",(0,t.jsx)(n.h2,{children:"Props"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{align:"left",children:"Name"}),(0,t.jsx)(n.th,{align:"left",children:"Type"}),(0,t.jsx)(n.th,{align:"left",children:"Default"}),(0,t.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"left",children:"isLoading"}),(0,t.jsx)(n.td,{align:"left",children:"boolean"}),(0,t.jsx)(n.td,{align:"left"}),(0,t.jsxs)(n.td,{align:"left",children:["If ",(0,t.jsx)(n.code,{children:"true"}),", then display the loading spinner."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"left",children:"onChange"}),(0,t.jsx)(n.td,{align:"left",children:"function"}),(0,t.jsx)(n.td,{align:"left"}),(0,t.jsx)(n.td,{align:"left",children:"A callback called when the value is changed."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"left",children:"onClearInput"}),(0,t.jsx)(n.td,{align:"left",children:"function"}),(0,t.jsx)(n.td,{align:"left"}),(0,t.jsx)(n.td,{align:"left",children:"A callback called when the clear button is clicked."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"left",children:"size"}),(0,t.jsx)(n.td,{align:"left",children:"string"}),(0,t.jsx)(n.td,{align:"left",children:"'md'"}),(0,t.jsxs)(n.td,{align:"left",children:["The visual size of the ",(0,t.jsx)(n.code,{children:"input"})," element. One of: 'sm', 'md', 'lg'"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"left",children:"variant"}),(0,t.jsx)(n.td,{align:"left",children:"string"}),(0,t.jsx)(n.td,{align:"left",children:"'outline'"}),(0,t.jsx)(n.td,{align:"left",children:"The variant of the input style to use. One of: 'outline', 'filled', 'unstyled'"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"left",children:"disabled"}),(0,t.jsx)(n.td,{align:"left",children:"boolean"}),(0,t.jsx)(n.td,{align:"left"}),(0,t.jsxs)(n.td,{align:"left",children:["If ",(0,t.jsx)(n.code,{children:"true"}),", the user cannot interact with the control."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{align:"left",children:"readOnly"}),(0,t.jsx)(n.td,{align:"left",children:"boolean"}),(0,t.jsx)(n.td,{align:"left"}),(0,t.jsxs)(n.td,{align:"left",children:["If ",(0,t.jsx)(n.code,{children:"true"}),", prevents the value of the input from being edited."]})]})]})]})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,a.ah)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(r,e)})):r(e)}},97122:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/searchinput",function(){return l(71593)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=97122)}),_N_E=e.O()}]);