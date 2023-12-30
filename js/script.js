let headerPhoto = document.querySelector(".js-header__photo");
let hidePhotoButton = document.querySelector(".js-header__button--hidePhoto");
let headerButtonText = document.querySelector(".js-header__buttonText");
let backgroundChangeButton = document.querySelector(".js-header__button--backgroundChange");
let backgroundChangeButtonText = document.querySelector(".js-header__backgroundChangeButtonText");
let content = document.querySelector(".content");

hidePhotoButton.addEventListener("click", () => {
    headerPhoto.classList.toggle("js-header__photo--hidden");
    headerButtonText.innerText = headerPhoto.classList.contains("js-header__photo--hidden")
        ? "Pokaż"
        : "Ukryj";
});

backgroundChangeButton.addEventListener("click", () => {
    content.classList.toggle("js-darkContent");
    if (content.classList.contains("js-darkContent")) {
        backgroundChangeButtonText.innerText = "jasny";
    } else {
        backgroundChangeButtonText.innerText = "ciemny";
    };
});