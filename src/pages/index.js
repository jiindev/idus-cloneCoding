import React, {useRef, useCallback, useEffect} from "react"
import styled from 'styled-components';
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductSecion from "../components/productSection";
import Banner from "../components/banner";
import {getDummyDataRandomly} from '../data/data';

const IndexPage = () => {
  const sideNavMenu = useRef();
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const section4Ref = useRef();
  const section5Ref = useRef();
  const section6Ref = useRef();

  const onClickNav = useCallback( (sectionRef) => () => {
    window.scrollTo(0, sectionRef.current.offsetTop+1);
  }, []);

  const onScroll = useCallback(() => {
    //sideNav 나타나기
    if(window.scrollY > section1Ref.current.offsetTop){
      sideNavMenu.current.classList.add('show');
    }else sideNavMenu.current.classList.remove('show');
    //스크롤에 따라서 active 클래스 추가 삭제
    sideNavMenu.current.querySelector('li.active').classList.remove('active');
    if(window.scrollY > section6Ref.current.offsetTop){
      sideNavMenu.current.querySelector('li:nth-child(6)').classList.add('active');
    }else if(window.scrollY > section5Ref.current.offsetTop){
      sideNavMenu.current.querySelector('li:nth-child(5)').classList.add('active');
    }else if(window.scrollY > section4Ref.current.offsetTop){
      sideNavMenu.current.querySelector('li:nth-child(4)').classList.add('active');
    }else if(window.scrollY > section3Ref.current.offsetTop){
      sideNavMenu.current.querySelector('li:nth-child(3)').classList.add('active');
    }else if(window.scrollY > section2Ref.current.offsetTop){
      sideNavMenu.current.querySelector('li:nth-child(2)').classList.add('active');
    }else{
      sideNavMenu.current.querySelector('li:nth-child(1)').classList.add('active');
    }
  }, []);
  useEffect(()=>{
      window.addEventListener('scroll', onScroll);
      return () => {
        window.removeEventListener('scroll', onScroll);
      }
  }, []);

  return(
    <Layout>
    <SEO title=" - 아이디어스 클론코딩 사이트" />
    <Banner/>
    
    <div className="center">
    <SideNav>
       <ul ref={sideNavMenu}>
        <li onClick={onClickNav(section1Ref)} className="active"><i className="ui_icon--medal"/><span>추천 작품</span></li>
        <li onClick={onClickNav(section2Ref)}><i className="ui_icon--current-list"/><span>실시간 구매</span></li>
        <li onClick={onClickNav(section3Ref)}><i className="ui_icon--pencil"/><span>실시간 후기</span></li>
        <li onClick={onClickNav(section4Ref)}><i className="ui_icon--advert"/><span>작가님 추천</span></li>
        <li onClick={onClickNav(section5Ref)}><i className="ui_icon--advert"/><span>실시간 추천</span></li>
        <li onClick={onClickNav(section6Ref)}><i className="ui_icon--thunder"/><span>최신 작품</span></li>
      </ul>
    </SideNav>
      <ProductSecion title="오늘의 추천작품" iconClass="ui_icon--medal" data={getDummyDataRandomly(50)} link="today-recommend-product" ref={section1Ref}/>
      <ProductSecion title="실시간 구매작품" iconClass="ui_icon--current-list" data={getDummyDataRandomly(50)} link="liver-order-product" ref={section2Ref}/>
      <ProductSecion title="실시간 후기" iconClass="ui_icon--pencil" data={getDummyDataRandomly(50)} ref={section3Ref}/>
      <ProductSecion title="작가님 추천작품" iconClass="ui_icon--advert" data={getDummyDataRandomly(50)} link="recommend-artist-product" ref={section4Ref}/>
      <ProductSecion title="실시간 추천작품" iconClass="ui_icon--advert" data={getDummyDataRandomly(50)} link="live-recommend-product" ref={section5Ref}/>
      <ProductSecion title="최신 작품" iconClass="ui_icon--thunder" data={getDummyDataRandomly(50)} link="new-product" ref={section6Ref}/>
    </div>
  </Layout>
  );
}

const SideNav = styled.nav`
  position: fixed;
  max-width: 1056px;
  width: 100%;
  background-color: red;
  top: 50px;
  z-index: 50;
    & ul{
      position:absolute;
      left: -50px;
      display: none;
      flex-direction: column;
      background: #fff;
      border: 1px solid #d9d9d9;
      box-shadow: 1px 1px 3px #d9d9d9;
      width: 34px;
      &.show{
        display: flex;
      }
    }
    & li{
      font-size: 20px;
      height: 34px;
      line-height: 34px;
      box-sizing: border-box;
      width: 34px;
      cursor: pointer;
      display: inline-block;
      &.active{
        color: white;
        background-color: #5283db;
      }
      &:hover{
        border: 1px solid #5283db;
        background-color: white;
        color: #5283db;
        width: 105px;
        & span{
          display: inline-block;
        }
      }
    }
    & i{
      width: 34px;
      display: inline-block;
      text-align: center;
      vertical-align: middle;
    }
    & span{
      display: none;
      font-size: 12px;
    }
    @media only screen and (max-width: 1056px) {
      display: none;
    }
`;

export default IndexPage
