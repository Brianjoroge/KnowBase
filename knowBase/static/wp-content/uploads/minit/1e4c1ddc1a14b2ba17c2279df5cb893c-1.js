

/* Minit: https://demo.mekshq.com/typology/wp-content/uploads/minit/fc9700d9c5fa0b0d7856a8ba2e26db8b.js */


/* Minit: /wp-includes/js/jquery/jquery.min.js */
/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
jQuery.noConflict();



/* Minit: /wp-includes/js/jquery/jquery-migrate.min.js */
/*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,window)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery"),window):t(jQuery,window)}(function(s,n){"use strict";function e(e){return 0<=function(e,t){for(var r=/^(\d+)\.(\d+)\.(\d+)/,n=r.exec(e)||[],o=r.exec(t)||[],i=1;i<=3;i++){if(+o[i]<+n[i])return 1;if(+n[i]<+o[i])return-1}return 0}(s.fn.jquery,e)}s.migrateVersion="3.3.2",n.console&&n.console.log&&(s&&e("3.0.0")||n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),s.migrateWarnings&&n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),n.console.log("JQMIGRATE: Migrate is installed"+(s.migrateMute?"":" with logging active")+", version "+s.migrateVersion));var r={};function u(e){var t=n.console;s.migrateDeduplicateWarnings&&r[e]||(r[e]=!0,s.migrateWarnings.push(e),t&&t.warn&&!s.migrateMute&&(t.warn("JQMIGRATE: "+e),s.migrateTrace&&t.trace&&t.trace()))}function t(e,t,r,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return u(n),r},set:function(e){u(n),r=e}})}function o(e,t,r,n){e[t]=function(){return u(n),r.apply(this,arguments)}}s.migrateDeduplicateWarnings=!0,s.migrateWarnings=[],void 0===s.migrateTrace&&(s.migrateTrace=!0),s.migrateReset=function(){r={},s.migrateWarnings.length=0},"BackCompat"===n.document.compatMode&&u("jQuery is not compatible with Quirks Mode");var i,a,c,d={},l=s.fn.init,p=s.find,f=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,y=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,m=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;for(i in s.fn.init=function(e){var t=Array.prototype.slice.call(arguments);return"string"==typeof e&&"#"===e&&(u("jQuery( '#' ) is not a valid selector"),t[0]=[]),l.apply(this,t)},s.fn.init.prototype=s.fn,s.find=function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&f.test(t))try{n.document.querySelector(t)}catch(e){t=t.replace(y,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{n.document.querySelector(t),u("Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}catch(e){u("Attribute selector with '#' was not fixed: "+r[0])}}return p.apply(this,r)},p)Object.prototype.hasOwnProperty.call(p,i)&&(s.find[i]=p[i]);o(s.fn,"size",function(){return this.length},"jQuery.fn.size() is deprecated and removed; use the .length property"),o(s,"parseJSON",function(){return JSON.parse.apply(null,arguments)},"jQuery.parseJSON is deprecated; use JSON.parse"),o(s,"holdReady",s.holdReady,"jQuery.holdReady is deprecated"),o(s,"unique",s.uniqueSort,"jQuery.unique is deprecated; use jQuery.uniqueSort"),t(s.expr,"filters",s.expr.pseudos,"jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),t(s.expr,":",s.expr.pseudos,"jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),e("3.1.1")&&o(s,"trim",function(e){return null==e?"":(e+"").replace(m,"")},"jQuery.trim is deprecated; use String.prototype.trim"),e("3.2.0")&&(o(s,"nodeName",function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},"jQuery.nodeName is deprecated"),o(s,"isArray",Array.isArray,"jQuery.isArray is deprecated; use Array.isArray")),e("3.3.0")&&(o(s,"isNumeric",function(e){var t=typeof e;return("number"==t||"string"==t)&&!isNaN(e-parseFloat(e))},"jQuery.isNumeric() is deprecated"),s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){d["[object "+t+"]"]=t.toLowerCase()}),o(s,"type",function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?d[Object.prototype.toString.call(e)]||"object":typeof e},"jQuery.type is deprecated"),o(s,"isFunction",function(e){return"function"==typeof e},"jQuery.isFunction() is deprecated"),o(s,"isWindow",function(e){return null!=e&&e===e.window},"jQuery.isWindow() is deprecated")),s.ajax&&(a=s.ajax,c=/(=)\?(?=&|$)|\?\?/,s.ajax=function(){var e=a.apply(this,arguments);return e.promise&&(o(e,"success",e.done,"jQXHR.success is deprecated and removed"),o(e,"error",e.fail,"jQXHR.error is deprecated and removed"),o(e,"complete",e.always,"jQXHR.complete is deprecated and removed")),e},e("4.0.0")||s.ajaxPrefilter("+json",function(e){!1!==e.jsonp&&(c.test(e.url)||"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&c.test(e.data))&&u("JSON-to-JSONP auto-promotion is deprecated")}));var g=s.fn.removeAttr,h=s.fn.toggleClass,v=/\S+/g;function j(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}s.fn.removeAttr=function(e){var r=this;return s.each(e.match(v),function(e,t){s.expr.match.bool.test(t)&&(u("jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}),g.apply(this,arguments)};var Q,b=!(s.fn.toggleClass=function(t){return void 0!==t&&"boolean"!=typeof t?h.apply(this,arguments):(u("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&s.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==t&&s.data(this,"__className__")||"")}))}),w=/^[a-z]/,x=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;s.swap&&s.each(["height","width","reliableMarginRight"],function(e,t){var r=s.cssHooks[t]&&s.cssHooks[t].get;r&&(s.cssHooks[t].get=function(){var e;return b=!0,e=r.apply(this,arguments),b=!1,e})}),s.swap=function(e,t,r,n){var o,i,a={};for(i in b||u("jQuery.swap() is undocumented and deprecated"),t)a[i]=e.style[i],e.style[i]=t[i];for(i in o=r.apply(e,n||[]),t)e.style[i]=a[i];return o},e("3.4.0")&&"undefined"!=typeof Proxy&&(s.cssProps=new Proxy(s.cssProps||{},{set:function(){return u("JQMIGRATE: jQuery.cssProps is deprecated"),Reflect.set.apply(this,arguments)}})),s.cssNumber||(s.cssNumber={}),Q=s.fn.css,s.fn.css=function(e,t){var r,n,o=this;return e&&"object"==typeof e&&!Array.isArray(e)?(s.each(e,function(e,t){s.fn.css.call(o,e,t)}),this):("number"==typeof t&&(r=j(e),n=r,w.test(n)&&x.test(n[0].toUpperCase()+n.slice(1))||s.cssNumber[r]||u('Number-typed values are deprecated for jQuery.fn.css( "'+e+'", value )')),Q.apply(this,arguments))};var A,k,S,M,N=s.data;s.data=function(e,t,r){var n,o,i;if(t&&"object"==typeof t&&2===arguments.length){for(i in n=s.hasData(e)&&N.call(this,e),o={},t)i!==j(i)?(u("jQuery.data() always sets/gets camelCased names: "+i),n[i]=t[i]):o[i]=t[i];return N.call(this,e,o),t}return t&&"string"==typeof t&&t!==j(t)&&(n=s.hasData(e)&&N.call(this,e))&&t in n?(u("jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):N.apply(this,arguments)},s.fx&&(S=s.Tween.prototype.run,M=function(e){return e},s.Tween.prototype.run=function(){1<s.easing[this.easing].length&&(u("'jQuery.easing."+this.easing.toString()+"' should use only one argument"),s.easing[this.easing]=M),S.apply(this,arguments)},A=s.fx.interval||13,k="jQuery.fx.interval is deprecated",n.requestAnimationFrame&&Object.defineProperty(s.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return n.document.hidden||u(k),A},set:function(e){u(k),A=e}}));var R=s.fn.load,H=s.event.add,C=s.event.fix;s.event.props=[],s.event.fixHooks={},t(s.event.props,"concat",s.event.props.concat,"jQuery.event.props.concat() is deprecated and removed"),s.event.fix=function(e){var t,r=e.type,n=this.fixHooks[r],o=s.event.props;if(o.length){u("jQuery.event.props are deprecated and removed: "+o.join());while(o.length)s.event.addProp(o.pop())}if(n&&!n._migrated_&&(n._migrated_=!0,u("jQuery.event.fixHooks are deprecated and removed: "+r),(o=n.props)&&o.length))while(o.length)s.event.addProp(o.pop());return t=C.call(this,e),n&&n.filter?n.filter(t,e):t},s.event.add=function(e,t){return e===n&&"load"===t&&"complete"===n.document.readyState&&u("jQuery(window).on('load'...) called after load event occurred"),H.apply(this,arguments)},s.each(["load","unload","error"],function(e,t){s.fn[t]=function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?R.apply(this,e):(u("jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))}}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){s.fn[r]=function(e,t){return u("jQuery.fn."+r+"() event shorthand is deprecated"),0<arguments.length?this.on(r,null,e,t):this.trigger(r)}}),s(function(){s(n.document).triggerHandler("ready")}),s.event.special.ready={setup:function(){this===n.document&&u("'ready' event is deprecated")}},s.fn.extend({bind:function(e,t,r){return u("jQuery.fn.bind() is deprecated"),this.on(e,null,t,r)},unbind:function(e,t){return u("jQuery.fn.unbind() is deprecated"),this.off(e,null,t)},delegate:function(e,t,r,n){return u("jQuery.fn.delegate() is deprecated"),this.on(t,e,r,n)},undelegate:function(e,t,r){return u("jQuery.fn.undelegate() is deprecated"),1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},hover:function(e,t){return u("jQuery.fn.hover() is deprecated"),this.on("mouseenter",e).on("mouseleave",t||e)}});function T(e){var t=n.document.implementation.createHTMLDocument("");return t.body.innerHTML=e,t.body&&t.body.innerHTML}function P(e){var t=e.replace(O,"<$1></$2>");t!==e&&T(e)!==T(t)&&u("HTML tags must be properly nested and closed: "+e)}var O=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,q=s.htmlPrefilter;s.UNSAFE_restoreLegacyHtmlPrefilter=function(){s.htmlPrefilter=function(e){return P(e),e.replace(O,"<$1></$2>")}},s.htmlPrefilter=function(e){return P(e),q(e)};var D,_=s.fn.offset;s.fn.offset=function(){var e=this[0];return!e||e.nodeType&&e.getBoundingClientRect?_.apply(this,arguments):(u("jQuery.fn.offset() requires a valid DOM element"),arguments.length?this:void 0)},s.ajax&&(D=s.param,s.param=function(e,t){var r=s.ajaxSettings&&s.ajaxSettings.traditional;return void 0===t&&r&&(u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),D.call(this,e,t)});var E,F,J=s.fn.andSelf||s.fn.addBack;return s.fn.andSelf=function(){return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),J.apply(this,arguments)},s.Deferred&&(E=s.Deferred,F=[["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),"rejected"],["notify","progress",s.Callbacks("memory"),s.Callbacks("memory")]],s.Deferred=function(e){var i=E(),a=i.promise();return i.pipe=a.pipe=function(){var o=arguments;return u("deferred.pipe() is deprecated"),s.Deferred(function(n){s.each(F,function(e,t){var r="function"==typeof o[e]&&o[e];i[t[1]](function(){var e=r&&r.apply(this,arguments);e&&"function"==typeof e.promise?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===a?n.promise():this,r?[e]:arguments)})}),o=null}).promise()},e&&e.call(i,i),i},s.Deferred.exceptionHook=E.exceptionHook),s});




/* Minit: https://demo.mekshq.com/typology/wp-content/plugins/meks-exit-popup/assets/js/modal.js */
(function($) {

    $(document).ready(function() {


        var mks_ep_modal_displayed = false;

        /* Modal open manually helper */
        $('body').on('click', '.mks-ep-trigger-open', function(e) {
            e.preventDefault();
            mks_ep_open_modal($('.mks-ep-modal'), 'click-customizer');
            mks_ep_modal_displayed = true;
        });

        if (mks_ep_can_display_modal()) {

            /* Exit trigger */
            $(document).on('mouseleave', function(e) {
                if (!mks_ep_modal_displayed && (e.pageY - $(window).scrollTop()) < 0) {
                    mks_ep_open_modal($('.mks-ep-modal'), 'exit-demo');
                    mks_ep_modal_displayed = true;
                }
            });
        }

        /* Modal close */
        $('.mks-ep-modal').on('click', 'a.mks-ep-close-modal', function(e) {
            e.preventDefault();
            mks_ep_close_modal($(this).closest('.mks-ep-modal'));
        });


        /* Test drive submit */
        $('.mks-ep-modal').on('submit', '.mks-ep-modal-test-drive-form', function(e) {
            e.preventDefault();
            var form = $(this);
            var email = form.find('.mks-ep-test-drive-email').val();
            var theme = form.find('.mks-ep-test-drive-theme').val();
            var ref = form.find('.mks-ep-test-drive-ref').val();

            if (!mks_ep_is_valid_email(email)) {
                return false;
            }

            // $.ajax({

            //     url: mks_ep_settings.ajax_url,
            //     method: 'POST',
            //     data: {
            //         action: 'mks_ep_test_drive_submit',
            //         email: email,
            //         theme: theme
            //     }

            // });

            // form.fadeOut(300, function() {
            //     $('.mks-ep-modal-test-drive-response').fadeIn(300);
            // });

            $('.mks-ep-modal-test-drive-request').fadeOut(300, function() {

                $('.mks-ep-modal-test-drive-loader').show();

                $.ajax({
                    url: mks_ep_settings.ajax_url,
                    type: "POST",
                    data: {
                        action: 'mks_ep_test_drive_submit',
                        email: email,
                        theme: theme,
                        ref: ref
                    },
                    timeout: 8000,
                    success: function(response) {

                        $('.mks-ep-modal-test-drive-loader').hide();
                        var res = JSON.parse(response);
                        if (res.success) {
                            $('.mks-ep-modal-test-drive-response-success').html(res.data);
                            $('.mks-ep-modal-test-drive-response').fadeIn(300);

                        } else {
                            $('.mks-ep-modal-test-drive-response-error').html(res.data);
                            $('.mks-ep-modal-test-drive-request').fadeIn(300);
                        }

                        // setTimeout(function() {
                        //     mks_clear_blur($('#modal-try .content-wrapper'));
                        // }, 500);

                    },

                    error: function(xmlhttprequest, textstatus, message) {

                        $('.mks-ep-modal-test-drive-loader').hide();

                        if (textstatus === 'timeout') {
                            $('.mks-ep-modal-test-drive-response-success').html('All set, thanks! We will send you an email when your website is ready, in a couple of minutes.');

                            $('.mks-ep-modal-test-drive-response').show().animate({
                                opacity: 1
                            }, 300);

                        } else {
                            $('.mks-ep-modal-test-drive-response-error').html(message);
                            $('.mks-ep-modal-test-drive-request').fadeIn(300);
                        }

                        // setTimeout(function() {
                        //     mks_clear_blur($('#modal-try .content-wrapper'));
                        // }, 500);


                    }
                });
            });
        });

    });

    /* Check if we modal should be displayed */
    function mks_ep_can_display_modal() {

        if (!mks_ep_is_desktop() || mks_ep_in_iframe() || !$('.mks-ep-modal').length || mks_ep_read_cookie('mks_exit_' + $('.mks-ep-test-drive-theme').val())) {
            return false;
        }

        // if (!mks_ep_is_desktop() || mks_ep_in_iframe() || !$('.mks-ep-modal').length) {
        //   return false;
        // }

        return true;

    }


    /* Close modal */
    function mks_ep_close_modal(obj) {
        obj.removeClass('active');
        $('body, html').removeClass('mks-ep-modal-open');
    }



    /* Open modal */
    function mks_ep_open_modal(obj, ref) {

        var window_height = $(window).height();

        obj.css('height', window_height + 'px').css('top', $(window).scrollTop() + 'px').addClass('active');

        $('body, html').addClass('mks-ep-modal-open');
        $('.mks-ep-modal-test-drive-response').hide();
        $('.mks-ep-modal-test-drive-request').show();

        //mks_ep_center(obj.find('.mks-ep-section'));

        $('.mks-ep-test-drive-ref').val(ref);

        var cookie_name = 'mks_exit_' + obj.find('.mks-ep-test-drive-theme').val();

        if (!mks_ep_read_cookie(cookie_name)) {
            mks_ep_create_cookie(cookie_name, true, 30);
        }

    }



    /* Is in iFrame */
    function mks_ep_in_iframe() {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    }


    /* Check if is desktop */
    function mks_ep_is_desktop() {

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return false;
        }

        return true;
    }


    /* Create cookie */
    function mks_ep_create_cookie(name, value, days) {
        var expires;

        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        } else {
            expires = "";
        }
        document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
    }


    /* Read/check cookie */
    function mks_ep_read_cookie(name) {
        var nameEQ = encodeURIComponent(name) + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
        return null;
    }


    /* Delete cookie */
    function mks_ep_erase_cookie(name) {
        createCookie(name, "", -1);
    }


    /* Validate email */
    function mks_ep_is_valid_email(email) {

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/.test(email)) {
            return true;

        }

        return false;
    }

    /* Function to center elements */
    function mks_ep_center(obj) {

        var parent_height = obj.parent().height();
        var obj_height = obj.height();

        if (parent_height > obj_height + 80) {
            obj.css("position", "absolute");
            obj.css("top", ((parent_height - obj_height) / 2) + "px");
        } else {
            obj.css("padding-top", '40px').css("padding-bottom", '40px');
        }



    }



})(jQuery);



/* Minit: https://demo.mekshq.com/typology/wp-content/plugins/meks-flexible-shortcodes/js/main.js */
(function($) {
    $(document).ready(function($) {

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

            $("body").on("touchstart", ".mks_accordion_heading", function(e) {
                mks_accordion_handle($(this));
            });

            $("body").on("touchstart", ".mks_toggle_heading", function(e) {
                mks_toggle_handle($(this));
            });


            $("body").on("touchstart", ".mks_tabs_nav .mks_tab_nav_item", function(e) {
                mks_tab_handle($(this));
            });

        } else {

            $("body").on("click", ".mks_accordion_heading", function(e) {
                mks_accordion_handle($(this));
            });


            $("body").on("click", ".mks_toggle_heading", function(e) {
                mks_toggle_handle($(this));
            });


            $("body").on("click", ".mks_tabs_nav .mks_tab_nav_item", function(e) {
                mks_tab_handle($(this));
            });
        }



    }); // end $(document).ready()
    
    /* Initialize tabs */

    $(window).load(function(){
        $('.mks_tabs').each(function(){
            mks_init_tabs($(this));
        });
        
        mks_tabs_check_switch( $('.mks_tabs') );
    });

    $(window).resize(function() {   
        mks_tabs_check_switch( $('.mks_tabs'));
    });

    function mks_tabs_check_switch( obj ) {
        if ( !obj.length ) return;

        obj.each(function() {

            var tabs_holder = $(this); 
            var tabs_nav_wrapper = tabs_holder.find('.mks_tabs_nav');  

            if ( !tabs_holder.hasClass('mks-accordion-switched') ) {

                var tabs_width = mks_check_tabs_width( tabs_holder );
                if( tabs_width && !tabs_holder.hasClass('vertical')){
                    mks_tabs_to_accordion( tabs_holder, tabs_width );
                }

                var vertical_tabs_width = tabs_holder.hasClass('vertical') && tabs_nav_wrapper.width() < 80 ? tabs_holder.width() : false;
                if( vertical_tabs_width ){
                    mks_tabs_to_accordion( tabs_holder, vertical_tabs_width );
                }

            } else {

                if ( tabs_holder.hasClass('mks-accordion-switched') ) {
                    var resized_on = tabs_holder.attr('data-resized-on');
                    if(resized_on && resized_on < tabs_holder.width()){
                        mks_init_tabs( tabs_holder );
                    }
                } 
            }

        }); 

    } 

    function mks_init_tabs(obj){

            var tabs_holder = obj; 
            var tabs_nav_wrapper = tabs_holder.find('.mks_tabs_nav');  
            var tabs_content = tabs_holder.find('.mks_tab_item, .mks_accordion_item');

            tabs_holder.removeClass('mks_accordion mks-accordion-switched');
            tabs_holder.find('.mks_accordion_item, .mks_tab_item').remove();
            tabs_nav_wrapper.show();
            
            if ( tabs_holder.hasClass('vertical') ) {
                tabs_holder.css('padding' , '0 0 0 19.9%');
            } else {
                tabs_holder.css('padding' , '40px 0 0 0');
            }

            tabs_content.each(function(){
                tabs_nav_wrapper.append('<div class="mks_tab_nav_item">' + $(this).find('.nav').html() + '</div>');
                
                if ( $(this).hasClass('mks_accordion_item') ) {
                    tabs_holder.append('<div class="mks_tab_item" style="display:none;">' + $(this).find('.mks_accordion_content').html() + '</div>').hide();
                } else {
                    tabs_holder.append('<div class="mks_tab_item" style="display:none;">' + $(this).html() + '</div>').hide();
                }

            });

            tabs_nav_wrapper.find('.mks_tab_nav_item:first').addClass('active');
            tabs_holder.find('.nav').hide();
            tabs_holder.find('.mks_tab_item:first').show();
            tabs_holder.show(); 


    }

    function mks_check_tabs_width(obj) {

        var tabs_nav_wrapper = obj.find('.mks_tabs_nav');
        var tabs_width = tabs_nav_wrapper.width();
        var tab = tabs_nav_wrapper.find('.mks_tab_nav_item');
        var tab_width = 0;
            
        tab.each(function(){
            tab_width += $(this).outerWidth();
        });

        if ( tabs_width <= tab_width + 24 ) {
            return tabs_width;
        }
        return false;
    }


    function mks_tabs_to_accordion( obj, resized_on ) {
        
        var tabs_holder = obj; 
        var tabs_nav_wrapper = tabs_holder.find('.mks_tabs_nav');  
        var tabs_content = tabs_holder.find('.mks_tab_item');    
        
        tabs_holder.addClass('mks_accordion mks-accordion-switched').attr('data-resized-on', resized_on);
        tabs_holder.find('.mks_tab_item').remove();
        tabs_nav_wrapper.children().remove();
        tabs_nav_wrapper.hide();
        tabs_holder.css({
            'display' : 'block',
            'padding' : 0
        });
        
        tabs_content.each(function(){
            tabs_holder.append('<div class="mks_accordion_item"><div class="mks_accordion_heading">' + $(this).find('.nav').html() + 
                '<i class="fa fa-plus"></i><i class="fa fa-minus"></i></div><div class="mks_accordion_content">' + $(this).html() + '</div></div>');
        });

        tabs_holder.find('.nav').hide();
        
    }

    function mks_accordion_handle($obj) {
        var toggle = $obj.parent('.mks_accordion_item');
        if (!toggle.hasClass('mks_accordion_active')) {
            toggle.parent('div').find('.mks_accordion_item').find('.mks_accordion_content:visible').slideUp("fast");
            toggle.parent('div').find('.mks_accordion_active').removeClass('mks_accordion_active');
            toggle.find('.mks_accordion_content').slideToggle("fast", function() {
                toggle.addClass('mks_accordion_active');
                if ((toggle.offset().top + 100) < $(window).scrollTop()) {
                    $('html, body').stop().animate({
                        scrollTop: (toggle.offset().top - 100)
                    }, '300');
                }
            });
        } else {
            toggle.parent('div').find('.mks_accordion_item').find('.mks_accordion_content:visible').slideUp("fast");
            toggle.parent('div').find('.mks_accordion_active').removeClass('mks_accordion_active');
        }
    }

    function mks_toggle_handle($obj) {
        var toggle = $obj.parent('.mks_toggle');
        toggle.find('.mks_toggle_content').slideToggle("fast", function() {
            toggle.toggleClass('mks_toggle_active');
        });
    }

    function mks_tab_handle($obj) {
        if ($obj.hasClass('active') === false) {

            tab_to_show = $obj.parent('.mks_tabs_nav').find('.mks_tab_nav_item').index($obj);

            $obj.parent('.mks_tabs_nav').parent('.mks_tabs').find('.mks_tab_item').hide();
            $obj.parent('.mks_tabs_nav').parent('.mks_tabs').find('.mks_tab_item').eq(tab_to_show).show();

            $obj.parent('.mks_tabs_nav').find('.mks_tab_nav_item').removeClass('active');
            $obj.addClass('active');

        }
    }

})(jQuery);



/* Minit: https://demo.mekshq.com/typology/wp-content/plugins/pc-google-analytics/assets/js/frontend.min.js */
jQuery(document).ready(function(){});



