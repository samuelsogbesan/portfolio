(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/github.0c0d0a7b.svg"},,,,,,function(e,t,n){e.exports=n.p+"static/media/profile-image.c62395ee.gif"},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){e.exports=n.p+"static/media/home-icon.7175b699.svg"},function(e,t,n){e.exports=n.p+"static/media/rocket.9bda81de.svg"},function(e,t,n){e.exports=n.p+"static/media/cv.d2aee083.svg"},,,function(e,t,n){e.exports=n.p+"static/media/email.deda33ae.svg"},function(e,t,n){e.exports=n.p+"static/media/linkedin.14f7b675.svg"},function(e,t,n){e.exports=n.p+"static/media/cv.b98587ef.pdf"},,function(e,t,n){e.exports=n(50)},,,,,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(23),c=n.n(i),s=(n(38),n(32)),o=n(14),l=n(5),u=n(10),m=n(1),p=n(2),d=n(4),f=n(3),h=n(24),v=n.n(h),b=n(25),j=n.n(b),g=n(26),E=n.n(g),O=(n(20),function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"brand"},r.a.createElement("span",{className:"brand-title"},"Samuel Sogbesan"),r.a.createElement("p",{className:"brand-subtitle"},r.a.createElement("span",{className:"s1"},"Computer Science Student")," & ",r.a.createElement("span",{className:"s2"},"Software Engineer")))}}]),n}(r.a.Component)),k=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=500*this.props.index*4;return r.a.createElement("li",{style:{animation:"fadein Xms ease".replace("X",e)}},r.a.createElement(o.b,{exact:!0,className:"menu-item",activeClassName:"active",to:this.props.href},r.a.createElement("img",{src:this.props.src,className:"image",alt:this.props.alt}),r.a.createElement("span",{className:"title"},this.props.alt)))}}]),n}(r.a.Component),y=function(e){return r.a.createElement("ul",{className:e.className}," ",e.options.map((function(e){return r.a.createElement(k,Object.assign({key:e.index},e))})))},N=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={inFocus:!1},a.animate=a.animate.bind(Object(u.a)(a)),a}return Object(p.a)(n,[{key:"animate",value:function(){this.setState({inFocus:!0})}},{key:"render",value:function(){var e="menu"+(!0===this.props.animate?" sliding":""),t=[{index:0,alt:"Home",src:v.a,href:"/"},{index:1,alt:"Projects",src:j.a,href:"/projects"},{index:2,alt:"CV",src:E.a,href:"/cv"}];return r.a.createElement("nav",{className:e},r.a.createElement(O,null),y({className:"menu-list",options:t}))}}]),n}(r.a.Component),x=(n(44),n(45),n(12)),C=n.n(x),w=n(18),S=n.n(w),I=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props.image;return r.a.createElement("img",{src:e.src,alt:e.alt,className:"project-image"})}}]),n}(r.a.Component),M=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props.project;return console.log(e),r.a.createElement("div",{className:"project-info"},r.a.createElement("span",{className:"name"},e.name),r.a.createElement("p",{className:"description"},e.description),r.a.createElement("a",{className:"link",target:"_blank",rel:"noopener noreferrer",href:e.link},r.a.createElement("img",{src:C.a,alt:"View Repository Here"})))}}]),n}(r.a.Component),F=function(e){return r.a.createElement("input",{type:"button",className:"controller",value:e.icon,onMouseUp:e.onClick,disabled:e.isDisabled})},D=(r.a.Component,n(22),function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={ready:!1},a.props.setAnimate(!0),a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.props.setAnimate(!1),e.setState({ready:!0})}),450)}},{key:"render",value:function(){return r.a.createElement("div",null,"test")}}]),n}(r.a.Component)),P=(n(46),function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).updateCount=a.updateCount.bind(Object(u.a)(a)),a.state={count:0,interval:setInterval(a.updateCount,1e3)},a}return Object(p.a)(n,[{key:"updateCount",value:function(){this.setState({count:this.state.count<2?this.state.count+1:0}),console.log("count:"+this.state.count)}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.interval),this.setState({interval:null})}},{key:"render",value:function(){var e=".".repeat(this.state.count);return r.a.createElement("div",{className:"loading-indicator"},"Loading",e)}}]),n}(r.a.Component)),B=n(28),X=n.n(B),R=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={inFocus:!1},a}return Object(p.a)(n,[{key:"render",value:function(){var e,t=this,n="grid-element "+this.props.type,a=500*this.props.index*4;return e=!1===this.state.inFocus?r.a.createElement("div",{className:"info-container"},r.a.createElement("div",{className:"name"},this.props.name)):r.a.createElement("div",{className:"info-container"},r.a.createElement("div",{className:"name"},this.props.name),r.a.createElement("div",{className:"description"},this.props.description),r.a.createElement("a",{href:this.props.url},r.a.createElement("img",{src:C.a,className:"giticon",alt:"Visit GitHub"}))),r.a.createElement("div",{className:"grid-element-container"},r.a.createElement("div",{className:n,style:{animation:"fadein Xms ease".replace("X",a),backgroundImage:"url(X)".replace("X",""),backgroundColor:this.props.colour},onClick:function(){return t.props.onClick.call(t,t.props.index)},onMouseEnter:function(){return t.setState({inFocus:!0})},onMouseLeave:function(){return t.setState({inFocus:!1})}},e))}}]),n}(r.a.Component),T=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={activeProjectIndex:-1,projects:[],ready:!1},a.setProject=a.setProject.bind(Object(u.a)(a)),a.scroll=a.scroll.bind(Object(u.a)(a)),a}return Object(p.a)(n,[{key:"rand",value:function(e){return Math.round(Math.random()*(e.length-1))}},{key:"componentDidMount",value:function(){var e=this;X()("https://api.github.com/users/samuelsogbesan/repos").then((function(e){return e.json()})).then((function(e){return function(e){return e.filter((function(e){return!0!==e.fork})).map((function(e){var t=e.name,n=e.description,a=e.url,r=e.created_at,i={name:t,description:n};return i.link=a,i.startDate=r,i}))}(e)})).then((function(t){for(var n=["#b143e0","#441151","#613dc1","#6247aa","#858ae3","95f9e3","#69ebd0","#49d49d","#558564"],a=0;a<t.length;a++)t[a].colour=n.splice(e.rand,1)[0];e.setState({projects:t})})).then((function(){return setTimeout((function(){e.setState({ready:!0}),document.getElementById("grid-container").scrollTo(0,0),e.props.setAnimate(!1)}),450)})).catch((function(e){console.log(e)}))}},{key:"setProject",value:function(e){this.setState({activeProjectIndex:e})}},{key:"scroll",value:function(e){document.getElementById("grid-container").scrollBy(240*e,0)}},{key:"render",value:function(){if(!0!==this.state.ready)return r.a.createElement(P,null);for(var e=[],t=0;t<this.state.projects.length;t++)e.push(r.a.createElement(R,Object.assign({},this.state.projects[t],{key:t,index:t,onClick:this.setProject})));return r.a.createElement("div",{style:{animation:"fadein 500ms ease",flex:"0.7",display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement(F,{icon:"<",onClick:this.scroll.bind(this,-1)}),r.a.createElement("div",{className:"grid-container",id:"grid-container"},e),r.a.createElement(F,{icon:">",onClick:this.scroll.bind(this,1)}))}}]),n}(D),_=n(29),A=n.n(_),H=n(30),V=n.n(H),L=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=[{index:0,alt:"ss3222@bath.ac.uk",src:A.a,href:"/email"},{index:1,alt:"Linkedin",src:V.a,href:"/linkedin"},{index:2,alt:"GitHub",src:C.a,href:"/github"}];return y({className:"menu-list socials-menu",options:e})}}]),n}(r.a.Component),W=(n(47),n(48),function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={hidden:!1},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){return e.setState({hidden:!0})}),3e3)}},{key:"render",value:function(){var e="toast"+(!0===this.state.hidden?" hidden":"");return r.a.createElement("div",{className:e},this.props.message)}}]),n}(r.a.Component)),G=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={message:"",isFinished:!1},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.steps,t=0,n=setInterval(function(){this.setState({message:e[t].message}),e[t].action(),++t>=e.length&&clearInterval(n)}.bind(this),this.props.interval);this.setState({isFinished:!0})}},{key:"render",value:function(){var e="redirecter"+(!0===this.state.isFinished?" complete":"");return r.a.createElement("span",{className:e},r.a.createElement(W,{message:this.state.message}))}}]),n}(a.Component);function J(e){return navigator.clipboard.writeText("ss3222@bath.ac.uk"),r.a.createElement(W,{message:"copied email to clipboard!"})}n(49);var U=n(31),$=n.n(U),q=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){document.getElementById("cv-download").click()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(W,{message:"Opened CV in new window!"}),r.a.createElement("a",{style:{position:"absolute",display:"none"},target:"blank_",id:"cv-download",href:$.a},"."))}}]),n}(r.a.Component);var z=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],i=t[1];return r.a.createElement(o.a,{basename:"/"},r.a.createElement(N,{animate:n}),r.a.createElement(L,null),r.a.createElement(l.a,{exact:!0,path:"/",render:function(e){return i(!0),r.a.createElement("div",{style:{display:"none"}})}}),r.a.createElement(l.a,{path:"/projects",render:function(e){return r.a.createElement(T,{setAnimate:i})}}),r.a.createElement(l.a,{exact:!0,path:"/cv",component:q}),r.a.createElement(l.a,{exact:!0,path:"/email",component:J}),r.a.createElement(l.a,{exact:!0,path:"/linkedin",render:function(e){return r.a.createElement(G,{interval:500,steps:[{action:function(){return window.open("https://www.linkedin.com/in/samuel-sogbesan/","_blank")},message:"Redirecting to linkedin..."},{action:function(){return e.history.push("/")},message:"Redirecting"}]})}}),r.a.createElement(l.a,{exact:!0,path:"/github",render:function(e){return r.a.createElement(G,{interval:500,steps:[{action:function(){return window.open("https://www.github.com/samuelsogbesan/","_blank")},message:"Redirecting to linkedin..."},{action:function(){return e.history.push("/")},message:"Redirecting"}]})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[33,1,2]]]);
//# sourceMappingURL=main.ca88a529.chunk.js.map