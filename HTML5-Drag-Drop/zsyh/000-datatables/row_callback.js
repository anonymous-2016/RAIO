var debug = debug || false;


$(document).ready(function() {
    $('#example').DataTable({
        "createdRow": function (row, data, index) {
            if (!debug) {
                console.log(`row`, row, typeof row);
                // tr
                console.log(`data`, data);
                // ["Tiger Nixon", "System Architect", "Edinburgh", "61", "2011/04/25", "$320,800"]
                console.log(`index`, index);
                // 0
            }
            if (data[5].replace(/[\$,]/g, '') * 1 > 150000 ) {
                $('td', row).eq(5).addClass('highlight');
            }
        }
    } );
});
