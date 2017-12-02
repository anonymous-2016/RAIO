$(function(){
    //页面加载完成之后执行
    pageInit();
});

function pageInit(){
    //创建 jqGrid 组件
    jQuery("#list_demo").jqGrid({
        // url : './data/data.json',//组件创建完成之后请求数据的url
        url : './data/data-keys.json',
        datatype : "json",//请求数据返回的类型。可选json,xml,txt
        colNames : [
            'ID title',
            'invdate title',
            'Date title',
            'Client title',
            'Amount title',
            'Tax title',
            'Total title',
            'Notes title'
        ],//jqGrid的列显示名字
        colModel : [//jqGrid每一列的配置信息。包括名字，索引，宽度,对齐方式.....
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
                index : 'Client asc, invdate',
                width : 100
            },
            {
                name : 'Amount',// must keep same name!
                index : 'amount',// no need & must keep same name!
                width : 80,
                align : "right"
            },
            {
                name : 'Tax',
                index : 'tax',
                width : 80,
                align : "right"
            },
            {
                name : 'Total',
                index : 'total',
                width : 80,
                align : "right"
            },
            {
                name : 'Notes',// shit demo json & keys
                index : 'note',
                width : 100,
                sortable : false
            }
        ],
        // rowNum : 10,//一页显示多少条
        // rowList : [ 10, 20, 30 ],//可供用户选择一页显示多少条
        // pager : '#pager_demo',//表格页脚的占位符(一般是div)的id
        loadonce : true,
        // sortname : 'id',//初始化的时候排序的字段
        // sortorder : "desc",//排序方式,可选desc,asc
        sortorder : "asc",
        mtype : "get",//向后台请求数据的ajax的类型。可选post,get
        viewrecords : true,
        caption : "标题 jqGrid Example",//表格的标题名字
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
