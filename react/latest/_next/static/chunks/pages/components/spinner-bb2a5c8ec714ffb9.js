(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9729],{7720:function(e,n,l){"use strict";l.r(n);var i=l(2322),r=l(5392);function t(e){var n=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"Spinner"}),"\n",(0,i.jsx)(n.p,{children:"A spinner can be used to display the loading state when the part of the page is waiting for action results."}),"\n",(0,i.jsx)(n.h2,{children:"Import"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { Spinner } from '@tonic-ui/react';\n"})}),"\n",(0,i.jsx)(n.h2,{children:"Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"<Spinner />\n"})}),"\n",(0,i.jsx)(n.h3,{children:"Sizes"}),"\n",(0,i.jsxs)(n.p,{children:["You can use the ",(0,i.jsx)(n.code,{children:"size"})," prop to change the size of the spinner. Each size has a cooresponding dimension and stroke width as shown below. If the ",(0,i.jsx)(n.code,{children:"size"})," prop is not provided, it will default to ",(0,i.jsx)(n.code,{children:"md"}),"."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{align:"left",children:"Size"}),(0,i.jsx)(n.th,{align:"left",children:"Dimension (px)"}),(0,i.jsx)(n.th,{align:"left",children:"Outer Radius (px)"}),(0,i.jsx)(n.th,{align:"left",children:"Stroke Width (px)"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"xs"}),(0,i.jsx)(n.td,{align:"left",children:"16 x 16"}),(0,i.jsx)(n.td,{align:"left",children:"8"}),(0,i.jsx)(n.td,{align:"left",children:"2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"sm"}),(0,i.jsx)(n.td,{align:"left",children:"32 x 32"}),(0,i.jsx)(n.td,{align:"left",children:"16"}),(0,i.jsx)(n.td,{align:"left",children:"2"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"md"}),(0,i.jsx)(n.td,{align:"left",children:"48 x 48"}),(0,i.jsx)(n.td,{align:"left",children:"24"}),(0,i.jsx)(n.td,{align:"left",children:"4"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"lg"}),(0,i.jsx)(n.td,{align:"left",children:"64 x 64"}),(0,i.jsx)(n.td,{align:"left",children:"32"}),(0,i.jsx)(n.td,{align:"left",children:"4"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"xl"}),(0,i.jsx)(n.td,{align:"left",children:"80 x 80"}),(0,i.jsx)(n.td,{align:"left",children:"40"}),(0,i.jsx)(n.td,{align:"left",children:"4"})]})]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'<Flex alignItems="center" columnGap="6x">\n  <Spinner size="xs" />\n  <Spinner size="sm" />\n  <Spinner size="md" />\n  <Spinner size="lg" />\n  <Spinner size="xl" />\n</Flex>\n'})}),"\n",(0,i.jsx)(n.h3,{children:"Customization"}),"\n",(0,i.jsx)(n.p,{children:"The following props are provided for customization:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"lineColor"})," - The line color of the spinner. Set ",(0,i.jsx)(n.code,{children:"lineColor"})," to ",(0,i.jsx)(n.code,{children:"none"})," or ",(0,i.jsx)(n.code,{children:"transparet"})," to remove the line."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"lineWidth"})," - The line width of the spinner."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"trackColor"})," - The track color of the spinner. Set ",(0,i.jsx)(n.code,{children:"trackColor"})," to ",(0,i.jsx)(n.code,{children:"none"})," or ",(0,i.jsx)(n.code,{children:"transparent"})," to remove the track."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"trackWidth"})," - The track width of the spinner."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'function Example() {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n  const trackColor = colorStyle.divider;\n\n  return (\n    <Flex alignItems="center" columnGap="6x">\n      <Spinner lineColor="red:50" lineColor="transparent" />\n      <Spinner lineColor="red:50" trackColor="transparent" />\n      <Spinner lineColor="red:50" lineWidth={6} trackColor={trackColor} trackWidth={6} />\n    </Flex>\n  );\n}\n'})}),"\n",(0,i.jsx)(n.h2,{children:"Props"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{align:"left",children:"Name"}),(0,i.jsx)(n.th,{align:"left",children:"Type"}),(0,i.jsx)(n.th,{align:"left",children:"Default"}),(0,i.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"size"}),(0,i.jsx)(n.td,{align:"left",children:"string"}),(0,i.jsx)(n.td,{align:"left",children:"'md'"}),(0,i.jsx)(n.td,{align:"left",children:"The size of the spinner. One of: 'xl', 'lg', 'md', 'sm', 'xs'."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"lineColor"}),(0,i.jsx)(n.td,{align:"left",children:"string"}),(0,i.jsx)(n.td,{align:"left",children:"'blue:60'"}),(0,i.jsx)(n.td,{align:"left",children:"The line color of the spinner."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"lineWidth"}),(0,i.jsx)(n.td,{align:"left",children:"number"}),(0,i.jsx)(n.td,{align:"left"}),(0,i.jsx)(n.td,{align:"left",children:"The line tickness of the spinner."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"trackColor"}),(0,i.jsx)(n.td,{align:"left",children:"string"}),(0,i.jsxs)(n.td,{align:"left",children:["'rgba(255, 255, 255, .12)' ",(0,i.jsx)(n.code,{children:"dark"}),(0,i.jsx)("br",{}),"'rgba(0, 0, 0, .12)' ",(0,i.jsx)(n.code,{children:"light"})]}),(0,i.jsx)(n.td,{align:"left",children:"The track color of the spinner."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"trackWidth"}),(0,i.jsx)(n.td,{align:"left",children:"number"}),(0,i.jsx)(n.td,{align:"left"}),(0,i.jsx)(n.td,{align:"left",children:"The track tickness of the spinner."})]})]})]})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.ah)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(t,e)})):t(e)}},1319:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/spinner",function(){return l(7720)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=1319)}),_N_E=e.O()}]);