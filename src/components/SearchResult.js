//
function SearchResult() {
  const wrapper = document.querySelector("#wrapper");
  const searchResult = document.createElement("section");
  const search = document.querySelector("#search");

  searchResult.id = "searchResult";
  wrapper.appendChild(searchResult);

  {
    return (searchResult.innerHTML = `
      <div class="users"></div>
   
`);
  }
}
export default SearchResult;
