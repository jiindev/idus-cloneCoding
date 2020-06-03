import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components';

const Navigation = ({ siteTitle }) => (
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
          <li><button><i className="ui_icon--myinfo"/><br/>MY 정보</button></li>
          <li><button><i className="ui_icon--cart-new"/><br/>장바구니</button></li>
        </ul>
      </div>
    </MiddleNav>
    <BottomNav>
      <ul>
        <li>카테고리</li>
        <li className="active">홈</li>
        <li>추천 작품</li>
        <li>실시간 구매</li>
        <li>실시간 후기</li>
        <li>작가님 추천</li>
        <li>실시간 추천</li>
        <li>인기 작품</li>
        <li>스토리</li>
        <li>동영상</li>
        <li>최신 작품</li>
        <li>맞춤 추천</li>
        <li>인기 작가</li>
      </ul>
    </BottomNav>
  </Nav>
);


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
`;
const BottomNav = styled.div`
  display: flex;
  border-top: 1px solid #d9d9d9;
  font-size: 13px;
  color: #666;
  justify-content: center;
  box-shadow: 3px 3px 3px rgba(0,0,0,.2), 0 1px 0 #d9d9d9;
  position: sticky;
  top: 0;
  & ul{
    display: flex;
    & li{
      padding: 10px 11px;
      cursor: pointer;
      position: relative;
      &:after{
          content: '';
          width: 100%;
          height: 2px;
          background-color: #dd5850;
          display: block;
          position: absolute;
          bottom:0;
          left:0;
          opacity: 0;
      }
      &.active{
        color: #dd5850;
        &:after{
          opacity: 1;
        }
      }
      &:hover{
        color: #dd5850;
      }
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
`;

export default Navigation;
