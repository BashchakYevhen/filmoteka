const e=async e=>{try{const t=await fetch(`\n        https://api.themoviedb.org/3/search/movie?api_key=ff98b74c6ada2972698b8eff6707845a&language=en-US&page=1&include_adult=false&query=${e}\n            `);return await t.json()}catch(e){throw Error(response.statusText)}};let t;(async()=>{try{const e=await fetch("\n            https://api.themoviedb.org/3/genre/movie/list?api_key=ff98b74c6ada2972698b8eff6707845a&language=en-US\n        ");return await e.json()}catch(e){throw Error(response.statusText)}})().then((e=>{localStorage.setItem("genres",JSON.stringify(e.genres));const n=localStorage.getItem("genres");t=JSON.parse(n)}));const n=e=>e.map((({poster_path:e,title:n,name:a,release_date:r,first_air_date:o,genre_ids:s,vote_average:i})=>{let c,l=t.filter((({id:e})=>s.includes(e))).map((({name:e})=>e));return c=l.length<=2?l.join(", "):l.slice(0,2).join(", ")+" Other",`\n                <li>\n                    <a>\n                        <img src='https://image.tmdb.org/t/p/w500${e}' alt='${n||a}' loading="lazy"/>\n                        <p>${n||a}</p>\n                        <div>\n                            <p>${c}</p>\n                            <p>${(r||o).slice(0,4)}</p>\n                            <span>${i}</span>\n                        </div>\n                    </a>\n                </li>\n            `})).join(""),a={gallery:document.querySelector(".gallery"),form:document.querySelector(".navigation__form")};(async()=>{try{return(await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=ff98b74c6ada2972698b8eff6707845a")).json()}catch(e){throw Error(response.statusText)}})().then((e=>{a.gallery.innerHTML=n(e.results)})),a.form.addEventListener("submit",(t=>{t.preventDefault();const r=t.target.elements.navigation__input.value.trim();e(r).then((e=>{a.gallery.innerHTML=n(e.results)}))}));const r=document.getElementById("modalTeam"),o=document.querySelector(".modal-team");r.addEventListener("click",(function(e){e.preventDefault(),o.classList.toggle("visually-hidden"),o.addEventListener("keydown")}));const s={openModalBtn:document.querySelector(".modal-open"),closeModalBtn:document.querySelector(".modal-close"),backdrop:document.querySelector(".js-backdrop")};function i(){window.removeEventListener("keydown",c),s.backdrop.classList.remove("show-modal")}function c(e){"Escape"===e.code&&i()}s.openModalBtn.addEventListener("click",(function(){window.addEventListener("keydown",c),s.backdrop.classList.add("show-modal")})),s.closeModalBtn.addEventListener("click",i),s.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&i()}));
//# sourceMappingURL=index-lib.d2649965.js.map