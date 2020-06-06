import PropTypes from "prop-types"
import React, {memo, useState, useEffect, useRef, useCallback} from "react"
import styled  from 'styled-components';
import { Link } from "gatsby"

const RecommendMenu = memo(({path}) => {
    const [showRecommendMenu, setShowRecommendMenu] = useState(false);
    const onClickShowRecommendMenu = useCallback(() => {
        setShowRecommendMenu(!showRecommendMenu);
    }, [showRecommendMenu]);
    return (
      <Wrap show={showRecommendMenu}>
            <button onClick={onClickShowRecommendMenu}><i className="ui_icon--arrow-down"/></button>
            <div>
              <h4>추천 메뉴</h4>
              <ul>
                <RMenu activeMenu={path==='/'}><Link to="/"><i className="ui_icon--home"/><span>홈</span></Link></RMenu>
                <RMenu activeMenu={path==='/main/today-recommend-product'}><Link to="/main/today-recommend-product"><i className="ui_icon--medal"/><span>추천 작품</span></Link></RMenu>
                <RMenu activeMenu={path==='/main/liver-order-product'}><Link to="/main/liver-order-product"><i className="ui_icon--current-list"/><span>실시간 구매</span></Link></RMenu>
                <RMenu><i className="ui_icon--pencil"/><span>실시간 후기</span></RMenu>
                <RMenu activeMenu={path==='/main/recommend-artist-product'}><Link to="/main/recommend-artist-product"><i className="ui_icon--advert"/><span>작가님 추천</span></Link></RMenu>
                <RMenu activeMenu={path==='/main/live-recommend-product'}><Link to="/main/live-recommend-product"><i className="ui_icon--advert"/><span>실시간 추천</span></Link></RMenu>
                <RMenu><i className="ui_icon--fire"/><span>인기 작품</span></RMenu>
                <RMenu><i className="ui_icon--story"/><span>스토리</span></RMenu>
                <RMenu><i className="ui_icon--video"/><span>동영상</span></RMenu>
                <RMenu activeMenu={path==='/main/new-product'}><Link to="/main/new-product"><i className="ui_icon--thunder"/><span>최신 작품</span></Link></RMenu>
                <RMenu><i className="ui_icon--gift"/><span>맞춤 추천</span></RMenu>
                <RMenu><i className="ui_icon--thumb"/><span>인기작가</span></RMenu>
              </ul>
            </div>
      </Wrap>
    );
});

const Wrap = styled.div`
  & button{
    position: absolute;
    top: 0;
    right: 0;
    z-index: 150;
    background-color: white;
    height: 100%;
    width: 32px;
    height: 34px;
    text-align: center;
    line-height: 32px;
    box-sizing: border-box;
    border: 1px solid #d9d9d9;
    border-right: 0;
    border-bottom: 0;
    display: none;
    outline: none;
    cursor: pointer;
    & i{
      display: inline-block;
      transition: .2s all ease;
      transform: ${props=>props.show? 'rotate(180deg)' : 'rotate(0deg)'};
      transform-origin: center 60%;
      color: ${props=>props.show? '#5283db' : '#666'}
    }
  }
  & div{
    background-color: #f5f5f5;
    height: 334px;
    width: 100vw;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 50;
    display: none;
    box-shadow: 0 4px 4px rgba(0,0,0,.2), 0 1px 0 #d9d9d9;
  }
  
  & h4{
    background-color: white;
    width: 100vw;
    height: 35px;
    box-sizing: border-box;
    border: 1px solid #d9d9d9;
    color: #5283db;
    font-size: 14px;
    text-align: center;
    line-height: 34px;
  }
  & ul{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    color: #666;
    & li{
      width: 25%;
      text-align: center;
      padding: 18px 0;
      & i{
        font-size: 28px;
        display: block;
        padding: 5px 0;
      }
      & span{
        font-size: 12px;
      }
    }
  }
  @media only screen and (max-width: 720px) {
    & button{
      display: block;
    }
    & div{
      display: ${props=>props.show? 'block' : 'none'};
    }
  }
`;
const RMenu = styled.li`
  color: ${props=>props.activeMenu ? '#5283db' : '#666'};
`;

RecommendMenu.propTypes = {
    path: PropTypes.string,
}

RecommendMenu.defaultProps = {
    path: '',
}

export default RecommendMenu
