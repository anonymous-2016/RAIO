// exportExcelUsingBlobAndURL.js

/**
 * xgqfrms
 * created 2017.10.13
 * @param {Array} data 
 * @param {Boolean} debug 
 * @param {String} url 
 */

const exportExcelUsingBlobAndURL = (data = [], debug = false, url) => {
    // fetch url ???
};





function ExportTableToExcel() {
    var data = [{
        "key": "value1",
        "username": "Customer1",
        "password": "pwd@001"
    }, {
        "key": "value2",
        "username": "Customer2",
        "password": "pwd@002"
    }, {
        "key": "value3",
        "username": "Customer3",
        "password": "pwd@003"
    }, {
        "key": "value4",
        "username": "Customer4",
        "password": "pwd@004"
    }];
    var table = `
        <html>
            <head>
                <style> 
                    table, td {
                        border:thin solid black
                    }
                    table {
                        border-collapse:collapse
                    }
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
                table = table + "<td>" + prop + "</td>";
            }
            table = table + "</tr>";
        }
        //append data row now
        table = table + "<tr>";
        for (var prop in data[i]) {
            table = table + "<td>" + (data[i][prop] === null ? "" : data[i][prop]) + "</td>";
        }
        table = table + "</tr>";
    }
    table = table + `
        </table>
            </body>
                </html>
    `;
    table = table.replace(/<a[^>]*>|<\/a>/ig, ""); //remove if u want links in your table
    table = table.replace(/<img[^>]*>/ig, ""); // remove if u want images in your table
    table = table.replace(/<input[^>]*>|<\/input>/ig, ""); // reomves input params
    //show the exported data
    // test
    document.getElementById("exportedTable").innerHTML = table;
    document.getElementById("exportedHtml").innerHTML = table;
    //export data in Chrome or FireFox
    //this works in Chrome but not in FireFox
    //also no errors in firefox
    let sa = true;
    var myBlob = new Blob([table], {
        type: 'text/html'
    });
    var url = window.URL.createObjectURL(myBlob);
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.href = url;
    a.download = "newfile.xls";
    a.click();
    // ??? 
    window.URL.revokeObjectURL(url);
    return (sa);
    // sa ???
}






