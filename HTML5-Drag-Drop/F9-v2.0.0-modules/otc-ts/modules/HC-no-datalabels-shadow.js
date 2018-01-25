let HC_OPTIONS = {
    plotOptions: {
        columnrange: {
            dataLabels: {
                //align: 'right',
                enabled: true,
                color: 'red',
                inside: false,
                xHigh: -45,
                xLow: -9999999,
                style: {
                    textShadow: false,
                },
                //shadow: "#ff0000",
                formatter: function () {
                    if (this.point.high) {
                        var myDate = new Date(this.y);
                        var newDateMs = Date.UTC(myDate.getUTCFullYear(),myDate.getUTCMonth(),myDate.getUTCDate());
                        return '<b>' + Highcharts.dateFormat('%m/%e',newDateMs) + '</b>';
                    } else {
                        return null;
                    }
                }
            }
        },
    },
};

OBJ = {
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                borderRadius: 5,
                backgroundColor: 'rgba(252, 255, 0, 0.7)',
                borderWidth: 1,
                borderColor: '#AAA',
                y: -6
            }
        },
        bubble: {
            dataLabels: {
                enabled: true,
                color: "#f00",
                shadow: false,
                // style: {
                //     fontWeight: 'bold',
                // },
            }
        },
    },
};



NEW_HC_Options = {
    plotOptions: {
        bubble: {
            dataLabels: {
                enabled: true,
                color: "#f00",
                shadow: false,
                style: {
                    // fontWeight: 'bold',
                    textShadow: false,
                },
            }
        },
        series: {
            dataLabels: {
                enabled: true,// counter name
                format: '{point.name}',
                color: "#0f0",
                shadow: false,
                style: {
                    // fontWeight: 'bold',
                    textShadow: false,
                },
            },
        },
    }
}


/* CSS !important & HC & no text-outline */

/*

.highcharts-text-outline {
    display: none !important;
}

*/


// highcharts-series highcharts-series-0 highcharts-bubble-series highcharts-color-0 highcharts-tracker

















