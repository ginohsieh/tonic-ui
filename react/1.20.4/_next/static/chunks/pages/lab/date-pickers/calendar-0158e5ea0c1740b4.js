(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3578],{13301:function(e,n,t){"use strict";t.r(n);var a=t(52322),l=t(45392);function o(e){var n=Object.assign({div:"div",h1:"h1",h2:"h2",a:"a",svg:"svg",use:"use",pre:"pre",code:"code",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em"},(0,l.ah)(),e.components);return(0,a.jsxs)(n.div,{className:"main-content",id:"main-content",children:[(0,a.jsx)(n.h1,{id:"calendar",children:"Calendar"}),"\n",(0,a.jsxs)(n.h2,{id:"import",children:["Import",(0,a.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#import",children:(0,a.jsx)(n.svg,{children:(0,a.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import {\n  Calendar,\n} from '@tonic-ui/react-lab';\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"usage",children:["Usage",(0,a.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#usage",children:(0,a.jsx)(n.svg,{children:(0,a.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsx)(n.pre,{noInline:!0,children:(0,a.jsx)(n.code,{className:"language-jsx",children:"const CodeBlock = (props) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n\n  return (\n    <Box\n      backgroundColor={colorStyle.background.secondary}\n      border={1}\n      borderColor={colorStyle.divider}\n      fontFamily=\"mono\"\n      py=\"3x\"\n      px=\"3x\"\n      whiteSpace=\"pre\"\n      {...props}\n    />\n  );\n};\n\nconst FormGroup = (props) => (\n  <Box mb=\"4x\" {...props} />\n);\n\nconst firstDayOfWeekOptions = [\n  0, // Sunday\n  1, // Monday\n  2, // Tuesday\n  3, // Wednesday\n  4, // Thursday\n  5, // Friday\n  6, // Saturday\n];\n\nconst useSelection = (defaultValue) => {\n  const [value, setValue] = React.useState(defaultValue);\n  const changeBy = (value) => () => setValue(value);\n  return [value, changeBy];\n};\n\nconst mapDateOptionToDateObject = (dateOption) => ({\n  'none': null,\n  'today': new Date(),\n  'invalid': new Date(''),\n}[dateOption]);\n\nconst disableWeekdays = (date) => {\n  const day = date.getDay();\n  return (day > 0) && (day < 6);\n};\n\nconst disableWeekends = (date) => {\n  const day = date.getDay();\n  return (day === 0) || (day === 6);\n};\n\nrender(() => {\n  const today = useConst(() => new Date());\n  const [error, setError] = React.useState();\n  const [locale, setLocale] = React.useState('enUS');\n  const [firstDayOfWeek, changeFirstDayOfWeekBy] = useSelection(0);\n  const [dateOption, changeDateOptionBy] = useSelection('none');\n  const [date, setDate] = React.useState(mapDateOptionToDateObject(dateOption));\n  const [minDate, setMinDate] = React.useState('');\n  const [maxDate, setMaxDate] = React.useState('');\n  const [shouldDisableDateOption, changeShouldDisableDateOptionBy] = useSelection('none');\n  const dateFormat = 'yyyy-MM-dd';\n  const displayDate = dateFns.isValid(date) ? dateFns.format(date, dateFormat) : '';\n\n  React.useEffect(() => {\n    setDate(mapDateOptionToDateObject(dateOption));\n  }, [dateOption]);\n\n  return (\n    <>\n      <FormGroup>\n        <Flex\n          alignItems=\"center\"\n          columnGap=\"2x\"\n        >\n          <TextLabel>\n            Selected date:\n          </TextLabel>\n          {error && (\n            <Text color=\"red:50\">{error}</Text>\n          )}\n          {!error && (\n            <Text>{displayDate}</Text>\n          )}\n        </Flex>\n      </FormGroup>\n      <Calendar\n        date={date}\n        firstDayOfWeek={firstDayOfWeek}\n        formatDate={(date, format) => {\n          const options = {\n            locale: locale && dateFnsLocale[locale],\n          };\n          return dateFns.format(date, format, options);\n        }}\n        maxDate={maxDate ? new Date(maxDate) : undefined}\n        minDate={minDate ? new Date(minDate) : undefined}\n        onChange={(nextDate) => {\n          console.log('onChange:', nextDate);\n          setDate(nextDate);\n        }}\n        onError={(error, value) => {\n          console.log('onError:', error);\n          setError(error);\n        }}\n        shouldDisableDate={(date) => {\n          if (shouldDisableDateOption === 'weekdays') {\n            return disableWeekdays(date);\n          }\n          if (shouldDisableDateOption === 'weekends') {\n            return disableWeekends(date);\n          }\n          return false;\n        }}\n      />\n      <Divider my=\"4x\" />\n      <Box mb=\"4x\">\n        <Text fontSize=\"lg\" lineHeight=\"lg\">\n          Localization\n        </Text>\n      </Box>\n      <FormGroup>\n        <Flex\n          alignItems=\"center\"\n          columnGap=\"2x\"\n        >\n          <TextLabel>\n            Locale:\n          </TextLabel>\n          <Menu>\n            <MenuButton variant=\"secondary\" minWidth={100}>\n              {locale && dateFnsLocale[locale].code}\n            </MenuButton>\n            <MenuList\n              onClick={(event) => {\n                const value = event.target.getAttribute('value');\n                setLocale(value);\n              }}\n              maxHeight={240}\n              minWidth={100}\n              overflowY=\"auto\"\n            >\n              {Object.keys(dateFnsLocale).map((locale) => (\n                <MenuItem key={locale} value={locale}>\n                  {dateFnsLocale[locale].code}\n                </MenuItem>\n              ))}\n            </MenuList>\n          </Menu>\n          <LinkButton onClick={() => setLocale('enUS')}>\n            Reset\n          </LinkButton>\n        </Flex>\n      </FormGroup>\n      <Flex\n        direction=\"column\"\n        mb=\"4x\"\n        rowGap=\"3x\"\n      >\n        <TextLabel>\n          You can use the <Code>formatDate</Code> prop to return a formatted date string in the given format and locale.\n        </TextLabel>\n        <CodeBlock>\n          {`// format\\nimport format from 'date-fns/format';\\n\\n// locale\\nimport enLocale from 'date-fns/locale/en-US'; // English (United States)\\nimport deLocale from 'date-fns/locale/de'; // Deutsch\\nimport esLocale from 'date-fns/locale/es'; // Espa\xf1ol\\nimport frLocale from 'date-fns/locale/fr'; // Fran\xe7ais\\nimport itLocale from 'date-fns/locale/it'; // Italiano\\nimport jaLocale from 'date-fns/locale/ja'; // 日本語\\nimport koLocale from 'date-fns/locale/ko'; // 한국어\\nimport zhCNLocale from 'date-fns/locale/zh-CN'; // 简体中文\\nimport zhTWLocale from 'date-fns/locale/zh-TW'; // 繁體中文`}\n        </CodeBlock>\n        <CodeBlock>\n          {`// Calendar component\\nformatDate={(date, format, options) => {\\n  return format(date, format, { locale: enLocale });\\n}}`}\n        </CodeBlock>\n      </Flex>\n      <Divider my=\"4x\" />\n      <Box mb=\"4x\">\n        <Text fontSize=\"lg\" lineHeight=\"lg\">\n          Calendar props\n        </Text>\n      </Box>\n      <FormGroup>\n        <Box mb=\"2x\">\n          <TextLabel>\n            firstDayOfWeek\n          </TextLabel>\n        </Box>\n        <ButtonGroup\n          variant=\"secondary\"\n          css={{\n            '> *:not(:first-of-type)': {\n              marginLeft: -1\n            }\n          }}\n        >\n          {[0, 1, 2, 3, 4, 5, 6].map(value => (\n            <Button\n              key={value}\n              selected={value === firstDayOfWeek}\n              onClick={changeFirstDayOfWeekBy(value)}\n              minWidth=\"15x\"\n            >\n              {value}\n            </Button>\n          ))}\n        </ButtonGroup>\n      </FormGroup>\n      <FormGroup>\n        <Box mb=\"2x\">\n          <TextLabel>\n            {dateOption === 'none' && `date={null}`}\n            {dateOption === 'today' && `date={new Date()}`}\n            {dateOption === 'invalid' && `date={new Date('')}`}\n          </TextLabel>\n        </Box>\n        <ButtonGroup\n          variant=\"secondary\"\n          css={{\n            '> *:not(:first-of-type)': {\n              marginLeft: -1\n            }\n          }}\n        >\n          {['none', 'today', 'invalid'].map(value => (\n            <Button\n              key={value}\n              selected={value === dateOption}\n              onClick={changeDateOptionBy(value)}\n              minWidth=\"15x\"\n            >\n              {{\n                'none': 'None',\n                'today': 'Today',\n                'invalid': 'Invalid Date',\n              }[value]}\n            </Button>\n          ))}\n        </ButtonGroup>\n      </FormGroup>\n      <FormGroup>\n        <Box mb=\"2x\">\n          <TextLabel>\n            minDate={minDate ? `{new Date('${minDate}'}}` : ''}\n          </TextLabel>\n        </Box>\n        <Input\n          type=\"date\"\n          value={minDate}\n          onChange={(e) => setMinDate(e.target.value)}\n          width=\"auto\"\n        />\n      </FormGroup>\n      <FormGroup>\n        <Box mb=\"2x\">\n          <TextLabel>\n            maxDate={maxDate ? `{new Date('${maxDate}'}}` : ''}\n          </TextLabel>\n        </Box>\n        <Input\n          type=\"date\"\n          value={maxDate}\n          onChange={(e) => setMaxDate(e.target.value)}\n          width=\"auto\"\n        />\n      </FormGroup>\n      <FormGroup>\n        <Box mb=\"2x\">\n          <TextLabel>\n            shouldDisableDate\n          </TextLabel>\n        </Box>\n        <ButtonGroup\n          variant=\"secondary\"\n          css={{\n            '> *:not(:first-of-type)': {\n              marginLeft: -1\n            }\n          }}\n        >\n          {['none', 'weekdays', 'weekends'].map(value => (\n            <Button\n              key={value}\n              selected={value === shouldDisableDateOption}\n              onClick={changeShouldDisableDateOptionBy(value)}\n              minWidth=\"15x\"\n            >\n              {{\n                'none': 'None',\n                'weekdays': 'Disable Weekdays',\n                'weekends': 'Disable Weekends',\n              }[value]}\n            </Button>\n          ))}\n        </ButtonGroup>\n      </FormGroup>\n    </>\n  );\n});\n"})}),"\n",(0,a.jsxs)(n.h2,{id:"props",children:["Props",(0,a.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#props",children:(0,a.jsx)(n.svg,{children:(0,a.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsxs)(n.h3,{id:"calendar-1",children:["Calendar",(0,a.jsx)(n.a,{"aria-hidden":!0,className:"anchor-link",tabIndex:"-1",href:"#calendar-1",children:(0,a.jsx)(n.svg,{children:(0,a.jsx)(n.use,{xlinkHref:"#anchor-link-icon"})})})]}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{align:"left",children:"Name"}),(0,a.jsx)(n.th,{align:"left",children:"Type"}),(0,a.jsx)(n.th,{align:"left",children:"Default"}),(0,a.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{align:"left",children:"date"}),(0,a.jsx)(n.td,{align:"left",children:"Date"}),(0,a.jsx)(n.td,{align:"left"}),(0,a.jsx)(n.td,{align:"left",children:"The selected date."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{align:"left",children:"defaultDate"}),(0,a.jsx)(n.td,{align:"left",children:"Date"}),(0,a.jsx)(n.td,{align:"left"}),(0,a.jsx)(n.td,{align:"left",children:"The default selected date."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{align:"left",children:"firstDayOfWeek"}),(0,a.jsx)(n.td,{align:"left",children:"number"}),(0,a.jsx)(n.td,{align:"left",children:"0"}),(0,a.jsxs)(n.td,{align:"left",children:["The first day of the week.",(0,a.jsx)("br",{}),"0 = Sunday",(0,a.jsx)("br",{}),"1 = Monday",(0,a.jsx)("br",{}),"2 = Tuesday",(0,a.jsx)("br",{}),"3 = Wednesday",(0,a.jsx)("br",{}),"4 = Thursday",(0,a.jsx)("br",{}),"5 = Friday",(0,a.jsx)("br",{}),"6 = Saturday"]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{align:"left",children:"formatDate"}),(0,a.jsx)(n.td,{align:"left",children:"function"}),(0,a.jsx)(n.td,{align:"left"}),(0,a.jsxs)(n.td,{align:"left",children:["A callback called to return the formatted date string in the given format.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("b",{children:"Signature"}),(0,a.jsx)("br",{}),(0,a.jsx)(n.code,{children:"function(date, format, options) => void"}),(0,a.jsx)("br",{}),(0,a.jsx)(n.em,{children:"date"}),": The original date.",(0,a.jsx)("br",{}),(0,a.jsx)(n.em,{children:"format"}),": The string of ",(0,a.jsx)(n.a,{href:"https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table",children:"format tokens"}),".",(0,a.jsx)("br",{}),(0,a.jsx)(n.em,{children:"options"}),": An object with options."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{align:"left",children:"minDate"}),(0,a.jsx)(n.td,{align:"left",children:"Date"}),(0,a.jsx)(n.td,{align:"left"}),(0,a.jsx)(n.td,{align:"left",children:"The minimum date that can be selected."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{align:"left",children:"maxDate"}),(0,a.jsx)(n.td,{align:"left",children:"Date"}),(0,a.jsx)(n.td,{align:"left"}),(0,a.jsx)(n.td,{align:"left",children:"The maximum date that can be selected."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{align:"left",children:"onChange"}),(0,a.jsx)(n.td,{align:"left",children:"function"}),(0,a.jsx)(n.td,{align:"left"}),(0,a.jsxs)(n.td,{align:"left",children:["A callback called when the value (the selected date) changes.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("b",{children:"Signature:"}),(0,a.jsx)("br",{}),(0,a.jsx)(n.code,{children:"function(value) => void"}),(0,a.jsx)("br",{}),(0,a.jsx)(n.em,{children:"value"}),": The selected date."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{align:"left",children:"onError"}),(0,a.jsx)(n.td,{align:"left",children:"function"}),(0,a.jsx)(n.td,{align:"left"}),(0,a.jsxs)(n.td,{align:"left",children:["An error-first callback called when the date validation returns an error (or the date is valid after error).",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("b",{children:"Signature"}),(0,a.jsx)("br",{}),(0,a.jsx)(n.code,{children:"function(error, value) => void"}),(0,a.jsx)("br",{}),(0,a.jsx)(n.em,{children:"error"}),": The error message. It will be ",(0,a.jsx)(n.code,{children:"undefined"})," if the date is valid after error.",(0,a.jsx)("br",{}),(0,a.jsx)(n.em,{children:"value"}),": The selected date."]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{align:"left",children:"shouldDisableDate"}),(0,a.jsx)(n.td,{align:"left",children:"function"}),(0,a.jsx)(n.td,{align:"left"}),(0,a.jsxs)(n.td,{align:"left",children:["Disable specific date.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("b",{children:"Signature:"}),(0,a.jsx)("br",{}),(0,a.jsx)(n.code,{children:"function(date) => boolean"}),(0,a.jsx)("br",{}),(0,a.jsx)(n.em,{children:"date"}),": The date to check.",(0,a.jsx)("br",{}),(0,a.jsx)(n.em,{children:"returns (boolean)"}),": Return ",(0,a.jsx)(n.code,{children:"true"})," if the date will be disabled."]})]})]})]})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,l.ah)(),e.components).wrapper;return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(o,e)})):o(e)}},5634:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lab/date-pickers/calendar",function(){return t(13301)}])}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=5634)}),_N_E=e.O()}]);