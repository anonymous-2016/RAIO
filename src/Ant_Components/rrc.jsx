// redux rrd

export default (state = test, action) => {
    switch (action.type) {
        case 1:
            test
        default:
            return state;
    }
};



const checkMediaQuery = () => {
    const type = window.matchMedia("(min-width: 720px)").matches ? "desktop" : "mobile";
    if (type === "desktop") {
        console.log(`Media is desktop!`);
    } else {
        console.log(`Media is mobile!`);
    }
};

window.addEventListener(`resize`, checkMediaQuery);




var article = document.querySelector('#electriccars');
 
article.dataset.columns // "3"
article.dataset.indexNumber // "12314"
article.dataset.parent // "cars"




