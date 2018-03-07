var pager;


$(function () {

        document.getElementById("newsright").style.width = $(window).width() -219 + "px";
        document.getElementById("rdxwTable").style.height = $(window).height() -80 + "px";
    $(window).resize(function() {
        document.getElementById("newsright").style.width = $(window).width() -219 + "px";
        document.getElementById("rdxwTable").style.height = $(window).height() -80 + "px";
    });

    init();
    function init() {
        initNewPage();
        var html = [];
        var data = [{"k":"110000","v":"农林牧渔"},{"k":"210000","v":"采掘"},{"k":"220000","v":"化工"},{"k":"230000","v":"钢铁"},{"k":"240000","v":"有色金属"},{"k":"270000","v":"电子"},{"k":"280000","v":"汽车"},{"k":"330000","v":"家用电器"},{"k":"340000","v":"食品饮料"},{"k":"350000","v":"纺织服装"},{"k":"360000","v":"轻工制造"},{"k":"370000","v":"医药生物"},{"k":"410000","v":"公用事业"},{"k":"420000","v":"交通运输"},{"k":"430000","v":"房地产"},{"k":"450000","v":"商业贸易"},{"k":"460000","v":"休闲服务"},{"k":"480000","v":"银行"},{"k":"490000","v":"非银金融"},{"k":"510000","v":"综合"},{"k":"610000","v":"建筑材料"},{"k":"620000","v":"建筑装饰"},{"k":"630000","v":"电气设备"},{"k":"640000","v":"机械设备"},{"k":"650000","v":"国防军工"},{"k":"710000","v":"计算机"},{"k":"720000","v":"传媒"},{"k":"730000","v":"通信"}];
        for(var i=0;i<data.length;i++){
              html.push('<li><span class="linetwo"></span> <a class="loadqita treecolor" IndustryCode="'+data[i].k+'">'+data[i].v+'</a></li>');
        }
        $("#19 ul").html(html.join(""));
    }


    $($.date_input.initialize);
    /*
     * 展开树形菜单
     */
    $("#LeftUl .changeHide").live("click", function () {
        var id = $(this).parent("li").attr("id");
        if ($(this).hasClass("openClose")) {
            $(this).removeClass("openClose").addClass("openCloseclose")
        } else {
            $(this).removeClass("openCloseclose").addClass("openClose")
        }
        $("#" + id + ">.child_hide").toggle();
    });


    /*
     * 双击展开树形菜单
     */
    $("#LeftUl .changeHide1").live("dblclick", function () {
        if ($(this).siblings("span").hasClass("openClose")) {
            $(this).siblings("span").removeClass("openClose").addClass("openCloseclose")
        } else {
            $(this).siblings("span").removeClass("openCloseclose").addClass("openClose")
        }
        var id = $(this).parent("li").attr("id");
        $("#" + id + ">.child_hide").toggle();
    });

    /*
     * 加载其他模块
     */

    $("#LeftUl a").live("click", function () {
        //$("#zxdtModal").hide();
        $("select[name=newsselect]").attr('value',"0");

        $('#LeftUl .active').removeAttr('class');
        $(this).parent('li').attr('class', 'active');
        $('#checkTime input').attr("value",'');
        $("#yxtjList div").css("display","none");
        $("#yxtjList label").text("");

        if ($(this).hasClass('loadqita')) {
            var CategoryId = $(this).attr("id");
            $("#LeftUl").data('active', CategoryId);
            $(".yxtj").fadeOut("fast");
            //if(!isEmpty($("#yxtjList label").text())){
            //    var SourceCode =$("#newsinfoSource").data('tempdata');
            //    $("input[name=InfoSource]").attr('value',$("#newsinfoSource label").text());
            //    $("input[name=Author]").attr('value',$("#newsAutor label").text());
            //    $("input[name=SourceCode]").attr('value',SourceCode);
            //    $("input[name=start_time]").attr('value',$("#newsStartTime label").text());
            //    $("input[name=end_time]").attr('value',$("#newsEndTime label").text());
            //    $("input[name=newskeyWord]").attr('value',$("#newskeyWord label").text());
            //    $("select[name=newsselect]").attr('value',$("#newskeyWord label").attr("value"));
            //
            //    pager.fnPage(1);
            //}else{
            //    pager.fnPage(1);
            //}

            pager.fnPage(1);


            //var parm = '{"CategoryId": "' + CategoryId + '"}';
            //$.getJSON(uri.queryservice+"/news/list", parm, function (result) {
            //    var Found = result.Found;
            //    initNewPage('newsPage', Found, CategoryId);
            //});
        }
    });

    /*
     * 新闻搜索btn
     */

    $('button[name=Searchbtn]').live('click', function () {
        if(!isEmpty($("#yxtjList label").text())){
            //var SourceCode =$("#newsinfoSource").data('tempdata');
            $("input[name=InfoSource]").attr('value',$("#newsinfoSource label").text());
            $("input[name=Author]").attr('value',$("#newsAutor label").text());
            $("input[name=SourceCode]").attr('value',$("input[name=SourceCode]").attr('value'));
            $("input[name=start_time]").attr('value',$("#newsStartTime label").text());
            $("input[name=end_time]").attr('value',$("#newsEndTime label").text());
            $("input[name=newskeyWord]").attr('value',$("#newskeyWord label").text());
            $("select[name=newsselect]").attr('value',$("#newskeyWord label").attr("value"));
        }else{
            $("input[name=InfoSource]").attr('value','');
            $("input[name=SourceCode]").attr('value','');
            $("input[name=Author]").attr('value','');
        }
        pager.fnPage(1);
    });



    /**
     *  模态框 显示隐藏
     * @param click
     */
    $("#rdxwTable a").live('click', function () {

        if($(this).hasClass('newsTitle')){
        var zxdtModal = $("#zxdtModal");
        var name = $(this).html();
        $(this).addClass("gray");
        var html =[];
            var id = $(this).attr('id');
            var newsContentUrl = uri.queryservice + 'news/content/' + id;
            loaddate(uri.queryservice + 'news/content/' + id, {}, function (data) {
                html.push('<div><div class="modal-title"><h3 style="margin-left: 15px;">'+name+'</h3></div>');
                html.push('<div class="zxdtData"><div class="fontSize" id="fontsize"><span>字体：</span>');
                html.push('<span class="fontBtn"><a id="big">大</a></span><span class="fontBtn">');
                html.push('<a id="middle">中</a></span><span class="fontBtn active"><a id="small">小</a></span></div>');
                html.push('<div class="model-Info"><span>来源：<span id="zxdtlaiyuan" class="">'+data.Infosource+'</span>&nbsp;</span>');
                html.push('<span id="zxdtPubDate" class="">'+data.PublishDate+'</span>&nbsp;');
                if(data.Url=="聚源数据"||data.Url=="WWW"||data.Url=="qq"||data.Url=="ww"||data.Url=="www."||data.Url=="www"||data.Url=="wwww"||data.Url=="http://data.east"||data.Url=="http://www."||data.Url=="http://www.eweb"||data.Url=="https://wx.qq.com/"){
                    html.push('');
                }else{
                    html.push('<a style="margin-left:10px;color:#5389d2;" class="gotext" id="linkyuanwen" value="'+data.Url+'">查看原文<i class="icon-external-link"></i></a>');
                }
                html.push('</div><div class="clr"></div></div><div class="modal-body" style="overflow: auto;text-align: left;>');
                html.push('<div id="zxdtContent">'+data.Content);
                html.push('</div>');

                html.push('</div></div>');
                var bounced = new Bounced({
                    bouncedclass:"layerContianer2",//存放页面的容器类名
                    width:getClientWidth()-60,
                    height:getClientHeight()-80,
                    alerttit:"公司新闻",
                    setOverflow:"overflow-y:none",//设置滚动的属性 overflow-y：设置竖向  overflow-x:设置横向
                    str:html.join(''),
                    callback:function(){
                    }
                });
                //$(".modal-body").css("height",getClientHeight()-200);
                bounced.show();
                $("#loadingHide").css("display", 'none');
            }, function () {
                $("#loadingHide").css("display", 'block');
            });





        }else if($(this).hasClass('InfoSource')){
               //var newsInfoSource = $(this).attr('title');
               //var newsSourceCode = $(this).attr('id');
            $(".yxtj").fadeIn("slow");
            $("input[name=InfoSource]").attr('value',$(this).attr('title'));
            $("input[name=SourceCode]").attr('value',$(this).attr('id'));
            //$("#newsinfoSource").data('tempdata',$(this).attr('id'));
            $("#newsinfoSource").css("display","block");
            $("#newsinfoSource label").html($(this).html());
            pager.fnPage(1);
        }else{
            $(".yxtj").fadeIn("slow");
            $("input[name=Author]").attr('value',$(this).attr('title'));
            $("#newsAutor").css("display","block");
            $("#newsAutor label").html($(this).html());
            pager.fnPage(1);
        }
    });


    /**
     *  新闻帅选条件，删除帅选条件点击事件
     * @param click
     */

    $("#yxtjList em").live('click', function () {
        //$("#zxdtModal").hide();
       if($(this).hasClass('em-source')){
           $("#newsinfoSource").css("display","none");
           $("input[name=InfoSource]").attr('value',"");
           $("input[name=SourceCode]").attr('value',"");
           $("#newsinfoSource label").text("");
           pager.fnPage(1);
       }else if($(this).hasClass('em-autor')){
           $("#newsAutor").css("display","none");
           $("input[name=Author]").attr('value',"");
           $("#newsAutor label").text("");
           pager.fnPage(1);
       }else if($(this).hasClass('em-startTime')){
           $("#newsStartTime").css("display","none");
           $("input[name=start_time]").attr('value',"");
           $("#newsStartTime label").text("");
           pager.fnPage(1);
       }else if($(this).hasClass('em-endTime')){
           $("#newsEndTime").css("display","none");
           $("input[name=end_time]").attr('value',"");
           $("#newsEndTime label").text("");
           pager.fnPage(1);
       }else if($(this).hasClass('em-range')){
           $("#newsRange").css("display","none");
           $("select[name=newsselect]").attr('value',"0");
           $("#newsRange label").text("");
           pager.fnPage(1);
       }else{
           $("#newskeyWord").css("display","none");
           $("input[name=inputText]").attr('value',"");
           $("#newskeyWord label").text("");
           pager.fnPage(1);
       }
        if(isEmpty($("#yxtjList label").text())){
            $(".yxtj").fadeOut("fast");
        }
    });

    /**
     *  选择时间，显示在已选条件。。
     * @param change
     */
    $("#checkTime .ischange").live('change', function () {
        //$("#zxdtModal").hide();
           $(".yxtj").fadeIn("slow");
          if($(this).attr("name")=="start_time"){
              $("#newsStartTime").css("display","block");
              $("#newsStartTime label").html($(this).attr("value"));
              pager.fnPage(1);
          }else if($(this).attr("name")=="end_time"){
              $("#newsEndTime").css("display","block");
              $("#newsEndTime label").html($(this).attr("value"));

              if($("input[name='start_time']").attr("value")==""){
                  $("#newsStartTime").css("display","block");
                  $("input[name='start_time']").attr("value",get3MonthBefor($(this).attr("value")));
                  $("#newsStartTime label").html(get3MonthBefor($(this).attr("value")));
              }

              pager.fnPage(1);
          }else if($(this).attr("name")=="newsselect"){
              $("#newsRange").css("display","block");
              var istitle = $(this).attr('value');
              var field={'1':'标题','0':'正文'};
              $("#newsRange label").attr("value",istitle);
              $("#newsRange label").html(field[istitle]);
          }else{
              $("#newsRange").css("display","block");
              var istitle = $("select[name=newsselect]").attr('value');
              var field={'1':'标题','0':'正文'};
              $("#newsRange label").attr("value",istitle);
              $("#newsRange label").html(field[istitle]);


              $("#newskeyWord").css("display","block");
              $("#newskeyWord label").html($(this).attr("value"));
              pager.fnPage(1);
          }

    });



});










