$(document).ready(function() {
    const formBuyRegiste = $("#formData");
    $("#btn-submit").click(function() {
        body = formBuyRegiste.serializeArray();
        arr = document.URL.split("/")
        id = arr[arr.length - 1]
        console.log(id);
        if (id == "buy-book")
            $.post('/api/buy-registed/insert', body)
            .done(function(data) {
                console.log(data);
                window.location.href = "/buy-book-manager";
            })
            .fail(function(data) {
                json = data.responseJSON;
                console.log(json.message);
            });
        else {
            body.push({ name: "_id", value: id })
            console.log(body);
            $.post('/api/buy-registed/update-by-id', body)
                .done(function(data) {
                    console.log(data);
                    window.location.href = "/buy-book-manager";
                })
                .fail(function(data) {
                    json = data.responseJSON;
                    console.log(json.message);
                });
        }
        return false;
    })
})