let teamMember = document.querySelectorAll(".teamMember");

const moduleShow = () => {
  const triggerBottom = (window.innerHeight / 4) * 3;

  teamMember.forEach((teamMember) => {
    const moduleTop = teamMember.getBoundingClientRect().top;

    if (moduleTop < triggerBottom) {
      teamMember.classList.add("show");
    } else {
      teamMember.classList.remove("show");
    }
  });
};

window.addEventListener("scroll", moduleShow);
