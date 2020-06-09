import React, {memo, useState, useEffect, useRef, useCallback} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components';
import Slider from "react-slick";
import Star from "../components/star";
import ProductItem from "../components/productItem";
import {getDummyDataRandomly, getArtistProducts, getDefaultDummy} from '../data/data';

const ProductDetail = ({location}) => {
    const data = location.state ? location.state.data : getDefaultDummy();
    const [artistProducts, setArtistProducts] = useState(getArtistProducts(data.artist, data.id));
    const [otherProducts, setOtherProducts] = useState(getDummyDataRandomly(10));
    const [categoryProducts, setCategoryProducts] = useState(getDummyDataRandomly(10));
    const [clickBuy, setClickBuy] = useState(false);
    
    const buyRef = useRef();
    const sliderRef = useRef();
    const tabMenuRef = useRef();
    const artistInfoRef = useRef();
    const tab1Ref = useRef();
    const tab2Ref = useRef();
    const tab3Ref = useRef();
    const tab4Ref = useRef();
    const detailInfo1 = useRef();
    const detailInfo2 = useRef();
    const detailInfo3 = useRef();
    
    
    const onScroll = useCallback(() => {
        //우측 구매정보 sticky
        if(window.scrollY + buyRef.current.clientHeight > artistInfoRef.current.offsetTop - buyRef.current.clientHeight){
            buyRef.current.classList.remove('fixed');
            buyRef.current.classList.add('bottom');
        }else if(window.scrollY > 180){
            buyRef.current.classList.add('fixed');
            buyRef.current.classList.remove('bottom');
        }else{
            buyRef.current.classList.remove('fixed');
            buyRef.current.classList.remove('bottom');
        }

        //스크롤에 따라서 탭메뉴 클래스 추가삭제
        tabMenuRef.current.querySelector('li.active').classList.remove('active');
        if(window.scrollY > tab4Ref.current.offsetTop+120){
            tabMenuRef.current.querySelector('li:nth-child(4)').classList.add('active');
        }else if(window.scrollY > tab3Ref.current.offsetTop+120){
            tabMenuRef.current.querySelector('li:nth-child(3)').classList.add('active');
        }else if(window.scrollY > tab2Ref.current.offsetTop+120){
            tabMenuRef.current.querySelector('li:nth-child(2)').classList.add('active');
        }else{
            tabMenuRef.current.querySelector('li:nth-child(1)').classList.add('active');
        }
      }, []);

      useEffect(()=>{
          window.addEventListener('scroll', onScroll);
          return () => {
            window.removeEventListener('scroll', onScroll);
          }
      }, []);

      const next = useCallback(() => {
        sliderRef.current.slickNext();
      }, []);
      const previous = useCallback(() => {
        sliderRef.current.slickPrev();
      }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: true,
        dots: true,
        customPaging: function(i) {
            if(i===0){
                return (
                    <a className="dotImage">
                      <img src={`/thumbnail/${data.thumbnailUrl}`} width="100%" />
                    </a>
                  );
            }else {
                return (
                    <a className="dotImage">
                      <img src={`/thumbnail/dummyThumbnail_${i}.jpg`} width="100%" />
                    </a>
                  );
            }
          },
      };

      const onShowDetailInfo = useCallback((detailInfoRef) => () => {
        detailInfoRef.current.classList.toggle('shown');
      }, []);

      const tabMove = useCallback((tabRef) => () => {
        window.scrollTo(0, tabRef.current.offsetTop+121);
      }, []);

    return (
  <Layout>
    <SEO title="| 오늘의 추천작품" />
    <Wrap>
        <Dim show={clickBuy}/>
            <ProductInfo>
                <InfoDiv>
                    <ProductImage>
                        <button className="prev" onClick={previous}><i className="icon-angle-left"/></button>
                        <button className="next" onClick={next}><i className="icon-angle-right"/></button>
                        <Slider {...settings} ref={sliderRef}>
                            <div>
                                <img src={`/thumbnail/${data.thumbnailUrl}`} width="100%"/>
                            </div>
                            <div>
                                <img src="/thumbnail/dummyThumbnail_1.jpg" width="100%"/>
                            </div>
                            <div>
                                <img src="/thumbnail/dummyThumbnail_2.jpg" width="100%"/>
                            </div>
                        </Slider>
                    </ProductImage>
                    <div className="center">
                    <BuyDiv ref={buyRef}>
                        <div>
                            <TopInfo>
                                <span className="category">{data.category}</span>
                                <h3>{data.title}</h3>
                                <div class="artist">
                                    <span>{data.artist} <i className="ui_icon--arrow-right"/></span>
                                    <button>메시지로 문의</button>
                                </div>
                                <div className="price">
                                    <span><strong>15,900</strong>원</span>
                                    <p>고객님들이 47,999회 구경 했어요!</p>
                                </div>
                                <div className="buttons">
                                    <button><i className="ui_icon--star-outline"/>즐겨찾기</button><button><i className="ui_icon--share"/>공유하기</button>
                                </div>
                            </TopInfo>
                            <GreyInfo>
                                <dl>
                                    <dt>수량</dt>
                                    <dd>주문시 제작</dd>
                                </dl>
                                <dl>
                                    <dt>배송비</dt>
                                    <dd>3,000원</dd>
                                </dl>
                                <dl>
                                    <dt>배송기간</dt>
                                    <dd>5일 이내</dd>
                                </dl>
                                <dl>
                                    <dt>적립금</dt>
                                    <dd>최대 3.5%</dd>
                                </dl>
                            </GreyInfo>
                            <BuyButtons clickBuy={clickBuy}>
                                <div className="option">
                                    <span onClick={()=>{setClickBuy(false)}}><i className="ui_icon--arrow-down"></i></span>
                                    <SelectOption>
                                        <i className="ui_icon--arrow-down"/> 
                                        <select name="option">
                                            <option value="">옵션 선택</option>
                                            <option value="기본">기본</option>
                                            <option value="주문제작">주문제작 +3000원 </option>
                                        </select>
                                    </SelectOption>
                                    <dl>
                                        <dt>총 작품금액</dt>
                                        <dd>0원</dd>
                                    </dl>
                                </div>
                                <div className="buttons">
                                    <button className="cart">장바구니</button>
                                    <button className="buy" onClick={()=>{setClickBuy(true)}}>구매하기</button>
                                    <button className="npay" onClick={()=>{setClickBuy(true)}}><img src="/npay.svg" alt="N Pay"/></button>
                                    <button className="message">메시지</button>
                                    <button className="gift"><img src="/gift.svg" alt=""/></button>
                                    <button className="bookmark"><i className="ui_icon--star-outline"/></button>
                                </div>
                            </BuyButtons>
                        </div>
                    </BuyDiv>
                    <TabMenu ref={tabMenuRef}>
                        <li onClick={tabMove(tab1Ref)} className="active">작품정보</li>
                        <li onClick={tabMove(tab2Ref)}>배송 / 교환 / 환불</li>
                        <li onClick={tabMove(tab3Ref)}>구매후기(1)</li>
                        <li onClick={tabMove(tab4Ref)}>댓글</li>
                    </TabMenu>
                    <Description ref={tab1Ref}>
                        본 사이트는 아이디어스의 클론 사이트로써,<br/>
                        UI 구현 능력의 향상 목적으로 진행된 사이트입니다.<br/>
                        실제 서비스는 동작하지 않으며,<br/>
                        메인페이지, 서브 화면 6페이지, 상품 페이지가 구현되었습니다.<br/><br/>
                        사이트의 UI소스와 메인 배너는 아이디어스 사이트에서 가져왔습니다.<br/>
                        '소소화방'의 캐리커쳐 상품 썸네일 이미지는 <br/>제가 아이디어스에서 셀러활동을 했을 적에<br/>
                        직접 그려 판매했던 캐리커쳐 이미지들을 사용했으며, <br/>
                        그 외 상품 썸네일 이미지는 unsplash 이미지를 사용했습니다.<br/><br/>
                        비 영리적인 목적으로 만들어진 사이트이나<br/>
                        만약 문제가 발생할 경우, jiindev@gmail.com으로 연락 주시면<br/>
                        빠르게 대처하도록 하겠습니다.

                    </Description>
                    <CategoryKeyword>
                        <dl>
                            <dt>Category &amp; Keyword</dt> 
                            <dd>{data.category}</dd>
                        </dl>
                        <ul>
                            {['생일선물', '깜짝선물', '커플선물', '커플', '우정', '주말반짝할인', '선물추천', '우정선물', '주문제작', '부모님선물'].map((v, i)=>{
                                return <li>#{v}</li>
                            })}
                        </ul>
                    </CategoryKeyword>
                    <DetailInfo ref={tab2Ref}>
                        <ul>
                            <DetailInfoLi ref={detailInfo1}>
                                <h4 onClick={onShowDetailInfo(detailInfo1)}>작품 정보제공 고시<i className="icon-angle-down"/></h4>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>종류</th>
                                            <td>{data.category}</td>
                                        </tr>
                                        <tr>
                                            <th>소재</th>
                                            <td>신입개발자의 열정</td>
                                        </tr>
                                        <tr>
                                            <th>사이즈</th>
                                            <td>주문 옵션에 따라 사이즈가 상이합니다.</td>
                                        </tr>
                                        <tr>
                                            <th>제조자 / 제조국</th>
                                            <td>jiindev/MADE IN KOREA</td>
                                        </tr>
                                        <tr>
                                            <th>취급시 주의사항</th>
                                            <td>주문과 동시에 제작되는 상품이므로 주문, 결제후 단순 변심에 의한 반품 및 환불은 불가능 하니 신중한 구매 부탁드립니다.</td>
                                        </tr>
                                        <tr>
                                            <th>품질보증기준</th>
                                            <td>메세지를 보내주시면 안내 드리겠습니다.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </DetailInfoLi>
                            <DetailInfoLi ref={detailInfo2}>
                                <h4 onClick={onShowDetailInfo(detailInfo2)}>판매 작가 정보<i className="icon-angle-down"/></h4>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>대표자명</th>
                                            <td>{data.artist}</td>
                                        </tr>
                                        <tr>
                                            <th>이메일</th>
                                            <td>jiindev@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <th>깃허브</th>
                                            <td>https://github.com/jiindev</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </DetailInfoLi>
                            <DetailInfoLi ref={detailInfo3} className="shown">
                                <h4 onClick={onShowDetailInfo(detailInfo3)}>배송 / 교환 / 환불<i className="icon-angle-down"/></h4>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>배송비</th>
                                            <td>기본료 : <strong>3,500원</strong><br/>
                                                배송비 무료 조건 : <strong>40,000원</strong><br/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>제작 / 배송</th>
                                            <td><strong>5일 이내</strong></td>
                                        </tr>
                                        <tr>
                                            <th>교환 / 환불</th>
                                            <td>
                                                <strong>조건 확인</strong><br/>
                                                문의 후 취소 가능여부 확인해 주세요.
                                                </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </DetailInfoLi>
                        </ul>
                    </DetailInfo>
                    <SocialInfo>
                        <div className="review" ref={tab3Ref}>
                            <SectionTitle>구매후기<button>구매후기 작성하기</button></SectionTitle>
                            <ul>
                                <li>
                                    <div>
                                        <span className="pic"/>
                                        <div>
                                            <span className="name">지인</span>
                                            <time className="date"> 2020년 4월 20일</time>
                                        </div>
                                        <span className="stars"><Star starNum={data.review.star}/></span>
                                    </div>
                                    <p>
                                        {data.review.text}
                                    </p>
                                </li>
                            </ul>
                            <nav>
                                <button>1</button>
                            </nav>
                        </div>
                        <div className="reply" ref={tab4Ref}>
                            <SectionTitle>댓글</SectionTitle>
                            <ul>
                                <li>
                                    <div className="customer">
                                        <span className="pic"/>
                                        <div>
                                            <span className="name">지인</span>
                                            <p>배송 어느정도 걸릴까요?</p>
                                        </div>
                                    </div>
                                    <div className="artist">
                                        <ul>
                                            <li>
                                                <span className="pic"/>
                                                <div>
                                                    <span className="name">{data.artist}</span>
                                                    <p>안녕하세요~ 주문 후 배송은 3일정도 소요됩니다!</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <div className="replyInput">
                                <span/><input type="text" placeholder="댓글을 남겨주세요"/><button>등록</button>
                            </div>
                        </div>
                    </SocialInfo>
                    </div>
                </InfoDiv>
            </ProductInfo>
            <ArtistInfo ref={artistInfoRef}>
                <div className="center">
                    {artistProducts[0] &&
                    <div className="products">
                        <SectionTitle>판매중인 다른 제품들 <button>더보기</button></SectionTitle>
                        <ul>
                            {artistProducts.map((v, i)=>{
                                return <ProductItem noReview={true} artistSection={true} data={v}/>
                            })}
                        </ul>
                    </div>                    
                    }
                    <div className="artist">
                        <div>
                            <span className="pic"/>
                            <span className="name">{data.artist}</span>
                            <Star starNum={5}/>
                            <p>관련 문의는 메시지로 부탁드려요~</p>
                            <div>
                                <button>♥︎︎ 작가로 추가</button>
                                <button>작가 홈</button>
                                <button>메시지 보내기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </ArtistInfo>
            <OtherInfo>
                <div className="center">
                    <div>   
                        <SectionTitle>이 작품과 함께 많이 본 다른 작품</SectionTitle>
                        <ul>
                            {otherProducts.map((v, i)=>{
                                return <ProductItem noReview={true} data={v}/>
                            })}
                        </ul>
                    </div>
                    <div>
                        <SectionTitle>{data.category} 인기 작품<button>더보기</button></SectionTitle>
                        <ul>
                            {categoryProducts.map((v, i)=>{
                                return <ProductItem noReview={true} data={v}/>
                            })}
                        </ul>
                    </div>
                </div>
            </OtherInfo>
    </Wrap>
  </Layout>
    );
};

