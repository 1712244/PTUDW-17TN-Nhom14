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
      console.log(body)
      $.post('/api/account/sign-up', body)
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
