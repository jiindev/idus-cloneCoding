import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ProductPage from '../../components/productPage';

const TodayRecommendPage = () => (
  <Layout>
    <SEO title="| 오늘의 추천작품" />
    <ProductPage title={'오늘의 추천작품'} description={'아이디어스가 추천하는 작품을 소개 드려요.'}  bannerBackground={{color:['#d20b35', '#fda51b'],imageUrl:'/img-fullbanner01.jpg'}}/>
  </Layout>
)

export default TodayRecommendPage
