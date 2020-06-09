function ChangeClassNavItem_Lib(innerText) {
    var aTags = document.getElementById("navbarNav").getElementsByClassName("nav-item");
    var searchText = innerText;
    var found;
    for (var i = 0; i < aTags.length; i++) {
        // Khi chuyển về dropdown thì string sẽ có nhiều kí tự padding, nên check includes là ổn
        if (aTags[i].innerText.includes(searchText)) {
            found = aTags[i];
            break;
        }
    }

    // console.log(found)
    if (found == undefined) {
        return 0;
    }
    found.childNodes[1].classList.remove("text-dark");
    found.childNodes[1].classList.add("text-white");
    found.classList.add("active-nav");
    return 1;
}

var current_page = document.currentScript.getAttribute("current_page");
ChangeClassNavItem(current_page)