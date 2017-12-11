# highcharts

https://code.highcharts.com/
https://code.highcharts.com/highcharts.js
https://code.highcharts.com/highcharts.src.js


https://github.com/highcharts/highcharts/blob/master/css/highcharts.scss
https://www.highcharts.com/docs/chart-design-and-style/style-by-css



> BUILDER

https://www.highcharts.com/download

https://www.highcharts.com/docs/getting-started/how-to-create-custom-highcharts-files

https://www.npmjs.com/package/js-beautify

http://jsbeautifier.org/



> demos

https://www.highcharts.com/demo

https://www.highcharts.com/demo/combo
http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/demo/combo/
https://code.highcharts.com/modules/series-label.js

https://www.highcharts.com/demo/styled-mode-column

https://www.highcharts.com/demo/chart-update
http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/demo/chart-update/


https://www.highcharts.com/demo/synchronized-charts
http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/demo/synchronized-charts/



https://www.highcharts.com/demo/dynamic-update
http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/demo/dynamic-update/
https://code.jquery.com/jquery-3.1.1.min.js



# Sortable


https://github.com/RubaXa/Sortable/blob/master/Sortable.js
https://raw.githubusercontent.com/RubaXa/Sortable/master/Sortable.min.js



# JSONP

https://api.jquery.com/jQuery.getJSON/

https://github.com/highcharts/highcharts/blob/master/samples/data/activity.json

```js

$.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=activity.json&callback=?', function (activity) {
    $.each(activity.datasets, function (i, dataset) {
        // Add X values
        dataset.data = Highcharts.map(dataset.data, function (val, j) {
            return [activity.xData[j], val];
        });
        $('<div class="chart">')
        .appendTo('#container')
        .highcharts({
            chart: {
                marginLeft: 40, // Keep all charts left aligned
                spacingTop: 20,
                spacingBottom: 20
            },
            title: {
                text: dataset.name,
                align: 'left',
                margin: 0,
                x: 30
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            xAxis: {
                crosshair: true,
                events: {
                    setExtremes: syncExtremes
                },
                labels: {
                    format: '{value} km'
                }
            },
            yAxis: {
                title: {
                    text: null
                }
            },
            tooltip: {
                positioner: function () {
                    return {
                        x: this.chart.chartWidth - this.label.width, // right aligned
                        y: 10 // align to title
                    };
                },
                borderWidth: 0,
                backgroundColor: 'none',
                pointFormat: '{point.y}',
                headerFormat: '',
                shadow: false,
                style: {
                    fontSize: '18px'
                },
                valueDecimals: dataset.valueDecimals
            },
            series: [{
                data: dataset.data,
                name: dataset.name,
                type: dataset.type,
                color: Highcharts.getOptions().colors[i],
                fillOpacity: 0.3,
                tooltip: {
                    valueSuffix: ' ' + dataset.unit
                }
            }]
        });
    });
});

```
