(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{32:function(e,t,a){e.exports=a(50)},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),u=a.n(c),l=a(3),i=a(16),o=a(2),s=a(4),m=a.n(s),p=a(8),f=a(17);a(38),a(40),a(51);f.initializeApp({apiKey:"AIzaSyAcECVHQxouseenAzYQvcacE6zlUGjsjPY",authDomain:"nwitter-c568a.firebaseapp.com",databaseURL:"https://nwitter-c568a.firebaseio.com",projectId:"nwitter-c568a",storageBucket:"nwitter-c568a.appspot.com",messagingSenderId:"561273752178",appId:"1:561273752178:web:cd938b42b28d10134810eb"});var d=f.auth(),b=f,E=f.firestore(),h=f.storage(),v=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)(""),i=Object(l.a)(u,2),o=i[0],s=i[1],f=Object(n.useState)(!0),b=Object(l.a)(f,2),E=b[0],h=b[1],v=Object(n.useState)(""),g=Object(l.a)(v,2),w=g[0],y=g[1],j=function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!E){e.next=8;break}return e.next=5,d.createUserWithEmailAndPassword(a,o);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,d.signInWithEmailAndPassword(a,o);case 10:n=e.sent;case 11:console.log(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),y(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),O=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?c(n):"password"===a&&s(n)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:j,className:"container"},r.a.createElement("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:a,onChange:O,className:"authInput"}),r.a.createElement("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:O,className:"authInput"}),r.a.createElement("input",{type:"submit",className:"authInput authSubmit",value:E?"Create Account":"Log In"}),w&&r.a.createElement("span",{className:"authError"},w)),r.a.createElement("span",{onClick:function(){return h((function(e){return!e}))},className:"authSwitch"},E?"Sign In":"Create Account"))},g=a(9),w=a(18),y=function(){var e=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new b.auth.GoogleAuthProvider:"github"===n&&(a=new b.auth.GithubAuthProvider),e.next=4,d.signInWithPopup(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"authContainer"},r.a.createElement(g.a,{icon:w.b,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),r.a.createElement(v,null),r.a.createElement("div",{className:"authBtns"},r.a.createElement("button",{onClick:e,name:"google",className:"authBtn"},"Continue with Google ",r.a.createElement(g.a,{icon:w.a}))))},j=a(31),O=a(12),x=function(e){var t=e.nweetObj,a=e.isOwner,c=Object(n.useState)(!1),u=Object(l.a)(c,2),i=u[0],o=u[1],s=Object(n.useState)(t.text),f=Object(l.a)(s,2),d=f[0],b=f[1],v=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delet this nweet?")){e.next=6;break}return e.next=4,E.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,h.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){return o((function(e){return!e}))},y=function(){var e=Object(p.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,E.doc("nweets/".concat(t.id)).update({text:d});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"nweet"},i?r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:y,className:"container nweetEdit"},r.a.createElement("input",{type:"text",placeholder:"Edit your nweet",value:d,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;b(t)},className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Update Nweet",className:"formBtn"})),r.a.createElement("span",{onClick:w,className:"formBtn cancelBtn"},"Cancel"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,t.text),t.attachmentUrl&&r.a.createElement("img",{src:t.attachmentUrl}),a&&r.a.createElement("div",{class:"nweet__actions"},r.a.createElement("span",{onClick:v},r.a.createElement(g.a,{icon:O.d})),r.a.createElement("span",{onClick:w},r.a.createElement(g.a,{icon:O.a})))))},N=a(53),S=function(e){var t=e.userObj,a=Object(n.useState)(""),c=Object(l.a)(a,2),u=c[0],i=c[1],o=Object(n.useState)(""),s=Object(l.a)(o,2),f=s[0],d=s[1],b=function(){var e=Object(p.a)(m.a.mark((function e(a){var n,r,c,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==u){e.next=2;break}return e.abrupt("return");case 2:if(a.preventDefault(),n="",""==f){e.next=12;break}return r=h.ref().child("".concat(t.uid,"/").concat(Object(N.a)())),e.next=8,r.putString(f,"data_url");case 8:return c=e.sent,e.next=11,c.ref.getDownloadURL();case 11:n=e.sent;case 12:return l={text:u,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:n},e.next=15,E.collection("nweets").add(l);case 15:i(""),d("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:b,className:"factoryForm"},r.a.createElement("div",{className:"factoryInput__container"},r.a.createElement("input",{className:"factoryInput__input",value:u,onChange:function(e){var t=e.target.value;i(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),r.a.createElement("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})),r.a.createElement("label",{for:"attach-file",className:"factoryInput__label"},r.a.createElement("span",null,"Add photos"),r.a.createElement(g.a,{icon:O.b})),r.a.createElement("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;d(t)},a.readAsDataURL(t)},style:{opacity:0}}),r.a.createElement("input",{type:"submit",value:"Nweet"}),f&&r.a.createElement("div",{className:"factoryForm__attachment"},r.a.createElement("img",{src:f,style:{backgroundImage:f}}),r.a.createElement("div",{className:"factoryForm__clear",onClick:function(){return d("")}},r.a.createElement("span",null,"Remove"),r.a.createElement(g.a,{icon:O.c}))))},k=function(e){var t=e.userObj,a=Object(n.useState)([]),c=Object(l.a)(a,2),u=c[0],i=c[1];return Object(n.useEffect)((function(){E.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(j.a)({id:e.id},e.data())}));i(t)}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(S,{userObj:t}),r.a.createElement("div",{style:{marginTop:30}},u.map((function(e){return r.a.createElement(x,{key:e.id,nweetObj:e,isOwner:e.creatorId===t.uid})}))))},I=function(e){var t=e.refreshUser,a=e.userObj,c=Object(o.f)(),u=Object(n.useState)(a.displayName),i=Object(l.a)(u,2),s=i[0],f=i[1],b=function(){var e=Object(p.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a.displayName===s){e.next=5;break}return e.next=4,a.updateProfile({displayName:s});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.collection("nweets").where("creatorId","==",a.uid).orderBy("createdAt").get();case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){h()}),[]),r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:b,className:"profileForm"},r.a.createElement("input",{onChange:function(e){var t=e.target.value;f(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:null!==s?s:"No name",className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})),r.a.createElement("span",{className:"formBtn cancelBtn logOut",onClick:function(){d.signOut(),c.push("/")}},"Log Out"))},A=function(e){var t=e.userObj;return r.a.createElement("nav",null,r.a.createElement("ul",{style:{display:"flex",justifyContent:"center",marginTop:50}},r.a.createElement("li",null,r.a.createElement(i.b,{to:"/",style:{marginRight:10}},r.a.createElement(g.a,{icon:w.b,color:"#04AAFF",size:"2x"}))),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12}},r.a.createElement(g.a,{icon:O.e,color:"#04AAFF",size:"2x"}),r.a.createElement("span",{style:{marginTop:10}},null!==t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile")))))},C=function(e){var t=e.refreshUser,a=e.isLoggedIn,n=e.userObj;return r.a.createElement(i.a,null,a&&r.a.createElement(A,{userObj:n}),r.a.createElement(o.c,null,a?r.a.createElement("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"}},r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(k,{userObj:n})),r.a.createElement(o.a,{exact:!0,path:"/profile"},r.a.createElement(I,{userObj:n,refreshUser:t}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(y,null)))))};var F=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)(!1),i=Object(l.a)(u,2),o=i[0],s=i[1],m=Object(n.useState)(null),p=Object(l.a)(m,2),f=p[0],b=p[1];return Object(n.useEffect)((function(){d.onAuthStateChanged((function(e){e?(s(!0),b({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})):s(!1),c(!0)}))}),[]),r.a.createElement(r.a.Fragment,null,a?r.a.createElement(C,{refreshUser:function(){var e=d.currentUser;b({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:o,userObj:f}):"Initializing...",r.a.createElement("footer",null,"\xa9 ",(new Date).getFullYear()," Nwitter"))};a(49);u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.749570cf.chunk.js.map