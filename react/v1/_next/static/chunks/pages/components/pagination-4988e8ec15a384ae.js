(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4600],{91227:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return P}});var a=t(52322),i=t(45392),r=t(16959),o=t(28165),l=t(67569),c=t(2784);function s(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var a,i,r,o,l=[],c=!0,s=!1;try{if(r=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;c=!1}else for(;!(c=(a=r.call(t)).done)&&(l.push(a.value),l.length!==e);c=!0);}catch(n){s=!0,i=n}finally{try{if(!c&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(s)throw i}}return l}}(n,e)||function(n,e){if(n){if("string"==typeof n)return d(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if("Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return d(n,e)}}(n,e)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,a=Array(e);t<e;t++)a[t]=n[t];return a}var u=function(){var n=s((0,c.useState)(1),2),e=n[0],t=n[1],a=s((0,c.useState)(10),2),i=a[0],r=a[1],d=Math.ceil(400/i),u=function(n){t(1),r(n)},g=e>=d;return c.createElement(l.Flex,{alignItems:"center"},c.createElement(l.Text,{mr:"2x"},"Total: ",400),c.createElement(l.Divider,{orientation:"vertical",height:"6x"}),c.createElement(l.Menu,null,c.createElement(l.MenuButton,{variant:"ghost"},i," per page"),c.createElement(l.MenuList,null,c.createElement(l.MenuItem,{onClick:function(){return u(10)}},"10"),c.createElement(l.MenuItem,{onClick:function(){return u(50)}},"50"),c.createElement(l.MenuItem,{onClick:function(){return u(100)}},"100"))),c.createElement(l.Divider,{orientation:"vertical",height:"6x"}),c.createElement(l.Space,{width:"2x"}),c.createElement(l.Input,{width:32,px:0,textAlign:"center",onChange:function(n){var e=n.target.value;e<=1?t(1):e>=d?t(d):isNaN(e)||t(n.target.value)},value:e}),c.createElement(l.Space,{width:"2x"}),c.createElement(l.Text,null,"/"),c.createElement(l.Space,{width:"2x"}),c.createElement(l.Text,null,d),c.createElement(l.Space,{width:"2x"}),c.createElement(l.ButtonGroup,{variant:"secondary",css:(0,o.iv)({"> *:not(:first-of-type)":{marginLeft:-1}},"","")},c.createElement(l.Button,{width:"8x",disabled:e<=1,onClick:function(n){var a=e>1?e-1:e;a!==e&&t(a)}},c.createElement(l.Icon,{icon:"angle-left"})),c.createElement(l.Button,{width:"8x",disabled:g,onClick:function(n){var a=e<d?e+1:e;a!==e&&t(a)}},c.createElement(l.Icon,{icon:"angle-right"}))))};function g(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,a=Array(e);t<e;t++)a[t]=n[t];return a}var p=function(){var n,e=function(n){if(Array.isArray(n))return n}(n=(0,c.useState)(1))||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var a,i,r,o,l=[],c=!0,s=!1;try{for(r=(t=t.call(n)).next;!(c=(a=r.call(t)).done)&&(l.push(a.value),2!==l.length);c=!0);}catch(n){s=!0,i=n}finally{try{if(!c&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(s)throw i}}return l}}(n,2)||function(n,e){if(n){if("string"==typeof n)return g(n,2);var t=Object.prototype.toString.call(n).slice(8,-1);if("Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(n,2)}}(n,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),t=e[0],a=e[1];return c.createElement(l.Stack,{spacing:"4x"},c.createElement(l.Text,null,"Page: ",t),c.createElement(l.Pagination,{count:10,page:t,onChange:function(n,e){a(e)}}))},h=function(){return c.createElement(l.Stack,{spacing:"4x"},c.createElement(l.Pagination,{count:11,defaultPage:6}),c.createElement(l.Pagination,{count:11,defaultPage:6,boundaryCount:0}),c.createElement(l.Pagination,{count:11,defaultPage:6,siblingCount:0}),c.createElement(l.Pagination,{count:11,defaultPage:6,boundaryCount:0,siblingCount:0}),c.createElement(l.Pagination,{count:11,defaultPage:6,boundaryCount:2,siblingCount:0}),c.createElement(l.Pagination,{count:15,defaultPage:8,boundaryCount:2,siblingCount:2}))};function f(){return(f=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}var x=function(){return c.createElement(l.Pagination,{count:10,renderItem:function(n){return"start-ellipsis"===n.type||"end-ellipsis"===n.type?c.createElement(l.Text,{mx:"2x"},"..."):c.createElement(l.PaginationItem,f({slot:{previous:c.createElement(l.Icon,{icon:"chevron-left"}),next:c.createElement(l.Icon,{icon:"chevron-right"})}},n))}})},m=function(){return c.createElement(l.Stack,{spacing:"4x"},c.createElement(l.Pagination,{count:10}),c.createElement(l.Pagination,{count:10,defaultPage:5,boundaryCount:0,slot:{first:!0,last:!0}}),c.createElement(l.Pagination,{count:10,slot:{previous:!1,next:!1}}))},j=function(){return c.createElement(l.Stack,{spacing:"4x"},c.createElement(l.Pagination,{count:10}),c.createElement(l.Pagination,{count:10,defaultPage:4}),c.createElement(l.Pagination,{count:10,disabled:!0}))};function b(n){var e=Object.assign({div:"div",h1:"h1",p:"p",code:"code",h2:"h2",a:"a",svg:"svg",use:"use",pre:"pre",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,i.ah)(),n.components);return(0,a.jsxs)(e.div,{className:"main-content",id:"main-content",children:["\n","\n","\n","\n","\n","\n","\n",(0,a.jsx)(e.h1,{id:"pagination",children:"Pagination"}),"\n",(0,a.jsxs)(e.p,{children:["The ",(0,a.jsx)(e.code,{children:"Pagination"})," component enables the user to select a specific page from a range of pages."]}),"\n",(0,a.jsxs)(e.h2,{id:"import",children:["Import",(0,a.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,a.jsx)(e.svg,{children:(0,a.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"import {\n  Pagination,\n  PaginationItem,\n} from '@tonic-ui/react';\n"})}),"\n",(0,a.jsxs)(e.h2,{id:"usage",children:["Usage",(0,a.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usage",children:(0,a.jsx)(e.svg,{children:(0,a.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsxs)(e.h3,{id:"basic-pagination",children:["Basic pagination",(0,a.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#basic-pagination",children:(0,a.jsx)(e.svg,{children:(0,a.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsx)(r.Z,{component:j,file:{data:"import { Pagination, Stack } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => (\n  <Stack spacing=\"4x\">\n    <Pagination count={10} />\n    <Pagination count={10} defaultPage={4} />\n    <Pagination count={10} disabled />\n  </Stack>\n);\n\nexport default App;",path:"pages/components/pagination/index.page.mdx"},sandbox:{files:{},raw:"import { Pagination, Stack } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => (\n  <Stack spacing=\"4x\">\n    <Pagination count={10} />\n    <Pagination count={10} defaultPage={4} />\n    <Pagination count={10} disabled />\n  </Stack>\n);\n\nexport default App;",title:"Tonic UI"}}),"\n",(0,a.jsxs)(e.h3,{id:"pagination-buttons",children:["Pagination buttons",(0,a.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#pagination-buttons",children:(0,a.jsx)(e.svg,{children:(0,a.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsx)(e.p,{children:"You can optionally enable or disable first-page, last-page, previous-page, and next-page buttons."}),"\n",(0,a.jsx)(r.Z,{component:m,file:{data:"import { Pagination, Stack } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => (\n  <Stack spacing=\"4x\">\n    <Pagination\n      count={10}\n    />\n    <Pagination\n      count={10}\n      defaultPage={5}\n      boundaryCount={0}\n      slot={{ first: true, last: true }}\n    />\n    <Pagination\n      count={10}\n      slot={{ previous: false, next: false }}\n    />\n  </Stack>\n);\n\nexport default App;",path:"pages/components/pagination/index.page.mdx"},sandbox:{files:{},raw:"import { Pagination, Stack } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => (\n  <Stack spacing=\"4x\">\n    <Pagination\n      count={10}\n    />\n    <Pagination\n      count={10}\n      defaultPage={5}\n      boundaryCount={0}\n      slot={{ first: true, last: true }}\n    />\n    <Pagination\n      count={10}\n      slot={{ previous: false, next: false }}\n    />\n  </Stack>\n);\n\nexport default App;",title:"Tonic UI"}}),"\n",(0,a.jsxs)(e.h3,{id:"customize-the-control-icons",children:["Customize the control icons",(0,a.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#customize-the-control-icons",children:(0,a.jsx)(e.svg,{children:(0,a.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsx)(e.p,{children:"It's possible to customize the control icons for the start-ellipsis, end-ellipsis, first-page, last-page, previous-page, and next-page buttons."}),"\n",(0,a.jsx)(r.Z,{component:x,file:{data:"import { Icon, Pagination, PaginationItem, Text } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => (\n  <Pagination\n    count={10}\n    renderItem={(props) => {\n      if (props.type === 'start-ellipsis' || props.type === 'end-ellipsis') {\n        return (\n          <Text mx=\"2x\">...</Text>\n        );\n      }\n\n      return (\n        <PaginationItem\n          slot={{\n            previous: <Icon icon=\"chevron-left\" />,\n            next: <Icon icon=\"chevron-right\" />,\n          }}\n          {...props}\n        />\n      );\n    }}\n  />\n);\n\nexport default App;",path:"pages/components/pagination/index.page.mdx"},sandbox:{files:{},raw:"import { Icon, Pagination, PaginationItem, Text } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => (\n  <Pagination\n    count={10}\n    renderItem={(props) => {\n      if (props.type === 'start-ellipsis' || props.type === 'end-ellipsis') {\n        return (\n          <Text mx=\"2x\">...</Text>\n        );\n      }\n\n      return (\n        <PaginationItem\n          slot={{\n            previous: <Icon icon=\"chevron-left\" />,\n            next: <Icon icon=\"chevron-right\" />,\n          }}\n          {...props}\n        />\n      );\n    }}\n  />\n);\n\nexport default App;",title:"Tonic UI"}}),"\n",(0,a.jsxs)(e.h3,{id:"pagination-ranges",children:["Pagination ranges",(0,a.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#pagination-ranges",children:(0,a.jsx)(e.svg,{children:(0,a.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsxs)(e.p,{children:["You can specify how many numbers to display either side of current page with the ",(0,a.jsx)(e.code,{children:"siblingCount"})," prop, and adjacent to the start and end page number with the ",(0,a.jsx)(e.code,{children:"boundaryCount"})," prop."]}),"\n",(0,a.jsx)(r.Z,{component:h,file:{data:"import { Pagination, Stack } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => (\n  <Stack spacing=\"4x\">\n    <Pagination count={11} defaultPage={6} />\n    <Pagination count={11} defaultPage={6} boundaryCount={0} />\n    <Pagination count={11} defaultPage={6} siblingCount={0} />\n    <Pagination count={11} defaultPage={6} boundaryCount={0} siblingCount={0} />\n    <Pagination count={11} defaultPage={6} boundaryCount={2} siblingCount={0} />\n    <Pagination count={15} defaultPage={8} boundaryCount={2} siblingCount={2} />\n  </Stack>\n);\n\nexport default App;",path:"pages/components/pagination/index.page.mdx"},sandbox:{files:{},raw:"import { Pagination, Stack } from '@tonic-ui/react';\nimport React from 'react';\n\nconst App = () => (\n  <Stack spacing=\"4x\">\n    <Pagination count={11} defaultPage={6} />\n    <Pagination count={11} defaultPage={6} boundaryCount={0} />\n    <Pagination count={11} defaultPage={6} siblingCount={0} />\n    <Pagination count={11} defaultPage={6} boundaryCount={0} siblingCount={0} />\n    <Pagination count={11} defaultPage={6} boundaryCount={2} siblingCount={0} />\n    <Pagination count={15} defaultPage={8} boundaryCount={2} siblingCount={2} />\n  </Stack>\n);\n\nexport default App;",title:"Tonic UI"}}),"\n",(0,a.jsxs)(e.h3,{id:"controlled-pagination",children:["Controlled pagination",(0,a.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#controlled-pagination",children:(0,a.jsx)(e.svg,{children:(0,a.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsx)(r.Z,{component:p,file:{data:"import { Pagination, Stack, Text } from '@tonic-ui/react';\nimport React, { useState } from 'react';\n\nconst App = () => {\n  const [page, setPage] = useState(1);\n  const handleChange = (event, value) => {\n    setPage(value);\n  };\n\n  return (\n    <Stack spacing=\"4x\">\n      <Text>Page: {page}</Text>\n      <Pagination count={10} page={page} onChange={handleChange} />\n    </Stack>\n  );\n};\n\nexport default App;",path:"pages/components/pagination/index.page.mdx"},sandbox:{files:{},raw:"import { Pagination, Stack, Text } from '@tonic-ui/react';\nimport React, { useState } from 'react';\n\nconst App = () => {\n  const [page, setPage] = useState(1);\n  const handleChange = (event, value) => {\n    setPage(value);\n  };\n\n  return (\n    <Stack spacing=\"4x\">\n      <Text>Page: {page}</Text>\n      <Pagination count={10} page={page} onChange={handleChange} />\n    </Stack>\n  );\n};\n\nexport default App;",title:"Tonic UI"}}),"\n",(0,a.jsxs)(e.h3,{id:"table-pagination",children:["Table pagination",(0,a.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#table-pagination",children:(0,a.jsx)(e.svg,{children:(0,a.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsxs)(e.p,{children:["The ",(0,a.jsx)(e.code,{children:"Pagination"})," component is designed to paginate a list of arbitrary items when infinite loading isn't used. For the pagination of a large set of tabular data, you should use the table pagination example as illustrated below."]}),"\n",(0,a.jsx)(r.Z,{component:u,file:{data:'import {\n  Button,\n  ButtonGroup,\n  Divider,\n  Flex,\n  Icon,\n  Input,\n  Menu,\n  MenuButton,\n  MenuItem,\n  MenuList,\n  Space,\n  Text,\n} from \'@tonic-ui/react\';\nimport React, { useState } from \'react\';\n\nconst App = () => {\n  const totalRecords = 400;\n  const [page, setPage] = useState(1);\n  const [perPage, setPerPage] = useState(10);\n  const totalPages = Math.ceil(totalRecords / perPage);\n  const selectPerPage = (value) => {\n    setPage(1);\n    setPerPage(value);\n  };\n  const isPrevPageDisabled = (page <= 1);\n  const isNextPageDisabled = (page >= totalPages);\n  const handleInputChange = (e) => {\n    const value = e.target.value;\n    if (value <= 1) {\n      setPage(1);\n    } else if (value >= totalPages) {\n      setPage(totalPages);\n    } else if (!isNaN(value)) {\n      setPage(e.target.value);\n    }\n  };\n\n  return (\n    <Flex alignItems="center">\n      <Text mr="2x">\n        Total: {totalRecords}\n      </Text>\n      <Divider orientation="vertical" height="6x" />\n      <Menu>\n        <MenuButton variant="ghost">{perPage} per page</MenuButton>\n        <MenuList>\n          <MenuItem onClick={() => selectPerPage(10)}>10</MenuItem>\n          <MenuItem onClick={() => selectPerPage(50)}>50</MenuItem>\n          <MenuItem onClick={() => selectPerPage(100)}>100</MenuItem>\n        </MenuList>\n      </Menu>\n      <Divider orientation="vertical" height="6x" />\n      <Space width="2x" />\n      <Input width={32} px={0} textAlign="center" onChange={handleInputChange} value={page} />\n      <Space width="2x" />\n      <Text>/</Text>\n      <Space width="2x" />\n      <Text>{totalPages}</Text>\n      <Space width="2x" />\n      <ButtonGroup\n        variant="secondary"\n        css={{\n          \'> *:not(:first-of-type)\': {\n            marginLeft: -1\n          }\n        }}\n      >\n        <Button\n          width="8x"\n          disabled={isPrevPageDisabled}\n          onClick={(event) => {\n            const prevPage = page > 1 ? page - 1 : page;\n            if (prevPage !== page) {\n              setPage(prevPage);\n            }\n          }}\n        >\n          <Icon icon="angle-left" />\n        </Button>\n        <Button\n          width="8x"\n          disabled={isNextPageDisabled}\n          onClick={(event) => {\n            const nextPage = page < totalPages ? page + 1 : page;\n            if (nextPage !== page) {\n              setPage(nextPage);\n            }\n          }}\n        >\n          <Icon icon="angle-right" />\n        </Button>\n      </ButtonGroup>\n    </Flex>\n  );\n};\n\nexport default App;',path:"pages/components/pagination/index.page.mdx"},sandbox:{files:{},raw:'import {\n  Button,\n  ButtonGroup,\n  Divider,\n  Flex,\n  Icon,\n  Input,\n  Menu,\n  MenuButton,\n  MenuItem,\n  MenuList,\n  Space,\n  Text,\n} from \'@tonic-ui/react\';\nimport React, { useState } from \'react\';\n\nconst App = () => {\n  const totalRecords = 400;\n  const [page, setPage] = useState(1);\n  const [perPage, setPerPage] = useState(10);\n  const totalPages = Math.ceil(totalRecords / perPage);\n  const selectPerPage = (value) => {\n    setPage(1);\n    setPerPage(value);\n  };\n  const isPrevPageDisabled = (page <= 1);\n  const isNextPageDisabled = (page >= totalPages);\n  const handleInputChange = (e) => {\n    const value = e.target.value;\n    if (value <= 1) {\n      setPage(1);\n    } else if (value >= totalPages) {\n      setPage(totalPages);\n    } else if (!isNaN(value)) {\n      setPage(e.target.value);\n    }\n  };\n\n  return (\n    <Flex alignItems="center">\n      <Text mr="2x">\n        Total: {totalRecords}\n      </Text>\n      <Divider orientation="vertical" height="6x" />\n      <Menu>\n        <MenuButton variant="ghost">{perPage} per page</MenuButton>\n        <MenuList>\n          <MenuItem onClick={() => selectPerPage(10)}>10</MenuItem>\n          <MenuItem onClick={() => selectPerPage(50)}>50</MenuItem>\n          <MenuItem onClick={() => selectPerPage(100)}>100</MenuItem>\n        </MenuList>\n      </Menu>\n      <Divider orientation="vertical" height="6x" />\n      <Space width="2x" />\n      <Input width={32} px={0} textAlign="center" onChange={handleInputChange} value={page} />\n      <Space width="2x" />\n      <Text>/</Text>\n      <Space width="2x" />\n      <Text>{totalPages}</Text>\n      <Space width="2x" />\n      <ButtonGroup\n        variant="secondary"\n        css={{\n          \'> *:not(:first-of-type)\': {\n            marginLeft: -1\n          }\n        }}\n      >\n        <Button\n          width="8x"\n          disabled={isPrevPageDisabled}\n          onClick={(event) => {\n            const prevPage = page > 1 ? page - 1 : page;\n            if (prevPage !== page) {\n              setPage(prevPage);\n            }\n          }}\n        >\n          <Icon icon="angle-left" />\n        </Button>\n        <Button\n          width="8x"\n          disabled={isNextPageDisabled}\n          onClick={(event) => {\n            const nextPage = page < totalPages ? page + 1 : page;\n            if (nextPage !== page) {\n              setPage(nextPage);\n            }\n          }}\n        >\n          <Icon icon="angle-right" />\n        </Button>\n      </ButtonGroup>\n    </Flex>\n  );\n};\n\nexport default App;',title:"Tonic UI"}}),"\n",(0,a.jsxs)(e.h2,{id:"props",children:["Props",(0,a.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#props",children:(0,a.jsx)(e.svg,{children:(0,a.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsxs)(e.h3,{id:"pagination-1",children:["Pagination",(0,a.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#pagination-1",children:(0,a.jsx)(e.svg,{children:(0,a.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{align:"left",children:"Name"}),(0,a.jsx)(e.th,{align:"left",children:"Type"}),(0,a.jsx)(e.th,{align:"left",children:"Default"}),(0,a.jsx)(e.th,{align:"left",children:"Description"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{align:"left",children:"boundaryCount"}),(0,a.jsx)(e.td,{align:"left",children:"number"}),(0,a.jsx)(e.td,{align:"left",children:"1"}),(0,a.jsx)(e.td,{align:"left",children:"Number of always visible pages at the beginning and end."})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{align:"left",children:"count"}),(0,a.jsx)(e.td,{align:"left",children:"number"}),(0,a.jsx)(e.td,{align:"left",children:"1"}),(0,a.jsx)(e.td,{align:"left",children:"Total number of pages."})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{align:"left",children:"defaultPage"}),(0,a.jsx)(e.td,{align:"left",children:"number"}),(0,a.jsx)(e.td,{align:"left",children:"1"}),(0,a.jsx)(e.td,{align:"left",children:"The page selected by default when the component is uncontrolled."})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{align:"left",children:"disabled"}),(0,a.jsx)(e.td,{align:"left",children:"boolean"}),(0,a.jsx)(e.td,{align:"left",children:"false"}),(0,a.jsxs)(e.td,{align:"left",children:["If ",(0,a.jsx)(e.code,{children:"true"}),", the component is disabled."]})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{align:"left",children:"onChange"}),(0,a.jsx)(e.td,{align:"left",children:"function"}),(0,a.jsx)(e.td,{align:"left"}),(0,a.jsxs)(e.td,{align:"left",children:["Callback fired when the page is changed. ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{})," Signature: ",(0,a.jsx)("br",{})," ",(0,a.jsx)(e.code,{children:"function(event: object, page: number) => void"})," ",(0,a.jsx)("br",{}),"event: The event source of the callback. ",(0,a.jsx)("br",{}),"page: The page selected."]})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{align:"left",children:"page"}),(0,a.jsx)(e.td,{align:"left",children:"number"}),(0,a.jsx)(e.td,{align:"left"}),(0,a.jsx)(e.td,{align:"left",children:"The current page."})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{align:"left",children:"renderItem"}),(0,a.jsx)(e.td,{align:"left",children:"function"}),(0,a.jsx)(e.td,{align:"left",children:(0,a.jsx)(e.code,{children:"(props) => <PaginationItem {...props} />"})}),(0,a.jsxs)(e.td,{align:"left",children:["Render the item.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Signature: ",(0,a.jsx)("br",{})," ",(0,a.jsx)(e.code,{children:"function(props) => ReactNode"})," ",(0,a.jsx)("br",{}),"props: The props to spread on a ",(0,a.jsx)(e.code,{children:"PaginationItem"}),"."]})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{align:"left",children:"siblingCount"}),(0,a.jsx)(e.td,{align:"left",children:"number"}),(0,a.jsx)(e.td,{align:"left",children:"1"}),(0,a.jsx)(e.td,{align:"left",children:"Number of always visible pages before and after the current page."})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{align:"left",children:"slot"}),(0,a.jsx)(e.td,{align:"left",children:(0,a.jsx)(e.code,{children:"{ first?: boolean, last?: boolean, previous?: boolean, next?: boolean }"})}),(0,a.jsx)(e.td,{align:"left",children:(0,a.jsx)(e.code,{children:"{ first: false, last: false, previous: true, next: true }"})}),(0,a.jsx)(e.td,{align:"left",children:"Whether to render the first-page, last-page, previous-page, and next-page buttons."})]})]})]}),"\n",(0,a.jsxs)(e.h3,{id:"paginationitem",children:["PaginationItem",(0,a.jsx)(e.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#paginationitem",children:(0,a.jsx)(e.svg,{children:(0,a.jsx)(e.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{align:"left",children:"Name"}),(0,a.jsx)(e.th,{align:"left",children:"Type"}),(0,a.jsx)(e.th,{align:"left",children:"Default"}),(0,a.jsx)(e.th,{align:"left",children:"Description"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{align:"left",children:"disabled"}),(0,a.jsx)(e.td,{align:"left",children:"boolean"}),(0,a.jsx)(e.td,{align:"left",children:"false"}),(0,a.jsxs)(e.td,{align:"left",children:["If ",(0,a.jsx)(e.code,{children:"true"}),", the component is disabled."]})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{align:"left",children:"page"}),(0,a.jsx)(e.td,{align:"left",children:"number"}),(0,a.jsx)(e.td,{align:"left"}),(0,a.jsx)(e.td,{align:"left",children:"The current page number."})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{align:"left",children:"selected"}),(0,a.jsx)(e.td,{align:"left",children:"boolean"}),(0,a.jsx)(e.td,{align:"left",children:"false"}),(0,a.jsxs)(e.td,{align:"left",children:["If ",(0,a.jsx)(e.code,{children:"true"}),", the pagination item is selected."]})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{align:"left",children:"slot"}),(0,a.jsx)(e.td,{align:"left",children:(0,a.jsx)(e.code,{children:"{ 'start-ellipsis'?: ReactNode, 'end-ellipsis'?: ReactNode, first?: ReactNode, previous?: ReactNode, next?: ReactNode, last?: ReactNode }"})}),(0,a.jsx)(e.td,{align:"left",children:(0,a.jsx)(e.code,{children:'{ \'start-ellipsis\': <Icon icon="more-horiz" />, \'end-ellipsis\': <Icon icon="more-horiz" />, first: <Icon icon="collapse-left" />, previous: <Icon icon="angle-left" />, next: <Icon icon="angle-right" />, last: <Icon icon="collapse-right" /> }'})}),(0,a.jsx)(e.td,{align:"left"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{align:"left",children:"type"}),(0,a.jsx)(e.td,{align:"left",children:"string"}),(0,a.jsx)(e.td,{align:"left",children:"'page'"}),(0,a.jsx)(e.td,{align:"left",children:"The type of the pagination item."})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{align:"left",children:"variant"}),(0,a.jsx)(e.td,{align:"left",children:"string"}),(0,a.jsx)(e.td,{align:"left",children:"'ghost'"}),(0,a.jsx)(e.td,{align:"left",children:"The variant to use."})]})]})]})]})}var P=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,i.ah)(),n.components).wrapper;return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(b,n)})):b(n)}},16959:function(n,e,t){"use strict";t.d(e,{Z:function(){return P}});var a=t(67569),i=t(49427),r=t(5632),o=t(2784),l=t(65245),c=t(16245),s=t(76761),d=t(73205),u=t(98107),g=["size"];function p(){return(p=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}var h=(0,o.forwardRef)(function(n,e){var t=n.size,i=function(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],!(e.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}(n,g);return o.createElement(a.SVGIcon,p({size:t,viewBox:"0 0 1024 1024"},i),o.createElement("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"}))});h.displayName="CodeSandboxIcon";var f=t(44285);function x(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var a,i,r,o,l=[],c=!0,s=!1;try{if(r=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;c=!1}else for(;!(c=(a=r.call(t)).done)&&(l.push(a.value),l.length!==e);c=!0);}catch(n){s=!0,i=n}finally{try{if(!c&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(s)throw i}}return l}}(n,e)||function(n,e){if(n){if("string"==typeof n)return m(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if("Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return m(n,e)}}(n,e)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,a=Array(e);t<e;t++)a[t]=n[t];return a}var j={fontFamily:'"SFMono-Medium", "SF Mono", "Segoe UI Mono", Menlo, Consolas, Courier, monospace',fontSize:14,overflowX:"auto"},b=function(n){var e=n.component,t=n.file,g=n.sandbox,p=(0,r.useRouter)(),m=x((0,o.useReducer)(function(n){return!n},!1),2),b=m[0],P=m[1],v=x((0,a.useColorMode)(),1)[0],y={dark:s.y,light:s.q}[v],k=x((0,i.useToggle)(!1),2),I=k[0],C=k[1],S=(0,c.Z)(null==t?void 0:t.data),E=S.onCopy,T=S.hasCopied,w=(0,o.useCallback)(function(){E()},[E]),M=(0,o.useCallback)(function(){(0,d.b)(g)},[g]),A=(0,o.useCallback)(function(){P(),C(!1)},[P,C]);return o.createElement(l.nu,{code:null==t?void 0:t.data,disabled:!0,language:"jsx",theme:y},o.createElement(a.Box,{border:1,borderColor:{dark:"gray:70",light:"gray:30"}[v],p:"4x"},o.createElement(a.Box,{fontSize:"sm",lineHeight:"sm"},o.createElement(o.Fragment,{key:b},o.createElement(e,null)))),o.createElement(a.Flex,{columnGap:"2x",justifyContent:"flex-end",mb:"4x"},o.createElement(f.Z,{"data-track":I?"CodeBlock|hide_source|".concat((0,u.Z)({path:p.pathname})):"CodeBlock|show_source|".concat((0,u.Z)({path:p.pathname})),onClick:C},o.createElement(a.Tooltip,{label:I?"Hide the source":"Show the source"},o.createElement(a.Icon,{icon:"code",size:{sm:"5x",md:"4x"}}))),o.createElement(f.Z,{"data-track":"CodeBlock|copy_source|".concat((0,u.Z)({path:p.pathname})),onClick:w},o.createElement(a.Tooltip,{label:T?"Copied":"Copy the source"},o.createElement(a.Icon,{icon:"file-copy-o",size:{sm:"5x",md:"4x"}}))),o.createElement(f.Z,{"data-track":"CodeBlock|edit_in_codesandbox|".concat(p.pathname),onClick:M},o.createElement(a.Tooltip,{label:"Edit in CodeSandbox"},o.createElement(h,{size:{sm:"5x",md:"4x"}}))),o.createElement(f.Z,{"data-track":"CodeBlock|reset|".concat(p.pathname),onClick:A},o.createElement(a.Tooltip,{label:"Reset the demo"},o.createElement(a.Icon,{icon:"redo",size:{sm:"5x",md:"4x"}})))),o.createElement(a.Fade,{in:I},o.createElement(a.Collapse,{in:I,unmountOnExit:!0},o.createElement(l.uz,{style:j}))))};b.displayName="Demo";var P=b},61832:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/pagination",function(){return t(91227)}])}},function(n){n.O(0,[2888,9774,179],function(){return n(n.s=61832)}),_N_E=n.O()}]);