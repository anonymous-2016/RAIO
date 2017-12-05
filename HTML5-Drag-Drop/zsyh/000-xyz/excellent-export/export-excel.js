const ExportTableToExcel = () => {
    const data = [
        {
            "Product": "Product1",
            "Customer": "Customer1"
        },
        {
            "Product": "Product2",
            "Customer": "Customer2"
        },
        {
            "Product": "Product3",
            "Customer": "Customer3"
        },
        {
            "Product": "Product4",
            "Customer": "Customer4"
        }
    ];
    let table = `
        <html>
            <head>
                <style>
                    table, td {border:thin solid #f00}
                    table {border-collapse:collapse}
                </style>
            </head>
            <body>
                <table>
                    <tr>
    `;
    for (var i = 0; i < data.length; i++) {
        if (i === 0) {
            //create the heading row for the table before adding any data rows
            for (var prop in data[i]) {
                table += "<td>" + prop + "</td>";
            }
            table  += "<tr>";
        }
        //append data row now
        table  += "<tr>";
        for (var prop in data[i]) {
            table = table + "<td>" + (data[i][prop] === null ? "" : data[i][prop]) + "</td>";
        }
        table  += "</tr>";
    }
    table += "</table></body></html>";
    // no need
    table = table.replace(/<A[^>]*>|<\/A>/g, ""); //remove if u want links in your table
    table = table.replace(/<img[^>]*>/gi, ""); // remove if u want images in your table
    table = table.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params
    //show the exported data
    document.getElementById("exportedTable").innerHTML = table;
    document.getElementById("exportedHtml").innerHTML = table;
    //export data in Chrome or FireFox
    //this works in Chrome but not in FireFox
    //also no errors in firefox
    sa = true;
    var myBlob = new Blob([table], {
        type: 'text/html'
    });
    var url = window.URL.createObjectURL(myBlob);
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.href = url;
    // a.download = "newfile.xlsx";
    a.download = "newfile.xls";
    a.click();
    window.URL.revokeObjectURL(url);
    return (sa);
};


