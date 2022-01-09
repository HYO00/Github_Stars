import SearchBar from "./SearchBar";

function SearchResult() {
  const wrapper = document.querySelector("#wrapper");
  const SearchResult = document.createElement("section");
  SearchBar.id = "SearchResult";
  wrapper.appendChild(SearchResult);

  return (SearchResult.innerHTML = `
      <div class="users">
      <span class="user_alphabet"></span>
      <div class="user_profile">
        <img class="user_img" alt="userImg" />
        <span calss="user_name">효영</span>
        <button class="user_like">
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path
              d="M15.668 8.626l8.332 1.159-6.065 5.874 1.48 8.341-7.416-3.997-7.416 3.997 1.481-8.341-6.064-5.874 8.331-1.159 3.668-7.626 3.669 7.626zm-6.67.925l-6.818.948 4.963 4.807-1.212 6.825 6.068-3.271 6.069 3.271-1.212-6.826 4.964-4.806-6.819-.948-3.002-6.241-3.001 6.241z"
            />
          </svg>
        </button>
      </div>
    </div>
      `);
}
export default SearchResult;
