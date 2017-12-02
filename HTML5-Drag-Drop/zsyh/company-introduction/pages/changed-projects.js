

{
    "columnmeta": {
        "a0": "DATE",
        "a1": "STRING",
        "a2": "STRING",
        "a3": "INT"
    },
    "rows": [
        [
            "2002-04-30",
            "a1",
            "2002/04/23行业经营范围变更",
            1
        ],
        [
            "2004-03-31",
            "a1",
            "2004/03/09行业经营范围变更",
            1
        ]
    ]
}


// shaped data to

{
    "rows": [
        {
            "id": "12",
            "cell": ["12", "2007-10-06",  null]
        },
        {
            "id": "12",
            "cell": ["12", "2007-10-06",  null]
        }
    ]
}



// global namespace
var window = window || {};

window.JSONDS = window.JSONDS || ((json = {}, debug = false) => {
    let keys = Object.keys(json.columnmeta);
    // ["a0", "a1", "a2", "a3"]
    let arrs = json.rows;
    // [["0.4832", "0.6832", "0.7832"], ["0.4832", "0.6832", "0.7832"], ["0.4832", "0.6832", "0.7832"]]
    if(debug){
        console.log(`json =\n`, json);
        console.log(`debug =\n`, debug);
    }
    let rows = [];
    arrs.map(
        (arr, i) => {
            let obj = {};
            for (let ii = 0; ii < keys.length; ii++) {
                obj[keys[ii]] = arr[ii];
                if(debug && i === 0 && ii === 0){
                    console.log(`arr[ii] =\n`, arr[ii], typeof arr[ii]);
                }
            }
            // obj["level"] = 2,
            // obj["isLeaf"] = true,
            // obj["expanded"] = false,
            // obj["parent"] = "2",
            obj["id"] = `00${i}`,
            rows.push(obj);
        }
    );
    if(debug){
        console.log(`rows =\n`, rows);
    }
    return rows;
});

// IIFE

// let test = JSONDS(json, true);
let test = JSONDS(json["objs"], true);

// copy(test);
// console.log(JSON.stringify(test, null, 4));
/*

    [
        {
            "a0": "2002-04-30",
            "a1": "a1",
            "a2": "2002/04/23行业经营范围变更",
            "a3": 1,
            "id": "000"
        },
        {
            "a0": "2004-03-31",
            "a1": "a1",
            "a2": "2004/03/09行业经营范围变更",
            "a3": 1,
            "id": "001"
        }
    ]

*/
