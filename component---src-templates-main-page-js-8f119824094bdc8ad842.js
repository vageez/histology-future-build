(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{k7oB:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("Bl7J"),c=a("i6Lo"),s=a("vrFN"),i=a("6cYQ"),o=a("tRbT"),m=a("wx14"),u=a("RD7I"),d=a("cNwE");var b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(u.a)(e,Object(m.a)({defaultTheme:d.a},t))},p=a("kKAo"),f=a("Ff2n"),g=(a("17x9"),a("iuhU")),E=a("H2TA"),h=n.forwardRef((function(e,t){var a=e.classes,l=e.className,r=e.raised,c=void 0!==r&&r,s=Object(f.a)(e,["classes","className","raised"]);return n.createElement(p.a,Object(m.a)({className:Object(g.a)(a.root,l),elevation:c?8:1,ref:t},s))})),v=Object(E.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(h),N=n.forwardRef((function(e,t){var a=e.classes,l=e.className,r=e.component,c=void 0===r?"div":r,s=Object(f.a)(e,["classes","className","component"]);return n.createElement(c,Object(m.a)({className:Object(g.a)(a.root,l),ref:t},s))})),w=Object(E.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(N),j=a("ofer"),y=n.forwardRef((function(e,t){var a=e.disableSpacing,l=void 0!==a&&a,r=e.classes,c=e.className,s=Object(f.a)(e,["disableSpacing","classes","className"]);return n.createElement("div",Object(m.a)({className:Object(g.a)(r.root,c,!l&&r.spacing),ref:t},s))})),O=Object(E.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(y),x=a("4+mf"),k=b({root:{width:320,height:350,position:"relative"},title:{fontSize:14},pos:{marginBottom:12},paper:{margin:5},actions:{position:"absolute",bottom:"0px"}}),C=function(e){var t=e.slide,a=e.thumbPath,n=k();return l.a.createElement(p.a,{className:n.paper},l.a.createElement(v,{className:n.root},l.a.createElement(w,null,l.a.createElement(j.a,{variant:"caption",component:"h1"},l.a.createElement("strong",null,t.index," ",t.title)),l.a.createElement(j.a,{className:n.title,color:"textSecondary",gutterBottom:!0},l.a.createElement("img",{style:{maxHeight:"191px",width:"auto"},className:"slide-thumbnail",src:""+a+t.index+".jpg",alt:t.title})),l.a.createElement(j.a,{variant:"caption",component:"h1"},t.info)),l.a.createElement(O,{className:n.actions},l.a.createElement(x.a,{size:"small"},l.a.createElement(x.b,{style:{color:"blue"},className:"link",to:"/"+t.slug},"Viewer")))))},B=function(e){var t=e.slides,a=e.thumbPath;return l.a.createElement(o.a,{container:!0,spacing:1,direction:"row",justify:"flex-start",alignItems:"baseline"},t.map((function(e,t){return l.a.createElement(C,{slide:e,key:t,thumbPath:a})})))},I=a("wb2y");t.default=function(e){var t=e.pageContext,a=t.navigation,n=t.title,m=t.slides,u=t.breadCrumb,d=t.pages,b=t.pdf,p=t.slug,f=t.content,g=t.thumbPath,E=t.showTitle;return l.a.createElement(r.a,null,l.a.createElement(i.a,{navigation:a}),l.a.createElement(s.a,{title:n}),l.a.createElement(c.a,{title:n,breadCrumb:u}),E&&l.a.createElement("h1",null,n),d&&l.a.createElement("ul",null,d.map((function(e){return l.a.createElement("li",{key:e.slug},p?l.a.createElement(x.b,{style:{color:"blue"},className:"link",to:"/"+p+"/"+e.slug},e.title):l.a.createElement(x.b,{style:{color:"blue"},className:"link",to:e.slug},e.title))}))),b&&l.a.createElement(o.a,null,l.a.createElement("div",{key:"body",dangerouslySetInnerHTML:{__html:f}})),m&&l.a.createElement(B,{slides:m,thumbPath:g}),l.a.createElement("div",{style:{height:"35px"}}),l.a.createElement(I.a,null))}}}]);
//# sourceMappingURL=component---src-templates-main-page-js-8f119824094bdc8ad842.js.map