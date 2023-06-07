import $ from "../core";
$.prototype.tab = function () {
  const contents = this[0].parentNode.nextElementSibling.children;
  for (let i = 0; i < this.length; i++) {
    this[i].click(() => {
      this[i].classList.add("active");
      $(this[i]).siblings().removeClasses("active");
      contents[i].classList.add("active");
      $(contents[i]).siblings().removeClasses("active");
    });
  }
};
