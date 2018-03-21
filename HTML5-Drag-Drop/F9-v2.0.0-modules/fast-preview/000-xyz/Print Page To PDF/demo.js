/*


<input id="btnPrint" type="button" value="打印" onclick="javascript:window.print();" />

<input id="btnPrint" type="button" value="打印预览" onclick=preview(1) />

<style type="text/css" media=print>
    .noprint{
        display : none
    }
</style>
<!--startprint1-->
<p>要打印的内容</p>
<!--endprint1-->
<p class="noprint">不需要打印的地方</p>

*/


function preview(oper) {
    if (oper < 10) {
    // save
    bdhtml = window.document.body.innerHTML;
    //获取当前页的html代码
    sprnstr = `<!--startprint${oper}-->`;
    //设置打印开始区域
    eprnstr = `<!--endprint${oper}-->`;
    //设置打印结束区域
    prnhtml = bdhtml.substring(bdhtml.indexOf(sprnstr)+18);
    //从开始代码向后取html
    prnhtml = prnhtml.substring(0,prnhtml.indexOf(eprnstr));
    //从结束代码向前取html
    window.document.body.innerHTML = prnhtml;
    window.print();
    // reset
    window.document.body.innerHTML = bdhtml;
    } else {
        window.print();
    }
}

// <!--startprint1-->要打印的内容<!--endprint1-->

// 再加个打印按纽 onclick=preview(1)


// bd = document.querySelector(`[data-body-container="data-body-container"]`);
bd = document.querySelector('[data-body-container="data-body-container"]');
html = bd.innerHTML;


// shit if without {} curly brackets

let x = 1;

if (x === 0)
    console.log(`test 1`);
    console.log(`test 2`);
    console.log(`test 3`);
// test 2
// test 3


if (x === 0)
    console.log(`test 1`);
    console.log(`test 2`);
    console.log(`test 3`);
// test 1
// test 2
// test 3

if (x === 0) {
    console.log(`test 1`);
}
console.log(`test 2`);
console.log(`test 3`);
