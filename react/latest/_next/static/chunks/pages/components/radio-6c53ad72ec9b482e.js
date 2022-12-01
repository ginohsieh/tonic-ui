(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6565],{3634:function(e,n,i){"use strict";i.r(n);var l=i(2322),t=i(5392);function d(e){var n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,t.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{children:"Radio"}),"\n",(0,l.jsx)(n.p,{children:"Radio buttons are used when only one choice may be selected in a series of options."}),"\n",(0,l.jsx)(n.h2,{children:"Import"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"import { Radio } from '@tonic-ui/react';\n"})}),"\n",(0,l.jsx)(n.h3,{children:"Usage"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",children:"<Radio>Radio button</Radio>\n"})}),"\n",(0,l.jsx)(n.h3,{children:"Colors"}),"\n",(0,l.jsxs)(n.p,{children:["Use the ",(0,l.jsx)(n.code,{children:"variantColor"})," prop to change the color scheme of a radio button. ",(0,l.jsx)(n.code,{children:"variantColor"})," can be any color key with key ",(0,l.jsx)(n.code,{children:"50"})," (hover) or ",(0,l.jsx)(n.code,{children:"60"})," (checked) that exist in ",(0,l.jsx)(n.code,{children:"theme.colors"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",children:'<Stack direction="row" spacing="3x">\n  <Radio variantColor="red" defaultChecked>Radio</Radio>\n  <Radio variantColor="green" defaultChecked>Radio</Radio>\n</Stack>\n'})}),"\n",(0,l.jsx)(n.h3,{children:"Sizes"}),"\n",(0,l.jsxs)(n.p,{children:["Use the ",(0,l.jsx)(n.code,{children:"size"})," prop to change the radio button size. You can set the value to ",(0,l.jsx)(n.code,{children:"sm"}),", ",(0,l.jsx)(n.code,{children:"md"}),", or ",(0,l.jsx)(n.code,{children:"lg"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",children:'<Stack direction="column" spacing="1x" shouldWrapChildren>\n  <Radio size="sm" name="1">Radio</Radio>\n  <Radio size="md" name="1">Radio</Radio>\n  <Radio size="lg" name="1">Radio</Radio>\n</Stack>\n'})}),"\n",(0,l.jsx)(n.h3,{children:"States"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-jsx",children:'<Stack direction="row" spacing="3x">\n  <Radio checked={false}>Radio</Radio>\n  <Radio defaultChecked>Radio</Radio>\n  <Radio disabled>Radio</Radio>\n  <Radio disabled defaultChecked>Radio</Radio>\n</Stack>\n'})}),"\n",(0,l.jsx)(n.h2,{children:"Props"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{align:"left",children:"Name"}),(0,l.jsx)(n.th,{align:"left",children:"Type"}),(0,l.jsx)(n.th,{align:"left",children:"Default"}),(0,l.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"id"}),(0,l.jsx)(n.td,{align:"left",children:"string"}),(0,l.jsx)(n.td,{align:"left"}),(0,l.jsx)(n.td,{align:"left",children:"The id attribute of the input field."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"name"}),(0,l.jsx)(n.td,{align:"left",children:"string"}),(0,l.jsx)(n.td,{align:"left"}),(0,l.jsx)(n.td,{align:"left",children:"The name of a input field in a series of radio buttons. The name is useful for form submissions."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"value"}),(0,l.jsx)(n.td,{align:"left",children:"string | number"}),(0,l.jsx)(n.td,{align:"left"}),(0,l.jsx)(n.td,{align:"left",children:"The value for radio button input. This is the return value for form submissions."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"variantColor"}),(0,l.jsx)(n.td,{align:"left",children:"string"}),(0,l.jsx)(n.td,{align:"left"}),(0,l.jsx)(n.td,{align:"left",children:"The color of the radio button when it is selected. The color should be one of the color keys in the theme (for example, 'green', 'red')"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"size"}),(0,l.jsx)(n.td,{align:"left",children:"string"}),(0,l.jsx)(n.td,{align:"left",children:"'md'"}),(0,l.jsx)(n.td,{align:"left",children:"The size (width and height) of a radio button. Acceptable values: 'sm', 'md', 'lg'"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"defaultChecked"}),(0,l.jsx)(n.td,{align:"left",children:"boolean"}),(0,l.jsx)(n.td,{align:"left"}),(0,l.jsxs)(n.td,{align:"left",children:["If ",(0,l.jsx)(n.code,{children:"true"}),", the radio button will be selected initially."]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"checked"}),(0,l.jsx)(n.td,{align:"left",children:"boolean"}),(0,l.jsx)(n.td,{align:"left"}),(0,l.jsxs)(n.td,{align:"left",children:["If ",(0,l.jsx)(n.code,{children:"true"}),", the radio button will be selected. Use ",(0,l.jsx)(n.code,{children:"onChange"})," to update the state for a controlled component."]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"disabled"}),(0,l.jsx)(n.td,{align:"left",children:"boolean"}),(0,l.jsx)(n.td,{align:"left"}),(0,l.jsxs)(n.td,{align:"left",children:["If ",(0,l.jsx)(n.code,{children:"true"}),", the radio button will be disabled. This sets ",(0,l.jsx)(n.code,{children:"aria-disabled=true"})," and you can set this state by using the ",(0,l.jsx)(n.code,{children:"_disabled"})," prop."]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"children"}),(0,l.jsx)(n.td,{align:"left",children:"ReactNode"}),(0,l.jsx)(n.td,{align:"left"}),(0,l.jsx)(n.td,{align:"left",children:"The children of the radio button."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"onChange"}),(0,l.jsx)(n.td,{align:"left",children:"function"}),(0,l.jsx)(n.td,{align:"left"}),(0,l.jsx)(n.td,{align:"left",children:"A callback called when the state is changed."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"onBlur"}),(0,l.jsx)(n.td,{align:"left",children:"function"}),(0,l.jsx)(n.td,{align:"left"}),(0,l.jsx)(n.td,{align:"left",children:"A callback called when the radio button loses focus."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:"onFocus"}),(0,l.jsx)(n.td,{align:"left",children:"function"}),(0,l.jsx)(n.td,{align:"left"}),(0,l.jsx)(n.td,{align:"left",children:"A callback called when the radio button receives focus."})]})]})]})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.ah)(),e.components).wrapper;return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(d,e)})):d(e)}},8527:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/radio",function(){return i(3634)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=8527)}),_N_E=e.O()}]);