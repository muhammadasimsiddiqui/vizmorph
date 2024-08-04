// NavBar Items Hover Effect
document.querySelectorAll(".nav-hero li a").forEach((link) => {
  link.addEventListener("mouseenter", function (event) {
    const { left, right } = this.getBoundingClientRect();
    const x = event.clientX;

    if (x - left < right - x) {
      this.classList.add("hover-left");
      this.classList.remove("hover-right");
    } else {
      this.classList.add("hover-right");
      this.classList.remove("hover-left");
    }
  });

  link.addEventListener("mouseleave", function () {
    this.classList.remove("hover-left", "hover-right");
  });
});

// Header Scrolling Effect
let nav = document.querySelector(".nav-hero");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 50) {
    nav.classList.add("heronavscroll");
  } else {
    nav.classList.remove("heronavscroll");
  }
};

//
const selectElement = document.getElementById("services");

selectElement.addEventListener("change", function () {
  if (selectElement.value === "") {
    selectElement.style.color = "#999";
  } else {
    selectElement.style.color = "#000";
  }
});
