// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Header shadow on scroll
const header = document.querySelector(".site-header");
const onScroll = () => {
  if (window.scrollY > 8) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Smooth scroll for in-page anchors
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (id.length > 1) {
      const el = document.querySelector(id);
      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth", block: "start" }); }
    }
  });
});

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  });
}, { threshold: 0.15 });
document.querySelectorAll(".feature-card, .brand-frame, .cta-card, .hero-visual").forEach((el) => {
  el.classList.add("reveal");
  io.observe(el);
});