/* Minit: https://demo.mekshq.com/typology/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min.js */
/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */
!function(){"use strict";function e(b){b.fn._fadeIn=b.fn.fadeIn;var p=b.noop||function(){},h=/MSIE/.test(navigator.userAgent),k=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),y=(document.documentMode,b.isFunction(document.createElement("div").style.setExpression));b.blockUI=function(e){o(window,e)},b.unblockUI=function(e){v(window,e)},b.growlUI=function(e,t,o,n){var i=b('<div class="growlUI"></div>');e&&i.append("<h1>"+e+"</h1>"),t&&i.append("<h2>"+t+"</h2>"),o===undefined&&(o=3e3);var s=function(e){e=e||{},b.blockUI({message:i,fadeIn:"undefined"!=typeof e.fadeIn?e.fadeIn:700,fadeOut:"undefined"!=typeof e.fadeOut?e.fadeOut:1e3,timeout:"undefined"!=typeof e.timeout?e.timeout:o,centerY:!1,showOverlay:!1,onUnblock:n,css:b.blockUI.defaults.growlCSS})};s();i.css("opacity");i.mouseover(function(){s({fadeIn:0,timeout:3e4});var e=b(".blockMsg");e.stop(),e.fadeTo(300,1)}).mouseout(function(){b(".blockMsg").fadeOut(1e3)})},b.fn.block=function(e){if(this[0]===window)return b.blockUI(e),this;var t=b.extend({},b.blockUI.defaults,e||{});return this.each(function(){var e=b(this);t.ignoreIfBlocked&&e.data("blockUI.isBlocked")||e.unblock({fadeOut:0})}),this.each(function(){"static"==b.css(this,"position")&&(this.style.position="relative",b(this).data("blockUI.static",!0)),this.style.zoom=1,o(this,e)})},b.fn.unblock=function(e){return this[0]===window?(b.unblockUI(e),this):this.each(function(){v(this,e)})},b.blockUI.version=2.7,b.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var m=null,g=[];function o(e,o){var t,n,i,s,l,d,a,c,r,u=e==window,f=o&&o.message!==undefined?o.message:undefined;(o=b.extend({},b.blockUI.defaults,o||{})).ignoreIfBlocked&&b(e).data("blockUI.isBlocked")||(o.overlayCSS=b.extend({},b.blockUI.defaults.overlayCSS,o.overlayCSS||{}),i=b.extend({},b.blockUI.defaults.css,o.css||{}),o.onOverlayClick&&(o.overlayCSS.cursor="pointer"),s=b.extend({},b.blockUI.defaults.themedCSS,o.themedCSS||{}),f=f===undefined?o.message:f,u&&m&&v(window,{fadeOut:0}),f&&"string"!=typeof f&&(f.parentNode||f.jquery)&&(t=f.jquery?f[0]:f,a={},b(e).data("blockUI.history",a),a.el=t,a.parent=t.parentNode,a.display=t.style.display,a.position=t.style.position,a.parent&&a.parent.removeChild(t)),b(e).data("blockUI.onUnblock",o.onUnblock),r=o.baseZ,a=h||o.forceIframe?b('<iframe class="blockUI" style="z-index:'+r+++';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+o.iframeSrc+'"></iframe>'):b('<div class="blockUI" style="display:none"></div>'),t=o.theme?b('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+r+++';display:none"></div>'):b('<div class="blockUI blockOverlay" style="z-index:'+r+++';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),o.theme&&u?(c='<div class="blockUI '+o.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(r+10)+';display:none;position:fixed">',o.title&&(c+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(o.title||"&nbsp;")+"</div>"),c+='<div class="ui-widget-content ui-dialog-content"></div>',c+="</div>"):o.theme?(c='<div class="blockUI '+o.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(r+10)+';display:none;position:absolute">',o.title&&(c+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(o.title||"&nbsp;")+"</div>"),c+='<div class="ui-widget-content ui-dialog-content"></div>',c+="</div>"):c=u?'<div class="blockUI '+o.blockMsgClass+' blockPage" style="z-index:'+(r+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+o.blockMsgClass+' blockElement" style="z-index:'+(r+10)+';display:none;position:absolute"></div>',r=b(c),f&&(o.theme?(r.css(s),r.addClass("ui-widget-content")):r.css(i)),o.theme||t.css(o.overlayCSS),t.css("position",u?"fixed":"absolute"),(h||o.forceIframe)&&a.css("opacity",0),c=[a,t,r],n=b(u?"body":e),b.each(c,function(){this.appendTo(n)}),o.theme&&o.draggable&&b.fn.draggable&&r.draggable({handle:".ui-dialog-titlebar",cancel:"li"}),s=y&&(!b.support.boxModel||0<b("object,embed",u?null:e).length),(k||s)&&(u&&o.allowBodyStretch&&b.support.boxModel&&b("html,body").css("height","100%"),!k&&b.support.boxModel||u||(i=U(e,"borderTopWidth"),s=U(e,"borderLeftWidth"),l=i?"(0 - "+i+")":0,d=s?"(0 - "+s+")":0),b.each(c,function(e,t){t=t[0].style;t.position="absolute",e<2?(u?t.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+o.quirksmodeOffsetHack+') + "px"'):t.setExpression("height",'this.parentNode.offsetHeight + "px"'),u?t.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):t.setExpression("width",'this.parentNode.offsetWidth + "px"'),d&&t.setExpression("left",d),l&&t.setExpression("top",l)):o.centerY?(u&&t.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),t.marginTop=0):!o.centerY&&u&&(e="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+(o.css&&o.css.top?parseInt(o.css.top,10):0)+') + "px"',t.setExpression("top",e))})),f&&((o.theme?r.find(".ui-widget-content"):r).append(f),(f.jquery||f.nodeType)&&b(f).show()),(h||o.forceIframe)&&o.showOverlay&&a.show(),o.fadeIn?(c=o.onBlock?o.onBlock:p,a=o.showOverlay&&!f?c:p,c=f?c:p,o.showOverlay&&t._fadeIn(o.fadeIn,a),f&&r._fadeIn(o.fadeIn,c)):(o.showOverlay&&t.show(),f&&r.show(),o.onBlock&&o.onBlock.bind(r)()),I(1,e,o),u?(m=r[0],g=b(o.focusableElements,m),o.focusInput&&setTimeout(w,20)):function(e,t,o){var n=e.parentNode,i=e.style,s=(n.offsetWidth-e.offsetWidth)/2-U(n,"borderLeftWidth"),n=(n.offsetHeight-e.offsetHeight)/2-U(n,"borderTopWidth");t&&(i.left=0<s?s+"px":"0");o&&(i.top=0<n?n+"px":"0")}(r[0],o.centerX,o.centerY),o.timeout&&(r=setTimeout(function(){u?b.unblockUI(o):b(e).unblock(o)},o.timeout),b(e).data("blockUI.timeout",r)))}function v(e,t){var o,n,i=e==window,s=b(e),l=s.data("blockUI.history"),d=s.data("blockUI.timeout");d&&(clearTimeout(d),s.removeData("blockUI.timeout")),t=b.extend({},b.blockUI.defaults,t||{}),I(0,e,t),null===t.onUnblock&&(t.onUnblock=s.data("blockUI.onUnblock"),s.removeData("blockUI.onUnblock")),n=i?b(document.body).children().filter(".blockUI").add("body > .blockUI"):s.find(">.blockUI"),t.cursorReset&&(1<n.length&&(n[1].style.cursor=t.cursorReset),2<n.length&&(n[2].style.cursor=t.cursorReset)),i&&(m=g=null),t.fadeOut?(o=n.length,n.stop().fadeOut(t.fadeOut,function(){0==--o&&a(n,l,t,e)})):a(n,l,t,e)}function a(e,t,o,n){var i=b(n);i.data("blockUI.isBlocked")||(e.each(function(e,t){this.parentNode&&this.parentNode.removeChild(this)}),t&&t.el&&(t.el.style.display=t.display,t.el.style.position=t.position,t.el.style.cursor="default",t.parent&&t.parent.appendChild(t.el),i.removeData("blockUI.history")),i.data("blockUI.static")&&i.css("position","static"),"function"==typeof o.onUnblock&&o.onUnblock(n,o),n=(i=b(document.body)).width(),o=i[0].style.width,i.width(n-1).width(n),i[0].style.width=o)}function I(e,t,o){var n=t==window,t=b(t);!e&&(n&&!m||!n&&!t.data("blockUI.isBlocked"))||(t.data("blockUI.isBlocked",e),n&&o.bindEvents&&(!e||o.showOverlay)&&(n="mousedown mouseup keydown keypress keyup touchstart touchend touchmove",e?b(document).bind(n,o,i):b(document).unbind(n,i)))}function i(e){if("keydown"===e.type&&e.keyCode&&9==e.keyCode&&m&&e.data.constrainTabKey){var t=!e.shiftKey&&e.target===g[g.length-1],o=e.shiftKey&&e.target===g[0];if(t||o)return setTimeout(function(){w(o)},10),!1}var n=e.data,t=b(e.target);return t.hasClass("blockOverlay")&&n.onOverlayClick&&n.onOverlayClick(e),0<t.parents("div."+n.blockMsgClass).length||0===t.parents().children().filter("div.blockUI").length}function w(e){!g||(e=g[!0===e?g.length-1:0])&&e.focus()}function U(e,t){return parseInt(b.css(e,t),10)||0}}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)}();



/* Minit: https://demo.mekshq.com/typology/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js */
jQuery(function(d){if("undefined"==typeof wc_add_to_cart_params)return!1;var t=function(){this.requests=[],this.addRequest=this.addRequest.bind(this),this.run=this.run.bind(this),d(document.body).on("click",".add_to_cart_button",{addToCartHandler:this},this.onAddToCart).on("click",".remove_from_cart_button",{addToCartHandler:this},this.onRemoveFromCart).on("added_to_cart",this.updateButton).on("ajax_request_not_sent.adding_to_cart",this.updateButton).on("added_to_cart removed_from_cart",{addToCartHandler:this},this.updateFragments)};t.prototype.addRequest=function(t){this.requests.push(t),1===this.requests.length&&this.run()},t.prototype.run=function(){var t=this,a=t.requests[0].complete;t.requests[0].complete=function(){"function"==typeof a&&a(),t.requests.shift(),0<t.requests.length&&t.run()},d.ajax(this.requests[0])},t.prototype.onAddToCart=function(t){var a=d(this);if(a.is(".ajax_add_to_cart")){if(!a.attr("data-product_id"))return!0;if(t.preventDefault(),a.removeClass("added"),a.addClass("loading"),!1===d(document.body).triggerHandler("should_send_ajax_request.adding_to_cart",[a]))return d(document.body).trigger("ajax_request_not_sent.adding_to_cart",[!1,!1,a]),!0;var e={};d.each(a.data(),function(t,a){e[t]=a}),d.each(a[0].dataset,function(t,a){e[t]=a}),d(document.body).trigger("adding_to_cart",[a,e]),t.data.addToCartHandler.addRequest({type:"POST",url:wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","add_to_cart"),data:e,success:function(t){t&&(t.error&&t.product_url?window.location=t.product_url:"yes"!==wc_add_to_cart_params.cart_redirect_after_add?d(document.body).trigger("added_to_cart",[t.fragments,t.cart_hash,a]):window.location=wc_add_to_cart_params.cart_url)},dataType:"json"})}},t.prototype.onRemoveFromCart=function(t){var a=d(this),e=a.closest(".woocommerce-mini-cart-item");t.preventDefault(),e.block({message:null,overlayCSS:{opacity:.6}}),t.data.addToCartHandler.addRequest({type:"POST",url:wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","remove_from_cart"),data:{cart_item_key:a.data("cart_item_key")},success:function(t){t&&t.fragments?d(document.body).trigger("removed_from_cart",[t.fragments,t.cart_hash,a]):window.location=a.attr("href")},error:function(){window.location=a.attr("href")},dataType:"json"})},t.prototype.updateButton=function(t,a,e,r){(r=void 0!==r&&r)&&(r.removeClass("loading"),a&&r.addClass("added"),a&&!wc_add_to_cart_params.is_cart&&0===r.parent().find(".added_to_cart").length&&r.after('<a href="'+wc_add_to_cart_params.cart_url+'" class="added_to_cart wc-forward" title="'+wc_add_to_cart_params.i18n_view_cart+'">'+wc_add_to_cart_params.i18n_view_cart+"</a>"),d(document.body).trigger("wc_cart_button_updated",[r]))},t.prototype.updateFragments=function(t,a){a&&(d.each(a,function(t){d(t).addClass("updating").fadeTo("400","0.6").block({message:null,overlayCSS:{opacity:.6}})}),d.each(a,function(t,a){d(t).replaceWith(a),d(t).stop(!0).css("opacity","1").unblock()}),d(document.body).trigger("wc_fragments_loaded"))},new t});



