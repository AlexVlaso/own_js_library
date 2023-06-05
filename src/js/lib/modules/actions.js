import $ from "../core";

$.prototype.on = function (event, callback) {
  if (!event || !callback) {
    return this;
  }
  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(event, callback);
  }
};

$.prototype.off = function (event, callback) {
  if (!event || !callback) {
    return this;
  }
  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(event, callback);
  }
};

$.prototype.click = function (callback) {
  if (!callback) {
    return this;
  }
  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener("click", callback);
  }
};
