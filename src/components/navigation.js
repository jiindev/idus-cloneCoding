import { Link } from "gatsby"
import React, {memo, useState, useEffect, useRef, useCallback} from "react"
import styled from 'styled-components';
import KeywordRanking from './keywordRanking';
import RecommendMenu from "./recommendMenu";
import MobileKeywordRanking from "./mobileKeywordRanking";

const Navigation = memo(() => {
  const path = typeof window !== 'undefined' ? window.location.pathname : '';
  const [searchFocus, setSearchFocus] = useState(false);
  const bottomNavRef = useRef();
  const middleNavRef = useRef();
  const bottomHeightRef = useRef(); 
  const goTopButtonRef = useRef();

  const onScroll = useCallback(() => {
    if(window.scrollY > middleNavRef.current.offsetTop+middleNavRef.current.clientHeight){
      if(path!=='/product'){
        bottomNavRef.current.style.position = 'fixed';
        bottomHeightRef.current.style.height = '34px';
      }
      goTopButtonRef.current.classList.add('show');
    }else{
      if(path!=='/product'){
        bottomNavRef.current.style.position = 'relative';
        bottomHeightRef.current.style.height = '0px';
      }
      goTopButtonRef.current.classList.remove('show');
    }
  }, []);
  useEffect(()=>{
      window.addEventListener('scroll', onScroll);
      return () => {
        window.removeEventListener('scroll', onScroll);
      }
  }, []);
  const onClickGoTop = () => {
    window.scrollTo(0, 0);
  }
  const onFocusSearch = () => {
    setSearchFocus(true);
  }
  const onBlurSearch = () => {
    setSearchFocus(false);
  }


  return (
    <Nav>
      <GoTopButton ref={goTopButtonRef} onClick={onClickGoTop}><i className="icon-angle-up"/><span>TOP</span></GoTopButton>
    <TopNav>
      <div className="center">
        <span>본 사이트는 아이디어스의 클론코딩 사이트입니다. 정식 사이트가 아닙니다.</span>
        <ul>
          <li>로그인</li>
          <li>회원가입</li>
          <li>고객센터</li>
        </ul>
      </div>
    </TopNav>
    <MiddleNav ref={middleNavRef}>
      <div className="center">
        <Link to="/"><Logo>로고</Logo></Link>
        <ul className="pageMenu">
          <li>작품</li>
        </ul>
        <Search className={searchFocus ? "focus" : ""}>
          <input type="text" name="search" id="search" placeholder="작품, 작가 검색" onFocus={onFocusSearch} onBlur={onBlurSearch}/>
          <button>검색</button>
        </Search>
        <KeywordRanking/>
        <ul className="myMenu">
          <li><button><i className="ui_icon--myinfo"/><br/><span>MY 정보</span></button></li>
          <li><button><i className="ui_icon--cart-new"/><br/><span>장바구니</span></button></li>
        </ul>
      </div>
      {searchFocus && <MobileKeywordRanking/>}
    </MiddleNav>
    <BottomNav ref={bottomNavRef} show={path !== '/product'}>
      <RecommendMenu path={path}/>
      <div class="menu">
        <ul>
          <Category>카테고리
            <div>
              <ul>
                {['음료 (커피, 차 등)', '디저트, 베이커리, 떡', '농축수산물', '수제 반찬', '그 외 수제 먹거리', '전통주', '문구, 팬시', '휴대폰 케이스', '전자기기 관련', '꽃 (생화, 드라이, 다육 등)'].map((v, i)=>{
                  return (
                    <li>{v}<i className="ui_icon--arrow-right"/></li>
                  )
                })}
              </ul>
              <ul>
                {['음료 (커피, 차 등)', '디저트, 베이커리, 떡', '농축수산물', '수제 반찬', '그 외 수제 먹거리', '전통주', '문구, 팬시', '휴대폰 케이스', '전자기기 관련', '꽃 (생화, 드라이, 다육 등)'].map((v, i)=>{
                  return (
                    <li>{v}</li>
                  )
                })}
              </ul>
              <ul>
                {['음료 (커피, 차 등)', '디저트, 베이커리, 떡', '농축수산물', '수제 반찬', '그 외 수제 먹거리', '전통주', '문구, 팬시', '휴대폰 케이스', '전자기기 관련', '꽃 (생화, 드라이, 다육 등)'].map((v, i)=>{
                  return (
                    <li>{v}</li>
                  )
                })}
              </ul>
              <ul>
                {['음료 (커피, 차 등)', '디저트, 베이커리, 떡', '농축수산물', '수제 반찬', '그 외 수제 먹거리', '전통주', '문구, 팬시', '휴대폰 케이스', '전자기기 관련', '꽃 (생화, 드라이, 다육 등)'].map((v, i)=>{
                  return (
                    <li>{v}</li>
                  )
                })}
              </ul>
            </div>
          </Category>
          <Link to="/"><Menu activeMenu={path==='/'}>홈</Menu></Link>
          <Link to="/main/today-recommend-product"><Menu activeMenu={path==='/main/today-recommend-product'}>추천 작품</Menu></Link>
          <Link to="/main/liver-order-product"><Menu activeMenu={path==='/main/liver-order-product'}>실시간 구매</Menu></Link>
          <Menu>실시간 후기</Menu>
          <Link to="/main/recommend-artist-product"><Menu activeMenu={path==='/main/recommend-artist-product'}>작가님 추천</Menu></Link>
          <Link to="/main/live-recommend-product"><Menu activeMenu={path==='/main/live-recommend-product'}>실시간 추천</Menu></Link>
          <Menu>인기 작품</Menu>
          <Menu>스토리</Menu>
          <Menu>동영상</Menu>
          <Link to="/main/new-product"><Menu activeMenu={path==='/main/new-product'}>최신 작품</Menu></Link>
          <Menu>맞춤 추천</Menu>
          <Menu>인기 작가</Menu>
        </ul>
      </div>
    </BottomNav>
    <div ref={bottomHeightRef}></div>
    
    {path !== '/product' && <MobileNav>
        <ul className="myMenu">
          <li><i className="ui_icon--myinfo"/><br/><span>작품</span></li>
          <li><i className="ui_icon--class"/><br/><span>금손 클래스</span></li>
          <li><i className="ui_icon--search"/><br/><span>검색</span></li>
          <li><i className="ui_icon--category"/><br/><span>카테고리</span></li>
          <li><i className="ui_icon--myinfo"/><br/><span>내 정보</span></li>
        </ul>
    </MobileNav>}
  </Nav>
  );
});


