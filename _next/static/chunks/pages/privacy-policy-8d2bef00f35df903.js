(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[396],{4644:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/privacy-policy",function(){return o(6375)}])},8418:function(e,t,o){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,a=new Array(t);o<t;o++)a[o]=e[o];return a}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a,r,n=[],i=!0,s=!1;try{for(o=o.call(e);!(i=(a=o.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(c){s=!0,r=c}finally{try{i||null==o.return||o.return()}finally{if(s)throw r}}return n}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return a(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(o);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var n,i=(n=o(7294))&&n.__esModule?n:{default:n},s=o(6273),c=o(387),l=o(7190);var m={};function u(e,t,o,a){if(e&&s.isLocalURL(t)){e.prefetch(t,o,a).catch((function(e){0}));var r=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;m[t+"%"+o+(r?"%"+r:"")]=!0}}var h=function(e){var t,o=!1!==e.prefetch,a=c.useRouter(),n=i.default.useMemo((function(){var t=r(s.resolveHref(a,e.href,!0),2),o=t[0],n=t[1];return{href:o,as:e.as?s.resolveHref(a,e.as):n||o}}),[a,e.href,e.as]),h=n.href,y=n.as,d=e.children,f=e.replace,p=e.shallow,v=e.scroll,g=e.locale;"string"===typeof d&&(d=i.default.createElement("a",null,d));var P=(t=i.default.Children.only(d))&&"object"===typeof t&&t.ref,b=r(l.useIntersection({rootMargin:"200px"}),2),_=b[0],w=b[1],F=i.default.useCallback((function(e){_(e),P&&("function"===typeof P?P(e):"object"===typeof P&&(P.current=e))}),[P,_]);i.default.useEffect((function(){var e=w&&o&&s.isLocalURL(h),t="undefined"!==typeof g?g:a&&a.locale,r=m[h+"%"+y+(t?"%"+t:"")];e&&!r&&u(a,h,y,{locale:t})}),[y,h,w,g,o,a]);var I={ref:F,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,o,a,r,n,i,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(o))&&(e.preventDefault(),t[r?"replace":"push"](o,a,{shallow:n,locale:c,scroll:i}))}(e,a,h,y,f,p,v,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s.isLocalURL(h)&&u(a,h,y,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var S="undefined"!==typeof g?g:a&&a.locale,A=a&&a.isLocaleDomain&&s.getDomainLocale(y,S,a&&a.locales,a&&a.domainLocales);I.href=A||s.addBasePath(s.addLocale(y,S,a&&a.defaultLocale))}return i.default.cloneElement(t,I)};t.default=h},7190:function(e,t,o){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,a=new Array(t);o<t;o++)a[o]=e[o];return a}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var a,r,n=[],i=!0,s=!1;try{for(o=o.call(e);!(i=(a=o.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(c){s=!0,r=c}finally{try{i||null==o.return||o.return()}finally{if(s)throw r}}return n}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return a(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(o);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,o=e.rootMargin,a=e.disabled||!s,m=n.useRef(),u=r(n.useState(!1),2),h=u[0],y=u[1],d=r(n.useState(t?t.current:null),2),f=d[0],p=d[1],v=n.useCallback((function(e){m.current&&(m.current(),m.current=void 0),a||h||e&&e.tagName&&(m.current=function(e,t,o){var a=function(e){var t,o={root:e.root||null,margin:e.rootMargin||""},a=l.find((function(e){return e.root===o.root&&e.margin===o.margin}));a?t=c.get(a):(t=c.get(o),l.push(o));if(t)return t;var r=new Map,n=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)}))}),e);return c.set(o,t={id:o,observer:n,elements:r}),t}(o),r=a.id,n=a.observer,i=a.elements;return i.set(e,t),n.observe(e),function(){if(i.delete(e),n.unobserve(e),0===i.size){n.disconnect(),c.delete(r);var t=l.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&y(e)}),{root:f,rootMargin:o}))}),[a,f,o,h]);return n.useEffect((function(){if(!s&&!h){var e=i.requestIdleCallback((function(){return y(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[h]),n.useEffect((function(){t&&p(t.current)}),[t]),[v,h]};var n=o(7294),i=o(9311),s="undefined"!==typeof IntersectionObserver;var c=new Map,l=[]},6375:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return w}});var a=o(5893),r=o(7294),n=o(7175),i=o(3082),s=o(8021),c=o(7185),l=(o(7575),o(3199)),m=o.n(l),u=o(7627),h=o.n(u),y=o(5501),d=o.n(y);function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,a=new Array(t);o<t;o++)a[o]=e[o];return a}function p(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return f(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(o);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return f(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=new Array,g=new Array;var P={root:["root","navbar","mainSection","pageBanner","columns","h1","img","mainSection2","container3","h3","fathymFooter"],navbar:["navbar"],mainSection:["mainSection","pageBanner","columns","h1","img"],pageBanner:["pageBanner","columns","h1","img"],columns:["columns","h1","img"],h1:["h1"],img:["img"],mainSection2:["mainSection2","container3","h3"],container3:["container3","h3"],h3:["h3"],fathymFooter:["fathymFooter"]};function b(e){var t=function(t){var o=(0,n.xf)(t,{name:e,descendantNames:p(P[e]),internalArgPropNames:g,internalVariantPropNames:v});return function(e){e.variants,e.args;var t=e.overrides,o=e.forNode,a=(e.args,(0,n.LK)({screen:(0,c.Xj)()}));return(0,n.eh)(r.Fragment,null,(0,n.eh)("style",null,"\n        body {\n          margin: 0;\n        }\n      "),(0,n.eh)("div",{className:h().plasmic_page_wrapper},(0,n.eh)(n.Kq,{as:"div","data-plasmic-name":"root","data-plasmic-override":t.root,"data-plasmic-root":!0,"data-plasmic-for-node":o,hasGap:!0,className:(0,n.AK)(h().all,h().root_reset,h().plasmic_default_styles,h().plasmic_mixins,h().plasmic_tokens,m().plasmic_tokens,d().root)},(0,n.eh)("div",{className:(0,n.AK)(h().all,d().freeBox__rbIqS)},(0,n.eh)("div",{className:(0,n.AK)(h().all,d().freeBox__suzfh)},(0,n.eh)(i.Z,{"data-plasmic-name":"navbar","data-plasmic-override":t.navbar,className:(0,n.AK)("__wab_instance",d().navbar)}))),(0,n.eh)("div",{"data-plasmic-name":"mainSection","data-plasmic-override":t.mainSection,className:(0,n.AK)(h().all,d().mainSection)},(0,n.eh)("div",{"data-plasmic-name":"pageBanner","data-plasmic-override":t.pageBanner,className:(0,n.AK)(h().all,d().pageBanner)},(0,n.eh)("div",{className:(0,n.AK)(h().all,d().freeBox__fUeTo)},(0,n.eh)(n.Kq,{as:"div","data-plasmic-name":"columns","data-plasmic-override":t.columns,hasGap:!0,className:(0,n.AK)(h().all,d().columns)},(0,n.eh)("div",{className:(0,n.AK)(h().all,d().column__aKi5X)},(0,n.eh)(n.Kq,{as:"div",hasGap:!0,className:(0,n.AK)(h().all,d().freeBox___3UBEc)},(0,n.eh)("h1",{"data-plasmic-name":"h1","data-plasmic-override":t.h1,className:(0,n.AK)(h().all,h().h1,h().__wab_text,d().h1)},"Privacy Policy"),(0,n.eh)("div",{className:(0,n.AK)(h().all,h().__wab_text,d().text__spvS2)},"The Fathym Privacy Policy explains how Fathym handles any customer, client or employee information gathered in its operations."))),(0,n.eh)("div",{className:(0,n.AK)(h().all,d().column___272Uj)},(0,n.eh)(n.Vv,{"data-plasmic-name":"img","data-plasmic-override":t.img,alt:"",className:(0,n.AK)(d().img),displayHeight:"auto",displayMaxHeight:"none",displayMaxWidth:((0,n.zK)(a,"screen","mobileOnly"),"100%"),displayMinHeight:"0",displayMinWidth:"0",displayWidth:"auto",loading:((0,n.zK)(a,"screen","mobileOnly"),"lazy"),src:(0,n.zK)(a,"screen","mobileOnly")?{src:"/plasmic/new_fathym_com/images/image21.jpeg",fullWidth:1920,fullHeight:1280,aspectRatio:void 0}:{src:"/plasmic/new_fathym_com/images/image20.jpeg",fullWidth:1920,fullHeight:1280,aspectRatio:void 0}})))))),(0,n.eh)("div",{"data-plasmic-name":"mainSection2","data-plasmic-override":t.mainSection2,className:(0,n.AK)(h().all,d().mainSection2)},(0,n.eh)("div",{"data-plasmic-name":"container3","data-plasmic-override":t.container3,className:(0,n.AK)(h().all,d().container3)},(0,n.eh)(n.Kq,{as:"div",hasGap:!0,className:(0,n.AK)(h().all,d().freeBox__xwZW)},(0,n.eh)("h3",{"data-plasmic-name":"h3","data-plasmic-override":t.h3,className:(0,n.AK)(h().all,h().h3,h().__wab_text,d().h3)},(0,n.zK)(a,"screen","mobileOnly")?"Professional And\nDedicated Consulting Services...":"Fathym Privacy Policy"),(0,n.eh)("div",{className:(0,n.AK)(h().all,h().__wab_text,d().text__dVy)},(0,n.zK)(a,"screen","mobileOnly")?"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus quis lorem malesuada luctus. Cras lacinia, eros at dapibus molestie, risus tortor pretium ligula, eu malesuada tortor eros dapibus mi. Proin laoreet efficitur suscipit. Donec molestie volutpat euismod. Nulla gravida ligula in eros facilisis, sed dignissim tellus aliquam. Etiam convallis enim nisi, at suscipit tortor pulvinar at. ":"Fathym is committed to protecting your privacy. \n\nThis Fathym, Inc. (\u201cFathym\u201d) privacy policy (this \u201cPrivacy Policy\u201d) describes our practices with regard to the personal information that Fathym collects, uses, shares and secures through any of Fathym\u2019s products (our \u201cProducts\u201d), any websites designated by Fathym (collectively, the \u201cSite\u201d), the mobile and other online applications provided by and on behalf of Fathym (each, an \u201cApplication\u201d) and the services provided through the Fathym Products, Site and Applications (together, the \u201cFathym Platform\u201d). By using any part of the Fathym Platform you consent to the collection and use of your Personal Information by Fathym as described in this Privacy Policy. \n\nCollection. \u201cPersonal Information\u201d refers to information that is connected to your name and may include things such as your email address, mailing address or telephone number. We may collect Personal Information about you directly from you when you voluntarily provide it to us through the Fathym Platform, including, without limitation, through registering for an account, making online purchases, requesting support, requesting information or materials (whitepapers), applying for employment, communicating with Fathym or using Fathym products or services. \n\n\u201cSensitive Personal Information\u201d refers to Personal Information regarding more sensitive issues, including, without limitation, credit card/banking information or your precise geolocation information. We may also collect Personal Information about you automatically when you interact with the Fathym Platform. For example, Fathym and our third party service providers may use \u201ccookies,\u201d \u201cweb beacons\u201d and other automated tracking technology to monitor and collect Information regarding how you access, use, and interact with the Fathym Platform. \n\n\u201cCookies\u201d are commonly used small files that are stored on your computer or mobile device to help identify you as a unique user of the Fathym Platform. Cookies store information about visitors\u2019 preferences, to record user-specific information on which pages the site visitor accesses or visits, and to personalize or customize our web page content based upon visitors\u2019 browser type or other information that the visitor sends via their browser. If you do not want your information to be stored by cookies, you can manage your cookie preferences by using the options and tools made available to you by either your web browser or Fathym. Please remember that required cookies will remain and cannot be turned off. Please also understand that choosing to reject cookies may reduce the performance and functionality of our websites. \n\n\u201cWeb beacons\u201d (also known as \u201csingle\u2013pixel\u201d or \u201cclear\u201d GIFs) include electronic images embedded in the Fathym Platform that allow us to recognize when you visit that area of the Fathym Platform. \n\nWeb Server Logs. The information inside the log files includes internet protocol addresses, browser type, Internet Service Provider (ISP), date/time stamp, referring/exit pages and possibly the number of clicks. This information is used to analyze trends, administer the site, track user\u2019s movement around the Site and gather demographic information. \n\nUse. Fathym may use the Personal Information we collect about you for a variety of purposes, including, without limitation, operating the Fathym Platform and providing services through the Fathym Platform; customizing and improving the Fathym Platform for you; providing maintenance, support and customer service for the Fathym Platform; providing notices and announcements to you relating to Fathym, the Fathym Platform or your Personal Information; providing offers for products, services or other offerings that we feel may be of interest to you; contacting you for direct marketing purposes; developing additional products and services; and research and analysis. Certain of your Personal Information may include Sensitive Personal Information, including, without limitation, when you provide us with certain banking or financial information, allow us to obtain and use your precise geolocation, or choose to share other Sensitive Personal Information with us or other users. Fathym will use any Sensitive Personal Information about you that we receive through the Fathym Platform solely in accordance with this Privacy Policy as you may request through the Fathym Platform. Fathym is not responsible for monitoring the Sensitive Personal Information you choose to exchange with other users or third parties through the Fathym Platform or for the use of that information by those other users or third parties. \n\nSharing. Fathym may share your Personal Information with companies that are affiliated with us, that we own or control, that own or control us or that are under common ownership or control with us. Fathym may also share your Personal Information with third parties who advertise their products and services on the Fathym Platform or other third parties who would like to send you information about their products and services. For example, Fathym may offer a discount or contest in conjunction with a co-sponsor that may have special offers or promotions that might be of interest to you. In such a case, your Personal Information may be shared with the co-sponsor and their use of your Personal Information is governed by their privacy policy. There may be instances when Fathym may disclose Personal Information without providing you with a choice in order to protect the legal rights of Fathym, other affiliated companies or their employees, agents and contractors; to protect the safety and security of other users; to protect against fraud or for risk management purposes; or to comply with the law or legal process. In addition, if Fathym sells all or part of its business or makes a sale or transfer of assets or is otherwise involved in a merger or business transfer, Fathym may transfer your Personal Information to a third party as part of that transaction. \n\nSecurity. Fathym uses reasonable measures to help prevent Personal Information from becoming disclosed to individuals who are not described in this Privacy Policy. While Fathym attempts to protect the information in our possession, no security system is perfect and Fathym cannot promise that information about you will remain secure in all circumstances. \n\nAdvertising. Fathym may participate in behavioral-based advertising. This means that a third party may use technology (i.e., a cookie) to collect information about your use of the Fathym Platform so that they can provide advertising about products and services tailored to your interest. That advertising may appear through the Fathym Platform, on the Site or on other websites. Our advertisers may also retarget you with advertisements about Fathym while you are visiting other websites on the Internet. In each case, the advertisements may make use of Personal Information collected about you through the Fathym Platform to attempt to tailor the advertisements to your interests. \n\nAccess and Choice. You may log in to your account and make changes to certain information, such as your password, contact information, general preferences and personalization settings. Additionally, Fathym has implemented the following procedure that you may use to access, correct or delete your Personal Information or choose how your Personal Information is used: \n\n1. If you would like to know the types of information that Fathym collects from users of its Fathym Platform, please email Fathym at the email address listed below under the \u201cCommunication\u201d Section. \n\n2. If you would like to know whether Fathym has collected Personal Information about you please send us the activities and services that you participated in on the Fathym Platform that requested Personal Information. After reviewing the relevant databases, Fathym will confirm whether Fathym has collected such information about you and provide a list of your Personal Information that we have on file. \n\n3. If your Personal Information is incorrect, you may correct the Personal Information by sending a written request for correction to Fathym at the address listed below under the \u201cCommunication\u201d Section. Your request must include (1) all of the incorrect Personal Information that you wish to change, (2) the corrected Personal Information, and (3) your signature authorizing such changes. Fathym will then correct the Personal Information in our database and send a written confirmation to you. \n\n4. If you wish to stop receiving email marketing communications from Fathym, please use the unsubscribe link at the bottom of each email communication or send a written opt-out request to the email address listed below under the \u201cCommunication\u201d Section. \n\n5. Some web browsers and devices permit you to broadcast a preference that you not be \u201ctracked\u201d online. At this time Fathym does not modify your experience based upon whether such a signal is broadcast. \n\nGDPR. Where the EU General Data Protection Regulation 2016/679 (\u201cGDPR\u201d) or similar legal requirements apply to the processing of your Personal Information, especially when you access the website from a country in the European Economic Area (\u201cEEA\u201d), you have the following rights, subject to some limitations: the right to access your Personal Information, the right to rectify the Personal Information we hold about you, the right to erase your Personal Information, the right to restrict our use of your Personal Information, the right to object to our use of your Personal Information, the right to receive your Personal Information in a usable electronic format and transmit it to a third party (also known as the right of data portability), the right to lodge a complaint with your local data protection authority, and the right to withdraw any consent you have given to uses of your Personal Information (however, the withdrawal of consent will not affect the lawfulness of processing based on consent before its withdrawal). If you would like to exercise any of these rights, you may do so via the process described under the \u201cAccess and Choice\u201d Section. \n\nAdditional Information. This Privacy Policy may not apply to open source project websites sponsored by Fathym; please refer to the privacy policy on those websites for more information about applicable privacy practices. This Privacy Policy does not apply to websites or applications offered by other companies or individuals, including, without limitation, third party products and services, that may be displayed on the Site. Fathym encourages you to read the privacy policy of any third party website or applications before transmitting any personal information. If you enter into a separate contractual relationship with Fathym which requires, or contemplates, collecting, using, sharing or securing information about you in a manner that is different than that which is described in this Privacy Policy, the terms of that agreement will apply. The Fathym Platform is intended for general audience and we do not knowingly collect personal information from anyone under the age of 13. \n\nNotice to California Residents: Under California Civil Code sections 1798.83-1798.84, California residents who have an established business relationship with Fathym are entitled to ask Fathym for a notice describing what categories of personal customer information we share with third parties for their direct marketing purposes. This notice will identify the categories of information shared with and will include a list of the third parties with which it is shared, along with their names and addresses. If you are a California resident and would like a copy of this notice, please submit a written request to Fathym at the address listed below under the \u201cCommunication\u201d Section. \n\nChanges and Updates. Fathym reserves the right, at any time, to modify this Privacy Policy. Should we update, amend or make any changes to our Privacy Policy, those changes will be posted here. You should review this Privacy Policy periodically so that you keep up to date on Fathym\u2019s most current policies and practices. Fathym will note the effective date of the latest version of our Privacy Policy at the end of this Privacy Policy. \n\nCommunication. If you have questions or concerns regarding how Fathym collects, uses, shares or secures your Personal Information or any other privacy or security issue, please contact: \n\nFathym, Inc. \n\nAttn: Legal (Privacy Concerns)1201 6 Ave W Ste 100 A337, Bradenton, FL 34205 \n\nBy email: legal@fathym.com \n\nIf Fathym needs, or is required, to contact you concerning any event that involves information about you, we may do so by email, telephone or mail. \n\nThis Privacy Policy was last updated on May 15, 2022. ")))),(0,n.eh)(s.Z,{"data-plasmic-name":"fathymFooter","data-plasmic-override":t.fathymFooter,className:(0,n.AK)("__wab_instance",d().fathymFooter)}))))}({variants:o.variants,args:o.args,overrides:o.overrides,forNode:e})};return t.displayName="root"===e?"PlasmicPrivacyPolicy":"PlasmicPrivacyPolicy.".concat(e),t}var _=Object.assign(b("root"),{navbar:b("navbar"),mainSection:b("mainSection"),pageBanner:b("pageBanner"),columns:b("columns"),h1:b("h1"),img:b("img"),mainSection2:b("mainSection2"),container3:b("container3"),h3:b("h3"),fathymFooter:b("fathymFooter"),internalVariantProps:v,internalArgProps:g});var w=function(){return(0,a.jsx)(_,{})}},5501:function(e){e.exports={root:"PlasmicPrivacyPolicy_root__LM7E1",freeBox__rbIqS:"PlasmicPrivacyPolicy_freeBox__rbIqS__kh_UK",freeBox__suzfh:"PlasmicPrivacyPolicy_freeBox__suzfh__ENkV_",navbar:"PlasmicPrivacyPolicy_navbar__1WwqP",mainSection:"PlasmicPrivacyPolicy_mainSection__P3M1_",pageBanner:"PlasmicPrivacyPolicy_pageBanner__Pzmjb",freeBox__fUeTo:"PlasmicPrivacyPolicy_freeBox__fUeTo__hnbW2",columns:"PlasmicPrivacyPolicy_columns__v23MT",column__aKi5X:"PlasmicPrivacyPolicy_column__aKi5X___sK8D",freeBox___3UBEc:"PlasmicPrivacyPolicy_freeBox___3UBEc__qWbci",h1:"PlasmicPrivacyPolicy_h1__V5YUC",text__spvS2:"PlasmicPrivacyPolicy_text__spvS2__y3fWQ",column___272Uj:"PlasmicPrivacyPolicy_column___272Uj__uq_PO",img:"PlasmicPrivacyPolicy_img__HRV7x","__wab_img-spacer":"PlasmicPrivacyPolicy___wab_img-spacer__zTxsE",mainSection2:"PlasmicPrivacyPolicy_mainSection2__tpzcO",container3:"PlasmicPrivacyPolicy_container3__iPZk2",freeBox__xwZW:"PlasmicPrivacyPolicy_freeBox__xwZW__0YNVs",h3:"PlasmicPrivacyPolicy_h3__N11LG",text__dVy:"PlasmicPrivacyPolicy_text__dVy__36csM",fathymFooter:"PlasmicPrivacyPolicy_fathymFooter__oKU3i"}},7575:function(){},1664:function(e,t,o){e.exports=o(8418)}},function(e){e.O(0,[858,774,888,179],(function(){return t=4644,e(e.s=t);var t}));var t=e.O();_N_E=t}]);