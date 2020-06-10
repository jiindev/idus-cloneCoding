import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Subpage from '../../components/Subpage';

const LiveRecommendPage = () => (
  <Layout>
    <SEO title=" | 실시간 추천작품" />
    <Subpage title={'실시간 추천작품'} description={'작가님이 직접 비용을 내고 자신있게 추천하는 작품이에요.'} bannerBackground={{color:['#62258a', '#5283db'],imageUrl:'/img-fullbanner01.jpg'}}/>
  </Layout>
)

export default LiveRecommendPage
