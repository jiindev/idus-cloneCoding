
import PropTypes from "prop-types"
import React, {memo} from "react"
import styled  from 'styled-components';
import {RankingPopup} from './keywordRanking';

const MobileKeywordRanking = memo(() => {
    const dummyRanking = ['폰케이스','생일선물', '커플', '에어팟케이스', '키링', '반지', '팔찌', '그립톡', '가방', '귀걸이', '카드지갑', '에코백', '목걸이', '파우치', '버즈케이스', '캠핑', '케이크', '마스크', '지갑', 'nokchaba...'];
    return(
    <Wrap>
        <MobileRankingPopup>
            <h4>실시간 인기 검색어</h4>
            <ul>
                {dummyRanking.map((v,i)=>{
                    return <li key={i}><strong>{i+1}.</strong> <span>{v}</span></li>
                })}
            </ul>
        </MobileRankingPopup>
    </Wrap>
    );
});

const Wrap = styled.div`
    display: none;
    padding: 5px 10px 10px 10px;
    @media only screen and (max-width: 720px) {
        display: block;
    }
`;

const MobileRankingPopup = styled(RankingPopup)`
    position: static;
    display: block;
    width: 100%;
    box-shadow: none;
    & ul:after{
            left: 50%;
            margin-left: -10px;
    }
`;

MobileKeywordRanking.propTypes = {
    starNum: PropTypes.number,
}

MobileKeywordRanking.defaultProps = {
    starNum: 0,
}

export default MobileKeywordRanking
