import $ from "../core";

$.prototype.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    const id = this[i].getAttribute("id");
    const menu = document.querySelector(`[data-dropdown]=${id}`);
    $(this[i]).click((e) => {
      e.preventDefault();
      menu.style.display = "";
    });
  }
};
