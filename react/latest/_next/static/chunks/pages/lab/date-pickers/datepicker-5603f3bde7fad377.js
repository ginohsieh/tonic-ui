(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6530],{8923:function(n,e,t){"use strict";t.r(e);var a=t(2322),o=t(5392);function r(n){var e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",a:"a",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",em:"em"},(0,o.ah)(),n.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{children:"DatePicker"}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.code,{children:"DatePicker"})," let the user select a date from the calendar."]}),"\n",(0,a.jsx)(e.h2,{children:"Import"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",children:"import {\n  DatePicker,\n} from '@tonic-ui/react-lab';\n"})}),"\n",(0,a.jsx)(e.h2,{children:"Overview"}),"\n",(0,a.jsxs)(e.p,{children:["The following example demonstrates a simple example of the ",(0,a.jsx)(e.code,{children:"DatePicker"})," component."]}),"\n",(0,a.jsx)(e.pre,{disabled:!0,children:(0,a.jsx)(e.code,{className:"language-jsx",children:'<DatePicker\n  inputFormat="yyyy-MM-dd"\n  value={value}\n  onChange={(nextValue) => {\n    setValue(nextValue);\n  }}\n  onError={(error, value) => {\n    console.log(error, value);\n  }}\n  renderInput={({ error, inputProps }) => (\n    <DateInput\n      {...inputProps}\n      error={error}\n      placeholder="yyyy-MM-dd"\n      readOnly\n    />\n  )}\n/>\n'})}),"\n",(0,a.jsxs)(e.p,{children:["Note that the ",(0,a.jsx)(e.code,{children:"DateInput"})," component is currently not provided by the ",(0,a.jsx)(e.code,{children:"@tonic-ui/react-lab"})," package. You have to write your own or refer to the following code to ",(0,a.jsx)(e.a,{href:"../../components/inputcontrol",children:"get started"}),"."]}),"\n",(0,a.jsx)(e.pre,{disabled:!0,children:(0,a.jsx)(e.code,{className:"language-jsx",children:"// import\nimport { InputControl, InputAdornment } from '@tonic-ui/react';\n\n// DateInput\nconst DateInput = React.forwardRef((props, ref) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n\n  return (\n    <InputControl\n      ref={ref}\n      startAdornment={(\n        <InputAdornment color={colorStyle.color.secondary}>\n          <Icon icon=\"calendar\" />\n        </InputAdornment>\n      )}\n      {...props}\n    />\n  );\n});\n"})}),"\n",(0,a.jsx)(e.h2,{children:"Usage"}),"\n",(0,a.jsx)(e.pre,{noInline:!0,children:(0,a.jsx)(e.code,{className:"language-jsx",children:"const CodeBlock = (props) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n\n  return (\n    <Box\n      backgroundColor={colorStyle.background.secondary}\n      border={1}\n      borderColor={colorStyle.divider}\n      fontFamily=\"mono\"\n      py=\"3x\"\n      px=\"3x\"\n      whiteSpace=\"pre\"\n      {...props}\n    />\n  );\n};\n\nconst FormGroup = (props) => (\n  <Box mb=\"4x\" {...props} />\n);\n\nconst inputFormats = [\n  'yyyy-MM-dd', // ISO 8601\n  'MM/dd/yyyy', // USA\n  'dd.MM.yyyy', // Worldwide\n  'yyyy/MM/dd', // East Asia\n];\n\nconst firstDayOfWeekOptions = [\n  0, // Sunday\n  1, // Monday\n  2, // Tuesday\n  3, // Wednesday\n  4, // Thursday\n  5, // Friday\n  6, // Saturday\n];\n\nconst useSelection = (defaultValue) => {\n  const [value, setValue] = React.useState(defaultValue);\n  const changeBy = (value) => () => setValue(value);\n  return [value, changeBy];\n};\n\nconst DateInput = React.forwardRef((props, ref) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n\n  return (\n    <InputControl\n      ref={ref}\n      startAdornment={(\n        <InputAdornment color={colorStyle.color.secondary}>\n          <Icon icon=\"calendar\" />\n        </InputAdornment>\n      )}\n      {...props}\n    />\n  );\n});\n\nconst mapDateOptionToDateObject = (dateOption) => ({\n  'none': null,\n  'today': new Date(),\n  'invalid': new Date(''),\n}[dateOption]);\n\nconst disableWeekdays = (date) => {\n  const day = date.getDay();\n  return (day > 0) && (day < 6);\n};\n\nconst disableWeekends = (date) => {\n  const day = date.getDay();\n  return (day === 0) || (day === 6);\n};\n\nrender(() => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n  const [maxDate, setMaxDate] = React.useState('');\n  const [minDate, setMinDate] = React.useState('');\n  const [dateOption, changeDateOptionBy] = useSelection('none');\n  const [firstDayOfWeek, changeFirstDayOfWeekBy] = useSelection(0);\n  const [inputFormat, changeInputFormatBy] = useSelection(inputFormats[0]);\n  const [shouldDisableDateOption, changeShouldDisableDateOptionBy] = useSelection('none');\n  const [readOnly, toggleReadOnly] = useToggle(false);\n  const [value, setValue] = React.useState(mapDateOptionToDateObject(dateOption));\n  const [error, setError] = React.useState();\n  const displayDate = dateFns.isValid(value) ? dateFns.format(value, inputFormat) : '';\n  const [locale, setLocale] = React.useState('enUS');\n  const onChangeLocale = (event) => {\n    const value = event.target.getAttribute('value');\n    setLocale(value);\n  };\n\n  React.useEffect(() => {\n    setValue(mapDateOptionToDateObject(dateOption));\n  }, [dateOption]);\n\n  return (\n    <>\n      <FormGroup>\n        <Flex\n          alignItems=\"center\"\n          columnGap=\"2x\"\n        >\n          <TextLabel>\n            Selected date:\n          </TextLabel>\n          {error && (\n            <Text color=\"red:50\">{error}</Text>\n          )}\n          {!error && (\n            <Text>{displayDate}</Text>\n          )}\n        </Flex>\n      </FormGroup>\n      <DatePicker\n        firstDayOfWeek={firstDayOfWeek}\n        formatDate={(date, format) => {\n          const options = {\n            locale: locale && dateFnsLocale[locale],\n          };\n          return dateFns.format(date, format, options);\n        }}\n        maxDate={maxDate ? new Date(maxDate) : undefined}\n        minDate={minDate ? new Date(minDate) : undefined}\n        onChange={(nextValue) => {\n          console.log('onChange:', nextValue);\n          setValue(nextValue);\n        }}\n        onError={(error, value) => {\n          console.log('onError:', error, value);\n          setError(error);\n        }}\n        shouldDisableDate={(date) => {\n          console.log('shouldDisableDate:', date, shouldDisableDateOption);\n          if (shouldDisableDateOption === 'weekdays') {\n            return disableWeekdays(date);\n          }\n          if (shouldDisableDateOption === 'weekends') {\n            return disableWeekends(date);\n          }\n          return false;\n        }}\n        value={value}\n        inputFormat={inputFormat}\n        renderInput={({ error: inputError, inputProps }) => {\n          console.log('renderInput:', inputError, inputProps);\n          return (\n            <Box>\n              <DateInput\n                {...inputProps}\n                error={inputError}\n                placeholder={inputFormat}\n                readOnly={readOnly}\n              />\n              {inputError && (\n                <Text mt=\"1x\" color=\"red:50\">Invalid date</Text>\n              )}\n            </Box>\n          );\n        }}\n      />\n      <Divider my=\"4x\" />\n      <Box mb=\"4x\">\n        <Text fontSize=\"lg\" lineHeight=\"lg\">\n          Localization\n        </Text>\n      </Box>\n      <FormGroup>\n        <Flex\n          alignItems=\"center\"\n          columnGap=\"2x\"\n        >\n          <TextLabel>\n            Locale:\n          </TextLabel>\n          <Menu>\n            <MenuButton variant=\"secondary\" minWidth={100}>\n              {locale && dateFnsLocale[locale].code}\n            </MenuButton>\n            <MenuList\n              onClick={(event) => {\n                const value = event.target.getAttribute('value');\n                setLocale(value);\n              }}\n              maxHeight={240}\n              minWidth={100}\n              overflowY=\"auto\"\n            >\n              {Object.keys(dateFnsLocale).map((locale) => (\n                <MenuItem key={locale} value={locale}>\n                  {dateFnsLocale[locale].code}\n                </MenuItem>\n              ))}\n            </MenuList>\n          </Menu>\n          <LinkButton onClick={() => setLocale('enUS')}>\n            Reset\n          </LinkButton>\n        </Flex>\n      </FormGroup>\n      <Flex\n        direction=\"column\"\n        mb=\"4x\"\n        rowGap=\"3x\"\n      >\n        <TextLabel>\n          You can use the <Code>formatDate</Code> prop to return a formatted date string in the given format and locale.\n        </TextLabel>\n        <CodeBlock>\n          {`// format\\nimport format from 'date-fns/format';\\n\\n// locale\\nimport enLocale from 'date-fns/locale/en-US'; // English (United States)\\nimport deLocale from 'date-fns/locale/de'; // Deutsch\\nimport esLocale from 'date-fns/locale/es'; // Espa\xf1ol\\nimport frLocale from 'date-fns/locale/fr'; // Fran\xe7ais\\nimport itLocale from 'date-fns/locale/it'; // Italiano\\nimport jaLocale from 'date-fns/locale/ja'; // 日本語\\nimport koLocale from 'date-fns/locale/ko'; // 한국어\\nimport zhCNLocale from 'date-fns/locale/zh-CN'; // 简体中文\\nimport zhTWLocale from 'date-fns/locale/zh-TW'; // 繁體中文`}\n        </CodeBlock>\n        <CodeBlock>\n          {`// DatePicker component\\nformatDate={(date, format, options) => {\\n  return format(date, format, { locale: enLocale });\\n}}`}\n        </CodeBlock>\n      </Flex>\n      <Divider my=\"4x\" />\n      <Box mb=\"4x\">\n        <Text fontSize=\"lg\" lineHeight=\"lg\">\n          DatePicker props\n        </Text>\n      </Box>\n      <FormGroup>\n        <Box mb=\"2x\">\n          <TextLabel>\n            firstDayOfWeek\n          </TextLabel>\n        </Box>\n        <ButtonGroup\n          variant=\"secondary\"\n          css={{\n            '> *:not(:first-of-type)': {\n              marginLeft: -1\n            }\n          }}\n        >\n          {[0, 1, 2, 3, 4, 5, 6].map(value => (\n            <Button\n              key={value}\n              selected={value === firstDayOfWeek}\n              onClick={changeFirstDayOfWeekBy(value)}\n              minWidth=\"15x\"\n            >\n              {value}\n            </Button>\n          ))}\n        </ButtonGroup>\n      </FormGroup>\n      <FormGroup>\n        <Box mb=\"2x\">\n          <TextLabel>\n            {dateOption === 'none' && `value={null}`}\n            {dateOption === 'today' && `value={new Date()}`}\n            {dateOption === 'invalid' && `value={new Date('')}`}\n          </TextLabel>\n        </Box>\n        <ButtonGroup\n          variant=\"secondary\"\n          css={{\n            '> *:not(:first-of-type)': {\n              marginLeft: -1\n            }\n          }}\n        >\n          {['none', 'today', 'invalid'].map(value => (\n            <Button\n              key={value}\n              selected={value === dateOption}\n              onClick={changeDateOptionBy(value)}\n              minWidth=\"15x\"\n            >\n              {{\n                'none': 'None',\n                'today': 'Today',\n                'invalid': 'Invalid Date',\n              }[value]}\n            </Button>\n          ))}\n        </ButtonGroup>\n      </FormGroup>\n      <FormGroup>\n        <Box mb=\"2x\">\n          <TextLabel>\n            minDate={minDate ? `{new Date('${minDate}'}}` : ''}\n          </TextLabel>\n        </Box>\n        <Input\n          type=\"date\"\n          value={minDate}\n          onChange={(e) => setMinDate(e.target.value)}\n          width=\"auto\"\n        />\n      </FormGroup>\n      <FormGroup>\n        <Box mb=\"2x\">\n          <TextLabel>\n            maxDate={maxDate ? `{new Date('${maxDate}'}}` : ''}\n          </TextLabel>\n        </Box>\n        <Input\n          type=\"date\"\n          value={maxDate}\n          onChange={(e) => setMaxDate(e.target.value)}\n          width=\"auto\"\n        />\n      </FormGroup>\n      <FormGroup>\n        <Box mb=\"2x\">\n          <TextLabel>\n            shouldDisableDate\n          </TextLabel>\n        </Box>\n        <ButtonGroup\n          variant=\"secondary\"\n          css={{\n            '> *:not(:first-of-type)': {\n              marginLeft: -1\n            }\n          }}\n        >\n          {['none', 'weekdays', 'weekends'].map(value => (\n            <Button\n              key={value}\n              selected={value === shouldDisableDateOption}\n              onClick={changeShouldDisableDateOptionBy(value)}\n              minWidth=\"15x\"\n            >\n              {{\n                'none': 'None',\n                'weekdays': 'Disable Weekdays',\n                'weekends': 'Disable Weekends',\n              }[value]}\n            </Button>\n          ))}\n        </ButtonGroup>\n      </FormGroup>\n      <FormGroup>\n        <Box mb=\"2x\">\n          <TextLabel>\n            inputFormat\n          </TextLabel>\n        </Box>\n        <ButtonGroup\n          variant=\"secondary\"\n          css={{\n            '> *:not(:first-of-type)': {\n              marginLeft: -1\n            }\n          }}\n        >\n          {inputFormats.map(value => (\n            <Button\n              key={value}\n              selected={value === inputFormat}\n              onClick={changeInputFormatBy(value)}\n              minWidth=\"15x\"\n            >\n              {value}\n            </Button>\n          ))}\n        </ButtonGroup>\n      </FormGroup>\n      <Divider my=\"4x\" />\n      <Box mb=\"4x\">\n        <Text fontSize=\"lg\" lineHeight=\"lg\">\n          DateInput props\n        </Text>\n      </Box>\n      <FormGroup>\n        <TextLabel display=\"flex\" alignItems=\"center\">\n          <Checkbox\n            checked={readOnly}\n            onChange={toggleReadOnly}\n          />\n          <Space width=\"2x\" />\n          <Text fontFamily=\"mono\" whiteSpace=\"nowrap\">readOnly</Text>\n        </TextLabel>\n      </FormGroup>\n    </>\n  );\n});\n"})}),"\n",(0,a.jsx)(e.h3,{children:"Date time range picker"}),"\n",(0,a.jsx)(e.pre,{noInline:!0,children:(0,a.jsx)(e.code,{className:"language-jsx",children:'const CustomDateInput = ({\n  inputFormat = \'yyyy-MM-dd\',\n  defaultValue,\n  onChange,\n  ...rest\n}) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n  const [value, setValue] = React.useState(defaultValue);\n  const handleChange = (value) => {\n    setValue(value);\n    onChange(value);\n  };\n\n  return (\n    <DatePicker\n      value={value}\n      onChange={handleChange}\n      inputFormat={inputFormat}\n      renderInput={({ error, inputProps }) => {\n        const _error = !!inputProps.value && error;\n\n        return (\n          <InputControl\n            {...inputProps}\n            readOnly\n            error={_error}\n            placeholder={inputFormat}\n            borderTopRightRadius={0}\n            borderBottomRightRadius={0}\n            width={130}\n            startAdornment={(\n              <InputAdornment color={colorStyle.color.secondary}>\n                <Icon icon="calendar" />\n              </InputAdornment>\n            )}\n          />\n        );\n      }}\n      {...rest}\n    />\n  );\n};\n\nconst CustomTimeInput = ({\n  onChange,\n  ...rest\n}) => {\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n  const handleTimeInputChange = (event) => {\n    const value = event.target.value;\n    onChange(value);\n  };\n\n  return (\n    <InputControl\n      onChange={handleTimeInputChange}\n      width={110}\n      borderTopLeftRadius={0}\n      borderBottomLeftRadius={0}\n      startAdornment={(\n        <InputAdornment color={colorStyle.color.secondary}>\n          <Icon icon="clock" />\n        </InputAdornment>\n      )}\n      {...rest}\n    />\n  );\n};\n\nconst DateTimePicker = ({\n  startDate: startDateProp,\n  startTime: startTimeProp,\n  endDate: endDateProp,\n  endTime: endTimeProp,\n  onApply,\n  onClose,\n}) => {\n  const inputFormat = \'yyyy-MM-dd\';\n  const [colorMode] = useColorMode();\n  const [colorStyle] = useColorStyle({ colorMode });\n  const [startDate, setStartDate] = React.useState(startDateProp);\n  const [startTime, setStartTime] = React.useState(startTimeProp);\n  const [endDate, setEndDate] = React.useState(endDateProp);\n  const [endTime, setEndTime] = React.useState(endTimeProp);\n  const [isInvalid, setIsInvalid] = React.useState(false);\n  const isValidDate = (value) => {\n    if (value instanceof Date) {\n      return !!value.getTime();\n    }\n    // The date format is "yyyy-MM-dd"\n    const pattern = /([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))/;\n    return !!String(value).match(pattern);\n  };\n  const isValidTime = (value) => {\n    // The time format is "HH:mm:ss"\n    const pattern = /^(?:2[0-3]|[01]?[0-9]):[0-5][0-9]:[0-5][0-9]$/;\n    return !!String(value).match(pattern);\n  };\n  const handleStartDateChange = (value) => {\n    setStartDate(value);\n  };\n  const handleEndDateChange = (value) => {\n    setEndDate(value);\n  };\n  const handleStartTimeChange = (value) => {\n    setStartTime(value);\n  };\n  const handleEndTimeChange = (value) => {\n    setEndTime(value);\n  };\n  const handleApplyClick = () => {\n    onApply({\n      startDate,\n      startTime,\n      endDate,\n      endTime,\n    });\n  };\n\n  React.useEffect(() => {\n    const isValidStartDate = isValidDate(startDate);\n    const isValidStartTime = isValidTime(startTime);\n    const isValidEndDate = isValidDate(endDate);\n    const isValidEndTime = isValidTime(endTime);\n\n    if (!(isValidStartDate && isValidEndDate && isValidStartTime && isValidEndTime)) {\n      setIsInvalid(true);\n      return;\n    }\n\n    // if the end datetime is the earlier than the start datetime, then set the end datetime to the start datetime\n    if ((Date.parse(`${formatDate(endDate)} ${endTime}`)).valueOf() < (Date.parse(`${formatDate(startDate)} ${startTime}`)).valueOf()){\n      setEndDate(startDate);\n      setEndTime(\'23:59:59\');\n    } else {\n      setIsInvalid(false);\n    }\n  }, [startDate, startTime, endDate, endTime]);\n\n  return (\n    <Box\n      backgroundColor={colorStyle.background.tertiary}\n      position="absolute"\n      left="100%"\n      top={0}\n      px="3x"\n      py="3x"\n      borderLeft={1}\n      borderColor={colorStyle.divider}\n    >\n      <Flex\n        alignItems="center"\n        columnGap="3x"\n        mb="6x"\n      >\n        <Icon\n          icon="chevron-left"\n          color={colorStyle.color.secondary}\n        />\n        <Text fontSize="md" lineHeight="md">\n          Custom Period\n        </Text>\n      </Flex>\n      <Grid\n        templateColumns="auto 1fr"\n        alignItems="center"\n        rowGap="3x"\n        mb="3x"\n      >\n        <Text minWidth="16x">\n          From:\n        </Text>\n        <Flex>\n          <CustomDateInput\n            inputFormat={inputFormat}\n            isInvalid={!isValidDate(startDate)}\n            defaultValue={startDate}\n            onChange={handleStartDateChange}\n          />\n          <CustomTimeInput\n            isInvalid={!isValidTime(startTime)}\n            defaultValue={startTime}\n            onChange={handleStartTimeChange}\n          />\n        </Flex>\n        <Text minWidth="16x">\n          To:\n        </Text>\n        <Flex>\n          <CustomDateInput\n            inputFormat={inputFormat}\n            isInvalid={!isValidDate(endDate)}\n            value={endDate}\n            onChange={handleEndDateChange}\n          />\n          <CustomTimeInput\n            isInvalid={!isValidTime(endTime)}\n            value={endTime}\n            onChange={handleEndTimeChange}\n          />\n        </Flex>\n      </Grid>\n      <Flex justifyContent="flex-end">\n        <Grid templateColumns="1fr 1fr" columnGap="2x">\n          <Button\n            variant="primary"\n            disabled={isInvalid}\n            onClick={handleApplyClick}\n          >\n            Apply\n          </Button>\n          <Button\n            variant="secondary"\n            onClick={onClose}\n          >\n            Cancel\n          </Button>\n        </Grid>\n      </Flex>\n    </Box>\n  );\n};\n\nconst stateReducer = (prevState, nextState) => ({\n  ...prevState,\n  ...(typeof nextState === \'function\' ? nextState(prevState) : nextState),\n});\n\nconst padTo2Digits = (num) => {\n  return num.toString().padStart(2, \'0\');\n};\n\nconst formatDate = (date) => {\n  return (\n    [\n      date.getFullYear(),\n      padTo2Digits(date.getMonth() + 1),\n      padTo2Digits(date.getDate()),\n    ].join(\'-\')\n  );\n};\n\nconst formatTime = (date) => {\n  const hours = date.getHours();\n  const minutes = date.getMinutes();\n  const seconds = date.getSeconds();\n  return (\n    [\n      padTo2Digits(hours),\n      padTo2Digits(minutes),\n      padTo2Digits(seconds),\n    ].join(\':\')\n  );\n};\n\nfunction Example() {\n  const inputFormat = \'yyyy-MM-dd\';\n  const today = new Date();\n  const [state, setState] = React.useReducer(stateReducer, {\n    value: \'1d\',\n    isDateTimePickerVisible: false,\n    startDate: today,\n    startTime: \'00:00:00\',\n    endDate: today,\n    endTime: \'23:59:59\',\n  });\n  const handleMenuItemClick = (event) => {\n    const value = event.currentTarget.getAttribute(\'value\');\n    if (value === \'custom\') {\n      event.preventDefault();\n      if (!state.isDateTimePickerVisible) {\n        setState({\n          isDateTimePickerVisible: true,\n        });\n      }\n      return;\n    }\n\n    setState({\n      value,\n      isDateTimePickerVisible: false,\n    });\n  };\n  const mapValueToLabel = (value) => {\n    if (value === \'custom\') {\n      return \'Custom range\';\n    }\n    return {\n      \'1d\': \'Last 24 hours\',\n      \'7d\': \'Last 7 days\',\n      \'30d\': \'Last 30 days\',\n      \'90d\': \'Last 90 days\',\n    }[value];\n  };\n  const dateTimeRange = (() => {\n    const value = state.value;\n\n    if (value === \'custom\') {\n      return [\n        `${formatDate(state.startDate)} ${state.startTime}`,\n        `${formatDate(state.endDate)} ${state.endTime}`,\n      ];\n    }\n\n    const days = parseInt(value, 10);\n    if (days > 0) {\n      const now = new Date();\n      const date = new Date(now.setDate(now.getDate() - days));\n      return [\n        `${formatDate(date)} ${formatTime(date)}`,\n        `${formatDate(new Date())} ${formatTime(new Date())}`,\n      ];\n    }\n\n    return [];\n  })();\n\n  React.useEffect(() => {\n    if (state.value === \'custom\' && !state.isDateTimePickerVisible) {\n      setState({\n        isDateTimePickerVisible: true,\n      });\n    }\n  }, [state.value, state.isDateTimePickerVisible]);\n\n  return (\n    <>\n      <Flex mb="3x">\n        <TextLabel>Date & time range:</TextLabel>\n        <Space width="3x" />\n        <Text>{dateTimeRange[0]}</Text>\n        <Text px="1x">to</Text>\n        <Text>{dateTimeRange[1]}</Text>\n      </Flex>\n      <Menu\n        onClose={() => {\n          if (state.isDateTimePickerVisible) {\n            setState({ isDateTimePickerVisible: false });\n          }\n        }}\n      >\n        {({ closeMenu }) => (\n          <>\n            <MenuButton variant="secondary">\n              <Text>{mapValueToLabel(state.value)}</Text>\n            </MenuButton>\n            <MenuList width="max-content">\n              {state.isDateTimePickerVisible && (\n                <DateTimePicker\n                  inputFormat={inputFormat}\n                  startDate={state.startDate}\n                  startTime={state.startTime}\n                  endDate={state.endDate}\n                  endTime={state.endTime}\n                  onApply={({ startDate, startTime, endDate, endTime }) => {\n                    closeMenu();\n                    setState({\n                      value: \'custom\',\n                      startDate,\n                      startTime,\n                      endDate,\n                      endTime,\n                    });\n                  }}\n                  onClose={() => {\n                    closeMenu();\n                  }}\n                />\n              )}\n              {[\'1d\', \'7d\', \'30d\', \'90d\'].map(value => (\n                <MenuItem\n                  key={value}\n                  value={value}\n                  onClick={handleMenuItemClick}\n                >\n                  {mapValueToLabel(value)}\n                </MenuItem>\n              ))}\n              <MenuItem\n                value="custom"\n                onClick={handleMenuItemClick}\n              >\n                Custom Period\n                <Space width="2x" />\n                <Icon icon="angle-right" />\n              </MenuItem>\n            </MenuList>\n          </>\n        )}\n      </Menu>\n    </>\n  );\n}\n\nrender(<Example />);\n'})}),"\n",(0,a.jsx)(e.h2,{children:"Props"}),"\n",(0,a.jsx)(e.h3,{children:"DatePicker"}),"\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{align:"left",children:"Name"}),(0,a.jsx)(e.th,{align:"left",children:"Type"}),(0,a.jsx)(e.th,{align:"left",children:"Default"}),(0,a.jsx)(e.th,{align:"left",children:"Description"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{align:"left",children:"defaultValue"}),(0,a.jsx)(e.td,{align:"left",children:"Date | string"}),(0,a.jsx)(e.td,{align:"left"}),(0,a.jsxs)(e.td,{align:"left",children:["The default selected date. If the ",(0,a.jsx)(e.code,{children:"defaultValue"})," is a string, it will be parsed to a ",(0,a.jsx)(e.code,{children:"Date"})," object in accordance with the ",(0,a.jsx)(e.code,{children:"inputFormat"}),"."]})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{align:"left",children:"firstDayOfWeek"}),(0,a.jsx)(e.td,{align:"left",children:"number"}),(0,a.jsx)(e.td,{align:"left",children:"0"}),(0,a.jsxs)(e.td,{align:"left",children:["The first day of the week.",(0,a.jsx)("br",{}),"0 = Sunday",(0,a.jsx)("br",{}),"1 = Monday",(0,a.jsx)("br",{}),"2 = Tuesday",(0,a.jsx)("br",{}),"3 = Wednesday",(0,a.jsx)("br",{}),"4 = Thursday",(0,a.jsx)("br",{}),"5 = Friday",(0,a.jsx)("br",{}),"6 = Saturday"]})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{align:"left",children:"formatDate"}),(0,a.jsx)(e.td,{align:"left",children:"function"}),(0,a.jsx)(e.td,{align:"left"}),(0,a.jsxs)(e.td,{align:"left",children:["A callback called to return the formatted date string in the given format.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("b",{children:"Signature"}),(0,a.jsx)("br",{}),(0,a.jsx)(e.code,{children:"function(date, format, options) => void"}),(0,a.jsx)("br",{}),(0,a.jsx)(e.em,{children:"date"}),": The original date.",(0,a.jsx)("br",{}),(0,a.jsx)(e.em,{children:"format"}),": The string of ",(0,a.jsx)(e.a,{href:"https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table",children:"format tokens"}),".",(0,a.jsx)("br",{}),(0,a.jsx)(e.em,{children:"options"}),": An object with options."]})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{align:"left",children:"inputFormat"}),(0,a.jsx)(e.td,{align:"left",children:"string"}),(0,a.jsx)(e.td,{align:"left",children:"'yyyy-MM-dd'"}),(0,a.jsxs)(e.td,{align:"left",children:["The default date format is ISO 8601 (",(0,a.jsx)(e.code,{children:"yyyy-MM-dd"}),"). You can change the input format in accordance with the locale. The input value will be parsed to a ",(0,a.jsx)(e.code,{children:"Date"})," object with ",(0,a.jsx)(e.code,{children:"dd"})," as day, ",(0,a.jsx)(e.code,{children:"MM"})," as month, and ",(0,a.jsx)(e.code,{children:"yyyy"})," as year."]})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{align:"left",children:"offset"}),(0,a.jsx)(e.td,{align:"left",children:"[skidding, distance]"}),(0,a.jsx)(e.td,{align:"left",children:"[0, 0]"}),(0,a.jsx)(e.td,{align:"left",children:"The skidding and distance of the date picker."})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{align:"left",children:"minDate"}),(0,a.jsx)(e.td,{align:"left",children:"Date"}),(0,a.jsx)(e.td,{align:"left"}),(0,a.jsx)(e.td,{align:"left",children:"The minimum date that can be selected."})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{align:"left",children:"maxDate"}),(0,a.jsx)(e.td,{align:"left",children:"Date"}),(0,a.jsx)(e.td,{align:"left"}),(0,a.jsx)(e.td,{align:"left",children:"The maximum date that can be selected."})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{align:"left",children:"onChange"}),(0,a.jsx)(e.td,{align:"left",children:"function"}),(0,a.jsx)(e.td,{align:"left"}),(0,a.jsxs)(e.td,{align:"left",children:["A callback called when the value (the selected date) changes.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("b",{children:"Signature:"}),(0,a.jsx)("br",{}),(0,a.jsx)(e.code,{children:"function(value) => void"}),(0,a.jsx)("br",{}),(0,a.jsx)(e.em,{children:"value"}),": The selected date."]})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{align:"left",children:"onError"}),(0,a.jsx)(e.td,{align:"left",children:"function"}),(0,a.jsx)(e.td,{align:"left"}),(0,a.jsxs)(e.td,{align:"left",children:["An error-first callback called when the date validation returns an error (or the date is valid after error).",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("b",{children:"Signature"}),(0,a.jsx)("br",{}),(0,a.jsx)(e.code,{children:"function(error, value) => void"}),(0,a.jsx)("br",{}),(0,a.jsx)(e.em,{children:"error"}),": The error message. It will be ",(0,a.jsx)(e.code,{children:"undefined"})," if the date is valid after error.",(0,a.jsx)("br",{}),(0,a.jsx)(e.em,{children:"value"}),": The selected date."]})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{align:"left",children:"placement"}),(0,a.jsx)(e.td,{align:"left",children:"string"}),(0,a.jsx)(e.td,{align:"left",children:"'bottom-start'"}),(0,a.jsx)(e.td,{align:"left",children:"The placement of the date picker. One of: 'top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end'"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{align:"left",children:"renderInput"}),(0,a.jsx)(e.td,{align:"left",children:"function"}),(0,a.jsx)(e.td,{align:"left"}),(0,a.jsxs)(e.td,{align:"left",children:["The ",(0,a.jsx)(e.code,{children:"renderInput"})," prop allows you to customize the rendered input.",(0,a.jsx)("br",{}),"The ",(0,a.jsx)(e.code,{children:"props"})," argument of this render prop contains props of ",(0,a.jsx)(e.a,{href:"../../components/inputcontrol",children:"InputControl"})," that you need to forward.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("b",{children:"Signature:"}),(0,a.jsx)("br",{}),(0,a.jsx)(e.code,{children:"function(props) => ReactNode"}),(0,a.jsx)("br",{}),(0,a.jsx)(e.em,{children:"props"}),": The props of the input.",(0,a.jsx)("br",{}),(0,a.jsx)(e.em,{children:"returns (ReactNode)"}),": The node to render as the input."]})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{align:"left",children:"shouldDisableDate"}),(0,a.jsx)(e.td,{align:"left",children:"function"}),(0,a.jsx)(e.td,{align:"left"}),(0,a.jsxs)(e.td,{align:"left",children:["Disable specific date.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("b",{children:"Signature:"}),(0,a.jsx)("br",{}),(0,a.jsx)(e.code,{children:"function(date) => boolean"}),(0,a.jsx)("br",{}),(0,a.jsx)(e.em,{children:"date"}),": The date to check.",(0,a.jsx)("br",{}),(0,a.jsx)(e.em,{children:"returns (boolean)"}),": Return ",(0,a.jsx)(e.code,{children:"true"})," if the date will be disabled."]})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{align:"left",children:"value"}),(0,a.jsx)(e.td,{align:"left",children:"Date | string"}),(0,a.jsx)(e.td,{align:"left"}),(0,a.jsxs)(e.td,{align:"left",children:["The selected date. If the ",(0,a.jsx)(e.code,{children:"value"})," is a string, it will be parsed to a ",(0,a.jsx)(e.code,{children:"Date"})," object in accordance with the ",(0,a.jsx)(e.code,{children:"inputFormat"}),"."]})]})]})]})]})}e.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,o.ah)(),n.components).wrapper;return e?(0,a.jsx)(e,Object.assign({},n,{children:(0,a.jsx)(r,n)})):r(n)}},3090:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/lab/date-pickers/datepicker",function(){return t(8923)}])}},function(n){n.O(0,[9774,2888,179],function(){return n(n.s=3090)}),_N_E=n.O()}]);