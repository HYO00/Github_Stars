import axios from "axios";

function requestApi() {
  const search = document.querySelector("#search");
  const searchBtn = document.querySelector("#searchBtn");
  const inputValue = search.value;
  //console.log("ss", inputValue);
  searchBtn.addEventListener("click", getUserData(inputValue));

  async function getUserData(username) {
    if (username === "") {
      console.log("nothing");
    } else {
      console.log(username);
      const res = await axios.get(
        `https://api.github.com/search/users?q=${username}&per_page=100&page=1`,
        {
          headers: { Accept: application / vnd.github.v3 + json },
        }
      );
      return res.data;
    }
  }
}

export default requestApi;
