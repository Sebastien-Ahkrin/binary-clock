(this["webpackJsonpbinary-clock"]=this["webpackJsonpbinary-clock"]||[]).push([[0],{4:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(2),c=n.n(i),o=n(3);function s(e){return a.a.createElement("div",{className:"\n        h-12 text-gray-700 text-center px-4 py-0.5 m-1 \n        ".concat(e.activated?"bg-indigo-400":"bg-indigo-700","\n      ")})}function u(e){var t=e.representation.toString(2).padStart(4,"0").split("").map((function(e){return"1"===e}));return a.a.createElement("div",{className:"flex flex-col w-1/5"},[1,2,4,8].map((function(n,r){return a.a.createElement(s,{key:r,value:e.representation,activated:t[r]})})))}function l(){var e=Object(r.useState)([0,0,0,0,0]),t=Object(o.a)(e,2),n=t[0],i=t[1];return Object(r.useEffect)((function(){setInterval((function(){var e=new Date;i([Number(e.getHours().toString().split("")[0]),Number(e.getHours().toString().split("")[1]),Number(e.getMinutes().toString().split("")[0]),Number(e.getMinutes().toString().split("")[1]),Number(e.getMilliseconds().toString().split("")[0])])}),100)}),[]),a.a.createElement("div",{className:"flex content-center flex-wrap justify-center container mx-auto h-screen"},Array(5).fill(0).map((function(e,t){return a.a.createElement(u,{key:t,representation:n[t]})})))}c.a.render(a.a.createElement(l,null),document.getElementById("root"))}},[[4,1,2]]]);
//# sourceMappingURL=main.42d533a9.chunk.js.map