const Wrap = styled.div`
    padding: 30px 0;
    @media only screen and (max-width: 720px) {
        padding: 0;
    }
`;
const Dim = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.48);
    width: 100vw;
    height: 100vh;
    z-index: 35;
    display: ${props=>props.show? 'block' : 'none'};
    @media only screen and (min-width: 721px) {
        display: none;
    }
`;
const SectionTitle = styled.h4`
    font-weight: bold;
    padding: 10px 0;
    border-bottom: 1px solid #333;
    position: relative;
    & button{
        position: absolute;
        top: 5px;
        right: 0;
        color: #333;
        border: 1px solid #ccc;
        background: #fff;
        padding: 4px 8px 3px;
        font-size: 11px;
        border-radius: 2px;
    }
`;
const ProductInfo = styled.div`
    max-width: 1056px;
    margin: 0 auto;
    position: relative;
`;
const InfoDiv = styled.div`
    width: 65%;
    @media only screen and (max-width: 720px) {
        width: 100%;
    }
`;
const ProductImage = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;
    & .slick-dots .slick-active{
        border: 3px solid #5283db;
    }
    & .slick-dots {
        position: static;
        margin-top: 5px;
        & li{
            width: 55px;
            height: 55px;
        }
    }
    &:hover button{
        opacity: 1;
    }
    & button{
        opacity: 0;
        transition: all .2s ease;
        position: absolute;
        width: 40px;
        height: 40px;
        z-index: 50;
        top: 50%;
        margin-top: -50px;
        color: white;
        border: none;
        background-color: rgba(0,0,0,.3);
        outline: none;
        cursor: pointer;
        font-size: 18px;
        &.prev {
            left: 0;
            right: none;
        }
        &.next{
            right: 0;
            left: none;
        }
    }
`;
const TabMenu = styled.ul`
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
    display: flex;
    position: sticky;
    top: 0;
    background-color: white;
    margin-top: 50px;
    z-index: 30;
    & li{
        width: 25%;
        padding: 20px 0;
        text-align: center;
        color: #666;
        cursor: pointer;
        position: relative;
        &.active{
            &:after{
                content: '';
                display: block;
                width: 100%;
                height: 4px;
                background-color: #5283db;
                position: absolute;
                bottom: 0;
            }
        }
    }
    @media only screen and (max-width: 720px) {
        display: none;
    }
`;
const Description = styled.div`
    text-align: center;
    font-size: 15px;
    line-height: 24px;
    padding: 50px 0;
    @media only screen and (max-width: 720px) {
        padding: 0 0 50px 0;
    }
`;
const CategoryKeyword = styled.div`
    text-align: center;
    border-top: 1px solid #d9d9d9;
    padding: 30px 0;
    & dt{
        font-size: 10px;
        color: #999;
    }
    & dd{
        color: #333;
        font-size: 15px;
        margin-top: 8px;
    }
    & ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-top: 20px;
    }
    & li{
        padding: 8px 10px;
        border: 1px solid #d9d9d9;
        margin: 5px;
        font-size: 12px;
        color: #22a7af;
    }
`;
const DetailInfo = styled.div`
    padding-bottom: 50px;
    & ul{
        border-bottom: 1px solid #d9d9d9;
    }
`;
const DetailInfoLi = styled.li`
    & h4{
        border-top: 1px solid #d9d9d9;
        padding: 20px;
        color: #333;
        font-size: 14px;
        cursor: pointer;
        display: flex;
        justify-content:space-between;
        & i{
            font-size: 18px;
            transition: all .2s ease;
        }
    }
    &.shown{
        & table{
            display: block;
        }
        & i{
            transform: rotate(180deg);
        }
    } 
    & table{
        width: 100%;
        border-top: 1px solid #ccc;
        font-size: 12px;
        display: none;
        & tbody{
            display: block;
            width: 100%;
        }
        & tr{
            display: flex;
            box-sizing: border-box;
            width: 100%;
            border-bottom: 1px solid #ccc;
            line-height: 1.5;
            &:last-child{
                border: none;
            }
        }
        & th{
            box-sizing: border-box;
            width: 30%;
            background: #eee;
            border-right: 1px solid #ccc;
            color: #666;
            padding: 15px;
        }
        & td{
            display: block;
            box-sizing: border-box;
            width: 70%;
            color: #333;
            padding: 15px;
            & strong{
                color: #22a7af;
            }
        }
    }
`
const SocialInfo = styled.div`
    & span.pic{
        width:32px;
        height: 32px;
        background: url('/thumbnail/dummyThumbnail_1.jpg') no-repeat center center / contain;
        display: inline-block;
        border-radius: 32px;
        margin-right: 10px;
    }
    & span.name{
        color: #333;
        font-size: 12px;
        font-weight: bold;
        margin-bottom: 5px;
        display: inline-block;
    }
    & time{
        font-size: 12px;
        color: #999;
    }
    & p{
        line-height: 1.5;
        color: #333;
        font-size: 14px;
    }
    & div.review{
        & li{
            padding: 20px 0;
            border-bottom: 1px solid #ccc;
            clear: both;
            &>div:first-child{
                display: flex;
                width: 100%;
                margin-bottom: 10px;
                align-items: center;
                &>div *{
                    display: block;
                }
                & .stars{
                    display: block;
                    margin: 0 0 0 auto;
                }
            }
        }
        & nav{
            padding: 20px 0;
            text-align: center;
            & button{
                display: inline-block;
                background: #fff;
                border: 1px solid #ccc;
                border-radius: 2px;
                color: #dd5850;
                font-size: 12px;
                width: 24px;
                height: 24px;
            }
         }
    }
    & div.reply{
        & .customer{
            display: flex;
            padding: 10px;
        }
        & .artist li{
            display: flex;
            padding: 10px;
            background: #f5f5f5;
            margin-left: 50px;
            margin-bottom: 10px;
            border-radius: 3px;
        }
        & .artist .pic{
            background: url('/thumbnail/dummyThumbnail_2.jpg') no-repeat center center / contain;
        }
        & .replyInput{
            padding: 16px 0 50px 0;
            border-top: 1px solid #d9d9d9;
            display: flex;
            font-size: 12px;
            & span{
                width: 32px;
                height: 32px;
                display: block;
                background: url('/thumbnail/dummyThumbnail_1.jpg') no-repeat center center / contain;
                border-radius: 32px;
                margin-right: 10px; 
            }
            & input{
                flex: 1;
                box-sizing: border-box;
                padding: 0 10px;
                outline: none;
                border: 1px solid #999;
                border-radius: 3px;
                &:focus{
                    border: 1px solid #22a7af;
                }
                &::placeholder{
                    color: #999;
                }
            }
            & button{
                padding: 0 15px;
                margin-left: 10px;
                background-color: #5283db;
                border: none;
                border-radius: 3px;
                color: white;
            }
        }
    }
`;
const BuyDiv = styled.div`
        width: 35%;
        position: absolute;
        top:0;
        right: 0;
        z-index: 30;
        @media only screen and (min-width: 720px) {
            &.fixed{
                position: fixed;
                width: calc(100vw * 0.35);
                right: 0;
            }
            &.bottom{
                top: initial;
                bottom: 0;
            }
        }
        @media only screen and (min-width: 1050px) {
            &.fixed{
                right: auto;
                left: 50%;
                margin-left: 160px;
                width: calc(1050px * 0.35);
            }
        }
        &>div{
            margin: 10px;
            background-color: #fff;
            border-radius: 3px;
            box-shadow: 0 0 5px rgba(0,0,0,.2);
            padding: 20px;
        }
    @media only screen and (max-width: 720px) {
        position: static;
        width: 100%;
        &>div{
            margin: 0;
            box-shadow: none;
            padding: 20px 0;
        }
    }
`;
const TopInfo = styled.div`
    & span.category{
        font-size: 12px;
        color: #999;
    }
    & h3{
        font-size: 20px;
        font-weight: bold;
        line-height: 1.5;
        padding: 5px 0 10px 0;
    }
    & .artist{
        display: flex;
        margin-bottom: 30px;
        & span{
            font-size: 14px;
            color: #666;
            flex: 1;
            &:before{
                content: '';
                width: 24px;
                height: 24px;
                display: inline-block;
                background: url('/thumbnail/dummyThumbnail_2.jpg') no-repeat center center / contain;
                border-radius: 24px;
                vertical-align: middle;
                margin-right: 5px;
            }
        }
        & i{
            vertical-align: middle;
        }
        & button{
            font-size: 10px;
            padding: 0 8px;
            border: 1px solid #d9d9d9;
            border-radius: 2px;
            background-color: #fff;
        }
    }
    & .price{
        & span{
            display: block;
            font-size: 24px;
            color: #333;
        }
        & strong{
            font-size: 28px;
            font-weight: bold;
        }
        & p{
            font-size: 14px;
            color: #999;
            padding: 10px 0 20px 0;
        }
    }
    & .buttons{
        & button{
            width: 50%;
            padding: 10px 0;
            border: 1px solid #d9d9d9;
            background-color: white;
            font-size: 14px;
            color: #333;
            border-radius: 0 3px 3px 0;
            &:hover{
                background-color: #f5f5f5;
            }
            & i{
                font-size: 20px;
                vertical-align: middle;
                margin-right: 10px;
            }
            &:first-child{
                border-right: none;
                border-radius: 3px 0 0 3px;
            }
        }
    }
`;
const GreyInfo = styled.div`
    background-color: #f5f5f5;
    padding: 20px 0;
    display: flex;
    text-align: center;
    margin: 20px 0 30px 0;
    & dl{
        width: 25%;
        position: relative;
        &:after{
            content: '';
            height: 15px;
            width: 1px;
            display: block;
            background-color: #999;
            position: absolute;
            right: 0;
            top: 5px;
        }
        &:last-child:after{
            display: none;
        }
    }
    & dt{
        font-size: 12px;
        color: #999;
    }
    & dd{
        font-size: 13px;
        margin-top: 8px;
    }
`;
const SelectOption = styled.div`
    padding-bottom: 10px;
    position: relative;
    & i{
        position: absolute;
        top: 8px;
        right: 10px;
        font-size: 14px;
    }
    & select{
        width: 100%;
        padding: 10px 20px;
        box-sizing: border-box;
        outline: none;
        border: 1px solid #d9d9d9;
        appearance:none;
    }
`;
const BuyButtons = styled.div`
    & .option span{
        position: absolute;
        display: none;
        background-color: #333;
        top: -24px;
        left: 50%;
        margin-left: -35px;
        width: 70px;
        height: 24px;
        border-radius: 15px 15px 0 0;
        color: white;
        text-align: center;
        font-size: 14px;
        line-height: 24px;
        cursor: pointer;
    }
    & dl{
        border-top: 1px solid #d9d9d9;
        padding: 20px 0;
        display: flex;
        justify-content:space-between;
        & dt{
            color: #666;
            font-size:14px;
        }
        & dd{
            font-size: 20px;
            font-weight: bold;
            color: #333;
        }
    }
    & div.buttons{
        display: flex;
    }
    & button{
        width: 27.3%;
        margin-right: 1%;
        line-height: 46px;
        height: 46px;
        font-size: 16px;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 2px;
        color: #fff;
        background-color: #fff;
        outline: none;
        &.cart{
            border: 1px solid #5283db;
            color: #5283db;
        }
        &.buy{
            background-color: #5283db;
        }
        &.npay{
            background-color: #30c612;
        }
        &.message{
            color: #333;
            border: 1px solid #d9d9d9;
            display: none;
        }
        &.gift{
            width: 15%;
            margin: 0;
            border: 1px solid #d9d9d9;
        }
        &.bookmark{
            color: #666;
            font-size: 22px;
            display: none;
        }
    }
    @media only screen and (max-width: 720px) {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 999;
        width: 100%;
        padding: 8px;
        background: white;
        border-top: 1px solid #d9d9d9;
        & .buttons{
            & button{
                width: 30%;
            }
            & .cart{
                display: none;
            }
            & .gift{
                display: none;
            }
            & .message{ 
                display: inline-block;
            }
            & .bookmark{
                display: inline-block;
                width: 10%;
            }
            & .buy, & .npay{
                cursor: pointer;
            }
        }
        & .option{
            & span{
                display: inline-block;
            }
            display: ${props=>props.clickBuy ? 'block' : 'none'};
           position: absolute;
           bottom: 60px;
           left: 0;
           background-color: #fff;
           width: 100vw;
           padding: 20px 10px 0 10px;
           box-sizing: border-box;
           border-top: 2px solid #333333;
        }

    }
`;
const ArtistInfo = styled.div`
    background-color: #f5f5f5;
    &>div{
        display: flex;
        padding: 100px 0;
        justify-items: center;
        align-items: center;
    }
    & div.products{
        width: 65%;
        padding: 0 10px;
        box-sizing: border-box;
        position: relative;
        &:after{
            height: 85%;
            width: 1px;
            content: '';
            display: block;
            background-color: #d9d9d9;
            position: absolute;
            top: 30px;
            right: 0;
        }
        & ul{
            display: flex;
            flex-wrap: wrap;
            padding: 20px 0;
        }
    }
    & div.artist{
        width: 35%;
        text-align: center;
        margin: 0 auto;
        &>div{
            width: 275px;
            margin: 0 auto;
        }
        & .pic{
            width: 72px;
            height: 72px;
            display: block;
            background: url('/thumbnail/dummyThumbnail_2.jpg') no-repeat center center / contain;
            border-radius: 72px;
            margin: 30px auto 10px auto;
        }
        & .name{
            display: block;
            font-size: 14px;
            color: #333;
            font-weight: bold;
            padding-bottom: 10px;
        }
        & p{
            line-height: 1.5;
            font-size: 14px;
            padding-bottom: 10px;
            min-height: 50px;
        }
        & button{
            color: #333;
            border: 1px solid #ccc;
            background: #fff;
            padding: 5px 0;
            font-size: 12px;
            width: 50%;
            display: inline-block;
            margin-bottom: 5px;
            &:nth-child(1){
                width: 49%;
                margin-right: 1%;
                color: #5283db;
            }
            &:nth-child(3){
                width: 100%
            }
        }
    }
    @media only screen and (max-width: 1056px) {
        &>div{
            flex-direction: column;
        }
        & div.products, & div.artist{
            width: 100%;
        }
        & div.products:after{
            display: none
        }
    }
`;
const OtherInfo = styled.div`
    padding-top: 50px;
    & ul{
        display: flex;
        flex-wrap: wrap;
        padding: 20px 0 50px;
    }
`;

export default ProductDetail
