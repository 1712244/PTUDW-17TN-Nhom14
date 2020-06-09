function ChangeClassNavItem_Lib(innerText) {
    var aTags = document.getElementById("side-bar").getElementsByClassName("nav-item");
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
    found.classList.add("nav-current");
    return 1;
}

var current_page = document.currentScript.getAttribute("current_page");
ChangeClassNavItem_Lib(current_page)