const Nav = styled.nav`
  width: 100%;
`;

const GoTopButton = styled.span`
  width: 40px;
  height: 38px;
  text-align: center;
  z-index: 50;
  background-color: #5283db;
  color: white;
  position: fixed;
  bottom: 236px;
  right: 0;
  font-size: 10px;
  display: none;
  & *{
    display: block;
  }
  & i{
    font-size: 18px;
    font-weight: bold;
  }
  &.show{
    display: inline-block;
  }
  @media only screen and (max-width: 720px) {
    height: 40px;
    border-radius: 40px;
    border: 1px solid #acacac;
    background: rgba(255,255,255,0.8);
    color: #acacac;
    bottom: 70px;
    right: 10px;
    & i{
      line-height: 34px;
    }
    & span{
      display: none;
    }
  }
`;

const TopNav = styled.div`
  background-color: #f5f5f5;
  color: #666;
  border-bottom: 1px solid #d9d9d9;
  font-size: 11px;
  padding: 12px 0;
  &>div{
    display: flex;
  }
  & ul{
    display: flex;
    margin: 0 0 0 auto;
    & li{
      padding: 0px 15px;
    }
  }
  @media only screen and (max-width: 720px) {
    display: none;
  }
`;
const MiddleNav = styled.div`
  &>div:first-child{
    display: flex;
    align-items: center;
    position: relative;
    padding: 0;
  }
  & ul{
    display: flex;
    &.pageMenu{
      & li{
        font-size: 18px;
        color: #666;
        padding: 0 30px;
      }
    }
    &.myMenu{
      margin: 0 0 0 auto;
      & button{
        color: #666;
        background: none;
        border: none;
        font-size: 10px;
        margin: 0 8px;
        cursor: pointer;
        outline: none;
        & i{
          font-size: 24px;
          margin-bottom: 3px;
          display: inline-block;
        }
      }
    }
  }
  @media only screen and (max-width: 720px) {
    & ul{
      &.pageMenu{
        display: none;
      }
      &.myMenu{
        & li:first-child{
          display: none;
        }
        & button{
          & span{
            display: none;
          }
        }
      }
    }
  }
`;
const Search = styled.div`
  & input{
    border-radius: 3px 0 0 3px;
    border: 3px solid #5283db;
    height: 48px;
    width: 250px;
    box-sizing: border-box;
    padding: 15px 10px;
    font-size: 16px;
    border-right: 0;
    outline: none;
    &::placeholder {
      color: #acacac;
    }
  }
  & button{
    font-size: 16px;
    background-color: #5283db;
    height: 48px;
    border: none;
    border-radius: 0 3px 3px 0;
    padding: 0 30px;
    color: white;
    font-weight: 500;
    outline: none;
    cursor: pointer;
    box-sizing: border-box;
  }
  @media only screen and (max-width: 820px) {
    & input{
      width: 200px;
    }
    & button{
      width: 60px;
      padding: 0;
    }
  }
  @media only screen and (max-width: 720px) {
    flex:1;
    display: flex;
    width: auto;
    & input{
      width: 100%;
      height: 30px;
      font-size: 14px;
    }
    & button{
      height: 36px;
      font-size: 12px;
      display: block;
      padding: 0;
      width: 50px;
    }
    &.focus{
      position: absolute;
      width: 100%;
      box-sizing: border-box;
      padding: 0 10px;
    }
  }
`;

