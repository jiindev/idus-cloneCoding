import {useState} from 'react';
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import ProductItem from './productItem';

const ProductSecion = ({ title, iconClass, data }) => {
    const [page, setPage] = useState(1);
    const onChangePage = pageDirection => () => {
        if(pageDirection === 'left'){
            if(page===1){
                setPage(5);
            }else setPage(page-1);
        }else{
            if(page===5){
                setPage(1);
            }else setPage(page+1);
        }
    }
    return(
    <Wrap>
      <div className="center">
        <Title>
          <h3><i className={iconClass}/> {title}</h3>
          <div>
            <span><strong>{page}</strong>/5</span>
            <button onClick={onChangePage('left')}><i className="ui_icon--arrow-left"/></button>
            <button onClick={onChangePage('right')}><i className="ui_icon--arrow-right"/></button>
          </div>
        </Title>
        <ul>
          {data.map((v, i)=>(
            <ProductItem data={v} key={i}/>
          ))}
        </ul>
        <MoreButton>{title} 더보기</MoreButton>
      </div>
    </Wrap>
    );
};

const Wrap = styled.div`
  padding: 40px 0;
  & ul{
    display: flex;
    flex-wrap: wrap;
    & li{
      width: 20%;
      font-size: 14px;
      &>div{
        margin: 8px;
        border: 1px solid #d9d9d9;
        border-radius: 5px;
        overflow: hidden;
        background-color: #f8f9fb;
      }
    }
  }
`;
const Title = styled.div`
  color: #333;
  position: relative;
  & h3{
    font-size: 20px;
    font-weight: bold;
    padding: 10px 0;
    border-bottom: 1px solid #d9d9d9;
    margin-bottom: 15px;
    & i{
    font-size: 24px;
    vertical-align: middle;
    }
  }
  & div{
    position: absolute;
    bottom: 10px;
    right: 0;
    font-size: 14px;
    & span{
      margin-right: 10px;
      color: #999;
      & strong{
        color: #333;
        font-weight: bold;
      }
    }
    & button{
      border: 1px solid #d9d9d9;
      border-radius: 0 2px 2px 0;
      width: 24px;
      height: 24px;
      display: inline-block;
      text-align: center;
      background: none;
      outline: none;
      cursor: pointer;
      & i{
        line-height: 20px;
        font-size: 12px;
        color: #999;
      }
      &:nth-child(2){
        border-right: 0;
        border-radius: 2px 0 0 2px;
      }
    }
  }
  
`;

const MoreButton = styled.button`
    margin: 30px auto 0 auto;
    display: block;
    font-size: 16px;
    width: 400px;
    padding: 15px 0;
    border: 1px solid #999;
    border-radius: 3px;
    color: #333;
    background: none;
    transition: all .2s ease;
    &:hover{
        background: #f5f5f5;;
    }
`;

ProductSecion.propTypes = {
  siteTitle: PropTypes.string,
}

ProductSecion.defaultProps = {
  siteTitle: ``,
}

export default ProductSecion
