import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ProductPage from '../../components/productPage';

const NewProductPage = () => (
  <Layout>
    <SEO title="최신 작품" />
    <ProductPage title={'최신 작품'} description={'지금 새로 등록된 작품들이에요.'}  bannerBackground={{color:['#d20b35', '#fda51b'],imageUrl:'/img-fullbanner01.jpg'}}/>
  </Layout>
)

export default NewProductPage
