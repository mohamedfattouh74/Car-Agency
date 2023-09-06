document.getElementById("offer").style.backgroundImage =
  "url(assets/img/offer-bg.png)";
let listOfCards = document.querySelectorAll(".card-selection");
function selection(brand) {
  listOfCards.forEach((card) => {
    console.log(card);
    if (!card.classList.contains(brand)) {
      card.classList.add("hidden");
    }
  });
}
let allButton = document.querySelector(".all");
let teslaButton = document.querySelector(".tesla-button");
let audiButton = document.querySelector(".audi-button");
let porscheButton = document.querySelector(".porsche-button");

allButton.addEventListener("click", () => {
  listOfCards.forEach((card) => {
    card.classList.remove("hidden");
  });
});

teslaButton.addEventListener("click", () => {
  listOfCards.forEach((card) => {
    !card.classList.contains("tesla")
      ? card.classList.add("hidden")
      : card.classList.remove("hidden");
  });
});

audiButton.addEventListener("click", () => {
  listOfCards.forEach((card) => {
    !card.classList.contains("audi")
      ? card.classList.add("hidden")
      : card.classList.remove("hidden");
  });
});
porscheButton.addEventListener("click", () => {
  listOfCards.forEach((card) => {
    !card.classList.contains("porsche")
      ? card.classList.add("hidden")
      : card.classList.remove("hidden");
  });
});

//Scroll Reveal

sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(".main-title");
sr.reveal(".main-subtitle", { delay: 500 });
sr.reveal(".main-description", { delay: 600 });
sr.reveal(".main-img", { delay: 600 });
sr.reveal(".main-data", {
  delay: 900,
  origin: "bottom",
  interval: 100,
});
sr.reveal(".main-button", {
  delay: 1000,
  origin: "bottom",
  interval: 100,
});
sr.reveal(".machine-image", { origin: "left", delay: 200 });
sr.reveal(".machine-description", { origin: "right", delay: 300 });
sr.reveal(".cards-section-title");
sr.reveal(".cards-container", {
  delay: 400,
  origin: "bottom",
  interval: 100,
});
sr.reveal(".more-features");
sr.reveal(".features-car", { origin: "bottom", delay: 800 });
sr.reveal(".card-1", { origin: "left", delay: 800, interval: 400 });
sr.reveal(".card-2", {
  origin: "top",
  delay: 700,
  interval: 400,
  position: "5px",
});
sr.reveal(".card-3", { origin: "right", delay: 800, interval: 400 });
sr.reveal(".special-offer-description", { origin: "left", delay: 400 });
sr.reveal(".special-offer-img", {
  origin: "right",
  delay: 400,
  distance: "100px",
});
sr.reveal(".car-brand", { duration: 2000 });
sr.reveal(".card-selection", { delay: 800, interval: 200 });
sr.reveal(".car-icons", { delay: 400 });
sr.reveal("footer", { delay: 600, interval: 100 });
sr.reveal(".copy-right", { origin: "bottom", delay: 800 });
