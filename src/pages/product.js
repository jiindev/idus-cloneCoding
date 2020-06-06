import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components';

const ProductDetail = () => (
  <Layout>
    <SEO title="| 오늘의 추천작품" />
    <Wrap>
        <ProductInfo>
            <div>
gg
            </div>
            <div>
gg
            </div>
        </ProductInfo>
        <ArtistInfo>
            gg
        </ArtistInfo>
    </Wrap>
  </Layout>
)

const Wrap = styled.div`

`;

const ProductInfo = styled.div`
    display: flex;
    & div:first-child{
        width: 70%;
        background-color: red;
        height: 1500px;
    }
    & div:nth-child(2){
        background-color: blue;
        width: 30%;
        height: 300px;
        position: sticky;
        top:0;
    }
`;
const ArtistInfo = styled.div`
    height: 500px;
    background-color: green;
`;

export default ProductDetail
