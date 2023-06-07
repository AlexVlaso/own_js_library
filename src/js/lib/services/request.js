import $ from "../core";

$.prototype.get = async function (url) {
  let res = await fetch(url);
  if (!res.ok) {
    throw new Error("Error");
  }
  return await res.json();
};

$.prototype.post = async function (url, data) {
  let res = await fetch(url, {
    body: data,
    method: "POST",
  });
  if (!res.ok) {
    throw new Error("Error");
  }
  return await res.json();
};
