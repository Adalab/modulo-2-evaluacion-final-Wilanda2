console.log("tamos ready :)");let i=[],s=[];const r=document.querySelector(".js-input-search"),u=document.querySelector(".js-btn-search"),g=document.querySelector(".js-btn-reset"),d=document.querySelector(".js-container-gen"),h=document.querySelector(".js-container-fav");document.querySelector(".js-close-icon");function v(o){fetch(o).then(e=>e.json()).then(e=>{i=e.data,f(),a()})}function f(){let o="";for(const e of i){const t=s.findIndex(l=>l.mal_id===e.mal_id);console.log(e.mal_id),console.log(typeof e.mal_id),t!==-1?o+=`<li class="js-show-selected js-show-selectedfav fav show" id="${e.mal_id}">`:o+=`<li class="js-show-selected js-show-selectedfav show" id="${e.mal_id}">`;let n=`<img src="${e.images.jpg.image_url}" alt="${e.title}">`;n===`<img src="https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png" alt="${e.title}">`&&(n=`<img src="https://placehold.co/250x350" alt="${e.title}">`),o+=n,o+=`<div>
                    <h3>${e.title}</h3>
                </div>
            </li>`}console.log(i),d.innerHTML=o,w()}function p(o){o.preventDefault();const t=`https://api.jikan.moe/v4/anime?q=${r.value}`;v(t)}u.addEventListener("click",p);function a(){let o="";for(const e of s){o+=`<li class="fav js-show-favorite" id="${e.mal_id}">`;let t=`<img src="${e.images.jpg.image_url}" alt="${e.title}">`;t===`<img src="https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png" alt="${e.title}">`&&(t=`<img src="https://placehold.co/250x350" alt="${e.title}">`),o+=t,o+=`<div>
                    <h3 class="fav_title">${e.title}</h3>
                </div>
                <div class="js-close-icon close-icon-container">
                    <i class="fa-regular fa-circle-xmark icon"></i>
                </div>
            </li>`}h.innerHTML=o,I()}function S(o){const e=o.currentTarget.id,t=parseInt(e);document.querySelector(".js-show-selectedfav");const n=i.find(c=>t===c.mal_id);s.findIndex(c=>c.mal_id===t)===-1&&s.push(n),a(),m(),f()}function w(){const o=document.querySelectorAll(".js-show-selected");for(const e of o)e.addEventListener("click",S)}function j(o){const e=o.currentTarget;console.log(o.target),console.log(o.currentTarget);const t=e.parentNode.id;console.log(t),console.log(typeof t);const n=parseInt(t);console.log(n),console.log(typeof n);const l=s.findIndex(c=>c.mal_id===n);console.log(l),console.log(typeof l),n!==-1&&s.splice(l,1),a(),m()}function I(){const o=document.querySelectorAll(".js-close-icon");for(const e of o)e.addEventListener("click",j)}function m(){const o=JSON.stringify(s);localStorage.setItem("favShows",o)}function y(){const o=JSON.parse(localStorage.getItem("favShows"));o!==null&&(s=o,a())}y();function F(){i=[],s=[],d.innerHTML="",h.innerHTML="",r.value="",localStorage.setItem("favShows",JSON.stringify([]))}g.addEventListener("click",F);
//# sourceMappingURL=main.js.map