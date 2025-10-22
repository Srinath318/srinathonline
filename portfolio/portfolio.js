// --- Select elements ---
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-tabs .tab a");

// --- Measure header and set CSS variable --header-height (in px) ---
function updateHeaderHeightVar() {
  const header = document.querySelector(".header");
  if (!header) return;
  const h = header.getBoundingClientRect().height;
  document.documentElement.style.setProperty(
    "--header-height",
    `${Math.ceil(h)}px`
  );
  document.body.style.paddingTop = `${Math.ceil(h)}px`;
}

// Run on load
window.addEventListener("load", updateHeaderHeightVar);

// Run on resize (debounced)
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(updateHeaderHeightVar, 120);
});

// --- Scroll to section smoothly on click ---
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // prevent default jump

    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    const headerHeight = document
      .querySelector(".header")
      .getBoundingClientRect().height;

    window.scrollTo({
      top: targetSection.offsetTop - headerHeight,
      behavior: "smooth",
    });
  });
});

// --- Scroll spy: highlight active section ---
window.addEventListener("scroll", () => {
  let current = "";
  const headerHeight = document
    .querySelector(".header")
    .getBoundingClientRect().height;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - headerHeight - 1; // -1 for precise trigger
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.parentElement.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.parentElement.classList.add("active");
    }
  });
});

function reloadPage() {
  location.reload();
}
