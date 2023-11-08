window.addEventListener("load", function () {
  // console.log("티켓랭킹코딩");
  // 추천 상품 슬라이드 기능
  // 글로써 코딩 시나리오 작성 : 의사코드
  // 1. 외부 데이터를 불러온다.
  const fileName = "ticket.json";

  // 외부 데이트 가져올때 작성법
  const xhr = new XMLHttpRequest();
  xhr.open("GET", fileName);
  xhr.send();
  xhr.onreadystatechange = function (event) {
    if (event.target.readyState === XMLHttpRequest.DONE) {
      const res = event.target.response;
      const json = JSON.parse(res);
      makeHtmlTag(json);
    }
  };

  function makeHtmlTag(_res) {
    let htmlRecommendTag = ``;
    for (let i = 0; i < _res.total; i++) {
      const index = i + 1;
      const obj = _res["good_" + index];
    }
  }
  // 2. html 태그를 백틱을 이용해서 만든다.
  const tempTag = `

  `;

  // 3. swiper 태그에 백틱을 배치한다.
  const reommendSlide = ".ticket-slide .slide-wrapper";

  // 4. swiper 작동시킨다.
  //   const ticket Swiper = new Swiper(".ticket-slide");
});
