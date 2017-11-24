$(function(){
    // URL query parse ???
    function getParam(name) {
        var str = decodeURIComponent(window.location.search);
        var start = str.indexOf("?") + 1;
        if (start == 0) {
            return "";
        }
        var value = "";
        var queryString = str.substring(start);
        var paraNames = queryString.split("&");
        for (var i = 0; i < paraNames.length; i++) {
            var eindex = paraNames[i].indexOf("=");

            if (eindex > 0) {
                pname = paraNames[i].substring(0, eindex);
                pvalue = paraNames[i].substring(eindex + 1);

                if (name == pname) {
                    return pvalue;
                }
            }
        }
        return value;
    }
    
    var seccode = getParam('seccode');
    var color = getParam('skin')||"white";
      switch (STOCK_SKIN){
          case "white":
             STOCK_SKIN=STOCK_SKIN;
              break;
        case "black":
             STOCK_SKIN=STOCK_SKIN;
              break;
          default:
             STOCK_SKIN="white";
              break;
      }
    if(isEmpty(seccode)){
        //初始化时方式恒生电子
        seccode='600570';
    }

    //window.onresize=function(){
        //document.getElementById("contentid").style.height = $(window).height() + "px";
        //document.getElementById("zygddiv").style.height=$(window).height()-124+"px";
        //window.location.reload();
    //}
    //document.getElementById("contentid").style.height = $(window).height() + "px";
    //document.getElementById("zygddiv").style.height=$(window).height()-124+"px";
    

    
    drawchart('ylyg_chart');
    drawchart('jgpj_chart');
    drawRzyeChart('rzyeCon_Chart');
    
    drawRzyeChart('jgcgbdjh_chart');
    
    
    drawZjlxChart('zjlxCon_Chart');
});




function isEmpty(source){
    return  source==undefined||source==null||source==''||source==0;
}




function drawchart(div){
     var color='';
     var optioncolor='';
     var gridColor='';
     var legendColor = '';
     var yAxisColor='';
 
    if (STOCK_SKIN == 'white') {
      color='#fff';
       optioncolor='gray';
       gridColor='#ccc';
       legendColor='#000';
       yAxisColor = "#000";
    } 
    else {
       color='#0B1016';
       optioncolor='red';
       gridColor='#2D3039';
       legendColor='#fff';
       yAxisColor = "#FFB400";
    } 	
    
    
        $('#'+div).highcharts({
        chart: {
            type: 'column',
            backgroundColor:color
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false
            },        
        xAxis: {
            categories: ['2017-02', '2017-02', '2017-02', '2017-02', '2017-02']
        },
      colors: ['#ff1919', '#ffff66', '#92d050'],         
        yAxis: [
           { // Primary yAxis
            labels: {
                format: '{value}%',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: '',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: '',
                style: {
                    color: Highcharts.getOptions().colors[2]
                }
            },
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            opposite: true,
            gridLineColor: gridColor
//          gridLineColor: gridColor
        }],
        legend: {
             align: "right", 
            itemHoverStyle: {
                color: '#FFB400'
            },
            itemStyle: {
                color: legendColor,
                fontWeight: 'bold'
           },
        　　   verticalAlign: "bottom",
        　　   x: 0, 
        　　   y: 0,    
            shadow: false
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>';
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black'
                    }
                }
            }
        },
        series: [{
            name: '上调',
            data: [5, 3, 4, 7, 2]
        }, {
            name: '维持',
            data: [2, 2, 3, 2, 1]
        }, {
            name: '下调',
            data: [3, 4, 4, 2, 5]
        }, {
            name: '平均',
            type:'spline',
            yAxis: 1,
            color:"skyblue",
            data: [3, 4, 4, 2, 5]
        }]
    });
    
}



function drawRzyeChart(id){
     var color='';
     var optioncolor='';
     var gridColor='';
     var legendColor = '';
     var yAxisColor='';
     
           if (STOCK_SKIN == 'white') {
          color='#fff';
           optioncolor='gray';
           gridColor='#ccc';
           legendColor='#000';
           yAxisColor = "#000";
        } 
        else {
           color='#0B1016';
           optioncolor='red';
           gridColor='#2D3039';
           legendColor='#fff';
           yAxisColor = "#FFB400";
        } 
     $('#'+id).highcharts({  
                     credits:{
                    enabled:false // 禁用版权信息
                       },
                chart: {
                    backgroundColor:color,
                    type: 'column'
                },
                title:{
                    text:null
                },
                xAxis: [{
                    categories:  ["2010","2011","2012","2013","2014","2015","2016","2017(预测)","2018(预测)","2019(预测)"]

                }],
                plotOptions: {
                    column:{
                        dataLabels:{
                        style: {
                            textShadow:false,
                            color:optioncolor
                                },
                             crop: false,
                            enabled:true
                        }
                    }
                    /*spline:{
                        dataLabels:{
                            enabled:true
                        }
                    }*/
                },
                
                legend: {  
                     align: "right", 
                    itemHoverStyle: {
                        color: '#FFB400'
                    },
                    itemStyle: {
                        color: legendColor,
                        fontWeight: 'bold'
                   },
                　　   verticalAlign: "bottom",
                　　   x: 0, 
                　　   y: 0      
                },  
                yAxis: [ { // Secondary yAxis
                    title: {
                        style: {
                            color: yAxisColor
                         }, 
                        text: ''
                    },
                    labels: {
                        format: '{value}'
                    },
                    tickAmount:4,
                    gridLineColor: gridColor,
                    opposite: true
                },{ // Primary yAxis
                    labels: {
                        format: '{value}'
                    },
                    tickAmount:4,
                    gridLineColor: gridColor,
                    title: {
                        style: {
                            color: yAxisColor
                         }, 
                        text: ''
                    }
                }],

                tooltip: {
                    shared: true
                },
                series: [
                {
                    name: '净利润',
                    type: 'column',
                    color: '#015CA3',  
                    yAxis: 1,
                    data: [
                        0.64,
                        0.22,
                        0.15,
                        0.19,
                        0.18,
                        0.12,
                        0.19,
                        0.28,
                        0.39,
                        0.54
                    ],
                    tooltip: {
                        valueSuffix: ' 亿元'
                    }

                },
                {
                    name: '每股收益',
                    type: 'line',
                    color: '#FBB728', 
                    yAxis: 0,
                    data:  [
                            1.13,
                            0.83,
                            0.7,
                            0.93,
                            0.86,
                            0.55,
                            0.9,
                            1.29,
                            1.82,
                            2.59
                        ],
                    tooltip: {
                        valueSuffix: '元'
                    }
                }
                ]
    
    });
                $("tspan.highcharts-text-outline").css("fill","none");
              $("tspan.highcharts-text-outline").css("stroke","none");	
}




