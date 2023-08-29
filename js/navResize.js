const navbarLinkList = document.querySelector(".navbarLinkList");
const navMobileBtn = document.querySelector(".navMobileBtn");
const picContainer = document.querySelector(".picContainer");

const resizeFn = () => {
  console.log("change size", window.innerWidth);
  const currentWidth = window.innerWidth;
  if (currentWidth < 1000) {
    navbarLinkList.classList.add("hide");
    navMobileBtn.classList.add("show");
  } else {
    navbarLinkList.classList.remove("hide");
    navMobileBtn.classList.remove("show");
    navbarLinkList.classList.remove("mobile");
    picContainer.style.marginTop = "8rem";
  }
};

resizeFn();

window.addEventListener("resize", resizeFn);

navMobileBtn.addEventListener("click", () => {
  navbarLinkList.classList.toggle("mobile");
  if (navbarLinkList.classList.contains("mobile")) {
    picContainer.style.marginTop = "18rem";
  } else {
    picContainer.style.marginTop = "8rem";
  }
});
