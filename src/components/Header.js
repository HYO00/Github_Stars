function Header() {
  const wrapper = document.querySelector("#wrapper");

  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  wrapper.appendChild(header);
  header.appendChild(h1);
  h1.textContent = "Github Stars";
}

export default Header;
