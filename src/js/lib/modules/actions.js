import $ from "../core";
$.prototype.html = function (selector) {
  for (let i = 0; i < this.length; i++) {
    this[i].innerHTML = selector;
  }
};
$.prototype.eq = function (index) {
  this[0] = this[index];
  for (let i = 1; i < this.length; i++) {
    delete this[i];
  }
  this.length = 1;
  return this;
};
$.prototype.index = function () {
  const parent = this[0].parentNode;
  const childs = [...parent.children];
  return childs.indexOf(this[0]);
};
$.prototype.find = function (selector) {
  let index = 0;
  const copyObj = Object.assign({}, this);
  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].querySelectorAll(selector);
    if (arr.length === 0) {
      continue;
    }
    for (let j = 0; j < arr.length; j++) {
      this[index] = arr[j];
      index++;
    }
  }
  for (let i = index - 1; i < this.length; i++) {
    delete this[i];
  }
  this.length = index;
  return this;
};
$.prototype.closest = function (selector) {
  let index = 0;
  const copyObj = Object.assign({}, this);
  for (let i = 0; i < copyObj.length; i++) {
    const item = copyObj[i].closest(selector);
    if (!item) {
      continue;
    }
    this[index] = item;
    index++;
  }
  for (let i = index; i < this.length; i++) {
    delete this[i];
  }
  this.length = index;
  return this;
};
$.prototype.siblings = function () {
  let index = 0;
  const copyObj = Object.assign({}, this);
  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].parentNode.children;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === copyObj[i]) {
        continue;
      }
      this[index] = arr[j];
      index++;
    }
  }
  for (let i = index; i < this.length; i++) {
    delete this[i];
  }
  this.length = index;
  return this;
};
