
document.addEventListener("DOMContentLoaded", () => {
  // Navbar active link on scroll
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let currentSectionId = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 150) {
        currentSectionId = section.getAttribute("id");
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  });

  // Hamburger menu toggle
  const hamburger = document.getElementById("hamburger-menu");
  const navLinksMenu = document.querySelector(".nav-links");
  if (hamburger && navLinksMenu) {
    hamburger.addEventListener("click", () => {
      navLinksMenu.classList.toggle("active");
    });
  }
});