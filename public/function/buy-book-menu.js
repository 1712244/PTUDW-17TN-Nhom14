$('.select-box').on('change', function() {
    if (this.value == "bought-book") {
        console.log(this.value);

        $(".booking-data").hide();
        $(".bought-book-data").show();
        $("#activate").hide();
        $("#bought-day").show();
    }

    if (this.value == "booking-book") {
        console.log(this.value);
        $(".bought-book-data").hide();
        $(".booking-data").show();
        $("#bought-day").show();
        $("#activate").hide();

    }
});