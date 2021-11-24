let sideBar  = document.querySelectorAll(".dropdown");
let sideBarBackground = document.getElementById("sidebar")

for (let i of  sideBar){
    i.addEventListener("click", function () {
        let yes = i.querySelector(".dropdown-content");

        if (yes.style.display === "flex"){
            yes.style.display = "none";
            sideBarBackground.style.height = "80%" ;
            return;
        }

        yes.style.display = "flex";
        yes.style.flexDirection = "column";
        sideBarBackground.style.height = "90%";
    })
}


