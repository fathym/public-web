(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[865],{1024:function(e,t,r){"use strict";var n=r(5893),o=(r(7294),r(7175));function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}t.Z=function(e){var t=e.className,r=e.style,u=e.title,i=l(e,["className","style","title"]);return(0,n.jsxs)("svg",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:"1em",width:"1em",className:(0,o.AK)("plasmic-default__svg",t),style:r},i,{children:[u&&(0,n.jsx)("title",{children:u}),(0,n.jsx)("path",{fill:"currentColor",d:"M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z"})]}))}},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,u=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(i){u=!0,o=i}finally{try{l||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,l=(a=r(7294))&&a.__esModule?a:{default:a},u=r(6273),i=r(387),c=r(7190);var f={};function s(e,t,r,n){if(e&&u.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[t+"%"+r+(o?"%"+o:"")]=!0}}var p=function(e){var t,r=!1!==e.prefetch,n=i.useRouter(),a=l.default.useMemo((function(){var t=o(u.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?u.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),p=a.href,y=a.as,d=e.children,v=e.replace,b=e.shallow,h=e.scroll,m=e.locale;"string"===typeof d&&(d=l.default.createElement("a",null,d));var g=(t=l.default.Children.only(d))&&"object"===typeof t&&t.ref,w=o(c.useIntersection({rootMargin:"200px"}),2),O=w[0],j=w[1],E=l.default.useCallback((function(e){O(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,O]);l.default.useEffect((function(){var e=j&&r&&u.isLocalURL(p),t="undefined"!==typeof m?m:n&&n.locale,o=f[p+"%"+y+(t?"%"+t:"")];e&&!o&&s(n,p,y,{locale:t})}),[y,p,j,m,r,n]);var S={ref:E,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,l,i){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:i,scroll:l}))}(e,n,p,y,v,b,h,m)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u.isLocalURL(p)&&s(n,p,y,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var I="undefined"!==typeof m?m:n&&n.locale,M=n&&n.isLocaleDomain&&u.getDomainLocale(y,I,n&&n.locales,n&&n.domainLocales);S.href=M||u.addBasePath(u.addLocale(y,I,n&&n.defaultLocale))}return l.default.cloneElement(t,S)};t.default=p},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],l=!0,u=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);l=!0);}catch(i){u=!0,o=i}finally{try{l||null==r.return||r.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!u,f=a.useRef(),s=o(a.useState(!1),2),p=s[0],y=s[1],d=o(a.useState(t?t.current:null),2),v=d[0],b=d[1],h=a.useCallback((function(e){f.current&&(f.current(),f.current=void 0),n||p||e&&e.tagName&&(f.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=i.get(n):(t=i.get(r),c.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,l=n.elements;return l.set(e,t),a.observe(e),function(){if(l.delete(e),a.unobserve(e),0===l.size){a.disconnect(),i.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&y(e)}),{root:v,rootMargin:r}))}),[n,v,r,p]);return a.useEffect((function(){if(!u&&!p){var e=l.requestIdleCallback((function(){return y(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[p]),a.useEffect((function(){t&&b(t.current)}),[t]),[h,p]};var a=r(7294),l=r(9311),u="undefined"!==typeof IntersectionObserver;var i=new Map,c=[]},7575:function(){},9008:function(e,t,r){e.exports=r(5443)},1664:function(e,t,r){e.exports=r(8418)}}]);