const BottomNav = styled.div`
  position: relative;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  background-color: white;
  &>div.menu{
    display: flex;
    border-top: 1px solid #d9d9d9;
    font-size: 13px;
    color: #666;
    justify-content: center;
    box-shadow: 0 4px 4px rgba(0,0,0,.2), 0 1px 0 #d9d9d9;
    box-sizing: border-box;
    z-index: 30;
    position: relative;
    width: 100%;
    &::-webkit-scrollbar { width: 0 !important; height:0 !important }
  }
  
  @media only screen and (max-width: 720px) {
    display: ${props=>props.show ? 'block' : 'none'};
    &>div.menu{
      width: 100%;
      display: block;
      touch-action: pan-x;
      overflow-x: auto;
      position: relative;
      &::-webkit-scrollbar { width: 0 !important; height:0 !important }
      & ul{
        width: 850px;
        touch-action: pan-x;
        padding-right: 30px;
      }
    }
  }
`;
const Menu = styled.li`
  padding: 10px 11px;
  cursor: pointer;
  position: relative;
  display: inline-block;
  &:after{
      content: '';
      width: 100%;
      height: 2px;
      background-color: #5283db;
      display: block;
      position: absolute;
      bottom:0;
      left:0;
      opacity: ${props=>props.activeMenu ? 1 : 0};
  }
  &:hover{
    color: #5283db;
  }
  @media only screen and (max-width: 920px) {
    padding: 10px 5px;
    font-size: 12px;
  }
  @media only screen and (max-width: 720px) {
    padding: 10px 11px;
    font-size: 13px;
  }
`;
const Category = styled(Menu)`
  position: relative;
  & div{
    position: absolute;
    display: none;
    z-index: 50;
    background-color: white;
    top: 33px;
    left: -50px;
    border: 1px solid #d9d9d9;
    flex-direction: row;
    width: 848px;
    & ul{
      display: flex;
      flex-direction: column;
      color: #333;
      width: 25%;
      margin: 20px 0;
      
      border-right: 1px solid #d9d9d9;
      &:last-child{
        border: none;
      }
      & li{
        padding: 5px 10px;
        margin: 5px 20px;
        font-size: 12px;
        box-sizing: border-box;
        position: relative;
        & i{
          font-size: 10px;
          position: absolute;
          right: 8px;
          top: 6px;
          display: none;
        }
        &:hover{
          background-color: #dfe9f7;
          & i{
            display: inline;
          }
        }
        
      }
    }
  }
  &:hover div{
    display: flex;
  }
  @media only screen and (max-width: 1056px) {
    position: static;
    & div{
      width: 100vw;
      left: 0;
      top: 32px;
    }
  }
  @media only screen and (max-width: 720px) {
    display: none;
  }
`;
const Logo = styled.span`
  display: inline-block;
  width: 116px;
  height: 68px;
  background: url('/idus-logo.svg') no-repeat center center / contain;
  margin: 5px 0 5px 10px;
  text-indent: -99999px;
  cursor: pointer;
  @media only screen and (max-width: 720px) {
    width: 64px;
    height: 36px;
    margin: 5px 10px;
  }
`;

 const MobileNav = styled.div`
 width: 100%;
 position: fixed;
 left: 0;
 bottom: 0;
 background: white;
 padding: 5px 0;
 border-top: 1px solid #d9d9d9;
 z-index: 60;
 color: #666;
 display: none;
  &>ul{
    display: flex;
    & li{
      width: 20%;
      text-align: center;
      cursor: pointer;
      & i{
        font-size: 20px;
      }
      & span{
        font-size: 9px;
      }
    }
  }
  @media only screen and (max-width: 720px) {
    display: block;
  }
 `;

export default Navigation;
