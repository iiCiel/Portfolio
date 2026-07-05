const cursorLight = document.querySelector(".cursor-light");
const finePointer = window.matchMedia("(pointer: fine)");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (cursorLight && finePointer.matches && !reduceMotion.matches) {
  let pendingX = window.innerWidth / 2;
  let pendingY = window.innerHeight * 0.2;
  let frameQueued = false;

  const applyPosition = () => {
    frameQueued = false;
    // scoped to the element itself, not documentElement, so this never
    // triggers a style recalc outside the one node that reads it
    cursorLight.style.setProperty("--mx", `${pendingX}px`);
    cursorLight.style.setProperty("--my", `${pendingY}px`);
  };

  window.addEventListener(
    "pointermove",
    (event) => {
      pendingX = event.clientX;
      pendingY = event.clientY;
      if (!frameQueued) {
        frameQueued = true;
        requestAnimationFrame(applyPosition);
      }
    },
    { passive: true }
  );
}

const reveals = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

reveals.forEach((element) => revealObserver.observe(element));

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  });
});
