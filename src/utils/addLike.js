//즐겨찾기를 로컬스토리지에 저장하기 위해 필요한건?
//즐겨찾기 클릭된 해당 user값 imageURL, name, star 여부
//좋아요 하면 별 색깔이 변하고 저장되어야한다.
//ing

const STARLIST = "starList";
let starList = [];

function loadLikeList() {
  const loadedStarList = localStorage.getItem(STARLIST);
  console.log("local", loadedStarList);
  if (loadedStarList !== null) {
    const parsedStarList = JSON.parse(loadedStarList);
  }
}

function init() {
  const starBtn = document.querySelector(".starBtn");
  const user = document.querySelector(".user");
  //likeList 불러오기
  loadLikeList();
  //즐겨찾기 버튼에 이벤트 추가
  user.addEventListener("click", addStar);
  starBtn.addEventListener("click", addStar, { capture: true });
  //버튼이 클릭되면 버튼의 상위 user 전체의 값을 가지고 오고 싶은데 어떻게 해야할까?

  function addStar() {
    //console.log("target", e.target);
    //console.log("cur", e.currentTarget);

    starBtn.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="blue" stroke="black">
  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
  </svg>
  `;

    // localStorage.setItem(STARLIST, JSON.stringify(starList));
    loadLikeList();
  }
}

export { init };
