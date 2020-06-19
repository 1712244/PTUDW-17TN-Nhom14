function download_csv(csv, filename) {
    var csvFile;
    var downloadLink;
    convertString = JSON.parse(JSON.stringify(csv));
    console.log(convertString);
    var encodedUri = encodeURI(convertString);
    var link = document.createElement("a");
    link.setAttribute("href", "data:text/csv;charset=utf-8,\uFEFF" + encodedUri);
    link.setAttribute("download", "report.csv");
    link.click();

    // // CSV FILE
    // csvFile = new Blob([csv], { type: "text/plain;charset=utf-8;" });
    // console.log(csvFile);
    // convertString = JSON.parse(JSON.stringify(csv));
    // console.log(convertString);
    // csvFile1 = new Blob([JSON.stringify(convertString)], { type: "text/plain;charset=utf-8;" });
    // console.log(csvFile1);

    // // Download link
    // downloadLink = document.createElement("a");

    // // File name
    // downloadLink.download = filename;

    // // We have to create a link to the file
    // downloadLink.href = window.URL.createObjectURL(csvFile1);

    // // Make sure that the link is not displayed
    // downloadLink.style.display = "none";

    // // Add the link to your DOM
    // document.body.appendChild(downloadLink);

    // // Lanzamos
    // downloadLink.click();
}

function export_table_to_csv(html, filename) {
    var csv = [];
    var rows = document.querySelectorAll("table tr");

    for (var i = 0; i < rows.length; i++) {
        var row = [],
            cols = rows[i].querySelectorAll("td, th");

        for (var j = 0; j < cols.length; j++)
            row.push(cols[j].innerText);

        csv.push(row.join(","));
    }
    console.log(csv);

    // Download CSV
    download_csv(csv.join("\n"), filename);
}

document.querySelector("#btn").addEventListener("click", function() {
    var html = document.querySelector("table").outerHTML;
    export_table_to_csv(html, "table.xlsx");
});