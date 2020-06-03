import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components';

const Footer = () => (
    <FooterDiv>
        <BottomMenu>
            <ul className="center">
                <li>이용약관</li>
                <li>개인정보 처리방침</li>
                <li>공지사항</li>
                <li>자주 묻는 질문</li>
                <li>이벤트</li>
                <li>입점문의</li>
                <li>About idus</li>
                <li>인재 영입</li>
            </ul>
        </BottomMenu>
    <BrandInfo>
        <div className="center">
            <span/>
                <div>
                (주) JIINDEV<br/>
                클론코딩 개발자 : 엄지인<br/>
                본 사이트는 개발능력 성장 목적으로<br/>
                클론코딩한 사이트입니다. <LinkButton href="https://www.idus.com/" target="blank">아이디어스 바로가기 <i className="icon-caret-right"/></LinkButton> <br/>
                실제 아이디어스 사이트가 아닙니다.
                <p>
                    비상업적 목적으로 만들어졌습니다.<br/>
                    문제가 발생할 경우 메일로 연락주시면 감사하겠습니다.
                </p>
            </div>
        <div>
            엄지인<br/>
            <Contact>
                <span>직무</span> 프론트엔드 개발자<br/>
                <span>연락처</span> 010-2999-0531<br/>
                <span>메일</span> jiindev@gmail.com<br/>
                <span>홈페이지</span> jiindev.github.io
            </Contact>
            <p>
                현재 프론트엔드 개발자로 구직중입니다.<br/>
                자바스크립트와 리액트 중심으로 개발하며 제게 공부할<br/>
                시간을 주신다면 원하시는 기술 스택에 맞출 수 있습니다.
            </p>
        </div>
        <div>
            Follow Me
            <SnsList>
                <li><a href="https://github.com/jiindev" target="blank">깃허브</a></li>
                <li><a href="https://jiindev.github.io/" target="blank">개인홈</a></li>
            </SnsList>
            <span/> 
            <p>
                접속이 가능한 페이지는 메인 페이지,<br/>
                각 메뉴 페이지, 상품페이지, 로그인페이지<br/>
                입니다.</p>
            <p>Copyright © 2020 jiindev All right reserved.</p>
         </div>
        </div>
    </BrandInfo>
  </FooterDiv>
)

const FooterDiv = styled.footer`
    border-top: 3px solid #dd5850;
    font-size: 12px;
    color: #666;
    line-height: 1.5;
`;
const BottomMenu = styled.div`
    border-bottom: 1px solid #efefef;
    & ul{
        display: flex;
        justify-content: center;
        & li{
            padding: 10px 15px;
            cursor: pointer;
            position: relative;
            &:after{
                content: ' | ';
                position: absolute;
                top: 10px;
                right: 0;
                cursor: text;
            }
            &:last-child:after{
                content: none;
            }
        }
    }
`;
const BrandInfo = styled.div`
    padding: 40px 0 ;
    &>div{
        display: flex;
        &>span{
            width: 128px;
            height: 75px;
            display: inline-block;
            background: url('/idus-logo-grayscale.svg') no-repeat center center / contain;
            margin-right: 50px;
        }
        & div{
            flex: 1;
        }
    }
    & p{
        font-size: 10px;
        margin-top: 10px;
    }
`;
const LinkButton = styled.a`
    font-size: 10px;
    color: #22a7af;
    padding: 3px 8px;
    border: 1px solid #acacac;
    border-radius: 3px;
    text-decoration: none;
    & i{
        vertical-align: middle;
    }
`;
const Contact = styled.div`
    margin-top: 10px;
    & span{
        min-width: 50px;
        display: inline-block;
    }
`;
const SnsList = styled.ul`
    display: flex;
    margin-top: 5px;
    & a{
        width: 36px;
        height: 36px;
        display: inline-block;
        border-radius: 10px;
        margin-right: 10px;
        text-indent: -9999px;
    }
    & li:first-child a{
        background: url('/github.jpg') no-repeat center center / contain;
    }
    & li:nth-child(2) a{
        background: url('/jiindev.jpg') no-repeat center center / contain;
    }
`;

export default Footer
