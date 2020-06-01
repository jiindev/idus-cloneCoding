import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {Link} from 'gatsby';

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <nav>
        <div>
          <ul>
            <li>로그인</li>
            <li>회원가입</li>
            <li>고객센터</li>
          </ul>
        </div>
        <div>
          <span>로고</span>
          <ul>
            <li>작품</li>
            <li>금손 클래스</li>
          </ul>
          <input type="text" name="search" id="search"/>
          <span>1. 녹챠방</span>
          <ul>
            <li>MY 정보</li>
            <li>장바구니</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>홈</li>
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
        </div>
      </nav>
      <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer>
          <ul>
            <li>이용약관</li>
            <li>개인정보 처리방침</li>
            <li>공지사항</li>
            <li>자주 묻는 질문</li>
            <li>이벤트</li>
            <li>입점문의</li>
            <li>About idus</li>
            <li>인재 영입</li>
          </ul>
          <div>
            <div>
            (주) 백패커
            대표이사 : 김동환
            서울특별시 마포구 동교로 19길 12
            사업자 등록번호 : 107-87-83297 <Link to="#">사업자 정보확인</Link> 
            통신판매업신고 : 2015-서울마포-0440
            <p>
            아이디어스는 통신판매중개자이며 통신판매의 당사자가 아닙니다.<br/>
            따라서 아이디어스는 상품 거래정보 및 거래에 대하여 책임을 지지 않습니다.
            </p>
            </div>
            <div>
            고객센터 (주 7일, 오전 10시 ~ 저녁 10시까지)
            카카오톡 아이디어스
            대표번호1668-3651
            메일support@backpac.kr
            제휴문의biz@backpac.kr
            <p>
              아이디어스 이용 중 궁금하신 점이 있으신가요?
              메일 또는 플러스친구 `아이디어스`로 연락해주세요.
              최선을 다해 도와드리겠습니다.
              </p>
            </div>
            <div>
              Follow Us
              <ul>
                <li><span>페이스북</span></li>
                <li><span>인스타그램</span></li>
                <li><span>카카오톡</span></li>
                <li><span>네이버</span></li>
                <li><span>트위터</span></li>
              </ul>
              구매안전거래서비스 <Link to="#">가입사실 확인</Link> 
              <span/> <p>고객님은 현금 등으로 결제시 당사에서 가입한 구매안전서비스를 이용하실 수 있습니다.</p>
              <p>Copyright © 2020 Backpackr All right reserved.</p>
            </div>
          </div>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
