!function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";var i=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(a,o){function r(t){try{c(i.next(t))}catch(t){o(t)}}function s(t){try{c(i.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,s)}c((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const a=n(2),o=n(3),r=n(4),s=n(5),c=n(6),u=n(7);n(8),n(9),n(10);class l extends HTMLElement{constructor(){super(),this.taxRadio=[".tax-pit .text",".tax-pit19 .text",".tax-cit .text"],this.addSelectedClass=(t,e)=>{t.forEach(t=>{var n;const i=null===(n=this.find(t))||void 0===n?void 0:n.classList;i&&(t===e?i.add("selected"):null==i||i.remove("selected"))})},this.setChangeHandler=(t,e)=>{const n=this.find(t);null==n||n.addEventListener("change",e)},this.setInputHandler=(t,e)=>{const n=this.find(t);null==n||n.addEventListener("input",e)},this.setClickHandler=(t,e)=>{const n=this.find(t);null==n||n.addEventListener("click",e)},this.find=t=>this.shadow.querySelector(t),this.isValid=t=>!!t&&u.isValidNumber(t)&&u.isPositiveNumber(t),this.handleMonthIcomeInput=t=>{t.currentTarget&&this.updateState({monthlyIncome:t.currentTarget.value,annualIncome:t.currentTarget.value&&this.isValid(t.currentTarget.value)?12*t.currentTarget.value:void 0})},this.handleAnnualIncomeInput=t=>{t.currentTarget&&this.updateState({monthlyIncome:t.currentTarget.value&&this.isValid(t.currentTarget.value)?(t.currentTarget.value/12).toFixed(2):void 0,annualIncome:t.currentTarget.value})},this.handleTaxSelection=(t,e)=>{this.showIncorectTaxMessage(!1,e),this.addSelectedClass(this.taxRadio,e),this.updateState({selectedTax:t})},this.showIncorectTaxMessage=(t,e)=>{const n=this.find("section.incorrect-tax"),i=this.find("section.income-input");this.addSelectedClass(this.taxRadio,e),t?(null==n||n.classList.add("visible"),null==i||i.classList.remove("visible")):(null==n||n.classList.remove("visible"),null==i||i.classList.add("visible"))},this.handleCalculation=()=>{if(this.state.selectedTax&&u.isValidNumber(this.state.annualIncome)){const t=this.find(".tax-output"),e=this.state.selectedTax===a.Tax.PIT?r.calculateForPIT(this.state.annualIncome||0):s.calculateForCIT(this.state.annualIncome||0),n=this.formatter.format(e.donationSum),i=this.formatter.format(e.taxDeduction);t.innerHTML=`\n                <p>Od podatku możesz odliczyć darowizny w maksymalnej kwocie: <strong>${n}</strong></p>\n                <p>W ten sposób zapłacisz nawet o <strong>${i}</strong> mniej podatku!</p>\n            `}},this.renderInput=(t,e,...n)=>{const i=this.find(t+" .income-input");if(i){i.value=e?e.toString():"";const a=this.find(t+" .validation");a&&u.applyValidation(a,e,n)}},this.state={},this.shadow=this.attachShadow({mode:"open"}),this.formatter=new c.CurrencyFormatter("PLN","pl-PL")}updateState(t){this.state=Object.assign(Object.assign({},this.state),t),this.render()}connectedCallback(){return i(this,void 0,void 0,(function*(){const t=yield o.getTemplate("./form.html");this.shadow.appendChild(null==t?void 0:t.content.cloneNode(!0)),this.setChangeHandler(".tax-pit .radio-input",o.preventPropagationInvoke(()=>this.handleTaxSelection(a.Tax.PIT,".tax-pit .text"))),this.setChangeHandler(".tax-pit19 .radio-input",o.preventPropagationInvoke(()=>this.showIncorectTaxMessage(!0,".tax-pit19 .text"))),this.setChangeHandler(".tax-cit .radio-input",o.preventPropagationInvoke(()=>this.handleTaxSelection(a.Tax.CIT,".tax-cit .text"))),this.setInputHandler(".month-income .income-input",this.handleMonthIcomeInput),this.setInputHandler(".annual-income .income-input",this.handleAnnualIncomeInput),this.setClickHandler("#calculate-donation-btn",o.preventPropagationInvoke(this.handleCalculation)),this.render()}))}render(){return i(this,void 0,void 0,(function*(){this.renderInput(".month-income",this.state.monthlyIncome||0,[u.isValidNumber,"Miesięczny dochód powinien być liczbą"],[u.isPositiveNumber,"Miesięczny dochód powinien być dodatni"]),this.renderInput(".annual-income",this.state.annualIncome||0,[u.isValidNumber,"Roczny dochód powinien być liczbą"],[u.isPositiveNumber,"Roczny dochód powinien być dodatni"]);this.find("#calculate-donation-btn").disabled=!this.state.selectedTax||!this.isValid(this.state.annualIncome)}))}}customElements.get("donation-form")||customElements.define("donation-form",l)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.IncomeType=e.Tax=void 0,function(t){t.PIT="PIT",t.CIT="CIT"}(e.Tax||(e.Tax={})),function(t){t.MONTHLY="MONTHLY",t.ANNUAL="ANNUAL"}(e.IncomeType||(e.IncomeType={}))},function(t,e,n){"use strict";var i=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(a,o){function r(t){try{c(i.next(t))}catch(t){o(t)}}function s(t){try{c(i.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,s)}c((i=i.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.preventPropagation=e.preventPropagationInvoke=e.getTemplate=void 0,e.getTemplate=(t,e="template")=>i(void 0,void 0,void 0,(function*(){const n=yield fetch(t),i=yield n.text();return(new DOMParser).parseFromString(i,"text/html").querySelector(e)})),e.preventPropagationInvoke=t=>e=>{e.preventDefault(),e.stopPropagation(),t()},e.preventPropagation=t=>{t.preventDefault(),t.stopPropagation()}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.calculateForPIT=void 0;e.calculateForPIT=t=>{const e=Math.round(i(t));return{donationSum:e,taxDeduction:Math.round(a(t)-a(t-e))}};const i=t=>{let e=0;return t>8e3&&(e=.94*t>8e3?.06*t:t-8e3),e},a=t=>{let e=0;if(t<=8e3)return 0;if(t<=13e3){e=.17*t-(t=>1360-834.88/5e3*(t-8e3))(t)}else if(t<=85528)e=.17*t-525.12;else if(t<=127e3){e=14539.76+.32*(t-85528)-(t=>525.12-525.12/41472*(t-85528))(t)}else e=14539.76+.32*(t-85528);return e}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.calculateForCIT=void 0;e.calculateForCIT=t=>({donationSum:Math.round(i(t)),taxDeduction:Math.round(a(t))});const i=t=>.1*t,a=t=>t<=5418360?.09*i(t):.09*i(5418360)+.19*i(t-5418360)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CurrencyFormatter=void 0;e.CurrencyFormatter=class{constructor(t,e){this.format=t=>this.formatter.format(t),this.formatter=new Intl.NumberFormat(e,{style:"currency",currency:t,minimumFractionDigits:2,maximumFractionDigits:2,useGrouping:!0})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.applyValidation=e.isPositiveNumber=e.isValidNumber=void 0,e.isValidNumber=t=>!t||!isNaN(t),e.isPositiveNumber=t=>!t||t>-1,e.applyValidation=(t,e,n)=>{t.innerHTML="";for(let i of n){const n=i[0],a=i[1];if(!n(e)){const e=document.createElement("div");e.className="validation-message",e.innerHTML=a,null==t||t.appendChild(e);break}}}},function(t,e,n){},function(t,e,n){},function(t,e,n){}]);