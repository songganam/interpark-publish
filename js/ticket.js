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
      const tempTag = `
      <div class="swiper-slide">
      <div class="ticket-slide-item">
        <a href="${obj.url}" class="ticket-link">
          <div class="ticket-img">
            <img src="${obj.image}" alt="${obj.desc}" />
          </div>
        </a>
      </div>
      <div class="ticket-info">
        <ul class="ticket-good-list">
          <li>
            <span class="ticket-good-info-price">
              <em>${obj.title}</em>
              <p>${obj.place}</p>
              <i>${obj.date}</i>
            </span>
          </li>
        </ul>
      </div>
    </div>
      `;
      htmlTicketTag += tempTag;
    }
    showHtmlTag(htmlTicketTag);
  }
  
  function showHtmlTag(_html) {
    const ticketSlide = ".ticket-slide .swiper-wrapper";
    const tag = document.querySelector(ticketSlide);
    tag.innerHTML =
  }
  // 2. html 태그를 백틱을 이용해서 만든다.

  // 3. swiper 태그에 백틱을 배치한다.
  const reommendSlide = ".ticket-slide .slide-wrapper";

  // 4. swiper 작동시킨다.
  //   const ticket Swiper = new Swiper(".ticket-slide");
});

function makeSwiper() {
 const swiperTicket = new Swiper (".Ticket-slide", {
  slidePerView: 4,
  spaceBetween: 27,
  navigation: {
    nextEl: ".ticket-slide-wrap .slide-next-bt",
    prevEl: ".ticket-slide-wrap .slide-prev-bt",
  },
  slidesPerGroup: 4,

 }

 )

}