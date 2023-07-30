/*! For license information please see 485.59e85707.chunk.js.LICENSE.txt */
(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[485],{2940:function(n,t,e){"use strict";e.d(t,{u:function(){return c}});var r,a=e(168),i=e(5867).ZP.button(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n  padding: 12px 16px;\n  font-size: 16px;\n  font-weight: 500;\n  box-shadow: 0px 12px 8px 4px #cab1b14d;\n\n  border: ",";\n\n  background-color: ",";\n\n  color: ",";\n\n  transform: scale(1);\n\n  &:hover,\n  &:focus {\n    transform: scale(1.1);\n    color: white;\n    background-color: rgba(0, 128, 75, 0.7);\n    border: none;\n    box-shadow: 0px 12px 8px 4px #0b78474d;\n  }\n\n  & > svg {\n    margin-right: 8px;\n  }\n"])),(function(n){return"search"===n.status?"none":"load"===n.status?"1px solid rgba(0, 128, 75, 0.7)":"grey"}),(function(n){return"search"===n.status?"rgba(0, 128, 75, 0.7)":"load"===n.status?"transparent":"grey"}),(function(n){return"search"===n.status?"hsla(0, 0%, 100%, 1)":"load"===n.status?"black":"grey"})),o=e(5585),s=(e(7632),e(184)),c=function(n){var t=n.text,e=n.status,r=n.icon,a=void 0===r?null:r,c=n.disabled,u=void 0!==c&&c,p=n.type,l=void 0===p?"button":p,f=n.onClick,d=void 0===f?null:f,h=n.onLoaderPlay;return(0,s.jsxs)(i,{status:e,type:l,disabled:u,onClick:d,children:[a&&(0,s.jsx)(a,{}),h&&(0,s.jsx)(o.Z,{as:"span",variant:"light",size:"sm",role:"status","aria-hidden":"true",animation:"border"}),t]})}},4146:function(n,t,e){"use strict";e.d(t,{e:function(){return v}});var r,a,i,o=e(7689),s=e(1087),c=e(8393),u=e(168),p=e(5867),l=p.ZP.ul(r||(r=(0,u.Z)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 16px;\n  margin: 0 auto;\n  padding: 24px;\n"]))),f=p.ZP.li(a||(a=(0,u.Z)(["\n  width: calc((100%-80px) / 6);\n  transform: scale(1);\n  border-radius: 12px;\n\n  &:hover {\n    transform: scale(1.1);\n  }\n\n  &:hover > p {\n    opacity: 1;\n  }\n\n  img {\n    border-radius: 12px;\n    height: 100%;\n    width: 100%;\n  }\n"]))),d=p.ZP.p(i||(i=(0,u.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(16, 178, 108, 0.7);\n  border-radius: 12px;\n  font-size: 16px;\n  color: white;\n  font-weight: 500;\n  padding: 12px;\n  height: 30%;\n  opacity: 0;\n\n  & > span {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    /* transform: translateY(-50%); */\n    width: 50px;\n    background-color: rgba(228, 222, 30, 0.8);\n    padding: 10px;\n    border-radius: 12px;\n  }\n"]))),h=e(184),v=function(n){var t=n.movies,e=(0,o.TH)();return(0,h.jsx)(l,{children:t.map((function(n){return(0,h.jsxs)(f,{children:[(0,h.jsxs)(d,{children:[n.title," ",(0,h.jsx)("span",{children:n.vote_average.toFixed(2)})]}),(0,h.jsx)(s.rU,{to:"/movies/".concat(n.id),state:{from:e},children:(0,h.jsx)("img",{src:n.poster_path?"".concat(c.K.BASE_URL).concat(n.poster_path):c.K.defaultImg,alt:n.title,width:"200"})})]},n.id)}))})}},8393:function(n,t,e){"use strict";e.d(t,{K:function(){return f}});var r=e(4165),a=e(5861),i=e(5671),o=e(3144),s=e(6274),c=e(9359),u=e(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var p=(0,c.Z)("API_KEY"),l=function(){function n(){(0,i.Z)(this,n),Object.defineProperty(this,p,{writable:!0,value:"c73a67b83f8baa351fa09bb14e13e412"}),this.BASE_URL="https://image.tmdb.org/t/p/w500",this.defaultImg="https://m.media-amazon.com/images/M/MV5BMTRkZGE0YWYtMDFhOS00N2I4LTljMTMtYjk0MTI2YmVhOTU4XkEyXkFqcGdeQXVyNjgxNzM0NDI@._V1_.jpg"}return(0,o.Z)(n,[{key:"getPopularMovies",value:function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e,a,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams({api_key:(0,s.Z)(this,p)[p],page:t}),n.next=3,u.Z.get("trending/movie/day",{params:e});case 3:return a=n.sent,i=a.data,n.abrupt("return",i);case 6:case"end":return n.stop()}}),n,this)})));return function(t){return n.apply(this,arguments)}}()},{key:"getMovieByQuery",value:function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t,e){var a,i,o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=new URLSearchParams({api_key:(0,s.Z)(this,p)[p],query:t,page:e,language:"en-US",include_adult:!1}),n.next=3,u.Z.get("/search/movie",{params:a});case 3:return i=n.sent,o=i.data,n.abrupt("return",o);case 6:case"end":return n.stop()}}),n,this)})));return function(t,e){return n.apply(this,arguments)}}()},{key:"getMovieById",value:function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams({api_key:(0,s.Z)(this,p)[p],language:"en-US",include_adult:!1}),n.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(t,"?").concat(e)).then((function(n){if(!n.ok)throw new Error("Oops, there is no movie with that name");return n.json()}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n,this)})));return function(t){return n.apply(this,arguments)}}()},{key:"getMovieCast",value:function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e,a,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams({api_key:(0,s.Z)(this,p)[p],language:"en-US"}),n.next=3,u.Z.get("movie/".concat(t,"/credits?").concat(e));case 3:return a=n.sent,i=a.data,n.abrupt("return",i.cast);case 6:case"end":return n.stop()}}),n,this)})));return function(t){return n.apply(this,arguments)}}()},{key:"getMovieReview",value:function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e,a,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams({api_key:(0,s.Z)(this,p)[p],language:"en-US"}),n.next=3,u.Z.get("movie/".concat(t,"/reviews?").concat(e));case 3:return a=n.sent,i=a.data,n.abrupt("return",i.results);case 6:case"end":return n.stop()}}),n,this)})));return function(t){return n.apply(this,arguments)}}()}]),n}(),f=new l},3485:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return g}});var r,a,i=e(3433),o=e(9439),s=e(8393),c=e(2791),u=e(168),p=e(5867),l=p.ZP.main(r||(r=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  flex-wrap: wrap;\n"]))),f=p.ZP.h1(a||(a=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 1.7;\n  margin-bottom: 20px;\n"]))),d=e(4146),h=e(2940),v=e(184),g=function(){var n=(0,c.useState)([]),t=(0,o.Z)(n,2),e=t[0],r=t[1],a=(0,c.useState)(1),u=(0,o.Z)(a,2),p=u[0],g=u[1],x=(0,c.useState)(null),b=(0,o.Z)(x,2),m=b[0],y=b[1];(0,c.useEffect)((function(){s.K.getPopularMovies(p).then((function(n){r((function(t){return[].concat((0,i.Z)(t),(0,i.Z)(n.results))})),y(n.total_results)}))}),[p]);return(0,v.jsxs)(l,{children:[(0,v.jsx)(f,{children:"Trending today "}),(0,v.jsx)(d.e,{movies:e}),m/20>=p&&(0,v.jsx)(h.u,{text:"Load more",status:"load",onClick:function(){g((function(n){return n+1}))}})]})}},1694:function(n,t){var e;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var n=[],t=0;t<arguments.length;t++){var e=arguments[t];if(e){var i=typeof e;if("string"===i||"number"===i)n.push(e);else if(Array.isArray(e)){if(e.length){var o=a.apply(null,e);o&&n.push(o)}}else if("object"===i){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){n.push(e.toString());continue}for(var s in e)r.call(e,s)&&e[s]&&n.push(s)}}}return n.join(" ")}n.exports?(a.default=a,n.exports=a):void 0===(e=function(){return a}.apply(t,[]))||(n.exports=e)}()},5585:function(n,t,e){"use strict";e.d(t,{Z:function(){return x}});var r=e(9142);function a(n,t,e){return(t=(0,r.Z)(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function i(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function o(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach((function(t){a(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function s(n,t){if(null==n)return{};var e,r,a=function(n,t){if(null==n)return{};var e,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}var c=e(1694),u=e.n(c),p=e(2791),l=e(184),f=["xxl","xl","lg","md","sm","xs"],d=p.createContext({prefixes:{},breakpoints:f,minBreakpoint:"xs"});d.Consumer,d.Provider;function h(n,t){var e=(0,p.useContext)(d).prefixes;return n||e[t]||t}var v=["bsPrefix","variant","animation","size","as","className"],g=p.forwardRef((function(n,t){var e=n.bsPrefix,r=n.variant,a=n.animation,i=void 0===a?"border":a,c=n.size,p=n.as,f=void 0===p?"div":p,d=n.className,g=s(n,v);e=h(e,"spinner");var x="".concat(e,"-").concat(i);return(0,l.jsx)(f,o(o({ref:t},g),{},{className:u()(d,x,c&&"".concat(x,"-").concat(c),r&&"text-".concat(r))}))}));g.displayName="Spinner";var x=g},7632:function(){}}]);
//# sourceMappingURL=485.59e85707.chunk.js.map