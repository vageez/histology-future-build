(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0PSK":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r);t.a=o.a.createContext(null)},"8/g6":function(e,t,n){"use strict";n("R48M");var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=a.default.memo(a.default.forwardRef((function(t,n){return a.default.createElement(i.default,(0,o.default)({ref:n},t),e)})));0;return n.muiName=i.default.muiName,n};var o=r(n("pVnL")),a=r(n("q1tI")),i=r(n("UJJ5"))},"8ypT":function(e,t,n){},Bl7J:function(e,t,n){"use strict";var r=n("IRj2"),o=n("q1tI"),a=n.n(o),i=n("tRbT"),c=n("U5uR"),l=n("wx14"),s=n("Ff2n"),u=(n("17x9"),n("iuhU")),d=n("H2TA"),p=n("NqtD"),f=n("kKAo"),m=o.forwardRef((function(e,t){var n=e.classes,r=e.className,a=e.color,i=void 0===a?"primary":a,c=e.position,d=void 0===c?"fixed":c,m=Object(s.a)(e,["classes","className","color","position"]);return o.createElement(f.a,Object(l.a)({square:!0,component:"header",elevation:4,className:Object(u.a)(n.root,n["position".concat(Object(p.a)(d))],n["color".concat(Object(p.a)(i))],r,"fixed"===d&&"mui-fixed"),ref:t},m))})),h=Object(d.a)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static",transform:"translateZ(0)"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(m),v=n("lO0E"),b=n("PsDL"),g=n("ofer"),y=n("uniG"),x=n.n(y),O=function(e){var t=e.siteTitle,n=Object(c.d)()[1];return a.a.createElement(h,{position:"static"},a.a.createElement(v.a,{variant:"dense",disableGutters:!0},a.a.createElement(i.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center"},a.a.createElement(b.a,{onClick:function(){return n(Object(c.c)())},color:"secondary"},a.a.createElement(x.a,null)),a.a.createElement(g.a,{variant:"h6",color:"inherit"},t))))};n("8ypT"),t.a=function(e){var t=e.children,n=r.data;return a.a.createElement(c.a,null,a.a.createElement(O,{siteTitle:n.site.siteMetadata.title}),a.a.createElement("div",{style:{margin:"15px auto 0",padding:"0 1.0875rem 1.45rem"}},a.a.createElement("main",null,t),a.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",a.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"McGill University","description":"","author":"@vageez"}}}}')},G7As:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("q1tI"),o=n("i8i4"),a=!0,i=!1,c=null,l={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function s(e){e.metaKey||e.altKey||e.ctrlKey||(a=!0)}function u(){a=!1}function d(){"hidden"===this.visibilityState&&i&&(a=!0)}function p(e){var t,n,r,o=e.target;try{return o.matches(":focus-visible")}catch(i){}return a||(n=(t=o).type,!("INPUT"!==(r=t.tagName)||!l[n]||t.readOnly)||"TEXTAREA"===r&&!t.readOnly||!!t.isContentEditable)}function f(){i=!0,window.clearTimeout(c),c=window.setTimeout((function(){i=!1}),100)}function m(){return{isFocusVisible:p,onBlurVisible:f,ref:r.useCallback((function(e){var t,n=o.findDOMNode(e);null!=n&&((t=n.ownerDocument).addEventListener("keydown",s,!0),t.addEventListener("mousedown",u,!0),t.addEventListener("pointerdown",u,!0),t.addEventListener("touchstart",u,!0),t.addEventListener("visibilitychange",d,!0))}),[])}}},GIek:function(e,t,n){"use strict";function r(e,t){"function"==typeof e?e(t):e&&(e.current=t)}n.d(t,"a",(function(){return r}))},HR5l:function(e,t,n){"use strict";var r=n("wx14"),o=n("Ff2n"),a=n("q1tI"),i=(n("17x9"),n("iuhU")),c=n("H2TA"),l=n("NqtD"),s=a.forwardRef((function(e,t){var n=e.children,c=e.classes,s=e.className,u=e.color,d=void 0===u?"inherit":u,p=e.component,f=void 0===p?"svg":p,m=e.fontSize,h=void 0===m?"default":m,v=e.htmlColor,b=e.titleAccess,g=e.viewBox,y=void 0===g?"0 0 24 24":g,x=Object(o.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return a.createElement(f,Object(r.a)({className:Object(i.a)(c.root,s,"inherit"!==d&&c["color".concat(Object(l.a)(d))],"default"!==h&&c["fontSize".concat(Object(l.a)(h))]),focusable:"false",viewBox:y,color:v,"aria-hidden":b?void 0:"true",role:b?"img":void 0,ref:t},x),n,b?a.createElement("title",null,b):null)}));s.muiName="SvgIcon",t.a=Object(c.a)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(s)},IRj2:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"McGill University"}}}}')},NqtD:function(e,t,n){"use strict";function r(e){return e.charAt(0).toUpperCase()+e.slice(1)}n.d(t,"a",(function(){return r}))},Ovef:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI"),o="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;function a(e){var t=r.useRef(e);return o((function(){t.current=e})),r.useCallback((function(){return t.current.apply(void 0,arguments)}),[])}},PsDL:function(e,t,n){"use strict";n("wZFJ");var r=n("wx14"),o=n("Ff2n"),a=n("q1tI"),i=(n("17x9"),n("iuhU")),c=n("H2TA"),l=n("ye/S"),s=n("VD++"),u=n("NqtD"),d=a.forwardRef((function(e,t){var n=e.edge,c=void 0!==n&&n,l=e.children,d=e.classes,p=e.className,f=e.color,m=void 0===f?"default":f,h=e.disabled,v=void 0!==h&&h,b=e.disableFocusRipple,g=void 0!==b&&b,y=e.size,x=void 0===y?"medium":y,O=Object(o.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return a.createElement(s.a,Object(r.a)({className:Object(i.a)(d.root,p,"default"!==m&&d["color".concat(Object(u.a)(m))],v&&d.disabled,"small"===x&&d["size".concat(Object(u.a)(x))],{start:d.edgeStart,end:d.edgeEnd}[c]),centerRipple:!0,focusRipple:!g,disabled:v,ref:t},O),a.createElement("span",{className:d.label},l))}));t.a=Object(c.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(l.c)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(l.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(l.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(d)},U5uR:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return u}));var r=n("q1tI"),o=n.n(r),a=function(){return{type:"OPEN_MENU"}},i=function(){return{type:"CLOSE_MENU"}},c=function(e,t){switch(t.type){case"OPEN_MENU":return!0;case"CLOSE_MENU":return!1;default:throw new Error}},l=Object(r.createContext)(void 0),s=function(e){var t=e.children,n=Object(r.useReducer)(c,!1),a=n[0],i=n[1];return o.a.createElement(l.Provider,{value:[a,i]},t)},u=function(){var e=Object(r.useContext)(l),t=e[0],n=e[1];return Object(r.useMemo)((function(){return[t,n]}),[t,n])}},UJJ5:function(e,t,n){"use strict";n.r(t);var r=n("HR5l");n.d(t,"default",(function(){return r.a}))},"VD++":function(e,t,n){"use strict";var r=n("wx14"),o=n("Ff2n"),a=n("q1tI"),i=n.n(a),c=(n("17x9"),n("i8i4")),l=n("iuhU"),s=n("bfFb"),u=n("Ovef"),d=n("H2TA"),p=n("G7As"),f=n("KQm4"),m=(n("n7j8"),n("Ggvi"),n("AqHK"),n("rzGZ"),n("Dq+y"),n("8npG"),n("cxuS"),n("zLVn")),h=n("dI71"),v=n("JX7q"),b=n("0PSK");n("JHok"),n("pS08");function g(e,t){var n=Object.create(null);return e&&a.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&Object(a.isValidElement)(e)?t(e):e}(e)})),n}function y(e,t,n){return null!=n[t]?n[t]:e.props[t]}function x(e,t,n){var r=g(e.children),o=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,o=Object.create(null),a=[];for(var i in e)i in t?a.length&&(o[i]=a,a=[]):a.push(i);var c={};for(var l in t){if(o[l])for(r=0;r<o[l].length;r++){var s=o[l][r];c[o[l][r]]=n(s)}c[l]=n(l)}for(r=0;r<a.length;r++)c[a[r]]=n(a[r]);return c}(t,r);return Object.keys(o).forEach((function(i){var c=o[i];if(Object(a.isValidElement)(c)){var l=i in t,s=i in r,u=t[i],d=Object(a.isValidElement)(u)&&!u.props.in;!s||l&&!d?s||!l||d?s&&l&&Object(a.isValidElement)(u)&&(o[i]=Object(a.cloneElement)(c,{onExited:n.bind(null,c),in:u.props.in,exit:y(c,"exit",e),enter:y(c,"enter",e)})):o[i]=Object(a.cloneElement)(c,{in:!1}):o[i]=Object(a.cloneElement)(c,{onExited:n.bind(null,c),in:!0,exit:y(c,"exit",e),enter:y(c,"enter",e)})}})),o}var O=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},j=function(e){function t(t,n){var r,o=(r=e.call(this,t,n)||this).handleExited.bind(Object(v.a)(Object(v.a)(r)));return r.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},r}Object(h.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,o=t.children,i=t.handleExited;return{children:t.firstRender?(n=e,r=i,g(n.children,(function(e){return Object(a.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:y(e,"appear",n),enter:y(e,"enter",n),exit:y(e,"exit",n)})}))):x(e,o,i),firstRender:!1}},n.handleExited=function(e,t){var n=g(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=Object(r.a)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=Object(m.a)(e,["component","childFactory"]),o=this.state.contextValue,a=O(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?i.a.createElement(b.a.Provider,{value:o},a):i.a.createElement(b.a.Provider,{value:o},i.a.createElement(t,r,a))},t}(i.a.Component);j.propTypes={},j.defaultProps={component:"div",childFactory:function(e){return e}};var w=j,E="undefined"==typeof window?a.useEffect:a.useLayoutEffect;var S=function(e){var t=e.classes,n=e.pulsate,r=void 0!==n&&n,o=e.rippleX,i=e.rippleY,c=e.rippleSize,s=e.in,d=e.onExited,p=void 0===d?function(){}:d,f=e.timeout,m=a.useState(!1),h=m[0],v=m[1],b=Object(l.a)(t.ripple,t.rippleVisible,r&&t.ripplePulsate),g={width:c,height:c,top:-c/2+i,left:-c/2+o},y=Object(l.a)(t.child,h&&t.childLeaving,r&&t.childPulsate),x=Object(u.a)(p);return E((function(){if(!s){v(!0);var e=setTimeout(x,f);return function(){clearTimeout(e)}}}),[x,s,f]),a.createElement("span",{className:b,style:g},a.createElement("span",{className:y}))},R=a.forwardRef((function(e,t){var n=e.center,i=void 0!==n&&n,c=e.classes,s=e.className,u=Object(o.a)(e,["center","classes","className"]),d=a.useState([]),p=d[0],m=d[1],h=a.useRef(0),v=a.useRef(null);a.useEffect((function(){v.current&&(v.current(),v.current=null)}),[p]);var b=a.useRef(!1),g=a.useRef(null),y=a.useRef(null),x=a.useRef(null);a.useEffect((function(){return function(){clearTimeout(g.current)}}),[]);var O=a.useCallback((function(e){var t=e.pulsate,n=e.rippleX,r=e.rippleY,o=e.rippleSize,i=e.cb;m((function(e){return[].concat(Object(f.a)(e),[a.createElement(S,{key:h.current,classes:c,timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:o})])})),h.current+=1,v.current=i}),[c]),j=a.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=t.pulsate,o=void 0!==r&&r,a=t.center,c=void 0===a?i||t.pulsate:a,l=t.fakeElement,s=void 0!==l&&l;if("mousedown"===e.type&&b.current)b.current=!1;else{"touchstart"===e.type&&(b.current=!0);var u,d,p,f=s?null:x.current,m=f?f.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(c||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)u=Math.round(m.width/2),d=Math.round(m.height/2);else{var h=e.clientX?e.clientX:e.touches[0].clientX,v=e.clientY?e.clientY:e.touches[0].clientY;u=Math.round(h-m.left),d=Math.round(v-m.top)}if(c)(p=Math.sqrt((2*Math.pow(m.width,2)+Math.pow(m.height,2))/3))%2==0&&(p+=1);else{var j=2*Math.max(Math.abs((f?f.clientWidth:0)-u),u)+2,w=2*Math.max(Math.abs((f?f.clientHeight:0)-d),d)+2;p=Math.sqrt(Math.pow(j,2)+Math.pow(w,2))}e.touches?null===y.current&&(y.current=function(){O({pulsate:o,rippleX:u,rippleY:d,rippleSize:p,cb:n})},g.current=setTimeout((function(){y.current&&(y.current(),y.current=null)}),80)):O({pulsate:o,rippleX:u,rippleY:d,rippleSize:p,cb:n})}}),[i,O]),E=a.useCallback((function(){j({},{pulsate:!0})}),[j]),R=a.useCallback((function(e,t){if(clearTimeout(g.current),"touchend"===e.type&&y.current)return e.persist(),y.current(),y.current=null,void(g.current=setTimeout((function(){R(e,t)})));y.current=null,m((function(e){return e.length>0?e.slice(1):e})),v.current=t}),[]);return a.useImperativeHandle(t,(function(){return{pulsate:E,start:j,stop:R}}),[E,j,R]),a.createElement("span",Object(r.a)({className:Object(l.a)(c.root,s),ref:x},u),a.createElement(w,{component:null,exit:!0},p))})),k=Object(d.a)((function(e){return{root:{overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"},ripple:{opacity:0,position:"absolute"},rippleVisible:{opacity:.3,transform:"scale(1)",animation:"$enter ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},ripplePulsate:{animationDuration:"".concat(e.transitions.duration.shorter,"ms")},child:{opacity:1,display:"block",width:"100%",height:"100%",borderRadius:"50%",backgroundColor:"currentColor"},childLeaving:{opacity:0,animation:"$exit ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},childPulsate:{position:"absolute",left:0,top:0,animation:"$pulsate 2500ms ".concat(e.transitions.easing.easeInOut," 200ms infinite")},"@keyframes enter":{"0%":{transform:"scale(0)",opacity:.1},"100%":{transform:"scale(1)",opacity:.3}},"@keyframes exit":{"0%":{opacity:1},"100%":{opacity:0}},"@keyframes pulsate":{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.92)"},"100%":{transform:"scale(1)"}}}}),{flip:!1,name:"MuiTouchRipple"})(a.memo(R)),M=a.forwardRef((function(e,t){var n=e.action,i=e.buttonRef,d=e.centerRipple,f=void 0!==d&&d,m=e.children,h=e.classes,v=e.className,b=e.component,g=void 0===b?"button":b,y=e.disabled,x=void 0!==y&&y,O=e.disableRipple,j=void 0!==O&&O,w=e.disableTouchRipple,E=void 0!==w&&w,S=e.focusRipple,R=void 0!==S&&S,M=e.focusVisibleClassName,T=e.onBlur,C=e.onClick,N=e.onFocus,I=e.onFocusVisible,z=e.onKeyDown,D=e.onKeyUp,q=e.onMouseDown,P=e.onMouseLeave,A=e.onMouseUp,U=e.onTouchEnd,B=e.onTouchMove,F=e.onTouchStart,L=e.onDragLeave,V=e.tabIndex,H=void 0===V?0:V,G=e.TouchRippleProps,W=e.type,J=void 0===W?"button":W,K=Object(o.a)(e,["action","buttonRef","centerRipple","children","classes","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","onBlur","onClick","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","onDragLeave","tabIndex","TouchRippleProps","type"]),X=a.useRef(null);var Y=a.useRef(null),$=a.useState(!1),_=$[0],Z=$[1];x&&_&&Z(!1);var Q=Object(p.a)(),ee=Q.isFocusVisible,te=Q.onBlurVisible,ne=Q.ref;function re(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:E;return Object(u.a)((function(r){return t&&t(r),!n&&Y.current&&Y.current[e](r),!0}))}a.useImperativeHandle(n,(function(){return{focusVisible:function(){Z(!0),X.current.focus()}}}),[]),a.useEffect((function(){_&&R&&!j&&Y.current.pulsate()}),[j,R,_]);var oe=re("start",q),ae=re("stop",L),ie=re("stop",A),ce=re("stop",(function(e){_&&e.preventDefault(),P&&P(e)})),le=re("start",F),se=re("stop",U),ue=re("stop",B),de=re("stop",(function(e){_&&(te(e),Z(!1)),T&&T(e)}),!1),pe=Object(u.a)((function(e){X.current||(X.current=e.currentTarget),ee(e)&&(Z(!0),I&&I(e)),N&&N(e)})),fe=function(){var e=c.findDOMNode(X.current);return g&&"button"!==g&&!("A"===e.tagName&&e.href)},me=a.useRef(!1),he=Object(u.a)((function(e){R&&!me.current&&_&&Y.current&&" "===e.key&&(me.current=!0,e.persist(),Y.current.stop(e,(function(){Y.current.start(e)}))),e.target===e.currentTarget&&fe()&&" "===e.key&&e.preventDefault(),z&&z(e),e.target===e.currentTarget&&fe()&&"Enter"===e.key&&!x&&(e.preventDefault(),C&&C(e))})),ve=Object(u.a)((function(e){R&&" "===e.key&&Y.current&&_&&!e.defaultPrevented&&(me.current=!1,e.persist(),Y.current.stop(e,(function(){Y.current.pulsate(e)}))),D&&D(e),C&&e.target===e.currentTarget&&fe()&&" "===e.key&&!e.defaultPrevented&&C(e)})),be=g;"button"===be&&K.href&&(be="a");var ge={};"button"===be?(ge.type=J,ge.disabled=x):("a"===be&&K.href||(ge.role="button"),ge["aria-disabled"]=x);var ye=Object(s.a)(i,t),xe=Object(s.a)(ne,X),Oe=Object(s.a)(ye,xe),je=a.useState(!1),we=je[0],Ee=je[1];a.useEffect((function(){Ee(!0)}),[]);var Se=we&&!j&&!x;return a.createElement(be,Object(r.a)({className:Object(l.a)(h.root,v,_&&[h.focusVisible,M],x&&h.disabled),onBlur:de,onClick:C,onFocus:pe,onKeyDown:he,onKeyUp:ve,onMouseDown:oe,onMouseLeave:ce,onMouseUp:ie,onDragLeave:ae,onTouchEnd:se,onTouchMove:ue,onTouchStart:le,ref:Oe,tabIndex:x?-1:H},ge,K),m,Se?a.createElement(k,Object(r.a)({ref:Y,center:f},G)):null)}));t.a=Object(d.a)({root:{display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},"&$disabled":{pointerEvents:"none",cursor:"default"}},disabled:{},focusVisible:{}},{name:"MuiButtonBase"})(M)},bfFb:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI"),o=n("GIek");function a(e,t){return r.useMemo((function(){return null==e&&null==t?null:function(n){Object(o.a)(e,n),Object(o.a)(t,n)}}),[e,t])}},cxuS:function(e,t,n){var r=n("P8UN"),o=n("ys0W")(!1);r(r.S,"Object",{values:function(e){return o(e)}})},kKAo:function(e,t,n){"use strict";n("JHok");var r=n("Ff2n"),o=n("wx14"),a=n("q1tI"),i=(n("17x9"),n("iuhU")),c=n("H2TA"),l=a.forwardRef((function(e,t){var n=e.classes,c=e.className,l=e.component,s=void 0===l?"div":l,u=e.square,d=void 0!==u&&u,p=e.elevation,f=void 0===p?1:p,m=e.variant,h=void 0===m?"elevation":m,v=Object(r.a)(e,["classes","className","component","square","elevation","variant"]);return a.createElement(s,Object(o.a)({className:Object(i.a)(n.root,c,"outlined"===h?n.outlined:n["elevation".concat(f)],!d&&n.rounded),ref:t},v))}));t.a=Object(c.a)((function(e){var t={};return e.shadows.forEach((function(e,n){t["elevation".concat(n)]={boxShadow:e}})),Object(o.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(l)},lO0E:function(e,t,n){"use strict";var r=n("wx14"),o=n("Ff2n"),a=n("rePB"),i=n("q1tI"),c=(n("17x9"),n("iuhU")),l=n("H2TA"),s=i.forwardRef((function(e,t){var n=e.classes,a=e.className,l=e.component,s=void 0===l?"div":l,u=e.disableGutters,d=void 0!==u&&u,p=e.variant,f=void 0===p?"regular":p,m=Object(o.a)(e,["classes","className","component","disableGutters","variant"]);return i.createElement(s,Object(r.a)({className:Object(c.a)(n.root,n[f],a,!d&&n.gutters),ref:t},m))}));t.a=Object(l.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:Object(a.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(s)},ofer:function(e,t,n){"use strict";var r=n("wx14"),o=n("Ff2n"),a=n("q1tI"),i=(n("17x9"),n("iuhU")),c=n("H2TA"),l=n("NqtD"),s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},u=a.forwardRef((function(e,t){var n=e.align,c=void 0===n?"inherit":n,u=e.classes,d=e.className,p=e.color,f=void 0===p?"initial":p,m=e.component,h=e.display,v=void 0===h?"initial":h,b=e.gutterBottom,g=void 0!==b&&b,y=e.noWrap,x=void 0!==y&&y,O=e.paragraph,j=void 0!==O&&O,w=e.variant,E=void 0===w?"body1":w,S=e.variantMapping,R=void 0===S?s:S,k=Object(o.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),M=m||(j?"p":R[E]||s[E])||"span";return a.createElement(M,Object(r.a)({className:Object(i.a)(u.root,d,"inherit"!==E&&u[E],"initial"!==f&&u["color".concat(Object(l.a)(f))],x&&u.noWrap,g&&u.gutterBottom,j&&u.paragraph,"inherit"!==c&&u["align".concat(Object(l.a)(c))],"initial"!==v&&u["display".concat(Object(l.a)(v))]),ref:t},k))}));t.a=Object(c.a)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(u)},tRbT:function(e,t,n){"use strict";n("rzGZ"),n("Dq+y"),n("8npG"),n("U6Bt"),n("sC2a"),n("JHok");var r=n("Ff2n"),o=n("wx14"),a=n("q1tI"),i=(n("17x9"),n("iuhU")),c=n("H2TA"),l=[0,1,2,3,4,5,6,7,8,9,10],s=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var d=a.forwardRef((function(e,t){var n=e.alignContent,c=void 0===n?"stretch":n,l=e.alignItems,s=void 0===l?"stretch":l,u=e.classes,d=e.className,p=e.component,f=void 0===p?"div":p,m=e.container,h=void 0!==m&&m,v=e.direction,b=void 0===v?"row":v,g=e.item,y=void 0!==g&&g,x=e.justify,O=void 0===x?"flex-start":x,j=e.lg,w=void 0!==j&&j,E=e.md,S=void 0!==E&&E,R=e.sm,k=void 0!==R&&R,M=e.spacing,T=void 0===M?0:M,C=e.wrap,N=void 0===C?"wrap":C,I=e.xl,z=void 0!==I&&I,D=e.xs,q=void 0!==D&&D,P=e.zeroMinWidth,A=void 0!==P&&P,U=Object(r.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),B=Object(i.a)(u.root,d,h&&[u.container,0!==T&&u["spacing-xs-".concat(String(T))]],y&&u.item,A&&u.zeroMinWidth,"row"!==b&&u["direction-xs-".concat(String(b))],"wrap"!==N&&u["wrap-xs-".concat(String(N))],"stretch"!==s&&u["align-items-xs-".concat(String(s))],"stretch"!==c&&u["align-content-xs-".concat(String(c))],"flex-start"!==O&&u["justify-xs-".concat(String(O))],!1!==q&&u["grid-xs-".concat(String(q))],!1!==k&&u["grid-sm-".concat(String(k))],!1!==S&&u["grid-md-".concat(String(S))],!1!==w&&u["grid-lg-".concat(String(w))],!1!==z&&u["grid-xl-".concat(String(z))]);return a.createElement(f,Object(o.a)({className:B,ref:t},U))})),p=Object(c.a)((function(e){return Object(o.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return l.forEach((function(r){var o=e.spacing(r);0!==o&&(n["spacing-".concat(t,"-").concat(r)]={margin:"-".concat(u(o,2)),width:"calc(100% + ".concat(u(o),")"),"& > $item":{padding:u(o,2)}})})),n}(e,"xs"),{},e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var r={};s.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var o="".concat(Math.round(e/12*1e8)/1e6,"%");r[t]={flexBasis:o,flexGrow:0,maxWidth:o}}else r[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(o.a)(e,r):e[t.breakpoints.up(n)]=r}(t,e,n),t}),{}))}),{name:"MuiGrid"})(d);t.a=p},uniG:function(e,t,n){"use strict";n("R48M");var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("q1tI")),a=(0,r(n("8/g6")).default)(o.default.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");t.default=a},vrFN:function(e,t,n){"use strict";var r=n("EH9Q"),o=n("q1tI"),a=n.n(o),i=n("qhky");function c(e){var t=e.description,n=e.lang,o=e.meta,c=e.title,l=r.data.site,s=t||l.siteMetadata.description;return a.a.createElement(i.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(o)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c}}]);
//# sourceMappingURL=25cbcb82e3184b41bf95c2ae492458aab959e235-9a8e388ba8cc01d10957.js.map