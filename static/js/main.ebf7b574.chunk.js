(this.webpackJsonplifecicle=this.webpackJsonplifecicle||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(10),o=n.n(a),r=(n(15),n(16),n(9)),l=n(6),u=n(2),s=n(3),j=n(0);var m=function(e){var t=function(t){e.handlerChenge(t)};return Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onClickClock()},children:[Object(j.jsxs)("div",{style:{width:"400px",display:"flex",justifyContent:"space-between",marginTop:"5px"},children:[Object(j.jsx)("span",{children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: "}),Object(j.jsx)("input",{onChange:t,name:"nameClock",value:e.nameClock})]}),Object(j.jsxs)("div",{style:{width:"400px",display:"flex",justifyContent:"space-between",marginTop:"5px"},children:[Object(j.jsx)("span",{children:"\u041f\u043b\u044e\u0441 \u043a \u0432\u0430\u0448\u0435\u043c\u0443 \u0432\u0440\u0435\u043c\u0435\u043d\u0438: "}),Object(j.jsx)("input",{onChange:t,name:"timeZone",value:e.timeZone})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{style:{display:"block",marginLeft:"auto",marginRight:"auto",marginTop:"5px"},children:"Add Clock"})})]})},b=n(8),d=n.n(b);var f=function(e){var t=Object(c.useState)({name:e.name,time:d()().add(e.timeZone,"hours").format("hh:mm:ss")}),n=Object(s.a)(t,2),i=n[0],a=n[1];return Object(c.useEffect)((function(){var t=setInterval((function(){a((function(t){return Object(u.a)(Object(u.a)({},t),{},{time:d()().add(e.timeZone,"hours").format("hh:mm:ss")})}))}),1e3);return function(){return clearInterval(t)}})),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{style:{display:"inline-block"},children:[Object(j.jsxs)("div",{children:[i.name," "]}),Object(j.jsxs)("div",{children:["Time: ",i.time," "]})]}),Object(j.jsx)("button",{onClick:function(t){return e.remove(t)},name:i.name,children:"Delete Clock"})]})};var h=function(e){var t=function(t){e.remove(t)};return Object(j.jsx)(j.Fragment,{children:e.list.map((function(e){return Object(j.jsx)(f,{name:e.nameClock,timeZone:e.timeZone,remove:t},e.nameClock)}))})};var O=function(){var e=Object(c.useState)({nameClock:"",timeZone:""}),t=Object(s.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)([]),o=Object(s.a)(a,2),b=o[0],d=o[1],f=Object(c.useState)(!1),O=Object(s.a)(f,2),x=O[0],v=O[1];return Object(j.jsxs)("div",{style:{width:"400px",marginLeft:"auto",marginRight:"auto"},children:[Object(j.jsx)("button",{onClick:function(){return v(!x)},style:{display:"block",marginLeft:"auto",marginRight:"auto"},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0447\u0430\u0441\u044b"}),x&&Object(j.jsx)(m,{onClickClock:function(){d((function(e){return[].concat(Object(r.a)(e),[{nameClock:n.nameClock,timeZone:n.timeZone}])})),i({nameClock:"",timeZone:""}),v(!1)},handlerChenge:function(e){i((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(l.a)({},e.target.name,e.target.value))}))},nameClock:n.nameClock,timeZone:n.timeZone}),b.length>0&&Object(j.jsx)("h2",{children:"\u0427\u0430\u0441\u044b"}),Object(j.jsx)(h,{list:b,remove:function(e){d((function(t){return Object(r.a)(t.filter((function(t){return t.nameClock!==e.target.name})))}))}})]})};var x=function(){return Object(j.jsx)(O,{})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),a(e),o(e)}))};o.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),v()}},[[19,1,2]]]);
//# sourceMappingURL=main.ebf7b574.chunk.js.map