function buildParam(){
    var CategoryId = $("li.active").children("a").attr('id');
    var IndustryCode = $("li.active").children("a").attr('IndustryCode');


    if(!isEmpty(CategoryId)){
        var param = {'CategoryId':CategoryId};
    }else{
        var param = {'IndustryCode':IndustryCode};
    }



    var starttime = $("input[name=start_time]").attr('value');
    if(!isEmpty(starttime)){
        param.BeginTime=starttime;
    }
    var endtime = $("input[name=end_time]").attr('value');
    if(!isEmpty(endtime)){
        param.EndTime = endtime;
    }
    var InfoSource = $("input[name=InfoSource]").attr('value');
    if(!isEmpty(InfoSource)){
        param.SourceName = InfoSource;
    }
    var SourceCode = $("input[name=SourceCode]").attr('value');
    if(!isEmpty(SourceCode)){
        param.SourceCode = SourceCode;
    }
    var Author = $("input[name=Author]").attr('value');
    if(!isEmpty(Author)){
        param.Author = Author;
    }


    var inputText = $("input[name=inputText]").attr('value');
    var istitle = $("select[name=newsselect]").attr('value');
    var field={'1':'Title','0':'Content'};
    if(!isEmpty(inputText)){
        param[field[istitle]]=inputText;
    }
    return param;
}



