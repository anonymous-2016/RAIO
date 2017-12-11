
import {DOM_queryAll, DOM_query} from "./utils/DOM";



window.onload = () => {
    let div = DOM_query(`.xyz`),
        divs = DOM_queryAll(`[data-uid*="uid"]`);
    console.log(`div =\n`, div);
    console.log(`divs =\n`, divs);
};

