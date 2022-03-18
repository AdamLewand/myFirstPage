let photo = document.querySelector(".photo__center");
let hidePhoto = document.querySelector(".photo__hidePhoto");
let backgroundChangeButton = document.querySelector(".photo__backgroundChangeButton");
let content = document.querySelector(".content");
let secondColor = document.querySelector(".secondColor");

hidePhoto.addEventListener("click", () => {
    photo.classList.toggle("hiddenPhoto");
    hidePhoto.innerText =
        photo.classList.contains("hiddenPhoto")
            ? "Pokaż zdjęcie"
            : "Ukryj zdjęcie";
});
backgroundChangeButton.addEventListener("click", () => {
  content.classList.toggle("hiddenBackGround");
})


