import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ProductPage from '../../components/productPage';

const RecommendArtistPage = () => (
  <Layout>
    <SEO title="작가님 추천작품" />
    <ProductPage title={'작가님 추천작품'} description={'작가님이 직접 비용을 내고 강력하게 추천하는 작품이에요. (오전, 오후 6시 변경)'} bannerBackground={{color:['#62258a', '#fc0f77'],imageUrl:'/img-fullbanner01.jpg'}}/>
  </Layout>
)

export default RecommendArtistPage
