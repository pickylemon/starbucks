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



const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //