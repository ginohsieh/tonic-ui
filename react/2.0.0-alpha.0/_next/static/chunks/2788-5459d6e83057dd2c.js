"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2788],{77883:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.FORMAT_PLAIN=t.FORMAT_HTML=t.FORMATS=void 0;var n="html";t.FORMAT_HTML=n;var r="plain";t.FORMAT_PLAIN=r;var a=[n,r];t.FORMATS=a},779:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.LINE_ENDINGS=void 0,t.LINE_ENDINGS={POSIX:"\n",WIN32:"\r\n"}},36021:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.SUPPORTED_PLATFORMS=void 0,t.SUPPORTED_PLATFORMS={DARWIN:"darwin",LINUX:"linux",WIN32:"win32"}},29688:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.UNIT_WORDS=t.UNIT_WORD=t.UNIT_SENTENCES=t.UNIT_SENTENCE=t.UNIT_PARAGRAPHS=t.UNIT_PARAGRAPH=t.UNITS=void 0;var n="words";t.UNIT_WORDS=n;var r="word";t.UNIT_WORD=r;var a="sentences";t.UNIT_SENTENCES=a;var o="sentence";t.UNIT_SENTENCE=o;var i="paragraphs";t.UNIT_PARAGRAPHS=i;var u="paragraph";t.UNIT_PARAGRAPH=u;var d=[n,r,a,o,i,u];t.UNITS=d},90783:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.WORDS=void 0,t.WORDS=["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"]},72788:function(e,t,n){t.fH=void 0;var r,a=n(77883),o=n(29688),i=n(90783),u=(r=n(55548))&&r.__esModule?r:{default:r};t.fH=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.count,n=void 0===t?1:t,r=e.format,d=void 0===r?a.FORMAT_PLAIN:r,c=e.paragraphLowerBound,s=e.paragraphUpperBound,f=e.random,l=e.sentenceLowerBound,v=e.sentenceUpperBound,m=e.units,p=void 0===m?o.UNIT_SENTENCES:m,h=e.words,g=void 0===h?i.WORDS:h,P=e.suffix,_=new u.default({random:f,sentencesPerParagraph:{max:void 0===s?7:s,min:void 0===c?3:c},words:g,wordsPerSentence:{max:void 0===v?15:v,min:void 0===l?5:l}},d,void 0===P?"":P);switch(p){case o.UNIT_PARAGRAPHS:case o.UNIT_PARAGRAPH:return _.generateParagraphs(n);case o.UNIT_SENTENCES:case o.UNIT_SENTENCE:return _.generateSentences(n);case o.UNIT_WORDS:case o.UNIT_WORD:return _.generateWords(n);default:return""}}},55548:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=n(77883),o=n(779),i=(r=n(40928))&&r.__esModule?r:{default:r},u=n(23749),d=function(){var e;function t(){var e,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.FORMAT_PLAIN,u=arguments.length>2?arguments[2]:void 0;if(!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t),this.format=o,this.suffix=u,n=void 0,(e="generator")in this?Object.defineProperty(this,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):this[e]=n,-1===a.FORMATS.indexOf(o.toLowerCase()))throw Error("".concat(o," is an invalid format. Please use ").concat(a.FORMATS.join(" or "),"."));this.generator=new i.default(r)}return e=[{key:"getLineEnding",value:function(){return this.suffix?this.suffix:!(0,u.isReactNative)()&&(0,u.isNode)()&&(0,u.isWindows)()?o.LINE_ENDINGS.WIN32:o.LINE_ENDINGS.POSIX}},{key:"formatString",value:function(e){return this.format===a.FORMAT_HTML?"<p>".concat(e,"</p>"):e}},{key:"formatStrings",value:function(e){var t=this;return e.map(function(e){return t.formatString(e)})}},{key:"generateWords",value:function(e){return this.formatString(this.generator.generateRandomWords(e))}},{key:"generateSentences",value:function(e){return this.formatString(this.generator.generateRandomParagraph(e))}},{key:"generateParagraphs",value:function(e){var t=this.generator.generateRandomParagraph.bind(this.generator);return this.formatStrings((0,u.makeArrayOfStrings)(e,t)).join(this.getLineEnding())}}],function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}();t.default=d},40928:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(90783),a=n(23749);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){var e;function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.sentencesPerParagraph,a=void 0===n?{max:7,min:3}:n,i=e.wordsPerSentence,u=void 0===i?{max:15,min:5}:i,d=e.random,c=(e.seed,e.words),s=void 0===c?r.WORDS:c;if(!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t),o(this,"sentencesPerParagraph",void 0),o(this,"wordsPerSentence",void 0),o(this,"random",void 0),o(this,"words",void 0),a.min>a.max)throw Error("Minimum number of sentences per paragraph (".concat(a.min,") cannot exceed maximum (").concat(a.max,")."));if(u.min>u.max)throw Error("Minimum number of words per sentence (".concat(u.min,") cannot exceed maximum (").concat(u.max,")."));this.sentencesPerParagraph=a,this.words=s,this.wordsPerSentence=u,this.random=d||Math.random}return e=[{key:"generateRandomInteger",value:function(e,t){return Math.floor(this.random()*(t-e+1)+e)}},{key:"generateRandomWords",value:function(e){var t=this,n=this.wordsPerSentence,r=n.min,o=n.max,i=e||this.generateRandomInteger(r,o);return(0,a.makeArrayOfLength)(i).reduce(function(e,n){return"".concat(t.pluckRandomWord()," ").concat(e)},"").trim()}},{key:"generateRandomSentence",value:function(e){return"".concat((0,a.capitalize)(this.generateRandomWords(e)),".")}},{key:"generateRandomParagraph",value:function(e){var t=this,n=this.sentencesPerParagraph,r=n.min,o=n.max,i=e||this.generateRandomInteger(r,o);return(0,a.makeArrayOfLength)(i).reduce(function(e,n){return"".concat(t.generateRandomSentence()," ").concat(e)},"").trim()}},{key:"pluckRandomWord",value:function(){var e=this.words.length-1,t=this.generateRandomInteger(0,e);return this.words[t]}}],function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}();t.default=i},79998:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){var t=e.trim();return t.charAt(0).toUpperCase()+t.slice(1)}},23749:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"capitalize",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"isNode",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"isReactNative",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"isWindows",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"makeArrayOfLength",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"makeArrayOfStrings",{enumerable:!0,get:function(){return d.default}});var r=c(n(79998)),a=c(n(18077)),o=c(n(66002)),i=c(n(89759)),u=c(n(13385)),d=c(n(74523));function c(e){return e&&e.__esModule?e:{default:e}}},18077:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(){return!!e.exports}},66002:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(){var e=!1;try{e="ReactNative"===navigator.product}catch(t){e=!1}return e}},89759:function(e,t,n){var r=n(93542);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(36021);t.default=function(){var e=!1;try{e=r.platform===a.SUPPORTED_PLATFORMS.WIN32}catch(t){e=!1}return e}},13385:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Array.apply(null,Array(e)).map(function(e,t){return t})}},74523:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(13385))&&r.__esModule?r:{default:r};t.default=function(e,t){return(0,a.default)(e).map(function(){return t()})}}}]);