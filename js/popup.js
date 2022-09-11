const openPopUP = document.getElementById("open_pop_up"),
    closePopUp = document.getElementById("pop_up_close"),
    popUp = document.getElementById("pop_up");

openPopUP.addEventListener("click", function (e) {
    e.preventDefault();
    popUp.classList.add("active");
});

closePopUp.addEventListener("click", () => {
    popUp.classList.remove("active");
});
