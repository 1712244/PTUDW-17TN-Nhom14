$(document).ready(function() {
    const formLogin = $("#formLogin");
    const formSignup = $("#formSignup");
    formLogin.submit(function() {
        body = $(this).serializeArray();
        $.post('/api/account/sign-in', body)
            .done(function(data) {
                window.location.href = "/";
            })
            .fail(function(data) {
                json = data.responseJSON;
                // alert(json.message);
                $('#noti-login-problem').html(`<div class="alert alert-danger alert-dismissible fade show" role="alert"
                style="margin-top: -60px;">
                Mật khẩu hoặc tài khoản không đúng! Mời nhập lại!
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>`)
            });
        return false;
    })


    formSignup.submit(function() {
        body = $(this).serializeArray();
        // console.log(body)
        $.post('/api/account/sign-up', body)
            .done(function(data) {
                window.location.href = "/";
            })
            .fail(function(data) {
                json = data.responseJSON;
                alert(json.message);
            });
        return false;
    })
})