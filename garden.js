document.addEventListener("DOMContentLoaded", function () {
  const panel = document.getElementById("garden-panel");
  const rain = document.getElementById("rain");
  if (!panel || !rain) return;

  // Create raindrops once
  const dropCount = 80;
  for (let i = 0; i < dropCount; i++) {
    const drop = document.createElement("div");
    drop.className = "raindrop";
    drop.style.left = Math.random() * 100 + "vw";
    drop.style.animationDuration = 0.7 + Math.random() * 0.9 + "s";
    drop.style.animationDelay = Math.random() * 1.2 + "s";
    rain.appendChild(drop);
  }

  const toggleRain = () => {
    rain.classList.toggle("active");
  };

  panel.addEventListener("click", toggleRain);

  panel.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleRain();
    }
  });

  panel.setAttribute("tabindex", "0");
  panel.setAttribute("role", "button");
  panel.setAttribute("aria-pressed", "false");

  rain.addEventListener("transitionend", () => {
    panel.setAttribute(
      "aria-pressed",
      rain.classList.contains("active") ? "true" : "false"
    );
  });
});

