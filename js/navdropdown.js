const navServices = document.querySelector(".navServices");
const navDropdownList = document.querySelector(".navDropdownList");
const navbarLine = document.querySelector(".navbar");
const navdropdownContainer = document.querySelector(".navdropdownContainer");

navServices.addEventListener("mouseenter", () => {
  navDropdownList.classList.add("open");
});

navdropdownContainer.addEventListener("mouseleave", () => {
  navDropdownList.classList.remove("open");
});
