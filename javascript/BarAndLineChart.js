var chart;
var BarLine1 = [
    {
        "Continent": "北美洲",
        "Total News Count": 2,
        "average News Count": 1
    },
    {
        "Continent": "非洲",
        "Total News Count": 0,
        "average News Count": 0
    },
    {
        "Continent": "中南美洲",
        "Total News Count": 0,
        "average News Count": 0
    },
    {
        "Continent": "亞洲",
        "Total News Count": 45,
        "average News Count": 0.75
    },
    {
        "Continent": "兩岸三地",
        "Total News Count": 27,
        "average News Count": 9
    },
    {
        "Continent": "歐洲",
        "Total News Count": 11,
        "average News Count": 0.26
    }

];
var BarLine2 = [
    {
        "Continent": "北美洲",
        "Total News Count": 26,
        "average News Count": 13
    },
    {
        "Continent": "非洲",
        "Total News Count": 16,
        "average News Count": 0.3
    },
    {
        "Continent": "中南美洲",
        "Total News Count": 0,
        "average News Count": 0
    },
    {
        "Continent": "亞洲",
        "Total News Count": 49,
        "average News Count": 0.82
    },
    {
        "Continent": "兩岸三地",
        "Total News Count": 19,
        "average News Count": 6.33
    },
    {
        "Continent": "歐洲",
        "Total News Count": 44,
        "average News Count": 1.02
    }

];
var BarLine3 = [
    {
        "Continent": "北美洲",
        "Total News Count": 27,
        "average News Count": 13.5
    },
    {
        "Continent": "非洲",
        "Total News Count": 19,
        "average News Count": 0.35
    },
    {
        "Continent": "中南美洲",
        "Total News Count": 18,
        "average News Count": 0.55
    },
    {
        "Continent": "亞洲",
        "Total News Count": 39,
        "average News Count": 0.65
    },
    {
        "Continent": "兩岸三地",
        "Total News Count": 10,
        "average News Count": 3.33
    },
    {
        "Continent": "歐洲",
        "Total News Count": 38,
        "average News Count": 0.88
    }

];
var BarLine4 = [
    {
        "Continent": "北美洲",
        "Total News Count": 32,
        "average News Count": 16
    },
    {
        "Continent": "非洲",
        "Total News Count": 24,
        "average News Count": 0.45
    },
    {
        "Continent": "中南美洲",
        "Total News Count": 33,
        "average News Count": 1
    },
    {
        "Continent": "亞洲",
        "Total News Count": 33,
        "average News Count": 0.55
    },
    {
        "Continent": "兩岸三地",
        "Total News Count": 6,
        "average News Count": 2,
    },
    {
        "Continent": "歐洲",
        "Total News Count": 39,
        "average News Count": 0.9,
    }

];
var BarLine5 = [
    {
        "Continent": "北美洲",
        "Total News Count": 38,
        "average News Count": 19
    },
    {
        "Continent": "非洲",
        "Total News Count": 31,
        "average News Count": 0.57
    },
    {
        "Continent": "中南美洲",
        "Total News Count": 24,
        "average News Count": 0.72
    },
    {
        "Continent": "亞洲",
        "Total News Count": 44,
        "average News Count": 0.73
    },
    {
        "Continent": "兩岸三地",
        "Total News Count": 5,
        "average News Count": 1.67,
    },
    {
        "Continent": "歐洲",
        "Total News Count": 36,
        "average News Count": 0.84,
    }

];
var BarLine6 = [
    {
        "Continent": "北美洲",
        "Total News Count": 28,
        "average News Count": 14
    },
    {
        "Continent": "非洲",
        "Total News Count": 17,
        "average News Count": 0.32
    },
    {
        "Continent": "中南美洲",
        "Total News Count": 22,
        "average News Count": 0.67
    },
    {
        "Continent": "亞洲",
        "Total News Count": 32,
        "average News Count": 0.54
    },
    {
        "Continent": "兩岸三地",
        "Total News Count": 6,
        "average News Count": 2,
    },
    {
        "Continent": "歐洲",
        "Total News Count": 34,
        "average News Count": 0.8,
    }
];
var BarLine7 = [
    {
        "Continent": "北美洲",
        "Total News Count": 34,
        "average News Count": 17
    },
    {
        "Continent": "非洲",
        "Total News Count": 17,
        "average News Count": 0.31
    },
    {
        "Continent": "中南美洲",
        "Total News Count": 19,
        "average News Count": 0.58
    },
    {
        "Continent": "亞洲",
        "Total News Count": 41,
        "average News Count": 0.68
    },
    {
        "Continent": "兩岸三地",
        "Total News Count": 5,
        "average News Count": 1.67,
    },
    {
        "Continent": "歐洲",
        "Total News Count": 41,
        "average News Count": 0.95,
    }
];
var BarLine8 = [
    {
        "Continent": "北美洲",
        "Total News Count": 41,
        "average News Count": 20.5
    },
    {
        "Continent": "非洲",
        "Total News Count": 45,
        "average News Count": 0.33
    },
    {
        "Continent": "中南美洲",
        "Total News Count": 26,
        "average News Count": 0.79
    },
    {
        "Continent": "亞洲",
        "Total News Count": 45,
        "average News Count": 0.75
    },
    {
        "Continent": "兩岸三地",
        "Total News Count": 7,
        "average News Count": 2.33,
    },
    {
        "Continent": "歐洲",
        "Total News Count": 43,
        "average News Count": 1,
    }

];
var BarLine9 = [
    {
        "Continent": "北美洲",
        "Total News Count": 37,
        "average News Count": 18.5
    },
    {
        "Continent": "非洲",
        "Total News Count": 18,
        "average News Count": 0.33
    },
    {
        "Continent": "中南美洲",
        "Total News Count": 16,
        "average News Count": 0.48
    },
    {
        "Continent": "亞洲",
        "Total News Count": 39,
        "average News Count": 0.65
    },
    {
        "Continent": "兩岸三地",
        "Total News Count": 3,
        "average News Count": 1,
    },
    {
        "Continent": "歐洲",
        "Total News Count": 39,
        "average News Count": 0.91,
    }
];
var BarLine10 = [
    {
        "Continent": "北美洲",
        "Total News Count": 35,
        "average News Count": 17.5
    },
    {
        "Continent": "非洲",
        "Total News Count": 16,
        "average News Count":0.3
    },
    {
        "Continent": "中南美洲",
        "Total News Count": 14,
        "average News Count": 0.42
    },
    {
        "Continent": "亞洲",
        "Total News Count": 36,
        "average News Count": 0.6
    },
    {
        "Continent": "兩岸三地",
        "Total News Count": 1,
        "average News Count": 0.33,
    },
    {
        "Continent": "歐洲",
        "Total News Count": 36,
        "average News Count": 0.84,
    }
];
var BarLine11 = [
    {
        "Continent": "北美洲",
        "Total News Count": 37,
        "average News Count": 18.5
    },
    {
        "Continent": "非洲",
        "Total News Count": 16,
        "average News Count": 0.3
    },
    {
        "Continent": "中南美洲",
        "Total News Count": 21,
        "average News Count": 0.64
    },
    {
        "Continent": "亞洲",
        "Total News Count": 42,
        "average News Count": 0.7
    },
    {
        "Continent": "兩岸三地",
        "Total News Count": 2,
        "average News Count": 0.67,
    },
    {
        "Continent": "歐洲",
        "Total News Count": 43,
        "average News Count": 1,
    }
];
var BarLine12 = [
    {
        "Continent": "北美洲",
        "Total News Count": 35,
        "average News Count": 17.5
    },
    {
        "Continent": "非洲",
        "Total News Count": 27,
        "average News Count": 0.5
    },
    {
        "Continent": "中南美洲",
        "Total News Count": 34,
        "average News Count": 1.03
    },
    {
        "Continent": "亞洲",
        "Total News Count": 47,
        "average News Count": 0.78
    },
    {
        "Continent": "兩岸三地",
        "Total News Count": 1,
        "average News Count": 0.33,
    },
    {
        "Continent": "歐洲",
        "Total News Count": 39,
        "average News Count": 0.91,
    }
];

