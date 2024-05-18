import{a as _,S as B,i as d}from"./assets/vendor-eded45c0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const R="43830047-c5fe5a5c9108224ed65675c7e",H="https://pixabay.com/api/",f=15;_.defaults.baseURL=H;const L=async(e,t=1)=>(await _.get("",{params:{key:R,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:f,page:t}})).data,b=e=>e.reduce((t,{tags:o,webformatURL:a,largeImageURL:r,likes:s,views:n,comments:M,downloads:q})=>t+`
			<li class="gallery__item item-gallery">
				<a class="item-gallery__link" href="${r}">
					<img class="item-gallery__img" src="${a}" alt="${o}">
				</a>
				<ul class="item-gallery__data">
					<li class="item-gallery__data-item">
						<h2 class="item-gallery__subtitle">Likes</h2>
						<p class="item-gallery__counter">${s}</p>
					</li>
					<li class="item-gallery__data-item">
						<h2 class="item-gallery__subtitle">Views</h2>
						<p class="item-gallery__counter">${n}</p>
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
		`,""),m=e=>{e.classList.add("is-hidden")},S=e=>{e.classList.remove("is-hidden")},P=e=>{e.classList.remove("is-hidden")},v=e=>{e.classList.add("is-hidden")},j=e=>{e.classList.add("is-disabled")},u=e=>{e.classList.remove("is-disabled")},p=document.querySelector(".js-gallery"),O=document.querySelector(".js-search-form"),c=document.querySelector(".js-search-form-submit-btn"),i=document.querySelector(".js-loader"),l=document.querySelector(".js-load-more-btn");let g="",h=1,y=0;const w=new B(".item-gallery__link",{captionsData:"alt",captionsDelay:250}),$=async e=>{e.preventDefault(),p.innerHTML="",h=1,v(l);const t=e.currentTarget;if(g=t.elements.searchword.value.trim(),g===""){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),t.reset();return}try{j(c),S(i);const{hits:o,totalHits:a}=await L(g,h);if(a===0){u(c),d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),t.reset(),m(i);return}p.insertAdjacentHTML("beforeend",b(o)),w.refresh(),m(i),u(c),y=Math.ceil(a/f),y>1&&P(l)}catch{u(c),m(i),d.error({message:"Search params is not valid!",position:"topRight"}),t.reset();return}t.reset()};O.addEventListener("submit",$);const A=()=>{const o=document.querySelector(".gallery__item").getBoundingClientRect().height*2;window.scrollBy({top:o,left:0,behavior:"smooth"})},E=async e=>{try{v(l),S(i),h+=1;const{hits:t,totalHits:o}=await L(g,h);if(p.insertAdjacentHTML("beforeend",b(t)),w.refresh(),A(),m(i),y=Math.ceil(o/f),h<y)P(l);else{l.removeEventListener("click",E),d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}}catch{u(c),m(i),d.error({message:"Search params is not valid!",position:"topRight"}),form.reset();return}};l.addEventListener("click",E);
//# sourceMappingURL=commonHelpers.js.map
