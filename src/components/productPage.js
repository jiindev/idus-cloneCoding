import React, {memo, useEffect, useCallback} from "react";
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from 'styled-components';
import Header from "./header";
import {ProductList} from './productSection';
import ProductItem from './productItem';

const ProductPage = memo(({ title, description, data, bannerBackground }) => (
   <>
    <Header title={title} description={description} bannerBackground={bannerBackground}/>
    <div className="center">
        <ProductList>
            {data.map((v, i)=>{
                return <ProductItem data={v}/>
            })}
        </ProductList>
    </div>
   </>
));

ProductPage.propTypes = {
  data: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
}

ProductPage.defaultProps = {
  data: [{
    thumbnailUrl: 'jeje.jpeg',
    artist:'지수', 
    title:'화난 고양이 제제', 
    review:{
      star:5, 
      text:'너무 귀엽고 앙큼한 고양이에...'
    }
  }],
}

export default ProductPage