function drawZjlxChart(div){
     var color='';
     var optioncolor='';
     var gridColor='';
     var legendColor = '';
     var yAxisColor='';
     
    if (STOCK_SKIN == 'white') {
      color='#fff';
       optioncolor='gray';
       gridColor='#ccc';
       legendColor='#000';
       yAxisColor = "#000";
    } 
    else {
       color='#0B1016';
       optioncolor='red';
       gridColor='#2D3039';
       legendColor='#fff';
       yAxisColor = "#FFB400";
    } 
    
    
    $('#'+div).highcharts({
        chart: {
            type: 'column',
            backgroundColor:color,
        },
        title: {
            text: ''
        },
        xAxis: {
            
        min:0,  
        max:15,  
        tickInterval:5,  
        labels:{  
            formatter:function(){  
                var arr = [];  
                arr[0]  = '2017-01-02';  
                arr[5]  = '2018-01-02';  
                arr[10] = '2019-01-02';  
                arr[15] = '2055-01-02';  
                return arr[this.value];  
            }  
        },  
        plotLines:[{  
            color: '#C0C0C0',  
            width: 1,  
            value: 0  
        },  
        {  
            color: '#C0C0C0',  
            width: 1,  
            value: 5 
        },  
        {  
            color: '#C0C0C0',  
            width: 1,  
            value: 10 
        },  
        {  
            color: '#C0C0C0',  
            width: 1,  
            value: 15 
        }]
            
            
        },
        yAxis: [ { // Secondary yAxis
            title: {
                style: {
                    color: yAxisColor
                 }, 
                text: ''
            },
            labels: {
                format: '{value}'
            },
            tickAmount:5,
            gridLineColor: gridColor,
            opposite: true
        },{ 
            labels: {
                format: '{value}'
            },
            min: -6000,
            tickAmount:5,
            gridLineColor: gridColor,
            title: {
                style: {
                    color: yAxisColor
                 }, 
                text: ''
            }
        },],
        credits: {
            enabled: false
        },
        plotOptions: {
            spline:{
               marker:{
                   enabled:false
               }
            }
        },        
       legend: {  
             align: "right", 
            itemHoverStyle: {
                color: '#FFB400'
            },
            itemStyle: {
                color: legendColor,
                fontWeight: 'bold'
           },
        　　   verticalAlign: "bottom",
        　　   x: 0, 
        　　   y: 0      
        },         
        series: [{
            name: '大单净流入',
            type: 'column',
             yAxis: 0,
            negativeColor:'#00ce9b',
            data: [-5, -3, 4, -7, 2,-5, -3, 4, -7, 2,-5, -3, 4, -7, 2]
        }, {
            name: '市价',
            type:'spline',
            yAxis: 1,
            data: [3300, 2300, 3400, 2500, 9100,5900, 3600, 4800, 7800, 2800,5800, 3800, 4800, 7800,5800]
        }]
    });
            $("tspan.highcharts-text-outline").css("fill","none");
              $("tspan.highcharts-text-outline").css("stroke","none");		
    
}






$(function () {
    var seriesOptions = [],
        seriesCounter = 0,
        names = ['MSFT', 'AAPL'];
    /**
     * Create the chart when all data is loaded
     * @returns {undefined}
     */
    function createChart() {
        $('#gjcjl_chart').highcharts('StockChart', {
            rangeSelector: {
                selected: 4
            },
            yAxis: {
                labels: {
                    formatter: function () {
                        return (this.value > 0 ? ' + ' : '') + this.value + '%';
                    }
                },
                plotLines: [{
                    value: 0,
                    width: 2,
                    color: 'silver'
                }]
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                series: {
                    compare: 'percent',
                    showInNavigator: true
                }
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
                valueDecimals: 2,
                split: true
            },
            series: seriesOptions
        });
    }
    $.each(names, function (i, name) {
        $.getJSON('https://data.jianshukeji.com/jsonp?filename=json/' + name.toLowerCase() + '-c.json&callback=?',    function (data) {
            seriesOptions[i] = {
                name: name,
                data: data
            };
            // As we're loading the data asynchronously, we don't know what order it will arrive. So
            // we keep a counter and create the chart when all the data is loaded.
            seriesCounter += 1;
            if (seriesCounter === names.length) {
                createChart();
            }
        });
    });
});