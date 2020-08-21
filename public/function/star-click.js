var listStar = ["1star", "2star", "3star", "4star", "5star"];
listStar.forEach(function (value, index) {
    document.getElementById(value).addEventListener("click", function () {
        listStar.forEach(elem => { document.getElementById(elem).classList.remove("star-checked") })
        for (var i = 0; i <= index; i++) {
            document.getElementById(listStar[i]).classList.add("star-checked");
        }
        document.getElementById("rate").value = index+1
    });
});