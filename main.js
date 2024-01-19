(()=>{"use strict";var t={890:(t,e,n)=>{n.d(e,{Z:()=>c});var o=n(81),r=n.n(o),a=n(645),i=n.n(a)()(r());i.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Agbalumo&display=swap);"]),i.push([t.id,':root {\n\t--blue-400: #60a5fa;\n\t--blue-700: #1d4ed8;\n\t--rounded-corners: 10px;\n\t--gray-300: #d1d5db;\n\t--card-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n\t--button-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,\n\t\trgba(90, 125, 188, 0.05) 0px 0.25em 1em;\n}\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\nbody {\n\tfont-family: "Agbalumo";\n\tbackground-color: var(--gray-300);\n}\n\n.container {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tflex-direction: column;\n\tpadding: 30px;\n\tgap: 30px;\n}\n\nheader {\n\talign-items: center;\n\tbackground-color: var(--blue-400);\n\tcolor: white;\n\tfont-size: 1.7rem;\n\tpadding: 30px;\n}\n\n.card {\n\tdisplay: flex;\n\tflex-direction: column;\n\tborder-radius: var(--rounded-corners);\n\tgap: 15px;\n\tbox-shadow: var(--card-shadow);\n\twidth: 50vw;\n}\n\nmain {\n\tbackground-color: white;\n\tcolor: black;\n\tfont-size: 1.5rem;\n\tpadding: 45px;\n}\n\n.topheader {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tgap: 15px;\n}\n\nul {\n\tlist-style-type: none;\n}\n\nli {\n\tdisplay: flex;\n\tborder-bottom: 1px dotted black;\n\tpadding: 15px 0px;\n\tflex-direction: column;\n}\n\nbutton {\n\tpadding: 15px 30px;\n\tborder: none;\n\tborder-radius: var(--rounded-corners);\n\tbackground-color: var(--blue-400);\n\tcolor: white;\n\tfont-weight: bold;\n\tbox-shadow: var(--button-shadow);\n\tfont-size: 1rem;\n\tcursor: pointer;\n}\n\nbutton:hover {\n\tbackground-image: linear-gradient(rgb(0 0 0/20%) 0 0);\n}\n\n.toptask {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tgap: 30px;\n\talign-items: center;\n}\n\n.toptask h3,\nli p {\n\toverflow: auto;\n}\n',""]);const c=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<t.length;d++){var p=[].concat(t[d]);o&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],d=o.base?s[0]+o.base:s[0],p=a[d]||0,l="".concat(d," ").concat(p);a[d]=p+1;var u=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var a=o(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var s=o(t,r),d=0;d<a.length;d++){var p=n(a[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=s}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return t[o](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{function t(t){const e=document.createElement("main");e.classList.add("card");const n=document.createElement("div");n.classList.add("topheader");const o=document.createElement("h2");o.textContent="Your Tasks";const r=document.createElement("button");r.setAttribute("id","addtask"),r.textContent="+",n.appendChild(o),n.appendChild(r),e.appendChild(n);const a=document.createElement("hr");e.appendChild(a);const i=document.createElement("ul");return t.getTodos().forEach((t=>{const e=document.createElement("li"),n=document.createElement("div");n.classList.add("toptask");const o=document.createElement("h3");o.textContent=`${t.title} - Due: ${t.dueDate} - Priority: ${t.priority}`,n.appendChild(o);const r=document.createElement("button");r.classList.add("expand"),r.textContent="▼",r.addEventListener("click",(()=>{const n=document.createElement("p");n.classList.add("todo-description"),n.textContent=`Description: ${t.description}\t`;const o=e.querySelector(".todo-description");o?e.removeChild(o):e.appendChild(n)})),n.appendChild(r),e.appendChild(n),i.appendChild(e)})),e.appendChild(i),e}class e{constructor(t){this.name=t,this.tasks=[]}addTodo(t){this.tasks.push(t)}getTodos(){return this.tasks}}class o{constructor(t,e,n="No due date",o="Low"){this.title=t,this.description=e,this.dueDate=n,this.priority=o,this.completed=!1}}var r=n(379),a=n.n(r),i=n(795),c=n.n(i),s=n(569),d=n.n(s),p=n(565),l=n.n(p),u=n(216),m=n.n(u),f=n(589),h=n.n(f),v=n(890),g={};g.styleTagTransform=h(),g.setAttributes=l(),g.insert=d().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=m(),a()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals,function(n){const r=JSON.parse(localStorage.getItem("projects"))||[],a=localStorage.getItem("currentProjectIndex")||0;let i,c=[];r.forEach((t=>{const n=new e(t.name);n.tasks=t.tasks,c.push(n)})),0===c.length?(i=new e("Default Project"),c.push(i)):i=c[a],n.appendChild(function(t){const e=document.createElement("header");e.classList.add("card");const n=document.createElement("h1");n.textContent="To-Do List",e.appendChild(n);const o=document.createElement("h4");return o.textContent=`${t.name}`,e.appendChild(o),e}(i)),n.appendChild(t(i)),document.getElementById("addtask").addEventListener("click",(()=>{const e=prompt("Enter todo title:");if(e){const n=prompt("Enter todo description:"),r=prompt("Enter due date (optional):"),s=prompt("Enter priority (Low/Medium/High):"),d=new o(e,n,r,s);i.addTodo(d),t(i),function(t,e){localStorage.setItem("projects",JSON.stringify(t)),localStorage.setItem("currentProjectIndex",e)}(c,a)}}))}(document.querySelector(".container"))})()})();