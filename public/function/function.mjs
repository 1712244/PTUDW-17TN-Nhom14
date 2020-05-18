function ChangeClassNavItem(innerText) {
    var aTags = document.getElementsByClassName("nav-item");
    var searchText = innerText;
    var found;

    for (var i = 0; i < aTags.length; i++) {
        console.log(aTags[i].innerText);
        if (aTags[i].innerText == searchText) {
            found = aTags[i];
            break;
        }
    }

    console.log(found)
    if (found == undefined) {
        return 0;
    }
    found.childNodes[1].classList.remove("text-dark");
    found.childNodes[1].classList.add("text-white");
    found.classList.add("active-nav");
    return 1;
}

export { ChangeClassNavItem };