document.documentElement.classList.add("js");

const menuToggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");

function closeMenu() {
  if (!menuToggle || !menu) return;

  menuToggle.setAttribute("aria-expanded", "false");
  menu.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menu.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menuToggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 880) closeMenu();
  });
}

const subject = "Poptávka z webu – zednické práce";
const body = [
  "Dobrý den,",
  "",
  "mám zájem o následující práci:",
  "",
  "Místo realizace:",
  "Přibližný rozsah:",
  "Preferovaný termín:",
  "",
  "Fotografie současného stavu přikládám k e-mailu.",
  "",
  "Prosím o zpětnou domluvu.",
].join("\n");

const emailHref = `mailto:josefstruhar@seznam.cz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

document.querySelectorAll("[data-email-link]").forEach((link) => {
  link.setAttribute("href", emailHref);
});

const revealItems = document.querySelectorAll(".reveal");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -8%" },
  );

  revealItems.forEach((item) => observer.observe(item));
}
