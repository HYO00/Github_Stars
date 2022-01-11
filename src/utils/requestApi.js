import axios from "axios";

async function searchUser(e) {
  const userList = document.querySelector(".users");
  const search = document.querySelector("#search");

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
  console.log("result", resResult);
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

export { searchUser };
