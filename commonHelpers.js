import{a as p,S as B,i as l}from"./assets/vendor-eded45c0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const R="43830047-c5fe5a5c9108224ed65675c7e",H="https://pixabay.com/api/",y=15;p.defaults.baseURL=H;const f=async(o,e=1)=>(await p.get("",{params:{key:R,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:y,page:e}})).data,_=o=>o.reduce((e,{tags:s,webformatURL:a,largeImageURL:t,likes:r,views:i,comments:M,downloads:q})=>e+`
			<li class="gallery__item item-gallery">
				<a class="item-gallery__link" href="${t}">
					<img class="item-gallery__img" src="${a}" alt="${s}">
				</a>
				<ul class="item-gallery__data">
					<li class="item-gallery__data-item">
						<h2 class="item-gallery__subtitle">Likes</h2>
						<p class="item-gallery__counter">${r}</p>
					</li>
					<li class="item-gallery__data-item">
						<h2 class="item-gallery__subtitle">Views</h2>
						<p class="item-gallery__counter">${i}</p>
					</li>
					<li class="item-gallery__data-item">
						<h2 class="item-gallery__subtitle">Comments</h2>
						<p class="item-gallery__counter">${M}</p>
					</li>
					<li class="item-gallery__data-item">
						<h2 class="item-gallery__subtitle">Downloads</h2>
						<p class="item-gallery__counter">${q}</p>
					</li>
				</ul>
			</li>
		`,""),h=document.querySelector(".js-gallery"),j=document.querySelector(".js-search-form"),L=document.querySelector(".js-search-form-submit-btn"),b=document.querySelector(".js-loader"),u=document.querySelector(".js-load-more-btn");let c="",n=1,m=0;const S=new B(".item-gallery__link",{captionsData:"alt",captionsDelay:250}),O=async o=>{o.preventDefault(),h.innerHTML="",n=1,E();const e=o.currentTarget;if(c=e.elements.searchword.value.trim(),c===""){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),e.reset();return}try{A(),v();const{hits:s,totalHits:a}=await f(c,n);if(a===0){d(),l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),e.reset(),g();return}h.insertAdjacentHTML("beforeend",_(s)),S.refresh(),g(),d(),m=Math.ceil(a/y),m>1&&w()}catch{d(),hideLoader(),l.error({message:"Search params is not valid!",position:"topRight"}),e.reset();return}e.reset()};j.addEventListener("submit",O);const $=()=>{const s=document.querySelector(".gallery__item").getBoundingClientRect().height*2;window.scrollBy({top:s,left:0,behavior:"smooth"})},P=async o=>{try{E(),v(),n+=1;const{hits:e,totalHits:s}=await f(c,n);if(h.insertAdjacentHTML("beforeend",_(e)),S.refresh(),$(),g(),m=Math.ceil(s/y),n<m)w();else{u.removeEventListener("click",P),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}}catch{d(),hideLoader(),l.error({message:"Search params is not valid!",position:"topRight"}),form.reset();return}};u.addEventListener("click",P);function g(){b.classList.add("is-hidden")}function v(){b.classList.remove("is-hidden")}function w(){u.classList.remove("is-hidden")}function E(){u.classList.add("is-hidden")}function A(){L.classList.add("is-disabled")}function d(){L.classList.remove("is-disabled")}
//# sourceMappingURL=commonHelpers.js.map
