$('.select-box').on('change', function() {
    if (this.value == "bought-book") {
        // console.log(this.value);

        $(".booking-data").hide();
        $("#activate").hide();
        $(".bought-book-data").show();
        $("#bought-day").show();
    }

    if (this.value == "booking-book") {
        // console.log(this.value);

        $(".booking-data").show();
        $("#activate").show();
        $("#bought-day").hide();
        $(".bought-book-data").hide();

    }
});


$(document).ready(function() {
    $("#search-book").on("keyup", function() {

        $('.select-box').val();
        // console.log($('.select-box').val());

        if ($('.select-box').val() == "bought-book") {
            var value = $(this).val().toLowerCase();
            $("#table-manager .bought-book-data").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });

        } else if ($('.select-box').val() == "booking-book") {
            var value = $(this).val().toLowerCase();
            $("#table-manager .booking-data").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });

        }
    });
});