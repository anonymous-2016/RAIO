// excel (.xls) 2007


let tb = document.querySelector('.fv-important-infos-table');

let arr = [];
//let arr = ['<a id="a"><b id="b">hey!</b></a>'];

arr.push(tb);

let blob = new Blob(arr, {type: 'application/vnd.ms-excel'});


function ExportTableToExcel() {
    var data = [{
        "key": "value1",
        "username": "Customer1"
    }, {
        "key": "value2",
        "username": "Customer2"
    }, {
        "key": "value3",
        "username": "Customer3"
    }, {
        "key": "value4",
        "username": "Customer4"
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