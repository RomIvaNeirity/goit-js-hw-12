import{a as L,S as w,i}from"./assets/vendor-jlerdHUr.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();async function m(t,e=1){return(await L({method:"get",url:"https://pixabay.com/api/",params:{key:"28573378-d6ea96aa58230c7b9cb77205d",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e}})).data}const p=document.querySelector(".gallery");function y(t){let e="";t.map(s=>{e=e+`<li class="gallery-item">
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
</li>`}).join(""),p.insertAdjacentHTML("beforeend",e),v.refresh()}const v=new w(".gallery-link",{captions:!0,captionsData:"data-user",captionDelay:250});function S(){p.innerHTML=""}const h=document.querySelector(".loader");function f(){h.style.display="block"}function g(){h.style.display="none"}let c,l=1;const u=document.querySelector("form");u.addEventListener("submit",q);const a=document.querySelector(".load-more-button");a.addEventListener("click",$);async function q(t){if(t.preventDefault(),l=1,S(),a.classList.add("load-more-button-hidden"),i.destroy(),c=t.target.elements["search-text"].value.trim(),c.trim()===""){i.show({message:"Please, type some text"}),u.reset();return}f();try{const e=await m(c,l);if(!e.hits.length){i.show({message:"Sorry, there are no images matching your search query. Please try again!"}),a.classList.add("load-more-button-hidden");return}y(e.hits);const s=Math.ceil(e.totalHits/15);l>=s?(a.classList.add("load-more-button-hidden"),i.show({timeout:0,position:"bottomCenter",message:"We're sorry, but you've reached the end of search results."})):a.classList.remove("load-more-button-hidden")}catch(e){b(e)}finally{u.reset(),g()}}async function $(){l+=1,f();try{const t=await m(c,l);y(t.hits),a.classList.add("load-more-button-hidden");const s=document.querySelector("li").getBoundingClientRect();window.scrollBy({top:s.height*2,behavior:"smooth"});const n=Math.ceil(t.totalHits/15);l>=n?(a.classList.add("load-more-button-hidden"),i.show({timeout:0,position:"bottomCenter",message:"We're sorry, but you've reached the end of search results."})):a.classList.remove("load-more-button-hidden")}catch(t){b(t)}finally{g()}}function b(t){let e="";t.response?e=`Server error: ${t.response.status}`:t.request?e="No response from server. Please try again later.":e=`Request error: ${t.message}`,console.error("Axios error:",t),i.show({message:e,backgroundColor:"red"})}i.settings({position:"center",backgroundColor:"magenta",messageSize:"20",timeout:3e3});
//# sourceMappingURL=index.js.map
