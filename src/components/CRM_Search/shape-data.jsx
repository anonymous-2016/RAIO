const test_array = [
    {
        "name": "AnyManagedFundsRow",
        "columnMeta": {
            "a0": "STRING",
            "a1": "STRING",
            "a2": "STRING",
            "a3": "DATE",
            "a4": "DATE",
            "a5": "DOUBLE",
            "a6": "INT"
        },
        "rows": [
            [
                "华夏基金管理有限公司",
                "华夏大中华企业精选灵活配置混合(QDII)",
                "其他型基金",
                "2016-01-20",
                "",
                21.877086009428236,
                65135
            ],
            [
                "华夏基金管理有限公司",
                "华夏大盘精选混合",
                "混合型基金",
                "2015-09-01",
                "2017-05-02",
                10.307680340705128,
                2944
            ]
        ]
    }
];

const tabs_obj = {};

const tabs = test_array.map(
    // tab
    (tab) => {
        let p_obj = {},
            c_obj = {};
        p_obj[tab.name] = [];
        // object keys length
        let key_length = Object.keys(tab.columnMeta).length;
        for (let key in tab.columnMeta) {
            if (tab.columnMeta.hasOwnProperty(key)) {
                c_obj[key.toUpperCase()] = "";
                c_obj.type = tab.columnMeta[key];
                // "a0".toUpperCase(); === "A0"
            }
            console.log(`%c ${c_obj[key.toUpperCase()]}`, "color: #f0f", c_obj);
            // c_obj = {"A0": ""}
        }
        console.log("%c finish a c_obj!", "color: red", c_obj);
        // c_obj = {"A0": "","A1": "","A2": "",A3: "",A4: "", A5: "", A6: ""}
    }
);



 
/* 

            // array length
            for(let array of tab.rows){
                // array === []
                let obj = {};
                array.map(
                    (value, index) => {
                        // value
                        console.log(`index = `, index);
                        console.log(`value = `, value);
                        obj[`A${index}`] = value;
                        console.log( `obj[A${index}]= `, obj[`A${index}`]);
                    }
                );
                console.log("%c finish a obj!", "color: red", obj);
            }


*/


/* 


const rows: [
    [
        "华夏基金管理有限公司",
        "华夏大中华企业精选灵活配置混合(QDII)",
        "其他型基金",
        "2016-01-20",
        "",
        21.877086009428236,
        65135
    ],
    [
        "华夏基金管理有限公司",
        "华夏大盘精选混合",
        "混合型基金",
        "2015-09-01",
        "2017-05-02",
        10.307680340705128,
        2944
    ]
];

let p_obj = {};
let p_array = [];

for(let array of rows){
    // array === []
    let obj = {};
    array.map(
        (value, index) => {
            console.log(`index = `, index);
            console.log(`value = `, value);
            obj[`A${index}`] = value;
            console.log( `obj[A${index}]= `, obj[`A${index}`]);
        }
    );
    console.log("%c finish a obj!", "color: red", obj);
    p_array.push(obj);
}

console.log("%c finish p_array!", "color: #ff0", p_array);

let name = "table name";
p_obj[name] = p_array;

console.log("%c finish p_obj!", "color: #f0f", p_obj);


*/