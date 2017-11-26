

const clickLinkOpenModuleHandler = (uid = `600570`, debug = false) => {
    // 600570.SH
    // alert(`uid = `, uid);
    alert(`uid = ${uid}`);// alert(`desc ${key}`) !== console.log(`desc `, key);
    // fetch data
    // show module
    // cache ?
};


setTimeout(function() {
    let uid = document.querySelector(`[data-sortable="data-sortable-uid"]`);
    // let sortable = Sortable.create(uid,{});
    // options: {}
    Sortable.create(uid);
}, 0);