/* Minit: https://demo.mekshq.com/typology/wp-content/plugins/woocommerce/assets/js/js-cookie/js.cookie.min.js */
/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function(e){var n,o,t=!1;"function"==typeof define&&define.amd&&(define(e),t=!0),"object"==typeof exports&&(module.exports=e(),t=!0),t||(n=window.Cookies,(o=window.Cookies=e()).noConflict=function(){return window.Cookies=n,o})}(function(){function m(){for(var e=0,n={};e<arguments.length;e++){var o,t=arguments[e];for(o in t)n[o]=t[o]}return n}return function e(C){function g(e,n,o){var t,r;if("undefined"!=typeof document){if(1<arguments.length){"number"==typeof(o=m({path:"/"},g.defaults,o)).expires&&((r=new Date).setMilliseconds(r.getMilliseconds()+864e5*o.expires),o.expires=r),o.expires=o.expires?o.expires.toUTCString():"";try{t=JSON.stringify(n),/^[\{\[]/.test(t)&&(n=t)}catch(l){}n=C.write?C.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var i,c="";for(i in o)o[i]&&(c+="; "+i,!0!==o[i]&&(c+="="+o[i]));return document.cookie=e+"="+n+c}e||(t={});for(var s=document.cookie?document.cookie.split("; "):[],f=/(%[0-9A-Z]{2})+/g,p=0;p<s.length;p++){var a=s[p].split("=");'"'===(u=a.slice(1).join("=")).charAt(0)&&(u=u.slice(1,-1));try{var d=a[0].replace(f,decodeURIComponent),u=C.read?C.read(u,d):C(u,d)||u.replace(f,decodeURIComponent);if(this.json)try{u=JSON.parse(u)}catch(l){}if(e===d){t=u;break}e||(t[d]=u)}catch(l){}}return t}}return(g.set=g).get=function(e){return g.call(g,e)},g.getJSON=function(){return g.apply({json:!0},[].slice.call(arguments))},g.defaults={},g.remove=function(e,n){g(e,"",m(n,{expires:-1}))},g.withConverter=e,g}(function(){})});



/* Minit: https://demo.mekshq.com/typology/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min.js */
jQuery(function(t){t(".woocommerce-ordering").on("change","select.orderby",function(){t(this).closest("form").trigger("submit")}),t("input.qty:not(.product-quantity input.qty)").each(function(){var o=parseFloat(t(this).attr("min"));0<=o&&parseFloat(t(this).val())<o&&t(this).val(o)});var e="store_notice"+(t(".woocommerce-store-notice").data("notice-id")||"");"hidden"===Cookies.get(e)?t(".woocommerce-store-notice").hide():t(".woocommerce-store-notice").show(),t(".woocommerce-store-notice__dismiss-link").on("click",function(o){Cookies.set(e,"hidden",{path:"/"}),t(".woocommerce-store-notice").hide(),o.preventDefault()}),t(".woocommerce-input-wrapper span.description").length&&t(document.body).on("click",function(){t(".woocommerce-input-wrapper span.description:visible").prop("aria-hidden",!0).slideUp(250)}),t(".woocommerce-input-wrapper").on("click",function(o){o.stopPropagation()}),t(".woocommerce-input-wrapper :input").on("keydown",function(o){var e=t(this).parent().find("span.description");if(27===o.which&&e.length&&e.is(":visible"))return e.prop("aria-hidden",!0).slideUp(250),o.preventDefault(),!1}).on("click focus",function(){var o=t(this).parent(),e=o.find("span.description");o.addClass("currentTarget"),t(".woocommerce-input-wrapper:not(.currentTarget) span.description:visible").prop("aria-hidden",!0).slideUp(250),e.length&&e.is(":hidden")&&e.prop("aria-hidden",!1).slideDown(250),o.removeClass("currentTarget")}),t.scroll_to_notices=function(o){o.length&&t("html, body").animate({scrollTop:o.offset().top-100},1e3)},t('.woocommerce form .woocommerce-Input[type="password"]').wrap('<span class="password-input"></span>'),t(".woocommerce form input").filter(":password").parent("span").addClass("password-input"),t(".password-input").append('<span class="show-password-input"></span>'),t(".show-password-input").on("click",function(){t(this).toggleClass("display-password"),t(this).hasClass("display-password")?t(this).siblings(['input[type="password"]']).prop("type","text"):t(this).siblings('input[type="text"]').prop("type","password")})});



/* Minit: https://demo.mekshq.com/typology/wp-content/plugins/woocommerce/assets/js/frontend/cart-fragments.min.js */
jQuery(function(r){if("undefined"==typeof wc_cart_fragments_params)return!1;var t=!0,o=wc_cart_fragments_params.cart_hash_key;try{t="sessionStorage"in window&&null!==window.sessionStorage,window.sessionStorage.setItem("wc","test"),window.sessionStorage.removeItem("wc"),window.localStorage.setItem("wc","test"),window.localStorage.removeItem("wc")}catch(w){t=!1}function a(){t&&sessionStorage.setItem("wc_cart_created",(new Date).getTime())}function s(e){t&&(localStorage.setItem(o,e),sessionStorage.setItem(o,e))}var e={url:wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%","get_refreshed_fragments"),type:"POST",data:{time:(new Date).getTime()},timeout:wc_cart_fragments_params.request_timeout,success:function(e){e&&e.fragments&&(r.each(e.fragments,function(e,t){r(e).replaceWith(t)}),t&&(sessionStorage.setItem(wc_cart_fragments_params.fragment_name,JSON.stringify(e.fragments)),s(e.cart_hash),e.cart_hash&&a()),r(document.body).trigger("wc_fragments_refreshed"))},error:function(){r(document.body).trigger("wc_fragments_ajax_error")}};function n(){r.ajax(e)}if(t){var i=null;r(document.body).on("wc_fragment_refresh updated_wc_div",function(){n()}),r(document.body).on("added_to_cart removed_from_cart",function(e,t,r){var n=sessionStorage.getItem(o);null!==n&&n!==undefined&&""!==n||a(),sessionStorage.setItem(wc_cart_fragments_params.fragment_name,JSON.stringify(t)),s(r)}),r(document.body).on("wc_fragments_refreshed",function(){clearTimeout(i),i=setTimeout(n,864e5)}),r(window).on("storage onstorage",function(e){o===e.originalEvent.key&&localStorage.getItem(o)!==sessionStorage.getItem(o)&&n()}),r(window).on("pageshow",function(e){e.originalEvent.persisted&&(r(".widget_shopping_cart_content").empty(),r(document.body).trigger("wc_fragment_refresh"))});try{var c=JSON.parse(sessionStorage.getItem(wc_cart_fragments_params.fragment_name)),_=sessionStorage.getItem(o),g=Cookies.get("woocommerce_cart_hash"),m=sessionStorage.getItem("wc_cart_created");if(null!==_&&_!==undefined&&""!==_||(_=""),null!==g&&g!==undefined&&""!==g||(g=""),_&&(null===m||m===undefined||""===m))throw"No cart_created";if(m){var d=+m+864e5,m=(new Date).getTime();if(d<m)throw"Fragment expired";i=setTimeout(n,d-m)}if(!c||!c["div.widget_shopping_cart_content"]||_!==g)throw"No fragment";r.each(c,function(e,t){r(e).replaceWith(t)}),r(document.body).trigger("wc_fragments_loaded")}catch(w){n()}}else n();0<Cookies.get("woocommerce_items_in_cart")?r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show():r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").hide(),r(document.body).on("adding_to_cart",function(){r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show()}),"undefined"!=typeof wp&&wp.customize&&wp.customize.selectiveRefresh&&wp.customize.widgetsPreview&&wp.customize.widgetsPreview.WidgetPartial&&wp.customize.selectiveRefresh.bind("partial-content-rendered",function(){n()})});



/* Minit: /wp-includes/js/imagesloaded.min.js */
/*! This file is auto-generated */
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return n.indexOf(t)==-1&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return n!=-1&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(e,r),delete n[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){if(Array.isArray(e))return e;var t="object"==typeof e&&"number"==typeof e.length;return t?d.call(e):[e]}function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var s=e;return"string"==typeof e&&(s=document.querySelectorAll(e)),s?(this.elements=n(s),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(s||e))}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console,d=Array.prototype.slice;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&u[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var u={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});



/* Minit: https://demo.mekshq.com/typology/wp-content/themes/typology/assets/js/min.js */
!function(n){"use strict";n.fn.fitVids=function(t){var e,i,o={customSelector:null,ignore:null};return document.getElementById("fit-vids-style")||(e=document.head||document.getElementsByTagName("head")[0],(i=document.createElement("div")).innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',e.appendChild(i.childNodes[1])),t&&n.extend(o,t),this.each(function(){var t=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];o.customSelector&&t.push(o.customSelector);var s=".fitvidsignore";o.ignore&&(s=s+", "+o.ignore);t=n(this).find(t.join(","));(t=(t=t.not("object object")).not(s)).each(function(){var t,e,i=n(this);0<i.parents(s).length||"embed"===this.tagName.toLowerCase()&&i.parent("object").length||i.parent(".fluid-width-video-wrapper").length||(i.css("height")||i.css("width")||!isNaN(i.attr("height"))&&!isNaN(i.attr("width"))||(i.attr("height",9),i.attr("width",16)),t=("object"===this.tagName.toLowerCase()||i.attr("height")&&!isNaN(parseInt(i.attr("height"),10))?parseInt(i.attr("height"),10):i.height())/(isNaN(parseInt(i.attr("width"),10))?i.width():parseInt(i.attr("width"),10)),i.attr("name")||(e="fitvid"+n.fn.fitVids._count,i.attr("name",e),n.fn.fitVids._count++),i.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*t+"%"),i.removeAttr("height").removeAttr("width"))})})},n.fn.fitVids._count=0}(window.jQuery||window.Zepto),function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?t(require("jquery")):t(window.jQuery||window.Zepto)}(function(c){function t(){}function h(t,e){A.ev.on(i+t+w,e)}function p(t,e,i,s){var o=document.createElement("div");return o.className="mfp-"+t,i&&(o.innerHTML=i),s?e&&e.appendChild(o):(o=c(o),e&&o.appendTo(e)),o}function d(t,e){A.ev.triggerHandler(i+t,e),A.st.callbacks&&(t=t.charAt(0).toLowerCase()+t.slice(1),A.st.callbacks[t]&&A.st.callbacks[t].apply(A,c.isArray(e)?e:[e]))}function u(t){return t===e&&A.currTemplate.closeBtn||(A.currTemplate.closeBtn=c(A.st.closeMarkup.replace("%title%",A.st.tClose)),e=t),A.currTemplate.closeBtn}function n(){c.magnificPopup.instance||((A=new t).init(),c.magnificPopup.instance=A)}var A,s,g,o,m,e,l="Close",f="BeforeClose",y="MarkupParse",v="Open",r="Change",i="mfp",w="."+i,_="mfp-ready",a="mfp-removing",b="mfp-prevent-close",x=!!window.jQuery,C=c(window);t.prototype={constructor:t,init:function(){var t=navigator.appVersion;A.isIE7=-1!==t.indexOf("MSIE 7."),A.isIE8=-1!==t.indexOf("MSIE 8."),A.isLowIE=A.isIE7||A.isIE8,A.isAndroid=/android/gi.test(t),A.isIOS=/iphone|ipad|ipod/gi.test(t),A.supportsTransition=function(){var t=document.createElement("p").style,e=["ms","O","Moz","Webkit"];if(void 0!==t.transition)return!0;for(;e.length;)if(e.pop()+"Transition"in t)return!0;return!1}(),A.probablyMobile=A.isAndroid||A.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),g=c(document),A.popupsCache={}},open:function(t){if(!1===t.isObj){A.items=t.items.toArray(),A.index=0;for(var e,i=t.items,s=0;s<i.length;s++)if((e=(e=i[s]).parsed?e.el[0]:e)===t.el[0]){A.index=s;break}}else A.items=c.isArray(t.items)?t.items:[t.items],A.index=t.index||0;if(!A.isOpen){A.types=[],m="",t.mainEl&&t.mainEl.length?A.ev=t.mainEl.eq(0):A.ev=g,t.key?(A.popupsCache[t.key]||(A.popupsCache[t.key]={}),A.currTemplate=A.popupsCache[t.key]):A.currTemplate={},A.st=c.extend(!0,{},c.magnificPopup.defaults,t),A.fixedContentPos="auto"===A.st.fixedContentPos?!A.probablyMobile:A.st.fixedContentPos,A.st.modal&&(A.st.closeOnContentClick=!1,A.st.closeOnBgClick=!1,A.st.showCloseBtn=!1,A.st.enableEscapeKey=!1),A.bgOverlay||(A.bgOverlay=p("bg").on("click"+w,function(){A.close()}),A.wrap=p("wrap").attr("tabindex",-1).on("click"+w,function(t){A._checkIfClose(t.target)&&A.close()}),A.container=p("container",A.wrap)),A.contentContainer=p("content"),A.st.preloader&&(A.preloader=p("preloader",A.container,A.st.tLoading));var o=c.magnificPopup.modules;for(s=0;s<o.length;s++){var n=(n=o[s]).charAt(0).toUpperCase()+n.slice(1);A["init"+n].call(A)}d("BeforeOpen"),A.st.showCloseBtn&&(A.st.closeBtnInside?(h(y,function(t,e,i,s){i.close_replaceWith=u(s.type)}),m+=" mfp-close-btn-in"):A.wrap.append(u())),A.st.alignTop&&(m+=" mfp-align-top"),A.fixedContentPos?A.wrap.css({overflow:A.st.overflowY,overflowX:"hidden",overflowY:A.st.overflowY}):A.wrap.css({top:C.scrollTop(),position:"absolute"}),!1!==A.st.fixedBgPos&&("auto"!==A.st.fixedBgPos||A.fixedContentPos)||A.bgOverlay.css({height:g.height(),position:"absolute"}),A.st.enableEscapeKey&&g.on("keyup"+w,function(t){27===t.keyCode&&A.close()}),C.on("resize"+w,function(){A.updateSize()}),A.st.closeOnContentClick||(m+=" mfp-auto-cursor"),m&&A.wrap.addClass(m);var r=A.wH=C.height(),a={};A.fixedContentPos&&(!A._hasScrollBar(r)||(l=A._getScrollbarSize())&&(a.marginRight=l)),A.fixedContentPos&&(A.isIE7?c("body, html").css("overflow","hidden"):a.overflow="hidden");var l=A.st.mainClass;return A.isIE7&&(l+=" mfp-ie7"),l&&A._addClassToMFP(l),A.updateItemHTML(),d("BuildControls"),c("html").css(a),A.bgOverlay.add(A.wrap).prependTo(A.st.prependTo||c(document.body)),A._lastFocusedEl=document.activeElement,setTimeout(function(){A.content?(A._addClassToMFP(_),A._setFocus()):A.bgOverlay.addClass(_),g.on("focusin"+w,A._onFocusIn)},16),A.isOpen=!0,A.updateSize(r),d(v),t}A.updateItemHTML()},close:function(){A.isOpen&&(d(f),A.isOpen=!1,A.st.removalDelay&&!A.isLowIE&&A.supportsTransition?(A._addClassToMFP(a),setTimeout(function(){A._close()},A.st.removalDelay)):A._close())},_close:function(){d(l);var t=a+" "+_+" ";A.bgOverlay.detach(),A.wrap.detach(),A.container.empty(),A.st.mainClass&&(t+=A.st.mainClass+" "),A._removeClassFromMFP(t),A.fixedContentPos&&(t={marginRight:""},A.isIE7?c("body, html").css("overflow",""):t.overflow="",c("html").css(t)),g.off("keyup.mfp focusin"+w),A.ev.off(w),A.wrap.attr("class","mfp-wrap").removeAttr("style"),A.bgOverlay.attr("class","mfp-bg"),A.container.attr("class","mfp-container"),!A.st.showCloseBtn||A.st.closeBtnInside&&!0!==A.currTemplate[A.currItem.type]||A.currTemplate.closeBtn&&A.currTemplate.closeBtn.detach(),A._lastFocusedEl&&c(A._lastFocusedEl).focus(),A.currItem=null,A.content=null,A.currTemplate=null,A.prevHeight=0,d("AfterClose")},updateSize:function(t){var e;A.isIOS?(e=document.documentElement.clientWidth/window.innerWidth,e=window.innerHeight*e,A.wrap.css("height",e),A.wH=e):A.wH=t||C.height(),A.fixedContentPos||A.wrap.css("height",A.wH),d("Resize")},updateItemHTML:function(){var t=A.items[A.index];A.contentContainer.detach(),A.content&&A.content.detach();var e=(t=!t.parsed?A.parseEl(A.index):t).type;d("BeforeChange",[A.currItem?A.currItem.type:"",e]),A.currItem=t,A.currTemplate[e]||(i=!!A.st[e]&&A.st[e].markup,d("FirstMarkupParse",i),A.currTemplate[e]=!i||c(i)),o&&o!==t.type&&A.container.removeClass("mfp-"+o+"-holder");var i=A["get"+e.charAt(0).toUpperCase()+e.slice(1)](t,A.currTemplate[e]);A.appendContent(i,e),t.preloaded=!0,d(r,t),o=t.type,A.container.prepend(A.contentContainer),d("AfterChange")},appendContent:function(t,e){(A.content=t)?A.st.showCloseBtn&&A.st.closeBtnInside&&!0===A.currTemplate[e]?A.content.find(".mfp-close").length||A.content.append(u()):A.content=t:A.content="",d("BeforeAppend"),A.container.addClass("mfp-"+e+"-holder"),A.contentContainer.append(A.content)},parseEl:function(t){var e,i=A.items[t];if((i=i.tagName?{el:c(i)}:(e=i.type,{data:i,src:i.src})).el){for(var s=A.types,o=0;o<s.length;o++)if(i.el.hasClass("mfp-"+s[o])){e=s[o];break}i.src=i.el.attr("data-mfp-src"),i.src||(i.src=i.el.attr("href"))}return i.type=e||A.st.type||"inline",i.index=t,i.parsed=!0,A.items[t]=i,d("ElementParse",i),A.items[t]},addGroup:function(e,i){function t(t){t.mfpEl=this,A._openClick(t,e,i)}var s="click.magnificPopup";(i=i||{}).mainEl=e,i.items?(i.isObj=!0,e.off(s).on(s,t)):(i.isObj=!1,i.delegate?e.off(s).on(s,i.delegate,t):(i.items=e).off(s).on(s,t))},_openClick:function(t,e,i){if((void 0!==i.midClick?i:c.magnificPopup.defaults).midClick||2!==t.which&&!t.ctrlKey&&!t.metaKey){var s=(void 0!==i.disableOn?i:c.magnificPopup.defaults).disableOn;if(s)if(c.isFunction(s)){if(!s.call(A))return!0}else if(C.width()<s)return!0;t.type&&(t.preventDefault(),A.isOpen&&t.stopPropagation()),i.el=c(t.mfpEl),i.delegate&&(i.items=e.find(i.delegate)),A.open(i)}},updateStatus:function(t,e){var i;A.preloader&&(s!==t&&A.container.removeClass("mfp-s-"+s),i={status:t,text:e=!e&&"loading"===t?A.st.tLoading:e},d("UpdateStatus",i),t=i.status,A.preloader.html(e=i.text),A.preloader.find("a").on("click",function(t){t.stopImmediatePropagation()}),A.container.addClass("mfp-s-"+t),s=t)},_checkIfClose:function(t){if(!c(t).hasClass(b)){var e=A.st.closeOnContentClick,i=A.st.closeOnBgClick;if(e&&i)return!0;if(!A.content||c(t).hasClass("mfp-close")||A.preloader&&t===A.preloader[0])return!0;if(t===A.content[0]||c.contains(A.content[0],t)){if(e)return!0}else if(i&&c.contains(document,t))return!0;return!1}},_addClassToMFP:function(t){A.bgOverlay.addClass(t),A.wrap.addClass(t)},_removeClassFromMFP:function(t){this.bgOverlay.removeClass(t),A.wrap.removeClass(t)},_hasScrollBar:function(t){return(A.isIE7?g.height():document.body.scrollHeight)>(t||C.height())},_setFocus:function(){(A.st.focus?A.content.find(A.st.focus).eq(0):A.wrap).focus()},_onFocusIn:function(t){if(t.target!==A.wrap[0]&&!c.contains(A.wrap[0],t.target))return A._setFocus(),!1},_parseMarkup:function(o,t,e){var n;e.data&&(t=c.extend(e.data,t)),d(y,[o,t,e]),c.each(t,function(t,e){return void 0===e||!1===e||void(1<(n=t.split("_")).length?0<(i=o.find(w+"-"+n[0])).length&&("replaceWith"===(s=n[1])?i[0]!==e[0]&&i.replaceWith(e):"img"===s?i.is("img")?i.attr("src",e):i.replaceWith('<img src="'+e+'" class="'+i.attr("class")+'" />'):i.attr(n[1],e)):o.find(w+"-"+t).html(e));var i,s})},_getScrollbarSize:function(){var t;return void 0===A.scrollbarSize&&((t=document.createElement("div")).style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(t),A.scrollbarSize=t.offsetWidth-t.clientWidth,document.body.removeChild(t)),A.scrollbarSize}},c.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(t,e){return n(),(t=t?c.extend(!0,{},t):{}).isObj=!0,t.index=e||0,this.instance.open(t)},close:function(){return c.magnificPopup.instance&&c.magnificPopup.instance.close()},registerModule:function(t,e){e.options&&(c.magnificPopup.defaults[t]=e.options),c.extend(this.proto,e.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},c.fn.magnificPopup=function(t){n();var e,i,s,o=c(this);return"string"==typeof t?"open"===t?(e=x?o.data("magnificPopup"):o[0].magnificPopup,i=parseInt(arguments[1],10)||0,s=e.items?e.items[i]:(s=o,(s=e.delegate?s.find(e.delegate):s).eq(i)),A._openClick({mfpEl:s},o,e)):A.isOpen&&A[t].apply(A,Array.prototype.slice.call(arguments,1)):(t=c.extend(!0,{},t),x?o.data("magnificPopup",t):o[0].magnificPopup=t,A.addGroup(o,t)),o};function k(){B&&(E.after(B.addClass(T)).detach(),B=null)}var T,E,B,z="inline";c.magnificPopup.registerModule(z,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){A.types.push(z),h(l+"."+z,function(){k()})},getInline:function(t,e){if(k(),t.src){var i,s=A.st.inline,o=c(t.src);return o.length?((i=o[0].parentNode)&&i.tagName&&(E||(T=s.hiddenClass,E=p(T),T="mfp-"+T),B=o.after(E).detach().removeClass(T)),A.updateStatus("ready")):(A.updateStatus("error",s.tNotFound),o=c("<div>")),t.inlineElement=o}return A.updateStatus("ready"),A._parseMarkup(e,{},t),e}}});function I(){S&&c(document.body).removeClass(S)}function M(){I(),A.req&&A.req.abort()}var S,P="ajax";c.magnificPopup.registerModule(P,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){A.types.push(P),S=A.st.ajax.cursor,h(l+"."+P,M),h("BeforeChange."+P,M)},getAjax:function(s){S&&c(document.body).addClass(S),A.updateStatus("loading");var t=c.extend({url:s.src,success:function(t,e,i){i={data:t,xhr:i};d("ParseAjax",i),A.appendContent(c(i.data),P),s.finished=!0,I(),A._setFocus(),setTimeout(function(){A.wrap.addClass(_)},16),A.updateStatus("ready"),d("AjaxContentAdded")},error:function(){I(),s.finished=s.loadError=!0,A.updateStatus("error",A.st.ajax.tError.replace("%url%",s.src))}},A.st.ajax.settings);return A.req=c.ajax(t),""}}});var D;c.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var t=A.st.image,e=".image";A.types.push("image"),h(v+e,function(){"image"===A.currItem.type&&t.cursor&&c(document.body).addClass(t.cursor)}),h(l+e,function(){t.cursor&&c(document.body).removeClass(t.cursor),C.off("resize"+w)}),h("Resize"+e,A.resizeImage),A.isLowIE&&h("AfterChange",A.resizeImage)},resizeImage:function(){var t,e=A.currItem;e&&e.img&&A.st.image.verticalFit&&(t=0,A.isLowIE&&(t=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",A.wH-t))},_onImageHasSize:function(t){t.img&&(t.hasSize=!0,D&&clearInterval(D),t.isCheckingImgSize=!1,d("ImageHasSize",t),t.imgHidden&&(A.content&&A.content.removeClass("mfp-loading"),t.imgHidden=!1))},findImageSize:function(e){var i=0,s=e.img[0],o=function(t){D&&clearInterval(D),D=setInterval(function(){0<s.naturalWidth?A._onImageHasSize(e):(200<i&&clearInterval(D),3===++i?o(10):40===i?o(50):100===i&&o(500))},t)};o(1)},getImage:function(t,e){var i,s=0,o=function(){t&&(t.img[0].complete?(t.img.off(".mfploader"),t===A.currItem&&(A._onImageHasSize(t),A.updateStatus("ready")),t.hasSize=!0,t.loaded=!0,d("ImageLoadComplete")):++s<200?setTimeout(o,100):n())},n=function(){t&&(t.img.off(".mfploader"),t===A.currItem&&(A._onImageHasSize(t),A.updateStatus("error",r.tError.replace("%url%",t.src))),t.hasSize=!0,t.loaded=!0,t.loadError=!0)},r=A.st.image,a=e.find(".mfp-img");return a.length&&((i=document.createElement("img")).className="mfp-img",t.el&&t.el.find("img").length&&(i.alt=t.el.find("img").attr("alt")),t.img=c(i).on("load.mfploader",o).on("error.mfploader",n),i.src=t.src,a.is("img")&&(t.img=t.img.clone()),0<(i=t.img[0]).naturalWidth?t.hasSize=!0:i.width||(t.hasSize=!1)),A._parseMarkup(e,{title:function(t){if(t.data&&void 0!==t.data.title)return t.data.title;var e=A.st.image.titleSrc;if(e){if(c.isFunction(e))return e.call(A,t);if(t.el)return t.el.attr(e)||""}return""}(t),img_replaceWith:t.img},t),A.resizeImage(),t.hasSize?(D&&clearInterval(D),t.loadError?(e.addClass("mfp-loading"),A.updateStatus("error",r.tError.replace("%url%",t.src))):(e.removeClass("mfp-loading"),A.updateStatus("ready"))):(A.updateStatus("loading"),t.loading=!0,t.hasSize||(t.imgHidden=!0,e.addClass("mfp-loading"),A.findImageSize(t))),e}}});var $;c.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(t){return t.is("img")?t:t.find("img")}},proto:{initZoom:function(){var t,e,i,s,o,n,r=A.st.zoom,a=".zoom";r.enabled&&A.supportsTransition&&(e=r.duration,i=function(t){var e=t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+r.duration/1e3+"s "+r.easing,s={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},t="transition";return s["-webkit-"+t]=s["-moz-"+t]=s["-o-"+t]=s[t]=i,e.css(s),e},s=function(){A.content.css("visibility","visible")},h("BuildControls"+a,function(){A._allowZoom()&&(clearTimeout(o),A.content.css("visibility","hidden"),(t=A._getItemToZoom())?((n=i(t)).css(A._getOffset()),A.wrap.append(n),o=setTimeout(function(){n.css(A._getOffset(!0)),o=setTimeout(function(){s(),setTimeout(function(){n.remove(),t=n=null,d("ZoomAnimationEnded")},16)},e)},16)):s())}),h(f+a,function(){if(A._allowZoom()){if(clearTimeout(o),A.st.removalDelay=e,!t){if(!(t=A._getItemToZoom()))return;n=i(t)}n.css(A._getOffset(!0)),A.wrap.append(n),A.content.css("visibility","hidden"),setTimeout(function(){n.css(A._getOffset())},16)}}),h(l+a,function(){A._allowZoom()&&(s(),n&&n.remove(),t=null)}))},_allowZoom:function(){return"image"===A.currItem.type},_getItemToZoom:function(){return!!A.currItem.hasSize&&A.currItem.img},_getOffset:function(t){var e=t?A.currItem.img:A.st.zoom.opener(A.currItem.el||A.currItem),i=e.offset(),s=parseInt(e.css("padding-top"),10),t=parseInt(e.css("padding-bottom"),10);i.top-=c(window).scrollTop()-s;s={width:e.width(),height:(x?e.innerHeight():e[0].offsetHeight)-t-s};return($=void 0===$?void 0!==document.createElement("p").style.MozTransform:$)?s["-moz-transform"]=s.transform="translate("+i.left+"px,"+i.top+"px)":(s.left=i.left,s.top=i.top),s}}});function H(t){var e;!A.currTemplate[O]||(e=A.currTemplate[O].find("iframe")).length&&(t||(e[0].src="//about:blank"),A.isIE8&&e.css("display",t?"block":"none"))}var O="iframe";c.magnificPopup.registerModule(O,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){A.types.push(O),h("BeforeChange",function(t,e,i){e!==i&&(e===O?H():i===O&&H(!0))}),h(l+"."+O,function(){H()})},getIframe:function(t,e){var i=t.src,s=A.st.iframe;c.each(s.patterns,function(){if(-1<i.indexOf(this.index))return this.id&&(i="string"==typeof this.id?i.substr(i.lastIndexOf(this.id)+this.id.length,i.length):this.id.call(this,i)),i=this.src.replace("%id%",i),!1});var o={};return s.srcAction&&(o[s.srcAction]=i),A._parseMarkup(e,o,t),A.updateStatus("ready"),e}}});function j(t){var e=A.items.length;return e-1<t?t-e:t<0?e+t:t}function W(t,e,i){return t.replace(/%curr%/gi,e+1).replace(/%total%/gi,i)}c.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=A.st.gallery,t=".mfp-gallery",s=Boolean(c.fn.mfpFastClick);if(A.direction=!0,!n||!n.enabled)return!1;m+=" mfp-gallery",h(v+t,function(){n.navigateByImgClick&&A.wrap.on("click"+t,".mfp-img",function(){if(1<A.items.length)return A.next(),!1}),g.on("keydown"+t,function(t){37===t.keyCode?A.prev():39===t.keyCode&&A.next()})}),h("UpdateStatus"+t,function(t,e){e.text&&(e.text=W(e.text,A.currItem.index,A.items.length))}),h(y+t,function(t,e,i,s){var o=A.items.length;i.counter=1<o?W(n.tCounter,s.index,o):""}),h("BuildControls"+t,function(){var t,e,i;1<A.items.length&&n.arrows&&!A.arrowLeft&&(i=n.arrowMarkup,t=A.arrowLeft=c(i.replace(/%title%/gi,n.tPrev).replace(/%dir%/gi,"left")).addClass(b),e=A.arrowRight=c(i.replace(/%title%/gi,n.tNext).replace(/%dir%/gi,"right")).addClass(b),t[i=s?"mfpFastClick":"click"](function(){A.prev()}),e[i](function(){A.next()}),A.isIE7&&(p("b",t[0],!1,!0),p("a",t[0],!1,!0),p("b",e[0],!1,!0),p("a",e[0],!1,!0)),A.container.append(t.add(e)))}),h(r+t,function(){A._preloadTimeout&&clearTimeout(A._preloadTimeout),A._preloadTimeout=setTimeout(function(){A.preloadNearbyImages(),A._preloadTimeout=null},16)}),h(l+t,function(){g.off(t),A.wrap.off("click"+t),A.arrowLeft&&s&&A.arrowLeft.add(A.arrowRight).destroyMfpFastClick(),A.arrowRight=A.arrowLeft=null})},next:function(){A.direction=!0,A.index=j(A.index+1),A.updateItemHTML()},prev:function(){A.direction=!1,A.index=j(A.index-1),A.updateItemHTML()},goTo:function(t){A.direction=t>=A.index,A.index=t,A.updateItemHTML()},preloadNearbyImages:function(){for(var t=A.st.gallery.preload,e=Math.min(t[0],A.items.length),i=Math.min(t[1],A.items.length),s=1;s<=(A.direction?i:e);s++)A._preloadItem(A.index+s);for(s=1;s<=(A.direction?e:i);s++)A._preloadItem(A.index-s)},_preloadItem:function(t){var e;t=j(t),A.items[t].preloaded||((e=A.items[t]).parsed||(e=A.parseEl(t)),d("LazyLoad",e),"image"===e.type&&(e.img=c('<img class="mfp-img" />').on("load.mfploader",function(){e.hasSize=!0}).on("error.mfploader",function(){e.hasSize=!0,e.loadError=!0,d("LazyLoadError",e)}).attr("src",e.src)),e.preloaded=!0)}}});var F,Z,L="retina";function Q(){C.off("touchmove"+Z+" touchend"+Z)}c.magnificPopup.registerModule(L,{options:{replaceSrc:function(t){return t.src.replace(/\.\w+$/,function(t){return"@2x"+t})},ratio:1},proto:{initRetina:function(){var i,s;1<window.devicePixelRatio&&(i=A.st.retina,s=i.ratio,1<(s=isNaN(s)?s():s)&&(h("ImageHasSize."+L,function(t,e){e.img.css({"max-width":e.img[0].naturalWidth/s,width:"100%"})}),h("ElementParse."+L,function(t,e){e.src=i.replaceSrc(e,s)})))}}}),F="ontouchstart"in window,Z=".mfpFastClick",c.fn.mfpFastClick=function(l){return c(this).each(function(){var e,i,s,o,n,r,a,t=c(this);F&&t.on("touchstart"+Z,function(t){n=!1,a=1,r=(t.originalEvent||t).touches[0],s=r.clientX,o=r.clientY,C.on("touchmove"+Z,function(t){r=(t.originalEvent||t).touches,a=r.length,r=r[0],(10<Math.abs(r.clientX-s)||10<Math.abs(r.clientY-o))&&(n=!0,Q())}).on("touchend"+Z,function(t){Q(),n||1<a||(e=!0,t.preventDefault(),clearTimeout(i),i=setTimeout(function(){e=!1},1e3),l())})}),t.on("click"+Z,function(){e||l()})})},c.fn.destroyMfpFastClick=function(){c(this).off("touchstart"+Z+" click"+Z),F&&C.off("touchmove"+Z+" touchend"+Z)},n()}),function(l,i,s,n){function c(t,e){this.settings=null,this.options=l.extend({},c.Defaults,e),this.$element=l(t),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},l.each(["onResize","onThrottledResize"],l.proxy(function(t,e){this._handlers[e]=l.proxy(this[e],this)},this)),l.each(c.Plugins,l.proxy(function(t,e){this._plugins[t.charAt(0).toLowerCase()+t.slice(1)]=new e(this)},this)),l.each(c.Workers,l.proxy(function(t,e){this._pipe.push({filter:e.filter,run:l.proxy(e.run,this)})},this)),this.setup(),this.initialize()}c.Defaults={items:3,loop:!1,center:!1,rewind:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:i,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},c.Width={Default:"default",Inner:"inner",Outer:"outer"},c.Type={Event:"event",State:"state"},c.Plugins={},c.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(t){t.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(t){var e=this.settings.margin||"",i=!this.settings.autoWidth,s=this.settings.rtl,e={width:"auto","margin-left":s?e:"","margin-right":s?"":e};i||this.$stage.children().css(e),t.css=e}},{filter:["width","items","settings"],run:function(t){var e=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,i=null,s=this._items.length,o=!this.settings.autoWidth,n=[];for(t.items={merge:!1,width:e};s--;)i=this._mergers[s],i=this.settings.mergeFit&&Math.min(i,this.settings.items)||i,t.items.merge=1<i||t.items.merge,n[s]=o?e*i:this._items[s].width();this._widths=n}},{filter:["items","settings"],run:function(){var t=[],e=this._items,i=this.settings,s=Math.max(2*i.items,4),o=2*Math.ceil(e.length/2),n=i.loop&&e.length?i.rewind?s:Math.max(s,o):0,r="",a="";for(n/=2;n--;)t.push(this.normalize(t.length/2,!0)),r+=e[t[t.length-1]][0].outerHTML,t.push(this.normalize(e.length-1-(t.length-1)/2,!0)),a=e[t[t.length-1]][0].outerHTML+a;this._clones=t,l(r).addClass("cloned").appendTo(this.$stage),l(a).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var t,e,i=this.settings.rtl?1:-1,s=this._clones.length+this._items.length,o=-1,n=[];++o<s;)t=n[o-1]||0,e=this._widths[this.relative(o)]+this.settings.margin,n.push(t+e*i);this._coordinates=n}},{filter:["width","items","settings"],run:function(){var t=this.settings.stagePadding,e=this._coordinates,t={width:Math.ceil(Math.abs(e[e.length-1]))+2*t,"padding-left":t||"","padding-right":t||""};this.$stage.css(t)}},{filter:["width","items","settings"],run:function(t){var e=this._coordinates.length,i=!this.settings.autoWidth,s=this.$stage.children();if(i&&t.items.merge)for(;e--;)t.css.width=this._widths[this.relative(e)],s.eq(e).css(t.css);else i&&(t.css.width=t.items.width,s.css(t.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(t){t.current=t.current?this.$stage.children().index(t.current):0,t.current=Math.max(this.minimum(),Math.min(this.maximum(),t.current)),this.reset(t.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){for(var t,e,i=this.settings.rtl?1:-1,s=2*this.settings.stagePadding,o=this.coordinates(this.current())+s,n=o+this.width()*i,r=[],a=0,l=this._coordinates.length;a<l;a++)t=this._coordinates[a-1]||0,e=Math.abs(this._coordinates[a])+s*i,(this.op(t,"<=",o)&&this.op(t,">",n)||this.op(e,"<",o)&&this.op(e,">",n))&&r.push(a);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+r.join("), :eq(")+")").addClass("active"),this.settings.center&&(this.$stage.children(".center").removeClass("center"),this.$stage.children().eq(this.current()).addClass("center"))}}],c.prototype.initialize=function(){var t,e;this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")&&(t=this.$element.find("img"),e=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:n,e=this.$element.children(e).width(),t.length&&e<=0&&this.preloadAutoWidthImages(t)),this.$element.addClass(this.options.loadingClass),this.$stage=l("<"+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this.$element.is(":visible")?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},c.prototype.setup=function(){var e=this.viewport(),t=this.options.responsive,i=-1,s=null;t?(l.each(t,function(t){t<=e&&i<t&&(i=Number(t))}),"function"==typeof(s=l.extend({},this.options,t[i])).stagePadding&&(s.stagePadding=s.stagePadding()),delete s.responsive,s.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+i))):s=l.extend({},this.options),this.trigger("change",{property:{name:"settings",value:s}}),this._breakpoint=i,this.settings=s,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},c.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},c.prototype.prepare=function(t){var e=this.trigger("prepare",{content:t});return e.data||(e.data=l("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(t)),this.trigger("prepared",{content:e.data}),e.data},c.prototype.update=function(){for(var t=0,e=this._pipe.length,i=l.proxy(function(t){return this[t]},this._invalidated),s={};t<e;)(this._invalidated.all||0<l.grep(this._pipe[t].filter,i).length)&&this._pipe[t].run(s),t++;this._invalidated={},this.is("valid")||this.enter("valid")},c.prototype.width=function(t){switch(t=t||c.Width.Default){case c.Width.Inner:case c.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},c.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},c.prototype.onThrottledResize=function(){i.clearTimeout(this.resizeTimer),this.resizeTimer=i.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},c.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.$element.is(":visible")&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},c.prototype.registerEventHandlers=function(){l.support.transition&&this.$stage.on(l.support.transition.end+".owl.core",l.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(i,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",l.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",l.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",l.proxy(this.onDragEnd,this)))},c.prototype.onDragStart=function(t){var e=null;3!==t.which&&(e=l.support.transform?{x:(e=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","))[16===e.length?12:4],y:e[16===e.length?13:5]}:(e=this.$stage.position(),{x:this.settings.rtl?e.left+this.$stage.width()-this.width()+this.settings.margin:e.left,y:e.top}),this.is("animating")&&(l.support.transform?this.animate(e.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===t.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=l(t.target),this._drag.stage.start=e,this._drag.stage.current=e,this._drag.pointer=this.pointer(t),l(s).on("mouseup.owl.core touchend.owl.core",l.proxy(this.onDragEnd,this)),l(s).one("mousemove.owl.core touchmove.owl.core",l.proxy(function(t){var e=this.difference(this._drag.pointer,this.pointer(t));l(s).on("mousemove.owl.core touchmove.owl.core",l.proxy(this.onDragMove,this)),Math.abs(e.x)<Math.abs(e.y)&&this.is("valid")||(t.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},c.prototype.onDragMove=function(t){var e,i=null,s=null,o=this.difference(this._drag.pointer,this.pointer(t)),n=this.difference(this._drag.stage.start,o);this.is("dragging")&&(t.preventDefault(),this.settings.loop?(i=this.coordinates(this.minimum()),s=this.coordinates(this.maximum()+1)-i,n.x=((n.x-i)%s+s)%s+i):(i=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),s=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),e=this.settings.pullDrag?-1*o.x/5:0,n.x=Math.max(Math.min(n.x,i+e),s+e)),this._drag.stage.current=n,this.animate(n.x))},c.prototype.onDragEnd=function(t){var e=this.difference(this._drag.pointer,this.pointer(t)),i=this._drag.stage.current,t=0<e.x^this.settings.rtl?"left":"right";l(s).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==e.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(i.x,0!==e.x?t:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=t,(3<Math.abs(e.x)||300<(new Date).getTime()-this._drag.time)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},c.prototype.closest=function(i,s){var o=-1,n=this.width(),r=this.coordinates();return this.settings.freeDrag||l.each(r,l.proxy(function(t,e){return"left"===s&&e-30<i&&i<e+30?o=t:"right"===s&&e-n-30<i&&i<e-n+30?o=t+1:this.op(i,"<",e)&&this.op(i,">",r[t+1]||e-n)&&(o="left"===s?t+1:t),-1===o},this)),this.settings.loop||(this.op(i,">",r[this.minimum()])?o=i=this.minimum():this.op(i,"<",r[this.maximum()])&&(o=i=this.maximum())),o},c.prototype.animate=function(t){var e=0<this.speed();this.is("animating")&&this.onTransitionEnd(),e&&(this.enter("animating"),this.trigger("translate")),l.support.transform3d&&l.support.transition?this.$stage.css({transform:"translate3d("+t+"px,0px,0px)",transition:this.speed()/1e3+"s"}):e?this.$stage.animate({left:t+"px"},this.speed(),this.settings.fallbackEasing,l.proxy(this.onTransitionEnd,this)):this.$stage.css({left:t+"px"})},c.prototype.is=function(t){return this._states.current[t]&&0<this._states.current[t]},c.prototype.current=function(t){return t===n?this._current:0===this._items.length?n:(t=this.normalize(t),this._current!==t&&((e=this.trigger("change",{property:{name:"position",value:t}})).data!==n&&(t=this.normalize(e.data)),this._current=t,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})),this._current);var e},c.prototype.invalidate=function(t){return"string"===l.type(t)&&(this._invalidated[t]=!0,this.is("valid")&&this.leave("valid")),l.map(this._invalidated,function(t,e){return e})},c.prototype.reset=function(t){(t=this.normalize(t))!==n&&(this._speed=0,this._current=t,this.suppress(["translate","translated"]),this.animate(this.coordinates(t)),this.release(["translate","translated"]))},c.prototype.normalize=function(t,e){var i=this._items.length,e=e?0:this._clones.length;return!this.isNumeric(t)||i<1?t=n:(t<0||i+e<=t)&&(t=((t-e/2)%i+i)%i+e/2),t},c.prototype.relative=function(t){return t-=this._clones.length/2,this.normalize(t,!0)},c.prototype.maximum=function(t){var e,i,s,o=this.settings,n=this._coordinates.length;if(o.loop)n=this._clones.length/2+this._items.length-1;else if(o.autoWidth||o.merge){for(e=this._items.length,i=this._items[--e].width(),s=this.$element.width();e--&&!(s<(i+=this._items[e].width()+this.settings.margin)););n=e+1}else n=o.center?this._items.length-1:this._items.length-o.items;return t&&(n-=this._clones.length/2),Math.max(n,0)},c.prototype.minimum=function(t){return t?0:this._clones.length/2},c.prototype.items=function(t){return t===n?this._items.slice():(t=this.normalize(t,!0),this._items[t])},c.prototype.mergers=function(t){return t===n?this._mergers.slice():(t=this.normalize(t,!0),this._mergers[t])},c.prototype.clones=function(i){function s(t){return t%2==0?o+t/2:e-(t+1)/2}var e=this._clones.length/2,o=e+this._items.length;return i===n?l.map(this._clones,function(t,e){return s(e)}):l.map(this._clones,function(t,e){return t===i?s(e):null})},c.prototype.speed=function(t){return t!==n&&(this._speed=t),this._speed},c.prototype.coordinates=function(t){var e,i=1,s=t-1;return t===n?l.map(this._coordinates,l.proxy(function(t,e){return this.coordinates(e)},this)):(this.settings.center?(this.settings.rtl&&(i=-1,s=t+1),e=this._coordinates[t],e+=(this.width()-e+(this._coordinates[s]||0))/2*i):e=this._coordinates[s]||0,Math.ceil(e))},c.prototype.duration=function(t,e,i){return 0===i?0:Math.min(Math.max(Math.abs(e-t),1),6)*Math.abs(i||this.settings.smartSpeed)},c.prototype.to=function(t,e){var i,s=this.current(),o=t-this.relative(s),n=(0<o)-(o<0),r=this._items.length,a=this.minimum(),l=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(o)>r/2&&(o+=-1*n*r),(i=(((t=s+o)-a)%r+r)%r+a)!==t&&i-o<=l&&0<i-o&&this.reset(s=(t=i)-o)):t=this.settings.rewind?(t%(l+=1)+l)%l:Math.max(a,Math.min(l,t)),this.speed(this.duration(s,t,e)),this.current(t),this.$element.is(":visible")&&this.update()},c.prototype.next=function(t){t=t||!1,this.to(this.relative(this.current())+1,t)},c.prototype.prev=function(t){t=t||!1,this.to(this.relative(this.current())-1,t)},c.prototype.onTransitionEnd=function(t){return(t===n||(t.stopPropagation(),(t.target||t.srcElement||t.originalTarget)===this.$stage.get(0)))&&(this.leave("animating"),void this.trigger("translated"))},c.prototype.viewport=function(){var t;if(this.options.responsiveBaseElement!==i)t=l(this.options.responsiveBaseElement).width();else if(i.innerWidth)t=i.innerWidth;else{if(!s.documentElement||!s.documentElement.clientWidth)throw"Can not detect viewport width.";t=s.documentElement.clientWidth}return t},c.prototype.replace=function(t){this.$stage.empty(),this._items=[],t=t&&(t instanceof jQuery?t:l(t)),(t=this.settings.nestedItemSelector?t.find("."+this.settings.nestedItemSelector):t).filter(function(){return 1===this.nodeType}).each(l.proxy(function(t,e){e=this.prepare(e),this.$stage.append(e),this._items.push(e),this._mergers.push(+e.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},c.prototype.add=function(t,e){var i=this.relative(this._current);e=e===n?this._items.length:this.normalize(e,!0),t=t instanceof jQuery?t:l(t),this.trigger("add",{content:t,position:e}),t=this.prepare(t),0===this._items.length||e===this._items.length?(0===this._items.length&&this.$stage.append(t),0!==this._items.length&&this._items[e-1].after(t),this._items.push(t),this._mergers.push(+t.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[e].before(t),this._items.splice(e,0,t),this._mergers.splice(e,0,+t.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[i]&&this.reset(this._items[i].index()),this.invalidate("items"),this.trigger("added",{content:t,position:e})},c.prototype.remove=function(t){(t=this.normalize(t,!0))!==n&&(this.trigger("remove",{content:this._items[t],position:t}),this._items[t].remove(),this._items.splice(t,1),this._mergers.splice(t,1),this.invalidate("items"),this.trigger("removed",{content:null,position:t}))},c.prototype.preloadAutoWidthImages=function(t){t.each(l.proxy(function(t,e){this.enter("pre-loading"),e=l(e),l(new Image).one("load",l.proxy(function(t){e.attr("src",t.target.src),e.css("opacity",1),this.leave("pre-loading"),this.is("pre-loading")||this.is("initializing")||this.refresh()},this)).attr("src",e.attr("src")||e.attr("data-src")||e.attr("data-src-retina"))},this))},c.prototype.destroy=function(){for(var t in this.$element.off(".owl.core"),this.$stage.off(".owl.core"),l(s).off(".owl.core"),!1!==this.settings.responsive&&(i.clearTimeout(this.resizeTimer),this.off(i,"resize",this._handlers.onThrottledResize)),this._plugins)this._plugins[t].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},c.prototype.op=function(t,e,i){var s=this.settings.rtl;switch(e){case"<":return s?i<t:t<i;case">":return s?t<i:i<t;case">=":return s?t<=i:i<=t;case"<=":return s?i<=t:t<=i}},c.prototype.on=function(t,e,i,s){t.addEventListener?t.addEventListener(e,i,s):t.attachEvent&&t.attachEvent("on"+e,i)},c.prototype.off=function(t,e,i,s){t.removeEventListener?t.removeEventListener(e,i,s):t.detachEvent&&t.detachEvent("on"+e,i)},c.prototype.trigger=function(t,e,i,s,o){var n={item:{count:this._items.length,index:this.current()}},r=l.camelCase(l.grep(["on",t,i],function(t){return t}).join("-").toLowerCase()),a=l.Event([t,"owl",i||"carousel"].join(".").toLowerCase(),l.extend({relatedTarget:this},n,e));return this._supress[t]||(l.each(this._plugins,function(t,e){e.onTrigger&&e.onTrigger(a)}),this.register({type:c.Type.Event,name:t}),this.$element.trigger(a),this.settings&&"function"==typeof this.settings[r]&&this.settings[r].call(this,a)),a},c.prototype.enter=function(t){l.each([t].concat(this._states.tags[t]||[]),l.proxy(function(t,e){this._states.current[e]===n&&(this._states.current[e]=0),this._states.current[e]++},this))},c.prototype.leave=function(t){l.each([t].concat(this._states.tags[t]||[]),l.proxy(function(t,e){this._states.current[e]--},this))},c.prototype.register=function(i){var e;i.type===c.Type.Event?(l.event.special[i.name]||(l.event.special[i.name]={}),l.event.special[i.name].owl||(e=l.event.special[i.name]._default,l.event.special[i.name]._default=function(t){return!e||!e.apply||t.namespace&&-1!==t.namespace.indexOf("owl")?t.namespace&&-1<t.namespace.indexOf("owl"):e.apply(this,arguments)},l.event.special[i.name].owl=!0)):i.type===c.Type.State&&(this._states.tags[i.name]?this._states.tags[i.name]=this._states.tags[i.name].concat(i.tags):this._states.tags[i.name]=i.tags,this._states.tags[i.name]=l.grep(this._states.tags[i.name],l.proxy(function(t,e){return l.inArray(t,this._states.tags[i.name])===e},this)))},c.prototype.suppress=function(t){l.each(t,l.proxy(function(t,e){this._supress[e]=!0},this))},c.prototype.release=function(t){l.each(t,l.proxy(function(t,e){delete this._supress[e]},this))},c.prototype.pointer=function(t){var e={x:null,y:null};return(t=(t=t.originalEvent||t||i.event).touches&&t.touches.length?t.touches[0]:t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t).pageX?(e.x=t.pageX,e.y=t.pageY):(e.x=t.clientX,e.y=t.clientY),e},c.prototype.isNumeric=function(t){return!isNaN(parseFloat(t))},c.prototype.difference=function(t,e){return{x:t.x-e.x,y:t.y-e.y}},l.fn.owlCarousel=function(e){var s=Array.prototype.slice.call(arguments,1);return this.each(function(){var t=l(this),i=t.data("owl.carousel");i||(i=new c(this,"object"==typeof e&&e),t.data("owl.carousel",i),l.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(t,e){i.register({type:c.Type.Event,name:e}),i.$element.on(e+".owl.carousel.core",l.proxy(function(t){t.namespace&&t.relatedTarget!==this&&(this.suppress([e]),i[e].apply(this,[].slice.call(arguments,1)),this.release([e]))},i))})),"string"==typeof e&&"_"!==e.charAt(0)&&i[e].apply(i,s)})},l.fn.owlCarousel.Constructor=c}(window.Zepto||window.jQuery,window,document),function(e,i){var s=function(t){this._core=t,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":e.proxy(function(t){t.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=e.extend({},s.Defaults,this._core.options),this._core.$element.on(this._handlers)};s.Defaults={autoRefresh:!0,autoRefreshInterval:500},s.prototype.watch=function(){this._interval||(this._visible=this._core.$element.is(":visible"),this._interval=i.setInterval(e.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},s.prototype.refresh=function(){this._core.$element.is(":visible")!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},s.prototype.destroy=function(){var t,e;for(t in i.clearInterval(this._interval),this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},e.fn.owlCarousel.Constructor.Plugins.AutoRefresh=s}(window.Zepto||window.jQuery,window,document),function(a,o){var e=function(t){this._core=t,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(t){if(t.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(t.property&&"position"==t.property.name||"initialized"==t.type))for(var e=this._core.settings,i=e.center&&Math.ceil(e.items/2)||e.items,s=e.center&&-1*i||0,o=(t.property&&void 0!==t.property.value?t.property.value:this._core.current())+s,n=this._core.clones().length,r=a.proxy(function(t,e){this.load(e)},this);s++<i;)this.load(n/2+this._core.relative(o)),n&&a.each(this._core.clones(this._core.relative(o)),r),o++},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1},e.prototype.load=function(t){var e=this._core.$stage.children().eq(t),t=e&&e.find(".owl-lazy");!t||-1<a.inArray(e.get(0),this._loaded)||(t.each(a.proxy(function(t,e){var i=a(e),s=1<o.devicePixelRatio&&i.attr("data-src-retina")||i.attr("data-src");this._core.trigger("load",{element:i,url:s},"lazy"),i.is("img")?i.one("load.owl.lazy",a.proxy(function(){i.css("opacity",1),this._core.trigger("loaded",{element:i,url:s},"lazy")},this)).attr("src",s):((e=new Image).onload=a.proxy(function(){i.css({"background-image":"url("+s+")",opacity:"1"}),this._core.trigger("loaded",{element:i,url:s},"lazy")},this),e.src=s)},this)),this._loaded.push(e.get(0)))},e.prototype.destroy=function(){var t,e;for(t in this.handlers)this._core.$element.off(t,this.handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(s){var e=function(t){this._core=t,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":s.proxy(function(t){t.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":s.proxy(function(t){t.namespace&&this._core.settings.autoHeight&&"position"==t.property.name&&this.update()},this),"loaded.owl.lazy":s.proxy(function(t){t.namespace&&this._core.settings.autoHeight&&t.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=s.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var t=this._core._current,e=t+this._core.settings.items,t=this._core.$stage.children().toArray().slice(t,e),i=[];s.each(t,function(t,e){i.push(s(e).height())}),e=Math.max.apply(null,i),this._core.$stage.parent().height(e).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var t,e;for(t in this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},s.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,(window,document)),function(h,e){var i=function(t){this._core=t,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":h.proxy(function(t){t.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":h.proxy(function(t){t.namespace&&this._core.settings.video&&this.isInFullScreen()&&t.preventDefault()},this),"refreshed.owl.carousel":h.proxy(function(t){t.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":h.proxy(function(t){t.namespace&&"position"===t.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":h.proxy(function(t){var e;!t.namespace||(e=h(t.content).find(".owl-video")).length&&(e.css("display","none"),this.fetch(e,h(t.content)))},this)},this._core.options=h.extend({},i.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",h.proxy(function(t){this.play(t)},this))};i.Defaults={video:!1,videoHeight:!1,videoWidth:!1},i.prototype.fetch=function(t,e){var i=t.attr("data-vimeo-id")?"vimeo":t.attr("data-vzaar-id")?"vzaar":"youtube",s=t.attr("data-vimeo-id")||t.attr("data-youtube-id")||t.attr("data-vzaar-id"),o=t.attr("data-width")||this._core.settings.videoWidth,n=t.attr("data-height")||this._core.settings.videoHeight,r=t.attr("href");if(!r)throw new Error("Missing video URL.");if(-1<(s=r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu"))i="youtube";else if(-1<s[3].indexOf("vimeo"))i="vimeo";else{if(!(-1<s[3].indexOf("vzaar")))throw new Error("Video URL not supported.");i="vzaar"}s=s[6],this._videos[r]={type:i,id:s,width:o,height:n},e.attr("data-video",r),this.thumbnail(t,this._videos[r])},i.prototype.thumbnail=function(e,t){function i(t){s=c.lazyLoad?'<div class="owl-video-tn '+l+'" '+a+'="'+t+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+t+')"></div>',e.after(s),e.after('<div class="owl-video-play-icon"></div>')}var s,o,n=t.width&&t.height?'style="width:'+t.width+"px;height:"+t.height+'px;"':"",r=e.find("img"),a="src",l="",c=this._core.settings;return e.wrap('<div class="owl-video-wrapper"'+n+"></div>"),this._core.settings.lazyLoad&&(a="data-src",l="owl-lazy"),r.length?(i(r.attr(a)),r.remove(),!1):void("youtube"===t.type?(o="//img.youtube.com/vi/"+t.id+"/hqdefault.jpg",i(o)):"vimeo"===t.type?h.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+t.id+".json",jsonp:"callback",dataType:"jsonp",success:function(t){o=t[0].thumbnail_large,i(o)}}):"vzaar"===t.type&&h.ajax({type:"GET",url:"//vzaar.com/api/videos/"+t.id+".json",jsonp:"callback",dataType:"jsonp",success:function(t){o=t.framegrab_url,i(o)}}))},i.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},i.prototype.play=function(t){var e,i=h(t.target).closest("."+this._core.settings.itemClass),s=this._videos[i.attr("data-video")],o=s.width||"100%",t=s.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),i=this._core.items(this._core.relative(i.index())),this._core.reset(i.index()),"youtube"===s.type?e='<iframe width="'+o+'" height="'+t+'" src="//www.youtube.com/embed/'+s.id+"?autoplay=1&v="+s.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===s.type?e='<iframe src="//player.vimeo.com/video/'+s.id+'?autoplay=1" width="'+o+'" height="'+t+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>':"vzaar"===s.type&&(e='<iframe frameborder="0"height="'+t+'"width="'+o+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/'+s.id+'/player?autoplay=true"></iframe>'),h('<div class="owl-video-frame">'+e+"</div>").insertAfter(i.find(".owl-video")),this._playing=i.addClass("owl-video-playing"))},i.prototype.isInFullScreen=function(){var t=e.fullscreenElement||e.mozFullScreenElement||e.webkitFullscreenElement;return t&&h(t).parent().hasClass("owl-video-frame")},i.prototype.destroy=function(){var t,e;for(t in this._core.$element.off("click.owl.video"),this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},h.fn.owlCarousel.Constructor.Plugins.Video=i}(window.Zepto||window.jQuery,(window,document)),function(r){var e=function(t){this.core=t,this.core.options=r.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=void 0,this.next=void 0,this.handlers={"change.owl.carousel":r.proxy(function(t){t.namespace&&"position"==t.property.name&&(this.previous=this.core.current(),this.next=t.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":r.proxy(function(t){t.namespace&&(this.swapping="translated"==t.type)},this),"translate.owl.carousel":r.proxy(function(t){t.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){var t,e,i,s,o,n;1===this.core.settings.items&&r.support.animation&&r.support.transition&&(this.core.speed(0),e=r.proxy(this.clear,this),i=this.core.$stage.children().eq(this.previous),s=this.core.$stage.children().eq(this.next),o=this.core.settings.animateIn,n=this.core.settings.animateOut,this.core.current()!==this.previous&&(n&&(t=this.core.coordinates(this.previous)-this.core.coordinates(this.next),i.one(r.support.animation.end,e).css({left:t+"px"}).addClass("animated owl-animated-out").addClass(n)),o&&s.one(r.support.animation.end,e).addClass("animated owl-animated-in").addClass(o)))},e.prototype.clear=function(t){r(t.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var t,e;for(t in this.handlers)this.core.$element.off(t,this.handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},r.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,(window,document)),function(i,s,o){var e=function(t){this._core=t,this._timeout=null,this._paused=!1,this._handlers={"changed.owl.carousel":i.proxy(function(t){t.namespace&&"settings"===t.property.name?this._core.settings.autoplay?this.play():this.stop():t.namespace&&"position"===t.property.name&&this._core.settings.autoplay&&this._setAutoPlayInterval()},this),"initialized.owl.carousel":i.proxy(function(t){t.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":i.proxy(function(t,e,i){t.namespace&&this.play(e,i)},this),"stop.owl.autoplay":i.proxy(function(t){t.namespace&&this.stop()},this),"mouseover.owl.autoplay":i.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":i.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":i.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":i.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=i.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype.play=function(t,e){this._paused=!1,this._core.is("rotating")||(this._core.enter("rotating"),this._setAutoPlayInterval())},e.prototype._getNextTimeout=function(t,e){return this._timeout&&s.clearTimeout(this._timeout),s.setTimeout(i.proxy(function(){this._paused||this._core.is("busy")||this._core.is("interacting")||o.hidden||this._core.next(e||this._core.settings.autoplaySpeed)},this),t||this._core.settings.autoplayTimeout)},e.prototype._setAutoPlayInterval=function(){this._timeout=this._getNextTimeout()},e.prototype.stop=function(){this._core.is("rotating")&&(s.clearTimeout(this._timeout),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&(this._paused=!0)},e.prototype.destroy=function(){var t,e;for(t in this.stop(),this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},i.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(o){"use strict";var e=function(t){this._core=t,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":o.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+o(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":o.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.splice(t.position,0,this._templates.pop())},this),"remove.owl.carousel":o.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.splice(t.position,1)},this),"changed.owl.carousel":o.proxy(function(t){t.namespace&&"position"==t.property.name&&this.draw()},this),"initialized.owl.carousel":o.proxy(function(t){t.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":o.proxy(function(t){t.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=o.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var t,i=this._core.settings;for(t in this._controls.$relative=(i.navContainer?o(i.navContainer):o("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=o("<"+i.navElement+">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click",o.proxy(function(t){this.prev(i.navSpeed)},this)),this._controls.$next=o("<"+i.navElement+">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click",o.proxy(function(t){this.next(i.navSpeed)},this)),i.dotsData||(this._templates=[o("<div>").addClass(i.dotClass).append(o("<span>")).prop("outerHTML")]),this._controls.$absolute=(i.dotsContainer?o(i.dotsContainer):o("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","div",o.proxy(function(t){var e=(o(t.target).parent().is(this._controls.$absolute)?o(t.target):o(t.target).parent()).index();t.preventDefault(),this.to(e,i.dotsSpeed)},this)),this._overrides)this._core[t]=o.proxy(this[t],this)},e.prototype.destroy=function(){var t,e,i,s;for(t in this._handlers)this.$element.off(t,this._handlers[t]);for(e in this._controls)this._controls[e].remove();for(s in this.overides)this._core[s]=this._overrides[s];for(i in Object.getOwnPropertyNames(this))"function"!=typeof this[i]&&(this[i]=null)},e.prototype.update=function(){var t,e,i=this._core.clones().length/2,s=i+this._core.items().length,o=this._core.maximum(!0),n=this._core.settings,r=n.center||n.autoWidth||n.dotsData?1:n.dotsEach||n.items;if("page"!==n.slideBy&&(n.slideBy=Math.min(n.slideBy,n.items)),n.dots||"page"==n.slideBy)for(this._pages=[],t=i,e=0;t<s;t++){if(r<=e||0===e){if(this._pages.push({start:Math.min(o,t-i),end:t-i+r-1}),Math.min(o,t-i)===o)break;e=0,0}e+=this._core.mergers(this._core.relative(t))}},e.prototype.draw=function(){var t=this._core.settings,e=this._core.items().length<=t.items,i=this._core.relative(this._core.current()),s=t.loop||t.rewind;this._controls.$relative.toggleClass("disabled",!t.nav||e),t.nav&&(this._controls.$previous.toggleClass("disabled",!s&&i<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!s&&i>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!t.dots||e),t.dots&&(e=this._pages.length-this._controls.$absolute.children().length,t.dotsData&&0!=e?this._controls.$absolute.html(this._templates.join("")):0<e?this._controls.$absolute.append(new Array(1+e).join(this._templates[0])):e<0&&this._controls.$absolute.children().slice(e).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(o.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(t){var e=this._core.settings;t.page={index:o.inArray(this.current(),this._pages),count:this._pages.length,size:e&&(e.center||e.autoWidth||e.dotsData?1:e.dotsEach||e.items)}},e.prototype.current=function(){var i=this._core.relative(this._core.current());return o.grep(this._pages,o.proxy(function(t,e){return t.start<=i&&t.end>=i},this)).pop()},e.prototype.getPosition=function(t){var e,i,s=this._core.settings;return"page"==s.slideBy?(e=o.inArray(this.current(),this._pages),i=this._pages.length,t?++e:--e,e=this._pages[(e%i+i)%i].start):(e=this._core.relative(this._core.current()),i=this._core.items().length,t?e+=s.slideBy:e-=s.slideBy),e},e.prototype.next=function(t){o.proxy(this._overrides.to,this._core)(this.getPosition(!0),t)},e.prototype.prev=function(t){o.proxy(this._overrides.to,this._core)(this.getPosition(!1),t)},e.prototype.to=function(t,e,i){!i&&this._pages.length?(i=this._pages.length,o.proxy(this._overrides.to,this._core)(this._pages[(t%i+i)%i].start,e)):o.proxy(this._overrides.to,this._core)(t,e)},o.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,(window,document)),function(s,o){"use strict";var e=function(t){this._core=t,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":s.proxy(function(t){t.namespace&&"URLHash"===this._core.settings.startPosition&&s(o).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":s.proxy(function(t){var e;!t.namespace||(e=s(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash"))&&(this._hashes[e]=t.content)},this),"changed.owl.carousel":s.proxy(function(t){var i;t.namespace&&"position"===t.property.name&&(i=this._core.items(this._core.relative(this._core.current())),(t=s.map(this._hashes,function(t,e){return t===i?e:null}).join())&&o.location.hash.slice(1)!==t&&(o.location.hash=t))},this)},this._core.options=s.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),s(o).on("hashchange.owl.navigation",s.proxy(function(t){var e=o.location.hash.substring(1),i=this._core.$stage.children(),e=this._hashes[e]&&i.index(this._hashes[e]);void 0!==e&&e!==this._core.current()&&this._core.to(this._core.relative(e),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var t,e;for(t in s(o).off("hashchange.owl.navigation"),this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},s.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(o,n){function e(t,i){var s=!1,e=t.charAt(0).toUpperCase()+t.slice(1);return o.each((t+" "+a.join(e+" ")+e).split(" "),function(t,e){return r[e]!==n?(s=!i||e,!1):void 0}),s}function t(t){return e(t,!0)}var r=o("<support>").get(0).style,a="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},s=function(){return!!e("transform")},l=function(){return!!e("perspective")},c=function(){return!!e("animation")};!function(){return!!e("transition")}()||(o.support.transition=new String(t("transition")),o.support.transition.end=i.transition.end[o.support.transition]),c()&&(o.support.animation=new String(t("animation")),o.support.animation.end=i.animation.end[o.support.animation]),s()&&(o.support.transform=new String(t("transform")),o.support.transform3d=l())}(window.Zepto||window.jQuery,(window,void document)),function(e){"use strict";e(document).ready(function(){e("#switcher_link, .switcher_close").click(function(t){t.preventDefault(),e("#switcher_wrap").toggleClass("switcher_moved")}),e("#switcher_wrap").hasClass("lazy_open")&&setTimeout(function(){e("#switcher_wrap").hasClass("switcher_moved")&&e("#switcher_link").click()},7e3),e("body").on("click",".switcher_items a",function(){var t=e(this).attr("data-type");"style"!=t?(e(".typology-switcher-"+t).remove(),"default"!=e(this).attr("data-id")&&e("head").append('<link media="all" type="text/css" href="'+e(this).attr("data-url")+'" class="typology-switcher-'+t+'" rel="stylesheet">')):"flat"==e(this).attr("data-id")?(e("body").addClass("typology-flat").css("background","#ffffff"),e(".typology-fake-bg").css("background","#ffffff")):(e("body").removeClass("typology-flat").removeAttr("style"),e(".typology-fake-bg").removeAttr("style")),e(this).closest(".switcher_items").find("a").removeClass("active"),e(this).addClass("active")}),e("#show-rtl").change(function(){e(".typology-sidebar").hide(),e(this).is(":checked")?e("head").append('<link media="all" type="text/css" href="'+e(this).attr("data-url")+'" id="typology-rtl-css-custom" rel="stylesheet">'):e("#typology-rtl-css-custom").remove(),setTimeout(function(){e(".typology-sidebar").show()},500)})})}(jQuery),function(A){"use strict";var g={settings:{cover_height:"auto",admin_bar:{height:0,position:""}},pushes:{url:[],up:0,down:0},init:function(){this.sidebar(),this.cover_slider(),this.reverse_menu(),this.browser_check(),this.push_state_for_loading(),this.load_more(),this.infinite_scroll(),this.accordion_widget(),this.single_sticky_bottom(),this.responsive_videos(),this.scroll_to_top(),this.scroll_down(),this.read_later(),this.scroll_to_comments(),this.logo_setup(),this.admin_bar_check(),this.cover_height(),this.gallery_slider(A(".section-content")),this.gallery_popup(A(".section-content")),this.sticky_header(),this.center_layout_items(),this.responsive_navigation(),this.video_fallback_image(),this.align_full_fix(),this.search_action_hover()},resize:function(){this.admin_bar_check(),this.responsive_navigation(),this.align_full_fix(),500<A(window).width()&&this.cover_height()},admin_bar_check:function(){var t;A("#wpadminbar").length&&A("#wpadminbar").is(":visible")&&(this.settings.admin_bar.height=A("#wpadminbar").height(),this.settings.admin_bar.position=A("#wpadminbar").css("position"),A(".typology-header").length&&(t="relative"!=this.settings.admin_bar.position?this.settings.admin_bar.height:0,A(".typology-header").css("top",t)))},cover_height:function(){var t,e,i,s,o;A(".typology-cover-empty").length||(t=A(window).height()-this.settings.admin_bar.height+Math.abs(parseInt(A(".typology-section:first").css("top"),10)),e=A(".cover-item-container").height(),i=A(".typology-scroll-down-arrow"),o=!0,(t=t<450?450:t)-(s=A("#typology-header").height())<e&&(t=e+s+100,o=!1),A(window).width()<=1366?(this.settings.cover_height=t,A(".typology-cover-item, .typology-cover-img").css("height",t),A(".typology-cover-slider").length&&A(".typology-cover-slider .owl-stage-outer").css("height",t),A(".typology-cover").css("height",t),i.length&&A(".typology-cover-slider .owl-dots").hide()):(A(".typology-cover-item").css("height",A(".typology-cover").height()),A(".typology-cover").css("height",A(".typology-cover").height()),this.settings.cover_height=A(".typology-cover").height()),o&&(A(".typology-cover-slider").length?A(".typology-slider-wrapper-fixed"):A(".typology-cover-item")).css("position","fixed"))},cover_slider:function(){A(".typology-cover-slider").owlCarousel({rtl:!!typology_js_settings.rtl_mode,loop:!0,autoHeight:!0,autoWidth:!1,items:1,margin:0,nav:!0,dots:!(0<typology_js_settings.scroll_down_arrow),center:!1,fluidSpeed:100,navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],autoplay:0<typology_js_settings.slider_autoplay,autoplayTimeout:typology_js_settings.slider_autoplay,autoplaySpeed:400,navSpeed:400,responsive:{0:{autoHeight:!1},1e3:{autoHeight:!0}}})},gallery_slider:function(t){typology_js_settings.use_gallery&&A("body").imagesLoaded(function(){t.find(".gallery-columns-1, .wp-block-gallery.columns-1").addClass("owl-carousel").owlCarousel({rtl:!!typology_js_settings.rtl_mode,loop:!0,nav:!0,autoWidth:!1,autoHeight:!0,center:!1,fluidSpeed:100,margin:0,items:1,navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']})})},gallery_popup:function(t){typology_js_settings.use_gallery&&t.find(".gallery, .wp-block-gallery").each(function(){var e=A(this),t=e.hasClass("wp-block-gallery")?".blocks-gallery-item a":".gallery-icon a.typology-popup";A(this).find(t).magnificPopup({type:"image",gallery:{enabled:!0},image:{titleSrc:function(t){t=e.hasClass("wp-block-gallery")?t.el.closest("figure").find("figcaption"):t.el.closest(".gallery-item").find(".gallery-caption");return"undefined"!=t?t.text():""}}})})},sidebar:function(){var e="typology-sidebar-open typology-lock";A("body").on("click",".typology-action-sidebar",function(){A("body").addClass(e),A(".typology-sidebar").css("top",g.settings.admin_bar.height)}),A("body").on("click",".typology-sidebar-close, .typology-sidebar-overlay",function(){A("body").removeClass(e)}),A(document).keyup(function(t){27==t.keyCode&&A("body").hasClass(e)&&A("body").removeClass(e)})},reverse_menu:function(){A(".typology-header").on("mouseenter",".typology-nav li",function(t){A(this).find("ul").length&&A(window).width()-(A(this).find("ul").offset().left+A(this).find("ul").outerWidth())<0&&A(this).find("ul").addClass("typology-rev")})},logo_setup:function(){1<window.devicePixelRatio&&typology_js_settings.logo_retina&&A(".typology-logo").length&&A(".typology-logo").imagesLoaded(function(){A(".typology-logo").each(function(){var t;A(this).is(":visible")&&(t=A(this).width(),A(this).attr("src",typology_js_settings.logo_retina).css("width",t+"px"))})})},sticky_header:function(){var t=A(".typology-section");if(!t.length)return!1;var s="fixed"==this.settings.admin_bar.position?this.settings.admin_bar.height:0,o=t.first().offset().top-s+Math.abs(parseInt(t.first().css("top")))+400,n=o-400-Math.abs(parseInt(t.first().css("top")))-A(".typology-header").height()/2,r=A(".typology-cover-empty").length?0:o-400,a=A(".cover-item-container"),l=A(".typology-scroll-down-arrow"),c=A(".typology-header"),h=0,p="down",d=!1,u=!0;50<A(window).scrollTop()&&u&&(c.css("z-index",1e3),u=!1),A(window).scroll(function(){var t="relative"!=g.settings.admin_bar.position?g.settings.admin_bar.height:0;typology_js_settings.header_sticky&&(A(window).scrollTop()<o?d&&(c.animate({top:-70+s},200,function(){A(this).removeClass("typology-header-sticky"),A(this).css("top",t),A(this).css("z-index",1e3)}),d=!1):d||(c.css("top",-70+s).addClass("typology-header-sticky").animate({top:s},200),c.css("z-index",9001),d=!0)),A(window).scrollTop()<n?u||(c.css("z-index",9001),u=!0):u&&(c.css("z-index",1e3),u=!1);var e,i=0;A(window).scrollTop()<r&&(e=(100-100*A(window).scrollTop()/r)/100,"down"===p?i=e-.8:A(window).scrollTop()<150&&(i=.002+e),a.css("opacity",e),l.css("opacity",i),p=h<i?"up":"down",h=i)}),A.fn.scrollEnd=function(e,i){A(this).scroll(function(){var t=A(this);t.data("scrollTimeout")&&clearTimeout(t.data("scrollTimeout")),t.data("scrollTimeout",setTimeout(e,i))})},A(window).scrollEnd(function(){A(window).scrollTop()<n?(c.css("z-index",9001),u=!0):u&&(c.css("z-index",1e3),u=!1)},1e3)},accordion_widget:function(){A(".typology-responsive-menu .typology-nav").each(function(){A(this).find(".menu-item-has-children > a").after('<span class="typology-nav-widget-acordion"><i class="fa fa-angle-down"></i></span>')}),A("body").on("click",".typology-responsive-menu .typology-nav-widget-acordion",function(){A(this).next("ul.sub-menu:first, ul.children:first").slideToggle("fast").parent().toggleClass("active")})},single_sticky_bottom:function(){var t,e,i;A("#typology-single-sticky").length&&(t=A(".typology-single-post").offset().top+300,e=A(".typology-single-post").offset().top+A(".typology-single-post").height()-A(window).height(),i=A("#typology-footer").offset().top-A(window).height()-100,A(window).scroll(function(){A(window).scrollTop()>t?A(".typology-sticky-content.meta").parent().addClass("typology-single-sticky-show typology-show-meta"):A(".typology-sticky-content.meta").parent().removeClass("typology-single-sticky-show"),A(window).scrollTop()>e?(console.log(A(window).scrollTop()),A(".typology-sticky-content.meta").parent().removeClass("typology-show-meta"),A(window).scrollTop()<i?A(".typology-sticky-content.prev-next").parent().addClass("typology-show-prev-next"):A(".typology-sticky-content.meta").parent().removeClass("typology-single-sticky-show typology-show-meta")):A(".typology-sticky-content.prev-next").parent().removeClass("typology-show-prev-next")}))},responsive_videos:function(){A(".entry-content").fitVids({customSelector:["iframe[src*='youtube.com/embed']","iframe[src*='player.vimeo.com/video']","iframe[src*='kickstarter.com/projects']","iframe[src*='players.brightcove.net']","iframe[src*='hulu.com/embed']","iframe[src*='vine.co/v']","iframe[src*='videopress.com/embed']","iframe[src*='dailymotion.com/embed']","iframe[src*='vid.me/e']","iframe[src*='player.twitch.tv']","iframe[src*='facebook.com/plugins/video.php']","iframe[src*='gfycat.com/ifr/']","iframe[src*='liveleak.com/ll_embed']","iframe[src*='media.myspace.com']","iframe[src*='archive.org/embed']","iframe[src*='channel9.msdn.com']","iframe[src*='content.jwplatform.com']","iframe[src*='wistia.com']","iframe[src*='vooplayer.com']","iframe[src*='content.zetatv.com.uy']","iframe[src*='embed.wirewax.com']","iframe[src*='eventopedia.navstream.com']","iframe[src*='cdn.playwire.com']","iframe[src*='drive.google.com']","iframe[src*='videos.sproutvideo.com']"].join(","),ignore:'[class^="wp-block"]'})},scroll_to_top:function(){A(".typology-sticky-to-top").length&&A("body").on("click",".typology-sticky-to-top",function(t){return t.preventDefault(),A("body,html").animate({scrollTop:0},800),!1})},scroll_down:function(){var e=A(".typology-section");if(!e.length)return!1;A("body").on("click",".typology-scroll-down-arrow",function(t){return t.preventDefault(),A("body,html").animate({scrollTop:e.offset().top},800),!1})},scroll_to_comments:function(){A("body").on("click",".typology-single-post .meta-comments a, .typology-cover-single .meta-comments a, .typology-sticky-comments a",function(t){t.preventDefault();var e=this.hash,t=A(e);A("html, body").stop().animate({scrollTop:t.offset().top-100},800,"swing",function(){window.location.hash=e})})},read_later:function(){A("body").on("click",".typology-rl",function(t){t.preventDefault(),A(this).hasClass("pocket")&&g.share_popup(A(this).attr("data-url"))})},center_layout_items:function(){A(".section-content-c .typology-posts .typology-layout-c").length%2!=0?A(".section-content-c").addClass("layout-even").removeClass("layout-odd"):A(".section-content-c").addClass("layout-odd").removeClass("layout-even")},push_state_for_loading:function(){var t,e,i;(A(".typology-pagination .load-more a").length||A(".typology-pagination .infinite-scroll").length)&&(t={prev:window.location.href,next:"",offset:A(window).scrollTop(),prev_title:window.document.title,next_title:window.document.title},g.pushes.url.push(t),window.history.pushState(t,"",window.location.href),i=0,A(window).scroll(function(){g.pushes.url[g.pushes.up].offset!=e&&A(window).scrollTop()<g.pushes.url[g.pushes.up].offset&&(e=g.pushes.url[g.pushes.up].offset,i=0,window.document.title=g.pushes.url[g.pushes.up].prev_title,window.history.replaceState(g.pushes.url,"",g.pushes.url[g.pushes.up].prev),g.pushes.down=g.pushes.up,0!==g.pushes.up&&g.pushes.up--),g.pushes.url[g.pushes.down].offset!=i&&A(window).scrollTop()>g.pushes.url[g.pushes.down].offset&&(i=g.pushes.url[g.pushes.down].offset,e=0,window.document.title=g.pushes.url[g.pushes.down].next_title,window.history.replaceState(g.pushes.url,"",g.pushes.url[g.pushes.down].next),g.pushes.up=g.pushes.down,g.pushes.down<g.pushes.url.length-1&&g.pushes.down++)}))},load_more:function(){var l=0;A("body").on("click",".typology-pagination .load-more a",function(t){t.preventDefault();var n=window.location.href,r=window.document.title,t=A(this),a=t.attr("href");t.parent().addClass("load-more-active"),A("<div>").load(a,function(){var t=l.toString(),i=A(".typology-posts").last(),s=A(this),o=s.find(".typology-posts").last().children().addClass("typology-new-"+t);o.imagesLoaded(function(){var t,e;return o.hide().appendTo(i).fadeIn(400),g.center_layout_items(),s.find(".typology-pagination").length?A(".typology-pagination").html(s.find(".typology-pagination").html()):A(".typology-pagination").fadeOut("fast").remove(),a!=window.location&&(g.pushes.up++,g.pushes.down++,t=s.find("title").text(),e={prev:n,next:a,offset:A(window).scrollTop(),prev_title:r,next_title:t},g.pushes.url.push(e),window.document.title=t,window.history.pushState(e,"",a)),l++,!1})})})},share_popup:function(t){window.open(t,"Share","height=500,width=760,top="+(A(window).height()/2-250)+", left="+(A(window).width()/2-380)+"resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0")},infinite_scroll:function(){var l,c;A(".typology-pagination .infinite-scroll").length&&(l=!0,c=0,A(window).scroll(function(){var n,r,t,a;l&&A(this).scrollTop()>A(".typology-pagination").offset().top-A(this).height()-200&&(l=!1,n=window.location.href,r=window.document.title,t=A(".typology-pagination .infinite-scroll a"),a=t.attr("href"),t.parent().addClass("load-more-active"),void 0!==a&&A("<div>").load(a,function(){var t=c.toString(),i=A(".typology-posts").last(),s=A(this),o=s.find(".typology-posts").last().children().addClass("typology-new-"+t);o.imagesLoaded(function(){var t,e;return o.hide().appendTo(i).fadeIn(400),g.center_layout_items(),s.find(".typology-pagination").length?(A(".typology-pagination").html(s.find(".typology-pagination").html()),l=!0):A(".typology-pagination").fadeOut("fast").remove(),a!=window.location&&(g.pushes.up++,g.pushes.down++,t=s.find("title").text(),e={prev:n,next:a,offset:A(window).scrollTop(),prev_title:r,next_title:t},g.pushes.url.push(e),window.document.title=t,window.history.pushState(e,"",a)),c++,!1})}))}))},responsive_navigation:function(){A("#typology-header .typology-main-navigation").length&&480<A(window).width()&&(A("#typology-header .container:first").width()-50<(A("#typology-header .typology-site-branding").length?A("#typology-header .typology-site-branding").width():0)+A("#typology-header .typology-main-navigation").width()+A("#typology-header .typology-actions-list").width()?(A("#typology-header .typology-main-navigation").css("opacity",0).css("position","absolute"),A(".typology-responsive-menu").show(),A(".typology-action-sidebar.typology-mobile-visible").css({display:"inline-block"})):(A("#typology-header .typology-main-navigation").css("opacity",1).css("position","relative"),A(".typology-responsive-menu").hide(),A(".typology-action-sidebar.typology-mobile-visible").css({display:"none"})))},is_autoplay_supported:function(t){if("function"!=typeof t)return console.log("is_autoplay_supported: Callback must be a function!"),!1;var e;sessionStorage.autoplay_supported?"true"===sessionStorage.autoplay_supported?t(!0):t(!1):((e=document.createElement("video")).autoplay=!0,e.src="data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAAAAG1wNDJtcDQxaXNvbWF2YzEAAATKbW9vdgAAAGxtdmhkAAAAANLEP5XSxD+VAAB1MAAAdU4AAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAACFpb2RzAAAAABCAgIAQAE////9//w6AgIAEAAAAAQAABDV0cmFrAAAAXHRraGQAAAAH0sQ/ldLEP5UAAAABAAAAAAAAdU4AAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAoAAAAFoAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAHVOAAAH0gABAAAAAAOtbWRpYQAAACBtZGhkAAAAANLEP5XSxD+VAAB1MAAAdU5VxAAAAAAANmhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABMLVNNQVNIIFZpZGVvIEhhbmRsZXIAAAADT21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAw9zdGJsAAAAwXN0c2QAAAAAAAAAAQAAALFhdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAoABaABIAAAASAAAAAAAAAABCkFWQyBDb2RpbmcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAAAOGF2Y0MBZAAf/+EAHGdkAB+s2UCgL/lwFqCgoKgAAB9IAAdTAHjBjLABAAVo6+yyLP34+AAAAAATY29scm5jbHgABQAFAAUAAAAAEHBhc3AAAAABAAAAAQAAABhzdHRzAAAAAAAAAAEAAAAeAAAD6QAAAQBjdHRzAAAAAAAAAB4AAAABAAAH0gAAAAEAABONAAAAAQAAB9IAAAABAAAAAAAAAAEAAAPpAAAAAQAAE40AAAABAAAH0gAAAAEAAAAAAAAAAQAAA+kAAAABAAATjQAAAAEAAAfSAAAAAQAAAAAAAAABAAAD6QAAAAEAABONAAAAAQAAB9IAAAABAAAAAAAAAAEAAAPpAAAAAQAAE40AAAABAAAH0gAAAAEAAAAAAAAAAQAAA+kAAAABAAATjQAAAAEAAAfSAAAAAQAAAAAAAAABAAAD6QAAAAEAABONAAAAAQAAB9IAAAABAAAAAAAAAAEAAAPpAAAAAQAAB9IAAAAUc3RzcwAAAAAAAAABAAAAAQAAACpzZHRwAAAAAKaWlpqalpaampaWmpqWlpqalpaampaWmpqWlpqalgAAABxzdHNjAAAAAAAAAAEAAAABAAAAHgAAAAEAAACMc3RzegAAAAAAAAAAAAAAHgAAA5YAAAAVAAAAEwAAABMAAAATAAAAGwAAABUAAAATAAAAEwAAABsAAAAVAAAAEwAAABMAAAAbAAAAFQAAABMAAAATAAAAGwAAABUAAAATAAAAEwAAABsAAAAVAAAAEwAAABMAAAAbAAAAFQAAABMAAAATAAAAGwAAABRzdGNvAAAAAAAAAAEAAAT6AAAAGHNncGQBAAAAcm9sbAAAAAIAAAAAAAAAHHNiZ3AAAAAAcm9sbAAAAAEAAAAeAAAAAAAAAAhmcmVlAAAGC21kYXQAAAMfBgX///8b3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMTEgNzU5OTIxMCAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTUgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0xIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDM6MHgxMTMgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTEgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz0xMSBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgc3RpdGNoYWJsZT0xIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PWluZmluaXRlIGtleWludF9taW49Mjkgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD00MCByYz0ycGFzcyBtYnRyZWU9MSBiaXRyYXRlPTExMiByYXRldG9sPTEuMCBxY29tcD0wLjYwIHFwbWluPTUgcXBtYXg9NjkgcXBzdGVwPTQgY3BseGJsdXI9MjAuMCBxYmx1cj0wLjUgdmJ2X21heHJhdGU9ODI1IHZidl9idWZzaXplPTkwMCBuYWxfaHJkPW5vbmUgZmlsbGVyPTAgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAAG9liIQAFf/+963fgU3DKzVrulc4tMurlDQ9UfaUpni2SAAAAwAAAwAAD/DNvp9RFdeXpgAAAwB+ABHAWYLWHUFwGoHeKCOoUwgBAAADAAADAAADAAADAAAHgvugkks0lyOD2SZ76WaUEkznLgAAFFEAAAARQZokbEFf/rUqgAAAAwAAHVAAAAAPQZ5CeIK/AAADAAADAA6ZAAAADwGeYXRBXwAAAwAAAwAOmAAAAA8BnmNqQV8AAAMAAAMADpkAAAAXQZpoSahBaJlMCCv//rUqgAAAAwAAHVEAAAARQZ6GRREsFf8AAAMAAAMADpkAAAAPAZ6ldEFfAAADAAADAA6ZAAAADwGep2pBXwAAAwAAAwAOmAAAABdBmqxJqEFsmUwIK//+tSqAAAADAAAdUAAAABFBnspFFSwV/wAAAwAAAwAOmQAAAA8Bnul0QV8AAAMAAAMADpgAAAAPAZ7rakFfAAADAAADAA6YAAAAF0Ga8EmoQWyZTAgr//61KoAAAAMAAB1RAAAAEUGfDkUVLBX/AAADAAADAA6ZAAAADwGfLXRBXwAAAwAAAwAOmQAAAA8Bny9qQV8AAAMAAAMADpgAAAAXQZs0SahBbJlMCCv//rUqgAAAAwAAHVAAAAARQZ9SRRUsFf8AAAMAAAMADpkAAAAPAZ9xdEFfAAADAAADAA6YAAAADwGfc2pBXwAAAwAAAwAOmAAAABdBm3hJqEFsmUwIK//+tSqAAAADAAAdUQAAABFBn5ZFFSwV/wAAAwAAAwAOmAAAAA8Bn7V0QV8AAAMAAAMADpkAAAAPAZ+3akFfAAADAAADAA6ZAAAAF0GbvEmoQWyZTAgr//61KoAAAAMAAB1QAAAAEUGf2kUVLBX/AAADAAADAA6ZAAAADwGf+XRBXwAAAwAAAwAOmAAAAA8Bn/tqQV8AAAMAAAMADpkAAAAXQZv9SahBbJlMCCv//rUqgAAAAwAAHVE=",e.load(),e.style.display="none",e.playing=!1,e.play(),e.onplay=function(){this.playing=!0},e.oncanplay=function(){e.playing?(sessionStorage.autoplay_supported="true",t(!0)):(sessionStorage.autoplay_supported="false",t(!1))})},video_fallback_image:function(){typology_js_settings.cover_video_image_fallback&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&this.is_autoplay_supported(function(t){t||(A(".typology-cover-img video").css("display","none"),A(".typology-cover-img .typology-fallback-video-img").css("display","block"))})},browser_check:function(){-1!==navigator.appVersion.indexOf("MSIE 9.")&&A("body").addClass("typology-ie9")},align_full_fix:function(){var t="";A("body").hasClass("typology-flat")?(t=".alignfull { width: "+A(window).width()+"px; margin-left: -"+A(window).width()/2+"px; margin-right: -"+A(window).width()/2+"px; left:50%; right:50%;position: relative;max-width: initial; }",A("#typology-align-fix").length?A("#typology-align-fix").html(t):A("head").append('<style id="typology-align-fix" type="text/css">'+t+"</style>")):(t=".alignfull { max-width: "+A(".typology-section").outerWidth()+"px; width: 100vw; left:-"+(A(".typology-section").outerWidth()-A(".entry-content").outerWidth())/2+"px; }",A("#typology-full-fix").length?A("#typology-full-fix").html(t):A("head").append('<style id="typology-full-fix" type="text/css">'+t+"</style>"))},search_action_hover:function(t){A("body").on("click",".typology-header .typology-search-form input[type=text]",function(){A(".typology-header .typology-action-search").addClass("search-action-active")});A("body").mouseup(function(){A(".typology-header .typology-action-search").removeClass("search-action-active")})}};A(document).ready(function(){g.init()}),A(window).resize(function(){g.resize()})}(jQuery);




/* Minit: https://demo.mekshq.com/typology/wp-content/plugins/meks-easy-social-share/assets/js/main.js */
(function($) {

    "use strict";

    $(document).ready(function() {

        $('body').on('click', '.meks_ess-item:not(".prevent-share-popup")', function(e) {
            e.preventDefault();
            meks_ess_popup($(this).attr('data-url'));
        });

    });

    function meks_ess_popup(data) {
        window.open(data, "Share", 'height=500,width=760,top=' + ($(window).height() / 2 - 250) + ', left=' + ($(window).width() / 2 - 380) + 'resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0');
    }

})(jQuery);



/* Minit: /wp-includes/js/wp-embed.min.js */
/*! This file is auto-generated */
!function(c,d){"use strict";var e=!1,n=!1;if(d.querySelector)if(c.addEventListener)e=!0;if(c.wp=c.wp||{},!c.wp.receiveEmbedMessage)if(c.wp.receiveEmbedMessage=function(e){var t=e.data;if(t)if(t.secret||t.message||t.value)if(!/[^a-zA-Z0-9]/.test(t.secret)){for(var r,a,i,s=d.querySelectorAll('iframe[data-secret="'+t.secret+'"]'),n=d.querySelectorAll('blockquote[data-secret="'+t.secret+'"]'),o=0;o<n.length;o++)n[o].style.display="none";for(o=0;o<s.length;o++)if(r=s[o],e.source===r.contentWindow){if(r.removeAttribute("style"),"height"===t.message){if(1e3<(i=parseInt(t.value,10)))i=1e3;else if(~~i<200)i=200;r.height=i}if("link"===t.message)if(a=d.createElement("a"),i=d.createElement("a"),a.href=r.getAttribute("src"),i.href=t.value,i.host===a.host)if(d.activeElement===r)c.top.location.href=t.value}}},e)c.addEventListener("message",c.wp.receiveEmbedMessage,!1),d.addEventListener("DOMContentLoaded",t,!1),c.addEventListener("load",t,!1);function t(){if(!n){n=!0;for(var e,t,r=-1!==navigator.appVersion.indexOf("MSIE 10"),a=!!navigator.userAgent.match(/Trident.*rv:11\./),i=d.querySelectorAll("iframe.wp-embedded-content"),s=0;s<i.length;s++){if(!(e=i[s]).getAttribute("data-secret"))t=Math.random().toString(36).substr(2,10),e.src+="#?secret="+t,e.setAttribute("data-secret",t);if(r||a)(t=e.cloneNode(!0)).removeAttribute("security"),e.parentNode.replaceChild(t,e)}}}}(window,document);



/* Minit: https://demo.mekshq.com/typology/wp-content/plugins/wpforms-lite/assets/js/jquery.validate.min.js */
/*! jQuery Validation Plugin - v1.19.0 - 11/28/2018
 * https://jqueryvalidation.org/
 * Copyright (c) 2018 J??rn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.submitButton=b.currentTarget,a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.submitButton&&(c.settings.submitHandler||c.formSubmitted)&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),!(c.settings.submitHandler&&!c.settings.debug)||(e=c.settings.submitHandler.call(c,c.currentForm,b),d&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0],k="undefined"!=typeof this.attr("contenteditable")&&"false"!==this.attr("contenteditable");if(null!=j&&(!j.form&&k&&(j.form=this.closest("form")[0],j.name=this.attr("name")),null!=j.form)){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(a,b){i[b]=f[b],delete f[b]}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g)),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}}),a.extend(a.expr.pseudos||a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){var c=a(b).val();return null!==c&&!!a.trim(""+c)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");if(!this.form&&c&&(this.form=a(this).closest("form")[0],this.name=a(this).attr("name")),d===this.form){var e=a.data(this.form,"validator"),f="on"+b.type.replace(/^validate/,""),g=e.settings;g[f]&&!a(this).is(g.ignore)&&g[f].call(e,this,b)}}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.currentForm,e=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){e[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)void 0!==a[b]&&null!==a[b]&&a[b]!==!1&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name"),e="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),e&&(this.form=a(this).closest("form")[0],this.name=d),this.form===b.currentForm&&(!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0))})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type,g="undefined"!=typeof e.attr("contenteditable")&&"false"!==e.attr("contenteditable");return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=g?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f,g=a(b).rules(),h=a.map(g,function(a,b){return b}).length,i=!1,j=this.elementValue(b);"function"==typeof g.normalizer?f=g.normalizer:"function"==typeof this.settings.normalizer&&(f=this.settings.normalizer),f&&(j=f.call(b,j),delete g.normalizer);for(d in g){e={method:d,parameters:g[d]};try{if(c=a.validator.methods[d].call(this,j,b,e.parameters),"dependency-mismatch"===c&&1===h){i=!0;continue}if(i=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(k){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",k),k instanceof TypeError&&(k.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),k}}if(!i)return this.objectLength(g)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.submitButton&&a("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),""===d&&(d=!0),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:void 0!==b&&null!==b&&b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)},date:function(){var a=!1;return function(b,c){return a||(a=!0,this.settings.debug&&window.console&&console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")),this.optional(c)||!/Invalid|NaN/.test(new Date(b).toString())}}(),dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e<=d},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var b,c={};return a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a});



/* Minit: https://demo.mekshq.com/typology/wp-content/plugins/wpforms-lite/assets/js/mailcheck.min.js */
/*! mailcheck v1.1.2 @licence MIT */var Mailcheck={domainThreshold:2,secondLevelThreshold:2,topLevelThreshold:2,defaultDomains:["msn.com","bellsouth.net","telus.net","comcast.net","optusnet.com.au","earthlink.net","qq.com","sky.com","icloud.com","mac.com","sympatico.ca","googlemail.com","att.net","xtra.co.nz","web.de","cox.net","gmail.com","ymail.com","aim.com","rogers.com","verizon.net","rocketmail.com","google.com","optonline.net","sbcglobal.net","aol.com","me.com","btinternet.com","charter.net","shaw.ca"],defaultSecondLevelDomains:["yahoo","hotmail","mail","live","outlook","gmx"],defaultTopLevelDomains:["com","com.au","com.tw","ca","co.nz","co.uk","de","fr","it","ru","net","org","edu","gov","jp","nl","kr","se","eu","ie","co.il","us","at","be","dk","hk","es","gr","ch","no","cz","in","net","net.au","info","biz","mil","co.jp","sg","hu","uk"],run:function(a){a.domains=a.domains||Mailcheck.defaultDomains,a.secondLevelDomains=a.secondLevelDomains||Mailcheck.defaultSecondLevelDomains,a.topLevelDomains=a.topLevelDomains||Mailcheck.defaultTopLevelDomains,a.distanceFunction=a.distanceFunction||Mailcheck.sift4Distance;var b=function(a){return a},c=a.suggested||b,d=a.empty||b,e=Mailcheck.suggest(Mailcheck.encodeEmail(a.email),a.domains,a.secondLevelDomains,a.topLevelDomains,a.distanceFunction);return e?c(e):d()},suggest:function(a,b,c,d,e){a=a.toLowerCase();var f=this.splitEmail(a);if(c&&d&&-1!==c.indexOf(f.secondLevelDomain)&&-1!==d.indexOf(f.topLevelDomain))return!1;var g=this.findClosestDomain(f.domain,b,e,this.domainThreshold);if(g)return g==f.domain?!1:{address:f.address,domain:g,full:f.address+"@"+g};var h=this.findClosestDomain(f.secondLevelDomain,c,e,this.secondLevelThreshold),i=this.findClosestDomain(f.topLevelDomain,d,e,this.topLevelThreshold);if(f.domain){g=f.domain;var j=!1;if(h&&h!=f.secondLevelDomain&&(g=g.replace(f.secondLevelDomain,h),j=!0),i&&i!=f.topLevelDomain&&""!==f.secondLevelDomain&&(g=g.replace(new RegExp(f.topLevelDomain+"$"),i),j=!0),j)return{address:f.address,domain:g,full:f.address+"@"+g}}return!1},findClosestDomain:function(a,b,c,d){d=d||this.topLevelThreshold;var e,f=1/0,g=null;if(!a||!b)return!1;c||(c=this.sift4Distance);for(var h=0;h<b.length;h++){if(a===b[h])return a;e=c(a,b[h]),f>e&&(f=e,g=b[h])}return d>=f&&null!==g?g:!1},sift4Distance:function(a,b,c){if(void 0===c&&(c=5),!a||!a.length)return b?b.length:0;if(!b||!b.length)return a.length;for(var d=a.length,e=b.length,f=0,g=0,h=0,i=0,j=0,k=[];d>f&&e>g;){if(a.charAt(f)==b.charAt(g)){i++;for(var l=!1,m=0;m<k.length;){var n=k[m];if(f<=n.c1||g<=n.c2){l=Math.abs(g-f)>=Math.abs(n.c2-n.c1),l?j++:n.trans||(n.trans=!0,j++);break}f>n.c2&&g>n.c1?k.splice(m,1):m++}k.push({c1:f,c2:g,trans:l})}else{h+=i,i=0,f!=g&&(f=g=Math.min(f,g));for(var o=0;c>o&&(d>f+o||e>g+o);o++){if(d>f+o&&a.charAt(f+o)==b.charAt(g)){f+=o-1,g--;break}if(e>g+o&&a.charAt(f)==b.charAt(g+o)){f--,g+=o-1;break}}}f++,g++,(f>=d||g>=e)&&(h+=i,i=0,f=g=Math.min(f,g))}return h+=i,Math.round(Math.max(d,e)-h+j)},splitEmail:function(a){a=null!==a?a.replace(/^\s*/,"").replace(/\s*$/,""):null;var b=a.split("@");if(b.length<2)return!1;for(var c=0;c<b.length;c++)if(""===b[c])return!1;var d=b.pop(),e=d.split("."),f="",g="";if(0===e.length)return!1;if(1==e.length)g=e[0];else{f=e[0];for(var h=1;h<e.length;h++)g+=e[h]+".";g=g.substring(0,g.length-1)}return{topLevelDomain:g,secondLevelDomain:f,domain:d,address:b.join("@")}},encodeEmail:function(a){var b=encodeURI(a);return b=b.replace("%20"," ").replace("%25","%").replace("%5E","^").replace("%60","`").replace("%7B","{").replace("%7C","|").replace("%7D","}")}};"undefined"!=typeof module&&module.exports&&(module.exports=Mailcheck),"function"==typeof define&&define.amd&&define("mailcheck",[],function(){return Mailcheck}),"undefined"!=typeof window&&window.jQuery&&!function(a){a.fn.mailcheck=function(a){var b=this;if(a.suggested){var c=a.suggested;a.suggested=function(a){c(b,a)}}if(a.empty){var d=a.empty;a.empty=function(){d.call(null,b)}}a.email=this.val(),Mailcheck.run(a)}}(jQuery);



/* Minit: https://demo.mekshq.com/typology/wp-content/plugins/wpforms-lite/assets/js/wpforms.js */
/* global wpforms_settings, grecaptcha, hcaptcha, wpformsRecaptchaCallback, wpforms_validate, wpforms_datepicker, wpforms_timepicker, Mailcheck, Choices */

'use strict';

var wpforms = window.wpforms || ( function( document, window, $ ) {

	var app = {

		/**
		 * Start the engine.
		 *
		 * @since 1.2.3
		 */
		init: function() {

			// Document ready.
			$( app.ready );

			// Page load.
			$( window ).on( 'load', app.load );

			app.bindUIActions();
			app.bindOptinMonster();
		},

		/**
		 * Document ready.
		 *
		 * @since 1.2.3
		 */
		ready: function() {

			// Clear URL - remove wpforms_form_id.
			app.clearUrlQuery();

			// Set user identifier.
			app.setUserIndentifier();

			app.loadValidation();
			app.loadDatePicker();
			app.loadTimePicker();
			app.loadInputMask();
			app.loadSmartPhoneField();
			app.loadPayments();
			app.loadMailcheck();
			app.loadChoicesJS();

			// Randomize elements.
			$( '.wpforms-randomize' ).each( function() {
				var $list      = $( this ),
					$listItems = $list.children();
				while ( $listItems.length ) {
					$list.append( $listItems.splice( Math.floor( Math.random() * $listItems.length ), 1 )[0] );
				}
			} );

			// Unlock pagebreak navigation.
			$( '.wpforms-page-button' ).prop( 'disabled', false );

			$( document ).trigger( 'wpformsReady' );
		},

		/**
		 * Page load.
		 *
		 * @since 1.2.3
		 */
		load: function() {

		},

		//--------------------------------------------------------------------//
		// Initializing
		//--------------------------------------------------------------------//

		/**
		 * Remove wpforms_form_id from URL.
		 *
		 * @since 1.5.2
		 */
		clearUrlQuery: function() {
			var loc   = window.location,
				query = loc.search;

			if ( query.indexOf( 'wpforms_form_id=' ) !== -1 ) {
				query = query.replace( /([&?]wpforms_form_id=[0-9]*$|wpforms_form_id=[0-9]*&|[?&]wpforms_form_id=[0-9]*(?=#))/, '' );
				history.replaceState( {}, null, loc.origin + loc.pathname + query );
			}
		},


		/**
		 * Load jQuery Validation.
		 *
		 * @since 1.2.3
		 */
		loadValidation: function() {

			// Only load if jQuery validation library exists.
			if ( typeof $.fn.validate !== 'undefined' ) {

				// jQuery Validation library will not correctly validate
				// fields that do not have a name attribute, so we use the
				// `wpforms-input-temp-name` class to add a temporary name
				// attribute before validation is initialized, then remove it
				// before the form submits.
				$( '.wpforms-input-temp-name' ).each( function( index, el ) {
					var random = Math.floor( Math.random() * 9999 ) + 1;
					$( this ).attr( 'name', 'wpf-temp-' + random );
				} );

				// Prepend URL field contents with http:// if user input doesn't contain a schema.
				$( '.wpforms-validate input[type=url]' ).change( function() {
					var url = $( this ).val();
					if ( ! url ) {
						return false;
					}
					if ( url.substr( 0, 7 ) !== 'http://' && url.substr( 0, 8 ) !== 'https://' ) {
						$( this ).val( 'http://' + url );
					}
				} );

				$.validator.messages.required = wpforms_settings.val_required;
				$.validator.messages.url      = wpforms_settings.val_url;
				$.validator.messages.email    = wpforms_settings.val_email;
				$.validator.messages.number   = wpforms_settings.val_number;

				// Payments: Validate method for Credit Card Number.
				if ( typeof $.fn.payment !== 'undefined' ) {
					$.validator.addMethod( 'creditcard', function( value, element ) {

						//var type  = $.payment.cardType(value);
						var valid = $.payment.validateCardNumber( value );
						return this.optional( element ) || valid;
					}, wpforms_settings.val_creditcard );

					// @todo validate CVC and expiration
				}

				// Validate method for file extensions.
				$.validator.addMethod( 'extension', function( value, element, param ) {
					param = 'string' === typeof param ? param.replace( /,/g, '|' ) : 'png|jpe?g|gif';
					return this.optional( element ) || value.match( new RegExp( '\\.(' + param + ')$', 'i' ) );
				}, wpforms_settings.val_fileextension );

				// Validate method for file size.
				$.validator.addMethod( 'maxsize', function( value, element, param ) {
					var maxSize = param,
						optionalValue = this.optional( element ),
						i, len, file;
					if ( optionalValue ) {
						return optionalValue;
					}
					if ( element.files && element.files.length ) {
						i = 0;
						len = element.files.length;
						for ( ; i < len; i++ ) {
							file = element.files[i];
							if ( file.size > maxSize ) {
								return false;
							}
						}
					}
					return true;
				}, wpforms_settings.val_filesize );

				// Validate email addresses.
				$.validator.methods.email = function( value, element ) {
					return this.optional( element ) || /^[a-z0-9.!#$%&'*+\/=?^_`{|}~-]+@((?=[a-z0-9-]{1,63}\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,63}$/i.test( value );
				};

				// Validate email by allowlist/blocklist.
				$.validator.addMethod( 'restricted-email', function( value, element ) {

					var validator = this,
						$el = $( element ),
						$field = $el.closest( '.wpforms-field' ),
						$form = $el.closest( '.wpforms-form' );

					if ( ! $el.val().length ) {
						return true;
					}

					this.startRequest( element );
					$.post( {
						url: wpforms_settings.ajaxurl,
						type: 'post',
						async: false,
						data: {
							'token': $form.data( 'token' ),
							'action': 'wpforms_restricted_email',
							'form_id': $form.data( 'formid' ),
							'field_id': $field.data( 'field-id' ),
							'email': $el.val(),
						},
						dataType: 'json',
						success: function( response ) {

							var isValid =  response.success && response.data,
								errors = {};

							if ( isValid ) {
								validator.resetInternals();
								validator.toHide = validator.errorsFor( element );
								validator.showErrors();
							} else {
								errors[ element.name ] = wpforms_settings.val_email_restricted;
								validator.showErrors( errors );
							}
							validator.stopRequest( element, isValid );
						},
					} );
					return 'pending';
				}, wpforms_settings.val_email_restricted );

				// Validate confirmations.
				$.validator.addMethod( 'confirm', function( value, element, param ) {
					return value === $( element ).closest( '.wpforms-field' ).find( 'input:first-child' ).val();
				}, wpforms_settings.val_confirm );

				// Validate required payments.
				$.validator.addMethod( 'required-payment', function( value, element ) {
					return app.amountSanitize( value ) > 0;
				}, wpforms_settings.val_requiredpayment );

				// Validate 12-hour time.
				$.validator.addMethod( 'time12h', function( value, element ) {
					return this.optional( element ) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test( value );
				}, wpforms_settings.val_time12h );

				// Validate 24-hour time.
				$.validator.addMethod( 'time24h', function( value, element ) {
					return this.optional( element ) || /^(([0-1]?[0-9])|([2][0-3])):([0-5]?[0-9])(\ ?[AP]M)?$/i.test( value );
				}, wpforms_settings.val_time24h );

				// Validate checkbox choice limit.
				$.validator.addMethod( 'check-limit', function( value, element ) {
					var $ul = $( element ).closest( 'ul' ),
						$checked = $ul.find( 'input[type="checkbox"]:checked' ),
						choiceLimit = parseInt( $ul.attr( 'data-choice-limit' ) || 0, 10 );

					if ( 0 === choiceLimit ) {
						return true;
					}
					return $checked.length <= choiceLimit;
				}, function( params, element ) {
					var	choiceLimit = parseInt( $( element ).closest( 'ul' ).attr( 'data-choice-limit' ) || 0, 10 );
					return wpforms_settings.val_checklimit.replace( '{#}', choiceLimit );
				} );

				// Validate Smart Phone Field.
				if ( typeof $.fn.intlTelInput !== 'undefined' ) {
					$.validator.addMethod( 'smart-phone-field', function( value, element ) {
						if ( value.match( /[^\d()\-+\s]/ ) ) {
							return false;
						}
						return this.optional( element ) || $( element ).intlTelInput( 'isValidNumber' );
					}, wpforms_settings.val_phone );
				}

				// Validate Input Mask minimum length.
				$.validator.addMethod( 'empty-blanks', function( value, element ) {
					if ( typeof $.fn.inputmask === 'undefined' ) {
						return true;
					}
					return ! ( value.indexOf( element.inputmask.opts.placeholder ) + 1 );
				}, wpforms_settings.val_empty_blanks );

				// Validate Payment item value on zero.
				$.validator.addMethod( 'required-positive-number', function( value, element ) {

					return value > 0;
				}, wpforms_settings.val_number_positive );

				// Validate US Phone Field.
				$.validator.addMethod( 'us-phone-field', function( value, element ) {
					if ( value.match( /[^\d()\-+\s]/ ) ) {
						return false;
					}
					return this.optional( element ) || value.replace( /[^\d]/g, '' ).length === 10;
				}, wpforms_settings.val_phone );

				// Validate International Phone Field.
				$.validator.addMethod( 'int-phone-field', function( value, element ) {
					if ( value.match( /[^\d()\-+\s]/ ) ) {
						return false;
					}
					return this.optional( element ) || value.replace( /[^\d]/g, '' ).length > 0;
				}, wpforms_settings.val_phone );

				// Finally load jQuery Validation library for our forms.
				$( '.wpforms-validate' ).each( function() {
					var form   = $( this ),
						formID = form.data( 'formid' ),
						properties;

					// TODO: cleanup this BC with wpforms_validate.
					if ( typeof window['wpforms_' + formID] !== 'undefined' && window['wpforms_' + formID].hasOwnProperty( 'validate' ) ) {
						properties = window['wpforms_' + formID].validate;
					} else if ( typeof wpforms_validate !== 'undefined' ) {
						properties = wpforms_validate;
					} else {
						properties = {
							errorClass: 'wpforms-error',
							validClass: 'wpforms-valid',
							errorPlacement: function( error, element ) {

								if ( app.isLikertScaleField( element ) ) {
									element.closest( 'table' ).hasClass( 'single-row' ) ?
										element.closest( '.wpforms-field' ).append( error ) :
										element.closest( 'tr' ).find( 'th' ).append( error );
								} else if ( app.isWrappedField( element ) ) {
									element.closest( '.wpforms-field' ).append( error );
								} else if ( app.isDateTimeField( element ) ) {
									app.dateTimeErrorPlacement( element, error );
								} else if ( app.isFieldInColumn( element ) ) {
									element.parent().append( error );
								} else {
									error.insertAfter( element );
								}
							},
							highlight: function( element, errorClass, validClass ) {
								var $element  = $( element ),
									$field    = $element.closest( '.wpforms-field' ),
									inputName = $element.attr( 'name' );
								if ( 'radio' === $element.attr( 'type' ) || 'checkbox' === $element.attr( 'type' ) ) {
									$field.find( 'input[name="' + inputName + '"]' ).addClass( errorClass ).removeClass( validClass );
								} else {
									$element.addClass( errorClass ).removeClass( validClass );
								}
								$field.addClass( 'wpforms-has-error' );
							},
							unhighlight: function( element, errorClass, validClass ) {
								var $element  = $( element ),
									$field    = $element.closest( '.wpforms-field' ),
									inputName = $element.attr( 'name' );
								if ( 'radio' === $element.attr( 'type' ) || 'checkbox' === $element.attr( 'type' ) ) {
									$field.find( 'input[name="' + inputName + '"]' ).addClass( validClass ).removeClass( errorClass );
								} else {
									$element.addClass( validClass ).removeClass( errorClass );
								}
								$field.removeClass( 'wpforms-has-error' );
							},
							submitHandler: function( form ) {

								var $form       = $( form ),
									$submit     = $form.find( '.wpforms-submit' ),
									altText     = $submit.data( 'alt-text' ),
									recaptchaID = $submit.get( 0 ).recaptchaID;

								if ( $form.data( 'token' ) && 0 === $( '.wpforms-token', $form ).length ) {
									$( '<input type="hidden" class="wpforms-token" name="wpforms[token]" />' )
										.val( $form.data( 'token' ) )
										.appendTo( $form );
								}

								$submit.prop( 'disabled', true );
								$form.find( '#wpforms-field_recaptcha-error' ).remove();

								// Display processing text.
								if ( altText ) {
									$submit.text( altText );
								}

								if ( ! app.empty( recaptchaID ) || recaptchaID === 0 ) {

									// Form contains invisible reCAPTCHA.
									grecaptcha.execute( recaptchaID ).then( null, function( reason ) {

										reason = ( null === reason ) ? '' : '<br>' + reason;
										$form.find( '.wpforms-recaptcha-container' ).append( '<label id="wpforms-field_recaptcha-error" class="wpforms-error"> ' + wpforms_settings.val_recaptcha_fail_msg + reason + '</label>' );
										$submit.prop( 'disabled', false );
									} );
									return false;
								}

								// Remove name attributes if needed.
								$( '.wpforms-input-temp-name' ).removeAttr( 'name' );

								app.formSubmit( $form );
							},
							invalidHandler: function( event, validator ) {

								if ( typeof validator.errorList[0] !== 'undefined' ) {
									app.scrollToError( $( validator.errorList[0].element ) );
								}
							},
							onkeyup: function( element, event ) {

								// This code is copied from JQuery Validate 'onkeyup' method with only one change: 'wpforms-novalidate-onkeyup' class check.
								var excludedKeys = [ 16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225 ];

								if ( $( element ).hasClass( 'wpforms-novalidate-onkeyup' ) ) {
									return; // Disable onkeyup validation for some elements (e.g. remote calls).
								}

								if ( 9 === event.which && '' === this.elementValue( element ) || $.inArray( event.keyCode, excludedKeys ) !== -1 ) {
									return;
								} else if ( element.name in this.submitted || element.name in this.invalid ) {
									this.element( element );
								}
							},
							onfocusout: function( element ) {

								// This code is copied from JQuery Validate 'onfocusout' method with only one change: 'wpforms-novalidate-onkeyup' class check.
								var validate = false;

								if ( $( element ).hasClass( 'wpforms-novalidate-onkeyup' ) && ! element.value ) {
									validate = true; // Empty value error handling for elements with onkeyup validation disabled.
								}

								if ( ! this.checkable( element ) && ( element.name in this.submitted || ! this.optional( element ) ) ) {
									validate = true;
								}

								if ( validate ) {
									this.element( element );
								}
							},
							onclick: function( element ) {
								var validate = false,
									type = ( element || {} ).type,
									$el = $( element );

								if ( [ 'checkbox', 'radio' ].indexOf( type ) > -1 ) {
									if ( $el.hasClass( 'wpforms-likert-scale-option' ) ) {
										$el = $el.closest( 'tr' );
									} else {
										$el = $el.closest( '.wpforms-field' );
									}
									$el.find( 'label.wpforms-error' ).remove();
									validate = true;
								}

								if ( validate ) {
									this.element( element );
								}
							},
						};
					}
					form.validate( properties );
				} );
			}
		},

		/**
		 * Is field inside column.
		 *
		 * @since 1.6.3
		 *
		 * @param {jQuery} element current form element.
		 *
		 * @returns {boolean} true/false.
		 */
		isFieldInColumn: function( element ) {

			return element.parent().hasClass( 'wpforms-one-half' ) ||
				element.parent().hasClass( 'wpforms-two-fifths' ) ||
				element.parent().hasClass( 'wpforms-one-fifth' );
		},

		/**
		 * Is datetime field.
		 *
		 * @since 1.6.3
		 *
		 * @param {jQuery} element current form element.
		 *
		 * @returns {boolean} true/false.
		 */
		isDateTimeField: function( element ) {

			return element.hasClass( 'wpforms-timepicker' ) ||
				element.hasClass( 'wpforms-datepicker' ) ||
				( element.is( 'select' ) && element.attr( 'class' ).match( /date-month|date-day|date-year/ ) );
		},

		/**
		 * Is field wrapped in some container.
		 *
		 * @since 1.6.3
		 *
		 * @param {jQuery} element current form element.
		 *
		 * @returns {boolean} true/false.
		 */
		isWrappedField: function( element ) { // eslint-disable-line complexity

			return 'checkbox' === element.attr( 'type' ) ||
			'radio' === element.attr( 'type' ) ||
			'range' === element.attr( 'type' ) ||
			'select' === element.is( 'select' ) ||
			element.parent().hasClass( 'iti' ) ||
			element.hasClass( 'wpforms-validation-group-member' ) ||
			element.hasClass( 'choicesjs-select' ) ||
			element.hasClass( 'wpforms-net-promoter-score-option' );
		},

		/**
		 * Is likert scale field.
		 *
		 * @since 1.6.3
		 *
		 * @param {jQuery} element current form element.
		 *
		 * @returns {boolean} true/false.
		 */
		isLikertScaleField: function( element ) {

			return element.hasClass( 'wpforms-likert-scale-option' );
		},

		/**
		 * Print error message into date time fields.
		 *
		 * @since 1.6.3
		 *
		 * @param {jQuery} element current form element.
		 * @param {string} error Error message.
		 */
		dateTimeErrorPlacement: function( element, error ) {

			var $wrapper = element.closest( '.wpforms-field-row-block, .wpforms-field-date-time' );
			if ( $wrapper.length ) {
				if ( ! $wrapper.find( 'label.wpforms-error' ).length ) {
					$wrapper.append( error );
				}
			} else {
				element.closest( '.wpforms-field' ).append( error );
			}
		},

		/**
		 * Load jQuery Date Picker.
		 *
		 * @since 1.2.3
		 */
		loadDatePicker: function() {

			// Only load if jQuery datepicker library exists.
			if ( typeof $.fn.flatpickr !== 'undefined' ) {
				$( '.wpforms-datepicker-wrap' ).each( function() {

					var element = $( this ),
						$input  = element.find( 'input' ),
						form    = element.closest( '.wpforms-form' ),
						formID  = form.data( 'formid' ),
						fieldID = element.closest( '.wpforms-field' ).data( 'field-id' ),
						properties;

					if ( typeof window['wpforms_' + formID + '_' + fieldID] !== 'undefined' && window['wpforms_' + formID + '_' + fieldID].hasOwnProperty( 'datepicker' ) ) {
						properties = window['wpforms_' + formID + '_' + fieldID].datepicker;
					} else if ( typeof window['wpforms_' + formID] !== 'undefined' && window['wpforms_' + formID].hasOwnProperty( 'datepicker' ) ) {
						properties = window['wpforms_' + formID].datepicker;
					} else if ( typeof wpforms_datepicker !== 'undefined' ) {
						properties = wpforms_datepicker;
					} else {
						properties = {
							disableMobile: true,
						};
					}

					// Redefine locale only if user doesn't do that manually and we have the locale.
					if (
						! properties.hasOwnProperty( 'locale' ) &&
						typeof wpforms_settings !== 'undefined' &&
						wpforms_settings.hasOwnProperty( 'locale' )
					) {
						properties.locale = wpforms_settings.locale;
					}

					properties.wrap = true;
					properties.dateFormat = $input.data( 'date-format' );
					if ( $input.data( 'disable-past-dates' ) === 1 ) {
						properties.minDate = 'today';
					}

					var limitDays = $input.data( 'limit-days' ),
						weekDays = [ 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat' ];

					if ( limitDays && limitDays !== '' ) {
						limitDays = limitDays.split( ',' );

						properties.disable = [ function( date ) {

							var limitDay;
							for ( var i in limitDays ) {
								limitDay = weekDays.indexOf( limitDays[ i ] );
								if ( limitDay === date.getDay() ) {
									return false;
								}
							}

							return true;
						} ];
					}

					// Toggle clear date icon.
					properties.onChange = function( selectedDates, dateStr, instance ) {

						var display = dateStr === '' ? 'none' : 'block';
						element.find( '.wpforms-datepicker-clear' ).css( 'display', display );
					};

					element.flatpickr( properties );
				} );
			}
		},

		/**
		 * Load jQuery Time Picker.
		 *
		 * @since 1.2.3
		 */
		loadTimePicker: function() {

			// Only load if jQuery timepicker library exists.
			if ( typeof $.fn.timepicker !== 'undefined' ) {
				$( '.wpforms-timepicker' ).each( function() {
					var element = $( this ),
						form    = element.closest( '.wpforms-form' ),
						formID  = form.data( 'formid' ),
						fieldID = element.closest( '.wpforms-field' ).data( 'field-id' ),
						properties;

					if (
						typeof window['wpforms_' + formID + '_' + fieldID] !== 'undefined' &&
						window['wpforms_' + formID + '_' + fieldID].hasOwnProperty( 'timepicker' )
					) {
						properties = window['wpforms_' + formID + '_' + fieldID].timepicker;
					} else if (
						typeof window['wpforms_' + formID] !== 'undefined' &&
						window['wpforms_' + formID].hasOwnProperty( 'timepicker' )
					) {
						properties = window['wpforms_' + formID].timepicker;
					} else if ( typeof wpforms_timepicker !== 'undefined' ) {
						properties = wpforms_timepicker;
					} else {
						properties = {
							scrollDefault: 'now',
							forceRoundTime: true,
						};
					}

					element.timepicker( properties );
				} );
			}
		},

		/**
		 * Load jQuery input masks.
		 *
		 * @since 1.2.3
		 */
		loadInputMask: function() {

			// Only load if jQuery input mask library exists.
			if ( typeof $.fn.inputmask === 'undefined' ) {
				return;
			}

			$( '.wpforms-masked-input' ).inputmask();
		},

		/**
		 * Load smart phone field.
		 *
		 * @since 1.5.2
		 */
		loadSmartPhoneField: function() {

			// Only load if library exists.
			if ( typeof $.fn.intlTelInput === 'undefined' ) {
				return;
			}

			var inputOptions = {};

			// Determine the country by IP if no GDPR restrictions enabled.
			if ( ! wpforms_settings.gdpr ) {
				inputOptions.geoIpLookup = app.currentIpToCountry;
			}

			// Try to kick in an alternative solution if GDPR restrictions are enabled.
			if ( wpforms_settings.gdpr ) {
				var lang = this.getFirstBrowserLanguage(),
					countryCode = lang.indexOf( '-' ) > -1 ? lang.split( '-' ).pop() : '';
			}

			// Make sure the library recognizes browser country code to avoid console error.
			if ( countryCode ) {
				var countryData = window.intlTelInputGlobals.getCountryData();

				countryData = countryData.filter( function( country ) {
					return country.iso2 === countryCode.toLowerCase();
				} );
				countryCode = countryData.length ? countryCode : '';
			}

			// Set default country.
			inputOptions.initialCountry = wpforms_settings.gdpr && countryCode ? countryCode : 'auto';

			$( '.wpforms-smart-phone-field' ).each( function( i, el ) {

				var $el = $( el );

				// Hidden input allows to include country code into submitted data.
				inputOptions.hiddenInput = $el.closest( '.wpforms-field-phone' ).data( 'field-id' );
				inputOptions.utilsScript = wpforms_settings.wpforms_plugin_url + 'pro/assets/js/vendor/jquery.intl-tel-input-utils.js';

				$el.intlTelInput( inputOptions );

				// For proper validation, we should preserve the name attribute of the input field.
				// But we need to modify original input name not to interfere with a hidden input.
				$el.attr( 'name', 'wpf-temp-' + $el.attr( 'name' ) );

				// Add special class to remove name attribute before submitting.
				// So, only the hidden input value will be submitted.
				$el.addClass( 'wpforms-input-temp-name' );

				// Instantly update a hidden form input with a correct data.
				// Previously "blur" only was used, which is broken in case Enter was used to submit the form.
				$el.on( 'blur input', function() {
					if ( $el.intlTelInput( 'isValidNumber' ) || ! app.empty( window.WPFormsEditEntry ) ) {
						$el.siblings( 'input[type="hidden"]' ).val( $el.intlTelInput( 'getNumber' ) );
					}
				} );
			} );

			// Update hidden input of the `Smart` phone field to be sure the latest value will be submitted.
			$( '.wpforms-form' ).on( 'wpformsBeforeFormSubmit', function() {

				$( this ).find( '.wpforms-smart-phone-field' ).trigger( 'input' );
			} );
		},

		/**
		 * Payments: Do various payment-related tasks on load.
		 *
		 * @since 1.2.6
		 */
		loadPayments: function() {

			// Update Total field(s) with latest calculation.
			$( '.wpforms-payment-total' ).each( function( index, el ) {
				app.amountTotal( this );
			} );

			// Credit card validation.
			if ( typeof $.fn.payment !== 'undefined' ) {
				$( '.wpforms-field-credit-card-cardnumber' ).payment( 'formatCardNumber' );
				$( '.wpforms-field-credit-card-cardcvc' ).payment( 'formatCardCVC' );
			}
		},

		/**
		 * Load mailcheck.
		 *
		 * @since 1.5.3
		 */
		loadMailcheck: function() {

			// Skip loading if `wpforms_mailcheck_enabled` filter return false.
			if ( ! wpforms_settings.mailcheck_enabled ) {
				return;
			}

			// Only load if library exists.
			if ( typeof $.fn.mailcheck === 'undefined' ) {
				return;
			}

			if ( wpforms_settings.mailcheck_domains.length > 0 ) {
				Mailcheck.defaultDomains = Mailcheck.defaultDomains.concat( wpforms_settings.mailcheck_domains );
			}
			if ( wpforms_settings.mailcheck_toplevel_domains.length > 0 ) {
				Mailcheck.defaultTopLevelDomains = Mailcheck.defaultTopLevelDomains.concat( wpforms_settings.mailcheck_toplevel_domains );
			}

			// Mailcheck suggestion.
			$( document ).on( 'blur', '.wpforms-field-email input', function() {

				var $input = $( this ),
					id = $input.attr( 'id' );

				$input.mailcheck( {
					suggested: function( $el, suggestion ) {

						suggestion = '<a href="#" class="mailcheck-suggestion" data-id="' + id + '" title="' + wpforms_settings.val_email_suggestion_title + '">' + suggestion.full + '</a>';
						suggestion = wpforms_settings.val_email_suggestion.replace( '{suggestion}', suggestion );

						$el.closest( '.wpforms-field' ).find( '#' + id + '_suggestion' ).remove();
						$el.parent().append( '<label class="wpforms-error mailcheck-error" id="' + id + '_suggestion">' + suggestion + '</label>' );
					},
					empty: function() {

						$( '#' + id + '_suggestion' ).remove();
					},
				} );
			} );

			// Apply Mailcheck suggestion.
			$( document ).on( 'click', '.wpforms-field-email .mailcheck-suggestion', function( e ) {

				var $suggestion = $( this ),
					$field = $suggestion.closest( '.wpforms-field' ),
					id = $suggestion.data( 'id' );

				e.preventDefault();
				$field.find( '#' + id ).val( $suggestion.text() );
				$suggestion.parent().remove();
			} );

		},

		/**
		 * Load Choices.js library for all Modern style Dropdown fields (<select>).
		 *
		 * @since 1.6.1
		 */
		loadChoicesJS: function() {

			// Loads if function exists.
			if ( ! $.isFunction( window.Choices ) ) {

				return;
			}

			$( '.wpforms-field-select-style-modern .choicesjs-select, .wpforms-field-payment-select .choicesjs-select' ).each( function( idx, el ) {

				var args          = window.wpforms_choicesjs_config || {},
					searchEnabled = $( el ).data( 'search-enabled' );

				args.searchEnabled  = 'undefined' !== typeof searchEnabled ? searchEnabled : true;
				args.callbackOnInit = function() {

					var self      = this,
						$element  = $( self.passedElement.element ),
						$input    = $( self.input.element ),
						sizeClass = $element.data( 'size-class' );

					// Remove hidden attribute and hide `<select>` like a screen-reader text.
					// It's important for field validation.
					$element
						.removeAttr( 'hidden' )
						.addClass( self.config.classNames.input + '--hidden' );

					// Add CSS-class for size.
					if ( sizeClass ) {
						$( self.containerOuter.element ).addClass( sizeClass );
					}

					/**
					 * If a multiple select has selected choices - hide a placeholder input.
					 * We use custom styles like `.screen-reader-text` for it,
					 * because it avoids an issue with closing a dropdown.
					 */
					if ( $element.prop( 'multiple' ) ) {

						// On init event.
						if ( self.getValue( true ).length ) {
							$input.addClass( self.config.classNames.input + '--hidden' );
						}
					}

					// On change event.
					$element.on( 'change', function() {

						var validator;

						// Listen if multiple select has choices.
						if ( $element.prop( 'multiple' ) ) {
							self.getValue( true ).length > 0 ? $input.addClass( self.config.classNames.input + '--hidden' ) : $input.removeClass( self.config.classNames.input + '--hidden' );
						}

						validator = $element.closest( 'form' ).data( 'validator' );

						if ( ! validator ) {
							return;
						}

						validator.element( $element );
					} );
				};

				args.callbackOnCreateTemplates = function() {

					var self      = this,
						$element  = $( self.passedElement.element );

					return {

						// Change default template for option.
						option: function( item ) {

							var opt = Choices.defaults.templates.option.call( this, item );

							// Add a `.placeholder` class for placeholder option - it needs for WPForm CL.
							if ( 'undefined' !== typeof item.placeholder && true === item.placeholder ) {
								opt.classList.add( 'placeholder' );
							}

							// Add a `data-amount` attribute for payment dropdown.
							// It will be copy from a Choices.js `data-custom-properties` attribute.
							if ( $element.hasClass( 'wpforms-payment-price' ) && 'undefined' !== typeof item.customProperties && null !== item.customProperties ) {
								opt.dataset.amount = item.customProperties;
							}

							return opt;
						},
					};
				};

				// Save choicesjs instance for future access.
				$( el ).data( 'choicesjs', new Choices( el, args ) );
			} );
		},

		//--------------------------------------------------------------------//
		// Binds.
		//--------------------------------------------------------------------//

		/**
		 * Element bindings.
		 *
		 * @since 1.2.3
		 */
		bindUIActions: function() {

			// Pagebreak navigation.
			$( document ).on( 'click', '.wpforms-page-button', function( event ) {
				event.preventDefault();
				app.pagebreakNav( this );
			} );

			// Payments: Update Total field(s) when latest calculation.
			$( document ).on( 'change input', '.wpforms-payment-price', function() {
				app.amountTotal( this, true );
			} );

			// Payments: Restrict user input payment fields.
			$( document ).on( 'input', '.wpforms-payment-user-input', function() {
				var $this = $( this ),
					amount = $this.val();
				$this.val( amount.replace( /[^0-9.,]/g, '' ) );
			} );

			// Payments: Sanitize/format user input amounts.
			$( document ).on( 'focusout', '.wpforms-payment-user-input', function() {
				var $this  = $( this ),
					amount = $this.val();

				if ( ! amount ) {
					return amount;
				}

				var sanitized = app.amountSanitize( amount ),
					formatted = app.amountFormat( sanitized );

				$this.val( formatted );
			} );

			// Payments: Update Total field(s) when conditionals are processed.
			$( document ).on( 'wpformsProcessConditionals', function( e, el ) {
				app.amountTotal( el, true );
			} );

			// Payment radio/checkbox fields: preselect the selected payment (from dynamic/fallback population).
			$( function() {

				// Radios.
				$( '.wpforms-field-radio .wpforms-image-choices-item input:checked' ).change();
				$( '.wpforms-field-payment-multiple .wpforms-image-choices-item input:checked' ).change();

				// Checkboxes.
				$( '.wpforms-field-checkbox .wpforms-image-choices-item input' ).change();
				$( '.wpforms-field-payment-checkbox .wpforms-image-choices-item input' ).change();
			} );

			// Rating field: hover effect.
			$( '.wpforms-field-rating-item' ).hover(
				function() {
					$( this ).parent().find( '.wpforms-field-rating-item' ).removeClass( 'selected hover' );
					$( this ).prevAll().addBack().addClass( 'hover' );
				},
				function() {
					$( this ).parent().find( '.wpforms-field-rating-item' ).removeClass( 'selected hover' );
					$( this ).parent().find( 'input:checked' ).parent().prevAll().addBack().addClass( 'selected' );
				}
			);

			// Rating field: toggle selected state.
			$( document ).on( 'change', '.wpforms-field-rating-item input', function() {

				var $this  = $( this ),
					$wrap  = $this.closest( '.wpforms-field-rating-items' ),
					$items = $wrap.find( '.wpforms-field-rating-item' );

				$items.removeClass( 'hover selected' );
				$this.parent().prevAll().addBack().addClass( 'selected' );
			} );

			// Rating field: preselect the selected rating (from dynamic/fallback population).
			$( function() {
				$( '.wpforms-field-rating-item input:checked' ).change();
			} );

			// Checkbox/Radio/Payment checkbox: make labels keyboard-accessible.
			$( document ).on( 'keypress', '.wpforms-image-choices-item label', function( event ) {
				var $this  = $( this ),
					$field = $this.closest( '.wpforms-field' );

				if ( $field.hasClass( 'wpforms-conditional-hide' ) ) {
					event.preventDefault();
					return false;
				}

				// Cause the input to be clicked when clicking the label.
				if ( 13 === event.which ) {
					$( '#' + $this.attr( 'for' ) ).click();
				}
			} );

			// IE: Click on the `image choice` image should trigger the click event on the input (checkbox or radio) field.
			if ( window.document.documentMode ) {
				$( document ).on( 'click', '.wpforms-image-choices-item img', function() {

					$( this ).closest( 'label' ).find( 'input' ).click();
				} );
			}

			$( document ).on( 'change', '.wpforms-field-checkbox input, .wpforms-field-radio input, .wpforms-field-payment-multiple input, .wpforms-field-payment-checkbox input, .wpforms-field-gdpr-checkbox input', function( event ) {

				var $this  = $( this ),
					$field = $this.closest( '.wpforms-field' );

				if ( $field.hasClass( 'wpforms-conditional-hide' ) ) {
					event.preventDefault();
					return false;
				}

				switch ( $this.attr( 'type' ) ) {
					case 'radio':
						$this.closest( 'ul' ).find( 'li' ).removeClass( 'wpforms-selected' ).find( 'input[type=radio]' ).removeProp( 'checked' );
						$this
							.prop( 'checked', true )
							.closest( 'li' ).addClass( 'wpforms-selected' );
						break;

					case 'checkbox':
						if ( $this.is( ':checked' ) ) {
							$this.closest( 'li' ).addClass( 'wpforms-selected' );
							$this.prop( 'checked', true );
						} else {
							$this.closest( 'li' ).removeClass( 'wpforms-selected' );
							$this.prop( 'checked', false );
						}
						break;
				}
			} );

			// Upload fields: Check combined file size.
			$( document ).on( 'change', '.wpforms-field-file-upload input[type=file]:not(".dropzone-input")', function() {
				var $this       = $( this ),
					$uploads    = $this.closest( 'form.wpforms-form' ).find( '.wpforms-field-file-upload input:not(".dropzone-input")' ),
					totalSize   = 0,
					postMaxSize = Number( wpforms_settings.post_max_size ),
					errorMsg    = '<div class="wpforms-error-container-post_max_size">' + wpforms_settings.val_post_max_size + '</div>',
					errorCntTpl = '<div class="wpforms-error-container">{errorMsg}</span></div>',
					$submitCnt  = $this.closest( 'form.wpforms-form' ).find( '.wpforms-submit-container' ),
					$submitBtn  = $submitCnt.find( 'button.wpforms-submit' ),
					$errorCnt   = $submitCnt.prev();

				// Calculating totalSize.
				$uploads.each( function() {
					var $upload = $( this ),
						i = 0,
						len = $upload[0].files.length;
					for ( ; i < len; i++ ) {
						totalSize += $upload[0].files[i].size;
					}
				} );

				// Checking totalSize.
				if ( totalSize > postMaxSize ) {

					// Convert sizes to Mb.
					totalSize = Number( ( totalSize / 1048576 ).toFixed( 3 ) );
					postMaxSize = Number( ( postMaxSize / 1048576 ).toFixed( 3 ) );

					// Preparing error message.
					errorMsg = errorMsg.replace( /{totalSize}/, totalSize ).replace( /{maxSize}/, postMaxSize );

					// Output error message.
					if ( $errorCnt.hasClass( 'wpforms-error-container' ) ) {
						$errorCnt.find( '.wpforms-error-container-post_max_size' ).remove();
						$errorCnt.append( errorMsg );
					} else {
						$submitCnt.before( errorCntTpl.replace( /{errorMsg}/, errorMsg ) );
					}

					// Disable submit button.
					$submitBtn.prop( 'disabled', true );
				} else {

					// Remove error and release submit button.
					$errorCnt.find( '.wpforms-error-container-post_max_size' ).remove();
					$submitBtn.prop( 'disabled', false );
				}

			} );

			// Number Slider field: update hints.
			$( document ).on( 'change input', '.wpforms-field-number-slider input[type=range]', function( event ) {
				var hintEl = $( event.target ).siblings( '.wpforms-field-number-slider-hint' );

				hintEl.html( hintEl.data( 'hint' ).replace( '{value}', '<b>' + event.target.value + '</b>' ) );
			} );

			// Enter key event.
			$( document ).on( 'keydown', '.wpforms-form input', function( e ) {

				if ( e.keyCode !== 13 ) {
					return;
				}

				var $t = $( this ),
					$page = $t.closest( '.wpforms-page' );

				if ( $page.length === 0 ) {
					return;
				}

				if ( [ 'text', 'tel', 'number', 'email', 'url', 'radio', 'checkbox' ].indexOf( $t.attr( 'type' ) ) < 0 ) {
					return;
				}

				if ( $t.hasClass( 'wpforms-datepicker' ) ) {
					$t.flatpickr( 'close' );
				}

				e.preventDefault();

				if ( $page.hasClass( 'last' ) ) {
					$page.closest( '.wpforms-form' ).find( '.wpforms-submit' ).click();
					return;
				}

				$page.find( '.wpforms-page-next' ).click();
			} );

			// Allow only numbers, minus and decimal point to be entered into the Numbers field.
			$( document ).on( 'keypress', '.wpforms-field-number input', function( e ) {

				return /^[-0-9.]+$/.test( String.fromCharCode( e.keyCode || e.which ) );
			} );
		},

		/**
		 * Scroll to and focus on the field with error.
		 *
		 * @since 1.5.8
		 *
		 * @param {jQuery} $el Form, container or input element jQuery object.
		 */
		scrollToError: function( $el ) {

			if ( $el.length === 0 ) {
				return;
			}

			// Look for a field with an error inside an $el.
			var $field = $el.find( '.wpforms-field.wpforms-has-error' );

			// Look outside in not found inside.
			if ( $field.length === 0 ) {
				$field = $el.closest( '.wpforms-field' );
			}

			if ( $field.length === 0 ) {
				return;
			}

			var offset = $field.offset();

			if ( typeof offset === 'undefined' ) {
				return;
			}

			app.animateScrollTop( offset.top - 75, 750 ).done( function() {
				var $error = $field.find( '.wpforms-error' ).first();
				if ( app.isFunction( $error.focus ) ) {
					$error.focus();
				}
			} );
		},

		/**
		 * Update Pagebreak navigation.
		 *
		 * @since 1.2.2
		 *
		 * @param {jQuery} el jQuery element object.
		 */
		pagebreakNav: function( el ) {

			var $this      = $( el ),
				valid      = true,
				action     = $this.data( 'action' ),
				page       = $this.data( 'page' ),
				page2      = page,
				next       = page + 1,
				prev       = page - 1,
				$form      = $this.closest( '.wpforms-form' ),
				$page      = $form.find( '.wpforms-page-' + page ),
				$submit    = $form.find( '.wpforms-submit-container' ),
				$indicator = $form.find( '.wpforms-page-indicator' ),
				$reCAPTCHA = $form.find( '.wpforms-recaptcha-container' ),
				pageScroll = false;

			// Page scroll.
			// TODO: cleanup this BC with wpform_pageScroll.
			if ( false === window.wpforms_pageScroll ) {
				pageScroll = false;
			} else if ( ! app.empty( window.wpform_pageScroll ) ) {
				pageScroll = window.wpform_pageScroll;
			} else {
				pageScroll = $indicator.data( 'scroll' ) !== 0 ? 75 : false;
			}

			// Toggling between the pages.
			if ( 'next' === action ) {

				// Validate.
				if ( typeof $.fn.validate !== 'undefined' ) {
					$page.find( ':input' ).each( function( index, el ) {

						// Skip input fields without `name` attribute, which could have fields.
						// E.g. `Placeholder` input for Modern dropdown.
						if ( ! $( el ).attr( 'name' ) ) {
							return;
						}

						if ( ! $( el ).valid() ) {
							valid = false;
						}
					} );

					// Scroll to first/top error on page.
					app.scrollToError( $page );
				}

				// Move to the next page.
				if ( valid ) {
					page2 = next;
					$page.hide();
					var $nextPage = $form.find( '.wpforms-page-' + next );
					$nextPage.show();
					if ( $nextPage.hasClass( 'last' ) ) {
						$reCAPTCHA.show();
						$submit.show();
					}
					if ( pageScroll ) {

						// Scroll to top of the form.
						app.animateScrollTop( $form.offset().top - pageScroll, 750 );
					}
					$this.trigger( 'wpformsPageChange', [ page2, $form ] );
				}
			} else if ( 'prev' === action ) {

				// Move to the prev page.
				page2 = prev;
				$page.hide();
				$form.find( '.wpforms-page-' + prev ).show();
				$reCAPTCHA.hide();
				$submit.hide();
				if ( pageScroll ) {

					// Scroll to the top of the form.
					app.animateScrollTop( $form.offset().top - pageScroll );
				}
				$this.trigger( 'wpformsPageChange', [ page2, $form ] );
			}

			if ( $indicator ) {
				var theme = $indicator.data( 'indicator' ),
					color = $indicator.data( 'indicator-color' );
				if ( 'connector' === theme || 'circles' === theme ) {
					$indicator.find( '.wpforms-page-indicator-page' ).removeClass( 'active' );
					$indicator.find( '.wpforms-page-indicator-page-' + page2 ).addClass( 'active' );
					$indicator.find( '.wpforms-page-indicator-page-number' ).removeAttr( 'style' );
					$indicator.find( '.active .wpforms-page-indicator-page-number' ).css( 'background-color', color );
					if ( 'connector' === theme ) {
						$indicator.find( '.wpforms-page-indicator-page-triangle' ).removeAttr( 'style' );
						$indicator.find( '.active .wpforms-page-indicator-page-triangle' ).css( 'border-top-color', color );
					}
				} else if ( 'progress' === theme ) {
					var $pageTitle = $indicator.find( '.wpforms-page-indicator-page-title' ),
						$pageSep   = $indicator.find( '.wpforms-page-indicator-page-title-sep' ),
						totalPages = $form.find( '.wpforms-page' ).length,
						width = ( page2 / totalPages ) * 100;
					$indicator.find( '.wpforms-page-indicator-page-progress' ).css( 'width', width + '%' );
					$indicator.find( '.wpforms-page-indicator-steps-current' ).text( page2 );
					if ( $pageTitle.data( 'page-' + page2 + '-title' ) ) {
						$pageTitle.css( 'display', 'inline' ).text( $pageTitle.data( 'page-' + page2 + '-title' ) );
						$pageSep.css( 'display', 'inline' );
					} else {
						$pageTitle.css( 'display', 'none' );
						$pageSep.css( 'display', 'none' );
					}
				}
			}
		},

		/**
		 * OptinMonster compatibility.
		 *
		 * Re-initialize after OptinMonster loads to accommodate changes that
		 * have occurred to the DOM.
		 *
		 * @since 1.5.0
		 */
		bindOptinMonster: function() {

			// OM v5.
			document.addEventListener( 'om.Campaign.load', function( event ) {
				app.ready();
				app.optinMonsterRecaptchaReset( event.detail.Campaign.data.id );
			} );

			// OM Legacy.
			$( document ).on( 'OptinMonsterOnShow', function( event, data, object ) {
				app.ready();
				app.optinMonsterRecaptchaReset( data.optin );
			} );
		},

		/**
		 * Reset/recreate hCaptcha/reCAPTCHA v2 inside OptinMonster.
		 *
		 * @since 1.5.0
		 * @since 1.6.4 Added hCaptcha support.
		 *
		 * @param {string} optinId OptinMonster ID.
		 */
		optinMonsterRecaptchaReset: function( optinId ) {

			var $form             = $( '#om-' + optinId ).find( '.wpforms-form' ),
				$captchaContainer = $form.find( '.wpforms-recaptcha-container' ),
				$captcha          = $form.find( '.g-recaptcha' ),
				captchaSiteKey    = $captcha.attr( 'data-sitekey' ),
				captchaID         = 'recaptcha-' + Date.now(),
				apiVar            = $captchaContainer.hasClass( 'wpforms-is-hcaptcha' ) ? hcaptcha : grecaptcha;

			if ( $form.length && $captcha.length ) {

				$captcha.remove();
				$captchaContainer.prepend( '<div class="g-recaptcha" id="' + captchaID + '" data-sitekey="' + captchaSiteKey + '"></div>' );

				apiVar.render(
					captchaID,
					{
						sitekey: captchaSiteKey,
						callback: function() {
							wpformsRecaptchaCallback( $( '#' + captchaID ) );
						},
					}
				);
			}
		},

		//--------------------------------------------------------------------//
		// Other functions.
		//--------------------------------------------------------------------//

		/**
		 * Payments: Calculate total.
		 *
		 * @since 1.2.3
		 * @since 1.5.1 Added support for payment-checkbox field.
		 *
		 * @param {object} el jQuery DOM object.
		 * @param {boolean} validate Whether to validate or not.
		 */
		amountTotal: function( el, validate ) {

			validate = validate || false;

			var $form = $( el ).closest( '.wpforms-form' ),
				total = 0,
				totalFormatted,
				totalFormattedSymbol,
				currency = app.getCurrency();

			$( '.wpforms-payment-price', $form ).each( function( index, el ) {

				var amount = 0,
					$this = $( this );

				if ( $this.closest( '.wpforms-field-payment-single' ).hasClass( 'wpforms-conditional-hide' ) ) {
					return;
				}
				if ( 'text' === $this.attr( 'type' ) || 'hidden' === $this.attr( 'type' ) ) {
					amount = $this.val();
				} else if ( ( 'radio' === $this.attr( 'type' ) || 'checkbox' === $this.attr( 'type' ) ) && $this.is( ':checked' ) ) {
					amount = $this.data( 'amount' );
				} else if ( $this.is( 'select' ) && $this.find( 'option:selected' ).length > 0 ) {
					amount = $this.find( 'option:selected' ).data( 'amount' );
				}
				if ( ! app.empty( amount ) ) {
					amount = app.amountSanitize( amount );
					total = Number( total ) + Number( amount );
				}
			} );

			totalFormatted = app.amountFormat( total );

			if ( 'left' === currency.symbol_pos ) {
				totalFormattedSymbol = currency.symbol + ' ' + totalFormatted;
			} else {
				totalFormattedSymbol = totalFormatted + ' ' + currency.symbol;
			}

			$form.find( '.wpforms-payment-total' ).each( function( index, el ) {
				if ( 'hidden' === $( this ).attr( 'type' ) || 'text' === $( this ).attr( 'type' ) ) {
					$( this ).val( totalFormattedSymbol );
					if ( 'text' === $( this ).attr( 'type' ) && validate && $form.data( 'validator' ) ) {
						$( this ).valid();
					}
				} else {
					$( this ).text( totalFormattedSymbol );
				}
			} );
		},

		/**
		 * Sanitize amount and convert to standard format for calculations.
		 *
		 * @since 1.2.6
		 *
		 * @param {string} amount Amount to sanitize.
		 *
		 * @returns {string} Sanitized amount.
		 */
		amountSanitize: function( amount ) {

			var currency = app.getCurrency();

			amount = amount.toString().replace( /[^0-9.,]/g, '' );

			if ( ',' === currency.decimal_sep && ( amount.indexOf( currency.decimal_sep ) !== -1 ) ) {
				if ( '.' === currency.thousands_sep && amount.indexOf( currency.thousands_sep ) !== -1 ) {
					amount = amount.replace( currency.thousands_sep, '' );
				} else if ( '' === currency.thousands_sep && amount.indexOf( '.' ) !== -1 ) {
					amount = amount.replace( '.', '' );
				}
				amount = amount.replace( currency.decimal_sep, '.' );
			} else if ( ',' === currency.thousands_sep && ( amount.indexOf( currency.thousands_sep ) !== -1 ) ) {
				amount = amount.replace( currency.thousands_sep, '' );
			}

			return app.numberFormat( amount, 2, '.', '' );
		},

		/**
		 * Format amount.
		 *
		 * @since 1.2.6
		 *
		 * @param {string} amount Amount to format.
		 *
		 * @returns {string} Formatted amount.
		 */
		amountFormat: function( amount ) {

			var currency = app.getCurrency();

			amount = String( amount );

			// Format the amount
			if ( ',' === currency.decimal_sep && ( amount.indexOf( currency.decimal_sep ) !== -1 ) ) {
				var sepFound = amount.indexOf( currency.decimal_sep ),
					whole    = amount.substr( 0, sepFound ),
					part     = amount.substr( sepFound + 1, amount.strlen - 1 );
				amount = whole + '.' + part;
			}

			// Strip , from the amount (if set as the thousands separator)
			if ( ',' === currency.thousands_sep && ( amount.indexOf( currency.thousands_sep ) !== -1 ) ) {
				amount = amount.replace( ',', '' );
			}

			if ( app.empty( amount ) ) {
				amount = 0;
			}

			return app.numberFormat( amount, 2, currency.decimal_sep, currency.thousands_sep );
		},

		/**
		 * Get site currency settings.
		 *
		 * @since 1.2.6
		 *
		 * @returns {object} Currency settings.
		 */
		getCurrency: function() {

			var currency = {
				code: 'USD',
				thousands_sep: ',',
				decimal_sep: '.',
				symbol: '$',
				symbol_pos: 'left',
			};

			// Backwards compatibility.
			if ( typeof wpforms_settings.currency_code !== 'undefined' ) {
				currency.code = wpforms_settings.currency_code;
			}
			if ( typeof wpforms_settings.currency_thousands !== 'undefined' ) {
				currency.thousands_sep = wpforms_settings.currency_thousands;
			}
			if ( typeof wpforms_settings.currency_decimal !== 'undefined' ) {
				currency.decimal_sep = wpforms_settings.currency_decimal;
			}
			if ( typeof wpforms_settings.currency_symbol !== 'undefined' ) {
				currency.symbol = wpforms_settings.currency_symbol;
			}
			if ( typeof wpforms_settings.currency_symbol_pos !== 'undefined' ) {
				currency.symbol_pos = wpforms_settings.currency_symbol_pos;
			}

			return currency;
		},

		/**
		 * Format number.
		 *
		 * @see http://locutus.io/php/number_format/
		 *
		 * @since 1.2.6
		 *
		 * @param {string} number Number to format.
		 * @param {number} decimals How many decimals?
		 * @param {string} decimalSep Decimals separator.
		 * @param {string} thousandsSep Thousands separator.
		 *
		 * @returns {string} Formatted number.
		 */
		numberFormat: function( number, decimals, decimalSep, thousandsSep ) {

			number = ( number + '' ).replace( /[^0-9+\-Ee.]/g, '' );
			var n = ! isFinite( +number ) ? 0 : +number;
			var prec = ! isFinite( +decimals ) ? 0 : Math.abs( decimals );
			var sep = ( 'undefined' === typeof thousandsSep ) ? ',' : thousandsSep;
			var dec = ( 'undefined' === typeof decimalSep ) ? '.' : decimalSep;
			var s;

			var toFixedFix = function( n, prec ) {
				var k = Math.pow( 10, prec );
				return '' + ( Math.round( n * k ) / k ).toFixed( prec );
			};

			// @todo: for IE parseFloat(0.55).toFixed(0) = 0;
			s = ( prec ? toFixedFix( n, prec ) : '' + Math.round( n ) ).split( '.' );
			if ( s[0].length > 3 ) {
				s[0] = s[0].replace( /\B(?=(?:\d{3})+(?!\d))/g, sep );
			}
			if ( ( s[1] || '' ).length < prec ) {
				s[1] = s[1] || '';
				s[1] += new Array( prec - s[1].length + 1 ).join( '0' );
			}

			return s.join( dec );
		},

		/**
		 * Empty check similar to PHP.
		 *
		 * @see http://locutus.io/php/empty/
		 *
		 * @since 1.2.6
		 *
		 * @param {mixed} mixedVar Variable to check.
		 *
		 * @returns {boolean} Whether the var is empty or not.
		 */
		empty: function( mixedVar ) {

			var undef;
			var key;
			var i;
			var len;
			var emptyValues = [ undef, null, false, 0, '', '0' ];

			for ( i = 0, len = emptyValues.length; i < len; i++ ) {
				if ( mixedVar === emptyValues[i] ) {
					return true;
				}
			}

			if ( 'object' === typeof mixedVar ) {
				for ( key in mixedVar ) {
					if ( mixedVar.hasOwnProperty( key ) ) {
						return false;
					}
				}
				return true;
			}

			return false;
		},

		/**
		 * Set cookie container user UUID.
		 *
		 * @since 1.3.3
		 */
		setUserIndentifier: function() {

			if ( ( ( ! window.hasRequiredConsent && typeof wpforms_settings !== 'undefined' && wpforms_settings.uuid_cookie ) || ( window.hasRequiredConsent && window.hasRequiredConsent() ) ) && ! app.getCookie( '_wpfuuid' ) ) {

				// Generate UUID - http://stackoverflow.com/a/873856/1489528
				var s         = new Array( 36 ),
					hexDigits = '0123456789abcdef',
					uuid;

				for ( var i = 0; i < 36; i++ ) {
					s[i] = hexDigits.substr( Math.floor( Math.random() * 0x10 ), 1 );
				}
				s[14] = '4';
				s[19] = hexDigits.substr( ( s[19] & 0x3 ) | 0x8, 1 );
				s[8]  = s[13] = s[18] = s[23] = '-';

				uuid = s.join( '' );

				app.createCookie( '_wpfuuid', uuid, 3999 );
			}
		},

		/**
		 * Create cookie.
		 *
		 * @since 1.3.3
		 *
		 * @param {string} name  Cookie name.
		 * @param {string} value Cookie value.
		 * @param {string} days  Whether it should expire and when.
		 */
		createCookie: function( name, value, days ) {

			var expires = '';
			var secure = '';

			if ( wpforms_settings.is_ssl ) {
				secure = ';secure';
			}

			// If we have a days value, set it in the expiry of the cookie.
			if ( days ) {

				// If -1 is our value, set a session-based cookie instead of a persistent cookie.
				if ( '-1' === days ) {
					expires = '';
				} else {
					var date = new Date();
					date.setTime( date.getTime() + ( days * 24 * 60 * 60 * 1000 ) );
					expires = ';expires=' + date.toGMTString();
				}
			} else {
				expires = ';expires=Thu, 01 Jan 1970 00:00:01 GMT';
			}

			// Write the cookie.
			document.cookie = name + '=' + value + expires + ';path=/;samesite=strict' + secure;
		},

		/**
		 * Retrieve cookie.
		 *
		 * @since 1.3.3
		 *
		 * @param {string} name Cookie name.
		 *
		 * @returns {string|null} Cookie value or null when it doesn't exist.
		 */
		getCookie: function( name ) {

			var nameEQ = name + '=',
				ca     = document.cookie.split( ';' );

			for ( var i = 0; i < ca.length; i++ ) {
				var c = ca[i];
				while ( ' ' === c.charAt( 0 ) ) {
					c = c.substring( 1, c.length );
				}
				if ( 0 === c.indexOf( nameEQ ) ) {
					return c.substring( nameEQ.length, c.length );
				}
			}

			return null;
		},

		/**
		 * Delete cookie.
		 *
		 * @since 1.3.3
		 *
		 * @param {string} name Cookie name.
		 */
		removeCookie: function( name ) {

			app.createCookie( name, '', -1 );
		},

		/**
		 * Get user browser preferred language.
		 *
		 * @since 1.5.2
		 *
		 * @returns {string} Language code.
		 */
		getFirstBrowserLanguage: function() {
			var nav = window.navigator,
				browserLanguagePropertyKeys = [ 'language', 'browserLanguage', 'systemLanguage', 'userLanguage' ],
				i,
				language;

			// Support for HTML 5.1 "navigator.languages".
			if ( Array.isArray( nav.languages ) ) {
				for ( i = 0; i < nav.languages.length; i++ ) {
					language = nav.languages[ i ];
					if ( language && language.length ) {
						return language;
					}
				}
			}

			// Support for other well known properties in browsers.
			for ( i = 0; i < browserLanguagePropertyKeys.length; i++ ) {
				language = nav[ browserLanguagePropertyKeys[ i ] ];
				if ( language && language.length ) {
					return language;
				}
			}

			return '';
		},

		/**
		 * Asynchronously fetches country code using current IP
		 * and executes a callback provided with a country code parameter.
		 *
		 * @since 1.5.2
		 *
		 * @param {Function} callback Executes once the fetch is completed.
		 */
		currentIpToCountry: function( callback ) {

			var fallback = function() {

				$.get( 'https://ipapi.co/jsonp', function() {}, 'jsonp' )
					.always( function( resp ) {
						var countryCode = ( resp && resp.country ) ? resp.country : '';
						if ( ! countryCode ) {
							var lang = app.getFirstBrowserLanguage();
							countryCode = lang.indexOf( '-' ) > -1 ? lang.split( '-' ).pop() : '';
						}
						callback( countryCode );
					} );
			};

			$.get( 'https://geo.wpforms.com/v3/geolocate/json' )
				.done( function( resp ) {
					if ( resp && resp.country_iso ) {
						callback( resp.country_iso );
					} else {
						fallback();
					}
				} )
				.fail( function( resp ) {
					fallback();
				} );
		},

		/**
		 * Form submit.
		 *
		 * @since 1.5.3
		 *
		 * @param {jQuery} $form Form element.
		 */
		formSubmit: function( $form ) {

			$form.trigger( 'wpformsBeforeFormSubmit' );

			if ( $form.hasClass( 'wpforms-ajax-form' ) && typeof FormData !== 'undefined' ) {
				app.formSubmitAjax( $form );
			} else {
				app.formSubmitNormal( $form );
			}
		},

		/**
		 * Normal form submit with page reload.
		 *
		 * @since 1.5.3
		 *
		 * @param {jQuery} $form Form element.
		 */
		formSubmitNormal: function( $form ) {

			if ( ! $form.length ) {
				return;
			}

			var $submit     = $form.find( '.wpforms-submit' ),
				recaptchaID = $submit.get( 0 ).recaptchaID;

			if ( ! app.empty( recaptchaID ) || recaptchaID === 0 ) {
				$submit.get( 0 ).recaptchaID = false;
			}

			$form.get( 0 ).submit();
		},

		/**
		 * Reset form captcha.
		 *
		 * @since 1.5.3
		 * @since 1.6.4 Added hCaptcha support.
		 *
		 * @param {jQuery} $form Form element.
		 */
		resetFormRecaptcha: function( $form ) {

			if ( ! $form || ! $form.length ) {
				return;
			}

			if ( typeof hcaptcha === 'undefined' && typeof grecaptcha === 'undefined' ) {
				return;
			}

			var $captchaContainer = $form.find( '.wpforms-recaptcha-container' ),
				apiVar            = $captchaContainer.hasClass( 'wpforms-is-hcaptcha' ) ? hcaptcha : grecaptcha,
				recaptchaID;

			// Check for invisible recaptcha first.
			recaptchaID = $form.find( '.wpforms-submit' ).get( 0 ).recaptchaID;

			// Check for hcaptcha/recaptcha v2, if invisible recaptcha is not found.
			if ( app.empty( recaptchaID ) && recaptchaID !== 0 ) {
				recaptchaID = $form.find( '.g-recaptcha' ).data( 'recaptcha-id' );
			}

			// Reset captcha.
			if ( ! app.empty( recaptchaID ) || recaptchaID === 0 ) {
				apiVar.reset( recaptchaID );
			}
		},

		/**
		 * Console log AJAX error.
		 *
		 * @since 1.5.3
		 *
		 * @param {string} error Error text (optional).
		 */
		consoleLogAjaxError: function( error ) {

			if ( error ) {
				console.error( 'WPForms AJAX submit error:\n%s', error ); // eslint-disable-line no-console
			} else {
				console.error( 'WPForms AJAX submit error' ); // eslint-disable-line no-console
			}
		},

		/**
		 * Display form AJAX errors.
		 *
		 * @since 1.5.3
		 *
		 * @param {jQuery} $form Form element.
		 * @param {object} errors Errors in format { general: { generalErrors }, field: { fieldErrors } }.
		 */
		displayFormAjaxErrors: function( $form, errors ) {

			if ( 'string' === typeof errors ) {
				app.displayFormAjaxGeneralErrors( $form, errors );
				return;
			}

			errors = errors && ( 'errors' in errors ) ? errors.errors : null;

			if ( app.empty( errors ) || ( app.empty( errors.general ) && app.empty( errors.field ) ) ) {
				app.consoleLogAjaxError();
				return;
			}

			if ( ! app.empty( errors.general ) ) {
				app.displayFormAjaxGeneralErrors( $form, errors.general );
			}

			if ( ! app.empty( errors.field ) ) {
				app.displayFormAjaxFieldErrors( $form, errors.field );
			}
		},

		/**
		 * Display form AJAX general errors that cannot be displayed using jQuery Validation plugin.
		 *
		 * @since 1.5.3
		 *
		 * @param {jQuery} $form Form element.
		 * @param {object} errors Errors in format { errorType: errorText }.
		 */
		displayFormAjaxGeneralErrors: function( $form, errors ) {

			if ( ! $form || ! $form.length ) {
				return;
			}

			if ( app.empty( errors ) ) {
				return;
			}

			// Safety net for random errors thrown by a third-party code. Should never be used intentionally.
			if ( 'string' === typeof errors ) {
				$form.find( '.wpforms-submit-container' ).before( '<div class="wpforms-error-container">' + errors + '</div>' );
				return;
			}

			$.each( errors, function( type, html ) {
				switch ( type ) {
					case 'header':
						$form.prepend( html );
						break;
					case 'footer':
						$form.find( '.wpforms-submit-container' ).before( html );
						break;
					case 'recaptcha':
						$form.find( '.wpforms-recaptcha-container' ).append( html );
						break;
				}
			} );
		},

		/**
		 * Clear forms AJAX general errors that cannot be cleared using jQuery Validation plugin.
		 *
		 * @since 1.5.3
		 *
		 * @param {jQuery} $form Form element.
		 */
		clearFormAjaxGeneralErrors: function( $form ) {

			$form.find( '.wpforms-error-container' ).remove();
			$form.find( '#wpforms-field_recaptcha-error' ).remove();
		},

		/**
		 * Display form AJAX field errors using jQuery Validation plugin.
		 *
		 * @since 1.5.3
		 *
		 * @param {jQuery} $form Form element.
		 * @param {object} errors Errors in format { fieldName: errorText }.
		 */
		displayFormAjaxFieldErrors: function( $form, errors ) {

			if ( ! $form || ! $form.length ) {
				return;
			}

			if ( app.empty( errors ) ) {
				return;
			}

			var validator = $form.data( 'validator' );

			if ( ! validator ) {
				return;
			}

			validator.showErrors( errors );
			validator.focusInvalid();
		},

		/**
		 * Submit a form using AJAX.
		 *
		 * @since 1.5.3
		 *
		 * @param {jQuery} $form Form element.
		 *
		 * @returns {JQueryXHR|JQueryDeferred} Promise like object for async callbacks.
		 */
		formSubmitAjax: function( $form ) {

			if ( ! $form.length ) {
				return $.Deferred().reject(); // eslint-disable-line new-cap
			}

			var $container = $form.closest( '.wpforms-container' ),
				$spinner = $form.find( '.wpforms-submit-spinner' ),
				$confirmationScroll,
				formData,
				args;

			$container.css( 'opacity', 0.6 );
			$spinner.show();

			app.clearFormAjaxGeneralErrors( $form );

			formData = new FormData( $form.get( 0 ) );
			formData.append( 'action', 'wpforms_submit' );
			formData.append( 'page_url', window.location.href );

			args = {
				type       : 'post',
				dataType   : 'json',
				url        : wpforms_settings.ajaxurl,
				data       : formData,
				cache      : false,
				contentType: false,
				processData: false,
			};

			args.success = function( json ) {

				if ( ! json ) {
					app.consoleLogAjaxError();
					return;
				}

				if ( json.data && json.data.action_required ) {
					$form.trigger( 'wpformsAjaxSubmitActionRequired', json );
					return;
				}

				if ( ! json.success ) {
					app.resetFormRecaptcha( $form );
					app.displayFormAjaxErrors( $form, json.data );
					$form.trigger( 'wpformsAjaxSubmitFailed', json );
					return;
				}

				$form.trigger( 'wpformsAjaxSubmitSuccess', json );

				if ( ! json.data ) {
					return;
				}

				if ( json.data.redirect_url ) {
					$form.trigger( 'wpformsAjaxSubmitBeforeRedirect', json );
					window.location = json.data.redirect_url;
					return;
				}

				if ( json.data.confirmation ) {
					$container.html( json.data.confirmation );
					$confirmationScroll = $container.find( 'div.wpforms-confirmation-scroll' );
					if ( $confirmationScroll.length ) {
						app.animateScrollTop( $confirmationScroll.offset().top - 100 );
					}
				}
			};

			args.error = function( jqHXR, textStatus, error ) {

				app.consoleLogAjaxError( error );

				$form.trigger( 'wpformsAjaxSubmitError', [ jqHXR, textStatus, error ] );
			};

			args.complete = function( jqHXR, textStatus ) {

				// Do not make form active if the action is required.
				if ( jqHXR.responseJSON && jqHXR.responseJSON.data && jqHXR.responseJSON.data.action_required ) {
					return;
				}

				var $submit     = $form.find( '.wpforms-submit' ),
					submitText  = $submit.data( 'submit-text' );

				if ( submitText ) {
					$submit.text( submitText );
				}
				$submit.prop( 'disabled', false );

				$container.css( 'opacity', '' );
				$spinner.hide();

				$form.trigger( 'wpformsAjaxSubmitCompleted', [ jqHXR, textStatus ] );
			};

			$form.trigger( 'wpformsAjaxBeforeSubmit' );

			return $.ajax( args );
		},

		/**
		 * Scroll to position with animation.
		 *
		 * @since 1.5.3
		 *
		 * @param {number} position Position (in pixels) to scroll to,
		 * @param {number} duration Animation duration.
		 * @param {Function} complete Function to execute after animation is complete.
		 *
		 * @returns {JQueryPromise} Promise object for async callbacks.
		 */
		animateScrollTop: function( position, duration, complete ) {

			duration = duration || 1000;
			complete = app.isFunction( complete ) ? complete : function() {};
			return $( 'html, body' ).animate( { scrollTop: parseInt( position, 10 ) }, { duration: duration, complete: complete } ).promise();
		},

		/**
		 * Check if object is a function.
		 *
		 * @since 1.5.8
		 *
		 * @param {mixed} object Object to check if it is function.
		 *
		 * @returns {boolean} True if object is a function.
		 */
		isFunction: function( object ) {

			return !! ( object && object.constructor && object.call && object.apply );
		},
	};

	return app;

}( document, window, jQuery ) );

// Initialize.
wpforms.init();
