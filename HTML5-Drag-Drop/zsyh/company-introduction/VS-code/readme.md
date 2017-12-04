# VS code


> 解压缩 到 global function


```js

const colNames = [
        "ID",
        "变更时间",
        "图形",
        "变更内容",
        "变更前",
        "变更后",
        "变更前详情",
        "变更后详情",
        // "a7",
        // "a8",
    ];

```



```js

const colNames = newFunction();

function newFunction() {
    const colNames = [
        "ID",
        "变更时间",
        "图形",
        "变更内容",
        "变更前",
        "变更后",
        "变更前详情",
        "变更后详情",
    ];
    return colNames;
}

```






```js


const { colNames, colModel } = newFunction(debug);


function newFunction(debug) {
    const colNames = [
        "ID",
        "变更时间",
        "图形",
        "变更内容",
        "变更前",
        "变更后",
        "变更前详情",
        "变更后详情",
    ];
    // coldata = ["a0", "a1", "a2", "a3"];
    const colModel = [
        {
            name: 'id',
            index: 'id',
            // width : 50,
            width: 0,
            hidden: true,
        },
        {
            name: 'a0',
            index: 'a0',
            width: 100,
            align: "center",
        },
        {
            name: 'a4',
            index: 'a4',
            width: 200,
            align: "center",
            // sortable : false,
            // saveicon: true
            formatter: function (cellvalue, options, rowObject) {
                // var temp = `
                //     <a href="http://10.1.5.202/stock/f9/" data-link="cell-a" target="_blank" >
                //         ${cellvalue}
                //     </a>
                // `;
                var temp = `
                    <span data-link="cell-span">
                        ${cellvalue}
                    </span>
                `;
                return temp;
            }
        },
        {
            name: 'a1',
            index: 'a1',
            width: 100,
            align: "center",
        },
        {
            name: 'a2',
            index: 'a2',
            width: 100,
            align: "center",
        },
        {
            name: 'a3',
            index: 'a3',
            width: 100,
            align: "center",
        },
        {
            name: 'a5',
            index: 'a5',
            width: 200,
            align: "center",
            // sortable : false,
            // saveicon: true,
            formatter: function (cellvalue, options, rowObject) {
                if (debug) {
                    console.log(`cellvalue \n`, cellvalue);
                    console.log(`options \n`, options);
                    console.log(`rowObject \n`, rowObject);
                }
                // console.log(`rowObject \n`, rowObject);
                let objs = JSON.stringify(rowObject);
                // console.log(`JSON.stringify(rowObject) \n`, objs);
                let a0 = rowObject.a0;
                // console.log(`rowObject & a0 \n`, a0);
                var temp = `
                    <img
                        src="http://10.1.5.202/stock/f9/imgs/text.png"
                        title="${cellvalue}"
                        data-title="${cellvalue}"
                        data-datas="${rowObject}"
                        data-objs="${objs}"
                        data-a0="${a0}"
                        data-img="cel-img"
                        data-xxx="xxx"
                    />
                `;
                // var temp = '<img src="http://10.1.5.202/stock/f9/imgs/text.png" data-img="cel-img" title="'+ cellvalue +'"/>';
                setTimeout(() => {
                    let img = document.querySelector(`[data-img="cel-img"]`);
                    if (debug) {
                        console.log(`img = `, img);
                    }
                    img.addEventListener(`click`, (e) => {
                        if (debug) {
                            console.log(`e = `, e);
                            console.log(`e.target.dataset = `, e.target.dataset);
                        }
                        // alert(`e = ${e}`);
                    });
                }, 0);
                return temp;
            }
        },
        {
            name: 'a6',
            index: 'a6',
            width: 100,
            align: "center",
            // sortable : false,
            // saveicon: true,
            formatter: function (cellvalue, options, rowObject) {
                if (debug) {
                    console.log(`cellvalue \n`, cellvalue);
                    console.log(`options \n`, options);
                    console.log(`rowObject \n`, rowObject);
                    //{a0: "2017-03-27", a1: "行业与经营范围", a2: "房地产开发与经营业", a3: "房地产业", a4: "详情点击", …}
                }
                // console.log(`\n rowObject \n`, rowObject);
                let objs = JSON.stringify(rowObject);
                // console.log(`JSON.stringify(rowObject) \n`, objs);
                // "{"
                let a0 = rowObject.a0;
                console.log(`rowObject & a0 \n`, a0);
                var temp = `
                    <img
                        src="http://10.1.5.202/stock/f9/imgs/text.png"
                        title="${cellvalue}"
                        data-title="${cellvalue}"
                        data-datas="${rowObject}"
                        data-objs="${objs}"
                        data-a0="${a0}"
                        data-img="cel-img"
                        data-xxx="xxx"
                    />
                `;
                // var temp = '<img src="http://10.1.5.202/stock/f9/imgs/text.png" data-img="cel-img" title="'+ cellvalue +'"/>';
                setTimeout(() => {
                    let img = document.querySelector(`[data-img="cel-img"]`);
                    if (debug) {
                        console.log(`img = `, img);
                    }
                    img.addEventListener(`click`, (e) => {
                        if (debug) {
                            console.log(`e = `, e);
                            console.log(`e.target.dataset = `, e.target.dataset);
                        }
                        ;
                        // alert(`e = ${e}`);
                    });
                }, 0);
                return temp;
                // show modal
                // showModal(data);
                // ??? parent event!
            }
        },
    ];
    return { colNames, colModel };
}

```


