const reseaux = document.querySelector(".reseaux");
const partage = document.querySelector(".imgVisible");
const hover = document.querySelector("#partage");

hover.addEventListener("mouseenter", () => {
  partage.classList.add("visible");
});
hover.addEventListener("mouseout", () => {
  setTimeout((hover) => {
    partage.classList.remove("visible");
  }, 1000);
});
partage.addEventListener("mousedown", () => {
  reseaux.classList.add("visible");
});
partage.addEventListener("mousedown", () => {
  setTimeout((partage) => {
    reseaux.classList.remove("visible");
  }, 5000);
});
