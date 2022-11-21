(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[285],{9268:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});n(2784);var a=n(876),l=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var r={};function p(e){var t=e.components,n=i(e,l);return(0,a.kt)("wrapper",o({},r,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,"Select"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Select")," component is used for collecting user provided information from a list of options."),(0,a.kt)("h2",null,"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  Select,\n  Option,\n  OptionGroup,\n} from '@tonic-ui/react';\n")),(0,a.kt)("h2",null,"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<>\n  <TextLabel mb="1x">Label:</TextLabel>\n  <Select>\n    <Option value="">Choose an option</Option>\n    <OptionGroup label="Category 1">\n      <Option value={1}>Option 1</Option>\n      <Option value={2}>Option 2</Option>\n    </OptionGroup>\n    <OptionGroup label="Category 2">\n      <Option value={3}>Option 3</Option>\n      <Option value={4}>Option 4</Option>\n    </OptionGroup>\n  </Select>\n</>\n')),(0,a.kt)("h3",null,"Variants"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Select")," component comes in 3 variants: ",(0,a.kt)("inlineCode",{parentName:"p"},"outline"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"filled"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"unstyled"),". Pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"variant")," prop and set it to either of these values."),(0,a.kt)("h4",null,(0,a.kt)("inlineCode",{parentName:"h4"},"outline")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Select variant="outline">\n  <Option value="">Choose an option</Option>\n  <Option value="outline">Outline</Option>\n</Select>\n')),(0,a.kt)("h4",null,(0,a.kt)("inlineCode",{parentName:"h4"},"filled")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Select variant="filled">\n  <Option value="">Choose an option</Option>\n  <Option value="filled">Filled</Option>\n</Select>\n')),(0,a.kt)("h4",null,(0,a.kt)("inlineCode",{parentName:"h4"},"unstyled")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Select variant="unstyled">\n  <Option value="">Choose an option</Option>\n  <Option value="unstyled">Unstyled</Option>\n</Select>\n')),(0,a.kt)("h3",null,"Attributes"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<select>")," element has some unique attributes you can use to control it, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"multiple")," to specify whether multiple options can be selected, and ",(0,a.kt)("inlineCode",{parentName:"p"},"size")," to specify how many options should be shown at once. It also accepts most of the general form input attributes such as ",(0,a.kt)("inlineCode",{parentName:"p"},"disabled"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"required"),", etc."),(0,a.kt)("h4",null,"Multiple options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"noInline",noInline:!0},'const FlexOption = ({ style, ...props }) => (\n  <Flex\n    as="option"\n    alignItems="center"\n    height="8x"\n    px="3x"\n    {...props}\n  />\n);\n\nfunction Example() {\n  return (\n    <Select multiple size="4">\n      <FlexOption value={1}>Option 1</FlexOption>\n      <FlexOption value={2}>Option 2</FlexOption>\n      <FlexOption value={3}>Option 3</FlexOption>\n      <FlexOption value={4}>Option 4</FlexOption>\n      <FlexOption value={5}>Option 5</FlexOption>\n      <FlexOption value={6}>Option 6</FlexOption>\n    </Select>\n  );\n}\n\nrender(<Example />);\n')),(0,a.kt)("h4",null,(0,a.kt)("inlineCode",{parentName:"h4"},"disabled")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Select disabled>\n  <Option value="">Choose an option</Option>\n</Select>\n')),(0,a.kt)("h4",null,(0,a.kt)("inlineCode",{parentName:"h4"},"required")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Select required>\n  <Option value="">Choose an option</Option>\n  <Option value="dog">Dog</Option>\n  <Option value="cat">Cat</Option>\n</Select>\n')),(0,a.kt)("h2",null,"Props"),(0,a.kt)("h3",null,"Select"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"disabled"),(0,a.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"If ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),", the user cannot interact with the control.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"error"),(0,a.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"},"If ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),", the select will display an error state.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"variant"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"'outline'"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The variant of the select style to use. One of: 'outline', 'filled', 'unstyled'")))),(0,a.kt)("h3",null,"Option / OptionGroup"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"children"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ReactNode"),(0,a.kt)("td",{parentName:"tr",align:"left"}),(0,a.kt)("td",{parentName:"tr",align:"left"})))))}p.isMDXComponent=!0},3049:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/select",function(){return n(9268)}])}},function(e){e.O(0,[9774,2888,179],(function(){return t=3049,e(e.s=t);var t}));var t=e.O();_N_E=t}]);