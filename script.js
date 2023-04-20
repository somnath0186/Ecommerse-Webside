// Script for navigation bar
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

//Revel section

const allSections = document.querySelectorAll(".section");
const revelSection = function (entries, observe) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observe.unobserve(entry.target);
};

const observeSection = new IntersectionObserver(revelSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  observeSection.observe(section);
  section.classList.add("section--hidden");
});
