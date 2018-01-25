/**
 * @author xgqfrms
 * @license MIT
 *
 * @param {* String} link_uid
 * @param {* String} div_uid
 * @param {* Boolean} debug
 */

const ShowTabs = (link_uid = `[data-tab="tab-link"]`, div_uid = `[data-tab="tab-container"]`, debug = false) => {
    let tabs = document.querySelectorAll(link_uid),// uid ???
        divs = document.querySelectorAll(div_uid);// uid ???
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener(`click`, (e) => {
            if (debug) {
                console.log(`e = \n`, e);
                console.log(`e.target.dataset = \n`, e.target.dataset);
                console.log(`e.target.classList = \n`, e.target.classList);
                // div.classList.toggle("visible", i < 10);
                // replace(oldClass, newClass)
                // toggle(String [, force])
                // add(String [, String])
                // remove(String [, String])
                // contains(String)
                // item(Number)
                let uid = parseInt(e.target.dataset.tabUid);
                console.log(`uid = `, uid, typeof(uid));
            }
            if (e.target.classList.contains("hover-link-color")) {
                //
            }else{
                e.target.classList.add("hover-link-color");
                e.target.classList.remove("default-link-color");
                divs[i].classList.add("active-display-block");
                divs[i].classList.remove("default-display-block");
            }
            let arr = [];
            for (let ii = 0; ii < tabs.length; ii++) {
                arr.push(ii);
            }
            arr.map(
                (item, index) =>{
                    if(item !== i){
                        if (tabs[index].classList.contains("hover-link-color")) {
                            tabs[index].classList.add("default-link-color");
                            tabs[index].classList.remove("hover-link-color");
                            divs[index].classList.remove("active-display-block");
                            divs[index].classList.add("default-display-block");
                        }else{
                            //
                        }
                        // divs[index].style.display = "none";
                    }
                }
            );
        });
    }
};


document.addEventListener(`DOMContentLoaded`, () => {
    setTimeout(() => {
        ShowTabs();
    }, 0);
});



// uid ???
