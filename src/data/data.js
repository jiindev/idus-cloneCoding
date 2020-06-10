const dummyData = [
    {
      id: 1,
      thumbnailUrl: 'thumbnail_1.jpg',
      artist:'홍베이커리',
      title:'민트 초코 컵케이크',
      category: '디저트, 베이커리, 떡',
      review:{
        star:5,
        text:'달달한 초코향이 입 안을 간지럽혀요~ 굿굿굿!! 달달한걸 좋아하신다면 강추 드릴게요!! 민트덕후라면 취향저격!!!'
      }
    },
    {
      id: 2,
      thumbnailUrl: 'thumbnail_2.jpg',
      artist:'디저트쿡', 
      title:'바삭바삭~ 크런키초코바', 
      category: '디저트, 베이커리, 떡',
      review:{
        star:3, 
        text:'조금 바스라진 채로 도착해서 아쉬웠어요 ㅠㅠ 맛은 좋네요 아이들이 너무 좋아하더라구요 다만 안에 부숴지지 않도록 뽁뽁이같은걸로라도 감싸주시는 것이 ㅠㅠ..'
      }
    },
    {
      id: 3,
      thumbnailUrl: 'thumbnail_3.jpg',
      artist:'과일나라', 
      title:'달달 은은한 맛~ 레몬망고티',
      category: '음료 (커피, 차 등)',
      review:{
        star:4, 
        text:'아 취향 저격이에요 ㅋㅋ 알갱이가 더 작아도 좋을것 같은데... 일단 담에 또 사먹을 생각 있습니다!!'
      }
    },
    {
      id: 4,
      thumbnailUrl: 'thumbnail_4.jpg',
      artist:'과일나라', 
      title:'[신상]풋풋상큼 딸기쥬스', 
      category: '음료 (커피, 차 등)',
      review:{
        star:5, 
        text:'입 안에 넣자마자 딸기향이 물씬 돌아요~ 만족만족 만족스럽네요!!'
      }
    },
    {
      id: 5,
      thumbnailUrl: 'thumbnail_5.jpg',
      artist:'진인테리어', 
      title:'딥그린 쿠션', 
      category: '인테리어 소품',
      review:{
        star:5, 
        text:'저희 집 인테리어랑 너무 잘맞아요 ㅠㅠ 쿠션 자체도 푹신 거려서 넘 조았어요!!'
      }
    },
    {
      id: 6,
      thumbnailUrl: 'thumbnail_6.jpg',
      artist:'냥냥월드', 
      title:'고양이가 좋아해요 노랑쿠션', 
      category: '반려동물 용품',
      review:{
        star:2, 
        text:'고양이가 안좋아해요 ㅠㅠ 어쩌겠어요 인간이 대신 써야지요..'
      }
    },
    {
      id: 7,
      thumbnailUrl: 'thumbnail_7.jpg',
      artist:'패션박', 
      title:'그레이 베레모', 
      category: '패션잡화',
      review:{
        star:5, 
        text:'핏 대박이에요!!! 친구들이 어디서 샀냐구 물어보네요 만족이에요 ㅎㅎㅎ'
      }
    },
    {
      id: 8,
      thumbnailUrl: 'thumbnail_8.jpg',
      artist:'패션박', 
      title:'아이스크림 캡', 
      category: '패션잡화',
      review:{
        star:3, 
        text:'핏이 약간 이상....ㅠ 동생 줄라구요...'
      }
    },
    {
      id: 9,
      thumbnailUrl: 'thumbnail_9.jpg',
      artist:'도기도기', 
      title:'강아지 패션모자 노란 털모자', 
      category: '반려동물 용품',
      review:{
        star:4, 
        text:'완전 화보 찍어야 겠어요 ㅋㅋ 울 강아지 패셔니스타~~'
      }
    },
    {
      id: 10,
      thumbnailUrl: 'thumbnail_10.jpg',
      artist:'홍베이커리', 
      title:'새콤달콤 레인보우 컵케이크', 
      category: '디저트, 베이커리, 떡',
      review:{
        star:4, 
        text:'입에 넣자마자 저 사탕?이 톡톡 터져요!! 막 먹자마자 존맛 이런건 아닌데 계속 손이 가네요 ㅋㅋ'
      }
    },
    {
      id: 11,
      thumbnailUrl: 'thumbnail_11.jpg',
      artist:'테디장인', 
      title:'내 품에 쏘옥 큐티테디', 
      category: '인형, 장난감',
      review:{
        star:5, 
        text:'촉감이 너무너무 좋아요 ㅠㅠ 사길 잘한거 같아요'
      }
    },
    {
      id: 12,
      thumbnailUrl: 'thumbnail_12.jpg',
      artist:'테디장인', 
      title:'사랑해 화이트 테디베어', 
      category: '인형, 장난감',
      review:{
        star:5, 
        text:'남친 생일선물로 줬는데 엄청 좋아했어요 ㅋㅋ 곰 뒷부분에 자수 해주신게 넘 맘에 들어요'
      }
    },
    {
      id: 13,
      thumbnailUrl: 'thumbnail_13.jpg',
      artist:'도기도기', 
      title:'강아지들이 좋아하는 오렌지볼', 
      category: '반려동물 용품',
      review:{
        star:5, 
        text:'오자마자 이걸로 같이 놀아줬는데 완전 좋아해요 ㅠㅠ 벌써 반쯤 뜯어졌네요'
      }
    },
    {
      id: 14,
      thumbnailUrl: 'thumbnail_14.jpg',
      artist:'냥냥월드', 
      title:'냥이들 취향저격 낚시대', 
      category: '반려동물 용품',
      review:{
        star:2, 
        text:'반응이 없어요 ㅠㅠ 마치 사진속 고양이처럼...'
      }
    },
    {
      id: 15,
      thumbnailUrl: 'thumbnail_15.jpg',
      artist:'냥냥월드', 
      title:'냥이들 환장하는 스크래쳐', 
      category: '반려동물 용품',
      review:{
        star:5, 
        text:'배송 온거보고 뭐냐고 기웃대더니 뜯어주자마자 바로 손톱을 갖다대네요 ㅋㅋ'
      }
    },
    {
      id: 16,
      thumbnailUrl: 'thumbnail_16.jpg',
      artist:'굿리빙', 
      title:'깜찍이 강아지/고양이 컵피규어', 
      category: '주방, 생활',
      review:{
        star:5, 
        text:'너무너무 귀여워요ㅠㅠㅠㅠㅠㅠㅠㅠㅠ'
      }
    },
    {
      id: 17,
      thumbnailUrl: 'thumbnail_17.jpg',
      artist:'디자인케이', 
      title:'레드앤블루 디자인 폰케이스',
      category: '휴대폰 케이스',
      review:{
        star:5, 
        text:'사진이랑 그대로에요!!! 넘 멋져요 좋아요 ㅎㅎ'
      }
    },
    {
      id: 18,
      thumbnailUrl: 'thumbnail_18.jpg',
      artist:'앤틱룸', 
      title:'시간의 모래시계',
      category: '인테리어 소품',
      review:{
        star:5, 
        text:'인테리어용으로 샀는데 분위기 장난아니에요!! ㅠㅠ'
      }
    },
    {
      id: 19,
      thumbnailUrl: 'thumbnail_19.jpg',
      artist:'앤틱룸', 
      title:'앤티크 시계', 
      category: '인테리어 소품',
      review:{
        star:3, 
        text:'너무 앤티크에요.. 좀 닦아서 보내줬으면 ㅠㅠ'
      }
    },
    {
      id: 20,
      thumbnailUrl: 'thumbnail_20.jpg',
      artist:'디자인케이', 
      title:'홀로그램 폰 케이스', 
      category: '휴대폰 케이스',
      review:{
        star:4, 
        text:'사진이랑 그대로에요'
      }
    },
    {
      id: 21,
      thumbnailUrl: 'thumbnail_21.jpg',
      artist:'플라워존', 
      title:'널 닮은 하얀 장미', 
      category: '꽃 (생화, 드라이, 다육 등)',
      review:{
        star:5, 
        text:'배송도 빠르고 꽃도 너무 싱싱하게 왔어요 ㅎㅎ'
      }
    },
    {
      id: 22,
      thumbnailUrl: 'thumbnail_22.jpg',
      artist:'블링블링', 
      title:'블링블링 플라워 폰케이스', 
      category: '휴대폰 케이스',
      review:{
        star:4, 
        text:'너무 예뻐요!! 특히 색감이 딱 제 취향 >_<'
      }
    },
    {
      id: 23,
      thumbnailUrl: 'thumbnail_23.jpg',
      artist:'리빙우드', 
      title:'분위기갑 우드시계', 
      category: '인테리어 소품',
      review:{
        star:3, 
        text:'마감이 조금 거칠어서 아쉬워요 ㅎㅎ 그래도 벽에 걸어두니 예쁘네요'
      }
    },
    {
      id: 24,
      thumbnailUrl: 'thumbnail_24.jpg',
      artist:'리빙우드', 
      title:'원목 찻잔&찻그릇', 
      category: '주방, 생활',
      review:{
        star:5, 
        text:'너무 예뻐요 ㅠㅠㅠㅠㅠ 사길 잘했어요 담에 다른것도 사고싶어요'
      }
    },
    {
      id: 25,
      thumbnailUrl: 'thumbnail_25.jpg',
      artist:'리빙우드', 
      title:'알록달록 도자기 그릇', 
      category: '도자기',
      review:{
        star:4, 
        text:'배송이 조금 느렸지만 상품 자체는 넘 맘에 드네요!!'
      }
    },
    {
      id: 26,
      thumbnailUrl: 'thumbnail_26.jpg',
      artist:'러브링', 
      title:'(1+1) 커플링 추천!! 실버링', 
      category: '반지',
      review:{
        star:5, 
        text:'100일 선물로 줬는데 여친이 너무 맘에 들어 했어요~'
      }
    },
    {
      id: 27,
      thumbnailUrl: 'thumbnail_27.jpg',
      artist:'스윗케이크', 
      title:'스트로베리 & 블루베리 베리케이크', 
      category: '디저트, 베이커리, 떡',
      review:{
        star:5, 
        text:'과일들이 입안에서 톡톡 터지네요!!'
      }
    },
    {
      id: 28,
      thumbnailUrl: 'thumbnail_28.jpg',
      artist:'러브링', 
      title:'[럭키박스] 골라골라 앤티크 악세사리', 
      category: '반지',
      review:{
        star:4, 
        text:'빨간색 위주로 달라고 메시지 드렸는데 그렇게 해주셔서 넘 좋았어용!! 온것들 다 넘 만족이에요'
      }
    },
    {
      id: 29,
      thumbnailUrl: 'thumbnail_29.jpg',
      artist:'알찬식탁', 
      title:'달콤 호박죽', 
      category: '그 외 수제먹거리',
      review:{
        star:5, 
        text:'평 좋길래 사봤는데 입에 넘 잘 맞네요 담에 또 시킬거에요!!!'
      }
    },
    {
      id: 30,
      thumbnailUrl: 'thumbnail_30.jpg',
      artist:'브레드스쿨', 
      title:'블루베리&바나나 허니브레드', 
      category: '디저트, 베이커리, 떡',
      review:{
        star:2, 
        text:'너무 달아요 ㅠㅠ'
      }
    },
    {
      id: 31,
      thumbnailUrl: 'thumbnail_31.jpg',
      artist:'백백', 
      title:'심플 다크그레이 가방', 
      category: '패션잡화',
      review:{
        star:5, 
        text:'사진보다 더 크네요 전 큰가방 좋아해서 좋아요 ㅋㅋ'
      }
    },
    {
      id: 32,
      thumbnailUrl: 'thumbnail_32.jpg',
      artist:'롱쓰', 
      title:'취향저격 모카 마카롱', 
      category: '디저트, 베이커리, 떡',
      review:{
        star:5, 
        text:'친구 선물로 줬는데 너무 좋아하더라구요 담에 저두 사서 먹어보고싶어요'
      }
    },
    {
      id: 33,
      thumbnailUrl: 'thumbnail_33.jpg',
      artist:'백백', 
      title:'네이비 손가방', 
      category: '패션잡화',
      review:{
        star:4, 
        text:'다 좋은데 가죽냄새가 조금 나요 ㅠㅠ 밖에 좀 내다두면 괜찮아지겠죠?? 가방은 이뻐요'
      }
    },
    {
      id: 34,
      thumbnailUrl: 'thumbnail_34.jpg',
      artist:'롱쓰', 
      title:'새콤달콤 레몬파이', 
      category: '디저트, 베이커리, 떡',
      review:{
        star:4, 
        text:'레몬 향이 물씬 ㅎㅎ 맛있게 잘 먹었습니당'
      }
    },
    {
      id: 35,
      thumbnailUrl: 'thumbnail_35.jpg',
      artist:'지수', 
      title:'귀여운 고양이 제제', 
      category: '기타',
      review:{
        star:5, 
        text:'뭔가 하고 주문해봤는데 고양이 사진들이 왔네요 ㅋㅋ 귀여워요'
      }
    },
    {
      id: 36,
      thumbnailUrl: 'thumbnail_36.jpg',
      artist:'소소화방', 
      title:'우리우정 백년만년 우정그림', 
      category: '페인팅, 캐리커쳐, 캘리',
      review:{
        star:5, 
        text:'사진이 너무 저화질이라 걱정했는데 작가님이 넘 잘그려주셨어요 ㅠㅠ 친구도 저도 대만족!!!'
      }
    },
    {
      id: 37,
      thumbnailUrl: 'thumbnail_37.jpg',
      artist:'소소화방', 
      title:'[sns프사용] 바람이 불어오는 곳', 
      category: '페인팅, 캐리커쳐, 캘리',
      review:{
        star:5, 
        text:'저희 추억을 그림으로 남기고 싶어서 주문했는데 너무 만족스럽습니다~!'
      }
    },
    {
      id: 38,
      thumbnailUrl: 'thumbnail_38.jpg',
      artist:'소소화방', 
      title:'알콩달콩 커플 캐리커쳐', 
      category: '페인팅, 캐리커쳐, 캘리',
      review:{
        star:4, 
        text:'그림 배송되는줄 알았는데 아니더라구요 ㅋㅋ 그래도 마음에 들어요 작가님 금손~'
      }
    },
    {
      id: 39,
      thumbnailUrl: 'thumbnail_39.jpg',
      artist:'소소화방', 
      title:'[커플] sns업로드용 캐리커쳐', 
      category: '페인팅, 캐리커쳐, 캘리',
      review:{
        star:5, 
        text:'색감이 넘 이뻐요~ 아쉽게 나온 사진이었는데 이렇게 일러스트로 받으니 좋네요'
      }
    },
    {
      id: 40,
      thumbnailUrl: 'thumbnail_40.jpg',
      artist:'소소화방', 
      title:'너랑나랑 우정 캐리커쳐', 
      category: '페인팅, 캐리커쳐, 캘리',
      review:{
        star:5, 
        text:'사진보다 더 맘에 들어요!!'
      }
    },
    {
      id: 41,
      thumbnailUrl: 'thumbnail_41.jpg',
      artist:'소소화방', 
      title:'하나밖에 없는 나만의 캐리커쳐', 
      category: '페인팅, 캐리커쳐, 캘리',
      review:{
        star:5, 
        text:'직장동료분 선물로 드렸는데 넘 좋아하셔서 뿌듯했어요!!'
      }
    },
    {
      id: 42,
      thumbnailUrl: 'thumbnail_42.jpg',
      artist:'유어슈즈', 
      title:'딥그린 가죽 수제구두', 
      category: '여성 수제화',
      review:{
        star:4, 
        text:'발이 조금 뻑뻑해서 아파요 ㅠㅠ 시간 지남 괜찮아질까요'
      }
    },
    {
      id: 43,
      thumbnailUrl: 'thumbnail_43.jpg',
      artist:'구봉만두', 
      title:'속 알찬 고기만두', 
      category: '그 외 수제먹거리',
      review:{
        star:3, 
        text:'ㅠㅠ 좀 녹은 상태에서 와서 놀랬네요 여름이라 이런거 신경써주셨으면 좋겠습니당'
      }
    },
    {
      id: 44,
      thumbnailUrl: 'thumbnail_44.jpg',
      artist:'롱쓰', 
      title:'알록달록 마카롱 9구', 
      category: '디저트, 베이커리, 떡',
      review:{
        star:5, 
        text:'회사분들이랑 노나먹었는데 다들 맛있대요!'
      }
    },
    {
      id: 45,
      thumbnailUrl: 'thumbnail_45.jpg',
      artist:'버스데이', 
      title:'버스데이 티아라', 
      category: '패션잡화',
      review:{
        star:2, 
        text:'생각보다 크기가 작아요 ㅠㅠㅠㅠ 어린이용같은..'
      }
    },
    {
      id: 46,
      thumbnailUrl: 'thumbnail_46.jpg',
      artist:'건강한 빵', 
      title:'알찬 호밀빵', 
      category: '디저트, 베이커리, 떡',
      review:{
        star:5, 
        text:'아침으로 먹을려고 샀는데 안에 땅콩 씹히는것도 그렇구 빵이 넘 알차네요 ㅎㅎ 재구매 의사 있음요'
      }
    },
    {
      id: 47,
      thumbnailUrl: 'thumbnail_47.jpg',
      artist:'건강한 빵', 
      title:'건강 곡물빵', 
      category: '디저트, 베이커리, 떡',
      review:{
        star:5, 
        text:'진짜 건강하단 느낌! 사은품으로 주신 치즈도 잘 먹었어요~'
      }
    },
    {
      id: 48,
      thumbnailUrl: 'thumbnail_48.jpg',
      artist:'알찬식탁', 
      title:'알록달록 벤또', 
      category: '수제 반찬',
      review:{
        star:5, 
        text:'특별식 먹고파서 시켰는데 양도 많고 맛있었어요!! 초밥도 넘 신선헀네요!'
      }
    },
    {
      id: 49,
      thumbnailUrl: 'thumbnail_49.jpg',
      artist:'건강한 빵', 
      title:'겉바속촉 바게트', 
      category: '디저트, 베이커리, 떡',
      review:{
        star:4, 
        text:'치즈랑 같이 먹었는데 맛있어요 ㅎㅎ'
      }
    },
    {
      id: 50,
      thumbnailUrl: 'thumbnail_50.jpg',
      artist:'스윗케이크', 
      title:'달콤씁쓸 카라멜 케이크', 
      category: '디저트, 베이커리, 떡',
      review:{
        star:5, 
        text:'생일 축하 파티용으로 샀는데 다들 맛있대요!!'
      }
    }
  ];

  //원하는 갯수의 더미데이터 가져오기 (랜덤출력)
  export const getDummyDataRandomly = (dataSize)  => {
    const dummyCopy = [...dummyData];
    for (let i = dataSize - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [dummyCopy[i], dummyCopy[j]] = [dummyCopy[j], dummyCopy[i]];
    }
    return dummyCopy.slice(0,dataSize);
  };

  //해당 아티스트의 다른 상품정보 가져오기
  export const getArtistProducts = (artistName, productId) => {
    const dummyCopy = [...dummyData];
    return dummyCopy.filter((v)=>(v.artist === artistName && v.id !== productId)).slice(0,4);
  }

  //product페이지에 전달된 데이터 값이 없을 경우 디폴트 데이터 출력
  export const getDefaultDummy = () => {
    return dummyData[35];
  };