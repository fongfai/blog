(()=>{var e,t={10:(e,t,r)=>{const{getData:o}=r(220),{findMaxIndex:n}=r(451);n([1,2,123,21,3,21,321,1]),o("./index.html")},220:(e,t,r)=>{const o=r(669);e.exports={getData:e=>{o.get(e).then((e=>{console.log(e.status),console.log(e.data.length)}))}}},451:(e,t,r)=>{const o=r(486);e.exports={findMaxIndex:e=>{let t=o.max(e),r=Array.prototype.indexOf.call(e,t);console.log(r)}}}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var a=r[e]={id:e,loaded:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.loaded=!0,a.exports}o.m=t,e=[],o.O=(t,r,n,a)=>{if(!r){var l=1/0;for(d=0;d<e.length;d++){for(var[r,n,a]=e[d],i=!0,s=0;s<r.length;s++)(!1&a||l>=a)&&Object.keys(o.O).every((e=>o.O[e](r[s])))?r.splice(s--,1):(i=!1,a<l&&(l=a));if(i){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,n,a]},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={179:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[l,i,s]=r,c=0;if(l.some((t=>0!==e[t]))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(s)var d=s(o)}for(t&&t(r);c<l.length;c++)a=l[c],o.o(e,a)&&e[a]&&e[a][0](),e[l[c]]=0;return o.O(d)},r=self.webpackChunkwebpacktest=self.webpackChunkwebpacktest||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[278,913],(()=>o(10)));n=o.O(n)})();