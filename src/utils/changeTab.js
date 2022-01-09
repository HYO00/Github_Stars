function changeTab(e) {
  let currentTap = "api";
  const selectedTab = e.target.classList.value;
  console.log(selectedTab);
  if (selectedTab.includes("api")) {
    return (currentTap = "api");
  } else if (selectedTab.includes("local")) {
    return (currentTap = "local");
  }
}
export default changeTab;
