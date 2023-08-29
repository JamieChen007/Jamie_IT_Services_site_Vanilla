const navbar = document.querySelector(".navbar");
const navbarLinkListBlock = document.querySelector(".navbarLinkList");

window.addEventListener("scroll", () => {
  if (this.window.scrollY > navbar.offsetHeight + 150) {
    navbar.classList.add("active");
    if (navbarLinkListBlock.classList.contains("mobile")) {
      navbarLinkListBlock.style.top = "6rem";
    }
  } else {
    navbar.classList.remove("active");
    if (navbarLinkListBlock.classList.contains("mobile")) {
      navbarLinkListBlock.style.top = "8rem";
    }
  }
});
