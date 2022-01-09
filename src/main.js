import App from "./app";
import axios from "axios";
import "./style.css";

App();

const searchBtn = document.querySelector("#searchBtn");
const userList = document.querySelector(".users");
const search = document.querySelector("#search");
const tapBtn = document.querySelector("#subbar");
const subbar = document.querySelector("#subbar");
const user = document.querySelector(".user");
const starBtn = document.querySelector(".starBtn");

//검색 버튼을 누르면 api요청 tap이 local이면 로컬스토리지저장된 값을 보여한다.
async function searchUser(e) {
  console.log(search.value, "search");
  e.preventDefault();

  const username = search.value;
  const res = await axios.get(
    `https://api.github.com/search/users?q=${username}&per_page=100&page=1`,
    {
      headers: { Accept: "application / vnd.github.v3 + json" },
    }
  );

  const resResult = res.data.items;
  if (!resResult.length) {
    userList.innerHTML = `<div>검색결과가 없습니다.</div>`;
  } else {
    userList.innerHTML = resResult
      .map(
        (el) => `
            <div class="user">
              <img src="${el.avatar_url}" alt="${el.avatar_url}" />
              <div class="user_name">${el.login}</div>
              <button class="starBtn"> 
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="black">
                 <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                 </svg>
              </svg>
            </button>
            </div>
             
           
          `
      )
      .join("");
  }
}
//subbar tap change css뿐만 아니라 로컬스토리지에 저장되어있는 값을 불러와야한다.
function changeTab(e) {
  const selectedTab = e.target.classList.value;
  console.log(e.target.classList.value);
  if (selectedTab.includes("api")) {
    subbar.innerHTML = `
            <nav>
              <button class="subbar_menu api selected">API</button>
              <button class="subbar_menu local">로컬</button>
            </nav>
    `;
  } else if (selectedTab.includes("local")) {
    subbar.innerHTML = `
            <nav>
            <button class="subbar_menu api">API</button>
             <button class="subbar_menu local selected">로컬</button>
            </nav>
    `;
  }
}

searchBtn.addEventListener("click", searchUser);
tapBtn.addEventListener("click", changeTab);

//즐겨찾기를 로컬스토리지에 저장하기 위해 필요한건?
//즐겨찾기 클릭된 해당 user값
//좋아요 하면 별 색깔이 변하고 저장되어야한다.

//로컬스토리지 기능 구현
