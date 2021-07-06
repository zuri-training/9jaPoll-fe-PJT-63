const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn")


// Open Menu
menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
})

// Close Menu
closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
})