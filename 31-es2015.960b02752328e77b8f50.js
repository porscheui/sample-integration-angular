(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{NKFb:function(t,e,s){"use strict";s.r(e),s.d(e,"p_text_list",(function(){return l}));var i=s("KiLS"),r=s("Ol1C");const l=class{constructor(t){Object(i.q)(this,t),this.listType="unordered",this.orderType="numbered",this.theme="light"}render(){const t="unordered"===this.listType?"ul":"ol",e=Object(r.a)(Object(i.e)("text-list"),Object(i.e)("text-list--"+this.listType),Object(i.e)("text-list--theme-"+this.theme),this.isNestedList&&Object(i.e)("text-list--nested"));return Object(i.i)(i.a,{nested:this.isNestedList},Object(i.i)(t,{role:"list",class:e},Object(i.i)("slot",null)))}get isNestedList(){return!!this.host.closest(Object(i.e)("text-list-item"))}get host(){return Object(i.h)(this)}};l.style=':host{display:block;counter-reset:section !important}.p-text-list{font-size:1rem;line-height:1.5;font-family:"Porsche Next", "Arial Narrow", Arial, sans-serif;font-weight:400;display:block;padding:0;margin:0}.p-text-list--theme-light{color:#000}.p-text-list--theme-dark{color:#fff}'}}]);