//즐겨찾기를 로컬스토리지에 저장하기 위해 필요한건?
//즐겨찾기 클릭된 해당 user값
//좋아요 하면 별 색깔이 변하고 저장되어야한다.
//ing

const starBtn = document.querySelector(".starBtn");
const user = document.querySelector(".user");

const STARLIST = "starList";
let starList = [];

function addStar() {
  console.log(user);
  localStorage.setItem(STARLIST, JSON.stringify(starList));
}

function loadLikeList() {
  const loadedStarList = localStorage.getItem(STARLIST);
  if (loadedStarList !== null) {
    const parsedStarList = JSON.parse(loadedStarList);
  }
}

function init() {
  //likeList 불러오기
  loadLikeList();
  //즐겨찾기 버튼에 이벤트 추가
  starBtn.addEventListener("click", addStar);
}
