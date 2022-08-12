(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[389],{50415:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/url/[...url]",function(){return t(58352)}])},58352:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return Xe},default:function(){return Qe}});var n=t(85893),i=t(9008),a=t.n(i),s=t(74041),l=t(41799),o=t(69396),c=t(67294),u=t(41027),d=t(34588),m=t(19589),p=t(73973),f=t(49384),h=t(84517),x=t(18121),g=t(20836),b=function(e){var r=e.score_modifier,t=r<-50||r<-30?"danger":r<-20?"warning":r<-10?"info":"success";return(0,n.jsx)(h.Z,{className:"w-100",variant:t,children:r})},v={"content-security-policy":(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:"https://owasp.org/www-community/controls/Content_Security_Policy",children:"Doc Content Security Policy"}),". L'extension"," ",(0,n.jsx)("a",{href:"https://github.com/april/laboratory",rel:"noopener noreferrer",target:"_blank",children:"github.com/april/laboratory"})," ","permet de g\xe9n\xe9rer la CSP pour votre application."]}),"x-frame-options":(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:"https://developer.mozilla.org/fr/docs/Web/HTTP/Headers/X-Frame-Options",children:"Doc header X-Frame-Options"}),"."]}),"strict-transport-security":(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security",children:"Doc header Strict-Transport-Security (HSTS)"}),"."]}),"x-content-type-options":(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:"https://developer.mozilla.org/fr/docs/Web/HTTP/Headers/X-Content-Type-Options",children:"Doc header X-Content-Type-Options"}),"."]}),"x-xss-protection":(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection",children:"Doc header X-XSS-Protection"}),"."]}),cookies:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:"https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html#cookies",children:"OWASP Session Management Cheat Sheet"}),"."]}),"subresource-integrity":(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("a",{rel:"noopener noreferrer",target:"_blank",href:"https://developer.mozilla.org/fr/docs/Web/Security/Subresource_Integrity",children:"Doc Subresource Integrity"}),"."]})},j=[{name:"impact",label:"Impact",render:function(e){return(0,n.jsx)(b,(0,l.Z)({},e))}},{name:"score_description",label:"Description"},{name:"documentation",label:"Documentation",render:function(e){var r=e.name;return v[r]||"-"}}],y=function(e){var r=e.data;if(!r.url)return null;var t=r&&"https://observatory.mozilla.org/analyze/".concat((0,f.p5)(r.url.replace(/^(https?:\/\/[^/]+).*/,"$1")))||null,i=Object.keys(r.details).filter((function(e){return!r.details[e].pass})).map((function(e){return r.details[e]}));return i.sort((function(e,r){return e.score_modifier-r.score_modifier})),t?(0,n.jsxs)(x.s,{title:"Mozilla HTTP observatory",url:t,urlText:"Rapport d\xe9taill\xe9",isExternal:!0,children:[(0,n.jsxs)("h3",{children:["Scan Summary : ",(0,n.jsx)(g.G,{small:!0,grade:r.grade})]}),i.length&&(0,n.jsx)(s.Table,{rowKey:"name",columns:j,data:i})||null]}):(0,n.jsx)(n.Fragment,{})},_=t(10797),w=t(5152),T=t.n(w)()((function(){return Promise.all([t.e(500),t.e(429)]).then(t.bind(t,22429))}),{loadableGenerated:{webpack:function(){return[22429]}},ssr:!1}),k=["#ff6666","#ffce00","#00b353"],S=function(e){var r=(0,_.Z)(e.segmentColors||k);return e.reverseColors&&r.reverse(),(0,n.jsx)("div",{style:{background:"#FFF"},children:(0,n.jsx)(T,(0,o.Z)((0,l.Z)({forceRender:!0},e),{segmentColors:r}))})},A=t(63613),N=t(81493),I=t.n(N),C=t(91521),Z=t.n(C),F=function(e){var r=e.children,t=e.title,i=e.value;return(0,n.jsxs)("div",{className:Z().card,children:[r,t&&(0,n.jsx)("div",{className:Z().cardTitle,children:t}),i&&(0,n.jsx)("div",{className:Z().cardValue,children:i})]})},L=function(e){var r=0,t=0,n=e;return n>6e4&&(n-=6e4*(r=Math.floor(n/6e4))),n>1e3&&(n-=1e3*(t=Math.floor(n/1e3))),r>0?"".concat(r,"min ").concat((t/100).toFixed(),"s"):"".concat(t,".").concat((n/100).toFixed(),"s")},R=function(e){var r=1e3,t=0,n=0,i=e;return i>1e6&&(i-=(t=Math.floor(i/1e6))*r*r),i>r&&(i-=(n=Math.floor(i/r))*r),t>0?"".concat(t,".").concat((n/100).toFixed(),"Mb"):"".concat(n,".").concat((i/100).toFixed(),"Kb")},D=function(e){var r=e.data,t=e.url,i=Array.isArray(r)&&r||[r].filter((function(e){return!!e.audits.metrics.details})),a=["accessibility","performance","seo","best-practices"];return(0,n.jsxs)(x.s,{title:"LightHouse",info:"Informations collect\xe9es par l'outil Google LightHouse",children:[(0,n.jsx)(s.Row,{children:(0,n.jsx)(s.Col,{children:(0,n.jsx)(A.D,{className:I().accesibility})})}),i.map((function(e){e.categories.performance.score=function(e){var r,t,n,i,a=(null===(r=e.audits.diagnostics.details)||void 0===r?void 0:r.items)&&(null===(t=e.audits.diagnostics.details)||void 0===t?void 0:t.items[0].numRequests),s=(null===(n=e.audits.diagnostics.details)||void 0===n?void 0:n.items)&&(null===(i=e.audits.diagnostics.details)||void 0===i?void 0:i.items[0].totalByteWeight),l=1048576,o=100;return a>50&&(o-=Math.min(50,5*(a-50))),s>l&&(o-=Math.min(50,(s-l)/1048576*20)),Math.max(0,o/100)}(e);var r={"First contentful Paint":e.audits.metrics.details&&e.audits.metrics.details.items&&L(e.audits.metrics.details.items[0].firstContentfulPaint),"Time to interactive":e.audits.metrics.details&&e.audits.metrics.details.items&&L(e.audits.metrics.details.items[0].interactive),"Total requests":e.audits.diagnostics.details&&e.audits.diagnostics.details.items&&e.audits.diagnostics.details.items[0].numRequests,"Total weight":e.audits.diagnostics.details&&e.audits.diagnostics.details.items&&R(e.audits.diagnostics.details.items[0].totalByteWeight)},i="".concat(t,"/lhr-").concat((0,f.r3)(e.requestedUrl),".html");return(0,n.jsxs)(x.s,{title:e.requestedUrl,info:"Informations collect\xe9es par l'outil Google LightHouse",urlText:"Rapport LightHouse",url:i,isExternal:!0,children:[(0,n.jsx)(s.Row,{children:a.map((function(r){var t=e.categories[r],i=t.score;return!Number.isNaN(i)&&(0,n.jsx)(s.Col,{n:"12 sm-12 md-6 lg-3",className:"fr-mb-2w",children:(0,n.jsx)(F,{title:t.title,value:"".concat((100*i).toFixed(),"%"),children:(0,n.jsx)(S,{width:180,height:120,value:100*i,minValue:0,maxValue:100,segments:3,currentValueText:""})})},t.id)||null}))}),(0,n.jsx)(s.Row,{children:Object.keys(r).map((function(e){return(0,n.jsx)(s.Col,{n:"12 sm-12 md-6 lg-3",className:"fr-mb-2w",children:(0,n.jsx)(F,{title:e,value:r[e]})},e)}))})]},e.requestedUrl)}))]})},V=function(e){var r=e.info&&e.info.severity||"critical",t="critical"===r||"high"===r?"danger":"medium"===r?"warning":"low"===r?"info":"success";return(0,n.jsx)(h.Z,{className:"w-100",variant:t,children:r})},M="info,low,medium,high,critical".split(","),P=function(e,r){return M.indexOf(e.info.severity)-M.indexOf(r.info.severity)},q=[{name:"severity",label:"S\xe9verit\xe9",render:function(e){return(0,n.jsx)(V,(0,l.Z)({},e))}},{name:"name",label:"Name",render:function(e){return e.info.name}},{name:"matcher-name",label:"Matcher",render:function(e){return(0,n.jsx)("a",{href:e["template-url"],target:"_blank",rel:"noopener noreferrer",children:e["matcher-name"]||e["template-id"]})}}],E=function(e){var r=e.data;return r.sort(P),r.length&&(0,n.jsx)(x.s,{title:"Nuclei",info:"D\xe9tection d'erreurs de configuration et vuln\xe9rabilit\xe9s",children:(0,n.jsx)(s.Table,{rowKey:function(e){return e.templateID+e.matcher_name},columns:q,data:r})})||null},O=function(e,r){var t=parseInt(r.riskcode)-parseInt(e.riskcode);return 0===t?parseInt(r.confidence)-parseInt(e.confidence):t},H=function(e){var r=e.riskcode,t="0"===r||"1"===r?"info":"2"===r?"warning":"3"===r?"danger":"info";return(0,n.jsx)(h.Z,{className:"w-100",variant:t,children:e.riskdesc})},U=[{name:"risk",label:"Risk/Confidence",render:function(e){return(0,n.jsx)(H,(0,l.Z)({},e))}},{name:"name",label:"Name"}],z=function(e){var r=e.data,t=e.url,i=r&&r.site&&r.site.flatMap((function(e){return e.alerts}))||[];return i.sort(O),i.length&&(0,n.jsx)(x.s,{isExternal:!0,title:"Scan OWASP",url:t,urlText:"Rapport d\xe9taill\xe9",info:"Scan passif de vuln\xe9rabili\xe9s ZAP OWASP baseline",children:(0,n.jsx)(s.Table,{columns:U,data:i,rowKey:"name"})})||null},G=t(11510),W=["INFO","OK","LOW","MEDIUM","HIGH","CRITICAL"],K=function(e){return function(r,t,n){return!n.find((function(n,i){return i<t&&n[e]===r[e]}))}},B=function(e){var r,t=e.data,i=e.url,a=t.find((function(e){return"overall_grade"===e.id})),c=t&&a&&a.finding;t.map((function(e){return(0,o.Z)((0,l.Z)({},e),{severity_value:(r=e.severity,W.indexOf(r))});var r})).sort((r="severity_value",function(e,t){return e[r]>t[r]?1:e[r]<t[r]?-1:0})).reverse();var u=t.filter((function(e){return 0===e.id.indexOf("grade_cap_reason_")})).reverse(),d=t.find((function(e){return"cert_notAfter"===e.id})),m=t.find((function(e){return"intermediate_cert_notAfter <#1>"===e.id})),p=null;d&&(p=m?Math.min(new Date(d.finding).getTime(),new Date(m.finding).getTime()):new Date(d.finding).getTime());var f=p&&(new Date).getTime()+2592e6>p;return c&&(0,n.jsx)(x.s,{title:"SSL",info:"Informations sur la qualit\xe9 des certificats SSL via testssl.sh",url:i,urlText:"Rapport d\xe9taill\xe9",isExternal:!0,children:(0,n.jsx)(s.Row,{children:(0,n.jsxs)(s.Col,{children:[(0,n.jsxs)("h3",{children:["Scan Summary : ",(0,n.jsx)(g.G,{small:!0,grade:c})]}),u.length>0&&(0,n.jsx)("br",{}),u.filter(K("finding")).map((function(e){return(0,n.jsx)(s.Alert,{type:"info",title:e.finding},e.finding)})),p&&(0,n.jsxs)("h4",{children:[(0,n.jsx)("br",{}),"Expiration : ",(0,G.Z)(p,"dd/MM/yyyy"),f&&" \u26a0\ufe0f"]})]})})})||null},X=t(25813),Q=[{name:"name",label:"Cookies"},{name:"domain",label:"Domaine"},{name:"httpOnly",label:"HTTP Only",render:function(e){return e.httpOnly?"\u2714\ufe0f":"\u274c"}},{name:"secure",label:"Secure",render:function(e){return e.secure?"\u2714\ufe0f":"\u274c"}}],$=function(e){var r=e.cookies;return r&&r.length&&(0,n.jsx)(s.Table,{rowKey:"name",columns:Q,data:r})||null},J=[{name:"type",label:"Type"},{name:"url",label:"URL",render:function(e){return function(e){return(0,n.jsx)("a",{href:e,children:"".concat((0,f.p5)(e).substring(0,25),"...")})}(e.url)}},{name:"details",label:"Rem\xe9diation",render:function(e){var r=e.details;return r&&r.message}}],Y=function(e){var r,t=e.trackers;return t&&t.length&&(0,n.jsx)(s.Table,{columns:J,data:t.filter((r=function(e,r){return"unknown"!==e.type&&e.type||r},function(e,t,n){return!n.find((function(n,i){return i<t&&r(n,t)===r(e,t+1)}))})),rowKey:function(e){return e.type+e.url}})||null},ee=[{name:"flag",label:"Flag",render:function(e){if(e.geoip&&e.geoip.country){var r=X.ZP[e.geoip.country.iso_code];return(0,n.jsx)(r,{style:{width:60},title:e.geoip.country.names.fr})}return null}},{name:"hostname",label:"Hostname"},{name:"ip",label:"IP"},{name:"city",label:"City",render:function(e){return e.geoip&&e.geoip.city&&e.geoip.city.names.fr||"?"}},{name:"country",label:"Country",render:function(e){return e.geoip&&e.geoip.country&&e.geoip.country.names.fr||"?"}}],re=function(e){var r,t=e.endpoints;return t&&t.length&&(0,n.jsx)(s.Table,{columns:ee,data:t.sort((r=function(e){var r,t,n;return(null===(r=e.geoip)||void 0===r||null===(t=r.country)||void 0===t||null===(n=t.names)||void 0===n?void 0:n.fr)||""},function(e,t){return r(e).localeCompare(r(t))})),rowKey:"ip"})||null},te=function(e){var r,t,i=e.data,a=[];i.cookies&&i.cookies.length&&(r=a).push.apply(r,(0,_.Z)(i.cookies));i.trackers&&i.trackers.length&&(t=a).push.apply(t,(0,_.Z)(i.trackers));return a.length&&(0,n.jsxs)(x.s,{title:"Scripts tiers et cookies",info:"Scripts tiers embarqu\xe9s dans la page web",children:[(0,n.jsx)($,{cookies:i.cookies}),(0,n.jsx)(Y,{trackers:i.trackers}),(0,n.jsx)(re,{endpoints:i.endpoints})]})||(0,n.jsx)(x.s,{title:"Third parties",info:"Scripts tiers embarqu\xe9s dans la page web",children:(0,n.jsx)(s.Alert,{type:"success",title:"",description:"Aucun script third-party detect\xe9"})})},ne=[{name:"name",label:"Name"},{name:"categories",label:"Categories",render:function(e){var r=e.categories;return r&&r.map((function(e){return e.name})).join(", ")}},{name:"website",label:"Website",render:function(e){var r=e.website;return(0,n.jsx)("a",{href:r,target:"_blank",rel:"nopoener noreferrer",children:r})}}],ie=function(e){var r=e.data;return r&&r.technologies&&r.technologies.length&&(0,n.jsx)(x.s,{title:"Wappalyzer",info:"D\xe9tection des technologies utilis\xe9es",children:(0,n.jsx)(s.Table,{rowKey:"name",columns:ne,data:r.technologies})})||null},ae=t(75830),se=t(83587),le=t.n(se),oe=function(e){var r,t=e.data,i=e.url,a=t&&"https://updown.io/".concat(t.token)||null;return a&&(0,f.p5)(t.url)===(0,f.p5)(i)&&(0,n.jsxs)(x.s,{title:"Disponibilit\xe9 et temps de r\xe9ponse",info:"Informations collect\xe9es par updown.io",url:a,urlText:"Statistiques d\xe9taill\xe9es",isExternal:!0,children:[(0,n.jsxs)(s.Row,{children:[(0,n.jsx)(s.Col,{n:"12 sm-12 md-4",className:"fr-mb-3w",children:(0,n.jsx)(F,{title:"Taux de disponibilit\xe9 sur un mois glissant",value:"".concat(t.uptime,"%"),children:(0,n.jsx)(S,{width:200,height:120,value:t.uptime,minValue:0,maxValue:100,segments:3,currentValueText:""})})}),void 0!==(null===t||void 0===t||null===(r=t.metrics)||void 0===r?void 0:r.apdex)&&(0,n.jsx)(s.Col,{n:"12 sm-12 md-4",className:"fr-mb-3w",children:(0,n.jsx)(F,{title:"APDEX: Application Performance Index",value:"".concat(t.metrics.apdex),children:(0,n.jsx)(S,{width:200,height:120,value:t.metrics.apdex,minValue:0,maxValue:1,segments:3,currentValueText:""})})}),t.metrics&&t.metrics.timings&&(0,n.jsx)(s.Col,{n:"12 sm-12 md-4",className:"fr-mb-3w",children:(0,n.jsx)(F,{title:"Temps de r\xe9ponse",value:"".concat(t.metrics.timings.total,"ms"),children:(0,n.jsx)(S,{width:200,height:120,value:Math.max(0,t.metrics.timings.total),minValue:0,maxValue:1e3,customSegmentStops:[0,150,500,1e3],reverseColors:!0,currentValueText:""})})})]}),(0,n.jsx)(s.Row,{className:le().left,children:(0,n.jsx)(s.Col,{n:"12",className:"fr-mb-3w",children:t.ssl&&(0,n.jsxs)("div",{style:{padding:10},children:[(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Le certificat SSL est"," ",t.ssl.valid?(0,n.jsx)(g.G,{small:!0,grade:"A+",label:"valide"}):(0,n.jsx)(g.G,{small:!0,grade:"F",label:"invalide"})," ","et expire le"," ",(0,n.jsx)("strong",{children:(0,G.Z)(new Date(t.ssl.expires_at),"dd/MM/yyyy",{locale:ae.Z})})]})})})]})||(0,n.jsx)(x.s,{title:"Temps de r\xe9ponse",info:"Informations collect\xe9es par updown.io",children:(0,n.jsx)(s.Alert,{variant:"success",children:"Aucune donn\xe9e updown.io associ\xe9e"})})},ce=function(e,r){var t=new Map;return t.set("CRITICAL",3),t.set("HIGH",2),t.set("MODERATE",1),t.set("LOW",0),t.get(r.securityVulnerability.severity)-t.get(e.securityVulnerability.severity)},ue=function(e){var r=e.securityVulnerability.severity,t="LOW"===r?"info":"MODERATE"===r?"warning":"HIGH"===r||"CRITICAL"===r?"danger":"info";return(0,n.jsx)(h.Z,{className:"w-100",variant:t,children:r})},de=[{name:"severity",label:"S\xe9v\xe9rit\xe9",render:function(e){return(0,n.jsx)(ue,(0,l.Z)({},e))}},{name:"dependancy",label:"d\xe9pendance vuln\xe9rable",render:function(e){return e.securityVulnerability.package.name}},{name:"vulnerabilities",label:"Vuln\xe9rabilit\xe9s",render:function(e){return e.securityVulnerability.advisory.references.map((function(e,r){return(0,n.jsxs)("p",{children:[(0,n.jsx)("a",{target:"_blank",href:e.url,rel:"noopener noreferrer",children:(0,f.Q_)(e.url)}),(0,n.jsx)("br",{})]},(0,f.Q_)(e.url)+r)}))}}],me=function(e){var r=e.data,t=(e.url,r&&r.vulnerabilityAlerts.totalCount>0?r.vulnerabilityAlerts.nodes:[]);return r.vulnerabilityAlerts.nodes.sort(ce),r.vulnerabilityAlerts.totalCount>0&&(0,n.jsxs)(x.s,{title:"Alertes Dependabot",url:"".concat(r.url,"/security/dependabot"),urlText:"Alertes dependabot",isExternal:!0,info:(0,n.jsxs)("span",{children:["Vuln\xe9rabilit\xe9s des d\xe9pendances du d\xe9p\xf4t Github"," ",r.url.replace(/^https:\/\/github\.com\/(.*)/,"$1")]}),children:[(0,n.jsxs)("h3",{children:["Scan Summary : ",(0,n.jsx)(g.G,{small:!0,grade:r.grade})]}),(0,n.jsx)(s.Table,{columns:de,data:t,rowKey:"createdAt"})]})||null},pe=function(e,r){var t=new Map;return t.set("error",1),t.set("warning",0),t.get(r.rule.severity)-t.get(e.rule.severity)},fe=function(e){var r=e.rule.severity,t="warning"===r?"warning":"error"===r?"danger":"info";return(0,n.jsx)(h.Z,{className:"w-100",variant:t,children:r})},he=[{name:"severity",label:"S\xe9v\xe9rit\xe9",render:function(e){return(0,n.jsx)(fe,(0,l.Z)({},e))}},{name:"rule",label:"R\xe8gle",render:function(e){return e.rule.name}},{name:"description",label:"Description",render:function(e){return(0,n.jsx)("a",{target:"_blank",href:e.html_url,rel:"noopener noreferrer",children:e.rule.description})}}],xe=function(e){var r=e.data,t=(e.url,r&&r.alerts.length>0?r.alerts:[]);return t.sort(pe),t.length>0&&(0,n.jsxs)(x.s,{title:"CodeScan",url:"".concat(r.url,"/security/code-scanning"),urlText:"Alertes CodeQL",isExternal:!0,info:(0,n.jsxs)("span",{children:["Scan statique du code du d\xe9p\xf4t Github"," ",r.url.replace(/^https?:\/\/[^/]+\/(.*)/,"$1")]}),children:[(0,n.jsxs)("h3",{children:["Scan Summary : ",(0,n.jsx)(g.G,{small:!0,grade:r.grade})]}),(0,n.jsx)(s.Table,{columns:he,data:t,rowKey:"rule"})]})||null},ge=function(e,r){return e+Number.parseFloat(r.cvss)},be=function(e,r){return r.service.vulnerabilities.reduce(ge,0)-e.service.vulnerabilities.reduce(ge,0)},ve=function(e){return e.vulnerabilities.filter((function(e){return e.is_exploit})).length>0},je=function(e){var r=e.vulnerabilities.reduce(ge,0),t=!ve(e)&&r>5*e.vulnerabilities.length?"warning":ve(e)&&r>5*e.vulnerabilities.length?"danger":"info";return(0,n.jsx)(h.Z,{className:"w-100",variant:t,children:t})},ye=[{name:"severty",label:"S\xe9v\xe9rit\xe9",render:function(e){return(0,n.jsx)(je,(0,l.Z)({},e))}},{name:"service",label:"Service \xe0 l'\xe9coute",render:function(e){return"".concat(e.name," (port:").concat(e.id,")")}},{name:"vulnerability",label:"Vuln\xe9rabilit\xe9s",render:function(e){return e.vulnerabilities.map((function(e){return(0,n.jsxs)("div",{children:[(0,n.jsx)("a",{target:"_blank",href:"https://vulners.com/cve/".concat(e.id),rel:"noopener noreferrer",children:e.id}),(0,n.jsx)("br",{})]},e.id)}))}}],_e=function(e){var r=e.data,t=e.url,i=r&&r.open_ports.length>0?r.open_ports:[];return r.open_ports.sort(be),r.open_ports.length>0&&(0,n.jsxs)(x.s,{title:"Nmap",url:t,urlText:"Rapport d\xe9taill\xe9",isExternal:!0,info:(0,n.jsxs)("span",{children:["Scan des vuln\xe9rabili\xe9s nmap"," ",(0,n.jsx)("a",{style:{color:"white"},href:"https://".concat(r.host),target:"_blank",rel:"noopener noreferrer",children:"https://".concat(r.host)})]}),children:[(0,n.jsxs)("h3",{children:["Scan Summary : ",(0,n.jsx)(g.G,{small:!0,grade:r.grade})]}),(0,n.jsx)(s.Table,{columns:ye,data:i.map((function(e){return e.service})),rowKey:"id"})]})||null},we=[{name:"link",label:"URL"}],Te=function(e){var r=e.data;return r&&r.length&&(0,n.jsx)(x.s,{title:"Erreurs 404",info:"Pages introuvables",children:(0,n.jsx)(s.Table,{rowKey:"link",columns:we,data:r})})||null},ke="UNKNOWN,LOW,MEDIUM,HIGH,CRITICAL".split(","),Se=function(e,r){return ke.indexOf(r.Severity)-ke.indexOf(e.Severity)},Ae=function(e){var r=e.Severity,t="LOW"===r||"MEDIUM"===r?"info":"HIGH"===r?"warning":"CRITICAL"===r?"danger":"info";return(0,n.jsx)(h.Z,{className:"w-100",variant:t,children:e.Severity})},Ne=[{name:"Severity",label:"S\xe9v\xe9rit\xe9",render:function(e){return(0,n.jsx)(Ae,(0,l.Z)({},e))}},{name:"VulnerabilityID",label:"Vulnerability ID",render:function(e){return(0,n.jsx)("a",{target:"_blank",rel:"noreferrer noopener",href:e.PrimaryURL,children:e.VulnerabilityID})}},{name:"Title",label:"Titre"}],Ie=function(e){var r=e.data,t=e.url;return(0,n.jsx)(n.Fragment,{children:r.length&&r.filter((function(e){return e&&e.ArtifactName})).map((function(e){var r=e.Results&&e.Results.length&&e.Results.map((function(e){return e.Vulnerabilities&&e.Vulnerabilities.length||0})).reduce((function(e,r){return e+r}),0)||0;return(0,n.jsxs)(x.s,{isExternal:!0,title:"Image docker ".concat(e.ArtifactName," (").concat(r,")"),info:"Scan de vuln\xe9rabilit\xe9s Trivy",url:t,urlText:"Rapport d\xe9taill\xe9",children:[(0,n.jsx)("h5",{children:e.Target}),r?e.Results.map((function(e){var r,t;return e.Vulnerabilities&&e.Vulnerabilities.length&&(0,n.jsxs)("div",{children:[(0,n.jsxs)("h6",{children:[e.Target," (",e.Type,")"]}),e.Vulnerabilities.length>10&&(0,n.jsx)(s.Alert,{type:"error",title:"",description:"Plus de ".concat(10," vuln\xe9rabilit\xe9s d\xe9tect\xe9es, v\xe9rifiez le rapport Trivy")}),(0,n.jsx)(s.Table,{columns:Ne,data:null===(r=e.Vulnerabilities)||void 0===r?void 0:r.sort(Se).filter((t="VulnerabilityID",function(e,r,n){return!n.find((function(n,i){return i<r&&n[t]===e[t]}))})).slice(0,10),rowKey:"VulnerabilityID"}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("hr",{})]},e.Target)})):(0,n.jsx)(s.Alert,{type:"success",title:"",description:"Aucune vuln\xe9rabilit\xe9 d\xe9tect\xe9e par Trivy"})]},e.ArtifactName)||null}))||null})},Ce=function(e){var r=e.data,t={mention:{"Accessibilit\xe9 : totalement conforme":(0,n.jsx)(s.Alert,{type:"success",title:"conforme",description:(0,n.jsx)(n.Fragment,{children:"La mention a bien \xe9t\xe9 detect\xe9e : Totalement conforme"})}),"Accessibilit\xe9 : partiellement conforme":(0,n.jsx)(s.Alert,{type:"success",title:"partiel-conforme",description:(0,n.jsx)(n.Fragment,{children:"La mention a bien \xe9t\xe9 detect\xe9e : Partiellement conforme"})}),"Accessibilit\xe9 : non conforme":(0,n.jsx)(s.Alert,{type:"info",title:"non-conforme",description:(0,n.jsx)(n.Fragment,{children:"La mention a bien \xe9t\xe9 detect\xe9e : Non conforme"})}),null:(0,n.jsx)(s.Alert,{type:"error",title:"",description:(0,n.jsx)(n.Fragment,{children:"La mention de conformit\xe9 n'a pas \xe9t\xe9 d\xe9tect\xe9e. La mention \xab Accessibilit\xe9 : non conforme \xbb doit \xeatre pr\xe9sente sur chaque page."})})},declaration:{true:(0,n.jsx)(s.Alert,{type:"success",title:"",description:(0,n.jsxs)(n.Fragment,{children:["La d\xe9claration est disponible sur :"," ",(0,n.jsx)("a",{href:r.declarationUrl,target:"_blank",rel:"noopener noreferrer",children:r.declarationUrl})]})}),false:(0,n.jsx)(s.Alert,{type:"error",title:"",description:(0,n.jsxs)(n.Fragment,{children:["La d\xe9claration n'a pas \xe9t\xe9 trouv\xe9e. Utilisez le"," ",(0,n.jsx)("a",{href:"https://betagouv.github.io/a11y-generateur-declaration",target:"_blank",rel:"noopener noreferrer",children:"g\xe9n\xe9rateur de d\xe9claration"})," ","pour en cr\xe9er une."]})})}};return r&&(0,n.jsxs)(x.s,{title:"D\xe9claration de mise en accessibilit\xe9",info:"Une mention de conformit\xe9 pointant sur une d\xe9claration d'accessibilit\xe9 est obligatoire sur les sites et applications de l'\xe9tat",children:[t.mention[r.mention||"null"],t.declaration[""+!!r.declarationUrl]]})||null},Ze=function(e){var r=e.data,t=r&&r.find&&r.find((function(e){return"ml"===e.slug})),i=r&&r.find&&r.find((function(e){return"pc"===e.slug})),a=function(e){return"ml"===e?(0,n.jsxs)(n.Fragment,{children:["Appliquer le mod\xe8le suivant :"," ",(0,n.jsx)("a",{href:"https://github.com/betagouv/juridiques/blob/main/Mentions-l%C3%A9gales.md",children:"https://github.com/betagouv/juridiques/blob/main/Mentions-l\xe9gales.md"})]}):"pc"===e?(0,n.jsxs)(n.Fragment,{children:["Rendez vous sur"," ",(0,n.jsx)("a",{href:"https://mattermost.incubateur.net/betagouv/channels/domaine-juridique",children:"https://mattermost.incubateur.net/betagouv/channels/domaine-juridique"})]}):void 0},l=function(e){return(0,n.jsx)("div",{style:{display:"flex"},children:(0,n.jsx)(s.Table,{columns:[{name:"word",label:"Tracker manquant"},{name:"resolution",label:"Rem\xe9diation"}],data:e.missingTrackers.map((function(e,r){return{key:r,resolution:(0,n.jsxs)(n.Fragment,{children:["Vous devez imp\xe9rativement mentionner le tracker ",(0,n.jsx)("b",{children:e})," ","dans votre politique de confidentialit\xe9."]}),word:e}})),rowKey:"key"})})},o=function(e,r){var t=a(r),i=e.missingWords.map((function(e,r){return{key:r,word:e,resolution:t}}));return(0,n.jsx)("div",{style:{display:"flex"},children:(0,n.jsx)(s.Table,{columns:[{name:"word",label:"Mot manquant"},{name:"resolution"}],data:i,rowKey:"key"})})},c=function(e,r){return e&&e.mention?e.declarationUrl?e.score<e.maxScore?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Alert,{type:"info",title:"declaration-ok-incomplete",description:(0,n.jsxs)(n.Fragment,{children:["Votre d\xe9claration a bien \xe9t\xe9 d\xe9tect\xe9e sur :"," ",(0,n.jsx)("a",{href:e.declarationUrl,target:"_blank",rel:"noopener noreferrer",children:e.declarationUrl}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Cependant, certaines informations sont manquantes. Consultez le tableau d\xe9taill\xe9 ci-dessous."]})}),e.missingWords.length?o(e,r):(0,n.jsx)(n.Fragment,{}),e.missingTrackers.length?l(e):(0,n.jsx)(n.Fragment,{})]}):(0,n.jsx)(s.Alert,{type:"success",title:"declaration-ok",description:(0,n.jsxs)(n.Fragment,{children:["Votre d\xe9claration a bien \xe9t\xe9 d\xe9tect\xe9e sur :"," ",(0,n.jsx)("a",{href:e.declarationUrl,target:"_blank",rel:"noopener noreferrer",children:e.declarationUrl})]})}):(0,n.jsx)(s.Alert,{type:"error",title:"mention-no-declaration",description:(0,n.jsx)(n.Fragment,{children:"Mention pr\xe9sente mais pas de d\xe9claration d\xe9tect\xe9e"})}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Alert,{type:"error",title:"no-declaration",description:(0,n.jsx)(n.Fragment,{children:"Pas de d\xe9claration d\xe9tect\xe9e. "})}),(0,n.jsx)(s.Alert,{type:"error",title:"incomplete-declaration",description:(0,n.jsxs)(n.Fragment,{children:[a(r)," "]})})]})};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x.s,{title:"Mentions l\xe9gales",info:"Les mentions l\xe9gales sont une page obligatoire qui pr\xe9sente les personnes charg\xe9es de la plateforme",children:c(t,"ml")}),(0,n.jsx)(x.s,{title:"Politique de confidentialit\xe9",info:"La politique de confidentialit\xe9 est une page pr\xe9sentant aux utilisateurs les traitements de donn\xe9es personnelles et les \xe9ventuelles trackers",children:c(i,"pc")})]})},Fe=t(41664),Le=t.n(Fe),Re=function(e){var r=e.id,t=e.selected,i=e.index,a=e.icon,s=e.label,l=e.href;return(0,n.jsx)("li",{role:"presentation",children:(0,n.jsx)(Le(),{href:l,children:(0,n.jsxs)("button",{type:"button",role:"tab",id:"fr-tab-".concat(i),"aria-selected":t,tabIndex:0,"aria-controls":"fr-tabpanel-".concat(i),className:"fr-tabs__tab",children:[a,s]})})},r)},De=function(e){var r=e.id,t=e.tabIndex,i=e.selected,a=e.items;return(0,n.jsx)("div",{id:"fr-tabpanel-".concat(t),className:"fr-tabs__panel ".concat(i?"fr-tabs__panel--selected":""),style:{paddingTop:30},role:"tabpanel","aria-labelledby":"fr-tab-".concat(t),tabIndex:0,children:i&&a&&a.length?a:(0,n.jsx)(s.Alert,{type:"error",title:"warn-no-info",description:(0,n.jsx)(n.Fragment,{children:"Aucune information trouv\xe9e dans cette cat\xe9gorie"})})},r)},Ve=t(90791),Me=t(4314),Pe=t(73313),qe=t.n(Pe),Ee=function(e){var r,t,i,a,l,o,c=e.report,u=e.url,d=c.lhr&&Array.isArray(c.lhr)?c.lhr:[c.lhr],m=d&&d.length&&d[0]&&d[0].fetchTime;return(0,n.jsxs)(s.Callout,{hasInfoIcon:!1,className:"fr-mb-3w",children:[(0,n.jsx)(s.CalloutTitle,{as:"h4",children:(0,n.jsx)("a",{href:u,rel:"noreferrer noopener",target:"_blank",children:u})}),(0,n.jsxs)(s.CalloutText,{children:[(null===(r=c.betagouv)||void 0===r||null===(t=r.attributes)||void 0===t?void 0:t.pitch)&&(0,n.jsx)("div",{children:null===(i=c.betagouv)||void 0===i||null===(a=i.attributes)||void 0===a?void 0:a.pitch}),c.category&&(0,n.jsx)(h.Z,{className:qe().badge,variant:"success",to:"/category/".concat(c.category),children:c.category}),c.tags&&c.tags.map((function(e){return(0,n.jsx)(h.Z,{className:qe().badge,variant:"info",to:"/tag/".concat(e),children:e},e)})),(null===(l=c.betagouv)||void 0===l?void 0:l.id)&&(0,n.jsx)(h.Z,{className:qe().badge,variant:"info",external:!0,to:"https://beta.gouv.fr/startups/".concat(null===(o=c.betagouv)||void 0===o?void 0:o.id,".html"),children:"fiche beta.gouv.fr"}),m&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Ve.Z,{size:16,className:qe().clockIcon}),(0,n.jsxs)("span",{title:m,className:qe().clock,children:["Mise \xe0 jour il y a :"," ",(0,Me.Z)(new Date(m),{locale:ae.Z})]})]})]}),c.screenshot&&(0,n.jsx)("img",{className:qe().screenshotImg,alt:"Copie d'\xe9cran de ".concat(u),src:"".concat("/dashlord","/report/").concat((0,f.r3)(u),"/screenshot.jpeg")})]})},Oe={A:"La page a bien \xe9t\xe9 d\xe9tect\xe9e \xe0 l'adresse standard : ",B:"La page a bien \xe9t\xe9 d\xe9tect\xe9e \xe0 une adresse conforme : ",C:"La page a bien \xe9t\xe9 d\xe9tect\xe9e, mais l'URL n'est pas conforme : "},He=function(e){var r=e.data,t=e.url,i=e.uri,a=Oe[r.grade];return a?(0,n.jsx)(s.Alert,{type:"success",title:"",description:(0,n.jsxs)(n.Fragment,{children:[a,(0,n.jsxs)("a",{href:"".concat(t,"/").concat(r.uri),children:[t,"/",r.uri]})]})}):(0,n.jsx)(s.Alert,{type:"error",title:"",description:"La page n'a pas \xe9t\xe9 d\xe9tect\xe9e! Ajoutez-la sur ".concat(t,"/").concat(r.uri||i)})},Ue=t(22058),ze=function(e){var r=e.data,t=r.url+"/"+r.uri;return(0,n.jsx)(x.s,{title:"Ouverture du code source",children:(0,n.jsx)(s.Alert,{type:"A"===r.grade?"success":"alert",description:"A"===r.grade?"Le d\xe9p\xf4t de code est ouvert : ".concat(t):"Le d\xe9p\xf4t de code n'existe pas ou n'est pas ouvert."})})},Ge="/dashlord",We=function(e){var r=e.id;return(0,n.jsx)("div",{id:r})},Ke=[{label:"Bonnes pratiques",id:"best-practices",icon:(0,n.jsx)(u.Z,{size:16,style:{marginRight:5,marginBottom:-2}}),items:[{id:"lighthouse",reportKey:"lhr",render:function(e,r){return(0,n.jsx)(D,{data:e.lhr,url:"".concat(Ge,"/report/").concat((0,f.r3)(r))})}},{id:"thirdparties",render:function(e){return(0,n.jsx)(te,{data:e.thirdparties})}},{id:"stats",render:function(e,r){return e.stats?(0,n.jsx)(x.s,{title:"Page de statistiques",info:"Cette page permet de publier vos mesures d'impact",children:(0,n.jsx)(He,{data:e.stats,url:r,uri:"stats"})}):null}},{id:"budget_page",render:function(e,r){return e.budget_page?(0,n.jsx)(x.s,{title:"Page de budget",info:"Cette page permet de publier votre budget",children:(0,n.jsx)(He,{data:e.budget_page,url:r,uri:"budget"})}):null}},{id:"declaration-a11y",render:function(e,r){return(0,n.jsx)(Ce,{data:e["declaration-a11y"]})}},{id:"declaration-rgpd",render:function(e,r){return(0,n.jsx)(Ze,{data:e["declaration-rgpd"]})}},{id:"404",render:function(e,r){return(0,n.jsx)(Te,{data:e[404]})}},{id:"github_repository",render:function(e){return(0,n.jsx)(ze,{data:e.github_repository})}}]},{label:"Disponibilit\xe9",id:"disponibilite",icon:(0,n.jsx)(d.Z,{size:16,style:{marginRight:5,marginBottom:-2}}),items:[{id:"updownio",render:function(e,r){return(0,n.jsx)(oe,{data:e.updownio,url:r})}}]},{label:"S\xe9curit\xe9",id:"securite",icon:(0,n.jsx)(m.Z,{size:16,style:{marginRight:5,marginBottom:-2}}),items:[{id:"nmap",render:function(e,r){return(0,n.jsx)(_e,{data:e.nmap,url:"".concat(Ge,"/report/").concat((0,f.r3)(r),"/nmapvuln.html")})}},{id:"http",render:function(e,r){return(0,n.jsx)(y,{data:e.http})}},{id:"testssl",render:function(e,r){return(0,n.jsx)(B,{data:e.testssl,url:"".concat(Ge,"/report/").concat((0,f.r3)(r),"/testssl.html")})}},{id:"dependabot",render:function(e,r){return e.dependabot.repositories&&e.dependabot.repositories.filter(Boolean).map((function(e){return(0,n.jsx)(me,{data:e,url:r},e.url)}))}},{id:"codescan",render:function(e,r){return e.codescan.repositories&&e.codescan.repositories.filter(Boolean).map((function(e){return(0,n.jsx)(xe,{data:e,url:r},e.url)}))}},{id:"zap",render:function(e,r){return(0,n.jsx)(z,{data:e.zap,url:"".concat(Ge,"/report/").concat((0,f.r3)(r),"/zap.html")})}},{id:"nuclei",render:function(e,r){return(0,n.jsx)(E,{data:e.nuclei})}},{id:"trivy",render:function(e,r){return e.trivy.length&&(0,n.jsx)(Ie,{data:e.trivy,url:"".concat(Ge,"/report/").concat((0,f.r3)(r),"/trivy.json")})}}]},{label:"Informations",id:"informations",icon:(0,n.jsx)(p.Z,{size:16,style:{marginRight:5,marginBottom:-2}}),items:[{id:"wappalyzer",render:function(e){return(0,n.jsx)(ie,{data:e.wappalyzer})}},{id:"betagouv",render:function(e){return(0,n.jsx)(Ue.f,{data:e.betagouv})}}]}],Be=function(e){var r=e.url,t=e.report,i=e.selectedTab;if(c.useEffect((function(){var e=document.location.hash.split("#");if(3===e.length){var r=document.getElementById(e[2]);r&&r.scrollIntoView()}}),[t]),!t)return(0,n.jsxs)("div",{children:["No data available for",r]});var a=Math.max(0,Ke.findIndex((function(e){return i===e.id}))),s=Ke[a];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Ee,{report:t,url:r}),(0,n.jsxs)("div",{className:"fr-tabs",children:[(0,n.jsx)("ul",{className:"fr-tabs__list",role:"tablist",children:Ke.map((function(e,t){return(0,n.jsx)(Re,(0,l.Z)({selected:s.id===e.id,index:t,href:"/url/".concat((0,f.N0)(r),"/").concat(e.id)},e),e.id)}))}),Ke.map((function(e,i){var a=e.items.filter((function(e){return!!t[e.reportKey||e.id]&&(0,f.y$)(e.id)})).map((function(e){return(0,n.jsxs)("div",{children:[(0,n.jsx)(We,{id:e.id}),e.render(t,r)]},e.id)}));return(0,c.createElement)(De,(0,o.Z)((0,l.Z)({},e),{key:e.id,tabIndex:i,selected:s.id===e.id,items:a}))}))]})]})},Xe=!0,Qe=function(e){var r=e.report,t=e.url,i=e.selectedTab;return r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a(),{children:(0,n.jsxs)("title",{children:["DashLord - ",t]})}),(0,n.jsx)(Be,{url:t,report:r,selectedTab:i})]}):(0,n.jsx)(s.Alert,{type:"error",title:"Impossible de trouver le rapport"})}},84517:function(e,r,t){"use strict";var n=t(85893),i=t(94184),a=t.n(i),s=(t(67294),t(11163)),l=t(32905),o=t.n(l);r.Z=function(e){var r=e.children,t=e.external,i=void 0!==t&&t,l=e.variant,c=e.className,u=e.to,d=e.style,m=(0,s.useRouter)();return(0,n.jsx)("button",{type:"button",className:a()(c,o()[l]),onClick:function(){if(u){if(i)return void window.open(u);m.push(u)}},style:d,children:r})}},22058:function(e,r,t){"use strict";t.d(r,{f:function(){return h},v:function(){return f}});var n=t(85893),i=(t(67294),t(14313)),a=(t(74107),t(55484)),s=t(77662),l=t(29933),o=t(47811),c=t(41027),u=t(13777),d=t(11510),m=t(75830),p=t(18121),f=function(e){var r=e.sort(b);return r.length?g(r[r.length-1].name):{label:"-",index:0}},h=function(e){var r=e.data.attributes.phases.sort(b);return(0,n.jsx)(p.s,{title:"Phases de la SE",children:(0,n.jsx)(i.VerticalTimeline,{lineColor:"var(--blue-france-113)",children:r.map((function(e){var r=g(e.name);return(0,n.jsxs)(i.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{background:"var(--grey-950)",color:"#fff"},contentArrowStyle:{borderRight:"7px solid  var(--grey-950)"},iconStyle:{background:"var(--grey-950)",color:"var(--blue-france-113)"},icon:(0,n.jsx)(r.icon,{}),children:[(0,n.jsx)("h3",{className:"vertical-timeline-element-title",style:{color:"var(--blue-france-113)"},children:r.label}),(0,n.jsx)("h6",{className:"vertical-timeline-element-subtitle",style:{color:"var(--blue-france-113)"},children:e.start&&(0,d.Z)(new Date(e.start),"PPP",{locale:m.Z})}),(0,n.jsx)("p",{style:{color:"var(--blue-france-113)"},children:r.description})]},e.name)}))})})},x=[{id:"investigation",label:"Investigation",description:"Phase exp\xe9rimentale faite de tests et d\u2019apprentissages terrain dans laquelle l\u2019\xe9quipe cherche \xe0 se confronter \xe0 de premiers utilisateurs d\xe8s que possible.",icon:a.Z,index:1},{id:"construction",label:"Construction",description:"Constituer son \xe9quipe et d\xe9velopper son produit en produisant la premi\xe8re version de la solution sur un terrain d\u2019exp\xe9rimentation.",icon:s.Z,index:2},{id:"acceleration",label:"Acc\xe9l\xe9ration",description:"Avoir un produit fini d\xe9ploy\xe9 au niveau national.",icon:l.Z,index:3},{id:"success",label:"Succ\xe8s",icon:o.Z,index:4},{id:"transfer",label:"Transfert",description:"Cr\xe9er les conditions de la reprise en assurant la p\xe9rennit\xe9 du projet au sein de son administration d'origine.",icon:c.Z,index:5},{id:"alumni",label:"Partenariat termin\xe9",icon:u.Z,index:6}],g=function(e){return x.find((function(r){return r.id===e}))},b=function(e,r){return e.start===r.start?x.find((function(r){return r.id===e.name})).index-x.find((function(e){return e.id===r.name})).index:new Date(e.start).getTime()-new Date(r.start).getTime()}},20836:function(e,r,t){"use strict";t.d(r,{G:function(){return o}});var n=t(85893),i=(t(67294),t(84517)),a=t(42779),s=t.n(a),l={A:"success",B:"info",C:"info",D:"warning",E:"warning",F:"danger"},o=function(e){var r=e.grade,t=e.warning,a=e.label,o=e.to,c=e.small,u=e.colorVariant,d=e.style,m="".concat(r).substring(0,1).toUpperCase(),p=u||l[m]||"danger",f=void 0!==a?a:r;return(0,n.jsxs)(i.Z,{variant:p,className:s()[c?"small":"big"],to:o,style:d,children:[f,t&&(0,n.jsx)("span",{title:t,style:{marginLeft:5},children:"\u26a0\ufe0f"})]})}},18121:function(e,r,t){"use strict";t.d(r,{s:function(){return p}});var n=t(85893),i=(t(67294),t(94184)),a=t.n(i),s=t(659),l=t(73973),o=t(83206),c=t(41664),u=t.n(c),d=t(75670),m=t.n(d),p=function(e){var r=e.title,t=e.children,i=e.info,c=e.url,d=e.urlText,p=void 0===d?"":d,f=e.className,h=e.isExternal,x=void 0!==h&&h;return(0,n.jsxs)("div",{className:a()(m().container,f),children:[(0,n.jsxs)("div",{className:m().banner,children:[(0,n.jsx)("h5",{className:m().mainTitle,children:r}),i&&(0,n.jsx)(s.Z,{overlay:i,children:(0,n.jsx)(l.Z,{size:20,style:{marginLeft:5,cursor:"pointer"}})}),c&&(x?(0,n.jsx)("a",{style:{float:"right"},href:c,target:"_blank",rel:"noreferrer noopener",children:p}):(0,n.jsx)(u(),{prefetch:!1,href:c,children:(0,n.jsxs)("a",{style:{float:"right"},children:[p,(0,n.jsx)(o.Z,{})]})}))]}),(0,n.jsx)("div",{className:m().body,children:t})]})}},63613:function(e,r,t){"use strict";t.d(r,{D:function(){return i}});var n=t(85893),i=(t(67294),function(e){var r=e.className;return(0,n.jsxs)("div",{className:r,children:["Moins de 25% des crit\xe8res d'accessibilit\xe9 peuvent \xeatre test\xe9s automatiquement, ",(0,n.jsx)("strong",{children:"une expertise manuelle est requise"}),".",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Ce score ne repr\xe9sente pas le score RGAA mais une partie des bonnes pratiques de base \xe0 appliquer."]})})},32905:function(e){e.exports={success:"badge_success__HjgKW",info:"badge_info__eK6GA",warning:"badge_warning__5QJuG",danger:"badge_danger__Lexxg"}},91521:function(e){e.exports={card:"card_card__afbUo",cardValue:"card_cardValue__zfpCd",cardTitle:"card_cardTitle__LRcj8"}},42779:function(e){e.exports={small:"grade_small__EU1s6",big:"grade_big__iN2Jf"}},81493:function(e){e.exports={accesibility:"lightHouse_accesibility__k5UoB"}},75670:function(e){e.exports={container:"panel_container__s3lQL",banner:"panel_banner__IDWUZ",mainTitle:"panel_mainTitle__N5MWp",body:"panel_body___c3aS"}},83587:function(e){e.exports={center:"updownIo_center__VX4HF",left:"updownIo_left__Uik_F",expiration:"updownIo_expiration__dGB_i"}},73313:function(e){e.exports={badge:"url_badge__giqcN",clockIcon:"url_clockIcon__mEI2N",clock:"url_clock__Jh8L8",screenshotImg:"url_screenshotImg__Sq709"}}},function(e){e.O(0,[6,717,176,981,774,888,179],(function(){return r=50415,e(e.s=r);var r}));var r=e.O();_N_E=r}]);