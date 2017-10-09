
/**
 * Get the current time
 */
function getNow() {
    var now = new Date();

    return {
        hours: now.getHours() + now.getMinutes() / 60,
        minutes: now.getMinutes() * 12 / 60 + now.getSeconds() * 12 / 3600,
        seconds: now.getSeconds() * 12 / 60
    };
}


time= {
    hours: 12,
    minutes: 0,
    seconds: 0

};

var iterador;

function capturarTiempo(){

   var h = parseInt(document.getElementById("hora").value);
   var m = parseInt(document.getElementById("minutos").value);
   var s = parseInt(document.getElementById("segundos").value);

   setTime(h,m,s);

};

function setTime(hora,minutos,segundos){
 iterador =0;
 this.time= {
        hours: hora,
        minutes: minutos*(12/60),
        seconds: segundos*(12/60)

    };


}

function iterar(){
    iterador++;
}

function getTime(){

    // this.time= {
    //     hours: this.time.hours,
    //     minutes: this.time.minutes,
    //     seconds: this.time.seconds + (12/60)
    // }
    // if(this.time.seconds<60){
    // this.time.seconds = this.time.seconds + (12/60);
    // }else{
    // this.time.seconds = 0;
    // this.time.minutes = this.time.minutes + (12/60); 
    // }

    return time;

}


/**
 * Pad numbers
 */
function pad(number, length) {
    // Create an array of the remaining length + 1 and join it with 0's
    return new Array((length || 2) + 1 - String(number).length).join(0) + number;
}





var now = getTime();

// Create the chart
 Highcharts.chart('container', {

    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: 300
    },

    credits: {
        enabled: false
    },

    title: {
        text: 'The Highcharts clock'
    },

    pane: {
        background: [{
            // default background
        }, {
            // reflex for supported browsers
            backgroundColor: Highcharts.svg ? {
                radialGradient: {
                    cx: 0.5,
                    cy: -0.4,
                    r: 1.9
                },
                stops: [
                    [0.5, 'rgba(255, 255, 255, 0.2)'],
                    [0.5, 'rgba(200, 200, 200, 0.2)']
                ]
            } : null
        }]
    },

    yAxis: {
        labels: {
            distance: -20
        },
        min: 0,
        max: 12,
        lineWidth: 1,
        showFirstLabel: false,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 5,
        minorTickPosition: 'inside',
        minorGridLineWidth: 0,
        minorTickColor: '#666',

        tickInterval: 1,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666'//,
        /*title: {
            text: 'Powered by<br/>Highcharts',
            style: {
                color: '#BBB',
                fontWeight: 'normal',
                fontSize: '8px',
                lineHeight: '10px'
            },
            y: 10
        }*/
    },

    tooltip: {
        formatter: function () {
            return this.series.chart.tooltipText;
        }
    },

    series: [{
        data: [{
            id: 'hour',
            y: now.hours,
            dial: {
                radius: '60%',
                baseWidth: 4,
                baseLength: '95%',
                rearLength: 0
            }
        }, {
            id: 'minute',
            y: now.minutes,
            dial: {
                baseLength: '95%',
                rearLength: 0
            }
        }, {
            id: 'second',
            y: now.seconds,
            dial: {
                radius: '100%',
                baseWidth: 1,
                rearLength: '20%'
            }
        }],
        animation: true,
        dataLabels: {
            enabled: false
        }
    }]
},

    // Move
    function (chart) {




        setInterval(function () {

            now = getTime();
            if (chart.axes) { // not destroyed
                var hour = chart.get('hour'),
                    minute = chart.get('minute'),
                    second = chart.get('second'),
                    // run animation unless we're wrapping around from 59 to 0
                    animation = now.seconds === 0 ?
                        false : {
                            easing: 'easeOutBounce'
                        };

                // Cache the tooltip text
                chart.tooltipText =
                    pad(Math.floor(now.hours), 2) + ':' +
                    pad(Math.floor(now.minutes * 5), 2) + ':' +
                    pad(now.seconds * 5, 2);


                hour.update(now.hours, true, animation);
                minute.update(now.minutes, true, animation);
                second.update(now.seconds, true, animation);
            }

        }, 1000);

    });

/**
 * Easing function from https://github.com/danro/easing-js/blob/master/easing.js
 */
Math.easeOutBounce = function (pos) {
    if ((pos) < (1 / 2.75)) {
        return (7.5625 * pos * pos);
    }
    if (pos < (2 / 2.75)) {
        return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
    }
    if (pos < (2.5 / 2.75)) {
        return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
    }
    return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
};

//////////////////////

Highcharts.chart('container', {
    
        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
    
        title: {
            text: 'Speedometer'
        },
    
        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },
    
        // the value axis
        yAxis: {
            min: 0,
            max: 200,
    
            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',
    
            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            title: {
                text: 'km/h'
            },
            plotBands: [{
                from: 0,
                to: 120,
                color: '#55BF3B' // green
            }, {
                from: 120,
                to: 160,
                color: '#DDDF0D' // yellow
            }, {
                from: 160,
                to: 200,
                color: '#DF5353' // red
            }]
        },
    
        series: [{
            name: 'Speed',
            data: [80],
            tooltip: {
                valueSuffix: ' km/h'
            }
        }]
    
    },
    // Add some life
    function (chart) {
        if (!chart.renderer.forExport) {
            setInterval(function () {
                var point = chart.series[0].points[0],
                    newVal,
                    inc = Math.round((Math.random() - 0.5) * 20);
    
                newVal = point.y + inc;
                if (newVal < 0 || newVal > 200) {
                    newVal = point.y - inc;
                }
    
                point.update(newVal);
    
            }, 3000);
        }
    });