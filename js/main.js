const searchEl = document.querySelector('.search');
// const searchInputEl = document.querySelector('.search input');
const searchInputEl = searchEl.querySelector('input');
//같은 요소를 또 찾지 않도록 이미 찾아놓은 searchInputEl 요소를 이용

searchEl.addEventListener('click',function(){
  searchInputEl.focus(); //포커스를 강제 적용할 수 있도록
}); //JS로 focus()를 걸어주지 않으면 돋보기 모양을 눌러도 포커스가 잡히지 않는다.
//돋보기 옆의 아주 좁은 부분을 클릭해야(정확한 input요소) 겨우 검색창이 늘어남.
//input요소가 소속되어 있는 div요소 아무곳이나 클릭을 해도 input이 focus가 됨.

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder',''); 
}); //포커스가 해제되면 발생할 이벤트


const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function() { 
  console.log(window.scrollY);
  if(window.scrollY > 500){
    //배지 숨기기
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0, //요소가 사라진건 아니고 그냥 사용자에게 보이지만 않을 뿐이다.
      //(개발자도구로 잡아보면 잡힌다..)
      display: 'none'
    });
    // badgeEl.style.display='none';
  }else {
    //배지 다시 보여주기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // badgeEl.style.display='block';
  }
}, 300)); //0.3초 단위로 부하를 설정해서 함수가 한번에 너무 많은 수가 실행되는 것을 방지
// _.throttle(함수, 시간)

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index+1)* .7,
    opacity: 1
  });
});

new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true //개발시에만 autoplay, loop 꺼두고 완성시 다시 켜주기
}); //new Swiper(선택자, 객체데이터 옵션)

new Swiper('.promotion .swiper-container', {
  //direction: 'horizontal' 디폴트값이라 생략
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백(px)
  centeredSlides: true, //
  loop: true,
  autoplay: {//객체 데이터로 할당
    delay: 700
  }, 
  pagination : {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자가 클릭해서 제어할 수 이는 여부.
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});



const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

let isHidePromotion = false;
promotionToggleBtn.addEventListener('click',function(){
  isHidePromotion = !isHidePromotion
  if(isHidePromotion){
    //숨김처리
    promotionEl.classList.add('hide');
  } else {
    //보임처리
    promotionEl.classList.remove('hide');
  }
});

function random(min, max){
  return parseFloat((Math.random()*(max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size){
  //gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector,//선택자
    random(1.5, 2.5),//애니메이션 동작시간
    {
      y: size,
      repeat: -1, //무한반복
      yoyo: true, //yoyo처럼 갔으면 다시 돌아오는 것.
      ease: Power1.easeInOut, //gsap easing 검색. 모션을 좀 더 부드럽게 바꾼다.
      delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


//ScrollMagic 라이브러리
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 //viewPort 시작 가장 위 0 가장 끝 1 기준
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

new Swiper('.awards .swiper-container',{
  direction: 'horizontal',
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //