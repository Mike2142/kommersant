var data = [
    ['ru-sc', 0],
    ['ru-kr', 1],
    ['ru-2485', 2],
    ['ru-ar', 3],
    ['ru-nn', 4],
    ['ru-yn', 5],
    ['ru-ky', 6],
    ['ru-ck', 7],
    ['ru-kh', 8],
    ['ru-sl', 9],
    ['ru-ka', 10],
    ['ru-kt', 11],
    ['ru-ms', 'Москва'],
    ['ru-rz', 13],
    ['ru-sa', 14],
    ['ru-ul', 15],
    ['ru-om', 16],
    ['ru-ns', 17],
    ['ru-mm', 18],
    ['ru-ln', 19],
    ['ru-sp', 20],
    ['ru-ki', 21],
    ['ru-kc', 22],
    ['ru-in', 23],
    ['ru-kb', 24],
    ['ru-no', 25],
    ['ru-st', 26],
    ['ru-sm', 27],
    ['ru-ps', 28],
    ['ru-tv', 29],
    ['ru-vo', 30],
    ['ru-iv', 31],
    ['ru-ys', 32],
    ['ru-kg', 33],
    ['ru-br', 34],
    ['ru-ks', 35],
    ['ru-lp', 36],
    ['ru-2509', 37],
    ['ru-ol', 38],
    ['ru-nz', 39],
    ['ru-pz', 40],
    ['ru-vl', 41],
    ['ru-vr', 42],
    ['ru-ko', 43],
    ['ru-sv', 44],
    ['ru-bk', 45],
    ['ru-ud', 46],
    ['ru-mr', 47],
    ['ru-cv', 48],
    ['ru-cl', 49],
    ['ru-ob', 50],
    ['ru-sr', 51],
    ['ru-tt', 52],
    ['ru-to', 53],
    ['ru-ty', 54],
    ['ru-ga', 55],
    ['ru-kk', 56],
    ['ru-cn', 57],
    ['ru-kl', 58],
    ['ru-da', 59],
    ['ru-ro', 60],
    ['ru-bl', 61],
    ['ru-tu', 62],
    ['ru-ir', 63],
    ['ru-ct', 64],
    ['ru-yv', 65],
    ['ru-am', 66],
    ['ru-tb', 67],
    ['ru-tl', 68],
    ['ru-ng', 69],
    ['ru-vg', 70],
    ['ru-kv', 71],
    ['ru-me', 72],
    ['ru-ke', 73],
    ['ru-as', 74],
    ['ru-pr', 75],
    ['ru-mg', 76],
    ['ru-bu', 77],
    ['ru-kn', 78],
    ['ru-kd', 79],
    ['ru-ku', 80],
    ['ru-al', 81],
    ['ru-km', 82],
    ['ru-pe', 83],
    ['ru-ad', 84]
];

Highcharts.mapChart('container', {
    chart: {
        map: 'countries/ru/custom/ru-all-disputed',
        backgroundColor: 'transparent',
    },

    title: {
        text: 'Москва на карте России'
    },

    mapNavigation: {
        enabled: false,
        buttonOptions: {
            verticalAlign: 'bottom'
        },
    },

    legend: {
        enabled: false,
        align: 'right',
        verticalAlign: 'middle'
    },

    tooltip: { enabled: false },

    colorAxis: {
        min: 0
    },

    credits: {
        enabled: false
    },

    plotOptions: {
        series: {
            dataLabels: {
                enabled: false
            },
            states: {
                inactive: {
                    opacity: 1
                }
            },
            point: {
                events: {
                    click: function () {

                        var text = '<b>Clicked point</b><br>Series: ' + this.series.name +
                                '<br>Point: ' + this.name + ' (' + this.value + '/km²)',
                            chart = this.series.chart;
                        if (!chart.clickLabel) {
                            chart.clickLabel = chart.renderer.label(text, 0, 250)
                                .css({
                                    width: '180px'
                                })
                        } else {
                            chart.clickLabel.attr({
                                text: text
                            });
                        }

                        if (this.name == 'Москва') {
                            $.magnificPopup.open({
                            items: {
                                src: '<div class="white-popup">'+ '<b>Ура!</b><br>' + this.name + '<br><br> Содержание и поведение попапа зависит от клика <br><br> 👍 </div>',
                                type: 'inline',
                            },
                            closeOnBgClick: false,
                            showCloseBtn: true,
                            closeBtnInside: true,
                        });
                        } else {
                            $.magnificPopup.open({
                            items: {
                                src: '<div class="white-popup">'+ '<br>' + this.name + ' - это не Москва 😋 </div>',
                                type: 'inline',
                            },
                            closeOnBgClick: true,
                            showCloseBtn: false,
                            closeBtnInside: true,
                        });
                        }
                    }
                }
            }
        }
    },

    series: [
    {
        data: data,
        name: 'Другие города',
        states: {
            hover: {
                color: 'orange'
            },

        },
        dataLabels: {
            enabled: false,
            format: '{point.name}'
        },
    },

    {
        type: 'mappoint',
        name: 'Москва',
        marker: {
            fillColor: 'orange',
            lineColor: 'black',
            lineWidth: 3,
            radius: 10,
            states: {
                hover: {
                    enabled: false
                }
            },
        },
        data: [{
            name: 'Москва',
            x: 440,
            y: -6215,
        }, ],
    }],
});
