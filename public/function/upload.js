$('#img-area').click(function() {
    $('#input-file').click();
});

$('#input-file').change(function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.getElementById('img-area'); // $('img')[0]
            console.log(URL.createObjectURL(this.files[0]));

            img.style.backgroundImage = "url('" + URL.createObjectURL(this.files[0]) + "')"; // set src to blob url
        }
    });
});