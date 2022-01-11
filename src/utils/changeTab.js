function changeTab(e) {
  const selectedTab = e.target.classList.value;
  console.log("main", e.target.classList.value);
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

export default changeTab;
