(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Cdlu:function(n,e,t){"use strict";t.r(e);t("91GP");var a=t("q1tI"),l=t.n(a),r=t("Bl7J"),i=t("vrFN"),o=t("vOnD"),c=t("OS56"),d=t.n(c),u=t("MKVX"),s=t("MoRk"),p=t("1cfC");function m(){var n=_(["\n    padding-top: 50px;\n    & ul{\n        display: flex;\n        flex-wrap: wrap;\n        padding: 20px 0 50px;\n    }\n"]);return m=function(){return n},n}function b(){var n=_(["\n    background-color: #f5f5f5;\n    &>div{\n        display: flex;\n        padding: 100px 0;\n        justify-items: center;\n        align-items: center;\n    }\n    & div.products{\n        width: 65%;\n        padding: 0 10px;\n        box-sizing: border-box;\n        position: relative;\n        &:after{\n            height: 85%;\n            width: 1px;\n            content: '';\n            display: block;\n            background-color: #d9d9d9;\n            position: absolute;\n            top: 30px;\n            right: 0;\n        }\n        & ul{\n            display: flex;\n            flex-wrap: wrap;\n            padding: 20px 0;\n        }\n    }\n    & div.artist{\n        width: 35%;\n        text-align: center;\n        margin: 0 auto;\n        &>div{\n            width: 275px;\n            margin: 0 auto;\n        }\n        & .pic{\n            width: 72px;\n            height: 72px;\n            display: block;\n            background: url('/thumbnail/dummyThumbnail_2.jpg') no-repeat center center / contain;\n            border-radius: 72px;\n            margin: 30px auto 10px auto;\n        }\n        & .name{\n            display: block;\n            font-size: 14px;\n            color: #333;\n            font-weight: bold;\n            padding-bottom: 10px;\n        }\n        & p{\n            line-height: 1.5;\n            font-size: 14px;\n            padding-bottom: 10px;\n            min-height: 50px;\n        }\n        & button{\n            color: #333;\n            border: 1px solid #ccc;\n            background: #fff;\n            padding: 5px 0;\n            font-size: 12px;\n            width: 50%;\n            display: inline-block;\n            margin-bottom: 5px;\n            &:nth-child(1){\n                width: 49%;\n                margin-right: 1%;\n                color: #5283db;\n            }\n            &:nth-child(3){\n                width: 100%\n            }\n        }\n    }\n    @media only screen and (max-width: 1056px) {\n        &>div{\n            flex-direction: column;\n        }\n        & div.products, & div.artist{\n            width: 100%;\n        }\n        & div.products:after{\n            display: none\n        }\n    }\n"]);return b=function(){return n},n}function x(){var n=_(["\n    & .option span{\n        position: absolute;\n        display: none;\n        background-color: #333;\n        top: -24px;\n        left: 50%;\n        margin-left: -35px;\n        width: 70px;\n        height: 24px;\n        border-radius: 15px 15px 0 0;\n        color: white;\n        text-align: center;\n        font-size: 14px;\n        line-height: 24px;\n        cursor: pointer;\n    }\n    & dl{\n        border-top: 1px solid #d9d9d9;\n        padding: 20px 0;\n        display: flex;\n        justify-content:space-between;\n        & dt{\n            color: #666;\n            font-size:14px;\n        }\n        & dd{\n            font-size: 20px;\n            font-weight: bold;\n            color: #333;\n        }\n    }\n    & div.buttons{\n        display: flex;\n    }\n    & button{\n        width: 27.3%;\n        margin-right: 1%;\n        line-height: 46px;\n        height: 46px;\n        font-size: 16px;\n        padding: 0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border: none;\n        border-radius: 2px;\n        color: #fff;\n        background-color: #fff;\n        outline: none;\n        &.cart{\n            border: 1px solid #5283db;\n            color: #5283db;\n        }\n        &.buy{\n            background-color: #5283db;\n        }\n        &.npay{\n            background-color: #30c612;\n        }\n        &.message{\n            color: #333;\n            border: 1px solid #d9d9d9;\n            display: none;\n        }\n        &.gift{\n            width: 15%;\n            margin: 0;\n            border: 1px solid #d9d9d9;\n        }\n        &.bookmark{\n            color: #666;\n            font-size: 22px;\n            display: none;\n        }\n    }\n    @media only screen and (max-width: 720px) {\n        position: fixed;\n        bottom: 0;\n        left: 0;\n        z-index: 999;\n        width: 100%;\n        padding: 8px;\n        background: white;\n        border-top: 1px solid #d9d9d9;\n        & .buttons{\n            & button{\n                width: 30%;\n            }\n            & .cart{\n                display: none;\n            }\n            & .gift{\n                display: none;\n            }\n            & .message{ \n                display: inline-block;\n            }\n            & .bookmark{\n                display: inline-block;\n                width: 10%;\n            }\n            & .buy, & .npay{\n                cursor: pointer;\n            }\n        }\n        & .option{\n            & span{\n                display: inline-block;\n            }\n            display: ",";\n           position: absolute;\n           bottom: 60px;\n           left: 0;\n           background-color: #fff;\n           width: 100vw;\n           padding: 20px 10px 0 10px;\n           box-sizing: border-box;\n           border-top: 2px solid #333333;\n        }\n\n    }\n"]);return x=function(){return n},n}function f(){var n=_(["\n    padding-bottom: 10px;\n    position: relative;\n    & i{\n        position: absolute;\n        top: 8px;\n        right: 10px;\n        font-size: 14px;\n    }\n    & select{\n        width: 100%;\n        padding: 10px 20px;\n        box-sizing: border-box;\n        outline: none;\n        border: 1px solid #d9d9d9;\n        appearance:none;\n    }\n"]);return f=function(){return n},n}function E(){var n=_(["\n    background-color: #f5f5f5;\n    padding: 20px 0;\n    display: flex;\n    text-align: center;\n    margin: 20px 0 30px 0;\n    & dl{\n        width: 25%;\n        position: relative;\n        &:after{\n            content: '';\n            height: 15px;\n            width: 1px;\n            display: block;\n            background-color: #999;\n            position: absolute;\n            right: 0;\n            top: 5px;\n        }\n        &:last-child:after{\n            display: none;\n        }\n    }\n    & dt{\n        font-size: 12px;\n        color: #999;\n    }\n    & dd{\n        font-size: 13px;\n        margin-top: 8px;\n    }\n"]);return E=function(){return n},n}function g(){var n=_(["\n    & span.category{\n        font-size: 12px;\n        color: #999;\n    }\n    & h3{\n        font-size: 20px;\n        font-weight: bold;\n        line-height: 1.5;\n        padding: 5px 0 10px 0;\n    }\n    & .artist{\n        display: flex;\n        margin-bottom: 30px;\n        & span{\n            font-size: 14px;\n            color: #666;\n            flex: 1;\n            &:before{\n                content: '';\n                width: 24px;\n                height: 24px;\n                display: inline-block;\n                background: url('/thumbnail/dummyThumbnail_2.jpg') no-repeat center center / contain;\n                border-radius: 24px;\n                vertical-align: middle;\n                margin-right: 5px;\n            }\n        }\n        & i{\n            vertical-align: middle;\n        }\n        & button{\n            font-size: 10px;\n            padding: 0 8px;\n            border: 1px solid #d9d9d9;\n            border-radius: 2px;\n            background-color: #fff;\n        }\n    }\n    & .price{\n        & span{\n            display: block;\n            font-size: 24px;\n            color: #333;\n        }\n        & strong{\n            font-size: 28px;\n            font-weight: bold;\n        }\n        & p{\n            font-size: 14px;\n            color: #999;\n            padding: 10px 0 20px 0;\n        }\n    }\n    & .buttons{\n        & button{\n            width: 50%;\n            padding: 10px 0;\n            border: 1px solid #d9d9d9;\n            background-color: white;\n            font-size: 14px;\n            color: #333;\n            border-radius: 0 3px 3px 0;\n            &:hover{\n                background-color: #f5f5f5;\n            }\n            & i{\n                font-size: 20px;\n                vertical-align: middle;\n                margin-right: 10px;\n            }\n            &:first-child{\n                border-right: none;\n                border-radius: 3px 0 0 3px;\n            }\n        }\n    }\n"]);return g=function(){return n},n}function h(){var n=_(["\n        width: 35%;\n        position: absolute;\n        top:0;\n        right: 0;\n        z-index: 30;\n        @media only screen and (min-width: 720px) {\n            &.fixed{\n                position: fixed;\n                width: calc(100vw * 0.35);\n                right: 0;\n            }\n            &.bottom{\n                top: initial;\n                bottom: 0;\n            }\n        }\n        @media only screen and (min-width: 1050px) {\n            &.fixed{\n                right: auto;\n                left: 50%;\n                margin-left: 160px;\n                width: calc(1050px * 0.35);\n            }\n        }\n        &>div{\n            margin: 10px;\n            background-color: #fff;\n            border-radius: 3px;\n            box-shadow: 0 0 5px rgba(0,0,0,.2);\n            padding: 20px;\n        }\n    @media only screen and (max-width: 720px) {\n        position: static;\n        width: 100%;\n        &>div{\n            margin: 0;\n            box-shadow: none;\n            padding: 20px 0;\n        }\n    }\n"]);return h=function(){return n},n}function v(){var n=_(["\n    & span.pic{\n        width:32px;\n        height: 32px;\n        background: url('/thumbnail/dummyThumbnail_1.jpg') no-repeat center center / contain;\n        display: inline-block;\n        border-radius: 32px;\n        margin-right: 10px;\n    }\n    & span.name{\n        color: #333;\n        font-size: 12px;\n        font-weight: bold;\n        margin-bottom: 5px;\n        display: inline-block;\n    }\n    & time{\n        font-size: 12px;\n        color: #999;\n    }\n    & p{\n        line-height: 1.5;\n        color: #333;\n        font-size: 14px;\n    }\n    & div.review{\n        & li{\n            padding: 20px 0;\n            border-bottom: 1px solid #ccc;\n            clear: both;\n            &>div:first-child{\n                display: flex;\n                width: 100%;\n                margin-bottom: 10px;\n                align-items: center;\n                &>div *{\n                    display: block;\n                }\n                & .stars{\n                    display: block;\n                    margin: 0 0 0 auto;\n                }\n            }\n        }\n        & nav{\n            padding: 20px 0;\n            text-align: center;\n            & button{\n                display: inline-block;\n                background: #fff;\n                border: 1px solid #ccc;\n                border-radius: 2px;\n                color: #dd5850;\n                font-size: 12px;\n                width: 24px;\n                height: 24px;\n            }\n         }\n    }\n    & div.reply{\n        & .customer{\n            display: flex;\n            padding: 10px;\n        }\n        & .artist li{\n            display: flex;\n            padding: 10px;\n            background: #f5f5f5;\n            margin-left: 50px;\n            margin-bottom: 10px;\n            border-radius: 3px;\n        }\n        & .artist .pic{\n            background: url('/thumbnail/dummyThumbnail_2.jpg') no-repeat center center / contain;\n        }\n        & .replyInput{\n            padding: 16px 0 50px 0;\n            border-top: 1px solid #d9d9d9;\n            display: flex;\n            font-size: 12px;\n            & span{\n                width: 32px;\n                height: 32px;\n                display: block;\n                background: url('/thumbnail/dummyThumbnail_1.jpg') no-repeat center center / contain;\n                border-radius: 32px;\n                margin-right: 10px; \n            }\n            & input{\n                flex: 1;\n                box-sizing: border-box;\n                padding: 0 10px;\n                outline: none;\n                border: 1px solid #999;\n                border-radius: 3px;\n                &:focus{\n                    border: 1px solid #22a7af;\n                }\n                &::placeholder{\n                    color: #999;\n                }\n            }\n            & button{\n                padding: 0 15px;\n                margin-left: 10px;\n                background-color: #5283db;\n                border: none;\n                border-radius: 3px;\n                color: white;\n            }\n        }\n    }\n"]);return v=function(){return n},n}function w(){var n=_(["\n    & h4{\n        border-top: 1px solid #d9d9d9;\n        padding: 20px;\n        color: #333;\n        font-size: 14px;\n        cursor: pointer;\n        display: flex;\n        justify-content:space-between;\n        & i{\n            font-size: 18px;\n            transition: all .2s ease;\n        }\n    }\n    &.shown{\n        & table{\n            display: block;\n        }\n        & i{\n            transform: rotate(180deg);\n        }\n    } \n    & table{\n        width: 100%;\n        border-top: 1px solid #ccc;\n        font-size: 12px;\n        display: none;\n        & tbody{\n            display: block;\n            width: 100%;\n        }\n        & tr{\n            display: flex;\n            box-sizing: border-box;\n            width: 100%;\n            border-bottom: 1px solid #ccc;\n            line-height: 1.5;\n            &:last-child{\n                border: none;\n            }\n        }\n        & th{\n            box-sizing: border-box;\n            width: 30%;\n            background: #eee;\n            border-right: 1px solid #ccc;\n            color: #666;\n            padding: 15px;\n        }\n        & td{\n            display: block;\n            box-sizing: border-box;\n            width: 70%;\n            color: #333;\n            padding: 15px;\n            & strong{\n                color: #22a7af;\n            }\n        }\n    }\n"]);return w=function(){return n},n}function y(){var n=_(["\n    padding-bottom: 50px;\n    & ul{\n        border-bottom: 1px solid #d9d9d9;\n    }\n"]);return y=function(){return n},n}function k(){var n=_(["\n    text-align: center;\n    border-top: 1px solid #d9d9d9;\n    padding: 30px 0;\n    & dt{\n        font-size: 10px;\n        color: #999;\n    }\n    & dd{\n        color: #333;\n        font-size: 15px;\n        margin-top: 8px;\n    }\n    & ul{\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n        padding-top: 20px;\n    }\n    & li{\n        padding: 8px 10px;\n        border: 1px solid #d9d9d9;\n        margin: 5px;\n        font-size: 12px;\n        color: #22a7af;\n    }\n"]);return k=function(){return n},n}function N(){var n=_(["\n    text-align: center;\n    font-size: 15px;\n    line-height: 24px;\n    padding: 50px 0;\n    @media only screen and (max-width: 720px) {\n        padding: 0 0 50px 0;\n    }\n"]);return N=function(){return n},n}function z(){var n=_(["\n    border-top: 1px solid #d9d9d9;\n    border-bottom: 1px solid #d9d9d9;\n    display: flex;\n    position: sticky;\n    top: 0;\n    background-color: white;\n    margin-top: 50px;\n    z-index: 30;\n    & li{\n        width: 25%;\n        padding: 20px 0;\n        text-align: center;\n        color: #666;\n        cursor: pointer;\n        position: relative;\n        &.active{\n            &:after{\n                content: '';\n                display: block;\n                width: 100%;\n                height: 4px;\n                background-color: #5283db;\n                position: absolute;\n                bottom: 0;\n            }\n        }\n    }\n    @media only screen and (max-width: 720px) {\n        display: none;\n    }\n"]);return z=function(){return n},n}function j(){var n=_(["\n    width: 100%;\n    overflow: hidden;\n    position: relative;\n    & .slick-dots .slick-active{\n        border: 3px solid #5283db;\n    }\n    & .slick-dots {\n        position: static;\n        margin-top: 5px;\n        & li{\n            width: 55px;\n            height: 55px;\n        }\n    }\n    &:hover button{\n        opacity: 1;\n    }\n    & button{\n        opacity: 0;\n        transition: all .2s ease;\n        position: absolute;\n        width: 40px;\n        height: 40px;\n        z-index: 50;\n        top: 50%;\n        margin-top: -50px;\n        color: white;\n        border: none;\n        background-color: rgba(0,0,0,.3);\n        outline: none;\n        cursor: pointer;\n        font-size: 18px;\n        &.prev {\n            left: 0;\n            right: none;\n        }\n        &.next{\n            right: 0;\n            left: none;\n        }\n    }\n"]);return j=function(){return n},n}function O(){var n=_(["\n    width: 65%;\n    @media only screen and (max-width: 720px) {\n        width: 100%;\n    }\n"]);return O=function(){return n},n}function C(){var n=_(["\n    max-width: 1056px;\n    margin: 0 auto;\n    position: relative;\n"]);return C=function(){return n},n}function R(){var n=_(["\n    font-weight: bold;\n    padding: 10px 0;\n    border-bottom: 1px solid #333;\n    position: relative;\n    & button{\n        position: absolute;\n        top: 5px;\n        right: 0;\n        color: #333;\n        border: 1px solid #ccc;\n        background: #fff;\n        padding: 4px 8px 3px;\n        font-size: 11px;\n        border-radius: 2px;\n    }\n"]);return R=function(){return n},n}function T(){var n=_(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    background: rgba(0,0,0,0.48);\n    width: 100vw;\n    height: 100vh;\n    z-index: 35;\n    display: ",";\n    @media only screen and (min-width: 721px) {\n        display: none;\n    }\n"]);return T=function(){return n},n}function L(){var n=_(["\n    padding: 30px 0;\n    @media only screen and (max-width: 720px) {\n        padding: 0;\n    }\n"]);return L=function(){return n},n}function _(n,e){return e||(e=n.slice(0)),n.raw=e,n}var S=o.default.div(L()),I=o.default.div(T(),(function(n){return n.show?"block":"none"})),q=o.default.h4(R()),Y=o.default.div(C()),P=o.default.div(O()),U=o.default.div(j()),B=o.default.ul(z()),J=o.default.div(N()),K=o.default.div(k()),M=o.default.div(y()),A=o.default.li(w()),D=o.default.div(v()),H=o.default.div(h()),F=o.default.div(g()),G=o.default.div(E()),V=o.default.div(f()),X=o.default.div(x(),(function(n){return n.clickBuy?"block":"none"})),Q=o.default.div(b()),W=o.default.div(m());e.default=function(n){var e,t=n.location,o=t.state?t.state.data:Object(p.b)(),c=Object(a.useState)(Object(p.a)(o.artist,o.id)),m=c[0],b=(c[1],Object(a.useState)(Object(p.c)(10))),x=b[0],f=(b[1],Object(a.useState)(Object(p.c)(10))),E=f[0],g=(f[1],Object(a.useState)(!1)),h=g[0],v=g[1],w=Object(a.useRef)(),y=Object(a.useRef)(),k=Object(a.useRef)(),N=Object(a.useRef)(),z=Object(a.useRef)(),j=Object(a.useRef)(),O=Object(a.useRef)(),C=Object(a.useRef)(),R=Object(a.useRef)(),T=Object(a.useRef)(),L=Object(a.useRef)(),_=Object(a.useCallback)((function(){window.scrollY+w.current.clientHeight>N.current.offsetTop-w.current.clientHeight?(w.current.classList.remove("fixed"),w.current.classList.add("bottom")):window.scrollY>180?(w.current.classList.add("fixed"),w.current.classList.remove("bottom")):(w.current.classList.remove("fixed"),w.current.classList.remove("bottom")),k.current.querySelector("li.active").classList.remove("active"),window.scrollY>C.current.offsetTop+120?k.current.querySelector("li:nth-child(4)").classList.add("active"):window.scrollY>O.current.offsetTop+120?k.current.querySelector("li:nth-child(3)").classList.add("active"):window.scrollY>j.current.offsetTop+120?k.current.querySelector("li:nth-child(2)").classList.add("active"):k.current.querySelector("li:nth-child(1)").classList.add("active")}),[]);Object(a.useEffect)((function(){return window.addEventListener("scroll",_),function(){window.removeEventListener("scroll",_)}}),[]);var Z=Object(a.useCallback)((function(){y.current.slickNext()}),[]),$=Object(a.useCallback)((function(){y.current.slickPrev()}),[]),nn=((e={dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,arrows:!1,draggable:!0}).dots=!0,e.customPaging=function(n){return 0===n?l.a.createElement("a",{className:"dotImage"},l.a.createElement("img",{src:"/thumbnail/"+o.thumbnailUrl,width:"100%"})):l.a.createElement("a",{className:"dotImage"},l.a.createElement("img",{src:"/thumbnail/dummyThumbnail_"+n+".jpg",width:"100%"}))},e),en=Object(a.useCallback)((function(n){return function(){n.current.classList.toggle("shown")}}),[]),tn=Object(a.useCallback)((function(n){return function(){window.scrollTo(0,n.current.offsetTop+121)}}),[]);return l.a.createElement(r.a,null,l.a.createElement(i.a,{title:" | "+o.title}),l.a.createElement(S,null,l.a.createElement(I,{show:h}),l.a.createElement(Y,null,l.a.createElement(P,null,l.a.createElement(U,null,l.a.createElement("button",{className:"prev",onClick:$},l.a.createElement("i",{className:"icon-angle-left"})),l.a.createElement("button",{className:"next",onClick:Z},l.a.createElement("i",{className:"icon-angle-right"})),l.a.createElement(d.a,Object.assign({},nn,{ref:y}),l.a.createElement("div",null,l.a.createElement("img",{src:"/thumbnail/"+o.thumbnailUrl,width:"100%"})),l.a.createElement("div",null,l.a.createElement("img",{src:"/thumbnail/dummyThumbnail_1.jpg",width:"100%"})),l.a.createElement("div",null,l.a.createElement("img",{src:"/thumbnail/dummyThumbnail_2.jpg",width:"100%"})))),l.a.createElement("div",{className:"center"},l.a.createElement(H,{ref:w},l.a.createElement("div",null,l.a.createElement(F,null,l.a.createElement("span",{className:"category"},o.category),l.a.createElement("h3",null,o.title),l.a.createElement("div",{class:"artist"},l.a.createElement("span",null,o.artist," ",l.a.createElement("i",{className:"ui_icon--arrow-right"})),l.a.createElement("button",null,"메시지로 문의")),l.a.createElement("div",{className:"price"},l.a.createElement("span",null,l.a.createElement("strong",null,"15,900"),"원"),l.a.createElement("p",null,"고객님들이 47,999회 구경 했어요!")),l.a.createElement("div",{className:"buttons"},l.a.createElement("button",null,l.a.createElement("i",{className:"ui_icon--star-outline"}),"즐겨찾기"),l.a.createElement("button",null,l.a.createElement("i",{className:"ui_icon--share"}),"공유하기"))),l.a.createElement(G,null,l.a.createElement("dl",null,l.a.createElement("dt",null,"수량"),l.a.createElement("dd",null,"주문시 제작")),l.a.createElement("dl",null,l.a.createElement("dt",null,"배송비"),l.a.createElement("dd",null,"3,000원")),l.a.createElement("dl",null,l.a.createElement("dt",null,"배송기간"),l.a.createElement("dd",null,"5일 이내")),l.a.createElement("dl",null,l.a.createElement("dt",null,"적립금"),l.a.createElement("dd",null,"최대 3.5%"))),l.a.createElement(X,{clickBuy:h},l.a.createElement("div",{className:"option"},l.a.createElement("span",{onClick:function(){v(!1)}},l.a.createElement("i",{className:"ui_icon--arrow-down"})),l.a.createElement(V,null,l.a.createElement("i",{className:"ui_icon--arrow-down"}),l.a.createElement("select",{name:"option"},l.a.createElement("option",{value:""},"옵션 선택"),l.a.createElement("option",{value:"기본"},"기본"),l.a.createElement("option",{value:"주문제작"},"주문제작 +3000원 "))),l.a.createElement("dl",null,l.a.createElement("dt",null,"총 작품금액"),l.a.createElement("dd",null,"0원"))),l.a.createElement("div",{className:"buttons"},l.a.createElement("button",{className:"cart"},"장바구니"),l.a.createElement("button",{className:"buy",onClick:function(){v(!0)}},"구매하기"),l.a.createElement("button",{className:"npay",onClick:function(){v(!0)}},l.a.createElement("img",{src:"/npay.svg",alt:"N Pay"})),l.a.createElement("button",{className:"message"},"메시지"),l.a.createElement("button",{className:"gift"},l.a.createElement("img",{src:"/gift.svg",alt:""})),l.a.createElement("button",{className:"bookmark"},l.a.createElement("i",{className:"ui_icon--star-outline"})))))),l.a.createElement(B,{ref:k},l.a.createElement("li",{onClick:tn(z),className:"active"},"작품정보"),l.a.createElement("li",{onClick:tn(j)},"배송 / 교환 / 환불"),l.a.createElement("li",{onClick:tn(O)},"구매후기(1)"),l.a.createElement("li",{onClick:tn(C)},"댓글")),l.a.createElement(J,{ref:z},"본 사이트는 아이디어스의 클론 사이트로써,",l.a.createElement("br",null),"UI 구현 능력의 향상 목적으로 진행된 사이트입니다.",l.a.createElement("br",null),"실제 서비스는 동작하지 않으며,",l.a.createElement("br",null),"메인페이지, 서브 화면 5페이지, 상품 페이지가 구현되었습니다.",l.a.createElement("br",null),l.a.createElement("br",null),"사이트의 UI소스와 메인 배너는 ",l.a.createElement("br",null),"아이디어스 사이트의 소스를 사용하였습니다.",l.a.createElement("br",null),"'소소화방'의 캐리커쳐 상품 썸네일 이미지는 ",l.a.createElement("br",null),"제가 아이디어스에서 셀러활동을 했을 적에",l.a.createElement("br",null),"직접 그려 판매했던 캐리커쳐 이미지들을 사용했으며, ",l.a.createElement("br",null),"그 외 상품 썸네일 이미지는 unsplash 이미지를 사용했습니다.",l.a.createElement("br",null),l.a.createElement("br",null),"비 영리적인 목적으로 만들어진 사이트이나",l.a.createElement("br",null),"만약 문제가 발생할 경우, jiindev@gmail.com으로 연락 주시면",l.a.createElement("br",null),"빠르게 대처하도록 하겠습니다."),l.a.createElement(K,null,l.a.createElement("dl",null,l.a.createElement("dt",null,"Category & Keyword"),l.a.createElement("dd",null,o.category)),l.a.createElement("ul",null,["생일선물","깜짝선물","커플선물","커플","우정","주말반짝할인","선물추천","우정선물","주문제작","부모님선물"].map((function(n,e){return l.a.createElement("li",null,"#",n)})))),l.a.createElement(M,{ref:j},l.a.createElement("ul",null,l.a.createElement(A,{ref:R},l.a.createElement("h4",{onClick:en(R)},"작품 정보제공 고시",l.a.createElement("i",{className:"icon-angle-down"})),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"종류"),l.a.createElement("td",null,o.category)),l.a.createElement("tr",null,l.a.createElement("th",null,"소재"),l.a.createElement("td",null,"신입개발자의 열정")),l.a.createElement("tr",null,l.a.createElement("th",null,"사이즈"),l.a.createElement("td",null,"주문 옵션에 따라 사이즈가 상이합니다.")),l.a.createElement("tr",null,l.a.createElement("th",null,"제조자 / 제조국"),l.a.createElement("td",null,"jiindev/MADE IN KOREA")),l.a.createElement("tr",null,l.a.createElement("th",null,"취급시 주의사항"),l.a.createElement("td",null,"주문과 동시에 제작되는 상품이므로 주문, 결제후 단순 변심에 의한 반품 및 환불은 불가능 하니 신중한 구매 부탁드립니다.")),l.a.createElement("tr",null,l.a.createElement("th",null,"품질보증기준"),l.a.createElement("td",null,"메세지를 보내주시면 안내 드리겠습니다."))))),l.a.createElement(A,{ref:T},l.a.createElement("h4",{onClick:en(T)},"판매 작가 정보",l.a.createElement("i",{className:"icon-angle-down"})),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"대표자명"),l.a.createElement("td",null,o.artist)),l.a.createElement("tr",null,l.a.createElement("th",null,"이메일"),l.a.createElement("td",null,"jiindev@gmail.com")),l.a.createElement("tr",null,l.a.createElement("th",null,"깃허브"),l.a.createElement("td",null,"https://github.com/jiindev"))))),l.a.createElement(A,{ref:L,className:"shown"},l.a.createElement("h4",{onClick:en(L)},"배송 / 교환 / 환불",l.a.createElement("i",{className:"icon-angle-down"})),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"배송비"),l.a.createElement("td",null,"기본료 : ",l.a.createElement("strong",null,"3,500원"),l.a.createElement("br",null),"배송비 무료 조건 : ",l.a.createElement("strong",null,"40,000원"),l.a.createElement("br",null))),l.a.createElement("tr",null,l.a.createElement("th",null,"제작 / 배송"),l.a.createElement("td",null,l.a.createElement("strong",null,"5일 이내"))),l.a.createElement("tr",null,l.a.createElement("th",null,"교환 / 환불"),l.a.createElement("td",null,l.a.createElement("strong",null,"조건 확인"),l.a.createElement("br",null),"문의 후 취소 가능여부 확인해 주세요."))))))),l.a.createElement(D,null,l.a.createElement("div",{className:"review",ref:O},l.a.createElement(q,null,"구매후기",l.a.createElement("button",null,"구매후기 작성하기")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("div",null,l.a.createElement("span",{className:"pic"}),l.a.createElement("div",null,l.a.createElement("span",{className:"name"},"지인"),l.a.createElement("time",{className:"date"}," 2020년 4월 20일")),l.a.createElement("span",{className:"stars"},l.a.createElement(u.a,{starNum:o.review.star}))),l.a.createElement("p",null,o.review.text))),l.a.createElement("nav",null,l.a.createElement("button",null,"1"))),l.a.createElement("div",{className:"reply",ref:C},l.a.createElement(q,null,"댓글"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("div",{className:"customer"},l.a.createElement("span",{className:"pic"}),l.a.createElement("div",null,l.a.createElement("span",{className:"name"},"지인"),l.a.createElement("p",null,"배송 어느정도 걸릴까요?"))),l.a.createElement("div",{className:"artist"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",{className:"pic"}),l.a.createElement("div",null,l.a.createElement("span",{className:"name"},o.artist),l.a.createElement("p",null,"안녕하세요~ 주문 후 배송은 3일정도 소요됩니다!"))))))),l.a.createElement("div",{className:"replyInput"},l.a.createElement("span",null),l.a.createElement("input",{type:"text",placeholder:"댓글을 남겨주세요"}),l.a.createElement("button",null,"등록"))))))),l.a.createElement(Q,{ref:N},l.a.createElement("div",{className:"center"},m[0]&&l.a.createElement("div",{className:"products"},l.a.createElement(q,null,"판매중인 다른 제품들 ",l.a.createElement("button",null,"더보기")),l.a.createElement("ul",null,m.map((function(n,e){return l.a.createElement(s.a,{noReview:!0,artistSection:!0,data:n})})))),l.a.createElement("div",{className:"artist"},l.a.createElement("div",null,l.a.createElement("span",{className:"pic"}),l.a.createElement("span",{className:"name"},o.artist),l.a.createElement(u.a,{starNum:5}),l.a.createElement("p",null,"관련 문의는 메시지로 부탁드려요~"),l.a.createElement("div",null,l.a.createElement("button",null,"♥︎︎ 작가로 추가"),l.a.createElement("button",null,"작가 홈"),l.a.createElement("button",null,"메시지 보내기")))))),l.a.createElement(W,null,l.a.createElement("div",{className:"center"},l.a.createElement("div",null,l.a.createElement(q,null,"이 작품과 함께 많이 본 다른 작품"),l.a.createElement("ul",null,x.map((function(n,e){return l.a.createElement(s.a,{noReview:!0,data:n})})))),l.a.createElement("div",null,l.a.createElement(q,null,o.category," 인기 작품",l.a.createElement("button",null,"더보기")),l.a.createElement("ul",null,E.map((function(n,e){return l.a.createElement(s.a,{noReview:!0,data:n})}))))))))}}}]);
//# sourceMappingURL=component---src-pages-product-js-1cdfd9395ffb1ed2c1e0.js.map