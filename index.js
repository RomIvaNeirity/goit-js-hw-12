import{a as m,S as f,i as l}from"./assets/vendor-jlerdHUr.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function y(a){return(await m({method:"get",url:"https://pixabay.com/api/",params:{key:"28573378-d6ea96aa58230c7b9cb77205d",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const u=document.querySelector(".gallery");function g(a){let t="";a.map(s=>{t=t+`<li class="gallery-item">
  <a class="gallery-link" href="${s.largeImageURL}">
    <img
      class="gallery-image"
      src="${s.webformatURL}"
      alt="${s.tags}"
      data-user="Uploaded by user: ${s.user}"
    />
  </a>
  <ul class="image-attribute-list">
  <li class="image-attribute-list-item">
  <p>Likes</p>
  <p>${s.likes}</p>
  </li>
  <li class="image-attribute-list-item">
  <p>Views</p>
  <p>${s.views}</p>
  </li>
  <li class="image-attribute-list-item">
  <p>Comments</p>
  <p>${s.comments}</p>
  </li>
  <li class="image-attribute-list-item">
  <p>Downloads</p>
  <p>${s.downloads}</p>
  </li>
  </ul> 
</li>`}).join(""),u.insertAdjacentHTML("beforeend",t),h.refresh()}const h=new f(".gallery-link",{captions:!0,captionsData:"data-user",captionDelay:250});function b(){u.innerHTML=""}const p=document.querySelector("span");function L(){p.style.display="block"}function n(){p.style.display="none"}n();let o;const d=document.querySelector("form");d.addEventListener("submit",w);async function w(a){if(a.preventDefault(),b(),o=a.target.elements["search-text"].value.trim(),o.trim()===""){l.show({message:"Please, type some text"}),d.reset();return}L();const t=await y(o);try{if(!t.hits.length){n(),l.show({message:"Sorry, there are no images matching your search query. Please try again!"});return}n(),g(t.hits)}catch{}finally{}}l.settings({position:"center",backgroundColor:"magenta",messageSize:"20",timeout:3e3});
//# sourceMappingURL=index.js.map
