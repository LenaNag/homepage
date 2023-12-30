let headerPhoto = document.querySelector(".js-header__photo");
let hidePhotoButton = document.querySelector(".js-header__button--hidePhoto");
let headerButtonText = document.querySelector(".js-header__buttonText");

hidePhotoButton.addEventListener("click", () => {
    headerPhoto.classList.toggle("js-header__photo--hidden");
    if (headerPhoto.classList.contains("js-header__photo--hidden")) {
        headerButtonText.innerText = "Pokaż";
    } else {
        headerButtonText.innerText = "Ukryj";
    };
});