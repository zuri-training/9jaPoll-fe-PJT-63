// UI Variables
const body = document.querySelector("body");
const menu = document.querySelector(".nav-menu");
const openBtn = document.querySelector(".open-icon");
const closeBtn = document.querySelector(".close-icon");
const menuOverlay = document.querySelector(".menu-overlay");
const mediaSize = 861;


function fetchInfo(query) {
    const url = `https://poll9ja.herokuapp.com/api/candprofile`;

    fetch(url).then(response => response.json()).then((jsonData) => {
        console.log(jsonData);
    });

}


window.onload = () => {
    const searhBar = document.getElementById("searchField");
    searhBar.onkeyup = (e) => {
        fetchInfo(searhBar.value);
    }
}



// Toggle Nav
const toggleNav = () => {
    menu.classList.toggle("open");
    menuOverlay.classList.toggle(".active");
    body.classList.toggle("disabledScroll");
    console.log("click");
}

// Collapse Sub Menu
const collapseSubMenu = () => {
    menu.querySelector("sub-menu-parent.active .sub-menu").removeAttribute("style");
    menu.querySelector("sub-menu-parent.active").classList.remove("active");

}

loadEventListeners = () => {
    // Open Nav
    openBtn.addEventListener("click", toggleNav);

    // Close Nav
    closeBtn.addEventListener("click", toggleNav);

    // Close Nav by clicking outside
    menuOverlay.addEventListener("click", toggleNav);

    menu.addEventListener("click", (e) => {
        if (e.target.hasAttribute("data-toggle") && window.innerWidth <= mediaSize) {
            const subMenuParent = e.target.parentElement;

            // Collapse Sub Menu if already Expanded
            if (subMenuParent.classList.contains("active")) {
                collapseSubMenu();
            }

            // Collapse Existing Open Sub Menu
            if (menu.querySelector(".sub-menu-parent.active")) {
                collapseSubMenu();
            }

            // Expand New Sub Menu
            subMenuParent.classList.add("active");
            const subMenu = subMenuParent.querySelector(".sub-menu");
            subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
    })

    console.log("click");

}

loadEventListeners();


