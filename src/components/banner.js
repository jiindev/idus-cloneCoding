import PropTypes from "prop-types"
import React, {useState, useCallback} from "react"
import styled from 'styled-components';
import Slider from "react-slick";

const Banner = () => {
    const [slidePage, setSlidePage] = useState(1);
    const PrevButton = useCallback(({ onClick }) => {
        return <button onClick={onClick} className="prev"><i className="icon-chevron-left"/></button>;
    }, []);
    const NextButton = useCallback(({ onClick }) => {
        return <button onClick={onClick} className="next"><i className="icon-chevron-right"/></button>;
    }, []);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevButton />,
        nextArrow: <NextButton />,
        afterChange: current => setSlidePage(current+1)
    };
      

    return (
    <Wrap>
        <SlideNum><span>{slidePage}</span>/10</SlideNum>
        <Slider {...settings}>
            {
                Array(10).fill(' ').map((v, i) => 
                <div key={i}>
                    <SlideImg index={i+1}/>
                </div>)
            }
        </Slider>
    </Wrap>
    );
};

const Wrap = styled.div`
    position: relative;
    & button{
        width: 40px;
        height: 40px;
        position: absolute;
        top: 200px;
        z-index: 1;
        background: none;
        border: none;
        font-size: 30px;
        color: white;
        text-shadow: 0 1px 1px #444;
        outline: none;
        &.prev{
            left: 10px;
        }
        &.next{
            right: 10px;
        }
    }
    & i{
    }
    & .slick-slide *{
        outline: none;
    }
    @media only screen and (max-width: 720px) {
        & button{
            display: none;
        }
    }
`;

const SlideNum = styled.div`
    position: absolute;
    bottom: 30px;
    right: 60px;
    z-index: 30;
    background-color: rgba(0,0,0,.5);
    padding: 5px 10px;
    border-radius: 15px;
    color: #999;
    font-size: 12px;
    transition: all .2s ease;
    & span{
        color: white;
    }
    @media only screen and (max-width: 720px) {
        bottom: 20px;
        right: 20px;
    }
`;

const SlideImg = styled.div`
    width: 100%;
    height: 480px;
    padding-left: 100%;
    box-sizing:border-box;
    background: ${props=>`url('/banner/${props.index}.jpg') no-repeat center center / cover;`};
    outline: none;
    @media only screen and (max-width: 720px) {
        background: ${props=>`url('/banner/mobile_${props.index}.jpg') no-repeat center center / cover;`};
    }
    @media only screen and (max-width: 600px) {
        height: 400px;
    }
    @media only screen and (max-width: 400px) {
        height: 300px;
    }
`;

Banner.propTypes = {
  siteTitle: PropTypes.string,
}

Banner.defaultProps = {
  siteTitle: ``,
}

export default Banner
