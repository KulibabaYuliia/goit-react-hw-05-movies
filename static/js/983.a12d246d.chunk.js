"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[983],{877:function(e,t,n){n.d(t,{$7:function(){return h},Hx:function(){return g},Y5:function(){return p},uV:function(){return v},wr:function(){return i}});var r=n(5861),a=n(4687),u=n.n(a),c=n(1243),o="f254cc864df015fcbf82561d518eee0b";function i(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=".concat(o));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US&api_key=").concat(o));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&language=en-US&api_key=").concat(o));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US&api_key=").concat(o));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US&api_key=").concat(o,"&page=1"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},9760:function(e,t,n){n.d(t,{X:function(){return u},y:function(){return a}});var r=n(6795),a=(n(5462),function(e){return r.Am.error("".concat(e),{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}),u=function(){return r.Am.warn("Search shouldn't be empty",{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}},6368:function(e,t,n){var r=n(7689),a=n(1087),u=n(184);t.Z=function(e){var t=e.trendingMovies,n=(0,r.TH)();return(0,u.jsx)("ol",{children:t&&t.map((function(e){return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{state:{from:n},to:"/movies/".concat(e.id),children:e.title})},e.id)}))})}},3983:function(e,t,n){n.r(t);var r=n(5861),a=n(9439),u=n(4687),c=n.n(u),o=n(2791),i=n(877),s=n(748),p=n(6795),f=n(9760),h=n(6368),l=n(184);t.default=function(){var e=(0,o.useState)(null),t=(0,a.Z)(e,2),n=t[0],u=t[1],v=(0,o.useState)(null),d=(0,a.Z)(v,2),g=d[0],m=d[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,(0,i.wr)();case 4:if(t=e.sent,0!==(n=t.data).results.length){e.next=8;break}throw new Error("No results found");case 8:u(n.results),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),u(null),(0,f.y)(e.t0.message);case 15:return e.prev=15,m(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,11,15,18]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Trending today"}),(0,l.jsx)(h.Z,{trendingMovies:n}),g&&(0,l.jsx)(s.a,{}),(0,l.jsx)(p.Ix,{})]})}}}]);
//# sourceMappingURL=983.a12d246d.chunk.js.map