function initNewPage() {
    $("#newsPage").load(uri.pager, function () {
        pager = FnPage();
        pager.fnInit(function (oSet) {
            getIndustryNews(buildParam(),oSet);
        }, {'records': 0, 'pageSize': 22, 'context': $('#newsPage')});
        pager.fnPage(1);
    });
}


//根据页码，进行请求当前页要显示的新闻
function getIndustryNews(param,oSet) {
    param['Page'] = oSet.pageIndex;
    param['Size'] = oSet.pageSize;
    $("body,html").animate({"scrollTop": 0});
    $.getJSON(uri.queryservice+"/news/list", JSON.stringify(param), function (data) {
        oSet.records=data.Found;
        pager.fnPageInfo();
        fillnews(data.DataList);
    });

    //loaddate(uri.queryservice+"/news/list", JSON.stringify(param), function (data) {
    //    oSet.records=data.Found;
    //    pager.fnPageInfo();
    //    fillnews(data.DataList);
    //
    //    $("#loadingHide").css("display", 'none');
    //}, function () {
    //    $("#loadingHide").css("display", 'block');
    //});

}



function fillnews(data) {
    if (!isEmpty(data)) {
        var html = [];
        for (var i = 0; i < data.length; i++) {
            if (i % 2 == 0) {

                html.push('<tr class="evencolor"><th class="ColorWhite text-center">');
            } else {
                html.push('<tr class="oddcolor"><th class="ColorWhite text-center">');
            }

            //html.push('<tr><th class="ColorWhite text-left">');
            html.push(data[i].PublishDate);
            html.push('</th><td class="ColorWhite text-left"><a class="newsTitle" id="' + data[i].Id + '" title="' + data[i].Title + '">');
            //var title = data[i].ybtitle.length>18
            html.push(data[i].Title + "</a>");
            html.push('</td><td class="ColorWhite text-left">');

            if(data[i].InfoSource=="--"){
                html.push(data[i].InfoSource);
            }else{
                html.push('<a class="InfoSource treecolor" id="' + data[i].SourceCode + '" title="' + data[i].InfoSource + '">');
                html.push(data[i].InfoSource + "</a>");
            }
            html.push('</td></tr>');


            //html.push('</td><td class="ColorWhite text-left"><a class="Author treecolor" title="' + data[i].Author + '">');
            //html.push(data[i].Author + "</a></td></tr>");

        }
        $("#rdxwTable table tbody").html(html.join(''));
        $("#rdxwTable").css("display", 'block');
        $("#newsPage").css("display", 'block');
        $("#rdxwTableNodata").css("display", 'none');
    } else {
        $("#rdxwTable").css("display", 'none');
        $("#newsPage").css("display", 'none');
        $("#rdxwTableNodata").css("display", 'block');
        $(".yxtj").css("display", 'none');
        $("select[name=newsselect]").attr('value',"0");
        $("#yxtjList label").html("");
        $("#yxtjList div").css("display","none");
    }

}





