import $ from "../core";

$.prototype.accordion = function () {
  for (let i = 0; i < this.length; i++) {
    this[i].click(() => {
      this[i].classList.toggle("active");
      this[i].nextElementSibling.classList.toggle("active");
    });
  }
};
