"use strict";



const test = () => {
    // modal & data
    var myContent = document.getElementById('content');

    // instance
    var myModal = new Modal({
        // modal node
        content: myContent,
    });

    // var triggerButton = document.getElementById('trigger');

    // triggerButton.addEventListener('click', function() {
    //     myModal.open();
    // });


    // links

    const links = document.querySelectorAll(`[data-modal="modal-link"]`);

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(e) {
            myModal.open();
        });
    }

    // font buttons
    const font = document.querySelector(`[data-modal="modal-font"]`);
    // proxy
    font.addEventListener('click', function(e) {
    // const fonts = document.querySelectorAll(`[data-modal="modal-font"]`);
    // fonts[1].addEventListener('click', function(e) {
        console.log(`e.target.dataset.modalFont =`, e.target.dataset.modalFont);
        // if data-modal="data-font-big"
        let key = e.target.dataset.modalFont.substr(10),
            value = ``;
        switch (key) {
            case `big`:
            case `middle`:
            case `small`:
                value = `fontsize-${key}`;
                break;
            default:
                break;
        }
        console.log(`key =`, key);
        console.log(`value =`, value);
        // this.content.classList.add(value);
        // let content = document.querySelector(`[data-modal="content"]`);
        // let content = font.parentElement.nextElementSibling;
        let content = this.parentElement.nextElementSibling;
        // let content = fonts[1].parentElement.nextElementSibling;
        content.className = ``;
        console.log(`content =`, content, content.classList);
        content.classList.add(value);
        console.log(`content =`, content, content.classList);
        // content.classList.toggle(`fontsize-big`);
    });
};
// test();


const showModalData = (debug = false) => {
    const newsLinks = document.querySelectorAll(`[data-link="fv-company-news-link"]`);
    for (let i = 0; i < newsLinks.length; i++) {
        newsLinks[i].addEventListener("click", function() {
            // fetch data & insert data to DOM
            const uid = newsLinks[i].dataset.newsid;
            // http://10.1.5.202/queryservice/news/content/573297152893
            const ORIGIN = window.parent.location.origin;
            const IP =  (ORIGIN.includes(`file://`) || ORIGIN.includes(`http://localhost`)) ? `http://10.1.5.202` : ORIGIN;
            const PATH = `/queryservice/news/content/`;
            const url = `${IP}${PATH}${uid}`;
            if (debug) {
                console.log(`fetch url =`, url);
            }
            // CORS ???
            let html = ``;
            fetch(url)
            .then(res => res.json())
            .then(json => {
                // global function
                const emptyChecker = (key = ``) => {
                    // arr.map() ???
                    let result = true;
                    switch (key) {
                        case undefined:
                            result = false;
                            break;
                        case null:
                            result = false;
                            break;
                        case "--":
                            result = false;
                            // maybe no need, for string no data!
                            break;
                        default:
                            break;
                    }
                    result ? ((Object.keys(key).length > 0) ? `` : (result = false)) : ``;
                    return result;
                };
                if (debug) {
                    // console.log(`json =`, JSON.stringify(json, null, 4));
                }
                // show modal
                if (emptyChecker(json)) {
                    let title = ``,
                        source = ``,
                        time = ``,
                        content = ``,
                        url = ``;
                    // data
                    title = json.Title;
                    source = json.Infosource;
                    time = json.PublishDate.substr(0, 10);
                    url = json.Url;
                    content = json.Content;
                    html = `
                        <div>
                            <div data-modal="modal-title">
                                <h1>公司新闻</h1>
                            </div>
                            <div data-modal="title-box">
                                <div data-modal="title">
                                    <h3>${title}</h3>
                                </div>
                                <div data-modal="modal-font" class="fontSize">
                                    <span>字体: </span>
                                    <span class="fontBtn">
                                        <a data-modal-font="data-font-big">大</a>
                                    </span>
                                    <span class="fontBtn">
                                        <a data-modal-font="data-font-middle">中</a>
                                    </span>
                                    <span class="fontBtn active">
                                        <a data-modal-font="data-font-small">小</a>
                                    </span>
                                </div>
                                <div data-modal="info">
                                    <p>
                                        来源: <span data-info="info-source">${source}</span>
                                        日期: <span data-info="info-time">${time}</span>
                                        <a data-info="info-link" target="_blank" href="${url}">
                                            查看原文
                                            <i class="icon-external-link"></i>
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div data-modal="content">
                                <div>${content}</div>
                            </div>
                        </div>
                    `;
                    // <p>${content}</p>
                    // instance
                    const options = {
                        content: html,
                        // others
                    };
                    let newsModal = new Modal(options);
                    newsModal.open();
                } else {
                    // no data!
                }
            })
            .catch(
                err => {
                    console.log(`fetch json error!\n`, err);
                    // no data!
                }
            );
        });
    }
};



setTimeout(() => {
    // ready
    showModalData(true);
    // showModalData();
}, 0);

/*

    const json = {
        "Title": "融资余额六连升 融资客大举抄底中国铝业",
        "Id": 573297152893,
        "Content": "　　昨日A股市场呈现普涨格局,指数实现3月开门红,市场热点全面开花,工业互联网、软件和电子设备等板块走强。创业板指数昨日大涨2.07%,强势收出四连阳,成长股赚钱效应明显。\n<br/>　　两融市场方面,投资者交易热情持续升温,融资余额录得六连升。截至3月1日,上交所融资余额报5959.4亿元,较前一交易日增加13.23亿元;深交所融资余额报3975.06亿元,较前一交易日增加18.26亿元;两市合计9934.46亿元,较前一交易日增加31.49亿元。\n<br/>　　分行业来看,本周四,28个申万一级行业中,有17个行业实现融资净买入。净买入额排名前三的行业分别为计算机、有色金属和传媒,净买入额分别为12.01亿元、8.01亿元、3.64亿元。\n<br/>　　昨日计算机板块受资金追捧强势领涨,板块掀起涨停潮。中原证券分析认为,考虑到估值和业绩因素,计算机行业不乏成长稳定和前期被市场错杀的品种,目前已经具有了短期和中长期的投资机会。同时,在近期工业互联网等相关科技概念的催化因素下,计算机行业个股作为软硬件产品供应商也将全面受益。考虑到行业大部分公司年报将在4月份进行公布,3月或将成为年内投资的一个难得的窗口期。\n<br/>　　遭融资净卖出行业有11个,净卖出额排名前三的行业分别为交通运输、银行和综合,净卖出额分别为1.49亿元、9783.23万元、6769.08万元。\n<br/>　　个股方面,融资净买入额前五名分别为中国铝业、恒生电子、东方财富、海康威视、科大讯飞,净买入额分别为5.95亿元、1.83亿元、1.81亿元、1.53亿元和1.44亿元。\n<br/>　　中国铝业(601600)复牌后连续三个一字跌停,昨日打开跌停,放量下跌7.63%,成交62.85亿元。该股盘后数据显示,一家机构买入2.63亿元,知名游资华泰证券深圳益田路荣超商务中心营业部买入6167万元,国信证券深圳泰然九路营业部买入4055万元;卖出方面,四家机构合计卖出7.98亿元,中信证券总部卖出1.35亿元。\n<br/>　　融资净卖出额前五名分别为南方航空、大华股份、保利地产、北方稀土、招商银行,净卖出额分别为1.86亿元、1.13亿元、7760.71万元、6721.49万元、5932.80万元。\n",
        "PublishDate": "2018-03-02  09:13:25",
        "Infosource": "证券时报·e公司",
        "Url": "http://www.egsea.com/index.php?app=Company&mod=Info&act=news&id=197231"
    };


*/
