(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{RW4l:function(e,t,i){"use strict";i.r(t),i.d(t,"p_select_wrapper",(function(){return n}));var s=i("lav1"),o=i("grEF"),a=(i("vqtp"),i("AjqE")),p=i("k6c3");class n{constructor(e){Object(s.j)(this,e),this.label="",this.description="",this.state="none",this.message="",this.hideLabel=!1,this.fakeOptionListHidden=!0,this.optionDisabled=[],this.isTouch=(()=>{if("undefined"!=typeof window)return!!("ontouchstart"in window||window.navigator.maxTouchPoints>0)})(),this.setState=()=>{this.disabled=this.select.disabled},this.labelClick=()=>{this.select.focus()},this.setOptionList=()=>{this.options=this.select.querySelectorAll("option"),this.optgroups=this.select.querySelectorAll("optgroup"),this.optionSelected=this.select.selectedIndex,this.setOptionsDisabled()},this.setOptionsDisabled=()=>{this.optionDisabled.length=0,this.options.forEach((e,t)=>{e.hasAttribute("disabled")&&(this.optionDisabled=[...this.optionDisabled,t])})},this.setOptionSelected=e=>{this.select.selectedIndex=e,this.optionSelected=e,this.optionHighlighted=e,this.fakeOptionListHidden=!0,this.select.focus()}}componentWillLoad(){this.initSelect(),this.setAriaAttributes(),this.setState(),this.bindStateListener(),this.addSlottedStyles(),this.isTouch||(this.observeSelect(),this.setOptionList(),this.select.addEventListener("mousedown",this.handleMouseEvents.bind(this)),this.select.addEventListener("keydown",this.handleKeyboardEvents.bind(this)),this.optionHighlighted=this.optionSelected,"undefined"!=typeof document&&document.addEventListener("mousedown",this.handleClickOutside.bind(this),!1))}componentDidUpdate(){this.setAriaAttributes()}componentDidUnload(){this.selectObserver.disconnect(),this.select.removeEventListener("mousedown",this.handleMouseEvents.bind(this)),this.select.removeEventListener("keydown",this.handleKeyboardEvents.bind(this)),this.isTouch||"undefined"==typeof document||document.removeEventListener("mousedown",this.handleClickOutside.bind(this),!1)}render(){const e=Object(p.a)(Object(s.d)("select-wrapper__label")),t=Object(p.a)(Object(s.d)("select-wrapper__label-text"),Object(s.i)("select-wrapper__label-text-",this.hideLabel,["hidden","visible"]),{[Object(s.d)("select-wrapper__label-text--disabled")]:this.disabled}),i=Object(p.a)(Object(s.d)("select-wrapper__description-text"),Object(s.i)("select-wrapper__description-text-",this.hideLabel,["hidden","visible"]),{[Object(s.d)("select-wrapper__description-text--disabled")]:this.disabled}),o=Object(p.a)(Object(s.d)("select-wrapper__fake-select"),{[Object(s.d)("select-wrapper__fake-select--disabled")]:this.disabled},{[Object(s.d)("select-wrapper__fake-select--"+this.state)]:"none"!==this.state}),a=Object(p.a)(Object(s.d)("select-wrapper__fake-option-list"),{[Object(s.d)("select-wrapper__fake-option-list--hidden")]:this.fakeOptionListHidden}),n=Object(p.a)(Object(s.d)("select-wrapper__icon"),{[Object(s.d)("select-wrapper__icon--disabled")]:this.disabled},{[Object(s.d)("select-wrapper__icon--opened")]:!this.fakeOptionListHidden}),r=Object(p.a)(Object(s.d)("select-wrapper__message"),{[Object(s.d)("select-wrapper__message--"+this.state)]:"none"!==this.state});return Object(s.h)(s.a,null,Object(s.h)("div",{class:e},Object(s.h)("label",null,this.isLabelVisible&&Object(s.h)("p-text",{class:t,tag:"span",color:"inherit",onClick:this.labelClick},this.label||Object(s.h)("span",null,Object(s.h)("slot",{name:"label"}))),this.isDescriptionVisible&&Object(s.h)("p-text",{class:i,tag:"span",color:"inherit",size:"x-small",onClick:this.labelClick},this.description||Object(s.h)("span",null,Object(s.h)("slot",{name:"description"}))),Object(s.h)("span",{class:o},Object(s.h)("p-icon",{class:n,name:"arrow-head-down",color:"inherit"}),Object(s.h)("slot",null))),!this.isTouch&&Object(s.h)("div",{class:a,role:"listbox","aria-activedescendant":"option-"+this.optionSelected,tabIndex:-1,"aria-expanded":this.fakeOptionListHidden?"false":"true","aria-labelledby":this.label,ref:e=>this.fakeOptionListNode=e},this.createFakeOptionList())),this.isMessageVisible&&Object(s.h)("p-text",{class:r,color:"inherit",role:"error"===this.state&&"alert"},this.message||Object(s.h)("span",null,Object(s.h)("slot",{name:"message"}))))}get isLabelVisible(){return!!this.label||!!this.host.querySelector('[slot="label"]')}get isDescriptionVisible(){return!!this.description||!!this.host.querySelector('[slot="description"]')}get isMessageDefined(){return!!this.message||!!this.host.querySelector('[slot="message"]')}get isMessageVisible(){return["success","error"].includes(this.state)&&this.isMessageDefined}initSelect(){this.select=this.host.querySelector("select")}setAriaAttributes(){this.label&&this.message?this.select.setAttribute("aria-label",`${this.label}. ${this.message}`):this.label&&this.description?this.select.setAttribute("aria-label",`${this.label}. ${this.description}`):this.label&&this.select.setAttribute("aria-label",this.label),"error"===this.state?this.select.setAttribute("aria-invalid","true"):this.select.removeAttribute("aria-invalid")}bindStateListener(){Object(a.a)(this.select,"border-top-color",this.setState)}observeSelect(){this.selectObserver=new MutationObserver(e=>{e.filter(e=>"childList"===e.type).forEach(this.setOptionList),e.filter(e=>"attributes"===e.type).forEach(this.setOptionsDisabled)}),this.selectObserver.observe(this.select,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["disabled"]})}handleClickOutside(e){this.host.contains(e.target)||(this.fakeOptionListHidden=!0)}handleMouseEvents(e){e.preventDefault(),this.select.focus(),this.fakeOptionListHidden=!1===this.fakeOptionListHidden}handleKeyboardEvents(e){switch(e.key){case"ArrowUp":case"Up":e.preventDefault(),this.fakeOptionListHidden=!1,this.cycleFakeOptionList("up");break;case"ArrowDown":case"Down":e.preventDefault(),this.fakeOptionListHidden=!1,this.cycleFakeOptionList("down");break;case"ArrowLeft":case"Left":e.preventDefault(),this.cycleFakeOptionList("left");break;case"ArrowRight":case"Right":e.preventDefault(),this.cycleFakeOptionList("right");break;case" ":case"Spacebar":e.preventDefault(),this.fakeOptionListHidden=!1===this.fakeOptionListHidden,this.fakeOptionListHidden&&this.setOptionSelected(this.optionHighlighted);break;case"Enter":e.preventDefault(),this.fakeOptionListHidden=!0,this.setOptionSelected(this.optionHighlighted);break;case"Escape":case"Esc":this.fakeOptionListHidden=!0,this.optionHighlighted=this.optionSelected;break;case"PageUp":e.preventDefault(),this.fakeOptionListHidden||(this.optionHighlighted=0,this.handleScroll());break;case"PageDown":e.preventDefault(),this.fakeOptionListHidden||(this.optionHighlighted=this.options.length-1,this.handleScroll());break;case"Tab":this.fakeOptionListHidden||(this.fakeOptionListHidden=!0);break;default:this.searchOptions()}}createFakeOptionList(){return Array.from(this.options).map((e,t)=>[this.optgroups.length>0&&e===e.parentNode.firstChild&&Object(s.h)("span",{class:Object(p.a)(Object(s.d)("select-wrapper__fake-optgroup-label")),role:"presentation"},e.closest("optgroup").label),Object(s.h)("div",{id:"option-"+t,role:"option",color:"inherit",class:Object(p.a)(Object(s.d)("select-wrapper__fake-option"),{[Object(s.d)("select-wrapper__fake-option--selected")]:this.optionSelected===t,[Object(s.d)("select-wrapper__fake-option--highlighted")]:this.optionHighlighted===t,[Object(s.d)("select-wrapper__fake-option--disabled")]:this.optionDisabled.includes(t)}),onClick:()=>this.optionDisabled.includes(t)?this.select.focus():this.setOptionSelected(t),"aria-selected":this.optionSelected===t&&"true","aria-disabled":this.optionDisabled.includes(t)&&"true"},Object(s.h)("span",null,e.text),t===this.optionSelected&&Object(s.h)("p-icon",{class:Object(p.a)(Object(s.d)("select-wrapper__fake-option-icon")),"aria-hidden":"true",name:"check",color:"inherit"}))])}cycleFakeOptionList(e){const t=this.options.length;"down"===e||"right"===e?(this.optionHighlighted++,this.optionHighlighted>t-1&&this.optionDisabled.includes(0)?this.optionHighlighted=1:this.optionDisabled.includes(this.optionHighlighted)&&this.optionDisabled.includes(t-1)||this.optionHighlighted>t-1?this.optionHighlighted=0:this.optionDisabled.includes(this.optionHighlighted)&&(this.optionHighlighted+=1)):"up"!==e&&"left"!==e||(this.optionHighlighted--,this.optionHighlighted<0&&this.optionDisabled.includes(t-1)?this.optionHighlighted=t-2:this.optionDisabled.includes(this.optionHighlighted)&&this.optionDisabled.includes(0)||this.optionHighlighted<0?this.optionHighlighted=t-1:this.optionDisabled.includes(this.optionHighlighted)&&(this.optionHighlighted-=1)),"left"!==e&&"right"!==e||this.setOptionSelected(this.optionHighlighted),this.handleScroll()}handleScroll(){if(this.fakeOptionListNode.scrollHeight>200){this.fakeOptionHighlightedNode=this.fakeOptionListNode.querySelectorAll("div")[this.optionHighlighted];const e=this.fakeOptionHighlightedNode.offsetTop+this.fakeOptionHighlightedNode.offsetHeight;e>200+this.fakeOptionListNode.scrollTop?this.fakeOptionListNode.scrollTop=e-200:this.fakeOptionHighlightedNode.offsetTop<this.fakeOptionListNode.scrollTop&&(this.fakeOptionListNode.scrollTop=this.fakeOptionHighlightedNode.offsetTop)}}searchOptions(){setTimeout(()=>{const e=this.select.selectedIndex;this.optionSelected=e,this.optionHighlighted=e,this.handleScroll()},100)}addSlottedStyles(){const e=this.host.tagName.toLowerCase(),t=`${e} a {\n      outline: none transparent;\n      color: inherit;\n      text-decoration: underline;\n      -webkit-transition: outline-color .24s ease, color .24s ease;\n      transition: outline-color .24s ease, color .24s ease;\n    }\n    ${e} a:hover {\n      color: #d5001c;\n    }\n    ${e} a:focus {\n      outline: 2px solid #00d5b9;\n      outline-offset: 1px;\n    }`;Object(o.a)(this.host,t)}get host(){return Object(s.g)(this)}}n.style=':host{display:block}::slotted(select){position:absolute !important;top:0 !important;left:0 !important;width:100% !important;height:100% !important;display:block !important;padding:0.75rem 3rem 0.75rem 0.75rem !important;margin:0 !important;outline:transparent none !important;outline-offset:1px !important;-webkit-appearance:none !important;-moz-appearance:none !important;appearance:none !important;-webkit-box-sizing:border-box !important;box-sizing:border-box !important;border-width:0 !important;border-top-color:transparent !important;background-color:transparent !important;opacity:1 !important;font-family:"Porsche Next", "Arial Narrow", Arial, sans-serif !important;font-weight:400 !important;font-size:1rem !important;line-height:1.5 !important;color:#000 !important;text-indent:0 !important;cursor:pointer !important;-webkit-transition:outline-color 0.24s ease, color 0.24s ease, border-top-color 1ms linear !important;transition:outline-color 0.24s ease, color 0.24s ease, border-top-color 1ms linear !important}::slotted(select:-moz-focusring){color:transparent !important;text-shadow:0 0 0 #000 !important}::slotted(select::-ms-expand){display:none !important}::slotted(select:focus::-ms-value){background-color:transparent !important;color:#000 !important}::slotted(select:focus){outline:#00d5b9 solid 2px !important}::slotted(select:disabled){border-top-color:rgba(255, 255, 255, 0.01) !important;color:#96989a !important;cursor:not-allowed !important}.p-select-wrapper__label{display:block;position:relative}.p-select-wrapper__label-text,.p-select-wrapper__description-text{display:block;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;color:#000;-webkit-transition:color 0.24s ease;transition:color 0.24s ease}.p-select-wrapper__label-text--disabled,.p-select-wrapper__description-text--disabled{color:#96989a}.p-select-wrapper__label-text--visible,.p-select-wrapper__description-text--visible{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-select-wrapper__label-text--hidden,.p-select-wrapper__description-text--hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}@media (min-width: 480px){.p-select-wrapper__label-text--visible-xs,.p-select-wrapper__description-text--visible-xs{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-select-wrapper__label-text--hidden-xs,.p-select-wrapper__description-text--hidden-xs{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 760px){.p-select-wrapper__label-text--visible-s,.p-select-wrapper__description-text--visible-s{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-select-wrapper__label-text--hidden-s,.p-select-wrapper__description-text--hidden-s{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1000px){.p-select-wrapper__label-text--visible-m,.p-select-wrapper__description-text--visible-m{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-select-wrapper__label-text--hidden-m,.p-select-wrapper__description-text--hidden-m{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1300px){.p-select-wrapper__label-text--visible-l,.p-select-wrapper__description-text--visible-l{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-select-wrapper__label-text--hidden-l,.p-select-wrapper__description-text--hidden-l{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1760px){.p-select-wrapper__label-text--visible-xl,.p-select-wrapper__description-text--visible-xl{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-select-wrapper__label-text--hidden-xl,.p-select-wrapper__description-text--hidden-xl{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}.p-select-wrapper__description-text{color:#626669}.p-select-wrapper__description-text--disabled{color:#96989a}.p-select-wrapper__label-text~.p-select-wrapper__description-text{margin-top:-0.25rem;padding-bottom:0.5rem}.p-select-wrapper__fake-select{position:relative;width:100%;height:3rem;display:block;background-color:#fff;-webkit-box-shadow:inset 0 0 0 1px #626669;box-shadow:inset 0 0 0 1px #626669;-webkit-transition:background-color 0.24s ease, -webkit-box-shadow 0.24s ease;transition:background-color 0.24s ease, -webkit-box-shadow 0.24s ease;transition:box-shadow 0.24s ease, background-color 0.24s ease;transition:box-shadow 0.24s ease, background-color 0.24s ease, -webkit-box-shadow 0.24s ease}.p-select-wrapper__fake-select:hover:not(.p-select-wrapper__fake-select--disabled):not(.p-select-wrapper__fake-select--success):not(.p-select-wrapper__fake-select--error),.p-select-wrapper__label-text:hover~.p-select-wrapper__fake-select:not(.p-select-wrapper__fake-select--disabled):not(.p-select-wrapper__fake-select--success):not(.p-select-wrapper__fake-select--error){-webkit-box-shadow:inset 0 0 0 1px #000;box-shadow:inset 0 0 0 1px #000}.p-select-wrapper__fake-select--disabled{-webkit-box-shadow:inset 0 0 0 1px #96989a;box-shadow:inset 0 0 0 1px #96989a;background-color:#fff}.p-select-wrapper__fake-select--success{-webkit-box-shadow:inset 0 0 0 2px #018a16;box-shadow:inset 0 0 0 2px #018a16}.p-select-wrapper__fake-select--success:hover,.p-select-wrapper__label-text:hover~.p-select-wrapper__fake-select--success{-webkit-box-shadow:inset 0 0 0 2px #014d0c;box-shadow:inset 0 0 0 2px #014d0c}.p-select-wrapper__fake-select--error{-webkit-box-shadow:inset 0 0 0 2px #e00000;box-shadow:inset 0 0 0 2px #e00000}.p-select-wrapper__fake-select--error:hover,.p-select-wrapper__label-text:hover~.p-select-wrapper__fake-select--error{-webkit-box-shadow:inset 0 0 0 2px #a30000;box-shadow:inset 0 0 0 2px #a30000}.p-select-wrapper__fake-option-list{font-size:1rem;line-height:1.5;font-family:"Porsche Next", "Arial Narrow", Arial, sans-serif;font-weight:400;position:absolute;z-index:1;border:1px solid #626669;border-top-color:#c9cacb;left:0;right:0;top:calc(100% - 1px);max-height:200px;overflow-y:auto;background-color:#fff;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:auto}.p-select-wrapper__fake-option-list::-webkit-scrollbar{-webkit-appearance:none;width:6px}.p-select-wrapper__fake-option-list::-webkit-scrollbar-thumb{border-radius:4px;background-color:rgba(0, 0, 0, 0.4)}.p-select-wrapper__fake-option-list::after{content:"";display:block;height:0.25rem}.p-select-wrapper__fake-option-list:focus{outline:none}.p-select-wrapper__fake-option-list--hidden{display:block;opacity:0;overflow:hidden;height:1px}.p-select-wrapper__fake-option{position:relative;display:block;padding:0.5rem 0.75rem;cursor:pointer;color:#000;-webkit-transition:color 0.24s ease, background-color 0.24s ease;transition:color 0.24s ease, background-color 0.24s ease}.p-select-wrapper__fake-option:not([aria-disabled]):hover{color:#d5001c}.p-select-wrapper__fake-option:focus{outline:#00d5b9 solid 2px}.p-select-wrapper__fake-option--selected{color:#d5001c;cursor:default;pointer-events:none;padding-right:2rem}.p-select-wrapper__fake-option--highlighted:not(.p-select-wrapper__fake-option--selected){color:#d5001c;background-color:#ebebeb}.p-select-wrapper__fake-option--disabled{color:#96989a;cursor:not-allowed}.p-select-wrapper__fake-option-icon{position:absolute;right:0.75rem}.p-select-wrapper__fake-optgroup-label{display:block;padding:0.5rem 0.75rem;margin-top:0.5rem;font-weight:700}.p-select-wrapper__fake-optgroup-label~.p-select-wrapper__fake-option{padding-left:1.5rem}.p-select-wrapper__icon{position:absolute;top:0.75rem;right:0.75rem;color:#000;-webkit-transition:-webkit-transform 0.24s ease;transition:-webkit-transform 0.24s ease;transition:transform 0.24s ease;transition:transform 0.24s ease, -webkit-transform 0.24s ease}.p-select-wrapper__icon--disabled{color:#96989a}.p-select-wrapper__icon--opened{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.p-select-wrapper__message{margin-top:0.25rem;color:#000;-webkit-transition:color 0.24s ease;transition:color 0.24s ease}.p-select-wrapper__message--success{color:#018a16}.p-select-wrapper__message--error{color:#e00000}'}}]);