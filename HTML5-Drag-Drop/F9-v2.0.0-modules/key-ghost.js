/**
 * web版键盘精灵插件
 * 1、支持输入代码/简称/中文全称
 * 2、支持键盘上下键选取
 * 3、支持回车键快捷选择
 * 4、支持选中行高亮显示
 *
 * 范例代码；
 * $.fnKeyGhost({
 * 		jinput: $("#stock"),
 * 		url: 'http://172.17.5.41/keyghost/service?',
 * 		highlight: 'highlight',
 * 		zindex:1,
 * 		callback: function (sTr) {
 * 			stockEl.attr("secucode",sTr);
 * 			$("#stockcode").text(sTr);
 * 		},
 * 		emptyCallback : function(){
 * 			stockEl.attr("secucode", '');
 * 			$("#stockcode").text('');
 * 		},
 * 		width: 300
 * 	});
 *
 * 服务器返回的数据格式:
 * '600000,20477,600000.SH,浦发银行;600001,26466,600001.SH,邯郸钢铁;600002,20073,600002.SH,齐鲁石化;600003,23234,600003.SH,ST东北高;600004,19866,600004.SH,白云机场;600005,25273,600005.SH,武钢股份;600006,19188,600006.SH,东风汽车;600007,21254,600007.SH,中国国贸;600008,23972,600008.SH,首创股份;600009,26733,600009.SH,上海机场;'
 *
 * @author zhengyong
 * @date 2013-02-20
 * @param {JSON Object} option 键盘精灵配置描述
 * opt配置属性有；
 * url				数据获取接口
 * jinput			键盘精灵输入框
 * callback			选中某条数据后的回调函数
 * emptyCallback	当面板无数据可显示时的回调函数
 * highlight		选中某行时的高亮CSS class样式
 * width			选择面板的宽度
 * zindex			面板的CSS zindex属性
 * showField		显示在输入框中的属性索引
 *
 */
