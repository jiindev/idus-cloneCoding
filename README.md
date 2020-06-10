# 아이디어스 클론코딩 사이트, 제이디어스

![제이디어스 썸네일 이미지](/readme/site_thumbnail.jpg)

본 사이트는 아이디어스의 클론 사이트로써,
UI 구현 능력의 향상 목적으로 진행된 사이트입니다.
실제 서비스는 동작하지 않으며,
메인페이지, 서브 화면 5페이지, 상품 페이지가 구현되었습니다.

사이트의 UI소스와 메인 배너는
아이디어스 사이트의 소스를 사용하였습니다.
'소소화방'의 캐리커쳐 상품 썸네일 이미지는
제가 아이디어스에서 셀러활동을 했을 적에
직접 그려 판매했던 캐리커쳐 이미지들을 사용했으며,
그 외 상품 썸네일 이미지는 unsplash 이미지를 사용했습니다.

비 영리적인 목적으로 만들어진 사이트이나
만약 문제가 발생할 경우, jiindev@gmail.com으로 연락 주시면
빠르게 대처하도록 하겠습니다.

[사이트 바로가기](https://jdus.netlify.app/)


## 🚀 Key UI

1.  **슬라이더**

    ![슬라이더 캡쳐](/readme/readme1.png)

    좌우로 이동하는 이미지 슬라이더는 React slick을 사용하여 구현하였습니다.
    메인 화면과 product 페이지에서 확인하실 수 있습니다!

1.  **랭킹 슬라이더**

    ![슬라이더 캡쳐](/readme/readme2.png)
    
    네비게이션에서 4초에 한번씩 다음 순위를 보여주는 슬라이더입니다. setTimeout을 사용하여 구현하였으며 마우스 오버 시 전체 순위를 확인하실 수 있습니다.

1.  **스크롤 네비게이션**

    ![슬라이더 캡쳐](/readme/readme3.png)
    
    메인화면 옆에 보이는 사이드 네비게이션은 호버 시 메뉴명이 보이고, 클릭 시 해당 섹션으로 이동합니다. 스크롤 이동 시 현재 위치에 해당하는 버튼의 색상이 바뀝니다.
    product 페이지에서 pc사이즈일 시 보이는 탭 리스트도 같은 기능을 수행합니다. 
    useRef와 스크롤이벤트를 이용하여 구현했습니다.

1.  **박스 포지션**

    ![슬라이더 캡쳐](/readme/readme4.png)
    
    product 페이지에서 pc 사이즈일 시 우측에 보이는 박스는 스크롤을 내리면 상단에 고정되며, 상품 정보의 하단에 도착하면 하단으로 위치를 이동합니다. 또 모바일 사이즈로 축소할 경우 왼쪽 박스에 포함되어 위치가 고정되며, 관련 버튼들은 화면의 하단에 fixed 상태로 고정됩니다.

1.  **검색 창 포커스**

    ![슬라이더 캡쳐](/readme/readme5.png)
    
    모바일 화면에서 보이는 하단의 네비게이션에서 '검색'버튼을 클릭하면 검색 input에 포커싱됩니다. 검색 input에 포커싱될 경우 검색 input 하단에 현재 키워드 순위를 보여줍니다.

-  그 외에 각종 디자인/UI/반응형을 구현하였습니다.
