
import {DOM_queryAll, DOM_query} from "./utils/DOM";



window.onload = () => {
    let div = DOM_query(`.xyz`),
        divs = DOM_queryAll(`[data-uid*="uid"]`);
    console.log(`div =\n`, div);
    console.log(`divs =\n`, divs);
};

/*

border-top: none;

background: #fffce9;
color: #4d4d4d;

[data-color="minus"] {
    color: #007c00;
}

[data-color="plus"] {
    color: #ca0000;
}

[data-color="orange"] {
    color: #ff6b3d;
}


*/
