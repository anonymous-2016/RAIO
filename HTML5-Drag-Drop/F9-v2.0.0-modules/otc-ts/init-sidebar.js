// namespaces & global variable
window.OTC_TS_FV = window.OTC_TS_FV || {};

// sub namespaces
OTC_TS_FV.Utils = OTC_TS_FV.Utils || {};


const initSidebar = () => {
    let lis = document.querySelectorAll(`[data-nav-li="nav-li"]`);
    let divs = document.querySelectorAll(`[data-nav-box="nav-box"]`);
    // let lis = OTC_TS_FV.Utils.DOM_queryAll(`[data-nav-li="nav-li"]`);
    // let divs = OTC_TS_FV.Utils.DOM_queryAll(`[data-nav-box="nav-box"]`);
    for (let i = 0; i < lis.length; i++) {
        lis[i].addEventListener(`click`, (e) => {
            console.log(`i =`, i);
            console.log(`lis[${i}] =`, lis[i]);
            if (lis[i].classList.contains("h5-dnd-nav-li-active")) {
                //
            }else{
                lis[i].classList.add("h5-dnd-nav-li-active");
                lis[i].classList.remove("h5-dnd-nav-li-hidden");
                lis[i].classList.remove("add-bottom-margin");
                lis[i].classList.add("no-bottom-margin");
                let arr = [0, 1, 2];
                arr.map(
                    (item, index) =>{
                        if(item !== i){
                            if (lis[item].classList.contains(`h5-dnd-nav-li-active`)) {
                                lis[item].classList.remove("no-bottom-margin");
                                lis[item].classList.add("add-bottom-margin");
                                lis[item].classList.remove("h5-dnd-nav-li-active");
                                lis[item].classList.add("h5-dnd-nav-li-hidden");
                            }
                        }
                    }
                );
            };
            console.log(`divs =`, i);
            console.log(`divs[${i}] =`, divs[i]);
            if (divs[i].classList.contains(`h5-dnd-nav-box-active`)) {
                //
            }else{
                divs[i].classList.add("h5-dnd-nav-box-active");
                divs[i].classList.remove("h5-dnd-nav-box-hidden");
                let arr = [0,1,2];
                arr.map(
                    (item, index) =>{
                        if(item !== i){
                            if (divs[i].classList.contains(`h5-dnd-nav-box-active`)) {
                                divs[item].classList.remove("h5-dnd-nav-box-active");
                                divs[item].classList.add("h5-dnd-nav-box-hidden");
                            }
                        }
                    }
                );
            };
        });
    }
    // btns
    let btn = OTC_TS_FV.Utils.DOM_query(`[data-nav-btn="nav-btn"]`),
        small_btn = OTC_TS_FV.Utils.DOM_query(`[data-nav-small-btn="nav-small-btn"]`),
        container = OTC_TS_FV.Utils.DOM_query(`[data-nav-container="nav-container"]`),
        small_container = OTC_TS_FV.Utils.DOM_query(`[data-nav-small-container="nav-small-container"]`),
        body_container = OTC_TS_FV.Utils.DOM_query(`[data-body-container="data-body-container"]`);
    // re-construction
    btn.onclick = () => {
        // container
        if (container.classList.contains("h5-dnd-nav-container-normal")) {
            container.classList.add("h5-dnd-nav-container-small");
            container.classList.remove("h5-dnd-nav-container-normal");
        }else{
            container.classList.remove("h5-dnd-nav-container-small");
            container.classList.add("h5-dnd-nav-container-normal");
        }
        // small_container
        if (small_container.classList.contains("h5-dnd-nav-small-btn-hidden")) {
            small_container.classList.add("h5-dnd-nav-small-btn-show");
            small_container.classList.remove("h5-dnd-nav-small-btn-hidden");
        }else{
            small_container.classList.add("h5-dnd-nav-small-btn-hidden");
            small_container.classList.remove("h5-dnd-nav-small-btn-show");
        }
        // body_container
        if (body_container.classList.contains("h5-dnd-body-container-small")) {
            body_container.classList.remove("h5-dnd-body-container-small");
            body_container.classList.add("h5-dnd-body-container-big");
        }
    };
    small_btn.onclick = () => {
        if (small_container.classList.contains("h5-dnd-nav-small-btn-hidden")) {
            small_container.classList.add("h5-dnd-nav-small-btn-show");
            small_container.classList.remove("h5-dnd-nav-small-btn-hidden");
        }else{
            small_container.classList.add("h5-dnd-nav-small-btn-hidden");
            small_container.classList.remove("h5-dnd-nav-small-btn-show");
        }
        if (container.classList.contains("h5-dnd-nav-container-normal")) {
            container.classList.add("h5-dnd-nav-container-small");
            container.classList.remove("h5-dnd-nav-container-normal");
        }else{
            container.classList.remove("h5-dnd-nav-container-small");
            container.classList.add("h5-dnd-nav-container-normal");
        }
        if (body_container.classList.contains("h5-dnd-body-container-big")) {
            body_container.classList.remove("h5-dnd-body-container-big");
            body_container.classList.add("h5-dnd-body-container-small");
        }
    };
    // init
    // btn.onclick();
    // no need any more!
};


// tabs & load all default modules
const initTabs = () => {
    let btn_universal = document.querySelector(`[data-uid="universal"]`),
        btn_customize = document.querySelector(`[data-uid="customize"]`);
        // btn_module_setting = document.querySelector(`[data-uid="module-setting"]`);
    let a_modules = document.querySelector(`[data-uid="modules-a-link"]`);
    const sortable_module_containers = document.querySelectorAll(`[data-sortable-box*="sortable-box"]`);
    btn_universal.onclick = (e) => {
        sortable_module_containers[0].innerHTML = "";
        sortable_module_containers[1].innerHTML = "";
        // init modules
        let left_uids = [
            "otcfast01",
            "otcfast02",
            "otcfast03",
            "otcfast13",
            "dividend-matters-all",
            // "otcfastDividends",
            "additional-issues-all",
            // "otcfastAdditional",
            // "otcfast10"
        ];
        let right_uids = [
            "otcfast08",
            "otcfast09",
            "otcfastTransaction",
            "news",
            "bulletin"
        ];
        // OTC_TS_FV.Modules.loadAllModules.init(sortable_module_containers[0], left_uids);
        // OTC_TS_FV.Modules.loadAllModules.init(sortable_module_containers[1], right_uids);
    }
    btn_customize.addEventListener(`click`, (e) => {
        sortable_module_containers[0].innerHTML = "";
        sortable_module_containers[1].innerHTML = "";
        // alert(`😃😃😃Coming soon ... 😧😒😟`);
        a_modules.click();
        // alert(`😃😃😃Coming soon ... 😧😒😟`);
    });
    // btn_customize.onclick = (e) => {
    //     sortable_module_containers[0].innerHTML = "";
    //     sortable_module_containers[1].innerHTML = "";
    //     a_modules.click();
    // }
    // btn_module_setting.addEventListener(`click`, (e) => {
    //     const title = `Sorry for that, it still in developing!`;
    //     alert(`😃😃😃Coming soon ... 😧😒😟\n ${title}`);
    // });
    // btn_module_setting.addEventListener(`click`, (e) => {
    //     // let debug = true;
    // });
    btn_universal.onclick();
    // btn_universal.click();
};

window.onload = () => {
    initSidebar();
    initTabs();
};
