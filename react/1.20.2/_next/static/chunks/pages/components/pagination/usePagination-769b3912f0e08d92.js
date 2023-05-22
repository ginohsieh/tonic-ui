(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[496],{97974:function(e,n,t){"use strict";t.r(n);var i=t(52322),s=t(45392);function l(e){var n=Object.assign({div:"div",h1:"h1",p:"p",code:"code",h2:"h2",a:"a",svg:"svg",use:"use",pre:"pre",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.ah)(),e.components);return(0,i.jsxs)(n.div,{className:"main-content",id:"main-content",children:[(0,i.jsx)(n.h1,{id:"usepagination",children:"usePagination"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"usePagination"})," Hook is provided for advanced customization use cases. It accepts almost the same options as the ",(0,i.jsx)(n.code,{children:"Pagination"})," component except for the props related to JSX rendering. The ",(0,i.jsx)(n.code,{children:"Pagination"})," component is built on top of this Hook."]}),"\n",(0,i.jsxs)(n.h2,{id:"import",children:["Import",(0,i.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,i.jsx)(n.svg,{children:(0,i.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { usePagination } from '@tonic-ui/react';\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"usage",children:["Usage",(0,i.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usage",children:(0,i.jsx)(n.svg,{children:(0,i.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const { items } = usePagination({ count: 10 });\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"parameters",children:["Parameters",(0,i.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#parameters",children:(0,i.jsx)(n.svg,{children:(0,i.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{align:"left",children:"Name"}),(0,i.jsx)(n.th,{align:"left",children:"Type"}),(0,i.jsx)(n.th,{align:"left",children:"Default"}),(0,i.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"boundaryCount"}),(0,i.jsx)(n.td,{align:"left",children:"number"}),(0,i.jsx)(n.td,{align:"left",children:"1"}),(0,i.jsx)(n.td,{align:"left",children:"Number of always visible pages at the beginning and end."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"count"}),(0,i.jsx)(n.td,{align:"left",children:"number"}),(0,i.jsx)(n.td,{align:"left",children:"1"}),(0,i.jsx)(n.td,{align:"left",children:"Total number of pages."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"defaultPage"}),(0,i.jsx)(n.td,{align:"left",children:"number"}),(0,i.jsx)(n.td,{align:"left",children:"1"}),(0,i.jsx)(n.td,{align:"left",children:"The page selected by default when the component is uncontrolled."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"disabled"}),(0,i.jsx)(n.td,{align:"left",children:"boolean"}),(0,i.jsx)(n.td,{align:"left",children:"false"}),(0,i.jsxs)(n.td,{align:"left",children:["If ",(0,i.jsx)(n.code,{children:"true"}),", the component is disabled."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"onChange"}),(0,i.jsx)(n.td,{align:"left",children:"function"}),(0,i.jsx)(n.td,{align:"left"}),(0,i.jsxs)(n.td,{align:"left",children:["Callback fired when the page is changed. ",(0,i.jsx)("br",{}),(0,i.jsx)("br",{})," Signature: ",(0,i.jsx)("br",{})," ",(0,i.jsx)(n.code,{children:"function(event: object, page: number) => void"})," ",(0,i.jsx)("br",{}),"event: The event source of the callback. ",(0,i.jsx)("br",{}),"page: The page selected."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"page"}),(0,i.jsx)(n.td,{align:"left",children:"number"}),(0,i.jsx)(n.td,{align:"left"}),(0,i.jsx)(n.td,{align:"left",children:"The current page."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"siblingCount"}),(0,i.jsx)(n.td,{align:"left",children:"number"}),(0,i.jsx)(n.td,{align:"left",children:"1"}),(0,i.jsx)(n.td,{align:"left",children:"Number of always visible pages before and after the current page."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"slot"}),(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"{ first?: boolean, last?: boolean, previous?: boolean, next?: boolean }"})}),(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"{ first: false, last: false, previous: true, next: true }"})}),(0,i.jsx)(n.td,{align:"left",children:"Whether to render the first-page, last-page, previous-page, and next-page buttons."})]})]})]}),"\n",(0,i.jsxs)(n.h3,{id:"returns",children:["Returns",(0,i.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#returns",children:(0,i.jsx)(n.svg,{children:(0,i.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsx)(n.p,{children:"Returns an object with the pagination items."}),"\n",(0,i.jsxs)(n.h2,{id:"demos",children:["Demos",(0,i.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#demos",children:(0,i.jsx)(n.svg,{children:(0,i.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"function Example() {\n  const { items } = usePagination({\n    count: 10,\n    slot: {\n      first: true,\n      previous: true,\n      next: true,\n      last: true,\n    },\n  });\n\n  return (\n    <Box as=\"nav\">\n      <Flex alignItems=\"center\" columnGap=\"2x\">\n        {items.map(({ page, type, selected, ...item }, index) => {\n          let children = null;\n\n          if (type === 'start-ellipsis' || type === 'end-ellipsis') {\n            children = '…';\n          } else if (type === 'page') {\n            children = (\n              <Button selected={selected} {...item}>\n                {page}\n              </Button>\n            );\n          } else {\n            children = (\n              <Button {...item}>\n                {type}\n              </Button>\n            );\n          }\n\n          return (\n            <React.Fragment key={index}>\n              {children}\n            </React.Fragment>\n          );\n        })}\n      </Flex>\n    </Box>\n  );\n}\n"})})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.ah)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}},61537:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/pagination/usePagination",function(){return t(97974)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=61537)}),_N_E=e.O()}]);