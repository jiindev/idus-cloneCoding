import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Subpage from '../../components/Subpage';

const TodayRecommendPage = () => (
  <Layout>
    <SEO title=" | 오늘의 추천작품" />
    <Subpage title={'오늘의 추천작품'} description={'제이디어스가 추천하는 작품을 소개 드려요.'}  bannerBackground={{color:['#5283db', '#fda51b'],imageUrl:'/img-fullbanner01.jpg'}}/>
  </Layout>
)

export default TodayRecommendPage
