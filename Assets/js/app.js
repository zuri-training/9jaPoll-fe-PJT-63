const header = document.querySelector(".sec-header");
const topNav = document.querySelector("#top-nav");
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn")


// Scroll Sticky 
const sticky = () => {
    const forSticky = topNav.classList.contains("hide-for-sticky");
    
    // if (forSticky) {
    //     topNav.style.display = "none";
    // }
    header.classList.toggle("sticky", window.scrollY > 0);

}

// Show Menu
const show = () => {
    menu.classList.add("active");
}

// Hide Menu
const hide = () => {
    menu.classList.remove("active");
}


// Event Listeners
const loadEventListeners = () => {
    // Sticky Nav when scroll
    window.addEventListener("scroll", sticky);

    // Show Menu
    menuBtn.addEventListener("click", show);

    // Hide Menu
    closeBtn.addEventListener("click", hide);
}

// Load Event Listeners
loadEventListeners();