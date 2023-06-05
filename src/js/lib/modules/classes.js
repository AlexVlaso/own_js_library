import $ from "../core";

$.prototype.addClasses = function (...classes) {
  for (let i = 0; i < this.length; i++) {
    this[i].classList.add(...classes);
  }
  return this;
};
$.prototype.removeClasses = function (...classes) {
  for (let i = 0; i < this.length; i++) {
    this[i].classList.remove(...classes);
  }
  return this;
};
$.prototype.toggleClasses = function (...classes) {
  for (let i = 0; i < this.length; i++) {
    this[i].classList.toggle(...classes);
  }
  return this;
};
