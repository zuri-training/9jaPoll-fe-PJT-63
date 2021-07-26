// UI Variables
const menu = document.querySelector(".nav__wrapper");
const toggleBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-icon");
const menuOverlay = document.querySelector(".menu-overlay");
const mediaSize = 861;


// Fetch Data foe Search Bar
const getData = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    console.log(json);

    let candName = document.getElementById("candidate").value;
    // let jsonCand = json.cand_name;


    json.forEach((each, index) => {
        if (each.cand_name == candName) {
            let id = index;
            localStorage.setItem("value", id);

            let val = localStorage.getItem("value");
            console.log(id);
            window.location.href = "media and individual candidate page/presidential.html";

    }

});
}


const getList = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    console.log(json);

    json.forEach(each => {

        document.getElementById("cand").innerHTML += `<option value="${each.cand_name}">`;
        
    });
    
};

const url = "https://poll9ja.herokuapp.com/api/candprofile";
getList(url);



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

})












