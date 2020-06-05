
import PropTypes from "prop-types"
import React, {memo, useState, useEffect, useRef} from "react"
import styled  from 'styled-components';

const KeywordRanking = memo(() => {
    const dummyRanking = ['폰케이스','생일선물', '커플', '에어팟케이스', '키링', '반지', '팔찌', '그립톡', '가방', '귀걸이', '카드지갑', '에코백', '목걸이', '파우치', '버즈케이스', '캠핑', '케이크', '마스크', '지갑', 'nokchaba...'];
    const [ranking, setRanking] = useState(0);
    const rankingDiv = useRef();

    useEffect(() => {
        setTimeout(()=>{
        rankingDiv.current && rankingDiv.current.classList.add("moving");
        setTimeout(()=>{
            rankingDiv.current && rankingDiv.current.classList.remove("moving");
            if(ranking===19){
                setRanking(0);
            }else setRanking(ranking+1);
        }, 500);
        }, 4000);
    }, [ranking, rankingDiv]);

    return(
    <Wrap>
        <RankingSlider>
            <div ref={rankingDiv}>
                <span><strong>{ranking+1}.</strong> {dummyRanking[ranking]}</span>
                <span><strong>{ranking === 19 ? 1 : ranking+2}.</strong> {ranking === 19 ? dummyRanking[0] : dummyRanking[ranking+1]}</span>
            </div>
        </RankingSlider>
        <RankingPopup>
            <h4>실시간 인기 검색어</h4>
            <ul>
                {dummyRanking.map((v,i)=>{
                    return <li key={i}><strong>{i+1}.</strong> <span>{v}</span></li>
                })}
            </ul>
        </RankingPopup>
    </Wrap>
    );
});

const Wrap = styled.div`
    position: relative;
    margin: 0 0 0 30px;
    padding: 10px;
    &:hover{
        &>div:nth-child(2){
            display: block;
        }
    }
    @media only screen and (max-width: 830px) {
        margin: 0 0 0 15px;
        width: auto;
    }
    @media only screen and (max-width: 720px) {
        display: none;
    }
`;

const RankingSlider = styled.div`
  font-size: 14px;
  color: #666;
  position: relative;
  overflow: hidden;
  width: auto;
  height: 15px;
  &>div{
    display: flex;
    flex-direction: column;
    height: 14px; 
    position: static;
    transition: all .5s ease;
    top: 0;
    &.moving{
      position: relative;
      top: -19px;
      transition: all 0 ease;
    }
  }
  & strong{
    color: #dd5850;
    font-weight: 700;
  }
  & span{
    margin-bottom: 5px;
  }
`;

const RankingPopup = styled.div`
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    padding: 13px 16px;
    background: white;
    border: 1px solid black;
    z-index: 60;
    width: 232px;
    height: 308px;
    box-sizing: border-box;
    box-shadow: 5px 5px 5px rgba(0,0,0,.07);
    & h4{
        font-size: 12px;
        font-weight: bold;
        border-bottom: 1px solid black;
        padding-bottom: 10px;
    }
    & ul{
        font-size: 11px;
        display: flex;
        flex-direction: row;
        width: 100%;
        flex-wrap: wrap;
        margin: 10px 0;
        position: relative;
        & li{
            width: 50%;
            padding: 7px 3px;
            box-sizing: border-box;
            cursor: pointer;
            & strong{
                font-weight: bold;
            }
            &:hover{
                color: #dd5850;
                & span{
                    text-decoration: underline;
                }
            }
        }
        &:after{
            content: '';
            display: block;
            position: absolute;
            left: 90px;
            top: 0;
            width: 1px;
            height: 100%;
            background: #d9d9d9;
        }
    }
`;

KeywordRanking.propTypes = {
    starNum: PropTypes.number,
}

KeywordRanking.defaultProps = {
    starNum: 0,
}

export default KeywordRanking
