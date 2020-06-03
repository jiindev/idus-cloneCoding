import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ProductPage from '../../components/productPage';

const LiveRecommendPage = () => (
  <Layout>
    <SEO title="작가님 추천작품" />
    <ProductPage title={'실시간 추천작품'} description={'작가님이 직접 비용을 내고 자신있게 추천하는 작품이에요.'} bannerBackground={{color:['#62258a', '#fc0f77'],imageUrl:'/img-fullbanner01.jpg'}}/>
  </Layout>
)

export default LiveRecommendPage
