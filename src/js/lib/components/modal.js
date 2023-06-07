import $ from "../core";

$.prototype.modal = function () {
  for (let i = 0; i < this.length; i++) {
    const modalId = this[i].getAttribute("data-modal-id");
    const modal = $(modalId);
    const close = modal.querySelectorAll(".close");
    $(this[i]).click((e) => {
      e.preventDefault();
      modal.style.display = "";
    });
    $(close).click((e) => {
      e.preventDefault();
      modal.style.display = "none";
    });
    $(".modal").click((e) => {
      e.preventDefault();
      if (e.target.classList.contains(".modal")) {
        modal.style.display = "none";
      }
    });
  }
};
