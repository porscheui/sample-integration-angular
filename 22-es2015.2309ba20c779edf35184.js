(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{hhKo:function(i,t,o){"use strict";o.r(t),o.d(t,"p_link_social",(function(){return r}));var l=o("lav1"),e=o("grEF"),a=o("k6c3"),n=o("DYa8");class r{constructor(i){Object(l.j)(this,i),this.icon=void 0,this.iconSource=void 0,this.href=void 0,this.theme="light",this.target="_self",this.rel=void 0,this.hideLabel=!1}componentWillLoad(){this.addSlottedStyles(),Object(n.a)(this.host)}render(){const i=void 0===this.href?"span":"a",t=Object(a.a)(Object(l.d)("link-social"),Object(l.i)("link-social-",this.hideLabel,["without-label","with-label"]),Object(l.d)("link-social--"+this.icon),Object(l.d)("link-social--theme-"+this.theme)),o=Object(l.d)("link-social__icon"),e=Object(l.d)("link-social__label");return Object(l.h)(i,Object.assign({class:t},"a"===i?{href:this.href,target:this.target,rel:this.rel}:null),Object(l.h)("p-icon",{class:o,size:"inherit",name:this.icon,source:this.iconSource,color:"inherit","aria-hidden":"true"}),Object(l.h)("p-text",{tag:"span",color:"inherit",class:e},Object(l.h)("slot",null)))}addSlottedStyles(){const i=this.host.tagName.toLowerCase(),t=`a:focus ${i} {\n      outline: 2px solid #00d5b9;\n      outline-offset: 1px;\n    }\n\n    /* this hack is only needed for Safari which does not support pseudo elements in slotted context (https://bugs.webkit.org/show_bug.cgi?id=178237) :-( */\n    ${i} a::before {\n      content: "" !important;\n      position: absolute !important;\n      top: 0 !important;\n      left: 0 !important;\n      right: 0 !important;\n      bottom: 0 !important;\n      display: block !important;\n      transition: outline-color 0.24s ease !important;\n    }\n\n    ${i} a:focus::before {\n      outline-offset: 1px !important;\n      outline: #00d5b9 solid 2px !important;\n    }\n    `;Object(e.a)(this.host,t)}get host(){return Object(l.g)(this)}}r.style=':host{display:-ms-inline-flexbox;display:inline-flex;vertical-align:top;position:relative !important;cursor:pointer}::slotted(a){display:block !important;position:static !important;text-decoration:none !important;color:inherit !important;line-height:inherit !important}::slotted(a)::before{content:"" !important;position:absolute !important;top:0 !important;left:0 !important;right:0 !important;bottom:0 !important;display:block !important;outline:transparent none !important;-webkit-transition:outline-color 0.24s ease !important;transition:outline-color 0.24s ease !important}::slotted(a:focus){outline:none !important}::slotted(a:focus)::before{outline-offset:1px !important;outline:#00d5b9 solid 2px !important}.p-link-social{display:-ms-flexbox;display:flex;width:100%;min-width:3rem;min-height:3rem;position:relative;margin:0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none transparent;text-decoration:none;-webkit-transition:background-color 0.24s ease, outline-color 0.24s ease, color 0.24s ease;transition:background-color 0.24s ease, outline-color 0.24s ease, color 0.24s ease}.p-link-social::-moz-focus-inner{border:0}.p-link-social:focus{outline-width:2px;outline-style:solid;outline-offset:1px}.p-link-social--theme-light{background-color:#323639;color:#fff}.p-link-social--theme-light:hover,.p-link-social--theme-light:active{color:#fff;background-color:#151718}.p-link-social--theme-light:focus{outline-color:#00d5b9}.p-link-social--theme-dark{background-color:#fff;color:#000}.p-link-social--theme-dark:hover,.p-link-social--theme-dark:active{color:#000;background-color:#e0e0e0}.p-link-social--theme-dark:focus{outline-color:#00d5b9}.p-link-social--logo-facebook:hover,.p-link-social--logo-facebook:active{color:#fff;background-color:#1877f2}.p-link-social--logo-google:hover,.p-link-social--logo-google:active{color:#fff;background-color:#4285f4}.p-link-social--logo-instagram:hover,.p-link-social--logo-instagram:active{color:#fff;background-color:#e1306c}.p-link-social--logo-linkedin:hover,.p-link-social--logo-linkedin:active{color:#fff;background-color:#0077b5}.p-link-social--logo-pinterest:hover,.p-link-social--logo-pinterest:active{color:#fff;background-color:#e60023}.p-link-social--logo-twitter:hover,.p-link-social--logo-twitter:active{color:#fff;background-color:#1da1f2}.p-link-social--logo-wechat:hover,.p-link-social--logo-wechat:active{color:#fff;background-color:#1aad19}.p-link-social--logo-whatsapp:hover,.p-link-social--logo-whatsapp:active{color:#fff;background-color:#25d366}.p-link-social--logo-xing:hover,.p-link-social--logo-xing:active{color:#fff;background-color:#006567}.p-link-social--logo-youtube:hover,.p-link-social--logo-youtube:active{color:#fff;background-color:#ff0000}.p-link-social--with-label{padding:0.75rem 1rem 0.75rem 2.5rem}.p-link-social--with-label .p-link-social__label{width:100%;height:auto;margin:0;padding:0;white-space:normal;overflow:visible;border:0;text-indent:0}.p-link-social--with-label .p-link-social__icon{left:0.75rem;top:0.75rem;-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0)}.p-link-social--without-label{padding:0}.p-link-social--without-label .p-link-social__label{width:1px;height:1px;margin:0 0 0 -1px;padding:0;white-space:nowrap;overflow:hidden;border:0;text-indent:-1px}.p-link-social--without-label .p-link-social__icon{left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}@media (min-width: 480px){.p-link-social--with-label-xs{padding:0.75rem 1rem 0.75rem 2.5rem}.p-link-social--with-label-xs .p-link-social__label{width:100%;height:auto;margin:0;padding:0;white-space:normal;overflow:visible;border:0;text-indent:0}.p-link-social--with-label-xs .p-link-social__icon{left:0.75rem;top:0.75rem;-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0)}.p-link-social--without-label-xs{padding:0}.p-link-social--without-label-xs .p-link-social__label{width:1px;height:1px;margin:0 0 0 -1px;padding:0;white-space:nowrap;overflow:hidden;border:0;text-indent:-1px}.p-link-social--without-label-xs .p-link-social__icon{left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}}@media (min-width: 760px){.p-link-social--with-label-s{padding:0.75rem 1rem 0.75rem 2.5rem}.p-link-social--with-label-s .p-link-social__label{width:100%;height:auto;margin:0;padding:0;white-space:normal;overflow:visible;border:0;text-indent:0}.p-link-social--with-label-s .p-link-social__icon{left:0.75rem;top:0.75rem;-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0)}.p-link-social--without-label-s{padding:0}.p-link-social--without-label-s .p-link-social__label{width:1px;height:1px;margin:0 0 0 -1px;padding:0;white-space:nowrap;overflow:hidden;border:0;text-indent:-1px}.p-link-social--without-label-s .p-link-social__icon{left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}}@media (min-width: 1000px){.p-link-social--with-label-m{padding:0.75rem 1rem 0.75rem 2.5rem}.p-link-social--with-label-m .p-link-social__label{width:100%;height:auto;margin:0;padding:0;white-space:normal;overflow:visible;border:0;text-indent:0}.p-link-social--with-label-m .p-link-social__icon{left:0.75rem;top:0.75rem;-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0)}.p-link-social--without-label-m{padding:0}.p-link-social--without-label-m .p-link-social__label{width:1px;height:1px;margin:0 0 0 -1px;padding:0;white-space:nowrap;overflow:hidden;border:0;text-indent:-1px}.p-link-social--without-label-m .p-link-social__icon{left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}}@media (min-width: 1300px){.p-link-social--with-label-l{padding:0.75rem 1rem 0.75rem 2.5rem}.p-link-social--with-label-l .p-link-social__label{width:100%;height:auto;margin:0;padding:0;white-space:normal;overflow:visible;border:0;text-indent:0}.p-link-social--with-label-l .p-link-social__icon{left:0.75rem;top:0.75rem;-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0)}.p-link-social--without-label-l{padding:0}.p-link-social--without-label-l .p-link-social__label{width:1px;height:1px;margin:0 0 0 -1px;padding:0;white-space:nowrap;overflow:hidden;border:0;text-indent:-1px}.p-link-social--without-label-l .p-link-social__icon{left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}}@media (min-width: 1760px){.p-link-social--with-label-xl{padding:0.75rem 1rem 0.75rem 2.5rem}.p-link-social--with-label-xl .p-link-social__label{width:100%;height:auto;margin:0;padding:0;white-space:normal;overflow:visible;border:0;text-indent:0}.p-link-social--with-label-xl .p-link-social__icon{left:0.75rem;top:0.75rem;-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0)}.p-link-social--without-label-xl{padding:0}.p-link-social--without-label-xl .p-link-social__label{width:1px;height:1px;margin:0 0 0 -1px;padding:0;white-space:nowrap;overflow:hidden;border:0;text-indent:-1px}.p-link-social--without-label-xl .p-link-social__icon{left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}}.p-link-social__icon{position:absolute;width:1.5rem;height:1.5rem}'}}]);