{
    const toggleBackgraound = () => {
        const content = document.querySelector(".content");
        const backgroundChangeButtonText = document.querySelector(".js-header__backgroundChangeButtonText");
        
        content.classList.toggle("js-darkContent");
        backgroundChangeButtonText.innerText = content.classList.contains("js-darkContent")
            ? "jasny"
            : "ciemny";
    };

    const hidePhoto = () => {
        const headerPhoto = document.querySelector(".js-header__photo");
        const headerButtonText = document.querySelector(".js-header__buttonText");

        headerPhoto.classList.toggle("js-header__photo--hidden");
        headerButtonText.innerText = headerPhoto.classList.contains("js-header__photo--hidden")
            ? "Pokaż"
            : "Ukryj";
    };

    const init = () => {
        const hidePhotoButton = document.querySelector(".js-header__button--hidePhoto");
        const backgroundChangeButton = document.querySelector(".js-header__button--backgroundChange");

        backgroundChangeButton.addEventListener("click", toggleBackgraound);
        hidePhotoButton.addEventListener("click", hidePhoto);
    }

    init();
}