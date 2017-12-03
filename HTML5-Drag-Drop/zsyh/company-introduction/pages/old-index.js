$(function(){
    //页面加载完成之后执行
    pageInit();
});

function pageInit(){
    const colNames = [
        'ID title',
        'invdate title',
        'Date title',
        'Client title',
        'Amount title',
        'Tax title',
        'Total title',
        'Notes title'
    ];
    // 返回的 data 数据字段不可多于定义的 colModel字段!!!
    const colModel = [
        {
            name : 'id',
            index : 'id',
            width : 50
        },
        {
            name : 'invdate',
            index : 'invdate',
            width : 90
        },
        {
            name : 'Date',
            index : 'Date',
            width : 100
        },
        {
            name : 'Client',
            index : 'Client',//  asc, invdate
            width : 100
        },
        {
            name : 'Amount',// must keep same name!
            index : 'Amount',// must keep same name!
            width : 80,
            align : "right"
        },
        {
            name : 'Tax',
            index : 'Tax',
            width : 80,
            align : "right"
        },
        {
            name : 'Total',
            index : 'Total',
            width : 80,
            align : "right"
        },
        {
            name : 'Notes',// shit demo json & keys
            index : 'Notes',
            width : 100,
            sortable : false
        }
    ];
    //创建 jqGrid 组件
    jQuery("#list_demo").jqGrid({
        // url : './data/data.json',//组件创建完成之后请求数据的url
        url : './data/data-keys.json',
        datatype : "json",//请求数据返回的类型。可选json,xml,txt
        colNames,
        colModel,
        // colNames: colNames,
        // colModel: colModel,
        // colNames : [
        //     'ID title',
        //     'invdate title',
        //     'Date title',
        //     'Client title',
        //     'Amount title',
        //     'Tax title',
        //     'Total title',
        //     'Notes title'
        // ],//jqGrid的列显示名字
        // colModel : [
        //     {
        //         name : 'id',
        //         index : 'id',
        //         width : 50
        //     },
        //     {
        //         name : 'invdate',
        //         index : 'invdate',
        //         width : 90
        //     },
        //     {
        //         name : 'Date',
        //         index : 'Date',
        //         width : 100
        //     },
        //     {
        //         name : 'Client',
        //         index : 'Client',//  asc, invdate
        //         width : 100
        //     },
        //     {
        //         name : 'Amount',// must keep same name!
        //         index : 'Amount',// must keep same name!
        //         width : 80,
        //         align : "right"
        //     },
        //     {
        //         name : 'Tax',
        //         index : 'Tax',
        //         width : 80,
        //         align : "right"
        //     },
        //     {
        //         name : 'Total',
        //         index : 'Total',
        //         width : 80,
        //         align : "right"
        //     },
        //     {
        //         name : 'Notes',// shit demo json & keys
        //         index : 'Notes',
        //         width : 100,
        //         sortable : false
        //     }
        // ],//jqGrid每一列的配置信息。包括名字，索引，宽度,对齐方式.....
        // set table title order
        // rowNum : 10,//一页显示多少条
        // rowList : [ 10, 20, 30 ],//可供用户选择一页显示多少条
        // pager : '#pager_demo',//表格页脚的占位符(一般是div)的id
        loadonce : true,// 如果为ture则数据只从服务器端抓取一次，之后所有操作都是在客户端执行，翻页功能会被禁用
        loadui: "disable", // disable禁用ajax执行提示；enable默认，当执行ajax请求时的提示； block启用Loading提示，但是阻止其他操作
        // sortname : 'id',//初始化的时候排序的字段
        // sortorder : "desc",//排序方式,可选desc,asc
        sortorder : "asc",
        mtype : "get",//向后台请求数据的ajax的类型。可选post,get
        viewrecords : true,
        caption : "标题 jqGrid Example",//表格的标题名字
        // height: 300,
        // autowidth: true,
        onSelectRow: function(rowid,status){
            console.log(`rowid = \n`, rowid);
            //
            console.log(`status = \n`, status);
            // true
            // getRowData(rowid);
            let rowData = jQuery("#list_demo").getRowData(rowid);
            console.log(`rowData = \n`, JSON.stringify(rowData, null, 4));
        },
        jsonReader: {
            repeatitems: false,
            // id: "0"
        },
        // sortable boolean 是否可排序 false 否
        // sortname string 排序列的名称，此参数会被传到后台 空字符串 是
        // sortorder string 排序顺序，升序或者降序（asc or desc） asc
        // treeGrid boolean 启用或者禁用treegrid模式
        // userData array 从request中取得的一些用户信息

    });
    /*创建jqGrid的操作按钮容器*/
    /*可以控制界面上增删改查的按钮是否显示*/
    // jQuery("#list_demo").jqGrid(
    //     // 'navGrid',
    //     // '#pager_demo',
    //     // {
    //     //     edit : false,
    //     //     add : false,
    //     //     del : false
    //     // }
    // );
}


/*

{
    "id": "12",
    "invdate": "",
    "name": "",
    "amount": "",
    "tax": "",
    "total": "",
    "note": ""
}

*/
