/**
 * Created by xhgx on 2017/4/24.
 * zhge yilai nnnn xian
 */
/*本页面依赖于public-method.js*/
/*弹框的基本对象*/
function  Bounced(options){
    this.config = {
        layerBoxClass :"layerBox",
        layerclass:"",
        width:300,
        height:200,
        zIndex:1000,
        alerttit:"信息",
        setOverflow:"overflow-y:scroll",
        str:"",
        callback: function () { }
    };
    $.extend(this.config,options);

}





Bounced.prototype = {
    /*创建弹出框*/
    _createDialog:function(state){
        var that = this;
        var str = "";
        that.config.zIndex++;
        var s = UDP.Public.view();
        str = '<div class="overlay" style="z-index:'+that.config.zIndex+'">' +
            '<div class="animated zoomIn '+that.config.layerBoxClass+'" style = "width:'+ this.config.width+'px;height:'+this.config.height+'px">' +
            '<h5 class="layerHeader">'+this.config.alerttit+'<a href="javascript:;" class="close_btn"></a></h5><div class="layerContianer '+this.config.layerclass+'" style="'+this.config.setOverflow+'">' +
            that.config.str+
            '</div></div>';
        //$("body").append(str);
        $("#zxdtModal").empty().html(str);

        $(".modal-body").css("height",getClientHeight()-200);


        $(window).resize(function() {
            $(".layerBox").css("width",$(window).width()-60+"px");
            $(".layerBox").css("height",$(window).height()-80+"px");
            $(".modal-body").css("height",getClientHeight()-200);
        });

        $(".close_btn").click(function (){
            that.delDialog($(this));
        });
        $("."+that.config.layerBoxClass).eq($(".overlay").size()-1).css({left: (s.w- this.config.width)/2+"px",top: (s.h-this.config.height)/2+"px"});
        if(that.config.callback){
            that.config.callback.apply(this,[]);
        }
        return str;
    },
    /*移除弹框*/
    delDialog:function(ele){
        $(ele).parents(".overlay").remove();
    },
    /*移动弹框*/
    moveDialog:function(ele){
        var that = this;
        var s = UDP.Public.view();
        $(".layerHeader").mousedown(function(e){
            var theme = this;
            var moveEle = $(theme).parents("."+that.config.layerBoxClass);
            e.stopPropagation();
            e.preventDefault();
            var x = e.clientX - moveEle.offset().left;
            var y = e.clientY - moveEle.offset().top;
            $(document).mousemove(function(e){
                var lf = e.clientX-x;
                var tp = e.clientY-y;
                lf=lf<0 ? 0:lf;
                lf=lf>(s.w - moveEle.width()) ? (s.w - moveEle.width()):lf;
                tp=tp<0 ? 0:tp;
                tp=tp>(s.h - moveEle.height()) ? (s.h - moveEle.height()):tp;
                moveEle.css({left: lf+"px",top:tp+"px"});
            });
            $(document).mouseup(function(){
                $(this).unbind("mousemove");
            });
        });
    },
    /*手动调整弹框大小*/
    revampSize:function(){
        var that = this;
        var s = UDP.Public.view();
        $(".layer-size").mousedown(function(e){
            var theme = this;
            var moveEle = $(theme).parents("."+that.config.layerBoxClass);
            var x = e.clientX - moveEle.width();
            var y = e.clientY - moveEle.height();
           $(document).mousemove(function(e){
               var width = e.clientX-x+"px";
               var height = e.clientY-y+"px";
               width=width<0 ? 0:width;
               width=width>s.w ? s.w :width;
               height=height<0 ? 0:height;
               height=height>s.h ? s.h :height;
               moveEle.css({width:width,height:height});
           });
            $(document).mouseup(function(){
                $(document).unbind("mousemove");
            });
        });
    },
    changeSize: function () {
        $('div#fontsize a').mousedown(function (e) {
            var id = $(this).attr('id');
            $('div#fontsize .active').removeClass('active');
            $(this).parent('span').addClass('active');
            switch(id)
            {
                case 'big':
                    $("#zxdtContent").css("font-size",'16px');
                    break;
                case 'middle':
                    $("#zxdtContent").css("font-size",'14px');
                    break;
                default:
                    $("#zxdtContent").css("font-size",'12px');
            }
        });
    }
    ,show:function(){
        this._createDialog();
        this.moveDialog();
        this.revampSize();
        this.changeSize();
    }

}

;(function(win){
    if(win["UDP"]){
        win["UDP"].Bounced = Bounced;
    }else{
        win.UDP = {Bounced:Bounced};
    }
})(window);


