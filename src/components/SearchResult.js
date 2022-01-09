function SearchResult() {
  const wrapper = document.querySelector("#wrapper");
  const searchResult = document.createElement("section");
  const search = document.querySelector("#search");

  searchResult.id = "searchResult";
  wrapper.appendChild(searchResult);

  return (searchResult.innerHTML = `
      <div class="users">
      <span class="user_alphabet"></span>
      <div class="user_profile">
        </button>
      </div>
    </div>
      `);
}
export default SearchResult;
