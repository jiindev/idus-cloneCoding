import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';

const Header = ({ title, description, bannerBackground }) => (
  <TopHeader bannerBackground={bannerBackground}>
      <h3>{title}</h3>
      <p>{description}</p>
  </TopHeader>
);

const TopHeader = styled.header`
  height: 210px;
  text-align: center;
  position: relative;
  background-image: ${props=>`url(${props.bannerBackground.imageUrl})`};
  z-index: 20;
  color: white;
  margin-bottom: 30px;
  &:before{
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    background: ${props=>`linear-gradient(97deg, ${props.bannerBackground.color[0]}, ${props.bannerBackground.color[1]})`};
    opacity: .9;
    z-index: 0;
  }
  & h3{
    position: relative;
    z-index: 40;
    font-size: 36px;
    padding: 50px 0 0 0;
    &:after{
      content: '';
      display: block;
      height: 2px;
      background: white;
      width: 40px;
      margin: 30px auto 25px auto;
    }
  }
  & p{
    position: relative;
    z-index: 40;
    font-size: 14px;
  }
  @media only screen and (max-width: 720px) {
    display: none;
  }
`;

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  bannerBackground: PropTypes.object,
}

export default Header
