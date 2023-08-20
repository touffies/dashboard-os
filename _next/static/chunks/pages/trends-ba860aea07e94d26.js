(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[319],{21105:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trends",function(){return t(74650)}])},74650:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return k}});var l=t(85893),u=t(9008),d=t.n(u),v=t(67294),r=t(45697),T=t.n(r);function Z(){return Z=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},Z.apply(this,arguments)}function s(e,a){if(null==e)return{};var t,l,u=function(e,a){if(null==e)return{};var t,l,u={},d=Object.keys(e);for(l=0;l<d.length;l++)t=d[l],a.indexOf(t)>=0||(u[t]=e[t]);return u}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(l=0;l<d.length;l++)t=d[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}var o=(0,v.forwardRef)((function(e,a){var t=e.color,l=void 0===t?"currentColor":t,u=e.size,d=void 0===u?24:u,r=s(e,["color","size"]);return v.createElement("svg",Z({ref:a,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),v.createElement("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),v.createElement("polyline",{points:"17 6 23 6 23 12"}))}));o.propTypes={color:T().string,size:T().oneOfType([T().string,T().number])},o.displayName="TrendingUp";var n=o;function i(){return i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},i.apply(this,arguments)}function c(e,a){if(null==e)return{};var t,l,u=function(e,a){if(null==e)return{};var t,l,u={},d=Object.keys(e);for(l=0;l<d.length;l++)t=d[l],a.indexOf(t)>=0||(u[t]=e[t]);return u}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(l=0;l<d.length;l++)t=d[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}var h=(0,v.forwardRef)((function(e,a){var t=e.color,l=void 0===t?"currentColor":t,u=e.size,d=void 0===u?24:u,r=c(e,["color","size"]);return v.createElement("svg",i({ref:a,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r),v.createElement("polyline",{points:"23 18 13.5 8.5 8.5 13.5 1 6"}),v.createElement("polyline",{points:"17 18 23 18 23 12"}))}));h.propTypes={color:T().string,size:T().oneOfType([T().string,T().number])},h.displayName="TrendingDown";var p=h,g=t(74041),f=t(18121),_=t(49384),m={testsslGrade:{title:"SSL"},codescanGrade:{title:"Codescan grade"},dependabotGrade:{title:"Dependabot grade"},httpGrade:{title:"HTTP observatory"},lighthouse_performance:{treshold:.1,title:"Lighthouse Performance"},lighthouse_seo:{treshold:.1,title:"Lighthouse SEO"},lighthouse_pwa:{treshold:.1,title:"Lighthouse PWA"},lighthouse_accessibility:{title:"Lighthouse accessibility"},"lighthouse_best-practices":{treshold:.1,title:"Lighthouse best practices"},nmapGrade:{title:"NMAP grade"},nmapOpenPortsGrade:{title:"NMAP open ports grade"},trackersCount:{title:"Trackers count",reverse:!0},cookiesCount:{title:"Cookies count",reverse:!0},uptime:{treshold:1,title:"uptime"},apdex:{treshold:.05,title:"apDex"},"declaration-a11y":{title:"D\xe9claration a11y"},"declaration-rgpd":{title:"D\xe9claration RGPD"},trivyGrade:{title:"Trivy grade"}},b=[{name:"trend",label:"Trend",render:function(e){return function(e,a){var t=m[e],l=a[0],u=a[a.length-1];return e.match(/Grade$/)||"declaration-a11y"===e?(0,_.BE)(u)-(0,_.BE)(l):t.reverse?l-u:u-l}(e.key,e.values)>0?(0,l.jsx)(n,{size:40,style:{stroke:"var(--success)",marginRight:10}}):(0,l.jsx)(p,{size:40,style:{stroke:"var(--error)",marginRight:10}})}},{name:"outil",label:"Outil",render:function(e){return m[e.key].title}},{name:"evolution",label:"Evolution",render:function(e){return e.values.map((function(e){return isNaN(e)?e:Math.floor(1e4*e)/1e4})).filter((function(e,a,t){return 0===a||a===t.length-1})).join(" => ")}}],G=function(e){var a=e.trends,t=Object.keys(a);return t.sort(),(0,l.jsxs)("div",{children:[(0,l.jsx)("br",{}),(0,l.jsx)("h3",{children:"Evolutions sur les 30 derniers jours"}),(0,l.jsx)("br",{}),t.map((function(e){var t=function(e){var a={};return Object.keys(e).filter((function(e){return e in m})).forEach((function(t){var l=e[t].map((function(e){return e.date,e.value}));if(l.length>1){var u=l[0],d=l[l.length-1],v=m[t].treshold;(!v||Math.abs(u-d)>(v||0))&&u!==d&&(a[t]=[u,d])}})),a}(a[e]);return Object.keys(t).length?(0,l.jsx)(f.s,{title:(0,_.p5)(e),url:"/url/".concat(encodeURIComponent((0,_.N0)(e))),children:(0,l.jsx)(g.Table,{columns:b,data:Object.keys(t).map((function(e){return{key:e,values:t[e]}})),rowKey:"key"})},e):null}))]})},y=JSON.parse('{"https://www.fabrique.social.gouv.fr":{"404":[{"date":"2022-08-12T08:10:08.000Z","value":8}],"httpGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"A+"}],"nmapGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-08-12T08:10:08.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"A"}],"dependabotGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"E"}],"dependabotCount":[{"date":"2022-08-12T08:10:08.000Z","value":15}],"testsslExpireSoon":[{"date":"2022-08-12T08:10:08.000Z","value":false}],"testsslExpireDate":[{"date":"2022-08-12T08:10:08.000Z","value":"2022-09-16T05:24:00.000Z"}],"testsslGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"A+"}],"cookiesGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"B"}],"cookiesCount":[{"date":"2022-08-12T08:10:08.000Z","value":2}],"trackersGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"A"}],"trackersCount":[{"date":"2022-08-12T08:10:08.000Z","value":0}],"lighthouse_performance":[{"date":"2022-08-12T08:10:08.000Z","value":0.35}],"lighthouse_performanceGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"D"}],"lighthouse_accessibility":[{"date":"2022-08-12T08:10:08.000Z","value":0.96}],"lighthouse_accessibilityGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-08-12T08:10:08.000Z","value":0.92}],"lighthouse_best-practicesGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-08-12T08:10:08.000Z","value":0.9}],"lighthouse_seoGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-08-12T08:10:08.000Z","value":0.3}],"lighthouse_pwaGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"E"}],"declaration-a11y":[{"date":"2022-08-12T08:10:08.000Z","value":"C"}]},"https://beta.gouv.fr":{"404":[{"date":"2022-08-12T08:10:08.000Z","value":7}],"httpGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"D+"}],"nmapGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-08-12T08:10:08.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2022-08-12T08:10:08.000Z","value":false}],"testsslExpireDate":[{"date":"2022-08-12T08:10:08.000Z","value":"2022-10-26T07:19:00.000Z"}],"testsslGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"A+"}],"cookiesGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"B"}],"cookiesCount":[{"date":"2022-08-12T08:10:08.000Z","value":2}],"trackersGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"A"}],"trackersCount":[{"date":"2022-08-12T08:10:08.000Z","value":0}],"lighthouse_performance":[{"date":"2022-08-12T08:10:08.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2022-08-12T08:10:08.000Z","value":0.92}],"lighthouse_accessibilityGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-08-12T08:10:08.000Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-08-12T08:10:08.000Z","value":1}],"lighthouse_seoGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-08-12T08:10:08.000Z","value":0.6}],"lighthouse_pwaGrade":[{"date":"2022-08-12T08:10:08.000Z","value":"C"}],"declaration-a11y":[{"date":"2022-08-12T08:10:08.000Z","value":"C"}]},"http://402web.fr":{"404":[{"date":"2022-08-12T11:40:16.000Z","value":9},{"date":"2022-09-04T02:04:47.000Z","value":"A+"}],"httpGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"F"}],"nmapGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"F"},{"date":"2022-09-04T02:04:47.000Z","value":"D"},{"date":"2023-03-19T01:37:57.000Z","value":"C"}],"nmapOpenPortsCount":[{"date":"2022-08-12T11:40:16.000Z","value":11},{"date":"2022-09-04T02:04:47.000Z","value":8},{"date":"2023-01-08T01:44:07.000Z","value":7}],"nmapOpenPortsGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2022-08-12T11:40:16.000Z","value":false}],"testsslExpireDate":[{"date":"2022-08-12T11:40:16.000Z","value":"2023-03-05T19:41:00.000Z"},{"date":"2022-09-04T02:04:47.000Z","value":"2031-02-20T07:40:00.000Z"}],"testsslGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"M"},{"date":"2022-09-04T02:04:47.000Z","value":"T"}],"cookiesGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"A"}],"cookiesCount":[{"date":"2022-08-12T11:40:16.000Z","value":0}],"trackersGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"C"}],"trackersCount":[{"date":"2022-08-12T11:40:16.000Z","value":8},{"date":"2022-09-04T02:04:47.000Z","value":5}],"lighthouse_performance":[{"date":"2022-08-12T11:40:16.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2022-08-12T11:40:16.000Z","value":0.5}],"lighthouse_accessibilityGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"D"}],"lighthouse_best-practices":[{"date":"2022-08-12T11:40:16.000Z","value":0.83}],"lighthouse_best-practicesGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"B"}],"lighthouse_seo":[{"date":"2022-08-12T11:40:16.000Z","value":0.92}],"lighthouse_seoGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-08-12T11:40:16.000Z","value":0.7}],"lighthouse_pwaGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"B"}],"declaration-a11y":[],"declaration-rgpd":[]},"https://www.coque-en-bois.fr":{"404":[{"date":"2022-08-12T11:40:16.000Z","value":12},{"date":"2022-08-12T13:43:58.000Z","value":686},{"date":"2022-08-14T01:59:11.000Z","value":665},{"date":"2022-08-21T01:51:30.000Z","value":12},{"date":"2022-09-11T02:13:37.000Z","value":18},{"date":"2022-09-18T02:26:30.000Z","value":753},{"date":"2022-09-25T02:17:35.000Z","value":686},{"date":"2022-10-02T02:45:05.000Z","value":2},{"date":"2022-10-09T02:17:33.000Z","value":684},{"date":"2022-10-16T02:24:53.000Z","value":49},{"date":"2022-10-23T02:18:29.000Z","value":2},{"date":"2022-10-30T02:14:46.000Z","value":683},{"date":"2022-11-06T01:53:55.000Z","value":667},{"date":"2022-11-13T01:51:43.000Z","value":2},{"date":"2022-11-27T01:48:25.000Z","value":674},{"date":"2022-12-04T01:39:40.000Z","value":457},{"date":"2022-12-11T01:43:12.000Z","value":202},{"date":"2022-12-18T01:37:12.000Z","value":557},{"date":"2022-12-25T01:35:54.000Z","value":662},{"date":"2023-01-08T01:44:07.000Z","value":669},{"date":"2023-01-15T01:40:40.000Z","value":344},{"date":"2023-01-22T01:36:38.000Z","value":"A+"},{"date":"2023-01-29T01:45:55.000Z","value":645},{"date":"2023-02-05T01:40:47.000Z","value":641},{"date":"2023-02-12T01:40:56.000Z","value":682},{"date":"2023-02-19T01:37:52.000Z","value":646},{"date":"2023-02-26T01:41:00.000Z","value":674},{"date":"2023-03-05T01:43:43.000Z","value":638},{"date":"2023-03-12T01:41:34.000Z","value":2300},{"date":"2023-03-26T01:39:31.000Z","value":2289},{"date":"2023-04-02T01:31:05.000Z","value":5249},{"date":"2023-04-09T01:26:01.000Z","value":5524},{"date":"2023-04-16T01:29:13.000Z","value":5519},{"date":"2023-04-23T01:36:06.000Z","value":5572},{"date":"2023-04-30T01:35:38.000Z","value":5577},{"date":"2023-05-07T01:32:51.000Z","value":7327},{"date":"2023-05-14T01:36:03.000Z","value":7387},{"date":"2023-05-21T01:35:21.000Z","value":7375},{"date":"2023-05-28T01:39:52.000Z","value":7373},{"date":"2023-06-04T01:49:56.000Z","value":7062},{"date":"2023-06-11T01:47:32.000Z","value":5789},{"date":"2023-06-18T01:45:11.000Z","value":7383},{"date":"2023-06-25T01:50:12.000Z","value":7379},{"date":"2023-07-02T01:49:19.000Z","value":7375},{"date":"2023-07-09T02:34:45.000Z","value":14520},{"date":"2023-07-16T02:50:11.000Z","value":14326},{"date":"2023-07-23T01:39:24.000Z","value":12245},{"date":"2023-07-30T01:31:31.000Z","value":19773},{"date":"2023-08-06T02:28:00.000Z","value":11904},{"date":"2023-08-13T03:36:09.000Z","value":5518},{"date":"2023-08-20T03:39:10.416Z","value":4336}],"nmapGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"B"}],"nmapOpenPortsCount":[{"date":"2022-08-12T11:40:16.000Z","value":4}],"nmapOpenPortsGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2022-08-12T11:40:16.000Z","value":false}],"testsslExpireDate":[{"date":"2022-08-12T11:40:16.000Z","value":"2022-10-23T02:43:00.000Z"},{"date":"2022-09-25T02:17:35.000Z","value":"2022-12-22T01:51:00.000Z"},{"date":"2022-11-27T01:48:25.000Z","value":"2023-02-20T00:57:00.000Z"},{"date":"2023-01-22T01:36:38.000Z","value":"2023-04-21T00:02:00.000Z"},{"date":"2023-03-26T01:39:31.000Z","value":"2023-06-19T23:04:00.000Z"},{"date":"2023-05-21T01:35:21.000Z","value":"2023-08-18T22:09:00.000Z"},{"date":"2023-07-23T01:39:24.000Z","value":"2023-10-17T21:16:00.000Z"}],"testsslGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"A"}],"cookiesGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"F"},{"date":"2022-11-27T01:48:25.000Z","value":"A"},{"date":"2022-12-04T01:39:40.000Z","value":"F"},{"date":"2022-12-11T01:43:12.000Z","value":"A"},{"date":"2023-01-08T01:44:07.000Z","value":"F"},{"date":"2023-01-22T01:36:38.000Z","value":"A"},{"date":"2023-03-12T01:41:34.000Z","value":"F"},{"date":"2023-04-16T01:29:13.000Z","value":"A"},{"date":"2023-04-30T01:35:38.000Z","value":"F"},{"date":"2023-06-04T01:49:56.000Z","value":"A"},{"date":"2023-06-11T01:47:32.000Z","value":"F"},{"date":"2023-07-02T01:49:19.000Z","value":"B"},{"date":"2023-07-09T02:34:45.000Z","value":"F"},{"date":"2023-07-23T01:39:24.000Z","value":"A"},{"date":"2023-07-30T01:31:31.000Z","value":"F"}],"cookiesCount":[{"date":"2022-08-12T11:40:16.000Z","value":20},{"date":"2022-08-12T13:43:58.000Z","value":19},{"date":"2022-08-28T02:06:33.000Z","value":20},{"date":"2022-09-04T02:04:47.000Z","value":19},{"date":"2022-10-16T02:24:53.000Z","value":20},{"date":"2022-10-23T02:18:29.000Z","value":21},{"date":"2022-11-20T01:54:17.000Z","value":22},{"date":"2022-11-27T01:48:25.000Z","value":0},{"date":"2022-12-04T01:39:40.000Z","value":21},{"date":"2022-12-11T01:43:12.000Z","value":0},{"date":"2023-01-08T01:44:07.000Z","value":21},{"date":"2023-01-22T01:36:38.000Z","value":0},{"date":"2023-03-12T01:41:34.000Z","value":18},{"date":"2023-03-19T01:37:57.000Z","value":19},{"date":"2023-04-02T01:31:05.000Z","value":18},{"date":"2023-04-16T01:29:13.000Z","value":0},{"date":"2023-04-30T01:35:38.000Z","value":19},{"date":"2023-05-21T01:35:21.000Z","value":18},{"date":"2023-05-28T01:39:52.000Z","value":19},{"date":"2023-06-04T01:49:56.000Z","value":0},{"date":"2023-06-11T01:47:32.000Z","value":20},{"date":"2023-06-25T01:50:12.000Z","value":21},{"date":"2023-07-02T01:49:19.000Z","value":1},{"date":"2023-07-09T02:34:45.000Z","value":22},{"date":"2023-07-16T02:50:11.000Z","value":21},{"date":"2023-07-23T01:39:24.000Z","value":0},{"date":"2023-07-30T01:31:31.000Z","value":21},{"date":"2023-08-20T03:39:10.416Z","value":16}],"trackersGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"F"},{"date":"2022-11-27T01:48:25.000Z","value":"A"},{"date":"2022-12-04T01:39:40.000Z","value":"F"},{"date":"2022-12-11T01:43:12.000Z","value":"A"},{"date":"2023-01-08T01:44:07.000Z","value":"F"},{"date":"2023-01-22T01:36:38.000Z","value":"A"},{"date":"2023-03-12T01:41:34.000Z","value":"F"},{"date":"2023-04-16T01:29:13.000Z","value":"A"},{"date":"2023-04-30T01:35:38.000Z","value":"F"},{"date":"2023-06-04T01:49:56.000Z","value":"A"},{"date":"2023-06-11T01:47:32.000Z","value":"F"},{"date":"2023-07-02T01:49:19.000Z","value":"A"},{"date":"2023-07-09T02:34:45.000Z","value":"F"},{"date":"2023-07-23T01:39:24.000Z","value":"A"},{"date":"2023-07-30T01:31:31.000Z","value":"F"}],"trackersCount":[{"date":"2022-08-12T11:40:16.000Z","value":147},{"date":"2022-08-14T01:59:11.000Z","value":136},{"date":"2022-08-28T02:06:33.000Z","value":146},{"date":"2022-09-11T02:13:37.000Z","value":134},{"date":"2022-09-18T02:26:30.000Z","value":148},{"date":"2022-09-25T02:17:35.000Z","value":147},{"date":"2022-10-02T02:45:05.000Z","value":118},{"date":"2022-10-09T02:17:33.000Z","value":136},{"date":"2022-10-23T02:18:29.000Z","value":134},{"date":"2022-10-30T02:14:46.000Z","value":127},{"date":"2022-11-06T01:53:55.000Z","value":126},{"date":"2022-11-13T01:51:43.000Z","value":123},{"date":"2022-11-20T01:54:17.000Z","value":108},{"date":"2022-11-27T01:48:25.000Z","value":0},{"date":"2022-12-04T01:39:40.000Z","value":103},{"date":"2022-12-11T01:43:12.000Z","value":0},{"date":"2023-01-08T01:44:07.000Z","value":107},{"date":"2023-01-15T01:40:40.000Z","value":104},{"date":"2023-01-22T01:36:38.000Z","value":0},{"date":"2023-03-12T01:41:34.000Z","value":122},{"date":"2023-03-19T01:37:57.000Z","value":123},{"date":"2023-03-26T01:39:31.000Z","value":120},{"date":"2023-04-16T01:29:13.000Z","value":0},{"date":"2023-04-30T01:35:38.000Z","value":118},{"date":"2023-05-07T01:32:51.000Z","value":117},{"date":"2023-05-14T01:36:03.000Z","value":118},{"date":"2023-05-21T01:35:21.000Z","value":119},{"date":"2023-06-04T01:49:56.000Z","value":0},{"date":"2023-06-11T01:47:32.000Z","value":119},{"date":"2023-06-18T01:45:11.000Z","value":120},{"date":"2023-06-25T01:50:12.000Z","value":121},{"date":"2023-07-02T01:49:19.000Z","value":0},{"date":"2023-07-09T02:34:45.000Z","value":86},{"date":"2023-07-16T02:50:11.000Z","value":103},{"date":"2023-07-23T01:39:24.000Z","value":0},{"date":"2023-07-30T01:31:31.000Z","value":102},{"date":"2023-08-06T02:28:00.000Z","value":100},{"date":"2023-08-13T03:36:09.000Z","value":101},{"date":"2023-08-20T03:39:10.416Z","value":77}],"lighthouse_performance":[{"date":"2022-08-12T11:40:16.000Z","value":0},{"date":"2023-07-09T02:34:45.000Z","value":0.3155675888061523},{"date":"2023-07-16T02:50:11.000Z","value":0}],"lighthouse_performanceGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"F"},{"date":"2023-07-09T02:34:45.000Z","value":"E"},{"date":"2023-07-16T02:50:11.000Z","value":"F"}],"lighthouse_accessibility":[{"date":"2022-08-12T11:40:16.000Z","value":0.83},{"date":"2022-08-21T01:51:30.000Z","value":0.82},{"date":"2022-10-09T02:17:33.000Z","value":0.83},{"date":"2023-03-19T01:37:57.000Z","value":0.89},{"date":"2023-07-09T02:34:45.000Z","value":0.82},{"date":"2023-07-16T02:50:11.000Z","value":0.83}],"lighthouse_accessibilityGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"B"},{"date":"2023-03-19T01:37:57.000Z","value":"A"},{"date":"2023-07-09T02:34:45.000Z","value":"B"}],"lighthouse_best-practices":[{"date":"2022-08-12T11:40:16.000Z","value":1},{"date":"2022-08-21T01:51:30.000Z","value":0.92},{"date":"2022-10-23T02:18:29.000Z","value":0.83},{"date":"2022-10-30T02:14:46.000Z","value":0.92},{"date":"2023-03-19T01:37:57.000Z","value":0.83}],"lighthouse_best-practicesGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"A"},{"date":"2022-10-23T02:18:29.000Z","value":"B"},{"date":"2022-10-30T02:14:46.000Z","value":"A"},{"date":"2023-03-19T01:37:57.000Z","value":"B"}],"lighthouse_seo":[{"date":"2022-08-12T11:40:16.000Z","value":0.93},{"date":"2022-11-20T01:54:17.000Z","value":0.92},{"date":"2023-03-19T01:37:57.000Z","value":1},{"date":"2023-07-09T02:34:45.000Z","value":0.93}],"lighthouse_seoGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-08-12T11:40:16.000Z","value":0.3}],"lighthouse_pwaGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"E"}],"httpGrade":[{"date":"2022-08-12T13:43:58.000Z","value":"F"}],"declaration-a11y":[],"declaration-rgpd":[]},"https://www.salaisonsduvelay.com":{"404":[{"date":"2022-08-12T11:40:16.000Z","value":"A+"}],"nmapGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"F"}],"nmapOpenPortsCount":[{"date":"2022-08-12T11:40:16.000Z","value":7},{"date":"2023-01-08T01:44:07.000Z","value":6},{"date":"2023-05-14T01:36:03.000Z","value":7}],"nmapOpenPortsGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2022-08-12T11:40:16.000Z","value":false},{"date":"2022-10-02T02:45:05.000Z","value":true},{"date":"2022-10-16T02:24:53.000Z","value":false},{"date":"2022-12-18T01:37:12.000Z","value":true},{"date":"2023-01-08T01:44:07.000Z","value":false},{"date":"2023-03-05T01:43:43.000Z","value":true},{"date":"2023-03-19T01:37:57.000Z","value":false},{"date":"2023-05-14T01:36:03.000Z","value":true},{"date":"2023-06-04T01:49:56.000Z","value":false},{"date":"2023-07-30T01:31:31.000Z","value":true},{"date":"2023-08-13T03:36:09.000Z","value":false}],"testsslExpireDate":[{"date":"2022-08-12T11:40:16.000Z","value":"2022-10-30T04:36:00.000Z"},{"date":"2022-10-16T02:24:53.000Z","value":"2023-01-13T04:31:00.000Z"},{"date":"2023-01-08T01:44:07.000Z","value":"2023-03-29T05:28:00.000Z"},{"date":"2023-03-19T01:37:57.000Z","value":"2023-06-12T05:24:00.000Z"},{"date":"2023-06-04T01:49:56.000Z","value":"2023-08-26T04:21:00.000Z"},{"date":"2023-08-13T03:36:09.000Z","value":"2023-11-09T04:19:00.000Z"}],"testsslGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"A"}],"cookiesGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"C"},{"date":"2023-07-16T02:50:11.000Z","value":"B"},{"date":"2023-07-23T01:39:24.000Z","value":"E"},{"date":"2023-08-06T02:28:00.000Z","value":"B"},{"date":"2023-08-20T03:39:10.416Z","value":"E"}],"cookiesCount":[{"date":"2022-08-12T11:40:16.000Z","value":5},{"date":"2023-07-16T02:50:11.000Z","value":1},{"date":"2023-07-23T01:39:24.000Z","value":6},{"date":"2023-08-06T02:28:00.000Z","value":1},{"date":"2023-08-20T03:39:10.416Z","value":6}],"trackersGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"F"},{"date":"2023-07-16T02:50:11.000Z","value":"C"},{"date":"2023-07-23T01:39:24.000Z","value":"F"},{"date":"2023-08-06T02:28:00.000Z","value":"C"},{"date":"2023-08-20T03:39:10.416Z","value":"F"}],"trackersCount":[{"date":"2022-08-12T11:40:16.000Z","value":22},{"date":"2022-11-06T01:53:55.000Z","value":23},{"date":"2022-11-13T01:51:43.000Z","value":22},{"date":"2023-04-02T01:31:05.000Z","value":34},{"date":"2023-04-09T01:26:01.000Z","value":33},{"date":"2023-05-07T01:32:51.000Z","value":32},{"date":"2023-05-14T01:36:03.000Z","value":31},{"date":"2023-05-21T01:35:21.000Z","value":28},{"date":"2023-07-02T01:49:19.000Z","value":29},{"date":"2023-07-09T02:34:45.000Z","value":30},{"date":"2023-07-16T02:50:11.000Z","value":3},{"date":"2023-07-23T01:39:24.000Z","value":30},{"date":"2023-08-06T02:28:00.000Z","value":3},{"date":"2023-08-20T03:39:10.416Z","value":30}],"lighthouse_performance":[{"date":"2022-08-12T11:40:16.000Z","value":0.5894693374633789},{"date":"2022-08-12T13:43:58.000Z","value":0.5888099670410156},{"date":"2022-08-14T01:59:11.000Z","value":0.5893560409545898},{"date":"2022-08-21T01:51:30.000Z","value":0.588741683959961},{"date":"2022-08-28T02:06:33.000Z","value":0.5886060714721679},{"date":"2022-09-04T02:04:47.000Z","value":0.6395954132080078},{"date":"2022-09-11T02:13:37.000Z","value":0.6394540786743164},{"date":"2022-09-18T02:26:30.000Z","value":0.6393280029296875},{"date":"2022-09-25T02:17:35.000Z","value":0.6366134643554687},{"date":"2022-10-02T02:45:05.000Z","value":0.6393337249755859},{"date":"2022-10-09T02:17:33.000Z","value":0.6390140533447266},{"date":"2022-10-16T02:24:53.000Z","value":0.6387451171875},{"date":"2022-10-23T02:18:29.000Z","value":0.6388721466064453},{"date":"2022-10-30T02:14:46.000Z","value":0.5908393859863281},{"date":"2022-11-06T01:53:55.000Z","value":0.5883420944213867},{"date":"2022-11-13T01:51:43.000Z","value":0.6353212356567383},{"date":"2022-11-20T01:54:17.000Z","value":0.6378217697143554},{"date":"2022-11-27T01:48:25.000Z","value":0.6274909973144531},{"date":"2022-12-04T01:39:40.000Z","value":0.5905452728271484},{"date":"2022-12-11T01:43:12.000Z","value":0.6381193161010742},{"date":"2022-12-18T01:37:12.000Z","value":0.6378381729125977},{"date":"2022-12-25T01:35:54.000Z","value":0.6377782821655273},{"date":"2023-01-08T01:44:07.000Z","value":0.6343244552612305},{"date":"2023-01-15T01:40:40.000Z","value":0.6334833145141602},{"date":"2023-01-22T01:36:38.000Z","value":0.6301342010498047},{"date":"2023-01-29T01:45:55.000Z","value":0.6306922912597657},{"date":"2023-02-05T01:40:47.000Z","value":0.630587387084961},{"date":"2023-02-12T01:40:56.000Z","value":0.6307762145996094},{"date":"2023-02-19T01:37:52.000Z","value":0.6302791595458984},{"date":"2023-02-26T01:41:00.000Z","value":0.6300252914428711},{"date":"2023-03-05T01:43:43.000Z","value":0.6300224304199219},{"date":"2023-03-12T01:41:34.000Z","value":0.630337142944336},{"date":"2023-03-19T01:37:57.000Z","value":0.6300277709960938},{"date":"2023-03-26T01:39:31.000Z","value":0.6298532485961914},{"date":"2023-04-02T01:31:05.000Z","value":0.29564590454101564},{"date":"2023-04-09T01:26:01.000Z","value":0.29742069244384767},{"date":"2023-04-16T01:29:13.000Z","value":0.296319580078125},{"date":"2023-04-23T01:36:06.000Z","value":0.2959321975708008},{"date":"2023-04-30T01:35:38.000Z","value":0.29618186950683595},{"date":"2023-05-07T01:32:51.000Z","value":0.3006734848022461},{"date":"2023-05-14T01:36:03.000Z","value":0.30167694091796876},{"date":"2023-05-21T01:35:21.000Z","value":0.30202541351318357},{"date":"2023-05-28T01:39:52.000Z","value":0.302325439453125},{"date":"2023-06-04T01:49:56.000Z","value":0.30211524963378905},{"date":"2023-06-11T01:47:32.000Z","value":0.3021059036254883},{"date":"2023-06-18T01:45:11.000Z","value":0.3011655807495117},{"date":"2023-06-25T01:50:12.000Z","value":0.30001087188720704},{"date":"2023-07-02T01:49:19.000Z","value":0.2964607238769531},{"date":"2023-07-09T02:34:45.000Z","value":0.2966434478759766},{"date":"2023-07-23T01:39:24.000Z","value":0.26581516265869143},{"date":"2023-07-30T01:31:31.000Z","value":0.26506500244140624},{"date":"2023-08-20T03:39:10.416Z","value":0.26434173583984377}],"lighthouse_performanceGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"C"},{"date":"2023-04-02T01:31:05.000Z","value":"E"}],"lighthouse_accessibility":[{"date":"2022-08-12T11:40:16.000Z","value":0.72},{"date":"2022-08-12T13:43:58.000Z","value":0.75},{"date":"2022-09-04T02:04:47.000Z","value":0.72},{"date":"2023-07-09T02:34:45.000Z","value":0.62},{"date":"2023-07-23T01:39:24.000Z","value":0.61}],"lighthouse_accessibilityGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"B"},{"date":"2023-07-09T02:34:45.000Z","value":"C"}],"lighthouse_best-practices":[{"date":"2022-08-12T11:40:16.000Z","value":0.67},{"date":"2022-09-25T02:17:35.000Z","value":0.75},{"date":"2022-10-02T02:45:05.000Z","value":0.67},{"date":"2022-11-13T01:51:43.000Z","value":0.75},{"date":"2022-11-20T01:54:17.000Z","value":0.67},{"date":"2023-01-08T01:44:07.000Z","value":0.75},{"date":"2023-01-15T01:40:40.000Z","value":0.67},{"date":"2023-01-22T01:36:38.000Z","value":0.75},{"date":"2023-04-02T01:31:05.000Z","value":0.67}],"lighthouse_best-practicesGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"B"}],"lighthouse_seo":[{"date":"2022-08-12T11:40:16.000Z","value":1},{"date":"2023-07-09T02:34:45.000Z","value":0.92}],"lighthouse_seoGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-08-12T11:40:16.000Z","value":0.3}],"lighthouse_pwaGrade":[{"date":"2022-08-12T11:40:16.000Z","value":"E"}],"httpGrade":[{"date":"2022-08-14T01:59:11.000Z","value":"F"},{"date":"2023-07-16T02:50:11.000Z","value":"D-"},{"date":"2023-07-23T01:39:24.000Z","value":"F"},{"date":"2023-08-06T02:28:00.000Z","value":"D-"},{"date":"2023-08-20T03:39:10.416Z","value":"F"}],"declaration-a11y":[],"declaration-rgpd":[]},"https://lesmurmuresdulignon.com/":{"404":[{"date":"2022-10-02T02:45:05.000Z","value":"A+"}],"httpGrade":[{"date":"2022-10-02T02:45:05.000Z","value":"F"}],"nmapGrade":[{"date":"2022-10-02T02:45:05.000Z","value":"C"}],"nmapOpenPortsCount":[{"date":"2022-10-02T02:45:05.000Z","value":8}],"nmapOpenPortsGrade":[{"date":"2022-10-02T02:45:05.000Z","value":"F"}],"testsslExpireSoon":[{"date":"2022-10-02T02:45:05.000Z","value":true}],"testsslExpireDate":[{"date":"2022-10-02T02:45:05.000Z","value":"2022-10-29T20:07:00.000Z"}],"testsslGrade":[{"date":"2022-10-02T02:45:05.000Z","value":"A+"}],"cookiesGrade":[{"date":"2022-10-02T02:45:05.000Z","value":"C"}],"cookiesCount":[{"date":"2022-10-02T02:45:05.000Z","value":5}],"trackersGrade":[{"date":"2022-10-02T02:45:05.000Z","value":"F"}],"trackersCount":[{"date":"2022-10-02T02:45:05.000Z","value":36}],"lighthouse_performance":[{"date":"2022-10-02T02:45:05.000Z","value":0.3842662811279297}],"lighthouse_performanceGrade":[{"date":"2022-10-02T02:45:05.000Z","value":"D"}],"lighthouse_accessibility":[{"date":"2022-10-02T02:45:05.000Z","value":0.89}],"lighthouse_accessibilityGrade":[{"date":"2022-10-02T02:45:05.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-10-02T02:45:05.000Z","value":0.75}],"lighthouse_best-practicesGrade":[{"date":"2022-10-02T02:45:05.000Z","value":"B"}],"lighthouse_seo":[{"date":"2022-10-02T02:45:05.000Z","value":0.99}],"lighthouse_seoGrade":[{"date":"2022-10-02T02:45:05.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-10-02T02:45:05.000Z","value":0.3}],"lighthouse_pwaGrade":[{"date":"2022-10-02T02:45:05.000Z","value":"E"}],"declaration-a11y":[],"declaration-rgpd":[]}}'),k=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d(),{children:(0,l.jsx)("title",{children:"Evolutions - Dashlord"})}),(0,l.jsx)(G,{trends:y})]})}},18121:function(e,a,t){"use strict";t.d(a,{s:function(){return i}});var l=t(85893),u=(t(67294),t(94184)),d=t.n(u),v=t(659),r=t(73973),T=t(83206),Z=t(41664),s=t.n(Z),o=t(75670),n=t.n(o),i=function(e){var a=e.title,t=e.children,u=e.info,Z=e.url,o=e.urlText,i=void 0===o?"":o,c=e.className,h=e.isExternal,p=void 0!==h&&h;return(0,l.jsxs)("div",{className:d()(n().container,c),children:[(0,l.jsxs)("div",{className:n().banner,children:[(0,l.jsx)("h5",{className:n().mainTitle,children:a}),u&&(0,l.jsx)(v.Z,{overlay:u,children:(0,l.jsx)(r.Z,{size:20,style:{marginLeft:5,cursor:"pointer"}})}),Z&&(p?(0,l.jsx)("a",{style:{float:"right"},href:Z,target:"_blank",rel:"noreferrer noopener",children:i}):(0,l.jsx)(s(),{prefetch:!1,href:Z,children:(0,l.jsxs)("a",{style:{float:"right"},children:[i,(0,l.jsx)(T.Z,{})]})}))]}),(0,l.jsx)("div",{className:n().body,children:t})]})}},75670:function(e){e.exports={container:"panel_container__s3lQL",banner:"panel_banner__IDWUZ",mainTitle:"panel_mainTitle__N5MWp",body:"panel_body___c3aS"}}},function(e){e.O(0,[717,774,888,179],(function(){return a=21105,e(e.s=a);var a}));var a=e.O();_N_E=a}]);