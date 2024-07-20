import{a as v,i as f,S as E}from"./assets/vendor-b0d10f48.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const P="44822102-6d1d7649cda1a595bd957c97f",I="https://pixabay.com/api/";async function p(t,r,s){const n={key:P,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:r,per_page:s};return(await v.get(I,{params:n})).data}function y(t){f.error({title:"Error",message:t,position:"topRight"})}function h(t){f.info({title:"Info",message:t,position:"topRight"})}function g(t,r=!0){const s=document.querySelector(".gallery");r&&(s.innerHTML="");const n=t.map(e=>`
        <a href="${e.largeImageURL}" class="gallery-item">
            <div class="image-card">
                <img src="${e.webformatURL}" alt="${e.tags}">
                <div class="info">
                    <p>Likes ${e.likes}</p>
                    <p>Views ${e.views}</p>
                    <p>Comments ${e.comments}</p>
                    <p>Downloads ${e.downloads}</p>
                </div>
            </div>
        </a>
    `).join("");s.insertAdjacentHTML("beforeend",n)}const l=document.getElementById("loading"),m=document.querySelector(".gallery"),a=document.getElementById("load-more"),b=document.querySelector(".search-form");let i="",c=1;const d=15,L=new E(".gallery a",{captionsData:"alt",captionDelay:250});b.addEventListener("submit",S);async function S(t){if(t.preventDefault(),i=t.currentTarget.elements.query.value.trim(),!i){y("Please enter something!");return}m.innerHTML="",c=1,l.style.display="block",a.style.display="none";try{const r=await p(i,c,d);r.hits.length===0?h("Sorry, there are no images matching your search query. Please try again!"):(g(r.hits,!0),L.refresh(),r.hits.length===d&&(a.style.display="block"))}catch{y("An error occurred while fetching images. Please try again later.")}finally{l.style.display="none",b.reset()}}a.addEventListener("click",w);async function w(){c+=1,a.style.display="none",l.style.display="block";try{const t=await p(i,c,d);g(t.hits,!1),L.refresh();const{height:r}=m.firstElementChild.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"}),t.hits.length===d?a.style.display="block":(h("We're sorry, but you've reached the end of search results."),a.removeEventListener("click",w))}catch{y("An error occurred while fetching images. Please try again later.")}finally{l.style.display="none"}}
//# sourceMappingURL=commonHelpers.js.map