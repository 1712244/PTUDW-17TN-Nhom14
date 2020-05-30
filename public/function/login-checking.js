// this function is a temporary method for login function. 
function login_checking() {
    var current_account_type = localStorage.getItem("account_type");
    // current_account_type = "sv"
    // <a class="nav-link text-dark" href="/login">Đăng nhập</a>
    var target_li_tag = document.getElementById("login-checking-area");
    var a_tag = document.createElement("a");
    a_tag.className = "nav-link text-dark";


    if (current_account_type === null) {
        return;
    }
    else if (current_account_type === "gv") {
        a_tag.href = "#";
        a_tag.innerHTML = "Giáo viên";
    }
    else {
        a_tag.href = "#";
        a_tag.innerHTML = "Sinh viên";
    }
    // If we stay in the login section this would be a bug (blue background), but it won't happen in real scenario since
    // since we immediately direct user to home after login. 
    target_li_tag.innerHTML="";
    target_li_tag.appendChild(a_tag);
}

login_checking();
