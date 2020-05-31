document.body.addEventListener("click", function(e) {
    if (e.target.closest("#btn-menu")) {
        document.getElementById("side-bar").style.width = "210px";
    } else if(!e.target.closest("#btn-menu")) {
        document.getElementById("side-bar").style.width = "";
    }
});