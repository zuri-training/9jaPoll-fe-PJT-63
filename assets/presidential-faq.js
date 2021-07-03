var more = document.getElementsByClassName("more");
var i;
var buttonText = document.getElementById("myButton") ;

for (i = 0; i < more.length; i++) {
  more[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";

      
    } else {
      content.style.display = "block";
    
      
    }
  });


}
