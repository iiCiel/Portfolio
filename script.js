const tiltCard = document.querySelector("[data-tilt-card]");

if (tiltCard && window.matchMedia("(pointer: fine)").matches) {
  tiltCard.addEventListener("pointermove", (event) => {
    const bounds = tiltCard.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    tiltCard.style.transform = `perspective(900px) rotateX(${y * -5}deg) rotateY(${x * 7}deg)`;
  });

  tiltCard.addEventListener("pointerleave", () => {
    tiltCard.style.transform = "";
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  });
});

const revealTargets = document.querySelectorAll(
  ".hero-copy, .portrait-stage, .tool-strip, .section-heading, .about-grid, .project-row, .skills-section .skill-cloud, .ai-workflow-grid, .motion-prompt-row, .contact-band, .site-footer"
);

revealTargets.forEach((element) => {
  element.setAttribute("data-reveal", "");
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealTargets.forEach((element) => revealObserver.observe(element));
