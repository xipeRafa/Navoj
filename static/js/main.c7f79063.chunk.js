(this.webpackJsonpauctioneer=this.webpackJsonpauctioneer||[]).push([[0],{58:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(24),a=n(10),s=n(68),i=n(41),o=(n(49),n(59),n(60),i.a.initializeApp({apiKey:"AIzaSyCqG_1hm7AJN58pyBj_lbMecOtwP2NXbzQ",authDomain:"taxis-stackblitz.firebaseapp.com",projectId:"taxis-stackblitz",storageBucket:"taxis-stackblitz.appspot.com",messagingSenderId:"977311415632",appId:"1:977311415632:web:c4a419e65259ff87fa8055"})),u=i.a.firestore.FieldValue.serverTimestamp,l=o.firestore(),j=o.storage(),d=o.auth(),b=n(2),O=Object(r.createContext)(),x=function(e){var t=e.children,n=Object(r.useState)(null),c=Object(a.a)(n,2),s=c[0],i=c[1],o=Object(r.useState)(!0),u=Object(a.a)(o,2),j=u[0],x=u[1],m=Object(r.useState)(""),h=Object(a.a)(m,2),f=h[0],p=h[1];return Object(r.useEffect)((function(){return d.onAuthStateChanged((function(e){i(e),x(!1)}))}),[]),Object(r.useEffect)((function(){var e=setTimeout((function(){return p("")}),5e3);return function(){return clearTimeout(e)}}),[f]),Object(b.jsx)(O.Provider,{value:{currentUser:s,register:function(e,t){return d.createUserWithEmailAndPassword(e,t)},login:function(e,t){return d.signInWithEmailAndPassword(e,t)},logout:function(){return d.signOut()},bidAuction:function(e,t){return l.collection("orders").doc(e,t).update({entregado:!0,deliver:t})},endAuction:function(e){return l.collection("auctions").doc(e).delete()},globalMsg:f},children:!j&&t})},m=n(21),h=function(e){var t=Object(r.useState)([]),n=Object(a.a)(t,2),c=n[0],s=n[1];return Object(r.useEffect)((function(){var t=l.collection(e).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(m.a)(Object(m.a)({},e.data()),{},{id:e.id}))})),s(t)}));return function(){return t()}}),[e]),{docs:c}},f=function(e){var t=e.orden,n=Object(r.useContext)(O),c=n.currentUser,s=n.bidAuction,i=h("orders").docs,o=function(e){var t=Object(r.useState)([]),n=Object(a.a)(t,2),c=n[0],s=n[1];return Object(r.useEffect)((function(){var t=l.collection(e).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(m.a)(Object(m.a)({},e.data()),{},{id:e.id}))})),s(t)}));return function(){return t()}}),[e]),{items:c}}("items").items;console.log("docs:",i),console.log("items:",o);var u,j=t.entregado?"Entregado":"Marcar como Entregado",d=t.date.toDate().toLocaleDateString("es-CL",{weekday:"long",year:"numeric",month:"short",day:"numeric"});return Object(b.jsx)(b.Fragment,{children:c&&Object(b.jsxs)("div",{className:"pl-5 col-sm-4 border-end border-info my-3 p-4 bg-white",children:[Object(b.jsx)("button",{onClick:function(){return s(t.id,c.email)},className:(t.entregado,"mb-3 btn btn-info w-100"),children:j}),Object(b.jsxs)("h6",{children:["Id-Orden: ",Object(b.jsx)("span",{className:"text-muted",children:t.id}),"  "]}),Object(b.jsxs)("p",{children:[" ",Object(b.jsx)("span",{className:"text-muted",children:"comprador:"})," ",t.buyer.name," "]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("span",{className:"text-muted",children:"correo:"}),"  ",t.buyer.email," "]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("span",{className:"text-muted",children:"fecha:"}),"  ",d]}),Object(b.jsx)("br",{}),t.items.map((function(e,t){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("h6",{children:["Id-producto: ",Object(b.jsx)("span",{className:"text-muted",children:e.id})," "]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("span",{className:"text-muted",children:"producto:"}),"  ",e.item]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("span",{className:"text-muted",children:"precio:"}),"  ",e.price]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("span",{className:"text-muted",children:"cantidad:"}),"  ",e.qty]}),o.map((function(t){return console.log(t.id===e.id?u=t.pictureUrl[0]:null)})),Object(b.jsx)("img",{className:"col-3 mb-1 i-img",src:u,alt:""})]},t)})),Object(b.jsx)("br",{}),Object(b.jsxs)("p",{className:"border text-center",children:["Precio: $",Object(b.jsx)("span",{className:"text-white bg-dark fs-4 py-1 px-2 ",children:t.total})]})]})})},p=n(65),v=n(20),g=n.n(v),w=n(25),y=function(e){var t=Object(r.useState)(0),n=Object(a.a)(t,2),c=n[0],s=n[1],i=Object(r.useState)(null),o=Object(a.a)(i,2),d=o[0],b=o[1];return Object(r.useState)((function(){var t=j.ref(e.itemImage.name),n=l.collection("auctions");t.put(e.itemImage).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;s(t)}),(function(e){console.log(e)}),Object(w.a)(g.a.mark((function r(){var c,a;return g.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.getDownloadURL();case 2:return c=r.sent,a=u(),delete e.itemImage,r.next=7,n.add(Object(m.a)(Object(m.a)({},e),{},{createdAt:a,imgUrl:c}));case 7:b(!0);case 8:case"end":return r.stop()}}),r)}))))}),[e]),{progress:c,isCompleted:d}},N=function(e){var t=e.auction,n=e.setAuction,c=y(t),a=c.progress,s=c.isCompleted;return Object(r.useEffect)((function(){s&&n(null)}),[s,n]),Object(b.jsx)(p.a.div,{style:{height:"5px",background:"black"},initial:{width:0},animate:{width:"".concat(a,"%")}})},C=function(){var e=Object(r.useState)(null),t=Object(a.a)(e,2),n=t[0],c=t[1],i=Object(r.useContext)(O),o=i.currentUser,u=i.globalMsg,l=h("orders").docs,j=Object(r.useState)(!1),d=Object(a.a)(j,2),x=d[0],m=d[1],p=l.filter((function(e){return e.deliver===(null===o||void 0===o?void 0:o.email)})).filter((function(e){return!0===e.noDeliver})).filter((function(e){return"navojoa"===e.sucursal})),v=l.filter((function(e){return!e.entregado})).filter((function(e){return!0===e.noDeliver})).filter((function(e){return"navojoa"===e.sucursal}));return Object(b.jsxs)("div",{className:"border-transparent",children:[n&&Object(b.jsx)(N,{auction:n,setAuction:c}),Object(b.jsx)("div",{style:{zIndex:"9999999"},className:"text-center w-50 position-fixed top-10 start-50 translate-middle",children:u&&Object(b.jsx)(s.a,{variant:"danger",children:u})}),Object(b.jsxs)("div",{className:"text-center mt-3 container",children:[Object(b.jsx)("button",{className:x?"w-25 mx-3 btn btn-lg btn-success":"w-25 mx-3 btn btn-lg btn-light",onClick:function(e){return m(!0)},children:"Entregas"}),Object(b.jsx)("button",{className:x?"w-25 mx-3 btn-lg btn btn-light":"w-25 mx-3 btn btn-lg btn-success",onClick:function(e){return m(!1)},children:"Compras"})]}),x?Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row mt-4",children:p.map((function(e,t){return Object(b.jsx)(f,{orden:e},t)}))})}):Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row mt-4",children:v.map((function(e,t){return Object(b.jsx)(f,{orden:e},t)}))})})]})},k=n(66),S=n(67),E=n(64),I=function(){var e=Object(r.useState)(!1),t=Object(a.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(""),o=Object(a.a)(i,2),u=o[0],l=o[1],j=Object(r.useRef)(),d=Object(r.useRef)(),x=Object(r.useContext)(O).login,m=function(){return c(!1)},h=function(){var e=Object(w.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),l(""),e.prev=2,e.next=5,x(j.current.value,d.current.value);case 5:m(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),l("Invalid login");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{onClick:function(){return c(!0)},className:"btn btn-dark mx-2",children:"Entrar"}),Object(b.jsx)(k.a,{centered:!0,show:n,onHide:m,children:Object(b.jsxs)("form",{onSubmit:h,children:[Object(b.jsx)(k.a.Header,{children:Object(b.jsx)(k.a.Title,{children:"Entrar"})}),Object(b.jsxs)(k.a.Body,{children:[u&&Object(b.jsx)(s.a,{variant:"danger",children:u}),Object(b.jsxs)(S.a.Group,{children:[Object(b.jsx)(S.a.Label,{children:"Email "}),Object(b.jsx)(S.a.Control,{type:"email",required:!0,ref:j})]}),Object(b.jsxs)(S.a.Group,{children:[Object(b.jsx)(S.a.Label,{children:"Password"}),Object(b.jsx)(S.a.Control,{type:"password",required:!0,ref:d})]})]}),Object(b.jsxs)(k.a.Footer,{children:[Object(b.jsx)(E.a,{variant:"secondary",onClick:m,children:"Cancelar"}),Object(b.jsx)(E.a,{variant:"primary",type:"submit",children:"Entrar"})]})]})})]})},A=function(){var e=Object(r.useState)(!1),t=Object(a.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(""),o=Object(a.a)(i,2),u=o[0],l=o[1],j=Object(r.useRef)(),d=Object(r.useRef)(),x=Object(r.useRef)(),m=Object(r.useContext)(O).register,h=function(){return c(!1)},f=function(){var e=Object(w.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),l(""),d.current.value===x.current.value){e.next=4;break}return e.abrupt("return",l("Passwords does not match"));case 4:return e.prev=4,e.next=7,m(j.current.value,d.current.value);case 7:h(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),l(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(k.a,{centered:!0,show:n,onHide:h,children:Object(b.jsxs)("form",{onSubmit:f,children:[Object(b.jsx)(k.a.Header,{children:Object(b.jsx)(k.a.Title,{children:"Registro"})}),Object(b.jsxs)(k.a.Body,{children:[u&&Object(b.jsx)(s.a,{variant:"danger",children:u}),Object(b.jsxs)(S.a.Group,{children:[Object(b.jsx)(S.a.Label,{children:"Email"}),Object(b.jsx)(S.a.Control,{type:"email",required:!0,ref:j})]}),Object(b.jsxs)(S.a.Group,{children:[Object(b.jsx)(S.a.Label,{children:"Password"}),Object(b.jsx)(S.a.Control,{type:"password",required:!0,ref:d})]}),Object(b.jsxs)(S.a.Group,{children:[Object(b.jsx)(S.a.Label,{children:"Confirmar Password"}),Object(b.jsx)(S.a.Control,{type:"password",required:!0,ref:x})]})]}),Object(b.jsxs)(k.a.Footer,{children:[Object(b.jsx)(E.a,{variant:"secondary",onClick:h,children:"Cancelar"}),Object(b.jsx)(E.a,{variant:"primary",type:"submit",children:"Registro"})]})]})})})},L=function(){var e=Object(r.useContext)(O),t=e.currentUser,n=e.logout,c=Object(r.useState)(!1),s=Object(a.a)(c,2),i=s[0],o=s[1];return Object(b.jsxs)("nav",{className:"container navbar navbar-light ",children:[Object(b.jsx)("div",{className:"navbar-brand mb-4 w-100 text-center border",onClick:function(){return o(!i)},children:Object(b.jsx)("h1",{children:"nexGym Tienda -- Navojoa"})}),Object(b.jsx)("div",{className:i?"d-flex flex-column w-100":"d-none",children:t?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:" btn-dark mx-2 disabled mb-2 p-2 text-center",children:t.email}),Object(b.jsx)("div",{onClick:function(){return n()},className:"btn btn-light mx-2",children:"SALIR"})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(I,{}),Object(b.jsx)(A,{})]})})]})},P=function(){return Object(b.jsxs)(x,{children:[Object(b.jsx)(L,{}),Object(b.jsx)(C,{})]})};n(57);Object(c.render)(Object(b.jsx)(P,{}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.c7f79063.chunk.js.map