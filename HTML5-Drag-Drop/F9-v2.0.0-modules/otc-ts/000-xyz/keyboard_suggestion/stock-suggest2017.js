(function webpackUniversalModuleDefinition(root, factory) {
    if(typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if(typeof define === 'function' && define.amd)
        define([], factory);
    else if(typeof exports === 'object')
        exports["suggest2017"] = factory();
    else
        root["suggest2017"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * cookie
 */

var cookie = {
    get: function (name) {
        var xarr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
        try {
            if (xarr != null) return decodeURIComponent(xarr[2]);
        } catch (error) {

        }

        return null;
    },
    set: function(key,value,expiredays,domain){
        var setstring = [key + "=" + encodeURIComponent(value)];
        if(expiredays){
            var exdate = new Date();
            exdate.setDate(exdate.getDate() + expiredays);
            setstring.push("expires=" + exdate.toGMTString());
        }
        setstring.push("path=/");
        if(domain){
            setstring.push("domain=" + domain);
        }
        document.cookie = setstring.join(';');
    },
    del: function (key, domain) {
        var exdate = new Date((new Date).getTime() - 1);
        if (domain) {
            document.cookie = key + '=;path=/;domain=' + domain + ';expires=' + exdate.toGMTString();
        }
        else{
            document.cookie = key + '=;path=/;expires=' + exdate.toGMTString();
        }

    }
};

module.exports = cookie;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
    get: function(name, env){
        if(env == undefined){
            env = 'dev';
        }
        return this[env][name];
    },
    dev: {
        styleurl:'/css/stocksuggest2017.css',
        apiurl: '//searchapi.eastmoney.com/api/'
    },
    test: {
        styleurl:'//emcharts.dfcfw.com/suggest/test/stocksuggest2017.css',
        apiurl: 'http://api.so.zptest.emapd.com/api/'
    },
    prod: {
        styleurl:'//emcharts.dfcfw.com/suggest/stocksuggest2017.css',
        apiurl: '//searchapi.eastmoney.com/api/'
    }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 新版suggest
 */

__webpack_require__(3)

var $ = jQuery;
var addcssfile = __webpack_require__(9);
var makehtml = __webpack_require__(10);
var config = __webpack_require__(1);
var search_history = __webpack_require__(25);
var stats = __webpack_require__(26);
var browser = __webpack_require__(27)


addcssfile(config.get('styleurl' , "prod"));

var newcount = null; //热门new数量


function suggest2017(options) {
  var default_options = { //默认参数
    inputid: null,
    onSubmit: "search",
    onConfirmStock: 'quote',
    moveinput: 'Code',
    zindex:1000,
    position: {left:null, top:null},
    offset: {left:0, top:0},
    newtipsoffset: {left:0, top:0},
    placeholder: '输入股票代码、名称、简拼或关键字',
    stockcount: 5,
    gubacount: 4,
    width:364,
    showblank: true,
    showstocklink: true,
    modules: ["stock","guba","user","group","info","searchall"],
    shownewtips: false,
    //modules: ["stock","guba","user","group","searchall"],
    filter:{
      markettype:'',
      mktnum:'',
      jys:'',
      classify:'',
      securitytype:''
    },
    hotStockLink: null
  }

  this.options = $.extend(default_options, options); //合并参数

  this.input = $('#' + this.options.inputid); //输入框
  if(this.input.length <= 0){
    console.info('没有找到' + this.options.inputid);
    return false;
  }
  this.form = this.input.parents('form'); //输入框所属表单
  this.form.css({position: 'relative'});
  this.stock_data = null; //目前选择的股票数据
  this.key = ""; //输入框的值

  this.init();
  this.bind();
}

suggest2017.prototype.init = function(){
  var _this = this;
  this.input.prop('autocomplete','off').addClass('noieclear'); //autocomplete

  if(this.options.placeholder != ''){ //placeholder
    if('placeholder' in document.createElement('input')){ //判断placeholder兼容性
      this.input.prop('placeholder', this.options.placeholder);
      if($.trim(this.input.val()) != this.options.placeholder){
        this.key = $.trim(this.input.val());
      }
    }
    else{
      if ($.trim(this.input.val()) != "") {
        this.key = $.trim(this.input.val());
      }
      else{
        this.input.val(this.options.placeholder).addClass('sugphder');
      }

      this.input.on('focus', function(){
        if(_this.input.val() == _this.options.placeholder){
          _this.input.val('').removeClass('sugphder');
        }
      });
      this.input.on('blur', function(){
        if(_this.input.val() == ''){
          _this.input.val(_this.options.placeholder).addClass('sugphder');
        }
      });
    }
  }

  //设置宽度
  this.widths = {};
  var fix_width = Math.floor(this.options.width - 364); //1分宽度
  var fix_width_2 = Math.floor((this.options.width - 364) / 2); //2分宽度

  this.widths.text_left_fix = Math.floor((this.options.width - 364) / 6); //截字修正宽度
  this.widths.text_left_fix_2 = Math.floor((this.options.width - 364) / 12); //截字修正宽度 2分
  this.widths.sg2017lp_li = 158 + fix_width_2; //历史搜索宽度
  this.widths.sg2017ll = 182 + fix_width_2; //热门搜索宽度
  this.widths.sg2land = 270 + fix_width; //相关用户宽度
  this.widths.sg2landl2 = 195 + fix_width; //相关用户名称宽度



  if(this.div == undefined){ //append div
    this.div = makehtml.init(this.options.width);
    this.divc = $('.suggest2017c', this.div);

    if (browser.isIpad()) {
      //console.info(111);
      this.closediv = $('<div class="suggest2017_close"><img src="//emcharts.dfcfw.com/imgcdn/c9e50c9888.png"></div>');
      this.div.append(this.closediv);
      this.closediv.click(function(){
        _this.div.hide();
      });
    }

    this.div.css({zIndex: this.options.zindex});
    this.rePosition();
    this.form.append(this.div);
    //this.input.after(this.div);
  }

  //hot new
  if (this.options.shownewtips) {
    makehtml.showHotNew(this, newcount, function(count){
      newcount = count;
    });
  }
}

/**
 * 重新定位
 *
 */
suggest2017.prototype.rePosition = function(){
  //重新定位

  var left = this.input.position().left;
  var top = this.input.position().top + this.input.outerHeight() + 1;

  if(this.options.position.left){
    left = this.options.position.left;
  }
  if(this.options.position.top){
    top = this.options.position.top;
  }
  if(this.options.offset.left){
    left = left + this.options.offset.left;
  }
  if(this.options.offset.top){
    top = top + this.options.offset.top;
  }

  this.div.css({
    left: left,
    top: top
  });
}


suggest2017.prototype.bind = function(){
  var _this = this;
  var search_cd = null;
  var search_preval = '';

  this.input.on('keyup', function(e){
    if(e.keyCode == 38){
      _this.movedown(-1);
      return false;
    }
    else if(e.keyCode == 40){
      _this.movedown(1);
      return false;
    }

    _this.key =  $.trim(_this.input.val());
    if(_this.key != search_preval){
      clearTimeout(search_cd);
      search_cd = setTimeout(function() {
        _this.search();
      }, 300);
      search_preval = _this.key;
    }

  });

  this.input.on('keydown', function(e){
    if(e.keyCode == 13){
      var tr = $('.xgstock .sg2017table tr.suggest2017tf', this.div);
      if(tr.length > 0){
        tr.click();
        return false;
      }
    }
  });

  this.input.on('focus', function(){
    _this.showBlankInit();
    //橙色new hot变白
    if (_this.options.shownewtips && _this.options.showblank) {
      makehtml.showHotNewIconed(_this);
    }
  });



  this.form.on('submit', function(){
    _this.input.blur();
    var hqurl = '';
    if( _this.options.onSubmit == 'search' ){
      hqurl = 'http://so.eastmoney.com/web/s?keyword=' + encodeURIComponent(_this.key);
      window.open(hqurl);
      _this.hide();
      return false;
    }
    else if( _this.options.onSubmit == 'quote' ){
      var hqurl = '';
      if(_this.stock_data != null){
        console.info(_this.stock_data);
        hqurl = 'http://so.eastmoney.com/link?input=' + _this.stock_data.Code + '&returnurl=' + encodeURIComponent('http://quote.eastmoney.com/web/r/' + _this.stock_data.ID) + '&marketType=' + _this.stock_data.MarketType;
        if(_this.stock_data.MarketType == '6'){
          hqurl = 'http://so.eastmoney.com/link?input=' + _this.stock_data.Code + '&returnurl=' + encodeURIComponent('http://fund.eastmoney.com/' + _this.stock_data.Code + '.html') + '&marketType=' + _this.stock_data.MarketType;
        }
      }
      else{
        hqurl = 'http://so.eastmoney.com/web/s?keyword=' + encodeURIComponent(_this.key);
      }
      window.open(hqurl);
      _this.hide();
      return false;
    }
    else if( _this.options.onSubmit == 'default' ){
      _this.hide();
      // _this.submit();
      // return false;
    }
    else if( typeof _this.options.onSubmit == 'function' ){
      _this.hide();
      return _this.options.onSubmit({
        key: _this.key,
        stock: _this.stock_data
      });
    }
  })

  if (browser.isIpad()) {
    $(document).on('touchend', function(e){
      var target = $(e.target);
      if( target.is(_this.input) || _this.div.has(target).length > 0){

      }
      else{
        _this.div.hide();
        _this.input.blur();
      }
    });
  }
  else{
    $(document).on('click', function(e){
      //alert(111)
      var target = $(e.target);
      if( target.is(_this.input) || _this.div.has(target).length > 0){

      }
      else{
        _this.div.hide();
      }
    });
  }




  $(window).resize(function() {
    _this.rePosition();
  });

  //搜索历史
  this.div.on('click', 'a', function(){
    if($(this).data('searchhistory')){
      search_history.addHistory($(this).data('searchhistory'))
    }
  });

  //清空历史
  this.div.on('click', '.clearhsr', function(){
    search_history.clearHistory();
    $('.sg2017hsr', _this.div).remove();
    return false;
  });

  bindStats(this, this.div, this.input, this.form);
}

/**
 * 大数据统计
 * @param {*} container
 */
function bindStats(that, container, thisinput, thisform){
  thisinput.on('focus', function(){
    stats('input', 'focus', 'Web_so_srk');
  });
  thisform.on('submit', function(){
    stats('form', 'submit', 'Web_so_ss', that.key);
  });
  container.on('click', 'a', function(){
    var stype = $(this).data('stype');
    var skey =  decodeURIComponent($(this).data('skey'));
    if( stype ){
      stats('a', 'click', 'Web_so_' + stype, that.key, skey);
    }
  });
}

// /**
//  * 表单提交默认函数
//  *
//  * @returns
//  */
// suggest2017.prototype.getSelect = function(){
//   var tr = $('.xgstock .sg2017table tr.suggest2017tf', this.div);
//   console.info(tr.length);
//   if (tr.length == 0) {

//   }
//   else{
//     console.info(111);
//     return false;
//   }
// }

/**
 * 按键上下
 *
 * @param {any} n
 * @returns
 */
suggest2017.prototype.movedown = function(n){
  var trs = $('.xgstock .sg2017table tr', this.div);
  if(trs.length < 1){
    return false;
  }

  var index = trs.filter('.suggest2017tf').index();
  trs.removeClass('suggest2017tf');
  index =  index + n;
  if(index < 0){
    index = trs.length - 1;
  }
  else if(index >= trs.length){
    index = 0;
  }
  var nowtr = trs.eq(index);
  nowtr.addClass('suggest2017tf');
  this.stock_data = nowtr.data('stockdata');
  this.input.val(this.stock_data[this.options.moveinput]);
}

suggest2017.prototype.search = function(){
  if(this.key == ''){
    if (this.options.showblank) {
      this.showBlankInit();
    }
    else{
      this.hide();
    }
    return false;
  }
  this.showResult(this.key);
}

suggest2017.prototype.showBlankInit = function(){
  if(this.key != ''){
    this.showResult(this.key);
    return false;
  }
  else if(this.options.showblank){
    makehtml.blankInit(this, this.div, this.divc, this.widths);
  }
  return false;
}

// suggest2017.prototype.showResult = function(key){
//   var _this = this;
//   makehtml.xgsearch(key, this.options.modules, this.options.filter, this.options.stockcount, this.div, this.widths, function(){
//     var trs = $('.xgstock .sg2017table tr', this.div);
//     if(trs.length > 0){
//       _this.stock_data = trs.eq(0).data('stockdata');
//     }
//     else{
//       _this.stock_data = null;
//     }

//     trs.on('click', function(){
//       _this.stock_data = $(this).data('stockdata');
//       if(_this.options.onConfirmStock == 'quote'){
//         if(_this.stock_data.MarketType == '6'){
//           window.open('http://so.eastmoney.com/link?input=' + _this.stock_data.Code + '&returnurl=' + encodeURIComponent('http://fund.eastmoney.com/' + _this.stock_data.Code + '.html') + '&marketType=' + _this.stock_data.MarketType);
//         }
//         else{
//           window.open('http://so.eastmoney.com/link?input=' + _this.stock_data.Code + '&returnurl=' + encodeURIComponent('http://quote.eastmoney.com/web/r/' + _this.stock_data.ID) + '&marketType=' + _this.stock_data.MarketType);
//         }

//       }
//       else if(_this.options.onConfirmStock == 'submit'){
//         _this.form.submit();
//       }
//       else if(typeof _this.options.onConfirmStock == 'function'){
//         _this.hide();
//         return _this.options.onConfirmStock({
//           key: _this.key,
//           stock: _this.stock_data
//         });
//       }
//       _this.hide();
//     });

//     trs.on('click', 'a', function(){
//       window.open($(this).attr('href'));
//       _this.hide();
//       return false;
//     })
//   });
// }

suggest2017.prototype.showResult = function(key){
  var _this = this;
  makehtml.newSearch({
    key: key,
    modules: this.options.modules,
    filter: this.options.filter,
    stockcount: this.options.stockcount,
    gubacount: this.options.gubacount,
    container: this.div,
    containerc: this.divc,
    widths: this.widths,
    showstocklink: this.options.showstocklink
  }, function(){
    var trs = $('.xgstock .sg2017table tr', this.div);
    if(trs.length > 0){
      _this.stock_data = trs.eq(0).data('stockdata');
    }
    else{
      _this.stock_data = null;
    }

    trs.on('click', function(){
      //console.info(111);
      _this.stock_data = $(this).data('stockdata');
      stats('tr', 'click', 'Web_so_zq', _this.key, _this.stock_data.Name);
      if(_this.options.onConfirmStock == 'quote'){
        if(_this.stock_data.MarketType == '6'){
          window.open('http://so.eastmoney.com/link?input=' + _this.stock_data.Code + '&returnurl=' + encodeURIComponent('http://fund.eastmoney.com/' + _this.stock_data.Code + '.html') + '&marketType=' + _this.stock_data.MarketType);
        }
        else{
          window.open('http://so.eastmoney.com/link?input=' + _this.stock_data.Code + '&returnurl=' + encodeURIComponent('http://quote.eastmoney.com/web/r/' + _this.stock_data.ID) + '&marketType=' + _this.stock_data.MarketType);
        }

      }
      else if(_this.options.onConfirmStock == 'submit'){
        _this.form.submit();
      }
      else if(typeof _this.options.onConfirmStock == 'function'){
        _this.hide();
        return _this.options.onConfirmStock({
          key: _this.key,
          stock: _this.stock_data
        });
      }
      _this.hide();
    });

    trs.on('click', 'a', function(){
      var stype = $(this).data('stype');
      var skey =  decodeURIComponent($(this).data('skey'));
      if( stype ){
        stats('a', 'click', 'Web_so_' + stype, _this.key, skey);
      }
      window.open($(this).attr('href'));
      _this.hide();
      return false;
    })
  });
}

suggest2017.prototype.remove = function(){
  this.div.remove();
}

suggest2017.prototype.show = function(){
  this.div.show();
}

suggest2017.prototype.hide = function(){
  this.div.hide();
}


//window.suggest2017 = suggest2017;
module.exports = suggest2017;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * pollfill
 */

__webpack_require__(4)
__webpack_require__(5)
__webpack_require__(6)
__webpack_require__(7)
__webpack_require__(8)
//require('./ie9_input')

/***/ }),
/* 4 */
/***/ (function(module, exports) {

if (typeof Object.assign != 'function') {
  Object.assign = function(target) {
    'use strict';
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    target = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      var source = arguments[index];
      if (source != null) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }
    return target;
  };
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

(function(global) {
  'use strict';
  if (!global.console) {
    global.console = {};
  }
  var con = global.console;
  var prop, method;
  var dummy = function() {};
  var properties = ['memory'];
  var methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' +
     'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' +
     'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',');
  while (prop = properties.pop()) if (!con[prop]) con[prop] = {};
  while (method = methods.pop()) if (!con[method]) con[method] = dummy;
  // Using `this` for web workers & supports Browserify / Webpack.
})(typeof window === 'undefined' ? this : window);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * 简单的JSON pollyfill
 */

if (!window.JSON) {
  window.JSON = {
    parse: function(sJSON) { return eval('(' + sJSON + ')'); },
    stringify: (function () {
      var toString = Object.prototype.toString;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var isArray = Array.isArray || function (a) { return toString.call(a) === '[object Array]'; };
      var escMap = {'"': '\\"', '\\': '\\\\', '\b': '\\b', '\f': '\\f', '\n': '\\n', '\r': '\\r', '\t': '\\t'};
      var escFunc = function (m) { return escMap[m] || '\\u' + (m.charCodeAt(0) + 0x10000).toString(16).substr(1); };
      var escRE = /[\\"\u0000-\u001F\u2028\u2029]/g;
      return function stringify(value) {
        if (value == null) {
          return 'null';
        } else if (typeof value === 'number') {
          return isFinite(value) ? value.toString() : 'null';
        } else if (typeof value === 'boolean') {
          return value.toString();
        } else if (typeof value === 'object') {
          if (typeof value.toJSON === 'function') {
            return stringify(value.toJSON());
          } else if (isArray(value)) {
            var res = '[';
            for (var i = 0; i < value.length; i++)
              res += (i ? ', ' : '') + stringify(value[i]);
            return res + ']';
          } else if (toString.call(value) === '[object Object]') {
            var tmp = [];
            for (var k in value) {
              // in case "hasOwnProperty" has been shadowed
              if (hasOwnProperty.call(value, k))
                tmp.push(stringify(k) + ': ' + stringify(value[k]));
            }
            return '{' + tmp.join(', ') + '}';
          }
        }
        return '"' + value.toString().replace(escRE, escFunc) + '"';
      };
    })()
  };
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * Array相关polyfill
 * 实现 forEach map
 */

 // Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {

  Array.prototype.forEach = function(callback, thisArg) {

    var T, k;

    if (this == null) {
      throw new TypeError(' this is null or not defined');
    }

    // 1. Let O be the result of calling toObject() passing the
    // |this| value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get() internal
    // method of O with the argument "length".
    // 3. Let len be toUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If isCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== "function") {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let
    // T be undefined.
    if (arguments.length > 1) {
      T = thisArg;
    }

    // 6. Let k be 0
    k = 0;

    // 7. Repeat, while k < len
    while (k < len) {

      var kValue;

      // a. Let Pk be ToString(k).
      //    This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty
      //    internal method of O with argument Pk.
      //    This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal
        // method of O with argument Pk.
        kValue = O[k];

        // ii. Call the Call internal method of callback with T as
        // the this value and argument list containing kValue, k, and O.
        callback.call(T, kValue, k, O);
      }
      // d. Increase k by 1.
      k++;
    }
    // 8. return undefined
  };
}



// 实现 ECMA-262, Edition 5, 15.4.4.19
// 参考: http://es5.github.com/#x15.4.4.19
if (!Array.prototype.map) {
  Array.prototype.map = function(callback, thisArg) {

    var T, A, k;

    if (this == null) {
      throw new TypeError(" this is null or not defined");
    }

    // 1. 将O赋值为调用map方法的数组.
    var O = Object(this);

    // 2.将len赋值为数组O的长度.
    var len = O.length >>> 0;

    // 3.如果callback不是函数,则抛出TypeError异常.
    if (Object.prototype.toString.call(callback) != "[object Function]") {
      throw new TypeError(callback + " is not a function");
    }

    // 4. 如果参数thisArg有值,则将T赋值为thisArg;否则T为undefined.
    if (thisArg) {
      T = thisArg;
    }

    // 5. 创建新数组A,长度为原数组O长度len
    A = new Array(len);

    // 6. 将k赋值为0
    k = 0;

    // 7. 当 k < len 时,执行循环.
    while(k < len) {

      var kValue, mappedValue;

      //遍历O,k为原数组索引
      if (k in O) {

        //kValue为索引k对应的值.
        kValue = O[ k ];

        // 执行callback,this指向T,参数有三个.分别是kValue:值,k:索引,O:原数组.
        mappedValue = callback.call(T, kValue, k, O);

        // 返回值添加到新数组A中.
        A[ k ] = mappedValue;
      }
      // k自增1
      k++;
    }

    // 8. 返回新数组A
    return A;
  };
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

if (!window.JSON) {
  window.JSON = {
    parse: function(sJSON) { return eval('(' + sJSON + ')'); },
    stringify: (function () {
      var toString = Object.prototype.toString;
      var isArray = Array.isArray || function (a) { return toString.call(a) === '[object Array]'; };
      var escMap = {'"': '\\"', '\\': '\\\\', '\b': '\\b', '\f': '\\f', '\n': '\\n', '\r': '\\r', '\t': '\\t'};
      var escFunc = function (m) { return escMap[m] || '\\u' + (m.charCodeAt(0) + 0x10000).toString(16).substr(1); };
      var escRE = /[\\"\u0000-\u001F\u2028\u2029]/g;
      return function stringify(value) {
        if (value == null) {
          return 'null';
        } else if (typeof value === 'number') {
          return isFinite(value) ? value.toString() : 'null';
        } else if (typeof value === 'boolean') {
          return value.toString();
        } else if (typeof value === 'object') {
          if (typeof value.toJSON === 'function') {
            return stringify(value.toJSON());
          } else if (isArray(value)) {
            var res = '[';
            for (var i = 0; i < value.length; i++)
              res += (i ? ', ' : '') + stringify(value[i]);
            return res + ']';
          } else if (toString.call(value) === '[object Object]') {
            var tmp = [];
            for (var k in value) {
              if (value.hasOwnProperty(k))
                tmp.push(stringify(k) + ': ' + stringify(value[k]));
            }
            return '{' + tmp.join(', ') + '}';
          }
        }
        return '"' + value.toString().replace(escRE, escFunc) + '"';
      };
    })()
  };
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * add style file
 */
module.exports = function (url) {
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('link');
  style.setAttribute("rel", "stylesheet");
  style.setAttribute("href", url);
  head.appendChild(style);
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 生成html
 */
var data = __webpack_require__(11);
var stock_template = __webpack_require__(12);
var modules_template = __webpack_require__(13);

var searchinfo_template = __webpack_require__(20);
//var xsearch_init_template = require('./search_init.html');
var init_template = __webpack_require__(21);
var blank_init_template = __webpack_require__(22);
var doT = __webpack_require__(23)
var text = __webpack_require__(24)
var $ = jQuery;

module.exports = {
  init: function(width){
    return $(doT.template(init_template)({
      width: width
    }));
  },
  /**
   * 空白搜索
   *
   * @param {any} container
   */
  blankInit: function(that, container, containerc, widths){
    containerc.html('<div class="sg2017loading"><div class="sg2017loadingimg"></div></div>');
    container.show();
    data.hotsearch(function(json){
      json.search_history = data.getSearchHistory(10);
      json.widths = widths;
      console.info(json);
      json.text = text;
      json.hotStockLink = that.options.hotStockLink;
      var html = doT.template(blank_init_template)(json);
      containerc.html(html);
    }, function(error){
      console.info(error.msg);
    })
  },
  showHotNew: function(that, newcount, callback){
    var _this = this;
    if (newcount == null) {
      data.getNewCount()
      .then(function(count){
        //console.info(count);
        _this.showHotNewIcon(that, count);
        if (callback) {
          callback(count)
        }
      })
      .fail(function(error){

      });
    }
    else{
      _this.showHotNewIcon(that, newcount);
    }
  },
  /**
   * 显示橙色的new hot图标
   *
   * @param {any} that
   * @param {any} count
   */
  showHotNewIcon: function(that, count){
    var html = $('<div class="suggest2017hotnewt">' + count + '</div>');
    that.newhothtml = html;
    that.form.append(html);
    var left = that.input.position().left + that.input.width() - 12;
    var top = that.input.position().top + 6;
    html.css({
      left: left + that.options.newtipsoffset.left,
      top: top + that.options.newtipsoffset.top
    });
  },
  /**
   * 橙色的new hot图标变白
   *
   * @param {any} that
   */
  showHotNewIconed: function(that){
    if (typeof that.newhothtml != 'undefined') {
      that.newhothtml.addClass('suggest2017hotnewted');
    }
  },
  /**
   * 相关搜索
   *
   * @param {any} key
   * @param {any} container
   */
  xgsearch: function(key, modules, filter, stockcount, container, widths, stockcb, infocb){
    var _this = this;
    var checktime = 0;
    var checksearchball = 0;
    var html = doT.template(xgsearch_init_template)({
      key: key
    });
    container.html(html).show();

    this.stock(key, filter, stockcount, container, widths, function(hasstock){
      if(!hasstock){
        checksearchball++;
      }
      checktime++;
      _this.checksearchballFuc(checksearchball, checktime, container);
      if(stockcb) stockcb();
    });
    this.searchinfo(key, filter, container, widths, function(hasxg){
      if(!hasxg){
        checksearchball++;
      }
      checktime++;
      _this.checksearchballFuc(checksearchball, checktime, container);
      if(infocb) infocb();
    });
  },
  newSearch: function(options, callback, fail){
    //key, modules, filter,stockcount, gubacount,container,widths, showstocklink
    var _this = this;
    var html = options.modules.map(function(v){
      return '<div class="modules_' + v + '"></div>';
    });

    html.push('<div class="sg2017loading"><div class="sg2017loadingimg"></div></div>')

    options.containerc.html(html.join(''));
    options.container.show();

    $.when.apply($, options.modules.map(function(v){
      return _this.searchModule({
        key: options.key,
        module_name: v,
        filter: options.filter,
        stockcount: options.stockcount,
        gubacount: options.gubacount,
        container: options.container,
        containerc: options.containerc,
        widths: options.widths
      });
    }))
    .done(function(){
      // for (var i = 0; i < arguments.length; i++) {
      //   console.info(arguments[i]);
      // }

      $('.sg2017loading', options.container).remove();

      try {
        _this.moduleFillHtml({
          container: options.container,
          containerc: options.containerc,
          widths: options.widths,
          modules: options.modules,
          key: options.key,
          showstocklink: options.showstocklink
        }, arguments);
      } catch (error) {
        console.error(error)
      }

      //sg2017bb nobb

      $('.sg2017bb:last', options.container).addClass('nobb');
      var text = $.trim(options.containerc.text())
      if( text == '' || text == '查看全部搜索结果' ){
        options.containerc.prepend('<div class="sg2017nof"><div class="sg2017nofi"><span class="icon icon_face"></span><br>未能搜索到符合条件的结果</div></div>');
        $('.sg2017nof', options.container).show();
      }
      callback();
    })

    // this.searchinfo(key, filter, container, widths, function(hasxg){
    //   if(!hasxg){
    //     checksearchball++;
    //   }
    //   checktime++;
    //   _this.checksearchballFuc(checksearchball, checktime, container);
    //   if(infocb) infocb();
    // });
  },

  /**
   * 模块搜索
   */
  searchModule: function (options) {
    //key, module_name, filter, stockcount, gubacount
    if (options.module_name == 'searchall') {
      return function (dtd) {
        var dtd = $.Deferred();
        dtd.resolve({});
        return dtd.promise();
      }();
    }

    var search_types = [];
    switch (options.module_name) {
      case 'stock':
        search_types = [14];
        break;
      case 'guba':
        search_types = [8];
        break;
      case 'user':
        search_types = [2, 7];
        break;
      case 'group':
        search_types = [3];
        break;
      case 'info':
        search_types = [4, 5, 6, 9, 10, 11, 12, 20];
        break;
      default:
        break;
    }

    var count = 1;
    if(options.module_name == 'stock'){
      count = options.stockcount;
    }
    if(options.module_name == 'guba'){
      count = options.gubacount;
    }

    return data.getdata2({
      key: options.key,
      types: search_types,
      count: count,
      filter: options.filter
    })
  },
  /**
   * 填充模块HTML
   */
  moduleFillHtml: function(options, datas){
    // key, container, widths, modules, showstocklink
    options.modules.forEach(function(v, i){
      var json = datas[i];
      if(v == 'searchall') json = {};

      json.key = options.key;
      json.text = text;
      json.widths = options.widths;
      json.showstocklink = options.showstocklink;
      console.info(json);
      var html = doT.template(modules_template[v])(json);
      $('.modules_' + v, options.container).html(html);
    });
  },

  checksearchballFuc: function(n, timer, container){
    if(timer == 2){
      if(n == 2){
        $('.sg2017nof', container).show();
      }
      $('.sg2017loading', container).hide();
    }
  },
  //相关证券
  stock: function(key, filter, stockcount, container, widths, callback){
    data.stockdata(key, filter, stockcount, function(json){

      json = json.QuotationCodeTable;
      json.key = key;
      json.hasdata = (json.Data != null && json.Data.length > 0);
      json.text = text;
      json.widths = widths;

      console.info(json);
      var html = doT.template(modules_stock_template)(json);

      $('.xgstock', container).html(html);

      if(callback){
        callback(json.hasdata);
      }
    }, function(error){

    })
  },
  searchinfo: function(key, filter, container, widths, callback){
    data.searchinfo(key, filter, function(json){
      json.key = key;
      json.text = text;
      console.info(json);
      json.hasguba = (json.GubaCodeTable.Data != null && json.GubaCodeTable.Data.length > 0);
      json.hasuser = (json.FortuneAccount.Data != null && json.FortuneAccount.Data.length > 0) || (json.Passport.Data != null && json.Passport.Data.length > 0);
      json.hasxg = (json.Notice.TotalCount > 0 || json.ResearchReport.TotalCount > 0 || json.CMSArticle.TotalCount > 0 || json.Blog.TotalCount > 0 || json.GubaTopic.TotalCount > 0 || json.FortuneArticle.TotalCount > 0 || json.GubaArticle.TotalCount > 0 || json.WenDongMi.TotalCount > 0);
      json.widths = widths;

      var html = doT.template(searchinfo_template)(json);

      $('.xgsearch', container).html(html);

      if(callback){
        callback(json.hasguba || json.hasuser || json.hasxg);
      }
    }, function(error){

    })
  }
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 获取数据
 */
var $ = jQuery;
var cookie = __webpack_require__(0);
var config = __webpack_require__(1)

var apiurl = config.get('apiurl' , "prod");

var dataindex = {
  2: "FortuneAccount",
  3: "Portfolio",
  4: "FortuneArticle",
  5: "GubaTopic",
  6: "ResearchReport",
  7: "Passport",
  8: "GubaCodeTable",
  9: "GubaArticle",
  10: "Notice",
  11: "WenDongMi",
  12: "Blog",
  14: "QuotationCodeTable",
  20: "CMSArticle"
}

var data_cache = {
  search:{}
};

module.exports = {
  getdata: function(key, filter, stockcount, type, callback, fail){
    var cachekey = escape(key + '||' + type.join(','));
    if(data_cache.search[cachekey] == undefined){
      var getobj = {
        input: key,
        type: type.join(','),
        token: 'D43BF722C8E33BDC906FB84D85E326E8',
        markettype: filter.markettype,
        mktnum: filter.mktnum,
        jys: filter.jys,
        classify: filter.classify,
        securitytype: filter.securitytype
        //count: stockcount
      }

      if(stockcount > 0){
        getobj.count = stockcount;
      }

      $.ajax({
        //url: 'http://api.so.eastmoney.com/api/suggest/get?cb=?',
        url: apiurl + 'suggest/get?cb=?',
        type: 'GET',
        dataType: 'jsonp',
        data: getobj,
        scriptCharset: 'utf-8'
      })
      .done(function(json) {
        data_cache.search[cachekey] = json;
        callback(json);
      })
      .fail(function(error) {
        fail(error);
      })
    }
    else{
      callback(data_cache.search[cachekey]);
    }
  },

  getdata2: function(options){
    var dtd = $.Deferred();
    var cachekey = escape(options.key + '||' + options.types.join(','));
    if(data_cache.search[cachekey] == undefined){
      var getobj = {
        input: options.key,
        type: options.types.join(','),
        token: 'D43BF722C8E33BDC906FB84D85E326E8',
        markettype: options.filter.markettype,
        mktnum: options.filter.mktnum,
        jys: options.filter.jys,
        classify: options.filter.classify,
        securitytype: options.filter.securitytype,
        count: options.count
        //count: stockcount
      }

      // if(options.stockcount > 0){
      //   getobj.count = options.stockcount;
      // }

      $.ajax({
        //url: 'http://api.so.eastmoney.com/api/suggest/get?cb=?',
        url: apiurl + 'suggest/get?cb=?',
        type: 'GET',
        dataType: 'jsonp',
        data: getobj,
        scriptCharset: 'utf-8'
      })
      .done(function(json) {
        data_cache.search[cachekey] = json;
        dtd.resolve(json);
      })
      .fail(function(error) {
        dtd.reject(error);
      })
    }
    else{
      dtd.resolve(data_cache.search[cachekey]);
    }
    return dtd.promise();
  },

  /**
   * 获取hot new数量
   *
   * @returns
   */
  getNewCount: function(){
    var dtd = $.Deferred();

    var getobj = {
      token: 'D43BF722C8E33BDC906FB84D85E326E8'
    }

    $.ajax({
      //url: 'http://api.so.eastmoney.com/api/suggest/get?cb=?',
      url: apiurl + 'suggest/getbubble?cb=?',
      type: 'GET',
      dataType: 'jsonp',
      data: getobj,
      scriptCharset: 'utf-8'
    })
    .done(function(json) {
      if (json.Status == 0 && json.Data) {
        dtd.resolve(json.Data.BubbleCount);
      }
      else{
        dtd.reject(new Error(json.Message));
      }
    })
    .fail(function(error) {
      dtd.reject(error);
    })

    return dtd.promise();
  },
  /**
   * 相关证券
   */
  stockdata: function(key, filter, stockcount, callback, fail){
    //if(data_cache.stockdata == undefined){
      this.getdata(key, filter, stockcount, [14], function(data){
          data_cache.stockdata = data;
        callback(data);
      }, fail)
    // }
    // else{
    //   callback(data_cache.stockdata)
    // }
  },
  searchinfo: function(key, filter, callback, fail){
    return this.getdata(key, filter, null, [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 20], callback, fail)
  },
  search: function(options, callback, fail){
    //key, types, stockcount, filter
    return this.getdata2(options, callback, fail)
  },
  hotsearch: function(callback, fail){
    if(data_cache.hotsearch == undefined){
      $.ajax({
        //url: 'http://api.so.eastmoney.com/api/HotKeyword/GetBatch?cb=?',
        url: apiurl + 'HotKeyword/GetBatch?cb=?',
        type: 'GET',
        dataType: 'jsonp',
        data: {
          count: 10,
          token: 'D43BF722C8E33BDC906FB84D85E326E8'
        },
        scriptCharset: 'utf-8'
      })
      .done(function(json) {
        if(json.Status == 0){
          data_cache.hotsearch = json.Data;
          callback(json.Data);
        }
        else{
          fail(new Error(json.Message));
        }

      })
      .fail(function(error) {
        fail(error);
      })
    }
    else{
      callback(data_cache.hotsearch);
    }
  },
  /**
   * 获取搜索历史
   *
   * @param {any} n 前多少条
   */
  getSearchHistory: function(n){
    var shcookie = cookie.get('emshistory');
    if(shcookie){
      try {
        shcookie =  JSON.parse(shcookie);
        return shcookie.slice(0, n);
      } catch (error) {
        return [];
      }
    }
    else{
      return [];
    }
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "{{? it.hasdata }}\r\n<div class=\"sg2017b\">\r\n  <div class=\"sg2017t\">\r\n    <span class=\"icon icon_link\"></span>相关证券\r\n    <div class=\"sg2017tm\"><a href=\"http://quote.eastmoney.com/search.html?stockcode={{= encodeURIComponent(it.key) }}\" target=\"_blank\" class=\"blink\">{{= it.text.formatNum(it.TotalCount) }}个结果>></a></div>\r\n  </div>\r\n  <div class=\"sg2017bb\">\r\n    <table class=\"sg2017table sg2017tableho sg2017stockt\">\r\n      {{~it.Data:value:index}}\r\n      <tr data-stockdata='{{= JSON.stringify(value) }}'>\r\n          <td>{{= value.SecurityTypeName }}</td>\r\n          <td>{{= it.text.highLight(value.Code, it.key) }}</td>\r\n          <td>{{= it.text.leftAndHighLight(value.Name, 12 + it.widths.text_left_fix_2, it.key) }}</td>\r\n          <td>{{= it.text.leftAndHighLight(value.PinYin.toUpperCase(), 8 + it.widths.text_left_fix_2, it.key) }}</td>\r\n          {{? it.showstocklink }}\r\n          <td class=\"tdl5\">\r\n            {{? value.MarketType == \"6\"}}\r\n            <a href=\"http://so.eastmoney.com/link?input={{= value.Code }}&returnurl={{= encodeURIComponent('http://fund.eastmoney.com/' + value.Code + '.html') }}&marketType={{= value.MarketType }}\" target=\"_blank\" class=\"bblink\">行情</a>\r\n            {{??}}\r\n            <a href=\"http://so.eastmoney.com/link?input={{= value.Code }}&returnurl={{= encodeURIComponent('http://quote.eastmoney.com/web/r/' + value.ID) }}&marketType={{= value.MarketType }}\" target=\"_blank\" class=\"bblink\">行情</a>\r\n            {{?}}\r\n            {{? value.Classify.toLowerCase() == 'astock' || value.Classify.toLowerCase() == 'bstock' }}\r\n            <a href=\"http://so.eastmoney.com/link?input={{= value.Code }}&returnurl={{= encodeURIComponent('http://data.eastmoney.com/stockdata/' + value.Code + '.html') }}&marketType=\" target=\"_blank\" class=\"rblink\">数据</a>\r\n            {{??}}\r\n            <span class=\"nolink\">数据</span>\r\n            {{?}}\r\n          </td>\r\n          {{?}}\r\n        </tr>\r\n      {{~}}\r\n    </table>\r\n  </div>\r\n</div>\r\n{{?}}"

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var stock = __webpack_require__(14);
var guba = __webpack_require__(15);
var user = __webpack_require__(16);
var group = __webpack_require__(17);
var info = __webpack_require__(18);
var searchall = __webpack_require__(19);

module.exports = {
  stock: stock,
  guba: guba,
  user: user,
  group: group,
  info: info,
  searchall: searchall
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "{{? it.QuotationCodeTable.Data != null && it.QuotationCodeTable.Data.length > 0}}\r\n<div class=\"sg2017b xgstock\">\r\n  <div class=\"sg2017t\">\r\n    <span class=\"icon icon_link\"></span>相关证券\r\n    <div class=\"sg2017tm\"><a data-stype=\"zqjg\" data-skey=\"{{= encodeURIComponent(it.key) }}\" href=\"http://quote.eastmoney.com/search.html?stockcode={{= encodeURIComponent(it.key) }}\" target=\"_blank\" class=\"blink\">{{= it.text.formatNum(it.QuotationCodeTable.TotalCount) }}个结果>></a></div>\r\n  </div>\r\n  <div class=\"sg2017bb\">\r\n    <table class=\"sg2017table sg2017tableho sg2017stockt\">\r\n      {{~it.QuotationCodeTable.Data:value:index}}\r\n      <tr data-stockdata='{{= JSON.stringify(value) }}'>\r\n          <td class=\"fcgray\">{{= value.SecurityTypeName }}</td>\r\n          <td>{{= it.text.highLight(value.Code, it.key) }}</td>\r\n          <td>{{= it.text.leftAndHighLight(value.Name, 12 + it.widths.text_left_fix_2, it.key) }}</td>\r\n          <td>{{= it.text.leftAndHighLight(value.PinYin.toUpperCase(), 8 + it.widths.text_left_fix_2, it.key) }}</td>\r\n          {{? it.showstocklink }}\r\n          <td class=\"tdl5\">\r\n            {{? value.MarketType == \"6\"}}\r\n            <a data-stype=\"hq\" data-skey=\"{{= encodeURIComponent(value.Name) }}\" href=\"http://so.eastmoney.com/link?input={{= value.Code }}&returnurl={{= encodeURIComponent('http://fund.eastmoney.com/' + value.Code + '.html') }}&marketType={{= value.MarketType }}\" target=\"_blank\" class=\"bblink\">行情</a>\r\n            {{??}}\r\n            <a data-stype=\"hq\" data-skey=\"{{= encodeURIComponent(value.Name) }}\" href=\"http://so.eastmoney.com/link?input={{= value.Code }}&returnurl={{= encodeURIComponent('http://quote.eastmoney.com/web/r/' + value.ID) }}&marketType={{= value.MarketType }}\" target=\"_blank\" class=\"bblink\">行情</a>\r\n            {{?}}\r\n            {{? value.Classify.toLowerCase() == 'astock' || value.Classify.toLowerCase() == 'bstock' }}\r\n            <a data-stype=\"sj\" data-skey=\"{{= encodeURIComponent(value.Name) }}\" href=\"http://so.eastmoney.com/link?input={{= value.Code }}&returnurl={{= encodeURIComponent('http://data.eastmoney.com/stockdata/' + value.Code + '.html') }}&marketType=\" target=\"_blank\" class=\"rblink\">数据</a>\r\n            {{??}}\r\n            <span class=\"nolink\">数据</span>\r\n            {{?}}\r\n          </td>\r\n          {{?}}\r\n        </tr>\r\n      {{~}}\r\n    </table>\r\n  </div>\r\n</div>\r\n{{?}}\r\n"

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "{{? it.GubaCodeTable.Data != null}}\r\n<div class=\"sg2017b\">\r\n  <div class=\"sg2017t\">\r\n    <span class=\"icon icon_link\"></span>相关股吧\r\n    <div class=\"sg2017tm\"><a data-stype=\"gbjg\" data-skey=\"{{= encodeURIComponent(it.key) }}\" href=\"http://so.eastmoney.com/TieZi/s?KeyWord={{= encodeURIComponent(it.key) }}\" target=\"_blank\" class=\"blink\">{{= it.text.formatNum( it.GubaCodeTable.TotalCount) }}个结果>></a></div>\r\n  </div>\r\n  <div class=\"sg2017bb\">\r\n    <div class=\"sg2017hp sg2017hpb\">\r\n      {{~it.GubaCodeTable.Data:value:index}}\r\n        <a data-stype=\"gb\" data-skey=\"{{= encodeURIComponent(value.ShortName + '吧') }}\" href=\"{{= value.Url }}\" data-searchhistory=\"{{= value.ShortName }}\" target=\"_blank\">{{= it.text.highLight(value.ShortName, it.key) }}吧</a>\r\n      {{~}}\r\n    </div>\r\n  </div>\r\n</div>\r\n{{?}}"

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "{{? it.FortuneAccount.Data != null || it.Passport.Data != null}}\r\n<div class=\"sg2017b\">\r\n  <div class=\"sg2017t\">\r\n    <span class=\"icon icon_link\"></span>相关用户\r\n  </div>\r\n  <div class=\"sg2017bb\">\r\n    {{? it.FortuneAccount.Data != null }}\r\n    <div class=\"sg2017xgyz\">\r\n      <a data-stype=\"cfh\" data-skey=\"{{= encodeURIComponent(it.FortuneAccount.Data[0].NickName) }}\" href=\"{{= it.FortuneAccount.Data[0].Url }}\" class=\"bbrlink\" data-searchhistory=\"{{= it.FortuneAccount.Data[0].NickName }}\" target=\"_blank\">\r\n        <div class=\"sg2land\" style=\"width:{{= it.widths.sg2land }}px;\">\r\n          <span class=\"sg2landl1 fcgray\">财富号</span><span class=\"sg2landl2\" style=\"width:{{= it.widths.sg2landl2 }}px;\">{{= it.text.leftAndHighLight(it.FortuneAccount.Data[0].NickName, 22 + it.widths.text_left_fix, it.key) }}</span>\r\n        </div>\r\n      </a>\r\n      <div class=\"sg2017xgyzm\"><a data-stype=\"cfhjg\" data-skey=\"{{= encodeURIComponent(it.key) }}\" href=\"http://so.eastmoney.com/CAccount/s?KeyWord={{= encodeURIComponent(it.key) }}\" target=\"_blank\" class=\"blink\">{{= it.text.formatNum(it.FortuneAccount.TotalCount) }}个结果>></a></div>\r\n    </div>\r\n    {{?}}\r\n    {{? it.Passport.Data != null }}\r\n    <div class=\"sg2017xgyz\">\r\n      <a data-stype=\"by\" data-skey=\"{{= encodeURIComponent(it.Passport.Data[0].ualias) }}\" href=\"{{= it.Passport.Data[0].url }}\" class=\"bbrlink\" data-searchhistory=\"{{= it.Passport.Data[0].ualias }}\" target=\"_blank\">\r\n        <div class=\"sg2land\" style=\"width:{{= it.widths.sg2land }}px;\">\r\n          <span class=\"sg2landl1 fcgray\">吧友</span><span class=\"sg2landl2\" style=\"width:{{= it.widths.sg2landl2 }}px;\">{{= it.text.leftAndHighLight(it.Passport.Data[0].ualias, 22 + it.widths.text_left_fix, it.key) }}</span>\r\n        </div>\r\n      </a>\r\n      <div class=\"sg2017xgyzm\"><a data-stype=\"byjg\" data-skey=\"{{= encodeURIComponent(it.key) }}\" href=\"http://so.eastmoney.com/User/s?KeyWord={{= encodeURIComponent(it.key) }}\" target=\"_blank\" class=\"blink\">{{= it.text.formatNum(it.Passport.TotalCount) }}个结果>></a></div>\r\n    </div>\r\n    {{?}}\r\n  </div>\r\n</div>\r\n{{?}}"

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "{{? it.Portfolio.Data != null}}\r\n<div class=\"sg2017b\">\r\n  <div class=\"sg2017t\">\r\n    <span class=\"icon icon_link\"></span>相关组合\r\n  </div>\r\n  <div class=\"sg2017bb\">\r\n    <div class=\"sg2017xgyz\">\r\n      <a data-stype=\"zh\" data-skey=\"{{= encodeURIComponent(it.Portfolio.Data[0].zuheName) }}\" href=\"{{= it.Portfolio.Data[0].url }}\" class=\"bbrlink\" data-searchhistory=\"{{= it.Portfolio.Data[0].zuheName }}\" target=\"_blank\">\r\n        <div class=\"sg2land\" style=\"width:{{= it.widths.sg2land }}px;\">\r\n          <span class=\"sg2landl1 fcgray\">组合</span><span class=\"sg2landl2\" style=\"width:{{= it.widths.sg2landl2 }}px;\">{{= it.text.leftAndHighLight(it.Portfolio.Data[0].zuheName, 22 + it.widths.text_left_fix, it.key) }}</span>\r\n        </div>\r\n      </a>\r\n      <div class=\"sg2017xgyzm\"><a data-stype=\"zhjg\" data-skey=\"{{= encodeURIComponent(it.key) }}\" href=\"http://so.eastmoney.com/ZuHe/s?KeyWord={{= encodeURIComponent(it.key) }}\" target=\"_blank\" class=\"blink\">{{= it.text.formatNum(it.Portfolio.TotalCount) }}个结果>></a></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n{{?}}"

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "{{? it.Notice.Status == 0 || it.ResearchReport.Status == 0 || it.CMSArticle.Status == 0 || it.Blog.Status == 0 || it.GubaTopic.Status == 0 || it.FortuneArticle.Status == 0 || it.GubaArticle.Status == 0 || it.WenDongMi.Status == 0 }}\r\n<div class=\"sg2017b\">\r\n  <div class=\"sg2017t\">\r\n    <span class=\"icon icon_link\"></span>相关信息 <span class=\"sg2017tt\">以下为“<span class=\"sg2017hl\">{{= it.text.txtLeft(it.key,20)}}</span>”的搜索个数</span>\r\n  </div>\r\n  <div class=\"sg2017bb\">\r\n      <div class=\"sg2017hpb\">\r\n        {{? it.Notice.Status == 0 }}\r\n          <a data-stype=\"ggjg\" data-skey=\"{{= encodeURIComponent(it.key) }}\" href=\"http://so.eastmoney.com/Ann/s?KeyWord={{= encodeURIComponent(it.key) }}\" target=\"_blank\">公告 <span class=\"bspan\">{{= it.text.formatNum(it.Notice.TotalCount) }}</span></a>\r\n        {{?}}\r\n        {{? it.ResearchReport.Status == 0 }}\r\n          <a data-stype=\"ybjg\" data-skey=\"{{= encodeURIComponent(it.key) }}\" href=\"http://so.eastmoney.com/Yanbao/s?KeyWord={{= encodeURIComponent(it.key) }}\" target=\"_blank\">研报 <span class=\"bspan\">{{= it.text.formatNum(it.ResearchReport.TotalCount) }}</span></a>\r\n        {{?}}\r\n        {{? it.CMSArticle.Status == 0 }}\r\n          <a data-stype=\"zxjg\" data-skey=\"{{= encodeURIComponent(it.key) }}\" href=\"http://so.eastmoney.com/news/s?KeyWord={{= encodeURIComponent(it.key) }}\" target=\"_blank\">资讯 <span class=\"bspan\">{{= it.text.formatNum(it.CMSArticle.TotalCount) }}</span></a>\r\n        {{?}}\r\n        {{? it.Blog.Status == 0 }}\r\n          <a data-stype=\"bkjg\" data-skey=\"{{= encodeURIComponent(it.key) }}\" href=\"http://so.eastmoney.com/Blog/s?KeyWord={{= encodeURIComponent(it.key) }}\" target=\"_blank\">博客 <span class=\"bspan\">{{= it.text.formatNum(it.Blog.TotalCount) }}</span></a>\r\n        {{?}}\r\n        {{? it.GubaTopic.Status == 0 }}\r\n          <a data-stype=\"htjg\" data-skey=\"{{= encodeURIComponent(it.key) }}\" href=\"http://so.eastmoney.com/web/s?keyword={{= encodeURIComponent(it.key) }}\" target=\"_blank\">话题 <span class=\"bspan\">{{= it.text.formatNum(it.GubaTopic.TotalCount) }}</span></a>\r\n        {{?}}\r\n        {{? it.FortuneArticle.Status == 0 }}\r\n          <a data-stype=\"cfhwzjg\" data-skey=\"{{= encodeURIComponent(it.key) }}\" href=\"http://so.eastmoney.com/CArticle/s?KeyWord={{= encodeURIComponent(it.key) }}\" target=\"_blank\">财富号文章 <span class=\"bspan\">{{= it.text.formatNum(it.FortuneArticle.TotalCount) }}</span></a>\r\n        {{?}}\r\n        {{? it.GubaArticle.Status == 0 }}\r\n          <a data-stype=\"gbwzjg\" data-skey=\"{{= encodeURIComponent(it.key) }}\" href=\"http://so.eastmoney.com/TieZi/s?KeyWord={{= encodeURIComponent(it.key) }}\" target=\"_blank\">股吧 <span class=\"bspan\">{{= it.text.formatNum(it.GubaArticle.TotalCount) }}</span></a>\r\n        {{?}}\r\n        {{? it.WenDongMi.Status == 0 }}\r\n          <a data-stype=\"wdmjg\" data-skey=\"{{= encodeURIComponent(it.key) }}\" href=\"http://so.eastmoney.com/QA/s?KeyWord={{= encodeURIComponent(it.key) }}\" target=\"_blank\">问董秘 <span class=\"bspan\">{{= it.text.formatNum(it.WenDongMi.TotalCount) }}</span></a>\r\n        {{?}}\r\n      </div>\r\n  </div>\r\n</div>\r\n{{?}}"

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "<div class=\"sg2017va\"><a data-stype=\"all\" data-skey=\"{{= encodeURIComponent(it.key) }}\" href=\"http://so.eastmoney.com/web/s?keyword={{= encodeURIComponent(it.key) }}\" target=\"_blank\" class=\"blink\">查看全部搜索结果</a></div>"

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "{{? it.hasguba}}\r\n<div class=\"sg2017b\">\r\n  <div class=\"sg2017t\">\r\n    <span class=\"icon icon_link\"></span>相关股吧\r\n    <div class=\"sg2017tm\"><a href=\"http://so.eastmoney.com/TieZi/s?KeyWord={{= encodeURIComponent(it.key) }}\" target=\"_blank\" class=\"blink\">{{= it.text.formatNum( it.GubaCodeTable.TotalCount) }}个结果>></a></div>\r\n  </div>\r\n  <div class=\"sg2017bb\">\r\n    <div class=\"sg2017hp sg2017hpb\">\r\n      {{~it.GubaCodeTable.Data:value:index}}\r\n        <a href=\"{{= value.Url }}\" target=\"_blank\">{{= it.text.highLight(value.ShortName, it.key) }}吧</a>\r\n      {{~}}\r\n    </div>\r\n  </div>\r\n</div>\r\n{{?}}\r\n\r\n{{? it.hasuser}}\r\n<div class=\"sg2017b\">\r\n  <div class=\"sg2017t\">\r\n    <span class=\"icon icon_link\"></span>相关用户\r\n  </div>\r\n  <div class=\"sg2017bb\">\r\n    {{? it.FortuneAccount.Data != null }}\r\n    <div class=\"sg2017xgyz\">\r\n      <a href=\"{{= it.FortuneAccount.Data[0].Url }}\" class=\"bbrlink\" target=\"_blank\">\r\n        <div class=\"sg2land\" style=\"width:{{= it.widths.sg2land }}px;\">\r\n          <span class=\"sg2landl1 fcgray\">财富号</span><span class=\"sg2landl2\" style=\"width:{{= it.widths.sg2landl2 }}px;\">{{= it.text.leftAndHighLight(it.FortuneAccount.Data[0].NickName, 22 + it.widths.text_left_fix, it.key) }}</span>\r\n        </div>\r\n      </a>\r\n      <div class=\"sg2017xgyzm\"><a href=\"http://so.eastmoney.com/CAccount/s?KeyWord={{= encodeURIComponent(it.key) }}\" target=\"_blank\" class=\"blink\">{{= it.text.formatNum(it.FortuneAccount.TotalCount) }}个结果>></a></div>\r\n    </div>\r\n    {{?}}\r\n    {{? it.Passport.Data != null }}\r\n    <div class=\"sg2017xgyz\">\r\n      <a href=\"{{= it.Passport.Data[0].url }}\" class=\"bbrlink\" target=\"_blank\">\r\n        <div class=\"sg2land\" style=\"width:{{= it.widths.sg2land }}px;\">\r\n          <span class=\"sg2landl1 fcgray\">吧友</span><span class=\"sg2landl2\" style=\"width:{{= it.widths.sg2landl2 }}px;\">{{= it.text.leftAndHighLight(it.Passport.Data[0].ualias, 22 + it.widths.text_left_fix, it.key) }}</span>\r\n        </div>\r\n      </a>\r\n      <div class=\"sg2017xgyzm\"><a href=\"http://so.eastmoney.com/User/s?KeyWord={{= encodeURIComponent(it.key) }}\" target=\"_blank\" class=\"blink\">{{= it.text.formatNum(it.Passport.TotalCount) }}个结果>></a></div>\r\n    </div>\r\n    {{?}}\r\n  </div>\r\n</div>\r\n{{?}}\r\n\r\n{{? it.Portfolio.Data != null }}\r\n<div class=\"sg2017b\">\r\n  <div class=\"sg2017t\">\r\n    <span class=\"icon icon_link\"></span>相关组合\r\n  </div>\r\n  <div class=\"sg2017bb\">\r\n    <div class=\"sg2017xgyz\">\r\n      <a href=\"{{= it.Portfolio.Data[0].url }}\" class=\"bbrlink\" target=\"_blank\">\r\n        <div class=\"sg2land\" style=\"width:{{= it.widths.sg2land }}px;\">\r\n          <span class=\"sg2landl1 fcgray\">组合</span><span class=\"sg2landl2\" style=\"width:{{= it.widths.sg2landl2 }}px;\">{{= it.text.leftAndHighLight(it.Portfolio.Data[0].zuheName, 22 + it.widths.text_left_fix, it.key) }}</span>\r\n        </div>\r\n      </a>\r\n      <div class=\"sg2017xgyzm\"><a href=\"http://so.eastmoney.com/ZuHe/s?KeyWord={{= encodeURIComponent(it.key) }}\" target=\"_blank\" class=\"blink\">{{= it.text.formatNum(it.Portfolio.TotalCount) }}个结果>></a></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n{{?}}\r\n\r\n{{? it.hasxg}}\r\n<div class=\"sg2017b\">\r\n  <div class=\"sg2017t\">\r\n    <span class=\"icon icon_link\"></span>相关信息 <span class=\"sg2017tt\">以下为“<span class=\"sg2017hl\">{{= it.text.txtLeft(it.key,20)}}</span>”的搜索个数</span>\r\n  </div>\r\n  <div class=\"sg2017bb nobb\">\r\n      <div class=\"sg2017hpb\">\r\n        {{? it.Notice.Status == 0 }}\r\n          <a href=\"http://so.eastmoney.com/Ann/s?KeyWord={{= encodeURIComponent(it.key) }}\" target=\"_blank\">公告 <span class=\"bspan\">{{= it.text.formatNum(it.Notice.TotalCount) }}</span></a>\r\n        {{?}}\r\n        {{? it.ResearchReport.Status == 0 }}\r\n          <a href=\"http://so.eastmoney.com/Yanbao/s?KeyWord={{= encodeURIComponent(it.key) }}\" target=\"_blank\">研报 <span class=\"bspan\">{{= it.text.formatNum(it.ResearchReport.TotalCount) }}</span></a>\r\n        {{?}}\r\n        {{? it.CMSArticle.Status == 0 }}\r\n          <a href=\"http://so.eastmoney.com/news/s?KeyWord={{= encodeURIComponent(it.key) }}\" target=\"_blank\">资讯 <span class=\"bspan\">{{= it.text.formatNum(it.CMSArticle.TotalCount) }}</span></a>\r\n        {{?}}\r\n        {{? it.Blog.Status == 0 }}\r\n          <a href=\"http://so.eastmoney.com/Blog/s?KeyWord={{= encodeURIComponent(it.key) }}\" target=\"_blank\">博客 <span class=\"bspan\">{{= it.text.formatNum(it.Blog.TotalCount) }}</span></a>\r\n        {{?}}\r\n        {{? it.GubaTopic.Status == 0 }}\r\n          <a href=\"http://so.eastmoney.com/web/s?keyword={{= encodeURIComponent(it.key) }}\" target=\"_blank\">话题 <span class=\"bspan\">{{= it.text.formatNum(it.GubaTopic.TotalCount) }}</span></a>\r\n        {{?}}\r\n        {{? it.FortuneArticle.Status == 0 }}\r\n          <a href=\"http://so.eastmoney.com/CArticle/s?KeyWord={{= encodeURIComponent(it.key) }}\" target=\"_blank\">财富号文章 <span class=\"bspan\">{{= it.text.formatNum(it.FortuneArticle.TotalCount) }}</span></a>\r\n        {{?}}\r\n        {{? it.GubaArticle.Status == 0 }}\r\n          <a href=\"http://so.eastmoney.com/TieZi/s?KeyWord={{= encodeURIComponent(it.key) }}\" target=\"_blank\">股吧 <span class=\"bspan\">{{= it.text.formatNum(it.GubaArticle.TotalCount) }}</span></a>\r\n        {{?}}\r\n        {{? it.WenDongMi.Status == 0 }}\r\n          <a href=\"http://so.eastmoney.com/QA/s?KeyWord={{= encodeURIComponent(it.key) }}\" target=\"_blank\">问董秘 <span class=\"bspan\">{{= it.text.formatNum(it.WenDongMi.TotalCount) }}</span></a>\r\n        {{?}}\r\n      </div>\r\n  </div>\r\n</div> \r\n{{?}}"

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "<div class=\"suggest2017\" style=\"width:{{= it.width }}px;\">\r\n  <div class=\"suggest2017c\"></div>\r\n</div>\r\n"

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "{{?it.search_history.length > 0}}\r\n<div class=\"sg2017b sg2017hsr\">\r\n  <div class=\"sg2017t\">\r\n    <span class=\"icon icon_history\"></span>历史搜索\r\n    <div class=\"sg2017tm2\"><a href=\"javascript:;\" class=\"clearhsr\" target=\"_self\">清空历史</a></div>\r\n  </div>\r\n  <div class=\"sg2017bb clearfix\">\r\n    <ul class=\"sg2017lp clearfix\">\r\n        {{~it.search_history:value:index}}\r\n        <li style=\"width:{{= it.widths.sg2017lp_li}}px;\"><a data-stype=\"lsss\" data-skey=\"{{= encodeURIComponent(value) }}\" href=\"http://so.eastmoney.com/web/s?keyword={{= encodeURIComponent(value) }}\" target=\"_blank\">{{= it.text.txtLeft(value, 20 + it.widths.text_left_fix_2, true) }}</a>\r\n        </li>\r\n        {{~}}\r\n    </ul>          \r\n  </div>\r\n</div>\r\n{{?}}\r\n<div class=\"sg2017b\">\r\n  <div class=\"sg2017t\">\r\n    <span class=\"icon icon_hotsearch\"></span>热门搜索\r\n  </div>\r\n  <div class=\"sg2017bb clearfix\">\r\n    <ul class=\"sg2017l sg2017ll\" style=\"width:{{= it.widths.sg2017ll}}px;\">\r\n      {{~it.Currency:value:index}}\r\n      <li><a data-stype=\"rmss\" data-skey=\"{{= encodeURIComponent(value.KeyPhrase) }}\" href=\"http://so.eastmoney.com/web/s?keyword={{= encodeURIComponent(value.KeyPhrase) }}\" target=\"_blank\"><span class=\"{{? index < 3 }}indexred{{?}}\">{{= index + 1 }}.</span>{{= it.text.txtLeft(value.KeyPhrase, 18 + it.widths.text_left_fix_2, true) }}</a>\r\n      {{? value.HotKeywordStatus == \"3\"}}\r\n        <span class=\"icon icon_new\"></span>\r\n      {{?}}\r\n      </li>\r\n      {{? index == 4 }}\r\n    </ul>\r\n    <ul class=\"sg2017l\" style=\"width:{{= it.widths.sg2017ll}}px;\">\r\n      {{?}}\r\n      {{~}}\r\n    </ul>          \r\n  </div>\r\n</div>\r\n<div class=\"sg2017b\">\r\n  <div class=\"sg2017t\">\r\n    <span class=\"icon icon_hotstock\"></span>热门个股\r\n  </div>\r\n  <div class=\"sg2017bb clearfix nobb\">\r\n    <ul class=\"sg2017l sg2017ll\" style=\"width:{{= it.widths.sg2017ll}}px;\">\r\n      {{~it.Stock:value:index}}\r\n      <li><a data-stype=\"rsgg\" data-skey=\"{{= encodeURIComponent(value.Name) }}\" href=\"{{? it.hotStockLink == null }}http://quote.eastmoney.com/web/r/{{= value.Code }}{{= value.MarketType }}{{??}}{{= it.hotStockLink({Code: value.Code, Name: value.Name, MarketType: value.MarketType}) }}{{?}}\" target=\"_blank\"><span class=\"{{? index < 3 }}indexred{{?}}\">{{= index + 1 }}.</span>{{= value.Name }}[{{= value.Code }}]</a>\r\n      {{? value.HotKeywordStatus == \"3\"}}\r\n        <span class=\"icon icon_new\"></span>\r\n      {{?}}\r\n      </li>\r\n      {{? index == 4 }}\r\n    </ul>\r\n    <ul class=\"sg2017l\" style=\"width:{{= it.widths.sg2017ll}}px;\">\r\n      {{?}}\r\n      {{~}}\r\n    </ul>          \r\n  </div>\r\n</div>"

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// doT.js
// 2011-2014, Laura Doktorova, https://github.com/olado/doT
// Licensed under the MIT license.


    var doT = {
        version: "1.1.1",
        templateSettings: {
            evaluate:    /\{\{([\s\S]+?(\}?)+)\}\}/g,
            interpolate: /\{\{=([\s\S]+?)\}\}/g,
            encode:      /\{\{!([\s\S]+?)\}\}/g,
            use:         /\{\{#([\s\S]+?)\}\}/g,
            useParams:   /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
            define:      /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
            defineParams:/^\s*([\w$]+):([\s\S]+)/,
            conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
            iterate:     /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
            varname:	"it",
            strip:		true,
            append:		true,
            selfcontained: false,
            doNotSkipEncoded: false
        },
        template: undefined, //fn, compile template
        compile:  undefined, //fn, for express
        log: true
    }, _globals;

    doT.encodeHTMLSource = function(doNotSkipEncoded) {
        var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
            matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
        return function(code) {
            return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : "";
        };
    };

    _globals = (function(){ return this || (0,eval)("this"); }());

    /* istanbul ignore else */
    if (typeof module !== "undefined" && module.exports) {
        module.exports = doT;
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return doT;}.call(exports, __webpack_require__, exports, module),
                __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        _globals.doT = doT;
    }

    var startend = {
        append: { start: "'+(",      end: ")+'",      startencode: "'+encodeHTML(" },
        split:  { start: "';out+=(", end: ");out+='", startencode: "';out+=encodeHTML(" }
    }, skip = /$^/;

    function resolveDefs(c, block, def) {
        return ((typeof block === "string") ? block : block.toString())
        .replace(c.define || skip, function(m, code, assign, value) {
            if (code.indexOf("def.") === 0) {
                code = code.substring(4);
            }
            if (!(code in def)) {
                if (assign === ":") {
                    if (c.defineParams) value.replace(c.defineParams, function(m, param, v) {
                        def[code] = {arg: param, text: v};
                    });
                    if (!(code in def)) def[code]= value;
                } else {
                    new Function("def", "def['"+code+"']=" + value)(def);
                }
            }
            return "";
        })
        .replace(c.use || skip, function(m, code) {
            if (c.useParams) code = code.replace(c.useParams, function(m, s, d, param) {
                if (def[d] && def[d].arg && param) {
                    var rw = (d+":"+param).replace(/'|\\/g, "_");
                    def.__exp = def.__exp || {};
                    def.__exp[rw] = def[d].text.replace(new RegExp("(^|[^\\w$])" + def[d].arg + "([^\\w$])", "g"), "$1" + param + "$2");
                    return s + "def.__exp['"+rw+"']";
                }
            });
            var v = new Function("def", "return " + code)(def);
            return v ? resolveDefs(c, v, def) : v;
        });
    }

    function unescape(code) {
        return code.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ");
    }

    doT.template = function(tmpl, c, def) {
        c = c || doT.templateSettings;
        var cse = c.append ? startend.append : startend.split, needhtmlencode, sid = 0, indv,
            str  = (c.use || c.define) ? resolveDefs(c, tmpl, def || {}) : tmpl;

        str = ("var out='" + (c.strip ? str.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ")
                    .replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""): str)
            .replace(/'|\\/g, "\\$&")
            .replace(c.interpolate || skip, function(m, code) {
                return cse.start + unescape(code) + cse.end;
            })
            .replace(c.encode || skip, function(m, code) {
                needhtmlencode = true;
                return cse.startencode + unescape(code) + cse.end;
            })
            .replace(c.conditional || skip, function(m, elsecase, code) {
                return elsecase ?
                    (code ? "';}else if(" + unescape(code) + "){out+='" : "';}else{out+='") :
                    (code ? "';if(" + unescape(code) + "){out+='" : "';}out+='");
            })
            .replace(c.iterate || skip, function(m, iterate, vname, iname) {
                if (!iterate) return "';} } out+='";
                sid+=1; indv=iname || "i"+sid; iterate=unescape(iterate);
                return "';var arr"+sid+"="+iterate+";if(arr"+sid+"){var "+vname+","+indv+"=-1,l"+sid+"=arr"+sid+".length-1;while("+indv+"<l"+sid+"){"
                    +vname+"=arr"+sid+"["+indv+"+=1];out+='";
            })
            .replace(c.evaluate || skip, function(m, code) {
                return "';" + unescape(code) + "out+='";
            })
            + "';return out;")
            .replace(/\n/g, "\\n").replace(/\t/g, '\\t').replace(/\r/g, "\\r")
            .replace(/(\s|;|\}|^|\{)out\+='';/g, '$1').replace(/\+''/g, "");
            //.replace(/(\s|;|\}|^|\{)out\+=''\+/g,'$1out+=');

        if (needhtmlencode) {
            if (!c.selfcontained && _globals && !_globals._encodeHTML) _globals._encodeHTML = doT.encodeHTMLSource(c.doNotSkipEncoded);
            str = "var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("
                + doT.encodeHTMLSource.toString() + "(" + (c.doNotSkipEncoded || '') + "));"
                + str;
        }
        try {
            return new Function(c.varname, str);
        } catch (e) {
            /* istanbul ignore else */
            if (typeof console !== "undefined") console.log("Could not create a template function: " + str);
            throw e;
        }
    };

    doT.compile = function(tmpl, def) {
        return doT.template(tmpl, null, def);
    };


module.exports = doT;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

/**
 * 文本处理
 */

module.exports = {
  /**
   * 格式化数据
   * （万/亿），保留两位小数，最多5个数字
   *
   * @param {any} num
   */
  formatNum: function(num){
    if(num == undefined || num == '' || isNaN(num)){
      return '';
    }

    var hz = '';
    if(num >= 100000000){
      num = num / 100000000;
      hz = '亿';
    }
    else if(num >= 10000){
      num = num / 10000;
      hz = '万';
    }
    else{
      return num;
    }

    var num2 = num.toFixed(2);

    if(parseInt(num) >= 1000){ //整数部分超过4位
      num2 = num.toFixed(1);
    }

    return num2.toString() + hz;
  },
  cut: function(txt, n){
    if(txt.length > n){
      return txt.substring(0, n) + '...';
    }
    return txt;
  },
  /**
   * 字符串长度 一个汉字算2个
   *
   * @param {any} txt
   * @returns
   */
  txtLength: function (txt) {
    var thislength = 0;
    for (var i = 0; i < txt.length; i++) {
      if (txt.charCodeAt(i) > 255) {
        thislength += 2;
      }
      else {
        thislength++;
      }
    }
    return thislength;
  },
  /**
   * 字符串截取
   *
   * @param {string} txt 输入文本
   * @param {int} n 截取多少个字 一个汉字算2个
   * @param {boolean} needtip 是否需要全文提示
   * @returns
   */
  txtLeft: function (txt, n, needtip) {
    if( txt == null || txt == "" ){
      return "";
    }
    var thislength = 0;
    for (var i = 0; i < txt.length; i++) {
      if (txt.charCodeAt(i) > 255) {
        thislength += 2;
      }
      else {
        thislength++;
      }
      if (thislength > n + 3) {
        if(needtip){
          return '<span title="' + txt + '">' + txt.substring(0, i) + "...</span>";
        }
        else{
          return txt.substring(0, i) + "...";
        }
        break;
      }
    }
    return txt;
  },
  /**
   * 高亮关键字
   *
   * @param {any} text 需要高亮的文本
   * @param {any} word 关键字
   * @returns
   */
  highLight: function(text, word){
    //debugger
    try {
      var newrg = new RegExp(word, 'ig');
      text = text.replace(newrg, function($0){
        return '<span class="sg2017hl">' + $0 + '</span>';
      })
    } catch (error) {

    }

    return text;
  },
  leftAndHighLight: function(text, leftnum, highlight_word){
    if( text == null || text == "" ){
      return "";
    }
    var texthtml = text;
    var hascut = false;
    var thislength = 0;
    for (var i = 0; i < text.length; i++) {
      if (text.charCodeAt(i) > 255) {
        thislength += 2;
      }
      else {
        thislength++;
      }
      if (thislength > leftnum + 3) {
        hascut = true;
        texthtml =  '<span title="' + text + '">' + this.highLight(text.substring(0, i), highlight_word) + "...</span>";
        break;
      }
    }

    if(hascut){
      return texthtml;
    }
    else{
      return this.highLight(texthtml, highlight_word);
    }

  }
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 搜索历史
 */

var cookie = __webpack_require__(0);

module.exports = {
  _count: 20,             // 最大历史记录的个数
  _histotyLength: 40,     // 历史记录中超过的字数不记录（40表示最大20个汉字）
  _historyCookieName: "emshistory",    //  cookie名称

  // 获取历史记录
  getHistory: function(){
      // cookie.delCookie("serachhistory");  // 废弃这个cookie
      var arrstr = cookie.get(this._historyCookieName);
      if (arrstr) {
          return JSON.parse(arrstr);
      } else {
          return [];
      }
  },

  /**
   * 判断是否重复, 如果重复，则删除
   *
   * @param {any} str : 关键字
   * @returns
   */
  unHistory: function(str){
      var list = this.getHistory();
      for (var i = 0; i < list.length; i++) {
          if (str == list[i]) {
              list.splice(i, 1);
              i--;
          }
      }
      return list;
  },

  // 增加一条记录
  addHistory: function(str){
      var list = this.unHistory(str);

      if (str && this.txtLength(str) <= this._histotyLength) {
          if (list.length >= this._count) {
              list.pop();
          }
          list.unshift(str);
          cookie.set(this._historyCookieName, JSON.stringify(list), 90, "eastmoney.com");
      }
  },

  /**
   * 清空历史记录
   *
   */
  clearHistory: function(){
    cookie.del(this._historyCookieName, '.eastmoney.com');
  },

  // 计算文字的长度，汉字算两个长度
  txtLength: function (txt) {
      var thislength = 0;
      for (var i = 0; i < txt.length; i++) {
          if (txt.charCodeAt(i) > 255) {
              thislength += 2;
          } else {
              thislength++;
          }
      }
      return thislength;
  }
}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

/**
 * 大数据统计
 */

module.exports = function (ElementType, EventType, EventCode, keyword, keyword2) {
  //debugger;
  var sendkey = '';
  if (keyword2 != undefined) {
    sendkey = 'SearchWord:' + keyword + ';EntryWord:' + keyword2
  }
  else if(keyword){
    sendkey = 'SearchWord:' + keyword
  }
  try {
    if (sendkey) {
      window.sendTrackLog(ElementType, EventType, EventCode, encodeURIComponent(sendkey));
    }
    else{
      window.sendTrackLog(ElementType, EventType, EventCode);
    }
  } catch (error) {

  }
}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

/**
 * 浏览器检测
 */

module.exports = {
  /**
   * 是不是IE 9
   *
   * @returns
   */
  isIE9: function(){
    return document.all && document.addEventListener && !window.atob;
  },
  isIpad: function(){
    var ua = navigator.userAgent.toLowerCase();
    return ua.indexOf('ipad') >= 0;
  }
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=stocksuggest2017.js.map
