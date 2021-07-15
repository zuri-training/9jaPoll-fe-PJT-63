// UI Variables
const menu = document.querySelector(".nav__wrapper");
const toggleBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-icon");
const menuOverlay = document.querySelector(".menu-overlay");
const mediaSize = 861;


// Toggle Menu
toggleBtn.addEventListener("click", function () {
    menu.classList.toggle("active");
    menuOverlay.classList.toggle("show");
    document.body.classList.toggle("disabledScroll");
  });

// Sub Menu Event Listener
menu.addEventListener("click", (e) => {
    if (e.target.hasAttribute("data-toggle") && window.innerWidth <= mediaSize) {
        const subMenuParent = e.target.parentElement;
        // Collapse Sub Menu if already Expanded
        if (subMenuParent.classList.contains("show")) {
            collapseSubMenu();
        }
        // Collapse Existing Open Sub Menu
        if (menu.querySelector(".sub-menu-parent.show")) {
            collapseSubMenu();
        }
        // Expand New Sub Menu
        subMenuParent.classList.add("show");
        const subMenu = subMenuParent.querySelector(".sub-menu");
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
    } 

    function collapseSubMenu() {
        menu.querySelector("sub-menu-parent.show .sub-menu").removeAttribute("style");
        menu.querySelector("sub-menu-parent.show").classList.remove("show");
    }



    // if (e.target.hasAttribute("data-toggle") && window.innerWidth <= mediaSize) {
    //     const subMenuParent = e.target.parentElement;
    //     // Collapse Sub Menu if already Expanded
    //     if (subMenuParent.classList.contains("active")) {
    //         collapseSubMenu();
    //     }
    //     // Collapse Existing Open Sub Menu
    //     if (menu.querySelector(".sub-menu-parent.active")) {
    //         collapseSubMenu();
    //     }
    //     // Expand New Sub Menu
    //     subMenuParent.classList.add("active");
    //     const subMenu = subMenuParent.querySelector(".sub-menu");
    //     subMenu.style.maxHeight = subMenu.scrollHeight + "px";
    // }
})












