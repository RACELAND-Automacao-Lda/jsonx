!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],r):r(e.Spectre={},e.React)}(this,function(e,r){"use strict";function a(e,r){return e(r={exports:{}},r.exports),r.exports}r=r&&r.hasOwnProperty("default")?r.default:r;var n=a(function(e){function r(){return e.exports=r=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}e.exports=r});var t=function(e,r){if(null==e)return{};var a,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],r.indexOf(a)>=0||(t[a]=e[a]);return t};var l=function(e,r){if(null==e)return{};var a,n,l=t(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l},s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function c(){}function o(){}o.resetWarningCache=c;var i=a(function(e){e.exports=function(){function e(e,r,a,n,t,l){if(l!==s){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function r(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:o,resetWarningCache:c};return a.PropTypes=a,a}()}),m=a(function(e){!function(){var r={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var l=typeof t;if("string"===l||"number"===l)e.push(t);else if(Array.isArray(t)&&t.length){var s=a.apply(null,t);s&&e.push(s)}else if("object"===l)for(var c in t)r.call(t,c)&&t[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):window.classNames=a}()}),p=function(e){var a=e.children,n=l(e,["children"]),t=n.tag,s=n.contents,c=n.label,o=l(n,["tag","contents","label"]);return r.createElement(t,o,a||s," ",c&&r.createElement(u,{contents:c}))};p.propTypes={tag:i.string,children:i.any,contents:i.any,label:i.any};var u=function(e){var a=e.children,t=l(e,["children"]),s=t.contents,c=t.className,o=l(t,["contents","className"]);return r.createElement("small",n({className:m("label",c)},o),a||s)};u.propTypes={children:i.any,contents:i.any,className:i.any};var d=function(e){return r.createElement(p,n({},e,{tag:"h1"}))},b=function(e){return r.createElement(p,n({},e,{tag:"h2"}))},h=function(e){return r.createElement(p,n({},e,{tag:"h3"}))},f=function(e){return r.createElement(p,n({},e,{tag:"h4"}))},v=function(e){return r.createElement(p,n({},e,{tag:"h5"}))},y=function(e){return r.createElement(p,n({},e,{tag:"h6"}))};d.propTypes=b.propTypes=h.propTypes=f.propTypes=v.propTypes=y.propTypes={children:i.any,contents:i.any,label:i.any},d.Label=b.Label=h.Label=f.Label=v.Label=y.Label=u;var g=Object.freeze({H1:d,H2:b,H3:h,H4:f,H5:v,H6:y,Label:u}),N=function(e){var a=e.children,t=l(e,["children"]),s=t.className,c=t.striped,o=t.hover,i=t.scroll,p=l(t,["className","striped","hover","scroll"]),u=m("table",s,{"table-striped":c,"table-hover":o,"table-scroll":i});return r.createElement("table",n({},p,{className:u}),a)};N.propTypes={children:i.any,className:i.any,striped:i.bool,hover:i.bool,scroll:i.bool};var E=function(e){var a=e.children,n=l(e,["children"]);return r.createElement("thead",n,a)};E.propTypes={children:i.any};var T=function(e){var a=e.children,n=l(e,["children"]);return r.createElement("tbody",n,a)};T.propTypes={children:i.any};var O=function(e){var a=e.children,t=l(e,["children"]),s=t.className,c=t.active,o=l(t,["className","active"]),i=m(s,{active:c});return r.createElement("tr",n({},o,{className:i}),a)};O.propTypes={children:i.any,className:i.any,active:i.bool};var x=function(e){var a=e.children,n=l(e,["children"]);return r.createElement("th",n,a)};x.propTypes={children:i.any};var w=function(e){var a=e.children,n=l(e,["children"]);return r.createElement("td",n,a)};w.propTypes={children:i.any},N.Header=E,N.Body=T,N.Row=O,N.Heading=x,N.Cell=w;var j=Object.freeze({Table:N,Header:E,Body:T,Row:O,Heading:x,Cell:w}),k=function(e){var a=e.children,t=l(e,["children"]),s=t.className,c=t.primary,o=t.link,i=t.success,p=t.error,u=t.block,d=t.small,b=t.large,h=t.action,f=t.circle,v=t.active,y=t.loading,g=l(t,["className","primary","link","success","error","block","small","large","action","circle","active","loading"]),N=m("btn",{"btn-primary":c,"btn-link":o,"btn-success":i,"btn-error":p,"btn-block":u,"btn-sm":d,"btn-lg":b,"btn-action":h||f,circle:f,active:v,loading:y},s);return r.createElement("button",n({},g,{className:N}),a)};k.propTypes={children:i.any,className:i.string,primary:i.bool,link:i.bool,success:i.bool,error:i.bool,block:i.bool,small:i.bool,large:i.bool,action:i.bool,circle:i.bool,active:i.bool,loading:i.bool};var P=function(e){var a=e.children,t=l(e,["children"]),s=t.block,c=l(t,["block"]),o=m("btn-group",{"btn-group-block":s});return r.createElement("div",n({},c,{className:o}),a)};P.propTypes={children:i.any,block:i.bool},k.Group=P;var z=Object.freeze({Button:k,Group:P}),B=function(e){var a=e.className,t=e.label,s=l(e,["className","label"]),c=m("form-radio",a);return r.createElement("label",{className:c},r.createElement("input",n({},s,{type:"radio"})),r.createElement("i",{className:"form-icon"})," ",t)};B.propTypes={className:i.string,label:i.string};var S=function(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e};var I=function(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(r){S(e,r,a[r])})}return e},A=function(e){var a=e.children,t=e.className,s=e.label,c=e.id,o=l(e,["children","className","label","id"]),i=m("form-group",t);return r.createElement("div",n({},o,{className:i}),s&&r.createElement("label",{className:"form-label",htmlFor:c},s),a)};A.propTypes={children:i.node.isRequired,className:i.string,label:i.string,id:i.string};var H=function(e){var a=e.className,t=e.label,s=e.id,c=l(e,["className","label","id"]),o={label:t,id:s},i=I({id:s},c),p=m("form-input",a);return r.createElement(A,o,r.createElement("input",n({},i,{className:p})))};H.propTypes={className:i.string,label:i.string,id:i.string};var C=function(e){var a=e.children,t=e.className,s=e.label,c=e.id,o=l(e,["children","className","label","id"]),i={label:s,id:c},p=I({id:c},o),u=m("form-select",t);return r.createElement(A,i,r.createElement("select",n({},p,{className:u}),a))};C.propTypes={children:i.oneOf([i.node,i.arrayOf(i.node)]),className:i.string,label:i.string,id:i.string};var L=function(e){var a=e.className,t=e.label,s=l(e,["className","label"]),c=m("form-switch",a);return r.createElement("label",{className:c},r.createElement("input",n({},s,{type:"checkbox"})),r.createElement("i",{className:"form-icon"})," ",t)};L.propTypes={className:i.string,label:i.string};var R=function(e){var a=e.className,t=e.label,s=l(e,["className","label"]),c=m("form-checkbox",a);return r.createElement("label",{className:c},r.createElement("input",n({},s,{type:"checkbox"})),r.createElement("i",{className:"form-icon"})," ",t)};R.propTypes={className:i.string,label:i.string};var _=function(e){var a=e.children,t=e.className,s=e.label,c=e.id,o=l(e,["children","className","label","id"]),i={label:s,id:c},p=I({id:c},o),u=m("form-input",t);return r.createElement(A,i,r.createElement("textarea",n({},p,{className:u}),a))};_.propTypes={children:i.string,className:i.string,label:i.string,id:i.string};var F=Object.freeze({Radio:B,Input:H,Select:C,Switch:L,CheckBox:R,TextArea:_,FormGroup:A}),G=function(e){var a=e.className,t=e.name,s=e.size,c=l(e,["className","name","size"]),o=m(a,"icon","icon-".concat(t),{"icon-2x":"2x"===s,"icon-3x":"3x"===s,"icon-4x":"4x"===s});return r.createElement("i",n({},c,{className:o}))};G.propTypes={className:i.string,name:i.string,size:i.string};var M=Object.freeze({Icon:G}),q=function(e){var a=e.children,t=l(e,["children"]),s=t.primary,c=t.secondary,o=t.success,i=t.warning,p=t.error,u=t.rounded,d=t.small,b=l(t,["primary","secondary","success","warning","error","rounded","small"]),h=m("label",{"label-primary":s,"label-secondary":c,"label-success":o,"label-warning":i,"label-error":p,"label-rounded":u}),f=d?"small":"span";return r.createElement(f,n({},b,{className:h}),a)};q.propTypes={children:i.node,primary:i.bool,secondary:i.bool,success:i.bool,warning:i.bool,error:i.bool,rounded:i.bool,small:i.bool};var D=Object.freeze({Label:q}),W=function(e){var a=e.responsive,t=e.contain,s=e.cover,c=l(e,["responsive","contain","cover"]),o=m({"img-responsive":a,"img-fit-contain":t,"img-fit-cover":s});return r.createElement("img",n({},c,{className:o}))};W.propTypes={responsive:i.bool,contain:i.bool,cover:i.bool};var U=function(e){var a=e.children,t=l(e,["children"]),s=t.tag,c=t.responsive,o=l(t,["tag","responsive"]),i=m({"video-responsive":c,"video-responsive-1-1":"1:1"===c,"video-responsive-4-3":"4:3"===c});return r.createElement(s,n({},o,{className:i}),a)},V=function(e){return r.createElement(U,n({},e,{tag:"video"}))},Y=function(e){return r.createElement(U,n({},e,{tag:"div"}))};U.propTypes=V.propTypes=Y.propTypes={children:i.node,responsive:i.oneOfType([i.bool,i.oneOf(["1:1","4:3","16:9"])])},V.Container=Y;var J=function(e){var a=e.children,t=l(e,["children"]),s=t.className,c=t.caption,o=t.captionAlignment,i=l(t,["className","caption","captionAlignment"]),p=m("figure",s),u=m("figure-caption",{"text-left":"left"===o,"text-center":"center"===o,"text-right":"right"===o});return r.createElement("figure",n({},i,{className:p}),a,c&&r.createElement("figcaption",{className:u},c))};J.propTypes={children:i.node,className:i.string,caption:i.string,captionAlignment:i.oneOf(["left","center","right"])};var K=Object.freeze({Image:W,Video:V,Container:Y,Figure:J}),Q=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},X=function(e,r){var a={};for(var n in e)r.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a},Z=function(e){var a,n,t,l,s,c,o=e.children,i=X(e,["children"]),p=i.className,u=X(i,["className"]),d=(n=(a=u).all,t=a.offset,l=a.hide,s=a.show,c=[],n?c.push("col-"+n):c.push(["xs","sm","md","lg","xl"].reduce(function(e,r){return a[r]?m(e,"col-"+r+"-"+a[r]):e},"")),t&&c.push("col-"+t+"-auto"),l&&c.push(m(l.map(function(e){return"hide-"+e}))),s&&c.push(m(s.map(function(e){return"show-"+e}))),c),b=m("column",d,p);return r.createElement("div",{className:b},o)};Z.propTypes={children:i.any,className:i.string,xs:i.number,sm:i.number,md:i.number,lg:i.number,xl:i.number,all:i.number,offset:i.string,hide:i.array,show:i.array};var $=function(e){var a=e.children,n=X(e,["children"]),t=n.className,l=n.gapless,s=n.oneline,c=X(n,["className","gapless","oneline"]),o=m("columns",{"col-gapless":l,"col-oneline":s},t);return r.createElement("div",Q({className:o},c),a)};$.propTypes={children:i.any,className:i.string,gapless:i.bool,oneline:i.bool};var ee=function(e){var a=e.children,n=X(e,["children"]),t=n.className,l=X(n,["className"]),s=m("container",t);return r.createElement("div",Q({className:s},l),a)};ee.propTypes={children:i.any,className:i.string};var re=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},ae=function(e,r){var a={};for(var n in e)r.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a},ne=function(e){var a=e.children,n=ae(e,["children"]),t=n.className,l=n.center,s=ae(n,["className","center"]),c=m({"navbar-section":!l,"navbar-center":l},t);return r.createElement("section",re({className:c},s),a)};ne.propTypes={children:i.any,className:i.string,center:i.bool};var te=function(e){var a=e.children,n=ae(e,["children"]),t=n.className,l=n.href,s=ae(n,["className","href"]),c=m("navbar-brand",t);return r.createElement("a",re({href:l||"#",className:c},s),a)};te.propTypes={children:i.any,className:i.string,href:i.string};var le=function(e){var a=e.children,n=ae(e,["children"]),t=n.className,l=ae(n,["className"]),s=m("navbar",t);return r.createElement("header",re({className:s},l),a)};le.propTypes={children:i.any,className:i.string},le.Section=ne,le.Brand=te;var se=Object.freeze({Grid:ee,Row:$,Col:Z,Navbar:le,Section:ne,Brand:te}),ce=function(e){var a=e.children,n=l(e,["children"]),t=n.className,s=function(e){var r=e.all,a=e.offset,n=e.hide,t=e.show,l=[];return r?l.push("".concat("col","-").concat(r)):l.push(["xs","sm","md","lg","xl"].reduce(function(r,a){return e[a]?m(r,"".concat("col","-").concat(a,"-").concat(e[a])):r},"")),a&&l.push("".concat("col","-").concat(a,"-auto")),n&&l.push(m(n.map(function(e){return"hide-".concat(e)}))),t&&l.push(m(t.map(function(e){return"show-".concat(e)}))),l}(l(n,["className"])),c=m("column",s,t);return r.createElement("div",{className:c},a)};ce.propTypes={children:i.any,className:i.string,xs:i.number,sm:i.number,md:i.number,lg:i.number,xl:i.number,all:i.number,offset:i.string,hide:i.array,show:i.array};var oe=function(e){var a=e.children,t=l(e,["children"]),s=t.className,c=t.gapless,o=t.oneline,i=l(t,["className","gapless","oneline"]),p=m("columns",{"col-gapless":c,"col-oneline":o},s);return r.createElement("div",n({className:p},i),a)};oe.propTypes={children:i.any,className:i.string,gapless:i.bool,oneline:i.bool};var ie=function(e){var a=e.children,t=l(e,["children"]),s=t.className,c=l(t,["className"]),o=m("container",s);return r.createElement("div",n({className:o},c),a)};ie.propTypes={children:i.any,className:i.string};var me=Object.freeze({Col:ce,Row:oe,Grid:ie}),pe=function(e){var a=e.children,t=l(e,["children"]),s=t.className,c=t.center,o=l(t,["className","center"]),i=m({"navbar-section":!c,"navbar-center":c},s);return r.createElement("section",n({className:i},o),a)};pe.propTypes={children:i.any,className:i.string,center:i.bool};var ue=function(e){var a=e.children,t=l(e,["children"]),s=t.className,c=t.href,o=l(t,["className","href"]),i=m("navbar-brand",s);return r.createElement("a",n({href:c||"#",className:i},o),a)};ue.propTypes={children:i.any,className:i.string,href:i.string};var de=function(e){var a=e.children,t=l(e,["children"]),s=t.className,c=l(t,["className"]),o=m("navbar",s);return r.createElement("header",n({className:o},c),a)};de.propTypes={children:i.any,className:i.string},de.Section=pe,de.Brand=ue;var be=Object.freeze({Navbar:de,Section:pe,Brand:ue}),he=function(e){var a=e.children,n=l(e,["children"]),t=n.className,s=n.id,c=m("accordion-header c-hand",t);return r.createElement(r.Fragment,null,r.createElement("input",{type:"checkbox",id:s,hidden:!0}),r.createElement("label",{className:c,htmlFor:s},a))};he.propTypes={children:i.any,className:i.string,id:i.string};var fe=function(e){var a=e.children,t=l(e,["children"]),s=t.className,c=l(t,["className"]),o=m("accordion-body",s);return r.createElement("div",n({className:o},c),a)};fe.propTypes={children:i.any,className:i.string};var ve=function(e){var a=e.children,t=l(e,["children"]),s=t.className,c=l(t,["className"]),o=m("accordion",s);return r.createElement("div",n({className:o},c),a)};ve.propTypes={children:i.any,className:i.string},ve.Body=fe,ve.Header=he;var ye=Object.freeze({Accordion:ve,Header:he,Body:fe}),ge=function(e){var a=e.children,t=l(e,["children"]),s=t.className,c=t.focus,o=l(t,["className","focus"]),i=m("form-autocomplete-input",{"is-focused":c},s);return r.createElement("div",n({className:i},o),a)};ge.propTypes={children:i.any,className:i.string,focus:i.bool};var Ne=function(e){var a=e.children,t=l(e,["children"]),s=t.className,c=l(t,["className"]),o=m("menu",s);return r.createElement("ul",n({className:o},c),a)};Ne.propTypes={children:i.any,className:i.string};var Ee=function(e){var a=e.children,t=l(e,["children"]),s=t.className,c=l(t,["className"]),o=m("form-autocomplete",s);return r.createElement("div",n({className:o},c),a)};Ee.Input=ge,Ee.Menu=Ne,Ee.propTypes={children:i.any,className:i.string};var Te=Object.freeze({Autocomplete:Ee,Input:ge,Menu:Ne}),Oe=function(e){var a=e.className,t=l(e,["className"]),s=m("avatar-icon",a);return r.createElement("img",n({className:s},t))};Oe.propTypes={className:i.string};var xe=function(e){var a=e.className,t=e.online,s=e.busy,c=e.away,o=l(e,["className","online","busy","away"]),i=m("avatar-presence",{online:t,busy:s,away:c},a);return r.createElement("i",n({className:i},o))};xe.propTypes={className:i.string,online:i.bool,busy:i.bool,away:i.bool};var we=function(e){var a=e.children,t=l(e,["children"]),s=t.className,c=t.src,o=t.initial,i=t.icon,p=t.xs,u=t.sm,d=t.lg,b=t.xl,h=l(t,["className","src","initial","icon","xs","sm","lg","xl"]),f=c&&r.createElement("img",{src:c}),v=i&&r.createElement(Oe,{src:c}),y=m("avatar",{"avatar-xl":b,"avatar-lg":d,"avatar-sm":u,"avatar-xs":p},s);return r.createElement("figure",n({className:y,"data-initial":o},h),a,f,v)};we.propTypes={children:i.any,className:i.string,src:i.string,initial:i.string,icon:i.string,xs:i.bool,sm:i.bool,lg:i.bool,xl:i.bool},we.Icon=Oe,we.Presence=xe;var je=Object.freeze({Avatar:we,Icon:Oe,Presence:xe}),ke=function(e){var a=e.children,n=e.label;return r.createElement(r.Fragment,null,r.Children.map(a,function(e){var a={className:m("badge",e.props.className),"data-badge":n&&n>=0?n:""};return r.cloneElement(e,a)}))};ke.propTypes={children:i.any,label:i.number};var Pe=Object.freeze({Badge:ke}),ze=function(e){var a=e.children,t=l(e,["children"]),s=t.className,c=t.progress,o=t.style,i=l(t,["className","progress","style"]),p=m("bar-item",s),u=I({},o,{width:"".concat(c,"%")});return r.createElement("div",n({},i,{className:p,role:"progressbar",style:u}),a)};ze.propTypes={children:i.node,className:i.string,progress:i.number,style:i.object};var Be=function(e){var a=e.children,n=l(e,["children"]),t=n.className,s=n.small,c=n.progress,o=m("bar",t,{"bar-sm":s});return r.createElement("div",{className:o},void 0===c||void 0!==a?a:r.createElement(ze,{progress:c}))};Be.propTypes={children:i.node,className:i.string,small:i.bool,progress:i.number},Be.Item=ze;var Se=function(e){var a=e.className,t=e.progress,s=e.style,c=l(e,["className","progress","style"]),o=m("bar-item",a),i=I({},s,{width:"".concat(t,"%")});return r.createElement("div",n({},c,{className:o,role:"progressbar",style:i}),r.createElement("button",{className:"bar-slider-btn btn",role:"slider"}))};Se.propTypes={className:i.string,progress:i.number,style:i.object};var Ie=function(e){var a=e.children,t=l(e,["children"]),s=t.className,c=t.progress,o=l(t,["className","progress"]),i=m("bar-slider",s);return r.createElement(Be,n({},o,{className:i}),void 0===c||void 0!==a?a:r.createElement(Se,{progress:c}))};Ie.propTypes={children:i.node,className:i.string,progress:i.oneOfType(i.string,i.number)},Ie.Item=Se;var Ae=Object.freeze({Bar:Be,Slider:Ie}),He=function(e){var a,t=e.className,s=e.primary,c=e.success,o=e.warning,i=e.error,p=e.children,u=l(e,["className","primary","success","warning","error","children"]),d=function(e){return"toast-".concat(e)},b=m("toast",t,(S(a={},d("primary"),s),S(a,d("success"),c),S(a,d("warning"),o),S(a,d("error"),i),a));return r.createElement("div",n({className:b},u),p)};He.propTypes={className:i.string,primary:i.bool,success:i.bool,warning:i.bool,error:i.bool,children:i.any};var Ce=Object.freeze({Toast:He});e.Typography=g,e.Table=j,e.Button=z,e.Form=F,e.Icon=M,e.Label=D,e.Media=K,e.Layout=se,e.Grid=me,e.Navbar=be,e.Accordion=ye,e.Autocomplete=Te,e.Avatar=je,e.Badge=Pe,e.Bar=Ae,e.Toast=Ce,Object.defineProperty(e,"__esModule",{value:!0})});
