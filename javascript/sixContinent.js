            var chart;

            var chartData2 = [
                {
                    "month": "一月",
                    "Africa": 4,
                    "Central and South America": 0,
                    "Europe": 33,
                    "USA and Canada":12,
                    "Asian":62,
                    "Cross-strait":16
                },
                {
                    "month": "二月",
                    "Africa": 17,
                    "Central and South America": 4,
                    "Europe": 34,
                    "USA and Canada":26,
                    "Asian":38,
                    "Cross-strait":19
                },
                {
                    "month": "三月",
                    "Africa": 27,
                    "Central and South America": 29,
                    "Europe": 43,
                    "USA and Canada":31,
                    "Asian":44,
                    "Cross-strait":8
                },
                {
                    "month": "四月",
                    "Africa": 23,
                    "Central and South America": 29,
                    "Europe": 35,
                    "USA and Canada":34,
                    "Asian":32,
                    "Cross-strait":4
                },
                {
                    "month": "五月",
                    "Africa": 31,
                    "Central and South America": 22,
                    "Europe": 23,
                    "USA and Canada":34,
                    "Asian":42,
                    "Cross-strait":5
                },
                {
                    "month": "六月",
                    "Africa": 18,
                    "Central and South America": 22,
                    "Europe": 42,
                    "USA and Canada":33,
                    "Asian":35,
                    "Cross-strait":6
                },
                {
                    "month": "七月",
                    "Africa": 15,
                    "Central and South America": 21,
                    "Europe": 40,
                    "USA and Canada":32,
                    "Asian":36,
                    "Cross-strait":7
                },
                {
                    "month": "八月",
                    "Africa": 21,
                    "Central and South America": 23,
                    "Europe": 43,
                    "USA and Canada":41,
                    "Asian":48,
                    "Cross-strait":3
                },
                {
                    "month": "九月",
                    "Africa": 18,
                    "Central and South America": 10,
                    "Europe": 37,
                    "USA and Canada":35,
                    "Asian":38,
                    "Cross-strait":3
                },
                {
                    "month": "十月",
                    "Africa": 16,
                    "Central and South America": 18,
                    "Europe": 37,
                    "USA and Canada":35,
                    "Asian":38,
                    "Cross-strait":1
                },
                {
                    "month": "十一月",
                    "Africa": 14,
                    "Central and South America": 24,
                    "Europe": 43,
                    "USA and Canada":39,
                    "Asian":44,
                    "Cross-strait":2
                },
                {
                    "month": "十二月",
                    "Africa": 24,
                    "Central and South America": 26,
                    "Europe": 24,
                    "USA and Canada":20,
                    "Asian":29,
                    "Cross-strait":1
                }
            ];


            AmCharts.ready(function () {
                // SERIAL CHART
                chart = new AmCharts.AmSerialChart();
                chart.dataProvider = chartData2;
                chart.categoryField = "month";
                chart.startDuration = 0.5;
                chart.balloon.color = "#000000";

                // AXES
                // category
                var categoryAxis = chart.categoryAxis;
                categoryAxis.fillAlpha = 1;
                categoryAxis.fillColor = "#FAFAFA";
                categoryAxis.gridAlpha = 0;
                categoryAxis.axisAlpha = 0;
                categoryAxis.gridPosition = "start";
                categoryAxis.position = "bottom";

                // value
                var valueAxis = new AmCharts.ValueAxis();
                valueAxis.title = "新聞數量";
                valueAxis.dashLength = 4;
                valueAxis.axisAlpha = 3;
                valueAxis.maximum = 62;
                valueAxis.minimum = 0;
                valueAxis.integersOnly = true;
                valueAxis.gridCount = 10;
                valueAxis.reversed =false; // this line makes the value axis reversed
                chart.addValueAxis(valueAxis);

                // GRAPHS

                // Cross-strait graph
                var graph = new AmCharts.AmGraph();
                graph.title = "Cross-strait 兩岸三地";
                graph.valueField = "Cross-strait";
                graph.balloonText = "<span style='font-size:14px'>兩岸三地 : [[value]]</span>";
                graph.lineAlpha = 1;
                graph.bullet = "round";
                chart.addGraph(graph);

                // Africa graph
                var graph = new AmCharts.AmGraph();
                graph.title = "Africa 非洲";
                graph.valueField = "Africa";
                graph.balloonText = "<span style='font-size:14px'>非洲 : [[value]]</span>";
                graph.lineAlpha = 1;
                graph.bullet = "round";
                chart.addGraph(graph);

                // Central and South America graph
                var graph = new AmCharts.AmGraph();
                graph.title = "Central and South America 中南美洲";
                graph.valueField = "Central and South America";
                graph.balloonText = "<span style='font-size:14px'>中南美洲 : [[value]]</span>";
                graph.bullet = "round";
                chart.addGraph(graph);

                // Europe graph
                var graph = new AmCharts.AmGraph();
                graph.title = "Europe 歐洲";
                graph.valueField = "Europe";
                graph.balloonText = "<span style='font-size:14px'>歐洲 : [[value]]</span>";
                graph.bullet = "round";
                chart.addGraph(graph);

                 // USA and Canada graph
                var graph = new AmCharts.AmGraph();
                graph.title = "North America 北美洲";
                graph.valueField = "USA and Canada";
                graph.balloonText = "<span style='font-size:14px'>北美洲 : [[value]]</span>";
                graph.lineAlpha = 1;
                graph.bullet = "round";
                chart.addGraph(graph);

                // Asian graph
                var graph = new AmCharts.AmGraph();
                graph.title = "Asian 亞洲";
                graph.valueField = "Asian";
                graph.balloonText = "<span style='font-size:14px'>亞洲 : [[value]]</span>";
                graph.lineAlpha = 1;
                graph.bullet = "round";
                chart.addGraph(graph);

                // CURSOR
                var chartCursor = new AmCharts.ChartCursor();
                chartCursor.cursorPosition = "mouse";
                chartCursor.zoomable = false;
                chartCursor.cursorAlpha = 0;
                chart.addChartCursor(chartCursor);

                // LEGEND
                var legend = new AmCharts.AmLegend();
                legend.useGraphSettings = true;
                chart.addLegend(legend);

                // WRITE
                chart.write("sixContinent");
                // chart.addTitle("六大區域新聞數量折線圖(from 2015.12.16 to 2016.12.21)");
                // chart.write("chartdiv");
            });