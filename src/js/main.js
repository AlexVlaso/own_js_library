import $ from "./lib/lib";

$(".active").on("click", logger);

$(".active").off("click", logger);

function logger() {
  console.log("Hello");
}
