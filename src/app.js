import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";
import "./style.css";
//app은 각각의 component를 조립해서 보여준다.
//component header, nav, searchbar, result 렌더링 해준다.

function App() {
  const container = document.createElement("div");
  const wrapper = document.createElement("div");
  container.id = "container";
  wrapper.id = "wrapper";
  document.getElementById("root").appendChild(container);
  document.getElementById("container").appendChild(wrapper);
  //wrapper.textContent = "hello";

  function changeTab(e) {
    let currentTap = "api";
    const selectedTab = e.target.classList.value;
    if (selectedTab.includes("api")) {
      currentTap = "api";
    } else if (selectedTab.includes("local")) {
      currentTap = "local";
    }
  }

  init();
}

function init() {
  console.log("init");
  Header();
  Navbar();
  SearchBar();
  SearchResult();
}

export default App;
