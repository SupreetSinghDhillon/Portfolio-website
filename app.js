const themeSelector = document.querySelector("#theme");
document.body.classList.add("blue");
themeSelector.addEventListener("change", function () {
  if (themeSelector.value === "blue") {
    document.body.classList.remove("orange");
    document.body.classList.add("blue");
  } else {
    document.body.classList.remove("blue");
    document.body.classList.add("orange");
  }
});
