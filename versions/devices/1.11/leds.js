(function(){/*
 http://pcjs.org/modules/devices/device.js (C) Jeff Parsons 2012-2017
 http://pcjs.org/modules/devices/input.js (C) Jeff Parsons 2012-2017
 http://pcjs.org/modules/devices/led.js (C) Jeff Parsons 2012-2017
 http://pcjs.org/modules/devices/rom.js (C) Jeff Parsons 2012-2017
 http://pcjs.org/modules/devices/time.js (C) Jeff Parsons 2012-2017
 http://pcjs.org/modules/devices/ledctrl.js (C) Jeff Parsons 2012-2017
 http://pcjs.org/modules/devices/machine.js (C) Jeff Parsons 2012-2017
*/
var t,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ba;if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={bb:!0},ea={};try{ea.__proto__=da;ca=ea.bb;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba;
function u(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ib=b.prototype}var ha="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},y="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ia(){ia=function(){};y.Symbol||(y.Symbol=ja)}var ja=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();function ka(){ia();var a=y.Symbol.iterator;a||(a=y.Symbol.iterator=y.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ha(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return la(this)}});ka=function(){}}function la(a){var b=0;return ma(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}
function ma(a){ka();a={next:a};a[y.Symbol.iterator]=function(){return this};return a}function na(a){ka();var b=a[Symbol.iterator];return b?b.call(a):la(a)}function oa(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}function C(a,b){if(b){var c=y;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ha(c,a,{configurable:!0,writable:!0,value:b})}}C("Number.parseInt",function(a){return a||parseInt});
C("Math.trunc",function(a){return a?a:function(a){a=Number(a);if(isNaN(a)||Infinity===a||-Infinity===a||0===a)return a;var b=Math.floor(Math.abs(a));return 0>a?-b:b}});C("Array.prototype.fill",function(a){return a?a:function(a,c,d){var b=this.length||0;0>c&&(c=Math.max(0,b+c));if(null==d||d>b)d=b;d=Number(d);0>d&&(d=Math.max(0,b+d));for(c=Number(c||0);c<d;c++)this[c]=a;return this}});C("Math.log2",function(a){return a?a:function(a){return Math.log(a)/Math.LN2}});
C("String.prototype.startsWith",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");var b=this+"";a+="";var e=b.length,f=a.length;c=Math.max(0,Math.min(c|0,b.length));for(var h=0;h<f&&c<e;)if(b[c++]!=a[h++])return!1;return h>=f}});var pa="Machine";
function D(a,b,c,d){this.ha=d||{};this.ma=a;this.Sa=b;this.version=c||0;this.ja={};E[this.ma]||(E[this.ma]=[]);E[this.ma].push(this);qa(this,this.ha);ra(this,this.ha);sa(this,this.ha.bindings);this.Wa=""}var ta;
D.prototype.Ga=function(a,b){var c=this;switch(a){case ua:b.onclick=function(){var a=va(c);a&&(a.value="")};break;case wa:b.value="",b.addEventListener("keypress",function(a){a=a||window.event;var d=a.which||a.keyCode;if(d){var f=b.value;b.setSelectionRange(f.length,f.length);a.stopPropagation();13==d&&(a.preventDefault(),f=b.value+="\n",b.blur(),b.focus(),xa(c,f))}})}};
function sa(a,b){var c=Array.isArray(b),d;for(d in b){var e=b[d];c&&(d=e);var f=document.getElementById(e);f?(a.ja[d]=f,a.Ga(d,f)):c||F(a,"unable to find device ID: "+e)}}function ya(a,b,c,d){c&&(a.options.length=0);if(b)for(var e in b)c=document.createElement("option"),c.text=e,c.value="string"==typeof b[e]?b[e]:e,a.appendChild(c),c.value==d&&(a.selectedIndex=a.options.length-1)}function za(a,b){var c=Aa;H[a.ma]||(H[a.ma]={});H[a.ma][c]||(H[a.ma][c]=[]);H[a.ma][c].push(b)}
function ra(a,b){if(b.overrides){var c=Ba(),d;for(d in c)if(0<=b.overrides.indexOf(d)){var e=c[d];if(e.match(/^[+-]?[0-9.]+$/))var f=Number.parseInt(e,10);else"true"==e?f=!0:"false"==e?f=!1:(f=e,e='"'+e+'"');b[d]=f;F(a,"overriding "+a.Sa+" property '"+d+"' with "+e)}}}
function qa(a,b){if(a.version){var c="",d=E[a.ma];if(d)for(var e in d)if(d[e].Sa==a.ma){var f=d[e];break}if(f.version!=a.version){c="Machine";var h=f.version}else b.version&&b.version>a.version&&(c="Config",h=b.version);c&&(b="Error: "+a.Ra("%s Device version (%3.2f) incompatible with %s version (%3.2f)",b.gb,a.version,c,h)+"\n\nClearing your browser's cache may resolve the issue.",(c=Ca)&&0>Da.indexOf(c)&&(alert(b),Da.push(c)),F(a,b))}}
function xa(a,b){var c=Ea(a);if(c){var d=b.slice(b.lastIndexOf("\n",b.length-2)+1,-1)||a.Wa;a.Wa="";d=d.trim();b=d.split(" ");switch(b[0]){case "c":(c=b[1])?(F(a,"set category '"+c+"'"),Fa(a,c)):(c=Fa(a))?F(a,"cleared category '"+c+"'"):F(a,"no category set");break;case "?":var e="";Ga.forEach(function(a){e+="\n"+a});e&&F(a,"default commands:"+e);default:for(b.unshift(d),d=0;d<c.length&&!c[d](b,a);d++);}}}
function va(a){var b=wa,c=a.ja[b];if(void 0===c){var d=E[a.ma],e;for(e in d)if(c=d[e].ja[b])break;c||(c=null);a.ja[b]=c}return c}function I(a,b){if(a=E[a.ma])for(var c in a)if(a[c].ha["class"]==b){var d=a[c];break}return d}function Ea(a){var b=Aa;return H[a.ma]&&H[a.ma][b]}function Ha(a,b){return a.ha.bindings&&a.ha.bindings[b]}function Ia(a){if(a=a.ja[Ja])var b=a.textContent;return b}function Ka(a,b,c){a=+a||0;a<b&&(a=b);a>c&&(a=c);return a}
function J(a,b,c){a=a.ha[b];void 0===a?a=c:(b=typeof c,typeof a!=b&&("boolean"==b?a=!!a:"number"==typeof c&&(a=+a)));return a}function La(a){if(void 0===Ma){var b=!1;if(window)try{window.localStorage.setItem(K,K),b=window.localStorage.getItem(K)==K,window.localStorage.removeItem(K)}catch(c){F(a,c.message),b=!1}Ma=b}return!!Ma}
function Na(a){if(window){var b=window.navigator.userAgent;return"iOS"==a&&!!b.match(/(iPod|iPhone|iPad)/)&&!!b.match(/AppleWebKit/)||"MSIE"==a&&!!b.match(/(MSIE|Trident)/)||0<=b.indexOf(a)}return!1}function Oa(a,b){if(L&&0<=L.indexOf(Pa))M+=b;else{if(a=va(a))a.value+=b,8192<a.value.length&&(a.value=a.value.substr(a.value.length-4096)),a.scrollTop=a.scrollHeight;a||(a=b.lastIndexOf("\n"),0<=a&&(console.log(M+b.substr(0,a)),M="",b=b.substr(a+1)),M+=b)}}function F(a,b){Oa(a,b+"\n")}
D.prototype.Ha=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];Oa(this,this.Ra.apply(this,[].concat([a],c instanceof Array?c:oa(na(c)))))};function N(a,b,c){if(a=a.ja[b])a.textContent=c}function Fa(a,b){b=void 0===b?"":b;var c=L,d=!b&&L&&0<=L.indexOf(Pa);L=b;d&&(b=M,M="",Oa(a,b));return c}
D.prototype.Ra=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d="";var e=a.split(/%([-+ 0#]?)([0-9]*)(\.?)([0-9]*)([hlL]?)([A-Za-z%])/),f=0,h;for(h=0;h<e.length-7;h+=7){d+=e[h];var g=c[f++],n=e[h+1],m=+e[h+2]||0,k=+e[h+4]||0,l=e[h+6],p=null;switch(l){case "d":g=Math.trunc(g);case "f":l=Math.trunc(g)+"";k&&(m-=k+1);l.length<m&&("0"==n?(0>g&&m--,l=("0000000000"+Math.abs(g)).slice(-m),0>g&&(l="-"+l)):l=("          "+l).slice(-m));k&&(g=Math.trunc((g-Math.trunc(g))*Math.pow(10,
k)),l+="."+("0000000000"+Math.abs(g)).slice(-k));d+=l;break;case "s":for(;g.length<m;)g="-"==n?g+" ":" "+g;d+=g;break;case "X":p=Qa;case "x":p||(p=Ra);l="";do l=p[g&15]+l,g>>>=4;while(0<--m||g);d+=l;break;default:d+="(unrecognized printf conversion %"+l+")"}}return d+=e[h]};
function Ba(){var a,b=ta;if(!b){b={};if(window){a||(a=window.location.search.substr(1));for(var c,d=/\+/g,e=/([^&=]+)=?([^&]*)/g;c=e.exec(a);)b[decodeURIComponent(c[1].replace(d," ")).trim()]=decodeURIComponent(c[2].replace(d," ")).trim()}ta=b}return b}var ua="clear",wa="print",Pa="buffer",Ga=["c\tset category"],Aa="command",Da=[],Ca="version",Ma=void 0,K="PCjs.localStorage",H={},E={},L="",M="",Ra="0123456789abcdef",Qa="0123456789ABCDEF";
function O(a,b,c){D.call(this,a,b,Sa,c);this.time=I(this,P);this.ua=this.ra=this.ba=this.qa=null;this.za=J(this,"drag",!1);this.ta=J(this,"scroll",!1);this.da=!1;if(a=this.ja[Ta]){b=this.ha.location;this.Oa=b[0];this.Pa=b[1];this.ca=b[2];this.ia=b[3];this.ka=b[4]||1;this.oa=b[5]||1;this.Ja=b[6]||a.naturalWidth||this.ca;this.Ma=b[7]||a.naturalHeight||this.ia;this.Ba=b[8]||0;this.Ca=b[9]||0;this.Ia=b[10]||0;this.La=b[11]||0;(this.aa=this.ha.map)?(this.na=this.aa.length,this.fa=this.aa[0].length):(this.fa=
this.ka,this.na=this.oa,this.ka=this.oa=0);this.Ea=J(this,"hexagonal",!1);this.$=J(this,"buttonDelay",0);this.wa=this.ca/(this.fa+this.fa*this.ka)|0;this.xa=this.ia/(this.na+this.na*this.oa)|0;this.Fa=this.wa*this.ka|0;this.ya=this.xa*this.oa|0;this.ga=this.pa=-1;Ua(this,a);Va(this,a);if(this.time){var d=this;this.$&&(this.Aa=Wa(this.time,"timerInputRelease",function(){0>d.ga&&0>d.pa&&Q(d,-1,-1)}));this.aa&&(this.$&&(this.Na=Wa(this.time,"timerKeyRelease",function(){Xa(d)})),this.ea=0,this.la=[],
Ya(this))}this.va=this.Da=-1}}u(O,D);O.prototype.Ga=function(a,b){var c=this;switch(a){case Za:b.onclick=function(){c.ba&&c.ba()};break;case $a:b.onclick=function(){c.ra&&c.ra()}}D.prototype.Ga.call(this,a,b)};function ab(a,b,c){a.ba=b;a.ra=c}function bb(a,b){a.ua=b}function cb(a,b){a.qa=b}function db(a){a.$?R(a.time,a.Na,a.$):Xa(a)}
function Ya(a){var b=document;b.addEventListener("keydown",function(b){b=b||window.event;if(document.activeElement==a.ja[Za]){var c=eb[b.which||b.keyCode];c&&fb(a,c)&&b.preventDefault()}});b.addEventListener("keypress",function(b){b=b||window.event;var c=String.fromCharCode(b.which||b.charCode);c&&fb(a,c)&&b.preventDefault()})}
function Ua(a,b){b.addEventListener("mousedown",function(c){if(!a.da){var d=a.ja[Za];if(d){var e=window.scrollX,f=window.scrollY;d.focus();window.scrollTo(e,f)}c.button||S(a,b,gb,c)}});b.addEventListener("mousemove",function(c){a.da||S(a,b,hb,c)});b.addEventListener("mouseup",function(c){a.da||c.button||S(a,b,ib,c)});b.addEventListener("mouseout",function(c){a.da||(0>a.ga?S(a,b,hb,c):S(a,b,ib,c))})}
function Va(a,b){b.addEventListener("touchstart",function(c){a.ta&&(a.da=!0);S(a,b,gb,c)});b.addEventListener("touchmove",function(c){S(a,b,hb,c)});b.addEventListener("touchend",function(c){S(a,b,ib,c)})}function fb(a,b){for(var c=0;c<a.aa.length;c++)for(var d=a.aa[c],e=0;e<d.length;e++)if(0<=d[e].split("|").indexOf(b))return a.ea?16>a.la.length&&a.la.push(b):(a.ea=1,Q(a,e,c),db(a)),!0;a.Ha("unrecognized key '%s' (0x%02x)\n",b,b.charCodeAt(0));return!1}
function Xa(a){1==a.ea?(a.ea++,Q(a,-1,-1),db(a)):(a.ea=0,a.la.length&&fb(a,a.la.shift()))}
function S(a,b,c,d){var e=-1,f=-1,h=!1,g;if(c<ib){d=d||window.event;if(d.targetTouches&&d.targetTouches.length){var n=d.targetTouches[0].pageX;var m=d.targetTouches[0].pageY;h=1<d.targetTouches.length}else n=d.pageX,m=d.pageY;var k=g=0;var l=b;do isNaN(l.offsetLeft)||(g+=l.offsetLeft,k+=l.offsetTop);while(l=l.offsetParent);n=a.Ja/b.offsetWidth*(n-g)|0;m=a.Ma/b.offsetHeight*(m-k)|0;b=n-a.Oa;var p=m-a.Pa;k=g=!1;l=n>=a.Ba&&n<a.Ba+a.Ia&&m>=a.Ca&&m<a.Ca+a.La;if(0<=b&&b<a.ca&&0<=p+a.ya||l)if(h||a.ta||d.preventDefault(),
0<=b&&b<a.ca&&0<=p&&p<a.ia){k=!0;d=a.ca/a.fa|0;var r=a.ia/a.na|0,q=b/d|0,v=p/r|0;!a.Ea||v&1||(b-=d>>1,q=b/d|0,q==a.fa-1&&(b=-1));r=v*r+(a.ya>>1);b-=q*d+(a.Fa>>1);p-=r;0<=b&&b<a.wa&&0<=p&&p<a.xa&&(e=q,f=v,g=!0)}}if(!h)if(c==gb)a.ga=n,a.pa=m,k?(Q(a,e,f),g&&a.$&&R(a.time,a.Aa,a.$,!0)):l&&a.ba&&a.ba();else if(c==hb)0<=a.ga&&0<=a.pa&&a.za?Q(a,e,f):a.ua&&a.ua(e,f);else if(c==ib){if(c=a.$)c=a.time,e=a.Aa,c=c.$&&0<e&&e<=c.aa.length?0<=c.aa[e-1].sa:!1;c||Q(a,-1,-1);a.ga=a.pa=-1}else F(a,"unrecognized action: "+
c)}function Q(a,b,c){if(b!=a.va||c!=a.Da)a.va=b,a.Da=c,a.qa&&a.qa(b,c)}var gb=1,hb=2,ib=3,Za="power",$a="reset",Ta="surface",eb={8:"\b"},Sa=1.11;
function jb(a,b,c){D.call(this,a,b,kb,c);a=this.ja[lb];if(!a)throw Error("LED binding for '"+lb+"' missing: '"+this.ha.ja[lb]+"'");b=document.createElement("canvas");if(!b||!b.getContext)throw a.innerHTML="LED device requires HTML5 canvas support",Error("LED device requires HTML5 canvas support");this.Da=a;this.type=Ka(this.ha.type||mb,mb,nb);this.fa=ob[this.type][0];this.la=ob[this.type][1];this.width=J(this,"width",this.fa);this.height=J(this,"height",this.la);this.da=J(this,"cols",1);this.ba=this.da+
J(this,"colsExtra",0);this.wa=J(this,"rows",1);this.ca=this.wa+J(this,"rowsExtra",0);this.xa=this.width*this.da;this.va=this.height*this.wa;this.ga=T("black",0);this.ea=pb(this.ha.color)||this.ga;this.Fa=T(this.ea,1,.25);this.Ea=T(this.ea,1,2);this.ia=pb(this.ha.backgroundColor);this.Ia=J(this,"fixed",!1);this.Ia||(b.style.width="100%",b.style.height="auto");this.za=J(this,"hexagonal",!1);this.Ja=J(this,"highlight",!0);this.ta=J(this,"persistent",this.type<nb);b.setAttribute("width",this.xa.toString());
b.setAttribute("height",this.va.toString());b.style.backgroundColor=this.ga;a.appendChild(b);this.Aa=b.getContext("2d");if(this.oa=document.createElement("canvas"))this.oa.width=this.ya=this.fa*this.da,this.oa.height=this.qa=this.la*this.wa,this.aa=this.oa.getContext("2d");this.Ba=(this.ca+1)*this.ba*4;this.$=Array(this.Ba);this.na=null;this.Ca=this.da<this.ba?4*(this.ba-this.da):0;this.ka=this.pa=this.ua=!1;this.ra=-1;var d=this;(this.time=I(this,P))&&qb(this.time,function(){U(d)})}u(jb,D);
function rb(a,b){sb(a,a.$);a.ka=a.pa=!0;b&&U(a,!0)}function tb(a){a.ia?(a.aa.fillStyle=a.ia,a.aa.fillRect(0,0,a.ya,a.qa)):a.aa.clearRect(0,0,a.ya,a.qa)}
function U(a,b){b=void 0===b?!1:b;if(a.ka||b){if(a.type<nb){var c=-1;if(!a.ta||b)tb(a);else if(a.ua){c=a.da-1;var d=a.fa*c;a.aa.drawImage(a.oa,a.fa,0,d,a.qa,0,0,d,a.qa)}for(var e=d=0;e<a.ca;e++){for(var f=0;f<a.da;f++){var h=a.$[d],g=a.$[d+1]||a.ga,n=a.Ja&&d==a.ra;if(a.$[d+3]&V||n||b){if(0>c||f==c)a:{var m=a,k=h;h=g;var l=f;g=e;var p=n;l=void 0===l?0:l;g=void 0===g?0:g;p=void 0===p?!1:p;var r=0;if(m.za&&!(g&1)&&(r=m.fa>>1,l==m.da-1))break a;if(h&&h!=m.ea){p=p?T(h,1,2):h;var q=T(h,1,.25)}else p=p?
m.Ea:m.ea,q=m.Fa;h=!1;k=k?p:q;p==m.ga&&(k=m.ia,h=!0);p=l*m.fa+r;q=g*m.la;m.ta&&(l=l*m.fa+r,g*=m.la,m.ia?(m.aa.fillStyle=m.ia,m.aa.fillRect(l,g,m.fa,m.la)):m.aa.clearRect(l,g,m.fa,m.la));m.aa.fillStyle=k;g=ub[m.type];3==g.length?(m.aa.beginPath(),m.aa.arc(p+g[0],q+g[1],g[2],0,2*Math.PI),h?(m.aa.globalCompositeOperation="destination-out",m.aa.fill(),m.aa.globalCompositeOperation="source-over"):m.aa.fill()):m.aa.fillRect(p+g[0],q+g[1],g[2],g[3])}a.$[d+3]&=~V;n&&(a.$[d+3]|=V)}d+=4}d+=a.Ca}a.ua=!1}else{b=
"";for(c=0;c<a.$.length;c+=4)b+=a.$[c]||" ",a.$[c+3]&vb&&(b+=".");tb(a);for(e=d=c=0;c<b.length;c++){g=b[c];"."==g&&d&&d--;f=a;n=d;m=e;n=void 0===n?0:n;m=void 0===m?0:m;if(g=wb[g])for(h=0;h<g.length;h++)if(l=f,r=xb[g[h]]){k=(void 0===n?0:n)*l.fa;p=(void 0===m?0:m)*l.la;l.aa.fillStyle=l.ea;l.aa.beginPath();if(3==r.length)l.aa.arc(k+r[0],p+r[1],r[2],0,2*Math.PI);else for(q=0;q<r.length;q+=2)q?l.aa.lineTo(k+r[q],p+r[q+1]):l.aa.moveTo(k+r[q],p+r[q+1]);l.aa.closePath();l.aa.fill()}if(++d==a.da&&(d=0,++e==
a.ca))break}}a.Aa.globalCompositeOperation=a.ia&&!a.ta?"source-over":"copy";a.Aa.drawImage(a.oa,0,0,a.ya,a.qa,0,0,a.xa,a.va);a.ka=!1;a.ra=-1}else a.ta||a.pa||rb(a,!0);a.pa=!1}function yb(a,b,c){b=4*(c*a.ba+b);return b<=a.$.length-4?a.$[b+2]:0}function W(a,b,c){var d;b=4*(c*a.ba+b);b<=a.$.length-4&&(d=a.$[b]);return d}function pb(a){return(a=a||void 0)&&zb[a]||a}
function T(a,b,c){b=void 0===b?1:b;c=void 0===c?1:c;if(a){var d=[];a=zb[a]||a;if(Ab(a,d)){a="rgba(";var e;for(e=0;3>e;e++){var f=Math.round(d[e]*c);f=0>f?0:255<f?255:f;a+=f+","}a+=(e<d.length?d[e]:b)+")"}}return a}function sb(a,b){for(var c=0;c<b.length;c+=4)Bb(a,b,c)}function Bb(a,b,c){b[c]=a.type<nb?X:" ";b[c+1]=a.ea==a.ga?null:a.ea;b[c+2]=0;b[c+3]=V}
function Ab(a,b){var c=16,d=a.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);d||(c=10,d=a.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,?\s*(\d+|)\)$/i));if(d){for(a=1;a<d.length;a++)b[a-1]=Number.parseInt(d[a],c);b.length=a-1;return!0}return!1}function Cb(a,b,c,d){var e=null;0<=c&&c<a.ca&&0<=b&&b<a.ba&&(e=!1,d=d||a.ea,d==a.ga&&(d=null),b=4*(c*a.ba+b),a.$[b+1]!==d&&((a.$[b+1]=d)||(a.$[b]=X),a.$[b+3]|=V,a.ka=e=!0),a.ra=b,a.pa=!0);return e}
function Db(a,b,c,d){if(0<=c&&c<a.ca&&0<=b&&b<a.ba){b=4*(c*a.ba+b);c=0;if(a.$[b+1])for(var e=0;e<d.length;e++)c=c<<4|d[e]&15;a.$[b+2]!==c&&(a.$[b+2]=c,a.$[b+3]|=V,a.ka=!0);a.ra=b;a.pa=!0}}function Y(a,b,c,d){var e=!1,f=0&Eb;b=4*(c*a.ba+b);if(b<=a.$.length-4){if(a.$[b]!==d||(a.$[b+3]&Eb)!==f)a.$[b]=d,a.$[b+3]=a.$[b+3]&~Eb|f|V,a.ka=e=!0;a.ua=!1;a.ra=b;a.pa=!0}return e}
var mb=1,nb=3,lb="container",zb={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",
darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",
goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4","indianred ":"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",
lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",
olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",
slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},X=0,Eb=1,vb=1,V=128,Fb={},ub=(Fb[mb]=[16,16,14],Fb[2]=[2,2,28,28],Fb),ob=[[],[32,32],[32,32],[96,128]],xb={A:[30,8,79,8,67,19,37,19],B:[83,10,77,52,67,46,70,22],C:[77,59,71,100,61,89,64,64],D:[28,91,58,91,69,104,
15,104],E:[18,59,28,64,25,88,12,100],F:[24,10,34,21,31,47,18,52],G:[24,56,34,50,60,50,71,56,61,61,33,61],P:[80,102,8]},wb={" ":[],0:"ABCDEF".split(""),1:["B","C"],2:["A","B","D","E","G"],3:["A","B","C","D","G"],4:["B","C","F","G"],5:["A","C","D","F","G"],6:"ACDEFG".split(""),7:["A","B","C"],8:"ABCDEFG".split(""),9:"ABCDFG".split(""),"-":["G"],E:["A","D","E","F","G"],".":["P"]},kb=1.11;
function Gb(a,b,c){D.call(this,a,b,Hb,c);this.data=c.values;if(this.ja[Ib]){var d=this;c=Math.log2(this.data.length)/2;this.aa=Math.pow(2,Math.ceil(c));this.ba=Math.pow(2,Math.floor(c));this.$=new jb(a,b+"LEDs",{"class":"LED",bindings:{container:Ha(this,Ib)},type:mb,cols:this.aa,rows:this.ba,color:J(this,"colorROM","green"),backgroundColor:J(this,"backgroundColorROM","black"),persistent:!0}),rb(this.$,!0);this.ca=new O(a,b+"Input",{"class":"Input",location:[0,0,this.$.xa,this.$.va,this.aa,this.ba],
bindings:{surface:Ha(this,Ib)}});this.ea=Ia(this);bb(this.ca,function(a,b){if(d.da){var c=d.ea;0<=a&&0<=b&&(a=b*d.aa+a,c=d.da.hb(d.data[a],a));N(d,Ja,c)}})}}u(Gb,D);var Ib="array",Ja="cellDesc",Hb=1.11;
function Z(a,b,c){D.call(this,a,b,Jb,c);this.Fa=J(this,"cyclesMinimum",1E5);this.Oa=J(this,"cyclesMaximum",3E6);this.za=Ka(J(this,"cyclesPerSecond",65E4),this.Fa,this.Oa);this.ra=Ka(J(this,"yieldsPerSecond",Kb),30,120);this.Pa=Ka(J(this,"yieldsPerUpdate",Lb),1,this.ra);this.Ba=(this.ga=J(this,"clockByFrame",!0))||J(this,"requestAnimationFrame",!0);this.La=this.Ma=this.wa=1;this.Ca=this.za/1E4/100;this.da=this.ka=this.Ca*this.wa;this.na=0;this.ya=Math.round(1E3/this.ra);this.Da=[];this.xa=[];this.aa=
[];this.Aa=[];this.$=this.oa=this.ia=!1;this.pa=this.ca=0;this.Va=this.ab.bind(this);this.Ua=this.Ja.bind(this);this.Ia=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.setTimeout).bind(window);if(this.ga)this.qa=this.Na=0;else{var d=this;Wa(this,"timerYield",function(){d.oa=!0;var a=d.na,b=Nb(d);b>=d.ra?d.na++:d.na+=Math.ceil(d.ra/b);d.na>=d.Pa&&a<d.Pa&&Ob(d);d.na>=d.ra&&(d.na=0)},this.ya)}this.ua=this.ta=this.fa=0;Pb(this)||Qb(this,this.La)}u(Z,D);
function qb(a,b){a.Da.push(b)}Z.prototype.Ga=function(a,b){var c=this;switch(a){case Rb:b.onclick=function(){c.$?Sb(c):c.start()};break;case Tb:b.onclick=function(){c.$?F(c,"already running"):c.ca?Sb(c):Ub(c,void 0)};break;case Vb:b.addEventListener("mousedown",function(){c.ia=!0}),b.addEventListener("mouseup",function(){Pb(c);c.ia=!1}),b.addEventListener("mousemove",function(){c.ia&&Pb(c)}),b.addEventListener("change",function(){c.ia=!0;Pb(c);c.ia=!1})}D.prototype.Ga.call(this,a,b)};
function Wa(a,b,c,d){d=void 0===d?-1:d;var e=a.aa.length+1;a.aa.push({id:b,cb:c,Qa:d,sa:-1});0<=d&&R(a,e,d);return e}Z.prototype.Ja=function(){if(this.ga){if(!this.$)return;Wb(this);try{this.oa=!1;do{var a=this.qa+=this.Na;if(1>a)a=0;else{a|=0;for(var b=this.aa.length;0<b;b--){var c=this.aa[b-1];!(0>c.sa)&&a>c.sa&&(a=c.sa)}}Xb(this,Yb(this,Zb(this,a)))}while(this.$&&!this.oa)}catch(d){F(this,d.message);Sb(this);return}$b(this)}for(a=0;a<this.Da.length;a++)this.Da[a]();this.$&&this.Ba&&this.Ia(this.Ua)};
function ac(a){var b=a.da/a.Ca;if(!b||b>a.wa)b=a.wa;a.$a=a.za/a.ra*b;a.Ma=b}function Zb(a,b,c){a.ta=a.fa=b;if(!a.xa.length)return a.fa=0,a.ta;for(var d=0;0<a.fa;)d<a.xa.length?b=a.xa[d++](c?0:b)||1:d=b=0,a.fa-=b;return a.ta-a.fa}function Yb(a,b){b=void 0===b?a.ta-a.fa:b;a.ga&&a.$&&(a.qa-=b,1>a.qa&&(a.oa=!0));a.ta=a.fa=0;a.va+=b;a.ua+=b;a.$||(a.ua=0);return b}function Nb(a,b){return Math.ceil(a.za*a.Ma/1E3*(void 0===b?1E3:b))}
function bc(a){1<=a?a=a.toFixed(2)+"Mhz":(a=Math.round(1E6*a),a=999>=a?a+"Hz":Math.ceil(a/1E3)+"Khz");return a}Z.prototype.ab=function(){this.pa=0;if(this.$){Wb(this);try{this.oa=!1;do{for(var a=Nb(this,this.ya),b=this.aa.length;0<b;b--){var c=this.aa[b-1];!(0>c.sa)&&a>c.sa&&(a=c.sa)}Xb(this,Yb(this,Zb(this,a)))}while(this.$&&!this.oa)}catch(d){F(this,d.message);Sb(this);return}this.$&&(this.pa=setTimeout(this.Va,$b(this)),this.Ba||this.Ja())}};
function Pb(a){var b=a.ja[Vb];return b?(Qb(a,Math.floor((b.value-b.min)/(b.max-b.min)*(a.Oa-a.Fa)+a.Fa)/a.za),!0):!1}function Qb(a,b){void 0!==b&&(!a.ia&&0<a.da&&a.da<.9*a.ka&&(b=a.La),a.wa=b,b=a.Ca*a.wa,a.ka!=b&&(a.ka=b,N(a,cc,bc(a.ka))),a.da=a.ka);a.ga&&(a.Na=1E6*a.da/60+1e-8,a.qa=0);a.ua=0;a.ba=a.ea=0;ac(a);for(b=a.aa.length;0<b;b--){var c=a.aa[b-1];0<=c.Qa&&R(a,b,c.Qa,!0)}}function R(a,b,c,d){0<b&&b<=a.aa.length&&(b=a.aa[b-1],d||0>b.sa)&&(c=Nb(a,c),a.$&&(c+=Yb(a)),b.sa=c)}
function Wb(a){ac(a);a.va=0;a.Ea=0;a.la=Date.now();a.ba||(a.ba=a.la);if(a.ea){var b=a.la-a.ea;b>a.ya&&(a.ba+=b,a.ba>a.la&&(a.ba=a.la))}}function $b(a){a.ea=Date.now();a.Ea&&(a.ba+=a.Ea,a.la+=a.Ea);var b=a.ya;a.va&&(b=Math.round(b*a.va/a.$a));b-=a.ea-a.la;var c=a.ea-a.ba;c&&(a.da=a.ua/(10*c)/100);0>b?(-1E3>b&&(a.ba-=b),b=0):a.da<a.ka&&(b=0);a.ea+=b;L&&0<=L.indexOf("time")&&a.Ha("after running %d cycles, resting for %dms\n",a.va,b);return b}
Z.prototype.start=function(){if(this.$||this.ca)return!1;this.pa&&(clearTimeout(this.pa),this.pa=0);this.$=!0;this.ba=this.ea=0;Ob(this,!0);this.ga||(this.pa=setTimeout(this.Va,0));this.Ba&&this.Ia(this.Ua);return!0};function Ub(a,b){b=void 0===b?1:b;a.$||(b&&!a.ca&&(a.ca=b),a.ca&&(a.ca--,Xb(a,Yb(a,Zb(a,1,!0))),Ob(a),a.ca&&setTimeout(function(){Ub(a,0)},0)))}function Sb(a){a.ca?(a.ca=0,Ob(a,!0)):a.$&&(a.$=!1,Yb(a),Ob(a,!0))}
function Ob(a,b){b&&(a.$?F(a,"starting ("+bc(a.ka)+" target by "+(a.ga?"frame":"timer")+")"):F(a,"stopping"));N(a,Rb,a.$?"Halt":"Run");N(a,Tb,a.ca?"Stop":"Step");a.ia||N(a,cc,a.$&&a.da?bc(a.da):"Stopped");for(var c=0;c<a.Aa.length;c++)a.Aa[c](b)}function Xb(a,b){if(1<=b)for(var c=a.aa.length;0<c;c--){var d=a.aa[c-1];0>d.sa||(d.sa-=b,0>=d.sa&&(d.sa=-1,d.cb(),0<=d.Qa&&R(a,c,d.Qa)))}}var Rb="run",cc="speed",Tb="step",Vb="throttle",Kb=120,Lb=60,Jb=1.11;
function dc(a,b,c){D.call(this,a,b,ec,c);this.fa=J(this,"wrap",!1);this.la=J(this,"rule","");this.ga=J(this,"pattern","");this.ia=J(this,"symbols","");this.qa=J(this,"toggleColor",!1);this.pa=Array(fc(this).length);if(c=I(this,gc)){this.$=c;hc(this)||rb(c,!0);(this.da=I(this,ic))&&ab(this.da,this.Ka.bind(this),this.Ta.bind(this));var d=this;this.na=new O(a,b+"Input",{"class":"Input",location:[0,0,c.xa,c.va,c.da,c.wa],drag:!(!this.da||!this.da.za),scroll:!(!this.da||!this.da.ta),hexagonal:c.za,bindings:{surface:Ha(c,
lb)}});cb(this.na,function(a,b){var c=d.$;0<=a&&0<=b&&(d.ea?Cb(c,a,b,d.ea)?Y(c,a,b,1):d.qa?Cb(c,a,b):Y(c,a,b,1-W(c,a,b)):Y(c,a,b,1-W(c,a,b)),Db(c,a,b,fc(d,!!W(c,a,b))),U(c))});this.ca=[];this.oa=c.ea;jc(this,this.oa);kc(this);lc(this,this.ha[mc]);if(this.time=I(this,P))this.time.xa.push(this.eb.bind(this)),this.time.Aa.push(this.Za.bind(this));za(this,this.fb.bind(this));this.ka=this.aa=0}}u(dc,D);t=dc.prototype;
t.Ga=function(a,b){var c=this;switch(a){case nc:case oc:b.onchange=function(){pc(c,a)};pc(this);break;case mc:b.onchange=function(){lc(c)};break;case qc:ya(b,rc(this.ha[qc]),!1,this.ha.pattern);b.onchange=function(){var a=c.ja[qc];a&&a.options.length&&((a=a.options[a.selectedIndex].value)?hc(c,a):c.Ta())};break;case sc:b.onclick=function(){var a=tc(c,!0),b=c.ja[uc];b&&(a='"'+b.value+'":"'+a.replace(/^([0-9]+\/)*/,"")+'",');F(c,a)};break;case vc:b.onclick=function(){var a=tc(c);F(c,a);var b=window.location.href;
b=0<=b.indexOf("pattern\x3d")?b.replace(/(pattern=)[^&]*/,"$1"+a.replace(/\$/g,"$$$$")):b+((0>b.indexOf("?")?"?":"\x26")+"pattern\x3d"+a);window.location=b};break;case uc:b.onkeypress=function(a){b.value=String.fromCharCode(a.charCode);var d=c.ja[wc];d&&(d.textContent=b.value);a.preventDefault()};break;default:if(a.startsWith(xc))b.onclick=function(){kc(c,a)};else{var d=this.ha[qc];d&&d[a]&&(b.onclick=function(){hc(c,a)})}}D.prototype.Ga.call(this,a,b)};
function rc(a){var b={},c;for(c in a){for(var d=c,e=a[c],f=0;f<e.length;f++)if(0==e[f].indexOf("#N")){d=e[f].substr(2).trim();break}b[d]=c}return b}
t.eb=function(a){a=void 0===a?0:a;var b=0;if(0<=a){do{switch(this.la){case yc:var c=0;for(var d=this.$,e=d.da,f=d.ca,h=this.pa,g=0;g<f;g++)for(var n=0;n<e;n++){var m=h,k=!1,l=4*(g*d.ba+n);if(l<=d.$.length-4&&d.$[l+1]){k=!0;l=d.$[l+2];for(var p=m.length-1;0<=p;p--)m[p]=l&15,l>>>=4}if(k){c++;if(h[0])h[0]--;else{k=(m=W(d,n,g))||0;switch(m){case 1:if(k=X,h[0]=h[2],h[0]){h[0]--;break}case X:if(h[3]&&(k=this.ca.indexOf(d.$[4*(g*d.ba+n)+1]||d.ga),0<=k)){for(k+=h[3];k>=this.ca.length;)k-=this.ca.length;Cb(d,
n,g,this.ca[k])}k=1;h[0]=h[1];h[0]&&h[0]--}k!==m&&Y(d,n,g,k)}Db(d,n,g,h)}}break;case zc:f=1;f=void 0===f?1:f;c=0;d=this.$;h=d.ba;e=d.ca;if(!this.aa&&this.ia)if(this.ka>=this.ia.length&&(this.ka=0),g=this.ia[this.ka++]," "==g)this.aa+=2;else{if(g=Ac[g])this.aa=Bc(this,d.da+1,0,g,!0);this.aa+=1}g=0;n=d.$;m=4*h;for(k=0;k<h-f;k++){l=g;for(p=0;p<e;p++){var r=n[g],q=n[g]=n[g+4];r=q!==r?V:0;n[g+1]=n[g+5];n[g+2]=n[g+6];n[g+3]=n[g+7]|r;q&&c++;g+=m}g=l+4}for(f=0;f<e;f++)Bb(d,n,g),g+=m;d.ua=d.ka=!0;this.aa&&
this.aa--;break;case Cc:c=0;d=this.$;e=d.$;f=d;f.na||(f.na=Array(f.Ba),sb(f,f.na));f=f.na;h=d.da;g=d.ca;n=4*h+d.Ca;m=g*n;k=0;l=k-n;p=l-4;q=l+4;r=k-4;for(var v=k+4,x=k+n,w=x-4,A=x+4,z=0;z<g;z++){z?z==g-1&&(this.fa?(x-=m,w-=m,A-=m):x=w=A=m):this.fa?(l+=m,p+=m,q+=m):l=p=q=m;for(var B=0;B<h;B++){B?1==B?this.fa?(r-=n,p-=n,w-=n):(r=k-4,p=l-4,w=x-4):B==h-1&&(this.fa?(v-=n,q-=n,A-=n):v=q=A=m):this.fa?(r+=n,p+=n,w+=n):r=p=w=m;var G=e[k],Mb=e[p]+e[l]+e[q]+e[v]+e[A]+e[x]+e[w]+e[r];3==Mb?G=1:2!=Mb&&(G=X);f[k]=
G;f[k+1]=e[k+1];f[k+2]=e[k+2];f[k+3]=e[k+3]|(e[k]!==G?V:0);k+=4;p+=4;l+=4;q+=4;v+=4;A+=4;x+=4;w+=4;r+=4;1==G&&c++}this.fa?(z||(l-=m,p-=m,q-=m),v+=n,q+=n,A+=n):(z||(l=k-n,p=l-4),v=k+4,q=l+4,A=x+4)}e=d.$;d.$=d.na;d.na=e;d.ka=!0}a||F(this,"active cells: "+c);b+=1}while(b<a)}return b};function Dc(a,b){var c=0;(a=a.ja[b])&&a.options&&(c=(c=a.options[a.selectedIndex])&&+c.value||0);return c}
function fc(a,b){var c=0;if(b&&(b=a.ja[Ec])&&b.options){var d=b.options[b.selectedIndex];d&&(c=+d.value||0,b.selectedIndex++,d=Dc(a,Fc)+Dc(a,Gc),!(d&1)&&c==d-1||0>b.selectedIndex||b.selectedIndex>=b.options.length)&&(b.selectedIndex=0)}c=[c];for(b=1;b<Hc.length;b++)c.push(Dc(a,Hc[b]));return c}
function hc(a,b){var c=a.$,d=-1,e=-1,f="";b||a.ga.match(/^[0-9]/)||(b=a.ga);if(b){var h=a.ha[qc];h=h&&h[b];if(!h)return F(a,"unknown pattern: "+b),!1;F(a,"loading pattern '"+b+"'");for(var g=b=0;b<h.length;b++){var n=h[b];if("#"==n[0])F(a,n);else if(g++){var m=n.indexOf("!");if(0<=m){f+=n.substr(0,m);break}f+=n}else{var k=n.match(/x\s*=\s*([0-9]+)\s*,\s*y\s*=\s*([0-9]+)\s*(?:,\s*rule\s*=\s*(\S+)|)/i);if(!k)return F(a,"unrecognized header line"),!1;var l=+k[1];var p=+k[2];k=k[3]}}}else{if(!a.ga)return!1;
f=0;k=a.ga.split("/");5==k.length&&(d=+k[f++],e=+k[f++]);if(3==k.length||5==k.length)l=+k[f++],p=+k[f++],f=k[f];else return F(a,"unrecognized pattern: "+a.ga),!1;k=a.la}if(k!=a.la)return F(a,"unsupported rule: "+k),!1;0>d&&(d=c.ba-l>>1);0>e&&(e=c.ca-p>>1);return 0>d||d+l>c.ba||0>e||e+p>c.ca?(a.Ha("pattern too large (%d,%d)\n",l,p),!1):0<Bc(a,d,e,f)}
function Bc(a,b,c,d,e){e=void 0===e?!1:e;var f=a.$,h=[0,0,0,1],g=0,n=!1,m=!1;d=d.split(/([a-z$])/i);e||rb(f);for(var k=0,l=b,p=0;k<d.length-1;){var r=d[k++],q=d[k++],v=+r;for(r=""===r?1:v;r--;){var x=0,w=!1;switch(q){case "$":n=m=!1;b=l;c++;break;case "C":g=v;m=!0;break;case "R":h[0]=v;n=!0;break;case "G":h[1]=v;n=!0;break;case "B":h[2]=v;n=!0;break;case "A":h[3]=v;n=!0;break;case "b":w=Y(f,b,c,X);x++;break;case "o":w=Y(f,b,c,1);x++;break;default:a.Ha("unrecognized pattern token: %s\n",q)}null==w?
a.Ha("invalid pattern position (%d,%d)\n",b,c):(n&&Cb(f,b,c,4>h.length||1==h[3]?f.Ra("#%02x%02x%02x",h[0],h[1],h[2]):f.Ra("rgba(%d,%d,%d,%d)",h[0],h[1],h[2],h[3])),m&&(w=4*(c*f.ba+b),w<=f.$.length-4&&f.$[w+2]!=g&&(f.$[w+2]=g)),p<b&&(p=b),b+=x)}}e||U(f,!0);return 0>(p-=l-1)?0:p}t.fb=function(a){var b="";switch(a[1][0]){case "?":b="";Ic.forEach(function(a){b+="\n"+a});b&&(b="available commands:"+b);break;default:a[0]&&(b="unrecognized command '"+a[0]+"' (try '?')")}b&&F(this,b.trim());return!0};
t.Ka=function(a){this.time&&(a?this.time.start():Sb(this.time))};t.Ta=function(){F(this,"reset");rb(this.$,!0)};
t.Xa=function(){var a=null;if(La(this)){var b;if(window)try{(b=window.localStorage.getItem(this.ma))&&(a=JSON.parse(b))}catch(e){F(this,e.message)}}if(a)if((b=a.stateChip||a[0])&&b.length)if(b=b.shift(),(b|0)!==(ec|0))this.Ha("Saved state version mismatch: %3.2f\n",b);else{if(!Ba().pattern&&!Ba()[mc]){var c=a.stateLEDs||a[1];if(c&&this.$&&!this.ia){a=this.$;b=c.shift();var d=c.shift();c=c.shift();if(b==a.ea&&d==a.ia&&c&&c.length==a.$.length){a.$=c;for(b=0;b<=a.$.length-4;b+=4)a.$[b+1]==a.ga&&(a.$[b+
1]=null);U(a,!0)}}}}else F(this,"Invalid saved state")};t.Ya=function(){var a=[[],[]],b=a[1];a[0].push(ec);if(this.$){var c=this.$;c.$&&(b.push(c.ea),b.push(c.ia),b.push(c.$))}if(La(this)){a=JSON.stringify(a);try{window.localStorage.setItem(this.ma,a)}catch(d){F(this,d.message)}}};
function tc(a,b){function c(a){var b=!1;null==k[3]&&(k[3]=1);if(x){if(n){if(k[0]!==q[0]||k[1]!==q[1]||k[2]!==q[2]||k[3]!==q[3])b=!0;G!==v&&(b=!0)}m!==r&&(b=!0);if(b||a&&r)n&&(l[0]!==q[0]&&(l[0]=q[0],e+=(q[0]||"")+"R"),l[1]!==q[1]&&(l[1]=q[1],e+=(q[1]||"")+"G"),l[2]!==q[2]&&(l[2]=q[2],e+=(q[2]||"")+"B"),l[3]!==q[3]&&(l[3]=q[3],e+=(q[3]||"")+"A"),p!==v&&(p=v,e+=(v||"")+"C")),1<x&&(e+=x),e+=1===r?"o":"b",b=!0}a?(e+="$",x=0):(b?x=1:x++,r=m,q[0]=k[0],q[1]=k[1],q[2]=k[2],q[3]=k[3],v=G)}var d=a.$,e="",f=
0,h=a.$.ba,g=a.$.ca,n=!!a.ca.length,m,k=[0,0,0],l=[0,0,0,1],p=0,r=0,q=[0,0,0,1],v=0,x=0;a=0;var w=d.ba-1,A=d.ca-1;if(b){b&&(a=w,w=0);for(h=0;h<d.ca;h++)for(g=0;g<d.ba;g++)(m=W(d,g,h))&&b&&(a>g&&(a=g),w<g&&(w=g));h=w-a+1;g=A-0+1;0>h&&(h=0);0>g&&(g=0)}for(var z=0;z<=A;z++){for(var B=a;B<=w;B++){m=W(d,B,z);Ab(d.$[4*(z*d.ba+B)+1]||d.ga,k);var G=yb(d,B,z);c()}c(!0)}if(!b)for(;"$"==e[0];)f++,g--,e=e.slice(1);for(;"$$"==e.slice(-2);)g--,e=e.slice(0,-1);"$"==e&&(g=0);e=(b?"":"0/"+f+"/")+h+"/"+g+"/"+e.slice(0,
-1);return e=e.replace(/\$+$/,"")}function lc(a,b){var c=a.ja[mc];if(c&&c.options.length){if(b)for(var d=0;d<c.options.length;d++)if(c.options[d].value==b){c.selectedIndex=d;break}b=c.options[c.selectedIndex].value;a=a.$;a.Da&&(a.Da.style.backgroundImage=b?"url('"+b+"')":"none")}}
function pc(a,b){var c=a.ja[nc],d=a.ja[oc];b=b===nc;c&&!c.options.length&&(ya(c,a.ha.colors,!0),b=!0);if(c&&d&&(!d.options.length||b)){a.ba=a.ha.colors[c.options[c.selectedIndex].value];for(var e in a.ba)if(b=a.ha[e.toLowerCase()])"#"!=b[0]&&(b="#"+b),F(a,"overriding color '"+e+"' with "+b+" (formerly "+a.ba[e]+")"),a.ba[e]=b;ya(d,a.ba,!0)}c&&d&&d.options.length&&(a.ea=d.options[d.selectedIndex].value,kc(a))}
function jc(a,b){var c=a.ja[oc];if(c){var d;for(d=0;d<c.options.length;d++)if(c.options[d].value==b){a.ea=b;c.selectedIndex!=d&&(c.selectedIndex=d);break}d==c.options.length&&(c.selectedIndex=0)}}
function kc(a,b){var c=1,d;!b&&a.ea&&(d=a.ja[Jc])&&(d.style.backgroundColor=a.ea);if(a.ba)for(var e in a.ba){var f=a.ba[e];a.ca&&(a.ca[c-1]=f);var h=xc+c++;d=a.ja[h];if(!d)break;d.style.display="inline-block";h==b&&jc(a,f);if(b&&b!=h||f!=a.ea)f=T(f,1,.5);d.style.backgroundColor=f}for(;;){b=xc+c++;b=a.ja[b];if(!b)break;b.style.display="none"}}t.Za=function(){this.time.$||U(this.$)};
var nc="colorPalette",oc="colorSelection",xc="colorSwatch",Jc="colorSwatchSelected",Ec="countInit",Fc="countOn",Gc="countOff",mc="backgroundImage",qc="patterns",uc="symbolInput",wc="symbolPreview",sc="save",vc="saveToURL",Hc=[null,Fc,Gc,"countCycle"],Ic=[],yc="A4",zc="L1",Cc="B3/S23",Ac={A:"$3b2o$2bo2bo$bo4bo$bo4bo$o6bo$o6bo$o6bo$8o$o6bo$o6bo$o6bo",B:"$6o$o5bo$o5bo$o5bo$o4bo$7o$o6bo$o6bo$o6bo$o6bo$7o",C:"$2b4o$bo4bo$o6bo$o$o$o$o$o$o6bo$bo4bo$2b4o",D:"$6o$o5bo$o6bo$o6bo$o6bo$o6bo$o6bo$o6bo$o6bo$o5bo$6o",
E:"$7o$o$o$o$o$6o$o$o$o$o$7o",F:"$7o$o$o$o$o$6o$o$o$o$o$o",G:"$2b4o$bo4bo$o$o$o$o3b4o$o6bo$o6bo$o6bo$bo4bo$2b4o",H:"$o6bo$o6bo$o6bo$o6bo$o6bo$8o$o6bo$o6bo$o6bo$o6bo$o6bo",I:"$o$o$o$o$o$o$o$o$o$o$o",J:"$5bo$5bo$5bo$5bo$5bo$5bo$5bo$o4bo$o4bo$o4bo$b4o",K:"$o6bo$o5bo$o4bo$o3bo$o2bo$ob2o$2o2bo$o4bo$o5bo$o6bo$o7bo",L:"$o$o$o$o$o$o$o$o$o$o$7o",M:"$o8bo$2o6b2o$obo4bobo$obo4bobo$o2bo2bo2bo$o2bo2bo2bo$o3b2o3bo$o8bo$o8bo$o8bo$o8bo",N:"$2o5bo$obo4bo$obo4bo$o2bo3bo$o2bo3bo$o3bo2bo$o3bo2bo$o4bobo$o4bobo$o4bobo$o5b2o",
O:"$3b4o$2bo4bo$bo6bo$o8bo$o8bo$o8bo$o8bo$o8bo$bo6bo$2bo4bo$3b4o",P:"$6o$o5bo$o6bo$o6bo$o6bo$o5bo$6o$o$o$o$o",Q:"$3b4o$2bo4bo$bo6bo$o8bo$o8bo$o8bo$o8bo$o8bo$bo4bobo$2bo4bo$3b4obo$9bo",R:"$6o$o5bo$o5bo$o5bo$o5bo$6o$o2bo$o3bo$o4bo$o5bo$o6bo",S:"$2b4o$bo4bo$o6bo$o$bo$2b4o$6bo$7bo$o6bo$bo4bo$2b4o",T:"$9o$4bo$4bo$4bo$4bo$4bo$4bo$4bo$4bo$4bo$4bo",U:"$o6bo$o6bo$o6bo$o6bo$o6bo$o6bo$o6bo$o6bo$o6bo$bo4bo$2b4o",V:"$o8bo$o8bo$bo6bo$bo6bo$bo6bo$2bo4bo$2bo4bo$2bo4bo$3bo2bo$3bo2bo$4b2o",W:"$o4b2o4bo$o4b2o4bo$o4b2o4bo$o3bo2bo3bo$bo2bo2bo2bo$bo2bo2bo2bo$bo2bo2bo2bo$bo2bo2bo2bo$2b2o4b2o$2b2o4b2o$2b2o4b2o",
X:"$o8bo$bo6bo$2bo4bo$3bo2bo$4b2o$4b2o$4b2o$3bo2bo$2bo4bo$bo6bo$o8bo",Y:"$o9bo$bo7bo$2bo5bo$3bo3bo$4bobo$5bo$5bo$5bo$5bo$5bo$5bo",Z:"$9o$8bo$7bo$6bo$5bo$4bo$3bo$2bo$bo$o$9o",a:"$$$$b4o$o4bo$5bo$b5o$o4bo$o4bo$o3b2o$b3ob2o",b:"$o$o$o$ob3o$2o3bo$o5bo$o5bo$o5bo$o5bo$2o3bo$ob3o",c:"$$$$2b4o$bo4bo$o$o$o$o$bo4bo$2b4o",d:"$6bo$6bo$6bo$2b3obo$bo3b2o$o5bo$o5bo$o5bo$o5bo$bo3b2o$2b3obo",e:"$$$$2b2o$bo2bo$o4bo$6o$o$o$o4bo$b4o",f:"$2b2o$bo2bo$bo$bo$4o$bo$bo$bo$bo$bo$bo",g:"$$$$2b2obo$bo2b2o$o4bo$o4bo$o4bo$bo2b2o$2b2obo$5bo$5bo$o4bo$b4o",
h:"$o$o$o$ob3o$2o3bo$o4bo$o4bo$o4bo$o4bo$o4bo$o4bo",i:"$$o$$o$o$o$o$o$o$o$o",j:"$$3bo$$3bo$3bo$3bo$3bo$3bo$3bo$3bo$3bo$3bo$o2bo$b2o",k:"$o$o$o$o4bo$o3bo$o2bo$obo$2obo$o3bo$o4bo$o5bo",l:"$o$o$o$o$o$o$o$o$o$o$o",m:"$$$$ob2o3b2o$2o2bobo2bo$o4bo4bo$o4bo4bo$o4bo4bo$o4bo4bo$o4bo4bo$o4bo4bo",n:"$$$$ob3o$2o3bo$o4bo$o4bo$o4bo$o4bo$o4bo$o4bo",o:"$$$$2b4o$bo4bo$o6bo$o6bo$o6bo$o6bo$bo4bo$2b4o",p:"$$$$ob3o$2o3bo$o5bo$o5bo$o5bo$o5bo$2o3bo$ob3o$o$o$o",q:"$$$$2b3obo$bo3b2o$o5bo$o5bo$o5bo$o5bo$bo3b2o$2b3obo$6bo$6bo$6bo",
r:"$$$$ob2o$2o2bo$o$o$o$o$o$o",s:"$$$$b4o$o4bo$o$b4o$5bo$5bo$o4bo$b4o",t:"$$bo$bo$4o$bo$bo$bo$bo$bo$bo2bo$2b2o",u:"$$$$o4bo$o4bo$o4bo$o4bo$o4bo$o4bo$o3b2o$b3obo",v:"$$$$o5bo$o5bo$bo3bo$bo3bo$bo3bo$2bobo$2bobo$3bo",w:"$$$$o3b2o3bo$o3b2o3bo$o3b2o3bo$o3b2o3bo$bobo2bobo$bobo2bobo$bobo2bobo$2bo4bo",x:"$$$$$o5bo$bo3bo$2bobo$3bo$2bobo$bo3bo$o5bo",y:"$$$$o5bo$o5bo$bo3bo$bo3bo$2bobo$2bobo$3bo$3bo$3bo$2bo$2o",z:"$$$$6o$5bo$4bo$3bo$2bo$bo$o$6o"},ec=1.11;pa="LEDs";
function Kc(a,b){D.call(this,a,a,Lc);try{this.ha=JSON.parse(b);var c=this.ha[a];qa(this,c);ra(this,c);sa(this,c.bindings);this.$=!1!==c.autoPower}catch(h){c=h.message;var d=c.match(/position ([0-9]+)/);d&&(c+=" ('"+b.substr(+d[1],40).replace(/\s+/g," ")+"...')");F(this,"machine '"+a+"' initialization error: "+c)}var e=this,f=null;window.addEventListener("load",function(){for(var a,b,c,d,k=0;k<Mc.length;k++)for(a in e.ha)try{var l=e.ha[a],p="";b=l["class"];if(b==Mc[k]){switch(b){case Nc:d=c=new dc(e.ma,
a,l);break;case ic:c=new O(e.ma,a,l);break;case gc:c=new jb(e.ma,a,l);break;case Oc:c=new Gb(e.ma,a,l);c.ha.revision&&(p="revision "+c.ha.revision);break;case P:c=new Z(e.ma,a,l);break;case Pc:e.Ha("PCjs %s v%3.2f\n",l.name,Lc);F(e,Qc);F(e,Rc);continue;default:F(e,"unrecognized device class: "+b);continue}F(e,b+" device initialized"+(p?" ("+p+")":""))}}catch(v){F(e,"error initializing "+b+" device '"+a+"':\n"+v.message);p=void 0;var r=a,q=E[e.ma];if(q)for(p in q)if(q[p].Sa==r){q.splice(p,1);break}}if(f=
d)f.Xa&&f.Xa(),f.Ka&&e.$&&f.Ka(!0)});window.addEventListener((Na("iOS")?"pagehide":Na("Opera")?"unload":void 0)||"beforeunload",function(){f&&(f.Ya&&f.Ya(),f.Ka&&f.Ka(!1))})}u(Kc,D);var Nc="Chip",ic="Input",gc="LED",Pc="Machine",Oc="ROM",P="Time",Mc=[Pc,P,gc,ic,Oc,Nc],Qc="Copyright \u00a9 2012-2017 Jeff Parsons \x3cJeff@pcjs.org\x3e",Rc="License: GPL version 3 or later \x3chttp://gnu.org/licenses/gpl.html\x3e",Lc=1.11;window[pa]=Kc;})()
//# sourceMappingURL=leds.js.map
