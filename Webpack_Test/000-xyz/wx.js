/*插件说明
// creater:yxl
// function:微信分享封装，
// time:2017-05-17
*/

/*使用方法
//要分享的链接地址
var linkUrl = "http://wap.stcn.com/article/196196";
var wxShare = new WxShare({
    appId: 'wxbeb30e33661fa596',
    imgUrl: 'http://upload.stcn.com/2017/0509/1494331346785.jpg',
    title: '这是分享出去的标题',
    desc: '这是发送给朋友的描述信息',
    link: linkUrl,
    circleFunction: function(){
        //确认分享的处理，比如记录到分享操作
    },
    callback: function(data){   
        //处理回调信息
    }
});
*/
function WxShare(conf){
    debugger;
    this.config = {
        appId: conf && conf.appId || '',
        url: "/wxjs/config",   //接口地址
        data: {
            //接口的参数
            appid: conf.appId,
            visitUrl:  location.href.split('#')[0]
        },
        imgUrl: conf && conf.imgUrl || '',
        title: conf && conf.title || '',
        link: conf &&  location.href.split('#')[0] || '',
        desc: conf && conf.desc || '',
        circleFunction: conf && conf.circleFunction || function() {},
        friendFunction: conf && conf.friendFunction || function() {},
        callback: conf && conf.callback || function(d){}
    };
    this.init();
}

WxShare.prototype.init = function(){
    debugger;
    var self = this;
    $.ajax({
        url: self.config.url,
        data: self.config.data,
        type: 'GET',
        dataType: 'json', 
        success: function (d) {    
            // 成功获取到用户信息，然后配置sdk
            debugger;
            wx.config({
                debug: false,
                appId: self.config.appId, // 必填，公众号的唯一标识
                timestamp: d.timestamp, // 必填，生成签名的时间戳
                nonceStr: d.nonceStr, // 必填，生成签名的随机串
                signature: d.signature,// 必填，签名，见附录1
                jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
            });
            wx.ready(function(){
                wx.onMenuShareTimeline({   //分享到朋友圈
                    title: self.config.title,
                    link: self.config.link,
                    imgUrl: self.config.imgUrl,
                    success: function () {
                        // 确认分享
                        //self.config.circleFunction();      
                    },
                    cancel: function () {
                        // 取消分享
                    }
                });
                wx.onMenuShareAppMessage({   //分享给朋友
                    title: self.config.title,
                    link: self.config.link,
                    desc: self.config.desc,
                    imgUrl: self.config.imgUrl,
                    success: function () {
                        // 确认分享
                        //self.config.friendFunction();         
                    },
                    cancel: function () {
                        // 取消分享
                    }
                });

                wx.onMenuShareQQ({    //分享到QQ
                    title: self.config.title,
                    link: self.config.link,
                    desc: self.config.desc,
                    imgUrl: self.config.imgUrl,
                    success: function () { 
                       // 用户确认分享后执行的回调函数
                    },
                    cancel: function () { 
                       // 用户取消分享后执行的回调函数
                    }
                });

                wx.onMenuShareWeibo({    //分享到腾讯微博
                    title: self.config.title,
                    link: self.config.link,
                    desc: self.config.desc,
                    imgUrl: self.config.imgUrl,
                    success: function () { 
                       // 用户确认分享后执行的回调函数
                    },
                    cancel: function () { 
                        // 用户取消分享后执行的回调函数
                    }
                });

                wx.onMenuShareQZone({    //分享到QQ空间
                    title: self.config.title,
                    link: self.config.link,
                    desc: self.config.desc,
                    imgUrl: self.config.imgUrl,
                    success: function () { 
                       // 用户确认分享后执行的回调函数
                    },
                    cancel: function () { 
                        // 用户取消分享后执行的回调函数
                    }
                });
            });
        },
    });
}