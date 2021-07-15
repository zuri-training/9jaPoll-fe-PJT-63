const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn")


// Open Menu
menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
});

// Close Menu
closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
});



const getData = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    console.log(json);

    let candName = document.getElementById("candidate").value;
    // let jsonCand = json.cand_name;


    json.forEach((each, index) => {
        if (each.cand_name == candName) {
            console.log(each);
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
    //let selList = [];

    // let select = document.getElementById('selection');
    // let option = select.options[select.selectedIndex];

    json.forEach(each => {

        document.getElementById("cand").innerHTML += `<option value="${each.cand_name}">`;
        
    });
    
};

const url = "https://poll9ja.herokuapp.com/api/candprofile";
getList(url);