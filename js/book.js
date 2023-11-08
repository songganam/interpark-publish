window.addEventListener("load", function () {
  console.log("추천상품코딩");
  // 추천 상품 슬라이드 기능
  // 글로써 코딩 시나리오 작성 : 의사코드
  // 1. 외부 데이터를 불러온다.

  // 외부 데이트 가져올때 작성법
  const xhr = new XMLHttpRequest();
  // 외부의 파일을 열어라
  // Get 방식으로 파일을 열어준다.
  xhr.open("GET", fileName);
  // 실제로 실행하자.
  xhr.send();
  // 데이터의 전송 상태를 체크합니다.
  xhr.onreadystatechange = function (event) {
    console.log("데이터 전송 상태 확인, event.target.readyState");
    if (event.target.readyState === XMLHttpRequest.DONE) {
      console.log("자료 가져오는데 성공 완료", event.target.response);
    }
  };

  // 2. html 태그를 백틱을 이용해서 만든다.
  const htmBookTag = ``;

  // 3. swiper 태그에 백틱을 배치한다.
  const bookSlide = ".book-slide .slide-wrapper";

  // 4. swiper 작동시킨다.
  const bookSwiper = new Swiper(".book-slide", {
    slidesPerView: 5,
    spaceBetween: 28,
    // 좌측, 우측 이동 버튼
    avigation: {
      nextEl: ".recommend-slide-wrap .slide-next-bt",
      prevEl: ".recommend-slide-wrap .slide-prev-bt",
    },
    // 5장씩 이동하라.
    slidesPerGroup: 5,
  });
});