$.extend({
    fnKeyGhost:function(option){
        //数据获取地址
        var url = option.url;
        if(!url){alert('请指定数据加载地址(url属性)!');}
        var params=option.params||{type:10,size:10,zip:false,key:""};
        //输入框控件
        var jinput = option.jinput;
        //选中某条数据时的回调函数
        var callback = option.callback && $.isFunction(option.callback) ? option.callback : function(){};
        //无数据可显示时的回调函数
        var emptyCallback = option.emptyCallback && $.isFunction(option.emptyCallback) ? option.emptyCallback : function(){};
        //高亮的CSS class名称
        var highlight = option.highlight || 'highlight';
        //显示的数据条数
        //params.size=10;
        //选取面板的宽度
        var width = option.width || jinput.width();
        var text = '';
        var sThead=option.sThead||'<thead><tr><th>选项</th><th>简称</th><th>代码</th></tr></thead>';
        var aFilter=option.aFilter||[3,4];
        var id = jinput.attr("id")||jinput.attr("id","id"+new Date().getTime()).attr("id");
        //CSS的zindex值
        var zindex = option.zindex || 2999;
        var showField = option.showField || 2;
        var useField=option.useField||2;
        var cancelBubble=option.cancelBubble||false;
        //生成选择面板
        $("body").append('<div id="keygh_'+ id +'" style="position:absolute;z-index:' + zindex + ';display:none;"><div style="width:100%;border:1px solid #C1DAD7;background-color:#fff;position:absolute;z-index:'+zindex+';"><table class="u_tblKeyGhost" cellpadding="0" cellspacing="0">'+sThead+'<tbody></tbody></table></div></div>');
        //缓存节点
        //$("body").append('<div id="_keycache_' + id + '" style="display:none;"></div>');
        var cache = jinput;//$("#_keycache_" + id);
        var panel = $("#keygh_" + id);
        if ('undefined' == typeof(document.body.style.maxHeight)) {
            panel.append('<iframe class="ieframe" frameborder="0" src="#" style="display:block;position:absolute;z-index:'+(zindex-1)+'"></iframe>');
        }
        var tblMain = panel.find("table tbody");
        //面板中每一行数据的事件监听
//		var tblMain1 = tblMain.find("tr");



        tblMain.find("tr").live("click",trClick);
//      tblMain.on("click","tr",trClick);
//      console.log(tblMain.find("tr"));
//		$(document).on("click",".u_tblKeyGhost tbody tr",trClick)
//		setInterval(tblMain.find("tr").click(trClick),500);
//		tblMain.find("tr").live("mousedown",trClick);
        //trClick
        function trClick(e){
            var tr = $(this);
            var sText="";
            tr.find("td").each(function(i,td){
                sText+=$(this).text()+",";
                if(showField==i){
                    text=$(this).text();
                }
                if(useField==i){
                    jinput.attr("seccode",$(this).text());
                }
            });
            jinput.val(text);
            if(sText.lastIndexOf(",")>-1){
                sText=sText.substring(0,sText.length-1)+";";
            }
            showDetail(sText, text);
            panel.hide();
            callback(sText);
        }
        //高亮的CSS class
//		tblMain.find("tr").live("mouseover", function(e){
//			tblMain.find("tr."+highlight).removeClass(highlight);
//			$(this).addClass(highlight);
//		});

//		$(document).on("mouseover","tblMain1",function(e){
//			tblMain.find("tr."+highlight).removeClass(highlight);
//			$(this).addClass(highlight);
//		});
//		$(document).on("mouseout","tblMain1",function(e){
//			$(this).removeClass(highlight);
//		});


//		tblMain.find("tr").live("mouseout", function(){
//			$(this).removeClass(highlight);
//		});
        //窗口尺寸改变
        $(document).resize(movePanel);
        $("body *").scroll(movePanel);
        //输入框的事件监听
        jinput.keyup(_keyup);
        jinput.focus(_show);
        jinput.click(_show);
        jinput.blur(_hide);
        //移动面板位置
        function movePanel(){
            var offset = jinput.offset();
            panel.css({"top" : offset.top + jinput.height() + 5,"left" : offset.left,"width":width});
            if ('undefined' == typeof(document.body.style.maxHeight)) {
                panel.find(".ieframe").css({width:panel.outerWidth(),height:panel.find("table").outerHeight(),top:0,left:0});
            }
        };
        //展示结果详情
        function showDetail(detail,key){
            tblMain.empty();
            if(detail&&detail.length>0){
                var field="";
                var trs="";
                var tds="";
                var j=0;
                var t = '<font style="color:red;">' + key + '</font>';

                for(var i=0;i<detail.length;i++){
                    var c=detail.charAt(i);
                    if(c!=","&&c!=";"){
                        field+=c;
                    }else{//,;
                        var td='';
                        if($.inArray(j,aFilter)>-1){

                            td='<td style="display:none;">'+field+'</td>';
                        }else{
                            if(j==0){
                                td='<td>'+field.replace(key,t)+'</td>';
                            }else{
                                td='<td>'+field+'</td>';
                            }
                        }
                        //deal special
                        if(c==","){
                            tds+=td;
                            j++;
                        }
                        if(c==";"){
                            var lasttd=td;
                            tds+=lasttd;
                            trs+='<tr>'+tds+'</tr>';
                            j=0;
                            tds="";
                        }
                        field="";
                    }
                }//endfor

                tblMain.append(trs);
                show();
                if(key){cache.data(key,detail);}
            }else{
                panel.hide();
            }
        };
        //展现面板
        function show(){
            if(tblMain.find("tr").length > 0){
                panel.show();
                //tblMain.find("tr:first").addClass(highlight);
                tblMain.find("tr."+highlight).length>0?"":tblMain.find("tr:first").addClass(highlight);
                movePanel();
            } else {
                _keyup();
            }
        };
        //隐藏面板
        function _hide(e){
            if(!isMouseAt(e)){
                panel.hide();
            }
            return false;
        };
        function isMouseAt(e){
            jPanel=panel;
            var flag=false;
            if(e){
                var offset = jPanel.offset();
                offset.right = offset.left + jPanel.outerWidth();
                offset.bottom = offset.top + jPanel.outerHeight();
                if(e.pageY < offset.bottom && e.pageY > offset.top && e.pageX < offset.right && e.pageX > offset.left){
                    flag=true;
                }
            }
            return flag;
        }
        //展现面板
        function _show(){
            if(jinput.val() != ''){show();}
        };
        //输入框的键盘事件处理函数
        function _keyup(e){
            if(e){
                var keycode = e.keyCode;
                var selected = tblMain.find("tr." + highlight);
                switch(keycode){
                    //支持↑键快速向上选择
                    case 38:
                    //支持↓键快速向下选择
                    case 40:
                        var trList = tblMain.find("tr");
                        if(trList.length > 0){
                            //移除高亮
                            trList.removeClass(highlight);
                            var t;
                            if(selected.length > 0){
                                if(keycode == 38 && (t = selected.prev()).length == 0){
                                    t = $(trList[trList.length - 1]);
                                }else if(keycode == 40 && (t = selected.next()).length == 0){
                                    t = $(trList[0]);
                                }
                            }else{
                                t = keycode == 38 ? $(trList[trList.length - 1]) : $(trList[0]);
                            }
                            //增加高亮显示
                            t.addClass(highlight);
                        }
                        return;
                    //支持回车快速选择
                    case 13:
                        tblMain.find("tr." + highlight).click();
                        return !cancelBubble;
                }
            }
            //为了支持预先填充代码数据的输入框
            var temp = jinput.val().toUpperCase();
            if(temp != text){
                text = temp;
                //}
                if(text == ''){
                    //清空面板内容
                    tblMain.empty();
                    //隐藏面板
                    panel.hide();
                    //调用回调函数
                    try{emptyCallback();}catch(e){}
                } else {

                    //获取缓存数据
                    var cacheResult = cache.data(text);
                    if(cacheResult){
                        //使用缓存数据
                        showDetail(cacheResult,text);
                    }else{
                        //AJAX获取数据
                        params.key=text;
                        //var result="FE CONSORT INTL,19492,00035.HK,远东发展;FE HLDGS INTL,24697,00036.HK,远东控股国际;";
                        $.get(url,params,function(result){
                            //如果成功
                            if(result!=""){
                                //lastReturnData = result;
                                //显示数据
                                //setTimeout(function(){},1000);
                                showDetail(result,temp);
                            } else{
                                //清空面板
                                tblMain.empty();
                                //隐藏面板
                                panel.hide();
                                //调用回调函数
                                try{emptyCallback();}catch(e){}
                            }
                        });

                    }
                }
            }
        };
    }
});

