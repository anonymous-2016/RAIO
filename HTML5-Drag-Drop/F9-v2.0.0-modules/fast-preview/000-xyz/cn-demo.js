$(function() {
    Highcharts.setOptions({
        lang: {
            rangeSelectorZoom: ''
        }
    });
    /* 苹果历史股价 AAPL historical OHLC data from the Google Finance API */
    // JSON.stringify(obj, null, 4);
    // array-json.json
    // jsonp.json
    // const url = `https://cdn.xgqfrms.xyz/json/hightstock/aapl.json`;
    const url = `./aapl.json`;
    // const url = `https://data.jianshukeji.com/jsonp?filename=json/aapl-ohlcv.json`;
    // $.getJSON(
        // './array-json.json', 
        // `https://cdn.xgqfrms.xyz/json/hightstock/array-json.json`,
        // Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.
        // 'https://data.jianshukeji.com/jsonp?filename=json/aapl-ohlcv.json&callback=?',
    // Fetch API cannot load file:///E:/github/RAIO/HTML5-Drag-Drop/F9-v2.0.0-modules/fast-preview/000-xyz/aapl.json. 
    // URL scheme "file" is not supported.
    fetch(url)
    .then(res => res.json())
    .then(
        function(data) {
            console.log(`data = \n`, data);
            var ohlc = [],
                xxx = [],
                volume = [],
                dataLength = data.length,
                // set the allowed units for data grouping
                groupingUnits = [
                    [
                        'week', // unit name
                        [1] // allowed multiples
                    ],
                    [
                        'month', [1, 2, 3, 4, 6]
                    ]
                ],
                i = 0;
            for (i; i < dataLength; i += 1) {
                ohlc.push(
                    [
                        data[i][0], // the date
                        data[i][1], // open
                        data[i][2], // high
                        data[i][3], // low
                        data[i][4] // close
                    ]
                );
                xxx.push([
                    data[i][0], // the date
                    /* legend error! title & value */
                    /* 数据的 `多少/大小` 决定了会出来的图像的 `形状和效果`！ */
                    // data[i][1], // open
                    // data[i][2], // high
                    // data[i][3], // low
                    // data[i][4], // close
                    data[i][5] / 100000, // the volume 18479788
                ]);
                if (i === 3) {
                    console.log(`data[i]`, data[i]);
                }
                if (data[i][1] === 476.5) {
                    console.log(`data[i]`, data[i]);
                }
                if (data[i][4] === 476.5) {
                    console.log(`data[i]`, data[i]);
                }
                // 
                volume.push([
                    data[i][0], // the date
                    data[i][5] // the volume
                ]);
            }
            // create the chart
            $('#container')
            .highcharts(
                'StockChart', 
                {
                    rangeSelector: {
                        selected: 1,
                        inputDateFormat: '%Y-%m-%d'
                    },
                    title: {
                        text: '苹果历史股价'
                    },
                    xAxis: {
                        dateTimeLabelFormats: {
                            millisecond: '%H:%M:%S.%L',
                            second: '%H:%M:%S',
                            minute: '%H:%M',
                            hour: '%H:%M',
                            day: '%m-%d',
                            week: '%m-%d',
                            month: '%y-%m',
                            year: '%Y'
                        }, // date format
                    },
                    yAxis: [
                        {
                            labels: {
                                align: 'right',
                                x: -3
                            },
                            title: {
                                text: '股价'
                            },
                            top: '0%',
                            height: '60%',
                            lineWidth: 2
                        },
                        /* 
                        {
                            labels: {
                                align: 'right',
                                x: -3
                            },
                            title: {
                                // text: 'XXX 历史股价'
                            },
                            top: '0%',
                            // left: '60px',
                            height: '60%',
                            lineWidth: 2
                        },
                        */
                        {
                            labels: {
                                align: 'left',
                                x: -3
                            },
                            title: {
                                text: '成交量'
                            },
                            top: '60%',
                            height: '30%',
                            offset: 0,
                            lineWidth: 2
                        }
                    ],
                    series: [
                        {
                            type: 'candlestick',
                            // type: 'line',
                            name: 'AAPL',
                            color: 'green',
                            lineColor: 'green',
                            upColor: 'red',
                            upLineColor: 'red',
                            tooltip: {},
                            navigatorOptions: {
                                color: Highcharts.getOptions().colors[0]
                            },
                            data: ohlc,
                            dataGrouping: {
                                units: groupingUnits, // ???
                            }
                        },
                        {
                            type: 'spline',
                            name: 'XXX', // title
                            color: 'green',
                            lineColor: 'green',
                            upColor: 'red',
                            upLineColor: 'red',
                            tooltip: {},
                            navigatorOptions: {
                                color: Highcharts.getOptions().colors[0]
                            },
                            data: xxx,
                            dataGrouping: {
                                units: groupingUnits
                            }
                        },
                        {
                            type: 'column',
                            name: 'Volume',
                            data: volume,
                            yAxis: 1,
                            dataGrouping: {
                                units: groupingUnits
                            }
                        }
                    ]
                }
            );
        }
    )
    .catch( err => console.log(`fetch error = \n`, err));
});