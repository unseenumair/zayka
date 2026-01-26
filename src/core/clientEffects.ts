export function initClientEffects() {
  preventInspect();
  blockShortcuts();
  initRipple();
}

function preventInspect() {
  document.addEventListener("contextmenu", (e) => e.preventDefault());
}

function blockShortcuts() {
  document.addEventListener("keydown", (e) => {
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && ["I", "C", "J"].includes(e.key)) ||
      (e.ctrlKey && e.key === "U")
    ) {
      e.preventDefault();
    }
  });
}

function initRipple() {
  document.addEventListener("click", (e) => {
    const ripple = document.createElement("span");
    ripple.className = "ripple-effect";
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
}
