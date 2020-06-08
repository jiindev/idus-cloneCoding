import React, {memo, useEffect, useCallback} from "react";
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from 'styled-components';
import Star from "./star"

const ProductItem = memo(({ data, noReview, artistSection }) => (
    <ProductLi artistSection={artistSection}>
        <div>
        <Thumbnail thumbnailUrl={data && data.thumbnailUrl} artistSection={artistSection}><span/></Thumbnail>
        <Text>
            <div className="title">
              <span>{data && data.artist}</span>
              <h4>{data && data.title}</h4>
            </div>
            { !noReview &&
                <div className="review">
                  <Star starNum={data && data.review.star}/>
                  {data && data.review.text}
                </div>
            }
        </Text>
        </div>
    </ProductLi>
));

const ProductLi = styled.li`
      width: ${props=>props.artistSection ? '25%' : '20%'};
      font-size: 14px;
      &>div{
        margin: 8px;
        border: 1px solid #d9d9d9;
        border-radius: 5px;
        overflow: hidden;
        background-color: #f8f9fb;
      }
      @media only screen and (max-width: 1056px) {
        width: ${props=>props.artistSection ? '25%' : '33.3%'};
      }
      @media only screen and (max-width: 720px) {
        width: 50%;
        &>div{
          margin: 8px 4px;
        }
      }
`;

const Thumbnail = styled.div`
    width: 100%;
    overflow: hidden;
    height: ${props=>props.artistSection ? '150px' : '200px'};
  & span{
    display: block;
    width: 100%;
    height: 100%;
    background: ${props=>`url('/thumbnail/${props.thumbnailUrl}') no-repeat center center / cover`};
    transition: all .5s ease;
  }
  &:hover span{
    transform: scale(1.1);
  }
  @media only screen and (max-width: 720px) {
    height: 200px;
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
    & span{
      font-size: 12px;
      color: #999;
      padding-bottom: 3px;
      display: inline-block;
    }
    & h4{
      color: #333;
    }
  }
  & div.review{
    border-top: 1px solid #d9d9d9;
    font-size: 12px;
    color: #666;
  }
`;

ProductItem.propTypes = {
  data: PropTypes.object,
  noReview: PropTypes.bool,
  artistSection: PropTypes.bool
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
  noReview: false,
  artistSection: false
}

export default ProductItem
