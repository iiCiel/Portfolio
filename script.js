const hero = document.querySelector(".hero");
const sceneVideos = Array.from(document.querySelectorAll(".scene-video"));
const sceneButtons = Array.from(document.querySelectorAll(".scene-switcher button"));
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const contactForm = document.querySelector("#contact-form");
const emailInput = document.querySelector("#email-input");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let activeScene = 0;
let sceneLocked = false;
let lockTimer = 0;

function setScene(nextScene) {
  if (sceneLocked || nextScene === activeScene || !sceneVideos[nextScene]) {
    return;
  }

  const previousScene = activeScene;
  const nextVideo = sceneVideos[nextScene];
  const previousVideo = sceneVideos[previousScene];

  sceneLocked = true;
  activeScene = nextScene;

  nextVideo.play().catch(() => {});
  nextVideo.classList.add("is-active");
  previousVideo.classList.remove("is-active");

  sceneButtons.forEach((button, index) => {
    const selected = index === nextScene;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-selected", String(selected));
  });

  hero.classList.toggle("has-dark-content", nextScene === 2);

  window.clearTimeout(lockTimer);
  lockTimer = window.setTimeout(() => {
    sceneVideos.forEach((video, index) => {
      if (index !== activeScene) {
        video.pause();
      }
    });
    sceneLocked = false;
  }, 1000);
}

sceneButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setScene(Number(button.dataset.scene));
  });
});

sceneVideos.forEach((video, index) => {
  if (index !== activeScene) {
    video.pause();
  }
});

function setMenu(open) {
  menuToggle.classList.toggle("is-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  mobileMenu.classList.toggle("is-open", open);
  mobileMenu.setAttribute("aria-hidden", String(!open));
  document.body.classList.toggle("menu-open", open);
}

menuToggle.addEventListener("click", () => {
  setMenu(!menuToggle.classList.contains("is-open"));
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = emailInput.value.trim();
  const subject = encodeURIComponent("Portfolio inquiry");
  const body = encodeURIComponent(email ? `Hi Soliman,\n\nYou can reply to me at ${email}.\n\n` : "Hi Soliman,\n\n");
  window.location.href = `mailto:solimansultan59@gmail.com?subject=${subject}&body=${body}`;
});

const reveals = document.querySelectorAll(".reveal");

if (reduceMotion.matches) {
  reveals.forEach((element) => element.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  reveals.forEach((element) => revealObserver.observe(element));
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  });
});
