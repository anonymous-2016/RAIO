// Object.assign() & Object.keys() & Array.map()



const obj = {
    "Filters":[
        {
            "FilterType":"between",
            "Field":"BasicInformationRow.A0",
            "MaxValue":"2017-10-01",
            "MinValue":"2017-09-01",
            "Value":"Filters value"
        }
    ]
};

let new_obj1 = Object.assign({}, obj.Filters[0]);
let new_obj2 = Object.assign({}, obj.Filters[0]);

let shaped_obj1 = Object.keys(new_obj1).map(
    (key, index) => {
        switch (key) {
            case "MaxValue":
                delete new_obj1["MaxValue"];
                break;
            case "MinValue":
                delete new_obj1["MinValue"];
                break;
        }
        return new_obj1;
    }
)[0];


let shaped_obj2 = Object.keys(new_obj2).map(
    (key, index) => {
        if(key === "Value"){
            delete new_obj2["Value"];
        }
        return new_obj2;
    }
)[0];





/* 


let shaped_obj1 = Object.keys(new_obj1).forEach(
    (key, index) => {
        switch (key) {
            case "MaxValue":
                delete new_obj1["MaxValue"];
                break;
            case "MinValue":
                delete new_obj1["MinValue"];
                break;
            default:
                break;
        }
    }
);

// OK

let shaped_obj2 = Object.keys(new_obj2).forEach(
    (key, index) => {
        if(key === "Value"){
            delete new_obj2["Value"];
        }
    }
);


*/