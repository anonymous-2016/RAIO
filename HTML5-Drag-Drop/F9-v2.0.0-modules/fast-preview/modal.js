setTimeout(() => {
    // const host = window.location.host ? window.location.host : `10.1.5.202`;
    const host = `http://10.1.5.202`;
    // absolute url ip
    let links = document.querySelectorAll(`[data-link="fv-company-news-link"]`);
    if (debug) {
        console.log(`links = \n`, links);
    }
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener(`click`, (e) => {
            // e.preventDefault();
            // #hash ???
            if (debug) {
                console.log(`e.target.dataset = \n`, e.target.dataset);
            }
            if (debug) {
                console.log(`e.target.dataset = \n`, e.target.dataset);
                console.log(`e.target.dataset.newsid = \n`, e.target.dataset.newsid);
                console.log(`e.target.dataset.disabled = \n`, e.target.dataset.disabled);
            }
            // console.log(`e.target.dataset = \n`, e.target.dataset);
            // newsid !== newsId
            // let id = e.target.dataset.newsId
            // let id = e.target.dataset.newsid;
            let id = e.target.dataset.newsid,
                title = e.target.dataset.title;
            try {
                let open_link = `${host}/queryservice/news/content/${id}`;
                if (!debug) {
                    console.log(`id = ${id} \ntitle = ${title}`);
                    // no need title
                }
                // fetch news summary data
                let data = {};
                fetch(open_link)
                .then(res => res.json())
                .then(
                    (json) => {
                        if (debug) {
                            console.log(`json = \n`, JSON.stringify(json, null, 4));
                        }
                        // shape data ???
                        data = json;
                        // BouncedModal
                        const UDP_wh = UDP.getClientWidthHeight;
                        if (debug) {
                            console.log(`UDP_wh = \n`, JSON.stringify(UDP_wh, null, 4));
                        }
                        let UDP_width = UDP_wh.w - 60,
                            UDP_height = UDP_wh.h - 60;
                        const modal = new BouncedModal({
                            // bouncedclass: "layerContianer2",//存放页面的容器类名
                            width: UDP_width,
                            height: UDP_height,
                            title: "公司新闻",
                            setOverflow: "overflow-y:none",
                            //设置滚动的属性(overflow-y: 竖向  overflow-x: 横向)
                            // str: html.join(''),// array to string
                            // str: html_template,
                            datas: Object.assign({}, data)
                        });
                        modal.init();
                        // return json;
                    }
                )
                .catch(err => console.log(`error infos = \n`, err));
            } catch (err) {
                console.log(`${host}/queryservice/news/content/${id}: Error infos = \n`, err);
                // window.open(`${host}/queryservice/news/content/${id}`);
            }
        });
    }
}, 0);




/*


// http://10.1.5.202/queryservice/news/content/558091641955
// download & open pdf
setTimeout(() => {
    // const host = window.location.host ? window.location.host : `10.1.5.202`;
    const host = `http://10.1.5.202`;
    // absolute url ip
    let links = document.querySelectorAll(`[data-link="fv-company-news-link"]`);
    if (debug) {
        console.log(`links = \n`, links);
    }
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener(`click`, (e) => {
            // e.preventDefault();
            // #hash ???
            if (debug) {
                console.log(`e.target.dataset = \n`, e.target.dataset);
            }
            if (debug) {
                console.log(`e.target.dataset = \n`, e.target.dataset);
                console.log(`e.target.dataset.newsid = \n`, e.target.dataset.newsid);
                console.log(`e.target.dataset.disabled = \n`, e.target.dataset.disabled);
            }
            // console.log(`e.target.dataset = \n`, e.target.dataset);
            // newsid !== newsId
            // let id = e.target.dataset.newsId
            let id = e.target.dataset.newsid,
                title = e.target.dataset.title;
            try {
                // let open_link = `${host}/queryservice/news/content/${id}`;
                // ChromeExternal.Execute("OpenFile", open_link);
                // no need ChromeExternal any more!
                // open features ???
                // console.log(`e.target.dataset.title = \n`, e.target.dataset.title);
                const windows = {
                    // url: `${host}/queryservice/news/content/${id}`,
                    url: `https://cdn.xgqfrms.xyz/`,
                    title: `${title}`,
                    // options: "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
                    options: {
                        menubar: `yes`,
                        location: `yes`,
                        resizable: `yes`,
                        scrollbars: `yes`,
                        status: `yes`//,
                    }
                };
                // window.open({...windows});
                // window.open(`${host}/queryservice/news/content/${id}`);
                // window.open(windows.url, windows.title, windows.options);
                let wo = window.open();
                    wo.document.head.innerHTML = `<title>公司新闻</title>`;
                    wo.document.body.innerHTML = `<p>Your content here</p>`;
                let w =window.open();
                    w.document.open().write('content');
                setTimeout(() => {
                    wo.close();
                    w.close();
                }, 30000);
            } catch (err) {
                console.log(`${host}/queryservice/news/content/${id}: Error infos = \n`, err);
                // window.open(`${host}/queryservice/news/content/${id}`);
            }
        });
    }
}, 0);

*/
