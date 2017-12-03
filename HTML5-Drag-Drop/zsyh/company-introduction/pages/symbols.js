// const icon_url = `../../img/arrow.png`;


/*



# scrollbar bug!

lib: highstock.js

method: Highcharts.chart()







*/

// namespaces
var STOCK_F9 = STOCK_F9 || {};
// sub namespaces
STOCK_F9.Summary = STOCK_F9.Summary || {};

// http://10.1.5.202/stock/f9/mock-datas/hc-point.json

STOCK_F9.Summary.changedItems = STOCK_F9.Summary.changedItems || (
    () => {
        //
    }
);

STOCK_F9.Summary.changedItems.fetchHC = STOCK_F9.Summary.changedItems.fetchHC || (
    (
        {
            url,
            gcode,
            // uid,
            debug
        } = {
            url: `http://10.1.5.202/stock/f9/mock-datas/hc-point.json`,
            gcode: `600570`,
            // uid: ``,
            debug: false
        }
    ) => {
        let datas = {};
        let new_url = `${url}?{gcode: ${gcode}}`;
        if (debug) {
            console.log(`url`, url);
            console.log(`new_url`, new_url);
        }
        fetch(new_url)
        .then(res => res.json())
        .then(
            (json) => {
                if (debug) {
                    console.log(`json = \n`, json);
                }
                datas = Object.assign(datas, json);
                // drawHC
                STOCK_F9.Summary.changedItems.drawHC(datas, true);
                // STOCK_F9.Summary.changedItems.drawHC(data, false);
                // STOCK_F9.Summary.changedItems.drawHC(data);
            }
        )
        .catch(error => console.log(`fetch data error = \n`, error));
        // return only work out Promise!
        return datas;
    }
);


STOCK_F9.Summary.changedItems.drawHC = STOCK_F9.Summary.changedItems.drawHC || (
    (data = {}, debug = false) => {
        let rows = data.rows,
            points = data.points,
            xAxis_data = [],
            yAxis_data = [];
        rows.map(
            (row, i) => {
                if (debug && i === 0) {
                    console.log(`row, i`, row, i);
                    console.log(`row[0], row[1]`, row[0], row[1]);
                }
                // date time
                xAxis_data.push(row[1]);
                // stock price
                yAxis_data.push(row[0]);
            }
        );
        if (debug) {
            console.log(`xAxis_data`, xAxis_data);
            console.log(`yAxis_data`, yAxis_data);
        }
        // ??? point replace yAxis_data ???
        // json.points[0];
        // "2002-04-30" && ["2002-04-30", "a1", "2002/04/23行业经营范围变更", 1]
        points.map(
            (point, i) => {
                // point[0]
                if (debug && i === 0) {
                    console.log(`point, i`, point, i);
                    console.log(`point[0]`, point[0]);
                }
                let index = yAxis_data.indexOf(point[0]);
                let y = xAxis_data[index];
                if (debug && i === 0) {
                    console.log(`\n\n\n xAxis_data[index]`, y);
                }
                // only draw one point!
                if (i === 0) {
                    xAxis_data[index] = {
                        y,
                        marker: {
                            symbol: `url(https://www.highcharts.com/samples/graphics/sun.png)`,
                            // ??? `` ? `` : ""
                            // symbol: icon_url ??? must be an url string
                            // symbol: `url(../../img/arrow.png)`
                        }
                    };
                }
                if (debug && i === 0) {
                    console.log(`new xAxis_data[index]`, xAxis_data[index]);
                }
            }
        );
        if (debug) {
            console.log(`new yAxis_data`, yAxis_data);
            console.log(`new xAxis_data`, xAxis_data);
        }
        // Highcharts
        Highcharts.chart('container', {
        // Highcharts.stockChart('container', {
            chart: {
                type: 'spline',
                // type: 'line',
                width: 800,
                height: 600
            },
            scrollbar: {
                enabled: true
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: yAxis_data,
                min: 0,
                max: 8,
                labels: {
                    // autoRotation:'false',
                    autoRotation: [0],
                    step: 2
                }
            },
            yAxis: {
                title: {
                    text: "股价"
                },
                labels: {
                    formatter: function () {
                        return this.value + '元';
                    }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true
            },
            plotOptions: {
                spline: {
                    marker: {
                        radius: 4,
                        lineColor: '#666666',
                        lineWidth: 1
                    }
                }
            },
            series: [
                {
                    name: "交易时间",
                    marker: {
                        symbol: 'square'
                    },
                    data: xAxis_data
                }
            ]
        });
    }
);



STOCK_F9.Summary.changedItems.initHC = STOCK_F9.Summary.changedItems.initHC || (
    (debug = false) => {
        let obj = {
            url: `http://10.1.5.202/stock/f9/mock-datas/hc-point.json`,
            gcode: `600570`,
            // uid: `#changed_projects_table`,
            debug: debug
            // debug: true
        };
        STOCK_F9.Summary.changedItems.fetchHC(obj);
    }
);

// STOCK_F9.Summary.changedItems.initHC(false);
STOCK_F9.Summary.changedItems.initHC(true);




/*
    // series.spline.marker
    "symbol & marker": {
        enabled: Boolean,
        fillColor: Color,
        height: Number,
        lineColor: Color,
        lineWidth: Number,
        radius: Number,
        symbol: String,
        width: Number
    },
*/
