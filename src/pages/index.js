import React from "react"
import { Link } from "gatsby"
import styled, {createGlobalStyle} from 'styled-components';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ProductSecion from "../components/productSection";

const IndexPage = () => {
  const dummyData = [
    {
      thumbnailUrl: 'jeje.jpeg',
      artist:'지수', 
      title:'화난 고양이 제제', 
      review:{
        star:5, 
        text:'너무 귀엽고 앙큼한 고양이에...'
      }
    },
    {
      thumbnailUrl: 'jeje.jpeg',
      artist:'조바티', 
      title:'카드지갑 미니 그린', 
      review:{
        star:3, 
        text:'받자마자 정말 감탄을 금치 못했...'
      }
    },
    {
      thumbnailUrl: 'jeje.jpeg',
      artist:'조바티', 
      title:'카드지갑 미니 그린', 
      review:{
        star:3, 
        text:'받자마자 정말 감탄을 금치 못했...'
      }
    },
    {
      thumbnailUrl: 'jeje.jpeg',
      artist:'조바티', 
      title:'카드지갑 미니 그린', 
      review:{
        star:3, 
        text:'받자마자 정말 감탄을 금치 못했...'
      }
    },
    {
      thumbnailUrl: 'jeje.jpeg',
      artist:'조바티', 
      title:'카드지갑 미니 그린', 
      review:{
        star:3, 
        text:'받자마자 정말 감탄을 금치 못했...'
      }
    },
    {
      thumbnailUrl: 'jeje.jpeg',
      artist:'조바티', 
      title:'카드지갑 미니 그린', 
      review:{
        star:3, 
        text:'받자마자 정말 감탄을 금치 못했...'
      }
    },
    {
      thumbnailUrl: 'jeje.jpeg',
      artist:'조바티', 
      title:'카드지갑 미니 그린', 
      review:{
        star:3, 
        text:'받자마자 정말 감탄을 금치 못했...'
      }
    },
    {
      thumbnailUrl: 'jeje.jpeg',
      artist:'조바티', 
      title:'카드지갑 미니 그린', 
      review:{
        star:3, 
        text:'받자마자 정말 감탄을 금치 못했...'
      }
    },
    {
      thumbnailUrl: 'jeje.jpeg',
      artist:'조바티', 
      title:'카드지갑 미니 그린', 
      review:{
        star:3, 
        text:'받자마자 정말 감탄을 금치 못했...'
      }
    },
    {
      thumbnailUrl: 'jeje.jpeg',
      artist:'조바티', 
      title:'카드지갑 미니 그린', 
      review:{
        star:3, 
        text:'받자마자 정말 감탄을 금치 못했...'
      }
    }
  ];
  return(
    <Layout>
    <SEO title="Home" />
    <Banner>배너</Banner>
    <ProductSecion title="오늘의 추천작품" iconClass="ui_icon--medal" data={dummyData}/>
    <ProductSecion title="실시간 구매작품" iconClass="ui_icon--current-list" data={dummyData}/>
    <ProductSecion title="실시간 후기" iconClass="ui_icon--pencil" data={dummyData}/>
    <ProductSecion title="작가님 추천작품" iconClass="ui_icon--advert" data={dummyData}/>
    <ProductSecion title="실시간 추천작품" iconClass="ui_icon--advert" data={dummyData}/>
    <ProductSecion title="최신 작품" iconClass="ui_icon--thunder" data={dummyData}/>
  </Layout>
  );
}

const Banner = styled.div`
  width: 100%;
  height: 480px;
  background-color: lightpink;
  position: relative;
  z-index: 0;
`;



export default IndexPage
