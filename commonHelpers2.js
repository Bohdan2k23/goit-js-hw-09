import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const l=document.querySelector(".feedback-form"),t=l.elements.email,a=l.elements.message,o="feedback-form-state",m=localStorage.getItem(o);if(m){const e=JSON.parse(m);t.value=e.email,a.value=e.message}function r(e){!t.value.trim()&&!a.value.trim()||localStorage.setItem(o,JSON.stringify({email:t.value.trim(),message:a.value.trim()}))}function n(e){if(e.preventDefault(),!t.value.trim()||!a.value.trim()){alert("Будь ласка, заповніть усі поля перед відправленням форми.");return}console.log(JSON.parse(localStorage.getItem(o))),localStorage.removeItem(o),t.value="",a.value=""}l.addEventListener("input",r);l.addEventListener("submit",n);
//# sourceMappingURL=commonHelpers2.js.map