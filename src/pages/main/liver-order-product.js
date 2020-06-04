import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ProductPage from '../../components/productPage';

const LiverOrderPage = () => (
  <Layout>
    <SEO title="| 실시간 구매작품" />
    <ProductPage title={'실시간 구매작품'} description={'지금 이순간! 다른 사람들이 구매하는 작품들이에요.'} bannerBackground={{color:['#d20b35', '#fda51b'],imageUrl:'/img-fullbanner01.jpg'}}/>
  </Layout>
)

export default LiverOrderPage
