// Navigation 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Scroll 
const sections = document.querySelectorAll("section");
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
      entry.target.style.transition = "all 1s ease";
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(50px)";
  sectionObserver.observe(section);
});




