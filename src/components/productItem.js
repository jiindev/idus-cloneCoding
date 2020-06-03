import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import Star from "./star"

const ProductItem = ({ data }) => (
    <li>
        <div>
        <Thumbnail thumbnailUrl={data.thumbnailUrl}><span/></Thumbnail>
        <Text>
            <div className="title">
            <span>{data.artist}</span>
            <h4>{data.title}</h4>
            </div>
            <div className="review">
            <Star starNum={data.review.star}/>
            {data.review.text}
            </div>
        </Text>
        </div>
    </li>
);

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
  siteTitle: PropTypes.string,
}

ProductItem.defaultProps = {
  siteTitle: ``,
}

export default ProductItem
