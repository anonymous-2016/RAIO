/*

<link type="text/css" rel="stylesheet" href="jqGrid/themes/cupertino/jquery-ui-1.9.0.custom.min.css">
<link type="text/css" rel="stylesheet" href="jqGrid/themes/ui.jqgrid.css">


<script src="jquery-1.8.2.min.js" />
<script src="jqGrid/js/jquery-ui-1.9.0.custom.min.js"/>
// <script src="jqGrid/js/i18n/grid.locale-cn.js"/>
<script src="jqGrid/js/jquery.jqGrid.min.js"/>




<!-- jqGrid table listID -->
<table id="listID"></table>

<!-- jqGrid 分页 div gridPager -->
<div id="gridPager"></div>





*/







$(document).ready(function(){
    $("#listID").jqGrid({
        url:contextPath + "search.action",
        datatype:"json", //数据来源，本地数据
        mtype:"POST",//提交方式
        height:420,//高度，表格高度。可为数值、百分比或'auto'
        //width:1000,//这个宽度不能为百分比
        autowidth:true,//自动宽
        colNames:['添加日期', '手机号码', '银行卡号','备注','操作'],
        colModel:[
            //{name:'id',index:'id', width:'10%', align:'center' },
            {name:'createDate',index:'createDate', width:'20%',align:'center'},
            {name:'phoneNo',index:'phoneNo', width:'15%',align:'center'},
            {name:'cardNo',index:'cardNo', width:'20%', align:"center"},
            {name:'remark',index:'remark', width:'35%', align:"left", sortable:false},
            {name:'del',index:'del', width:'10%',align:"center", sortable:false}
        ],
        rownumbers:true,//添加左侧行号
        //altRows:true,//设置为交替行表格,默认为false
        //sortname:'createDate',
        //sortorder:'asc',
        viewrecords: true,//是否在浏览导航栏显示记录总数
        rowNum:15,//每页显示记录数
        rowList:[15,20,25],//用于改变显示行数的下拉列表框的元素数组。
        jsonReader:{
            id: "blackId",//设置返回参数中，表格ID的名字为blackId
            repeatitems : false
        },
        pager:$('#gridPager')
    });
});
