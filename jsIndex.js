let sideBar  = document.querySelectorAll(".dropdown");
let sideBarBackground = document.getElementById("sidebar")

for (let i of  sideBar){
    i.addEventListener("click", function () {
        let yes = i.querySelector(".dropdown-content");

        if (yes.style.display === "flex"){
            yes.style.display = "none";
            let size = sideBarBackground.style.height
            sideBarBackground.style.height = "s";
            return;
        }

        yes.style.display = "flex";
        yes.style.flexDirection = "column";
        sideBarBackground.style.height = "90%";
    })
}
