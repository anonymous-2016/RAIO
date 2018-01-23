











const sortTable = (table_uid = `myTable`, n = 0, debug = false) => {
    let table,// table uid
        rows,
        switching,
        i,
        x,
        y,
        shouldSwitch,
        dir,
        switchcount = 0;
    if (debug) {
        console.log(`table_uid = `, table_uid);
    }
    table = document.getElementById(table_uid);
    // init
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc";
    /*Make a loop that will continue until no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;// reset switching
        rows = table.getElementsByTagName("tr");// trs
        /*Loop through all table rows (except the first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare, one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("td")[n];
            y = rows[i + 1].getElementsByTagName("td")[n];
            console.log(`x = `, x);// td dom
            console.log(`y = `, y);// td dom
            /* check if the two rows should switch place, based on the direction, asc or desc:*/
            // increase
            if (dir == "asc") {
                // .toLowerCase() ??? only useful for Alpha a-zA-Z ???
                // if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                //     // if so, mark as a switch and break the loop:
                //     shouldSwitch= true;
                //     break;
                // }
                if (parseFloat(x.innerHTML) > parseFloat(y.innerHTML)) {
                    shouldSwitch= true;
                    break;
                }
            } else if (dir == "desc") {
                // decrease
                // if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                //     // if so, mark as a switch and break the loop:
                //     shouldSwitch= true;
                //     break;
                // }
                if (parseFloat(x.innerHTML) < parseFloat(y.innerHTML)) {
                    shouldSwitch= true;
                    break;
                }
            }
        }
        // Switch row
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            // insertBefore ???
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount ++;
        } else {
            /*If no switching has been done & the direction is "asc", set the direction to "desc" and run the while loop again.*/
            if (switchcount === 0 && dir === "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
};



/*

https://codepen.io/xgqfrms-gildata/pen/vpMxbW
https://codepen.io/xgqfrms-gildata/full/vpMxbW


ECMA-262 8th edition June 2017.pdf

https://www.w3schools.com/js/js_comparisons.asp

String.prototype.localeCompare
e. String.prototype.localeCompare (see 21.1.3.10)

*/
