window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".navbar__menu"),
        menu3 = document.querySelector(".navbar__menu3"),
        navbar = document.querySelector(".navbar__info"),
        menuItem = document.querySelectorAll(".navbar__menu-list"),
        menuItem3 = document.querySelectorAll(".navbar3__menu-list"),
        navbarItem = document.querySelectorAll(".navbar__info-list"),
        hamburger = document.querySelector(".hamburger");
        

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("hamburger--active");
        menu.classList.toggle("navbar__menu--active");
        menu3.classList.toggle("navbar__menu3--active");
        navbar.classList.toggle("navbar__info--active");
    });

    menuItem.forEach((item) => {
        item.addEventListener("click", () => {
            hamburger.classList.toggle("hamburger--active");
            menu.classList.toggle("navbar__menu--active");
        });
    });

    menuItem3.forEach((item) => {
        item.addEventListener("click", () => {
            hamburger.classList.toggle("hamburger--active");
            menu3.classList.toggle("navbar__menu3--active");
        });
    });

    navbarItem.forEach((item) => {
        item.addEventListener("click", () => {
            hamburger.classList.toggle("hamburger--active");
            navbar.classList.toggle("navbar__info--active");
        });
    });
});

$(function () {
    $(".discount__wrapper-inner").slick({
        Infinity: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: false,
        speed: 350,
        fade: true,
        cssEase: "linear",
        prevArrow: $(".discount__arrows-prev"),
        nextArrow: $(".discount__arrows-next"),
    });
});

let i = 1;
const slideLength = $(".discount__info").length;

$(".slick-counter #all").text(slideLength);

const updateCounter = (index) => $(".slick-counter #count").text(index);

$(".discount__arrows-prev").click(() => {
    i--;
    if (i < 1) {
        i = slideLength;
    }
    updateCounter(i);
});

$(".discount__arrows-next").click(() => {
    i++;
    if (i > slideLength) {
        i = 1;
    }
    updateCounter(i);
});

function myFunction(x) {
    x.classList.toggle("change");
}

const languageEng = document.querySelector(".language__eng"),
    languagePol = document.querySelector(".language__pol");

languageEng.addEventListener("click", () => {
    console.log("English selected");
});

languagePol.addEventListener("click", () => {
    console.log("Poland selected");
});

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
