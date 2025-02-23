// Change Nav Height on Scroll
window.addEventListener("scroll", function () {
    const targetElement = document.querySelector("nav");
    const hiddenNav = document.querySelector("nav .hidden-menu");;
    const scrollPoint = 150;

    if (window.scrollY > scrollPoint) {
    targetElement.classList.add("short");
    hiddenNav.classList.add("short-hidden");
    } else {
    targetElement.classList.remove("short");
    hiddenNav.classList.remove("short-hidden");

    }
});


// Show Hidden Menu
const hiddenMenu = document.querySelector("nav .hidden-menu");
const burger = document.querySelector("nav .burger");

burger.addEventListener("click", (event) => {
    hiddenMenu.classList.toggle("show-small-menu");
    event.preventDefault();
    event.stopPropagation(); // Prevents the click from reaching `document`
});

// Hide menu when clicking outside
document.addEventListener("click", (event) => {
    if (!hiddenMenu.contains(event.target) && !burger.contains(event.target)) {
        hiddenMenu.classList.remove("show-small-menu");
    }
});

// Force Hidden Menu to be hidden in large screen
function checkClassOnResize() {
    let element = document.querySelector(".hidden-menu");

    if (window.innerWidth >= 750 && element.classList.contains("show-small-menu")) {
        element.classList.remove("show-small-menu");
        console.log("Class removed at 750px and above");
    }
}

// Run the function on window resize
window.addEventListener("resize", checkClassOnResize);