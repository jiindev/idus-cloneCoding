(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{JKmr:function(n,e,t){"use strict";t.d(e,"a",(function(){return x}));t("f3/d"),t("a1Th"),t("Btvt"),t("XfO3"),t("HEwt"),t("rGqo"),t("rE2o"),t("ioFf"),t("91GP"),t("tUrg");var r=t("q1tI"),o=t.n(r),a=t("Wbzz"),i=t("vOnD"),c=t("MoRk"),u=t("OS56"),l=t.n(u);function d(){var n=m(["\n    margin: 30px auto 0 auto;\n    display: block;\n    font-size: 16px;\n    width: 400px;\n    padding: 15px 0;\n    border: 1px solid #999;\n    border-radius: 3px;\n    color: #333;\n    background: none;\n    transition: all .2s ease;\n    outline: none;\n    cursor: pointer;\n    &:hover{\n        background: #f5f5f5;\n    }\n    @media only screen and (max-width: 720px) {\n      width: 100%;\n      font-size: 14px;\n      border: 1px solid #d9d9d9;\n      margin: 10px auto 0 auto;\n    }\n"]);return d=function(){return n},n}function f(){var n=m(["\n  color: #333;\n  position: relative;\n  & h3{\n    font-size: 20px;\n    font-weight: bold;\n    padding: 10px 0;\n    border-bottom: 1px solid #d9d9d9;\n    margin-bottom: 15px;\n    & i{\n    font-size: 24px;\n    vertical-align: middle;\n    }\n  }\n  & div{\n    position: absolute;\n    bottom: 10px;\n    right: 0;\n    font-size: 14px;\n    & span{\n      margin-right: 10px;\n      color: #999;\n      & strong{\n        color: #333;\n        font-weight: bold;\n      }\n    }\n    & button{\n      border: 1px solid #d9d9d9;\n      border-radius: 0 2px 2px 0;\n      width: 24px;\n      height: 24px;\n      display: inline-block;\n      text-align: center;\n      background: none;\n      outline: none;\n      cursor: pointer;\n      & i{\n        line-height: 20px;\n        font-size: 12px;\n        color: #999;\n      }\n      &:nth-child(2){\n        border-right: 0;\n        border-radius: 2px 0 0 2px;\n      }\n    }\n  }\n  @media only screen and (max-width: 720px) {\n    & h3{\n      font-size: 16px;\n    }\n  }\n"]);return f=function(){return n},n}function s(){var n=m(["\n    display: flex;\n    flex-wrap: wrap;\n"]);return s=function(){return n},n}function p(){var n=m(["\n  padding: 40px 0;\n  & .slick-slide *{\n    outline: none;\n  }\n"]);return p=function(){return n},n}function m(n,e){return e||(e=n.slice(0)),n.raw=e,n}function b(n){return function(n){if(Array.isArray(n))return g(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,e){if(!n)return;if("string"==typeof n)return g(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(n,e)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var h=Object(r.memo)(Object(r.forwardRef)((function(n,e){var t=n.title,i=n.iconClass,u=n.data,d=n.link,f=Object(r.useState)(1),s=f[0],p=f[1],m=Object(r.useRef)(),g=Object(r.useMemo)((function(){return u.reduce((function(n,e,t){var r=Math.floor(t/10);return n[r]||(n[r]=[]),n[r]=[].concat(b(n[r]),[e]),n}),[])}),[u]),h={dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!1,draggable:!1,touchMove:!1,afterChange:function(n){return p(n+1)}},y=Object(r.useCallback)((function(){m.current.slickNext()}),[]),k=Object(r.useCallback)((function(){m.current.slickPrev()}),[]);return o.a.createElement(v,{ref:e},o.a.createElement("div",{className:"center"},o.a.createElement(w,null,o.a.createElement("h3",null,o.a.createElement("i",{className:i})," ",t),o.a.createElement("div",null,o.a.createElement("span",null,o.a.createElement("strong",null,s),"/5"),o.a.createElement("button",{onClick:k},o.a.createElement("i",{className:"ui_icon--arrow-left"})),o.a.createElement("button",{onClick:y},o.a.createElement("i",{className:"ui_icon--arrow-right"})))),o.a.createElement(l.a,Object.assign({ref:m},h),g&&g.map((function(n,e){return o.a.createElement("div",null,o.a.createElement(x,null,n.map((function(n,e){return o.a.createElement(c.a,{data:n,key:e})}))))}))),o.a.createElement(a.Link,{to:"/main/"+d},o.a.createElement(E,null,t," 더보기"))))}))),v=i.default.div(p()),x=i.default.ul(s()),w=i.default.div(f()),E=i.default.button(d());h.defaultProps={siteTitle:""},e.b=h},OGtf:function(n,e,t){var r=t("XKFU"),o=t("eeVq"),a=t("vhPU"),i=/"/g,c=function(n,e,t,r){var o=String(a(n)),c="<"+e;return""!==t&&(c+=" "+t+'="'+String(r).replace(i,"&quot;")+'"'),c+">"+o+"</"+e+">"};n.exports=function(n,e){var t={};t[n]=e(c),r(r.P+r.F*o((function(){var e=""[n]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",t)}},ka1X:function(n,e,t){"use strict";t("f3/d"),t("a1Th"),t("Btvt"),t("XfO3"),t("HEwt"),t("rGqo"),t("rE2o"),t("ioFf");var r=t("q1tI"),o=t.n(r),a=t("vOnD");function i(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  height: 210px;\n  text-align: center;\n  position: relative;\n  background-image: ",";\n  z-index: 20;\n  color: white;\n  margin-bottom: 30px;\n  &:before{\n    position: absolute;\n    top: 0;\n    left: 0;\n    content: '';\n    width: 100%;\n    height: 100%;\n    background: ",";\n    opacity: .9;\n    z-index: 0;\n  }\n  & h3{\n    position: relative;\n    z-index: 40;\n    font-size: 36px;\n    padding: 50px 0 0 0;\n    &:after{\n      content: '';\n      display: block;\n      height: 2px;\n      background: white;\n      width: 40px;\n      margin: 30px auto 25px auto;\n    }\n  }\n  & p{\n    position: relative;\n    z-index: 40;\n    font-size: 14px;\n  }\n  @media only screen and (max-width: 720px) {\n    display: none;\n  }\n"]);return i=function(){return n},n}var c=function(n){var e=n.title,t=n.description,r=n.bannerBackground;return o.a.createElement(u,{bannerBackground:r},o.a.createElement("h3",null,e),o.a.createElement("p",null,t))},u=a.default.header(i(),(function(n){return"url("+n.bannerBackground.imageUrl+")"}),(function(n){return"linear-gradient(97deg, "+n.bannerBackground.color[0]+", "+n.bannerBackground.color[1]+")"}));c.defaultProps={siteTitle:""};var l=c,d=t("JKmr"),f=t("MoRk"),s=t("1cfC");function p(){var n=function(n,e){e||(e=n.slice(0));return n.raw=e,n}(["\n  padding-bottom: 50px;\n"]);return p=function(){return n},n}function m(n){return function(n){if(Array.isArray(n))return b(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||function(n,e){if(!n)return;if("string"==typeof n)return b(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return b(n,e)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var g=Object(r.memo)((function(n){var e=n.title,t=n.description,a=n.bannerBackground,i=Object(r.useState)(Object(s.c)(20)),c=i[0],u=i[1],p=Object(r.useCallback)((function(){window.scrollY+document.documentElement.clientHeight>document.documentElement.scrollHeight-300&&setTimeout((function(){u(m(c).concat(Object(s.c)(20)))}),500)}),[c]);return Object(r.useEffect)((function(){return window.addEventListener("scroll",p),function(){window.removeEventListener("scroll",p)}}),[c]),o.a.createElement(h,null,o.a.createElement(l,{title:e,description:t,bannerBackground:a}),o.a.createElement("div",{className:"center"},o.a.createElement(d.a,null,c.map((function(n,e){return o.a.createElement(f.a,{data:n})})))))})),h=a.default.div(p());e.a=g},rPy0:function(n,e,t){"use strict";t.r(e);var r=t("q1tI"),o=t.n(r),a=t("Bl7J"),i=t("vrFN"),c=t("ka1X");e.default=function(){return o.a.createElement(a.a,null,o.a.createElement(i.a,{title:" | 실시간 추천작품"}),o.a.createElement(c.a,{title:"실시간 추천작품",description:"작가님이 직접 비용을 내고 자신있게 추천하는 작품이에요.",bannerBackground:{color:["#62258a","#5283db"],imageUrl:"/img-fullbanner01.jpg"}}))}},tUrg:function(n,e,t){"use strict";t("OGtf")("link",(function(n){return function(e){return n(this,"a","href",e)}}))}}]);
//# sourceMappingURL=component---src-pages-main-live-recommend-product-js-357a5f80904b5e8bb1d7.js.map