(()=>{"use strict";var t={890:(t,e,n)=>{n.d(e,{Z:()=>i});var o=n(81),r=n.n(o),a=n(645),c=n.n(a)()(r());c.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Agbalumo&display=swap);"]),c.push([t.id,':root {\n\t--blue-400: #60a5fa;\n\t--blue-700: #1d4ed8;\n\t--rounded-corners: 10px;\n\t--gray-300: #d1d5db;\n\t--card-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n\t--button-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,\n\t\trgba(90, 125, 188, 0.05) 0px 0.25em 1em;\n}\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\nbody {\n\tfont-family: "Agbalumo";\n\tbackground-color: var(--gray-300);\n\tpadding: 30px;\n}\n\n.container {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tflex-direction: column;\n\tgap: 30px;\n}\n\nheader {\n\talign-items: center;\n\tbackground-color: var(--blue-400);\n\tcolor: white;\n\tfont-size: 1.7rem;\n\tpadding: 30px;\n}\n\n.card {\n\tdisplay: flex;\n\tflex-direction: column;\n\tborder-radius: var(--rounded-corners);\n\tgap: 15px;\n\tbox-shadow: var(--card-shadow);\n\tmin-width: 50vw;\n}\n\nmain {\n\tbackground-color: white;\n\tcolor: black;\n\tfont-size: 1.5rem;\n\tpadding: 30px;\n}\n\n.topheader {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tgap: 15px;\n}\n\nul {\n\tlist-style-type: none;\n}\n\nli {\n\tdisplay: flex;\n\tborder-bottom: 1px dotted black;\n\tpadding: 15px 0px;\n\tflex-direction: column;\n}\n\nbutton {\n\tpadding: 15px 30px;\n\tborder: none;\n\tborder-radius: var(--rounded-corners);\n\tbackground-color: var(--blue-400);\n\tcolor: white;\n\tfont-weight: bold;\n\tbox-shadow: var(--button-shadow);\n\tfont-size: 1rem;\n\tcursor: pointer;\n}\n\nbutton:hover {\n\tbackground-image: linear-gradient(rgb(0 0 0/20%) 0 0);\n}\n\n.toptask {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tgap: 30px;\n\talign-items: center;\n}\n\n.toptask h3,\nli p {\n\toverflow: auto;\n}\n\n.checktask {\n\tdisplay: flex;\n\tgap: 10px;\n\talign-items: center;\n}\n\n.task-buttoncontainer {\n\tdisplay: flex;\n\tgap: 10px;\n}\n\n#removetask {\n\tbackground-color: rgb(255, 101, 101);\n\tpadding: 10px 20px;\n}\n',""]);const i=c},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var a={},c=[],i=0;i<t.length;i++){var d=t[i],s=o.base?d[0]+o.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=n(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=r(m,o);o.byIndex=i,e.splice(i,0,{identifier:p,updater:h,references:1})}c.push(p)}return c}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var a=o(t=t||[],r=r||{});return function(t){t=t||[];for(var c=0;c<a.length;c++){var i=n(a[c]);e[i].references--}for(var d=o(t,r),s=0;s<a.length;s++){var l=n(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return t[o](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{function t(t,e){const n=document.createElement("ul");return n.classList.add("tasklist"),t.getTodos().forEach((o=>{const r=document.createElement("li"),a=document.createElement("div");a.classList.add("toptask");const c=document.createElement("div");c.classList.add("checktask");const i=document.createElement("input");i.type="checkbox",i.checked=o.completed,i.addEventListener("click",(()=>{o.completed=i.checked,d.style.textDecoration=o.completed?"line-through":"none",e()})),c.appendChild(i);const d=document.createElement("h3");d.textContent=`${o.title} - Due: ${o.dueDate} - Priority: ${o.priority}`,d.style.textDecoration=o.completed?"line-through":"none",c.appendChild(d),a.appendChild(c);const s=document.createElement("div");s.classList.add("task-buttoncontainer");const l=document.createElement("button");l.classList.add("expand"),l.textContent="▼",l.addEventListener("click",(()=>{const t=document.createElement("p");t.classList.add("todo-description"),t.textContent=`Description: ${o.description}`;const e=r.querySelector(".todo-description");e?r.removeChild(e):r.appendChild(t)})),s.appendChild(l);const p=document.createElement("button");p.setAttribute("id","removetask"),p.textContent="X",p.addEventListener("click",(()=>{const n=t.getTodos().indexOf(o);t.getTodos().splice(n,1),r.remove(),e()})),s.appendChild(p),a.appendChild(s),r.appendChild(a),n.appendChild(r)})),n}class e{constructor(t){this.name=t,this.tasks=[]}addTodo(t){this.tasks.push(t)}getTodos(){return this.tasks}}class o{constructor(t,e,n="No due date",o="Low"){this.title=t,this.description=e,this.dueDate=n,this.priority=o,this.completed=!1}}function r(t,e){localStorage.setItem("projects",JSON.stringify(t)),localStorage.setItem("currentProjectIndex",e)}var a=n(379),c=n.n(a),i=n(795),d=n.n(i),s=n(569),l=n.n(s),p=n(565),u=n.n(p),m=n(216),h=n.n(m),f=n(589),g=n.n(f),v=n(890),x={};x.styleTagTransform=g(),x.setAttributes=u(),x.insert=l().bind(null,"head"),x.domAPI=d(),x.insertStyleElement=h(),c()(v.Z,x),v.Z&&v.Z.locals&&v.Z.locals,function(n){const a=JSON.parse(localStorage.getItem("projects"))||[],c=localStorage.getItem("currentProjectIndex")||0;let i,d=[];a.forEach((t=>{const n=new e(t.name);n.tasks=t.tasks,d.push(n)})),0===d.length?(i=new e("Default Project"),d.push(i)):i=d[c],n.appendChild(function(t){const e=document.createElement("header");e.classList.add("card");const n=document.createElement("h1");n.textContent="To-Do List",e.appendChild(n);const o=document.createElement("h4");return o.textContent=`${t.name}`,e.appendChild(o),e}(i)),n.appendChild(function(e,n){const o=document.createElement("main");o.classList.add("card");const a=document.createElement("div");a.classList.add("topheader");const i=document.createElement("h2");i.textContent="Your Tasks";const s=document.createElement("button");s.setAttribute("id","addtask"),s.textContent="+",a.appendChild(i),a.appendChild(s),o.appendChild(a);const l=document.createElement("hr");return o.appendChild(l),o.appendChild(t(e,(()=>r(d,c)))),o}(i));const s=document.querySelector("main");document.getElementById("addtask").addEventListener("click",(()=>{const e=document.querySelector(".tasklist");e&&e.remove();const n=prompt("Enter todo title:");if(n){const e=prompt("Enter todo description:"),a=prompt("Enter due date (optional):"),l=prompt("Enter priority (Low/Medium/High):"),p=new o(n,e,a,l);i.addTodo(p),s.appendChild(t(i,(()=>r(d,c)))),r(d,c)}}))}(document.querySelector(".container"))})()})();