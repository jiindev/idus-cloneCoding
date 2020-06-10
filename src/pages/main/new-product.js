import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Subpage from '../../components/subPage'

const NewProductPage = () => (
  <Layout>
    <SEO title=" | 최신 작품" />
    <Subpage title={'최신 작품'} description={'지금 새로 등록된 작품들이에요.'}  bannerBackground={{color:['#5283db', '#fda51b'],imageUrl:'/img-fullbanner01.jpg'}}/>
  </Layout>
)

export default NewProductPage
