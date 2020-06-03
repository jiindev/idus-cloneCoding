import React, {memo, useEffect, useCallback} from "react";
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from 'styled-components';
import Star from "./star"

const ProductItem = memo(({ data }) => (
    <li>
        <div>
        <Thumbnail thumbnailUrl={data && data.thumbnailUrl}><span/></Thumbnail>
        <Text>
            <div className="title">
            <span>{data && data.artist}</span>
            <h4>{data && data.title}</h4>
            </div>
            <div className="review">
            <Star starNum={data && data.review.star}/>
            {data && data.review.text}
            </div>
        </Text>
        </div>
    </li>
));

const Thumbnail = styled.div`
    width: 100%;
    height: 200px;
    overflow: hidden;
  & span{
    display: block;
    width: 100%;
    height: 100%;
    background: ${props=>`url('/thumbnail/${props.thumbnailUrl}') no-repeat center center / cover`};
    transition: all .2s ease;
  }
  &:hover span{
    transform: scale(1.1);
  }
`;
const Text = styled.div`
  color: #333;
  &>div{
    padding: 10px;
    box-sizing: border-box;
  }
  & div.title{
    height: 96px;
    border-bottom: 1px solid #d9d9d9;
    & span{
      font-size: 12px;
      color: #999;
      padding-bottom: 3px;
      display: inline-block;
    }
  }
  & div.review{
    font-size: 12px;
    color: #666;
  }
`;

ProductItem.propTypes = {
  data: PropTypes.object,
}

ProductItem.defaultProps = {
  data: {
    thumbnailUrl: 'jeje.jpeg',
    artist:'지수', 
    title:'화난 고양이 제제', 
    review:{
      star:5, 
      text:'너무 귀엽고 앙큼한 고양이에...'
    }
  },
}

export default ProductItem
