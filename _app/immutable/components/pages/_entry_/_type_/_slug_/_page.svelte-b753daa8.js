import{S as Pl,i as Bl,s as Hl,a as P,k as p,q as I,w as le,I as Ml,h as _,c as B,l as m,m as b,r as w,x as te,n as g,b as $,H as h,y as ie,u as O,f as y,t as M,d as x,z as se,G as Cl,N as Le,g as ee,J as ue,e as ce,V as jl,W as Ol,B as Me}from"../../../../../chunks/index-ca7dbb83.js";import{p as Ul}from"../../../../../chunks/stores-1315f220.js";import{C as ve}from"../../../../../chunks/CollectionList-ae05b185.js";import{C as ql}from"../../../../../chunks/CalendarList-9d7051f3.js";import{I as Ll,d as he,F as Fl,f as He}from"../../../../../chunks/Footer-4cc4ca98.js";import{E as Rl}from"../../../../../chunks/EventTypeBadge-22746011.js";import{f as Fe,S as Ae,g as Re,b as ye}from"../../../../../chunks/utils-c6f80ac1.js";function We(f,e,l){const t=f.slice();return t[19]=e[l],t}function ze(f,e,l){const t=f.slice();return t[22]=e[l],t}function Ge(f,e,l){const t=f.slice();return t[25]=e[l],t}function Je(f,e,l){const t=f.slice();return t[28]=e[l],t}function Ke(f,e,l){const t=f.slice();return t[31]=e[l],t}function Qe(f,e,l){const t=f.slice();return t[34]=e[l],t}function Xe(f,e,l){const t=f.slice();return t[22]=e[l],t}function Ye(f,e,l){const t=f.slice();return t[25]=e[l],t}function Ze(f){let e,l,t,r;return{c(){e=p("div"),l=p("img"),this.h()},l(n){e=m(n,"DIV",{class:!0});var a=b(e);l=m(a,"IMG",{src:!0,class:!0,alt:!0}),a.forEach(_),this.h()},h(){Le(l.src,t=f[3].photoUrl||f[3].photo)||g(l,"src",t),g(l,"class","rounded-xl aspect-square object-cover"),g(l,"alt",r=f[3].name),g(e,"class","w-48 mr-5")},m(n,a){$(n,e,a),h(e,l)},p(n,a){a[0]&8&&!Le(l.src,t=n[3].photoUrl||n[3].photo)&&g(l,"src",t),a[0]&8&&r!==(r=n[3].name)&&g(l,"alt",r)},d(n){n&&_(e)}}}function xe(f){let e,l,t,r,n=Fe(f[3],{full:!0})+"",a,i,s,u,o,c,d=f[3].types,v=[];for(let T=0;T<d.length;T+=1)v[T]=el(Ye(f,d,T));const D=T=>M(v[T],1,1,()=>{v[T]=null});function H(T,C){return T[3].venues?Gl:T[3].venueUrl?zl:Wl}let S=H(f),V=S(f),N=f[3].attendees&&ll(f);return{c(){e=p("div"),l=p("div");for(let T=0;T<v.length;T+=1)v[T].c();t=P(),r=p("div"),a=I(n),i=P(),s=p("div"),u=I(`📍 
                                    `),V.c(),o=P(),N&&N.c(),this.h()},l(T){e=m(T,"DIV",{class:!0});var C=b(e);l=m(C,"DIV",{class:!0});var k=b(l);for(let re=0;re<v.length;re+=1)v[re].l(k);k.forEach(_),t=B(C),r=m(C,"DIV",{class:!0});var A=b(r);a=w(A,n),A.forEach(_),i=B(C),s=m(C,"DIV",{});var K=b(s);u=w(K,`📍 
                                    `),V.l(K),K.forEach(_),o=B(C),N&&N.l(C),C.forEach(_),this.h()},h(){g(l,"class","flex gap-1 items-center"),g(r,"class",""),g(e,"class","text-2xl flex gap-4 mt-2 flex-wrap")},m(T,C){$(T,e,C),h(e,l);for(let k=0;k<v.length;k+=1)v[k].m(l,null);h(e,t),h(e,r),h(r,a),h(e,i),h(e,s),h(s,u),V.m(s,null),h(e,o),N&&N.m(e,null),c=!0},p(T,C){if(C[0]&8){d=T[3].types;let k;for(k=0;k<d.length;k+=1){const A=Ye(T,d,k);v[k]?(v[k].p(A,C),y(v[k],1)):(v[k]=el(A),v[k].c(),y(v[k],1),v[k].m(l,null))}for(ee(),k=d.length;k<v.length;k+=1)D(k);x()}(!c||C[0]&8)&&n!==(n=Fe(T[3],{full:!0})+"")&&O(a,n),S===(S=H(T))&&V?V.p(T,C):(V.d(1),V=S(T),V&&(V.c(),V.m(s,null))),T[3].attendees?N?N.p(T,C):(N=ll(T),N.c(),N.m(e,null)):N&&(N.d(1),N=null)},i(T){if(!c){for(let C=0;C<d.length;C+=1)y(v[C]);c=!0}},o(T){v=v.filter(Boolean);for(let C=0;C<v.length;C+=1)M(v[C]);c=!1},d(T){T&&_(e),ue(v,T),V.d(),N&&N.d()}}}function el(f){let e,l;return e=new Rl({props:{type:f[25]}}),{c(){le(e.$$.fragment)},l(t){te(e.$$.fragment,t)},m(t,r){ie(e,t,r),l=!0},p(t,r){const n={};r[0]&8&&(n.type=t[25]),e.$set(n)},i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){M(e.$$.fragment,t),l=!1},d(t){se(e,t)}}}function Wl(f){let e=f[3].venueName+"",l;return{c(){l=I(e)},l(t){l=w(t,e)},m(t,r){$(t,l,r)},p(t,r){r[0]&8&&e!==(e=t[3].venueName+"")&&O(l,e)},d(t){t&&_(l)}}}function zl(f){let e,l=f[3].venueName+"",t,r;return{c(){e=p("a"),t=I(l),this.h()},l(n){e=m(n,"A",{href:!0,target:!0,class:!0});var a=b(e);t=w(a,l),a.forEach(_),this.h()},h(){g(e,"href",r=f[3].venueUrl),g(e,"target","_blank"),g(e,"class","underline hover:no-underline external")},m(n,a){$(n,e,a),h(e,t)},p(n,a){a[0]&8&&l!==(l=n[3].venueName+"")&&O(t,l),a[0]&8&&r!==(r=n[3].venueUrl)&&g(e,"href",r)},d(n){n&&_(e)}}}function Gl(f){let e,l=f[3].venues.map(f[9]).join(", ")+"",t;return{c(){e=new jl(!1),t=ce(),this.h()},l(r){e=Ol(r,!1),t=ce(),this.h()},h(){e.a=t},m(r,n){e.m(l,r,n),$(r,t,n)},p(r,n){n[0]&13&&l!==(l=r[3].venues.map(r[9]).join(", ")+"")&&e.p(l)},d(r){r&&_(t),r&&e.d()}}}function ll(f){let e,l,t=f[3].attendees+"",r;return{c(){e=p("div"),l=I("👥 "),r=I(t)},l(n){e=m(n,"DIV",{});var a=b(e);l=w(a,"👥 "),r=w(a,t),a.forEach(_)},m(n,a){$(n,e,a),h(e,l),h(e,r)},p(n,a){a[0]&8&&t!==(t=n[3].attendees+"")&&O(r,t)},d(n){n&&_(e)}}}function tl(f){let e,l,t,r,n;l=new Ae({props:{source:f[3].caption}});let a=Object.keys(f[6]),i=[];for(let s=0;s<a.length;s+=1)i[s]=sl(Xe(f,a,s));return{c(){e=p("div"),le(l.$$.fragment),t=P(),r=p("div");for(let s=0;s<i.length;s+=1)i[s].c();this.h()},l(s){e=m(s,"DIV",{class:!0});var u=b(e);te(l.$$.fragment,u),u.forEach(_),t=B(s),r=m(s,"DIV",{class:!0});var o=b(r);for(let c=0;c<i.length;c+=1)i[c].l(o);o.forEach(_),this.h()},h(){g(e,"class","text-2xl mt-2 markdown"),g(r,"class","flex flex-wrap gap-4 mt-4 text-xl")},m(s,u){$(s,e,u),ie(l,e,null),$(s,t,u),$(s,r,u);for(let o=0;o<i.length;o+=1)i[o].m(r,null);n=!0},p(s,u){const o={};if(u[0]&8&&(o.source=s[3].caption),l.$set(o),u[0]&72){a=Object.keys(s[6]);let c;for(c=0;c<a.length;c+=1){const d=Xe(s,a,c);i[c]?i[c].p(d,u):(i[c]=sl(d),i[c].c(),i[c].m(r,null))}for(;c<i.length;c+=1)i[c].d(1);i.length=a.length}},i(s){n||(y(l.$$.fragment,s),n=!0)},o(s){M(l.$$.fragment,s),n=!1},d(s){s&&_(e),se(l),s&&_(t),s&&_(r),ue(i,s)}}}function il(f){let e,l,t=f[22]+"",r,n,a,i,s=ye(f[6][f[22]].col(f[3]),f[22])+"",u,o;return{c(){e=p("div"),l=p("span"),r=I(t),n=I(" →"),a=P(),i=p("a"),u=I(s),this.h()},l(c){e=m(c,"DIV",{});var d=b(e);l=m(d,"SPAN",{class:!0});var v=b(l);r=w(v,t),n=w(v," →"),v.forEach(_),a=B(d),i=m(d,"A",{href:!0,target:!0,class:!0});var D=b(i);u=w(D,s),D.forEach(_),d.forEach(_),this.h()},h(){g(l,"class","opacity-40 text-sm uppercase"),g(i,"href",o=f[6][f[22]].col(f[3])),g(i,"target","_blank"),g(i,"class","underline hover:no-underline")},m(c,d){$(c,e,d),h(e,l),h(l,r),h(l,n),h(e,a),h(e,i),h(i,u)},p(c,d){d[0]&8&&s!==(s=ye(c[6][c[22]].col(c[3]),c[22])+"")&&O(u,s),d[0]&8&&o!==(o=c[6][c[22]].col(c[3]))&&g(i,"href",o)},d(c){c&&_(e)}}}function sl(f){let e=f[6][f[22]].col(f[3]),l,t=e&&il(f);return{c(){t&&t.c(),l=ce()},l(r){t&&t.l(r),l=ce()},m(r,n){t&&t.m(r,n),$(r,l,n)},p(r,n){n[0]&8&&(e=r[6][r[22]].col(r[3])),e?t?t.p(r,n):(t=il(r),t.c(),t.m(l.parentNode,l)):t&&(t.d(1),t=null)},d(r){t&&t.d(r),r&&_(l)}}}function rl(f){let e,l,t,r,n,a,i,s,u,o,c,d=f[3].chains&&f[3].chains.length>0&&nl(f),v=f[3].tags&&f[3].tags.length>0&&fl(f),D=f[3].languages&&f[3].languages.length>0&&cl(f);u=new Ae({props:{source:f[3].org||"TBD"}});let H=f[3].poc&&dl(f);return{c(){e=p("div"),d&&d.c(),l=P(),v&&v.c(),t=P(),D&&D.c(),r=P(),n=p("div"),a=p("div"),i=I("Organizator"),s=p("div"),le(u.$$.fragment),o=P(),H&&H.c(),this.h()},l(S){e=m(S,"DIV",{class:!0});var V=b(e);d&&d.l(V),l=B(V),v&&v.l(V),t=B(V),D&&D.l(V),r=B(V),n=m(V,"DIV",{});var N=b(n);a=m(N,"DIV",{class:!0});var T=b(a);i=w(T,"Organizator"),T.forEach(_),s=m(N,"DIV",{class:!0});var C=b(s);te(u.$$.fragment,C),C.forEach(_),N.forEach(_),o=B(V),H&&H.l(V),V.forEach(_),this.h()},h(){g(a,"class","uppercase text-sm opacity-40"),g(s,"class","markdown"),g(e,"class","flex flex-wrap gap-6 text-xl mt-4")},m(S,V){$(S,e,V),d&&d.m(e,null),h(e,l),v&&v.m(e,null),h(e,t),D&&D.m(e,null),h(e,r),h(e,n),h(n,a),h(a,i),h(n,s),ie(u,s,null),h(e,o),H&&H.m(e,null),c=!0},p(S,V){S[3].chains&&S[3].chains.length>0?d?d.p(S,V):(d=nl(S),d.c(),d.m(e,l)):d&&(d.d(1),d=null),S[3].tags&&S[3].tags.length>0?v?v.p(S,V):(v=fl(S),v.c(),v.m(e,t)):v&&(v.d(1),v=null),S[3].languages&&S[3].languages.length>0?D?D.p(S,V):(D=cl(S),D.c(),D.m(e,r)):D&&(D.d(1),D=null);const N={};V[0]&8&&(N.source=S[3].org||"TBD"),u.$set(N),S[3].poc?H?(H.p(S,V),V[0]&8&&y(H,1)):(H=dl(S),H.c(),y(H,1),H.m(e,null)):H&&(ee(),M(H,1,1,()=>{H=null}),x())},i(S){c||(y(u.$$.fragment,S),y(H),c=!0)},o(S){M(u.$$.fragment,S),M(H),c=!1},d(S){S&&_(e),d&&d.d(),v&&v.d(),D&&D.d(),se(u),H&&H.d()}}}function nl(f){let e,l,t,r,n,a=f[3].chains,i=[];for(let s=0;s<a.length;s+=1)i[s]=al(Qe(f,a,s));return{c(){e=p("div"),l=p("div"),t=I("Chains"),r=P(),n=p("div");for(let s=0;s<i.length;s+=1)i[s].c();this.h()},l(s){e=m(s,"DIV",{});var u=b(e);l=m(u,"DIV",{class:!0});var o=b(l);t=w(o,"Chains"),o.forEach(_),r=B(u),n=m(u,"DIV",{class:!0});var c=b(n);for(let d=0;d<i.length;d+=1)i[d].l(c);c.forEach(_),u.forEach(_),this.h()},h(){g(l,"class","uppercase text-sm opacity-40"),g(n,"class","flex gap-2")},m(s,u){$(s,e,u),h(e,l),h(l,t),h(e,r),h(e,n);for(let o=0;o<i.length;o+=1)i[o].m(n,null)},p(s,u){if(u[0]&8){a=s[3].chains;let o;for(o=0;o<a.length;o+=1){const c=Qe(s,a,o);i[o]?i[o].p(c,u):(i[o]=al(c),i[o].c(),i[o].m(n,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=a.length}},d(s){s&&_(e),ue(i,s)}}}function al(f){let e,l=f[34].substr(0,1).toUpperCase()+f[34].substr(1)+"",t;return{c(){e=p("div"),t=I(l)},l(r){e=m(r,"DIV",{});var n=b(e);t=w(n,l),n.forEach(_)},m(r,n){$(r,e,n),h(e,t)},p(r,n){n[0]&8&&l!==(l=r[34].substr(0,1).toUpperCase()+r[34].substr(1)+"")&&O(t,l)},d(r){r&&_(e)}}}function fl(f){let e,l,t,r,n,a=f[3].tags,i=[];for(let s=0;s<a.length;s+=1)i[s]=ol(Ke(f,a,s));return{c(){e=p("div"),l=p("div"),t=I("Tags"),r=P(),n=p("div");for(let s=0;s<i.length;s+=1)i[s].c();this.h()},l(s){e=m(s,"DIV",{});var u=b(e);l=m(u,"DIV",{class:!0});var o=b(l);t=w(o,"Tags"),o.forEach(_),r=B(u),n=m(u,"DIV",{class:!0});var c=b(n);for(let d=0;d<i.length;d+=1)i[d].l(c);c.forEach(_),u.forEach(_),this.h()},h(){g(l,"class","uppercase text-sm opacity-40"),g(n,"class","flex gap-2")},m(s,u){$(s,e,u),h(e,l),h(l,t),h(e,r),h(e,n);for(let o=0;o<i.length;o+=1)i[o].m(n,null)},p(s,u){if(u[0]&8){a=s[3].tags;let o;for(o=0;o<a.length;o+=1){const c=Ke(s,a,o);i[o]?i[o].p(c,u):(i[o]=ol(c),i[o].c(),i[o].m(n,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=a.length}},d(s){s&&_(e),ue(i,s)}}}function ol(f){let e,l,t=f[31]+"",r;return{c(){e=p("div"),l=I("#"),r=I(t)},l(n){e=m(n,"DIV",{});var a=b(e);l=w(a,"#"),r=w(a,t),a.forEach(_)},m(n,a){$(n,e,a),h(e,l),h(e,r)},p(n,a){a[0]&8&&t!==(t=n[31]+"")&&O(r,t)},d(n){n&&_(e)}}}function cl(f){let e,l,t,r,n,a=f[3].languages,i=[];for(let s=0;s<a.length;s+=1)i[s]=ul(Je(f,a,s));return{c(){e=p("div"),l=p("div"),t=I("Languages"),r=P(),n=p("div");for(let s=0;s<i.length;s+=1)i[s].c();this.h()},l(s){e=m(s,"DIV",{});var u=b(e);l=m(u,"DIV",{class:!0});var o=b(l);t=w(o,"Languages"),o.forEach(_),r=B(u),n=m(u,"DIV",{class:!0});var c=b(n);for(let d=0;d<i.length;d+=1)i[d].l(c);c.forEach(_),u.forEach(_),this.h()},h(){g(l,"class","uppercase text-sm opacity-40"),g(n,"class","flex gap-2")},m(s,u){$(s,e,u),h(e,l),h(l,t),h(e,r),h(e,n);for(let o=0;o<i.length;o+=1)i[o].m(n,null)},p(s,u){if(u[0]&8){a=s[3].languages;let o;for(o=0;o<a.length;o+=1){const c=Je(s,a,o);i[o]?i[o].p(c,u):(i[o]=ul(c),i[o].c(),i[o].m(n,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=a.length}},d(s){s&&_(e),ue(i,s)}}}function ul(f){let e,l=Re(f[28])+"",t,r,n=f[28]+"",a;return{c(){e=p("div"),t=I(l),r=P(),a=I(n)},l(i){e=m(i,"DIV",{});var s=b(e);t=w(s,l),r=B(s),a=w(s,n),s.forEach(_)},m(i,s){$(i,e,s),h(e,t),h(e,r),h(e,a)},p(i,s){s[0]&8&&l!==(l=Re(i[28])+"")&&O(t,l),s[0]&8&&n!==(n=i[28]+"")&&O(a,n)},d(i){i&&_(e)}}}function dl(f){let e,l,t,r,n,a;return n=new Ae({props:{source:f[3].poc}}),{c(){e=p("div"),l=p("div"),t=I("Point of contact"),r=p("div"),le(n.$$.fragment),this.h()},l(i){e=m(i,"DIV",{});var s=b(e);l=m(s,"DIV",{class:!0});var u=b(l);t=w(u,"Point of contact"),u.forEach(_),r=m(s,"DIV",{class:!0});var o=b(r);te(n.$$.fragment,o),o.forEach(_),s.forEach(_),this.h()},h(){g(l,"class","uppercase text-sm opacity-40"),g(r,"class","markdown")},m(i,s){$(i,e,s),h(e,l),h(l,t),h(e,r),ie(n,r,null),a=!0},p(i,s){const u={};s[0]&8&&(u.source=i[3].poc),n.$set(u)},i(i){a||(y(n.$$.fragment,i),a=!0)},o(i){M(n.$$.fragment,i),a=!1},d(i){i&&_(e),se(n)}}}function _l(f){let e,l,t,r=f[3].address&&hl(f),n=f[3].capacity&&vl(f),a=f[3].eventTypes&&f[3].eventTypes.length>0&&pl(f);return{c(){e=p("div"),r&&r.c(),l=P(),n&&n.c(),t=P(),a&&a.c(),this.h()},l(i){e=m(i,"DIV",{class:!0});var s=b(e);r&&r.l(s),l=B(s),n&&n.l(s),t=B(s),a&&a.l(s),s.forEach(_),this.h()},h(){g(e,"class","flex flex-wrap gap-6 text-xl mt-4")},m(i,s){$(i,e,s),r&&r.m(e,null),h(e,l),n&&n.m(e,null),h(e,t),a&&a.m(e,null)},p(i,s){i[3].address?r?r.p(i,s):(r=hl(i),r.c(),r.m(e,l)):r&&(r.d(1),r=null),i[3].capacity?n?n.p(i,s):(n=vl(i),n.c(),n.m(e,t)):n&&(n.d(1),n=null),i[3].eventTypes&&i[3].eventTypes.length>0?a?a.p(i,s):(a=pl(i),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},d(i){i&&_(e),r&&r.d(),n&&n.d(),a&&a.d()}}}function hl(f){let e,l,t,r,n,a=f[3].address+"",i;return{c(){e=p("div"),l=p("div"),t=I("Address"),r=P(),n=p("div"),i=I(a),this.h()},l(s){e=m(s,"DIV",{});var u=b(e);l=m(u,"DIV",{class:!0});var o=b(l);t=w(o,"Address"),o.forEach(_),r=B(u),n=m(u,"DIV",{class:!0});var c=b(n);i=w(c,a),c.forEach(_),u.forEach(_),this.h()},h(){g(l,"class","uppercase text-sm opacity-40"),g(n,"class","flex gap-2")},m(s,u){$(s,e,u),h(e,l),h(l,t),h(e,r),h(e,n),h(n,i)},p(s,u){u[0]&8&&a!==(a=s[3].address+"")&&O(i,a)},d(s){s&&_(e)}}}function vl(f){let e,l,t,r,n,a=f[3].capacity+"",i,s;return{c(){e=p("div"),l=p("div"),t=I("Capacity"),r=P(),n=p("div"),i=I(a),s=I(" ppl"),this.h()},l(u){e=m(u,"DIV",{});var o=b(e);l=m(o,"DIV",{class:!0});var c=b(l);t=w(c,"Capacity"),c.forEach(_),r=B(o),n=m(o,"DIV",{class:!0});var d=b(n);i=w(d,a),s=w(d," ppl"),d.forEach(_),o.forEach(_),this.h()},h(){g(l,"class","uppercase text-sm opacity-40"),g(n,"class","flex gap-2")},m(u,o){$(u,e,o),h(e,l),h(l,t),h(e,r),h(e,n),h(n,i),h(n,s)},p(u,o){o[0]&8&&a!==(a=u[3].capacity+"")&&O(i,a)},d(u){u&&_(e)}}}function pl(f){let e,l,t,r,n,a=f[3].eventTypes,i=[];for(let s=0;s<a.length;s+=1)i[s]=ml(Ge(f,a,s));return{c(){e=p("div"),l=p("div"),t=I("Event Types"),r=P(),n=p("div");for(let s=0;s<i.length;s+=1)i[s].c();this.h()},l(s){e=m(s,"DIV",{});var u=b(e);l=m(u,"DIV",{class:!0});var o=b(l);t=w(o,"Event Types"),o.forEach(_),r=B(u),n=m(u,"DIV",{class:!0});var c=b(n);for(let d=0;d<i.length;d+=1)i[d].l(c);c.forEach(_),u.forEach(_),this.h()},h(){g(l,"class","uppercase text-sm opacity-40"),g(n,"class","flex gap-2")},m(s,u){$(s,e,u),h(e,l),h(l,t),h(e,r),h(e,n);for(let o=0;o<i.length;o+=1)i[o].m(n,null)},p(s,u){if(u[0]&8){a=s[3].eventTypes;let o;for(o=0;o<a.length;o+=1){const c=Ge(s,a,o);i[o]?i[o].p(c,u):(i[o]=ml(c),i[o].c(),i[o].m(n,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=a.length}},d(s){s&&_(e),ue(i,s)}}}function ml(f){let e,l=f[25]+"",t;return{c(){e=p("div"),t=I(l)},l(r){e=m(r,"DIV",{});var n=b(e);t=w(n,l),n.forEach(_)},m(r,n){$(r,e,n),h(e,t)},p(r,n){n[0]&8&&l!==(l=r[25]+"")&&O(t,l)},d(r){r&&_(e)}}}function gl(f){let e,l=Object.keys(f[3].links),t=[];for(let r=0;r<l.length;r+=1)t[r]=bl(ze(f,l,r));return{c(){e=p("div");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=m(r,"DIV",{class:!0});var n=b(e);for(let a=0;a<t.length;a+=1)t[a].l(n);n.forEach(_),this.h()},h(){g(e,"class","flex flex-wrap gap-4 mt-4 text-xl")},m(r,n){$(r,e,n);for(let a=0;a<t.length;a+=1)t[a].m(e,null)},p(r,n){if(n[0]&8){l=Object.keys(r[3].links);let a;for(a=0;a<l.length;a+=1){const i=ze(r,l,a);t[a]?t[a].p(i,n):(t[a]=bl(i),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=l.length}},d(r){r&&_(e),ue(t,r)}}}function bl(f){let e,l,t=f[22]+"",r,n,a,i,s=ye(f[3].links[f[22]],f[22])+"",u,o;return{c(){e=p("div"),l=p("span"),r=I(t),n=I(" →"),a=P(),i=p("a"),u=I(s),this.h()},l(c){e=m(c,"DIV",{});var d=b(e);l=m(d,"SPAN",{class:!0});var v=b(l);r=w(v,t),n=w(v," →"),v.forEach(_),a=B(d),i=m(d,"A",{href:!0,target:!0,class:!0});var D=b(i);u=w(D,s),D.forEach(_),d.forEach(_),this.h()},h(){g(l,"class","opacity-40 text-sm uppercase"),g(i,"href",o=f[3].links[f[22]]),g(i,"target","_blank"),g(i,"class","underline hover:no-underline")},m(c,d){$(c,e,d),h(e,l),h(l,r),h(l,n),h(e,a),h(e,i),h(i,u)},p(c,d){d[0]&8&&t!==(t=c[22]+"")&&O(r,t),d[0]&8&&s!==(s=ye(c[3].links[c[22]],c[22])+"")&&O(u,s),d[0]&8&&o!==(o=c[3].links[c[22]])&&g(i,"href",o)},d(c){c&&_(e)}}}function kl(f){let e,l,t,r,n,a,i,s,u;function o(V,N){return V[3].registration.link?Kl:Jl}let c=o(f),d=c(f),v=f[3].registration.status&&$l(f);function D(V,N){return V[3].registration.type==="tickets"?st:it}let H=D(f),S=H(f);return{c(){e=p("div"),l=p("div"),d.c(),t=P(),r=p("div"),v&&v.c(),n=P(),a=p("div"),i=p("span"),s=I("Price"),u=P(),S.c(),this.h()},l(V){e=m(V,"DIV",{class:!0});var N=b(e);l=m(N,"DIV",{class:!0});var T=b(l);d.l(T),t=B(T),r=m(T,"DIV",{});var C=b(r);v&&v.l(C),n=B(C),a=m(C,"DIV",{});var k=b(a);i=m(k,"SPAN",{class:!0});var A=b(i);s=w(A,"Price"),A.forEach(_),u=B(k),S.l(k),k.forEach(_),C.forEach(_),T.forEach(_),N.forEach(_),this.h()},h(){g(i,"class","opacity-40 text-sm uppercase mr-1"),g(l,"class","w-auto rounded-lg md:text-right gap-4"),g(e,"class","text-xl lg:flex-nowrap mt-6 lg:mt-0")},m(V,N){$(V,e,N),h(e,l),d.m(l,null),h(l,t),h(l,r),v&&v.m(r,null),h(r,n),h(r,a),h(a,i),h(i,s),h(a,u),S.m(a,null)},p(V,N){c===(c=o(V))&&d?d.p(V,N):(d.d(1),d=c(V),d&&(d.c(),d.m(l,t))),V[3].registration.status?v?v.p(V,N):(v=$l(V),v.c(),v.m(r,n)):v&&(v.d(1),v=null),H===(H=D(V))&&S?S.p(V,N):(S.d(1),S=H(V),S&&(S.c(),S.m(a,null)))},d(V){V&&_(e),d.d(),v&&v.d(),S.d()}}}function Jl(f){let e;function l(n,a){if(n[3].registration.type==="tickets")return Xl;if(n[3].registration.type==="invites")return Ql}let t=l(f),r=t&&t(f);return{c(){e=p("div"),r&&r.c(),this.h()},l(n){e=m(n,"DIV",{class:!0});var a=b(e);r&&r.l(a),a.forEach(_),this.h()},h(){g(e,"class","inline-block py-2 px-4 border border-gray-400 text-gray-400 text-lg rounded-lg mb-2 cursor-not-allowed")},m(n,a){$(n,e,a),r&&r.m(e,null)},p(n,a){t!==(t=l(n))&&(r&&r.d(1),r=t&&t(n),r&&(r.c(),r.m(e,null)))},d(n){n&&_(e),r&&r.d()}}}function Kl(f){let e,l,t,r;function n(s,u){return s[3].registration.button?xl:s[3].registration.type==="tickets"?Zl:Yl}let a=n(f),i=a(f);return{c(){e=p("div"),l=p("a"),t=p("div"),i.c(),this.h()},l(s){e=m(s,"DIV",{class:!0});var u=b(e);l=m(u,"A",{href:!0,class:!0,target:!0});var o=b(l);t=m(o,"DIV",{class:!0});var c=b(t);i.l(c),c.forEach(_),o.forEach(_),u.forEach(_),this.h()},h(){g(t,"class","inline-block py-3 px-6 border border-pbw-red hover:bg-pbw-red hover:text-white text-pbw-red text-xl rounded-lg"),g(l,"href",r=f[3].registration.link),g(l,"class",""),g(l,"target","_blank"),g(e,"class","pb-2")},m(s,u){$(s,e,u),h(e,l),h(l,t),i.m(t,null)},p(s,u){a===(a=n(s))&&i?i.p(s,u):(i.d(1),i=a(s),i&&(i.c(),i.m(t,null))),u[0]&8&&r!==(r=s[3].registration.link)&&g(l,"href",r)},d(s){s&&_(e),i.d()}}}function Ql(f){let e;return{c(){e=I("Application form is not yet available")},l(l){e=w(l,"Application form is not yet available")},m(l,t){$(l,e,t)},d(l){l&&_(e)}}}function Xl(f){let e;return{c(){e=I("Tickets not yet available")},l(l){e=w(l,"Tickets not yet available")},m(l,t){$(l,e,t)},d(l){l&&_(e)}}}function Yl(f){let e;return{c(){e=I("Request tickets!")},l(l){e=w(l,"Request tickets!")},m(l,t){$(l,e,t)},p:Me,d(l){l&&_(e)}}}function Zl(f){let e;return{c(){e=I("Buy tickets!")},l(l){e=w(l,"Buy tickets!")},m(l,t){$(l,e,t)},p:Me,d(l){l&&_(e)}}}function xl(f){let e=f[3].registration.button+"",l;return{c(){l=I(e)},l(t){l=w(t,e)},m(t,r){$(t,l,r)},p(t,r){r[0]&8&&e!==(e=t[3].registration.button+"")&&O(l,e)},d(t){t&&_(l)}}}function $l(f){let e,l,t,r;function n(s,u){if(s[3].registration.status==="available")return tt;if(s[3].registration.status==="sold-out")return lt;if(s[3].registration.status==="closed")return et}let a=n(f),i=a&&a(f);return{c(){e=p("div"),l=p("span"),t=I("Status"),r=P(),i&&i.c(),this.h()},l(s){e=m(s,"DIV",{});var u=b(e);l=m(u,"SPAN",{class:!0});var o=b(l);t=w(o,"Status"),o.forEach(_),r=B(u),i&&i.l(u),u.forEach(_),this.h()},h(){g(l,"class","opacity-40 text-sm uppercase mr-1")},m(s,u){$(s,e,u),h(e,l),h(l,t),h(e,r),i&&i.m(e,null)},p(s,u){a!==(a=n(s))&&(i&&i.d(1),i=a&&a(s),i&&(i.c(),i.m(e,null)))},d(s){s&&_(e),i&&i.d()}}}function et(f){let e,l;return{c(){e=p("span"),l=I("• Registration closed"),this.h()},l(t){e=m(t,"SPAN",{class:!0});var r=b(e);l=w(r,"• Registration closed"),r.forEach(_),this.h()},h(){g(e,"class","text-yellow-700")},m(t,r){$(t,e,r),h(e,l)},d(t){t&&_(e)}}}function lt(f){let e,l;return{c(){e=p("span"),l=I("• Sold Out!"),this.h()},l(t){e=m(t,"SPAN",{class:!0});var r=b(e);l=w(r,"• Sold Out!"),r.forEach(_),this.h()},h(){g(e,"class","text-red-700")},m(t,r){$(t,e,r),h(e,l)},d(t){t&&_(e)}}}function tt(f){let e,l;return{c(){e=p("span"),l=I("• Available"),this.h()},l(t){e=m(t,"SPAN",{class:!0});var r=b(e);l=w(r,"• Available"),r.forEach(_),this.h()},h(){g(e,"class","text-green-700")},m(t,r){$(t,e,r),h(e,l)},d(t){t&&_(e)}}}function it(f){let e;return{c(){e=I("Free!")},l(l){e=w(l,"Free!")},m(l,t){$(l,e,t)},p:Me,d(l){l&&_(e)}}}function st(f){let e=(f[3].registration.price||"TBA")+"",l;return{c(){l=I(e)},l(t){l=w(t,e)},m(t,r){$(t,l,r)},p(t,r){r[0]&8&&e!==(e=(t[3].registration.price||"TBA")+"")&&O(l,e)},d(t){t&&_(l)}}}function El(f){let e,l,t,r;return t=new Ae({props:{source:f[3].desc||f[3].description}}),{c(){e=p("div"),l=p("div"),le(t.$$.fragment),this.h()},l(n){e=m(n,"DIV",{class:!0});var a=b(e);l=m(a,"DIV",{});var i=b(l);te(t.$$.fragment,i),i.forEach(_),a.forEach(_),this.h()},h(){g(e,"class","mt-4 text-xl markdown")},m(n,a){$(n,e,a),h(e,l),ie(t,l,null),r=!0},p(n,a){const i={};a[0]&8&&(i.source=n[3].desc||n[3].description),t.$set(i)},i(n){r||(y(t.$$.fragment,n),r=!0)},o(n){M(t.$$.fragment,n),r=!1},d(n){n&&_(e),se(t)}}}function Dl(f){let e,l,t,r,n,a=f[3].segments&&Il(f),i=f[3].venues&&Vl(f),s=f[3].speakers&&yl(f),u=f[3].events&&Al(f);return{c(){a&&a.c(),e=P(),i&&i.c(),l=P(),s&&s.c(),t=P(),u&&u.c(),r=ce()},l(o){a&&a.l(o),e=B(o),i&&i.l(o),l=B(o),s&&s.l(o),t=B(o),u&&u.l(o),r=ce()},m(o,c){a&&a.m(o,c),$(o,e,c),i&&i.m(o,c),$(o,l,c),s&&s.m(o,c),$(o,t,c),u&&u.m(o,c),$(o,r,c),n=!0},p(o,c){o[3].segments?a?(a.p(o,c),c[0]&8&&y(a,1)):(a=Il(o),a.c(),y(a,1),a.m(e.parentNode,e)):a&&(ee(),M(a,1,1,()=>{a=null}),x()),o[3].venues?i?(i.p(o,c),c[0]&8&&y(i,1)):(i=Vl(o),i.c(),y(i,1),i.m(l.parentNode,l)):i&&(ee(),M(i,1,1,()=>{i=null}),x()),o[3].speakers?s?(s.p(o,c),c[0]&8&&y(s,1)):(s=yl(o),s.c(),y(s,1),s.m(t.parentNode,t)):s&&(ee(),M(s,1,1,()=>{s=null}),x()),o[3].events?u?(u.p(o,c),c[0]&8&&y(u,1)):(u=Al(o),u.c(),y(u,1),u.m(r.parentNode,r)):u&&(ee(),M(u,1,1,()=>{u=null}),x())},i(o){n||(y(a),y(i),y(s),y(u),n=!0)},o(o){M(a),M(i),M(s),M(u),n=!1},d(o){a&&a.d(o),o&&_(e),i&&i.d(o),o&&_(l),s&&s.d(o),o&&_(t),u&&u.d(o),o&&_(r)}}}function Il(f){let e,l,t,r,n,a=f[7](f[3]),i=[];for(let u=0;u<a.length;u+=1)i[u]=wl(We(f,a,u));const s=u=>M(i[u],1,1,()=>{i[u]=null});return{c(){e=p("h2"),l=I("Day Schedule"),t=P();for(let u=0;u<i.length;u+=1)i[u].c();r=ce(),this.h()},l(u){e=m(u,"H2",{class:!0});var o=b(e);l=w(o,"Day Schedule"),o.forEach(_),t=B(u);for(let c=0;c<i.length;c+=1)i[c].l(u);r=ce(),this.h()},h(){g(e,"class","text-2xl uppercase font-bold mt-10 text-gray-500")},m(u,o){$(u,e,o),h(e,l),$(u,t,o);for(let c=0;c<i.length;c+=1)i[c].m(u,o);$(u,r,o),n=!0},p(u,o){if(o[0]&153){a=u[7](u[3]);let c;for(c=0;c<a.length;c+=1){const d=We(u,a,c);i[c]?(i[c].p(d,o),y(i[c],1)):(i[c]=wl(d),i[c].c(),y(i[c],1),i[c].m(r.parentNode,r))}for(ee(),c=a.length;c<i.length;c+=1)s(c);x()}},i(u){if(!n){for(let o=0;o<a.length;o+=1)y(i[o]);n=!0}},o(u){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)M(i[o]);n=!1},d(u){u&&_(e),u&&_(t),ue(i,u),u&&_(r)}}}function wl(f){let e,l,t,r=He(new Date(f[19]),"EEEE - MMMM d, yyyy")+"",n,a,i,s,u,o,c;function d(...v){return f[10](f[19],...v)}return u=new ql({props:{date:f[19],segments:f[3].segments.filter(d),entry:f[4],bundle:f[0].bundle,event:f[3]}}),{c(){e=p("div"),l=p("h3"),t=p("a"),n=I(r),i=P(),s=p("div"),le(u.$$.fragment),o=P(),this.h()},l(v){e=m(v,"DIV",{class:!0});var D=b(e);l=m(D,"H3",{class:!0});var H=b(l);t=m(H,"A",{href:!0});var S=b(t);n=w(S,r),S.forEach(_),H.forEach(_),i=B(D),s=m(D,"DIV",{class:!0});var V=b(s);te(u.$$.fragment,V),V.forEach(_),o=B(D),D.forEach(_),this.h()},h(){g(t,"href",a="/"+f[4]+"/day/"+f[19]),g(l,"class","mt-4 text-xl uppercase text-gray-500"),g(s,"class","mt-4"),g(e,"class","mb-6")},m(v,D){$(v,e,D),h(e,l),h(l,t),h(t,n),h(e,i),h(e,s),ie(u,s,null),h(e,o),c=!0},p(v,D){f=v,(!c||D[0]&8)&&r!==(r=He(new Date(f[19]),"EEEE - MMMM d, yyyy")+"")&&O(n,r),(!c||D[0]&24&&a!==(a="/"+f[4]+"/day/"+f[19]))&&g(t,"href",a);const H={};D[0]&8&&(H.date=f[19]),D[0]&8&&(H.segments=f[3].segments.filter(d)),D[0]&16&&(H.entry=f[4]),D[0]&1&&(H.bundle=f[0].bundle),D[0]&8&&(H.event=f[3]),u.$set(H)},i(v){c||(y(u.$$.fragment,v),c=!0)},o(v){M(u.$$.fragment,v),c=!1},d(v){v&&_(e),se(u)}}}function Vl(f){var o;let e,l,t=(((o=f[3].venues)==null?void 0:o.length)||0)+"",r,n,a,i,s,u;return s=new ve({props:{arr:f[0].bundle.places.filter(f[11]),col:"place",img:"photo"}}),{c(){e=p("h2"),l=I("Venues ("),r=I(t),n=I(")"),a=P(),i=p("div"),le(s.$$.fragment),this.h()},l(c){e=m(c,"H2",{class:!0});var d=b(e);l=w(d,"Venues ("),r=w(d,t),n=w(d,")"),d.forEach(_),a=B(c),i=m(c,"DIV",{class:!0});var v=b(i);te(s.$$.fragment,v),v.forEach(_),this.h()},h(){g(e,"class","text-2xl uppercase font-bold mt-10 text-gray-500"),g(i,"class","grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 mt-4 text-center text-xl")},m(c,d){$(c,e,d),h(e,l),h(e,r),h(e,n),$(c,a,d),$(c,i,d),ie(s,i,null),u=!0},p(c,d){var D;(!u||d[0]&8)&&t!==(t=(((D=c[3].venues)==null?void 0:D.length)||0)+"")&&O(r,t);const v={};d[0]&9&&(v.arr=c[0].bundle.places.filter(c[11])),s.$set(v)},i(c){u||(y(s.$$.fragment,c),u=!0)},o(c){M(s.$$.fragment,c),u=!1},d(c){c&&_(e),c&&_(a),c&&_(i),se(s)}}}function yl(f){var o;let e,l,t=(((o=f[3].speakers)==null?void 0:o.length)||0)+"",r,n,a,i,s,u;return s=new ve({props:{arr:f[3].speakers}}),{c(){e=p("h2"),l=I("Speakers ("),r=I(t),n=I(")"),a=P(),i=p("div"),le(s.$$.fragment),this.h()},l(c){e=m(c,"H2",{class:!0});var d=b(e);l=w(d,"Speakers ("),r=w(d,t),n=w(d,")"),d.forEach(_),a=B(c),i=m(c,"DIV",{class:!0});var v=b(i);te(s.$$.fragment,v),v.forEach(_),this.h()},h(){g(e,"class","text-2xl uppercase font-bold mt-10 text-gray-500"),g(i,"class","grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 mt-4 text-center text-xl")},m(c,d){$(c,e,d),h(e,l),h(e,r),h(e,n),$(c,a,d),$(c,i,d),ie(s,i,null),u=!0},p(c,d){var D;(!u||d[0]&8)&&t!==(t=(((D=c[3].speakers)==null?void 0:D.length)||0)+"")&&O(r,t);const v={};d[0]&8&&(v.arr=c[3].speakers),s.$set(v)},i(c){u||(y(s.$$.fragment,c),u=!0)},o(c){M(s.$$.fragment,c),u=!1},d(c){c&&_(e),c&&_(a),c&&_(i),se(s)}}}function Al(f){var o;let e,l,t=(((o=f[3].events)==null?void 0:o.length)||0)+"",r,n,a,i,s,u;return s=new ve({props:{arr:f[3].events}}),{c(){e=p("h2"),l=I("Sub-Events ("),r=I(t),n=I(")"),a=P(),i=p("div"),le(s.$$.fragment),this.h()},l(c){e=m(c,"H2",{class:!0});var d=b(e);l=w(d,"Sub-Events ("),r=w(d,t),n=w(d,")"),d.forEach(_),a=B(c),i=m(c,"DIV",{class:!0});var v=b(i);te(s.$$.fragment,v),v.forEach(_),this.h()},h(){g(e,"class","text-2xl uppercase font-bold mt-10 text-gray-500"),g(i,"class","grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 mt-4 text-center")},m(c,d){$(c,e,d),h(e,l),h(e,r),h(e,n),$(c,a,d),$(c,i,d),ie(s,i,null),u=!0},p(c,d){var D;(!u||d[0]&8)&&t!==(t=(((D=c[3].events)==null?void 0:D.length)||0)+"")&&O(r,t);const v={};d[0]&8&&(v.arr=c[3].events),s.$set(v)},i(c){u||(y(s.$$.fragment,c),u=!0)},o(c){M(s.$$.fragment,c),u=!1},d(c){c&&_(e),c&&_(a),c&&_(i),se(s)}}}function Sl(f){var o,c;let e,l,t=((o=f[3].events)==null?void 0:o.map(f[12]).length)+"",r,n,a,i,s,u;return s=new ve({props:{arr:(c=f[3].events)==null?void 0:c.map(f[13]),col:"event",img:"logo"}}),{c(){e=p("h2"),l=I("Big events ("),r=I(t),n=I(")"),a=P(),i=p("div"),le(s.$$.fragment),this.h()},l(d){e=m(d,"H2",{class:!0});var v=b(e);l=w(v,"Big events ("),r=w(v,t),n=w(v,")"),v.forEach(_),a=B(d),i=m(d,"DIV",{class:!0});var D=b(i);te(s.$$.fragment,D),D.forEach(_),this.h()},h(){g(e,"class","text-2xl uppercase font-bold mt-10 text-gray-500"),g(i,"class","grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 mt-4 text-2xl text-center")},m(d,v){$(d,e,v),h(e,l),h(e,r),h(e,n),$(d,a,v),$(d,i,v),ie(s,i,null),u=!0},p(d,v){var H,S;(!u||v[0]&9)&&t!==(t=((H=d[3].events)==null?void 0:H.map(d[12]).length)+"")&&O(r,t);const D={};v[0]&9&&(D.arr=(S=d[3].events)==null?void 0:S.map(d[13])),s.$set(D)},i(d){u||(y(s.$$.fragment,d),u=!0)},o(d){M(s.$$.fragment,d),u=!1},d(d){d&&_(e),d&&_(a),d&&_(i),se(s)}}}function Tl(f){let e,l,t=(f[0].bundle.events.filter(f[14]).length||0)+"",r,n,a,i,s,u;return s=new ve({props:{arr:f[0].bundle.events.filter(f[15]),col:"event",img:"logo"}}),{c(){e=p("h2"),l=I("Events ("),r=I(t),n=I(")"),a=P(),i=p("div"),le(s.$$.fragment),this.h()},l(o){e=m(o,"H2",{class:!0});var c=b(e);l=w(c,"Events ("),r=w(c,t),n=w(c,")"),c.forEach(_),a=B(o),i=m(o,"DIV",{class:!0});var d=b(i);te(s.$$.fragment,d),d.forEach(_),this.h()},h(){g(e,"class","text-2xl uppercase font-bold mt-10 text-gray-500"),g(i,"class","grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 mt-4 text-center text-xl")},m(o,c){$(o,e,c),h(e,l),h(e,r),h(e,n),$(o,a,c),$(o,i,c),ie(s,i,null),u=!0},p(o,c){(!u||c[0]&9)&&t!==(t=(o[0].bundle.events.filter(o[14]).length||0)+"")&&O(r,t);const d={};c[0]&9&&(d.arr=o[0].bundle.events.filter(o[15])),s.$set(d)},i(o){u||(y(s.$$.fragment,o),u=!0)},o(o){M(s.$$.fragment,o),u=!1},d(o){o&&_(e),o&&_(a),o&&_(i),se(s)}}}function Nl(f){let e,l,t=(f[0].bundle.events.filter(f[16]).length||0)+"",r,n,a,i,s,u;return s=new ve({props:{arr:f[0].bundle.events.filter(f[17]),col:"event",img:"logo"}}),{c(){e=p("h2"),l=I("Events ("),r=I(t),n=I(")"),a=P(),i=p("div"),le(s.$$.fragment),this.h()},l(o){e=m(o,"H2",{class:!0});var c=b(e);l=w(c,"Events ("),r=w(c,t),n=w(c,")"),c.forEach(_),a=B(o),i=m(o,"DIV",{class:!0});var d=b(i);te(s.$$.fragment,d),d.forEach(_),this.h()},h(){g(e,"class","text-2xl uppercase font-bold mt-10 text-gray-500"),g(i,"class","grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 mt-4 text-center text-xl")},m(o,c){$(o,e,c),h(e,l),h(e,r),h(e,n),$(o,a,c),$(o,i,c),ie(s,i,null),u=!0},p(o,c){(!u||c[0]&9)&&t!==(t=(o[0].bundle.events.filter(o[16]).length||0)+"")&&O(r,t);const d={};c[0]&9&&(d.arr=o[0].bundle.events.filter(o[17])),s.$set(d)},i(o){u||(y(s.$$.fragment,o),u=!0)},o(o){M(s.$$.fragment,o),u=!1},d(o){o&&_(e),o&&_(a),o&&_(i),se(s)}}}function rt(f){var Ce,je;let e,l,t,r,n,a,i,s,u,o,c,d,v,D=f[2].params.type+"",H,S,V,N,T,C,k,A,K,re=f[3].name+"",me,Se,ge,be,ke,$e,Te,Ne,Ee,De,Ie,we,Ve,fe,ae;document.title=e=f[3].name+" | #PBW"+f[2].params.entry,T=new Ll({props:{item:f[3],img:((Ce=he[f[1]])==null?void 0:Ce.logo)||"logo",aspect:((je=he[f[1]])==null?void 0:je.aspect)||"aspect-square",width:"w-48 md:w-56 mr-5",rounded:"rounded-xl"}});let Q=(f[3].photoUrl||f[3].photo)&&Ze(f),U=f[1]==="event"&&xe(f),q=f[1]==="speaker"&&tl(f),L=f[1]==="event"&&rl(f),X=f[1]==="place"&&_l(f),Y=f[3].links&&gl(f),Z=f[3].registration&&kl(f),F=(f[3].desc||f[3].description)&&El(f),R=f[1]==="event"&&Dl(f),W=f[1]==="union"&&Sl(f),z=f[1]==="speaker"&&Tl(f),G=f[1]==="place"&&Nl(f);return fe=new Fl({props:{col:f[1],item:f[3],bundle:f[0].bundle}}),{c(){l=P(),t=p("div"),r=p("div"),n=p("div"),a=p("div"),i=p("h1"),s=p("a"),u=I("#PBW23"),c=p("a"),d=p("span"),v=I("."),H=I(D),V=P(),N=p("div"),le(T.$$.fragment),C=P(),Q&&Q.c(),k=P(),A=p("div"),K=p("h2"),me=I(re),Se=P(),U&&U.c(),ge=P(),q&&q.c(),be=P(),L&&L.c(),ke=P(),X&&X.c(),$e=P(),Y&&Y.c(),Te=P(),Z&&Z.c(),Ne=P(),F&&F.c(),Ee=P(),R&&R.c(),De=P(),W&&W.c(),Ie=P(),z&&z.c(),we=P(),G&&G.c(),Ve=P(),le(fe.$$.fragment),this.h()},l(E){Ml("svelte-80w11w",document.head).forEach(_),l=B(E),t=m(E,"DIV",{class:!0});var de=b(t);r=m(de,"DIV",{class:!0});var _e=b(r);n=m(_e,"DIV",{class:!0});var J=b(n);a=m(J,"DIV",{class:!0});var pe=b(a);i=m(pe,"H1",{class:!0});var Pe=b(i);s=m(Pe,"A",{href:!0});var Oe=b(s);u=w(Oe,"#PBW23"),Oe.forEach(_),c=m(Pe,"A",{href:!0});var Ue=b(c);d=m(Ue,"SPAN",{class:!0});var Be=b(d);v=w(Be,"."),H=w(Be,D),Be.forEach(_),Ue.forEach(_),Pe.forEach(_),pe.forEach(_),V=B(J),N=m(J,"DIV",{class:!0});var oe=b(N);te(T.$$.fragment,oe),C=B(oe),Q&&Q.l(oe),k=B(oe),A=m(oe,"DIV",{class:!0});var ne=b(A);K=m(ne,"H2",{class:!0});var qe=b(K);me=w(qe,re),qe.forEach(_),Se=B(ne),U&&U.l(ne),ge=B(ne),q&&q.l(ne),be=B(ne),L&&L.l(ne),ke=B(ne),X&&X.l(ne),$e=B(ne),Y&&Y.l(ne),ne.forEach(_),Te=B(oe),Z&&Z.l(oe),oe.forEach(_),Ne=B(J),F&&F.l(J),Ee=B(J),R&&R.l(J),De=B(J),W&&W.l(J),Ie=B(J),z&&z.l(J),we=B(J),G&&G.l(J),Ve=B(J),te(fe.$$.fragment,J),J.forEach(_),_e.forEach(_),de.forEach(_),this.h()},h(){g(s,"href",o="/"+f[2].params.entry),g(d,"class","text-pbw-yellow"),g(c,"href",S="/"+f[2].params.entry+"/"+f[5][f[2].params.type]),g(i,"class","text-4xl md:text-5xl font-bold text-pbw-red"),g(a,"class","flex gap-8 mb-6 md:mb-10"),g(K,"class","text-4xl md:text-5xl font-bold text-gray-600 dark:text-gray-400 mt-4 md:mt-0"),g(A,"class","flex-grow"),g(N,"class","flex flex-wrap md:flex-nowrap w-full"),g(n,"class","mx-4 xl:mx-0"),g(r,"class","max-w-7xl mx-auto pt-5 md:pt-10"),g(t,"class","w-full dark:text-gray-400")},m(E,j){$(E,l,j),$(E,t,j),h(t,r),h(r,n),h(n,a),h(a,i),h(i,s),h(s,u),h(i,c),h(c,d),h(d,v),h(d,H),h(n,V),h(n,N),ie(T,N,null),h(N,C),Q&&Q.m(N,null),h(N,k),h(N,A),h(A,K),h(K,me),h(A,Se),U&&U.m(A,null),h(A,ge),q&&q.m(A,null),h(A,be),L&&L.m(A,null),h(A,ke),X&&X.m(A,null),h(A,$e),Y&&Y.m(A,null),h(N,Te),Z&&Z.m(N,null),h(n,Ne),F&&F.m(n,null),h(n,Ee),R&&R.m(n,null),h(n,De),W&&W.m(n,null),h(n,Ie),z&&z.m(n,null),h(n,we),G&&G.m(n,null),h(n,Ve),ie(fe,n,null),ae=!0},p(E,j){var J,pe;(!ae||j[0]&12)&&e!==(e=E[3].name+" | #PBW"+E[2].params.entry)&&(document.title=e),(!ae||j[0]&4&&o!==(o="/"+E[2].params.entry))&&g(s,"href",o),(!ae||j[0]&4)&&D!==(D=E[2].params.type+"")&&O(H,D),(!ae||j[0]&4&&S!==(S="/"+E[2].params.entry+"/"+E[5][E[2].params.type]))&&g(c,"href",S);const de={};j[0]&8&&(de.item=E[3]),j[0]&2&&(de.img=((J=he[E[1]])==null?void 0:J.logo)||"logo"),j[0]&2&&(de.aspect=((pe=he[E[1]])==null?void 0:pe.aspect)||"aspect-square"),T.$set(de),E[3].photoUrl||E[3].photo?Q?Q.p(E,j):(Q=Ze(E),Q.c(),Q.m(N,k)):Q&&(Q.d(1),Q=null),(!ae||j[0]&8)&&re!==(re=E[3].name+"")&&O(me,re),E[1]==="event"?U?(U.p(E,j),j[0]&2&&y(U,1)):(U=xe(E),U.c(),y(U,1),U.m(A,ge)):U&&(ee(),M(U,1,1,()=>{U=null}),x()),E[1]==="speaker"?q?(q.p(E,j),j[0]&2&&y(q,1)):(q=tl(E),q.c(),y(q,1),q.m(A,be)):q&&(ee(),M(q,1,1,()=>{q=null}),x()),E[1]==="event"?L?(L.p(E,j),j[0]&2&&y(L,1)):(L=rl(E),L.c(),y(L,1),L.m(A,ke)):L&&(ee(),M(L,1,1,()=>{L=null}),x()),E[1]==="place"?X?X.p(E,j):(X=_l(E),X.c(),X.m(A,$e)):X&&(X.d(1),X=null),E[3].links?Y?Y.p(E,j):(Y=gl(E),Y.c(),Y.m(A,null)):Y&&(Y.d(1),Y=null),E[3].registration?Z?Z.p(E,j):(Z=kl(E),Z.c(),Z.m(N,null)):Z&&(Z.d(1),Z=null),E[3].desc||E[3].description?F?(F.p(E,j),j[0]&8&&y(F,1)):(F=El(E),F.c(),y(F,1),F.m(n,Ee)):F&&(ee(),M(F,1,1,()=>{F=null}),x()),E[1]==="event"?R?(R.p(E,j),j[0]&2&&y(R,1)):(R=Dl(E),R.c(),y(R,1),R.m(n,De)):R&&(ee(),M(R,1,1,()=>{R=null}),x()),E[1]==="union"?W?(W.p(E,j),j[0]&2&&y(W,1)):(W=Sl(E),W.c(),y(W,1),W.m(n,Ie)):W&&(ee(),M(W,1,1,()=>{W=null}),x()),E[1]==="speaker"?z?(z.p(E,j),j[0]&2&&y(z,1)):(z=Tl(E),z.c(),y(z,1),z.m(n,we)):z&&(ee(),M(z,1,1,()=>{z=null}),x()),E[1]==="place"?G?(G.p(E,j),j[0]&2&&y(G,1)):(G=Nl(E),G.c(),y(G,1),G.m(n,Ve)):G&&(ee(),M(G,1,1,()=>{G=null}),x());const _e={};j[0]&2&&(_e.col=E[1]),j[0]&8&&(_e.item=E[3]),j[0]&1&&(_e.bundle=E[0].bundle),fe.$set(_e)},i(E){ae||(y(T.$$.fragment,E),y(U),y(q),y(L),y(F),y(R),y(W),y(z),y(G),y(fe.$$.fragment,E),ae=!0)},o(E){M(T.$$.fragment,E),M(U),M(q),M(L),M(F),M(R),M(W),M(z),M(G),M(fe.$$.fragment,E),ae=!1},d(E){E&&_(l),E&&_(t),se(T),Q&&Q.d(),U&&U.d(),q&&q.d(),L&&L.d(),X&&X.d(),Y&&Y.d(),Z&&Z.d(),F&&F.d(),R&&R.d(),W&&W.d(),z&&z.d(),G&&G.d(),se(fe)}}}function nt(f,e,l){let t,r,n,a,i;Cl(f,Ul,k=>l(2,i=k));let{data:s}=e;const u=Object.fromEntries(Object.keys(he.collections).map(k=>[he.collections[k].model,k])),o={twitter:{col:k=>k.twitter?"https://twitter.com/"+k.twitter:null},web:{col:k=>{var A;return(A=k.web)==null?void 0:A.url}},linkedin:{col:k=>k.linkedin?"https://linkedin.com/in/"+k.linkedin:null}};function c(k){const A=[];for(const K of k.segments){const re=He(new Date(K.startTime),"yyyy-MM-dd");A.includes(re)||A.push(re)}return A}const d=k=>{const A=s.bundle.places.find(K=>K.id===k);return`<a href="/${i.params.entry}/place/${A.id}" class="underline hover:no-underline">${A.name}</a>`},v=(k,A)=>A.startTime.match(new RegExp("^"+k)),D=k=>a.venues.includes(k.id),H=k=>s.bundle.events.find(A=>A.id===k),S=k=>s.bundle.events.find(A=>A.id===k),V=k=>{var A;return(A=k.speakers)==null?void 0:A.find(K=>K.id===a.id)},N=k=>{var A;return(A=k.speakers)==null?void 0:A.find(K=>K.id===a.id)},T=k=>{var A;return(A=k.venues)==null?void 0:A.includes(a.id)},C=k=>{var A;return(A=k.venues)==null?void 0:A.includes(a.id)};return f.$$set=k=>{"data"in k&&l(0,s=k.data)},f.$$.update=()=>{f.$$.dirty[0]&4&&l(4,t=i.params.entry),f.$$.dirty[0]&4&&l(1,r=i.params.type),f.$$.dirty[0]&2&&l(8,n=u[r]),f.$$.dirty[0]&261&&l(3,a=s.bundle[n].find(k=>k.id===i.params.slug)),f.$$.dirty[0]&3&&s.schema&&s.schema.definitions[r]},[s,r,i,a,t,u,o,c,n,d,v,D,H,S,V,N,T,C]}class ht extends Pl{constructor(e){super(),Bl(this,e,nt,rt,Hl,{data:0},null,[-1,-1])}}export{ht as default};
