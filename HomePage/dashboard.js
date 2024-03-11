const hamBurger = document.querySelector(".toggle-botton");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});