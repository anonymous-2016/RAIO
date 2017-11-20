/* 

https://github.com/wicketstuff/core/wiki/ModalX

https://modal-x.com/modalx/#loginPage

https://www.tesla.com/modelx

*/

function ModalX(){
    const BAD_URLs = [
        "聚源数据",
        "WWW",
        "qq",
        "ww",
        "www.",
        "www",
        "wwww",
        "http://data.east",
        "http://www.",
        "http://www.eweb",
        "https://wx.qq.com/"
    ];
    // shape data ???
    let url_link = BAD_URLs.includes(data.Url) === true ? `` : `
        <a
            style="margin-left:10px;color:#5389d2;"
            class="gotext"
            id="linkyuanwen"
            target="_blank"
            data-value="${data.Url}"
            href="${data.Url}">
            查看原文
            <i class="icon-external-link"></i>
        </a>
    `;
    // value="${data.Url}" !== href="${data.Url}"
    const html_template = `
        <div>
            <div class="modal-title">
                <h3 style="margin-left: 15px;">${data.Title}</h3>
            </div>
            <div class="zxdtData">
                <div class="fontSize" id="fontsize">
                    <span>字体：</span>
                    <span class="fontBtn">
                        <a id="big">大</a>
                    </span>
                    <span class="fontBtn">
                        <a id="middle">中</a>
                    </span>
                    <span class="fontBtn active">
                        <a id="small">小</a>
                    </span>
                </div>
                <div class="model-Info">
                    <span>
                        来源：
                        <span id="zxdtlaiyuan" class="">
                            ${data.Infosource}
                        </span>
                        &nbsp;
                    </span>
                    <span id="zxdtPubDate" class="">${data.PublishDate}</span>&nbsp;
                    ${url_link}
                </div>
                <div class="clr"></div>
            </div>
            <div class="modal-body" style="overflow: auto;text-align: left;">
                <div id="zxdtContent">
                    ${data.Content}
                </div>
            </div>
        </div>
    `;
}
