/**
 * 基于开源插件扩展的日期选取控件
 *
 * 扩展的功能有:
 * 1、自定义日期格式(做得并不算很好,有改进空间);
 * 2、在选取面板上增加"清空"按钮以清空输入框中的日期,为DateInput增加clearDate清空日期的函数;
 * 3、增加日期范围限定功能;
 * 4、增加两个日期选择框联动的功能;
 * 5、增加选择不可选择的日期时的回调功能;
 * 6、修改日期选取面板样式，并修复若干Bug;
 *
 * 使用范例:
 * 1、在所有class含有dateinput的input上初始化日期选择框
 * $.date_input.initialize(cfg);
 * 2、在指定的对象上初始化为日期选择控件
 * $("#dateinput").date_input(cfg);
 *
 * cfg配置参数说明；
 * format		日期格式
 * startDate	开始时间,在该时间之前的时间将不可选取,通常与endDate配合使用,也可以单独使用
 * endDate		结束时间,在该时间之后的时间将不可选取,通常与startDate配合使用,也可以单独使用
 * nextDateEl	前一个输入框的JQuery对象,如果指定且前一个输入框中有日期值则当前日期选择控件中只能选取大于或等于前一个输入框中的日期值
 * preDateEl	后一个输入框的JQuery对象,如果指定且后一个输入框中有日期值则当前日期选择控件中只能选取小于或等于后一个输入框中的日期值
 * selectdisable当用户选择了不可被选择的日期时,将被触发的回调函数
 *
 * @auhtor	杨胜寒
 * @date 2013-02-20 (old version jquery 1.7.x)
 */

