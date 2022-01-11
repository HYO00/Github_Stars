import changeTab from "../utils/changeTab";

function Navbar() {
  const wrapper = document.querySelector("#wrapper");
  const section = document.createElement("section");
  const nav = document.createElement("nav");

  section.id = "subbar";
  wrapper.appendChild(section);
  section.appendChild(nav);

  //console.log(curTap);
  const tapBtn = document.querySelector("#subbar");

  tapBtn.addEventListener("click", changeTab);
  //console.log("nav", currentTap);

  return (nav.innerHTML = `

  <button class="subbar_menu api selected">API</button>
  <button class="subbar_menu local">로컬</button>

             
  `);
}

export default Navbar;
