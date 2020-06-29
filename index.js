const share = document.querySelector(".share");
const shareMobile = document.querySelector(".shareMobile");
const shareDesktop = document.querySelector(".shareDesktop");
const shareHeight = document.querySelector(".author").offsetHeight+40;

shareMobile.style.height = shareHeight+"px";

let active = false;



share.addEventListener("click", function () {
    if (window.innerWidth < 1024) {
        if (!active) {
            share.classList.add("active");
            shareMobile.style.opacity = "1";
            active = true;
        } else {
            share.classList.remove("active");
            shareMobile.style.opacity = "0";
            active = false;
        }
    } else {
        if (!active) {
            share.classList.add("active");
            shareDesktop.style.opacity = "1";
            active = true;
        } else {
            share.classList.remove("active");
            shareDesktop.style.opacity = "0";
            active = false;
        }
    }


});