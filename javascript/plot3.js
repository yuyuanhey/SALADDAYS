var chart;
var plot3 = [
	{   
		"month":"一月",
		"United States of America":	1,
		"Japan":	5,
		"Belgium":	0,
		"France":	0,
		"United Kingdom":	3,
		"Germany":	3,
		"Brazil":	0,
		"China"	:13,
		"Canada":	1,
		"Syria":	2,
		"Taiwan"	:12,
		"Venezuela":	0,
		"Russia":	2,
		"Turkey":	3,
		"Philippines":	3,
		"North Korea":	3,
		"Australia":	3,
		"Colombia":	0,
		"Nigeria":	0,
		"Indonesia":	1,
		"Iraq":	4,
		"Italy":	0,
		"India":	1,
		"Mexico":	0,
		"Austria":	0,
		"Switzerland":	0,
		"Cuba":	0,
		"Egypt":	0,
		"Myanmar":	2,
		"Somalia":	0,
		"Spain":	1,
		"Greece":	0,
		"Libya":	0,
		"South Sudan":	0,
		"Afghanistan":	1,
		"Netherlands":	0,
		"Argentina":	0,
		"Haiti":	0,
		"Kenya":	0,
		"Pakistan":	3,
		"Peru":	0,
		"South Africa":	0,
		"Thailand":	0,
		"Vietnam":	1,
		"Iran":	3,
		"New Zealand":	0,
		"Panama":	0,
		"Ukraine":	1,
		"Yemen":	0,
		"Zimbabwe":	0,
},
	{
		"month":"二月",
		"United States of America"	:24,
		"Japan":	9,
		"Belgium":	7,
		"France":	4,
		"United Kingdom":	2,
		"Germany":	2,
		"Brazil":	1,
		"China":	8,
		"Canada":	2,
		"Syria":	7,
		"Taiwan":	8,
		"Venezuela":	0,
		"Russia":	3,
		"Turkey":	2,
		"Philippines":	2,
		"North Korea":	1,
		"Australia":	4,
		"Colombia":	0,
		"Nigeria":	4,
		"Indonesia":	1,
		"Iraq":	1,
		"Italy":	1,
		"India":	1,
		"Mexico":	0,
		"Austria":	2,
		"Switzerland":	6,
		"Cuba":	0,
		"Egypt":	0,
		"Myanmar":	2,
		"Somalia":	1,
		"Spain":	2,
		"Greece":	2,
		"Libya":	0,
		"South Sudan":	0,
		"Afghanistan":	1,
		"Netherlands":	1,
		"Argentina":	0,
		"Haiti":	0,
		"Kenya":	0,
		"Pakistan":	1,
		"Peru":	0,
		"South Africa":	1,
		"Thailand":	0,
		"Vietnam":	3,
		"Iran":	1,
		"New Zealand":	2,
		"Panama":	0,
		"Ukraine":	1,
		"Yemen":	0,
		"Zimbabwe":	0,
	},
	{
		"month":"三月",
		"United States of America"	:24,
		"Japan":	5,
		"Belgium"	:10,
		"France":	2,
		"United Kingdom":	2,
		"Germany":	6,
		"Brazil":	5,
		"China":	5,
		"Canada":	3,
		"Syria":	4,
		"Taiwan":	3,
		"Venezuela":	0,
		"Russia":	3,
		"Turkey":	3,
		"Philippines":	1,
		"North Korea":	6,
		"Australia":	5,
		"Colombia":	1,
		"Nigeria":	1,
		"Indonesia":	2,
		"Iraq":	0,
		"Italy":	0,
		"India":	0,
		"Mexico":	1,
		"Austria":	3,
		"Switzerland":	2,
		"Cuba":	1,
		"Egypt":	1,
		"Myanmar":	2,
		"Somalia":	3,
		"Spain":	1,
		"Greece":	1,
		"Libya":	0,
		"South Sudan":	0,
		"Afghanistan":	0,
		"Netherlands":	3,
		"Argentina":	3,
		"Haiti":	0,
		"Kenya":	0,
		"Pakistan":	1,
		"Peru":	2,
		"South Africa":	0,
		"Thailand":	0,
		"Vietnam":	1,
		"Iran":	3,
		"New Zealand":	1,
		"Panama":	0,
		"Ukraine":	0,
		"Yemen":	0,
		"Zimbabwe":	2,
	},
	{
		"month":"四月",
		"United States of America"	:25,
		"Japan"	:10,
		"Belgium"	:11,
		"France":	3,
		"United Kingdom":	4,
		"Germany":	3,
		"Brazil":	8,
		"China":	1,
		"Canada":	7,
		"Syria":	1,
		"Taiwan":	5,
		"Venezuela":	3,
		"Russia":	4,
		"Turkey":	2,
		"Philippines":	0,
		"North Korea":	1,
		"Australia":	3,
		"Colombia":	3,
		"Nigeria":	5,
		"Indonesia":	2,
		"Iraq":	1,
		"Italy":	1,
		"India":	1,
		"Mexico":	1,
		"Austria":	2,
		"Switzerland":	0,
		"Cuba":	4,
		"Egypt":	1,
		"Myanmar":	3,
		"Somalia":	0,
		"Spain":	0,
		"Greece":	4,
		"Libya":	1,
		"South Sudan":	0,
		"Afghanistan":	0,
		"Netherlands":	2,
		"Argentina":	4,
		"Haiti":	0,
		"Kenya":	1,
		"Pakistan":	1,
		"Peru":	1,
		"South Africa":	0,
		"Thailand":	0,
		"Vietnam":	1,
		"Iran":	0,
		"New Zealand":	1,
		"Panama":	4,
		"Ukraine":	2,
		"Yemen":	1,
		"Zimbabwe":	0,
		
	},
	{   "month":"五月",
		"United States of America": 29,
		"Japan":	4,
		"Belgium":	3,
		"France":	5,
		"United Kingdom":	4,
		"Germany":	7,
		"Brazil":	6,
		"China":	1,
		"Canada":	9,
		"Syria":	1,
		"Taiwan":	3,
		"Venezuela":	3,
		"Russia":	2,
		"Turkey":	2,
		"Philippines":	6,
		"North Korea":	6,
		"Australia":	4,
		"Colombia":	2,
		"Nigeria":	6,
		"Indonesia":	2,
		"Iraq":	6,
		"Italy":	1,
		"India":	3,
		"Mexico":	3,
		"Austria":	2,
		"Switzerland":	4,
		"Cuba":	0,
		"Egypt":	6,
		"Myanmar":	1,
		"Somalia":	0,
		"Spain":	2,
		"Greece":	1,
		"Libya":	1,
		"South Sudan":	3,
		"Afghanistan":	1,
		"Netherlands":	2,
		"Argentina":	0,
		"Haiti":	0,
		"Kenya":	5,
		"Pakistan":	0,
		"Peru":	0,
		"South Africa":	1,
		"Thailand":	1,
		"Vietnam":	0,
		"Iran":	0,
		"New Zealand":	0,
		"Panama":	2,
		"Ukraine":	0,
		"Yemen":	3,
		"Zimbabwe":	1,
		
	},
	{   "month":"六月",
		"United States of America"	:26,
		"Japan":	7,
		"Belgium":	5,
		"France"	:10,
		"United Kingdom":	7,
		"Germany":	1,
		"Brazil":	7,
		"China":	4,
		"Canada":	2,
		"Syria":	2,
		"Taiwan":	2,
		"Venezuela":	6,
		"Russia":	0,
		"Turkey":	4,
		"Philippines":	2,
		"North Korea":	1,
		"Australia":	1,
		"Colombia":	0,
		"Nigeria":	1,
		"Indonesia":	2,
		"Iraq":	0,
		"Italy":	0,
		"India":	0,
		"Mexico":	0,
		"Austria":	1,
		"Switzerland":	2,
		"Cuba":	2,
		"Egypt":	1,
		"Myanmar":	1,
		"Somalia":	1,
		"Spain":	0,
		"Greece":	4,
		"Libya":	4,
		"South Sudan":	0,
		"Afghanistan":	0,
		"Netherlands":	0,
		"Argentina":	1,
		"Haiti":	1,
		"Kenya":	1,
		"Pakistan":	1,
		"Peru":	4,
		"South Africa":	2,
		"Thailand":	0,
		"Vietnam":	2,
		"Iran":	1,
		"New Zealand":	0,
		"Panama":	0,
		"Ukraine":	0,
		"Yemen":	0,
		"Zimbabwe":	0,
		
	},
	{
		"month":"七月",
		"United States of America"	:31,
		"Japan":	5,
		"Belgium":	0,
		"France":	3,
		"United Kingdom"	:19,
		"Germany":	4,
		"Brazil":	5,
		"China":	3,
		"Canada":	3,
		"Syria":	4,
		"Taiwan":	2,
		"Venezuela":	7,
		"Russia":	0,
		"Turkey":	6,
		"Philippines":	1,
		"North Korea":	2,
		"Australia":	2,
		"Colombia":	2,
		"Nigeria":	3,
		"Indonesia":	4,
		"Iraq":	5,
		"Italy":	3,
		"India":	2,
		"Mexico":	1,
		"Austria":	0,
		"Switzerland":	0,
		"Cuba":	0,
		"Egypt":	1,
		"Myanmar":	1,
		"Somalia":	2,
		"Spain":	1,
		"Greece":	0,
		"Libya":	0,
		"South Sudan":	5,
		"Afghanistan":	0,
		"Netherlands":	2,
		"Argentina":	1,
		"Haiti":	0,
		"Kenya":	1,
		"Pakistan":	0,
		"Peru":	0,
		"South Africa":	1,
		"Thailand":	0,
		"Vietnam":	0,
		"Iran":	0,
		"New Zealand":	0,
		"Panama":	1,
		"Ukraine":	0,
		"Yemen":	1,
		"Zimbabwe":	0,
		
	},
	{
		"month":"八月",
		"United States of America"	:39,
		"Japan":	9,
		"Belgium":	5,
		"France":	7,
		"United Kingdom":	7,
		"Germany"	:10,
		"Brazil":	5,
		"China":	4,
		"Canada":	1,
		"Syria":	4,
		"Taiwan":	1,
		"Venezuela":	4,
		"Russia":	3,
		"Turkey":	5,
		"Philippines":	5,
		"North Korea":	2,
		"Australia":	1,
		"Colombia":	2,
		"Nigeria":	0,
		"Indonesia":	2,
		"Iraq":	0,
		"Italy":	0,
		"India":	2,
		"Mexico":	6,
		"Austria":	2,
		"Switzerland":	1,
		"Cuba":	1,
		"Egypt":	0,
		"Myanmar":	0,
		"Somalia":	1,
		"Spain":	2,
		"Greece":	0,
		"Libya":	4,
		"South Sudan":	2,
		"Afghanistan":	3,
		"Netherlands":	1,
		"Argentina":	2,
		"Haiti":	1,
		"Kenya":	0,
		"Pakistan":	1,
		"Peru":	2,
		"South Africa":	2,
		"Thailand":	2,
		"Vietnam":	0,
		"Iran":	1,
		"New Zealand":	0,
		"Panama":	1,
		"Ukraine":	2,
		"Yemen":	1,
		"Zimbabwe":	0,
		
	},
	{
		"month":"九月",
		"United States of America"	:35,
		"Japan":	4,
		"Belgium":	2,
		"France"	:13,
		"United Kingdom":	1,
		"Germany":	6,
		"Brazil":	6,
		"China":	1,
		"Canada":	2,
		"Syria":	9,
		"Taiwan":	1,
		"Venezuela":	1,
		"Russia":	1,
		"Turkey":	4,
		"Philippines":	2,
		"North Korea":	4,
		"Australia":	2,
		"Colombia":	4,
		"Nigeria":	1,
		"Indonesia":	0,
		"Iraq":	0,
		"Italy":	5,
		"India":	0,
		"Mexico":	3,
		"Austria":	1,
		"Switzerland":	0,
		"Cuba":	0,
		"Egypt":	0,
		"Myanmar":	2,
		"Somalia":	1,
		"Spain":	4,
		"Greece":	1,
		"Libya":	1,
		"South Sudan":	0,
		"Afghanistan":	2,
		"Netherlands":	0,
		"Argentina":	1,
		"Haiti":	0,
		"Kenya":	1,
		"Pakistan":	0,
		"Peru":	0,
		"South Africa":	1,
		"Thailand":	2,
		"Vietnam":	0,
		"Iran":	0,
		"New Zealand":	0,
		"Panama":	0,
		"Ukraine":	0,
		"Yemen":	1,
		"Zimbabwe":	2,
	
	},
	
	{
    	"month":"十月",
      	"United States of America"	:34,
		"Japan":	3,
		"Belgium":	5,
		"France":	5,
		"United Kingdom":	3,
		"Germany":	5,
		"Brazil":	1,
		"China":	0,
		"Canada":	1,
		"Syria":	1,
		"Taiwan":	0,
		"Venezuela":	1,
		"Russia":	6,
		"Turkey":	0,
		"Philippines":	4,
		"North Korea":	2,
		"Australia":	2,
		"Colombia":	5,
		"Nigeria":	1,
		"Indonesia":	2,
		"Iraq":	1,
		"Italy":	2,
		"India":	4,
		"Mexico":	1,
		"Austria":	0,
		"Switzerland":	0,
		"Cuba":	2,
		"Egypt":	1,
		"Myanmar":	0,
		"Somalia":	3,
		"Spain":	1,
		"Greece":	1,
		"Libya":	0,
		"South Sudan":	0,
		"Afghanistan":	4,
		"Netherlands":	0,
		"Argentina":	0,
		"Haiti":	6,
		"Kenya":	0,
		"Pakistan":	2,
		"Peru":	0,
		"South Africa":	0,
		"Thailand":	2,
		"Vietnam":	0,
		"Iran":	0,
		"New Zealand":	0,
		"Panama":	0,
		"Ukraine":	0,
		"Yemen":	0,
		"Zimbabwe":	0,
		
    },
    {
    	"month":"十一月",
        "United States of America":	33,
		"Japan":	12,
		"Belgium":	10,
		"France":	3,
		"United Kingdom":	5,
		"Germany":	7,
		"Brazil":	5,
		"China":	0,
		"Canada":	4,
		"Syria":	2,
		"Taiwan":	0,
		"Venezuela":	5,
		"Russia":	8,
		"Turkey":	0,
		"Philippines":	1,
		"North Korea":	1,
		"Australia":	2,
		"Colombia":	2,
		"Nigeria":	3,
		"Indonesia":	1,
		"Iraq":	3,
		"Italy":	3,
		"India":	3,
		"Mexico":	1,
		"Austria":	0,
		"Switzerland":	0,
		"Cuba":	2,
		"Egypt":	1,
		"Myanmar":	0,
		"Somalia":	1,
		"Spain":	1,
		"Greece":	0,
		"Libya":	2,
		"South Sudan":	1,
		"Afghanistan":	1,
		"Netherlands":	0,
		"Argentina":	0,
		"Haiti":	0,
		"Kenya":	2,
		"Pakistan":	2,
		"Peru":	1,
		"South Africa":	3,
		"Thailand":	1,
		"Vietnam":	1,
		"Iran":	0,
		"New Zealand":	2,
		"Panama":	0,
		"Ukraine":	0,
		"Yemen":	0,
		"Zimbabwe":	0,
		
    },
    {
    	"month":"十二月",
    	"United States of America": 29,
		"Japan	" :12,
		"Belgium"	:7,
		"France"	:7,
		"United Kingdom"	:6,
		"Germany"	:5,
		"Brazil"	:7,
		"China"	:1,
		"Canada"	:6,
		"Syria"	:3,
		"Taiwan"	:0,
		"Venezuela"	:5,
		"Russia"	:2,
		"Turkey"	:3,
		"Philippines"	:5,
		"North Korea"	:2,
		"Australia"	:1,
		"Colombia"	:7,
		"Nigeria"	:3,
		"Indonesia"	:2,
		"Iraq"	:0,
		"Italy"	:5,
		"India"	:2,
		"Mexico"	:1,
		"Austria"	:1,
		"Switzerland"	:1,
		"Cuba"	:5,
		"Egypt"	:1,
		"Myanmar"	:1,
		"Somalia"	:2,
		"Spain"	:0,
		"Greece"	:0,
		"Libya"	:1,
		"South Sudan"	:2,
		"Afghanistan"	:0,
		"Netherlands"	:1,
		"Argentina"	:0,
		"Haiti"	:4,
		"Kenya"	:1,
		"Pakistan"	:0,
		"Peru"	:1,
		"South Africa"	:1,
		"Thailand"	:3,
		"Vietnam"	:1,
		"Iran"	:0,
		"New Zealand"	:2,
		"Panama"	:0,
		"Ukraine"	:2,
		"Yemen"	:1,
		"Zimbabwe"	:3,
		
    },
 
];
AmCharts.ready(function () {
    // SERIAL CHART
    chart = new AmCharts.AmSerialChart();
    chart.dataProvider = plot3;
    chart.categoryField = "month";
    chart.startDuration = 0;
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
    valueAxis.title = "國際新聞數量";
    valueAxis.dashLength = 4;
    valueAxis.axisAlpha = 3;
    valueAxis.maximum = 50;
    valueAxis.minimum = 0;
    valueAxis.integersOnly = true;
    valueAxis.gridCount = 10;
    valueAxis.reversed =false;
    chart.addValueAxis(valueAxis);
   
    //  

//北美
// United States of America graph
    var graph = new AmCharts.AmGraph();
    graph.title = "美國";
    graph.valueField = "United States of America";
    graph.balloonText = "[[title]]: [[value]]";
    graph.lineAlpha = 1;
    graph.bullet = "round";
    graph.lineColor = "#0003C5";
    chart.addGraph(graph);
// Canada graph
    var graph = new AmCharts.AmGraph();
    graph.title = "加拿大";
    graph.valueField = "Canada";
    graph.hidden = true; 
    graph.balloonText = "[[title]]: [[value]]";
    graph.lineAlpha = 1;
    graph.bullet = "round";
    graph.lineColor = "#0A0EF4";
    chart.addGraph(graph);

//中南美
//Argentina graph 
	var graph = new AmCharts.AmGraph(); 
	graph.title ="阿根廷";  
	graph.valueField = "Argentina"; 
	graph.hidden = true;  
	graph.balloonText = "[[title]]: [[value]]"; 
	graph.lineAlpha = 1; 
	graph.bullet = "round";
	graph.lineColor = "#FAFAA0"; 
	chart.addGraph(graph);
// Brazil graph
    var graph = new AmCharts.AmGraph();
    graph.title = "巴西";
    graph.valueField = "Brazil";
    graph.hidden = true; 
    graph.balloonText = "[[title]]: [[value]]";
    graph.lineAlpha = 1;
    graph.bullet = "round";
    graph.lineColor = "#FFF064";
    chart.addGraph(graph);
// Venezuela graph
    var graph = new AmCharts.AmGraph();
    graph.title = "委內瑞拉";
    graph.valueField = "Venezuela";
    graph.hidden = true; 
    graph.balloonText = "[[title]]: [[value]]";
    graph.lineAlpha = 1;
    graph.bullet = "round";
    graph.lineColor = "#FFE146";
    chart.addGraph(graph);
//Mexico graph
    var graph = new AmCharts.AmGraph();
    graph.title = "墨西哥";
    graph.valueField = "Mexico";
    graph.hidden = true;
    graph.balloonText = "[[title]]: [[value]]";
    graph.lineAlpha = 1;
    graph.bullet = "round";
    graph.lineColor = "#FFCD28";
    chart.addGraph(graph);
//Cuba graph 
	var graph = new AmCharts.AmGraph(); 
	graph.title ="古巴";  
	graph.valueField = "Cuba"; 
	graph.hidden = true; 
	graph.balloonText = "[[title]]: [[value]]"; 
	graph.lineAlpha = 1; 
	graph.bullet = "round";
	graph.lineColor = "#FFB900"; 
	chart.addGraph(graph);
//Colombia graph
    var graph = new AmCharts.AmGraph();
    graph.title = "­哥倫比亞";
    graph.valueField = "Colombia";
    graph.hidden = true; 
    graph.balloonText = "[[title]]: [[value]]";
    graph.lineAlpha = 1;
    graph.bullet = "round";
    graph.lineColor = "#FFAA28";
    chart.addGraph(graph);
//Haiti graph 
	var graph = new AmCharts.AmGraph(); 
	graph.title ="海地";  
	graph.valueField = "Haiti"; 
	graph.hidden = true; 
	graph.balloonText = "[[title]]: [[value]]"; 
	graph.lineAlpha = 1; 
	graph.bullet = "round";
	graph.lineColor = "#FF8200"; 
	chart.addGraph(graph);
//Peru graph 
	var graph = new AmCharts.AmGraph(); 
	graph.title ="祕魯";  
	graph.valueField = "Peru"; 
	graph.hidden = true; 
	graph.balloonText = "[[title]]: [[value]]"; 
	graph.lineAlpha = 1; 
	graph.bullet = "round";
	graph.lineColor = "#FF7F50"; 
	chart.addGraph(graph);
//Panama graph 
	var graph = new AmCharts.AmGraph(); 
	graph.title ="巴拿馬";  
	graph.valueField = "Panama"; 
	graph.hidden = true; 
	graph.balloonText = "[[title]]: [[value]]"; 
	graph.lineAlpha = 1; 
	graph.bullet = "round";
	graph.lineColor = "#D2691E"; 
	chart.addGraph(graph);

//歐洲
//Spain graph 
	var graph = new AmCharts.AmGraph(); 
	graph.title ="西班牙";  
	graph.valueField = "Spain"; 
	graph.hidden = true; 
	graph.balloonText = "[[title]]: [[value]]"; 
	graph.lineAlpha = 1; 
	graph.bullet = "round";
	graph.lineColor = "#D2FFD2"; 
	chart.addGraph(graph);
// Belgium graph
    var graph = new AmCharts.AmGraph();
    graph.title = "比利時";
    graph.valueField = "Belgium";
    graph.balloonText = "[[title]]: [[value]]";
    graph.lineAlpha = 1;
    graph.bullet = "round";
    graph.lineColor = "#65FFBA";
    chart.addGraph(graph);
//France graph
    var graph = new AmCharts.AmGraph();
    graph.title = "法國";
    graph.valueField = "France";
    graph.balloonText = "[[title]]: [[value]]";
    graph.lineAlpha = 1;
    graph.bullet = "round";
    graph.lineColor = "#7DEEBC";
    chart.addGraph(graph);
// United Kingdom graph
    var graph = new AmCharts.AmGraph();
    graph.title = "­英國";
    graph.valueField = "United Kingdom";
    graph.balloonText = "[[title]]: [[value]]";
    graph.lineAlpha = 1;
    graph.bullet = "round";
    graph.lineColor = "#8EE1D2";
    chart.addGraph(graph);
// Germany graph
    var graph = new AmCharts.AmGraph();
    graph.title = "德國";
    graph.valueField = "Germany";
    graph.hidden = true; 
    graph.balloonText = "[[title]]: [[value]]";
    graph.lineAlpha = 1;
    graph.bullet = "round";
    graph.lineColor = "#A8F552";
    chart.addGraph(graph);
// Russia graph
    var graph = new AmCharts.AmGraph();
    graph.title = "俄羅斯";
    graph.valueField = "Russia";
    graph.hidden = true; 
    graph.balloonText = "[[title]]: [[value]]";
    graph.lineAlpha = 1;
    graph.bullet = "round";
    graph.lineColor = "#7AF67A";
    chart.addGraph(graph);
//Italy graph
    var graph = new AmCharts.AmGraph();
    graph.title = "義大利";
    graph.valueField = "Italy";
    graph.hidden = true;
    graph.balloonText = "[[title]]: [[value]]";
    graph.lineAlpha = 1;
    graph.bullet = "round";
    graph.lineColor = "#64DB99";
    chart.addGraph(graph);
//Greece graph 
	var graph = new AmCharts.AmGraph(); 
	graph.title ="希臘";  
	graph.valueField = "Greece"; 
	graph.hidden = true; 
	graph.balloonText = "[[title]]: [[value]]"; 
	graph.lineAlpha = 1; 
	graph.bullet = "round";
	graph.lineColor = "#56B37F"; 
	chart.addGraph(graph);
//Austria graph  
    var graph = new AmCharts.AmGraph(); 
    graph.title ="奧地利";  
    graph.valueField = "Austria"; 
    graph.hidden = true;
    graph.balloonText = "[[title]]: [[value]]"; 
    graph.lineAlpha = 1; 
    graph.bullet = "round";
    graph.lineColor = "#4AB34A"; 
    chart.addGraph(graph);
//witzerland graph 
	var graph = new AmCharts.AmGraph(); 
	graph.title ="瑞士";  
	graph.valueField = "witzerland"; 
	graph.hidden = true; 
	graph.balloonText = "[[title]]: [[value]]"; 
	graph.lineAlpha = 1; 
	graph.bullet = "round";
	graph.lineColor = "#288C28"; 
	chart.addGraph(graph);
//Ukraine graph 
	var graph = new AmCharts.AmGraph(); 
	graph.title ="烏克蘭";  
	graph.valueField = "Ukraine"; 
	graph.hidden = true; 
	graph.balloonText = "[[title]]: [[value]]"; 
	graph.lineAlpha = 1; 
	graph.bullet = "round";
	graph.lineColor = "#28B4B4"; 
	chart.addGraph(graph);
//Netherlands graph 
	var graph = new AmCharts.AmGraph(); 
	graph.title ="荷蘭";  
	graph.valueField = "Netherlands"; 
	graph.hidden = true; 
	graph.balloonText = "[[title]]: [[value]]"; 
	graph.lineAlpha = 1; 
	graph.bullet = "round";
	graph.lineColor = "#008080"; 
	chart.addGraph(graph);

//亞洲
//Thailand graph 
	var graph = new AmCharts.AmGraph(); 
	graph.title ="泰國";  
	graph.valueField = "Thailand"; 
	graph.hidden = true; // this line makes the graph initially hidden  
	graph.balloonText = "[[title]]: [[value]]"; 
	graph.lineAlpha = 1; 
	graph.bullet = "round";
	graph.lineColor = "#5400C5"; 
	chart.addGraph(graph);
//Afghanistan graph 
	var graph = new AmCharts.AmGraph(); 
	graph.title ="阿富汗";  
	graph.valueField = "Afghanistan"; 
	graph.hidden = true; // this line makes the graph initially hidden  
	graph.balloonText = "[[title]]: [[value]]"; 
	graph.lineAlpha = 1; 
	graph.bullet = "round";
	graph.lineColor = "#8000C5"; 
	chart.addGraph(graph);	
// Japan graph
    var graph = new AmCharts.AmGraph();
    graph.title = "日本";
    graph.valueField = "Japan";
	graph.balloonText = "[[title]]: [[value]]";
    graph.lineAlpha = 1;
    graph.bullet = "round";
    graph.lineColor = "#9500C5";
    chart.addGraph(graph);
// Syria graph
    var graph = new AmCharts.AmGraph();
    graph.title = "敘利亞";
    graph.valueField = "Syria";
    graph.hidden = true; // this line makes the graph initially hidden
    graph.balloonText = "[[title]]: [[value]]";
    graph.lineAlpha = 1;
    graph.bullet = "round";
    graph.lineColor = "#B300C5";
    chart.addGraph(graph);
// Turkey graph
    var graph = new AmCharts.AmGraph();
    graph.title = "土耳其";
    graph.valueField = "Turkey";
    graph.hidden = true; // this line makes the graph initially hidden
    graph.balloonText = "[[title]]: [[value]]";
    graph.lineAlpha = 1;
    graph.bullet = "round";
    graph.lineColor = "#EE38EB";
    chart.addGraph(graph);
// North Korea graph
    var graph = new AmCharts.AmGraph();
    graph.title = "北韓";
    graph.valueField = "North Korea";
    graph.hidden = true; // this line makes the graph initially hidden
    graph.balloonText = "[[title]]: [[value]]";
    graph.lineAlpha = 1;
    graph.bullet = "round";
    graph.lineColor = "#EE38CD";
    chart.addGraph(graph);
//Vietnam graph 
	var graph = new AmCharts.AmGraph(); 
	graph.title ="越南";  
	graph.valueField = "Vietnam"; 
	graph.hidden = true; // this line makes the graph initially hidden  
	graph.balloonText = "[[title]]: [[value]]"; 
	graph.lineAlpha = 1; 
	graph.bullet = "round";
	graph.lineColor = "#EE38AF"; 
	chart.addGraph(graph);
//India graph
    var graph = new AmCharts.AmGraph();
    graph.title = "印度";
    graph.valueField = "India";
    graph.hidden = true; // this line makes the graph initially hidden
    graph.balloonText = "[[title]]: [[value]]";
    graph.lineAlpha = 1;
    graph.bullet = "round";
    graph.lineColor = "#EE3880";
    chart.addGraph(graph);
//Libya graph 
	var graph = new AmCharts.AmGraph(); 
	graph.title ="利比亞";  
	graph.valueField = "Libya"; 
	graph.hidden = true; // this line makes the graph initially hidden  
	graph.balloonText = "[[title]]: [[value]]"; 
	graph.lineAlpha = 1; 
	graph.bullet = "round";
	graph.lineColor = "#EE3856"; 
	chart.addGraph(graph);
// Philippines graph
    var graph = new AmCharts.AmGraph();
    graph.title = "菲律賓";
    graph.valueField = "Philippines";
    graph.hidden = true; // this line makes the graph initially hidden
    graph.balloonText = "[[title]]: [[value]]";
    graph.lineAlpha = 1;
    graph.bullet = "round";
    graph.lineColor = "#EE3838";
    chart.addGraph(graph);
//Indonesia graph
    var graph = new AmCharts.AmGraph();
    graph.title = "印尼";
    graph.valueField = "Indonesia";
    graph.hidden = true; // this line makes the graph initially hidden
    graph.balloonText = "[[title]]: [[value]]";
    graph.lineAlpha = 1;
    graph.bullet = "round";
    graph.lineColor = "#F96E6E";
    chart.addGraph(graph);
//Iraq graph
    var graph = new AmCharts.AmGraph();
    graph.title = "伊拉克";
    graph.valueField = "Iraq";
    graph.hidden = true; // this line makes the graph initially hidden
    graph.balloonText = "[[title]]: [[value]]";
    graph.lineAlpha = 1;
    graph.bullet = "round";
    graph.lineColor = "#F96EA9";
    chart.addGraph(graph);
//Myanmar graph 
	var graph = new AmCharts.AmGraph(); 
	graph.title ="緬甸";  
	graph.valueField = "Myanmar"; 
	graph.hidden = true; // this line makes the graph initially hidden  
	graph.balloonText = "[[title]]: [[value]]"; 
	graph.lineAlpha = 1; 
	graph.bullet = "round";
	graph.lineColor = "#F96EC9"; 
	chart.addGraph(graph);
//Iran graph 
	var graph = new AmCharts.AmGraph(); 
	graph.title ="伊朗";  
	graph.valueField = "Iran"; 
	graph.hidden = true; // this line makes the graph initially hidden  
	graph.balloonText = "[[title]]: [[value]]"; 
	graph.lineAlpha = 1; 
	graph.bullet = "round";
	graph.lineColor = "#F96EEA"; 
	chart.addGraph(graph);
//Pakistan graph 
	var graph = new AmCharts.AmGraph(); 
	graph.title ="巴基斯坦";  
	graph.valueField = "Pakistan"; 
	graph.hidden = true; // this line makes the graph initially hidden  
	graph.balloonText = "[[title]]: [[value]]"; 
	graph.lineAlpha = 1; 
	graph.bullet = "round";
	graph.lineColor = "#EC6EF9"; 
	chart.addGraph(graph);
//New Zealand graph 
	var graph = new AmCharts.AmGraph(); 
	graph.title ="紐西蘭";  
	graph.valueField = "New Zealand"; 
	graph.hidden = true; // this line makes the graph initially hidden  
	graph.balloonText = "[[title]]: [[value]]"; 
	graph.lineAlpha = 1; 
	graph.bullet = "round";
	graph.lineColor = "#C96EF9"; 
	chart.addGraph(graph);
//Australia graph
    var graph = new AmCharts.AmGraph();
    graph.title = "澳洲";
    graph.valueField = "Australia";
    graph.hidden = true; // this line makes the graph initially hidden
    graph.balloonText = "[[title]]: [[value]]";
    graph.lineAlpha = 1;
    graph.bullet = "round";
    graph.lineColor = "#AD6EF9";
    chart.addGraph(graph);

//非洲
//Nigeria graph
    var graph = new AmCharts.AmGraph();
    graph.title = "奈及利亞";
    graph.valueField = "Nigeria";
    graph.hidden = true; // this line makes the graph initially hidden
    graph.balloonText = "[[title]]: [[value]]";
    graph.lineAlpha = 1;
    graph.bullet = "round";
    graph.lineColor = "#6EF9E2";
    chart.addGraph(graph);
//Egypt graph 
	var graph = new AmCharts.AmGraph(); 
	graph.title ="埃及";  
	graph.valueField = "Egypt"; 
	graph.hidden = true; // this line makes the graph initially hidden  
	graph.balloonText = "[[title]]: [[value]]"; 
	graph.lineAlpha = 1; 
	graph.bullet = "round";
	graph.lineColor = "#0CF9D1"; 
	chart.addGraph(graph);
//Somalia graph 
	var graph = new AmCharts.AmGraph(); 
	graph.title ="索馬利亞";  
	graph.valueField = "Somalia"; 
	graph.hidden = true; // this line makes the graph initially hidden  
	graph.balloonText = "[[title]]: [[value]]"; 
	graph.lineAlpha = 1; 
	graph.bullet = "round";
	graph.lineColor = "#0CF5F9"; 
	chart.addGraph(graph);
//Zimbabwe graph 
	var graph = new AmCharts.AmGraph(); 
	graph.title ="辛巴威";  
	graph.valueField = "Zimbabwe"; 
	graph.hidden = true; // this line makes the graph initially hidden  
	graph.balloonText = "[[title]]: [[value]]"; 
	graph.lineAlpha = 1; 
	graph.bullet = "round";
	graph.lineColor = "#0CD5F9"; 
	chart.addGraph(graph);
//South Sudan graph 
	var graph = new AmCharts.AmGraph(); 
	graph.title ="南蘇丹";  
	graph.valueField = "South Sudan"; 
	graph.hidden = true; // this line makes the graph initially hidden  
	graph.balloonText = "[[title]]: [[value]]"; 
	graph.lineAlpha = 1; 
	graph.bullet = "round";
	graph.lineColor = "#0CBCF9"; 
	chart.addGraph(graph);	
//South Africa graph 
	var graph = new AmCharts.AmGraph(); 
	graph.title ="南非";  
	graph.valueField = "South Africa"; 
	graph.hidden = true; // this line makes the graph initially hidden  
	graph.balloonText = "[[title]]: [[value]]"; 
	graph.lineAlpha = 1; 
	graph.bullet = "round";
	graph.lineColor = "#0CA3F9"; 
	chart.addGraph(graph);
//Kenya graph 
	var graph = new AmCharts.AmGraph(); 
	graph.title ="肯亞";  
	graph.valueField = "Kenya"; 
	graph.hidden = true; // this line makes the graph initially hidden  
	graph.balloonText = "[[title]]: [[value]]"; 
	graph.lineAlpha = 1; 
	graph.bullet = "round";
	graph.lineColor = "#0C86F9"; 
	chart.addGraph(graph);
//Yemen graph 
	var graph = new AmCharts.AmGraph(); 
	graph.title ="葉門";  
	graph.valueField = "Yemen"; 
	graph.hidden = true; // this line makes the graph initially hidden  
	graph.balloonText = "[[title]]: [[value]]"; 
	graph.lineAlpha = 1; 
	graph.bullet = "round";
	graph.lineColor = "#5AB2FB"; 
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
    chart.write("plot3");
});
 //