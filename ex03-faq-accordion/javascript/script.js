const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    const body = accordion.querySelector(".accordion-body");
    body.classList.toggle("active");

    if (document.getElementById("click").src == "https://flic.kr/p/2qfyozU") {
      document.getElementById("click").src = "https://flic.kr/p/2qfszyJ";
    } else {
      document.getElementById("click").src = "https://flic.kr/p/2qfyozU";
    }
  });
});
