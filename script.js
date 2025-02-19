// Hero Section Entrance
window.addEventListener('load', function() {
  const hero = document.querySelector('.hero');
  hero.classList.add('show');
});

// Smooth Reveal on Scroll
const revealOnScroll = () => {
  const reveals = document.querySelectorAll('#about, #skills, .project-card');
  reveals.forEach(reveal => {
    const revealTop = reveal.getBoundingClientRect().top;
    if (revealTop < window.innerHeight - 100) {
      reveal.classList.add('show');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);

