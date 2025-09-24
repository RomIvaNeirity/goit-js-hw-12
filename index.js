import{a as m,S as f,i}from"./assets/vendor-jlerdHUr.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();async function y(r){return(await m({method:"get",url:"https://pixabay.com/api/",params:{key:"28573378-d6ea96aa58230c7b9cb77205d",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const p=document.querySelector(".gallery");function g(r){let e="";r.map(a=>{e=e+`<li class="gallery-item">
  <a class="gallery-link" href="${a.largeImageURL}">
    <img
      class="gallery-image"
      src="${a.webformatURL}"
      alt="${a.tags}"
      data-user="Uploaded by user: ${a.user}"
    />
  </a>
  <ul class="image-attribute-list">
  <li class="image-attribute-list-item">
  <p>Likes</p>
  <p>${a.likes}</p>
  </li>
  <li class="image-attribute-list-item">
  <p>Views</p>
  <p>${a.views}</p>
  </li>
  <li class="image-attribute-list-item">
  <p>Comments</p>
  <p>${a.comments}</p>
  </li>
  <li class="image-attribute-list-item">
  <p>Downloads</p>
  <p>${a.downloads}</p>
  </li>
  </ul> 
</li>`}).join(""),p.insertAdjacentHTML("beforeend",e),h.refresh()}const h=new f(".gallery-link",{captions:!0,captionsData:"data-user",captionDelay:250});function b(){p.innerHTML=""}const d=document.querySelector("span");function L(){d.style.display="block"}function o(){d.style.display="none"}o();let n;const c=document.querySelector("form");c.addEventListener("submit",w);async function w(r){if(r.preventDefault(),b(),n=r.target.elements["search-text"].value.trim(),n.trim()===""){i.show({message:"Please, type some text"}),c.reset();return}L();try{const e=await y(n);if(!e.hits.length){o(),i.show({message:"Sorry, there are no images matching your search query. Please try again!"});return}g(e.hits),o()}catch(e){S(e)}finally{o(),c.reset()}}function S(r){let e="";r.response?e=`Server error: ${r.response.status}`:r.request?e="No response from server. Please try again later.":e=`Request error: ${r.message}`,console.error("Axios error:",r),i.show({message:e,backgroundColor:"red"})}i.settings({position:"center",backgroundColor:"magenta",messageSize:"20",timeout:3e3});
//# sourceMappingURL=index.js.map
