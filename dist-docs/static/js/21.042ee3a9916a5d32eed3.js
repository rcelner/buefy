webpackJsonp([21],{229:function(e,t,s){var i=s(0)(s(900),s(902),null,null,null);e.exports=i.exports},683:function(e,t){e.exports={name:"buefy",version:"0.6.6",homepage:"https://buefy.github.io",description:"Lightweight UI components for Vue.js based on Bulma",author:"Rafael Beraldo <rafael.pimpa@gmail.com>",license:"MIT",main:"dist/buefy.js",unpkg:"dist/buefy.min.js",typings:"types/index.d.ts",files:["dist","src","types/*.d.ts"],repository:{type:"git",url:"https://github.com/buefy/buefy.git"},bugs:{url:"https://github.com/buefy/buefy/issues"},scripts:{dev:"node build/dev-server.js",start:"node build/dev-server.js",lint:"eslint --ext .js,.vue src docs","lint:fix":"eslint --ext .js,.vue src docs --fix","lint:staged":"lint-staged",unit:"jest",test:"npm run lint && npm run unit","test:watch":"npm run unit -- --watchAll","build:lib":"node build/build-lib.js","build:docs":"node build/build.js",build:"npm run build:lib && npm run build:docs",cov:"./node_modules/codcov/bin/codcov"},keywords:["bulma","vue","vuejs","vue-bulma","components"],dependencies:{bulma:"0.7.1"},peerDependencies:{vue:"2.5.13"},devDependencies:{"@fortawesome/fontawesome-free-webfonts":"1.0.3","@vue/test-utils":"1.0.0-beta.15",autoprefixer:"7.1.1",axios:"0.16.2","babel-core":"6.25.0","babel-eslint":"7.1.1","babel-jest":"22.1.0","babel-loader":"7.1.2","babel-plugin-transform-runtime":"6.22.0","babel-preset-env":"1.3.2","babel-preset-stage-2":"6.22.0","babel-register":"6.22.0",chalk:"1.1.3","cleave.js":"1.0.1",clipboard:"1.7.1",codecov:"3.0.0","connect-history-api-fallback":"1.3.0","copy-webpack-plugin":"4.3.1","cross-env":"4.0.0","cross-spawn":"5.0.1","css-loader":"0.28.0",eslint:"3.19.0","eslint-config-buefy":"0.0.1","eventsource-polyfill":"0.9.6",express:"4.14.1","extract-text-webpack-plugin":"3.0.2","file-loader":"0.11.1","font-awesome":"4.7.0","friendly-errors-webpack-plugin":"1.6.1","highlight.js":"9.12.0","html-webpack-plugin":"2.30.1","http-proxy-middleware":"0.17.3",jest:"22.4.3","jest-serializer-vue":"0.3.0","lint-staged":"6.1.1",mdi:"2.0.46","node-sass":"^4.5.3",opn:"4.0.2","optimize-css-assets-webpack-plugin":"3.2.0","optimize-js-plugin":"0.0.4",ora:"1.2.0","pre-commit":"1.2.2","prerender-spa-plugin":"3.2.1","raw-loader":"0.5.1",rimraf:"2.6.0","sass-loader":"6.0.6",scrollreveal:"3.3.6",semver:"5.3.0",shelljs:"0.7.6",sortablejs:"1.7.0","uglifyjs-webpack-plugin":"1.2.5","url-loader":"0.5.8",vue:"2.5.13","vue-analytics":"4.1.3","vue-jest":"2.5.0","vue-loader":"12.1.0","vue-progressbar":"0.7.2","vue-router":"2.3.1","vue-style-loader":"3.0.1","vue-template-compiler":"2.5.13",webpack:"3.10.0","webpack-bundle-analyzer":"2.9.2","webpack-dev-server":"2.11.1","webpack-hot-middleware":"2.21.0","webpack-merge":"4.1.2"},"lint-staged":{"*.{vue,js}":["eslint --fix","git add"]},"pre-commit":"lint:staged",engines:{node:">= 4.0.0",npm:">= 3.0.0"},browserslist:["> 1%","last 2 versions","not ie <= 8"],jest:{roots:["<rootDir>/src"],moduleFileExtensions:["js","vue"],transform:{"^.+\\.js$":"<rootDir>/node_modules/babel-jest",".*\\.(vue)$":"<rootDir>/node_modules/vue-jest"},moduleNameMapper:{"^@components/(.*)$":"<rootDir>/src/components/$1","^@utils/(.*)$":"<rootDir>/src/utils/$1"},snapshotSerializers:["<rootDir>/node_modules/jest-serializer-vue"],coverageDirectory:"./coverage/",collectCoverage:!0}}},684:function(e,t,s){e.exports=s.p+"static/img/buefy.1d65c18.png"},685:function(e,t,s){var i=s(0)(s(686),s(688),null,null,null);e.exports=i.exports},686:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(683),n=s.n(i),r=s(687),o=s.n(r);t.default={props:{light:Boolean},data:function(){return{isMenuActive:!1,version:n.a.version,bulmaVersion:o.a.version}},methods:{tweet:function(){var e=(window.screen.width-575)/2,t=(window.screen.height-400)/2,s="https://twitter.com/share?url="+encodeURIComponent(document.location.protocol+"//"+document.location.host)+"&text=Buefy: lightweight UI components for Vue.js based on Bulma&hashtags=buefy&via=rafaelpimpa",i="status=1,width=575,height=400,top="+t+",left="+e;window.open(s,"",i)},closeMenu:function(){this.isMenuActive=!1},toggleHtmlClip:function(){document.documentElement.classList.toggle("is-clipped-touch",this.isMenuActive)}},mounted:function(){this.$eventHub.$on("navigate",this.closeMenu)}}},687:function(e,t){e.exports={_args:[["bulma@0.7.1","S:\\Development\\buefy"]],_from:"bulma@0.7.1",_id:"bulma@0.7.1",_inBundle:!1,_integrity:"sha512-wRSO2LXB+qI9Pyz2id+uZr4quz5aftSN7Ay1ysr1+krzVp3utD+Ci4CeKuZdrYGc800t65b7heXBL6qw2Wo/lQ==",_location:"/bulma",_phantomChildren:{},_requested:{type:"version",registry:!0,raw:"bulma@0.7.1",name:"bulma",escapedName:"bulma",rawSpec:"0.7.1",saveSpec:null,fetchSpec:"0.7.1"},_requiredBy:["/"],_resolved:"https://registry.npmjs.org/bulma/-/bulma-0.7.1.tgz",_spec:"0.7.1",_where:"S:\\Development\\buefy",author:{name:"Jeremy Thomas",email:"bbxdesign@gmail.com",url:"https://jgthms.com"},bugs:{url:"https://github.com/jgthms/bulma/issues"},description:"Modern CSS framework based on Flexbox",devDependencies:{autoprefixer:"^8.2.0","clean-css-cli":"^4.1.11","node-sass":"^4.8.3","postcss-cli":"^5.0.0",rimraf:"^2.6.2"},files:["css","sass","bulma.sass","LICENSE","README.md"],homepage:"https://bulma.io",keywords:["css","sass","flexbox","responsive","framework"],license:"MIT",main:"bulma.sass",name:"bulma",repository:{type:"git",url:"git+https://github.com/jgthms/bulma.git"},scripts:{build:"npm run build-clean && npm run build-sass && npm run build-autoprefix && npm run build-cleancss","build-autoprefix":"postcss --use autoprefixer --map false --output css/bulma.css css/bulma.css","build-clean":"rimraf css","build-cleancss":"cleancss -o css/bulma.min.css css/bulma.css","build-sass":"node-sass --output-style expanded --source-map true bulma.sass css/bulma.css",deploy:"npm run build",start:"npm run build-sass -- --watch"},style:"bulma/css/bulma.min.css",version:"0.7.1"}},688:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("nav",{staticClass:"navbar docs-navbar is-spaced has-shadow",class:{"is-primary is-transparent":e.light}},[i("div",{staticClass:"container"},[i("div",{staticClass:"navbar-brand"},[i("router-link",{staticClass:"navbar-item",attrs:{to:"/",title:"Buefy: lightweight UI components for Vue.js based on Bulma","active-class":""}},[e.light?i("img",{attrs:{src:s(689),alt:"Buefy"}}):i("img",{attrs:{src:s(684),alt:"Buefy"}})]),e._v(" "),i("a",{staticClass:"navbar-item",class:{"has-text-dark":!e.light},attrs:{href:"https://github.com/buefy/buefy",target:"_blank",title:"Github"}},[i("b-icon",{attrs:{icon:"github-circle"}})],1),e._v(" "),i("a",{staticClass:"navbar-item",class:{"has-text-twitter":!e.light},attrs:{href:"https://twitter.com/rafaelpimpa",target:"_blank",title:"Twitter"}},[i("b-icon",{attrs:{icon:"twitter"}})],1),e._v(" "),i("a",{staticClass:"navbar-item",class:{"has-text-discord":!e.light},attrs:{href:"https://discordapp.com/invite/ZkdFJMr",target:"_blank",title:"Discord"}},[i("b-icon",{attrs:{icon:"discord"}})],1),e._v(" "),i("span",{staticClass:"navbar-burger burger",class:{"is-active":e.isMenuActive},on:{click:function(t){e.isMenuActive=!e.isMenuActive}}},[i("span"),e._v(" "),i("span"),e._v(" "),i("span")])],1),e._v(" "),i("div",{staticClass:"navbar-menu",class:{"is-active":e.isMenuActive}},[i("div",{staticClass:"navbar-end"},[i("router-link",{staticClass:"navbar-item",attrs:{to:"/",exact:""}},[e._v("\n                    Home\n                ")]),e._v(" "),i("router-link",{staticClass:"navbar-item",attrs:{to:"/documentation"}},[e._v("\n                    Documentation\n                ")]),e._v(" "),i("router-link",{staticClass:"navbar-item",attrs:{to:"/extensions"}},[e._v("\n                    Extensions\n                ")]),e._v(" "),i("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[i("div",{staticClass:"navbar-link"},[e._v("Info")]),e._v(" "),i("div",{staticClass:"navbar-dropdown is-boxed"},[i("strong",{staticClass:"navbar-item is-version"},[i("span",{staticClass:"has-text-primary"},[e._v("Buefy version")]),e._v(" "),i("span",{staticClass:"has-text-grey"},[e._v(e._s(e.version))])]),e._v(" "),i("strong",{staticClass:"navbar-item is-version"},[i("span",{staticClass:"has-text-bulma"},[e._v("Bulma version")]),e._v(" "),i("span",{staticClass:"has-text-grey"},[e._v(e._s(e.bulmaVersion))])]),e._v(" "),i("hr",{staticClass:"navbar-divider"}),e._v(" "),i("a",{staticClass:"navbar-item",attrs:{href:"https://github.com/buefy/buefy/releases",target:"_blank"}},[e._v("\n                            Changelogs\n                        ")])])]),e._v(" "),i("div",{staticClass:"navbar-item"},[i("a",{staticClass:"button is-outlined",class:e.light?"is-light":"is-twitter",on:{click:e.tweet}},[i("b-icon",{attrs:{icon:"twitter"}}),e._v(" "),i("span",[e._v("Tweet")])],1)])],1)])])])},staticRenderFns:[]}},689:function(e,t,s){e.exports=s.p+"static/img/buefy-light.7df103a.png"},690:function(e,t,s){var i=s(0)(null,s(691),null,null,null);e.exports=i.exports},691:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"content"},[s("p",[e._v("\n                Made with "),s("b-icon",{attrs:{icon:"heart",type:"is-danger"}}),e._v(" by\n                "),s("a",{attrs:{href:"https://twitter.com/rafaelpimpa",target:"_blank"}},[e._v("Rafael Beraldo")]),e._v(".\n            ")],1),e._v(" "),e._m(0),e._v(" "),s("b-field",[s("p",{staticClass:"control"},[s("a",{staticClass:"button",attrs:{href:"https://github.com/buefy/buefy",target:"_blank"}},[s("b-icon",{attrs:{icon:"github-circle"}}),e._v(" "),s("span",[e._v("GitHub")])],1)]),e._v(" "),s("p",{staticClass:"control"},[s("a",{staticClass:"button is-twitter",attrs:{href:"https://twitter.com/rafaelpimpa",target:"_blank"}},[s("b-icon",{attrs:{icon:"twitter"}}),e._v(" "),s("span",[e._v("Twitter")])],1)])])],1)])])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[s("small",[e._v("\n                    The source code is licensed under\n                    "),s("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php",target:"_blank"}},[e._v("MIT")]),e._v(".\n\n                    "),s("br"),e._v("\n                    The website content is licensed under\n                    "),s("a",{attrs:{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank"}},[e._v("CC ANS 4.0")]),e._v(".\n                ")])])}]}},900:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(901),n=s.n(i),r=s(685),o=s.n(r),a=s(690),l=s.n(a),c=s(683),u=s.n(c);t.default={name:"App",components:{TheNavbar:o.a,TheFooter:l.a},data:function(){return{version:u.a.version}},mounted:function(){var e=n()({duration:400,delay:200});e.reveal(".home-hero",{delay:0,origin:"top"},200),e.reveal(".features",200)}}},901:function(e,t,s){var i;!function(){"use strict";function n(e){return void 0===this||Object.getPrototypeOf(this)!==n.prototype?new n(e):(q=this,q.version="3.3.6",q.tools=new T,q.isSupported()?(q.tools.extend(q.defaults,e||{}),q.defaults.container=r(q.defaults),q.store={elements:{},containers:[]},q.sequences={},q.history=[],q.uid=0,q.initialized=!1):"undefined"!=typeof console&&null!==console&&console.log("ScrollReveal is not supported in this browser."),q)}function r(e){if(e&&e.container){if("string"==typeof e.container)return window.document.documentElement.querySelector(e.container);if(q.tools.isNode(e.container))return e.container;console.log('ScrollReveal: invalid container "'+e.container+'" provided.'),console.log("ScrollReveal: falling back to default container.")}return q.defaults.container}function o(e,t){return"string"==typeof e?Array.prototype.slice.call(t.querySelectorAll(e)):q.tools.isNode(e)?[e]:q.tools.isNodeList(e)?Array.prototype.slice.call(e):[]}function a(){return++q.uid}function l(e,t,s){t.container&&(t.container=s),e.config?e.config=q.tools.extendClone(e.config,t):e.config=q.tools.extendClone(q.defaults,t),"top"===e.config.origin||"bottom"===e.config.origin?e.config.axis="Y":e.config.axis="X"}function c(e){var t=window.getComputedStyle(e.domEl);e.styles||(e.styles={transition:{},transform:{},computed:{}},e.styles.inline=e.domEl.getAttribute("style")||"",e.styles.inline+="; visibility: visible; ",e.styles.computed.opacity=t.opacity,t.transition&&"all 0s ease 0s"!==t.transition?e.styles.computed.transition=t.transition+", ":e.styles.computed.transition=""),e.styles.transition.instant=u(e,0),e.styles.transition.delayed=u(e,e.config.delay),e.styles.transform.initial=" -webkit-transform:",e.styles.transform.target=" -webkit-transform:",d(e),e.styles.transform.initial+="transform:",e.styles.transform.target+="transform:",d(e)}function u(e,t){var s=e.config;return"-webkit-transition: "+e.styles.computed.transition+"-webkit-transform "+s.duration/1e3+"s "+s.easing+" "+t/1e3+"s, opacity "+s.duration/1e3+"s "+s.easing+" "+t/1e3+"s; transition: "+e.styles.computed.transition+"transform "+s.duration/1e3+"s "+s.easing+" "+t/1e3+"s, opacity "+s.duration/1e3+"s "+s.easing+" "+t/1e3+"s; "}function d(e){var t,s=e.config,i=e.styles.transform;t="top"===s.origin||"left"===s.origin?/^-/.test(s.distance)?s.distance.substr(1):"-"+s.distance:s.distance,parseInt(s.distance)&&(i.initial+=" translate"+s.axis+"("+t+")",i.target+=" translate"+s.axis+"(0)"),s.scale&&(i.initial+=" scale("+s.scale+")",i.target+=" scale(1)"),s.rotate.x&&(i.initial+=" rotateX("+s.rotate.x+"deg)",i.target+=" rotateX(0)"),s.rotate.y&&(i.initial+=" rotateY("+s.rotate.y+"deg)",i.target+=" rotateY(0)"),s.rotate.z&&(i.initial+=" rotateZ("+s.rotate.z+"deg)",i.target+=" rotateZ(0)"),i.initial+="; opacity: "+s.opacity+";",i.target+="; opacity: "+e.styles.computed.opacity+";"}function f(e){var t=e.config.container;t&&-1===q.store.containers.indexOf(t)&&q.store.containers.push(e.config.container),q.store.elements[e.id]=e}function m(e,t,s){var i={target:e,config:t,interval:s};q.history.push(i)}function p(){if(q.isSupported()){g();for(var e=0;e<q.store.containers.length;e++)q.store.containers[e].addEventListener("scroll",v),q.store.containers[e].addEventListener("resize",v);q.initialized||(window.addEventListener("scroll",v),window.addEventListener("resize",v),q.initialized=!0)}return q}function v(){S(g)}function b(){var e,t,s,i;q.tools.forOwn(q.sequences,function(n){i=q.sequences[n],e=!1;for(var r=0;r<i.elemIds.length;r++)s=i.elemIds[r],t=q.store.elements[s],E(t)&&!e&&(e=!0);i.active=e})}function g(){var e,t;b(),q.tools.forOwn(q.store.elements,function(s){t=q.store.elements[s],e=w(t),_(t)?(t.config.beforeReveal(t.domEl),e?t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.target+t.styles.transition.delayed):t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.target+t.styles.transition.instant),y("reveal",t,e),t.revealing=!0,t.seen=!0,t.sequence&&h(t,e)):x(t)&&(t.config.beforeReset(t.domEl),t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.initial+t.styles.transition.instant),y("reset",t),t.revealing=!1)})}function h(e,t){var s=0,i=0,n=q.sequences[e.sequence.id];n.blocked=!0,t&&"onload"===e.config.useDelay&&(i=e.config.delay),e.sequence.timer&&(s=Math.abs(e.sequence.timer.started-new Date),window.clearTimeout(e.sequence.timer)),e.sequence.timer={started:new Date},e.sequence.timer.clock=window.setTimeout(function(){n.blocked=!1,e.sequence.timer=null,v()},Math.abs(n.interval)+i-s)}function y(e,t,s){var i=0,n=0,r="after";switch(e){case"reveal":n=t.config.duration,s&&(n+=t.config.delay),r+="Reveal";break;case"reset":n=t.config.duration,r+="Reset"}t.timer&&(i=Math.abs(t.timer.started-new Date),window.clearTimeout(t.timer.clock)),t.timer={started:new Date},t.timer.clock=window.setTimeout(function(){t.config[r](t.domEl),t.timer=null},n-i)}function _(e){if(e.sequence){var t=q.sequences[e.sequence.id];return t.active&&!t.blocked&&!e.revealing&&!e.disabled}return E(e)&&!e.revealing&&!e.disabled}function w(e){var t=e.config.useDelay;return"always"===t||"onload"===t&&!q.initialized||"once"===t&&!e.seen}function x(e){if(e.sequence){return!q.sequences[e.sequence.id].active&&e.config.reset&&e.revealing&&!e.disabled}return!E(e)&&e.config.reset&&e.revealing&&!e.disabled}function C(e){return{width:e.clientWidth,height:e.clientHeight}}function k(e){if(e&&e!==window.document.documentElement){var t=j(e);return{x:e.scrollLeft+t.left,y:e.scrollTop+t.top}}return{x:window.pageXOffset,y:window.pageYOffset}}function j(e){var t=0,s=0,i=e.offsetHeight,n=e.offsetWidth;do{isNaN(e.offsetTop)||(t+=e.offsetTop),isNaN(e.offsetLeft)||(s+=e.offsetLeft),e=e.offsetParent}while(e);return{top:t,left:s,height:i,width:n}}function E(e){var t=j(e.domEl),s=C(e.config.container),i=k(e.config.container),n=e.config.viewFactor,r=t.height,o=t.width,a=t.top,l=t.left,c=a+r,u=l+o;return function(){var t=a+r*n,d=l+o*n,f=c-r*n,m=u-o*n,p=i.y+e.config.viewOffset.top,v=i.x+e.config.viewOffset.left,b=i.y-e.config.viewOffset.bottom+s.height,g=i.x-e.config.viewOffset.right+s.width;return t<b&&f>p&&d<g&&m>v}()||function(){return"fixed"===window.getComputedStyle(e.domEl).position}()}function T(){}var q,S;n.prototype.defaults={origin:"bottom",distance:"20px",duration:500,delay:0,rotate:{x:0,y:0,z:0},opacity:0,scale:.9,easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",container:window.document.documentElement,mobile:!0,reset:!1,useDelay:"always",viewFactor:.2,viewOffset:{top:0,right:0,bottom:0,left:0},beforeReveal:function(e){},beforeReset:function(e){},afterReveal:function(e){},afterReset:function(e){}},n.prototype.isSupported=function(){var e=document.documentElement.style;return"WebkitTransition"in e&&"WebkitTransform"in e||"transition"in e&&"transform"in e},n.prototype.reveal=function(e,t,s,i){var n,u,d,v,b,g;if(void 0!==t&&"number"==typeof t?(s=t,t={}):void 0!==t&&null!==t||(t={}),n=r(t),u=o(e,n),!u.length)return console.log('ScrollReveal: reveal on "'+e+'" failed, no elements found.'),q;s&&"number"==typeof s&&(g=a(),b=q.sequences[g]={id:g,interval:s,elemIds:[],active:!1});for(var h=0;h<u.length;h++)v=u[h].getAttribute("data-sr-id"),v?d=q.store.elements[v]:(d={id:a(),domEl:u[h],seen:!1,revealing:!1},d.domEl.setAttribute("data-sr-id",d.id)),b&&(d.sequence={id:b.id,index:b.elemIds.length},b.elemIds.push(d.id)),l(d,t,n),c(d),f(d),q.tools.isMobile()&&!d.config.mobile||!q.isSupported()?(d.domEl.setAttribute("style",d.styles.inline),d.disabled=!0):d.revealing||d.domEl.setAttribute("style",d.styles.inline+d.styles.transform.initial);return!i&&q.isSupported()&&(m(e,t,s),q.initTimeout&&window.clearTimeout(q.initTimeout),q.initTimeout=window.setTimeout(p,0)),q},n.prototype.sync=function(){if(q.history.length&&q.isSupported()){for(var e=0;e<q.history.length;e++){var t=q.history[e];q.reveal(t.target,t.config,t.interval,!0)}p()}else console.log("ScrollReveal: sync failed, no reveals found.");return q},T.prototype.isObject=function(e){return null!==e&&"object"==typeof e&&e.constructor===Object},T.prototype.isNode=function(e){return"object"==typeof window.Node?e instanceof window.Node:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},T.prototype.isNodeList=function(e){var t=Object.prototype.toString.call(e),s=/^\[object (HTMLCollection|NodeList|Object)\]$/;return"object"==typeof window.NodeList?e instanceof window.NodeList:e&&"object"==typeof e&&s.test(t)&&"number"==typeof e.length&&(0===e.length||this.isNode(e[0]))},T.prototype.forOwn=function(e,t){if(!this.isObject(e))throw new TypeError('Expected "object", but received "'+typeof e+'".');for(var s in e)e.hasOwnProperty(s)&&t(s)},T.prototype.extend=function(e,t){return this.forOwn(t,function(s){this.isObject(t[s])?(e[s]&&this.isObject(e[s])||(e[s]={}),this.extend(e[s],t[s])):e[s]=t[s]}.bind(this)),e},T.prototype.extendClone=function(e,t){return this.extend(this.extend({},e),t)},T.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},S=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},void 0!==(i=function(){return n}.call(t,s,t,e))&&(e.exports=i)}()},902:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"home"},[s("TheNavbar",{attrs:{light:""}}),e._v(" "),s("div",{staticClass:"hero is-fullheight is-primary"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container has-text-centered"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),s("div",{staticClass:"buttons"},[s("router-link",{staticClass:"button is-medium home-hero",attrs:{to:"/documentation/start"}},[e._v("\n                        Get started\n                    ")]),e._v(" "),s("a",{staticClass:"button is-medium is-primary home-hero",attrs:{href:"https://github.com/buefy/buefy/releases",target:"_blank"}},[e._v("\n                        Changelog\n                    ")])],1),e._v(" "),s("small",{staticClass:"home-hero"},[e._v("v"+e._s(e.version))])])])]),e._v(" "),s("section",{staticClass:"hero"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("nav",{staticClass:"columns"},[s("div",{staticClass:"column has-text-centered features"},[s("b-icon",{attrs:{icon:"github-circle",size:"is-large"}}),e._v(" "),e._m(4),e._v(" "),e._m(5)],1),e._v(" "),s("div",{staticClass:"column has-text-centered features"},[s("b-icon",{attrs:{icon:"cellphone-link",size:"is-large"}}),e._v(" "),e._m(6),e._v(" "),e._m(7)],1),e._v(" "),s("div",{staticClass:"column has-text-centered features"},[s("b-icon",{attrs:{icon:"alert-decagram",size:"is-large"}}),e._v(" "),e._m(8),e._v(" "),e._m(9)],1),e._v(" "),s("div",{staticClass:"column has-text-centered features"},[s("b-icon",{attrs:{pack:"far",icon:"paper-plane",size:"is-large"}}),e._v(" "),e._m(10),e._v(" "),s("p",{staticClass:"subtitle"},[e._v("No other internal dependency")])],1)])])])]),e._v(" "),s("TheFooter")],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"logo-rounded home-hero"},[i("img",{attrs:{src:s(684),alt:"Buefy"}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h2",{staticClass:"subtitle home-hero"},[s("strong",[e._v("Lightweight")]),e._v(" UI components for "),s("strong",[s("a",{attrs:{href:"https://vuejs.org/",target:"_blank"}},[e._v("Vue.js")])]),e._v("\n                    based on "),s("strong",[s("a",{attrs:{href:"http://bulma.io/",target:"_blank"}},[e._v("Bulma")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",{staticClass:"npm home-hero"},[s("code",[s("span",{staticClass:"is-unselectable"},[e._v("$ ")]),e._v("npm install buefy")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"github-button home-hero"},[s("iframe",{attrs:{src:"https://ghbtns.com/github-btn.html?user=buefy&repo=buefy&type=star&count=true&size=large",frameborder:"0",scrolling:"0",width:"160px",height:"30px"}}),e._v(" "),s("iframe",{attrs:{src:"https://ghbtns.com/github-btn.html?user=buefy&repo=buefy&type=fork&count=false&size=large",frameborder:"0",scrolling:"0",width:"80px",height:"30px"}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticClass:"title is-4"},[s("strong",[e._v("Free")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticClass:"subtitle"},[e._v("Open source on "),s("strong",[s("a",{attrs:{href:"https://github.com/buefy/buefy",target:"_blank"}},[e._v("GitHub")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticClass:"title is-4"},[s("strong",[e._v("Responsive")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticClass:"subtitle"},[s("b",[e._v("Every")]),e._v(" component is responsive")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticClass:"title is-4"},[s("strong",[e._v("Modern")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticClass:"subtitle"},[e._v("\n                            Built with "),s("strong",[s("a",{attrs:{href:"https://vuejs.org/",target:"_blank"}},[e._v("Vue.js")])]),e._v("\n                            and "),s("strong",[s("a",{attrs:{href:"http://bulma.io/",target:"_blank"}},[e._v("Bulma")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticClass:"title is-4"},[s("strong",[e._v("Lightweight")])])}]}}});
//# sourceMappingURL=21.042ee3a9916a5d32eed3.js.map