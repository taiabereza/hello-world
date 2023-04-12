const catsItems = document.querySelectorAll(".cats__item");
const catsDescr = document.querySelectorAll(".cats__descr");

catsItems.forEach((item, i) => {
  item.addEventListener("click", () => {
    if (catsDescr[i].classList.contains("active")) {
      catsDescr[i].classList.remove("active");
    } else {
      catsDescr[i].classList.add("active");
    }
  });
});
