import PropTypes from "prop-types"
import React from "react"
import styled  from 'styled-components';

const Star = ({ starNum }) => (
  <StarDiv starNum={starNum}>
    <i className="ui_icon--star-fill"/>
    <i className="ui_icon--star-fill"/>
    <i className="ui_icon--star-fill"/>
    <i className="ui_icon--star-fill"/>
    <i className="ui_icon--star-fill"/>
  </StarDiv>
);

const StarDiv = styled.div`
    margin-bottom: 10px;
    & i{
        font-size: 14px;
        margin-right: 2px;
        color: #d9d9d9;
    }
    & i:nth-child(-n+${props=>props.starNum}){
        color: #ffc801;
    }
`;

Star.propTypes = {
    starNum: PropTypes.number,
}

Star.defaultProps = {
    starNum: 0,
}

export default Star
