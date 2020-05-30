// this function is a temporary method for login function. 
function login_checking_type_and_loading() {
    var current_account_type = localStorage.getItem("account_type");
    // current_account_type = "sv"
    if (current_account_type === null) {
        return;
    }
    else {
        var target_li_tag = document.getElementById("login-checking-area");
        target_li_tag.innerHTML = "";
        target_li_tag.className = "nav-item nav-item-padding btn-group d-contents";
        // use xmlh to load raw html
        var client = new XMLHttpRequest();
        if (current_account_type === "gv") {
            client.open('GET', '/template-html/giaovien-dropdown.html');
            client.onreadystatechange = function () {
                target_li_tag.innerHTML = client.responseText;
            }
        }
        else {
            client.open('GET', '/template-html/sinhvien-dropdown.html');
            client.onreadystatechange = function () {
                target_li_tag.innerHTML = client.responseText;
            }
        }
        client.send();
    }

}

login_checking_type_and_loading();