AmCharts.ready(function () {
    for(var i = 1; i <= 12; i++){
        chart = new AmCharts.AmSerialChart();
        var data  = "BarLine"+i.toString();
        var title = "各州每月新聞總數與平均新聞數";
        switch(i) {
            case 1:
                chart.dataProvider = BarLine1;
                title += "(一月)";
                break;
            case 2:
                chart.dataProvider = BarLine2;
                title += "(二月)";
                break;
            case 3:
                chart.dataProvider = BarLine3;
                title += "(三月)";
                break;
            case 4:
                chart.dataProvider = BarLine4;
                title += "(四月)";
                break;
            case 5:
                chart.dataProvider = BarLine5;
                title += "(五月)";
                break;
            case 6:
                chart.dataProvider = BarLine6;
                title += "(六月)";
                break;
            case 7:
                chart.dataProvider = BarLine7;
                title += "(七月)";
                break;
            case 8:
                chart.dataProvider = BarLine8;
                title += "(八月)";
                break;
            case 9:
                chart.dataProvider = BarLine9;
                title += "(九月)";
                break;
            case 10:
                chart.dataProvider = BarLine10;
                title += "(十月)";
                break;  
            case 11:
                chart.dataProvider = BarLine11;
                title += "(十一月)";
                break;  
            case 12:
                chart.dataProvider = BarLine12;
                title += "(十二月)";
                break;    
        }
        // chart.dataProvider = BarLine1;
        chart.categoryField = "Continent";
        // chart.startDuration = 1;
        
        var categoryAxis = chart.categoryAxis;
        categoryAxis.gridPosition = "start";
        var valueAxis1 = new AmCharts.ValueAxis();
        valueAxis1.axisColor = "#FCD202";
        valueAxis1.maximum = 25;
        valueAxis1.strictMinMax = true;
        valueAxis1.axisThickness = 2;
        chart.addValueAxis(valueAxis1);

        var valueAxis2 = new AmCharts.ValueAxis();
        valueAxis2.position = "right"; // this line makes the axis  to appear on the right
        valueAxis2.axisColor = "#ADD8E6";
        valueAxis2.gridAlpha = 0;
        valueAxis2.maximum = 50;
        valueAxis2.strictMinMax = true;
        valueAxis2.axisThickness = 2;
        chart.addValueAxis(valueAxis2);

        var graph1 = new AmCharts.AmGraph();
        graph1.valueAxis = valueAxis1; 
        graph1.type = "column";
        graph1.title = "總新聞數";
        graph1.lineColor = "#ADD8E6";
        graph1.valueField = "Total News Count";
        graph1.lineAlpha = 1;
        graph1.fillAlphas = 1;
        graph1.alphaField = "alpha";
        graph1.balloonText = "<span style='font-size:12px;'>[[title]] in [[category]]:<b>[[value]]</b> [[additional]]</span>";
        chart.addGraph(graph1);

        
        var graph2 = new AmCharts.AmGraph();
        graph1.valueAxis = valueAxis2;
        graph2.type = "line";
        graph2.title = "平均新聞數";
        graph2.lineColor = "#fcd202";
        graph2.valueField = "average News Count";
        graph2.lineThickness = 3;
        graph2.bullet = "round";
        graph2.bulletBorderThickness = 3;
        graph2.bulletBorderColor = "#fcd202";
        graph2.bulletBorderAlpha = 1;
        graph2.bulletColor = "#ffffff";
        graph2.balloonText = "<span style='font-size:12px;'>[[title]] in [[category]]:<b>[[value]]</b> [[additional]]</span>";
        chart.addGraph(graph2);

        var legend = new AmCharts.AmLegend();
        legend.useGraphSettings = true;
        chart.addLegend(legend);
        
        chart.addTitle(title);
        chart.write(data);
    }
});