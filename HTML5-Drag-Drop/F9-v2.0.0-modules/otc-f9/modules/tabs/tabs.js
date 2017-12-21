

const ShowTabs = (link_uid = `[data-tab="tab-link"]`, div_uid = `[data-tab="tab-container"]`) => {
    let tabs = document.querySelectorAll(link_uid),
        divs = document.querySelectorAll(div_uid);
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener(`click`, (e) => {
            // console.log(`e = \n`, e);
            // console.log(`e.target.dataset = \n`, e.target.dataset);
            // console.log(`e.target.classList = \n`, e.target.classList);
            // div.classList.toggle("visible", i < 10);
            // replace(oldClass, newClass)
            // toggle(String [, force])
            // add(String [, String])
            // remove(String [, String])
            // contains(String)
            // item(Number)
            // let uid = parseInt(e.target.dataset.tabUid);
            // console.log(`uid = `, uid, typeof(uid));
            if (e.target.classList.contains("hover-link-color")) {
                //
            }else{
                e.target.classList.add("hover-link-color");
                e.target.classList.remove("default-link-color");
                divs[i].style.display = "block";
            }
            let arr = [0,1,2];
            arr.map(
                (item, index) =>{
                    if(item !== i){
                        if (tabs[index].classList.contains("hover-link-color")) {
                            tabs[index].classList.add("default-link-color");
                            tabs[index].classList.remove("hover-link-color");
                        }else{
                            //
                        }
                        divs[index].style.display = "none";
                    }
                }
            );
        });
    }
};


ShowTabs();




