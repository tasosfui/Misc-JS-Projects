const btns = document.querySelectorAll(".faq__toggle");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentNode.classList.toggle("faq--active");
  });
});
