const burger = document.getElementById("hamburger");
const close = document.getElementById("close");
const overlay = document.querySelector(".overlay");
const body = document.body;

burger.addEventListener("click", () => {
    overlay.classList.remove("hide");
    burger.classList.add("hide");
    close.classList.remove("hide");
    body.classList.add("noscroll");
});

close.addEventListener("click", () => {
    overlay.classList.add("hide");
    burger.classList.remove("hide");
    close.classList.add("hide");
    body.classList.remove("noscroll");
})