import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components';

const Navigation = ({ siteTitle }) => {
  const path = typeof window !== 'undefined' ? window.location.pathname : '';

  return (
    <Nav>
    <TopNav>
      <div className="center">
        <span>아이디어스 앱 설치하기</span>
        <ul>
          <li>로그인</li>
          <li>회원가입</li>
          <li>고객센터</li>
        </ul>
      </div>
    </TopNav>
    <MiddleNav>
      <div className="center">
        <Link to="/"><Logo>로고</Logo></Link>
        <ul className="pageMenu">
          <li>작품</li>
        </ul>
        <Search>
          <input type="text" name="search" id="search" placeholder="작품, 작가 검색"/>
          <button>검색</button>
        </Search>
        <KeywordRanking><span>1.</span> 녹챠방</KeywordRanking>
        <ul className="myMenu">
          <li><button><i className="ui_icon--myinfo"/><br/><span>MY 정보</span></button></li>
          <li><button><i className="ui_icon--cart-new"/><br/><span>장바구니</span></button></li>
        </ul>
      </div>
    </MiddleNav>
    <BottomNav>
      <ul>
        <Menu>카테고리</Menu>
        <Menu activeMenu={path==='/'}><Link to="/">홈</Link></Menu>
        <Menu activeMenu={path==='/main/today-recommend-product'}><Link to="/main/today-recommend-product">추천 작품</Link></Menu>
        <Menu activeMenu={path==='/main/liver-order-product'}><Link to="/main/liver-order-product">실시간 구매</Link></Menu>
        <Menu>실시간 후기</Menu>
        <Menu activeMenu={path==='/main/recommend-artist-product'}><Link to="/main/recommend-artist-product">작가님 추천</Link></Menu>
        <Menu activeMenu={path==='/main/live-recommend-product'}><Link to="/main/live-recommend-product">실시간 추천</Link></Menu>
        <Menu>인기 작품</Menu>
        <Menu>스토리</Menu>
        <Menu>동영상</Menu>
        <Menu activeMenu={path==='/main/new-product'}><Link to="/main/new-product">최신 작품</Link></Menu>
        <Menu>맞춤 추천</Menu>
        <Menu>인기 작가</Menu>
      </ul>
    </BottomNav>
    <MobileNav>
        <ul className="myMenu">
          <li><i className="ui_icon--myinfo"/><br/><span>작품</span></li>
          <li><i className="ui_icon--class"/><br/><span>금손 클래스</span></li>
          <li><i className="ui_icon--search"/><br/><span>검색</span></li>
          <li><i className="ui_icon--category"/><br/><span>카테고리</span></li>
          <li><i className="ui_icon--myinfo"/><br/><span>내 정보</span></li>
        </ul>
    </MobileNav>
  </Nav>
  );
};


const Nav = styled.nav`
  width: 100%;
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
  &>div{
    display: flex;
    align-items: center;
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
    border: 3px solid #dd5850;
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
    background-color: #dd5850;
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
      width: 210px;
    }
    & button{
      width: 60px;
      padding: 0;
    }
  }
  @media only screen and (max-width: 720px) {
    flex:1;
    display: flex;
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
  }
`;
const KeywordRanking = styled.div`
  font-size: 14px;
  color: #666;
  margin: 0 30px;
  & span{
    color: #dd5850;
    font-weight: 700;
  }
  @media only screen and (max-width: 820px) {
    margin: 0 15px;
  }
  @media only screen and (max-width: 720px) {
    display: none;
  }
`;
const BottomNav = styled.div`
  display: flex;
  border-top: 1px solid #d9d9d9;
  font-size: 13px;
  color: #666;
  justify-content: center;
  box-shadow: 0 4px 4px rgba(0,0,0,.2), 0 1px 0 #d9d9d9;
  position: sticky;
  top: 0;
  z-index: 30;
  overflow-x: auto;
  position: relative;
  width: 100%;
  &::-webkit-scrollbar { width: 0 !important; height:0 !important }
  @media only screen and (max-width: 720px) {
    width: 100%;
    display: block;
    touch-action: pan-x;
    overflow-x: auto;
    position: relative;
    &::-webkit-scrollbar { width: 0 !important; height:0 !important }
    & ul{
      width: 850px;
      touch-action: pan-x;
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
      background-color: #dd5850;
      display: block;
      position: absolute;
      bottom:0;
      left:0;
      opacity: ${props=>props.activeMenu ? 1 : 0};
  }
  &:hover{
    color: ${props=>props.activeMenu  ? '#dd5850' : '#dd5850'};
  }
  @media only screen and (max-width: 905px) {
    padding: 10px 5px;
    font-size: 12px;
  }
  @media only screen and (max-width: 720px) {
    padding: 10px 11px;
    font-size: 13px;
    &:first-child{
       display: none;
    }
  }
`;
const Logo = styled.span`
  display: inline-block;
  width: 116px;
  height: 68px;
  background: url('/idus-logo.svg') no-repeat center center / contain;
  margin: 5px 0;
  text-indent: -99999px;
  cursor: pointer;
  @media only screen and (max-width: 720px) {
    width: 64px;
    height: 36px;
    margin: 5px 10px 5px 0;
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
