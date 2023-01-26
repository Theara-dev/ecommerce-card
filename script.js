const activeImage = document.querySelector(".active-image img");
const images = document.querySelectorAll(".img");

images.forEach((item) => {
  item.addEventListener("mouseover", () => {
    activeImage.src = item.firstElementChild.src;

    images.forEach((img) => {
      img.classList.remove("change");
    });

    item.classList.add("change");
  });
});
