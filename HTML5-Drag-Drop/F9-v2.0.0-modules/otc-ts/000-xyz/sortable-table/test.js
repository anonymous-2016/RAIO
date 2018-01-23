// shit screen





const sortTable = (table_uid = `myTable`, n = 0) => {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    console.log(`table_uid = `, table_uid);
    table = document.getElementById(table_uid);
    // table = document.getElementById("myTable");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc";
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.getElementsByTagName("TR");
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /*check if the two rows should switch place,
            based on the direction, asc or desc:*/
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch= true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    //if so, mark as a switch and break the loop:
                    shouldSwitch= true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount ++;
        } else {
            /*If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again.*/
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
};


// http://10.1.5.202/webservice/fastview/otc/otcfast13

let json = [
    {
        "zqdm": "831409.OC",
        "zqjc": "华油科技",
        "zdf": "13.83",
        "cje": "255480.00"
    },
    {
        "zqdm": "430637.OC",
        "zqjc": "菱博电子",
        "zdf": "12.65",
        "cje": "150670.00"
    },
    {
        "zqdm": "832014.OC",
        "zqjc": "绿之彩",
        "zdf": "12.15",
        "cje": "139240.00"
    },
    {
        "zqdm": "430260.OC",
        "zqjc": "布雷尔利",
        "zdf": "6.89",
        "cje": "197470.00"
    },
    {
        "zqdm": "837422.OC",
        "zqjc": "塞北股份",
        "zdf": "6.82",
        "cje": "130370.00"
    },
    {
        "zqdm": "830891.OC",
        "zqjc": "轩辕网络",
        "zdf": "5.78",
        "cje": "8680.00"
    },
    {
        "zqdm": "832023.OC",
        "zqjc": "田野股份",
        "zdf": "4.85",
        "cje": "65430.00"
    },
    {
        "zqdm": "832850.OC",
        "zqjc": "大泽电极",
        "zdf": "4.81",
        "cje": "4140.00"
    },
    {
        "zqdm": "831119.OC",
        "zqjc": "蓝钻生物",
        "zdf": "4.70",
        "cje": "15130.00"
    },
    {
        "zqdm": "835579.OC",
        "zqjc": "机科股份",
        "zdf": "4.69",
        "cje": "37460.00"
    }
];

const sort_table_demo = () => {
    let ths = document.querySelectorAll(`[data-th="th-key"]`),
        tds = document.querySelectorAll(`[data-td="td-value"]`);
    let keys = ["A1", "B2", "C3", "D4"],
        values = [];
    json.map(
        (obj, i) => {
            // string ? number
            values.push(obj.zqdm);
            values.push(obj.zqjc);
            // values.push(obj.zdf);
            // values.push(obj.cje);
            values.push(parseFloat(obj.zdf));
            values.push(parseFloat(obj.cje));
        }
    );
    console.log(`keys = `, keys);
    console.log(`values = `, values);
    for (let i = 0; i < ths.length; i++) {
        ths[i].innerHTML = keys[i];
    }
    for (let i = 0; i < values.length; i++) {
        tds[i].innerHTML = values[i];
    }
};

setTimeout(() => {
    sort_table_demo();
}, 0);
// id="test_table"
