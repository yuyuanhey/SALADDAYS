var test1 = {"test": [{
    "country": "Afghanistan",
    "code": "AFG",
    "count": 1
  }]};
var color = ["rgba(255, 0, 0, 1)", "rgba(255, 0, 0, 0.7)", "rgba(255, 0, 0, 0.5)", "rgba(255, 0, 0, 0.3)", "rgba(255, 0, 0, 0.1)"]
var basic_choropleth = new Datamap({
		element: document.getElementById("container"),
	  // projection: 'mercator',
		fills: {
	  	defaultFill: color[4],
	  	authorHasTraveledTo: color[1],
	  	try: "#ccc"
		},
		data: {
			AFG: { fillKey: "defaultFill"},
			ALB: { fillKey: "defaultFill"},
			DZA: { fillKey: "defaultFill"},
			AND: { fillKey: "defaultFill"},
			AGO: { fillKey: "authorHasTraveledTo"},
			ARG: { fillKey: "authorHasTraveledTo"},
			ARM: { fillKey: "authorHasTraveledTo"},
			AIA: { fillKey: "authorHasTraveledTo"},
			AUS: { fillKey: "authorHasTraveledTo"},
			AZE: { fillKey: "authorHasTraveledTo"},
			BHS: { fillKey: "authorHasTraveledTo"},
			BHR: { fillKey: "authorHasTraveledTo"}

			/*d : {fillKey : "try"}
			USA: { fillKey: "authorHasTraveledTo" },
			JPN: { fillKey: "authorHasTraveledTo" },
			ITA: { fillKey: "authorHasTraveledTo" },
			CRI: { fillKey: "authorHasTraveledTo" },
			KOR: { fillKey: "authorHasTraveledTo" },
			DEU: { fillKey: "authorHasTraveledTo" },
			KOR: { fillKey: "authorHasTraveledTo"}
	    // GER: { fillKey: "try" },*/
    	}
}); 
// var width = 1024;
// var height = 768;
// var ctrl = d3.select("body").append("svg").attr("width", width).attr("height", height);
// // d3.csv("testWorld.csv",
// //       function(d) { 
// //       	//console.log(data.Var1);
//       	//country, chinese, code, count
//       	//console.log(data[1].Freq)
//       	//console.log(data[1].Var1)
// });

/*d3.csv("./HistoricalQuotes.csv", 
	function(data)
	{
		var ln = data.length;
		console.log(data);
		var maxy = d3.max(data, function(d){ return d.close; });
		var lines = d3.line().x(function(d,i){return i*(width/ln);}).y(function(d){return height-d.close*(height/maxy)});
		ctrl.append("path").attr("d", function(d){
			return "M0,"+height+"L"+width+","+height;
		}).attr("stroke", "black").attr("fill", "none");
		ctrl.append("path").attr("d", function(d){
			return "M0,0"+"L0,"+height;
		}).attr("stroke", "black").attr("fill", "none");
		ctrl.append("path").data([data]).attr("d", lines).attr("stroke", "red").attr("fill", "none");
		var x = d3.scaleTime().range([0, width]);
		var y = d3.scaleLinear().range([height, 0]);	
		x.domain(d3.extent(data, function(d) { return d.date; }));
		y.domain([0, maxy]);
		ctrl.append("g")
      	.attr("transform", "translate(0," + height + ")")
      	.call(d3.axisBottom(x));
  		ctrl.append("g")
      	.call(d3.axisLeft(y));
	}
);*/
