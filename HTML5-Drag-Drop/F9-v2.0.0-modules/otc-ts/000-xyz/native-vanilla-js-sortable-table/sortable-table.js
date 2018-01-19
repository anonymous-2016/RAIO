// Native
// Vanilla JS







const NJS_SORTABLE_TABLE = (table_th_uid = `[data-sort="sort-th-Test"]`, table_uid = `#myTable`, debug = false) => {
    const sortTable = (uid = 0, table_uid = `#myTable`) => {
        let table = document.querySelector(table_uid),
            rows,
            switching = true,
            i,
            x,
            y,
            shouldSwitch,
            dir = "asc",
            switchcount = 0;
        /*Make a loop that will continue until no switching has been done:*/
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
                x = rows[i].getElementsByTagName("TD")[uid];
                y = rows[i + 1].getElementsByTagName("TD")[uid];
                /*check if the two rows should switch place, based on the direction, asc or desc:*/
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
                /*If no switching has been done AND the direction is "asc", set the direction to "desc" and run the while loop again.*/
                if (switchcount == 0 && dir == "asc") {
                    dir = "desc";
                    switching = true;
                }
            }
        }
    };
    let uids = document.querySelectorAll(table_th_uid);
    for (let i = 0; i < uids.length; i++) {
        uids[i].addEventListener(`click`, (e) => {
            if (debug) {
                console.log(`e.target.dataset = `, e.target.dataset);
            }
            let uid = parseInt(e.target.dataset.uid.substr(9));
            // bug & 01 === 1
            if (debug) {
                console.log(`e.target.dataset.uid = `, e.target.dataset.uid);
                console.log(`uid = `, uid);
            }
            sortTable(uid - 1, table_uid);// 0
        });
    }
};

setTimeout(() => {
    NJS_SORTABLE_TABLE();
    // init
}, 0);

