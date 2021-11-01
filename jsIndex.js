let sideBar  = document.querySelector(".dropdown");

sideBar.addEventListener("click", function() {

    console.log("Yes");
    sideBar.lastChild.setAttribute("display", "flex");
    sideBar.lastChild.setAttribute("flex-direction", "column")
})
