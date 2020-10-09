var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll(".plan button");
var noButton = document.querySelector("#modal__noButton");
var burgerMenu = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
// console.dir(backdrop);
// console.dir(selectPlanButtons);
console.dir(noButton);

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
}

noButton.addEventListener("click", closeModal);
backdrop.addEventListener("click", function () {
  mobileNav.style.display = "none";
  closeModal();
});

function closeModal() {
  modal.style.display = "none";
  backdrop.style.display = "none";
}

burgerMenu.addEventListener("click", function () {
  mobileNav.style.display = "block";
  backdrop.style.display = "block";
});
