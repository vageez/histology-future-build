(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{CtJk:function(t,e,n){n("Sc3u")("Uint8",1,(function(t){return function(e,n,o){return t(this,e,n,o)}}))},DrhF:function(t,e,n){var o=n("BjK0"),r=n("N+BI").onFreeze;n("939a")("freeze",(function(t){return function(e){return t&&o(e)?t(r(e)):e}}))},Jegl:function(t,e,n){for(var o,r=n("emib"),i=n("8wc8"),a=n("UEZ0"),l=a("typed_array"),u=a("view"),s=!(!r.ArrayBuffer||!r.DataView),c=s,f=0,h="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");f<9;)(o=r[h[f++]])?(i(o.prototype,l,!0),i(o.prototype,u,!0)):c=!1;t.exports={ABV:s,CONSTR:c,TYPED:l,VIEW:u}},Klu8:function(t,e,n){var o=n("P8UN");o(o.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},Sc3u:function(t,e,n){"use strict";if(n("QPJK")){var o=n("939K"),r=n("emib"),i=n("96qb"),a=n("P8UN"),l=n("Jegl"),u=n("voZr"),s=n("ot9L"),c=n("xa9o"),f=n("pSXQ"),h=n("8wc8"),p=n("rj/q"),m=n("1Llc"),d=n("kiRH"),v=n("gx6d"),g=n("dTG6"),y=n("kxs/"),b=n("qDzq"),E=n("aHWV"),w=n("BjK0"),O=n("DFzH"),j=n("BuzY"),x=n("nsRs"),L=n("ltAs"),Z=n("chL8").f,C=n("U9/z"),_=n("UEZ0"),U=n("sOol"),B=n("Wadk"),V=n("Ar2q"),A=n("Ioy3"),I=n("Dq+y"),W=n("m+kh"),D=n("vUMq"),F=n("to/b"),S=n("Y++M"),k=n("cRJv"),M=n("rjfK"),P=n("Drra"),N=M.f,R=P.f,z=r.RangeError,T=r.TypeError,q=r.Uint8Array,J=Array.prototype,H=u.ArrayBuffer,Y=u.DataView,K=B(0),G=B(2),Q=B(3),X=B(4),$=B(5),tt=B(6),et=V(!0),nt=V(!1),ot=I.values,rt=I.keys,it=I.entries,at=J.lastIndexOf,lt=J.reduce,ut=J.reduceRight,st=J.join,ct=J.sort,ft=J.slice,ht=J.toString,pt=J.toLocaleString,mt=U("iterator"),dt=U("toStringTag"),vt=_("typed_constructor"),gt=_("def_constructor"),yt=l.CONSTR,bt=l.TYPED,Et=l.VIEW,wt=B(1,(function(t,e){return Zt(A(t,t[gt]),e)})),Ot=i((function(){return 1===new q(new Uint16Array([1]).buffer)[0]})),jt=!!q&&!!q.prototype.set&&i((function(){new q(1).set({})})),xt=function(t,e){var n=m(t);if(n<0||n%e)throw z("Wrong offset!");return n},Lt=function(t){if(w(t)&&bt in t)return t;throw T(t+" is not a typed array!")},Zt=function(t,e){if(!w(t)||!(vt in t))throw T("It is not a typed array constructor!");return new t(e)},Ct=function(t,e){return _t(A(t,t[gt]),e)},_t=function(t,e){for(var n=0,o=e.length,r=Zt(t,o);o>n;)r[n]=e[n++];return r},Ut=function(t,e,n){N(t,e,{get:function(){return this._d[n]}})},Bt=function(t){var e,n,o,r,i,a,l=O(t),u=arguments.length,c=u>1?arguments[1]:void 0,f=void 0!==c,h=C(l);if(null!=h&&!j(h)){for(a=h.call(l),o=[],e=0;!(i=a.next()).done;e++)o.push(i.value);l=o}for(f&&u>2&&(c=s(c,arguments[2],2)),e=0,n=d(l.length),r=Zt(this,n);n>e;e++)r[e]=f?c(l[e],e):l[e];return r},Vt=function(){for(var t=0,e=arguments.length,n=Zt(this,e);e>t;)n[t]=arguments[t++];return n},At=!!q&&i((function(){pt.call(new q(1))})),It=function(){return pt.apply(At?ft.call(Lt(this)):Lt(this),arguments)},Wt={copyWithin:function(t,e){return k.call(Lt(this),t,e,arguments.length>2?arguments[2]:void 0)},every:function(t){return X(Lt(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){return S.apply(Lt(this),arguments)},filter:function(t){return Ct(this,G(Lt(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return $(Lt(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return tt(Lt(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){K(Lt(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return nt(Lt(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return et(Lt(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){return st.apply(Lt(this),arguments)},lastIndexOf:function(t){return at.apply(Lt(this),arguments)},map:function(t){return wt(Lt(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){return lt.apply(Lt(this),arguments)},reduceRight:function(t){return ut.apply(Lt(this),arguments)},reverse:function(){for(var t,e=Lt(this).length,n=Math.floor(e/2),o=0;o<n;)t=this[o],this[o++]=this[--e],this[e]=t;return this},some:function(t){return Q(Lt(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return ct.call(Lt(this),t)},subarray:function(t,e){var n=Lt(this),o=n.length,r=g(t,o);return new(A(n,n[gt]))(n.buffer,n.byteOffset+r*n.BYTES_PER_ELEMENT,d((void 0===e?o:g(e,o))-r))}},Dt=function(t,e){return Ct(this,ft.call(Lt(this),t,e))},Ft=function(t){Lt(this);var e=xt(arguments[1],1),n=this.length,o=O(t),r=d(o.length),i=0;if(r+e>n)throw z("Wrong length!");for(;i<r;)this[e+i]=o[i++]},St={entries:function(){return it.call(Lt(this))},keys:function(){return rt.call(Lt(this))},values:function(){return ot.call(Lt(this))}},kt=function(t,e){return w(t)&&t[bt]&&"symbol"!=typeof e&&e in t&&String(+e)==String(e)},Mt=function(t,e){return kt(t,e=y(e,!0))?f(2,t[e]):R(t,e)},Pt=function(t,e,n){return!(kt(t,e=y(e,!0))&&w(n)&&b(n,"value"))||b(n,"get")||b(n,"set")||n.configurable||b(n,"writable")&&!n.writable||b(n,"enumerable")&&!n.enumerable?N(t,e,n):(t[e]=n.value,t)};yt||(P.f=Mt,M.f=Pt),a(a.S+a.F*!yt,"Object",{getOwnPropertyDescriptor:Mt,defineProperty:Pt}),i((function(){ht.call({})}))&&(ht=pt=function(){return st.call(this)});var Nt=p({},Wt);p(Nt,St),h(Nt,mt,St.values),p(Nt,{slice:Dt,set:Ft,constructor:function(){},toString:ht,toLocaleString:It}),Ut(Nt,"buffer","b"),Ut(Nt,"byteOffset","o"),Ut(Nt,"byteLength","l"),Ut(Nt,"length","e"),N(Nt,dt,{get:function(){return this[bt]}}),t.exports=function(t,e,n,u){var s=t+((u=!!u)?"Clamped":"")+"Array",f="get"+t,p="set"+t,m=r[s],g=m||{},y=m&&L(m),b=!m||!l.ABV,O={},j=m&&m.prototype,C=function(t,n){N(t,n,{get:function(){return function(t,n){var o=t._d;return o.v[f](n*e+o.o,Ot)}(this,n)},set:function(t){return function(t,n,o){var r=t._d;u&&(o=(o=Math.round(o))<0?0:o>255?255:255&o),r.v[p](n*e+r.o,o,Ot)}(this,n,t)},enumerable:!0})};b?(m=n((function(t,n,o,r){c(t,m,s,"_d");var i,a,l,u,f=0,p=0;if(w(n)){if(!(n instanceof H||"ArrayBuffer"==(u=E(n))||"SharedArrayBuffer"==u))return bt in n?_t(m,n):Bt.call(m,n);i=n,p=xt(o,e);var g=n.byteLength;if(void 0===r){if(g%e)throw z("Wrong length!");if((a=g-p)<0)throw z("Wrong length!")}else if((a=d(r)*e)+p>g)throw z("Wrong length!");l=a/e}else l=v(n),i=new H(a=l*e);for(h(t,"_d",{b:i,o:p,l:a,e:l,v:new Y(i)});f<l;)C(t,f++)})),j=m.prototype=x(Nt),h(j,"constructor",m)):i((function(){m(1)}))&&i((function(){new m(-1)}))&&D((function(t){new m,new m(null),new m(1.5),new m(t)}),!0)||(m=n((function(t,n,o,r){var i;return c(t,m,s),w(n)?n instanceof H||"ArrayBuffer"==(i=E(n))||"SharedArrayBuffer"==i?void 0!==r?new g(n,xt(o,e),r):void 0!==o?new g(n,xt(o,e)):new g(n):bt in n?_t(m,n):Bt.call(m,n):new g(v(n))})),K(y!==Function.prototype?Z(g).concat(Z(y)):Z(g),(function(t){t in m||h(m,t,g[t])})),m.prototype=j,o||(j.constructor=m));var _=j[mt],U=!!_&&("values"==_.name||null==_.name),B=St.values;h(m,vt,!0),h(j,bt,s),h(j,Et,!0),h(j,gt,m),(u?new m(1)[dt]==s:dt in j)||N(j,dt,{get:function(){return s}}),O[s]=m,a(a.G+a.W+a.F*(m!=g),O),a(a.S,s,{BYTES_PER_ELEMENT:e}),a(a.S+a.F*i((function(){g.of.call(m,1)})),s,{from:Bt,of:Vt}),"BYTES_PER_ELEMENT"in j||h(j,"BYTES_PER_ELEMENT",e),a(a.P,s,Wt),F(s),a(a.P+a.F*jt,s,{set:Ft}),a(a.P+a.F*!U,s,St),o||j.toString==ht||(j.toString=ht),a(a.P+a.F*i((function(){new m(1).slice()})),s,{slice:Dt}),a(a.P+a.F*(i((function(){return[1,2].toLocaleString()!=new m([1,2]).toLocaleString()}))||!i((function(){j.toLocaleString.call([1,2])}))),s,{toLocaleString:It}),W[s]=U?_:B,o||U||h(j,mt,B)}}else t.exports=function(){}},"Y++M":function(t,e,n){"use strict";var o=n("DFzH"),r=n("dTG6"),i=n("kiRH");t.exports=function(t){for(var e=o(this),n=i(e.length),a=arguments.length,l=r(a>1?arguments[1]:void 0,n),u=a>2?arguments[2]:void 0,s=void 0===u?n:r(u,n);s>l;)e[l++]=t;return e}},bMVF:function(t,e,n){},cRJv:function(t,e,n){"use strict";var o=n("DFzH"),r=n("dTG6"),i=n("kiRH");t.exports=[].copyWithin||function(t,e){var n=o(this),a=i(n.length),l=r(t,a),u=r(e,a),s=arguments.length>2?arguments[2]:void 0,c=Math.min((void 0===s?a:r(s,a))-u,a-l),f=1;for(u<l&&l<u+c&&(f=-1,u+=c-1,l+=c-1);c-- >0;)u in n?n[l]=n[u]:delete n[l],l+=f,u+=f;return n}},gx6d:function(t,e,n){var o=n("1Llc"),r=n("kiRH");t.exports=function(t){if(void 0===t)return 0;var e=o(t),n=r(e);if(e!==n)throw RangeError("Wrong length!");return n}},"mV/n":function(t,e,n){},n0hJ:function(t,e,n){var o=n("P8UN");o(o.P,"Array",{fill:n("Y++M")}),n("Dq1/")("fill")},voZr:function(t,e,n){"use strict";var o=n("emib"),r=n("QPJK"),i=n("939K"),a=n("Jegl"),l=n("8wc8"),u=n("rj/q"),s=n("96qb"),c=n("xa9o"),f=n("1Llc"),h=n("kiRH"),p=n("gx6d"),m=n("chL8").f,d=n("rjfK").f,v=n("Y++M"),g=n("dSuk"),y=o.ArrayBuffer,b=o.DataView,E=o.Math,w=o.RangeError,O=o.Infinity,j=y,x=E.abs,L=E.pow,Z=E.floor,C=E.log,_=E.LN2,U=r?"_b":"buffer",B=r?"_l":"byteLength",V=r?"_o":"byteOffset";function A(t,e,n){var o,r,i,a=new Array(n),l=8*n-e-1,u=(1<<l)-1,s=u>>1,c=23===e?L(2,-24)-L(2,-77):0,f=0,h=t<0||0===t&&1/t<0?1:0;for((t=x(t))!=t||t===O?(r=t!=t?1:0,o=u):(o=Z(C(t)/_),t*(i=L(2,-o))<1&&(o--,i*=2),(t+=o+s>=1?c/i:c*L(2,1-s))*i>=2&&(o++,i/=2),o+s>=u?(r=0,o=u):o+s>=1?(r=(t*i-1)*L(2,e),o+=s):(r=t*L(2,s-1)*L(2,e),o=0));e>=8;a[f++]=255&r,r/=256,e-=8);for(o=o<<e|r,l+=e;l>0;a[f++]=255&o,o/=256,l-=8);return a[--f]|=128*h,a}function I(t,e,n){var o,r=8*n-e-1,i=(1<<r)-1,a=i>>1,l=r-7,u=n-1,s=t[u--],c=127&s;for(s>>=7;l>0;c=256*c+t[u],u--,l-=8);for(o=c&(1<<-l)-1,c>>=-l,l+=e;l>0;o=256*o+t[u],u--,l-=8);if(0===c)c=1-a;else{if(c===i)return o?NaN:s?-O:O;o+=L(2,e),c-=a}return(s?-1:1)*o*L(2,c-e)}function W(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function D(t){return[255&t]}function F(t){return[255&t,t>>8&255]}function S(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function k(t){return A(t,52,8)}function M(t){return A(t,23,4)}function P(t,e,n){d(t.prototype,e,{get:function(){return this[n]}})}function N(t,e,n,o){var r=p(+n);if(r+e>t[B])throw w("Wrong index!");var i=t[U]._b,a=r+t[V],l=i.slice(a,a+e);return o?l:l.reverse()}function R(t,e,n,o,r,i){var a=p(+n);if(a+e>t[B])throw w("Wrong index!");for(var l=t[U]._b,u=a+t[V],s=o(+r),c=0;c<e;c++)l[u+c]=s[i?c:e-c-1]}if(a.ABV){if(!s((function(){y(1)}))||!s((function(){new y(-1)}))||s((function(){return new y,new y(1.5),new y(NaN),"ArrayBuffer"!=y.name}))){for(var z,T=(y=function(t){return c(this,y),new j(p(t))}).prototype=j.prototype,q=m(j),J=0;q.length>J;)(z=q[J++])in y||l(y,z,j[z]);i||(T.constructor=y)}var H=new b(new y(2)),Y=b.prototype.setInt8;H.setInt8(0,2147483648),H.setInt8(1,2147483649),!H.getInt8(0)&&H.getInt8(1)||u(b.prototype,{setInt8:function(t,e){Y.call(this,t,e<<24>>24)},setUint8:function(t,e){Y.call(this,t,e<<24>>24)}},!0)}else y=function(t){c(this,y,"ArrayBuffer");var e=p(t);this._b=v.call(new Array(e),0),this[B]=e},b=function(t,e,n){c(this,b,"DataView"),c(t,y,"DataView");var o=t[B],r=f(e);if(r<0||r>o)throw w("Wrong offset!");if(r+(n=void 0===n?o-r:h(n))>o)throw w("Wrong length!");this[U]=t,this[V]=r,this[B]=n},r&&(P(y,"byteLength","_l"),P(b,"buffer","_b"),P(b,"byteLength","_l"),P(b,"byteOffset","_o")),u(b.prototype,{getInt8:function(t){return N(this,1,t)[0]<<24>>24},getUint8:function(t){return N(this,1,t)[0]},getInt16:function(t){var e=N(this,2,t,arguments[1]);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=N(this,2,t,arguments[1]);return e[1]<<8|e[0]},getInt32:function(t){return W(N(this,4,t,arguments[1]))},getUint32:function(t){return W(N(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return I(N(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return I(N(this,8,t,arguments[1]),52,8)},setInt8:function(t,e){R(this,1,t,D,e)},setUint8:function(t,e){R(this,1,t,D,e)},setInt16:function(t,e){R(this,2,t,F,e,arguments[2])},setUint16:function(t,e){R(this,2,t,F,e,arguments[2])},setInt32:function(t,e){R(this,4,t,S,e,arguments[2])},setUint32:function(t,e){R(this,4,t,S,e,arguments[2])},setFloat32:function(t,e){R(this,4,t,M,e,arguments[2])},setFloat64:function(t,e){R(this,8,t,k,e,arguments[2])}});g(y,"ArrayBuffer"),g(b,"DataView"),l(b.prototype,a.VIEW,!0),e.ArrayBuffer=y,e.DataView=b},xIF9:function(t,e,n){"use strict";n.r(e);var o=n("q1tI"),r=n.n(o),i=n("Bl7J"),a=n("vrFN"),l=n("6cYQ"),u=n("ofer"),s=n("tRbT"),c=n("wb2y"),f=(n("MIFh"),n("wx14")),h=n("zLVn"),p=n("JX7q"),m=n("dI71"),d=n("rePB"),v=n("4R65"),g=(n("pJf4"),n("2mql")),y=n.n(g),b=Object(o.createContext)({}),E=b.Consumer,w=b.Provider,O=(n("sC2a"),n("U6Bt"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("JHok"),/^on(.+)$/i),j=function(t){function e(e){var n;return n=t.call(this,e)||this,Object(d.a)(Object(p.a)(n),"_leafletEvents",void 0),Object(d.a)(Object(p.a)(n),"leafletElement",void 0),n._leafletEvents=n.extractLeafletEvents(e),n}Object(m.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.bindLeafletEvents(this._leafletEvents)},n.componentDidUpdate=function(t){this._leafletEvents=this.bindLeafletEvents(this.extractLeafletEvents(this.props),this._leafletEvents)},n.componentWillUnmount=function(){var t=this,e=this.leafletElement;e&&Object.keys(this._leafletEvents).forEach((function(n){e.off(n,t._leafletEvents[n])}))},n.extractLeafletEvents=function(t){return Object.keys(t).reduce((function(e,n){O.test(n)&&(null!=t[n]&&(e[n.replace(O,(function(t,e){return e.toLowerCase()}))]=t[n]));return e}),{})},n.bindLeafletEvents=function(t,e){void 0===t&&(t={}),void 0===e&&(e={});var n=this.leafletElement;if(null==n||null==n.on)return{};var o=Object(f.a)({},e);return Object.keys(e).forEach((function(r){null!=t[r]&&e[r]===t[r]||(delete o[r],n.off(r,e[r]))})),Object.keys(t).forEach((function(r){null!=e[r]&&t[r]===e[r]||(o[r]=t[r],n.on(r,t[r]))})),o},n.fireLeafletEvent=function(t,e){var n=this.leafletElement;n&&n.fire(t,e)},e}(o.Component),x=(n("HQhv"),n("OeI1"),function(t){return void 0===t&&(t=""),t.split(" ").filter(Boolean)}),L=function(t,e,n){null!=t&&n!==e&&(null!=e&&e.length>0&&function(t,e){x(e).forEach((function(e){v.DomUtil.removeClass(t,e)}))}(t,e),null!=n&&n.length>0&&function(t,e){x(e).forEach((function(e){v.DomUtil.addClass(t,e)}))}(t,n))};n("sc67");function Z(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];return Object.keys(t).reduce((function(e,o){return-1===n.indexOf(o)&&(e[o]=t[o]),e}),{})}var C=["children","className","id","style","useFlyTo","whenReady"],_=function(t){return Array.isArray(t)?[t[0],t[1]]:[t.lat,t.lon?t.lon:t.lng]},U=function(t){function e(e){var n;return n=t.call(this,e)||this,Object(d.a)(Object(p.a)(n),"className",void 0),Object(d.a)(Object(p.a)(n),"contextValue",void 0),Object(d.a)(Object(p.a)(n),"container",void 0),Object(d.a)(Object(p.a)(n),"viewport",{center:void 0,zoom:void 0}),Object(d.a)(Object(p.a)(n),"_ready",!1),Object(d.a)(Object(p.a)(n),"_updating",!1),Object(d.a)(Object(p.a)(n),"onViewportChange",(function(){var t=n.leafletElement.getCenter();n.viewport={center:t?[t.lat,t.lng]:void 0,zoom:n.leafletElement.getZoom()},n.props.onViewportChange&&!n._updating&&n.props.onViewportChange(n.viewport)})),Object(d.a)(Object(p.a)(n),"onViewportChanged",(function(){n.props.onViewportChanged&&!n._updating&&n.props.onViewportChanged(n.viewport)})),Object(d.a)(Object(p.a)(n),"bindContainer",(function(t){n.container=t})),n.className=e.className,n}Object(m.a)(e,t);var n=e.prototype;return n.createLeafletElement=function(t){var e=t.viewport,n=Object(h.a)(t,["viewport"]);return e&&(e.center&&(n.center=e.center),"number"==typeof e.zoom&&(n.zoom=e.zoom)),new v.Map(this.container,n)},n.updateLeafletElement=function(t,e){this._updating=!0;var n=e.bounds,o=e.boundsOptions,r=e.boxZoom,i=e.center,a=e.className,l=e.doubleClickZoom,u=e.dragging,s=e.keyboard,c=e.maxBounds,f=e.scrollWheelZoom,h=e.tap,p=e.touchZoom,m=e.useFlyTo,d=e.viewport,v=e.zoom;if(L(this.container,t.className,a),d&&d!==t.viewport){var g=d.center?d.center:i,y=null==d.zoom?v:d.zoom;!0===m?this.leafletElement.flyTo(g,y,this.getZoomPanOptions(e)):this.leafletElement.setView(g,y,this.getZoomPanOptions(e))}else i&&this.shouldUpdateCenter(i,t.center)?!0===m?this.leafletElement.flyTo(i,v,this.getZoomPanOptions(e)):this.leafletElement.setView(i,v,this.getZoomPanOptions(e)):"number"==typeof v&&v!==t.zoom&&(null==t.zoom?this.leafletElement.setView(i,v,this.getZoomPanOptions(e)):this.leafletElement.setZoom(v,this.getZoomPanOptions(e)));c&&this.shouldUpdateBounds(c,t.maxBounds)&&this.leafletElement.setMaxBounds(c),n&&(this.shouldUpdateBounds(n,t.bounds)||o!==t.boundsOptions)&&(!0===m?this.leafletElement.flyToBounds(n,this.getFitBoundsOptions(e)):this.leafletElement.fitBounds(n,this.getFitBoundsOptions(e))),r!==t.boxZoom&&(!0===r?this.leafletElement.boxZoom.enable():this.leafletElement.boxZoom.disable()),l!==t.doubleClickZoom&&(!0===l||"string"==typeof l?(this.leafletElement.options.doubleClickZoom=l,this.leafletElement.doubleClickZoom.enable()):this.leafletElement.doubleClickZoom.disable()),u!==t.dragging&&(!0===u?this.leafletElement.dragging.enable():this.leafletElement.dragging.disable()),s!==t.keyboard&&(!0===s?this.leafletElement.keyboard.enable():this.leafletElement.keyboard.disable()),f!==t.scrollWheelZoom&&(!0===f||"string"==typeof f?(this.leafletElement.options.scrollWheelZoom=f,this.leafletElement.scrollWheelZoom.enable()):this.leafletElement.scrollWheelZoom.disable()),h!==t.tap&&(!0===h?this.leafletElement.tap.enable():this.leafletElement.tap.disable()),p!==t.touchZoom&&(!0===p||"string"==typeof p?(this.leafletElement.options.touchZoom=p,this.leafletElement.touchZoom.enable()):this.leafletElement.touchZoom.disable()),this._updating=!1},n.getZoomPanOptions=function(t){return{animate:t.animate,duration:t.duration,easeLinearity:t.easeLinearity,noMoveStart:t.noMoveStart}},n.getFitBoundsOptions=function(t){var e=this.getZoomPanOptions(t);return Object(f.a)({},e,{},t.boundsOptions)},n.componentDidMount=function(){var e=Z.apply(void 0,[this.props].concat(C));this.leafletElement=this.createLeafletElement(e),this.leafletElement.on("move",this.onViewportChange),this.leafletElement.on("moveend",this.onViewportChanged),null!=e.bounds&&this.leafletElement.fitBounds(e.bounds,this.getFitBoundsOptions(e)),this.contextValue={layerContainer:this.leafletElement,map:this.leafletElement},t.prototype.componentDidMount.call(this),this.forceUpdate()},n.componentDidUpdate=function(e){!1===this._ready&&(this._ready=!0,this.props.whenReady&&this.leafletElement.whenReady(this.props.whenReady)),t.prototype.componentDidUpdate.call(this,e),this.updateLeafletElement(e,this.props)},n.componentWillUnmount=function(){t.prototype.componentWillUnmount.call(this),this.leafletElement.off("move",this.onViewportChange),this.leafletElement.off("moveend",this.onViewportChanged),!0===this.props.preferCanvas?(this.leafletElement._initEvents(!0),this.leafletElement._stop()):this.leafletElement.remove()},n.shouldUpdateCenter=function(t,e){return!e||(t=_(t),e=_(e),t[0]!==e[0]||t[1]!==e[1])},n.shouldUpdateBounds=function(t,e){return!e||!Object(v.latLngBounds)(t).equals(Object(v.latLngBounds)(e))},n.render=function(){return r.a.createElement("div",{className:this.className,id:this.props.id,ref:this.bindContainer,style:this.props.style},this.contextValue?r.a.createElement(w,{value:this.contextValue},this.props.children):null)},e}(j),B=(n("AqHK"),n("vuIU")),V=function(t){var e=function(e,n){return r.a.createElement(E,null,(function(o){return r.a.createElement(t,Object(f.a)({},e,{leaflet:o,ref:n}))}))},n=t.displayName||t.name||"Component";e.displayName="Leaflet("+n+")";var i=Object(o.forwardRef)(e);return y()(i,t),i}(function(t){function e(){return t.apply(this,arguments)||this}Object(m.a)(e,t);var n=e.prototype;return n.createLeafletElement=function(t){return new v.TileLayer(t.url,this.getOptions(t))},n.updateLeafletElement=function(e,n){t.prototype.updateLeafletElement.call(this,e,n),n.url!==e.url&&this.leafletElement.setUrl(n.url)},e}(function(t){function e(){return t.apply(this,arguments)||this}Object(m.a)(e,t);var n=e.prototype;return n.createLeafletElement=function(t){return new v.GridLayer(this.getOptions(t))},n.updateLeafletElement=function(t,e){var n=e.opacity,o=e.zIndex;n!==t.opacity&&this.leafletElement.setOpacity(n),o!==t.zIndex&&this.leafletElement.setZIndex(o)},n.getOptions=function(e){var n=Object(f.a)({},t.prototype.getOptions.call(this,e)),o=e.leaflet.map;return null!=o&&(null==n.maxZoom&&null!=o.options.maxZoom&&(n.maxZoom=o.options.maxZoom),null==n.minZoom&&null!=o.options.minZoom&&(n.minZoom=o.options.minZoom)),n},n.render=function(){return null},e}(function(t){function e(e){var n;return n=t.call(this,e)||this,Object(d.a)(Object(p.a)(n),"contextValue",void 0),Object(d.a)(Object(p.a)(n),"leafletElement",void 0),n.leafletElement=n.createLeafletElement(e),n}Object(m.a)(e,t);var n=e.prototype;return n.createLeafletElement=function(t){throw new Error("createLeafletElement() must be implemented")},n.updateLeafletElement=function(t,e){},n.componentDidMount=function(){t.prototype.componentDidMount.call(this),this.layerContainer.addLayer(this.leafletElement)},n.componentDidUpdate=function(e){if(t.prototype.componentDidUpdate.call(this,e),this.props.attribution!==e.attribution){var n=this.props.leaflet.map;null!=n&&null!=n.attributionControl&&(n.attributionControl.removeAttribution(e.attribution),n.attributionControl.addAttribution(this.props.attribution))}this.updateLeafletElement(e,this.props)},n.componentWillUnmount=function(){t.prototype.componentWillUnmount.call(this),this.layerContainer.removeLayer(this.leafletElement)},n.render=function(){var t=this.props.children;return null==t?null:null==this.contextValue?r.a.createElement(o.Fragment,null,t):r.a.createElement(w,{value:this.contextValue},t)},Object(B.a)(e,[{key:"layerContainer",get:function(){return this.props.leaflet.layerContainer||this.props.leaflet.map}}]),e}(function(t){function e(){return t.apply(this,arguments)||this}return Object(m.a)(e,t),e.prototype.getOptions=function(t){return null!=t.pane?t:null!=t.leaflet&&null!=t.leaflet.pane?Object(f.a)({},t,{pane:t.leaflet.pane}):t},e}(j))))),A=n("i6Lo");n("bMVF"),n("mV/n"),e.default=function(t){var e=t.pageContext,n=e.navigation,o=e.index,f=e.title,h=e.info,p=e.breadCrumb,m=(e.slidePath,e.zoom),d=e.minZoom,v=e.maxZoom;return"undefined"!=typeof window?r.a.createElement(i.a,null,r.a.createElement(l.a,{navigation:n}),r.a.createElement(a.a,{title:"Viewer"}),r.a.createElement(A.a,{title:f,breadCrumb:p}),r.a.createElement("h1",{style:{maxWidth:"90vw",margin:"25px auto 10px"}},o," ",f),r.a.createElement(u.a,{variant:"caption",component:"h5",style:{maxWidth:"90vw",margin:"0 auto"}},h),r.a.createElement(s.a,{style:{height:"100%",width:"100%",maxWidth:"90vw",margin:"0 auto",position:"relative"}},r.a.createElement(U,{center:[0,0],zoom:m||2,onMoveEnd:function(t){return console.log("onMoveEnd",t)}},r.a.createElement(V,{url:"/slides/2/{z}/{y}/{x}.jpg",minZoom:d||2,maxZoom:v||9,noWrap:!0,bounds:[[-90,-180],[90,180]]}))),r.a.createElement(c.a,{style:{marginTop:"30px"}})):null}}}]);
//# sourceMappingURL=component---src-templates-viewer-js-1f2ac04b0521c11089eb.js.map