DateInput = (function($) {
    function DateInput(el, opts) {
        if (typeof (opts) != "object") opts = {};
        $.extend(this, DateInput.DEFAULT_OPTS, opts);
        //使用指定的日期格式,默认为yyyy/MM/dd
        this.format = this.format || 'yyyy-MM-dd';
        this.input = $(el);
        this.input.attr("changed", false);
        this.input.keydown(function(e) {
            if (e.keyCode == 8) $(el).clearDate();
            return false;
        });
        this.bindMethodsToObj("show", "hide", "hideIfClickOutside", "keydownHandler", "selectDate", "clearDate");
        this.build();
        this.hide();
    };
    DateInput.DEFAULT_OPTS = {
        month_names : [ "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月" ],
        short_month_names : [ "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二" ],
        short_day_names : [ "日", "一", "二", "三", "四", "五", "六" ],
        start_of_week : 1,
        clear_name : '',
        // clear_name : '清空',
    };
    DateInput.prototype = {
        build : function() {
            var monthNav = $('<p class="month_nav"><span class="button prev" title="[Page-Up]">&#171;</span><span class="month_name"></span><span class="button next" title="[Page-Down]">&#187;</span></p>');
            this.monthNameSpan = $(".month_name", monthNav);
            $(".prev", monthNav).click(this.bindToObj(function() {
                this.moveMonthBy(-1);
            }));
            $(".next", monthNav).click(this.bindToObj(function() {
                this.moveMonthBy(1);
            }));
            var yearNav = $('<p class="year_nav"><span class="button prev" title="[Ctrl+Page-Up]">&#171;</span><span class="year_name"></span><span class="button next" title="[Ctrl+Page-Down]">&#187;</span></p>');
            this.yearNameSpan = $(".year_name", yearNav);
            $(".prev", yearNav).click(this.bindToObj(function() {
                this.moveMonthBy(-12);
            }));
            $(".next", yearNav).click(this.bindToObj(function() {
                this.moveMonthBy(12);
            }));
            var nav = $('<div class="nav"></div>').append(monthNav, yearNav);
            var tableShell = "<table><thead><tr>";
            $(this.adjustDays(this.short_day_names)).each(function() {
                tableShell += "<th>" + this + "</th>";
            });
            tableShell += "</tr></thead><tbody></tbody></table>";
            var id = 'date_input_clear' + new Date().getTime();
            var toolbar = '<div style="text-align:center;margin-top:5px;"><a id="' + id + '" href="javascript:void(0);">' + DateInput.DEFAULT_OPTS.clear_name + '</a></div>';
            this.dateSelector = this.rootLayers = $('<div class="date_selector"></div>').append(nav, tableShell).append(toolbar).insertAfter(this.input);
            if ($.browser.msie && $.browser.version < 7) {
                // The ieframe is a hack which works around an IE <= 6 bug where absolutely positioned elements
                // appear behind select boxes. Putting an iframe over the top of the select box prevents this.
                this.ieframe = $('<iframe class="date_selector_ieframe" frameborder="0" src="#"></iframe>').insertBefore(this.dateSelector);
                this.rootLayers = this.rootLayers.add(this.ieframe);
                // IE 6 only does :hover on A elements
                $(".button", nav).mouseover(function() {
                    $(this).addClass("hover");
                });
                $(".button", nav).mouseout(function() {
                    $(this).removeClass("hover");
                });
            };
            this.tbody = $("tbody", this.dateSelector);
            this.input.change(this.bindToObj(function() {
                if(!this.lastDateString || this.input.val() != this.lastDateString){
                    this.lastDateString = this.input.val();
                    this.input.attr("changed", true);
                }else{
                    this.input.attr("changed", false);
                }
                this.selectDate();
            }));
            var i = this.input;
            var root = this.rootLayers;
            $("#" + id).click(function() {
                i.clearDate();
            });
            this.selectDate();
        },
        selectMonth : function(date) {
            var newMonth = new Date(date.getFullYear(), date.getMonth(), 1);
            var changed = this.preDateEl || this.nextDateEl;
            if(this.preDateEl){
                changed = (this.preDateEl.attr("changed") + '') == 'true';
            }else if(this.nextDateEl){
                changed = (this.nextDateEl.attr("changed") + '') == 'true';
            };
            if(typeof(changed) == 'undefined'){changed = false;}
            changed = changed || (!this.currentMonth || !(this.currentMonth.getFullYear() == newMonth.getFullYear() && this.currentMonth.getMonth() == newMonth.getMonth()));
            if (changed) {
                //月份未改变时将重绘可选日期
                this.currentMonth = newMonth;
                //超出本月范围的日期也将被绘制,但将不可用
                var rangeStart = this.rangeStart(date), rangeEnd = this.rangeEnd(date);
                var numDays = this.daysBetween(rangeStart, rangeEnd);
                var dayCells = "";
                //绘制所有可选日期
                var preDate, nextDate;
                try{
                    if (this.preDateEl) {
                        if((preDate = this.preDateEl.val()) != ''){
                            preDate = this.stringToDate(preDate);
                            this.preDateEl.attr("changed", false);
                        }
                    } else if (this.nextDateEl) {
                        if((nextDate = this.nextDateEl.val()) != ''){
                            nextDate = this.stringToDate(nextDate);
                            this.nextDateEl.attr("changed", false);
                        }
                    }
                }catch(e){
                    preDate = nextDate = null;
                }
                if(this.startDate){this.startDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate());}
                if(this.endDate){this.endDate = new Date(this.endDate.getFullYear(), this.endDate.getMonth(), this.endDate.getDate());}
                for ( var i = 0; i <= numDays; i++) {
                    var currentDay = new Date(rangeStart.getFullYear(), rangeStart.getMonth(), rangeStart.getDate() + i);
                    if (this.isFirstDayOfWeek(currentDay)) dayCells += "<tr>";
                    var selectable = (!this.startDate || currentDay >= this.startDate) && (!this.endDate || currentDay <= this.endDate) && currentDay.getMonth() == date.getMonth();
                    if(selectable){
                        if(preDate){
                            selectable = currentDay >= preDate;
                        }else if(nextDate){
                            selectable = currentDay <= nextDate;
                        }
                    }
                    if (selectable) {
                        dayCells += '<td class="selectable_day" date="' + this.dateToString(currentDay) + '">' + currentDay.getDate() + '</td>';
                    } else {
                        dayCells += '<td class="unselected_month" date="' + this.dateToString(currentDay) + '">' + currentDay.getDate() + '</td>';
                    }
                    ;
                    if (this.isLastDayOfWeek(currentDay)) dayCells += "</tr>";
                };
                this.tbody.empty().append(dayCells);
                //绘制年月选取工具条
                this.monthNameSpan.empty().append(this.monthName(date));
                this.yearNameSpan.empty().append(this.currentMonth.getFullYear());
                //注册事件监听
                $(".selectable_day", this.tbody).click(this.bindToObj(function(event) {this.changeInput($(event.target).attr("date"));}));
                $("td[date=" + this.dateToString(new Date()) + "]", this.tbody).addClass("today");
                $("td.selectable_day", this.tbody).mouseover(function() {
                    $(this).addClass("hover")
                });
                $("td.selectable_day", this.tbody).mouseout(function() {
                    $(this).removeClass("hover")
                });
            }
            //移动高亮日期
            $('.selected', this.tbody).removeClass("selected");
            $('td[date=' + this.selectedDateString + ']', this.tbody).addClass("selected");
        },
        // Select a particular date. If the date is not specified it is read from the input. If no date is
        // found then the current date is selected. The selectMonth() function is responsible for actually
        // selecting a particular date.
        selectDate : function(date) {
            if (typeof (date) == "undefined") {
                date = this.stringToDate(this.input.val());
            }
            if (!date) date = new Date();
            this.selectedDate = date;
            this.selectedDateString = this.dateToString(this.selectedDate);
            this.selectMonth(this.selectedDate);
        },
        // Write a date string to the input and hide. Trigger the change event so we know to update the
        // selectedDate.
        changeInput : function(dateString) {
            this.input.val(dateString || '').change();
            this.hide();
        },
        show : function() {
            this.selectDate();
            var s = true;
            try{if(this.selectdisable && this.rootLayers.find(".selectable_day").length == 0){s = this.selectdisable();}}catch(e){}
            if(s){
                this.rootLayers.css("display", "block");
                $( [ window, document.body ]).mousedown(this.hideIfClickOutside);
                $("body *").scroll(this.hideIfClickOutside);
                this.input.unbind("focus", this.show);
                $(document.body).keydown(this.keydownHandler);
                this.setPosition();
            }
        },
        hide : function() {
            this.rootLayers.css("display", "none");
            this.input.focus(this.show);
            $(document.body).unbind("keydown", this.keydownHandler);
        },
        // We should hide the date selector if a click event happens outside of it
        hideIfClickOutside : function(event) {
            if (event.target != this.input[0] && !this.insideSelector(event)) {
                this.hide();
            }
        },
        // Returns true if the given event occurred inside the date selector
        insideSelector : function(event) {
            var offset = this.dateSelector.offset();
            offset.right = offset.left + this.dateSelector.outerWidth();
            offset.bottom = offset.top + this.dateSelector.outerHeight();
            return event.pageY < offset.bottom && event.pageY > offset.top && event.pageX < offset.right && event.pageX > offset.left;
        },
        // Respond to various different keyboard events
        keydownHandler : function(event) {
            switch (event.keyCode) {
            case 9: // tab
            case 27: // esc
                this.hide();
                return;
                break;
            case 13: // enter
                this.changeInput(this.selectedDateString);
                break;
            case 33: // page up
                this.moveDateMonthBy(event.ctrlKey ? -12 : -1);
                break;
            case 34: // page down
                this.moveDateMonthBy(event.ctrlKey ? 12 : 1);
                break;
            case 38: // up
                this.moveDateBy(-7);
                break;
            case 40: // down
                this.moveDateBy(7);
                break;
            case 37: // left
                this.moveDateBy(-1);
                break;
            case 39: // right
                this.moveDateBy(1);
                break;
            default:
                return;
            }
            event.preventDefault();
        },
        stringToDate : function(string) {
            try{
                var y,m,d;
                y = (string.match(/(\d{4,4})/))[1];
                m = ((string = string.replace(y,'')).match(/(\d{1,2})/))[1];
                d = ((string = string.replace(m,'')).match(/(\d{1,2})/))[1];
                return new Date(y, m - 1, d);
            }catch(e){
                return null;
            }
        },
        dateToString : function(date) {
            return date.format(this.format);
        },
        setPosition : function() {
            var offset = this.input.position();
            this.rootLayers.css( {
                top : offset.top + this.input.outerHeight() + 2,
                left : offset.left
            });
            if (this.ieframe) {
                this.ieframe.css( {
                    width : this.dateSelector.outerWidth(),
                    height : this.dateSelector.outerHeight()
                });
            }
        },
        // Move the currently selected date by a particular number of days
        moveDateBy : function(amount) {
            var newDate = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), this.selectedDate.getDate() + amount);
            this.selectDate(newDate);
        },
        // Move the month of the currently selected date by a particular number of months. If we are moving
        // to a month which does not have enough days to represent the current day-of-month, then we
        // default to the last day of the month.
        moveDateMonthBy : function(amount) {
            var newDate = new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth() + amount, this.selectedDate.getDate());
            if (newDate.getMonth() == this.selectedDate.getMonth() + amount + 1) {
                // We have moved too far. For instance 31st March + 1 month = 1st May, not 30th April
                newDate.setDate(0);
            }
            this.selectDate(newDate);
        },
        // Move the currently displayed month by a certain amount. This does *not* move the currently
        // selected date, so we end up viewing a month with no visibly selected date.
        moveMonthBy : function(amount) {
            var newMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + amount, this.currentMonth.getDate());
            this.selectMonth(newMonth);
        },
        monthName : function(date) {
            return this.month_names[date.getMonth()];
        },
        // A hack to make "this" refer to this object instance when inside the given function
        bindToObj : function(fn) {
            var self = this;
            return function() {
                return fn.apply(self, arguments)
            };
        },
        // See above
        bindMethodsToObj : function() {
            for ( var i = 0; i < arguments.length; i++) {
                this[arguments[i]] = this.bindToObj(this[arguments[i]]);
            }
        },
        // Finds out the array index of a particular value in that array
        indexFor : function(array, value) {
            for ( var i = 0; i < array.length; i++) {
                if (value == array[i]) return i;
            }
        },
        // Finds the number of a given month name
        monthNum : function(month_name) {
            return this.indexFor(this.month_names, month_name);
        },
        // Finds the number of a given short month name
        shortMonthNum : function(month_name) {
            return this.indexFor(this.short_month_names, month_name);
        },
        // Finds the number of a given day name
        shortDayNum : function(day_name) {
            return this.indexFor(this.short_day_names, day_name);
        },
        // Works out the number of days between two dates
        daysBetween : function(start, end) {
            start = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate());
            end = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate());
            return (end - start) / 86400000;
        },
        changeDayTo : function(dayOfWeek, date, direction) {
            var difference = direction * (Math.abs(date.getDay() - dayOfWeek - (direction * 7)) % 7);
            return new Date(date.getFullYear(), date.getMonth(), date.getDate() + difference);
        },
        // Given a date, return the day at the start of the week *before* this month
        rangeStart : function(date) {
            return this.changeDayTo(this.start_of_week, new Date(date.getFullYear(), date.getMonth()), -1);
        },
        // Given a date, return the day at the end of the week *after* this month
        rangeEnd : function(date) {
            return this.changeDayTo((this.start_of_week - 1) % 7, new Date(date.getFullYear(), date.getMonth() + 1, 0), 1);
        },
        // Is the given date the first day of the week?
        isFirstDayOfWeek : function(date) {
            return date.getDay() == this.start_of_week;
        },
        // Is the given date the last day of the week?
        isLastDayOfWeek : function(date) {
            return date.getDay() == (this.start_of_week - 1) % 7;
        },
        // Adjust a given array of day names to begin with the configured start-of-week
        adjustDays : function(days) {
            var newDays = [];
            for ( var i = 0; i < days.length; i++) {
                newDays[i] = days[(i + this.start_of_week) % 7];
            }
            return newDays;
        }
    };
    $.fn.date_input = function(opts) {
        return this.each(function() {
            $(this).data('dateinputinstance', new DateInput(this, opts));
        });
    };
    //清除日期框中已选择的日期
    $.fn.clearDate = function() {
        this.val('');
        this.attr("changed", true);
        var dateinput = this.data('dateinputinstance');
        if (dateinput)dateinput.hide();
    };
    //DateInput控件初始化
    $.date_input = {
        initialize : function(opts) {
            $("input.date_input").date_input(opts);
        }
    };
    return DateInput;
})(jQuery); // End localisation of the $ function
Date.prototype.format = function (format) {
    /*
     * format="yyyy-MM-dd hh:mm:ss";
     */
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    };
    return format;
};
