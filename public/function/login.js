function check_authen(username, password){
    var account_type = "sv";
    if (username === "gv"){
        account_type="gv";
    }
    return {isAccept: true, account_type: account_type};
}
function trigger_post_login(){
    var username = document.getElementById("username_form").value;
    var password = document.getElementById("password_form").value;
    var authen = check_authen(username, password);
    if (authen.isAccept){
        localStorage.setItem("account_type", authen.account_type);
    } 
    else {
        // alert wrong info
        return;
    }
}

  
$(document).ready(function () {
    const formLogin = $("#formLogin");
    const formSignup = $("#formSignup");
  
    formLogin.submit(function () {
      body = $(this).serializeArray();
      $.post('/api/account/sign-in', body)
        .done(function (data) {
          window.location.href = "/";
        })
        .fail(function (data) {
          json = data.responseJSON;
          alert(json.message);
        });
      return false;
    })
  
  
    formSignup.submit(function () {
      body = $(this).serializeArray();
      $.post('/users/signup', body)
        .done(function (data) {
          window.location.href = "/";
        })
        .fail(function (data) {
          json = data.responseJSON;
          alert(json.message);
        });
      return false;
    })
  })
