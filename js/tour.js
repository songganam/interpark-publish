window.addEventListener("load", function () {
  // console.log("여행상품코딩");
  // 추천 상품 슬라이드 기능
  // 글로써 코딩 시나리오 작성 : 의사코드
  // 1. 외부 데이터를 불러온다.
  const fileName = "tour.json";

  const xhr = new XMLHttpRequest();

  xhr.open("GET", fileName);
  xhr.send();
  xhr.onreadystatechange = function (event) {
    console.log(event.target.readyState);
    if (event.target.readyState === XMLHttpRequest.DONE) {
      const res = event.target.response;
      const json = JSON.parse(res);
      makeHtmlTag(json);
    }
  };

  function makeHtmlTag(_res) {
    let htmlTourTag = ``;
    for (let i = 0; i < _res.total; i++) {
      const index = i + 1;
      const obj = _res["good_" + index];
      const tempTag = `
  <div class="swiper-slide">
  <div class="tour-slide-item">
    <a href="${obj.url}" class="tour-link">
      <div class="tour-img">
        <img src="${obj.image}" alt="${obj.desc}" />
      </div>
      <div class="tour-info">
        <ul class="tour-good-list">
          <li>
            <span class="tour-good-info-icon">
            
          <p>${obj.icon}</p>
          </span>
            <span class="tour-good-info-desc">
              <em>${obj.title}</em>
              <p>${obj.desc}</p>
              </span>
              <span class="tour-good-info-price">
              ${obj.price}
              </span>
              원~
          </li>
        </ul>
      </div>
    </a>
  </div>
</div>
  `;
      htmlTourTag += tempTag;
    }

    showHtmlTag(htmlTourTag);
  }

  function showHtmlTag(_html) {
    const tourSlide = ".tour-slide .swiper-wrapper";
    const tag = document.querySelector(tourSlide);
    tag.innerHTML = _html;

    makeSwiper();
  }

  function makeSwiper() {
    // 외부 데이트 가져올때 작성법
    const swiperTour = new Swiper(".tour-slide", {
      slidesPerView: 3,
      spaceBetween: 26,
      // 좌측, 우측 이동 버튼
      navigation: {
        nextEl: ".tour-slide-wrap .slide-next-bt",
        prevEl: ".tour-slide-wrap .slide-prev-bt",
      },
      // 3장씩 이동하라.
      slidesPerGroup: 3,
    });
  }
});
